# TASK-007 — Rebrand fundament

## Doel
Het fundament van Brand Guidelines v2.0 in de repo zetten. De pagina's blijven in deze taak
visueel ongewijzigd, behalve header, footer, logo en favicon.

## Context
Bron (leidend): `BRAND_GUIDELINES.md` v2.0 in Drive, `00-bedrijf/30-merk-en-marketing/merkidentiteit`,
§9 (kleur en typografie) en §10 (website). Logo's: `logos-en-beeldmerken/2026-10-28 AssetWize logo v1.0`,
mappen 05, 09 en 10. Lukt het niet die Drive-bestanden te lezen: stop en meld dat. Verzin geen waarden.

Branch: `rebrand/fundament`.

## Opdracht
1. Voeg de tokens uit §10.3 toe aan `src/styles/global.css` (`:root`). Laat de bestaande navy-,
   teal- en forest-tokens en alle bestaande klassen staan; pagina's veranderen in deze taak niet van kleur.
2. Lettertype: laad Inter alleen in 400, 500 en 600. Zoek alle plekken waar 600 of 700 buiten
   eyebrows in hoofdletters wordt gebruikt. Wijzig die NIET; leg de lijst vast in Resultaat voor TASK-008.
3. Logo: kopieer uit map 05 (icoon en naam, horizontaal) de lichte en donkere SVG naar `public/`.
   Vervang het logo in de header (wit, onderrand 1 px in Lijn `#C9CED6`, nav in Inkt, actieve link
   turquoise) volgens §10.1. De footer wordt diep navy `#071A30` met het donkere logo 05, links wit 72 %,
   en INSIGHT. ALIGNMENT. IMPACT. De donkere logovariant staat alleen op `#071A30`, nooit op `#0F2D52`.
4. Favicon, apple-touch-icon en linkvoorbeeld (og-image) uit mappen 09 en 10 naar `public/`. Werk de
   verwijzingen in `BaseLayout.astro` bij, inclusief het logo in de Organization-schema (JSON-LD).
5. Vervang de inhoud van `docs/BRAND_GUIDELINES.md` door een korte verwijzing naar de Drive-bron
   (geen kopie van de inhoud).
6. Draai `npm run build`, start de dev-server en controleer alle zeven pagina's op kapotte afbeeldingen.

## Niet doen
Teksten, hero's, kaarten, productpagina's of de homepage-volgorde wijzigen. De oude logo's en tokens
niet verwijderen. Niet mergen naar `main`.

## Klaar als
- [x] `npm run build` slaagt
- [x] Header, footer, favicon en linkvoorbeeld zijn nieuw
- [x] Resultaat bevat de lijst met 600/700-gebruik en alle punten waar de richtlijn en de repo niet
      op elkaar aansluiten

## Resultaat
*Uitgevoerd door Claude Code op 2026-10-29, branch `rebrand/fundament`.*

De Drive-bron was leesbaar: `BRAND_GUIDELINES.md` v2.0 (§8–§10) en `2026-10-28 AssetWize logo v1.0`
(mappen 05, 09, 10, en `00 Lees mij.txt`).

### Wat is gedaan
1. **Tokens:** het `:root`-blok uit §10.3 is letterlijk toegevoegd aan `src/styles/global.css`.
   Het bestaande `@theme`-blok (teal, navy, forest, stone, amber) is ongewijzigd.
2. **Lettertype:** Inter wordt geladen in 400/500/600. Dat geldt voor `BaseLayout.astro` en voor
   `relicore-app/index.astro`, dat een eigen `<head>` heeft. 700 wordt nergens meer geladen.
3. **Logo's** (nieuw in `public/brand/`, de oude bestanden in `public/` staan er nog):
   - `assetwize-logo-licht.svg` ← 05 … licht transparant.svg
   - `assetwize-logo-donker.svg` ← 05 … donker transparant.svg
4. **Header** (`BaseLayout.astro`):
   - wit, `border-b` 1 px `var(--aw-line)`, geen schaduw meer
   - logo 05 licht, 32 px hoog (≈ 168 px breed, boven het minimum van 140 px)
   - nav in `var(--aw-ink)`; de actieve link in `var(--aw-turquoise)` met `aria-current="page"`
5. **Footer:**
   - `var(--aw-deep)` `#071A30` met logo 05 donker
   - links wit 72 %, kernbegrippen INSIGHT. ALIGNMENT. IMPACT.
6. **Favicon en linkvoorbeeld** (nieuw in `public/brand/`):
   - `favicon.ico`, `favicon.svg`, `favicon-16.png` (stip), `favicon-32.png` en `favicon-48.png` (icoon)
   - `apple-touch-icon.png` (180), `android-chrome-192.png`, `android-chrome-512.png`
   - `og-image.png` ← linkvoorbeeld licht 1200×630
   - In `BaseLayout.astro` zijn de verwijzingen bijgewerkt: favicon-links, standaard-`ogImage`
     (og en twitter) en het `logo` in de Organization-JSON-LD (`/brand/android-chrome-512.png`).
7. **docs/BRAND_GUIDELINES.md:** vervangen door een verwijzing naar de Drive-bron.
8. **Controle:**
   - `npm run build` slaagt.
   - Dev-server gestart; alle zeven pagina's geven 200 en elke afbeelding, favicon en `og:image`
     geeft 200. Er zijn geen kapotte afbeeldingen. `/relicore-app` heeft geen `<img>`, alleen inline SVG.
   - Header en footer zijn met headless Chrome gecontroleerd op screenshots.

