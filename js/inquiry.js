(() => {
  'use strict';

  const STORAGE_KEY = 'teritorijaInquiry';
  const memoryState = { items: [] };
  let storageAvailable = true;

  function normalizeItem(value) {
    if (!value || typeof value !== 'object') return null;
    const fields = ['id', 'name', 'manufacturer', 'image'];
    if (!fields.every((field) => typeof value[field] === 'string' && value[field].trim())) return null;
    return {
      id: value.id.trim(),
      name: value.name.trim(),
      manufacturer: value.manufacturer.trim(),
      image: value.image.trim()
    };
  }

  function readItems() {
    if (!storageAvailable) return memoryState.items.slice();
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      const clean = parsed.map(normalizeItem).filter(Boolean);
      const unique = [];
      const seen = new Set();
      clean.forEach((item) => {
        if (!seen.has(item.id)) {
          seen.add(item.id);
          unique.push(item);
        }
      });
      return unique;
    } catch (error) {
      storageAvailable = false;
      return memoryState.items.slice();
    }
  }

  function writeItems(items) {
    const clean = items.map(normalizeItem).filter(Boolean);
    memoryState.items = clean.slice();
    if (!storageAvailable) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(clean));
    } catch (error) {
      storageAvailable = false;
    }
  }

  function updateHeaderCount(items = readItems()) {
    document.querySelectorAll('[data-request-count]').forEach((counter) => {
      if (items.length > 0) {
        counter.textContent = String(items.length);
        counter.hidden = false;
      } else {
        counter.textContent = '0';
        counter.hidden = true;
      }
    });
  }

  function bumpHeaderCount() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('[data-request-count]:not([hidden])').forEach((counter) => {
      counter.classList.remove('is-bumped');
      void counter.offsetWidth;
      counter.classList.add('is-bumped');
      counter.addEventListener('animationend', () => {
        counter.classList.remove('is-bumped');
      }, { once: true });
    });
  }

  function setPageStatus(message) {
    document.querySelectorAll('[data-inquiry-status]').forEach((status) => {
      status.textContent = message;
    });
  }

  function setAddButtonState(button, isAdded) {
    button.classList.toggle('is-added', isAdded);
    button.setAttribute('aria-pressed', isAdded ? 'true' : 'false');
    button.textContent = isAdded ? 'Pievienots pieprasījumam' : 'Pievienot pieprasījumam';
  }

  function syncAddButtons(items = readItems()) {
    const selectedIds = new Set(items.map((item) => item.id));
    document.querySelectorAll('[data-inquiry-add]').forEach((button) => {
      setAddButtonState(button, selectedIds.has(button.dataset.productId));
    });
  }

  function productFromButton(button) {
    return normalizeItem({
      id: button.dataset.productId,
      name: button.dataset.productName,
      manufacturer: button.dataset.productManufacturer,
      image: button.dataset.productImage
    });
  }

  function addProduct(button) {
    const product = productFromButton(button);
    if (!product) return;
    const items = readItems();
    if (items.some((item) => item.id === product.id)) {
      setAddButtonState(button, true);
      setPageStatus(`${product.name} jau ir pieprasījumā.`);
      return;
    }
    items.push(product);
    writeItems(items);
    updateHeaderCount(items);
    bumpHeaderCount();
    syncAddButtons(items);
    syncInquiryPage(items);
    setPageStatus(`${product.name} pievienots pieprasījumam.`);
  }

  function resolveRequestImage(item) {
    if (!document.querySelector('[data-inquiry-page]')) return item.image;
    const filename = item.image.split('/').pop();
    return `../assets/images/products/${filename}`;
  }

  function renderInquiryItem(item) {
    const article = document.createElement('article');
    article.className = 'request-product-item';

    const image = document.createElement('img');
    image.src = resolveRequestImage(item);
    image.alt = '';
    image.width = 128;
    image.height = 96;
    image.loading = 'lazy';
    image.decoding = 'async';

    const copy = document.createElement('div');
    copy.className = 'request-product-copy';
    const manufacturer = document.createElement('p');
    manufacturer.className = 'eyebrow';
    manufacturer.textContent = item.manufacturer;
    const name = document.createElement('h3');
    name.textContent = item.name;
    copy.append(manufacturer, name);

    const remove = document.createElement('button');
    remove.className = 'request-remove';
    remove.type = 'button';
    remove.dataset.inquiryRemove = item.id;
    remove.setAttribute('aria-label', `Noņemt ${item.name} no pieprasījuma`);
    remove.textContent = 'Noņemt';

    article.append(image, copy, remove);
    return article;
  }

  function syncHiddenProducts(items) {
    const field = document.querySelector('[data-inquiry-products]');
    if (!field) return;
    field.value = JSON.stringify(items.map((item) => ({
      id: item.id,
      name: item.name,
      manufacturer: item.manufacturer
    })));
  }

  function syncInquiryPage(items = readItems()) {
    const list = document.querySelector('[data-inquiry-list]');
    const empty = document.querySelector('[data-inquiry-empty]');
    if (!list || !empty) {
      syncHiddenProducts(items);
      return;
    }
    list.replaceChildren(...items.map(renderInquiryItem));
    empty.hidden = items.length > 0;
    list.hidden = items.length === 0;
    syncHiddenProducts(items);
  }

  function removeProduct(id) {
    const current = readItems();
    const removed = current.find((item) => item.id === id);
    const items = current.filter((item) => item.id !== id);
    writeItems(items);
    updateHeaderCount(items);
    syncAddButtons(items);
    syncInquiryPage(items);
    if (removed) setPageStatus(`${removed.name} noņemts no pieprasījuma.`);
  }

  function prepareFormPayload(form) {
    const items = readItems();
    syncHiddenProducts(items);
    const data = new FormData(form);
    return {
      contact: String(data.get('contact') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      location: String(data.get('location') || '').trim(),
      description: String(data.get('description') || '').trim(),
      products: items.map((item) => ({ id: item.id, name: item.name, manufacturer: item.manufacturer }))
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

    const payload = prepareFormPayload(form);
    const formSubmitPayload = {
      'Vārds / uzņēmums': payload.contact,
      'E-pasts': payload.email,
      'Tālrunis': payload.phone,
      'Projekta vieta': payload.location,
      'Projekta apraksts': payload.description,
      _subject: 'Jauns Teritorija projekta pieprasījums',
      _template: 'table'
    };

    if (payload.products.length > 0) {
      formSubmitPayload['Izvēlētie produkti'] = payload.products
        .map((item) => `${item.manufacturer} — ${item.name} (${item.id})`)
        .join('\n');
    }

    if (submitButton) submitButton.disabled = true;
    if (status) status.textContent = 'Nosūta pieprasījumu…';

    try {
      const response = await fetch('https://formsubmit.co/ajax/davislocs135@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formSubmitPayload)
      });

      let result = null;
      try {
        result = await response.json();
      } catch (error) {
        result = null;
      }

      if (!response.ok || !result || result.success !== 'true' && result.success !== true) {
        throw new Error(result && result.message ? result.message : 'FormSubmit request failed');
      }

      writeItems([]);
      updateHeaderCount([]);
      syncAddButtons([]);
      syncInquiryPage([]);
      form.reset();
      syncHiddenProducts([]);
      if (status) status.textContent = 'Pieprasījums veiksmīgi nosūtīts. Paldies!';
    } catch (error) {
      if (status) status.textContent = 'Neizdevās nosūtīt pieprasījumu. Lūdzu, mēģiniet vēlreiz.';
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  }

  function handleClick(event) {
    const addButton = event.target.closest('[data-inquiry-add]');
    if (addButton) {
      addProduct(addButton);
      return;
    }
    const removeButton = event.target.closest('[data-inquiry-remove]');
    if (removeButton) removeProduct(removeButton.dataset.inquiryRemove);
  }

  function init() {
    const items = readItems();
    updateHeaderCount(items);
    syncAddButtons(items);
    syncInquiryPage(items);
    document.addEventListener('click', handleClick);
    document.querySelectorAll('[data-inquiry-form]').forEach((form) => {
      form.addEventListener('submit', handleFormSubmit);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
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
