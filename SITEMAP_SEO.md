# Lapu karte, SEO un satura apjoms
2026-09-07. 3. posms — saskaņošanai.
Lietotājs apstiprināja 2. posma piedāvāto gaišo/zaļo vizuālo virzienu un B kataloga funkcionalitāti ar “aiziet talak ja un aiziet”.
UI_UX_SPEC.md v0.1 vizuālās un funkcionālās prasības pieņemtas. Šeit piedāvātais lapu un dinamiskā satura apjoms vēl jāsaskaņo.

## Lapu karte
URL norādīti gala domēnam https://www.teritorija.lv.
| URL | title (<=60) | meta description (<=155) | H1 | CTA / funkcija |
|---|---|---|---|---|
| / | Āra mēbeles un labiekārtojums | Teritorija | Āra mēbeles, velo novietnes un rotaļu laukumu aprīkojums. Apskati risinājumus un piesaki sava projekta vajadzības. | Āra mēbeles un labiekārtojuma risinājumi | Apskatīt produktus; abu plūsmu sākums |
| /produkti/ | Produktu katalogs | Teritorija | Atrodi āra mēbeles, velo infrastruktūras un rotaļu laukumu risinājumus. Izvēlies produktus un pievieno tos piedāvājuma pieprasījumam. | Produktu katalogs | Pievienot pieprasījumam; samazina produktu precizēšanu |
| /pieprasijums/ | Piedāvājuma pieprasījums | Teritorija | Nosūti izvēlēto produktu sarakstu vai apraksti projekta vajadzības, norādot atrašanās vietu un vēlamo termiņu. | Pieteikt projektu | Nosūtīt pieprasījumu; vienkopus apkopo sākotnējos datus |
| /par-mums/ | Par mums | Teritorija | Iepazīsti Teritorija pārstāvētos labiekārtojuma risinājumus un sadarbības pieeju arhitektiem, būvniekiem un attīstītājiem. | Partneris ārtelpas labiekārtošanai | Pieteikt projektu; paskaidro sadarbību |
| /kontakti/ | Kontakti | Teritorija | Sazinies ar Teritorija par āra mēbelēm un labiekārtojuma risinājumiem. Kontaktinformācija, uzņēmuma rekvizīti un projekta pieteikums. | Kontakti | Pieteikt projektu / zvanīt |
| /privatums/ | Privātuma politika | Teritorija | Informācija par personas datu apstrādi, piesakot projektu vai pieprasot piedāvājumu Teritorija mājaslapā. | Privātuma politika | Izskaidro datu apstrādi |

Katras tabulā norādītās lapas og:image: TRŪKST. Plānotais kopīgais ceļš /assets/images/og-teritorija.jpg; nepieļaut tagu uz neesošu failu.
Produktu detalizācijas lapas: /produkti/{parbaudits-slug}/, tikai pēc īsto produktu atlases.
Katras produkta lapas title: {nosaukums} | Teritorija, pārbaudīt <=60 rakstzīmes; H1: īstais produkta nosaukums.
Meta aprakstu un og:image fiksē katram reālajam produktam pēc avota pārbaudes; pašlaik TRŪKST. Izdomātas produktu lapas neveidot.
Projekta pieprasījumu un privātuma lapu neiekļaut SEO piesaistes mērķos; pieprasījuma lapai noindex,follow.
Laika ietaupījums ir sagaidāmais ieguvums, nevis izmērīts fakts. Neapsolīt ietaupījuma procentus.
Nav atsevišķu B2C/B2B lapu: auditorijas apkalpo pēc vajadzības — produktu izvēle vai projekta apraksts.

## Navigācija un kategorijas
Galvene: Produkti, Par mums, Kontakti, Pieprasījums (skaits).
Projekti pievienojas tikai tad, ja tiek apstiprināta atsevišķa sadaļa un ir pārbaudīti uzņēmuma realizāciju materiāli.
Kategorijas V1 ir filtri katalogā, nevis četras plānas SEO lapas.
Sākuma grupas: āra mēbeles, velo infrastruktūra, rotaļu laukumi, pārstrādātas plastmasas risinājumi.
Grupām atļauta pārklāšanās; materiāla grupa nav ekskluzīva produkta lietojuma kategorija.
Piedāvāts starta apjoms: līdz 12 produktiem ar pārbaudītiem datiem, nevis izdomāti produkti skaita sasniegšanai.
Konkrētus modeļus atlasa nākamajā satura pārbaudē no esošās vietnes un oficiālajiem ražotāju avotiem.

