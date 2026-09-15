#!/usr/bin/env python3
"""
scraper.py — Scarica l'orario da AgendaStudentiUnipd (EasyStaff)
e lo salva come orario/orario.json

Variabili d'ambiente richieste:
  UNIPD_AA      Anno accademico (es. 2025 per 2025/26)
  UNIPD_CORSO   Codice corso (es. SC2987 per Informatica Triennale)
  UNIPD_ANNO2   Anno di corso, separati da virgola (es. 1,2,3)

Opzionali:
  UNIPD_DATA    Data nel formato DD-MM-YYYY (default: lunedì della settimana corrente)

API scoperte tramite reverse-engineering di EasyStaff:
  - combo.php?sw=ec_&aa=1            → anni accademici disponibili
  - combo.php?sw=ec_&aa={id}&page=corsi → lista corsi dell'AA
  - grid_call.php?...                → dati orario (griglia)
"""

import os
import json
import re
import sys
import ssl
import urllib.request
import urllib.parse
from datetime import datetime, timedelta

BASE_URL = "https://agendastudentiunipd.easystaff.it"
OUTPUT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "orario.json")

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; slapomarda-orario-bot/1.0)",
    "Accept": "application/json, */*",
    "Referer": f"{BASE_URL}/index.php?view=easycourse&_lang=it&include=corso",
    "X-Requested-With": "XMLHttpRequest",
}


def make_ssl_ctx():
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    return ctx


def fetch(url: str, ctx) -> str:
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, context=ctx, timeout=30) as r:
        return r.read().decode("utf-8", errors="replace")


def get_anni_accademici(ctx) -> list:
    """Ritorna lista di anni accademici: [{"label": "2025/2026", "valore": "2025"}, ...]"""
    url = f"{BASE_URL}/combo.php?sw=ec_&aa=1&_lang=it"
    body = fetch(url, ctx)
    m = re.search(r"var anni_accademici_ec\s*=\s*(\{.*?\});", body, re.DOTALL)
    if not m:
        raise ValueError("Impossibile trovare anni_accademici_ec nella risposta")
    data = json.loads(m.group(1))
    result = []
    for v in data.values():
        result.append({"label": v["label"].replace("\\/", "/"), "valore": v["valore"]})
    result.sort(key=lambda x: x["valore"], reverse=True)
    return result


def get_corsi(aa_id: str, ctx) -> list:
    """Ritorna lista corsi per l'anno accademico dato."""
    url = f"{BASE_URL}/combo.php?sw=ec_&aa={urllib.parse.quote(aa_id)}&page=corsi&_lang=it"
    body = fetch(url, ctx)
    m = re.search(r"var elenco_corsi\s*=\s*(\[.*?\]);", body, re.DOTALL)
    if not m:
        raise ValueError("Impossibile trovare elenco_corsi nella risposta")
    corsi = json.loads(m.group(1))
    return [
        {
            "label": c.get("label", ""),
            "valore": c.get("valore", ""),
            "tipo": c.get("tipo", ""),
            "scuola": c.get("scuola", ""),
            "pub_periodi": c.get("pub_periodi", []),
        }
        for c in corsi
    ]


def get_schedule(aa_id: str, corso_id: str, anni2: list, date_str: str, ctx) -> dict:
    """
    Chiama grid_call.php e ritorna il JSON grezzo dell'orario.
    date_str: DD-MM-YYYY
    """
    params = [
        ("view", "easycourse"),
        ("include", "corso"),
        ("_lang", "it"),
        ("anno", aa_id),
        ("corso", corso_id),
        ("visualizzazione_orario", "cal"),
        ("data", date_str),
    ]
    for a in anni2:
        params.append(("anno2[]", a))

    query = urllib.parse.urlencode(params)
    url = f"{BASE_URL}/grid_call.php?{query}"
    body = fetch(url, ctx)
    return json.loads(body)


