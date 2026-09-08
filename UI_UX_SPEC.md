# Teritorija.lv — UI/UX specifikācija
Versija: 0.2 | 2026-09-07 | Statuss: Phase 1 vizuālā sistēma implementēta.
Apstiprināts: B — moderns produktu katalogs ar kopīgu piedāvājuma pieprasījuma sarakstu.
Ja jaunākas lietotāja apstiprinātās prasības konfliktē ar vecāku specifikācijas punktu, noteicoša ir jaunākā apstiprinātā prasība.

## 1. Bizness un robežas
Pārveidojam esošo teritorija.lv āra mēbeļu un labiekārtojuma uzņēmumam.
Zīmols: Teritorija. Esošās vietnes juridiskais uzņēmums: SIA “Mārupes noma”.
Avoti: https://www.teritorija.lv/ un https://www.teritorija.lv/par-mums (pārbaudīti 2026-09-07).
Auditorija: arhitekti, būvnieki, attīstītāji, pašvaldības; pieteikumi pieejami arī privātpersonām.
Mērķis: palīdzēt atrast piemērotus produktus un nosūtīt izvērtējamu projekta pieprasījumu.
Neiekļaut mērniecību, zemes sadali, obligātu kadastra numuru vai nepārbaudītus uzņēmuma apgalvojumus.
Nenorādīt izdomātas cenas, atsauksmes, pieredzes gadus, sertifikātus, piegādes termiņus vai garantijas.
Nav interneta veikala apmaksas, klientu kontu, automātiskas tāmes vai CRM V1 apjomā.

## 2. Pozicionējums un valoda
Virziens: precīzs un atturīgs arhitektūras produktu katalogs.
Piedāvātais H1: “Āra mēbeles un labiekārtojums”.
Piedāvātais ievads: “Produkti publiskām ārtelpām, dzīvojamiem projektiem un atpūtas vietām.”
Primārais CTA: “Apskatīt produktus”. Sekundārais: “Pieteikt projektu”.
Rakstīt latviski, konkrēti, bez nepamatotiem kvalitātes superlatīviem.
Cenas aizvieto “Pieprasīt piedāvājumu”, nevis izdomāts skaitlis vai 0 EUR.

## 3. Sākumlapas sadaļas
1. Galvene: īstais logo, Produkti, Par mums, Kontakti; pieprasījuma saraksts ar skaitu. Kamēr nav gatavas JS mobile navigācijas, neizvietot nefunkcionālu hamburger izvēlni.
2. Hero: verificēts ZANO produkta/risinājuma attēls, īss H1, ievads un divi CTA. Attēlu nepozicionēt kā Teritorija realizētu projektu. Desktop teksts un produkta vizuālis līdzās; mobile teksts pirms attēla.
3. Produktu kategorijas: nosaukums un saite; attēlu izmantot tikai tad, ja konkrētajai kategorijai ir verificēts assets. Bez verificēta attēla izmantot typography-led risinājumu. Sākotnēji āra mēbeles; velo infrastruktūra; rotaļu laukumi; pārstrādātas plastmasas risinājumi. Apakškategorijas tikai pēc datu audita.
4. Realizētie projekti: tikai dokumentēti uzņēmuma projekti ar atļautiem attēliem; ja nav materiālu, nepublicēt tukšu vai izdomātu sadaļu.
5. Sadarbības process: izvēlies produktus vai apraksti projektu → nosūti pieprasījumu → komanda precizē risinājumu un piedāvājumu. Nesolīt nepārbaudītu atbildes termiņu.
6. Ražotāji: pārbaudītie partneru nosaukumi. Oriģinālos logo izmantot tikai pēc to verificēšanas; līdz tam nosaukumu index/list ir apstiprinātais risinājums. Ražotājs ir sekundārs ceļš pēc produktu vajadzības.
7. Projekta pieteikuma CTA un kontakti.
8. Kājene: juridiskie dati, kontakti, privātums.
Detalizētus URL, meta datus un sadaļu galīgo apjomu saskaņo pa posmiem.

