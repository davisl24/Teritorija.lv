# TERITORIJA — IA MAP

Mērķis: pirms layout/UI/UX pārkārtošanas fiksēt produkta informācijas arhitektūru pēc lietotāja vajadzības, nevis ražotāja.

Statuss: WORKING IA — balstīts uz pašreizējo repo inventory un verificētajiem partneru virzieniem. Vizuālas izmaiņas šajā posmā netiek veiktas.

## Pamatprincips

Lietotājs vispirms izvēlas vajadzību. TERITORIJA pēc tam palīdz izvēlēties partneri, materiālu un konkrēto risinājumu.

- Kategorijas karte → kategorijas lapa.
- Konkrēta produkta karte → konkrēts produkts vai “Jautāt par šo modeli”.
- Ražotājs ir sekundārs filtrs / izvēles variants, nevis galvenā IA ass.
- Materiāls ir sekundārs filtrs / risinājuma īpašība, izņemot tehniskos materiālu produktus, kuriem tas pats ir lietotāja mērķis.

## Ieteicamais 1. līmenis

1. Velo infrastruktūra
2. Soli un sēdvietas
3. Galdi un piknika risinājumi
4. Atkritumu apsaimniekošana
5. Apzaļumošana un koku aizsardzība
6. Norobežojumi un teritorijas organizēšana
7. Informācija, norādes un apgaismojums
8. Rotaļu un aktīvās atpūtas risinājumi
9. Smart City un uzlāde
10. Materiāli un tehniskie risinājumi
11. Papildu pilsētvides elementi

Šis 1. līmenis ir darba struktūra. Ne visas grupas obligāti būs vienlīdz izceltas gala navigācijā; prioritāti nosaka lietotāja biežākie uzdevumi.

---

## 1. Velo infrastruktūra

### Apakšgrupas
- Velo statīvi
- Velo nojumes
- Divu līmeņu novietnes
- Velo glabātavas / slēgtas novietnes
- Remonta stacijas un pumpji
- Skrejriteņu statīvi
- Velo zonas / servisa punkti

### Partneri / avoti
- SAWO — galvenais vietēji uzturētais klāsts: BR101–BR123, U-tipa, trapecveida, moduļu statīvi, nojumes, divu līmeņu sistēmas, glabātavas, skrejriteņu statīvi.
- ZANO — Bicycle Racks + Bicycle Zone, īpaši remonta stacijas, pumpji un velo zonas.
- Govaplast — pārstrādātas plastmasas velo statīvi.

### Pašreizējie lokālie ceļi, ko saglabāt/reuse
- `produkti/velo-infrastruktura/`
- `produkti/velo-stativi/`
- `produkti/velo-nojumes/`
- `produkti/divu-limenu-novietnes/`
- `produkti/velo-glabatuves/`
- `produkti/skrejritenu-stativi/`

### IA piezīme
Pašreizējā `Velo infrastruktūra` lapa jau ir tuvāk pareizajam modelim nekā pārējais katalogs, jo vienā vietā apvieno vairākus SAWO risinājumu tipus un ZANO remonta virzienu. Nākamajā implementācijas posmā tai jāpievieno arī ZANO Bicycle Racks un Govaplast velo statīvi kā partneru alternatīvas pie attiecīgās apakšgrupas, nevis jātur tie atsevišķās ražotāju/material lapās.

---

## 2. Soli un sēdvietas

### Apakšgrupas
- Soli ar atzveltni
- Sēdekļi / tabureti / krēsli
- Moduļu sēdvietas
- Viedie / solārie soli
- Dizaina / multifunkcionālas sēdvietas

### Partneri
- ZANO — benches + lokālais 48 modeļu solu inventory.
- URBASTYLE — betona soli un seats.
- Govaplast — pārstrādātas plastmasas park benches.
- OUT-SIDER — dizaina un multifunkcionālas publiskās telpas sēdvietas.

