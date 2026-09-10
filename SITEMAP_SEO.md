# Lapu karte un SEO

Aktuālais priekšskatījuma stāvoklis. Gala domēns: `https://www.teritorija.lv` līdz publicēšanas brīdī tiek apstiprināts citādi.

| URL | Lapa | H1 | Indeksācija priekšskatījumā |
|---|---|---|---|
| `/` | Sākumlapa | Āra mēbeles un labiekārtojums | noindex, nofollow |
| `/produkti/` | Produktu katalogs | Produktu katalogs | noindex, nofollow |
| `/katalogi/` | Ražotāju katalogi | Produktu katalogi | noindex, nofollow |
| `/par-mums/` | Par mums | Pilsētplānošana un urbānisms | noindex, nofollow |
| `/pieprasijums/` | Projekta pieprasījums | Projekta pieprasījums | noindex, follow |
| `/privatums/` | Privātuma politika | Privātuma politika | noindex, nofollow |
| `/produkti/zano-flash-02-725-1/` | ZANO Flash 02.725.1 | Flash 02.725.1 | noindex, nofollow |
| `/produkti/zano-scandik-02-046/` | ZANO Scandik 02.046 | Scandik 02.046 | noindex, nofollow |
| `/produkti/zano-soft-05-012/` | ZANO Soft 05.012 | Soft 05.012 | noindex, nofollow |
| `/produkti/zano-stilo-18-048/` | ZANO Stilo 18.048 | Stilo 18.048 | noindex, nofollow |

## Katalogi
`/katalogi/` satur 19 kartītes šādā secībā: ZANO 3, URBASTYLE 6, GOVAPLAST 6, SAWO 3, GREENMAX 1.

18 PDF saites priekšskatījumā ved uz esošajiem `https://www.teritorija.lv/_files/ugd/...pdf` URL un satur `data-pdf-target="/faili/...pdf"` gala hostinga ceļam. ZANO on-line katalogs paliek ārējā `zano.pl` saite bez `data-pdf-target`.

PDF faili repo netiek glabāti. Publicēšanas pārslēgšanas darbības ir `PUBLISH_CHECKLIST.md`.

Katalogu vāku sīkbildes šajā posmā nav pievienotas. Ja tās pievieno vēlāk, paredzētais ceļš ir `assets/images/katalogi/<slug>.jpg`, 400×400 JPEG, `loading="lazy"`.

## Navigācija
Galvene un kājene esošajās publiskajās HTML lapās satur saites uz `Produkti`, `Katalogi` un `Par mums`; `Pieprasījums` paliek atsevišķa galvenes CTA. Kontakti paliek kājenē.

## Publicēšana
Robots, canonical, sitemap.xml un gala domēna pārslēgšana notiek tikai pēc lapas apstiprināšanas un domēna gatavības. Neizņemt `noindex` priekšskatījuma laikā.
