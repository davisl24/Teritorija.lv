# Teritorija.lv — UI/UX specifikācija
Versija: 0.1 | 2026-09-07 | Statuss: projekts lietotāja saskaņošanai.
Apstiprināts: B — moderns produktu katalogs ar kopīgu piedāvājuma pieprasījuma sarakstu.
Šis dokuments kļūst par izstrādes vienīgo patiesības avotu pēc saskaņošanas. Neapstiprinātas vizuālās detaļas neimplementēt.

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
Piedāvātais H1: “Āra mēbeles un labiekārtojuma risinājumi”.
Piedāvātais ievads: “Produkti publiskām ārtelpām, dzīvojamiem projektiem un atpūtas vietām.”
Primārais CTA: “Apskatīt produktus”. Sekundārais: “Pieteikt projektu”.
Rakstīt latviski, konkrēti, bez nepamatotiem kvalitātes superlatīviem.
Cenas aizvieto “Pieprasīt piedāvājumu”, nevis izdomāts skaitlis vai 0 EUR.

## 3. Sākumlapas sadaļas
1. Galvene: īstais logo, Produkti, Projekti, Par mums, Kontakti; pieprasījuma saraksts ar skaitu.
2. Hero: viena īsta projekta fotogrāfija, īss H1, ievads un divi CTA. Desktop teksts uz mierīga gaiša laukuma un foto līdzās; mobile teksts pirms foto.
3. Produktu kategorijas: attēls, nosaukums, saite. Sākotnēji āra mēbeles; velo infrastruktūra; rotaļu laukumi; pārstrādātas plastmasas risinājumi. Apakškategorijas tikai pēc datu audita.
4. Realizētie projekti: tikai dokumentēti uzņēmuma projekti ar atļautiem attēliem; ja nav materiālu, nepublicēt tukšu sadaļu.
5. Sadarbības process: izvēlies produktus vai apraksti projektu → nosūti pieprasījumu → komanda precizē risinājumu un piedāvājumu. Nesolīt nepārbaudītu atbildes termiņu.
6. Ražotāji: pārbaudītie partneri un oriģinālie logo; ražotājs ir sekundārs ceļš pēc produktu vajadzības.
7. Projekta pieteikuma CTA un kontakti.
8. Kājene: juridiskie dati, kontakti, privātums.
Detalizētus URL, meta datus un sadaļu galīgo apjomu saskaņo 3. posmā.

## 4. Katalogs un produktu saturs
V1 filtrs: kategorija un ražotājs; tikai filtriem ar reāli aizpildītiem datiem.
Produkta kartīte: īsts attēls, nosaukums, ražotājs, “Apskatīt” un “Pievienot pieprasījumam”.
Produkta detalizācija: nosaukums, attēli, apraksts, pārbaudīti izmēri/materiāli, pieejamie dokumenti, daudzums un pievienošanas poga.
Nenorādīt konfigurācijas, kuru pieejamība nav pārbaudīta.
Nav rezultātu: skaidrs paziņojums un “Notīrīt filtrus”.
Produktu skaits un datu fails tiek fiksēti 3. posmā pēc pieejamo materiālu audita.
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

## 6. Vizuālie tokeni — piedāvājums saskaņošanai
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
H1 clamp(2.25rem, 5vw, 4.5rem); H2 clamp(1.75rem, 3vw, 2.75rem); pamata teksts 1rem, line-height 1.6.
Atstarpes: --space-xs 4px; --space-sm 8px; --space-md 16px; --space-lg 24px; --space-xl 32px; --space-2xl 48px; --space-3xl 64px; --space-4xl 96px.
Konteiners: 1200px; hero līdz 1440px. Ārējās malas mobile 20px, tablet 32px, desktop 48px.
Sadaļu vertikālās atstarpes: mobile 48px, tablet 64px, desktop 96px.
Kartītēm 8px noapaļojums, pogām 4px. Bez smagām ēnām vai dekoratīviem gradientiem.
Primārā poga: zaļš fons, balts teksts; sekundārā: caurspīdīgs fons, tumšs teksts un kontūra.
Pogas min-height 48px; redzams focus-visible, hover un active; disabled nav identificējams tikai pēc krāsas.
Animācijas 150–220ms krāsām un nelielām pārejām; ievērot prefers-reduced-motion. Bez scroll bloķēšanas un parallax.

## 7. Responsivitāte un piekļūstamība
Mobile <768px; tablet 768–1024px; desktop >1024px.
Kategoriju režģis: 1 / 2 / 3 kolonnas; šaurākajos ekrānos neiespiest divas mazas kartītes.
Mobile navigācija ar atvēršanas/aizvēršanas pogu, aria-expanded, Escape un paredzamu fokusa atgriešanu.
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
Trūkst pārbaudīta lokālā logo, hero fotogrāfijas, produktu datu un projektu materiālu kopuma.
Trūkstošus materiālus iekšēji atzīmēt; publiski neizvietot izdomātus aizvietotājus.
Attēliem width/height, atbilstoši izmēri, WebP/AVIF pēc iespējas; zem pirmā ekrāna lazy loading.

## 11. Pieņemšanas kritēriji
Var atrast kategoriju, atvērt produktu, pievienot sarakstam, mainīt daudzumu un dzēst.
Var iesniegt projekta vajadzību bez produktu izvēles, kad serveris ir pieslēgts.
Pēc pārlādes saraksts atjaunojas, ja localStorage ir pieejams.
Nav viltus nosūtīšanas panākumu, izdomātu produktu datu vai neapstiprinātu cenu.
320px platumā nav horizontālas pārplūdes; saskarne pārbaudīta arī tablet un desktop.
Tastatūra sasniedz filtrus, navigāciju, produktus un formu.
Pamatinformācija lasāma bez JS.
Dzīvās nosūtīšanas pārbaude tikai ar skaidri marķētu testa pieprasījumu un apstiprinātu saņēmēju.

## 12. Saskaņošana un nākamais posms
A: apstiprināt šo B funkcionālo virzienu ar piedāvāto gaišo/zaļo vizuālo sistēmu (ieteikums).
B: saglabāt funkcijas, mainīt paleti uz baltu/grafīta neitrālu sistēmu.
C: saglabāt funkcijas, pirms specifikācijas apstiprināšanas precizēt konkrētas sadaļas.
Pēc izvēles: vietnes karte, SEO, produktu apjoms un dinamisko sadaļu saskaņošana.
Šis commits satur tikai specifikāciju; tas vēl nav publicējamas mājaslapas kods.
