# TASK-011 — Nieuw merk op de live layout + breedte content

## Doel
De live layout (`main`) blijft zoals die is, inclusief het donkerblauw van de startpagina. Daarop komen: nieuw logo, favicon en deelafbeelding, Inter als lettertype en de merkelementen uit Brand Guidelines v2.0. Daarnaast wordt de content breder dan nu, zodat die beter aansluit op de breedte van de header.

## Uitgangspunten
- Nieuwe branch vanaf `main`: `rebrand/merk-op-live`. Niet vanaf een andere rebrand-branch.
- Uit de rebrand-keten neem je ALLEEN de merkbestanden over, niet de layout: `git checkout origin/rebrand/afronding -- public/brand/`. Controleer of die map alle logo's (05 licht, 06 donker), icoon 02, favicons en OG-afbeelding bevat. Zo niet, meld welke ontbreken.
- Geen tekstwijzigingen. Geen nieuwe componenten, geen kaarten, datavlakken, mobiel menu of Atlas-lijst uit de rebrand-keten.
- PR #2 en de bestaande rebrand-branches blijven ongemoeid: niet mergen, niet verwijderen.
- Niet mergen naar `main`. Dat beslist Dimitry.

## Stap 1 — Meten (eerst, voordat je iets wijzigt)
a. Wat is de hex-waarde van het donkerblauw op de startpagina (hero) en in de footer op `main`? Zoek in de broncode en controleer de berekende kleur op localhost:4321.
b. Welke logo-variant staat nu in de header en footer, en op welke achtergrond?
c. Meet de breedte (max-width en werkelijke breedte op 1440 px en 1920 px viewport) van: de header-inhoud, en de inhoud van elke sectie op de startpagina en op `/compass`, `/atlas`, `/relicore`, `/waarom`, `/contact`.
Zet de uitkomst in het Resultaat, als tabel.

## Stap 2 — Logo en kleur
Regel uit de richtlijn: het donkere logo (06 donker) alleen op diep navy `#071A30`, nooit op `#0F2D52`. Het lichte logo (05 licht) op wit en lichte vlakken.
- Wijkt het live donkerblauw per kleurkanaal minder dan 8 af van `#071A30`: zet dat vlak op `#071A30` en gebruik het donkere logo. Vermeld de oude en nieuwe waarde in het Resultaat.
- Wijkt het meer af: pas de kleur NIET aan. Plaats het logo nog niet op dat vlak, stop en rapporteer de gemeten waarde, zodat Dimitry kiest.

## Stap 3 — Merkelementen
- Logo in header en footer vervangen door de nieuwe bestanden uit `public/brand/`. Het woordmerk wordt nooit als tekst gezet.
- Favicons en `og:image` in `BaseLayout.astro` zoals in de rebrand-branch gedaan is. Logo in de JSON-LD bijwerken.
- Lettertype Inter. Kijk hoe de rebrand-branch het laadt (`--aw-font` en de font-regels) en neem alleen dat over. Gewichten: 400 en 500; 600 alleen voor eyebrows in hoofdletters (letterspatiëring 0.12em).
- Voeg aan `CLAUDE.md` een korte sectie "Merk" toe met alleen: logo-regels, Inter-regels en "geen tekstwijzigingen zonder opdracht". Niets uit de layout-secties van de rebrand-branch (kader/datavlak/status).

## Stap 4 — Breedte
Dimitry's observatie: de header is breder dan de rest van de pagina, waardoor de content smal oogt. Aanname: hij bedoelt de bovenste navigatiebalk. Controleer dat met de meting.
- Breng de content-container op dezelfde breedte als de header-container, of maximaal één tailwind-stap smaller als de header ruimer is dan 72rem (max-w-6xl).
- Lopende tekst blijft op leesbare regelbreedte: maximaal ca. 75 tekens per regel, ook als de container breder wordt.
- Gebruik één gedeelde container-klasse voor header, content en footer, zodat dit niet weer uit elkaar loopt.
- Controleer 390 px (mobiel), 768 px, 1440 px en 1920 px: geen horizontale scroll, geen afgesneden elementen.

## Acceptatiecriteria
1. `npm run build` slaagt zonder fouten of nieuwe waarschuwingen.
2. Header en footer tonen het nieuwe logo, in de juiste variant voor de achtergrond.
3. Favicon en OG-afbeelding zijn nieuw (controleer de HTML-head van de startpagina).
4. De tekst op alle pagina's is onveranderd (`git diff` laat geen tekstwijzigingen in `src/pages` zien, alleen markup/klassen voor de breedte).
5. De live layout en het donkerblauw zijn visueel behouden, op de uitkomst van stap 2 na.
6. Content en header hebben dezelfde breedte op 1440 en 1920 px; lopende tekst blijft binnen ca. 75 tekens.
7. Screenshots lokaal bewaren, niet committen (map is gitignored).

