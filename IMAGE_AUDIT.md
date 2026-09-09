# TERITORIJA — Image Audit

Mērķis: pirms UI/UX un motion darba pabeigt visu attēlu slāni. Katram attēlam jābūt semantiski pareizam, izsekojamam līdz avotam un pārbaudītam browserī.

## Pašreizējā darba stratēģija

Šobrīd izmantojam **avota URL / partneru CDN attēlus**, lai ātri pārbaudītu, vai katalogam un projektam vispār ir biznesa jēga. Lokālu assetu migrāciju atstājam kā vēlākas optimizācijas darbu.

Tas nozīmē:
- pareizs attēls no partnera / vecās TERITORIJA lapas ir pieņemams arī ar ārējo URL;
- neieliekam nepareizu attēlu tikai tāpēc, lai nebūtu tukšums;
- gala assetu migrācija uz repo nav blockeris UI/UX darba sākšanai, ja URL ir stabils un bilde browserī strādā.

## Noteikumi

1. **Pareiza bilde > placeholder > nepareiza bilde.**
2. Katram attēlam saglabājam avota lapu, no kuras bilde paņemta.
3. Vienu un to pašu bildi vairākām dažādām kategorijām nelietojam, ja vien tas nav apzināts vizuāls lēmums.
4. Pirms UI/UX lock katram katalogam jābūt statusam `IMAGE COMPLETE`.
5. `IMAGE COMPLETE` šajā V1 nozīmē: pareiza bilde + strādājošs URL + nav placeholderu. Lokāls repo assets nav obligāts.

---

# ZANO — pilns audits

Vecā TERITORIJA avota lapa:
- https://www.teritorija.lv/zano-ara-mebeles

Aktuālais ZANO katalogs:
- https://www.zano-streetfurniture.com/street-furniture/catalogue

## Secinājums

Vecajā TERITORIJA lapā ir 18 galvenie virzieni, ieskaitot Smart City. Aktuālajā ZANO Street Furniture katalogā ir 21 produktu kategorija, un Smart City ir atsevišķs virziens. Tātad mūsu pilnajam redzamajam inventory jābūt **22 virzieniem**, ja skaitām Smart City kopā ar Street Furniture kategorijām.

### Vecā TERITORIJA + aktuālais ZANO pilnais saraksts

| # | Kategorija | Vecajā TERITORIJA | Aktuālajā ZANO | Attēla avots / statuss |
|---:|---|:---:|:---:|---|
| 1 | Soli un sēdvietas | ✓ | ✓ | vecās TERITORIJA kategorijas attēls / repo featured bilde |
| 2 | Solārās uzlādes stacijas | ✓ | ✓ | vecās TERITORIJA kategorijas attēls |
| 3 | Šķirošanas urnas | ✓ | ✓ | vecās TERITORIJA kategorijas attēls |
| 4 | Atkritumu urnas | ✓ | ✓ | vecās TERITORIJA kategorijas attēls |
| 5 | Dekoratīvie / norobežojošie stabi | ✓ | ✓ | vecās TERITORIJA kategorijas attēls |
| 6 | Puķu kastes | ✓ | ✓ | vecās TERITORIJA kategorijas attēls |
| 7 | Koku sargi | ✓ | ✓ | vecās TERITORIJA kategorijas attēls |
| 8 | Pelnu trauki | ✓ | ✓ | vecās TERITORIJA kategorijas attēls |
| 9 | Velosipēdu statīvi | ✓ | ✓ | vecās TERITORIJA kategorijas attēls / repo featured bilde |
| 10 | Āra galdi | ✓ | ✓ | vecās TERITORIJA kategorijas attēls |
| 11 | Informācijas stendi | ✓ | ✓ | vecās TERITORIJA kategorijas attēls |
| 12 | Putnu barotavas | ✓ | ✓ | vecās TERITORIJA kategorijas attēls |
| 13 | Smart City | ✓ | atsevišķs virziens | vecās TERITORIJA Smart City attēls |
| 14 | Suņu atkritumu urnas | ✓ | ✓ | vecās TERITORIJA kategorijas attēls |
| 15 | Velo zonas / remonta risinājumi | ✓ | ✓ | vecās TERITORIJA kategorijas attēls / repo featured bilde |
| 16 | Piknika galdi | ✓ | ✓ | vecās TERITORIJA kategorijas attēls |
| 17 | Žogi | ✓ | ✓ | vecās TERITORIJA kategorijas attēls |
| 18 | Ķēdes | ✓ | ✓ | vecās TERITORIJA kategorijas attēls |
| 19 | Pergolas | – | ✓ | aktuālais ZANO pergolas katalogs |
| 20 | Ielu lampas | – | ✓ | aktuālais ZANO street lamps katalogs |
| 21 | Ceļa zīmju stabi | – | ✓ | aktuālais ZANO traffic sign posts katalogs |
| 22 | Dezinfekcijas stacijas | – | ✓ | aktuālais ZANO hand sanitizer stations katalogs |

