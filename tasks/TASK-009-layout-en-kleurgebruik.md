# TASK-009: layout en kleurgebruik
Datum: 2026-10-29
Branch: rebrand/layout (vanaf rebrand/paginas)
Status: klaar — wacht op controle Dimitry (preview)

## Doel
De zeven pagina's visueel in lijn brengen: één containerbreedte, en productkleur als identiteit en in datavlakken, niet als dominante sfeer. Alleen vorm, geen tekst.

## Context
Feedback Dimitry op de preview van rebrand/paginas, met PDF's van alle zeven pagina's:
- Header en footer zijn max-w-6xl, de pagina-inhoud max-w-4xl. De inhoud lijkt smaller dan de header. Veel tekstblokken zijn bovendien ~360 px breed, waardoor de rechterhelft leeg blijft. Op /relicore is de sectie "Drie schermen" weer breder.
- Productkleur domineert: groen-grijze en beige vlakken, groene lopende tekst op /compass, een groene band (Compass) en een donkerbruine band (Atlas) direct boven de navy footer, getinte kaarten op de homepage, en een bruin blok (Atlas-kleur) in "Drie perspectieven" op /compass.
- Op /compass, /atlas en /relicore staat bij de ankerzin een gekleurde balk aan de rand van het scherm. Dat is een border-left die niet aan de container hangt.
- Atlas: de blueprint-tabellen (bruine kopband, witte body) werken goed en zijn het voorbeeld voor het datavlak.

## Principe (besluit Dimitry 29-10)
1. Kader = AssetWize: achtergronden, lopende tekst, knoppen, accentband en footer uitsluitend uit het v2.0-palet (Wit, Wolk, Mist, Inkt, Leisteen, merk-navy, turquoise, diep navy). Nooit getint in productkleur.
2. Datavlak = product: tabellen, matrices, schema's, diagrammen en app-schermen krijgen een kopband in de donkere productkleur met witte tekst, daaronder wit, met een rand van 1 px Lijn en radius 8 px, geen schaduw. Compass #1A4A35, Atlas #7A4F1E, Relicore #0F2D52.
3. Productkleur daarnaast alleen als kleine identiteit: eyebrow, pictogram, productlogo, dunne lijn bovenaan een kaart.
4. Scorekleuren (rood, oranje, groen) in de Compass-tabellen blijven, binnen het datavlak. Leg dit als uitzondering vast in CLAUDE.md met de vermelding "wacht op bevestiging Dimitry".

