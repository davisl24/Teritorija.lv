(() => {
  'use strict';
  if (!document.body.classList.contains('home-page')) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function injectStyles() {
    if (document.querySelector('style[data-home-final-motion]')) return;
    const style = document.createElement('style');
    style.dataset.homeFinalMotion = 'true';
    style.textContent = `
      @media (min-width:1025px){
        .home-page .nv-motion-item{
          opacity:0;
          transform:translateY(24px);
          transition:opacity .72s cubic-bezier(.22,.61,.36,1),transform .72s cubic-bezier(.22,.61,.36,1);
          transition-delay:var(--nv-motion-delay,0ms);
          will-change:opacity,transform;
        }
        .home-page .nv-motion-item.is-visible{
          opacity:1;
          transform:none;
        }

        .home-page .nv-hero .nv-hero-kicker,
        .home-page .nv-hero h1,
        .home-page .nv-hero .nv-hero-lead,
        .home-page .nv-hero .nv-hero-actions,
        .home-page .nv-hero .nv-hero-trust{
          opacity:0;
          transform:translateY(18px);
        }
        .home-page.nv-motion-ready .nv-hero .nv-hero-kicker{animation:nvHeroIn .62s .05s both cubic-bezier(.22,.61,.36,1)}
        .home-page.nv-motion-ready .nv-hero h1{animation:nvHeroIn .76s .14s both cubic-bezier(.22,.61,.36,1)}
        .home-page.nv-motion-ready .nv-hero .nv-hero-lead{animation:nvHeroIn .68s .28s both cubic-bezier(.22,.61,.36,1)}
        .home-page.nv-motion-ready .nv-hero .nv-hero-actions{animation:nvHeroIn .68s .38s both cubic-bezier(.22,.61,.36,1)}
        .home-page.nv-motion-ready .nv-hero .nv-hero-trust{animation:nvHeroIn .72s .5s both cubic-bezier(.22,.61,.36,1)}
        @keyframes nvHeroIn{to{opacity:1;transform:none}}

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
        .home-page .nv-motion-item,
        .home-page .nv-hero .nv-hero-kicker,
        .home-page .nv-hero h1,
        .home-page .nv-hero .nv-hero-lead,
        .home-page .nv-hero .nv-hero-actions,
        .home-page .nv-hero .nv-hero-trust{
          opacity:1!important;
          transform:none!important;
          animation:none!important;
          transition:none!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function mark(el, delay = 0) {
    if (!el || el.classList.contains('nv-motion-item')) return;
    el.classList.add('nv-motion-item');
    el.style.setProperty('--nv-motion-delay', `${delay}ms`);
  }

  function prepareMotionTargets() {
    const about = document.querySelector('.nv-about--story');
    if (about) {
      mark(about.querySelector('.nv-about-label'), 0);
      mark(about.querySelector('h2'), 70);
      mark(about.querySelector('.nv-why-lead'), 140);
      mark(about.querySelector('.nv-about-cta'), 210);
      about.querySelectorAll('.nv-why-item').forEach((item, index) => mark(item, index * 110));
    }

    const solutions = document.querySelector('.nv-solutions--hierarchy');
    if (solutions) {
      mark(solutions.querySelector('.nv-section-head'), 0);
      solutions.querySelectorAll('.nv-solution-card').forEach((card, index) => mark(card, index * 100));
    }

    const gallery = document.querySelector('.nv-gallery');
    if (gallery) {
      mark(gallery.querySelector('.nv-section-head'), 0);
      gallery.querySelectorAll('.nv-gallery-item').forEach((item, index) => mark(item, index * 90));
    }

    const process = document.querySelector('.nv-process');
    if (process) {
      mark(process.querySelector('h2'), 0);
      process.querySelectorAll('.nv-process-list details').forEach((item, index) => mark(item, index * 75));
    }

    const contact = document.querySelector('.nv-contact');
    if (contact) {
      const inner = contact.querySelector('.nv-contact-inner');
      if (inner) mark(inner, 0);
    }

    const footer = document.querySelector('.nv-footer');
    if (footer) mark(footer, 0);
  }

  function observeMotion() {
    const items = Array.from(document.querySelectorAll('.nv-motion-item'));
    if (!items.length) return;

    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -7% 0px' });

    items.forEach((item) => observer.observe(item));
  }

  function init() {
    injectStyles();
    prepareMotionTargets();
    observeMotion();
    requestAnimationFrame(() => document.body.classList.add('nv-motion-ready'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
