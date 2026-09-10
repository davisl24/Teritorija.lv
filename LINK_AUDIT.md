# TERITORIJA — Link Audit

Mērķis: pirms UI/UX lock pārbaudīt, ka produktu un partneru kartes ved uz pareizo nākamo soli un nav acīmredzamu dead-linku.

## ZANO

Statuss: VERIFIED.

Pārbaudīti visi 21 Street Furniture kategoriju URL + Smart City:
- benches
- litter-bins
- recycling-bins
- dog-waste-bins
- bollards
- bicycle-racks
- bicycle-zone
- solar-charging-stations
- planters
- cigarette-bins
- tables
- picnic-tables
- pergolas
- fences
- tree-guards
- information-boards
- feeders
- street-lamps
- chains
- traffic-sign-posts
- hand-sanitizer-stations
- smart-city

Secinājums: ZANO 22/22 kategoriju galamērķi ir aktuāli un kategoriju līmenī pareizi.

Svarīga konsekvence: kategorijas kartei jāved uz kategorijas lapu, nevis uz vienu konkrētu produktu, ja vien karte pati nav konkrēts produkts.

## URBASTYLE

Statuss: VERIFIED pēc atkārtota publiskā kataloga audita.

Repo izmantotie kategoriju galamērķi:
- benches-all — VERIFIED
- planters — VERIFIED
- walls — VERIFIED
- tables — VERIFIED
- litter-bins — VERIFIED
- seats — VERIFIED
- bollards — VERIFIED
- all-collections — VERIFIED
- barbecue — VERIFIED
- tree-protection — VERIFIED kā aktuāla Street Furniture kategorija
- signage — VERIFIED kā aktuāla Street Furniture kategorija
- /en/products — VERIFIED kā aktuālais URBASTYLE produktu root

Papildu pārbaude: aktuālais URBASTYLE produktu root uzskaita gan `Tree protection`, gan `Signage`, un konkrētā `Tree grate Storm` produkta lapa atrodas zem `tree-protection`.

## GOVAPLAST

Pārbaudīti un strādā:
- /street/street-furniture/park-benches/
- /street/street-furniture/picknick-tables/
- /street/street-furniture/street-planters-planter-recycled-plastic-street-furniture/
- /street/street-furniture/street-garbage-cans/
- /street/street-furniture/traffic-equipment/traffic/bycicle-stands/
- /street/street-furniture/traffic-equipment/traffic/square-bollard/
- /garden/
- /technic/retaining-walls/

Govaplast Play:
- vecais `https://www.govaplast.com/?page_id=919` vēl nav droši aizverams kā VERIFIED, jo tiešā fetch pārbaude dod cache miss;
- aktuālajā Govaplast Street saturā ir rotaļu laukumiem paredzēti produkti, piemēram, `The Wave`, taču publiskajā indeksā neatradām skaidru jaunu vienotu `Playground furniture` kategorijas URL;
- tāpēc V1 pagaidām neatstājam šo punktu kā "salabotu ar minējumu". Browser QA vēl nepieciešams, un IA posmā jāizlemj, vai Govaplast Play ir atsevišķa kategorija vai Govaplast produktu grupa zem `Rotaļu un aktīvās atpūtas risinājumi`.

## FreeKids

- `https://freekids.pl/en/kategoria-produktu/playgrounds/` — VERIFIED; aktuālajā lapā ir pilnais Playgrounds katalogs.
- produktu hub `Rotaļu laukumi` vairs neizlaiž TERITORIJA lokālo kategorijas lapu; tas ved uz `produkti/rotalu-laukumi/index.html`, un no turienes lietotājs var atvērt FreeKids pilno kategoriju.

## OUT-SIDER

Statuss: VERIFIED uz aktuālo domēnu.

- aktuālais produktu katalogs: `https://outsiderfurniture.com/urban-furniture/`
- aktuālais downloads/resources: `https://outsiderfurniture.com/tools/download/`
- repo code search uz `out-sider.dk` — 0 rezultātu;
- jaunajās saitēs lietojam `outsiderfurniture.com` bez lieka redirecta.

## SAWO / velo infrastruktūra

Lokālie galamērķi repo:
- velo-stativi — local
- velo-nojumes — local
- divu-limenu-novietnes — local
- velo-glabatuves — local
- skrejritenu-stativi — local

`Remonta stacijas` ir salabots: kategorijas karte tagad ved uz ZANO `bicycle-zone` kategoriju, nevis uz vienu Stilo produktu.

## Lokālo route inventory

Recursive repo tree audit apstiprina, ka eksistē galvenie lokālie galamērķi:
- `/index.html`
- `/produkti/index.html`
- `/produkti/ara-mebeles/index.html`
- `/produkti/ara-mebeles/soli/index.html`
- `/produkti/ara-mebeles/puku-kastes/index.html`
- `/produkti/betona-mebeles/index.html`
- `/produkti/parstradata-plastmasa/index.html`
- `/produkti/rotalu-laukumi/index.html`
- `/produkti/velo-infrastruktura/index.html`
- `/produkti/velo-stativi/index.html`
- `/produkti/velo-nojumes/index.html`
- `/produkti/divu-limenu-novietnes/index.html`
- `/produkti/velo-glabatuves/index.html`
- `/produkti/skrejritenu-stativi/index.html`
- `/katalogi/index.html`
- `/par-mums/index.html`
- `/pieprasijums/index.html`
- `/privatums/index.html`

