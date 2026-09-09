# TERITORIJA — Image Audit

Mērķis: pirms UI/UX un motion darba pabeigt visu attēlu slāni. Katram attēlam jābūt semantiski pareizam, izsekojamam līdz avotam un vēlams glabātam lokāli repo.

## Noteikumi

1. **Pareiza bilde > placeholder > nepareiza bilde.**
2. Gala versijā partneru attēlus labāk **lejupielādēt repo**, nevis hotlinkot no partneru CDN.
3. Katram attēlam saglabājam avota lapu, no kuras bilde paņemta.
4. Vienu un to pašu bildi vairākām dažādām kategorijām nelietojam, ja vien tas nav apzināts vizuāls lēmums.
5. Pirms UI/UX lock katram katalogam jābūt statusam `IMAGE COMPLETE`.

Ieteicamā struktūra repo:

```text
assets/images/partners/
  urbastyle/
  sawo/
  govaplast/
  zano/
  freekids/
  outsider/
```

---

# URBASTYLE — 12/12 attēlu karte

Vecā TERITORIJA avota lapa:
- https://www.teritorija.lv/betona-ara-mebeles

Aktuālais URBASTYLE katalogs:
- https://www.urbastyle.com/en/products

| Mūsu kategorija | Primārais avots | Ieteiktais reprezentatīvais produkts / lapa | Statuss |
|---|---|---|---|
| Āra soli | https://www.urbastyle.com/en/products/street-furniture/benches-all | Bench Float — https://www.urbastyle.com/en/products/street-furniture/benches-block/bench-float | SELECTED, IMAGE FILE TODO |
| Puķu kastes | https://www.urbastyle.com/en/products/street-furniture/planters | Planter Ligna — https://www.urbastyle.com/en_us/products/street-furniture/planters/planter-ligna | SELECTED, IMAGE FILE TODO |
| Atbalsta sienas | https://www.urbastyle.com/en/products/walls | Walls katalogs | SOURCE VERIFIED, IMAGE FILE TODO |
| Āra galdi | https://www.urbastyle.com/en/products/street-furniture/tables | Table and Bench Picknick — https://www.urbastyle.com/en/products/street-furniture/tables/table-and-bench-picknick | SELECTED, IMAGE FILE TODO |
| Atkritumu urnas | https://www.urbastyle.com/en/products/street-furniture/litter-bins | Litter Bin 22 — https://www.urbastyle.com/en/products/street-furniture/litter-bins/litter-bin-22 | SELECTED, IMAGE FILE TODO |
| Sēdekļi | https://www.urbastyle.com/en/products/street-furniture/seats | Seat Float — https://www.urbastyle.com/en/products/street-furniture/seats/seat-float | SELECTED, IMAGE FILE TODO |
| Norobežojošie stabi | https://www.urbastyle.com/en/products/street-furniture/bollards | Bollard Stabilo — https://www.urbastyle.com/en/products/street-furniture/bollards/bollard-stabilo | SELECTED, IMAGE FILE TODO |
| Koku sargi | https://www.urbastyle.com/en/products/street-furniture/tree-protection | Tree Grate Storm — https://www.urbastyle.com/en/products/street-furniture/tree-protection/tree-grate-storm | SELECTED, IMAGE FILE TODO |
| Kolekcijas | https://www.urbastyle.com/en/products/street-furniture/all-collections | Nuton Collection — https://www.urbastyle.com/en/products/street-furniture/all-collections/nuton-collection | SELECTED, IMAGE FILE TODO |
| Informācijas stendi | https://www.urbastyle.com/en/products/street-furniture/signage | Signage katalogs | SOURCE VERIFIED, IMAGE FILE TODO |
| Grili | https://www.urbastyle.com/en/products/street-furniture/barbecue | Barbecue Butch — https://www.urbastyle.com/en/products/street-furniture/barbecue/barbecue-butch-public-outdoor-spaces | SELECTED, IMAGE FILE TODO |
| Piederumi | https://www.urbastyle.com/en/products | Anti-skate / Wooden seating / Light / Solar accessory grupas | SOURCE VERIFIED, IMAGE FILE TODO |

## URBASTYLE image izvēles princips

Kategoriju kartēm izvēlamies **vienu spēcīgu reprezentatīvu produkta foto**, nevis mēģinām parādīt visu kategoriju vienā kadrā. Produktu detalizāciju lietotājs redz pēc klikšķa.

---

# SAWO

Primārie avoti:
- https://www.teritorija.lv/sawo
- https://www.teritorija.lv/sawo/velosipedu-stativi
- https://www.teritorija.lv/velo-nojume
- https://www.teritorija.lv/sawo/skrejritenu-stativi
- https://www.teritorija.lv/sawo/velosipedu-noliktavas

Statuss:
- BR101–BR123: attēli ir.
- U-tipa: attēls izvēlēts.
- Trapecveida: attēls izvēlēts.
- Privātām teritorijām: attēls izvēlēts.
- Moduļu statīvi: attēls izvēlēts.
- Nojumes / divu līmeņu / glabātavas / skrejriteņi: jāiziet atsevišķs image QA.

---

# GOVAPLAST

Primārais avots:
- https://www.teritorija.lv/govaplast
- https://www.govaplast.com/street/street-furniture/

Jāpārbauda atsevišķi:
- Soli un sēdvietas
- Piknika galdi
- Puķu kastes
- Atkritumu urnas
- Velo statīvi
- Stabi un norobežojumi
- Technic / sienu sistēmas

---

# ZANO

Primārais katalogs:
- https://www.zano-streetfurniture.com/street-furniture/catalogue

Pirms image lock jāpārbauda:
- katrai kategorijai savs attēls;
- nav dublikātu starp kategorijām;
- featured produktu bildes atbilst konkrētajam modelim.

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

# Image completion checklist

Pirms `IMAGE COMPLETE`:

- [ ] Nav neviena `Attēls tiks pievienots`
- [ ] Nav neviena `Attēls nav pieejams`
- [ ] Nav nepareizu produktu / kategoriju bilžu
- [ ] Nav nejaušu dublikātu starp kategorijām
- [ ] Katram partnerim ir vismaz viena sava reprezentatīva bilde
- [ ] Kategoriju kartēs bilde atbilst virsrakstam
- [ ] Inquiry kartēs saglabājas attiecīgā produkta bilde
- [ ] Mobilajā nav neglītu crop / stretched attēlu
- [ ] Avota URL ir dokumentēts
- [ ] Gala asseti glabājas repo, nevis tikai hotlinkā

Kad viss iziets: **IMAGE COMPLETE → CONTENT LOCK → tikai tad UI/UX + motion.**
