(() => {
  'use strict';
  if (!document.body.classList.contains('home-page')) return;

  const desktop = window.matchMedia('(min-width: 1025px)').matches;

  function ensureStyles() {
    if (document.querySelector('link[data-home-stabilize]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './css/home-stabilize.css?v=2';
    link.dataset.homeStabilize = 'true';
    document.head.appendChild(link);
  }

  function setResponsiveHero() {
    const picture = document.querySelector('.nv-hero-media');
    if (!picture) return;

    const sources = picture.querySelectorAll('source');
    if (sources[0]) sources[0].srcset = './assets/images/hero/Hero-mobile.png';
    if (sources[1]) sources[1].srcset = './assets/images/hero/Hero-tablet.png';

    const img = picture.querySelector('img');
    if (!img) return;
    img.src = './assets/images/hero/Hero-desktop.png';
    img.loading = 'eager';
    img.decoding = 'async';
    img.setAttribute('fetchpriority', 'high');

    if (!document.querySelector('link[data-hero-preload]')) {
      const preload = document.createElement('link');
      preload.rel = 'preload';
      preload.as = 'image';
      preload.href = './assets/images/hero/Hero-desktop.png';
      preload.dataset.heroPreload = 'true';
      document.head.appendChild(preload);
    }
  }

  function animateIn(el, delay = 0, distance = 24, duration = 720) {
    if (!el || !desktop || typeof el.animate !== 'function') return;
    el.animate([
      { opacity: 0, transform: `translate3d(0,${distance}px,0)` },
      { opacity: 1, transform: 'translate3d(0,0,0)' }
    ], {
      duration,
      delay,
      easing: 'cubic-bezier(.22,.61,.36,1)',
      fill: 'both'
    });
  }

  function setupReveal(selector, childSelector, stagger = 90) {
    if (!desktop) return;
    const section = document.querySelector(selector);
    if (!section) return;
    const items = childSelector ? Array.from(section.querySelectorAll(childSelector)) : [section];
    if (!items.length) return;

    const run = () => items.forEach((el, index) => animateIn(el, index * stagger));
    if (!('IntersectionObserver' in window)) {
      run();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      run();
      observer.disconnect();
    }, { threshold: .08, rootMargin: '0px 0px -8% 0px' });

    observer.observe(section);
  }

  function setupSolutionStackReveal() {
    if (!desktop) return;
    const section = document.querySelector('.nv-solutions--hierarchy');
    if (!section) return;

    const head = section.querySelector('.nv-section-head');
    if (head) animateIn(head, 0, 18, 680);

    const cards = Array.from(section.querySelectorAll('.nv-solution-card'));
    if (!cards.length) return;

    if (!('IntersectionObserver' in window)) {
      cards.forEach((card, index) => animateIn(card, index * 80, 30, 760));
      return;
    }

    const revealed = new WeakSet();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || revealed.has(entry.target)) return;
        revealed.add(entry.target);
        animateIn(entry.target, 0, 30, 760);
        observer.unobserve(entry.target);
      });
    }, { threshold: .16, rootMargin: '0px 0px -10% 0px' });

    cards.forEach((card) => observer.observe(card));
  }

  function startEndlessTrack(track, speedPxPerSecond) {
    if (!track || !desktop || track.dataset.endlessReady === 'true') return;
    track.dataset.endlessReady = 'true';

    let offset = 0;
    let last = performance.now();
    let paused = false;
    let loopWidth = 0;
    let frame = 0;

    const measure = () => {
      const total = track.scrollWidth;
      loopWidth = total > 0 ? total / 2 : 0;
    };

    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, .05);
      last = now;

      if (!paused && loopWidth > 0) {
        offset += speedPxPerSecond * dt;
        if (offset >= loopWidth) offset -= loopWidth;
        track.style.transform = `translate3d(${-offset}px,0,0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    const pause = () => { paused = true; };
    const resume = () => { paused = false; last = performance.now(); };

    const container = track.parentElement;
    container?.addEventListener('mouseenter', pause);
    container?.addEventListener('mouseleave', resume);
    container?.addEventListener('focusin', pause);
    container?.addEventListener('focusout', resume);

    window.addEventListener('resize', measure, { passive: true });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) pause();
      else resume();
    });

    measure();
    requestAnimationFrame(() => {
      measure();
      last = performance.now();
      frame = requestAnimationFrame(tick);
    });

    track.addEventListener('DOMNodeRemoved', () => cancelAnimationFrame(frame), { once: true });
  }

  function setupContinuousMotion() {
    startEndlessTrack(document.querySelector('.nv-hero-partner-track'), 42);
    startEndlessTrack(document.querySelector('.nv-proof-track'), 30);
  }

  function guardKnownBadProofMapping() {
    const cards = Array.from(document.querySelectorAll('.nv-proof-post'));
    cards.forEach((card) => {
      const title = card.querySelector('h3')?.textContent?.trim();
      if (title !== 'Velo servisa stacija') return;
      card.removeAttribute('href');
      card.removeAttribute('target');
      card.removeAttribute('rel');
      card.setAttribute('aria-label', 'Velo servisa stacija — oriģinālais ieraksta links tiks pievienots pēc verifikācijas');
      card.dataset.linkPending = 'true';
    });
  }

  function resetCTA() {
    const inner = document.querySelector('.nv-contact-inner');
    if (!inner || inner.dataset.centeredReady === 'true') return;
    inner.dataset.centeredReady = 'true';
    inner.innerHTML = `
      <p class="nv-contact-eyebrow">Nākamais solis</p>
      <h2>Sāksim ar projektu</h2>
      <p>Pastāsti par vietu, vajadzību un termiņu — palīdzēsim piemeklēt piemērotu risinājumu un sagatavot piedāvājumu.</p>
      <p class="nv-contact-support">Sākam ar īsu sarunu un skaidru nākamo soli.</p>
      <a class="nv-contact-button nv-coherent-cta" href="./pieprasijums/index.html">Pieteikt projektu <span>↗</span></a>`;
  }

  function normalizeImageDimensions() {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      const apply = () => {
        if (!img.hasAttribute('width') && img.naturalWidth) img.setAttribute('width', String(img.naturalWidth));
        if (!img.hasAttribute('height') && img.naturalHeight) img.setAttribute('height', String(img.naturalHeight));
      };
      if (img.complete) apply();
      else img.addEventListener('load', apply, { once: true });
    });
  }

  function animateHero() {
    if (!desktop) return;
    const hero = document.querySelector('.nv-hero');
    if (!hero) return;
    [
      hero.querySelector('.nv-hero-kicker'),
      hero.querySelector('h1'),
      hero.querySelector('.nv-hero-lead'),
      hero.querySelector('.nv-hero-actions'),
      hero.querySelector('.nv-hero-trust')
    ].filter(Boolean).forEach((el, index) => animateIn(el, index * 130 + 80, 26, index === 1 ? 900 : 760));
  }

  function init() {
    ensureStyles();
    setResponsiveHero();
    resetCTA();
    guardKnownBadProofMapping();
    normalizeImageDimensions();
    animateHero();

    setupReveal('.nv-about--story', '.nv-about-label, h2, .nv-why-lead, .nv-about-cta, .nv-why-item', 120);
    setupSolutionStackReveal();
    setupReveal('.nv-process', 'h2, .nv-process-list details', 100);
    setupReveal('.nv-contact', '.nv-contact-eyebrow, h2, p, .nv-contact-button', 90);
    setupReveal('.nv-footer', null, 0);

    setupContinuousMotion();
    setTimeout(setupContinuousMotion, 150);

    document.body.dataset.motionActive = 'true';
    document.body.dataset.stabilized = 'true';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();