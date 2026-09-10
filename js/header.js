(() => {
  'use strict';

  const STORAGE_KEY = 'teritorijaInquiry';

  function readInquiryCount() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed.filter(Boolean).length : 0;
    } catch (error) {
      return 0;
    }
  }

  function ensureRequestCount() {
    document.querySelectorAll('a.request-link[href*="pieprasijums"]').forEach((link) => {
      let counter = link.querySelector('[data-request-count]');
      if (!counter) {
        counter = document.createElement('span');
        counter.className = 'request-count';
        counter.dataset.requestCount = '';
        link.append(' ', counter);
      }

      const count = readInquiryCount();
      counter.textContent = String(count);
      counter.hidden = count === 0;
    });
  }

  ensureRequestCount();
  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY) ensureRequestCount();
  });

  if (document.body.classList.contains('home-page')) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const header = document.querySelector('.site-header');
  if (!header || !('IntersectionObserver' in window)) return;

  const sentinel = document.createElement('div');
  sentinel.setAttribute('aria-hidden', 'true');
  sentinel.style.position = 'absolute';
  sentinel.style.top = '40px';
  sentinel.style.left = '0';
  sentinel.style.width = '1px';
  sentinel.style.height = '1px';
  sentinel.style.pointerEvents = 'none';
  document.body.prepend(sentinel);

  const observer = new IntersectionObserver(([entry]) => {
    header.classList.toggle('is-scrolled', !entry.isIntersecting);
  }, { threshold: 0 });

  observer.observe(sentinel);
})();