### Pašreizējais lokālais ceļš
- `produkti/ara-mebeles/soli/`

### IA piezīme
Šī kategorija nedrīkst būt “ZANO soli” lapa. Tai jākļūst par TERITORIJA “Soli un sēdvietas” lapu, kur ZANO, URBASTYLE, Govaplast un OUT-SIDER ir izvēles/partneru slānis.

---

## 3. Galdi un piknika risinājumi

### Apakšgrupas
- Āra galdi
- Piknika galdi
- Galdi ar integrētām sēdvietām
- Atpūtas / ēšanas zonas

### Partneri
- ZANO — Tables + Picnic Tables.
- URBASTYLE — Tables.
- Govaplast — Picknick Tables.
- OUT-SIDER — attiecīgie dizaina risinājumi, ja konkrētais klāsts tiek verificēts.

### IA piezīme
“Āra galdi” un “Piknika galdi” lietotājam ir radniecīgi uzdevumi, tāpēc tie jāatrod vienā ceļā, nevis zem trim ražotājiem.

---

## 4. Atkritumu apsaimniekošana

### Apakšgrupas
- Atkritumu urnas
- Šķirošanas urnas
- Suņu atkritumu urnas
- Pelnu trauki / cigarette bins

### Partneri
- ZANO — Litter Bins, Recycling Bins, Dog Waste Bins, Cigarette Bins.
- URBASTYLE — Litter Bins.
- Govaplast — Street Garbage Cans.

### IA piezīme
Visiem atkritumu risinājumiem jābūt vienā augsta līmeņa grupā. “Šķirošana”, “suņu urnas” un “pelnu trauki” ir apakšgrupas, nevis atsevišķi top-level virzieni.

---

## 5. Apzaļumošana un koku aizsardzība

### Apakšgrupas
- Puķu kastes / planters
- Koku sargi / tree guards
- Koku režģi / tree protection
- Stādījumu integrācija pilsētvidē

### Partneri
- ZANO — Planters + Tree Guards.
- URBASTYLE — Planters + Tree Protection.
- Govaplast — Street Planters.

### Pašreizējais lokālais ceļš
- `produkti/ara-mebeles/puku-kastes/`

### IA piezīme
Lokālajai `Puķu kastes` lapai nākotnē jābūt TERITORIJA kategorijai ar vairākiem partneriem. ZANO konkrētie modeļi var palikt iekšā kā piemēri/model-level saturs.

---

## 6. Norobežojumi un teritorijas organizēšana

### Apakšgrupas
- Bollardi / dekoratīvie stabi
- Žogi
- Ķēdes
- Satiksmes zīmju stabi
- Teritorijas nodalīšana

### Partneri
- ZANO — Bollards, Fences, Chains, Traffic Sign Posts.
- URBASTYLE — Bollards.
- Govaplast — Square Bollard + Garden fences / norobežojumi.

### IA piezīme
Šeit lietotāja mērķis ir “norobežot / organizēt teritoriju”, nevis izvēlēties konkrētu materiālu.

---

## 7. Informācija, norādes un apgaismojums

### Apakšgrupas
- Informācijas stendi
- Signage / norādes
- Ielu / teritorijas apgaismojums
- Informācijas un komunikācijas elementi

### Partneri
- ZANO — Information Boards, Street Lamps.
- URBASTYLE — Signage un saistītie informācijas/apgaismojuma elementi.

### IA piezīme
Apgaismojumu var vēlāk atdalīt kā savu top-level kategoriju, ja inventory izrādās pietiekami plašs. Pašlaik to turam vienā funkcionālā grupā ar informācijas infrastruktūru, lai neradītu pārāk daudz plānu kategoriju.

---

## 8. Rotaļu un aktīvās atpūtas risinājumi