## Afronden
Branch pushen, Cloudflare-preview-URL in het Resultaat zetten (`https://rebrand-merk-op-live.assetwize-website.pages.dev`, controleer of dat klopt). Geen PR aanmaken zonder opdracht van Dimitry.

## Resultaat

Uitgevoerd op 2026-11-02 door Claude Code op branch `rebrand/merk-op-live`, vanaf `origin/main` (90cea90).

### Stap 1 — Meting op `main` (vóór wijzigingen)

**a. Donkerblauw.**

- In de broncode is het `bg-navy-900` = `--color-navy-900: #0f1f35`, in `src/styles/global.css`.
- Het wordt gebruikt voor de hero en de bewijsstrip van de startpagina, voor de CTA's en voor de footer. Ook de hero's van /relicore, /waarom en /contact en een paar banden op /relicore gebruiken het.
- Berekende kleur in de browser: hero `rgb(15, 31, 53)`, footer `rgb(15, 31, 53)`. Dat is `#0F1F35`.
- Opmerking: localhost:4321 en 4322 waren bezet door andere node-processen op deze Mac. Die heb ik niet aangeraakt. Gemeten is op een eigen dev-server van deze branch (poort 4323) met de code van `main`.

**b. Logo's op `main`.**

| Plek | Bestand | Achtergrond |
|---|---|---|
| Header | `/assetwize_logo_cropped.png` (oud logo, PNG, h-10) | `bg-gray-50` (≈ #F9FAFB, licht) |
| Footer | hetzelfde PNG, via CSS wit gemaakt (`brightness-0 invert`) | `bg-navy-900` #0F1F35 |

**c. Breedtes.** De waarden zijn op 1440 en 1920 px identiek; alles is begrensd door max-width. "Breedte" is de inhoudsbreedte, zonder padding.

| Pagina | Header-inhoud | Secties (inhoud) | CTA | Footer-inhoud |
|---|---|---|---|---|
| Alle | max-w-6xl 1152 px, met px-6 = **1104 px** | — | — | max-w-6xl, **1104 px** |
| / | | secties 1–7: max-w-4xl **896 px** | max-w-3xl **768 px** | |
| /compass | | secties 1–10: **896 px** | (sectie 11) **768 px** | |
| /atlas | | secties 1–7: **896 px** | **768 px** | |
| /relicore | | secties 1–4 en 6–7: **896 px**; sectie 5 (App schermen): max-w-5xl **1024 px** | **768 px** | |
| /waarom | | secties 1–6: **896 px** | **768 px** | |
| /contact | | secties 1–2: **896 px** | — | |

De aanname klopt: de bovenste navigatiebalk (1104 px) is breder dan de content (896 px, op /relicore één sectie van 1024 px). Het verschil is 208 px, 104 px aan elke kant.

### Stap 2 — Logo en kleur: route "wijkt meer af", dus gestopt

- Live: `#0F1F35` = rgb(15, 31, 53). Diep navy: `#071A30` = rgb(7, 26, 48).
- Afwijking per kanaal: **R 8**, G 5, B 5.
- De regel vraagt "minder dan 8" per kanaal. R wijkt precies 8 af, dus de voorwaarde is niet gehaald.
- **De kleur is niet aangepast.** Het nieuwe donkere logo (05/06 donker) staat **niet** op dat vlak. In de footer staat nog het oude logo, zoals op `main`. **Dimitry kiest:**
  1. `navy-900` naar `#071A30`: een kleine visuele verschuiving, 8/5/5 per kanaal. Daarna logo 06 donker in de footer; dat is één regel in BaseLayout.
  2. De kleur houden en in de footer een andere oplossing kiezen.

### Stap 3 — Merkelementen

- **Merkbestanden:** `git checkout origin/rebrand/afronding -- public/brand/` uitgevoerd. Aanwezig en identiek aan Drive (md5):
  - logo 05 licht (`assetwize-logo-licht.svg`)
  - logo 05 donker (`assetwize-logo-donker.svg`)
  - logo 06 donker (`assetwize-logo-tagline-donker.svg`)
  - favicons: ico, svg, 16/32/48 png, apple-touch-icon, android-chrome 192/512
  - `og-image.png`
- **Ontbreekt: icoon 02** (stip met AW). Dat stond ook in de rebrand-keten nooit in `public/brand/`. De bestanden staan in Drive, in `2026-10-28 AssetWize logo v1.0/02 Icoon - stip met AW/`. Op de site is het nu niet nodig.
- **Header:** `/brand/assetwize-logo-licht.svg` (05 licht) op de lichte header, h-8, zoals in de rebrand-branch. Het woordmerk is niet als tekst gezet.
- **Footer:** ongewijzigd, zie stap 2.
- **BaseLayout:**
  - favicon-links naar `/brand/…`, gelijk aan de rebrand-branch
  - standaard-`og:image` en `twitter:image` naar `/brand/og-image.png`
  - JSON-LD-logo naar `https://www.assetwize.nl/brand/android-chrome-512.png`
  - `theme-color` niet aangepast: dat is een kleur van de live layout
- **Lettertype:**
  - Google Fonts laadt Inter 400/500/600 (700 is weg), ook op /relicore-app.
  - In `global.css` staat `:root { --aw-font: "Inter", Arial, sans-serif; }` en `--font-sans: var(--aw-font)`. Berekend: `Inter, Arial, sans-serif`.
- **Gewichten:**
  - 600/700 buiten eyebrows is 500 geworden:
    - footerkoppen
    - homepage-bewijsstrip
    - Atlas: 5 tabelkoppen, RACI-letters, maturity-nummer en -titel
    - het label "Niet een gebrek aan …" op /waarom
    - /relicore-app: 700 in de header en 600 in de kaart
  - De 38 eyebrows in hoofdletters met 600 hebben nu 0,12 em spatiëring (was `tracking-widest` 0,1 em, op drie hero-eyebrows 0,14 em).
  - Controle: 0 keer 600/700 buiten eyebrows met 0,12 em.
- **CLAUDE.md:** een sectie "Merk" met drie punten (logo, Inter, tekst). Niets uit kader, datavlak of status.

### Stap 4 — Breedte

- **Container:** één klasse `.aw-container` in `global.css` (max 72rem = max-w-6xl, padding 1,5 rem = px-6). Die geldt voor:
  - de header-nav
  - de footer (beide blokken)
  - alle content-wrappers: max-w-3xl/4xl/5xl op paginaniveau zijn weg, en de `px-6` op de secties ook
- **Na de wijziging,** op 1440 en 1920 px: header, alle secties en footer zijn op alle zes pagina's **1104 px**.
- **Regelbreedte:**
  - De paragrafen die in een bredere container boven 75 tekens kwamen, en die met `max-w-xl/2xl` die er al boven zaten, hebben nu `.aw-prose` (max-width 35em, ca. 72 tekens bij elke lettergrootte). Ik heb 38 tags aangepast.
  - Gemeten na de wijziging: het maximum is 77 tekens, in twee zinnen van één regel; al het andere is ≤ 75.
- **Breedtes:**
  - geen horizontale scroll en geen elementen buiten beeld op 390, 768, 1440 en 1920 px, op alle zeven pagina's
  - op 390 px liep "Het probleem" op /relicore 4 px over door een lang woord naast een label met vaste breedte; opgelost met `hyphens-auto` (taal nl) op die tekst

### Acceptatiecriteria

1. **Build:** `npm run build` slaagt. De enige waarschuwing is de Node-melding `DEP0205` (`module.register()`), die ook op `main` verschijnt; er zijn geen nieuwe.
2. **Logo's:** de header toont het nieuwe logo (05 licht). **De footer niet**: daar staat bewust het oude logo, volgens stap 2.
3. **Favicon en OG:** de head van de startpagina linkt naar `/brand/favicon.*`, `/brand/android-chrome-*`, `/brand/apple-touch-icon.png` en `og:image` `/brand/og-image.png`. Alle bestanden bestaan. Let op: `public/favicon.ico` in de root is nog het oude bestand. Browsers gebruiken de links, maar /relicore-app heeft geen favicon-links en vraagt `/favicon.ico` direct op.
4. **Tekst:** de zichtbare tekst en alt-teksten van alle zeven pagina's zijn identiek aan `main`. Alleen de `og:image`-URL in de meta is anders. In `git diff src/pages` veranderen alleen klassen en stijlen.
5. **Layout:** de layout en het donkerblauw zijn behouden.
6. **Breedte:** content en header zijn allebei 1104 px op 1440 en 1920 px. Lopende tekst blijft binnen ca. 75 tekens.
7. **Screenshots:** lokaal in `tasks/screenshots/TASK-011/` (390/768/1440/1920 en twee uitsneden). `tasks/screenshots/` staat nu ook op deze branch in `.gitignore`; dat ontbrak op `main`.

### Afwijkingen en open punten voor Dimitry

1. **Stap 2:** de keuze voor de footerkleur en het footerlogo (zie boven).
2. **Icoon 02** ontbreekt in `public/brand/`.
3. **Root-`favicon.ico`** is nog oud. Vervangen door `/brand/favicon.ico`?
4. **Breedte van lopende tekst:** paragrafen die op `main` 576 px (`max-w-xl`) breed waren, zijn nu ca. 490 px, om binnen 75 tekens te blijven.
5. **Oude logobestanden:** de oude bestanden in `public/` zijn niet verwijderd. Het footerlogo gebruikt er nog een.
6. **Branches:** PR #2 en de rebrand-branches zijn niet aangeraakt.

### Commits en preview

- `ab012e0` — TASK-011: de wijzigingen (Cloudflare-check groen)
- het volgende commit voegt alleen deze regels toe
- Preview: https://rebrand-merk-op-live.assetwize-website.pages.dev (klopt met de verwachte URL); commit-preview https://ec045fd3.assetwize-website.pages.dev
- Geen PR aangemaakt, niet gemerged.
