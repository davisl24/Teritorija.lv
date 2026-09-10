(() => {
  'use strict';

  const DRAFT_STORAGE_KEY = 'teritorijaInquiryDraft';
  const LEGACY_STORAGE_KEY = 'teritorijaInquiry';
  const DRAFT_MAX_AGE = 24 * 60 * 60 * 1000;
  const DRAFT_FIELDS = ['contact', 'email', 'phone', 'location', 'quantity', 'description'];
  const FORM_RECIPIENT = 'einars@teritorija.lv';
  let draftSaveTimer = null;

  function rootPrefix() {
    const segments = window.location.pathname.replace(/\\/g, '/').split('/').filter(Boolean);
    if (segments.length === 0) return './';
    const last = segments[segments.length - 1];
    const directoryDepth = /\.[a-z0-9]+$/i.test(last) ? segments.length - 1 : segments.length;
    return directoryDepth > 0 ? '../'.repeat(directoryDepth) : './';
  }

  function requestUrl(params = {}) {
    const url = new URL(`${rootPrefix()}pieprasijums/index.html`, window.location.href);
    Object.entries(params).forEach(([key, value]) => {
      if (value) url.searchParams.set(key, value);
    });
    return url.href;
  }

  function saveInquiryDraft(form) {
    try {
      const draft = { savedAt: Date.now() };
      DRAFT_FIELDS.forEach((name) => {
        const field = form.elements.namedItem(name);
        draft[name] = field ? String(field.value || '') : '';
      });
      window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
    } catch (error) {
      return;
    }
  }

  function scheduleInquiryDraftSave(form) {
    if (draftSaveTimer) window.clearTimeout(draftSaveTimer);
    draftSaveTimer = window.setTimeout(() => {
      draftSaveTimer = null;
      saveInquiryDraft(form);
    }, 400);
  }

  function restoreInquiryDraft(form) {
    try {
      const raw = window.localStorage.getItem(DRAFT_STORAGE_KEY);
      if (!raw) return;
      const draft = JSON.parse(raw);
      const savedAt = Number(draft && draft.savedAt);
      if (!savedAt || Date.now() - savedAt >= DRAFT_MAX_AGE) {
        window.localStorage.removeItem(DRAFT_STORAGE_KEY);
        return;
      }
      DRAFT_FIELDS.forEach((name) => {
        const field = form.elements.namedItem(name);
        if (field && !String(field.value || '').trim() && typeof draft[name] === 'string') field.value = draft[name];
      });
    } catch (error) {
      try { window.localStorage.removeItem(DRAFT_STORAGE_KEY); } catch (removeError) { return; }
    }
  }

  function clearInquiryDraft() {
    if (draftSaveTimer) {
      window.clearTimeout(draftSaveTimer);
      draftSaveTimer = null;
    }
    try { window.localStorage.removeItem(DRAFT_STORAGE_KEY); } catch (error) { return; }
  }

  function clearLegacyCart() {
    try { window.localStorage.removeItem(LEGACY_STORAGE_KEY); } catch (error) { return; }
  }

  function inferCategory() {
    const current = document.querySelector('.breadcrumbs li:last-child, .breadcrumbs [aria-current="page"]');
    const text = current?.textContent?.trim();
    if (text && text.toLowerCase() !== 'pieprasījums') return text;
    return document.querySelector('h1')?.textContent?.trim() || '';
  }

  function inferManufacturer(trigger) {
    return trigger.dataset.productManufacturer ||
      trigger.closest('.bench-card, .category-product-card, .featured-product')?.querySelector('.eyebrow')?.textContent?.trim() || '';
  }

  function inferProductName(trigger) {
    return trigger.dataset.productName ||
      trigger.closest('.bench-card, .category-product-card, .featured-product')?.querySelector('h3')?.textContent?.trim() || '';
  }

  function setupInquiryTriggers() {
    document.querySelectorAll('[data-inquiry-add]').forEach((trigger) => {
      trigger.textContent = 'Jautāt par šo modeli';
      trigger.removeAttribute('aria-pressed');
    });

    document.addEventListener('click', (event) => {
      const productTrigger = event.target.closest('[data-inquiry-add]');
      if (productTrigger) {
        const product = inferProductName(productTrigger);
        if (!product) return;
        event.preventDefault();
        window.location.href = requestUrl({
          produkts: product,
          razotajs: inferManufacturer(productTrigger)
        });
        return;
      }

      const categoryLink = event.target.closest('.category-cta a[href*="pieprasijums"], .category-catalog-heading a[href*="pieprasijums"]');
      if (!categoryLink) return;
      event.preventDefault();
      window.location.href = requestUrl({ kategorija: inferCategory() });
    });
  }

  function readRequestContext() {
    const params = new URLSearchParams(window.location.search);
    const product = String(params.get('produkts') || '').trim();
    const manufacturer = String(params.get('razotajs') || '').trim();
    const category = String(params.get('kategorija') || '').trim();
    if (product) return { type: 'Produkts', value: product, manufacturer };
    if (category) return { type: 'Kategorija', value: category, manufacturer: '' };
    return { type: '', value: '', manufacturer: '' };
  }

  function renderRequestContext(form) {
    const context = readRequestContext();
    const box = document.querySelector('[data-request-context]');
    const typeField = form?.elements.namedItem('interest_type');
    const valueField = form?.elements.namedItem('interest_value');
    const manufacturerField = form?.elements.namedItem('interest_manufacturer');

    if (typeField) typeField.value = context.type;
    if (valueField) valueField.value = context.value;
    if (manufacturerField) manufacturerField.value = context.manufacturer;

    if (!box || !context.value) return;
    const eyebrow = box.querySelector('[data-request-context-type]');
    const title = box.querySelector('[data-request-context-value]');
    const note = box.querySelector('[data-request-context-note]');
    if (eyebrow) eyebrow.textContent = context.type;
    if (title) title.textContent = context.value;
    if (note) note.textContent = context.manufacturer ? `${context.manufacturer} · Šo informāciju pievienosim pieprasījumam automātiski.` : 'Šo kategoriju pievienosim pieprasījumam automātiski.';
    box.hidden = false;
  }

  function prepareFormPayload(form) {
    const data = new FormData(form);
    return {
      contact: String(data.get('contact') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      location: String(data.get('location') || '').trim(),
      quantity: String(data.get('quantity') || '').trim(),
      description: String(data.get('description') || '').trim(),
      interestType: String(data.get('interest_type') || '').trim(),
      interestValue: String(data.get('interest_value') || '').trim(),
      interestManufacturer: String(data.get('interest_manufacturer') || '').trim()
    };
  }

  async function handleFormSubmit(event) {
    const form = event.currentTarget;
    event.preventDefault();
    const status = document.querySelector('[data-inquiry-form-status]');
    const submitButton = form.querySelector('button[type="submit"]');

    if (!form.checkValidity()) {
      form.reportValidity();
      if (status) status.textContent = 'Pārbaudiet obligātos laukus un e-pasta adresi.';
      return;
    }

    const honeyField = form.elements.namedItem('_honey');
    if (honeyField && String(honeyField.value || '').trim()) {
      if (status) status.textContent = 'Pieprasījums veiksmīgi nosūtīts. Paldies!';
      return;
    }

    const payload = prepareFormPayload(form);
    const formSubmitPayload = {
      name: payload.contact,
      email: payload.email,
      'Vārds / uzņēmums': payload.contact,
      'E-pasts': payload.email,
      'Tālrunis': payload.phone,
      'Projekta vieta': payload.location,
      'Aptuvenais apjoms': payload.quantity,
      'Projekta apraksts': payload.description,
      _subject: 'Jauns Teritorija projekta pieprasījums',
      _template: 'table',
      _url: window.location.href,
      _honey: ''
    };

    if (payload.interestValue) {
      formSubmitPayload['Intereses tips'] = payload.interestType;
      formSubmitPayload['Interesē'] = payload.interestManufacturer
        ? `${payload.interestManufacturer} — ${payload.interestValue}`
        : payload.interestValue;
    }

    if (submitButton) submitButton.disabled = true;
    if (status) status.textContent = 'Nosūta pieprasījumu…';

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${FORM_RECIPIENT}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formSubmitPayload)
      });

      let result = null;
      try { result = await response.json(); } catch (error) { result = null; }
      if (!response.ok || !result || result.success !== 'true' && result.success !== true) {
        throw new Error(result && result.message ? String(result.message) : 'FormSubmit request failed');
      }

      clearInquiryDraft();
      form.reset();
      renderRequestContext(form);
      if (status) status.textContent = 'Pieprasījums veiksmīgi nosūtīts. Paldies!';
    } catch (error) {
      const message = String(error && error.message ? error.message : '');
      if (/activat|confirm/i.test(message)) {
        if (status) status.textContent = 'Forma vēl jāaktivizē saņēmēja e-pastā. Pārbaudiet einars@teritorija.lv iesūtni un apstipriniet FormSubmit aktivizācijas e-pastu.';
      } else if (status) {
        status.textContent = 'Neizdevās nosūtīt pieprasījumu. Lūdzu, mēģiniet vēlreiz.';
      }
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  }

  function init() {
    clearLegacyCart();
    setupInquiryTriggers();
    document.querySelectorAll('[data-inquiry-form]').forEach((form) => {
      restoreInquiryDraft(form);
      renderRequestContext(form);
      form.addEventListener('input', () => scheduleInquiryDraftSave(form));
      form.addEventListener('change', () => scheduleInquiryDraftSave(form));
      form.addEventListener('submit', handleFormSubmit);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();

(() => {
  const currentScript = document.currentScript;
  if (!currentScript) return;
  const base = new URL('.', currentScript.src);
  const loadScript = (name) => {
    const script = document.createElement('script');
    script.src = new URL(name, base).href;
    script.defer = true;
    document.head.append(script);
  };
  loadScript('header.js');
  if (document.querySelector('[data-catalog]')) loadScript('catalog.js');
})();
