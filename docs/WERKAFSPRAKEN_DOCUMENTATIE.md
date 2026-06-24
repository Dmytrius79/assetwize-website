# AssetWize Website — Werkafspraken Documentatiebeheer
*Aangemaakt: Juni 2026*
*Van toepassing op: /Users/drvandort/dev/assetwize-website/*

---

## Principe: één waarheid, één plek

De website is het publieke gezicht van AssetWize.
Documenten die het hele AssetWize-systeem raken staan in de gedeelde kennisbasis.
Documenten die alleen de website (code, content, deployment) raken staan hier.

**Gedeelde kennisbasis:** `/Users/drvandort/dev/_assetwize/`
**Website-eigen documentatie:** `/Users/drvandort/dev/assetwize-website/docs/`

---

## Bij elke nieuwe Claude-sessie: lees eerst dit

Voordat je begint met een website-sessie, lees in deze volgorde:

1. `/Users/drvandort/dev/_assetwize/brand/BRAND_GUIDELINES.md`
2. `/Users/drvandort/dev/_assetwize/brand/POSITIONERING.md`
3. `/Users/drvandort/dev/assetwize-website/START_HERE.md`

---

## Documentverdeling: wat gaat waar

### Al verplaatst naar `_assetwize/` — bronversie daar

| Document | Van | Naar | Status |
|---|---|---|---|
| BRAND_GUIDELINES.md | `assetwize-website/docs/` | `_assetwize/brand/` | ✅ Gekopieerd |
| POSITIONERING.md | (aangemaakt in sessie) | `_assetwize/brand/` | ✅ Aangemaakt |
| assetwize_logo.png | `assetwize-website/docs/` | `_assetwize/brand/logos/` | ✅ Gekopieerd |
| relicore_logo.svg | `assetwize-website/public/` | `_assetwize/brand/logos/` | ✅ Gekopieerd |
| RELICORE_BRAND_PROPOSITION.md | `assetwize-website/docs/` | `_assetwize/products/` | ✅ Gekopieerd |

### Blijft in `assetwize-website/docs/` — website-specifiek

| Document/Map | Waarom hier |
|---|---|
| ARCHITECTURE.md | Website technische architectuur |
| ASSETWIZE_KB_START.md | Kennisbank-specifiek |
| CLAUDE.md | Website Claude-instructies |
| OPERATIONEEL_PROTOCOL.md | Website deployment en operaties |
| TODO.md | Website-specifieke taken |
| design/CONSULTANCY_WORKFLOW.md | Website-specifieke workflow |
| foundation/ | Website fundament-documenten |
| operations/RUNBOOK.md | Website server-operaties |

---

## Op te schonen: stubs aanmaken voor verplaatste documenten

De volgende documenten zijn gekopieerd naar `_assetwize/` maar staan
nog als origineel in de website-map. Vervang ze door stubs:

```bash
# BRAND_GUIDELINES.md in assetwize-website/docs/ stubben:
# (bronversie staat in _assetwize/brand/)

# assetwize_logo.png in assetwize-website/docs/ kan verwijderd:
# (bronversie staat in _assetwize/brand/logos/)
# public/assetwize_logo.png NIET verwijderen — die gebruikt de website zelf

# RELICORE_BRAND_PROPOSITION.md stubben:
# (bronversie staat in _assetwize/products/)
```

**Let op:** bestanden in `assetwize-website/public/` die de website
zelf gebruikt (logo's, afbeeldingen) mogen NIET worden verwijderd.
Die zijn kopieën voor de website-build — de bron staat in `_assetwize/`.

---

## Beslisboom: nieuw document — waar zet ik het?

```
Nieuw document ontstaan in website-sessie?
│
├── Merkidentiteit, positionering, brand voice?
│   → /Users/drvandort/dev/_assetwize/brand/
│
├── Visuele richtlijnen, kleuren, design tokens?
│   → /Users/drvandort/dev/_assetwize/design/
│
├── AssetWize-methode (niet website-code specifiek)?
│   → /Users/drvandort/dev/_assetwize/method/
│
├── Product propositie (Compass, RELICORE, Governance)?
│   → /Users/drvandort/dev/_assetwize/products/
│
└── Website techniek, code, content, deployment?
    → /Users/drvandort/dev/assetwize-website/docs/
```

---

## Logo-borging

Bronversies van alle logo's: `/Users/drvandort/dev/_assetwize/brand/logos/`

Logo's die de website-build nodig heeft staan ook in `public/` —
dat zijn werkende kopieën, niet de bron.

Nog toe te voegen aan `_assetwize/brand/logos/`:
- Compass-logo SVG (exporteren uit `src/components/CompassLogo.astro`)
- AssetWize standalone icoon SVG (AW-monogram, nog te ontwerpen)

---

## Relatie met andere projecten

| Project | Raakvlak met website |
|---|---|
| Compass applicatie | Compass-positionering, logo, brand voice |
| RELICORE | RELICORE-positionering, logo, brand voice |
| Kennisbank | Inhoud kennisbank sluit aan op website-content |

---

*AssetWize Website Werkafspraken Documentatiebeheer v1.0 — Juni 2026*
