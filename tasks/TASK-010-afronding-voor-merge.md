# TASK-010: afronding voor merge
Datum: 2026-10-29
Branch: rebrand/afronding (vanaf rebrand/layout)
Status: klaar — wacht op controle Dimitry (preview)

## Doel
De rebrand mergebaar maken: mobiele navigatie, leesbare globe op mobiel, contrast, geen zware bestanden in git, meer ritme in achtergronden binnen het bestaande palet.

## Context
- Brand Guidelines v2.0 (Drive) blijft leidend. Notion, productpagina AssetWize website, sectie "Ontwerpregels website, aanvulling 29-10-2026" bevat de werkregels en de besluiten.
- Bekend en bewust nog niet aangepast (wacht op besluit Dimitry, valt onder TASK-011): CTA-kleur (v2.0 zegt Mist, nu diep navy), de inhoudelijke accentband, fotografie, nieuwe visuals, de kleur van het Controle-perspectief op /compass.

## Opdracht
1. Haal tasks/screenshots/ uit git (git rm -r --cached; bestanden mogen lokaal blijven) en zet tasks/screenshots/ in .gitignore. Voeg in tasks/README.md één regel toe: "Screenshots lokaal bewaren, niet committen." Pas de verwijzingen in de Resultaat-delen van TASK-008 en TASK-009 aan met de vermelding dat de screenshots niet in git staan.
2. Mobiel menu (onder 768 px): een knop rechts in de header die een paneel opent met dezelfde links als de desktopnavigatie plus de knop "Start het gesprek". Wit paneel, 1 px Lijn, actieve link turquoise. Zonder framework, met een klein inline script in BaseLayout. Toegankelijk: <button> met aria-expanded en aria-controls, sluit met Escape en bij klik op een link, focus zichtbaar. Geen nieuwe zichtbare tekst, alleen een aria-label.
3. Atlas-globe op mobiel (onder 768 px): toon het diagram niet, maar de zeven domeinen (T1 t/m T7) als lijst eronder, met exact dezelfde labels als het diagram, in een datavlak. Gebruik dezelfde databron, zodat de tekst niet dubbel wordt onderhouden. Op desktop blijft het diagram zoals nu.
4. Atlas RACI-matrix: de letter R in #7A4F1E (zelfde als A), contrast minimaal 4,5 : 1. Controleer de andere letters in de matrix.
5. Statuskleuren (scorechips en RAG in de Compass-tabellen): gebruik de waarden uit Brand Guidelines v2.0 §11.3: groen #2F7D4F, oranje #C77B12, rood #B3261E. Controleer het contrast van tekst op de chips (minimaal 4,5 : 1, anders lichtere vlaktint met donkere tekst in dezelfde tint) en meld afwijkingen.
6. Ritme in achtergronden, uitsluitend met bestaande tokens: wit, Wolk (#F5F8FA) en Mist (#E6F0F2). Regels: geen twee aansluitende secties met dezelfde achtergrond; Mist in maximaal één sectie per pagina, waar een sectie met kaarten of een datavlak staat; geen nieuwe kleuren of tokens. Op Wolk en Mist: eyebrow en links in merk-navy (links met turquoise onderlijn), nooit turquoise tekst. Noteer in Resultaat per pagina welke sectie Mist kreeg.
7. CLAUDE.md: werk bij met (a) het datavlak-principe: kopband donkere productkleur, witte body, 1 px Lijn, radius 8 px; (b) de statuskleuren uit punt 5; (c) de regel "kader = AssetWize-palet, productkleur alleen als identiteit en in datavlakken"; (d) een verwijzing naar de Notion-sectie "Ontwerpregels website" voor werkregels en openstaande besluiten. Maximaal 12 regels erbij, geen herhaling van wat er al staat. Haal "wacht op bevestiging Dimitry" weg.

## Niet doen
- Geen tekst, koppen of volgorde wijzigen. Geen nieuwe tekst of voorbeeldzinnen uit het ontwerpvoorstel overnemen.
- CTA-sectie, accentband en footer niet aanpassen.
- Geen fotografie, afbeeldingen van derden of nieuwe visualisaties toevoegen.
- Geen nieuwe kleuren of tokens.
- Productlogo's niet vervangen of nabouwen.
- Niet mergen, geen pull request.

## Klaar als
- npm run build zonder fouten.
- Mobiel menu werkt op 375 en 768 px (openen, sluiten met Escape, tab-volgorde); geen horizontale scroll op 375, 768 en 1440 px.
- Atlas op 375 px toont de lijst van zeven domeinen en geen diagram; op 1440 px alleen het diagram.
- git ls-files toont geen bestanden onder tasks/screenshots/.
- Grep: geen hexwaarden buiten de tokens van Brand Guidelines v2.0 §9, §10.3 en de productkleuren uit §9.6 (meld uitzonderingen).
- Cloudflare-preview van rebrand/afronding groen.

## Resultaat

Uitgevoerd op 2026-10-29 door Claude Code op branch `rebrand/afronding`.

### Per opdracht

1. **Screenshots uit git.**
   - `git rm -r --cached tasks/screenshots`: 21 bestanden van TASK-009 staan niet meer in git, maar wel lokaal.
   - `tasks/screenshots/` staat in `.gitignore`.
   - `tasks/README.md` heeft regel 9 erbij: "Screenshots lokaal bewaren, niet committen."
   - In de Resultaat-delen van TASK-008 en TASK-009 staat nu dat de screenshots niet in git staan.
   - `git ls-files tasks/screenshots`: leeg.
2. **Mobiel menu** (BaseLayout, onder 768 px):
   - Rechts in de header staat een `<button>` met `aria-label="Menu"`, `aria-expanded` en `aria-controls="mobiel-menu"`, en een pictogram (streepjes of kruis).
   - Het paneel is wit met een bovenrand van 1 px Lijn. Het heeft dezelfde `navItems` als de desktopnavigatie, de actieve link in turquoise met `aria-current`, en de knop "Start het gesprek" (`.aw-btn-primary`).
   - Het paneel sluit met Escape (de focus gaat terug naar de knop), bij een klik op een link en bij verbreden naar ≥ 768 px.
   - Focus is zichtbaar via `.aw-focus`: een ring van 2 px turquoise, ook op de desktoplinks.
   - Het script is inline en gebruikt geen framework.
   - Onder 768 px staat de header-knop "Start het gesprek" in het paneel in plaats van in de balk.
   - Getest met Playwright op 375 en 767 px:
     - openen met Enter
     - tab-volgorde logo → menuknop → Compass → Atlas → Relicore → Waarom AssetWize → Start het gesprek
     - Escape sluit en zet de focus terug
     - een linkklik sluit en navigeert
   - Op 768 px staat de desktopnavigatie er en is de menuknop verborgen. Dat volgt "onder 768 px".
3. **Atlas-globe op mobiel.**
   - De zeven domeinen staan nu in één array `domeinen` in de frontmatter. Het diagram en de lijst worden daar allebei uit gerenderd, dus de tekst wordt niet dubbel onderhouden.
   - Onder 768 px is het diagram verborgen. Je ziet dan een lijst T1 t/m T7 in hetzelfde Atlas-datavlak: een bruin bolletje met de code plus het label, waarbij de twee diagramregels met een spatie zijn samengevoegd.
   - Vanaf 768 px is alleen het diagram zichtbaar.
   - Gecontroleerd: op 375 px geen diagram en 7 lijstitems, op 1440 px alleen het diagram.
4. **RACI.**
   - A, R en A/R staan nu in #7A4F1E (7,1 : 1 op wit).
   - Eerder stond R in #B07D3A (3,6 : 1) en A/R in #8B6230.
   - De andere letters heb ik ook gecontroleerd: C stond in Leisteen (5,5 : 1). I en "—" vielen terug op Lijn (1,6 : 1, onleesbaar); die staan nu ook in Leisteen.
5. **Statuskleuren** (§11.3: groen #2F7D4F, oranje #C77B12, rood #B3261E).
   - De klassen `.status--groen/oranje/rood` met `.status-tekst` en `.status-chip` staan in `global.css`.
   - Ze gelden voor het Compass-profiel (score en chip), de radarlijst, de diagnosekaart en de ✕-tekens op /compass.
   - **Afwijkingen gemeld**, gemeten contrast:

     | Kleur | Op wit | Op chiptint (12 %) | Oplossing |
     |---|---|---|---|
     | Groen | 5,0 : 1 | 4,3 : 1 | chiptekst groen op 80 % (6,0 : 1) |
     | Oranje | 3,4 : 1 | 2,9 : 1 | tekst en chiptekst oranje op 70 % (5,4 : 1) |
     | Rood | 6,5 : 1 | 5,4 : 1 | geen aanpassing nodig |

   - De chipvlakken zijn een tint van 12 % van de statuskleur op wit.
   - De tinten en donkere tekst zijn met `color-mix()` afgeleid van de drie §11.3-waarden. Er staan geen nieuwe hexwaarden of tokens in de broncode, maar strikt genomen zijn het afgeleide kleuren. Graag bevestigen.
6. **Ritme in achtergronden** (W = wit; CTA en footer ongewijzigd). Op Wolk en Mist zijn eyebrows, labels, nummers en ✓ merk-navy gemaakt.

   | Pagina | Volgorde | Mist | Verder op Wolk/Mist aangepast |
   |---|---|---|---|
   | Home | W · Wolk · W · **Mist** · Wolk · W · Wolk | Waar staat uw organisatie vandaag (kaarten) | eyebrow navy |
   | /compass | W · Wolk (ankerzin) · W (bewijs) · Wolk · W · Wolk · W · **Mist** · W · Wolk | Wat Compass zichtbaar maakt (datavlakken) | eyebrows van Het probleem, Het fundamentele onderscheid, Wat Compass zichtbaar maakt en Na de diagnose van groen naar navy |
   | /atlas | W · Wolk (ankerzin) · W (Waarom Atlas bestaat) · **Mist** · W · Wolk · W | Atlas als referentiearchitectuur (globe-datavlak) | eyebrows navy |
   | /relicore | W · Wolk (ankerzin) · W (Het probleem) · Wolk · **Mist** · W · Wolk | Wat u ziet in de applicatie (datavlakken) | eyebrow "Hoe Relicore werkt" navy |
   | /waarom | W · Wolk (Het patroon) · W (Tekortschieten) · **Mist** · Wolk · W | Waarom AssetWize is gebouwd (kaarten) | labels "Niet een gebrek aan …" navy; de links Compass →, Atlas → en Relicore → met `.aw-link-tint` (navy, turquoise onderlijn), dus de productkleur is weg bij Compass en Atlas |
   | /contact | W · Wolk (inhoud) | geen | eyebrows, ✓ en nummers navy; de vier kaarten rechts expliciet wit; de Compass-kaart van Wolk naar wit; bij "Typische eerste stap" Relicore van turquoise naar merk-navy (de Relicore-productkleur); Compass en Atlas blijven in productkleur als identiteit |

   - De twee dunne strips (ankerzin en bewijsstrip) tellen als sectie. Zonder Wolk op de ankerzin zouden hero, ankerzin en bewijsstrip drie witte vlakken achter elkaar zijn.
   - Turquoise in kaarten en datavlakken (witte body) is blijven staan.
7. **CLAUDE.md.**
   - Het blok "Kleurgebruik" is herschreven naar 6 punten. Het telt 1 regel meer dan na TASK-009.
   - Inhoud:
     - kader = AssetWize-palet, productkleur alleen als identiteit en in datavlakken
     - het datavlak-principe
     - identiteit
     - statuskleuren met klassen
     - layoutklassen
     - de verwijzing naar de Notion-sectie "Ontwerpregels website"
   - "wacht op bevestiging Dimitry" is weg.
   - Let op: hiermee staan de drie statuskleur-hexwaarden in CLAUDE.md. De taak vraagt dat expliciet; het wijkt af van de eerdere afspraak "geen kleuren uit de richtlijn in CLAUDE.md".

### Hexwaarden

Gegrept over `src/`, toegestaan:
- §9.1, §9.2 en §10.3
- §9.6, inclusief de Compass-subkleuren
- §11.3, de statuskleuren

Aangepast naar toegestane waarden:
- **Atlas-globe:** #C49A5E naar #B07D3A en #8B6230 naar #7A4F1E, met de bestaande transparantie. #E8D5B5 werd #B07D3A en de bolvulling #F5EDE0 werd wit.
- **Atlas-maturitybolletjes:** van #f5f5f4/#F3EBDF/#f0e8dc naar Wolk en `color-mix` van de Atlas-kleur op 10 % en 20 %. Het cijfer haalt ≥ 5,8 : 1.
- **Compass-radarraster:** #E0EBE4 werd Lijn op 60 % dekking.

Resultaat: 0 hexwaarden buiten de toegestane set.

Uitzonderingen om te melden:
- `rgba()`-waarden voor wit op donker (kopbanden en de lichte radarvulling) en `color-mix()`-tinten (zie punt 5)
- Tailwind-kleurklassen in de Relicore-mockup (`bg-green-100 text-green-800`, `bg-blue-50 text-blue-700`, `text-amber-700`): app-scherminhoud, ongewijzigd sinds TASK-009
- de getypte productlogo's: #1C0F07 in het Atlas-woordmerk, CompassLogo-kleuren (§9.6)

### Controles

- `npm run build`: geen fouten.
- **Tekst:** vergeleken met de stand vóór TASK-009 zijn alleen de verwachte toevoegingen veranderd:
  - de menulinks (de bestaande vier labels en "Start het gesprek", per pagina)
  - `aria-label` "Menu"
  - de Atlas-lijst met de zeven bestaande labels

  Er is geen bestaande tekst gewijzigd of verdwenen.
- **Breedtes:** geen horizontale scroll op 375, 768 en 1440 px, op alle zeven pagina's.
- **Screenshots** (lokaal, niet in git): `tasks/screenshots/TASK-010/`, met 21 full-page screenshots plus `menu-375.png` en `atlas-lijst-375.png`.
- `git ls-files tasks/screenshots`: leeg.

### Open punten voor Dimitry

1. Akkoord op de met `color-mix` afgeleide chiptinten en de donkerdere oranje en groene tekst (punt 5)?
2. Op /waarom zijn de productlinks nu navy met een turquoise onderlijn (regel voor Wolk). Akkoord, of mogen productnamen daar hun productkleur houden zoals op /contact?
3. Uit TASK-011: CTA-kleur, accentband, fotografie, visuals en de kleur van het Controle-perspectief.
4. De getypte productlogo's (open sinds TASK-008).

Preview: zie hieronder.
