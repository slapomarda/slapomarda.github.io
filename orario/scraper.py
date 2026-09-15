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
from datetime import datetime, timedelta, timezone

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
    Chiama grid_call.php in POST e ritorna il JSON grezzo dell'orario.
    date_str: DD-MM-YYYY
    """
    params = [
        ("view", "easycourse"),
        ("include", "corso"),
        ("_lang", "it"),
        ("anno", aa_id),
        ("corso", corso_id),
        ("visualizzazione_orario", "cal"),
        ("date", date_str),
        ("all_events", "1")
    ]
    for a in anni2:
        params.append(("anno2[]", a))

    data = urllib.parse.urlencode(params).encode('ascii')
    url = f"{BASE_URL}/grid_call.php"
    
    req = urllib.request.Request(
        url, 
        data=data, 
        headers={
            "User-Agent": HEADERS["User-Agent"],
            "Accept": HEADERS["Accept"],
            "Referer": HEADERS["Referer"],
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/x-www-form-urlencoded"
        }
    )
    
    with urllib.request.urlopen(req, context=ctx, timeout=30) as r:
        body = r.read().decode("utf-8", errors="replace")
        
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

    # Colori vibranti predefiniti per le materie
    PALETTE = [
        "#3b82f6", "#ef4444", "#10b981", "#8b5cf6", 
        "#f59e0b", "#ec4899", "#14b8a6", "#6366f1",
        "#f43f5e", "#0ea5e9", "#84cc16", "#a855f7"
    ]
    color_map = {}

    for cell in celle:
        if not isinstance(cell, dict):
            continue
        giorno_val = cell.get("giorno")
        fascia_inizio = cell.get("ora_inizio")
        fascia_fine = cell.get("ora_fine")

        day_date = giorni_map.get(int(giorno_val)) if giorno_val is not None else None
        
        def _parse_time(val):
            if not val: return None
            val_str = str(val)
            if ":" in val_str:
                return val_str[:5]  # already a time string, es '08:30' o '08:30:00'
            try:
                return fasce_map.get(int(val))
            except ValueError:
                return val_str

        time_start = _parse_time(fascia_inizio)
        time_end = _parse_time(fascia_fine)

        subject = cell.get("nome_insegnamento") or cell.get("titolo") or ""
        subject = subject.strip()

        # Filtra eventi fantasma (es. 00:00 - 24:00 o senza materia)
        if not subject or (time_start == "00:00" and time_end == "24:00"):
            continue

        # Assegna colore stabile basato sul nome materia
        if subject not in color_map:
            color_map[subject] = PALETTE[len(color_map) % len(PALETTE)]

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

        # Estrai il canale (es. canale 1, canale 2) dal percorso didattico
        percorso = cell.get("percorso_didattico") or ""
        canale = ""
        if "canale 1" in percorso.lower() or "c1" in percorso.lower():
            canale = "Canale 1"
        elif "canale 2" in percorso.lower() or "c2" in percorso.lower():
            canale = "Canale 2"
        elif "canale 3" in percorso.lower() or "c3" in percorso.lower():
            canale = "Canale 3"
        elif "canale 4" in percorso.lower() or "c4" in percorso.lower():
            canale = "Canale 4"

        lesson = {
            "day": day_date,
            "day_label": _day_label(day_date),
            "start": time_start,
            "end": time_end,
            "subject": subject,
            "subject_short": cell.get("codice_insegnamento") or "",
            "teacher": teacher,
            "room": room,
            "color": color_map[subject],
            "note": cell.get("nota") or "",
            "canale": canale,
            "curriculum": percorso,
        }
        lessons.append(lesson)

    # Rimuove i duplicati esatti (EasyStaff spesso ritorna copie della stessa lezione)
    unique_lessons = []
    seen = set()
    for l in lessons:
        # Crea una chiave unica per la lezione
        k = (l["day"], l["start"], l["end"], l["subject"], l["room"])
        if k not in seen:
            seen.add(k)
            unique_lessons.append(l)
    
    lessons = unique_lessons

    # Sort by day then start time
    def sort_key(l):
        d = l.get("day") or "99-99-9999"
        parts = d.split("-")
        date_key = f"{parts[2]}-{parts[1]}-{parts[0]}" if len(parts) == 3 else d
        return (date_key, l.get("start") or "")

    lessons.sort(key=sort_key)

    return {
        "generated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
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


WEEKS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "weeks")


def monday_of(date_str: str) -> datetime:
    """Restituisce il lunedì della settimana contenente date_str (DD-MM-YYYY)."""
    dt = datetime.strptime(date_str, "%d-%m-%Y")
    return dt - timedelta(days=dt.weekday())


def main():
    # Force UTF-8 output (needed on Windows)
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    ctx = make_ssl_ctx()

    aa_id     = os.environ.get("UNIPD_AA", "")
    corso_id  = os.environ.get("UNIPD_CORSO", "")
    anno2_env = os.environ.get("UNIPD_ANNO2", "1")
    
    date_str = os.environ.get("UNIPD_DATA", "").strip()
    if not date_str:
        date_str = current_monday()
        
    # Quante settimane scaricare (dalla corrente in poi)
    n_weeks   = int(os.environ.get("UNIPD_WEEKS", "12"))

    if not aa_id or not corso_id:
        print("[ERR] Variabili UNIPD_AA e UNIPD_CORSO sono obbligatorie.")
        print("      Esempio: UNIPD_AA=2026 UNIPD_CORSO=SC2987 UNIPD_ANNO2=001PD_C2|3")
        sys.exit(1)

    # UNIPD_ANNO2 può contenere valori compositi tipo "001PD_C2|3"
    # Separatore tra più valori: ";" (o "," per retrocompatibilità)
    anni2 = [a.strip() for a in anno2_env.replace(",", ";").split(";") if a.strip()]

    # --- Metadata labels ---
    try:
        anni_aa = get_anni_accademici(ctx)
        aa_label = next((a["label"] for a in anni_aa if a["valore"] == aa_id), aa_id)
    except Exception as e:
        print(f"[WARN] Impossibile recuperare anni accademici: {e}")
        aa_label = aa_id

    try:
        corsi = get_corsi(aa_id, ctx)
        corso_obj = next((c for c in corsi if c["valore"] == corso_id), None)
        corso_label = f"{corso_obj['label']} ({corso_obj['tipo']})" if corso_obj else corso_id
    except Exception as e:
        print(f"[WARN] Impossibile recuperare lista corsi: {e}")
        corso_label = corso_id

    def _anno_label(v: str) -> str:
        return f"Anno {v.split('|')[-1]}" if "|" in v else f"Anno {v}"

    anni2_labels = [_anno_label(a) for a in anni2]

    # --- Crea la cartella weeks/ ---
    os.makedirs(WEEKS_DIR, exist_ok=True)

    # --- Scarica N settimane a partire dal lunedì corrente ---
    start_monday = monday_of(date_str)
    index_entries = []

    for i in range(n_weeks):
        week_monday = start_monday + timedelta(weeks=i)
        week_date_str = week_monday.strftime("%d-%m-%Y")
        week_key = week_monday.strftime("%Y-%m-%d")  # usato come chiave file
        filename = f"{week_key}.json"
        filepath = os.path.join(WEEKS_DIR, filename)

        print(f"[{i+1:2d}/{n_weeks}] Settimana {week_date_str} ...", end=" ", flush=True)

        try:
            raw = get_schedule(aa_id, corso_id, anni2, week_date_str, ctx)
            normalized = normalize_schedule(raw, aa_label, corso_label, anni2_labels)

            with open(filepath, "w", encoding="utf-8") as f:
                json.dump(normalized, f, ensure_ascii=False, indent=2)

            n_lessons = len(normalized["lessons"])
            print(f"{n_lessons} lezioni")

            index_entries.append({
                "key": week_key,
                "file": f"weeks/{filename}",
                "week_start": normalized["week_start"],
                "week_end": normalized["week_end"],
                "n_lessons": n_lessons,
            })

        except Exception as e:
            print(f"ERRORE: {e}")

    # --- Salva anche l'orario.json corrente (settimana 0) per retrocompatibilità ---
    if index_entries:
        first = index_entries[0]
        first_path = os.path.join(WEEKS_DIR, f"{first['key']}.json")
        if os.path.exists(first_path):
            import shutil
            shutil.copy(first_path, OUTPUT_FILE)

    # --- Salva index.json ---
    index_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "index.json")
    index_data = {
        "generated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "anno_accademico": aa_label,
        "corso": corso_label,
        "anni_corso": anni2_labels,
        "current_week": index_entries[0]["key"] if index_entries else None,
        "weeks": index_entries,
    }
    with open(index_path, "w", encoding="utf-8") as f:
        json.dump(index_data, f, ensure_ascii=False, indent=2)

    total = sum(e["n_lessons"] for e in index_entries)
    print(f"\n[OK]   {len(index_entries)} settimane scaricate, {total} lezioni totali.")
    print(f"[OK]   Index salvato in {index_path}")


if __name__ == "__main__":
    main()
