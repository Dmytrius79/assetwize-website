# TASK-012 — Header-logo groter en nieuwe productlogo's

## Doel
1. Het logo in de header wordt groter, zodat het woordmerk even groot is als in de footer.
2. De nieuwe productlogo's van Compass, Atlas en Relicore vervangen de productmerken op de website.

## Uitgangspunten
- Geen tekstwijzigingen. Geen nieuwe layout of nieuwe secties.
- Footer-logo blijft zoals het nu is (logo 06 donker op `#071A30`).
- Niet mergen, geen PR.
- Het logo "met BY ASSETWIZE" wordt op de website niet gebruikt. Alleen de variant "productlogo" (icoon + naam, zonder BY ASSETWIZE).

## Stap 1 — Header-logo
a. Meet in de browser de grootte (breedte, hoogte en kaphoogte van het woordmerk ASSETWIZE) van het header-logo en van het footer-logo op 1440 px. Rapporteer ook welke bestanden het zijn en of de drie kernwoorden (INSIGHT. ALIGNMENT. IMPACT.) erin staan.
b. Maak het woordmerk in de header even groot als in de footer (gelijke kaphoogte van de letters ASSETWIZE), niet noodzakelijk dezelfde bestandsbreedte. Wissel het bestand NIET om; blijf bij het bestaande lichte logo (05).
c. Als dit ruimtelijk niet past op desktop of de navigatie in de knel brengt: schaal zover als nodig is om te passen, en meld het verschil.
d. Mobiel (390 px): het logo past zonder de navigatie weg te drukken en zonder horizontale scroll. Kies zelf de schaal en meld die.
e. De headerhoogte mag meegroeien. De navigatie blijft verticaal uitgelijnd met het logo.

## Stap 2 — Productlogo's
Bronbestanden staan in Drive in de map "04 Productlogo" per product. Gebruik per product:
- `<Product> productlogo licht transparant.svg` (voor lichte achtergronden)
- `<Product> productlogo donker transparant.svg` (voor `#071A30`)
Mappen: Compass https://drive.google.com/drive/folders/1q7Nt8JBGvfkQm0BRTdBy-aW5vyoV85M7, Atlas https://drive.google.com/drive/folders/1N6vlfMf4agfMi8EAj0__xGzLwnaLgosf, Relicore https://drive.google.com/drive/folders/178mTM8Z-QDo_aP5KJYyjvpGsk2I2i_PZ.
Zoek ze eerst lokaal via Google Drive voor Desktop: `find ~/"Mijn Drive"* -name "* productlogo licht transparant.svg"`. Lukt dat niet, stop en meld welke bestanden ontbreken. Dimitry zet ze dan in de repo of in een map die jij kunt lezen.
- Kopieer de zes SVG's naar `public/brand/producten/` met namen `compass-licht.svg`, `compass-donker.svg`, enz.
- Controleer visueel (render ze) dat er GEEN tekst "BY ASSETWIZE" in staat. Staat die er wel in, stop en meld het.
- Zoek in `src` alle plekken waar nu een productmerk, producticoon of -logo staat (homepage, `/compass`, `/atlas`, `/relicore`, `/relicore-app` en eventueel de footer en navigatie). Vervang alleen die plekken door het nieuwe productlogo. Voeg GEEN logo's toe op plekken waar nu geen productmerk staat; som die plekken op in het Resultaat als suggestie.
- Variant licht op lichte achtergronden, donker op `#071A30`. Gebruik `<img>` met `alt` = productnaam, plus `width` en `height`, zodat er geen layoutverschuiving is.
- Geef de drie logo's op dezelfde plek dezelfde hoogte. Kies een hoogte die bij de omgeving past en noteer die in het Resultaat.
- Regel uit Brand Guidelines v2.0 §9.6: nooit vier merkidentiteiten in één sectie. Maximaal drie productlogo's per sectie, en in zo'n sectie geen AssetWize-logo.

## Acceptatiecriteria
1. `npm run build` slaagt, geen nieuwe waarschuwingen.
2. Woordmerk in header en footer is even groot op 1440 px. Cijfers in het Resultaat.
3. Geen horizontale scroll op 390, 768, 1440 en 1920 px; navigatie intact.
4. Productlogo's zijn de variant zonder BY ASSETWIZE, in de juiste licht/donker-variant.
5. Zichtbare tekst gelijk aan `main`.
6. Screenshots lokaal, niet committen.

