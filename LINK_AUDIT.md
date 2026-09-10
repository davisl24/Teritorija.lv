# TERITORIJA — Link Audit

Mērķis: fiksēt aktuālo produktu struktūru, partneru galamērķus un atlikušos browser QA punktus pirms `STRUCTURE + VISUAL CONTENT LOCK`.

## Pamatprincips

Produktu navigācija tiek būvēta pēc lietotāja vajadzības, nevis pēc ražotāja vai materiāla.

Gala patterns:

`Kategorija → partneris / produkta tips → pilns lokālais klāsts tikai tad, ja tam ir reāla vērtība → citādi partnera uzturēts katalogs → projekta CTA`

Papildu noteikumi:
- kategorijas karte ved uz kategorijas lapu, nevis uz vienu konkrētu produktu;
- ja lokālajā landingā ir tikai viens galamērķis un nav reālas izvēles, starplīmeni neveidojam;
- saistītu produktu drīkst parādīt citā kontekstā, bet tam ir viena canonical mājvieta;
- no gala kataloga nevedam atpakaļ uz veco TERITORIJA katalogu tikai tāpēc, lai parādītu pārējo klāstu;
- neuzturam pilnu partnera kataloga kopiju, ja partneris pats to uztur labāk.

## IA LOCK — 6 galvenās grupas

1. Velo infrastruktūra
2. Āra mēbeles
3. Teritorijas labiekārtojums
4. Rotaļu un atpūtas zonas
5. Smart City un tehnoloģijas
6. Materiālu risinājumi

`produkti/index.html` rāda tikai šīs sešas grupas un visas sešas ved uz lokāliem TERITORIJA kategoriju landingiem.

## Velo infrastruktūra

Statuss: CODE/STRUCTURE PASS.

Galvenie lokālie virzieni:
- `produkti/velo-stativi/`
- `produkti/velo-nojumes/`
- `produkti/divu-limenu-novietnes/`
- `produkti/velo-glabatuves/`
- `produkti/velo-remonta-stacijas/`
- `produkti/skrejritenu-stativi/`

### Velo statīvi

Partneru līmenis:
- SAWO → lokāls `produkti/velo-stativi/sawo-modeli/`
- ZANO → aktuālais Bicycle Racks katalogs
- Govaplast → aktuālā Bicycle Stands kategorija

SAWO lokālajā kataloga lapā:
- BR101–BR123 visi saglabāti ar vizuāliem;
- zem BR sērijas lokāli parādīti arī U-tipa, trapecveida, privāto teritoriju un moduļu virzieni;
- vecais links no šīs gala lapas atpakaļ uz veco TERITORIJA SAWO katalogu ir noņemts.

Pārējās velo dziļās lapas ir vienkāršotas līdz reprezentatīviem piemēriem, reālām izvēlēm un projekta CTA, nevis pilna kataloga kopijai.

## Āra mēbeles

Statuss: CODE/STRUCTURE PASS.

Canonical apakšgrupas:
- Soli un sēdvietas
- Āra galdi
- Piknika galdi un komplekti

### Soli un sēdvietas

Partneru līmenis:
- ZANO
- URBASTYLE
- Govaplast
- OUT-SIDER

Lokāli tiek izcelti tikai tie konkrētie modeļi, kuriem ir labs vizuāls un lokāla produkta lapa. Pilnie katalogi paliek pie partneriem.

## Teritorijas labiekārtojums

Statuss: CODE/STRUCTURE PASS.

Canonical apakšgrupas:
- Atkritumu apsaimniekošana
- Apzaļumošana un koku aizsardzība
- Norobežojumi
- Informācija un norādes
- Apgaismojums

### Atkritumu apsaimniekošana

Ir reāli vizuāli un tieši katalogu galamērķi:
- ZANO litter bins
- ZANO recycling bins
- ZANO dog waste bins
- ZANO cigarette bins
- URBASTYLE litter bins
- Govaplast street garbage cans

Projekta CTA: ir.

### Apzaļumošana

- Puķu kastes → lokāls canonical ceļš `Teritorijas labiekārtojums → Apzaļumošana → Puķu kastes`
- ZANO koku sargi → partnera katalogs
- URBASTYLE koku aizsardzība → partnera katalogs

Vecais `Āra mēbeles → Puķu kastes` canonical ceļš vairs netiek izmantots jaunajā IA.

### Puķu kastes

Partneru līmenis augšā:
- ZANO
- URBASTYLE
- Govaplast

ZANO zemāk ir reprezentatīvi lokāli modeļi:
- Universe 06.155.S
- Quadro 06.176.XL
- Scandik 06.046.S
- Origami 06.460.2
- Flash 06.025.M

Pilnais ZANO planter katalogs paliek kā ārējais galamērķis.

### Norobežojumi

Vizuāli + katalogi:
- ZANO bollards
- ZANO fences
- ZANO chains
- ZANO traffic sign posts
- URBASTYLE bollards
- Govaplast bollards

Projekta CTA: ir.

### Informācija un norādes

Vizuāli + katalogi:
- ZANO information boards
- URBASTYLE signage

Projekta CTA: ir.

### Apgaismojums

Nav lieka lokāla starplīmeņa, ja galamērķis ir viens. Kategorija ved tieši uz atbilstošo partnera risinājumu.

