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

  function setupReveal(selector, threshold = 0.22) {
    const element = document.querySelector(selector);
    if (!element) return;
    if (reduced || !('IntersectionObserver' in window)) {
      element.classList.add('is-revealed');
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      element.classList.add('is-revealed');
      observer.disconnect();
    }, { threshold });
    observer.observe(element);
  }

  function setupProcessTimeline() {
    const section = document.querySelector('.nv-process');
    const items = Array.from(document.querySelectorAll('.nv-process-list details'));
    if (!section || !items.length) return;

    items.forEach((item, index) => {
      item.classList.toggle('is-active', index === 0);
      item.addEventListener('toggle', () => {
        if (!item.open) return;
        items.forEach((other) => {
          if (other !== item) other.open = false;
          other.classList.toggle('is-active', other === item);
        });
      });
      item.querySelector('summary')?.addEventListener('mouseenter', () => {
        items.forEach((other) => other.classList.toggle('is-active', other === item));
      });
    });

    setupReveal('.nv-process', .18);
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
      while (track.scrollWidth < viewport.clientWidth * 2.5) {
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

    function firstSetWidth() {
      const children = Array.from(track.children).slice(0, 6);
      if (!children.length) return 1;
      const first = children[0].getBoundingClientRect();
      const lastItem = children[children.length - 1].getBoundingClientRect();
      const styles = getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;
      return (lastItem.right - first.left) + gap;
    }

    function tick(now) {
      const dt = Math.min((now - last) / 1000, .05);
      last = now;
      if (!paused) {
        x -= speed * dt;
        const wrap = firstSetWidth();
        if (-x >= wrap) x += wrap;
        track.style.transform = `translate3d(${x}px,0,0)`;
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    window.addEventListener('resize', () => {
      track.style.transform = 'translate3d(0,0,0)';
      x = 0;
      buildCopies();
    }, { passive: true });
  }

  normalizeManufacturerLinks();
  makeFooterLogoClickable();
  setupInfinitePartners();
  setupReveal('.nv-about', .24);
  setupReveal('.nv-gallery', .12);
  setupProcessTimeline();
})();
