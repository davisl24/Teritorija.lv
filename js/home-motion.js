(() => {
  'use strict';
  if (!document.body.classList.contains('home-page')) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const manufacturerRoutes = {
    'ZANO': './razotaji/zano/index.html',
    'URBASTYLE': './razotaji/urbastyle/index.html',
    'SAWO': './razotaji/sawo/index.html',
    'GOVA PLAST': './razotaji/gova-plast/index.html',
    'GOVAPLAST': './razotaji/gova-plast/index.html',
    'FREEKIDS': './razotaji/freekids/index.html',
    'OUT-SIDER': './razotaji/out-sider/index.html'
  };

  function normalizeManufacturerLinks(root = document) {
    root.querySelectorAll('.nv-hero-partner-track a, .nv-logo-track a').forEach((link) => {
      const key = link.textContent.trim().toUpperCase();
      if (!manufacturerRoutes[key]) return;
      link.href = manufacturerRoutes[key];
      link.removeAttribute('target');
      link.removeAttribute('rel');
      link.removeAttribute('aria-hidden');
    });
  }

  function makeFooterLogoClickable() {
    const brand = document.querySelector('.nv-footer-brand');
    const img = brand?.querySelector(':scope > img');
    if (!brand || !img) return;
    const link = document.createElement('a');
    link.href = './index.html';
    link.setAttribute('aria-label', 'Teritorija — sākumlapa');
    img.replaceWith(link);
    link.appendChild(img);
  }

  function setupReveal(selector, threshold = .22) {
    const el = document.querySelector(selector);
    if (!el) return;
    if (reduced || !('IntersectionObserver' in window)) {
      el.classList.add('is-revealed');
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      el.classList.add('is-revealed');
      obs.disconnect();
    }, { threshold });
    obs.observe(el);
  }

  function polishHeroValues() {
    const items = Array.from(document.querySelectorAll('.nv-hero-trust > div'));
    if (items.length < 3) return;

    const values = [
      {
        label: 'Savlaicīga izpilde',
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3.2 1.9"></path></svg>'
      },
      {
        label: 'Pārbaudīta kvalitāte',
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m8.4 12.1 2.2 2.3 5-5.2"></path></svg>'
      },
      {
        label: 'Vide cilvēkiem',
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8.2" r="3"></circle><path d="M6.8 18.2c.7-3.2 2.5-4.8 5.2-4.8s4.5 1.6 5.2 4.8"></path></svg>'
      }
    ];

    items.slice(0, 3).forEach((item, index) => {
      const icon = item.querySelector('.nv-trust-icon');
      const text = item.querySelector('p');
      if (icon) icon.innerHTML = values[index].icon;
      if (text) text.textContent = values[index].label;
    });
  }

  function polishProductVisuals() {
    const cards = Array.from(document.querySelectorAll('.nv-product-card')).slice(0, 6);
    if (!cards.length) return;

    const sources = [
      './assets/images/products/zano-flash-02-725-1.png',
      'https://www.zano-streetfurniture.com/images/10908/stolik-quadro-13-076-1-stal-nierdzewna.png',
      './assets/images/products/zano-soft-05-012.png',
      'https://sawo.com.pl/wp-content/uploads/2025/07/slider-wiaty-rowerowe-202506-b.jpg',
      'https://sawo.com.pl/wp-content/uploads/2024/01/stacje-naprawy-1-main-202401.jpg',
      './assets/images/products/rotalu-laukums.jpg'
    ];

    const alt = [
      'ZANO āra sols',
      'ZANO āra galds',
      'ZANO velo statīvs',
      'SAWO velo nojume',
      'SAWO velo servisa stacija',
      'FreeKids rotaļu elements'
    ];

    cards.forEach((card, index) => {
      const img = card.querySelector('.nv-product-image img');
      if (!img) return;
      img.src = sources[index];
      img.alt = alt[index];
      img.loading = 'lazy';
      img.referrerPolicy = 'no-referrer';
      img.addEventListener('error', () => {
        if (index === 1) img.src = './assets/images/products/zano-scandik-02-046.png';
        if (index === 3) img.src = './assets/images/products/velo-nojume.jpg';
        if (index === 4) img.src = './assets/images/products/velo-servisa-stacija.jpg';
      }, { once: true });
    });
  }

  function setupProcessTimeline() {
    const section = document.querySelector('.nv-process');
    const items = Array.from(document.querySelectorAll('.nv-process-list details'));
    if (!section || !items.length) return;

    let activeIndex = 0;
    let timer = null;
    let paused = false;
    let inView = reduced;

    const activate = (index) => {
      activeIndex = (index + items.length) % items.length;
      items.forEach((item, itemIndex) => {
        const active = itemIndex === activeIndex;
        item.classList.toggle('is-active', active);
        item.open = active;
      });
    };

    const stop = () => {
      if (!timer) return;
      window.clearInterval(timer);
      timer = null;
    };

    const start = () => {
      if (reduced || paused || !inView || timer) return;
      timer = window.setInterval(() => activate(activeIndex + 1), 3500);
    };

    items.forEach((item, index) => {
      const summary = item.querySelector('summary');
      summary?.addEventListener('mouseenter', () => {
        paused = true;
        stop();
        activate(index);
      });
      summary?.addEventListener('focusin', () => {
        paused = true;
        stop();
        activate(index);
      });
      summary?.addEventListener('click', () => {
        window.setTimeout(() => activate(index), 0);
      });
    });

    section.addEventListener('mouseleave', () => {
      paused = false;
      start();
    });
    section.addEventListener('focusout', (event) => {
      if (section.contains(event.relatedTarget)) return;
      paused = false;
      start();
    });

    activate(0);
    setupReveal('.nv-process', .18);

    if (!reduced && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        if (inView) start(); else stop();
      }, { threshold: .25 });
      observer.observe(section);
    }
  }

  function setupInfinitePartners() {
    const viewport = document.querySelector('.nv-hero-partners');
    const track = viewport?.querySelector('.nv-hero-partner-track');
    if (!viewport || !track) return;

    normalizeManufacturerLinks(track);
    const originals = Array.from(track.querySelectorAll('a')).slice(0, 6);
    if (!originals.length) return;

    track.replaceChildren(...originals.map((node) => node.cloneNode(true)));
    normalizeManufacturerLinks(track);

    const buildCopies = () => {
      const base = Array.from(track.children).slice(0, 6);
      while (track.scrollWidth < viewport.clientWidth * 3) {
        base.forEach((node) => track.appendChild(node.cloneNode(true)));
      }
      normalizeManufacturerLinks(track);
    };
    buildCopies();

    if (reduced) return;

    let x = 0;
    let last = performance.now();
    let paused = false;
    const speed = 34;

    viewport.addEventListener('mouseenter', () => { paused = true; });
    viewport.addEventListener('mouseleave', () => { paused = false; last = performance.now(); });

    const firstSetWidth = () => {
      const children = Array.from(track.children).slice(0, 6);
      if (!children.length) return 1;
      const first = children[0].getBoundingClientRect();
      const lastItem = children[children.length - 1].getBoundingClientRect();
      const styles = getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;
      return (lastItem.right - first.left) + gap;
    };

    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, .05);
      last = now;
      if (!paused) {
        x -= speed * dt;
        const wrap = firstSetWidth();
        if (-x >= wrap) x += wrap;
        track.style.transform = `translate3d(${x}px,0,0)`;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    window.addEventListener('resize', () => {
      track.style.transform = 'translate3d(0,0,0)';
      x = 0;
      buildCopies();
    }, { passive: true });
  }

  normalizeManufacturerLinks();
  makeFooterLogoClickable();
  polishHeroValues();
  polishProductVisuals();
  setupInfinitePartners();
  setupReveal('.nv-about', .24);
  setupReveal('.nv-gallery', .12);
  setupProcessTimeline();
  requestAnimationFrame(() => normalizeManufacturerLinks());
  window.setTimeout(() => normalizeManufacturerLinks(), 600);
})();
