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
    try {
      return new URL(src, window.location.href).href;
    } catch (error) {
      return src;
    }
  }

  function productFromCard(card) {
    if (!card) return null;
    const name = card.querySelector('h3')?.textContent?.trim();
    if (!name) return null;
    const manufacturer = card.querySelector('.eyebrow')?.textContent?.trim() || 'TERITORIJA';
    const id = card.dataset.productId || slugify(`${manufacturer}-${name}`);
    if (!id) return null;
    return {
      id,
      name,
      manufacturer,
      image: absoluteImageUrl(card)
    };
  }

  function saveCardToInquiry(card) {
    const product = productFromCard(card);
    if (!product) return null;

    const items = readInquiryItems();
    const existingIndex = items.findIndex((item) => item && item.id === product.id);
    if (existingIndex === -1) {
      items.push(product);
    } else {
      items[existingIndex] = { ...items[existingIndex], ...product };
    }

    try {
      window.localStorage.setItem(INQUIRY_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      return null;
    }

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
    return actionText.includes('pievienot pieprasījumam');
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href*="pieprasijums"]');
    if (!link) return;
    const card = link.closest('.bench-card, .category-product-card, .featured-product');
    if (!card || !isExplicitProductAdd(link, card)) return;
    saveCardToInquiry(card);
  }, true);

  updateRequestCount();
  window.addEventListener('storage', (event) => {
    if (event.key === INQUIRY_STORAGE_KEY) updateRequestCount();
  });

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
      if (externalTarget) {
        link.href = externalTarget;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        return;
      }

      const href = link.href;
      if (href.includes('teritorija.lv/sawo/velosipedu-stativi')) {
        link.href = './produkti/velo-stativi/index.html';
        link.removeAttribute('target');
        link.removeAttribute('rel');
      } else if (href.includes('teritorija.lv/velo-nojume')) {
        link.href = './produkti/velo-nojumes/index.html';
        link.removeAttribute('target');
        link.removeAttribute('rel');
      } else if (href.includes('teritorija.lv/sawo/skrejritenu-stativi')) {
        link.href = './produkti/skrejritenu-stativi/index.html';
        link.removeAttribute('target');
        link.removeAttribute('rel');
      } else if (href.includes('teritorija.lv/betona-ara-mebeles')) {
        link.href = './produkti/betona-mebeles/index.html';
        link.removeAttribute('target');
        link.removeAttribute('rel');
      }
    });

    const range = document.querySelector('.product-range-grid');
    if (range) {
      const additions = [
        ['Betona mēbeles', './produkti/betona-mebeles/index.html', false],
        ['Skrejriteņu statīvi', './produkti/skrejritenu-stativi/index.html', false],
        ['Viedā pilsēta', 'https://www.zano-streetfurniture.com/smart-city', true],
        ['HPL un dizaina mēbeles', 'https://outsiderfurniture.com/', true]
      ];
      const existingLabels = new Set(Array.from(range.querySelectorAll('a span:first-child')).map((el) => el.textContent.trim()));
      additions.forEach(([label, href, external]) => {
        if (existingLabels.has(label)) return;
        const link = document.createElement('a');
        link.href = href;
        if (external) {
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
        }
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
