# TERITORIJA — IA LOCK

Statuss: **IA LOCKED**. Šis ir gala informācijas arhitektūras pamats pirms HTML/layout/UI/UX pārbūves.

Mērķis: sakārtot produktu katalogu pēc lietotāja vajadzības. Ražotājs un materiāls ir sekundārs izvēles slānis, nevis galvenā navigācijas ass.

## Pamatprincips

Lietotājs vispirms izvēlas vajadzību. TERITORIJA pēc tam palīdz izvēlēties partneri, materiālu un konkrēto risinājumu.

- Kategorijas karte → kategorijas lapa.
- Apakškategorija → attiecīgā produktu/risinājumu grupa.
- Konkrēta produkta karte → konkrēts produkts vai “Jautāt par šo modeli”.
- Ražotājs = filtrs / izvēles variants.
- Materiāls = filtrs / īpašība, izņemot gadījumus, kad pats materiāls vai konstrukcija ir lietotāja mērķis.
- Vienam produktam ir viena canonical mājvieta IA; citur tas drīkst parādīties tikai kā cross-link / saistīts risinājums.

---

# Gala 1. līmenis — 6 grupas

1. Velo infrastruktūra
2. Āra mēbeles
3. Teritorijas labiekārtojums
4. Rotaļu un atpūtas zonas
5. Smart City un tehnoloģijas
6. Materiālu risinājumi

`Papildu pilsētvides elementi` nav atsevišķs top-level. Tie tiek ievietoti tuvākajā funkcionālajā grupā vai sekundārā “Citi risinājumi” blokā.

---

## 1. Velo infrastruktūra

Lietotāja nodoms: novietot, aizsargāt, glabāt vai apkalpot velosipēdus/skrejriteņus.

### Apakškategorijas
- Velo statīvi
- Velo nojumes
- Divu līmeņu novietnes
- Velo glabātavas / slēgtas novietnes
- Remonta stacijas un pumpji
- Skrejriteņu statīvi

### Partneri
- SAWO
- ZANO
- Govaplast

### Canonical noteikumi
- SAWO BR/U-tipa/trapecveida/moduļu statīvi → Velo infrastruktūra → Velo statīvi
- ZANO Bicycle Racks → Velo infrastruktūra → Velo statīvi
- Govaplast bicycle stands → Velo infrastruktūra → Velo statīvi
- ZANO Bicycle Zone remonta risinājumi → Velo infrastruktūra → Remonta stacijas un pumpji
- SAWO nojumes/glabātavas/divu līmeņu/skrejriteņu risinājumi paliek savās apakškategorijās

### Esošie ceļi, ko reuse
- `produkti/velo-infrastruktura/`
- `produkti/velo-stativi/`
- `produkti/velo-nojumes/`
- `produkti/divu-limenu-novietnes/`
- `produkti/velo-glabatuves/`
- `produkti/skrejritenu-stativi/`

---

## 2. Āra mēbeles

Lietotāja nodoms: aprīkot vietu sēdēšanai, ēšanai un ikdienas lietošanai.

### Apakškategorijas
- Soli un sēdvietas
- Galdi
- Piknika galdi un komplekti

### Soli un sēdvietas — sekundārie filtri
- ar atzveltni
- sēdekļi / krēsli / tabureti
- moduļu sēdvietas
- dizaina / multifunkcionālas sēdvietas
- viedie / solārie soli kā tips, bet Smart City lapā tikai cross-link

### Partneri
- ZANO
- URBASTYLE
- Govaplast
- OUT-SIDER

### Canonical noteikumi
- URBASTYLE betona sols → Āra mēbeles → Soli un sēdvietas; “betons” ir atribūts
- Govaplast pārstrādātas plastmasas sols → Āra mēbeles → Soli un sēdvietas; “pārstrādāta plastmasa” ir atribūts
- ZANO viedais sols → Āra mēbeles → Soli un sēdvietas; Smart City lapā cross-link

### Esošais ceļš, ko reuse
- `produkti/ara-mebeles/soli/` → jāpārveido no “ZANO solu” lapas par TERITORIJA vairāku partneru solu kategoriju

---

## 3. Teritorijas labiekārtojums

Lietotāja nodoms: uzturēt, apzaļumot, norobežot, organizēt, marķēt un apgaismot teritoriju.

### Apakškategorijas
- Atkritumu apsaimniekošana
  - atkritumu urnas
  - šķirošanas urnas
  - suņu atkritumu urnas
  - pelnu trauki
- Apzaļumošana un koku aizsardzība
  - puķu kastes
  - koku sargi / režģi
