(() => {
  'use strict';

  function rootPrefix() {
    const segments = window.location.pathname.replace(/\\/g, '/').split('/').filter(Boolean);
    if (segments.length === 0) return './';
    const last = segments[segments.length - 1];
    const directoryDepth = /\.[a-z0-9]+$/i.test(last) ? segments.length - 1 : segments.length;
    return directoryDepth > 0 ? '../'.repeat(directoryDepth) : './';
  }

  function normalizeHeaderLinks() {
    const prefix = document.body.classList.contains('home-page') ? './' : rootPrefix();

    document.querySelectorAll('a.brand').forEach((link) => {
      link.href = `${prefix}index.html`;
      link.removeAttribute('target');
      link.removeAttribute('rel');
    });

    document.querySelectorAll('.site-nav a').forEach((link) => {
      const label = link.textContent.trim().toLowerCase();
      if (label === 'produkti') link.href = `${prefix}produkti/index.html`;
      if (label === 'katalogi') link.href = `${prefix}katalogi/index.html`;
      if (label === 'par mums') link.href = `${prefix}par-mums/index.html`;
    });

    document.querySelectorAll('a.request-link').forEach((link) => {
      link.href = `${prefix}pieprasijums/index.html`;
      link.querySelectorAll('[data-request-count], .request-count').forEach((counter) => counter.remove());
      if (!link.textContent.trim()) link.textContent = 'Pieprasījums';
    });
  }

  function remapLegacyCategoryLinks() {
    const prefix = document.body.classList.contains('home-page') ? './' : rootPrefix();
    const routes = {
      'ara-mebeles': `${prefix}produkti/ara-mebeles/index.html`,
      'velo-infrastruktura': `${prefix}produkti/velo-infrastruktura/index.html`,
      'rotalu-laukumi': `${prefix}produkti/rotalu-laukumi/index.html`,
      'parstradata-plastmasa': `${prefix}produkti/parstradata-plastmasa/index.html`
    };

    document.querySelectorAll('a[href*="produkti/index.html?category="]').forEach((link) => {
      try {
        const url = new URL(link.href, window.location.href);
        const category = url.searchParams.get('category');
        const target = routes[category];
        if (!target) return;
        link.href = target;
        link.removeAttribute('target');
        link.removeAttribute('rel');
      } catch (error) {
        return;
      }
    });
  }

  function normalizeFooter() {
    const footer = document.querySelector('.site-footer');
    if (!footer) return;
    const prefix = document.body.classList.contains('home-page') ? './' : rootPrefix();

    footer.innerHTML = `
      <div class="container footer-grid">
        <div class="footer-brand">
          <a class="brand-text" href="${prefix}index.html">Teritorija</a>
          <p>Āra mēbeles un labiekārtojuma risinājumi.</p>
          <ul class="footer-social" aria-label="Sociālie tīkli">
            <li><a href="https://www.facebook.com/teritorija.lv" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/teritorija.lv/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <p class="eyebrow">Produkti</p>
          <nav aria-label="Produktu kategorijas">
            <ul>
              <li><a href="${prefix}produkti/ara-mebeles/index.html">Āra mēbeles</a></li>
              <li><a href="${prefix}produkti/velo-infrastruktura/index.html">Velo infrastruktūra</a></li>
              <li><a href="${prefix}produkti/rotalu-laukumi/index.html">Rotaļu laukumi</a></li>
              <li><a href="${prefix}produkti/parstradata-plastmasa/index.html">Pārstrādātas plastmasas risinājumi</a></li>
            </ul>
          </nav>
        </div>
        <div class="footer-column">
          <p class="eyebrow">Uzņēmums</p>
          <nav aria-label="Uzņēmums">
            <ul>
              <li><a href="${prefix}produkti/index.html">Produkti</a></li>
              <li><a href="${prefix}katalogi/index.html">Katalogi</a></li>
              <li><a href="${prefix}par-mums/index.html">Par mums</a></li>
            </ul>
          </nav>
        </div>
        <div class="footer-column">
          <p class="eyebrow">Kontakti</p>
          <address>
            <a href="mailto:einars@teritorija.lv">einars@teritorija.lv</a>
            <a href="tel:+37129136973">+371 29136973</a>
            <span>Rīga, Latvija</span>
          </address>
        </div>
      </div>
      <div class="container footer-bottom">
        <small>© 2026 SIA “Mārupes noma” · Teritorija</small>
        <a href="${prefix}privatums/index.html">Privātuma politika</a>
      </div>`;
  }

  function loadHomepageMotion() {
    if (!document.body.classList.contains('home-page')) return;

    const ensureFinalMotion = () => {
      const existing = document.querySelector('script[data-home-final-motion]');
      if (existing) return;
      const script = document.createElement('script');
      script.src = './js/home-final-motion.js?v=4';
      script.dataset.homeFinalMotion = 'true';
      document.head.appendChild(script);
    };

    const ensureCoherence = () => {
      const existing = document.querySelector('script[data-home-coherence]');
      if (existing) {
        if (existing.dataset.loaded === 'true') ensureFinalMotion();
        else existing.addEventListener('load', ensureFinalMotion, { once: true });
        return;
      }
      const script = document.createElement('script');
      script.src = './js/home-coherence.js?v=2';
      script.dataset.homeCoherence = 'true';
      script.addEventListener('load', () => {
        script.dataset.loaded = 'true';
        ensureFinalMotion();
      }, { once: true });
      document.head.appendChild(script);
    };

    const ensureNextPass = () => {
      const existing = document.querySelector('script[data-home-next-pass]');
      if (existing) {
        if (existing.dataset.loaded === 'true') ensureCoherence();
        else existing.addEventListener('load', ensureCoherence, { once: true });
        return;
      }
      const script = document.createElement('script');
      script.src = './js/home-next-pass.js?v=4';
      script.dataset.homeNextPass = 'true';
      script.addEventListener('load', () => {
        script.dataset.loaded = 'true';
        ensureCoherence();
      }, { once: true });
      document.head.appendChild(script);
    };

    const existingMotion = document.querySelector('script[data-home-motion]');
    if (existingMotion) {
      if (existingMotion.dataset.loaded === 'true') ensureNextPass();
      else existingMotion.addEventListener('load', ensureNextPass, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = './js/home-motion.js?v=4';
    script.dataset.homeMotion = 'true';
    script.addEventListener('load', () => {
      script.dataset.loaded = 'true';
      ensureNextPass();
    }, { once: true });
    document.head.appendChild(script);
  }

  normalizeHeaderLinks();
  remapLegacyCategoryLinks();
  normalizeFooter();
  loadHomepageMotion();

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
