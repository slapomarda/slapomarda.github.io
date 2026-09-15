/**
 * app.js — Orario Lezioni
 * slapomarda.github.io/orario
 * Vanilla JS, no dependencies
 */

/* ── Constants ── */
const GRID_START_HOUR   = 7;
const GRID_START_MIN    = 30;  // 7:30
const GRID_SLOT_MIN     = 30;  // each row = 30 min
const GRID_TOTAL_SLOTS  = 25;  // 7:30 → 20:00
const GRID_START_TOTAL  = GRID_START_HOUR * 60 + GRID_START_MIN; // 450 min

const DAY_NAMES = ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'];
const DAY_NAMES_SHORT = ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'];

/* ── State ── */
let currentData   = null;
let mediaQuery    = window.matchMedia('(max-width: 767px)');
let timeIndicatorInterval = null;
let corsBlocked   = false;

/* ── DOM refs ── */
const elLoading       = document.getElementById('state-loading');
const elError         = document.getElementById('state-error');
const elErrorMsg      = document.getElementById('error-message');
const elEmpty         = document.getElementById('state-empty');
const elCalWrapper    = document.getElementById('calendar-wrapper');
const elCalGrid       = document.getElementById('calendar-grid');
const elTimeline      = document.getElementById('timeline-view');
const elSubtitle      = document.getElementById('header-subtitle');
const elWeekLabel     = document.getElementById('week-label');
const elBtnPrev       = document.getElementById('btn-prev');
const elBtnNext       = document.getElementById('btn-next');
const elCorsNotice    = document.getElementById('cors-notice');

/* ── Tooltip ── */
const tooltip = document.createElement('div');
tooltip.className = 'lesson-tooltip';
document.body.appendChild(tooltip);

/* ════════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
(async function init() {
  elBtnPrev.addEventListener('click', () => navigateWeek(-1));
  elBtnNext.addEventListener('click', () => navigateWeek(+1));

  mediaQuery.addEventListener('change', () => renderView());

  // Carica l'indice delle settimane (per la navigazione locale, no CORS)
  await loadIndex();
  await loadData();
})();

/* ════════════════════════════════════════════
   DATA LOADING
═══════════════════════════════════════════ */
async function loadData(url = './orario.json') {
  showState('loading');
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    currentData = data;
    renderAll(data);
  } catch (err) {
    console.error('[orario] loadData error:', err);
    showState('error');
    elErrorMsg.textContent = err.message || 'Impossibile raggiungere orario.json.';
  }
}

/* ════════════════════════════════════════════
   RENDER ALL
═══════════════════════════════════════════ */
function renderAll(data) {
  renderHeader(data);
  renderWeekLabel(data);
  updateNavButtons();

  const lessons = Array.isArray(data.lessons) ? data.lessons : [];

  if (lessons.length === 0) {
    showState('empty');
    return;
  }

  showState('none');
  renderCalendarGrid(lessons, data);
  renderTimeline(lessons);
  renderView(); // show correct view based on screen size
  setupIntersectionObserver();
}

/* ════════════════════════════════════════════
   HEADER & LABELS
═══════════════════════════════════════════ */
function renderHeader(data) {
  const aa   = data.anno_accademico || '';
  const corso = data.corso || '';
  const anni  = Array.isArray(data.anni_corso) ? data.anni_corso.join(', ') : '';
  elSubtitle.textContent = [corso, anni, aa ? `A.A. ${aa}` : ''].filter(Boolean).join(' · ');
}

function renderWeekLabel(data) {
  const ws = data.week_start || '';
  const we = data.week_end   || '';
  if (ws && we) {
    const fmtStart = formatDateLabel(ws);
    const fmtEnd   = formatDateLabel(we);
    elWeekLabel.textContent = `Settimana dal ${fmtStart} al ${fmtEnd}`;
  } else {
    elWeekLabel.textContent = 'Settimana corrente';
  }
}

