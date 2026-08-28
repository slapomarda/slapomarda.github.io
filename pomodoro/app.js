/* ============================================================
   Pomodoro Timer — app.js
   ============================================================ */

'use strict';

// ─── Constants ───────────────────────────────────────────────────────────────

const MODES = {
    classic: {
        label:      'Classica',
        focus:      25 * 60,   // 1500 s
        shortBreak: 5  * 60,   //  300 s
        longBreak:  15 * 60,   //  900 s
        cyclesBeforeLong: 4,
    },
    long: {
        label:      'Lunga',
        focus:      50 * 60,   // 3000 s
        shortBreak: 10 * 60,   //  600 s
        longBreak:  30 * 60,   // 1800 s
        cyclesBeforeLong: 3,
    },
    custom: {
        label:      'Personalizzata',
        focus:      15 * 60,
        shortBreak: 5  * 60,
        longBreak:  15 * 60,
        cyclesBeforeLong: 4,
    },
};

const PHASES = { FOCUS: 'focus', SHORT_BREAK: 'break', LONG_BREAK: 'long-break' };

const EYE_INTERVAL   = 20 * 60; // trigger every 20 min during focus
const EYE_DURATION   = 20;       // 20-second break

const RING_CIRC      = 2 * Math.PI * 140;  // ≈ 879.65
const EYE_RING_CIRC  = 2 * Math.PI * 34;   // ≈ 213.63

// Session storage key
const STORAGE_KEY = 'pomodoro_state';

// Settings (localStorage)
const SETTINGS_KEY = 'pomodoro_settings';
const DEFAULT_SETTINGS = {
    autoAdvance:    true,
    eyeBreaks:      true,
    focusColor:     '#f97316',
    breakColor:     '#22d3ee',
    longBreakColor: '#a78bfa',
    customMode: {
        focus: 15,
        shortBreak: 5,
        longBreak: 15,
        cyclesBeforeLong: 4
    }
};

// ─── State ───────────────────────────────────────────────────────────────────

let state = {
    mode:           'classic',
    totalCycles:    4,
    currentCycle:   1,
    phase:          PHASES.FOCUS,
    secondsLeft:    0,
    totalSeconds:   0,
    running:        false,
    sessionEndTime: null,

    // 20-20-20
    eyeSecondsElapsed: 0,
    eyeActive:         false,
    eyeCountdown:      EYE_DURATION,
};

let settings = { ...DEFAULT_SETTINGS };

let rafId         = null;
let lastTimestamp = null;
let eyeRafId      = null;

// ─── DOM References ───────────────────────────────────────────────────────────

const $ = id => document.getElementById(id);

const screens = {
    setup: $('screen-setup'),
    timer: $('screen-timer'),
};

const overlays = {
    eye:      $('overlay-eye'),
    complete: $('overlay-complete'),
};

const el = {
    // Setup
    modeClassicLabel: $('mode-classic-label'),
    modeLongLabel:    $('mode-long-label'),
    modeCustomLabel:  $('mode-custom-label'),
    modeClassicRadio: $('mode-classic'),
    modeLongRadio:    $('mode-long'),
    modeCustomRadio:  $('mode-custom'),
    customSettingsWrapper: $('custom-settings-wrapper'),
    customModeDetail: $('custom-mode-detail'),
    customFocus:      $('custom-focus'),
    customShort:      $('custom-short'),
    customLong:       $('custom-long'),
    customCycles:     $('custom-cycles'),
    cyclesInput:      $('cycles-input'),
    cyclesMinus:      $('cycles-minus'),
    cyclesPlus:       $('cycles-plus'),
    totalDuration:    $('total-duration'),
    endTime:          $('end-time'),
    startBtn:         $('start-btn'),

    // Timer
    phaseLabel:       $('phase-label'),
    cycleInfo:        $('cycle-info'),
    ringProgress:     $('ring-progress'),
    timerDigits:      $('timer-digits'),
    timerPhaseMini:   $('timer-phase-mini'),
    btnPlayPause:     $('btn-play-pause'),
    iconPlay:         $('icon-play'),
    iconPause:        $('icon-pause'),
    btnSkip:          $('btn-skip'),
    btnReset:         $('btn-reset'),
    btnBackSetup:     $('btn-back-setup'),
    btnFullscreen:    $('btn-fullscreen'),
    iconFsEnter:      $('icon-fullscreen-enter'),
    iconFsExit:       $('icon-fullscreen-exit'),
    sessionEndDisplay: $('session-end-display'),

    // Eye overlay
    eyeCountdown:     $('eye-countdown'),
    eyeRingProgress:  $('eye-ring-progress'),
    btnEyeDismiss:    $('btn-eye-dismiss'),

    // Complete overlay
    completeText:     $('complete-text'),
    btnNewSession:    $('btn-new-session'),

    // Info overlay
    overlayInfo:      $('overlay-info'),
    btnInfoDismiss:   $('btn-info-dismiss'),

    // Settings
    btnSettings:          $('btn-settings'),
    btnSettingsSetup:     $('btn-settings-setup'),
    settingsPanel:        $('settings-panel'),
    settingsBackdrop:     $('settings-backdrop'),
    btnSettingsClose:     $('btn-settings-close'),
    settingAutoAdvance:   $('setting-auto-advance'),
    settingEyeBreaks:     $('setting-eye-breaks'),
    settingFocusColor:    $('setting-focus-color'),
    settingBreakColor:    $('setting-break-color'),
    settingLongBreakColor: $('setting-long-break-color'),
    btnSettingsReset:     $('btn-settings-reset'),
};

