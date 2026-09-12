(() => {
  'use strict';
  if (!document.body.classList.contains('home-page')) return;
  if (!window.matchMedia('(min-width: 1025px)').matches) return;

  function ensureStyles(){
    if (document.querySelector('link[data-home-products-grid]')) return;
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.href='./css/home-products-grid.css';
    link.dataset.homeProductsGrid='true';
    document.head.appendChild(link);
  }

  function buildGrid(){
    const section=document.querySelector('.nv-products');
    if(!section)return;
    const container=section.querySelector('.container');
    const current=section.querySelector('.nv-editorial-products, .nv-product-rail, .nv-product-grid-6');
    if(!container||!current)return;

    section.classList.remove('nv-products--editorial');
    section.classList.add('nv-products--catalogue');

    const grid=document.createElement('div');
    grid.className='nv-product-grid-6';
    grid.setAttribute('aria-label','Labiekārtošanas elementu kategorijas');
    grid.innerHTML=`
      <a class="nv-product-tile" href="./produkti/ara-mebeles/index.html">
        <div class="nv-product-tile-media"><img src="./assets/images/products/zano-flash-02-725-1.png" alt="Āra sols" loading="lazy"></div>
        <div class="nv-product-tile-body"><div><span class="nv-product-tile-index">01</span><h3>Soli</h3><p>Soli publiskām, komerciālām un privātām ārtelpām.</p></div><span class="nv-product-tile-arrow">↗</span></div>
      </a>
      <a class="nv-product-tile" href="./produkti/ara-mebeles/index.html">
        <div class="nv-product-tile-media"><img src="https://www.zano-streetfurniture.com/images/10908/stolik-quadro-13-076-1-stal-nierdzewna.png" alt="Āra galds" loading="lazy" referrerpolicy="no-referrer"></div>
        <div class="nv-product-tile-body"><div><span class="nv-product-tile-index">02</span><h3>Galdi</h3><p>Galdi un piknika risinājumi atpūtas un publiskajām zonām.</p></div><span class="nv-product-tile-arrow">↗</span></div>
      </a>
      <a class="nv-product-tile" href="./produkti/velo-stativi/index.html">
        <div class="nv-product-tile-media"><img src="./assets/images/products/zano-soft-05-012.png" alt="Velo statīvs" loading="lazy"></div>
        <div class="nv-product-tile-body"><div><span class="nv-product-tile-index">03</span><h3>Velo statīvi</h3><p>Drošai un pārdomātai velosipēdu novietošanai.</p></div><span class="nv-product-tile-arrow">↗</span></div>
      </a>
      <a class="nv-product-tile is-context" href="./produkti/velo-nojumes/index.html">
        <div class="nv-product-tile-media"><img src="https://sawo.com.pl/wp-content/uploads/2025/07/slider-wiaty-rowerowe-202506-b.jpg" alt="Velo nojume" loading="lazy" referrerpolicy="no-referrer"></div>
        <div class="nv-product-tile-body"><div><span class="nv-product-tile-index">04</span><h3>Velo nojumes</h3><p>Aizsargātai un organizētai velosipēdu glabāšanai.</p></div><span class="nv-product-tile-arrow">↗</span></div>
      </a>
      <a class="nv-product-tile" href="./produkti/velo-infrastruktura/index.html">
        <div class="nv-product-tile-media"><img src="./assets/images/products/zano-stilo-18-048.png" alt="Velo servisa stacija" loading="lazy"></div>
        <div class="nv-product-tile-body"><div><span class="nv-product-tile-index">05</span><h3>Servisa stacijas</h3><p>Publiski pieejami risinājumi velosipēdu apkopei.</p></div><span class="nv-product-tile-arrow">↗</span></div>
      </a>
      <a class="nv-product-tile is-context" href="./produkti/rotalu-laukumi/index.html">
        <div class="nv-product-tile-media"><img src="./assets/images/products/rotalu-laukums.jpg" alt="Rotaļu laukuma elementi" loading="lazy"></div>
        <div class="nv-product-tile-body"><div><span class="nv-product-tile-index">06</span><h3>Rotaļu elementi</h3><p>Rotaļu un aktivitāšu risinājumi dažādām vecuma grupām.</p></div><span class="nv-product-tile-arrow">↗</span></div>
      </a>`;

    current.replaceWith(grid);

    const tableImg=grid.querySelectorAll('img')[1];
    const shelterImg=grid.querySelectorAll('img')[3];
    tableImg?.addEventListener('error',()=>{tableImg.src='./assets/images/products/zano-scandik-02-046.png';},{once:true});
    shelterImg?.addEventListener('error',()=>{shelterImg.src='./assets/images/products/velo-nojume.jpg';},{once:true});
  }

  ensureStyles();
  buildGrid();
})();