### Apakšgrupas
- Rotaļu laukumi / kompleksi
- Kāpelēšanas un aktivitāšu elementi
- Šūpoles / slidkalniņi / batuti
- Publiskie grili / atpūtas zonas
- Pārstrādātas plastmasas rotaļu elementi

### Partneri
- FreeKids — galvenais rotaļu laukumu klāsts.
- Govaplast Play — rotaļu un spēļu laukumu risinājumi.
- URBASTYLE — Barbecue kā publiskās atpūtas papildrisinājums.

### Pašreizējais lokālais ceļš
- `produkti/rotalu-laukumi/`

### IA piezīme
Lokālajai lapai jāapvieno FreeKids un Govaplast Play. Tā nedrīkst būt tikai “FreeKids lapa”.

---

## 9. Smart City un uzlāde

### Apakšgrupas
- Smart City risinājumi
- Solārās uzlādes stacijas
- Viedie soli
- Wi‑Fi / telemetrija / LED / audio

### Partneri
- ZANO — Smart City + Solar Charging Stations + smart bench modeļi.
- URBASTYLE — atsevišķi solar / lighting piederumi, ja tie tiek izmantoti konkrētā projektā.

### IA piezīme
Pašreiz produktu hub “Viedā pilsēta” ved uzreiz uz ZANO. Gala IA vajadzētu lokālu TERITORIJA Smart City landing kategoriju, lai nav jāizlaiž TERITORIJA izvēles līmenis.

---

## 10. Materiāli un tehniskie risinājumi

Šī grupa nav domāta parasto solu/urnu dublēšanai pēc materiāla. Tā ir paredzēta gadījumiem, kad lietotāja mērķis tieši ir materiāls vai tehniska konstrukcija.

### Apakšgrupas
- Pārstrādātas plastmasas dēļi un profili
- Terases
- Žogu / norobežojumu materiāli
- Atbalsta sienas
- Tehniskie profili un sistēmas
- Arhitektoniskais betons / atbalsta sienu sistēmas
- HPL / dizaina materiāli

### Partneri
- Govaplast — Garden + Technic, dēļi, profili, terases, atbalsta sistēmas.
- URBASTYLE — Walls un arhitektoniskā betona sistēmas.
- OUT-SIDER — HPL / dizaina materiālu produktu virziens.

### Pašreizējie ceļi
- `produkti/parstradata-plastmasa/`
- `produkti/betona-mebeles/` (šis ceļš pēc IA pārkārtošanas vairs nedrīkst būt galvenais veids, kā atrast URBASTYLE soli/urnas/galdi; tas var kļūt par materiāla/partnera landing vai redirect).

---

## 11. Papildu pilsētvides elementi

### Potenciālās apakšgrupas
- Pergolas
- Putnu barotavas
- Hand Sanitizer Stations
- Kolekcijas / piederumi

### Partneri
- ZANO — Pergolas, Feeders, Hand Sanitizer Stations.
- URBASTYLE — Collections, Accessories.

### IA piezīme
Šīs grupas nedrīkst automātiski kļūt par top-level navigāciju. Vispirms jāizlemj, vai tās ir pietiekami svarīgas klientu uzdevumiem. Ja ne — turēt “Citi risinājumi” / sekundārā līmenī.

---

# Partneru pārklājuma matrica

