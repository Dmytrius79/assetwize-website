# TASK-008: rebrand pagina's
Datum: 2026-10-29
Branch: rebrand/paginas (vanaf rebrand/fundament)
Status: klaar — wacht op controle Dimitry (preview + PR)

## Doel
Alle pagina's van de site naar Brand Guidelines v2.0 §10 (lichte website, nieuw palet). Alleen vorm, geen tekst.

## Context
- Brand Guidelines v2.0 staat in Drive (zie CLAUDE.md). Tokens §10.3 staan sinds TASK-007 in src/styles/global.css.
- Besluiten Dimitry 29-10: (1) Compass en Atlas krijgen een witte hero. De productkleur is accent. De donkere productkleur is de ene accentband per pagina (de CTA-sectie). (2) Homepage-volgorde wijzigen valt buiten deze taak. (3) Notion is bijgewerkt.
- Productmerken behouden hun kleuren: Compass #1A4A35, Atlas #7A4F1E. Relicore volgt het AssetWize-palet.
- Gebruik de lijst "Inter 600/700" en de lijst "mismatches" uit het Resultaat van TASK-007.

## Opdracht
1. Hero's op /, /compass, /atlas, /relicore, /waarom, /contact: witte achtergrond, tekst in Inkt/merk-navy.
2. Maximaal één accentband per pagina (diep navy #071A30 of donkere productkleur). De footer telt niet mee.
3. Vervang oude hex-waarden (#0f1f35, #147878, #2dd4bf en vergelijkbare) door de nieuwe tokens. Productkleuren van Compass en Atlas blijven.
4. Kaarten: 1px Lijn-border, radius 8px, geen box-shadow.
5. Knoppen: primair turquoise (hover merk-navy), secundair 1.5px turquoise rand.
6. Turquoise tekst alleen op wit. Op Wolk of Mist: merk-navy met turquoise onderlijn. Lichtturquoise nooit als tekst op licht.
7. Font-weight 600/700 buiten uppercase eyebrows (0.12em) naar 400/500, volgens de lijst uit TASK-007.
8. CLAUDE.md: zet erin dat 600 is toegestaan voor uppercase eyebrows.
9. Footer: gebruik logo 06 donker (icoon, naam, tagline) uit dezelfde bron als TASK-007 en verwijder de getypte kernbegrippen. Is het bestand niet te vinden, laat dan de getypte tekst staan en meld dat.
10. Oude favicons en logo's in public/ verwijderen, maar alleen nadat grep bevestigt dat niets ernaar verwijst.

## Niet doen
- Geen tekstwijzigingen, geen homepage-volgorde, geen nieuwe secties.
- /relicore-app niet naar BaseLayout omzetten.
- Niet mergen naar main, geen PR openen.

## Klaar als
- npm run build zonder fouten.
- Geen box-shadow op kaarten, geen 600/700 buiten eyebrows, geen oude hex-waarden meer (grep-uitkomst in Resultaat).
- Alle 7 pagina's gecontroleerd, Cloudflare-preview van rebrand/paginas groen.

## Resultaat
*Uitgevoerd door Claude Code op 2026-10-29, branch `rebrand/paginas` (vanaf `rebrand/fundament`).*

### Per opdracht
1. **Hero's wit** op `/`, `/compass`, `/atlas`, `/relicore`, `/waarom` en `/contact`:
   - eyebrow turquoise, H1 merk-navy, intro Leisteen
   - onderrand 1 px Lijn waar de volgende sectie ook wit is
   - productlockups op `/compass`, `/atlas` en `/relicore` in de lichte variant: `CompassLogo variant="light"`;
     de Atlas- en Relicore-lockups zijn herkleurd naar product-/merkkleur op licht
2. **Eén accentband per pagina, steeds de CTA-sectie:**

   | Pagina | Accentband (CTA) | Donkere secties die licht zijn geworden |
   |---|---|---|
   | `/` | `#071A30` | bewijsstrip (nu Wolk met witte cellen), Relicore-kaartkop (nu Mist) |
   | `/compass` | Compass donker `#1A2E22` (was een witte CTA) | bewijsstrip (wit), ⑧ "Wat Compass oplevert" (wit) |
   | `/atlas` | Atlas donker `#1C0F07` | ⑤ Omvang (wit) |
   | `/relicore` | `#071A30` | ⑥ "Wat Relicore oplevert" (wit); ⑦ Integraties is daarom Wolk geworden |
   | `/waarom` | `#071A30` | — |
   | `/contact` | geen (had geen CTA-sectie) | — |
3. **Oude kleuren vervangen door tokens:**
   - `#0f1f35` → `--aw-navy` (of `--aw-deep` voor de app-header van `/relicore-app`)
   - `#147878` → `--aw-turquoise`
   - `#2dd4bf` → `--aw-turquoise` op licht en `--aw-turquoise-light` op donker
   - `#1e3a5f` → `--aw-slate`
   - Tailwind-grijs → Leisteen, Inkt, Lijn en Wolk
   - De oude `navy-*`/`teal-*`-tokens zijn uit `@theme` verwijderd; niets gebruikte ze nog.
   - Nieuw: de tokens zijn ook als Tailwind-klassen beschikbaar (`text-aw-navy`, `bg-aw-wolk`,
     `border-aw-line`, `rounded-aw` …) via `@theme inline` in `global.css`.
   - De productkleuren van Compass (forest/stone) en Atlas (amber) zijn ongewijzigd.
4. **Kaarten:** `rounded-xl`/`rounded-lg` → `rounded-aw` (8 px); kaartranden `stone-300/200`, `#e5ddd5`,
   `#C8CFC4` en `border-2 forest-600` → 1 px `--aw-line`; `hover:shadow-sm` en de box-shadow van de
   `/relicore-app`-kaart zijn weg.
5. **Knoppen:** nieuwe klassen in `global.css`: `aw-btn-primary` (turquoise, hover merk-navy, 8 px),
   `aw-btn-secondary` (1,5 px turquoise rand) en `aw-btn-secondary-dark` (lichtturquoise rand, voor
   op donker, omdat turquoise daar geen contrast haalt volgens §9.3). Ze zijn op alle knoppen toegepast,
   ook op Compass en Atlas.
6. **Turquoise alleen op wit:**
   - eyebrows en labels in Wolk- en Mist-vlakken → merk-navy
   - Relicore-link op Wolk (`/waarom`) → `aw-link-tint` (merk-navy met turquoise onderlijn)
   - Relicore-situatiekaart (homepage) wit in plaats van Mist
   - Status "Actief" op Mist (`/relicore`) → merk-navy
   - Lichtturquoise staat alleen nog op donker: de CTA-banden, de app-chrome-mockups op
     `/relicore` en de stapcirkels op merk-navy.
7. **Gewichten:** alle 9 plekken uit de TASK-007-lijst staan nu op 500. Alle eyebrows hebben
   0,12 em spatiëring: `tracking-widest` en `0.14em/0.08em/0.06em` zijn vervangen.
8. **CLAUDE.md:** "600 alleen voor eyebrows in hoofdletters (spatiëring 0,12 em). Nooit 700."
9. **Footer:** logo 06 donker (`06 … horizontaal donker transparant.svg` →
   `public/brand/assetwize-logo-tagline-donker.svg`), 300 px breed (de minimummaat). De getypte
   kernbegrippen zijn weg; de alt-tekst is "AssetWize. Insight. Alignment. Impact.".
   De footerkoppen staan nu op 500.
10. **Oude bestanden verwijderd** na grep:
    - `apple-touch-icon.png`, `assetwize_logo.png`, `assetwize_logo_cropped.png`, `favicon-16/32.png`
    - `favicon.ico`, `favicon.svg`, `icon-192/512.png`, `og-image.png`
    - `relicore_logo.svg`, `relicore_logo_dark.svg`

    Alleen oude taakbestanden en `docs/WERKAFSPRAKEN_DOCUMENTATIE.md` noemden ze nog; geen code of config.
    De **nieuwe** `favicon.ico` staat ook in de root (`public/favicon.ico`), omdat browsers en crawlers
    `/favicon.ico` direct opvragen en `/relicore-app` geen favicon-links heeft.

### Grep-uitkomst (Klaar als)
```
oude hex (#0f1f35 #147878 #2dd4bf #1e3a5f #162d4a #14b8a6 #0d9488 #115e59
          #134e4a #f0fdfa #9fe1cb #6b7280 #9ca3af #d1d5db #e5e7eb #f3f4f6 #f9fafb) in src/ : 0
oude klassen (bg|text|border|divide-(navy|teal|gray)-N) in src/                       : 0
shadow in src/                                                                          : 0
font-bold / font-weight:700 in src/                                                     : 0
600 buiten uppercase-eyebrows (zelfde methode als TASK-007)                             : 0
600-eyebrows zonder 0.12em                                                              : 0
```

### Controle
- `npm run build` slaagt zonder fouten.
- Dev-server: alle 7 pagina's geven 200 en elke afbeelding, favicon en `og:image` geeft 200.
  `/favicon.ico` geeft 200. Alle 7 pagina's zijn met headless Chrome als screenshot bekeken.
- **Tekstcontrole:** de zichtbare tekst en alt-teksten van alle 7 pagina's zijn vergeleken met de build
  van vóór deze taak. Het enige verschil is de footer: de getypte kernbegrippen zijn weg en de alt-tekst
  van het logo is aangepast. Verder is er geen tekst gewijzigd.
- `/relicore-app` gebruikt nog steeds geen BaseLayout. Wel aangepast:
  - kleuren en gewichten
  - `global.css` geïmporteerd voor de tokens
  - header `#071A30`
  - achtergrond Wolk
- Cloudflare-preview: zie hieronder.

### Keuzes en open punten voor Dimitry
- **Knoppen op Compass en Atlas** zijn AssetWize-turquoise (opdracht 5). Daarvoor waren ze forest/amber.
  Op de donkere Compass-CTA heeft de secundaire knop de Compass-accentkleur `#C8EED8`.
  Wil je productkleur-knoppen op de productpagina's, dan is dat een kleine aanpassing.
- **Hero-H1 op Compass/Atlas** in merk-navy (opdracht 1). De rest van die pagina's houdt de producttekstkleur
  (`#1A2E22` / `#1C0F07`).
- **Lichte productsecties** (`forest-50`, `#faf7f4`) zijn behouden als lichte tint binnen Compass en Atlas,
  in plaats van Wolk.
- **Kaartkoppen in productkleur** (Koers/Controle/Groei op Compass, amber blueprint-koppen op Atlas, de
  donkere Compass-kaart "Werkt het?") zijn gebleven: het zijn kaarten, geen banden.
- **Relicore-app-mockups** op `/relicore` houden een merk-navy kopbalk met lichtturquoise icoon en hun
  statuskleuren (groen, blauw, amber), omdat ze de app nabootsen.
- **Atlas-globe:** de labels staan in `#B07D3A` (Atlas-accent op donker) op wit. Dat was al zo; het
  contrast is laag (≈ 3 : 1). Kandidaat om naar `#7A4F1E` te zetten.
- **Getypte productlockups** (Relicore- en Atlas-hero, `CompassLogo`) zijn nog nagebouwd in tekst/SVG.
  Dat botst met "logo nooit natypen". De bestanden staan in Drive `2026-10-28 Productlogo's v1.0`:
  aparte taak.
- **Mobiel menu:** de nav is onder `md` verborgen, zonder menuknop. Dat was al zo en valt buiten deze taak.
- `docs/WERKAFSPRAKEN_DOCUMENTATIE.md` zegt nog "public/assetwize_logo.png NIET verwijderen". Dat is
  achterhaald door deze taak.
