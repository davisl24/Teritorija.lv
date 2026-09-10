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
- tree-protection — BROWSER QA
- signage — BROWSER QA
- /en/products — BROWSER QA

Piezīme: pēdējiem trim web audita rīks atdeva cache miss, nevis pierādītu 404. Tāpēc tos nedrīkst saukt par dead linkiem bez browser QA.

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
- `https://www.govaplast.com/?page_id=919` ir saite, ko joprojām izmanto pats aktuālais Govaplast menu `Playground furniture`.
- Web audita rīks to neatvēra cache miss dēļ; browser QA vēl vajadzīgs.

## FreeKids

- `https://freekids.pl/en/products/` — VERIFIED.

## OUT-SIDER

- vecais `https://out-sider.dk/en/` korekti redirectē uz `https://outsiderfurniture.com/`.
- V1 rekomendācija: jaunās saites turpmāk rakstīt uz `outsiderfurniture.com`, lai nebūtu lieks redirects.

## SAWO / velo infrastruktūra

Lokālie galamērķi repo:
- velo-stativi — local
- velo-nojumes — local
- divu-limenu-novietnes — local
- velo-glabatuves — local
- skrejritenu-stativi — local

Atsevišķa piezīme:
- `Remonta stacijas` pašlaik ved uz konkrētu ZANO Stilo 18.048 produkta URL.
- Konsekventāk ar pārējo IA būtu vest uz verificēto `https://www.zano-streetfurniture.com/street-furniture/catalogue/bicycle-zone` kategoriju, jo pati karte ir kategorija, nevis konkrēts modelis.

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

## Nākamais audits

1. Browser QA URBASTYLE `tree-protection`, `signage`, `/en/products`.
2. Browser QA Govaplast Play `?page_id=919`.
3. Mainīt SAWO `Remonta stacijas` category card uz ZANO `bicycle-zone` kategoriju.
4. Pārbaudīt footer/navigation lokālos ceļus un atlikušos vecos `?category=` linkus.
5. Pēc tam FUNCTIONALITY + CONTENT LOCK.