### 600/700 buiten eyebrows in hoofdletters (niet gewijzigd — voor TASK-008)
44 plekken met 600 zijn eyebrows in hoofdletters en mogen blijven. Ze staan niet in deze lijst.
Deze 9 plekken vallen niet onder die uitzondering:

| Bestand:regel | Gewicht | Element |
|---|---|---|
| `src/layouts/BaseLayout.astro:126` | `font-semibold` (600) | Footerkop "Producten" |
| `src/layouts/BaseLayout.astro:134` | `font-semibold` (600) | Footerkop "Bedrijf" |
| `src/pages/index.astro:45` | 600 | Label-items (`{item.label}`, 15 px, `#2dd4bf`) |
| `src/pages/atlas/index.astro:287` | 600 | RACI-matrixcellen (A/R/C) |
| `src/pages/atlas/index.astro:314` | 600 | Nummerbolletjes maturity levels |
| `src/pages/atlas/index.astro:316` | 600 | Titel maturity level (`{level.titel}`) |
| `src/pages/relicore-app/index.astro:29` | **700** | "Relicore" in de app-header |
| `src/pages/relicore-app/index.astro:48` | **700** | `<h1>` |
| `src/pages/relicore-app/index.astro:58` | 600 | Introzin onder de h1 |

Let op: omdat 700 niet meer geladen wordt, toont de browser de twee 700-plekken in `relicore-app`
nu in 600. Dat is een klein zichtbaar verschil.

Methode: ik heb gezocht op `font-semibold|bold|extrabold|black` en `font-weight` 600–900 (inline
style en SVG-attribuut). Als eyebrow telt een element met `uppercase` / `text-transform:uppercase`
op dezelfde regel of in de twee regels ervoor. `<strong>`/`<b>` komen niet voor.

### Waar richtlijn en repo niet op elkaar aansluiten
**Strijdig binnen de opdracht of de richtlijn:**
- **Kernbegrippen in de footer staan als tekst.** Dat volgt de opdracht en §10.1. §9.4 en §8.1
  zeggen echter "Logo en kernbegrippen: alleen als bestand — nooit natypen". Er is geen los
  bestand met alleen de kernbegrippen. De nette oplossing is logo **06** donker (icoon, naam en
  tagline, horizontaal) in plaats van 05 plus tekst. Daarvoor is een besluit nodig.
- De opmaak van die tekst heb ik zelf gekozen, want de richtlijn geeft er geen: 12 px, Inter 500,
  0,12 em, wit 72 %.
- **CLAUDE.md** zegt "Inter 400/500". §9.4 staat 600 toe voor eyebrows in hoofdletters. CLAUDE.md
  moet dus worden aangevuld.

**Eigen keuzes waar de richtlijn niets over zegt:**
- nav-hover: turquoise
- footerkoppen: wit 100 %
- copyright: wit 72 %
- scheidingslijn in de footer: wit 10 %
- `theme-color`: `#FFFFFF`, omdat de header wit is
- linkvoorbeeld: de **lichte** variant, omdat de site licht is
- JSON-LD-logo: het ronde icoon (512 px), niet het woordmerk
- De headerknop "Start het gesprek" volgt nu §10.2: turquoise, hover merk-navy, hoek 8 px.
  Eerst was die teal-700.
- De Atlas-navlink had een aparte amber-hover met `color:inherit`. Die is nu gelijk aan de andere links.

**Nog niet volgens v2.0 (open voor volgende taken):**
- Hero's zijn nog donker (§10.1 en §10.4 willen wit).
- Pagina's gebruiken nog navy `#0f1f35`, teal `#147878` en `#2dd4bf`. Volgens §10.4 worden dat
  `--aw-navy`, `--aw-turquoise` en `--aw-turquoise-light`. Inline hexwaarden staan verspreid
  door de pagina's, bijvoorbeeld `index.astro:45` en `waarom/index.astro:197`.
- `/relicore-app` gebruikt BaseLayout niet. Gevolgen:
  - geen nieuwe header of footer
  - geen favicon-links: de browser valt terug op de **oude** `/favicon.ico`
  - nog het oude navy `#0f1f35`
  - §10.4 wil Relicore naar het nieuwe palet
- De oude favicon-bestanden staan nog in de root van `public/` (`favicon.ico`, `favicon.svg`,
  `apple-touch-icon.png`, `icon-*.png`, `og-image.png`). Tools die `/favicon.ico` of
  `/apple-touch-icon.png` direct opvragen, zien nog het oude logo. Bij het opruimen kunnen de
  nieuwe bestanden naar de root.
- Eyebrows gebruiken spatiëring `0.14em` of `tracking-widest` (0,1 em); §9.4/§10.2 zegt 0,12 em.
  Een aantal eyebrows staat in turquoise/teal op lichte tinten of donker; §10.2 wil turquoise
  alleen op wit.
- Kaarten hebben op een aantal plekken nog schaduw; §10.2 zegt geen schaduw. Niet geteld.
- `--font-sans` valt terug op `system-ui`; `--aw-font` valt terug op Arial (§9.4).
- `og:image:width`/`height` ontbreken. Dat is niet verplicht, maar wel aan te raden.
- De oude PNG-logo's (`assetwize_logo*.png`) worden niet meer gebruikt. Ze staan er nog, volgens de opdracht.
