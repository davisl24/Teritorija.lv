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

- `https://freekids.pl/en/products/` — VERIFIED.

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

## Inquiry flow

Browser screenshot audit:
- produkti parādās pieprasījumā — PASS
- produktu attēli parādās — PASS
- header count parādās — PASS
- `Noņemt` pogas ir — PASS

Vēl jāpārbauda browserī:
- `Noņemt` samazina count
- FormSubmit pēc aktivizācijas
- veiksmīga submit laikā saraksts un count tiek iztīrīti

## IA / satura grupēšana — nākamais posms pēc audit lock

UI/UX un vizuālo layout vēl nemainām.

Pēc linku, satura un funkcionalitātes lock visu katalogu pārgrupējam pēc lietotāja vajadzības, nevis ražotāja. Piemērs:

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

1. Pārbaudīt lokālos `href/src` ceļus pret reāli eksistējošiem repo failiem.
2. Pārbaudīt header, footer, breadcrumbs un CTA visās galvenajās lapās.
3. Browser QA Govaplast Play vecajam `?page_id=919`.
4. Inquiry: `Noņemt` → count, FormSubmit, successful reset.
5. FUNCTIONALITY + CONTENT LOCK.
6. Tad IA grupēšana.
7. Tikai pēc IA lock — layout un UI/UX.
