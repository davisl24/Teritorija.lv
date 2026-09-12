(() => {
  'use strict';
  if (!document.body.classList.contains('home-page')) return;
  if (!window.matchMedia('(min-width: 1025px)').matches) return;

  function ensureStyles(){
    if (document.querySelector('link[data-home-next-pass]')) return;
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.href='./css/home-next-pass.css';
    link.dataset.homeNextPass='true';
    document.head.appendChild(link);
  }

  function restoreProductsTrigger(nav){
    const wrapped=nav.querySelector('.nv-product-menu');
    if(!wrapped)return;
    const link=wrapped.querySelector('.nv-product-menu-trigger');
    if(!link)return;
    link.classList.remove('nv-product-menu-trigger');
    link.removeAttribute('aria-haspopup');
    link.removeAttribute('aria-expanded');
    wrapped.replaceWith(link);
  }

  function setupNavigationTray(){
    const header=document.querySelector('.nv-header');
    const nav=document.querySelector('.nv-nav');
    if(!header||!nav)return;

    restoreProductsTrigger(nav);
    document.querySelector('.nv-nav-tray')?.remove();

    const navLinks=Array.from(nav.querySelectorAll(':scope > a'));
    const labels={
      'Produkti':'products',
      'Katalogi':'catalogues',
      'Par mums':'about',
      'Pieprasījums':'request'
    };

    const tray=document.createElement('div');
    tray.className='nv-nav-tray';
    tray.setAttribute('aria-hidden','true');
    tray.innerHTML=`
      <div class="nv-nav-tray-panel nv-tray-products" data-panel="products">
        <div class="nv-tray-group">
          <a class="nv-tray-heading" href="./produkti/ara-mebeles/index.html">Āra mēbeles <span>↗</span></a>
          <div class="nv-tray-links"><a href="./produkti/ara-mebeles/index.html">Soli</a><a href="./produkti/ara-mebeles/index.html">Galdi</a><a href="./produkti/ara-mebeles/index.html">Urnas</a><a href="./produkti/ara-mebeles/index.html">Puķu kastes</a></div>
        </div>
        <div class="nv-tray-group">
          <a class="nv-tray-heading" href="./produkti/velo-infrastruktura/index.html">Velo infrastruktūra <span>↗</span></a>
          <div class="nv-tray-links"><a href="./produkti/velo-stativi/index.html">Velo statīvi</a><a href="./produkti/velo-nojumes/index.html">Velo nojumes</a><a href="./produkti/velo-infrastruktura/index.html">Servisa stacijas</a></div>
        </div>
        <div class="nv-tray-group">
          <a class="nv-tray-heading" href="./produkti/rotalu-laukumi/index.html">Rotaļu laukumi <span>↗</span></a>
          <div class="nv-tray-links"><a href="./produkti/rotalu-laukumi/index.html">Rotaļu elementi</a><a href="./produkti/rotalu-laukumi/index.html">Aktivitāšu risinājumi</a></div>
        </div>
        <div class="nv-tray-group">
          <a class="nv-tray-heading" href="./produkti/parstradata-plastmasa/index.html">Pārstrādāti materiāli <span>↗</span></a>
          <div class="nv-tray-links"><a href="./produkti/parstradata-plastmasa/index.html">Soli un galdi</a><a href="./produkti/parstradata-plastmasa/index.html">Puķu kastes</a><a href="./produkti/parstradata-plastmasa/index.html">Pilsētvides elementi</a></div>
        </div>
      </div>

      <div class="nv-nav-tray-panel nv-tray-catalogues" data-panel="catalogues">
        <div>
          <p class="nv-tray-eyebrow">Ražotāju katalogi</p>
          <div class="nv-tray-manufacturers">
            <a href="./razotaji/zano/index.html">ZANO <span>→</span></a>
            <a href="./razotaji/sawo/index.html">SAWO <span>→</span></a>
            <a href="./razotaji/gova-plast/index.html">GOVA PLAST <span>→</span></a>
            <a href="./razotaji/urbastyle/index.html">URBASTYLE <span>→</span></a>
            <a href="./razotaji/freekids/index.html">FreeKids <span>→</span></a>
            <a href="./razotaji/out-sider/index.html">OUT-SIDER <span>→</span></a>
          </div>
        </div>
        <div>
          <p class="nv-tray-eyebrow">Pēc kategorijas</p>
          <p class="nv-tray-copy">Atrodi katalogus pēc projekta vajadzības — āra mēbeles, velo infrastruktūra, rotaļu laukumi un pārstrādāti materiāli.</p>
          <a class="nv-tray-cta" href="./katalogi/index.html">Visi katalogi <span>→</span></a>
        </div>
      </div>

      <div class="nv-nav-tray-panel nv-tray-about" data-panel="about">
        <div>
          <p class="nv-tray-eyebrow">Teritorija.lv</p>
          <h3 class="nv-tray-heading">Vairāk nekā produktu izvēle</h3>
          <p class="nv-tray-copy">Palīdzam piemeklēt labiekārtojuma risinājumus konkrētai vietai, funkcijai un projekta prasībām.</p>
          <a class="nv-tray-cta" href="./par-mums/index.html">Par Teritorija.lv <span>→</span></a>
        </div>
        <div class="nv-tray-group">
          <p class="nv-tray-eyebrow">Iepazīsti vairāk</p>
          <div class="nv-tray-links"><a href="./par-mums/index.html">Par uzņēmumu</a><a href="./katalogi/index.html">Ražotāji</a><a href="#realizetie-projekti">Realizētie projekti</a><a href="#ka-mes-stradajam">Kā mēs strādājam</a></div>
        </div>
      </div>

      <div class="nv-nav-tray-panel nv-tray-request" data-panel="request">
        <div>
          <p class="nv-tray-eyebrow">Sāc ar projektu</p>
          <h3 class="nv-tray-heading">Pastāsti par vietu, vajadzību un termiņu</h3>
          <p class="nv-tray-copy">Palīdzēsim saprast, kuri produkti un ražotāji ir piemērotākie konkrētajam projektam.</p>
          <a class="nv-tray-cta" href="./pieprasijums/index.html">Pieteikt projektu <span>→</span></a>
        </div>
        <div class="nv-tray-contact">
          <span>Kontakti</span>
          <a href="mailto:einars@teritorija.lv">einars@teritorija.lv</a>
          <a href="tel:+37129136973">+371 29136973</a>
          <span>Rīga, Latvija</span>
        </div>
      </div>`;
    header.insertAdjacentElement('afterend',tray);

    let closeTimer=null;
    let activeKey='';

    const openPanel=(key,link)=>{
      if(!key)return;
      window.clearTimeout(closeTimer);
      activeKey=key;
      navLinks.forEach((item)=>item.classList.toggle('is-tray-active',item===link));
      tray.querySelectorAll('.nv-nav-tray-panel').forEach((panel)=>panel.classList.toggle('is-active',panel.dataset.panel===key));
      tray.classList.add('is-open');
      tray.setAttribute('aria-hidden','false');
    };

    const closePanel=()=>{
      closeTimer=window.setTimeout(()=>{
        activeKey='';
        navLinks.forEach((item)=>item.classList.remove('is-tray-active'));
        tray.classList.remove('is-open');
        tray.setAttribute('aria-hidden','true');
      },120);
    };

    navLinks.forEach((link)=>{
      const key=labels[link.textContent.trim()];
      if(!key)return;
      link.addEventListener('mouseenter',()=>openPanel(key,link));
      link.addEventListener('focusin',()=>openPanel(key,link));
    });

    nav.addEventListener('mouseleave',closePanel);
    tray.addEventListener('mouseenter',()=>{window.clearTimeout(closeTimer);if(activeKey)tray.classList.add('is-open');});
    tray.addEventListener('mouseleave',closePanel);
  }

  function setupProductGrid(){
    const section=document.querySelector('.nv-products');
    const current=section?.querySelector('.nv-product-rail, .nv-editorial-products, .nv-product-grid-6');
    if(!section||!current)return;

    section.classList.remove('nv-products--editorial');
    section.classList.add('nv-products--catalogue');

    const grid=document.createElement('div');
    grid.className='nv-product-grid-6';
    grid.setAttribute('aria-label','Labiekārtošanas elementu kategorijas');
    grid.innerHTML=`
      <a class="nv-product-tile" href="./produkti/ara-mebeles/index.html">
        <div class="nv-product-tile-media" style="background:#fff"><img src="https://www.zano-streetfurniture.com/images/11675/02-012-1-lawka-miejska-soft-stal-nierdzewna-png.png" alt="ZANO āra sols" loading="lazy" referrerpolicy="no-referrer"></div>
        <div class="nv-product-tile-body"><div><span class="nv-product-tile-index">01</span><h3>Soli</h3><p>Publiskām, komerciālām un privātām ārtelpām.</p></div><span class="nv-product-tile-arrow">↗</span></div>
      </a>
      <a class="nv-product-tile" href="./produkti/ara-mebeles/index.html">
        <div class="nv-product-tile-media" style="background:#fff"><img src="https://www.zano-streetfurniture.com/images/9765/table-soft-02-612-stainless-steel.png" alt="ZANO āra galds" loading="lazy" referrerpolicy="no-referrer"></div>
        <div class="nv-product-tile-body"><div><span class="nv-product-tile-index">02</span><h3>Galdi</h3><p>Atpūtas, piknika un publiskajām zonām.</p></div><span class="nv-product-tile-arrow">↗</span></div>
      </a>
      <a class="nv-product-tile" href="./produkti/velo-stativi/index.html">
        <div class="nv-product-tile-media" style="background:#fff"><img src="https://www.zano-streetfurniture.com/images/11117/bicycle-stand-soft-sn.png" alt="ZANO velo statīvs" loading="lazy" referrerpolicy="no-referrer"></div>
        <div class="nv-product-tile-body"><div><span class="nv-product-tile-index">03</span><h3>Velo statīvi</h3><p>Drošai un pārdomātai velosipēdu novietošanai.</p></div><span class="nv-product-tile-arrow">↗</span></div>
      </a>
      <a class="nv-product-tile" href="./produkti/velo-nojumes/index.html">
        <div class="nv-product-tile-media" style="background:#fff"><img src="https://sawo.com.pl/wp-content/uploads/2025/11/pam-s-gl-icon-700x700c.jpg" alt="SAWO velo nojume PAM S GL" loading="lazy" referrerpolicy="no-referrer"></div>
        <div class="nv-product-tile-body"><div><span class="nv-product-tile-index">04</span><h3>Velo nojumes</h3><p>Aizsargātai un organizētai velosipēdu glabāšanai.</p></div><span class="nv-product-tile-arrow">↗</span></div>
      </a>
      <a class="nv-product-tile" href="./produkti/velo-infrastruktura/index.html">
        <div class="nv-product-tile-media" style="background:#fff"><img src="https://sawo.com.pl/wp-content/uploads/2024/01/stacje-naprawy-1-main-202401.jpg" alt="SAWO velo servisa stacija" loading="lazy" referrerpolicy="no-referrer"></div>
        <div class="nv-product-tile-body"><div><span class="nv-product-tile-index">05</span><h3>Servisa stacijas</h3><p>Publiski pieejami risinājumi velosipēdu apkopei.</p></div><span class="nv-product-tile-arrow">↗</span></div>
      </a>
      <a class="nv-product-tile" href="./produkti/rotalu-laukumi/index.html">
        <div class="nv-product-tile-media" style="background:#fff"><img src="https://freekids.pl/wp-content/uploads/2025/01/0130003_ahoy_11_wiz.1-scaled-800x513.jpg" alt="FreeKids Ahoy 11 rotaļu elements" loading="lazy" referrerpolicy="no-referrer"></div>
        <div class="nv-product-tile-body"><div><span class="nv-product-tile-index">06</span><h3>Rotaļu elementi</h3><p>Rotaļu un aktivitāšu risinājumi dažādām vecuma grupām.</p></div><span class="nv-product-tile-arrow">↗</span></div>
      </a>`;

    current.replaceWith(grid);
  }

  ensureStyles();
  setupNavigationTray();
  setupProductGrid();
})();
