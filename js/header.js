(() => {
  'use strict';

  function rootPrefix(){
    const segments=window.location.pathname.replace(/\\/g,'/').split('/').filter(Boolean);
    if(!segments.length)return './';
    const last=segments[segments.length-1];
    const depth=/\.[a-z0-9]+$/i.test(last)?segments.length-1:segments.length;
    return depth>0?'../'.repeat(depth):'./';
  }

  const prefix=()=>document.body.classList.contains('home-page')?'./':rootPrefix();

  function ensureGlobalStyles(){
    if(document.querySelector('link[data-global-site]'))return;
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.href=`${prefix()}css/global-site.css?v=1`;
    link.dataset.globalSite='true';
    document.head.appendChild(link);
  }

  const productGroups=(p)=>[
    ['Pilsētvides mēbeles',`${p}produkti/ara-mebeles/index.html`,['Soli un sēdvietas','Galdi','Atkritumu urnas','Puķu kastes','Bollardi un norobežojumi']],
    ['Mobilitāte',`${p}produkti/velo-infrastruktura/index.html`,['Divu līmeņu velo statīvi','Velosipēdu statīvi','Velo remonta stacijas','Velosipēdu zonas','Norādes zīmes','Norobežojošie stabi','Skrejriteņu statīvi','Velo nojumes','Velo glabātuves','Autobusa pieturas','EV uzlādes nojumes','Motociklu nojumes','Parking risinājumi']],
    ['Rotaļu laukumi',`${p}produkti/rotalu-atputas-zonas/index.html`,['Rotaļu kompleksi','Rotaļu un aktivitāšu elementi','Iekļaujoši rotaļu risinājumi']],
    ['Viedā pilsēta',`${p}produkti/smart-city/index.html`,['Viedie soli','Saules enerģijas risinājumi','Uzlādes risinājumi','LED un apgaismojums']],
    ['Āra fitness',`${p}pieprasijums/index.html?produkts=%C4%80ra%20fitness`,['Āra fitnesa iekārtas','Street workout','Aktivitāšu zonas']],
    ['Labiekārtošanas produkti',`${p}produkti/teritorijas-labiekartojums/index.html`,['Atkritumu konteineri','Drenāža','Žogi','Garden borders','GRASSTILES','PROFILES','RUBBER','Lietusūdens uzkrāšana','Materiālu risinājumi']]
  ];

  function subHref(label,p){
    const map={
      'Soli un sēdvietas':`${p}produkti/ara-mebeles/soli/index.html`,
      'Galdi':`${p}produkti/ara-mebeles/galdi/index.html`,
      'Divu līmeņu velo statīvi':`${p}produkti/divu-limenu-novietnes/index.html`,
      'Velosipēdu statīvi':`${p}produkti/velo-stativi/index.html`,
      'Velo remonta stacijas':`${p}produkti/velo-remonta-stacijas/index.html`,
      'Skrejriteņu statīvi':`${p}produkti/skrejritenu-stativi/index.html`,
      'Velo nojumes':`${p}produkti/velo-nojumes/index.html`,
      'Velo glabātuves':`${p}produkti/velo-glabatuves/index.html`,
      'Rotaļu kompleksi':`${p}produkti/rotalu-atputas-zonas/index.html`,
      'Viedie soli':`${p}produkti/smart-city/index.html`,
      'Lietusūdens uzkrāšana':`${p}produkti/teritorijas-labiekartojums/permavoid-85s/index.html`,
      'Materiālu risinājumi':`${p}produkti/materialu-risinajumi/index.html`
    };
    return map[label]||`${p}pieprasijums/index.html?produkts=${encodeURIComponent(label)}`;
  }

  function buildProductsPanel(p){
    return productGroups(p).map(([name,href,items])=>`
      <div class="global-nav-group">
        <a href="${href}">${name}<span>↗</span></a>
        <div class="global-nav-sub">${items.map(item=>`<a href="${subHref(item,p)}">${item}</a>`).join('')}</div>
      </div>`).join('');
  }

  function mountGlobalNavigation(){
    const p=prefix();
    document.querySelectorAll('.global-nav,.global-mobile-menu,.global-category-rail').forEach(el=>el.remove());
    document.querySelectorAll('.nv-nav-tray').forEach(el=>el.remove());
    const old=document.querySelector('.nv-header,.site-header,.m-header');
    const nav=document.createElement('header');
    nav.className='global-nav';
    nav.innerHTML=`<div class="global-nav-inner">
      <a class="global-nav-brand" href="${p}index.html" aria-label="Teritorija — sākumlapa"><img src="${p}assets/images/brand/teritorija-logo-dark-268w.png" alt="Teritorija" width="122" height="50"></a>
      <nav class="global-nav-links" aria-label="Galvenā navigācija">
        <button class="global-nav-trigger" type="button" data-global-panel="products">Produkti</button>
        <button class="global-nav-trigger" type="button" data-global-panel="catalogues">Katalogi</button>
        <button class="global-nav-trigger" type="button" data-global-panel="about">Par mums</button>
        <button class="global-nav-trigger" type="button" data-global-panel="request">Pieprasījums</button>
      </nav>
      <a class="global-nav-contact" href="${p}pieprasijums/index.html">Sazināties <span>→</span></a>
      <button class="global-nav-menu-btn" type="button" aria-label="Atvērt izvēlni" aria-expanded="false">☰</button>
      <div class="global-mega" aria-hidden="true">
        <section class="global-mega-panel global-products-grid" data-global-panel-content="products">${buildProductsPanel(p)}</section>
        <section class="global-mega-panel global-catalog-grid" data-global-panel-content="catalogues">
          <div><strong>Ražotāju katalogi</strong><div class="global-manufacturers"><a href="${p}razotaji/zano/index.html">ZANO <span>→</span></a><a href="${p}razotaji/sawo/index.html">SAWO <span>→</span></a><a href="${p}razotaji/gova-plast/index.html">GOVA PLAST <span>→</span></a><a href="${p}razotaji/urbastyle/index.html">URBASTYLE <span>→</span></a><a href="${p}razotaji/freekids/index.html">FreeKids <span>→</span></a><a href="${p}razotaji/out-sider/index.html">OUT-SIDER <span>→</span></a></div></div>
          <div><strong>Visi materiāli vienuviet</strong><p class="global-mega-copy">Atver ražotāju katalogus vai izvēlies produktu kategoriju. Klientam nav jāmeklē partneru lapās pašam.</p><a class="global-mega-cta" href="${p}katalogi/index.html">Visi katalogi →</a></div>
        </section>
        <section class="global-mega-panel global-about-grid" data-global-panel-content="about"><div><strong>Teritorija.lv</strong><p class="global-mega-copy">Ārtelpas mēbeles un labiekārtojuma risinājumi. Palīdzam piemeklēt produktus konkrētai vietai, funkcijai un projekta prasībām.</p><a class="global-mega-cta" href="${p}par-mums/index.html">Par uzņēmumu →</a></div><div class="global-nav-sub"><a href="${p}par-mums/index.html">Par Teritorija.lv</a><a href="${p}katalogi/index.html">Ražotāji un katalogi</a><a href="${p}pieprasijums/index.html">Kontakti un pieprasījums</a></div></section>
        <section class="global-mega-panel global-request-grid" data-global-panel-content="request"><div><strong>Sāc ar projektu</strong><p class="global-mega-copy">Pastāsti par vietu, vajadzību un termiņu. Palīdzēsim atlasīt piemērotāko produktu grupu un ražotāju.</p><a class="global-mega-cta" href="${p}pieprasijums/index.html">Pieteikt projektu →</a></div><div class="global-nav-sub"><a href="mailto:einars@teritorija.lv">einars@teritorija.lv</a><a href="tel:+37129136973">+371 29136973</a><span>Rīga, Latvija</span></div></section>
      </div>
    </div>`;
    if(old)old.replaceWith(nav); else document.body.prepend(nav);
    document.body.classList.add('has-global-site');
    const mega=nav.querySelector('.global-mega');
    const triggers=[...nav.querySelectorAll('.global-nav-trigger')];
    let timer=null;
    const open=(key,trigger)=>{clearTimeout(timer);triggers.forEach(x=>x.classList.toggle('is-active',x===trigger));nav.querySelectorAll('.global-mega-panel').forEach(x=>x.classList.toggle('is-active',x.dataset.globalPanelContent===key));mega.classList.add('is-open');mega.setAttribute('aria-hidden','false')};
    const close=()=>{timer=setTimeout(()=>{triggers.forEach(x=>x.classList.remove('is-active'));mega.classList.remove('is-open');mega.setAttribute('aria-hidden','true')},120)};
    triggers.forEach(btn=>{btn.addEventListener('mouseenter',()=>open(btn.dataset.globalPanel,btn));btn.addEventListener('focus',()=>open(btn.dataset.globalPanel,btn));btn.addEventListener('click',()=>open(btn.dataset.globalPanel,btn))});
    nav.querySelector('.global-nav-links')?.addEventListener('mouseleave',close);mega.addEventListener('mouseenter',()=>clearTimeout(timer));mega.addEventListener('mouseleave',close);
    const mobile=document.createElement('div');
    mobile.className='global-mobile-menu';
    mobile.innerHTML=`${productGroups(p).map(([name,href,items])=>`<details class="global-mobile-section"><summary>${name}</summary><nav><a href="${href}">Skatīt kategoriju</a>${items.map(item=>`<a href="${subHref(item,p)}">${item}</a>`).join('')}</nav></details>`).join('')}<details class="global-mobile-section"><summary>Katalogi</summary><nav><a href="${p}katalogi/index.html">Visi katalogi</a><a href="${p}razotaji/zano/index.html">ZANO</a><a href="${p}razotaji/sawo/index.html">SAWO</a><a href="${p}razotaji/gova-plast/index.html">GOVA PLAST</a><a href="${p}razotaji/urbastyle/index.html">URBASTYLE</a><a href="${p}razotaji/freekids/index.html">FreeKids</a><a href="${p}razotaji/out-sider/index.html">OUT-SIDER</a></nav></details><a class="global-mobile-contact" href="${p}pieprasijums/index.html">Sazināties <span>→</span></a>`;
    document.body.appendChild(mobile);
    const menuBtn=nav.querySelector('.global-nav-menu-btn');
    menuBtn.addEventListener('click',()=>{const state=!mobile.classList.contains('is-open');mobile.classList.toggle('is-open',state);menuBtn.setAttribute('aria-expanded',String(state));menuBtn.textContent=state?'×':'☰'});
    mountCategoryRail();
  }

  function activeCategoryFromPath(){
    const path=location.pathname.toLowerCase();
    if(path.includes('velo')||path.includes('skrejritenu')||path.includes('divu-limenu'))return 'Mobilitāte';
    if(path.includes('rotalu'))return 'Rotaļu laukumi';
    if(path.includes('smart-city'))return 'Viedā pilsēta';
    if(path.includes('teritorijas-labiekartojums')||path.includes('materialu-risinajumi')||path.includes('parstradata-plastmasa'))return 'Labiekārtošanas produkti';
    if(path.includes('ara-mebeles')||path.includes('betona-mebeles'))return 'Pilsētvides mēbeles';
    return '';
  }

  function mountCategoryRail(){
    if(!location.pathname.toLowerCase().includes('/produkti/'))return;
    const p=prefix(); const current=activeCategoryFromPath();
    const icons={'Pilsētvides mēbeles':'▤','Mobilitāte':'⇄','Rotaļu laukumi':'△','Viedā pilsēta':'◇','Āra fitness':'╱','Labiekārtošanas produkti':'▦'};
    const rail=document.createElement('nav');rail.className='global-category-rail';rail.setAttribute('aria-label','Produktu kategorijas');
    rail.innerHTML=productGroups(p).map(([name,href])=>`<a href="${href}" class="${current===name?'is-current':''}"><span class="global-category-icon">${icons[name]}</span>${name}</a>`).join('');
    const nav=document.querySelector('.global-nav');nav?.insertAdjacentElement('afterend',rail);
  }

  function normalizeFooter(){
    const footer=document.querySelector('.site-footer,.nv-footer,.m-footer');
    if(!footer)return;
    const p=prefix();
    footer.className='global-footer';
    footer.innerHTML=`<div class="global-footer-shell global-footer-grid">
      <div class="global-footer-brand"><a href="${p}index.html"><img src="${p}assets/images/brand/teritorija-logo-light-268w.png" alt="Teritorija" width="268" height="105"></a><p>Ārtelpas mēbeles un labiekārtojuma risinājumi ilgtspējīgai, funkcionālai publiskai videi.</p></div>
      <details class="global-footer-group" open><summary>Produkti</summary><div class="global-footer-links"><a href="${p}produkti/ara-mebeles/index.html">Pilsētvides mēbeles</a><a href="${p}produkti/velo-infrastruktura/index.html">Mobilitāte</a><a href="${p}produkti/rotalu-atputas-zonas/index.html">Rotaļu laukumi</a><a href="${p}produkti/smart-city/index.html">Viedā pilsēta</a><a href="${p}produkti/teritorijas-labiekartojums/index.html">Labiekārtošanas produkti</a></div></details>
      <details class="global-footer-group" open><summary>Uzņēmums</summary><div class="global-footer-links"><a href="${p}par-mums/index.html">Par mums</a><a href="${p}katalogi/index.html">Katalogi</a><a href="${p}pieprasijums/index.html">Pieprasījums</a><a href="https://teritorija.lv/privacy-policy" target="_blank" rel="noopener noreferrer">Privātuma politika</a><a href="https://teritorija.lv/cookie-policy" target="_blank" rel="noopener noreferrer">Sīkdatņu politika</a></div></details>
      <details class="global-footer-group" open><summary>Kontakti</summary><div class="global-footer-links"><a href="tel:+37129136973">+371 29136973</a><a href="mailto:einars@teritorija.lv">einars@teritorija.lv</a><span>Rīga, Latvija</span><a href="https://www.instagram.com/teritorija.lv/" target="_blank" rel="noopener noreferrer">Instagram</a><a href="https://www.facebook.com/teritorija.lv" target="_blank" rel="noopener noreferrer">Facebook</a></div></details>
    </div><div class="global-footer-shell global-footer-bottom"><small>© 2026 Teritorija. Visas tiesības aizsargātas.</small><span><a href="https://teritorija.lv/privacy-policy" target="_blank" rel="noopener noreferrer">Privātuma politika</a> · <a href="https://teritorija.lv/cookie-policy" target="_blank" rel="noopener noreferrer">Sīkdatņu politika</a></span></div>`;
  }

  function cleanHomepage(){
    document.querySelectorAll('.nv-proof,.nv-gallery,#realizetie-dzive,#realizetie-projekti').forEach(el=>el.remove());
    document.querySelectorAll('a[href*="realizet"]').forEach(el=>el.remove());
    const list=document.querySelector('.nv-solutions .nv-solution-list');
    if(!list)return;
    const p='./';
    const imgs={'Pilsētvides mēbeles':'./assets/images/products/aplveida-soli.jpg','Mobilitāte':'./assets/images/products/velo-nojume.jpg','Rotaļu laukumi':'./assets/images/products/rotalu-laukums.jpg','Viedā pilsēta':'./assets/images/products/solara-stacija-zasa.jpg','Āra fitness':'./assets/images/products/rotalu-laukums.jpg','Labiekārtošanas produkti':'https://static.wixstatic.com/media/e827f3_64af561e07b34f8a965c1667342b7244~mv2.jpg/v1/fill/w_900,h_600,al_c,q_90/kolorowe_stalowe_donice_miejskie_na_drze.jpg'};
    list.innerHTML=productGroups(p).map(([name,href,items],i)=>`<article class="nv-solution-card is-active"><a class="nv-solution-main" href="${href}"><div class="nv-solution-media"><img src="${imgs[name]}" alt="${name}" loading="lazy" width="1200" height="900"></div><div class="nv-solution-copy"><span>0${i+1}</span><div><h3>${name}</h3><p>${items.slice(0,4).join(', ')}.</p><small>Skatīt pilno klāstu</small></div><b>↗</b></div></a><div class="nv-solution-subcats">${items.map(item=>`<a href="${subHref(item,p)}">${item}<span>→</span></a>`).join('')}</div></article>`).join('');
  }

  function loadHomepageMotion(){
    if(!document.body.classList.contains('home-page')){mountGlobalNavigation();normalizeFooter();return;}
    const load=(src,key,next)=>{let s=document.querySelector(`script[data-${key}]`);if(s){if(s.dataset.loaded==='true')next?.();else s.addEventListener('load',()=>next?.(),{once:true});return;}s=document.createElement('script');s.src=src;s.dataset[key]='true';s.addEventListener('load',()=>{s.dataset.loaded='true';next?.()},{once:true});document.head.appendChild(s)};
    load('./js/home-motion.js?v=4','homeMotion',()=>load('./js/home-next-pass.js?v=4','homeNextPass',()=>load('./js/home-coherence.js?v=2','homeCoherence',()=>load('./js/home-final-motion.js?v=4','homeFinalMotion',()=>{cleanHomepage();mountGlobalNavigation();normalizeFooter();}))));
  }

  ensureGlobalStyles();
  loadHomepageMotion();
})();