## Afronden
Commit, push naar dezelfde branch, zet de commit-hashes en de preview-URL in het Resultaat. Niet mergen.

## Resultaat

Uitgevoerd op 2026-11-02 door Claude Code op branch `rebrand/merk-op-live`, in een eigen commit. TASK-011 is niet aangepast.

### Stap 1 — Header-logo

**Meting vooraf, op 1440 px.** De kaphoogte is gemeten op de pixels van "WIZE"; die letters hebben in beide bestanden een eigen kleur.

| | Bestand | Breedte × hoogte | Kaphoogte ASSETWIZE | Kernwoorden |
|---|---|---|---|---|
| Header | `/brand/assetwize-logo-licht.svg` (05 licht) | 168 × 32 px | 12,8 px (40,05 % van de logohoogte) | nee |
| Footer | `/brand/assetwize-logo-tagline-donker.svg` (06 donker) | 300 × 80,3 px | 20,2 px (25,1 % van de logohoogte) | ja, INSIGHT. ALIGNMENT. IMPACT. |

In logo-eenheden is het woordmerk in beide bestanden even groot (≈ 154 eenheden). De meting is dus consistent.

**Na de wijziging.** Het bestand is niet gewisseld; het blijft 05 licht. Class: `h-8 lg:h-[50px] w-auto`.

| Breedte | Headerlogo | Kaphoogte | Footer-kaphoogte | Headerhoogte | Ruimte logo → navigatie |
|---|---|---|---|---|---|
| 1920 | 263 × 50 px | 20,0 px | 20,2 px | 74 px | 159 px |
| 1440 | 263 × 50 px | **20,0 px** | **20,2 px** | 74 px (was 56) | 159 px |
| 1024 | 263 × 50 px | 20,0 px | 20,2 px | 74 px | 95 px |
| 768 | 168 × 32 px (ongewijzigd) | 12,8 px | — | 60 px | 14 px |
| 390 | 168 × 32 px (ongewijzigd) | 12,8 px | — | 60 px | navigatie verborgen, knop naast logo |

- **1440 en 1920 px:** het verschil met de footer is 0,15 px. 50 px is afgerond; exact zou 50,3 px zijn.
- **768–1023 px:** met 50 px is er niet genoeg ruimte. Logo, vier links en de knop hebben samen ±795 px nodig en er is 720 px beschikbaar. Daarom blijft het logo daar 32 px (verschil met de footer: −7,4 px kaphoogte).
- **390 px:** naast "Start het gesprek" past hooguit ±176 px logobreedte. Ik heb 32 px (168 px breed) gekozen. Er is geen horizontale scroll.
- **Uitlijning:** logo, navigatie en knop staan op alle breedtes op dezelfde middellijn.

### Stap 2 — Productlogo's