## Opdracht
1. Container: header, inhoud en footer allemaal max-w-6xl met dezelfde px-6. Maak één gedeelde containerklasse in global.css en gebruik die overal. Haal alle afwijkende max-w-4xl/5xl-wrappers op paginaniveau weg.
2. Lopende tekst begrensd op leesbare regelbreedte (ca. 65ch). Plaats waar al kaarten, statistieken, lijsten of een tweede kolom bestaan die naast de tekst in een twee-koloms indeling, zoals /waarom nu al doet bij "Het patroon". Voeg geen nieuwe inhoud toe. Laat een sectie met alleen tekst gewoon links staan.
3. Maak de component .datavlak (met varianten --compass, --atlas, --relicore) in global.css en pas hem toe op: de drie Atlas-blueprinttabellen, het Atlas-diagram, de Compass-voorbeeldtabellen en het Compass-profiel, de Relicore-schermen, en "Drie perspectieven" op /compass. In dat laatste blok worden de drie perspectieven alle drie Compass-groen (geen bruin); onderscheid ze via label en nummer.
4. Haal productkleur uit het kader: zet alle sectieachtergronden op Wit, Wolk of Mist; lopende tekst op Inkt of Leisteen; de getinte kaarten op de homepage ("Waar staat uw organisatie vandaag") en de Compass-kaart op /contact naar wit of Wolk met een dunne productkleurlijn of eyebrow. Het Atlas-diagram krijgt een Wolk-achtergrond met de Atlas-knopen in Atlas-bruin.
5. Accentband: op elke pagina #071A30 (ook Compass en Atlas). Geen andere donkere band. Knoppen turquoise zoals nu.
6. Ankerzin: zet de gekleurde balk binnen de container (hij mag niet aan de rand van het scherm staan), in de productkleur. Op de homepage en /waarom geldt dezelfde plek.
7. Leesbaarheid: lopende tekst minimaal 14 px, labels en bijschriften minimaal 12 px. Tekstkleuren Inkt of Leisteen, nooit groengrijs. Atlas-globelabels (#B07D3A) naar Atlas-bruin #7A4F1E op wit.
8. Hero-productlogo's (Compass, Atlas, Relicore): maak de regel "BY ASSETWIZE" leesbaar. Dat mag via de bestaande SVG's, maar bouw geen logo na. Lukt het niet zonder het logo aan te passen, laat het staan en meld het.
9. Controle: screenshots van alle zeven pagina's op 1440, 768 en 375 px breed (Playwright mag). Zet ze in tasks/screenshots/TASK-009/ en noem in Resultaat wat er op 375 en 768 afwijkt.
10. Pas CLAUDE.md aan met het principe (kader/datavlak/identiteit) in maximaal 8 regels.

## Niet doen
- Geen tekst, koppen, volgorde of inhoud wijzigen.
- Geen mobiel menu bouwen (komt in een eigen taak).
- Productlogo's niet vervangen of nabouwen.
- Niet mergen, geen pull request.

## Klaar als
- npm run build zonder fouten.
- Grep: geen max-w-4xl op paginaniveau, geen oude productachtergronden (#F7F8F6, #FAF7F4, #1C0F07 en de oude Compass-band) in kader-elementen, geen border-left aan de rand van het scherm.
- Alle zeven pagina's visueel gecontroleerd op 1440, 768 en 375 px.
- Cloudflare-preview van rebrand/layout groen.

## Resultaat

Uitgevoerd op 2026-10-29 door Claude Code op branch `rebrand/layout`.

### Per opdracht

1. **Container.**
   - `global.css` heeft nu `.aw-container` (max 72rem = max-w-6xl, padding 1,5 rem = px-6).
   - Header, footer en alle secties van de zes BaseLayout-pagina's gebruiken die klasse.
   - Alle `max-w-3xl/4xl/5xl mx-auto`-wrappers op paginaniveau en de `px-6` op de secties zijn weg. "Drie schermen" op /relicore is nu even breed als de rest.
2. **Regelbreedte en twee kolommen.**
   - `.aw-prose` (65ch) staat op lopende tekst in plaats van max-w-lg/xl.
   - `.aw-split` geeft twee kolommen vanaf 1024 px. Het staat op:
     - /compass: Het probleem (kaart "Wat Compass in de praktijk ziet" rechts), Waarom vastlopen, Wat Compass oplevert
     - /atlas: Waarom Atlas bestaat, Relatie
     - /relicore: Het probleem, Hoe Relicore werkt, Wat Relicore oplevert, Integraties
     - /waarom: Het patroon
     - /contact
   - Op /waarom stond "Twintig jaar observaties" in een tweekoloms grid met één kolom. Het staat nu links in `.aw-prose`.
   - Secties met alleen tekst staan links.
   - Keuze: twee kolommen pas vanaf 1024 px (waarom en contact waren 768 px), omdat de kolommen op 768 px te smal worden.
3. **Datavlak.**
   - `.datavlak` met `--compass`, `--atlas` en `--relicore`, plus `__kop`, `__label` en `__kop--smal`.
   - Toegepast op:
     - de drie Atlas-blueprinttabellen en het Atlas-diagram
     - het Compass-profiel, de radar en de diagnosekaart
     - de Compass-kaart in "Aanwezig vs werkend"
     - de drie Relicore-schermen
     - "Drie perspectieven": Koers, Controle en Groei zijn alle drie Compass-groen, met onderscheid via "01 — Koers" enz. Het bruin van Controle is weg.
   - Keuze: het Atlas-diagram heeft geen titel, en een titel toevoegen zou nieuwe tekst zijn. Het kreeg daarom een smalle kopband van 6 px in Atlas-bruin zonder tekst, met daaronder Wolk.
4. **Productkleur uit het kader.**
   - Achtergronden: Compass-groen-grijs (forest-50/100) en Atlas-beige (#faf7f4) zijn nu Wolk. De grijsgroene kaart "Traditioneel" is wit met een Wolk-kop.
   - Tekst: groene kop- en lopende tekst op /compass is nu merk-navy, Inkt of Leisteen. #1C0F07 in koppen op /atlas is nu merk-navy.
   - Homepage: de kaarten bij "Waar staat uw organisatie vandaag" zijn wit, met een eyebrow in productkleur. De Compass-kaartkop bij Instrumenten is Wolk, gelijk aan die van Relicore.
   - /contact: de Compass-kaart is Wolk met een groene eyebrow.
   - De oude Compass/stone/amber-tokens zijn uit `global.css` verwijderd. Nieuw zijn `--color-compass`, `--color-atlas` en `--color-relicore`.
   - Keuze: de rol "Plant- & locatiemanagement" onder "Voor wie" was Compass-groen, maar is geen product. Die is nu petrol uit het v2.0-palet.
5. **Accentband.** De CTA is op alle pagina's `bg-aw-deep`, ook op Compass (was groen) en Atlas (was #1C0F07). De inline groene randkleur van de secundaire knop op Compass is weg. Er is geen andere donkere band.
6. **Ankerzin.** De balk staat nu op de tekst zelf (`.aw-anker`), binnen de container, in de productkleur: Compass-groen, Atlas-bruin en merk-navy voor Relicore (was turquoise). De homepage en /waarom hebben geen ankerzin-sectie; daar is niets toegevoegd. `.aw-anker` is beschikbaar als die er komt.
7. **Leesbaarheid.**
   - Lopende tekst van 12 px is 14 px geworden: bijschriften in de kaarten op de homepage, de "Na de diagnose"-kaarten, de slotzin op /compass, de Atlas-maturitytekst en de Compass-lijsten.
   - Labels van 9, 10 en 11 px zijn 12 px geworden: bewijsstrips, tabelkoppen, scorepillen, legenda's, RACI, Relicore-tags, /waarom-labels en /relicore-app.
   - Groengrijs (#5A7A65, #8FA898, #1A2E22, #3D2008, #4b3621) is vervangen door Inkt of Leisteen.
   - Atlas-globe:
     - de T-labels staan in #7A4F1E op 12
     - de namen staan in Inkt
     - het diagram is maximaal 680 px breed (was 580), dus op desktop staat alles op ≥ 12 px
   - Compass-radar: de viewBox is breder, de labels staan op ~12 px en "Organisatie" wordt niet meer afgesneden.
   - Relicore "496 nog te positioneren" en "23.848" staan nu in amber-700 in plaats van amber-500 (contrast).
8. **"BY ASSETWIZE"** in de drie hero-lockups staat nu op 12 px, zonder transparantie:
   - Compass via `CompassLogo` (alleen maat xl), in Compass-groen in plaats van groengrijs
   - Atlas in Atlas-bruin
   - Relicore in merk-navy

   Ik heb alleen maat, kleur en transparantie van de bestaande regel aangepast. Er is niets nagebouwd en het woordmerk is ongewijzigd. Let op: de lockups zelf zijn nog steeds getypte tekst en SVG, geen logobestanden (open punt uit TASK-008).
9. **Screenshots.** 21 full-page screenshots (7 pagina's × 1440/768/375) via Playwright, lokaal in `tasks/screenshots/TASK-009/` (staan niet in git, sinds TASK-010). Afwijkingen hieronder.
10. **CLAUDE.md.** Een blok "Kleurgebruik: kader, datavlak, identiteit" van 5 regels, met de uitzondering voor de scorekleuren als "wacht op bevestiging Dimitry". Ik noem klassen, geen hexwaarden, zodat er geen kleuren uit de richtlijn in CLAUDE.md komen.

### Wat afwijkt op 768 en 375 px

- **375 px, opgelost:**
  - Horizontale scroll op /relicore en /waarom, door de rijen met een label van vaste breedte naast tekst met lange woorden. Op smalle schermen staan label en tekst nu onder elkaar (ook op /atlas, Relatie).
  - "Sectoronafhankelijk" liep buiten zijn vak in de bewijsstrip op de homepage. Afbreking staat nu aan (`hyphens-auto`, taal nl).
  - Daarna heeft geen enkele pagina nog horizontale scroll op 375, 768 of 1440 px.
- **375 px, open:**
  - De Atlas-globe schaalt mee en de labels worden ~5 px. Een leesbare mobiele variant (bijvoorbeeld een lijst onder het diagram) vraagt een ontwerpkeuze en eventueel herhaalde inhoud. Ik heb die niet gemaakt.
  - De diagnosekaart (Compass) en de RACI-tabel (Atlas) scrollen horizontaal binnen hun datavlak. Dat is bedoeld.
- **375 en 768 px:** er is geen mobiel menu. Onder 768 px tonen header en navigatie alleen het logo en de knop. Buiten scope; komt in een eigen taak.
- **768 px:**
  - De navigatie past net naast logo en knop.
  - De datavlakken van "Drie perspectieven" en de Relicore-schermen staan in twee kolommen; het derde scherm staat eronder.
  - De twee-koloms secties zijn op 768 px één kolom.

### Controles

- `npm run build`: geen fouten.
- **Tekst:** de zichtbare tekst en alt-teksten van alle zeven pagina's zijn identiek aan de stand vóór deze taak (diff leeg).
- **Grep:**
  - `max-w-4xl/5xl`: 0
  - `<section … border-l`: 0
  - `#F7F8F6`, `#FAF7F4`, `forest-`: 0
  - groengrijs: 0 op de pagina's (één in de nooit gebruikte `dark`-variant van CompassLogo)
  - 700: 0
- **Grep, bewust gelaten:**
  - `#1C0F07` alleen nog in het getypte Atlas-woordmerk in de hero (logo, geen kader).
  - `#B07D3A` alleen nog als kleur van de letter R in de RACI-matrix (data-codering; contrast ~3:1, ter beoordeling).
- **Visueel:** alle zeven pagina's op 1440, 768 en 375 px gecontroleerd, plus uitsneden van radar, diagnosekaart, globe, Drie perspectieven en Relicore-schermen.

### Open punten voor Dimitry

1. De scorekleuren in de Compass-tabellen zijn als uitzondering vastgelegd en wachten op je bevestiging.
2. De Atlas-globe op mobiel (zie boven).
3. De RACI-letter R in #B07D3A: laten als data-codering of donkerder maken?
4. De hero-lockups zijn nog getypt. Het voorstel uit TASK-008 blijft: een eigen taak om ze te vervangen door de bestanden uit Drive (Productlogo's v1.0).
5. Het mobiele menu.

Preview (Cloudflare-check groen voor 1b21ae9): https://rebrand-layout.assetwize-website.pages.dev (commit-preview https://8994b825.assetwize-website.pages.dev)