## ZANO svarīga atšķirība pret mūsu pašreizējo lapu

Mūsu pašreizējā `produkti/ara-mebeles/index.html` inventārs **nav pazudis**, bet tas ir sadalīts divos vizuālos līmeņos:
- 10 lielas produktu kartes;
- 12 mazi `filter-chip` linki.

Tāpēc vizuāli izskatās, ka daļa piedāvājuma trūkst. Inventory līmenī mēs faktiski nosedzam visas 22 pozīcijas, bet UX līmenī 12 ir paslēptas otrajā plānā.

### Pirms UI/UX lock ZANO sadaļai

- [ ] visas 22 pozīcijas redzamas vienotā, saprotamā sistēmā;
- [ ] katrai ir sava pareiza bilde;
- [ ] nav `filter-chip` kā aizvietojuma pilnvērtīgai kategorijai, ja kategorija ir biznesam nozīmīga;
- [ ] Smart City skaidri atdalīts no parastā Street Furniture;
- [ ] nav dublikātu starp ZANO attēliem.

---

# URBASTYLE — 12/12 attēlu karte

Vecā TERITORIJA avota lapa:
- https://www.teritorija.lv/betona-ara-mebeles

Aktuālais URBASTYLE katalogs:
- https://www.urbastyle.com/en/products

| Mūsu kategorija | Primārais avots | Ieteiktais reprezentatīvais produkts / lapa | Statuss |
|---|---|---|---|
| Āra soli | https://www.urbastyle.com/en/products/street-furniture/benches-all | Bench Float — https://www.urbastyle.com/en/products/street-furniture/benches-block/bench-float | SOURCE VERIFIED, IMAGE URL TODO |
| Puķu kastes | https://www.urbastyle.com/en/products/street-furniture/planters | Planter Ligna — https://www.urbastyle.com/en_us/products/street-furniture/planters/planter-ligna | SOURCE VERIFIED, IMAGE URL TODO |
| Atbalsta sienas | https://www.urbastyle.com/en/products/walls | Walls katalogs | SOURCE VERIFIED, IMAGE URL TODO |
| Āra galdi | https://www.urbastyle.com/en/products/street-furniture/tables | Table and Bench Picknick — https://www.urbastyle.com/en/products/street-furniture/tables/table-and-bench-picknick | SOURCE VERIFIED, IMAGE URL TODO |
| Atkritumu urnas | https://www.urbastyle.com/en/products/street-furniture/litter-bins | Litter Bin 22 — https://www.urbastyle.com/en/products/street-furniture/litter-bins/litter-bin-22 | SOURCE VERIFIED, IMAGE URL TODO |
| Sēdekļi | https://www.urbastyle.com/en/products/street-furniture/seats | Seat Float — https://www.urbastyle.com/en/products/street-furniture/seats/seat-float | SOURCE VERIFIED, IMAGE URL TODO |
| Norobežojošie stabi | https://www.urbastyle.com/en/products/street-furniture/bollards | Bollard Stabilo — https://www.urbastyle.com/en/products/street-furniture/bollards/bollard-stabilo | SOURCE VERIFIED, IMAGE URL TODO |
| Koku sargi | https://www.urbastyle.com/en/products/street-furniture/tree-protection | Tree Grate Storm — https://www.urbastyle.com/en/products/street-furniture/tree-protection/tree-grate-storm | SOURCE VERIFIED, IMAGE URL TODO |
| Kolekcijas | https://www.urbastyle.com/en/products/street-furniture/all-collections | Nuton Collection — https://www.urbastyle.com/en/products/street-furniture/all-collections/nuton-collection | SOURCE VERIFIED, IMAGE URL TODO |
| Informācijas stendi | https://www.urbastyle.com/en/products/street-furniture/signage | Signage katalogs | SOURCE VERIFIED, IMAGE URL TODO |
| Grili | https://www.urbastyle.com/en/products/street-furniture/barbecue | Barbecue Butch — https://www.urbastyle.com/en/products/street-furniture/barbecue/barbecue-butch-public-outdoor-spaces | SOURCE VERIFIED, IMAGE URL TODO |
| Piederumi | https://www.urbastyle.com/en/products | Anti-skate / Wooden seating / Light / Solar accessory grupas | SOURCE VERIFIED, IMAGE URL TODO |

Vecās TERITORIJA lapas 12 kategorijas sakrīt ar mūsu 12 kategorijām. Inventory problēmas nav; problēma šobrīd ir tikai attēlu placeholderi.

---

# SAWO — pilns virzienu audits

