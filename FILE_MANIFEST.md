# Failu manifests
2026-09-07. 4. posms, pirmais ziņojums.
Lietotājs ar “a aiziet” apstiprināja SITEMAP_SEO.md variantu A:
6 pamatlapas, līdz 12 pārbaudītu produktu detalizācijas lapām, bez atsevišķa portfolio un bloga.
Vizuālais virziens: apstiprinātā UI_UX_SPEC.md gaišā/zaļā sistēma.
Šis ir plānoto failu manifests, nevis apliecinājums, ka faili jau izveidoti.

## Lapas
| Ceļš | Loma |
|---|---|
| index.html | Sākumlapa: hero, produktu kategorijas, sadarbība, ražotāji un kontakti |
| produkti/index.html | Statisks produktu katalogs ar JS filtru uzlabojumiem |
| produkti/{produkta-slug}/index.html | Atsevišķa lapa katram pārbaudītam modelim; līdz 12 lapām |
| pieprasijums/index.html | Izvēlēto produktu saraksts un projekta pieteikums |
| par-mums/index.html | Pārbaudīts uzņēmuma un sadarbības apraksts |
| kontakti/index.html | Kontaktinformācija un rekvizīti |
| privatums/index.html | Faktiskajai datu apstrādei atbilstošs privātuma teksts |

{produkta-slug} ir dokumentācijas apzīmējums; šāda burtiska mape netiks izveidota.
Konkrētie produktu failu nosaukumi jānosaka pēc modeļu pārbaudes.
Neizveidot izdomātus modeļus, lai aizpildītu 12 vietas.

## Dizains, skripti un dati
| Ceļš | Loma |
|---|---|
| css/style.css | Visi kopīgie stili, tokeni, mobilā/tablet/desktop adaptācija, pogu un formu stāvokļi |
| js/content.js | LV UI teksti, filtru nosaukumi, validācijas kļūdas un paziņojumi; CONTENT un LANG |
| js/products-data.js | Pārbaudīti produktu ID, nosaukumi, saites un filtru atribūti |
| js/main.js | Navigācija, katalogu filtri, pieprasījuma saraksts, daudzumi, glabāšana un formas validācija |

Skriptu ielādes secība: content.js → products-data.js → main.js.
Visi parastā script režīmā ar defer, bez type=module.
HTML satur SEO tekstus un produktu pamatinformāciju; products-data.js tos neaizstāj.
Nav portfolio-data.js vai blog-data.js.
Saraksts glabā tikai produktu ID un daudzumu; personas dati netiek saglabāti localStorage.
Bez gatava servera nav aktīvas nosūtīšanas vai viltus panākumu paziņojuma.

## Attēlu un dokumentu mapes
| Ceļš | Saturs |
|---|---|
| assets/images/brand/ | Oriģinālais uzņēmuma logo un no tā sagatavots favicon |
| assets/images/hero/ | Atlasīta īsta hero fotogrāfija un nepieciešamie izmēri |
| assets/images/categories/ | Īsti kategoriju attēli |
| assets/images/products/ | Pārbaudīto produktu attēli |
| assets/images/manufacturers/ | Oficiālie pārstāvēto ražotāju logo |
| assets/images/og-teritorija.jpg | Kopīgais sociālo saišu attēls pēc īsto materiālu atlases |
| assets/documents/ | Atļauti ražotāju katalogi un tehniskie dokumenti, ja tos glabājam lokāli |

Failu formāts un precīzie nosaukumi tiek fiksēti, iegūstot īstos materiālus.
Nepievienot tukšus attēlus, bojātas saites vai izdomātus realizētus projektus.
Ārējos ražotāja dokumentus drīkst arī sasaistīt ar pārbaudītu oficiālo URL.

## Dokumentācija un izvietošana
| Ceļš | Loma |
|---|---|
| UI_UX_SPEC.md | Apstiprinātā dizaina un funkciju specifikācija |
| SITEMAP_SEO.md | Apstiprinātā A lapu karte un statiskie meta dati |
| FILE_MANIFEST.md | Šis manifests un izstrādes secība |
| CONTENT_SOURCES.md | Izmantoto materiālu avoti un pārbaudes statuss; papildina materiālu atlases laikā |
| DEPLOYMENT.md | Priekšskatījuma/gala publicēšanas soļi un formas servera pieslēgums |
| robots.txt | Gala indeksācijas noteikumi; atšķir preview un publisko vidi |
| sitemap.xml | Tikai reāli publicēto indeksējamo lapu saraksts |

Hostinga konfigurācijas un nosūtīšanas endpoint failus konkretizē pēc gala hostinga izvēles.
Hostinger PHP endpoint nav daļa no Vercel statisko failu izpildes.
Nekādi SMTP noslēpumi repozitorijā vai pārlūkā.
Produkcijas pāradresāciju sarakstu sagatavo pēc esošo URL audita.

## Izstrādes secība un pārbaude
1. Šis manifests.
2. index.html — sākumlapas HTML; pirms tam pārbaudīt izmantojamās fotogrāfijas un logo.
3. Pārējās HTML lapas — pa vienai; produktu lapām vispirms pārbaudīt modeļu datus.
4. css/style.css.
5. js/content.js un js/main.js — katrs atsevišķā ziņojumā.
6. js/products-data.js.
7. Formas servera pieslēgums, hostinga instrukcijas un noslēdzošā pārbaude pēc servera izvēles.

Ievēro lietotāja sākotnējā pielikuma prasību: viens koda fails vienā ziņojumā, pēc tā gaidīt “OK”.
Kamēr CSS un JS vēl nav pievienoti, starpposma HTML nav gatavs vizuālais priekšskatījums.
HTML pievienošana viena pati negarantē konkrētā Vercel deployment 404 novēršanu; pēc izvietošanas pārbaudīt īsto URL.
Noslēgumā pārbaudīt navigāciju, filtru rezultātus, saraksta daudzumus/dzēšanu, kļūdu stāvokļus un mobile/tablet/desktop.
