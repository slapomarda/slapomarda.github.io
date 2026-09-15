/**
 * app.js â€” Orario Lezioni
 * slapomarda.github.io/orario
 * Vanilla JS, no dependencies
 */

/* â”€â”€ Constants â”€â”€ */
const GRID_START_HOUR   = 7;
const GRID_START_MIN    = 30;  // 7:30
const GRID_SLOT_MIN     = 30;  // each row = 30 min
const GRID_TOTAL_SLOTS  = 25;  // 7:30 â†’ 20:00
const GRID_START_TOTAL  = GRID_START_HOUR * 60 + GRID_START_MIN; // 450 min

const DAY_NAMES = ['Domenica','LunedÃ¬','MartedÃ¬','MercoledÃ¬','GiovedÃ¬','VenerdÃ¬','Sabato'];
const DAY_NAMES_SHORT = ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'];

/* â”€â”€ State â”€â”€ */
let currentData   = null;
let mediaQuery    = window.matchMedia('(max-width: 767px)');
let timeIndicatorInterval = null;
let corsBlocked   = false;

/* â”€â”€ DOM refs â”€â”€ */
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

/* â”€â”€ Tooltip â”€â”€ */
const tooltip = document.createElement('div');
tooltip.className = 'lesson-tooltip';
document.body.appendChild(tooltip);

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   INIT
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
(async function init() {
  elBtnPrev.addEventListener('click', () => navigateWeek(-1));
  elBtnNext.addEventListener('click', () => navigateWeek(+1));
  
  const filterBtn = document.getElementById('btn-filter');
  const filterPanel = document.getElementById('filter-panel');
  const filterClose = document.getElementById('btn-close-filter');
  
  const channelSelect = document.getElementById('channel-select');
  if (channelSelect) channelSelect.addEventListener('change', (e) => { selectedChannel = e.target.value; localStorage.setItem('unipd_selected_channel', selectedChannel); if(currentData) renderAll(currentData); });
  if (filterBtn) filterBtn.addEventListener('click', () => { filterPanel.hidden = !filterPanel.hidden; });
  if (filterClose) filterClose.addEventListener('click', () => { 
    filterPanel.hidden = true;
    if (currentData) renderAll(currentData); // Re-render per applicare i filtri
  });

  mediaQuery.addEventListener('change', () => renderView());

  document.addEventListener('click', (e) => {
    if (filterPanel && !filterPanel.hidden) {
      if (!filterPanel.contains(e.target) && !filterBtn.contains(e.target)) {
        filterPanel.hidden = true;
      }
    }
  });

  // Carica l'indice delle settimane (per la navigazione locale, no CORS)
  await loadIndex();
  await loadData();
})();

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   DATA LOADING
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
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

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   RENDER ALL
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
let hiddenSubjects = JSON.parse(localStorage.getItem('unipd_hidden_subjects') || '[]');
let selectedChannel = localStorage.getItem('unipd_selected_channel') || 'Tutti';

function renderAll(data) {
  renderHeader(data);
  renderWeekLabel(data);
  updateNavButtons();

  let lessons = Array.isArray(data.lessons) ? data.lessons : [];
  
  // 1. Popola la select dei canali (mantenendo 'Tutti')
  const channelSelect = document.getElementById('channel-select');
  const allChannels = [...new Set(lessons.flatMap(l => l.canali || []))].filter(Boolean).sort();
  
  // Aggiorna le opzioni solo se mancano
  if (channelSelect && channelSelect.options.length <= 1 && allChannels.length > 0) {
    allChannels.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c;
      channelSelect.appendChild(opt);
    });
    channelSelect.value = selectedChannel;
  }

  // 2. Filtra prima di tutto per canale
  if (selectedChannel !== 'Tutti') {
    lessons = lessons.filter(l => l.canali && l.canali.includes(selectedChannel));
  }
  
  // 3. Costruisce il pannello filtri solo con le materie del canale scelto
  buildFilterPanel(lessons);

  // 4. Applica il filtro delle materie nascoste (rimosse dall'utente)
  lessons = lessons.filter(l => !hiddenSubjects.includes(l.subject));

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