## 4. Katalogs un produktu saturs
V1 filtrs: kategorija un ražotājs; tikai filtriem ar reāli aizpildītiem datiem.
Produkta kartīte: īsts attēls, nosaukums, ražotājs, “Apskatīt” un “Pievienot pieprasījumam”.
Produkta detalizācija: nosaukums, attēli, apraksts, pārbaudīti izmēri/materiāli, pieejamie dokumenti, daudzums un pievienošanas poga.
Nenorādīt konfigurācijas, kuru pieejamība nav pārbaudīta.
Nav rezultātu: skaidrs paziņojums un “Notīrīt filtrus”.
Produktu skaits un datu fails tiek fiksēti pēc pieejamo materiālu audita.
Portfolio un blogs vēl nav apstiprināti. Blogu V1 neiesaku.

## 5. Divas pieprasījuma plūsmas
A. “Zinu, ko meklēju”: katalogs → izvēlētie produkti → projekta dati → nosūtīšana.
B. “Vajadzīgs risinājums projektam”: projekta pieteikums bez obligātas produktu izvēles.
Privātpersona/uzņēmums nav atsevišķa obligāta plūsma. Uzņēmums ir neobligāts formas lauks.

### Pieprasījuma saraksts
Pievienojot produktu, palikt esošajā skatā; paziņot par pievienošanu un atjaunot skaitu.
Tas pats produkts palielina esošās rindas daudzumu, neveido dublikātu.
Daudzums: vesels skaitlis >= 1; servera pusē arī tehnisks augšējais limits.
Var mainīt daudzumu un dzēst rindu. Pēc dzēšanas piedāvāt atcelšanu.
Sarakstu glabāt localStorage tikai ar produkta ID un daudzumu; kontaktus un failus lokāli nesaglabāt.
Ja localStorage nav pieejams, saraksts darbojas sesijas atmiņā.
Nezināmu vai izņemtu produktu ID neiekļaut nosūtāmajos datos; paziņot lietotājam.
Tukšs saraksts piedāvā atgriezties katalogā vai pieteikt projektu bez produktiem.

### Forma
Obligāti: kontaktpersonas vārds, e-pasts, projekta vieta (pilsēta/novads; nav obligāta precīza adrese).
Neobligāti: uzņēmums, tālrunis, vēlamais termiņš, papildu apraksts.
Plūsmā bez produktiem obligāts projekta vajadzības apraksts.
Termiņā atļaut “Vēl nav zināms”.
Faila pielikums ir plānota funkcija, aktivizējama tikai ar gatavu servera apstrādi:
maksimums 3 faili, 10 MB katram, 20 MB kopā; PDF/JPG/PNG.
Netiek atļauti SVG, HTML, izpildāmi faili vai publiskas failu saites.
Pie formas īss datu apstrādes skaidrojums un privātuma saite; nekādas iepriekš atzīmētas mārketinga izvēles.

### Stāvokļi un kļūdas
Sākums → rediģēšana → pārbaude → nosūtīšana → servera apstiprināti panākumi / kļūda.
Etiķetes vienmēr redzamas; placeholder nav etiķetes aizstājējs.
Lauku kļūdas latviski, piesaistītas laukiem; fokuss uz pirmo kļūdaino lauku.
Sūtot novērst dubultklikšķi, rādīt “Nosūta…”.
Panākumus rādīt tikai pēc servera apstiprinājuma; e-pasta pieņemšana nav garantija piegādei iesūtnē.
Kļūdas gadījumā saglabāt ievadīto formā un ļaut atkārtot.
Sarakstu dzēst tikai pēc veiksmīgas pieprasījuma pieņemšanas.
Testa versijā bez servera skaidri norādīt, ka pieteikumi netiek nosūtīti; nedrīkst rādīt viltus panākumus.

