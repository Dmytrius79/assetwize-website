# TASK-013 — Compass-pagina herschrijven

## Doel
De pagina `/compass` wordt korter en scherper, sluit aan bij de propositie en toont de echte Compass-schermen met fictieve gegevens. Alleen `/compass` verandert. Andere pagina's, layout, kleuren en merkelementen blijven zoals ze zijn.

## Uitgangspunten
- Branch `content/compass-pagina`, afgesplitst van `rebrand/merk-op-live`. Push de branch. Verwachte preview: `https://content-compass-pagina.assetwize-website.pages.dev` (controleer de werkelijke URL).
- Live layout, `#071A30` als enige donkere vlak, Inter, huidige containerbreedte en de productlogo's uit TASK-012 blijven ongewijzigd.
- Zichtbare tekst op de pagina: ongeveer 350 woorden, exclusief de tekst binnen de voorbeeldschermen.
- Verboden op de pagina: elke vorm van duur of tijdsindicatie, het woord "AI", klantnamen (ook geen "Syngenta" of "Enkhuizen"), uitroeptekens, de claims "15+", "100" en "7 sectoren", het woord "bewezen".

## Bron (alleen lezen)
`~/dev/compass` (Next.js). Wijzig daar niets. Zoek in de code naar: "Bestuurlijk oordeel", "Profiel over 7 thema", "Score per thema", "Wat de antwoorden samen laten zien", "Antwoorden per vraag", "Spreiding per thema", "Antwoordverdeling" en `app/page.tsx` (de drie perspectiefkaarten met symbolen). Neem thema-namen, volgorde, niveaulabels (Reactief, Fragmentarisch, Ingericht, Geborgd, Lerend) en vaste UI-teksten letterlijk over uit de app. Het zes-assen-paneel "dimensies" (Inzicht, Uitvoerbaarheid, Besluitvorming, Beheersing, Voorspelbaarheid, Leren) wordt NIET overgenomen.

## Techniek
- Poort de schermen naar statische Astro-componenten in `src/components/compass-voorbeeld/`. Geen React, geen Clerk, geen API-calls, geen client-side data.
- Alle data staat in één bestand `src/components/compass-voorbeeld/voorbeeld-data.ts`. Afgeleide waarden (themascores, totaalscore, aantal antwoorden op niveau 1–2, niveauverdeling, spreiding) worden berekend uit de antwoorden met de rekenregels van de app, niet handmatig ingevuld.
- Gebruik de huidige stijl van de app voor de schermen. Alle drie de perspectieven (Koers, Controle, Groei) staan in dezelfde groene stijl, zoals in de app (besluit Dimitry, 30-10). Pas hier niets aan op basis van Brand Guidelines v2.0 §9.6. Die afwijking leg ik apart vast in Notion.

## Dummy-data
Organisatie: "Voorbeeldorganisatie". Zeven thema's in de vaste volgorde van de app. Antwoordniveaus per thema (4 vragen per thema, 28 totaal):

| Thema (volgorde app) | Antwoorden | Themascore |
|---|---|---|
| T1 | 2, 2, 3, 2 | 2,25 |
| T2 | 3, 4, 3, 3 | 3,25 |
| T3 | 1, 2, 3, 2 | 2,00 |
| T4 | 3, 2, 3, 3 | 2,75 |
| T5 | 2, 2, 1, 3 | 2,00 |
| T6 | 4, 2, 2, 2 | 2,50 |
| T7 | 3, 3, 2, 4 | 3,00 |

Controlewaarden: totaal 71 uit 28 antwoorden, gemiddelde 2,54. 14 van 28 antwoorden op niveau 1–2. Niveauverdeling niveau 1 t/m 5: 2 / 12 / 11 / 3 / 0.

Toewijzing aan de echte thema's: de twee thema's met score 2,00 (T3 en T5) moeten "Governance & Eigenaarschap" en "Waarde, Lifecycle & Investeringen" zijn. Het thema met 3,25 (T2) moet "Betrouwbaarheid & Continuïteit" zijn. Staan die thema's in de app op andere posities, verplaats dan de antwoordrijen (de rijen blijven intact als set) zodat deze drie voorwaarden gelden. Vermeld de uiteindelijke toewijzing in het Resultaat.

