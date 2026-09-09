(() => {
  'use strict';

  if (document.body.classList.contains('home-page')) {
    const style = document.createElement('style');
    style.textContent = `
      .home-page .home-hero{align-items:center!important;}
      .home-page .home-hero .hero-content{
        grid-template-columns:1fr!important;
        grid-template-rows:auto auto auto!important;
        justify-items:center!important;
        align-items:center!important;
        text-align:center!important;
        width:min(calc(100% - 48px),920px)!important;
        margin:76px auto 0!important;
        gap:18px!important;
      }
      .home-page .home-hero h1{grid-column:1!important;grid-row:1!important;max-width:11ch!important;margin:0 auto!important;}
      .home-page .home-hero .lead{grid-column:1!important;grid-row:2!important;align-self:auto!important;max-width:42ch!important;margin:0 auto!important;}
      .home-page .home-hero .hero-actions{grid-column:1!important;grid-row:3!important;justify-content:center!important;margin-top:6px!important;}
      @media(max-width:767px){
        .home-page .home-hero .hero-content{width:min(calc(100% - 32px),680px)!important;margin-top:64px!important;}
        .home-page .home-hero h1{max-width:9ch!important;}
      }
    `;
    document.head.appendChild(style);

    const directTargets = [
      { match: 'category=ara-mebeles', href: './produkti/ara-mebeles/index.html', external: false },
      { match: 'category=velo-infrastruktura', href: './produkti/velo-infrastruktura/index.html', external: false },
      { match: 'category=rotalu-laukumi', href: 'https://freekids.pl/en/kategoria-produktu/playgrounds/', external: true },
      { match: 'category=parstradata-plastmasa', href: 'https://www.govaplast.com/street/', external: true }
    ];

    document.querySelectorAll('.category-card a[href], .category-index a[href]').forEach((link) => {
      const rawHref = link.getAttribute('href') || '';
      const target = directTargets.find((item) => rawHref.includes(item.match));
      if (!target) return;
      link.href = target.href;
      if (target.external) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      } else {
        link.removeAttribute('target');
        link.removeAttribute('rel');
      }
    });

    const externalProductTargets = {
      './produkti/zano-flash-02-725-1/index.html': 'https://www.zano-streetfurniture.com/street-furniture/catalogue/benches/flash-bench-02-725-1',
      './produkti/zano-scandik-02-046/index.html': 'https://www.zano-streetfurniture.com/street-furniture/catalogue/benches/scandik-bench-02-046',
      './produkti/zano-soft-05-012/index.html': 'https://www.zano-streetfurniture.com/street-furniture/catalogue/bicycle-racks/soft-bicycle-rack-05-012',
      './produkti/zano-stilo-18-048/index.html': 'https://www.zano-streetfurniture.com/street-furniture/catalogue/bicycle-zone/stilo-bicycle-repair-station-18-048'
    };

    document.querySelectorAll('a[href]').forEach((link) => {
      const rawHref = link.getAttribute('href');
      const target = externalProductTargets[rawHref];
      if (!target) return;
      link.href = target;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });

    document.querySelectorAll('.product-range-grid a[href]').forEach((link) => {
      const text = (link.textContent || '').trim().toLowerCase();
      if (text.includes('velo nojumes')) {
        link.href = './produkti/velo-nojumes/index.html';
        link.removeAttribute('target');
        link.removeAttribute('rel');
      }
      if (text.includes('rotaļu laukumi')) {
        link.href = 'https://freekids.pl/en/kategoria-produktu/playgrounds/';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      if (text.includes('pārstrādātas plastmasas')) {
        link.href = 'https://www.govaplast.com/street/';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
    });
  }

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