| Lietotāja vajadzība | ZANO | SAWO | URBASTYLE | Govaplast | FreeKids | OUT-SIDER |
|---|---|---|---|---|---|---|
| Velo statīvi | Jā | Jā | — | Jā | — | — |
| Velo nojumes | — | Jā | — | — | — | — |
| Divu līmeņu velo | — | Jā | — | — | — | — |
| Velo glabātavas | — | Jā | — | — | — | — |
| Remonta/velo zonas | Jā | servisa virziens | — | — | — | — |
| Skrejriteņu statīvi | — | Jā | — | — | — | — |
| Soli/sēdvietas | Jā | — | Jā | Jā | — | Jā |
| Galdi/piknika | Jā | — | Jā | Jā | — | iespējams |
| Urnas/šķirošana | Jā | — | Jā | Jā | — | — |
| Puķu kastes | Jā | — | Jā | Jā | — | — |
| Koku aizsardzība | Jā | — | Jā | — | — | — |
| Stabi/norobežojumi | Jā | — | Jā | Jā | — | — |
| Žogi | Jā | — | — | Jā | — | — |
| Informācijas stendi | Jā | — | Jā | — | — | — |
| Rotaļu laukumi | — | — | — | Jā | Jā | — |
| Smart City/uzlāde | Jā | — | papildus | — | — | — |
| Tehniskie materiāli | — | — | Jā | Jā | — | Jā |

`—` nozīmē: šajā auditā nav verificēts kā TERITORIJA inventory virziens; tas nav apgalvojums, ka ražotājs produktu vispār nepiedāvā.

---

# Ko darīt ar pašreizējām lapām

## Saglabāt kā pamatu
- `velo-infrastruktura` un tās lokālās apakšlapas — jau veido labu user-need struktūru.
- `ara-mebeles/soli` — saglabāt modeļu inventory, bet pārzīmēt identitāti no “ZANO solu lapa” uz TERITORIJA “Soli un sēdvietas”.
- `ara-mebeles/puku-kastes` — saglabāt ZANO modeļus, bet pievienot URBASTYLE + Govaplast izvēles slāni.
- `rotalu-laukumi` — paplašināt no FreeKids-only uz FreeKids + Govaplast Play.

## Pārveidot par sekundāru slāni
- `betona-mebeles` — no galvenās produktu kategorijas uz materiāla/partnera landing vai sekundāru filtru.
- `parstradata-plastmasa` — no galvenās kategorijas uz materiāla/partnera landing un tehnisko risinājumu grupu.
- OUT-SIDER/HPL — nevis viens produkts kā top-level hub virziens; izmantot kā partnera/materiāla izvēli pie attiecīgajiem produktu tipiem.

## Izveidot lokālas TERITORIJA kategorijas vēlāk
- Atkritumu apsaimniekošana
- Galdi un piknika risinājumi
- Apzaļumošana un koku aizsardzība
- Norobežojumi un teritorijas organizēšana
- Informācija / norādes / apgaismojums
- Smart City un uzlāde
- Materiāli un tehniskie risinājumi

---

# Prioritāšu secība implementācijai

1. LOCK IA dokumentu pēc viena review.
2. Pārtaisīt tikai `produkti/index.html` hub struktūru pēc jaunā 1. līmeņa — bez vizuālā redesign.
3. Pārtaisīt `Velo infrastruktūra` partneru pārklājumu (SAWO + ZANO + Govaplast pie pareizajām apakšgrupām).
4. Pārtaisīt `Soli un sēdvietas` par multi-partner kategoriju.
5. Pārtaisīt `Puķu kastes / apzaļumošana` par multi-partner kategoriju.
6. Pārtaisīt `Rotaļu laukumi` par FreeKids + Govaplast Play.
7. Izveidot trūkstošās user-need kategorijas.
8. Tikai pēc route/content stabilizācijas — layout un UI/UX.

# IA LOCK kritēriji

IA var aizslēgt, ja:
- katrs verificētais produkta virziens ir ielikts tieši vienā primārajā lietotāja vajadzību grupā;
- pārklājošie partneri ir redzami vienā un tajā pašā kategorijā;
- nav top-level kategoriju, kas eksistē tikai tāpēc, ka tas ir ražotājs vai materiāls;
- materiālu lapas neatņem produktus no user-need ceļa;
- breadcrumbs var loģiski atspoguļot jauno hierarhiju;
- CTA joprojām izmanto vienkāršo `Pieteikt projektu` / `Jautāt par šo modeli` flow.

Pēc šī lock tikai tad sākas layout/UI/UX posms.