function buildFilterPanel(lessons) {
  const list = document.getElementById('filter-list');
  list.innerHTML = '';
  
  // Raggruppa le materie (se "Tutti" Ã¨ selezionato raggruppa per canale, altrimenti lista piatta o singolo gruppo)
  const subjectsMap = {}; 
  
  lessons.forEach(l => {
    if (!l.subject) return;
    const c = selectedChannel === 'Tutti' ? ((l.canali ? l.canali.join(", ") : "") || 'Materie Comuni / Altri Corsi') : 'Materie Selezionate';
    if (!subjectsMap[c]) subjectsMap[c] = {};
    subjectsMap[c][l.subject] = l.color;
  });
  
  const channels = Object.keys(subjectsMap).sort();
  
  channels.forEach(channel => {
    if (selectedChannel === 'Tutti') {
      const title = el('div', 'filter-section-title');
      title.textContent = channel;
      title.style.gridColumn = '1 / -1';
      list.appendChild(title);
    }
    
    const subjects = Object.keys(subjectsMap[channel]).sort();
    subjects.forEach(subject => {
      const isHidden = hiddenSubjects.includes(subject);
      const label = el('label', 'filter-item');
      
      const cb = el('input');
      cb.type = 'checkbox';
      cb.checked = !isHidden;
      
      cb.addEventListener('change', (e) => {
        if (e.target.checked) {
          hiddenSubjects = hiddenSubjects.filter(s => s !== subject);
        } else {
          if (!hiddenSubjects.includes(subject)) hiddenSubjects.push(subject);
        }
        localStorage.setItem('unipd_hidden_subjects', JSON.stringify(hiddenSubjects));
        
        if (currentData) renderAll(currentData);
      });
      
      const dot = el('div', 'filter-color-dot');
      dot.style.backgroundColor = subjectsMap[channel][subject];
      
      const span = el('span');
      span.textContent = subject;
      
      label.appendChild(cb);
      label.appendChild(dot);
      label.appendChild(span);
      list.appendChild(label);
    });
  });
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   HEADER & LABELS
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function renderHeader(data) {
  const aa   = data.anno_accademico || '';
  const corso = data.corso || '';
  const anni  = Array.isArray(data.anni_corso) ? data.anni_corso.join(', ') : '';
  elSubtitle.textContent = [corso, anni, aa ? `A.A. ${aa}` : ''].filter(Boolean).join(' Â· ');
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

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   CALENDAR GRID (desktop)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
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

  // â”€â”€ Corner cell (time/header intersection)
  const corner = el('div', 'cal-time-header');
  corner.style.gridColumn = '1';
  corner.style.gridRow    = '1';
  elCalGrid.appendChild(corner);

  // â”€â”€ Day headers
  dayKeys.forEach((dayKey, colIdx) => {
    const dayInfo = dayMap[dayKey];
    const header  = el('div', 'cal-day-header');
    header.style.gridColumn = String(colIdx + 2);
    header.style.gridRow    = '1';
    if (isToday(dayKey)) header.classList.add('is-today');

    const nameSpan = el('span');
    nameSpan.style.marginBottom = '4px';
    nameSpan.textContent = dayInfo.label.split(' ')[0]; // "LunedÃ¬"
    const dateSpan = el('span', 'day-date');
    dateSpan.textContent = dayInfo.label.split(' ')[1] || ''; // "14/09"

    header.appendChild(nameSpan);
    header.appendChild(dateSpan);
    elCalGrid.appendChild(header);
  });

  // â”€â”€ Time labels + row backgrounds
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

  // â”€â”€ Lesson cards
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

  // â”€â”€ Current time indicator
  setupTimeIndicator(dayKeys);
}

function buildTimelineCard(lesson) {
  const card = el('div', 'tl-card');
  card.style.setProperty('--lesson-color', lesson.color || 'var(--accent)');

  const timeCol = el('div', 'tl-time');
  timeCol.innerHTML = `<div>${lesson.start}</div><div style="opacity:0.6">&rarr; ${lesson.end}</div>`;

  const infoCol = el('div', 'tl-info');

  const title = el('h4', 'tl-title');
  title.textContent = lesson.subject || lesson.subject_short || '';
  infoCol.appendChild(title);

  if (lesson.room) {
    const cleanRoom = lesson.room.split('[')[0].trim();
    const r = el('div', 'tl-room');
    r.innerHTML = `<strong>Aula: ${cleanRoom}</strong>`;
    r.style.fontSize = '0.95rem';
    r.style.marginBottom = '2px';
    r.style.color = 'var(--text-secondary)';
    infoCol.appendChild(r);
  }

  if (lesson.teacher) {
    const teacherRow = el('div', 'tl-teacher');
    teacherRow.textContent = `Prof: ${lesson.teacher}`;
    teacherRow.style.fontSize = '0.75rem';
    teacherRow.style.color = 'var(--text-secondary)';
    infoCol.appendChild(teacherRow);
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
  time.textContent = `${lesson.start}-${lesson.end}`;

  const detailsContainer = el('div', 'lesson-details-inline');
  
  const room = el('span', 'lesson-room');
  const cleanRoom = lesson.room ? lesson.room.split('[')[0].trim() : '';
  room.textContent = lesson.room ? `Aula: ${cleanRoom}` : '';
  
  const teacher = el('span', 'lesson-teacher');
  teacher.textContent = lesson.teacher ? `Prof: ${lesson.teacher}` : '';
  teacher.style.fontSize = '0.75rem';
  teacher.style.color = 'var(--text-secondary)';

  card.appendChild(subject);
  card.appendChild(time);
  
  if (lesson.room) detailsContainer.appendChild(room);
  
  
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

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   TIMELINE VIEW (mobile)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
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
      endEl.innerHTML = `&rarr; ${lesson.end}`;
      timeDiv.appendChild(startEl);
      timeDiv.appendChild(endEl);

      const details = el('div', 'tl-details');
      const subjEl  = el('div', 'tl-subject');
      subjEl.textContent = lesson.subject || '';

      const roomEl = el('span', 'tl-room');
      const cleanRoom = lesson.room ? lesson.room.split('[')[0].trim() : '';
      roomEl.innerHTML = `<strong>Aula: ${cleanRoom}</strong>`;
      roomEl.style.display = 'block';
      roomEl.style.fontSize = '0.95rem';
      roomEl.style.marginBottom = '2px';
      roomEl.style.color = 'var(--text-secondary)';

      const teachEl = el('div', 'tl-teacher');
      teachEl.textContent = lesson.teacher ? `Prof: ${lesson.teacher}` : '';
      teachEl.style.fontSize = '0.75rem';
      teachEl.style.color = 'var(--text-secondary)';

      details.appendChild(subjEl);
      if (lesson.room)    details.appendChild(roomEl);
      if (lesson.teacher) details.appendChild(teachEl);

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

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   WEEK NAVIGATION â€” usa file locali pre-generati
   (nessuna chiamata CORS al portale UniPD)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
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
      // Trova la settimana che contiene oggi (o la piÃ¹ vicina futura)
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
    // index.json non disponibile â€” disabilita navigazione
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
  // Torna il lunedÃ¬ della settimana corrente in formato YYYY-MM-DD
  const monday = new Date(d);
  monday.setDate(d.getDate() - d.getDay() + (d.getDay() === 0 ? -6 : 1));
  return monday.toISOString().split('T')[0];
}


/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   TOOLTIP
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
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
  tooltip.appendChild(tooltipRow(iconClock(), `${lesson.start} &rarr; ${lesson.end}`));
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

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   STATE DISPLAY
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
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

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   INTERSECTION OBSERVER (animate-in)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
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

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   HELPERS
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
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
  // DD-MM-YYYY â†’ DD/MM
  const [d, m, y] = str.split('-');
  if (!d || !m) return str;
  return `${d}/${m}${y ? `/${y}` : ''}`;
}

function isToday(dayKey) {
  return dayKey === dateToKey(new Date());
}

/* â”€â”€ Inline SVG icons â”€â”€ */
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
