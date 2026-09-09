(() => {
  'use strict';

  const localCategoryTargets = [
    {
      selector: '.category-card a[href*="category=ara-mebeles"], .product-range-grid a[href*="zano-streetfurniture.com/street-furniture/catalogue/benches"]',
      href: './produkti/ara-mebeles/index.html'
    },
    {
      selector: '.product-range-grid a[href*="zano-streetfurniture.com/street-furniture/catalogue/litter-bins"]',
      href: './produkti/ara-mebeles/index.html#atkritumu-urnas'
    },
    {
      selector: '.product-range-grid a[href*="zano-streetfurniture.com/street-furniture/catalogue/planters"]',
      href: './produkti/ara-mebeles/index.html#puku-kastes'
    },
    {
      selector: '.product-range-grid a[href*="zano-streetfurniture.com/street-furniture/catalogue/tables"]',
      href: './produkti/ara-mebeles/index.html#ara-galdi'
    },
    {
      selector: '.product-range-grid a[href*="zano-streetfurniture.com/street-furniture/catalogue/picnic-tables"]',
      href: './produkti/ara-mebeles/index.html#piknika-galdi'
    },
    {
      selector: '.product-range-grid a[href*="teritorija.lv/velo-nojume"]',
      href: './produkti/velo-nojumes/index.html'
    },
    {
      selector: '.product-range-grid a[href*="teritorija.lv/zano-ara-mebeles"]',
      href: './produkti/ara-mebeles/index.html#koku-sargi'
    }
  ];

  localCategoryTargets.forEach(({ selector, href }) => {
    document.querySelectorAll(selector).forEach((link) => {
      link.href = href;
      link.removeAttribute('target');
      link.removeAttribute('rel');
    });
  });

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