## Rotaļu un atpūtas zonas

Statuss: CODE/STRUCTURE PASS.

Galvenie virzieni:
- Rotaļu laukumi un aktivitāšu elementi
- Atpūtas zonu papildrisinājumi

### Rotaļu laukumi

Partneru līmenis:
- FreeKids → aktuālais Playgrounds katalogs
- Govaplast Play → drošais hostētais Play brochure PDF

Projekta CTA: ir.

### Atpūtas zonu papildrisinājumi

- URBASTYLE publiskie grili
- Piknika galdi kā saistīts cross-link uz canonical `Āra mēbeles → Piknika galdi`

Projekta CTA: ir.

## Smart City un tehnoloģijas

Statuss: CODE/STRUCTURE PASS.

Galvenajā lapā tikai divi reāli virzieni:
- Solārā uzlāde un enerģija → ZANO Solar Charging Stations
- Savienojamība un digitālās funkcijas → ZANO Smart City

Viedie soli netiek dublēti kā otra canonical kategorija. Tie ir cross-link uz `Āra mēbeles → Soli un sēdvietas`.

Agrākais savstarpējais Smart City apakšlapu loops ir noņemts.

## Materiālu risinājumi

Statuss: CODE/STRUCTURE PASS.

Galvenie virzieni:
- Pārstrādātas plastmasas materiāli → lokāls starplīmenis, jo ir vairāki pielietojumi
- Betona konstrukcijas un atbalsta sienas → tieši URBASTYLE
- HPL un dizaina materiāli → tieši OUT-SIDER

### Pārstrādāta plastmasa

Lokālajā materiālu lapā paliek tikai:
- Govaplast Garden — dēļi, profili, terases
- Govaplast Technic — tehniskās un atbalsta sistēmas

Gatavie soli, urnas un velo statīvi paliek savās funkcionālajās kategorijās.

## Partneru galamērķi

### ZANO

Statuss: VERIFIED.

Pārbaudītas Street Furniture kategorijas un Smart City, tostarp:
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

### URBASTYLE

Statuss: VERIFIED.

Aktīvi izmantotie galamērķi:
- benches-all
- planters
- walls
- tables
- litter-bins
- seats
- bollards
- all-collections
- barbecue
- tree-protection
- signage
- `/en/products`

### Govaplast

Aktīvi izmantotie galamērķi:
- park benches
- picnic tables
- planters
- garbage cans
- bicycle stands
- bollards
- Garden
- Technic retaining walls

Govaplast Play V1 izmanto drošo brochure PDF, nevis veco `?page_id=919` URL.

### FreeKids

- Playgrounds kategorija — VERIFIED.

### OUT-SIDER

- aktuālais domēns `outsiderfurniture.com`
- urban furniture katalogs tiek izmantots HPL/dizaina un partnera virzieniem.

## Inquiry modelis

Vecais ecommerce tipa produktu grozs vairs nav galvenais UX modelis.

Aktuālais princips:
- kategorija → `Pieteikt projektu` / `Saņemt konsultāciju`
- konkrēts produkts → `Jautāt par šo modeli`
- produkta vai kategorijas konteksts tiek padots formai
- lietotājam nav pašam jāsaliek vairāku partneru grozs.

## Legacy lapas

Repo joprojām eksistē vecākas partner/material-first lapas, piemēram:
- `produkti/betona-mebeles/`
- `produkti/parstradata-plastmasa/`

Tās nav jaunās sešu grupu IA canonical navigācijas daļa un ir `noindex`. Tās pagaidām netiek dzēstas, lai nesalauztu iespējamos vecos URL. Pirms publiska SEO/publish posma jāizlemj, vai tās kļūst par redirect/compatibility lapām.

## Pēdējais browser pass pirms lock

Jāpārbauda tikai reālais pārlūka rezultāts, nevis jāatver jauns IA plānošanas aplis.

Galvenās ķēdes:
1. `Produkti → Velo infrastruktūra → Velo statīvi → SAWO`
2. `Produkti → Āra mēbeles → Soli un sēdvietas`
3. `Produkti → Teritorijas labiekārtojums → Atkritumu apsaimniekošana`
4. `Produkti → Teritorijas labiekārtojums → Apzaļumošana → Puķu kastes`
5. `Produkti → Teritorijas labiekārtojums → Norobežojumi`
6. `Produkti → Teritorijas labiekārtojums → Informācija un norādes`
7. `Produkti → Rotaļu un atpūtas zonas → Rotaļu laukumi`
8. `Produkti → Smart City`
9. `Produkti → Materiālu risinājumi → Pārstrādāta plastmasa`

PASS kritēriji:
- nav loopu;
- nav tukšu vai acīmredzami nepareizu vizuāļu;
- nākamais klikšķis turpina lietotāja nodomu;
- nav nejaušas atgriešanās vecajā partner-first IA;
- breadcrumbs saglabā kontekstu;
- partnera katalogs tiek atvērts tikai tajā līmenī, kur tas jau ir jēgpilns gala solis.

Ja šie punkti ir PASS → `STRUCTURE + VISUAL CONTENT LOCK`.

Pēc lock: layout → UI/UX sistēma → browser review → polish.
