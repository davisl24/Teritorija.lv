(() => {
  'use strict';
  if (!document.body.classList.contains('home-page')) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const desktop = window.matchMedia('(min-width: 1025px)').matches;

  function injectStyles() {
    if (document.querySelector('style[data-home-final-motion]')) return;
    const style = document.createElement('style');
    style.dataset.homeFinalMotion = 'true';
    style.textContent = `
      .home-page .nv-hero-partner-track{
        animation:nvTopPartners 24s linear infinite!important;
        animation-play-state:running!important;
        will-change:transform;
      }
      .home-page .nv-hero-partners:hover .nv-hero-partner-track{
        animation-play-state:running!important;
      }
      @keyframes nvTopPartners{
        from{transform:translate3d(0,0,0)}
        to{transform:translate3d(-50%,0,0)}
      }

      @media (min-width:1025px){
        .home-page .nv-solution-card{
          transition:border-color .3s ease,box-shadow .3s ease,transform .38s cubic-bezier(.22,.61,.36,1);
        }
        .home-page .nv-solution-card:hover,
        .home-page .nv-solution-card:focus-within{
          transform:translateY(-5px);
          box-shadow:0 22px 52px rgba(20,28,22,.09);
        }
        .home-page .nv-solution-card .nv-solution-media img{
          transition:transform .65s cubic-bezier(.22,.61,.36,1),filter .45s ease;
        }
        .home-page .nv-solution-card:hover .nv-solution-media img,
        .home-page .nv-solution-card:focus-within .nv-solution-media img{
          transform:scale(1.035);
        }
        .home-page .nv-gallery-item img{
          transition:transform .7s cubic-bezier(.22,.61,.36,1),filter .45s ease;
        }
        .home-page .nv-gallery-item:hover img{transform:scale(1.025)}
        .home-page .nv-gallery-item>div{transition:transform .35s ease}
        .home-page .nv-gallery-item:hover>div{transform:translateY(-3px)}
        .home-page .nv-contact-button span,
        .home-page .nv-text-link span{transition:transform .25s ease}
        .home-page .nv-contact-button:hover span,
        .home-page .nv-text-link:hover span{transform:translateX(4px)}
      }

      @media (prefers-reduced-motion:reduce){
        .home-page .nv-hero-partner-track{animation:none!important}
      }
    `;
    document.head.appendChild(style);
  }

  function repairSolutionImages() {
    const recycled = document.querySelector('.nv-solution-card[data-solution="recycled"] .nv-solution-media img');
    if (!recycled) return;
    recycled.src = 'https://www.govaplast.com/wp-content/uploads/2016/09/canvas_final-1-1-1024x566.jpg';
    recycled.alt = 'GOVA PLAST pārstrādātas plastmasas pilsētvides mēbeles';
    recycled.referrerPolicy = 'no-referrer';
  }

  function animateIn(el, delay = 0, distance = 24, duration = 720) {
    if (!el || reduced || !desktop || typeof el.animate !== 'function') return;
    el.animate(
      [
        { opacity: 0, transform: `translate3d(0,${distance}px,0)` },
        { opacity: 1, transform: 'translate3d(0,0,0)' }
      ],
      {
        duration,
        delay,
        easing: 'cubic-bezier(.22,.61,.36,1)',
        fill: 'both'
      }
    );
  }

  function animateHero() {
    const hero = document.querySelector('.nv-hero');
    if (!hero) return;
    const targets = [
      hero.querySelector('.nv-hero-kicker'),
      hero.querySelector('h1'),
      hero.querySelector('.nv-hero-lead'),
      hero.querySelector('.nv-hero-actions'),
      hero.querySelector('.nv-hero-trust')
    ].filter(Boolean);
    const delays = [40, 150, 300, 420, 560];
    targets.forEach((el, i) => animateIn(el, delays[i], 22, i === 1 ? 820 : 700));
  }

  function observeGroup(selector, childSelector, stagger = 100) {
    const section = document.querySelector(selector);
    if (!section || reduced || !desktop || !('IntersectionObserver' in window)) return;

    const children = Array.from(section.querySelectorAll(childSelector));
    if (!children.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        children.forEach((el, index) => animateIn(el, index * stagger, 26, 760));
        observer.disconnect();
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    observer.observe(section);
  }

  function observeSingle(selector, targetSelector = null, delay = 0) {
    const section = document.querySelector(selector);
    if (!section || reduced || !desktop || !('IntersectionObserver' in window)) return;
    const target = targetSelector ? section.querySelector(targetSelector) : section;
    if (!target) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry || !entry.isIntersecting) return;
      animateIn(target, delay, 24, 760);
      observer.disconnect();
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    observer.observe(section);
  }

  function setupScrollMotion() {
    observeGroup('.nv-about--story', '.nv-about-label, h2, .nv-why-lead, .nv-about-cta, .nv-why-item', 110);
    observeGroup('.nv-solutions--hierarchy', '.nv-section-head, .nv-solution-card', 120);
    observeGroup('.nv-gallery', '.nv-section-head, .nv-gallery-item', 105);
    observeGroup('.nv-process', 'h2, .nv-process-list details', 95);
    observeSingle('.nv-contact', '.nv-contact-inner');
    observeSingle('.nv-footer');
  }

  function init() {
    injectStyles();
    repairSolutionImages();
    animateHero();
    setupScrollMotion();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
