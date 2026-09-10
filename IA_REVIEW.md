# TERITORIJA — IA REVIEW

Statuss: REVIEW DRAFT. Šis nav IA LOCK un nav implementācijas uzdevums.

Mērķis: samazināt darba `IA_MAP.md` 11 pirmā līmeņa grupas līdz skaidrai, lietotāja vajadzībās balstītai struktūrai. Ražotāji un materiāli paliek sekundārs izvēles slānis, nevis galvenā navigācijas ass.

## Galvenais secinājums

11 vienlīdzīgas top-level produktu grupas ir par daudz. Tās sajauc galvenos klienta uzdevumus ar šaurākām produktu ģimenēm un sekundāriem virzieniem.

Ieteiktais gala 1. līmenis: 6 grupas.

1. Velo infrastruktūra
2. Āra mēbeles
3. Teritorijas aprīkojums
4. Rotaļu un atpūtas risinājumi
5. Smart City un tehnoloģijas
6. Materiāli un konstrukcijas

`Papildu pilsētvides elementi` nav atsevišķs top-level. Šie produkti jāievieto tuvākajā funkcionālajā grupā vai sekundārā `Citi risinājumi` blokā.

---

## 1. Velo infrastruktūra

Lietotāja nodoms: novietot, aizsargāt, glabāt vai apkalpot velosipēdus/skrejriteņus.

Apakšgrupas:
- Velo statīvi
- Velo nojumes
- Divu līmeņu novietnes
- Velo glabātavas / slēgtas novietnes
- Remonta stacijas un pumpji
- Skrejriteņu statīvi

Partneri:
- SAWO
- ZANO
- Govaplast

Piezīme: `Velo zonas / servisa punkti` nav vajadzīga kā atsevišķa paralēla apakšgrupa, ja tās saturs faktiski ir remonta stacijas, pumpji un saistīts aprīkojums. Labāk izvairīties no diviem nosaukumiem vienam lietotāja nodomam.

---

## 2. Āra mēbeles

Lietotāja nodoms: aprīkot vietu sēdēšanai, ēšanai un ikdienas lietošanai.

Apakšgrupas:
- Soli un sēdvietas
  - ar atzveltni
  - atsevišķi sēdekļi / krēsli
  - moduļu sēdvietas
  - dizaina / multifunkcionālas sēdvietas
- Galdi
- Piknika galdi un komplekti

Partneri:
- ZANO
- URBASTYLE
- Govaplast
- OUT-SIDER

Svarīga robeža: `viedie / solārie soli` produktu tipa ziņā ir soli, bet tehnoloģiskā nodoma ziņā tie pieder arī Smart City. Canonical mājvieta: `Āra mēbeles → Soli un sēdvietas`; Smart City lapā tos drīkst parādīt kā cross-link / piemēru, nevis dublēt kā atsevišķu katalogu.

---

## 3. Teritorijas aprīkojums

Lietotāja nodoms: uzturēt, apzaļumot, norobežot, organizēt un marķēt teritoriju.

Apakšgrupas:
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

Partneri:
- ZANO
- URBASTYLE
- Govaplast

Kāpēc apvienot: `Atkritumu apsaimniekošana`, `Apzaļumošana`, `Norobežojumi` un `Informācija` katra atsevišķi ir pārāk šaura top-level navigācijai. Kopā tās veido vienu saprotamu uzdevumu: teritorijas aprīkošana.

`Apgaismojums` pagaidām paliek zem šīs grupas. Ja vēlāk inventory kļūst pietiekami plašs, to var izcelt atsevišķi bez visas IA pārbūves.

---

## 4. Rotaļu un atpūtas risinājumi

Lietotāja nodoms: izveidot bērnu, jauniešu vai publisku atpūtas zonu.

Apakšgrupas:
- Rotaļu laukumi / kompleksi
- Kāpelēšanas un aktivitāšu elementi
- Šūpoles / slidkalniņi / batuti
- Publiskie grili
- Citi aktīvās atpūtas elementi

Partneri:
- FreeKids
- Govaplast Play
- URBASTYLE (grili / atpūtas papildrisinājumi)

Piezīme: `Publiskie grili` nav pietiekami liela atsevišķa top-level kategorija. Tie iederas šeit kā atpūtas zonas papildrisinājums.

---

## 5. Smart City un tehnoloģijas

Lietotāja nodoms: pievienot publiskajai videi enerģiju, uzlādi, savienojamību vai digitālas funkcijas.

Apakšgrupas:
- Solārās uzlādes stacijas
- Viedie soli
- Wi‑Fi / telemetrija
- LED / audio / saistītie viedie risinājumi

Partneri:
- ZANO
- URBASTYLE atsevišķos papildrisinājumos

