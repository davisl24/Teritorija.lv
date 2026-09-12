(() => {
  'use strict';
  if (!document.body.classList.contains('home-page')) return;
  if (!window.matchMedia('(min-width: 1025px)').matches) return;

  function ensureStyles(){
    if (document.querySelector('link[data-home-coherence]')) return;
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.href='./css/home-coherence.css?v=2';
    link.dataset.homeCoherence='true';
    document.head.appendChild(link);
  }

  function removeRedundantSections(){
    document.querySelector('.nv-category-nav')?.remove();
    document.querySelector('.nv-products')?.remove();
    document.querySelector('.nv-partners')?.remove();
  }

  function normalizeDesktopCTAs(){
    document.querySelectorAll('.nv-button,.nv-about-cta,.nv-contact-button,.nv-header-cta').forEach((el)=>{
      el.classList.add('nv-coherent-cta');
    });
  }

  function stabilizeSolutionImages(){
    const fallbacks={
      furniture:'./assets/images/products/zano-flash-02-725-1.png',
      bike:'./assets/images/products/velo-stativi.jpg',
      play:'./assets/images/products/rotalu-laukums.jpg',
      recycled:'./assets/images/katalogi/govaplast-ara-mebelu-katalogs.jpg'
    };

    document.querySelectorAll('.nv-solution-card').forEach((card)=>{
      const img=card.querySelector('.nv-solution-media img');
      if(!img)return;
      const fallback=fallbacks[card.dataset.solution];
      img.decoding='async';
      img.loading='lazy';
      img.setAttribute('fetchpriority','low');
      if(!fallback)return;
      img.addEventListener('error',()=>{
        if(img.dataset.fallbackApplied==='true')return;
        img.dataset.fallbackApplied='true';
        img.removeAttribute('referrerpolicy');
        img.src=fallback;
      },{once:true});
    });
  }

  const proofPosts=[
    {
      meta:'Madona · Izglītības vide',
      title:'Ārtelpa skolai',
      copy:'ZANO Domino sērijas āra mēbeles Madonas Valsts ģimnāzijas iekšpagalmā.',
      maker:'ZANO · Āra mēbeles',
      image:'./assets/images/products/aplveida-soli.jpg',
      href:'https://www.instagram.com/p/CxC8cQqsao5/?img_index=1',
      source:'Instagram'
    },
    {
      meta:'Ādažu novads · Velo infrastruktūra',
      title:'Velo servisa stacija',
      copy:'SAWO servisa stacija ar instrumentiem un pumpi ikdienas velo apkopei.',
      maker:'SAWO',
      image:'./assets/images/products/velo-servisa-stacija.jpg',
      href:'https://www.instagram.com/p/CnePyvlotwi/?img_index=1',
      source:'Instagram'
    },
    {
      meta:'BIKS · Publiskā ārtelpa',
      title:'Piknika zona',
      copy:'OUT-SIDER PLATEAU PICNIC ROUND risinājums publiskai atpūtai un pieejamai videi.',
      maker:'OUT-SIDER',
      image:'./assets/images/products/rotalu-laukums.jpg',
      href:'https://www.instagram.com/p/CwOBW4cMLSf/?img_index=1',
      source:'Instagram'
    },
    {
      meta:'Talsi · Vilkmuižas ezers',
      title:'Labiekārtojums pie ezera',
      copy:'ZANO soli un velo statīvi, kas ieviesti sadarbībā ar BALTA istaba arhitektiem.',
      maker:'ZANO · Āra mēbeles + velo infrastruktūra',
      image:'./assets/images/products/velo-nojume.jpg',
      href:'https://www.instagram.com/p/ChmMSyGINfO/?img_index=1',
      source:'Instagram'
    }
  ];

  function proofCard(post,duplicate=false){
    return `
      <a class="nv-proof-post nv-gallery-item" href="${post.href}" target="_blank" rel="noopener noreferrer"${duplicate?' aria-hidden="true" tabindex="-1"':''}>
        <div class="nv-proof-post-media"><img src="${post.image}" alt="${post.title}" loading="lazy" decoding="async"></div>
        <div class="nv-proof-post-copy">
          <div class="nv-proof-post-top"><span>${post.source}</span><span>↗</span></div>
          <p>${post.meta}</p>
          <h3>${post.title}</h3>
          <div class="nv-proof-post-summary">${post.copy}</div>
          <small>${post.maker}</small>
        </div>
      </a>`;
  }

  function setupSocialProof(){
    const section=document.querySelector('.nv-gallery');
    if(!section)return;

    section.id='realizetie-projekti';
    section.classList.add('nv-proof-social');
    const cards=proofPosts.map((post)=>proofCard(post)).join('');
    const duplicates=proofPosts.map((post)=>proofCard(post,true)).join('');

    section.innerHTML=`
      <div class="nv-proof-social-head">
        <div>
          <p class="nv-proof-social-eyebrow">Reāli projekti</p>
          <h2 id="gallery-title">Risinājumi reālā vidē</h2>
          <p class="nv-proof-social-lead">Skolu pagalmi, publiskās ārtelpas un velo infrastruktūra — piemēri no reāli īstenotiem projektiem.</p>
        </div>
        <a class="nv-text-link" href="https://www.instagram.com/teritorija.lv/" target="_blank" rel="noopener noreferrer">Skatīt vairāk <span>↗</span></a>
      </div>
      <div class="nv-proof-window" aria-label="Realizēto projektu piemēri">
        <div class="nv-proof-track">${cards}${duplicates}</div>
      </div>`;
  }

  function setupProcessClarity(){
    const process=document.querySelector('.nv-process');
    if(!process)return;
    const steps=[
      {
        title:'Konsultācija',
        meta:'Vieta · vajadzība · termiņš',
        detail:'Pastāsti par projektu. Noskaidrojam vietu, vajadzību, apjomu un termiņu.',
        outcome:'Rezultāts: saprotam, kāds risinājums projektam ir vajadzīgs.'
      },
      {
        title:'Atlase',
        meta:'Ražotāji · materiāli · komplektācija',
        detail:'Piemeklējam un salīdzinām piemērotus produktus un ražotājus konkrētajai videi.',
        outcome:'Rezultāts: skaidra, pamatota produktu izvēle.'
      },
      {
        title:'Tehniskā informācija',
        meta:'Specifikācijas · rasējumi · detaļas',
        detail:'Sagatavojam izmērus, materiālus, tehniskās lapas, rasējumus un citas projekta detaļas.',
        outcome:'Rezultāts: informācija, ko var izmantot projekta izstrādē.'
      },
      {
        title:'Piedāvājums',
        meta:'Cena · termiņš · piegāde',
        detail:'Apvienojam izvēlēto risinājumu vienā skaidrā piedāvājumā ar cenu, termiņu un piegādi.',
        outcome:'Rezultāts: zini izmaksas un nākamo soli.'
      }
    ];

    process.querySelectorAll('.nv-process-list details').forEach((detail,index)=>{
      const step=steps[index];
      if(!step)return;
      const summary=detail.querySelector('summary');
      if(summary){
        const number=String(index+1).padStart(2,'0');
        summary.innerHTML=`<span>${number}</span><h3>${step.title}</h3><p>${step.meta}</p><b>+</b>`;
      }
      const body=detail.querySelector('.nv-process-detail');
      if(body) body.innerHTML=`<p>${step.detail}</p><strong>${step.outcome}</strong>`;
    });
  }

  function setupCTAClarity(){
    const contact=document.querySelector('.nv-contact');
    const box=contact?.querySelector('.nv-contact-inner>div');
    const button=contact?.querySelector('.nv-contact-button');
    if(!contact||!box||!button)return;
    box.innerHTML=`
      <p class="nv-contact-eyebrow">Nākamais solis</p>
      <h2>Sāksim ar projektu</h2>
      <p>Pastāsti par vietu, vajadzību un termiņu — palīdzēsim piemeklēt piemērotu risinājumu un sagatavot piedāvājumu.</p>
      <small class="nv-contact-note">Saņemsi piemērotākos variantus un skaidru nākamo soli.</small>`;
    button.innerHTML='Pieteikt projektu <span>↗</span>';
  }

  function init(){
    ensureStyles();
    removeRedundantSections();
    normalizeDesktopCTAs();
    stabilizeSolutionImages();
    setupSocialProof();
    setupProcessClarity();
    setupCTAClarity();
    document.body.dataset.coherenceReady='true';
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init,{once:true});
  }else{
    init();
  }
})();