Atrasts un salabots IA/route mismatch:
- `Produkti → Rotaļu laukumi` iepriekš veda tieši uz ārējo FreeKids root, lai gan repo jau eksistēja lokāla TERITORIJA rotaļu laukumu kategorijas lapa.
- Tagad produkta hub karte ved uz lokālo `rotalu-laukumi` lapu.

Rotaļu laukumu lokālajā lapā arī pievienots vienotais `Pieprasījums` count elements un `inquiry.js`, lai header funkcionalitāte neatšķirtos no pārējām galvenajām produktu lapām.

## Header / footer / breadcrumbs / CTA audit

Pārbaudītajos galvenajos velo ceļos breadcrumbs ir loģiski: `Sākums → Produkti → Velo infrastruktūra → konkrētā apakškategorija`.

Atrasts konkrēts konsekvences defekts:
- `/produkti/velo-stativi/index.html` headerī `Pieprasījums` saitei nav `data-request-count` elementa, lai gan pārējās velo lapās tas ir;
- pati BR produktu pievienošana strādā caur legacy fallback `top.js`, ko apstiprina browser screenshot ar BR104/BR108/BR112 pieprasījumā;
- šo header izņēmumu jāizlīdzina pirms FUNCTIONALITY + CONTENT LOCK.

Pārbaudīts `/produkti/velo-nojumes/index.html`:
- header count ir;
- breadcrumbs ir pareizi;
- CTA ved uz pieprasījumu;
- `inquiry.js` un `top.js` ir pieslēgti.

## Katalogi

- katalogu lapas lokālie `src` vāki eksistē repo `assets/images/katalogi/`;
- ZANO on-line katalogs ved uz aktuālo ZANO Street Furniture catalogue root;
- PDF `href` pašlaik ved uz vecās TERITORIJA hostētajiem PDF URL. `data-pdf-target` norāda nākotnes `/faili/...` ceļus, bet repo pašlaik nav `faili/` mapes; tas nav aktīvs broken-link defekts, jo pašreizējais `href` ir ārējais PDF URL un `catalog.js` šos `data-pdf-target` laukus neizmanto. Pirms gala publish jāizlemj, vai PDF paliek ārēji vai tiek migrēti lokāli.

## Inquiry flow

Browser screenshot audit:
- produkti parādās pieprasījumā — PASS
- produktu attēli parādās — PASS
- header count parādās lapās, kur `data-request-count` eksistē — PASS
- `Noņemt` pogas ir — PASS

Koda audits `js/inquiry.js`:
- `removeProduct(id)` izņem produktu no storage, atjauno header count, add-button state un pieprasījuma sarakstu — CODE PASS;
- veiksmīga FormSubmit gadījumā `writeItems([])` iztīra produktus — CODE PASS;
- `updateHeaderCount([])` paslēpj count — CODE PASS;
- `form.reset()` atiestata formu — CODE PASS;
- draft tiek dzēsts ar `clearInquiryDraft()` — CODE PASS;
- FormSubmit recipient ir `einars@teritorija.lv` — CODE PASS.

Vēl jāapstiprina browserī:
- `Noņemt` reāli maina count, piemēram, 5 → 4;
- FormSubmit saņēmēja aktivizācija/e-pasta piegāde;
- pēc reāla successful submit saraksts un count vizuāli iztīrās.

## IA / satura grupēšana — nākamais posms pēc audit lock

UI/UX un vizuālo layout vēl nemainām.

Pēc linku, satura un funkcionalitātes lock visu katalogu pārgrupējam pēc lietotāja vajadzības, nevis ražotāja. Darba karkass:

- Velo infrastruktūra
  - velo statīvi
  - velo nojumes
  - divu līmeņu novietnes
  - velo glabātavas
  - remonta stacijas
  - skrejriteņu statīvi
- Āra mēbeles
  - soli un sēdvietas
  - galdi un piknika galdi
  - urnas un šķirošana
  - puķu kastes
- Teritorijas un apzaļumošanas elementi
  - koku sargi
  - stabi un norobežojumi
  - žogi un ķēdes
  - informācijas elementi
- Rotaļu un aktīvās atpūtas risinājumi
- Smart City / tehnoloģijas
- Materiālu risinājumi
  - betons
  - pārstrādāta plastmasa
  - HPL / dizaina materiāli

Šis pagaidām ir darba karkass, nevis gala navigācija. Gala IA tiek fiksēta tikai pēc pilna inventory/content audita.

## Nākamais audits

1. Salabot `velo-stativi` header count konsekvenci.
2. Turpināt detalizēto produktu lapu `href/src` un header/footer/breadcrumbs/CTA auditu.
3. Browser QA Govaplast Play vecajam `?page_id=919`.
4. Browser QA inquiry `Noņemt → count`.
5. FormSubmit reālais successful submit tests.
6. FUNCTIONALITY + CONTENT LOCK.
7. Tad IA grupēšana.
8. Tikai pēc IA lock — layout un UI/UX.
