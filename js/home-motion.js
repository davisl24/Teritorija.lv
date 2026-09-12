(() => {
  'use strict';
  if (!document.body.classList.contains('home-page')) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const manufacturerRoutes = {
    'ZANO':'./razotaji/zano/index.html','URBASTYLE':'./razotaji/urbastyle/index.html','SAWO':'./razotaji/sawo/index.html','GOVA PLAST':'./razotaji/gova-plast/index.html','GOVAPLAST':'./razotaji/gova-plast/index.html','FREEKIDS':'./razotaji/freekids/index.html','OUT-SIDER':'./razotaji/out-sider/index.html'
  };

  function ensureStoryStyles(){
    if (document.querySelector('link[data-home-story]')) return;
    const link=document.createElement('link');link.rel='stylesheet';link.href='./css/home-story.css';link.dataset.homeStory='true';document.head.appendChild(link);
  }

  function normalizeManufacturerLinks(root=document){
    root.querySelectorAll('.nv-hero-partner-track a, .nv-logo-track a').forEach((link)=>{const key=link.textContent.trim().toUpperCase();if(!manufacturerRoutes[key])return;link.href=manufacturerRoutes[key];link.removeAttribute('target');link.removeAttribute('rel');link.removeAttribute('aria-hidden');});
  }

  function makeFooterLogoClickable(){
    const brand=document.querySelector('.nv-footer-brand');const img=brand?.querySelector(':scope > img');if(!brand||!img)return;const link=document.createElement('a');link.href='./index.html';link.setAttribute('aria-label','Teritorija — sākumlapa');img.replaceWith(link);link.appendChild(img);
  }

  function setupReveal(selector,threshold=.22){
    const el=document.querySelector(selector);if(!el)return;if(reduced||!('IntersectionObserver'in window)){el.classList.add('is-revealed');return;}const obs=new IntersectionObserver((entries)=>{if(!entries[0].isIntersecting)return;el.classList.add('is-revealed');obs.disconnect();},{threshold});obs.observe(el);
  }

  function polishHeroValues(){
    const items=Array.from(document.querySelectorAll('.nv-hero-trust > div'));if(items.length<3)return;const values=[
      {label:'Savlaicīga izpilde',icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3.2 1.9"></path></svg>'},
      {label:'Pārbaudīta kvalitāte',icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m8.4 12.1 2.2 2.3 5-5.2"></path></svg>'},
      {label:'Vide cilvēkiem',icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8.2" r="3"></circle><path d="M6.8 18.2c.7-3.2 2.5-4.8 5.2-4.8s4.5 1.6 5.2 4.8"></path></svg>'}
    ];items.slice(0,3).forEach((item,index)=>{const icon=item.querySelector('.nv-trust-icon');const text=item.querySelector('p');if(icon)icon.innerHTML=values[index].icon;if(text)text.textContent=values[index].label;});
  }

  function setupProductMegaMenu(){
    if(!window.matchMedia('(min-width: 1025px)').matches)return;
    ensureStoryStyles();
    const nav=document.querySelector('.nv-nav');
    if(!nav||nav.querySelector('.nv-product-menu'))return;
    const productLink=Array.from(nav.querySelectorAll(':scope > a')).find((link)=>link.textContent.trim()==='Produkti');
    if(!productLink)return;

    const item=document.createElement('div');
    item.className='nv-product-menu';
    productLink.replaceWith(item);
    productLink.classList.add('nv-product-menu-trigger');
    productLink.setAttribute('aria-haspopup','true');
    productLink.setAttribute('aria-expanded','false');
    item.appendChild(productLink);

    const panel=document.createElement('div');
    panel.className='nv-product-menu-panel';
    panel.innerHTML=`
      <div class="nv-product-menu-grid">
        <div class="nv-menu-group">
          <a class="nv-menu-heading" href="./produkti/ara-mebeles/index.html">Āra mēbeles <span>↗</span></a>
          <a href="./produkti/ara-mebeles/index.html">Soli</a>
          <a href="./produkti/ara-mebeles/index.html">Galdi</a>
          <a href="./produkti/ara-mebeles/index.html">Urnas</a>
          <a href="./produkti/ara-mebeles/index.html">Puķu kastes</a>
        </div>
        <div class="nv-menu-group">
          <a class="nv-menu-heading" href="./produkti/velo-infrastruktura/index.html">Velo infrastruktūra <span>↗</span></a>
          <a href="./produkti/velo-stativi/index.html">Velo statīvi</a>
          <a href="./produkti/velo-nojumes/index.html">Velo nojumes</a>
          <a href="./produkti/velo-infrastruktura/index.html">Servisa stacijas</a>
        </div>
        <div class="nv-menu-group">
          <a class="nv-menu-heading" href="./produkti/rotalu-laukumi/index.html">Rotaļu laukumi <span>↗</span></a>
          <a href="./produkti/rotalu-laukumi/index.html">Rotaļu elementi</a>
          <a href="./produkti/rotalu-laukumi/index.html">Aktivitāšu risinājumi</a>
        </div>
        <div class="nv-menu-group">
          <a class="nv-menu-heading" href="./produkti/parstradata-plastmasa/index.html">Pārstrādāti materiāli <span>↗</span></a>
          <a href="./produkti/parstradata-plastmasa/index.html">Soli un galdi</a>
          <a href="./produkti/parstradata-plastmasa/index.html">Puķu kastes</a>
          <a href="./produkti/parstradata-plastmasa/index.html">Pilsētvides elementi</a>
        </div>
      </div>
      <div class="nv-product-menu-footer"><a href="./produkti/index.html">Skatīt visus produktus <span>→</span></a></div>`;
    item.appendChild(panel);

    const syncExpanded=()=>productLink.setAttribute('aria-expanded',item.matches(':hover')||item.matches(':focus-within')?'true':'false');
    item.addEventListener('mouseenter',syncExpanded);
    item.addEventListener('mouseleave',syncExpanded);
    item.addEventListener('focusin',syncExpanded);
    item.addEventListener('focusout',()=>window.setTimeout(syncExpanded,0));
  }

  function setupLandingStory(){
    if(!window.matchMedia('(min-width: 1025px)').matches)return;ensureStoryStyles();
    const about=document.querySelector('.nv-about');
    if(about){about.classList.add('nv-about--story');about.innerHTML=`
      <div class="nv-why-intro">
        <p class="nv-about-label">Par Teritorija.lv</p>
        <h2 id="about-title">Vairāk nekā produktu izvēle</h2>
        <p class="nv-why-lead">Esam daļa no pilsētplānošanas ekosistēmas — pārstāvam specializētus labiekārtojuma ražotājus un palīdzam piemeklēt konkrētai vietai, funkcijai un projekta prasībām piemērotu risinājumu.</p>
        <a class="nv-about-cta" href="./par-mums/index.html">Par Teritorija.lv <span>→</span></a>
      </div>
      <div class="nv-why-grid" aria-label="Kāpēc strādāt ar Teritorija.lv">
        <article class="nv-why-item"><span>01</span><h3>Vairāki ražotāji</h3><p>Pārstāvam dažādu specializāciju Eiropas ražotājus — no pilsētvides mēbelēm līdz velo infrastruktūrai un rotaļu risinājumiem.</p><strong>Vairāk piemērotu variantu vienam projektam.</strong><div class="nv-why-detail">ZANO · URBASTYLE · GOVA PLAST<br>Āra mēbeles · velo · rotaļu risinājumi</div></article>
        <article class="nv-why-item"><span>02</span><h3>Atlase projektam</h3><p>Strādājam ar arhitektiem, būvniekiem, attīstītājiem un publiskā sektora pārstāvjiem, piemeklējot risinājumu konkrētai videi un vajadzībai.</p><strong>Izvēle balstās projektā, nevis tikai produkta izskatā.</strong><div class="nv-why-detail">Vieta · funkcija · budžets · materiāls</div></article>
        <article class="nv-why-item"><span>03</span><h3>Tehniskā informācija</h3><p>Produktu klāstā pieejami izmēri, materiāli, krāsu iespējas, tehniskās lapas un cita informācija, kas vajadzīga projekta izstrādei.</p><strong>Vieglāk nonākt no idejas līdz specifikācijai.</strong><div class="nv-why-detail">Izmēri · materiāli · krāsas · tehniskās lapas</div></article>
      </div>`;}

    const solutions=document.querySelector('.nv-solutions');const list=solutions?.querySelector('.nv-solution-list');
    if(solutions&&list){solutions.classList.add('nv-solutions--curated');list.innerHTML=`
      <a class="nv-solution nv-solution-product" href="./produkti/ara-mebeles/index.html"><div class="nv-solution-media"><img src="./assets/images/products/zano-flash-02-725-1.png" alt="ZANO āra sols" loading="lazy"></div><div class="nv-solution-copy"><span>01</span><div><h3>Āra mēbeles</h3><p>Soli, galdi, urnas un citi elementi publiskām un privātām ārtelpām.</p><small>ZANO · URBASTYLE · GOVA PLAST</small></div><b>↗</b></div></a>
      <a class="nv-solution" href="./produkti/velo-infrastruktura/index.html"><div class="nv-solution-media"><img src="https://static.wixstatic.com/media/e827f3_2111d54895a94658925fcac53e285e69~mv2.jpg" alt="SAWO velosipēdu nojume" loading="lazy"></div><div class="nv-solution-copy"><span>02</span><div><h3>Velo infrastruktūra</h3><p>Nojumes, statīvi, glabātuves un servisa stacijas drošai ikdienas lietošanai.</p><small>SAWO · ZANO</small></div><b>↗</b></div></a>
      <a class="nv-solution" href="./produkti/rotalu-laukumi/index.html"><div class="nv-solution-media"><img src="./assets/images/products/rotalu-laukums.jpg" alt="FreeKids rotaļu laukumu risinājumi" loading="lazy"></div><div class="nv-solution-copy"><span>03</span><div><h3>Rotaļu laukumi</h3><p>Sertificēti rotaļu un aktivitāšu risinājumi dažādām vecuma grupām.</p><small>FreeKids · OUT-SIDER</small></div><b>↗</b></div></a>
      <a class="nv-solution nv-solution-product" href="./produkti/parstradata-plastmasa/index.html"><div class="nv-solution-media"><img src="https://static.wixstatic.com/media/e827f3_d327c99380294bda96789d6adff4279a~mv2.jpg" alt="Govaplast pārstrādātas plastmasas pilsētvides mēbeles" loading="lazy"></div><div class="nv-solution-copy"><span>04</span><div><h3>Pārstrādāti materiāli</h3><p>Izturīgi, viegli kopjami pilsētvides produkti no pārstrādātas plastmasas.</p><small>GOVA PLAST</small></div><b>↗</b></div></a>`;}
  }

  function polishProductVisuals(){
    const cards=Array.from(document.querySelectorAll('.nv-product-card')).slice(0,6);if(!cards.length)return;const sources=['./assets/images/products/zano-flash-02-725-1.png','https://www.zano-streetfurniture.com/images/10908/stolik-quadro-13-076-1-stal-nierdzewna.png','./assets/images/products/zano-soft-05-012.png','https://sawo.com.pl/wp-content/uploads/2025/07/slider-wiaty-rowerowe-202506-b.jpg','https://sawo.com.pl/wp-content/uploads/2024/01/stacje-naprawy-1-main-202401.jpg','./assets/images/products/rotalu-laukums.jpg'];const alt=['ZANO āra sols','ZANO āra galds','ZANO velo statīvs','SAWO velo nojume','SAWO velo servisa stacija','FreeKids rotaļu elements'];cards.forEach((card,index)=>{const img=card.querySelector('.nv-product-image img');if(!img)return;img.src=sources[index];img.alt=alt[index];img.loading='lazy';img.referrerPolicy='no-referrer';img.addEventListener('error',()=>{if(index===1)img.src='./assets/images/products/zano-scandik-02-046.png';if(index===3)img.src='./assets/images/products/velo-nojume.jpg';if(index===4)img.src='./assets/images/products/velo-servisa-stacija.jpg';},{once:true});});
  }

  function setupProcessTimeline(){
    const section=document.querySelector('.nv-process');const items=Array.from(document.querySelectorAll('.nv-process-list details'));if(!section||!items.length)return;let activeIndex=0,timer=null,paused=false,inView=reduced;const activate=(index)=>{activeIndex=(index+items.length)%items.length;items.forEach((item,itemIndex)=>{const active=itemIndex===activeIndex;item.classList.toggle('is-active',active);item.open=active;});};const stop=()=>{if(!timer)return;window.clearInterval(timer);timer=null;};const start=()=>{if(reduced||paused||!inView||timer)return;timer=window.setInterval(()=>activate(activeIndex+1),3500);};items.forEach((item,index)=>{const summary=item.querySelector('summary');summary?.addEventListener('mouseenter',()=>{paused=true;stop();activate(index);});summary?.addEventListener('focusin',()=>{paused=true;stop();activate(index);});summary?.addEventListener('click',()=>window.setTimeout(()=>activate(index),0));});section.addEventListener('mouseleave',()=>{paused=false;start();});section.addEventListener('focusout',(event)=>{if(section.contains(event.relatedTarget))return;paused=false;start();});activate(0);setupReveal('.nv-process',.18);if(!reduced&&'IntersectionObserver'in window){const observer=new IntersectionObserver(([entry])=>{inView=entry.isIntersecting;if(inView)start();else stop();},{threshold:.25});observer.observe(section);}
  }

  function setupInfinitePartners(){
    const viewport=document.querySelector('.nv-hero-partners');const track=viewport?.querySelector('.nv-hero-partner-track');if(!viewport||!track)return;normalizeManufacturerLinks(track);const originals=Array.from(track.querySelectorAll('a')).slice(0,6);if(!originals.length)return;track.replaceChildren(...originals.map((node)=>node.cloneNode(true)));normalizeManufacturerLinks(track);const buildCopies=()=>{const base=Array.from(track.children).slice(0,6);while(track.scrollWidth<viewport.clientWidth*3)base.forEach((node)=>track.appendChild(node.cloneNode(true)));normalizeManufacturerLinks(track);};buildCopies();if(reduced)return;let x=0,last=performance.now(),paused=false;const speed=34;viewport.addEventListener('mouseenter',()=>{paused=true;});viewport.addEventListener('mouseleave',()=>{paused=false;last=performance.now();});const firstSetWidth=()=>{const children=Array.from(track.children).slice(0,6);if(!children.length)return 1;const first=children[0].getBoundingClientRect();const lastItem=children[children.length-1].getBoundingClientRect();const styles=getComputedStyle(track);const gap=parseFloat(styles.columnGap||styles.gap||'0')||0;return(lastItem.right-first.left)+gap;};const tick=(now)=>{const dt=Math.min((now-last)/1000,.05);last=now;if(!paused){x-=speed*dt;const wrap=firstSetWidth();if(-x>=wrap)x+=wrap;track.style.transform=`translate3d(${x}px,0,0)`;}requestAnimationFrame(tick);};requestAnimationFrame(tick);window.addEventListener('resize',()=>{track.style.transform='translate3d(0,0,0)';x=0;buildCopies();},{passive:true});
  }

  normalizeManufacturerLinks();makeFooterLogoClickable();polishHeroValues();setupProductMegaMenu();setupLandingStory();polishProductVisuals();setupInfinitePartners();setupReveal('.nv-about',.18);setupReveal('.nv-gallery',.12);setupProcessTimeline();requestAnimationFrame(()=>normalizeManufacturerLinks());window.setTimeout(()=>normalizeManufacturerLinks(),600);
})();