/* ════════════════════════════════════════════
   CALENDAR GRID (desktop)
═══════════════════════════════════════════ */
function renderCalendarGrid(lessons, data) {
  elCalGrid.innerHTML = '';
  if (timeIndicatorInterval) clearInterval(timeIndicatorInterval);

  // Collect unique days in order
  const dayMap = buildDayMap(lessons, data);
  const dayKeys = Object.keys(dayMap); // 'DD-MM-YYYY'
  const numDays = dayKeys.length;

  // Set CSS grid columns: time col + one col per day
  elCalGrid.style.gridTemplateColumns =
    `var(--time-col-width) repeat(${numDays}, minmax(var(--day-min-width), 1fr))`;
  // Rows: header + one per slot
  elCalGrid.style.gridTemplateRows =
    `var(--header-h) repeat(${GRID_TOTAL_SLOTS}, var(--slot-height))`;

  // ── Corner cell (time/header intersection)
  const corner = el('div', 'cal-time-header');
  corner.style.gridColumn = '1';
  corner.style.gridRow    = '1';
  elCalGrid.appendChild(corner);

  // ── Day headers
  dayKeys.forEach((dayKey, colIdx) => {
    const dayInfo = dayMap[dayKey];
    const header  = el('div', 'cal-day-header');
    header.style.gridColumn = String(colIdx + 2);
    header.style.gridRow    = '1';
    if (isToday(dayKey)) header.classList.add('is-today');

    const nameSpan = el('span');
    nameSpan.textContent = dayInfo.label.split(' ')[0]; // "Lunedì"
    const dateSpan = el('span', 'day-date');
    dateSpan.textContent = dayInfo.label.split(' ')[1] || ''; // "14/09"

    header.appendChild(nameSpan);
    header.appendChild(dateSpan);
    elCalGrid.appendChild(header);
  });

  // ── Time labels + row backgrounds
  for (let slot = 0; slot < GRID_TOTAL_SLOTS; slot++) {
    const totalMin  = GRID_START_TOTAL + slot * GRID_SLOT_MIN;
    const h         = Math.floor(totalMin / 60);
    const m         = totalMin % 60;
    const isHour    = m === 0;
    const row       = slot + 2; // +2 because header is row 1

    // Time label
    const timeLabel = el('div', 'cal-time-label');
    timeLabel.style.gridColumn = '1';
    timeLabel.style.gridRow    = String(row);
    if (isHour) {
      timeLabel.textContent = `${String(h).padStart(2,'0')}:00`;
    }
    elCalGrid.appendChild(timeLabel);

    // Row backgrounds (one per day column)
    dayKeys.forEach((_, colIdx) => {
      const rowBg = el('div', isHour ? 'cal-row-bg hour-mark' : 'cal-row-bg');
      rowBg.style.gridColumn = String(colIdx + 2);
      rowBg.style.gridRow    = String(row);
      elCalGrid.appendChild(rowBg);
    });
  }

  // ── Lesson cards
  // Build collision-aware column offsets per day
  const lessonsByDay = {};
  dayKeys.forEach(k => { lessonsByDay[k] = []; });
  lessons.forEach(lesson => {
    const key = lesson.day;
    if (lessonsByDay[key] !== undefined) {
      lessonsByDay[key].push(lesson);
    }
  });

  dayKeys.forEach((dayKey, colIdx) => {
    const dayLessons = lessonsByDay[dayKey];
    const gridColBase = colIdx + 2;
    resolveCollisions(dayLessons).forEach(({ lesson, subCol, subCols }) => {
      const card = buildCalLessonCard(lesson);
      const { rowStart, rowEnd } = timeToRows(lesson.start, lesson.end);

      card.style.gridColumn = String(gridColBase);
      card.style.gridRow    = `${rowStart} / ${rowEnd}`;

      // Sub-column offset for overlapping lessons (CSS fractional width)
      if (subCols > 1) {
        const pct  = 100 / subCols;
        
        const wrapper = el('div');
        wrapper.style.gridColumn   = String(gridColBase);
        wrapper.style.gridRow      = `${rowStart} / ${rowEnd}`;
        wrapper.style.position     = 'relative';
        
        card.style.position    = 'absolute';
        card.style.width       = `calc(${pct}% - 2px)`;
        card.style.left        = `calc(${subCol * pct}%)`;
        card.style.top         = '0';
        card.style.bottom      = '0';
        card.style.margin      = '0';
        card.style.height      = '100%';

        wrapper.appendChild(card);
        elCalGrid.appendChild(wrapper);
        return;
      }

      // Normal card (no collision)
      card.style.height = '100%';
      elCalGrid.appendChild(card);
    });
  });

  // ── Current time indicator
  setupTimeIndicator(dayKeys);
}