// ─── Audio (Web Audio API) ────────────────────────────────────────────────────

let audioCtx = null;

function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
}

/**
 * Play a simple tone.
 * @param {number}  freq       - Hz
 * @param {number}  duration   - seconds
 * @param {'sine'|'triangle'}  type
 * @param {number}  volume     - 0..1
 */
function playTone(freq, duration, type = 'sine', volume = 0.3) {
    try {
        const ctx  = getAudioCtx();
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type      = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(volume, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + duration);
    } catch (_) { /* no audio — silently ignore */ }
}

/** Three ascending chimes → "session done" */
function playFocusEndSound() {
    playTone(523, 0.35, 'triangle', 0.35);
    setTimeout(() => playTone(659, 0.35, 'triangle', 0.3),  180);
    setTimeout(() => playTone(784, 0.6,  'triangle', 0.28), 360);
}

/** Soft double beep → "break over" */
function playBreakEndSound() {
    playTone(440, 0.25, 'sine', 0.3);
    setTimeout(() => playTone(440, 0.25, 'sine', 0.3), 350);
}

/** Gentle chime → eye reminder */
function playEyeSound() {
    playTone(880, 0.4, 'triangle', 0.2);
}

// ─── Notifications ────────────────────────────────────────────────────────────

let notifPermission = 'default';

async function requestNotifPermission() {
    if (!('Notification' in window)) return;
    if (Notification.permission === 'granted') { notifPermission = 'granted'; return; }
    if (Notification.permission !== 'denied') {
        const result = await Notification.requestPermission();
        notifPermission = result;
    } else {
        notifPermission = 'denied';
    }
}

function sendNotif(title, body, icon = '🍅') {
    if (notifPermission !== 'granted') return;
    try {
        new Notification(title, { body, icon: '' });
    } catch (_) {}
}

// ─── Session Calculation ──────────────────────────────────────────────────────

function calcSessionDuration(mode, cycles) {
    const m = MODES[mode];
    let total = 0;
    for (let i = 1; i <= cycles; i++) {
        total += m.focus;
        if (i < cycles) {                       // no break after last cycle
            total += (i % m.cyclesBeforeLong === 0) ? m.longBreak : m.shortBreak;
        }
    }
    return total; // seconds
}

function formatDuration(secs) {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    if (h > 0) return `${h}h ${m}m`;
    return `${m} min`;
}

function formatTime(date) {
    return date.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
}

function updateSummary() {
    const mode   = state.mode;
    const cycles = state.totalCycles;
    const total  = calcSessionDuration(mode, cycles);
    const end    = new Date(Date.now() + total * 1000);
    el.totalDuration.textContent = formatDuration(total);
    el.endTime.textContent       = formatTime(end);
}

// Update the summary periodically so the estimated end time is always accurate
setInterval(() => {
    // Only update if we are on the setup screen
    if (screens.setup.classList.contains('screen--active')) {
        updateSummary();
    }
}, 5000);

