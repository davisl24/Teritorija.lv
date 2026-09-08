(() => {
  'use strict';

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