Svarīgi: nepieciešama lokāla TERITORIJA Smart City landing lapa. Produkta hub nevajadzētu mest lietotāju uzreiz uz ZANO.

---

## 6. Materiāli un konstrukcijas

Lietotāja nodoms: atrast konkrētu tehnisku materiālu, virsmu vai konstrukcijas sistēmu, nevis gatavu soli/urnu.

Apakšgrupas:
- Pārstrādātas plastmasas dēļi un profili
- Terases
- Žogu / norobežojumu materiāli
- Atbalsta sienas
- Tehniskie profili un sistēmas
- Arhitektoniskais betons / konstrukcijas
- HPL / dizaina materiāli

Partneri:
- Govaplast
- URBASTYLE
- OUT-SIDER

Svarīga robeža: `Betona mēbeles` un `Pārstrādāta plastmasa` vairs nav galvenās produktu kategorijas. Gatavs sols no betona vai pārstrādātas plastmasas atrodas zem `Āra mēbeles → Soli un sēdvietas`. Šajā sadaļā paliek tikai gadījumi, kad pats materiāls vai konstrukcija ir lietotāja mērķis.

---

# Kur paliek iepriekšējās 11 grupas

| Darba IA grupa | Gala vieta |
|---|---|
| Velo infrastruktūra | Velo infrastruktūra |
| Soli un sēdvietas | Āra mēbeles |
| Galdi un piknika risinājumi | Āra mēbeles |
| Atkritumu apsaimniekošana | Teritorijas aprīkojums |
| Apzaļumošana un koku aizsardzība | Teritorijas aprīkojums |
| Norobežojumi un teritorijas organizēšana | Teritorijas aprīkojums |
| Informācija, norādes un apgaismojums | Teritorijas aprīkojums |
| Rotaļu un aktīvās atpūtas risinājumi | Rotaļu un atpūtas risinājumi |
| Smart City un uzlāde | Smart City un tehnoloģijas |
| Materiāli un tehniskie risinājumi | Materiāli un konstrukcijas |
| Papildu pilsētvides elementi | tuvākā funkcionālā grupa / Citi risinājumi |

---

# Dublēšanās noteikums

Vienam produktam ir viena canonical mājvieta IA. To drīkst parādīt arī citā kategorijā kā saistīto risinājumu, bet nevajag veidot divus neatkarīgus produkta katalogus.

Piemēri:
- ZANO viedais sols → canonical `Āra mēbeles → Soli un sēdvietas`; Smart City lapā cross-link.
- Govaplast velo statīvs → canonical `Velo infrastruktūra → Velo statīvi`; materiāls `pārstrādāta plastmasa` ir filtrs/atribūts.
- URBASTYLE betona sols → canonical `Āra mēbeles → Soli un sēdvietas`; `betons` ir filtrs/atribūts.
- ZANO solārā uzlādes stacija → canonical `Smart City un tehnoloģijas`.
- Govaplast terases dēļi → canonical `Materiāli un konstrukcijas`.

---

# Ieteicamais sitemap draft

Produkti
├── Velo infrastruktūra
│   ├── Velo statīvi
│   ├── Velo nojumes
│   ├── Divu līmeņu novietnes
│   ├── Velo glabātavas
│   ├── Remonta stacijas un pumpji
│   └── Skrejriteņu statīvi
├── Āra mēbeles
│   ├── Soli un sēdvietas
│   ├── Galdi
│   └── Piknika galdi un komplekti
├── Teritorijas aprīkojums
│   ├── Atkritumu apsaimniekošana
│   ├── Apzaļumošana un koku aizsardzība
│   ├── Norobežojumi
│   ├── Informācija un norādes
│   └── Apgaismojums
├── Rotaļu un atpūtas risinājumi
├── Smart City un tehnoloģijas
└── Materiāli un konstrukcijas

Partneris un materiāls parādās tikai pēc kategorijas/apakškategorijas izvēles kā izvēles vai filtrēšanas slānis.

---

# Pirms IA LOCK vēl jāizlemj

1. Vai `Teritorijas aprīkojums` ir klientam pietiekami saprotams nosaukums, vai labāk `Teritorijas labiekārtojums`.
2. Vai `Apgaismojums` pašreizējā inventory ir pietiekams savai apakšlapai, vai sākumā tikai karte/linka virziens.
3. Vai `Rotaļu un atpūtas risinājumi` jāsaīsina uz `Rotaļu un atpūtas zonas`.
4. Vai materiālu sadaļas publiskais nosaukums būs `Materiāli un konstrukcijas` vai vienkāršāk `Materiālu risinājumi`.

Līdz šo četru nosaukumu/robežu lēmumam HTML struktūru nepārbūvējam.