- Norobežojumi
  - bollardi / dekoratīvie stabi
  - žogi
  - ķēdes
  - satiksmes zīmju stabi
- Informācija un norādes
  - informācijas stendi
  - signage / norādes
- Apgaismojums
  - ielu / teritorijas lampas

### Partneri
- ZANO
- URBASTYLE
- Govaplast

### Lēmums par apgaismojumu
Apgaismojums pagaidām **nav top-level kategorija**. Tas paliek zem `Teritorijas labiekārtojums`. Ja vēlāk inventory kļūst pietiekami plašs, to var izcelt atsevišķi bez visas IA pārbūves.

### Esošais ceļš, ko reuse
- `produkti/ara-mebeles/puku-kastes/` → jāpārveido par vairāku partneru puķu kastu/apzaļumošanas kategoriju vai jāiekļauj jaunā labiekārtojuma struktūrā

---

## 4. Rotaļu un atpūtas zonas

Lietotāja nodoms: izveidot bērnu, jauniešu vai publisku atpūtas zonu.

### Apakškategorijas
- Rotaļu laukumi / kompleksi
- Kāpelēšanas un aktivitāšu elementi
- Šūpoles / slidkalniņi / batuti
- Publiskie grili
- Citi aktīvās atpūtas elementi

### Partneri
- FreeKids
- Govaplast Play
- URBASTYLE (grili / atpūtas papildrisinājumi)

### Canonical noteikumi
- FreeKids un Govaplast Play jāapvieno zem viena TERITORIJA rotaļu virziena
- URBASTYLE grili ir sekundārs atpūtas zonas risinājums, nevis atsevišķa top-level kategorija

### Esošais ceļš, ko reuse
- `produkti/rotalu-laukumi/` → jāpārvērš no FreeKids-only landing par vairāku partneru `Rotaļu un atpūtas zonas` landing

---

## 5. Smart City un tehnoloģijas

Lietotāja nodoms: pievienot publiskajai videi enerģiju, uzlādi, savienojamību vai digitālas funkcijas.

### Apakškategorijas
- Solārās uzlādes stacijas
- Viedie soli
- Wi‑Fi / telemetrija
- LED / audio / saistītie viedie risinājumi

### Partneri
- ZANO
- URBASTYLE atsevišķos papildrisinājumos

### Canonical noteikumi
- ZANO solārā uzlādes stacija → Smart City un tehnoloģijas
- ZANO viedais sols → canonical zem Āra mēbeles → Soli un sēdvietas; Smart City lapā cross-link

### Nepieciešams jauns lokāls landing
Produktu hub nedrīkst mest lietotāju uzreiz uz ZANO Smart City. Vajadzīga lokāla TERITORIJA Smart City kategorijas lapa.

---

## 6. Materiālu risinājumi

Lietotāja nodoms: atrast konkrētu tehnisku materiālu, virsmu vai konstrukcijas sistēmu, nevis gatavu soli/urnu.

### Apakškategorijas
- Pārstrādātas plastmasas dēļi un profili
- Terases
- Žogu / norobežojumu materiāli
- Atbalsta sienas
- Tehniskie profili un sistēmas
- Arhitektoniskais betons / konstrukcijas
- HPL / dizaina materiāli

### Partneri
- Govaplast
- URBASTYLE
- OUT-SIDER

### Canonical noteikumi
- Govaplast terases dēļi → Materiālu risinājumi
- Govaplast tehniskie profili → Materiālu risinājumi
- URBASTYLE atbalsta sienas / arhitektoniskais betons → Materiālu risinājumi
- Gatavs sols/urna/galds no betona vai pārstrādātas plastmasas nepieder šeit; tas iet savā funkcionālajā produktu kategorijā

### Esošie ceļi
- `produkti/parstradata-plastmasa/` → nākotnē materiālu/partnera landing vai redirect; ne galvenais ceļš uz Govaplast gatavajiem produktiem
- `produkti/betona-mebeles/` → nākotnē materiālu/partnera landing vai redirect; ne galvenais ceļš uz URBASTYLE gatavajiem produktiem

---

# Partneru pārklājums

