(() => {
  'use strict';

  const INQUIRY_STORAGE_KEY = 'teritorijaInquiry';

  function slugify(value) {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function readInquiryItems() {
    try {
      const raw = window.localStorage.getItem(INQUIRY_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
    } catch (error) {
      return [];
    }
  }

  function updateRequestCount(items = readInquiryItems()) {
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

  function absoluteImageUrl(card) {
    const src = card?.querySelector('img')?.getAttribute('src') || '';
    if (!src) return '';
    try { return new URL(src, window.location.href).href; } catch (error) { return src; }
  }

  function inferManufacturer(card) {
    const explicit = card?.querySelector('.eyebrow')?.textContent?.trim();
    if (explicit) return explicit;
    const path = window.location.pathname.toLowerCase();
    if (path.includes('velo-') || path.includes('divu-limenu') || path.includes('skrejritenu')) return 'SAWO';
    if (path.includes('betona-mebeles')) return 'URBASTYLE';
    if (path.includes('parstradata-plastmasa')) return 'GOVAPLAST';
    if (path.includes('rotalu-laukumi')) return 'FREEKIDS';
    return 'TERITORIJA';
  }

  function productFromCard(card) {
    if (!card) return null;
    const name = card.querySelector('h3')?.textContent?.trim();
    if (!name) return null;
    const manufacturer = inferManufacturer(card);
    const id = card.dataset.productId || slugify(`${manufacturer}-${name}`);
    if (!id) return null;
    return { id, name, manufacturer, image: absoluteImageUrl(card) };
  }

  function saveCardToInquiry(card) {
    const product = productFromCard(card);
    if (!product) return null;
    const items = readInquiryItems();
    const existingIndex = items.findIndex((item) => item && item.id === product.id);
    if (existingIndex === -1) items.push(product);
    else items[existingIndex] = { ...items[existingIndex], ...product };
    try { window.localStorage.setItem(INQUIRY_STORAGE_KEY, JSON.stringify(items)); }
    catch (error) { return null; }
    updateRequestCount(items);
    return product;
  }

  function isExplicitProductAdd(link, card) {
    if (link.matches('[data-inquiry-add]')) return true;
    const actionText = [
      link.textContent,
      card?.querySelector('.bench-request')?.textContent,
      card?.querySelector('.card-link')?.textContent
    ].filter(Boolean).join(' ').toLowerCase();
    return actionText.includes('pievienot pieprasījumam') ||
      actionText.includes('pieteikt risinājumu') ||
      actionText.includes('pieteikt modeli');
  }

  function markAdded(link, card) {
    card?.classList.add('is-added-to-inquiry');
    const action = link.querySelector('.bench-request, .card-link') || card?.querySelector('.bench-request, .card-link') || link;
    if (action) {
      action.textContent = 'Pievienots pieprasījumam ✓';
      action.setAttribute('aria-live', 'polite');
    }
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href*="pieprasijums"]');
    if (!link) return;
    const card = link.closest('.bench-card, .category-product-card, .featured-product');
    if (!card || !isExplicitProductAdd(link, card)) return;
    event.preventDefault();
    event.stopPropagation();
    const product = saveCardToInquiry(card);
    if (product) markAdded(link, card);
  }, true);

  function rootPrefix() {
    const segments = window.location.pathname.replace(/\\/g, '/').split('/').filter(Boolean);
    if (segments.length === 0) return './';
    const last = segments[segments.length - 1];
    const directoryDepth = /\.[a-z0-9]+$/i.test(last) ? segments.length - 1 : segments.length;
    return directoryDepth > 0 ? '../'.repeat(directoryDepth) : './';
  }

  function enforceInternalLogoLinks() {
    const home = `${rootPrefix()}index.html`;
    document.querySelectorAll('a.brand').forEach((link) => {
      link.href = home;
      link.removeAttribute('target');
      link.removeAttribute('rel');
    });
  }

  function remapOldTeritorijaLinks() {
    const prefix = document.body.classList.contains('home-page') ? './' : rootPrefix();
    const routes = [
      [/teritorija\.lv\/sawo\/velosipedu-stativi/i, `${prefix}produkti/velo-stativi/index.html`],
      [/teritorija\.lv\/velo-nojume/i, `${prefix}produkti/velo-nojumes/index.html`],
      [/teritorija\.lv\/sawo\/skrejritenu-stativi/i, `${prefix}produkti/skrejritenu-stativi/index.html`],
      [/teritorija\.lv\/sawo\/velosipedu-noliktavas/i, `${prefix}produkti/velo-glabatuves/index.html`],
      [/teritorija\.lv\/sawo\/?$/i, `${prefix}produkti/velo-infrastruktura/index.html`],
      [/teritorija\.lv\/betona-ara-mebeles/i, `${prefix}produkti/betona-mebeles/index.html`],
      [/teritorija\.lv\/govaplast/i, `${prefix}produkti/parstradata-plastmasa/index.html`],
      [/teritorija\.lv\/zano-ara-mebeles/i, `${prefix}produkti/ara-mebeles/index.html`]
    ];
    document.querySelectorAll('a[href]').forEach((link) => {
      const href = link.href;
      for (const [pattern, target] of routes) {
        if (!pattern.test(href)) continue;
        link.href = target;
        link.removeAttribute('target');
        link.removeAttribute('rel');
        break;
      }
    });
  }

  function remapHomepageCategoryQueries() {
    if (!document.body.classList.contains('home-page')) return;
    const routes = {
      'ara-mebeles': './produkti/ara-mebeles/index.html',
      'velo-infrastruktura': './produkti/velo-infrastruktura/index.html',
      'rotalu-laukumi': './produkti/rotalu-laukumi/index.html',
      'parstradata-plastmasa': './produkti/parstradata-plastmasa/index.html'
    };
    document.querySelectorAll('a[href*="produkti/index.html?category="]').forEach((link) => {
      try {
        const url = new URL(link.href, window.location.href);
        const category = url.searchParams.get('category');
        if (!routes[category]) return;
        link.href = routes[category];
        link.removeAttribute('target');
        link.removeAttribute('rel');
      } catch (error) {}
    });
  }

  function remapManufacturerCards() {
    if (!document.body.classList.contains('home-page')) return;
    const targets = {
      'ZANO': './produkti/ara-mebeles/index.html',
      'URBASTYLE': './produkti/betona-mebeles/index.html',
      'SAWO': './produkti/velo-infrastruktura/index.html',
      'GOVA PLAST': './produkti/parstradata-plastmasa/index.html',
      'GOVAPLAST': './produkti/parstradata-plastmasa/index.html',
      'FREEKIDS': './produkti/rotalu-laukumi/index.html',
      'OUT-SIDER': './produkti/ara-mebeles/index.html'
    };
    document.querySelectorAll('a[href]').forEach((link) => {
      const text = link.textContent.replace(/↗/g, '').trim().toUpperCase();
      const key = Object.keys(targets).find((name) => text === name || text.startsWith(`${name} `));
      if (!key) return;
      link.href = targets[key];
      link.removeAttribute('target');
      link.removeAttribute('rel');
    });
  }

  function replaceMediaWithPlaceholder(media, label = 'Attēls nav pieejams') {
    if (!media || media.classList.contains('is-image-placeholder')) return;
    media.classList.add('is-image-placeholder');
    media.replaceChildren();
    const placeholder = document.createElement('span');
    placeholder.className = 'catalog-image-placeholder';
    placeholder.textContent = label;
    media.appendChild(placeholder);
  }

  function normalizeCatalogImages() {
    document.querySelectorAll('.category-product-grid, .catalog-hub-grid').forEach((grid) => {
      grid.querySelectorAll('.category-product-media, .catalog-hub-card').forEach((media) => {
        const img = media.querySelector('img');
        if (!img) return;
        img.addEventListener('error', () => replaceMediaWithPlaceholder(media), { once: true });
      });
    });
  }

  function setCardImage(card, src, alt) {
    if (!card || !src) return;
    const media = card.querySelector('.category-product-media, .bench-media');
    if (!media) return;
    media.classList.remove('is-image-placeholder');
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt || card.querySelector('h3')?.textContent?.trim() || '';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.referrerPolicy = 'no-referrer';
    media.replaceChildren(img);
  }

  function findCardByTitle(title) {
    return Array.from(document.querySelectorAll('.category-product-card, .bench-card'))
      .find((card) => card.querySelector('h3')?.textContent?.trim().toLowerCase() === title.toLowerCase());
  }

  function enrichSawoBikeRacks() {
    const path = window.location.pathname.toLowerCase();
    if (!path.includes('/produkti/velo-stativi/')) return;

    const images = {
      'U-tipa statīvi': 'https://static.wixstatic.com/media/e827f3_ad3b72d482fc42319e29dda8444b07ef~mv2.jpg/v1/fill/w_891,h_414,q_90/e827f3_ad3b72d482fc42319e29dda8444b07ef~mv2.jpg',
      'Trapecveida statīvi': 'https://static.wixstatic.com/media/e827f3_b51554a34caf44e3bba698d8f270d795~mv2.jpg/v1/fill/w_891,h_417,q_90/e827f3_b51554a34caf44e3bba698d8f270d795~mv2.jpg',
      'Privātām teritorijām': 'https://static.wixstatic.com/media/e827f3_b04f4c4114db4cb2b148572457338784~mv2.jpg/v1/fill/w_891,h_417,q_90/e827f3_b04f4c4114db4cb2b148572457338784~mv2.jpg',
      'Moduļu statīvi': 'https://static.wixstatic.com/media/e827f3_d2cd7cd27a5441ebafd526dc0363d70e~mv2.png/v1/fill/w_980,h_653,al_c,q_90/e827f3_d2cd7cd27a5441ebafd526dc0363d70e~mv2.png'
    };
    Object.entries(images).forEach(([title, src]) => setCardImage(findCardByTitle(title), src, `SAWO ${title}`));

    const heroLead = document.querySelector('.listing-hero .lead, .category-hero .lead');
    if (heroLead) {
      heroLead.textContent = 'SAWO piedāvā plašu velostatīvu klāstu publiskām pilsētu ielām, parkiem, uzņēmumu stāvvietām un privātām teritorijām. Statīvi apvieno izturību, mūsdienīgu dizainu un pielāgojamību dažādām vidēm.';
    }

    const container = document.querySelector('.listing-catalog .container, .category-catalog .container');
    if (container && !container.querySelector('[data-sawo-source-copy]')) {
      const note = document.createElement('div');
      note.className = 'category-source-note';
      note.dataset.sawoSourceCopy = 'true';
      note.innerHTML = '<strong>Materiāli un apdare:</strong> SAWO statīvi tiek cinkoti un tos iespējams nokrāsot jebkurā RAL tonī. Statīvi tiek izgatavoti no 33, 42 vai 48 mm diametra caurulēm. Moduļu statīvi tiek montēti uz izturīgas sliedes; vienā modulī iespējami 4 vai 5 statīvi.';
      const toolbar = container.querySelector('.listing-toolbar');
      if (toolbar) toolbar.insertAdjacentElement('afterend', note);
      else container.prepend(note);
    }
  }

  updateRequestCount();
  window.addEventListener('storage', (event) => {
    if (event.key === INQUIRY_STORAGE_KEY) updateRequestCount();
  });

  enforceInternalLogoLinks();
  remapOldTeritorijaLinks();
  remapHomepageCategoryQueries();
  remapManufacturerCards();
  enrichSawoBikeRacks();
  normalizeCatalogImages();

  if (document.body.classList.contains('home-page')) {
    const style = document.createElement('style');
    style.textContent = `
      .home-page .home-hero{align-items:center!important;}
      .home-page .home-hero .hero-content{grid-template-columns:1fr!important;grid-template-rows:auto auto auto!important;justify-items:center!important;align-items:center!important;text-align:center!important;width:min(calc(100% - 48px),920px)!important;margin:76px auto 0!important;gap:18px!important;}
      .home-page .home-hero h1{grid-column:1!important;grid-row:1!important;max-width:11ch!important;margin:0 auto!important;}
      .home-page .home-hero .lead{grid-column:1!important;grid-row:2!important;align-self:auto!important;max-width:42ch!important;margin:0 auto!important;}
      .home-page .home-hero .hero-actions{grid-column:1!important;grid-row:3!important;justify-content:center!important;margin-top:6px!important;}
      @media(max-width:767px){.home-page .home-hero .hero-content{width:min(calc(100% - 32px),680px)!important;margin-top:64px!important;}.home-page .home-hero h1{max-width:9ch!important;}}
    `;
    document.head.appendChild(style);

    const externalProductTargets = {
      './produkti/zano-flash-02-725-1/index.html': 'https://www.zano-streetfurniture.com/street-furniture/catalogue/benches/flash-bench-02-725-1',
      './produkti/zano-scandik-02-046/index.html': 'https://www.zano-streetfurniture.com/street-furniture/catalogue/benches/scandik-bench-02-046',
      './produkti/zano-soft-05-012/index.html': 'https://www.zano-streetfurniture.com/street-furniture/catalogue/bicycle-racks/soft-bicycle-rack-05-012',
      './produkti/zano-stilo-18-048/index.html': 'https://www.zano-streetfurniture.com/street-furniture/catalogue/bicycle-zone/stilo-bicycle-repair-station-18-048'
    };
    document.querySelectorAll('a[href]').forEach((link) => {
      const rawHref = link.getAttribute('href');
      const externalTarget = externalProductTargets[rawHref];
      if (!externalTarget) return;
      link.href = externalTarget;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });

    const range = document.querySelector('.product-range-grid');
    if (range) {
      const additions = [
        ['Betona mēbeles', './produkti/betona-mebeles/index.html', false],
        ['Skrejriteņu statīvi', './produkti/skrejritenu-stativi/index.html', false],
        ['Viedā pilsēta', 'https://www.zano-streetfurniture.com/smart-city', true],
        ['HPL un dizaina mēbeles', './produkti/ara-mebeles/index.html', false]
      ];
      const existingLabels = new Set(Array.from(range.querySelectorAll('a span:first-child')).map((el) => el.textContent.trim()));
      additions.forEach(([label, href, external]) => {
        if (existingLabels.has(label)) return;
        const link = document.createElement('a');
        link.href = href;
        if (external) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
        link.innerHTML = `<span>${label}</span><span aria-hidden="true">↗</span>`;
        range.appendChild(link);
      });
    }
  }

  const button = document.querySelector('[data-back-to-top]');
  if (!button) return;
  const sentinel = document.createElement('span');
  sentinel.className = 'top-scroll-sentinel';
  sentinel.setAttribute('aria-hidden', 'true');
  document.body.prepend(sentinel);
  button.hidden = false;
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    const passedThreshold = !entry.isIntersecting && entry.boundingClientRect.top < 0;
    button.classList.toggle('is-visible', passedThreshold);
  });
  observer.observe(sentinel);
  button.addEventListener('click', () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  });
})();