## 6. Vizuālie tokeni — apstiprinātais Phase 1 virziens
Krāsas:
--color-bg: #F7F7F2;
--color-surface: #FFFFFF;
--color-text: #20251F;
--color-muted: #596255;
--color-primary: #344A38;
--color-primary-hover: #273A2B;
--color-accent: #344A38;
--color-border: #D9DED5;
--color-error: #B42318;
--color-focus: #245FCC.
Teksta un interaktīvo stāvokļu kontrastu pārbaudīt implementācijā.
Tipogrāfija: --font-heading un --font-body: Arial, Helvetica, sans-serif.
V1 neparedz ārējas fontu ielādes; mierīgs, viegli salasāms sans-serif.
Phase 1 heading mērogs: H1 clamp(2.65rem, 6vw, 5rem); H2 clamp(2rem, 3.6vw, 3.5rem); pamata teksts 1rem, line-height 1.6.
H1 nekad nav garāks par 4 vārdiem.
Atstarpes: --space-xs 4px; --space-sm 8px; --space-md 16px; --space-lg 24px; --space-xl 32px; --space-2xl 48px; --space-3xl 64px; --space-4xl 96px; --space-5xl 128px.
Konteiners: 1280px; image-led/hero līdz 1440px. Ārējās malas mobile 20px, tablet 32px, desktop 48px.
Sadaļu vertikālās atstarpes: mobile 64px, tablet 96px, desktop līdz 128px atkarībā no sekcijas.
Border radius pārsvarā 0–6px; pogām 3–4px. Bez smagām ēnām vai dekoratīviem gradientiem.
Primārā poga: zaļš fons, balts teksts; sekundārā: caurspīdīgs fons, tumšs teksts un kontūra.
Pogas min-height 48px; redzams focus-visible, hover un active; disabled nav identificējams tikai pēc krāsas.
Animācijas 150–250ms krāsām, arrow translate un ļoti nelielam image scale; ievērot prefers-reduced-motion. Bez scroll bloķēšanas un parallax.

## 7. Responsivitāte un piekļūstamība
Mobile <768px; tablet 768–1024px; desktop >1024px.
Kategoriju režģis: 1 / 2 / 2 kolonnas (mobile / tablet / desktop).
Produktu režģis katalogā: 1 / 2 / 3 kolonnas (mobile / tablet / desktop).
Kamēr nav gatavas JS mobile izvēlnes, navigācija paliek funkcionāla un redzama responsive variantā; neizvietot hamburger pogu, kas neko nedara.
Pieprasījums kā atsevišķa lapa, nevis sarežģīts pilnekrāna modālis.
Saraksta rediģēšana mobile vertikālās rindās, bez horizontālas tabulas ritināšanas.
Semantiski HTML elementi, skip link, loģiska virsrakstu secība, redzams tastatūras fokuss.
Attēliem jēgpilns alt; dekoratīviem tukšs alt. Formām saistītas label un kļūdu norādes.
Pievienošanas paziņojumiem aria-live polite. Visas darbības pieejamas bez hover.

## 8. Tehniskā arhitektūra
HTML5 + CSS3 + ES6 Vanilla JS. Bez React, Vue, Tailwind, jQuery un npm build.
Parasti script ar defer; content.js pirms main.js; bez type=module.
js/content.js: const CONTENT = { lv: { ... } }; let LANG = 'lv';
UI ziņas un formu kļūdas atrodas content.js.
SEO saturs, H1, apraksti, title, meta un OG ir statiskajā HTML.
V1 produktu pamatinformācija pieejama statiskajā HTML; JS uzlabo filtrus un sarakstu.
Bez JavaScript saglabāt lasāmu katalogu un kontaktus.
Lokāls file:// nodrošina lapu apskati un klienta interakcijas bez fetch atkarības vietējiem datiem.
Nosūtīšana un failu augšupielāde prasa HTTPS serveri; pilna darbība tikai ar file:// nav iespējama.
HTML izmanto relatīvos resursu ceļus. Canonical un OG URL atbilst gala publiskajam domēnam.
Preview aizsargāt no indeksācijas; pirms gala publicēšanas pārbaudīt produkcijas indeksēšanas iestatījumus.