// ─── Screen Management ────────────────────────────────────────────────────────

function showScreen(name) {
    Object.entries(screens).forEach(([key, el]) => {
        el.classList.toggle('screen--active', key === name);
    });
}

function showOverlay(name) {
    Object.entries(overlays).forEach(([key, el]) => {
        el.classList.toggle('overlay--active', key === name);
    });
}

function hideOverlays() {
    Object.values(overlays).forEach(el => el.classList.remove('overlay--active'));
}

// ─── Timer Display ────────────────────────────────────────────────────────────

function padTwo(n) { return String(n).padStart(2, '0'); }

function formatMMSS(secs) {
    secs = Math.floor(secs);
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${padTwo(m)}:${padTwo(s)}`;
}

const PHASE_LABELS = {
    [PHASES.FOCUS]:       'Focus',
    [PHASES.SHORT_BREAK]: 'Pausa Corta',
    [PHASES.LONG_BREAK]:  'Pausa Lunga',
};

const PHASE_CSS = {
    [PHASES.FOCUS]:       'phase-focus',
    [PHASES.SHORT_BREAK]: 'phase-break',
    [PHASES.LONG_BREAK]:  'phase-long-break',
};

function updateTimerDisplay() {
    const { phase, secondsLeft, totalSeconds, currentCycle, totalCycles } = state;

    // Digits: integer seconds only
    el.timerDigits.textContent = formatMMSS(secondsLeft);

    // Ring: smooth float, scaled so it reaches 0 exactly when digits first show 00:00
    // (i.e. when secondsLeft drops below 1). Clamp to 0 for the last sub-second.
    const ringSeconds = Math.max(0, secondsLeft - 1);
    const ringTotal   = Math.max(1, totalSeconds - 1);
    const ratio  = ringSeconds / ringTotal;
    const offset = RING_CIRC * (1 - ratio);
    el.ringProgress.style.strokeDashoffset = offset;

    // Labels
    const label = PHASE_LABELS[phase] || 'Focus';
    el.phaseLabel.textContent     = label;
    el.timerPhaseMini.textContent = label;
    // Calculate next step string
    let nextStr = '';
    const m = MODES[state.mode];
    if (phase === PHASES.FOCUS) {
        if (currentCycle >= totalCycles) {
            nextStr = `Pomodoro ${currentCycle} / ${totalCycles} ➔ Fine`;
        } else {
            const isLong = (currentCycle % m.cyclesBeforeLong === 0);
            const nextLabel = isLong ? 'Pausa lunga' : 'Pausa corta';
            nextStr = `Pomodoro ${currentCycle} / ${totalCycles} ➔ ${nextLabel}`;
        }
    } else {
        nextStr = `${PHASE_LABELS[phase]} ➔ Pomodoro ${currentCycle + 1} / ${totalCycles}`;
    }
    el.cycleInfo.textContent = nextStr;

    // Phase colour class on the timer screen
    const screen = screens.timer;
    Object.values(PHASE_CSS).forEach(c => screen.classList.remove(c));
    screen.classList.add(PHASE_CSS[phase] || 'phase-focus');
}

function updateEyeDisplay(countdownSecs) {
    el.eyeCountdown.textContent = countdownSecs;
    const ratio  = countdownSecs / EYE_DURATION;
    const offset = EYE_RING_CIRC * (1 - ratio);
    el.eyeRingProgress.style.strokeDashoffset = offset;
}

// ─── Phase Transitions ────────────────────────────────────────────────────────

function phaseDuration(phase) {
    const m = MODES[state.mode];
    if (phase === PHASES.FOCUS)       return m.focus;
    if (phase === PHASES.SHORT_BREAK) return m.shortBreak;
    if (phase === PHASES.LONG_BREAK)  return m.longBreak;
    return m.focus;
}

function nextPhase() {
    const { phase, currentCycle, totalCycles, mode } = state;
    const m = MODES[mode];

    if (phase === PHASES.FOCUS) {
        // Focus ended
        playFocusEndSound();
        sendNotif('Pomodoro completato! 🍅', 'Prenditi una pausa meritata.');

        if (currentCycle >= totalCycles) {
            // Session complete
            stopTimer();
            showOverlay('complete');
            el.completeText.textContent =
                `Hai completato ${totalCycles} Pomodoro${totalCycles > 1 ? 'i' : ''}. Ottimo lavoro! 🎉`;
            return;
        }

        // Determine break type
        const isLongBreak = (currentCycle % m.cyclesBeforeLong === 0);
        const nextPh = isLongBreak ? PHASES.LONG_BREAK : PHASES.SHORT_BREAK;
        state.phase = nextPh;
        state.secondsLeft = phaseDuration(nextPh);
        state.totalSeconds = state.secondsLeft;
        state.eyeSecondsElapsed = 0; // reset eye timer

    } else {
        // Break ended → next focus cycle
        playBreakEndSound();
        sendNotif('Pausa finita!', 'È ora di concentrarsi di nuovo. 💪');

        state.currentCycle++;
        state.phase        = PHASES.FOCUS;
        state.secondsLeft  = phaseDuration(PHASES.FOCUS);
        state.totalSeconds = state.secondsLeft;
        state.eyeSecondsElapsed = 0;
    }

    updateTimerDisplay();
    saveState();

    // If auto-advance is off, pause at the start of the new phase
    if (!settings.autoAdvance) {
        state.running = false;
        setPlayPauseUI(false);
    }
}

// ─── RAF-based Countdown ──────────────────────────────────────────────────────

function tick(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const elapsed = (timestamp - lastTimestamp) / 1000; // fractional seconds
    lastTimestamp = timestamp;

    if (state.running) {
        state.secondsLeft = Math.max(0, state.secondsLeft - elapsed);

        // 20-20-20 tracking (only during focus)
        if (state.phase === PHASES.FOCUS && !state.eyeActive) {
            state.eyeSecondsElapsed += elapsed;
            if (state.eyeSecondsElapsed >= EYE_INTERVAL) {
                state.eyeSecondsElapsed = 0;
                triggerEyeBreak();
            }
        }

        // Update display ~ once per second
        updateTimerDisplay();

        if (state.secondsLeft <= 0) {
            state.secondsLeft = 0;
            updateTimerDisplay();
            nextPhase();
            // If nextPhase kept the timer running (new phase started), continue the loop
            if (state.running) {
                lastTimestamp = null;
                rafId = requestAnimationFrame(tick);
            }
            return;
        }
    }

    if (state.running) {
        rafId = requestAnimationFrame(tick);
    }
}

function startTimer() {
    if (state.running) return;
    state.running  = true;
    lastTimestamp  = null;
    setPlayPauseUI(true);
    rafId = requestAnimationFrame(tick);
    saveState();
}

function pauseTimer() {
    if (!state.running) return;
    state.running = false;
    setPlayPauseUI(false);
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    saveState();
}

function stopTimer() {
    state.running = false;
    setPlayPauseUI(false);
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
}

function setPlayPauseUI(isPlaying) {
    el.iconPlay.style.display  = isPlaying ? 'none'  : '';
    el.iconPause.style.display = isPlaying ? ''      : 'none';
}

// ─── Eye Break ────────────────────────────────────────────────────────────────

let eyeTimerInterval = null;

function triggerEyeBreak() {
    if (state.eyeActive) return;
    if (!settings.eyeBreaks) return;  // disabled in settings
    state.eyeActive    = true;
    state.eyeCountdown = EYE_DURATION;

    playEyeSound();
    sendNotif('Regola 20-20-20 👁️', 'Guarda a 6 metri per 20 secondi.');

    updateEyeDisplay(EYE_DURATION);
    showOverlay('eye');

    // Pause the main timer while the eye break is active (optional UX choice)
    const wasRunning = state.running;
    if (wasRunning) pauseTimer();

    let remaining = EYE_DURATION;
    eyeTimerInterval = setInterval(() => {
        remaining--;
        if (remaining <= 0) {
            clearInterval(eyeTimerInterval);
            eyeTimerInterval = null;
            dismissEyeBreak(wasRunning);
            return;
        }
        updateEyeDisplay(remaining);
    }, 1000);
}

function dismissEyeBreak(resumeTimer = false) {
    if (eyeTimerInterval) { clearInterval(eyeTimerInterval); eyeTimerInterval = null; }
    state.eyeActive = false;
    hideOverlays();
    if (resumeTimer) startTimer();
}

// ─── Session Initialisation ───────────────────────────────────────────────────

function initSession() {
    const mode       = state.mode;
    const totalSecs  = calcSessionDuration(mode, state.totalCycles);
    const endDate    = new Date(Date.now() + totalSecs * 1000);

    state.currentCycle       = 1;
    state.phase              = PHASES.FOCUS;
    state.secondsLeft        = phaseDuration(PHASES.FOCUS);
    state.totalSeconds       = state.secondsLeft;
    state.running            = false;
    state.eyeSecondsElapsed  = 0;
    state.eyeActive          = false;
    state.sessionEndTime     = endDate.toISOString();

    el.sessionEndDisplay.textContent = `Fine stimata: ${formatTime(endDate)}`;

    setPlayPauseUI(false);
    updateTimerDisplay();
    hideOverlays();
    showScreen('timer');
    saveState();

    // Auto-start the first pomodoro
    startTimer();
}

// ─── Settings ─────────────────────────────────────────────────────────────────

function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(3,5), 16);
    const b = parseInt(hex.slice(5,7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
}

function applySettings() {
    const root = document.documentElement.style;
    root.setProperty('--focus-color',      settings.focusColor);
    root.setProperty('--break-color',      settings.breakColor);
    root.setProperty('--long-break-color', settings.longBreakColor);
    
    root.setProperty('--focus-glow',       hexToRgba(settings.focusColor,     0.35));
    root.setProperty('--break-glow',       hexToRgba(settings.breakColor,     0.30));
    root.setProperty('--long-break-glow',  hexToRgba(settings.longBreakColor, 0.30));

    root.setProperty('--focus-bg',         hexToRgba(settings.focusColor,     0.07));
    root.setProperty('--break-bg',         hexToRgba(settings.breakColor,     0.07));
    root.setProperty('--long-break-bg',    hexToRgba(settings.longBreakColor, 0.07));
}

function saveSettings() {
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch(_) {}
}

function loadSettings() {
    try {
        const raw = localStorage.getItem(SETTINGS_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            // Ensure deep merge for customMode
            if (parsed.customMode) {
                settings.customMode = { ...settings.customMode, ...parsed.customMode };
            }
            Object.assign(settings, parsed);
        }
    } catch(_) {}
    
    MODES.custom.focus = settings.customMode.focus * 60;
    MODES.custom.shortBreak = settings.customMode.shortBreak * 60;
    MODES.custom.longBreak = settings.customMode.longBreak * 60;
    MODES.custom.cyclesBeforeLong = settings.customMode.cyclesBeforeLong;
    
    applySettings();
    // Sync checkboxes and color pickers with loaded values
    el.settingAutoAdvance.checked     = settings.autoAdvance;
    el.settingEyeBreaks.checked       = settings.eyeBreaks;
    el.settingFocusColor.value        = settings.focusColor;
    el.settingBreakColor.value        = settings.breakColor;
    el.settingLongBreakColor.value    = settings.longBreakColor;
    
    // Sync custom settings label and inputs immediately
    syncCustomInputs();
}

function openSettings() {
    el.settingsPanel.hidden    = false;
    el.settingsBackdrop.hidden = false;
}

function closeSettings() {
    el.settingsPanel.hidden    = true;
    el.settingsBackdrop.hidden = true;
}

// ─── State Persistence ────────────────────────────────────────────────────────

function saveState() {
    try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
}

function loadState() {
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (!raw) return false;
        const saved = JSON.parse(raw);
        // Only restore if session was in-progress (not on setup screen)
        if (!saved.sessionEndTime) return false;
        Object.assign(state, saved);
        state.running = false; // never auto-resume after reload
        return true;
    } catch (_) {
        return false;
    }
}

function clearState() {
    try { sessionStorage.removeItem(STORAGE_KEY); } catch (_) {}
}

// ─── Setup Screen Logic ───────────────────────────────────────────────────────

function syncModeUI() {
    el.modeClassicLabel.classList.toggle('mode-option--active', state.mode === 'classic');
    el.modeLongLabel.classList.toggle('mode-option--active', state.mode === 'long');
    el.modeCustomLabel.classList.toggle('mode-option--active', state.mode === 'custom');
    
    if (state.mode === 'custom') {
        el.customSettingsWrapper.classList.add('open');
        syncCustomInputs(); // ensure inputs reflect settings
    } else {
        el.customSettingsWrapper.classList.remove('open');
    }
    
    updateSummary();
}

function setCycles(n) {
    n = Math.max(1, Math.min(20, Math.round(n)));
    state.totalCycles = n;
    el.cyclesInput.value = n;
    updateSummary();
}

function syncCustomInputs() {
    el.customFocus.value = settings.customMode.focus;
    el.customShort.value = settings.customMode.shortBreak;
    el.customLong.value = settings.customMode.longBreak;
    el.customCycles.value = settings.customMode.cyclesBeforeLong;
    el.customModeDetail.textContent = `${settings.customMode.focus} / ${settings.customMode.shortBreak} / ${settings.customMode.longBreak} min`;
}

function stepCustom(field, direction) {
    const inputMap = {
        'focus': el.customFocus,
        'short': el.customShort,
        'long': el.customLong,
        'cycles': el.customCycles
    };
    const input = inputMap[field];
    if (!input) return;
    
    let val = parseInt(input.value) || 0;
    val += direction;
    
    const min = parseInt(input.min) || 1;
    const max = parseInt(input.max) || 120;
    val = Math.max(min, Math.min(max, val));
    
    input.value = val;
    updateCustomSettingsFromInputs();
}

function updateCustomSettingsFromInputs() {
    settings.customMode.focus = Math.max(1, parseInt(el.customFocus.value) || 25);
    settings.customMode.shortBreak = Math.max(1, parseInt(el.customShort.value) || 5);
    settings.customMode.longBreak = Math.max(1, parseInt(el.customLong.value) || 15);
    settings.customMode.cyclesBeforeLong = Math.max(1, parseInt(el.customCycles.value) || 4);
    
    // Update the MODES object dynamically
    MODES.custom.focus = settings.customMode.focus * 60;
    MODES.custom.shortBreak = settings.customMode.shortBreak * 60;
    MODES.custom.longBreak = settings.customMode.longBreak * 60;
    MODES.custom.cyclesBeforeLong = settings.customMode.cyclesBeforeLong;
    
    saveSettings();
    syncCustomInputs();
    updateSummary();
}

// ─── Event Listeners ──────────────────────────────────────────────────────────

// Mode radio
document.querySelectorAll('input[name="mode"]').forEach(radio => {
    radio.addEventListener('change', e => {
        state.mode = e.target.value;
        syncModeUI();
    });
});

// Mode labels (for keyboard / click)
el.modeClassicLabel.addEventListener('click', () => {
    state.mode = 'classic';
    el.modeClassicRadio.checked = true;
    syncModeUI();
});
el.modeLongLabel.addEventListener('click', () => {
    state.mode = 'long';
    el.modeLongRadio.checked = true;
    syncModeUI();
});
el.modeCustomLabel.addEventListener('click', () => {
    state.mode = 'custom';
    el.modeCustomRadio.checked = true;
    syncModeUI();
});

// Custom mode input listeners
[el.customFocus, el.customShort, el.customLong, el.customCycles].forEach(input => {
    input.addEventListener('change', updateCustomSettingsFromInputs);
});

// Info button toggle
const infoBtn = $('info-btn');
infoBtn.addEventListener('click', () => {
    el.overlayInfo.classList.add('overlay--active');
});
el.btnInfoDismiss.addEventListener('click', () => {
    el.overlayInfo.classList.remove('overlay--active');
});
el.overlayInfo.addEventListener('click', (e) => {
    if (e.target === el.overlayInfo) {
        el.overlayInfo.classList.remove('overlay--active');
    }
});

// Cycles ±
el.cyclesMinus.addEventListener('click', () => setCycles(state.totalCycles - 1));
el.cyclesPlus.addEventListener('click',  () => setCycles(state.totalCycles + 1));
el.cyclesInput.addEventListener('change', e => setCycles(parseInt(e.target.value, 10) || 1));
el.cyclesInput.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp')   { e.preventDefault(); setCycles(state.totalCycles + 1); }
    if (e.key === 'ArrowDown') { e.preventDefault(); setCycles(state.totalCycles - 1); }
});

// Start
el.startBtn.addEventListener('click', async () => {
    await requestNotifPermission();
    clearState();
    initSession();

    // Auto-fullscreen on mobile
    if (window.innerWidth <= 768 && !document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
    }
});

// Play / Pause
el.btnPlayPause.addEventListener('click', () => {
    if (state.running) pauseTimer(); else startTimer();
});

// Skip phase
el.btnSkip.addEventListener('click', () => {
    pauseTimer();
    state.secondsLeft = 0;
    nextPhase();
});

// Reset current phase
el.btnReset.addEventListener('click', () => {
    pauseTimer();
    state.secondsLeft        = phaseDuration(state.phase);
    state.totalSeconds       = state.secondsLeft;
    state.eyeSecondsElapsed  = 0;
    updateTimerDisplay();
    saveState();
});

// Back to setup
el.btnBackSetup.addEventListener('click', () => {
    stopTimer();
    clearState();
    hideOverlays();
    showScreen('setup');
    syncModeUI();
});

// Fullscreen
el.btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
    } else {
        document.exitFullscreen().catch(() => {});
    }
});

document.addEventListener('fullscreenchange', () => {
    const isFs = !!document.fullscreenElement;
    el.iconFsEnter.style.display = isFs ? 'none' : '';
    el.iconFsExit.style.display  = isFs ? ''     : 'none';
});

// Eye dismiss
el.btnEyeDismiss.addEventListener('click', () => dismissEyeBreak(!state.running));

// New session button (complete overlay)
el.btnNewSession.addEventListener('click', () => {
    hideOverlays();
    clearState();
    showScreen('setup');
    syncModeUI();
});

// Keyboard shortcuts
document.addEventListener('keydown', e => {
    // Space → play/pause (only on timer screen)
    if (e.code === 'Space' && screens.timer.classList.contains('screen--active')) {
        e.preventDefault();
        if (state.eyeActive) return; // don't toggle during eye break
        if (state.running) pauseTimer(); else startTimer();
    }
    // Escape → dismiss eye overlay, close info overlay, or close settings
    if (e.code === 'Escape') {
        if (state.eyeActive) dismissEyeBreak(!state.running);
        else if (el.overlayInfo.classList.contains('overlay--active')) el.overlayInfo.classList.remove('overlay--active');
        else if (!el.settingsPanel.hidden) closeSettings();
    }
});

// ─── Settings Event Listeners ────────────────────────────────────────────────

el.btnSettings.addEventListener('click', openSettings);
el.btnSettingsSetup.addEventListener('click', openSettings);
el.btnSettingsClose.addEventListener('click', closeSettings);
el.settingsBackdrop.addEventListener('click', closeSettings);

el.settingAutoAdvance.addEventListener('change', e => {
    settings.autoAdvance = e.target.checked;
    saveSettings();
});

el.settingEyeBreaks.addEventListener('change', e => {
    settings.eyeBreaks = e.target.checked;
    saveSettings();
});

el.settingFocusColor.addEventListener('input', e => {
    settings.focusColor = e.target.value;
    applySettings();
    saveSettings();
});

el.settingBreakColor.addEventListener('input', e => {
    settings.breakColor = e.target.value;
    applySettings();
    saveSettings();
});

el.settingLongBreakColor.addEventListener('input', e => {
    settings.longBreakColor = e.target.value;
    applySettings();
    saveSettings();
});

el.btnSettingsReset.addEventListener('click', () => {
    settings = { ...DEFAULT_SETTINGS };
    saveSettings();
    loadSettings();
});

// ─── Initialisation ───────────────────────────────────────────────────────────

(function init() {
    // Load and apply saved settings first
    loadSettings();

    // Set initial ring dashoffset to 0 (full ring shown)
    el.ringProgress.style.strokeDashoffset    = 0;
    el.eyeRingProgress.style.strokeDashoffset = 0;

    const restored = loadState();
    if (restored && state.sessionEndTime) {
        // Restore to timer screen (paused)
        el.sessionEndDisplay.textContent = `Fine stimata: ${formatTime(new Date(state.sessionEndTime))}`;
        setPlayPauseUI(false);
        updateTimerDisplay();
        showScreen('timer');
    } else {
        // Fresh start
        showScreen('setup');
        updateSummary();
        syncModeUI();
    }
})();
