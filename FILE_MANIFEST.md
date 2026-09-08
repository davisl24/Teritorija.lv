# Failu manifests

Aktuālais Teritorija.lv statiskās vietnes manifests.

## HTML lapas
- `index.html` — sākumlapa.
- `produkti/index.html` — produktu katalogs.
- `katalogi/index.html` — ražotāju katalogu lapa ar 19 tekstuālām kartītēm; PDF repo netiek glabāti.
- `par-mums/index.html` — uzņēmuma apraksts un rekvizīti.
- `pieprasijums/index.html` — projekta pieprasījums un izvēlētie produkti.
- `privatums/index.html` — privātuma politika.
- `produkti/zano-flash-02-725-1/index.html`
- `produkti/zano-scandik-02-046/index.html`
- `produkti/zano-soft-05-012/index.html`
- `produkti/zano-stilo-18-048/index.html`

## CSS
- `css/style.css` — kopējā dizaina sistēma, responsivitāte, kartītes, režģi, header/footer, funkcionālās animācijas.
- `css/home-hero.css` — sākumlapas hero.
- `css/phase2.css` — produkta detaļu un pieprasījuma lapu papildstili.
- `css/about.css` — Par mums lapas papildstili.
- `css/privacy.css` — privātuma lapas papildstili.

Katalogu lapa izmanto esošās `style.css` klases (`section`, `section-heading`, `product-grid`, `product-card`, `product-card-content`, `eyebrow`, `text-link`, `project-cta`), tāpēc šajā posmā jauna kataloga CSS klase nav vajadzīga.

## JavaScript
- `js/inquiry.js` — produktu pieprasījuma saraksts un FormSubmit plūsma. Katalogu darbā nav mainīts.
- `js/catalog.js` — produktu filtri.
- `js/header.js` — iekšlapu header scroll stāvoklis.

## Attēli
- `assets/images/hero/` — hero attēlu varianti.
- `assets/images/products/` — pārbaudīto produktu attēli.
- `assets/logo/` — logo un favicon faili.
- `assets/images/katalogi/` — paredzētā katalogu vāku sīkbilžu mape nākamam posmam. Šajā commitā sīkbildes netiek pievienotas.

Plānotais katalogu vāku formāts vēlāk: `assets/images/katalogi/<slug>.jpg`, JPEG 400×400, `loading="lazy"`.

## Dokumentācija
- `SITEMAP_SEO.md` — aktuālā lapu karte un SEO statuss.
- `FILE_MANIFEST.md` — šis fails.
- `PUBLISH_CHECKLIST.md` — publicēšanas dienas PDF pārslēgšanas saraksts ar visiem 18 vecais URL → `/faili/` pāriem.
- `UI_UX_SPEC.md` — apstiprinātā dizaina un UX specifikācija.

## Katalogu PDF princips
`katalogi/index.html` satur 19 katalogu kartītes: ZANO 3, URBASTYLE 6, GOVAPLAST 6, SAWO 3, GREENMAX 1.

18 PDF kartītēm `href` priekšskatījumā paliek esošais `teritorija.lv/_files/ugd/...pdf`, bet `data-pdf-target` glabā nākotnes `/faili/<slug>.pdf` ceļu. ZANO on-line katalogs ir vienīgais izņēmums: tas paliek ārējā `zano.pl` saite un tam nav `data-pdf-target`.

Repo nedrīkst būt PDF faili.
