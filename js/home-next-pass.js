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
          <div class="nv-tray-links"><a href="./par-mums/index.html">Par uzņēmumu</a><a href="./katalogi/index.html">Ražotāji</a><a href="#realizetie-projekti">Realizēti risinājumi</a><a href="#ka-mes-stradajam">Kā mēs strādājam</a></div>
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

  function setupSolutionsHierarchy(){
    const section=document.querySelector('.nv-solutions');
    const list=section?.querySelector('.nv-solution-list');
    if(!section||!list)return;

    section.classList.add('nv-solutions--hierarchy');
    list.innerHTML=`
      <article class="nv-solution-card" data-solution="furniture">
        <a class="nv-solution-main" href="./produkti/ara-mebeles/index.html">
          <div class="nv-solution-media"><img src="https://www.zano-streetfurniture.com/images/11675/02-012-1-lawka-miejska-soft-stal-nierdzewna-png.png" alt="Āra mēbeles" loading="lazy" referrerpolicy="no-referrer"></div>
          <div class="nv-solution-copy"><span>01</span><div><h3>Āra mēbeles</h3><p>Soli, galdi, urnas un puķu kastes publiskai un privātai ārtelpai.</p><small>ZANO · URBASTYLE · GOVA PLAST</small></div><b>↗</b></div>
        </a>
        <div class="nv-solution-subcats" aria-label="Āra mēbeļu apakškategorijas">
          <a href="./produkti/ara-mebeles/index.html">Soli <span>→</span></a>
          <a href="./produkti/ara-mebeles/index.html">Galdi <span>→</span></a>
          <a href="./produkti/ara-mebeles/index.html">Urnas <span>→</span></a>
          <a href="./produkti/ara-mebeles/index.html">Puķu kastes <span>→</span></a>
        </div>
      </article>

      <article class="nv-solution-card" data-solution="bike">
        <a class="nv-solution-main" href="./produkti/velo-infrastruktura/index.html">
          <div class="nv-solution-media"><img src="https://sawo.com.pl/wp-content/uploads/2025/11/pam-s-gl-icon-700x700c.jpg" alt="Velo infrastruktūra" loading="lazy" referrerpolicy="no-referrer"></div>
          <div class="nv-solution-copy"><span>02</span><div><h3>Velo infrastruktūra</h3><p>Droši un pārdomāti risinājumi velosipēdu novietošanai, glabāšanai un apkopei.</p><small>SAWO · ZANO</small></div><b>↗</b></div>
        </a>
        <div class="nv-solution-subcats" aria-label="Velo infrastruktūras apakškategorijas">
          <a href="./produkti/velo-stativi/index.html">Velo statīvi <span>→</span></a>
          <a href="./produkti/velo-nojumes/index.html">Velo nojumes <span>→</span></a>
          <a href="./produkti/velo-infrastruktura/index.html">Servisa stacijas <span>→</span></a>
        </div>
      </article>

      <article class="nv-solution-card" data-solution="play">
        <a class="nv-solution-main" href="./produkti/rotalu-laukumi/index.html">
          <div class="nv-solution-media"><img src="https://freekids.pl/wp-content/uploads/2025/01/0130003_ahoy_11_wiz.1-scaled-800x513.jpg" alt="Rotaļu laukumi" loading="lazy" referrerpolicy="no-referrer"></div>
          <div class="nv-solution-copy"><span>03</span><div><h3>Rotaļu laukumi</h3><p>Sertificēti rotaļu un aktivitāšu risinājumi dažādām vecuma grupām.</p><small>FreeKids · OUT-SIDER</small></div><b>↗</b></div>
        </a>
        <div class="nv-solution-subcats" aria-label="Rotaļu laukumu apakškategorijas">
          <a href="./produkti/rotalu-laukumi/index.html">Rotaļu elementi <span>→</span></a>
          <a href="./produkti/rotalu-laukumi/index.html">Aktivitāšu risinājumi <span>→</span></a>
        </div>
      </article>

      <article class="nv-solution-card" data-solution="recycled">
        <a class="nv-solution-main" href="./produkti/parstradata-plastmasa/index.html">
          <div class="nv-solution-media"><img src="https://www.govaplast.com/sites/default/files/styles/realisation_slider/public/2021-09/realisation-mona-bench-govaplast.jpg" alt="Pārstrādāti materiāli" loading="lazy" referrerpolicy="no-referrer"></div>
          <div class="nv-solution-copy"><span>04</span><div><h3>Pārstrādāti materiāli</h3><p>Ilgmūžīgi un viegli kopjami pilsētvides produkti no pārstrādātas plastmasas.</p><small>GOVA PLAST</small></div><b>↗</b></div>
        </a>
        <div class="nv-solution-subcats" aria-label="Pārstrādātu materiālu apakškategorijas">
          <a href="./produkti/parstradata-plastmasa/index.html">Soli un galdi <span>→</span></a>
          <a href="./produkti/parstradata-plastmasa/index.html">Puķu kastes <span>→</span></a>
          <a href="./produkti/parstradata-plastmasa/index.html">Pilsētvides elementi <span>→</span></a>
        </div>
      </article>`;

    const cards=Array.from(list.querySelectorAll('.nv-solution-card'));
    const setActive=(card)=>{
      cards.forEach((item)=>item.classList.toggle('is-active',item===card));
    };
    cards.forEach((card)=>{
      card.addEventListener('mouseenter',()=>setActive(card));
      card.addEventListener('focusin',()=>setActive(card));
      card.addEventListener('mouseleave',()=>card.classList.remove('is-active'));
    });

    document.querySelector('.nv-products')?.remove();
  }

  function setupProofProjects(){
    const section=document.querySelector('.nv-gallery');
    if(!section)return;

    section.id='realizetie-projekti';
    section.classList.add('nv-proof');
    section.innerHTML=`
      <div class="nv-section-head nv-proof-head">
        <div><p class="nv-proof-eyebrow">Reāli projekti · reāli risinājumi</p><h2 id="gallery-title">Realizēti risinājumi</h2></div>
        <a class="nv-text-link" href="https://www.facebook.com/teritorija.lv" target="_blank" rel="noopener noreferrer">Skatīt visus <span>↗</span></a>
      </div>

      <article class="nv-proof-featured nv-gallery-item">
        <a class="nv-proof-featured-media" href="https://www.instagram.com/p/CxC8cQqsao5/?img_index=1" target="_blank" rel="noopener noreferrer" aria-label="Madonas Valsts ģimnāzijas ārtelpas projekts">
          <img src="./assets/images/projects/madona-gimnazija.jpg" alt="Madonas Valsts ģimnāzijas ārtelpas mēbeles" loading="lazy" onerror="this.onerror=null;this.src='./assets/images/products/aplveida-soli.jpg';">
        </a>
        <div class="nv-proof-featured-copy">
          <p class="nv-proof-meta">Madona · Izglītības vide</p>
          <h3>Ārtelpa skolai</h3>
          <p class="nv-proof-lead">Madonas Valsts ģimnāzijas iekšpagalmā uzstādītas ZANO Domino sērijas āra mēbeles, izveidojot vienotu sēdvietu un galda zonu.</p>
          <div class="nv-proof-specs">
            <span>Domino 90 sols 02.440.1</span>
            <span>Domino sols 02.040.1</span>
            <span>Domino galds 13.440.1</span>
            <span>Soft puķu kaste 06.012.S</span>
          </div>
          <p class="nv-proof-maker">ZANO · Āra mēbeles</p>
          <a class="nv-proof-link" href="https://www.instagram.com/p/CxC8cQqsao5/?img_index=1" target="_blank" rel="noopener noreferrer">Skatīt projektu <span>→</span></a>
        </div>
      </article>

      <div class="nv-proof-secondary">
        <article class="nv-proof-card nv-gallery-item">
          <a class="nv-proof-card-media" href="https://www.instagram.com/p/CnePyvlotwi/?img_index=1" target="_blank" rel="noopener noreferrer"><img src="./assets/images/projects/adazi-sawo-servisa-stacija.jpg" alt="SAWO velo servisa stacija Ādažu novadā" loading="lazy" onerror="this.onerror=null;this.src='./assets/images/products/velo-servisa-stacija.jpg';"></a>
          <div class="nv-proof-card-copy"><p class="nv-proof-meta">Ādažu novads · Velo infrastruktūra</p><h3>Velo servisa stacija</h3><p>Uzstādīta SAWO bāzes velosipēdu servisa stacija ar instrumentiem un pumpi ikdienas velo apkopei.</p><span>SAWO</span><a href="https://www.instagram.com/p/CnePyvlotwi/?img_index=1" target="_blank" rel="noopener noreferrer">Skatīt <b>→</b></a></div>
        </article>

        <article class="nv-proof-card nv-gallery-item">
          <a class="nv-proof-card-media" href="https://www.instagram.com/p/CwOBW4cMLSf/?img_index=1" target="_blank" rel="noopener noreferrer"><img src="./assets/images/projects/biks-out-sider-piknika-galds.jpg" alt="OUT-SIDER piknika galds BIKS bērnu laukumā" loading="lazy" onerror="this.onerror=null;this.src='./assets/images/products/aplveida-soli.jpg';"></a>
          <div class="nv-proof-card-copy"><p class="nv-proof-meta">BIKS · Publiskā ārtelpa</p><h3>Piknika zona</h3><p>OUT-SIDER PLATEAU PICNIC ROUND #203 galds 4–6 cilvēkiem ar integrētu vietu velosipēdam un vietu ratiņkrēslam.</p><span>OUT-SIDER</span><a href="https://www.instagram.com/p/CwOBW4cMLSf/?img_index=1" target="_blank" rel="noopener noreferrer">Skatīt <b>→</b></a></div>
        </article>

        <article class="nv-proof-card nv-gallery-item">
          <a class="nv-proof-card-media" href="https://www.instagram.com/p/ChmMSyGINfO/?img_index=1" target="_blank" rel="noopener noreferrer"><img src="./assets/images/projects/talsi-vilkmuizas-ezers.jpg" alt="Labiekārtojums pie Vilkmuižas ezera Talsos" loading="lazy" onerror="this.onerror=null;this.src='./assets/images/products/velo-nojume.jpg';"></a>
          <div class="nv-proof-card-copy"><p class="nv-proof-meta">Talsi · Vilkmuižas ezers</p><h3>Labiekārtojums pie ezera</h3><p>Sadarbībā ar BALTA istaba arhitektiem uzstādīti ZANO Origami sērijas soli un Flat Bicycle Rack 05.025.</p><span>ZANO · Āra mēbeles + velo infrastruktūra</span><a href="https://www.instagram.com/p/ChmMSyGINfO/?img_index=1" target="_blank" rel="noopener noreferrer">Skatīt <b>→</b></a></div>
        </article>
      </div>`;
  }

  ensureStyles();
  setupNavigationTray();
  setupSolutionsHierarchy();
  setupProofProjects();
})();