function buildTimelineCard(lesson) {
  const card = el('div', 'tl-card');
  card.style.setProperty('--lesson-color', lesson.color || 'var(--accent)');

  const timeCol = el('div', 'tl-time');
  timeCol.innerHTML = `<div>${lesson.start}</div><div style="opacity:0.6">${lesson.end}</div>`;

  const infoCol = el('div', 'tl-info');

  const title = el('h4', 'tl-title');
  title.textContent = lesson.subject || lesson.subject_short || '';
  infoCol.appendChild(title);

  if (lesson.teacher) {
    const teacherRow = el('div', 'tl-teacher');
    teacherRow.textContent = `🧑‍🏫 ${lesson.teacher}`;
    teacherRow.style.fontSize = '0.85rem';
    teacherRow.style.color = 'var(--text-secondary)';
    teacherRow.style.marginBottom = '2px';
    infoCol.appendChild(teacherRow);
  }

  if (lesson.room) {
    const r = el('span', 'tl-room');
    r.textContent = `📍 ${lesson.room}`;
    infoCol.appendChild(r);
  }

  card.appendChild(timeCol);
  card.appendChild(infoCol);

  return card;
}

function buildCalLessonCard(lesson) {
  const card = el('div', 'cal-lesson');
  card.style.setProperty('--lesson-color', lesson.color || 'var(--accent)');

  // Nome materia esteso invece del codice
  const subject = el('span', 'lesson-short');
  subject.textContent = lesson.subject || lesson.subject_short || '';
  subject.style.color = lesson.color || '';
  
  const time = el('span', 'lesson-time');
  time.textContent = `${lesson.start}–${lesson.end}`;

  const detailsContainer = el('div', 'lesson-details-inline');
  
  const room = el('span', 'lesson-room');
  room.textContent = lesson.room ? `📍 ${lesson.room}` : '';
  
  const teacher = el('span', 'lesson-teacher');
  teacher.textContent = lesson.teacher ? `🧑‍🏫 ${lesson.teacher}` : '';
  teacher.style.fontSize = '0.75rem';
  teacher.style.color = 'var(--text-secondary)';

  card.appendChild(subject);
  card.appendChild(time);
  
  if (lesson.room) detailsContainer.appendChild(room);
  if (lesson.teacher) detailsContainer.appendChild(teacher);
  
  if (detailsContainer.childNodes.length > 0) {
    card.appendChild(detailsContainer);
  }

  // Hover Tooltip
  card.addEventListener('mouseenter', e => showTooltip(e, lesson));
  card.addEventListener('mousemove',  (e) => positionTooltip(e));
  card.addEventListener('mouseleave', ()  => hideTooltip());
  card.addEventListener('click',      (e) => { e.stopPropagation(); showTooltip(e, lesson); });

  return card;
}

function timeToRows(startStr, endStr) {
  const [sh, sm] = startStr.split(':').map(Number);
  const [eh, em] = endStr.split(':').map(Number);
  const startMin = sh * 60 + sm;
  const endMin   = eh * 60 + em;
  // Formula: rowStart = (minutes - GRID_START_TOTAL) / 30 + 2
  const rowStart = Math.round((startMin - GRID_START_TOTAL) / GRID_SLOT_MIN) + 2;
  const rowEnd   = Math.round((endMin   - GRID_START_TOTAL) / GRID_SLOT_MIN) + 2;
  return { rowStart: Math.max(2, rowStart), rowEnd: Math.max(3, rowEnd) };
}