Primārie avoti:
- https://www.teritorija.lv/sawo
- https://www.teritorija.lv/sawo/velosipedu-stativi
- https://www.teritorija.lv/velo-nojume
- https://www.teritorija.lv/sawo/skrejritenu-stativi
- https://www.teritorija.lv/sawo/velosipedu-noliktavas

Vecā SAWO lapa skaidri rāda šādus galvenos virzienus:
- Velo statīvi
- Velo remonta stacija
- Āra mēbeles
- Divu līmeņu velo novietnes
- Skrejriteņu statīvi
- Velo glabātuves / noliktavas
- Velo nojumes

Mūsu jaunajā arhitektūrā:
- SAWO specifiskie velo virzieni ir lokāli;
- remonta stacijas var palikt ZANO katalogā, ja konkrētais produkts ir ZANO;
- “Āra mēbeles” nav jāatkārto SAWO sadaļā, ja tas tikai rada dublētu IA.

Statuss:
- BR101–BR123: attēli ir.
- U-tipa: attēls ir.
- Trapecveida: attēls ir.
- Privātām teritorijām: attēls ir.
- Moduļu statīvi: attēls ir.
- Nojumes: attēlu URL ir, bet jāveic browser QA, jo daļa URL satur `Image-empty-state` nosaukumu.
- Divu līmeņu: image QA TODO.
- Glabātavas: image QA TODO.
- Skrejriteņi: image QA TODO.

---

# GOVAPLAST — pilns virzienu audits

Vecā TERITORIJA avota lapa:
- https://www.teritorija.lv/govaplast

Aktuālais katalogs:
- https://www.govaplast.com/street/street-furniture/

Vecā TERITORIJA lapa rāda 4 lielos virzienus:
- pārstrādātas plastmasas dēļi;
- terases dēļi un žogi;
- pilsētu un parku mēbeles;
- rotaļu un spēļu laukumi.

Mūsu jaunā lapa Street Furniture daļu sadala detalizētāk:
- Soli un sēdvietas
- Piknika galdi
- Puķu kastes
- Atkritumu urnas
- Velo statīvi
- Stabi un norobežojumi
- Terases un žogi
- Dēļi / profili / atbalsta sistēmas

Svarīga nepilnība, ko vēl jāizvērtē:
- **Rotaļu un spēļu laukumi** no vecās Govaplast lapas mūsu Govaplast sadaļā pašlaik nav redzami kā atsevišķs virziens.

Attēlu statuss:
- lielākajai daļai kategoriju ir reāli Govaplast URL;
- jāaizvieto generic kataloga cover, ja iespējams atrast konkrētāku soli/sēdvietu attēlu.

---

# FreeKids

Primārais avots:
- https://freekids.pl/en/products/

Jāizvēlas viens vai vairāki reāli FreeKids produktu attēli mūsu katalogu / homepage kartēm. Nelietot generic rotaļu laukuma bildi, ja tā nav no FreeKids.

---

# OUT-SIDER

Primārais avots:
- https://outsiderfurniture.com/

Jāizvēlas īsts OUT-SIDER produkta attēls. Nelietot FreeKids / cita partnera attēlu kā pagaidu aizvietotāju.

---

# Produkta hub / homepage audit

Jāpārbauda atsevišķi:
- nav vienas bildes divām dažādām partneru kartēm;
- FreeKids kartei ir FreeKids bilde;
- OUT-SIDER kartei ir OUT-SIDER bilde;
- URBASTYLE kartei ir URBASTYLE bilde;
- Govaplast kartei ir Govaplast bilde;
- SAWO kartei ir SAWO bilde;
- ZANO kartei ir ZANO bilde.

---

# Image completion checklist — V1 URL-first

Pirms `IMAGE COMPLETE`:

- [ ] Nav neviena `Attēls tiks pievienots`
- [ ] Nav neviena `Attēls nav pieejams`
- [ ] Nav nepareizu produktu / kategoriju bilžu
- [ ] Nav nejaušu dublikātu starp kategorijām
- [ ] Katram partnerim ir sava reprezentatīva bilde
- [ ] Kategoriju kartēs bilde atbilst virsrakstam
- [ ] Inquiry kartēs saglabājas attiecīgā produkta bilde
- [ ] Mobilajā nav neglītu crop / stretched attēlu
- [ ] Avota URL ir dokumentēts
- [ ] Visi ārējie attēlu URL browserī dod reālu attēlu
- [ ] ZANO inventory = 22 redzami virzieni (21 Street Furniture + Smart City)
- [ ] URBASTYLE inventory = 12/12
- [ ] SAWO galvenie velo virzieni ir nosegti
- [ ] Govaplast rotaļu/spēļu laukumu virziens ir apzināti iekļauts vai apzināti izslēgts

Kad viss iziets: **IMAGE COMPLETE → CONTENT LOCK → tikai tad UI/UX + motion.**
