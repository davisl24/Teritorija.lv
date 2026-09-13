(() => {
  'use strict';
  if (!document.body.classList.contains('home-page')) return;

  const desktop = window.matchMedia('(min-width: 1025px)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function ensureStyles() {
    const styles = [
      ['./css/home-stabilize.css?v=2', 'homeStabilize'],
      ['./css/home-user-fixes.css?v=1', 'homeUserFixes'],
      ['./css/home-user-final.css?v=2', 'homeUserFinal']
    ];
    styles.forEach(([href, key]) => {
      if (document.querySelector(`link[data-${key}]`)) return;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.dataset[key] = 'true';
      document.head.appendChild(link);
    });
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
    img.setAttribute('width', '1672');
    img.setAttribute('height', '941');

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
    if (!el || !desktop || reducedMotion || typeof el.animate !== 'function') return;
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
    if (!desktop || reducedMotion) return;
    const section = document.querySelector(selector);
    if (!section) return;
    const items = childSelector ? Array.from(section.querySelectorAll(childSelector)) : [section];
    if (!items.length) return;
    const run = () => items.forEach((el, index) => animateIn(el, index * stagger));
    if (!('IntersectionObserver' in window)) { run(); return; }
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      run();
      observer.disconnect();
    }, { threshold: .08, rootMargin: '0px 0px -8% 0px' });
    observer.observe(section);
  }

  function startEndlessTrack(track, speedPxPerSecond) {
    if (!track || reducedMotion || track.dataset.endlessReady === 'true') return;
    track.dataset.endlessReady = 'true';
    let offset = 0;
    let last = performance.now();
    let paused = false;
    let loopWidth = 0;
    let frame = 0;

    const measure = () => {
      const children = Array.from(track.children);
      if (!children.length) return;
      const half = Math.floor(children.length / 2);
      if (!half) return;
      const first = children[0].getBoundingClientRect();
      const secondLoopStart = children[half].getBoundingClientRect();
      loopWidth = Math.max(1, secondLoopStart.left - first.left);
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

    const container = track.parentElement;
    const pause = () => { paused = true; };
    const resume = () => { paused = false; last = performance.now(); };
    container?.addEventListener('mouseenter', pause);
    container?.addEventListener('mouseleave', resume);
    container?.addEventListener('focusin', pause);
    container?.addEventListener('focusout', resume);
    window.addEventListener('resize', measure, { passive: true });
    document.addEventListener('visibilitychange', () => document.hidden ? pause() : resume());

    requestAnimationFrame(() => {
      measure();
      last = performance.now();
      frame = requestAnimationFrame(tick);
    });

    track.addEventListener('DOMNodeRemoved', () => cancelAnimationFrame(frame), { once: true });
  }

  function resetCTA() {
    const inner = document.querySelector('.nv-contact-inner');
    if (!inner) return;
    inner.innerHTML = `
      <p class="nv-contact-eyebrow">Nākamais solis</p>
      <h2>Sāksim ar projektu</h2>
      <p>Pastāsti par vietu, vajadzību un termiņu — palīdzēsim piemeklēt piemērotu risinājumu un sagatavot piedāvājumu.</p>
      <p class="nv-contact-support">Sākam ar īsu sarunu un skaidru nākamo soli.</p>
      <a class="nv-contact-button" href="./pieprasijums/index.html">Pieteikt projektu <span>↗</span></a>`;
  }

  function resetFooter() {
    const footer = document.querySelector('.nv-footer');
    if (!footer) return;
    footer.innerHTML = `
      <div class="nv-shell nv-footer-grid">
        <div class="nv-footer-brand">
          <a href="./index.html" aria-label="Teritorija — sākumlapa">
            <img src="./assets/images/brand/teritorija-logo-light-268w.png" alt="Teritorija" width="268" height="105">
          </a>
          <p>Ārtelpas mēbeles un labiekārtojuma risinājumi ilgtspējīgai videi.</p>
        </div>
        <div>
          <span>Produkti</span>
          <a href="./produkti/ara-mebeles/soli/index.html">Soli un sēdvietas</a>
          <a href="./produkti/ara-mebeles/galdi/index.html">Galdi</a>
          <a href="./produkti/velo-stativi/index.html">Velo statīvi</a>
          <a href="./produkti/velo-nojumes/index.html">Velo nojumes</a>
          <a href="./produkti/rotalu-laukumi/index.html">Rotaļu laukumi</a>
        </div>
        <div>
          <span>Uzņēmums</span>
          <a href="./par-mums/index.html">Par mums</a>
          <a href="#realizetie-dzive">Realizēti dzīvē</a>
          <a href="./katalogi/index.html">Katalogi</a>
          <a href="./pieprasijums/index.html">Pieprasījums</a>
        </div>
        <div>
          <span>Kontakti</span>
          <a href="tel:+37129136973">+371 29136973</a>
          <a href="mailto:einars@teritorija.lv">einars@teritorija.lv</a>
          <p>Rīga, Latvija</p>
          <div class="nv-social">
            <a href="https://www.instagram.com/teritorija.lv/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/teritorija.lv" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>
      <div class="nv-shell nv-footer-bottom">
        <small>© 2026 Teritorija. Visas tiesības aizsargātas.</small>
        <a href="./privatums/index.html">Privātuma politika</a>
      </div>`;
  }

  function replacePartnerNamesWithLogos() {
    const logoByName = {
      'ZANO': 'https://logo.clearbit.com/zano-streetfurniture.com',
      'SAWO': 'https://logo.clearbit.com/sawo.com.pl',
      'GOVA PLAST': 'https://logo.clearbit.com/govaplast.com',
      'GOVAPLAST': 'https://logo.clearbit.com/govaplast.com',
      'URBASTYLE': 'https://logo.clearbit.com/urbastyle.com',
      'FREEKIDS': 'https://logo.clearbit.com/freekids.pl',
      'OUT-SIDER': 'https://logo.clearbit.com/outsiderfurniture.com'
    };
    document.querySelectorAll('.nv-hero-partner-track a').forEach((link) => {
      const label = link.textContent.replace(/↗/g, '').trim().toUpperCase();
      const key = Object.keys(logoByName).find((name) => label === name || label.startsWith(`${name} `));
      if (!key || link.querySelector('img')) return;
      const img = document.createElement('img');
      img.src = logoByName[key];
      img.alt = key;
      img.loading = 'eager';
      img.decoding = 'async';
      img.width = 150;
      img.height = 48;
      img.referrerPolicy = 'no-referrer';
      img.onerror = () => { link.textContent = key; };
      link.replaceChildren(img);
      link.setAttribute('aria-label', key);
      link.dataset.partnerLogo = 'temporary-url';
    });
  }

  function proofCard({ image, place, title, copy, brand }) {
    const url = 'https://www.facebook.com/teritorija.lv';
    return `
      <a class="nv-proof-card-final" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${title} — skatīt Teritorija.lv Facebook">
        <img src="${image}" alt="${title}" loading="lazy" decoding="async" width="1200" height="900">
        <div class="nv-proof-card-body-final">
          <span class="nv-proof-badge-final">FB</span>
          <small>${place}</small>
          <h3>${title}</h3>
          <p>${copy}</p>
          <span class="nv-proof-card-arrow-final">Skatīt publicēto saturu ↗</span>
        </div>
      </a>`;
  }

  function rebuildProof() {
    const section = document.querySelector('.nv-gallery, .nv-proof');
    if (!section) return;
    section.id = 'realizetie-dzive';
    section.className = 'nv-proof';

    const posts = [
      {
        image: './assets/images/products/aplveida-soli.jpg',
        place: 'MADONA · IZGLĪTĪBAS VIDE',
        title: 'Ārtelpa skolai',
        copy: 'Madonas Valsts ģimnāzijas iekšpagalmā uzstādītas ZANO Domino sērijas āra mēbeles.',
        brand: 'ZANO'
      },
      {
        image: './assets/images/products/velo-servisa-stacija.jpg',
        place: 'ĀDAŽU NOVADS · VELO INFRASTRUKTŪRA',
        title: 'Velo servisa stacija',
        copy: 'SAWO velo remonta stacija ar instrumentiem un pumpi ikdienas velo apkopei.',
        brand: 'SAWO'
      },
      {
        image: './assets/images/products/velo-nojume.jpg',
        place: 'TALSI · VELO INFRASTRUKTŪRA',
        title: 'Velo novietne',
        copy: 'Reāli īstenots velo infrastruktūras risinājums publiskai videi.',
        brand: 'SAWO'
      },
      {
        image: './assets/images/products/rotalu-laukums.jpg',
        place: 'PUBLISKĀ ĀRTELPA · ROTAĻU VIDE',
        title: 'Aktivitāšu zona',
        copy: 'Rotaļu un aktivitāšu risinājums publiskai videi dažādām vecuma grupām.',
        brand: 'FREEKIDS · OUT-SIDER'
      }
    ];

    const set = posts.map(proofCard).join('');
    section.innerHTML = `
      <div class="nv-proof-head-final">
        <div>
          <p class="eyebrow">Reāli publicēts</p>
          <h2>Realizēti dzīvē</h2>
          <p>Īsti Teritorija.lv projekti un sociālajos tīklos publicēti darbi.</p>
        </div>
        <a href="https://www.facebook.com/teritorija.lv" target="_blank" rel="noopener noreferrer">Skatīt Facebook ↗</a>
      </div>
      <div class="nv-proof-window-final" aria-label="Teritorija.lv realizētie projekti">
        <div class="nv-proof-track-final">${set}${set}</div>
      </div>`;
  }

  function normalizeImageDimensions() {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      if (!img.hasAttribute('width')) img.setAttribute('width', '1200');
      if (!img.hasAttribute('height')) img.setAttribute('height', '900');
      if (!img.style.aspectRatio) img.style.aspectRatio = '4 / 3';
    });
  }

  function setupScrollTop() {
    let button = document.querySelector('.nv-scroll-top');
    if (!button) {
      button = document.createElement('button');
      button.type = 'button';
      button.className = 'nv-scroll-top';
      button.setAttribute('aria-label', 'Atgriezties lapas augšā');
      button.textContent = '↑';
      document.body.appendChild(button);
    }
    const sync = () => button.classList.toggle('is-visible', window.scrollY > 700);
    sync();
    window.addEventListener('scroll', sync, { passive: true });
    button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' }));
  }

  function animateHero() {
    if (!desktop || reducedMotion) return;
    const hero = document.querySelector('.nv-hero');
    if (!hero) return;
    [
      hero.querySelector('.nv-hero-kicker'),
      hero.querySelector('h1'),
      hero.querySelector('.nv-hero-lead'),
      hero.querySelector('.nv-hero-actions'),
      hero.querySelector('.nv-hero-trust')
    ].filter(Boolean).forEach((el, index) => animateIn(el, index * 120 + 60, 24, index === 1 ? 900 : 740));
  }

  function setupContinuousMotion() {
    startEndlessTrack(document.querySelector('.nv-hero-partner-track'), 38);
    startEndlessTrack(document.querySelector('.nv-proof-track-final'), 24);
  }

  function init() {
    ensureStyles();
    setResponsiveHero();
    resetCTA();
    resetFooter();
    rebuildProof();
    replacePartnerNamesWithLogos();
    normalizeImageDimensions();
    setupScrollTop();
    animateHero();
    setupReveal('.nv-process', 'h2, .nv-process-list details', 90);
    setupReveal('.nv-contact', '.nv-contact-eyebrow, h2, p, .nv-contact-button', 80);
    setupContinuousMotion();
    setTimeout(setupContinuousMotion, 180);
    document.body.dataset.motionActive = 'true';
    document.body.dataset.stabilized = 'true';
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();