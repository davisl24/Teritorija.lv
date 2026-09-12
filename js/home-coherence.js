(() => {
  'use strict';
  if (!document.body.classList.contains('home-page')) return;
  if (!window.matchMedia('(min-width: 1025px)').matches) return;

  function ensureStyles(){
    if (document.querySelector('link[data-home-coherence]')) return;
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.href='./css/home-coherence.css?v=1';
    link.dataset.homeCoherence='true';
    document.head.appendChild(link);
  }

  function removeRedundantSections(){
    document.querySelector('.nv-category-nav')?.remove();
    document.querySelector('.nv-products')?.remove();
    document.querySelector('.nv-partners')?.remove();
  }

  function renameProofSection(){
    const title=document.querySelector('#gallery-title');
    if(title) title.textContent='Realizēti risinājumi';
  }

  function normalizeDesktopCTAs(){
    document.querySelectorAll('.nv-button,.nv-about-cta,.nv-contact-button,.nv-header-cta').forEach((el)=>{
      el.classList.add('nv-coherent-cta');
    });
  }

  function init(){
    ensureStyles();
    removeRedundantSections();
    renameProofSection();
    normalizeDesktopCTAs();
    document.body.dataset.coherenceReady='true';
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init,{once:true});
  }else{
    init();
  }
})();