| Lietotāja vajadzība | ZANO | SAWO | URBASTYLE | Govaplast | FreeKids | OUT-SIDER |
|---|---|---|---|---|---|---|
| Velo statīvi | Jā | Jā | — | Jā | — | — |
| Velo nojumes | — | Jā | — | — | — | — |
| Divu līmeņu velo | — | Jā | — | — | — | — |
| Velo glabātavas | — | Jā | — | — | — | — |
| Remonta stacijas / pumpji | Jā | servisa virziens | — | — | — | — |
| Skrejriteņu statīvi | — | Jā | — | — | — | — |
| Soli / sēdvietas | Jā | — | Jā | Jā | — | Jā |
| Galdi / piknika | Jā | — | Jā | Jā | — | iespējams |
| Urnas / šķirošana | Jā | — | Jā | Jā | — | — |
| Puķu kastes | Jā | — | Jā | Jā | — | — |
| Koku aizsardzība | Jā | — | Jā | — | — | — |
| Stabi / norobežojumi | Jā | — | Jā | Jā | — | — |
| Žogi | Jā | — | — | Jā | — | — |
| Informācijas stendi / signage | Jā | — | Jā | — | — | — |
| Apgaismojums | Jā | — | daļēji | — | — | — |
| Rotaļu laukumi | — | — | — | Jā | Jā | — |
| Smart City / uzlāde | Jā | — | daļēji | — | — | — |
| Materiāli / tehniskās sistēmas | — | — | Jā | Jā | — | Jā |

---

# Gala sitemap

Produkti
├── Velo infrastruktūra
│   ├── Velo statīvi
│   │   ├── SAWO
│   │   ├── ZANO
│   │   └── Govaplast
│   ├── Velo nojumes
│   │   └── SAWO
│   ├── Divu līmeņu novietnes
│   │   └── SAWO
│   ├── Velo glabātavas
│   │   └── SAWO
│   ├── Remonta stacijas un pumpji
│   │   └── ZANO
│   └── Skrejriteņu statīvi
│       └── SAWO
├── Āra mēbeles
│   ├── Soli un sēdvietas
│   │   ├── ZANO
│   │   ├── URBASTYLE
│   │   ├── Govaplast
│   │   └── OUT-SIDER
│   ├── Galdi
│   │   ├── ZANO
│   │   ├── URBASTYLE
│   │   └── Govaplast
│   └── Piknika galdi un komplekti
│       ├── ZANO
│       └── Govaplast
├── Teritorijas labiekārtojums
│   ├── Atkritumu apsaimniekošana
│   │   ├── Atkritumu urnas
│   │   ├── Šķirošanas urnas
│   │   ├── Suņu atkritumu urnas
│   │   └── Pelnu trauki
│   ├── Apzaļumošana un koku aizsardzība
│   │   ├── Puķu kastes
│   │   └── Koku sargi / režģi
│   ├── Norobežojumi
│   │   ├── Bollardi / dekoratīvie stabi
│   │   ├── Žogi
│   │   ├── Ķēdes
│   │   └── Satiksmes zīmju stabi
│   ├── Informācija un norādes
│   │   ├── Informācijas stendi
│   │   └── Signage / norādes
│   └── Apgaismojums
│       └── Ielu / teritorijas lampas
├── Rotaļu un atpūtas zonas
│   ├── Rotaļu laukumi / kompleksi
│   ├── Kāpelēšanas un aktivitāšu elementi
│   ├── Šūpoles / slidkalniņi / batuti
│   ├── Publiskie grili
│   └── Citi aktīvās atpūtas elementi
├── Smart City un tehnoloģijas
│   ├── Solārās uzlādes stacijas
│   ├── Viedie soli [cross-link uz Āra mēbeles → Soli]
│   ├── Wi‑Fi / telemetrija
│   └── LED / audio / saistītie risinājumi
└── Materiālu risinājumi
    ├── Pārstrādātas plastmasas dēļi un profili
    ├── Terases
    ├── Žogu / norobežojumu materiāli
    ├── Atbalsta sienas
    ├── Tehniskie profili un sistēmas
    ├── Arhitektoniskais betons / konstrukcijas
    └── HPL / dizaina materiāli

---

# IA LOCK lēmumi

- `Teritorijas aprīkojums` → **Teritorijas labiekārtojums**
- `Rotaļu un atpūtas risinājumi` → **Rotaļu un atpūtas zonas**
- `Materiāli un konstrukcijas` → **Materiālu risinājumi**
- `Apgaismojums` paliek zem **Teritorijas labiekārtojums**
- 6 top-level grupas ir fiksētas
- partneris un materiāls nav top-level navigācijas ass
- katram produktam viena canonical mājvieta

## IA LOCK

**Šī struktūra ir apstiprinātā implementācijas bāze.**

Nākamais posms:
1. pārtaisīt `produkti/index.html` pēc šīm 6 grupām;
2. izveidot/reorganizēt kategoriju landing lapas;
3. saglabāt esošo pareizo inventory, attēlus un ārējos partneru galamērķus;
4. tikai pēc strukturālās implementācijas sākt layout un UI/UX darbu.
