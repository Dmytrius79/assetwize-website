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
2. Alle afgeleide waarden uit de tabel hierboven kloppen met wat de pagina toont (2,25 / 3,25 / 2,00 / 2,75 / 2,00 / 2,50 / 3,00; totaal 2,54; 14 van 28; 2/12/11/3/0).
3. De hero toont alleen kernconclusie en radar.
4. Geen element staat twee keer op de pagina.
5. Alle `<details>` zijn standaard dicht en met het toetsenbord te bedienen.
6. Zichtbare tekst (exclusief voorbeeldschermen) ligt rond 350 woorden. Meld het werkelijke aantal.
7. De pagina bevat niets van de verboden lijst (duur, "AI", klantnamen, uitroeptekens, 15+/100/7 sectoren, "bewezen"). Controleer met een zoekopdracht op de gebouwde HTML en meld het resultaat.
8. Controleer breedtes 390, 768, 1440 en 1920 px: geen horizontale scroll, containerbreedte gelijk aan de rest van de site, schermen leesbaar op 390 px.
9. Alleen `/compass` en de nieuwe componenten zijn gewijzigd. Controleer met `git diff --stat` ten opzichte van `rebrand/merk-op-live`.
10. Branch gepusht. Geef de preview-URL.

## Uitvoering
1. Maak de branch, lees de bron in `~/dev/compass`, bouw, test lokaal (`npm run dev -- --port 4322`, poort 4321 is bezet).
2. Commit in logische stappen, push, controleer dat de Cloudflare preview werkt.
3. Merge niet. Open geen PR.

## Resultaat
(Door Claude Code in te vullen: branch, commits, preview-URL, woordtelling, de definitieve thema-toewijzing, de zelf geschreven teksten van spiegelkaart 1 en 3, of de Controle-radar is opgenomen of weggelaten en waarom, uitkomst van de negatieve test van de controle, eventuele afwijkingen van de opdracht en open vragen.)