function resolveCollisions(dayLessons) {
  if (!dayLessons.length) return [];
  // Sort by start time
  const sorted = [...dayLessons].sort((a, b) => timeToMin(a.start) - timeToMin(b.start));
  const result = sorted.map(l => ({ lesson: l, subCol: 0, subCols: 1 }));

  // Simple sweep: group overlapping lessons
  for (let i = 0; i < result.length; i++) {
    const group = [result[i]];
    const iEnd  = timeToMin(result[i].lesson.end);
    for (let j = i + 1; j < result.length; j++) {
      if (timeToMin(result[j].lesson.start) < iEnd) {
        group.push(result[j]);
      }
    }
    if (group.length > 1) {
      group.forEach((item, idx) => {
        item.subCol  = idx;
        item.subCols = group.length;
      });
    }
  }
  return result;
}

function setupTimeIndicator(dayKeys) {
  const existingIndicator = elCalGrid.querySelector('.time-indicator');
  if (existingIndicator) existingIndicator.remove();

  function updateIndicator() {
    const old = elCalGrid.querySelector('.time-indicator');
    if (old) old.remove();

    const now     = new Date();
    const todayKey = dateToKey(now);

    if (!dayKeys.includes(todayKey)) return; // today not in this week

    const nowMin  = now.getHours() * 60 + now.getMinutes();
    if (nowMin < GRID_START_TOTAL || nowMin >= GRID_START_TOTAL + GRID_TOTAL_SLOTS * GRID_SLOT_MIN) return;

    const offset  = nowMin - GRID_START_TOTAL;
    const topPx   = (offset / GRID_SLOT_MIN) * parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--slot-height') || '28'
    );

    const indicator = el('div', 'time-indicator');
    // Position relative to grid: row header + top offset
    indicator.style.top = `calc(var(--header-h) + ${topPx}px)`;
    elCalGrid.style.position = 'relative';
    elCalGrid.appendChild(indicator);
  }

  updateIndicator();
  timeIndicatorInterval = setInterval(updateIndicator, 60000);
}

/* ════════════════════════════════════════════
   TIMELINE VIEW (mobile)
═══════════════════════════════════════════ */
function renderTimeline(lessons) {
  elTimeline.innerHTML = '';

  // Group by day_label (preserving order)
  const groups = groupByDay(lessons);

  groups.forEach(({ label, dayKey, items }) => {
    const section = el('section', 'tl-day');
    section.dataset.day = dayKey;

    // Day header
    const header = el('div', 'tl-day-header');
    const nameEl = el('span', 'tl-day-name');
    nameEl.textContent = label;
    if (isToday(dayKey)) nameEl.classList.add('is-today');

    const divider = el('div', 'tl-day-divider');
    header.appendChild(nameEl);
    header.appendChild(divider);
    section.appendChild(header);

    // Lesson cards
    items.forEach((lesson, idx) => {
      const card = el('div', 'tl-lesson-card');
      card.style.setProperty('--lesson-color', lesson.color || 'var(--accent)');
      card.style.transitionDelay = `${idx * 60}ms`;

      const timeDiv = el('div', 'tl-time');
      const startEl = el('div', 'tl-time-start');
      startEl.textContent = lesson.start;
      const endEl = el('div', 'tl-time-end');
      endEl.textContent = `→ ${lesson.end}`;
      timeDiv.appendChild(startEl);
      timeDiv.appendChild(endEl);

      const details = el('div', 'tl-details');
      const subjEl  = el('div', 'tl-subject');
      subjEl.textContent = lesson.subject || '';

      const teachEl = el('div', 'tl-teacher');
      teachEl.textContent = lesson.teacher || '';

      const roomEl = el('span', 'tl-room-badge');
      roomEl.textContent = lesson.room || '';

      details.appendChild(subjEl);
      if (lesson.teacher) details.appendChild(teachEl);
      if (lesson.room)    details.appendChild(roomEl);

      if (lesson.note) {
        const noteEl = el('div', 'tl-note');
        noteEl.textContent = lesson.note;
        details.appendChild(noteEl);
      }

      card.appendChild(timeDiv);
      card.appendChild(details);
      section.appendChild(card);
    });

    elTimeline.appendChild(section);
  });
}

