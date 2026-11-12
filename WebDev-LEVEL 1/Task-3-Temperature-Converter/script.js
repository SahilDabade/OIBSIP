(function () {
  'use strict';

  const ABSOLUTE_ZERO = {
    celsius: -273.15,
    fahrenheit: -459.67,
    kelvin: 0
  };

  const FORMULA_CAPTIONS = {
    celsius: 'F = (C × 9/5) + 32  •  K = C + 273.15',
    fahrenheit: 'C = (F - 32) × 5/9  •  K = (F - 32) × 5/9 + 273.15',
    kelvin: 'C = K - 273.15  •  F = (K - 273.15) × 9/5 + 32'
  };

  const STORAGE_KEYS = {
    THEME: 'thermo_theme',
    HISTORY: 'thermo_history'
  };

  const MAX_HISTORY_ITEMS = 5;

  const dom = {

    html: document.documentElement,
    themeToggleBtn: document.getElementById('theme-toggle-btn'),

    hudCelsius: document.getElementById('hud-celsius-val'),
    hudFahrenheit: document.getElementById('hud-fahrenheit-val'),
    hudKelvin: document.getElementById('hud-kelvin-val'),

    form: document.getElementById('temp-converter-form'),
    input: document.getElementById('temp-input'),
    inputContainer: document.getElementById('input-container'),
    inputFeedback: document.getElementById('input-feedback'),
    clearInputBtn: document.getElementById('clear-input-btn'),
    unitRadios: document.querySelectorAll('input[name="temp-unit"]'),
    convertBtn: document.getElementById('convert-btn'),
    resetBtn: document.getElementById('reset-btn'),
    engineIndicator: document.getElementById('engine-indicator'),
    presetButtons: document.querySelectorAll('.preset-pill-btn'),

    valCelsius: document.getElementById('val-celsius'),
    valFahrenheit: document.getElementById('val-fahrenheit'),
    valKelvin: document.getElementById('val-kelvin'),
    cardCelsius: document.getElementById('card-celsius'),
    cardFahrenheit: document.getElementById('card-fahrenheit'),
    cardKelvin: document.getElementById('card-kelvin'),
    formulaText: document.getElementById('active-formula-text'),

    spectrumPointer: document.getElementById('spectrum-pointer'),
    pointerReading: document.getElementById('pointer-reading'),
    activeZoneName: document.getElementById('active-zone-name'),

    historyList: document.getElementById('history-list'),
    clearHistoryBtn: document.getElementById('clear-history-btn'),

    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toast-message'),
    toastIcon: document.getElementById('toast-icon')
  };

  let toastTimeout = null;

  function formatTemp(value) {
    if (typeof value !== 'number' || isNaN(value) || !isFinite(value)) {
      return '--';
    }
    const rounded = Number(Math.round(Number(value + 'e+4')) + 'e-4');
    return rounded.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 4,
      useGrouping: false
    });
  }

  function calculateConversions(value, unit) {
    let c = 0;
    let f = 0;
    let k = 0;

    switch (unit) {
      case 'celsius':
        c = value;
        f = (value * 9) / 5 + 32;
        k = value + 273.15;
        break;

      case 'fahrenheit':
        c = ((value - 32) * 5) / 9;
        f = value;
        k = ((value - 32) * 5) / 9 + 273.15;
        break;

      case 'kelvin':
        c = value - 273.15;
        f = ((value - 273.15) * 9) / 5 + 32;
        k = value;
        break;

      default:
        return null;
    }

    return { celsius: c, fahrenheit: f, kelvin: k };
  }

  function determineThermalZone(celsius) {
    if (celsius < 0) return { name: 'Freezing', class: 'seg-freezing' };
    if (celsius <= 15) return { name: 'Cool', class: 'seg-cool' };
    if (celsius <= 25) return { name: 'Comfortable', class: 'seg-comfortable' };
    if (celsius <= 35) return { name: 'Warm', class: 'seg-warm' };
    return { name: 'Hot', class: 'seg-hot' };
  }

  function updateSpectrumVisualization(celsius) {
    if (!dom.spectrumPointer) return;

    const zone = determineThermalZone(celsius);
    if (dom.activeZoneName) {
      dom.activeZoneName.textContent = zone.name;
    }

    if (dom.pointerReading) {
      dom.pointerReading.textContent = `${formatTemp(celsius)}°C`;
    }

    const minRange = -20;
    const maxRange = 50;
    let percentage = ((celsius - minRange) / (maxRange - minRange)) * 100;

    if (percentage < 2) percentage = 2;
    if (percentage > 98) percentage = 98;

    dom.spectrumPointer.style.left = `${percentage}%`;
  }

  function getSelectedUnit() {
    const checked = document.querySelector('input[name="temp-unit"]:checked');
    return checked ? checked.value : 'celsius';
  }

  function setSelectedUnit(unit) {
    dom.unitRadios.forEach((radio) => {
      radio.checked = radio.value === unit;
    });
    updateFormulaDisplay(unit);
  }

  function updateFormulaDisplay(unit) {
    if (dom.formulaText && FORMULA_CAPTIONS[unit]) {
      dom.formulaText.innerHTML = FORMULA_CAPTIONS[unit];
    }
  }

  function setEngineStatus(type, label) {
    if (!dom.engineIndicator) return;
    dom.engineIndicator.className = 'engine-indicator';

    if (type === 'error') {
      dom.engineIndicator.classList.add('status-error');
    } else if (type === 'success') {
      dom.engineIndicator.classList.add('status-converted');
    }

    const textEl = dom.engineIndicator.querySelector('.indicator-text');
    if (textEl) textEl.textContent = label;
  }

  function clearError() {
    dom.inputContainer.classList.remove('has-error');
    dom.inputFeedback.textContent = '';
    dom.inputFeedback.className = 'inline-feedback-msg';
    setEngineStatus('ready', 'READY');
  }

  function showError(msg) {
    dom.inputContainer.classList.add('has-error');
    dom.inputFeedback.textContent = msg;
    dom.inputFeedback.className = 'inline-feedback-msg error';
    setEngineStatus('error', 'INVALID');

    dom.valCelsius.textContent = '--';
    dom.valFahrenheit.textContent = '--';
    dom.valKelvin.textContent = '--';
  }

  function validate(raw, unit) {
    const trimmed = raw.trim();

    if (trimmed === '') {
      return { valid: false, message: 'Please enter a temperature value.' };
    }

    const num = Number(trimmed);
    if (isNaN(num) || !isFinite(num)) {
      return { valid: false, message: 'Please enter a valid numeric temperature.' };
    }

    if (unit === 'celsius' && num < ABSOLUTE_ZERO.celsius) {
      return {
        valid: false,
        message: `Temperature cannot be below absolute zero (${ABSOLUTE_ZERO.celsius}°C).`
      };
    }

    if (unit === 'fahrenheit' && num < ABSOLUTE_ZERO.fahrenheit) {
      return {
        valid: false,
        message: `Temperature cannot be below absolute zero (${ABSOLUTE_ZERO.fahrenheit}°F).`
      };
    }

    if (unit === 'kelvin' && num < ABSOLUTE_ZERO.kelvin) {
      return {
        valid: false,
        message: `Temperature cannot be below absolute zero (${ABSOLUTE_ZERO.kelvin} K).`
      };
    }

    return { valid: true, value: num };
  }

  function highlightInputUnitCard(unit) {
    [dom.cardCelsius, dom.cardFahrenheit, dom.cardKelvin].forEach((card) => {
      if (!card) return;
      if (card.dataset.unit === unit) {
        card.classList.add('is-input');
      } else {
        card.classList.remove('is-input');
      }
    });
  }

  function performConversion(isAuto = false) {
    const rawValue = dom.input.value;
    const unit = getSelectedUnit();

    updateFormulaDisplay(unit);

    const validation = validate(rawValue, unit);
    if (!validation.valid) {
      showError(validation.message);
      return false;
    }

    clearError();

    const results = calculateConversions(validation.value, unit);
    if (!results) return false;

    dom.valCelsius.textContent = formatTemp(results.celsius);
    dom.valFahrenheit.textContent = formatTemp(results.fahrenheit);
    dom.valKelvin.textContent = formatTemp(results.kelvin);

    if (dom.hudCelsius) dom.hudCelsius.textContent = formatTemp(results.celsius);
    if (dom.hudFahrenheit) dom.hudFahrenheit.textContent = formatTemp(results.fahrenheit);
    if (dom.hudKelvin) dom.hudKelvin.textContent = formatTemp(results.kelvin);

    [dom.valCelsius, dom.valFahrenheit, dom.valKelvin].forEach((el) => {
      el.classList.remove('highlight-number');
      void el.offsetWidth;
      el.classList.add('highlight-number');
    });

    highlightInputUnitCard(unit);
    setEngineStatus('success', 'CONVERTED');

    updateSpectrumVisualization(results.celsius);

    saveSnapshotToHistory({
      inputVal: validation.value,
      inputUnit: unit,
      celsius: results.celsius,
      fahrenheit: results.fahrenheit,
      kelvin: results.kelvin,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    });

    if (!isAuto) {
      showToast('Conversion computed successfully', 'success');
    }

    return true;
  }

  function copyToClipboard(valueStr, unitLabel, buttonEl) {
    if (!valueStr || valueStr === '--') {
      showToast('No calculated telemetry to copy.', 'error');
      return;
    }

    const payload = `${valueStr} ${unitLabel}`;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(payload).then(
        () => handleCopySuccess(buttonEl, payload),
        () => fallbackCopy(payload, buttonEl)
      );
    } else {
      fallbackCopy(payload, buttonEl);
    }
  }

  function fallbackCopy(text, buttonEl) {
    try {
      const area = document.createElement('textarea');
      area.value = text;
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      const success = document.execCommand('copy');
      document.body.removeChild(area);
      if (success) {
        handleCopySuccess(buttonEl, text);
      } else {
        showToast('Unable to access clipboard.', 'error');
      }
    } catch (e) {
      showToast('Clipboard access denied.', 'error');
    }
  }

  function handleCopySuccess(buttonEl, text) {
    if (buttonEl) {
      const label = buttonEl.querySelector('.copy-btn-text');
      const original = label ? label.textContent : 'Copy';
      buttonEl.classList.add('copied');
      if (label) label.textContent = 'Copied!';

      setTimeout(() => {
        buttonEl.classList.remove('copied');
        if (label) label.textContent = original;
      }, 1800);
    }
    showToast(`Copied telemetry: ${text}`, 'success');
  }

  function showToast(message, type = 'success') {
    if (!dom.toast) return;

    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }

    dom.toastMessage.textContent = message;
    dom.toastIcon.textContent = type === 'success' ? '✓' : '!';
    dom.toastIcon.style.background = type === 'success' ? 'var(--color-success)' : 'var(--color-error)';

    dom.toast.classList.add('show');

    toastTimeout = setTimeout(() => {
      dom.toast.classList.remove('show');
    }, 2800);
  }

  function getStoredHistory() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveSnapshotToHistory(entry) {
    try {
      const history = getStoredHistory();

      if (
        history.length > 0 &&
        history[0].inputVal === entry.inputVal &&
        history[0].inputUnit === entry.inputUnit
      ) {
        return;
      }
      history.unshift(entry);
      if (history.length > MAX_HISTORY_ITEMS) {
        history.length = MAX_HISTORY_ITEMS;
      }
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
      renderHistory();
    } catch (e) {
      console.warn('History storage error', e);
    }
  }

  function clearStoredHistory() {
    try {
      localStorage.removeItem(STORAGE_KEYS.HISTORY);
      renderHistory();
      showToast('Telemetry history cleared.', 'success');
    } catch (e) {
      console.warn('History clear error', e);
    }
  }

  function renderHistory() {
    if (!dom.historyList) return;
    const history = getStoredHistory();

    if (history.length === 0) {
      dom.historyList.innerHTML = `
        <div class="history-empty-state" id="history-empty">
          <span>No telemetry snapshots recorded yet. Perform your first calculation above!</span>
        </div>
      `;
      return;
    }

    const symbols = { celsius: '°C', fahrenheit: '°F', kelvin: 'K' };

    dom.historyList.innerHTML = history
      .map((item, idx) => {
        const symbol = symbols[item.inputUnit] || '';
        return `
          <div class="history-snapshot-row" data-index="${idx}" title="Click to reload this snapshot into the converter">
            <div class="snapshot-left">
              <span class="snapshot-source-pill">${formatTemp(item.inputVal)} ${symbol}</span>
              <span class="snapshot-arrow">→</span>
              <div class="snapshot-values-cluster">
                <span>${formatTemp(item.celsius)} °C</span>
                <span>•</span>
                <span>${formatTemp(item.fahrenheit)} °F</span>
                <span>•</span>
                <span>${formatTemp(item.kelvin)} K</span>
              </div>
            </div>
            <span class="snapshot-timestamp">${item.timestamp || ''}</span>
          </div>
        `;
      })
      .join('');

    const rows = dom.historyList.querySelectorAll('.history-snapshot-row');
    rows.forEach((row) => {
      row.addEventListener('click', () => {
        const index = Number(row.dataset.index);
        const item = history[index];
        if (item) {
          dom.input.value = item.inputVal;
          setSelectedUnit(item.inputUnit);
          performConversion(false);
          updateClearBtnVisibility();
          showToast(`Snapshot reloaded: ${item.inputVal} ${symbols[item.inputUnit]}`, 'success');
        }
      });
    });
  }

  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      applyTheme(savedTheme);
    } else {

      applyTheme('dark');
    }
  }

  function applyTheme(theme) {
    dom.html.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, theme);
    } catch (e) {
      console.warn('LocalStorage unavailable for theme');
    }
  }

  function toggleTheme() {
    const current = dom.html.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  }

  function updateClearBtnVisibility() {
    if (dom.input.value.length > 0) {
      dom.clearInputBtn.classList.add('visible');
    } else {
      dom.clearInputBtn.classList.remove('visible');
    }
  }

  function clearInput() {
    dom.input.value = '';
    dom.input.focus();
    updateClearBtnVisibility();
    clearError();
  }

  function resetAll() {
    dom.input.value = '';
    setSelectedUnit('celsius');
    updateClearBtnVisibility();
    clearError();

    dom.valCelsius.textContent = '--';
    dom.valFahrenheit.textContent = '--';
    dom.valKelvin.textContent = '--';

    [dom.cardCelsius, dom.cardFahrenheit, dom.cardKelvin].forEach((c) => {
      if (c) c.classList.remove('is-input');
    });

    updateSpectrumVisualization(21);
    if (dom.pointerReading) dom.pointerReading.textContent = '21°C';
    if (dom.activeZoneName) dom.activeZoneName.textContent = 'Comfortable';

    if (dom.hudCelsius) dom.hudCelsius.textContent = '21.0';
    if (dom.hudFahrenheit) dom.hudFahrenheit.textContent = '69.8';
    if (dom.hudKelvin) dom.hudKelvin.textContent = '294.15';

    setEngineStatus('ready', 'READY');
    showToast('Converter reset to default state.', 'success');
  }

  function setupEvents() {

    if (dom.themeToggleBtn) {
      dom.themeToggleBtn.addEventListener('click', toggleTheme);
    }

    dom.input.addEventListener('focus', () => {
      dom.inputContainer.classList.add('focused');
    });
    dom.input.addEventListener('blur', () => {
      dom.inputContainer.classList.remove('focused');
    });

    dom.input.addEventListener('input', () => {
      updateClearBtnVisibility();
      if (dom.inputContainer.classList.contains('has-error')) {
        clearError();
      }
    });

    dom.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        performConversion(false);
      }
    });

    dom.clearInputBtn.addEventListener('click', clearInput);

    dom.form.addEventListener('submit', (e) => {
      e.preventDefault();
      performConversion(false);
    });

    dom.resetBtn.addEventListener('click', resetAll);

    dom.unitRadios.forEach((radio) => {
      radio.addEventListener('change', () => {
        updateFormulaDisplay(radio.value);
        if (dom.input.value.trim() !== '') {
          performConversion(true);
        }
      });
    });

    dom.presetButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.value;
        const unit = btn.dataset.unit || 'celsius';
        dom.input.value = val;
        setSelectedUnit(unit);
        updateClearBtnVisibility();
        performConversion(false);
      });
    });

    document.querySelectorAll('.btn-copy-glass').forEach((copyBtn) => {
      copyBtn.addEventListener('click', () => {
        const targetId = copyBtn.dataset.target;
        const unitSign = copyBtn.dataset.unit || '';
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          copyToClipboard(targetEl.textContent.trim(), unitSign, copyBtn);
        }
      });
    });

    if (dom.clearHistoryBtn) {
      dom.clearHistoryBtn.addEventListener('click', clearStoredHistory);
    }
  }

  function init() {
    initTheme();
    updateFormulaDisplay(getSelectedUnit());
    renderHistory();
    setupEvents();
    updateClearBtnVisibility();
    updateSpectrumVisualization(21);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