## Opbouw en tekst (letterlijk overnemen waar tussen aanhalingstekens)

### Blok 1 — Hero
- Eyebrow: "Compass · bestuurlijke diagnose"
- H1: "Een assessment vraagt of iets aanwezig is. Compass vraagt of het werkt."
- Subtekst: "Een begeleide diagnose voor directie en management van asset-intensieve organisaties: waar grip ontbreekt, waarom, en wat het bestuur moet beslissen."
- Knoppen: "Plan een gesprek" (naar `/contact`) en "Bekijk Compass live" (naar `https://compass.assetwize.nl`).
- Rechts, compact, alleen twee elementen: de kernconclusie en het themaprofiel (radar over zeven thema's). Geen bestuurlijke stand, geen scorelijst. Kop van de kernconclusie: "Volgens de antwoorden kan het bestuur bouwen op de uitvoering, maar rusten de afwegingen op personen." Gebruik het label uit de app ("Wat de antwoorden samen laten zien"). Voeg geen extra lopende tekst toe.

### Blok 2 — Het verschil
- Kop: "Aanwezig is niet hetzelfde als bestuurbaar."
- Tabel met twee kolommen "Aanwezig" | "Maar ontbreekt":
  - onderhoudsprocessen en een CMMS | eigenaarschap voor assets
  - KPI-rapportage | risico's die het bestuur kan sturen
  - investeringsplannen | een afweging waarom juist deze prioriteit
  - verbeterprogramma's | een gedeelde taal tussen bestuur en techniek

### Blok 3 — Drie perspectieven
- Kop: "Drie perspectieven"
- Drie kaarten met de drie symbolen en de tekststijl uit `app/page.tsx`, alle drie in dezelfde groene stijl:
  - Koers: "28 vragen in zeven thema's, voor directie en bestuur."
  - Controle: "Verdieping op 25 organisatievermogens, met management en proceseigenaren."
  - Groei: alleen het label "Binnenkort". Geen beschrijving, geen verwijzing naar Polaris of een ontwikkelpad.
- Geen duur of tijdsindicatie, geen uitleg over de relatie tussen de perspectieven.

### Blok 4 — Zo ziet de uitkomst eruit.
Kop: "Zo ziet de uitkomst eruit." Gelaagd:
- Zichtbaar: de bestuurlijke stand met de score per thema; drie spiegelkaarten; onder een eigen subkop "Controle: de diagnosekaart" de heatmap (25 subthema's × 4 PDCA-fasen) met dummy-gegevens.
- Spiegelkaarten (korte tekst, maximaal twee zinnen, elk beginnend met "Volgens de antwoorden"):
  1. Label "Governance & Eigenaarschap", kop "Afwegingen rusten op personen". Schrijf de tekst zelf, consistent met de dataset, en neem hem op in het Resultaat ter beoordeling.
  2. Label "Waarde, Lifecycle & Investeringen", kop "Investeringen worden vooral op de huidige behoefte beoordeeld", tekst: "Volgens de antwoorden is de bijdrage van bedrijfsmiddelen aan de doelen slechts voor een deel in beeld. Investeringskeuzes kijken vooral naar de huidige behoefte en aanschafkosten; toekomstige mogelijkheden en beperkingen blijven grotendeels buiten beeld."
  3. Label "Betrouwbaarheid & Continuïteit", kop "De uitvoering is de stabiele basis". Schrijf de tekst zelf, consistent met de dataset, en neem hem op in het Resultaat ter beoordeling.
- Uitklapbaar, standaard dicht, met `<details>` en de samenvatting "Meer onderbouwing": "Antwoorden per vraag", "Spreiding per thema" en "Antwoordverdeling". Toetsenbordbediening moet werken (focus zichtbaar, Enter/Spatie).
- Controle-radar met zes assen: alleen in een `<details>` "Ontwikkeldomeinen", en alleen als hij overeenkomt met de huidige Controle-UI in `~/dev/compass` (zoek de component, controleer de assen). Komt hij niet overeen of vind je hem niet, laat hem dan weg en meld dat in het Resultaat.
- Onderschrift bij elk voorbeeldscherm: "Voorbeeld met fictieve gegevens · beeld van één respondent, onderbouwd in het begeleide gesprek."
- Conclusie en spiegelkaarten zijn vaste illustraties bij déze dataset. Zet dat als opmerking in `voorbeeld-data.ts` en voeg een controle toe die de build laat falen als kaart 1 en 2 niet bij de twee laagste thema's horen, of kaart 3 niet bij het hoogste thema.

### Blok 5 — Waarom dit anders is.
Kop: "Waarom dit anders is." Drie korte punten:
1. "Elke vraag vraagt een uitspraak. Overslaan kan niet. Onvoldoende zicht op een onderwerp is zelf een signaal: de consultant onderzoekt samen met u waarom."
2. Begeleid door een consultant in gesprekken met directie en management; geen zelftest. Schrijf maximaal twee zinnen.
3. "Compass staat los van onze andere instrumenten en kan concluderen dat software niet de eerste stap is."

### Blok 6 — Afsluiting
- Kop: "Wilt u weten waar uw organisatie staat?"
- Tekst: "Een eerste gesprek laat zien of Compass bij uw situatie past."
- Knop: "Plan een gesprek" (naar `/contact`).

## Verwijderen van de huidige pagina
De statistiekenrij (15+, 28, 100, 7), de drie probleemsecties, "fundamenteel verschil", "Wat Compass oplevert" en "Na de diagnose". Haal de claims 15+/100/7 sectoren ook uit title, description, og-tags en JSON-LD van deze pagina.

## Meta
- Meta description: "Compass is een begeleide diagnose van bestuurlijke grip voor asset-intensieve organisaties."
- Title en og-tags in dezelfde lijn, zonder verboden claims.

## Regel
Elk element (conclusie, radar, stand, scorelijst, kaart, heatmap) komt maximaal één keer op de pagina voor.

## Acceptatiecriteria
1. `npm run build` slaagt, inclusief de spiegelkaart-controle. Test de controle ook negatief (tijdelijk een kaart verwisselen, build moet falen, daarna terugzetten).
2. Alle afgeleide waarden uit de tabel hierboven worden berekend en gecontroleerd op de ongeronde waarden (2,25 / 3,25 / 2,00 / 2,75 / 2,00 / 2,50 / 3,00; totaal 2,536; 14 van 28; 2/12/11/3/0). De pagina toont Koers-waarden met één decimaal volgens de afrondingsregel van de app: 2,3 / 3,3 / 2,0 / 2,8 / 2,0 / 2,5 / 3,0, totaal 2,5 (Vervolg 1, punt 4).
3. De hero toont alleen kernconclusie en radar.
4. Geen element staat twee keer op de pagina.
5. Alle `<details>` zijn standaard dicht en met het toetsenbord te bedienen. (Vervalt na Vervolg 1, punt 5: er staan geen `<details>` meer op de pagina.)
6. Zichtbare tekst (exclusief voorbeeldschermen) ligt rond 350 woorden. Meld het werkelijke aantal.
7. De pagina bevat niets van de verboden lijst (duur, "AI", klantnamen, uitroeptekens, 15+/100/7 sectoren, "bewezen"). Controleer met een zoekopdracht op de gebouwde HTML en meld het resultaat.
8. Controleer breedtes 390, 768, 1440 en 1920 px: geen horizontale scroll, containerbreedte gelijk aan de rest van de site, schermen leesbaar op 390 px.
9. Alleen `/compass` en de nieuwe componenten zijn gewijzigd. Controleer met `git diff --stat` ten opzichte van `rebrand/merk-op-live`.
10. Branch gepusht. Geef de preview-URL.

## Uitvoering
1. Maak de branch, lees de bron in `~/dev/compass`, bouw, test lokaal (`npm run dev -- --port 4322`, poort 4321 is bezet).
2. Commit in logische stappen, push, controleer dat de Cloudflare preview werkt.
3. Merge niet. Open geen PR.

## Vervolg 1 — van rapport naar marketingpagina

1. Hero: donker vlak wordt Compass-forest `#1A4A35` (productkleur, Brand Guidelines §9.6), met het donkere Compass-logo uit TASK-012. Dit overschrijft de eerdere keuze voor `#071A30` in de hero. Controleer contrast van alle tekst en knoppen (WCAG AA) en meld het resultaat. Andere donkere vlakken op de pagina blijven zoals ze zijn.
2. CLAUDE.md: pas de regel "Het enige donkere vlak is `#071A30`" aan naar: "Het enige donkere vlak van de site zelf is `#071A30` (`--aw-deep`), exact, zonder varianten of tolerantie. Een productpagina mag in haar hero de productkleur uit Brand Guidelines §9.6 gebruiken (Compass `#1A4A35`, Atlas en Relicore zoals nu). Verder geen uitzonderingen."
3. Blok 3 herschrijven:
   - Kop: "Begin bij het bestuur. Ga dan de organisatie in."
   - Koers: titel "Waar staat het bestuur?", regel "Voor directie en bestuur."
   - Controle: titel "Waar zit het in de organisatie?", regel "Verdieping met management en proceseigenaren."
   - Groei: alleen "Binnenkort".
   - Symbolen en groene stijl blijven. Geen getallen (geen 28, geen 25, geen "zeven"), geen duur.
4. Koers-waarden met één decimaal overal waar ze getoond worden (radar-labels, score per thema, hero, totaal). Gebruik de afrondingsregel van de app. Bereken en controleer op de ongeronde waarden; alleen de weergave wordt afgerond. Verwacht: 2,3 / 3,3 / 2,0 / 2,8 / 2,0 / 2,5 / 3,0, totaal 2,5. De build-controle op de spiegelkaarten blijft op ongeronde waarden werken. Pas de acceptatiecriteria in het taakbestand hierop aan.
5. Blok 4 inkorten: verwijder alle `<details>`-blokken ("Meer onderbouwing": Antwoorden per vraag, Spreiding per thema, Antwoordverdeling) en de bijbehorende componenten als ze nergens anders gebruikt worden. Blijven: score per thema (compact), de drie spiegelkaarten en "Controle: de diagnosekaart". Controleer dat de heatmapcellen ook zonder kleur te lezen zijn (cijfer of niveaulabel); zo niet, voeg dat toe.
6. Het onderschrift "Voorbeeld met fictieve gegevens · beeld van één respondent, onderbouwd in het begeleide gesprek." vervalt overal. De organisatienaam "Voorbeeldorganisatie" blijft zichtbaar in elk voorbeeldscherm waar de app een organisatienaam toont.
7. Zichtbare tekst opnieuw tellen (met en zonder spiegelkaarten) en rapporteren. Geen tekst toevoegen om bij te vullen.
8. Acceptatie: build slaagt, inclusief de negatieve test van de spiegelkaart-controle; verboden lijst nog steeds 0 treffers; alleen `/compass`, de componenten, CLAUDE.md en het taakbestand gewijzigd; geen horizontale scroll op 390, 768, 1440 en 1920 px; screenshots in `tasks/screenshots/TASK-013/` (niet committen).
9. Resultaat aanvullen met: commits, preview-URL, woordtelling, contrastresultaat hero, en wat je niet kon uitvoeren.

## Resultaat

**Branch:** `content/compass-pagina`, afgesplitst van `rebrand/merk-op-live` (8c8a13b). Niet gemerged, geen PR.

**Commits:**
- `b1e1de3` taakbestand
- `9c353cc` voorbeeldschermen als statische Astro-componenten in `src/components/compass-voorbeeld/`, met één databestand en de spiegelkaart-controle
- `8897bd4` `/compass` herschreven in zes blokken
- plus de commit met dit Resultaat

**Preview:**
- Branch: https://content-compass-pagina.assetwize-website.pages.dev/compass/ (werkelijke URL, gelijk aan de verwachte)
- Commit `8897bd4`: https://859f502e.assetwize-website.pages.dev/compass/
- Cloudflare-check geslaagd; de pagina geeft 200 en toont de nieuwe inhoud.

**Bron:** `~/dev/compass`, alleen gelezen. Overgenomen uit:
- `components/report/KoersZoneA.tsx`: stand, radar en score per thema
- `KoersZoneB.tsx`: opmaak van de spiegelkaarten
- `KoersBijlage.tsx`: antwoorden per vraag, spreiding, antwoordverdeling
- `L2ReportView.tsx`, Visual E: de diagnosekaart
- `components/landing/LandingParts.tsx` en `components/brand/PerspectiveIcons.tsx`: kaarten en symbolen
- `lib/maturityContract.ts`: rekenregels en niveaulabels
- `lib/labels/taxonomy.ts` en `levelDescriptions.ts`: namen en niveaubeschrijving
- `data/l1/L1_questions.csv` en `L1_answer_options.csv`: vraag- en antwoordteksten, letterlijk

### Thema-toewijzing

De drie voorwaarden gelden al in de volgorde van de app. Ik heb geen rijen verplaatst.

| Thema | Naam | Antwoorden | Score |
|---|---|---|---|
| T1 | Risico, Veiligheid & Compliance | 2, 2, 3, 2 | 2,25 |
| T2 | Betrouwbaarheid & Continuïteit | 3, 4, 3, 3 | 3,25 |
| T3 | Waarde, Lifecycle & Investeringen | 1, 2, 3, 2 | 2,00 |
| T4 | Besluitvorming & Stuurinformatie | 3, 2, 3, 3 | 2,75 |
| T5 | Governance & Eigenaarschap | 2, 2, 1, 3 | 2,00 |
| T6 | Toekomstvastheid & Verandervermogen | 4, 2, 2, 2 | 2,50 |
| T7 | Organisatie, Mensen & Uitvoerbaarheid | 3, 3, 2, 4 | 3,00 |

De berekende waarden op de pagina:
- totaal 2,54, niveau 2 · Fragmentarisch
- 14 van 28 antwoorden op niveau 1–2
- verdeling 2 / 12 / 11 / 3 / 0
- relatief sterk: Betrouwbaarheid & Continuïteit (3,25)

Alles klopt met de controlewaarden.

### Zelf geschreven teksten (ter beoordeling)

- **Spiegelkaart 1, Governance & Eigenaarschap, "Afwegingen rusten op personen":** "Volgens de antwoorden is eindverantwoordelijkheid niet overal helder en hanteren afdelingen verschillende uitgangspunten voor besluiten over bedrijfsmiddelen. Afwegingen hangen daardoor af van wie erbij betrokken is, en de gevolgen van strategische plannen worden vaak pas later duidelijk."
  - Gebaseerd op de gekozen antwoorden V17 (2), V18 (2), V19 (1) en V20 (3).
- **Spiegelkaart 3, Betrouwbaarheid & Continuïteit, "De uitvoering is de stabiele basis":** "Volgens de antwoorden leveren de belangrijkste bedrijfsmiddelen meestal voorspelbaar de prestaties die nodig zijn en worden belangrijke afspraken betrouwbaar nagekomen. Kwetsbaar blijven enkele kritieke werkzaamheden en gepland werk dat door onverwacht werk wordt verdrongen."
  - Gebaseerd op V5 (3), V6 (4), V7 (3) en V8 (3).
- **Blok 5, punt 2:** "Een consultant begeleidt de diagnose in gesprekken met directie en management. Compass is geen zelftest: de uitkomst wordt samen besproken en onderbouwd."

### Controle-radar: weggelaten

De Controle-UI heeft geen radar met zes assen. De radar "Ontwikkeldomeinen" in `L2ReportView.tsx` (Visual F) heeft tien assen (D1–D10):
- Governance, Organisatie, Informatie, Engineering, Risico
- Betrouwbaarheid, Uitvoering, Ketenregie, Financieel, Strategische toekomst

Hij gebruikt bovendien blauw (#378ADD). Daarom is hij niet opgenomen.

### Spiegelkaart-controle

- **Werking:** `voorbeeld-data.ts` gooit bij de build een fout als:
  - kaart 1 en 2 niet de twee laagste thema's zijn
  - kaart 3 niet het hoogste thema is
  - de grens niet eenduidig is (gelijke score)
- **Negatieve test:** kaart 1 (T5) en kaart 3 (T2) tijdelijk verwisseld. De build faalde met exit 1: "spiegelkaart 1 (T2) hoort niet bij de twee laagste thema's (T3, T5); spiegelkaart 3 (T5) hoort niet bij het hoogste thema (T2)". Daarna teruggezet; de build slaagt weer.

### Acceptatiecriteria

1. `npm run build` slaagt. De negatieve test staat hierboven.
2. De afgeleide waarden kloppen; zie de tabel.
3. De hero toont alleen de kernconclusie en het themaprofiel (radar met legenda van de themanamen).
4. **Elk element staat één keer op de pagina:**
   - conclusie en radar in de hero
   - stand en scorelijst in Blok 4
   - spiegelkaarten en heatmap één keer
   - één radar-SVG en één diagnosekaart-tabel
5. **`<details>`:** alle 8 zijn standaard dicht ("Meer onderbouwing" en de 7 thema's daarbinnen).
   - Getest met het toetsenbord: Tab bereikt de samenvatting, de focusrand is zichtbaar (2 px #048192), Enter opent en Spatie sluit.
6. **Woordtelling:**
   - Zichtbare tekst buiten de voorbeeldschermen: **253 woorden**. Dat is inclusief de vier zichtbare onderschriften (52 woorden), en exclusief header en footer.
   - De spiegelkaarten tellen als voorbeeldscherm (123 woorden). Tel je die mee, dan is het 376.
   - De pagina ligt daarmee onder de ±350. Ik heb geen tekst toegevoegd om dat aan te vullen.
7. **Verboden lijst:** gezocht in de gebouwde `dist/compass/index.html`, in de zichtbare tekst en de meta-tags. Overal 0 treffers:
   - `\bAI\b` (ook in de ruwe HTML)
   - `!`, `15+`, `\b100\b`, `sector`/`sectoren`, `bewezen`, Syngenta, Enkhuizen
   - duur- en tijdswoorden (duur, uur, minuut, dag, week, maand, jaar, kwartaal)
8. **Breedtes:**
   - 390, 768, 1440 en 1920 px: geen horizontale scroll, met alle `<details>` dicht en ook open.
   - Container op 1440 px: 1152 px, gelijk aan `/` en `/atlas`.
   - Op 390 px staan de vier PDCA-waarden van de diagnosekaart onder de naam. De kleinste tekst is 10 px (assenlabels en kolomkoppen, zoals in de app).
   - Screenshots lokaal in `tasks/screenshots/TASK-013/`, niet gecommit.
9. **`git diff --stat rebrand/merk-op-live`:** alleen `src/pages/compass/index.astro`, de tien nieuwe bestanden in `src/components/compass-voorbeeld/` en dit taakbestand.
10. Branch gepusht; preview hierboven.

### Afwijkingen

- **Hero op `#071A30`:** in plaats van forest `#1A4A35`, omdat `#071A30` het enige donkere vlak is. Het logo (`compass-donker.svg`, TASK-012) staat daarmee nu op het vlak waarvoor het donkere logo bedoeld is.
- **Twee decimalen:** de scores staan met twee decimalen (2,25 en 2,54), zoals de opdracht vraagt. De app toont één decimaal (besluit 30-10). De cellen van de diagnosekaart tonen één decimaal zoals de app, maar met een komma in plaats van een punt.
- **Huisregels voor gewichten:** gewicht 600 alleen voor eyebrows in hoofdletters met 0,12 em. Waar de app 600 gebruikt voor cijfers in rondjes en badges, staat nu 500; de spatiëring van 0,14 em is 0,12 em geworden.
- **Kop van het bestuurlijk oordeel:** de regel "Eén respondent · zelfevaluatie" uit de app is weggelaten. Die botst met "geen zelftest", en het onderschrift zegt al dat het om één respondent gaat.
- **Antwoorden per vraag:**
  - Het themagemiddelde per regel is weggelaten, zodat er geen tweede scorelijst ontstaat.
  - De knop "Alles openen" is weggelaten, want die vraagt client-side JavaScript.
  - Een toelichting van de respondent is er niet: de dummydata heeft geen toelichtingen.
- **Kernconclusie:** het label is "Wat de antwoorden samen laten zien", zoals de opdracht vraagt. In de app is dat de kop van zone B; het label van de kernconclusie is daar "Kernconclusie · spiegel van bestuurbaarheid".
- **Spiegelkaarten:**
  - Ze hebben de opmaak van de patroonkaarten uit zone B, met de themanaam als label.
  - De kaarten staan onder het zonelabel "Koers · Bestuurlijke spiegel", zonder de h2 "Wat de antwoorden samen laten zien", omdat dat label al bij de kernconclusie staat.
- **Perspectiefkaarten:**
  - Alleen het label en de opgegeven tekst; de vraagregel uit de app ("Doen we de juiste dingen?") is weggelaten.
  - De tekst staat op 14 px in plaats van 13.
  - "Binnenkort" heeft de stijl van het badge "Gepland" uit de app.
- **Diagnosekaart:** de groepering per thema en de volgorde (zwakste thema eerst) zijn zoals in de app. De Controle-antwoorden per PDCA-fase zijn dummy-invoer in `voorbeeld-data.ts`, in lijn met de Koers-dataset.
- **Testpoort:** lokaal getest op poort 4323. Poort 4322 is bezet door je eigen dev-server van `atlas-ui-review`, die ik heb laten draaien.

### Open vragen

1. **Stoplichtkleuren:** de diagnosekaart gebruikt de stoplichtkleuren van de app (rood, oranje, groen; `scoreColor`/`scoreBg`). De Koers-bijlage gebruikt bewust geen stoplichtkleuren. Houden zo, of naar de groene niveauschaal?
2. **Woordtelling:** 253 woorden ligt onder de ±350. Is dat akkoord, of wil je ergens tekst bij?
3. **Spiegelkaarten 1 en 3:** graag je beoordeling van de teksten hierboven.

### Resultaat Vervolg 1

**Commits** op `content/compass-pagina` (nieuwe commits, geen force-push):
- `2f3cb30` taakbestand en CLAUDE.md
- `00ed6f4` pagina en componenten
- plus de commit met dit Resultaat

**Preview:** https://content-compass-pagina.assetwize-website.pages.dev/compass/ (commit `00ed6f4`: https://f9f1fcd8.assetwize-website.pages.dev/compass/). Cloudflare-check: geslaagd; de preview toont de nieuwe hero op forest en het nieuwe blok 3.

**1. Hero op Compass-forest `#1A4A35`** (`bg-forest-700`), met `compass-donker.svg` uit TASK-012. Contrast volgens WCAG 2.1 AA:

| Element | Contrast | Eis | Uitslag |
|---|---|---|---|
| H1, wit | 10,12:1 | 3:1 (grote tekst) | voldoet |
| Eyebrow `#C8EED8` (12 px, 600) | 8,04:1 | 4,5:1 | voldoet |
| Subtekst wit 65 % (18 px) | 5,33:1 | 4,5:1 | voldoet |
| Knop "Plan een gesprek": `#1A4A35` op wit | 10,12:1 | 4,5:1 | voldoet |
| Idem, hover op `#EDF4F0` | 9,06:1 | 4,5:1 | voldoet |
| Knopvlak wit tegen de hero | 10,12:1 | 3:1 (niet-tekst) | voldoet |
| Knop "Bekijk Compass live": wit 80 % | 7,15:1 | 4,5:1 | voldoet |
| Rand van die knop, wit 60 % | 4,79:1 | 3:1 (niet-tekst) | voldoet |

- Voor de aanpassing faalden de knopranden op de 3:1 voor niet-tekst:
  - de groene knop `#2D6A4F` had 1,58:1 tegen de hero
  - de rand van de tweede knop (wit 30 %) had 2,32:1
- Om die reden is de primaire knop nu wit met forest-tekst en is de rand van de tweede knop 60 % wit (hover: 100 %). De tekst van beide knoppen voldeed al.
- Het voorbeeldscherm in de hero is wit met de app-kleuren en staat los van het forest-vlak.
- De andere donkere vlakken (footer `#071A30`) zijn ongewijzigd.

**2. CLAUDE.md:** de regel over het donkere vlak is vervangen door de opgegeven tekst.

**3. Blok 3:**
- Kop: "Begin bij het bestuur. Ga dan de organisatie in."
- De kaarten hebben titel en regel zoals opgegeven. De titel heeft de stijl van de vraagregel in de app (15 px, 500).
- Groei toont alleen "Binnenkort". Er staan geen getallen in.

**4. Eén decimaal:** `fmt1` rondt af met `round1()` van de app (`Math.round(v * 10) / 10`), daarna komma.
- Getoond: 2,3 / 3,3 / 2,0 / 2,8 / 2,0 / 2,5 / 3,0, totaal 2,5 en "Relatief sterk: … (3,3)". Gecontroleerd in de gebouwde HTML.
- Berekening, niveaubepaling en spiegelkaart-controle werken op de ongeronde waarden.
- De radar toont op de assen themanummers, zoals de app; de waarden staan in het `aria-label`, nu met één decimaal.
- Acceptatiecriterium 2 is aangepast en criterium 5 vervalt.

**5. Blok 4:**
- `Onderbouwing.astro` (alle `<details>`) is verwijderd. In de gebouwde HTML staan 0 `<details>`.
- Met de componenten zijn ook de nu ongebruikte vraag- en antwoordteksten, de spreiding, `NIVEAU_LABEL` en `NIVEAU_RAMP`/`NIVEAU_TEKST` uit de data en stijl verwijderd.
- Blijven: het bestuurlijk oordeel (stand en score per thema), de drie spiegelkaarten en de diagnosekaart.
- De stand heb ik laten staan, omdat punt 4 het totaal nog als getoonde waarde noemt.
- De heatmapcellen tonen altijd het cijfer (bijv. "2,0") en hebben een `aria-label` met fase en cijfer. Ze zijn dus zonder kleur te lezen; toevoegen was niet nodig.

**6. Onderschrift en organisatienaam:**
- Het onderschrift staat nergens meer (0 keer in de HTML) en `Onderschrift.astro` is verwijderd.
- In de app toont alleen zone A (Bestuurlijk oordeel) een organisatienaam. Kernconclusie en radar in de hero komen ook uit zone A. Daarom heeft het heroscherm nu dezelfde kop "Koers · Bestuurlijk oordeel / Voorbeeldorganisatie".
- De spiegel (zone B) en de diagnosekaart tonen in de app geen organisatienaam, en hier ook niet.

**7. Woordtelling** (zichtbare tekst in `main`, zonder header en footer):
- Zonder voorbeeldschermen: **210 woorden**.
- Met de spiegelkaarten erbij (inclusief zonelabel en themalabels): **343 woorden**.
- Er is geen tekst toegevoegd.

**8. Acceptatie:**
- **Build en controle:** de build slaagt. Negatieve test herhaald: met kaart 1 (T5) en kaart 3 (T2) verwisseld faalt de build met exit 1 en dezelfde melding. Na terugzetten slaagt hij weer.
- **Verboden lijst:** 0 treffers in zichtbare tekst en `<head>` (zelfde zoekpatronen als hierboven).
- **Gewijzigde bestanden:** `git diff --stat rebrand/merk-op-live` toont alleen `CLAUDE.md`, `src/pages/compass/index.astro`, `src/components/compass-voorbeeld/` (nu acht bestanden) en dit taakbestand.
- **Breedtes:** geen horizontale scroll op 390, 768, 1440 en 1920 px; de container is 1152 px vanaf 1440, gelijk aan de rest van de site.
- **Screenshots:** `tasks/screenshots/TASK-013/vervolg1-compass-*.png`, niet gecommit.

**Niet uitgevoerd:** niets. Opmerkingen:
- De radar heeft geen waardelabels op de assen; zie punt 4.
- Lokaal getest op poort 4323, omdat 4322 bezet is door de dev-server van `atlas-ui-review`.