## 9. Hostings un pieteikumu serveris
Pašreiz lietotājs veido Vercel preview; sākotnējā prasībā paredzēts Hostinger shared hostings.
Statiskajai daļai jābūt pārnesamai uz abiem.
Vercel preview sākumā demonstrē UI, nevis īstu nosūtīšanu.
Hostinger gala izvietošanai piedāvāts atsevišķs PHP HTTPS endpoint ar SMTP; tas ir ārpus Vanilla JS klienta koda.
Vercel nevar palaist šo PHP endpoint kā parastu statisku failu; reālai nosūtīšanai Vercel jāizvēlas cits servera risinājums vai droši pieslēgts ārējs endpoint.
Gala hostings un pieprasījuma saņēmējs jāapstiprina pirms nosūtīšanas implementācijas.
SMTP paroles tikai servera pusē ārpus publiskiem failiem; nekad GitHub vai pārlūkā.
Serveris pārbauda laukus, failu saturu un izmērus, ierobežo pieprasījumu biežumu un novērš e-pasta galveņu injekciju.
Pielikumus neglabā publiskā mapē. Datu glabāšanas periods jāvienojas ar uzņēmumu.
Rekvizīti, saņēmēja e-pasts un privātuma teksts jāpārbauda pirms publiskas palaišanas.

## 10. Attēli un materiāli
Izmantot tikai īstus uzņēmuma/ražotāju attēlus ar atbilstošām izmantošanas tiesībām.
Neizmantot ģenerētus produktus vai izdomātus realizētus projektus.
Phase 1 hero un četru katalogā izmantoto ZANO produktu attēli ir verificēti esošajā Teritorija saturā. Joprojām trūkst pietiekama verificētu Teritorija realizēto projektu materiālu kopuma un kategoriju attēlu komplekta.
Trūkstošus materiālus iekšēji atzīmēt; publiski neizvietot izdomātus aizvietotājus.
Attēliem width/height, atbilstoši izmēri, WebP/AVIF pēc iespējas; zem pirmā ekrāna lazy loading.

## 11. Pieņemšanas kritēriji
Var atrast kategoriju, atvērt produktu, pievienot sarakstam, mainīt daudzumu un dzēst, kad attiecīgā JS funkcionalitāte ir pieslēgta.
Var iesniegt projekta vajadzību bez produktu izvēles, kad serveris ir pieslēgts.
Pēc pārlādes saraksts atjaunojas, ja localStorage ir pieejams un JS funkcionalitāte ir pieslēgta.
Nav viltus nosūtīšanas panākumu, izdomātu produktu datu vai neapstiprinātu cenu.
320px platumā nav horizontālas pārplūdes; saskarne jāpārbauda arī tablet un desktop.
Tastatūra sasniedz filtrus, navigāciju, produktus un formu.
Pamatinformācija lasāma bez JS.
Dzīvās nosūtīšanas pārbaude tikai ar skaidri marķētu testa pieprasījumu un apstiprinātu saņēmēju.

## 12. Saskaņošana un nākamais posms
Phase 1 vizuālais virziens ir implementēts sākumlapā un produktu katalogā: premium/editorial produkta-first sistēma, 2×2 desktop kategorijas, izceltie produkti, process, ražotāju index, CTA un katalogam saskaņota vizuālā valoda.
Nākamais posms sākas tikai pēc vizuālā review: produktu detalizācijas lapas un/vai JS katalogfiltri/pieprasījuma saraksts atbilstoši apstiprinātajai prioritātei.

## 13. Radius skala
--radius-sm: 8px — pogas, ievadlauki, tagi.
--radius-md: 14px — kartītes, formu bloki.
--radius-lg: 18px — attēli kartītēs, mediju bloki.
--radius-none: 0 — hero attēls, pilnekrāna sadaļas.
Noteikums: citas radius vērtības lapā nedrīkst parādīties.
Hero attēls vienmēr iet līdz malām bez apaļiem stūriem.

## 14. Kustības skala
--dur-fast: 200ms — hover, fokuss, krāsu pārejas.
--dur-base: 300ms — kartīšu pacelšanās.
--dur-slow: 400ms — sadaļu ienākšana skrollējot.
--ease: cubic-bezier(.22,.61,.36,1).
Noteikums: animē tikai transform un opacity.
Nekad neanimē width, height, top, left vai margin.
Viss zem prefers-reduced-motion tiek izslēgts.