def normalize_schedule(raw: dict, aa_label: str, corso_label: str, anni2_labels: list) -> dict:
    """
    Trasforma la risposta grezza di grid_call.php nel formato JSON pulito
    usato dalla web app /orario.
    """
    giorni_map = {int(g["valore"]): g["data"] for g in raw.get("giorni", [])}
    fasce_map = {int(f["valore"]): f["label"] for f in raw.get("fasce", [])}

    lessons = []
    celle = raw.get("celle", [])
    if isinstance(celle, dict):
        celle = list(celle.values())

    for cell in celle:
        if not isinstance(cell, dict):
            continue
        giorno_val = cell.get("giorno")
        fascia_inizio = cell.get("ora_inizio")
        fascia_fine = cell.get("ora_fine")

        day_date = giorni_map.get(int(giorno_val)) if giorno_val is not None else None
        time_start = fasce_map.get(int(fascia_inizio)) if fascia_inizio is not None else None
        time_end = fasce_map.get(int(fascia_fine)) if fascia_fine is not None else None

        docenti = cell.get("docenti", [])
        if isinstance(docenti, list):
            teacher = ", ".join(
                d.get("nome_completo", "") for d in docenti if d.get("nome_completo")
            )
        else:
            teacher = str(docenti)

        aule = cell.get("aule", [])
        if isinstance(aule, list):
            room = ", ".join(
                (a.get("aula_label") or a.get("des_aula") or a.get("aula") or "")
                for a in aule
                if a
            )
        else:
            room = str(aule)

        lesson = {
            "day": day_date,
            "day_label": _day_label(day_date),
            "start": time_start,
            "end": time_end,
            "subject": cell.get("nome_insegnamento") or cell.get("titolo") or "",
            "subject_short": cell.get("codice_insegnamento") or "",
            "teacher": teacher,
            "room": room,
            "color": cell.get("colore") or "#f59e0b",
            "note": cell.get("nota") or "",
            "curriculum": cell.get("curriculum_des") or "",
        }
        lessons.append(lesson)

    def sort_key(lesson):
        d = lesson.get("day") or "99-99-9999"
        parts = d.split("-")
        date_key = f"{parts[2]}-{parts[1]}-{parts[0]}" if len(parts) == 3 else d
        return (date_key, lesson.get("start") or "")

    lessons.sort(key=sort_key)

    return {
        "generated_at": datetime.utcnow().isoformat() + "Z",
        "anno_accademico": aa_label,
        "corso": corso_label,
        "anni_corso": anni2_labels,
        "week_start": raw.get("first_day", ""),
        "week_end": raw.get("last_day", ""),
        "lessons": lessons,
    }


def _day_label(date_str: str) -> str:
    if not date_str:
        return ""
    try:
        dt = datetime.strptime(date_str, "%d-%m-%Y")
        days_it = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"]
        return f"{days_it[dt.weekday()]} {dt.strftime('%d/%m')}"
    except Exception:
        return date_str


def current_monday() -> str:
    today = datetime.now()
    monday = today - timedelta(days=today.weekday())
    return monday.strftime("%d-%m-%Y")


def main():
    # Force UTF-8 output (needed on Windows)
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    ctx = make_ssl_ctx()

    aa_id = os.environ.get("UNIPD_AA", "")
    corso_id = os.environ.get("UNIPD_CORSO", "")
    anno2_env = os.environ.get("UNIPD_ANNO2", "1")
    date_str = os.environ.get("UNIPD_DATA", current_monday())

    if not aa_id or not corso_id:
        print("[ERR] Variabili UNIPD_AA e UNIPD_CORSO sono obbligatorie.")
        print("      Esempio: UNIPD_AA=2025 UNIPD_CORSO=SC2987 UNIPD_ANNO2=1,2")
        sys.exit(1)

    # UNIPD_ANNO2 può contenere valori compositi tipo "001PD_C2|3"
    # Il separatore tra più valori è il punto e virgola ";"
    # Esempio: "001PD_C2|3" oppure "001PD_C2|1;001PD_C2|2;001PD_C2|3"
    anni2 = [a.strip() for a in anno2_env.replace(",", ";").split(";") if a.strip()]

    print(f"[INFO] Scaricando orario: AA={aa_id}, Corso={corso_id}, Anno={anni2}, Data={date_str}")

    try:
        anni_aa = get_anni_accademici(ctx)
        aa_label = next((a["label"] for a in anni_aa if a["valore"] == aa_id), aa_id)
    except Exception as e:
        print(f"[WARN] Impossibile recuperare anni accademici: {e}")
        aa_label = aa_id

    try:
        corsi = get_corsi(aa_id, ctx)
        corso_obj = next((c for c in corsi if c["valore"] == corso_id), None)
        if corso_obj:
            corso_label = f"{corso_obj['label']} ({corso_obj['tipo']})"
        else:
            corso_label = corso_id
    except Exception as e:
        print(f"[WARN] Impossibile recuperare lista corsi: {e}")
        corso_label = corso_id

    # Estrae il numero dell'anno dal valore composito: "001PD_C2|3" → "Anno 3"
    def _anno_label(v: str) -> str:
        if "|" in v:
            return f"Anno {v.split('|')[-1]}"
        return f"Anno {v}"

    anni2_labels = [_anno_label(a) for a in anni2]


    print("[INFO] Chiamata a grid_call.php ...")
    raw = get_schedule(aa_id, corso_id, anni2, date_str, ctx)

    normalized = normalize_schedule(raw, aa_label, corso_label, anni2_labels)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(normalized, f, ensure_ascii=False, indent=2)

    n = len(normalized["lessons"])
    print(f"[OK]   Salvato {OUTPUT_FILE} -- {n} lezioni trovate per la settimana del {normalized['week_start']}")


if __name__ == "__main__":
    main()
