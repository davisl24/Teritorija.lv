(() => {
  'use strict';
  if (!document.body.classList.contains('home-page')) return;

  const desktop = window.matchMedia('(min-width: 1025px)').matches;

  function injectStyles() {
    if (document.querySelector('style[data-home-final-motion]')) return;
    const style = document.createElement('style');
    style.dataset.homeFinalMotion = 'true';
    style.textContent = `
      .home-page .nv-hero-partner-track{
        animation:nvTopPartners 20s linear infinite!important;
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
    `;
    document.head.appendChild(style);
  }

  function animateIn(el, delay = 0, distance = 24, duration = 720) {
    if (!el || !desktop) return;

    if (typeof el.animate === 'function') {
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
      return;
    }

    el.style.opacity = '0';
    el.style.transform = `translate3d(0,${distance}px,0)`;
    el.style.transition = `opacity ${duration}ms cubic-bezier(.22,.61,.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(.22,.61,.36,1) ${delay}ms`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translate3d(0,0,0)';
    }));
  }

  function animateHero() {
    const hero = document.querySelector('.nv-hero');
    if (!hero || !desktop) return;

    const targets = [
      hero.querySelector('.nv-hero-kicker'),
      hero.querySelector('h1'),
      hero.querySelector('.nv-hero-lead'),
      hero.querySelector('.nv-hero-actions'),
      hero.querySelector('.nv-hero-trust')
    ].filter(Boolean);

    const delays = [60, 180, 330, 470, 620];
    targets.forEach((el, i) => animateIn(el, delays[i], 28, i === 1 ? 900 : 760));
  }

  function observeWhyStory() {
    const section = document.querySelector('.nv-about--story');
    if (!section || !desktop) return;

    const label = section.querySelector('.nv-about-label');
    const heading = section.querySelector('h2');
    const lead = section.querySelector('.nv-why-lead');
    const cta = section.querySelector('.nv-about-cta');
    const benefits = Array.from(section.querySelectorAll('.nv-why-item'));
    const sequence = [label, heading, lead, cta, ...benefits].filter(Boolean);
    const delays = [0, 140, 340, 560, 880, 1160, 1440];

    const run = () => {
      sequence.forEach((el, index) => {
        const isBenefit = index >= 4;
        animateIn(el, delays[index] ?? index * 180, isBenefit ? 30 : 24, isBenefit ? 760 : 820);
      });
    };

    if (!('IntersectionObserver' in window)) {
      run();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      run();
      observer.disconnect();
    }, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' });

    observer.observe(section);
  }

  function observeGroup(selector, childSelector, stagger = 100) {
    const section = document.querySelector(selector);
    if (!section || !desktop) return;

    const children = Array.from(section.querySelectorAll(childSelector));
    if (!children.length) return;

    const run = () => children.forEach((el, index) => animateIn(el, index * stagger, 28, 780));

    if (!('IntersectionObserver' in window)) {
      run();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      run();
      observer.disconnect();
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

    observer.observe(section);
  }

  function observeSingle(selector, targetSelector = null, delay = 0) {
    const section = document.querySelector(selector);
    if (!section || !desktop) return;

    const target = targetSelector ? section.querySelector(targetSelector) : section;
    if (!target) return;

    const run = () => animateIn(target, delay, 26, 780);

    if (!('IntersectionObserver' in window)) {
      run();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      run();
      observer.disconnect();
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

    observer.observe(section);
  }

  function setupScrollMotion() {
    observeWhyStory();
    observeGroup('.nv-solutions--hierarchy', '.nv-section-head, .nv-solution-card', 130);
    observeGroup('.nv-gallery', '.nv-section-head, .nv-gallery-item', 110);
    observeGroup('.nv-process', 'h2, .nv-process-list details', 110);
    observeSingle('.nv-contact', '.nv-contact-inner');
    observeSingle('.nv-footer');
  }

  function init() {
    injectStyles();
    animateHero();
    setupScrollMotion();
    document.body.dataset.motionActive = 'true';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