**Bronnen** (lokaal via Google Drive voor Desktop; de map-ID's zijn via de Drive-API op naam gecontroleerd):
- **Compass:** `2026-10-30 Compass logo v2.0/04 Productlogo/`. Jouw link verwijst naar deze map (v2.0), niet naar de oudere `2026-10-28 Productlogo's v1.0/Compass`.
- **Atlas en Relicore:** `2026-10-28 Productlogo's v1.0/<Product>/04 Productlogo/`.

**Bestanden** in `public/brand/producten/`:
- `compass-licht.svg`, `compass-donker.svg`
- `atlas-licht.svg`, `atlas-donker.svg`
- `relicore-licht.svg`, `relicore-donker.svg`

Gerenderd op wit en op `#071A30`: alleen icoon en naam, **geen "BY ASSETWIZE"**. In de SVG's staan ook geen `<text>`-elementen. Licht en donker verschillen alleen in de kleur van de naam en het icoon.

De productlogo's hebben ±17 % lege ruimte boven en onder en ±7 % links. Die compenseer ik per plek met een negatieve marge (0,17 × hoogte), zodat het icoon uitlijnt met de tekst eronder.

**Vervangen plekken:**

| Plek | Was | Nu | Variant / achtergrond | Hoogte |
|---|---|---|---|---|
| /compass hero | `CompassLogo` (getypt, met BY ASSETWIZE) | `compass-donker.svg` | donker op forest `#1A4A35` ⚠ | 78 px |
| /atlas hero | getypte lockup (icoon + "Atlas" + BY ASSETWIZE) | `atlas-donker.svg` | donker op `#1C0F07` ⚠ | 78 px |
| /relicore hero | getypte lockup (icoon + "Relicore" + BY ASSETWIZE) | `relicore-donker.svg` | donker op `#071A30` | 78 px |
| Homepage, kaart Compass (Instrumenten) | producticoon 24 px | `compass-licht.svg` | licht op `#F7F8F6` | 36 px |
| Homepage, kaart Relicore (Instrumenten) | producticoon 24 px | `relicore-donker.svg` | donker op `#071A30` | 36 px |
| /relicore, drie app-kopbalken | icoon + "Relicore" | `relicore-donker.svg` | donker op `#071A30` | 24 px |
| /relicore-app header | icoon + "Relicore" | `relicore-donker.svg` | donker op `#071A30` | 44 px |
| /relicore-app midden | producticoon 48 px | `relicore-licht.svg` | licht op `#f3f4f6` | 72 px |

- **Hoogtes:** de drie hero's zijn alle drie 78 px; daarmee is het icoon ±52 px, zoals het oude icoon. De twee homepage-kaarten zijn allebei 36 px.
- **Img-attributen:** alle `<img>` hebben `alt` gelijk aan de productnaam, en `width` en `height` volgens de verhouding van het bestand (geen layoutverschuiving).
- **§9.6:** maximaal twee productlogo's per sectie (Instrumenten op de homepage) en geen AssetWize-logo in die secties.
- **CompassLogo:** de component `src/components/CompassLogo.astro` wordt nergens meer gebruikt. Ik heb hem laten staan; hij kan in een opruimtaak weg.

**Suggesties: productnamen zonder logo** (niets toegevoegd):
- de footer, kolom Producten ("Compass by AssetWize" enz.), en de navigatie (tekstlinks)
- homepage "Waar staat uw organisatie vandaag" (→ Compass/Relicore/Atlas) en "De aanpak" (instrumentlabels)
- /waarom "Wat daaruit is ontstaan" (Compass →, Atlas →, Relicore →)
- /atlas "De relatie met Compass en Relicore"
- /contact "Typische eerste stap" en de kaart "Direct starten met Compass?"
- de CTA "Bekijk Compass live" op /compass

### Afwijkingen en punten voor Dimitry

1. **⚠ Compass- en Atlas-hero:** die staan niet op `#071A30` en niet op licht, maar op forest `#1A4A35` en op Atlas-donker `#1C0F07`. Ik heb de donkere variant gebruikt, omdat de lichte daar onleesbaar is. Atlas `#1C0F07` is precies de donkere Atlas-achtergrond uit §9.6. Compass `#1A4A35` is de Compass-primaire kleur; §9.6 noemt `#1A2E22` als donkere achtergrond. Graag bevestigen.
2. **Homepage-kaarten:** het logo staat nu naast de bestaande eyebrow "Compass — Begrijpen" / "Relicore — Inrichten", dus de productnaam staat er twee keer. De tekst mocht niet veranderen.
3. **/relicore-app header:** rechts staat nog de losse tekst "By AssetWize". Die is niet aangeraakt (geen tekstwijzigingen), maar staat nu naast een productlogo zonder BY ASSETWIZE.
4. **Tekst:** verder is de zichtbare tekst gelijk aan `main`. Alleen de getypte logotekst is vervangen door een afbeelding met dezelfde naam als alt-tekst:
   - de hero's: "Compass", "Atlas", "Relicore" en 3× "BY ASSETWIZE"
   - de app-balken op /relicore en de header van /relicore-app: 4× "Relicore"

### Controles

- `npm run build` slaagt. De enige waarschuwing is de bestaande Node-melding `DEP0205`.
- **Breedtes:** geen horizontale scroll en geen elementen buiten beeld op 390, 768, 1440 en 1920 px, op alle zeven pagina's. De navigatie is intact.
- **Screenshots:** lokaal in `tasks/screenshots/TASK-012/` (en bijgewerkt in `TASK-011/`), niet gecommit.

### Commits en preview

- `41db76a` — TASK-012 (Cloudflare-check groen)
- het volgende commit voegt alleen deze regels toe
- Preview: https://rebrand-merk-op-live.assetwize-website.pages.dev; commit-preview https://94b2c16a.assetwize-website.pages.dev
- Niet gemerged, geen PR.