/* ════════════════════════════════════════════
   WEEK NAVIGATION — usa file locali pre-generati
   (nessuna chiamata CORS al portale UniPD)
═══════════════════════════════════════════ */
let weekIndex    = null;   // dati da index.json
let currentWeekI = 0;      // indice corrente in weekIndex.weeks[]

async function loadIndex() {
  try {
    const res = await fetch('./index.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`index.json HTTP ${res.status}`);
    weekIndex = await res.json();
    // Trova la settimana corrente
    const todayKey = todayISO();
    currentWeekI = 0;
    if (weekIndex.weeks && weekIndex.weeks.length > 0) {
      // Trova la settimana che contiene oggi (o la più vicina futura)
      const idx = weekIndex.weeks.findIndex(w => w.key >= todayKey);
      currentWeekI = idx >= 0 ? idx : 0;
    }
    return true;
  } catch (e) {
    console.warn('[orario] index.json non trovato, navigazione disabilitata:', e);
    weekIndex = null;
    return false;
  }
}

async function navigateWeek(delta) {
  if (!weekIndex || !weekIndex.weeks) return;

  const newI = currentWeekI + delta;
  if (newI < 0 || newI >= weekIndex.weeks.length) return;

  currentWeekI = newI;
  const entry = weekIndex.weeks[currentWeekI];

  elBtnPrev.disabled = true;
  elBtnNext.disabled = true;
  showState('loading');

  try {
    const res = await fetch(`./${entry.file}`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    currentData = data;
    renderAll(data);
  } catch (err) {
    console.error('[orario] navigateWeek error:', err);
    showState('error');
    elErrorMsg.textContent = `Impossibile caricare la settimana: ${err.message}`;
  }
}

function updateNavButtons() {
  if (!weekIndex || !weekIndex.weeks || weekIndex.weeks.length === 0) {
    // index.json non disponibile — disabilita navigazione
    elBtnPrev.disabled = true;
    elBtnNext.disabled = true;
    elCorsNotice.hidden = false;
    return;
  }
  elCorsNotice.hidden = true;
  elBtnPrev.disabled = currentWeekI <= 0;
  elBtnNext.disabled = currentWeekI >= weekIndex.weeks.length - 1;
}

function todayISO() {
  const d = new Date();
  // Torna il lunedì della settimana corrente in formato YYYY-MM-DD
  const monday = new Date(d);
  monday.setDate(d.getDate() - d.getDay() + (d.getDay() === 0 ? -6 : 1));
  return monday.toISOString().split('T')[0];
}


/* ════════════════════════════════════════════
   TOOLTIP
═══════════════════════════════════════════ */
function showTooltip(e, lesson) {
  tooltip.innerHTML = '';
  tooltip.style.setProperty('--tt-color', lesson.color || 'var(--accent)');

  const subj = el('div', 'tooltip-subject');
  subj.textContent = lesson.subject || '';
  tooltip.appendChild(subj);

  if (lesson.teacher) {
    tooltip.appendChild(tooltipRow(iconPerson(), lesson.teacher));
  }
  if (lesson.room) {
    tooltip.appendChild(tooltipRow(iconPin(), lesson.room));
  }
  tooltip.appendChild(tooltipRow(iconClock(), `${lesson.start} – ${lesson.end}`));
  if (lesson.note) {
    tooltip.appendChild(tooltipRow(iconNote(), lesson.note));
  }

  positionTooltip(e);
  tooltip.classList.add('visible');
}

function positionTooltip(e) {
  const pad = 12;
  const tw  = tooltip.offsetWidth  || 260;
  const th  = tooltip.offsetHeight || 120;
  let left  = e.clientX + pad;
  let top   = e.clientY + pad;
  if (left + tw > window.innerWidth  - pad) left = e.clientX - tw - pad;
  if (top  + th > window.innerHeight - pad) top  = e.clientY - th - pad;
  tooltip.style.left = `${left}px`;
  tooltip.style.top  = `${top}px`;
}

function hideTooltip() {
  tooltip.classList.remove('visible');
}

document.addEventListener('click', hideTooltip);
document.addEventListener('scroll', hideTooltip, { passive: true });

function tooltipRow(iconSvg, text) {
  const row = el('div', 'tooltip-row');
  row.appendChild(iconSvg);
  const span = el('span');
  span.textContent = text;
  row.appendChild(span);
  return row;
}

/* ════════════════════════════════════════════
   STATE DISPLAY
═══════════════════════════════════════════ */
function showState(state) {
  elLoading.hidden    = state !== 'loading';
  elError.hidden      = state !== 'error';
  elEmpty.hidden      = state !== 'empty';
  elCalWrapper.hidden = state !== 'none';
  elTimeline.hidden   = state !== 'none';
}

function renderView() {
  if (!currentData) return;
  const isMobile = mediaQuery.matches;
  elCalWrapper.hidden = isMobile;
  elTimeline.hidden   = !isMobile;
  // Re-setup observer after switching view
  setupIntersectionObserver();
}

/* ════════════════════════════════════════════
   INTERSECTION OBSERVER (animate-in)
═══════════════════════════════════════════ */
function setupIntersectionObserver() {
  const targets = [
    ...elTimeline.querySelectorAll('.tl-day, .tl-lesson-card'),
  ];

  if (!targets.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  targets.forEach(t => obs.observe(t));
}

/* ════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════ */
function el(tag, className) {
  const e = document.createElement(tag || 'div');
  if (className) e.className = className;
  return e;
}

function buildDayMap(lessons, data) {
  const map = {};
  lessons.forEach(lesson => {
    if (!map[lesson.day]) {
      map[lesson.day] = { label: lesson.day_label || lesson.day };
    }
  });
  return map;
}

function groupByDay(lessons) {
  const order = [];
  const map   = {};
  lessons.forEach(lesson => {
    const key = lesson.day;
    if (!map[key]) {
      map[key] = { label: lesson.day_label || key, dayKey: key, items: [] };
      order.push(key);
    }
    map[key].items.push(lesson);
  });
  return order.map(k => map[k]);
}

function timeToMin(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

function parseDate(str) {
  if (!str) return null;
  // Expected: DD-MM-YYYY
  const [d, m, y] = str.split('-').map(Number);
  if (!d || !m || !y) return null;
  return new Date(y, m - 1, d);
}

function dateToKey(date) {
  // Returns DD-MM-YYYY
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = date.getFullYear();
  return `${d}-${m}-${y}`;
}

function keyToDateParam(date) {
  return dateToKey(date);
}

function formatDateLabel(str) {
  // DD-MM-YYYY → DD/MM
  const [d, m, y] = str.split('-');
  if (!d || !m) return str;
  return `${d}/${m}${y ? `/${y}` : ''}`;
}

function isToday(dayKey) {
  return dayKey === dateToKey(new Date());
}

/* ── Inline SVG icons ── */
function iconPerson() {
  return svgIcon('<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>');
}
function iconPin() {
  return svgIcon('<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>');
}
function iconClock() {
  return svgIcon('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>');
}
function iconNote() {
  return svgIcon('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>');
}
function svgIcon(inner) {
  const s = document.createElementNS('http://www.w3.org/2000/svg','svg');
  s.setAttribute('width','14');
  s.setAttribute('height','14');
  s.setAttribute('viewBox','0 0 24 24');
  s.setAttribute('fill','none');
  s.setAttribute('stroke','currentColor');
  s.setAttribute('stroke-width','2');
  s.setAttribute('stroke-linecap','round');
  s.setAttribute('stroke-linejoin','round');
  s.innerHTML = inner;
  return s;
}