## HTML un JavaScript
Katrai lapai sava mape ar index.html. Lokālajās saitēs lietot skaidru relatīvu ceļu uz index.html, lai failu apskate darbotos arī file://.
Publiskie canonical izmanto tabulas URL. Pēc izvietošanas pārbaudīt dublētos /index.html URL.
HTML: title, description, canonical, OG, H1, produktu apraksti, pamatnavigācija un kontakti.
js/content.js: const CONTENT = { lv: { ... } }; let LANG = 'lv'; tikai LV UI, filtru un formas ziņas.
js/main.js: navigācija, filtri, saraksts, validācija.
Piedāvāts js/products-data.js: pārbaudīti ID, nosaukumi, ceļi un filtru pazīmes saraksta darbībai; SEO saturu ar to neaizstāt.
Visi skripti parastā script režīmā ar defer; bez moduļiem, ietvariem un build.
Failu manifestu sagatavo pēc šī posma apstiprinājuma.

## Dinamiskās sadaļas — lēmums
Ieteikums: products-data.js JĀ; portfolio-data.js NĒ V1; blog-data.js NĒ V1.
Īstu projektu fotogrāfijas var izmantot sākumlapā tikai ar pārbaudītu kontekstu un izmantošanas tiesībām.
Ražotāja piemēra attēlu nedrīkst nosaukt par uzņēmuma realizētu projektu.
Portfolio var apstiprināt kā atsevišķu paplašinājumu, ja ir reāli materiāli.
Blogu neiekļaut bez satura uzturēšanas plāna.

## Nepieciešamie materiāli
| Materiāls | Pašreizējais statuss | Darbība |
|---|---|---|
| Oriģinālais logo | Nav repozitorijā | Iegūt no esošās lapas vai oriģinālfaila; neizdomāt citu logo |
| Hero fotogrāfija | Nav atlasīta | Izvēlēties īstu atbilstošu attēlu, pārbaudīt izmantošanas tiesības |
| Produktu modeļi, attēli, parametri | Nav atlasīti | Pārbaudīt līdz 12 modeļiem; saglabāt avotu saites |
| Projektu fotogrāfijas | Nav pārbaudīta piederība | Publicēt tikai ar precīzu kontekstu |
| Ražotāju logo / katalogi | Jāpārbauda saites un tiesības | Izmantot oficiālos materiālus |
| Kontakti un rekvizīti | Nolasīti esošajā lapā iepriekšējā auditā | Pārbaudīt pirms publiskas palaišanas |
| Privātuma teksts | Nav sagatavots | Saskaņot ar reālo datu apstrādi un glabāšanu |
| Gala hostings un nosūtīšanas saņēmējs | Nav apstiprināts | Izlemt pirms servera pieslēgšanas |

## SEO pāreja
Pirms aizstāt esošo domēna lapu, inventarizēt pašreizējos URL, katalogu PDF un attēlu saites.
Esošajiem aizstātajiem URL izveidot konkrētu 301 atbilstību; visu automātiski nenovirzīt uz sākumlapu.
Esošo /par-mums saglabāt vai paredzēt precīzu pāradresāciju.
Produktu shēmā neizdomāt Offer, cenu, availability vai atsauksmes.
Sitemap.xml satur tikai publicētas indeksējamas lapas. Preview nedrīkst tikt indeksēts.
OG attēlus un canonical pārbaudīt pret gala domēnu pirms palaišanas.

## Pašreizējā 404
2026-09-07 pārbaudē repozitorijā bija tikai UI_UX_SPEC.md; nebija index.html.
Šī dokumenta pievienošana vēl nerada strādājošu mājaslapu.
Attēlā redzams NOT_FOUND; konkrētā deployment konfigurācija un atvērtā URL nav pārbaudīta.
Pēc koda pievienošanas pārbaudīt Vercel jaunāko deployment un īsto preview URL.

## Trīs saskaņošanas opcijas
A — Apstiprināt 6 pamatlapas + līdz 12 pārbaudītu produktu detalizācijas lapām; bez atsevišķa portfolio un bloga. Ieteikums.
B — Tas pats + projektu portfolio, ja ir pārbaudīti materiāli; papildus projektu lapa un portfolio-data.js.
C — Sākumā 6 pamatlapas ar produktu detalizāciju kataloga HTML iekšienē; mazāk lapu, ierobežotāka produktu SEO individualizācija.
Pēc izvēles sākt 4. posmu ar failu manifestu. Pēc tam kodu veidot pa failam saskaņā ar lietotāja sākotnēji noteikto apstiprināšanas secību.
