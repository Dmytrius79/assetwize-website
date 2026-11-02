# TASK-013 — Compass-pagina (definitief)

## Doel
`/compass` is een korte, scherpe marketingpagina met de echte Compass-schermen als bewijs van wat de uitkomst is. Herkenning ontstaat uit de vraagstukken (investeringen onderbouwen, risico's afwegen, verantwoordelijkheden verduidelijken, afspraken laten werken), niet uit het steeds benoemen van "het bestuur". Alleen `/compass` verandert, plus CLAUDE.md (punt 2 hieronder).

## Uitgangspunten
- Branch `content/compass-pagina` (gebaseerd op `rebrand/merk-op-live`). Preview: `https://content-compass-pagina.assetwize-website.pages.dev/compass/`.
- Verboden op de pagina: elke vorm van duur of tijdsindicatie, het woord "AI", klantnamen, uitroeptekens, de claims "15+", "100" en "7 sectoren", het woord "bewezen". Geen getallen als 28 of 25 in de lopende tekst.
- Geen element (conclusie, radar, stand, kaart, heatmap) staat twee keer op de pagina.
- Bron alleen lezen: `~/dev/compass`. Statische Astro-componenten in `src/components/compass-voorbeeld/`, alle data in `voorbeeld-data.ts`. Afgeleide waarden worden berekend uit de antwoorden met de rekenregels van de app.
- Het zes-assen- of dimensiepaneel en de Controle-radar ("Ontwikkeldomeinen": tien assen, blauw in de app) worden niet opgenomen.

## Kleur en CLAUDE.md
1. Hero: donker vlak is Compass-forest `#1A4A35` (productkleur, Brand Guidelines §9.6), met het donkere Compass-logo uit TASK-012. Controleer contrast (WCAG AA) van alle tekst en knoppen in de hero en meld het resultaat. Alle drie de perspectieven staan in dezelfde groene stijl als de app (besluit Dimitry 30-10). Pas niets aan op basis van §9.6 voor Controle; die afwijking wordt apart in Notion vastgelegd.
2. CLAUDE.md: vervang de regel "Het enige donkere vlak is `#071A30`..." door: "Het enige donkere vlak van de site zelf is `#071A30` (`--aw-deep`), exact, zonder varianten of tolerantie. Een productpagina mag in haar hero de productkleur uit Brand Guidelines §9.6 gebruiken (Compass `#1A4A35`, Atlas en Relicore zoals nu). Verder geen uitzonderingen."

## Dummy-data
Organisatie "Voorbeeldorganisatie", zichtbaar in elk voorbeeldscherm waar de app een organisatienaam toont. Zeven thema's in de vaste volgorde van de app. Antwoordniveaus per thema (4 vragen, 28 totaal):

| Thema (volgorde app) | Antwoorden | Ongeronde score |
|---|---|---|
| T1 | 2, 2, 3, 2 | 2,25 |
| T2 | 3, 4, 3, 3 | 3,25 |
| T3 | 1, 2, 3, 2 | 2,00 |
| T4 | 3, 2, 3, 3 | 2,75 |
| T5 | 2, 2, 1, 3 | 2,00 |
| T6 | 4, 2, 2, 2 | 2,50 |
| T7 | 3, 3, 2, 4 | 3,00 |

Ongeronde controlewaarden: totaal 71 van 28 antwoorden, gemiddelde 2,54; 14 van 28 antwoorden op niveau 1–2; niveauverdeling 1 t/m 5: 2/12/11/3/0. T3 en T5 zijn "Waarde, Lifecycle & Investeringen" en "Governance & Eigenaarschap" (de toewijzing in de app klopte al), T2 is "Betrouwbaarheid & Continuïteit".
Weergave: alle Koers-waarden met één decimaal (radar-labels, score per thema, hero, totaal), met de afrondingsregel van de app. Verwacht: 2,3 / 3,3 / 2,0 / 2,8 / 2,0 / 2,5 / 3,0, totaal 2,5. Berekeningen en de build-controle blijven op ongeronde waarden.

## Opbouw en tekst (letterlijk)

### Blok 1 — Hero
- Eyebrow: "Compass · diagnose van assetmanagement"
- H1: "Processen ingericht. Maar werkt het ook in de praktijk?"
- Subtekst: "Compass maakt zichtbaar waar de samenhang ontbreekt tussen keuzes, verantwoordelijkheden en uitvoering rondom bedrijfsmiddelen. In begeleide gesprekken met directie en management onderzoeken we wat goed werkt, waar het vastloopt en welke besluiten nodig zijn."
- Knoppen: "Plan een gesprek" (`/contact`) en "Bekijk Compass live" (`https://compass.assetwize.nl`). Controleer eerst of die URL een bruikbare productomgeving of publieke startpagina opent (HTTP-status en inhoud). Opent hij alleen een inlogmuur of fout, gebruik dan "Bekijk Compass" en meld dat in het Resultaat.
- Rechts, compact, alleen twee elementen: kernconclusie en themaprofiel (radar, zeven thema's). Kernconclusie, label uit de app ("Wat de antwoorden samen laten zien"), kop: "Volgens de antwoorden werkt de uitvoering overwegend goed, maar hangen keuzes af van wie erbij betrokken is." Geen stand, geen scorelijst, geen extra lopende tekst.

### Blok 2 — Herkent u dit?
- Kop: "Herkent u dit?"
- Tabel "Wat er ligt" | "Wat daarmee nog niet geregeld is":
  - onderhoudsprocessen en een CMMS | eigenaarschap voor assets
  - KPI-rapportage | risico's waar daadwerkelijk op wordt gestuurd
  - investeringsplannen | een afweging waarom juist deze prioriteit
  - verbeterprogramma's | een gedeelde taal tussen directie en techniek

### Blok 3 — Van overzicht naar inzicht
Kop: "Van overzicht naar inzicht". Drie kaarten met de drie symbolen en de stijl uit `app/page.tsx`, alle drie groen, elk met vraag en één regel:
- Koers: "Waar is meer grip nodig?" / "Maakt zichtbaar hoe keuzes over bedrijfsmiddelen, risico's en investeringen worden onderbouwd en waar samenhang ontbreekt."
- Controle: "Wat werkt goed en waar loopt het vast?" / "Onderzoekt hoe verantwoordelijkheden, informatie en processen in de praktijk functioneren, samen met management en proceseigenaren."
- Groei: alleen het label "Binnenkort", visueel gelijk aan de app.
Geen doelgroep per kaart, geen getallen, geen duur, geen uitleg over de onderlinge relatie.

### Blok 4 — Zo ziet de uitkomst eruit.
Kop: "Zo ziet de uitkomst eruit." Zichtbaar:
- De score per thema, compact (één decimaal).
- Drie spiegelkaarten (label, kop, tekst):
  1. "Governance & Eigenaarschap" / "Keuzes hangen af van wie erbij betrokken is." / "Volgens de antwoorden is eindverantwoordelijkheid niet overal helder en hanteren afdelingen verschillende uitgangspunten voor besluiten over bedrijfsmiddelen. De gevolgen van strategische plannen worden vaak pas later duidelijk."
  2. "Waarde, Lifecycle & Investeringen" / "Investeringen worden vooral op de huidige behoefte beoordeeld" / "Volgens de antwoorden is de bijdrage van bedrijfsmiddelen aan de doelen slechts voor een deel in beeld. Investeringskeuzes kijken vooral naar de huidige behoefte en aanschafkosten; toekomstige mogelijkheden en beperkingen blijven grotendeels buiten beeld."
  3. "Betrouwbaarheid & Continuïteit" / "De dagelijkse uitvoering werkt overwegend goed." / "Volgens de antwoorden leveren de belangrijkste bedrijfsmiddelen meestal voorspelbaar de prestaties die nodig zijn en worden belangrijke afspraken betrouwbaar nagekomen. Kwetsbaar blijven enkele kritieke werkzaamheden en gepland werk dat door onverwacht werk wordt verdrongen."
- Subkop "Controle: uittreksel van de diagnosekaart" met de heatmap als uittreksel van acht rijen. Selecteer acht representatieve rijen uit de bestaande fictieve dataset. Behoud de waarden ongewijzigd en toon zowel sterke als zwakke onderdelen. Het uittreksel hoeft het Koers-beeld niet te bevestigen, maar mag het niet tegenspreken (groepeert de app subthema's onder thema's, laat dan de rijen van Governance en Waarde niet uitsluitend sterk scoren). Cellen moeten zonder kleur leesbaar zijn (cijfer of niveaulabel). Legenda: gebruik op de website een beschrijvende legenda ("hogere score", "middelste score", "lagere score", of de kleuren van de app als die dat zijn), geen oordeel als "Groen is op orde". Registreer het verschil met de app in het Resultaat voor de app-backlog.
- Geen uitklapblokken, geen onderschrift "Voorbeeld met fictieve gegevens"; de naam "Voorbeeldorganisatie" blijft zichtbaar in de schermen.
- Een opmerking in `voorbeeld-data.ts` dat conclusie en kaarten vaste illustraties bij déze dataset zijn, en een build-controle die faalt als kaart 1 en 2 niet bij de twee laagste thema's horen of kaart 3 niet bij het hoogste.
- Verwijder de eerder gebouwde `<details>`-componenten (Antwoorden per vraag, Spreiding per thema, Antwoordverdeling) als ze nergens anders gebruikt worden.

### Blok 5 — Zo werkt de diagnose.
Kop: "Zo werkt de diagnose." Drie korte punten:
1. "Elke vraag krijgt een antwoord. Is er onvoldoende zicht op een onderwerp, dan is dat zelf een bevinding: we onderzoeken samen waar het aan ligt."
2. "Een consultant begeleidt de diagnose. Compass is geen zelftest: de uitkomst wordt samen besproken en onderbouwd."
3. "Compass staat los van onze andere instrumenten en kan concluderen dat software niet de eerste stap is."

### Blok 6 — Afsluiting
Kop "Wilt u weten waar uw organisatie staat?" Tekst "Een eerste gesprek laat zien of Compass bij uw situatie past." Knop "Plan een gesprek" (`/contact`).

## Verwijderen van de oude pagina
Statistiekenrij, de drie probleemsecties, "fundamenteel verschil", "Wat Compass oplevert", "Na de diagnose".

## Meta
Meta description: "Compass is een begeleide diagnose van grip op assetmanagement voor asset-intensieve organisaties." Title en og-tags in dezelfde lijn, zonder de verboden claims. JSON-LD van deze pagina zonder 15+/100/7 sectoren.

## Acceptatiecriteria
1. `npm run build` slaagt. De kaart-controle faalt aantoonbaar bij een tijdelijke verwisseling (negatieve test), daarna teruggezet.
2. Alle weergegeven Koers-waarden hebben één decimaal en kloppen met de tabel (2,3 / 3,3 / 2,0 / 2,8 / 2,0 / 2,5 / 3,0, totaal 2,5); de achterliggende berekening is ongerond.
3. Hero toont alleen kernconclusie en radar; geen element dubbel.
4. Geen `<details>` of onderschrift "Voorbeeld met fictieve gegevens" meer op de pagina.
5. Verboden lijst: 0 treffers in de gebouwde HTML, ook in title, description, og en JSON-LD.
6. Tel alle voorkomens van "bestuur" en "bestuurlijk" in zichtbare tekst (inclusief schermen) en meld de lijst. Behoud ze alleen waar ze letterlijk uit de app komen of inhoudelijk nodig zijn.
7. Zichtbare tekst tellen, met en zonder spiegelkaarten. Niet bijvullen.
8. Contrast hero gecontroleerd; heatmapcellen zonder kleur leesbaar; geen horizontale scroll op 390, 768, 1440 en 1920 px; container even breed als de rest van de site.
9. Alleen `/compass`, de componenten, CLAUDE.md en het taakbestand gewijzigd (`git diff --stat` tegen `rebrand/merk-op-live`).
10. Screenshots in `tasks/screenshots/TASK-013/`, niet committen. Controleer ook volgorde en visuele nadruk: staat het belangrijkste (H1, conclusie, kaarten) boven de vouw en leest de pagina op 390 px in een logische volgorde?

## Resultaat run 2

**Commits** op `content/compass-pagina` (nieuwe commits, geen force-push):
- `6c4bc0d` definitieve specificatie; het resultaat van run 1 staat onderaan
- `dd44f40` pagina en componenten
- plus de commit met dit Resultaat
- CLAUDE.md had de nieuwe regel al sinds `2f3cb30` en is in deze run niet gewijzigd.

**Preview:**
- Branch: https://content-compass-pagina.assetwize-website.pages.dev/compass/
- Commit `dd44f40`: https://978e01f2.assetwize-website.pages.dev/compass/
- Cloudflare-check geslaagd; de preview toont de definitieve H1 en het uittreksel van de diagnosekaart.

**"Live"-link:** `https://compass.assetwize.nl` geeft HTTP 200 zonder redirect. Het is een publieke startpagina (title "Compass — AssetWize") met de kop "Waar heeft u grip — en waar vraagt uw organisatie aandacht?", de drie perspectieven en een knop naar de assessments of het inloggen. Er is geen inlogmuur of fout, dus de knop blijft "Bekijk Compass live".

**Woordtelling** (zichtbare tekst in `main`, zonder header en footer):
- Zonder voorbeeldschermen: **241**.
- Met de spiegelkaarten: **368**.
- Alles inclusief de schermen: **540**.
- Er is niet bijgevuld.

**Contrast hero** op `#1A4A35`: alles voldoet aan WCAG AA. Kleuren en knoppen zijn sinds Vervolg 1 ongewijzigd; alleen de teksten zijn nieuw.

| Element | Contrast | Eis |
|---|---|---|
| H1 wit | 10,12:1 | 3:1 |
| Eyebrow `#C8EED8` | 8,04:1 | 4,5:1 |
| Subtekst wit 65 % | 5,33:1 | 4,5:1 |
| "Plan een gesprek" (`#1A4A35` op wit) | 10,12:1 | 4,5:1 |
| Idem, hover op `#EDF4F0` | 9,06:1 | 4,5:1 |
| Knopvlak wit tegen de hero | 10,12:1 | 3:1 |
| "Bekijk Compass live" (wit 80 %) | 7,15:1 | 4,5:1 |
| Rand van die knop (wit 60 %) | 4,79:1 | 3:1 |

**"Bestuur" in de zichtbare tekst, inclusief schermen:** 3 keer, alle drie letterlijke zonelabels uit de app:
1. "Koers · Bestuurlijk oordeel": kop van het heroscherm (zone A, met de organisatienaam)
2. "Koers · Bestuurlijk oordeel": kop van het scherm Score per thema (zone A)
3. "Koers · Bestuurlijke spiegel": kop van de spiegelkaarten (zone B)

In de lopende tekst staat "bestuur" niet meer. In de tabel is "bestuur" vervangen door "directie", zoals de specificatie zegt.

**Controles:**
1. **Build:** slaagt. Negatieve test: met kaart 1 (T5) en kaart 3 (T2) verwisseld faalt de build met exit 1 ("spiegelkaart 1 (T2) hoort niet bij de twee laagste thema's (T3, T5); spiegelkaart 3 (T5) hoort niet bij het hoogste thema (T2)"). Daarna teruggezet; de build slaagt weer.
2. **Weergave:**
   - De score per thema toont 2,3 / 3,3 / 2,0 / 2,8 / 2,0 / 2,5 / 3,0. Afgerond met `round1()` van de app; de berekening is ongerond.
   - `voorbeeld-data.ts` controleert bij de build ook:
     - dat de weergave exact "2,3 / 3,3 / 2,0 / 2,8 / 2,0 / 2,5 / 3,0 · totaal 2,5" oplevert
     - de controlewaarden: 14 op niveau 1–2, verdeling 2/12/11/3/0, niveau 2
     - 25 rijen in de dataset en 8 in het uittreksel
3. **Hero:** toont alleen de kernconclusie en het themaprofiel. Elk element staat één keer op de pagina:
   - één radar
   - één scorelijst
   - drie spiegelkaarten
   - één diagnosekaart
   - geen stand
4. **Onderdelen weg:** 0 `<details>`, 0 onderschriften "fictieve gegevens". "Voorbeeldorganisatie" staat 2 keer, in beide zone-A-schermen.
5. **Verboden lijst:** 0 treffers in zichtbare tekst, title, description, og/twitter-meta en JSON-LD. Gezocht op:
   - `\bAI\b`, `!`, `15+`, `\b100\b`, `sector`, `bewezen`, Syngenta, Enkhuizen
   - duur- en tijdswoorden
   - `\b28\b`/`\b25\b`

   De JSON-LD is alleen het site-brede Organization-blok, zonder claims.
6. **Bestuur:** zie de lijst hierboven.
7. **Woordtelling:** zie hierboven.
8. **Contrast, heatmap en breedtes:**
   - Het contrast is gecontroleerd (zie de tabel).
   - De heatmapcellen tonen altijd het cijfer en hebben een `aria-label` met fase en cijfer, dus ze zijn zonder kleur leesbaar.
   - Geen horizontale scroll op 390, 768, 1440 en 1920 px.
   - De container is 1152 px vanaf 1440 px, gelijk aan de rest van de site.
9. **Gewijzigde bestanden:** `git diff --stat rebrand/merk-op-live` toont alleen CLAUDE.md, `src/pages/compass/index.astro`, `src/components/compass-voorbeeld/` (acht bestanden) en dit taakbestand.
10. **Screenshots:** `tasks/screenshots/TASK-013/run2-compass-*.png` (volledige pagina en vouw per breedte), niet gecommit.
    - **Boven de vouw:**
      - Op 1440×900 en 1920×1080: eyebrow, H1, subtekst, beide knoppen, kernconclusie en radar.
      - Op 768×1024: H1, knoppen en kernconclusie.
      - Op 390×844: alleen de H1. De knoppen vallen er deels onder (onderkant op 858 px), de kernconclusie volgt direct na de hero-tekst. Oorzaak is het logoblok met ruime bovenmarge, zoals op de andere productpagina's. Dat heb ik niet aangepast.
    - **Volgorde op 390 px:** logisch. H1 → kernconclusie en radar → Herkent u dit? → Van overzicht naar inzicht → Zo ziet de uitkomst eruit (score per thema, spiegelkaarten) → uittreksel van de diagnosekaart → Zo werkt de diagnose → afsluiting.

**Uittreksel diagnosekaart** (8 van de 25 rijen, waarden ongewijzigd, groepering en volgorde als in de app):

| Thema | Rij | Plannen / Uitvoeren / Controleren / Bijsturen |
|---|---|---|
| Governance & Eigenaarschap | Rollen en verantwoordelijkheden | 2 / 2 / 1 / 1 |
| Governance & Eigenaarschap | Strategische afstemming en besluitkader | 2 / 1 / 2 / 1 |
| Waarde, Lifecycle & Investeringen | Levenscyclus- en investeringsplanning | 2 / 2 / 2 / 1 |
| Waarde, Lifecycle & Investeringen | Sturing op investeringen | 3 / 2 / 1 / 2 |
| Risico, Veiligheid & Compliance | Risico's in beeld en beoordeeld | 3 / 2 / 2 / 2 |
| Besluitvorming & Stuurinformatie | Prestatierapportage en inzicht | 3 / 3 / 3 / 2 |
| Betrouwbaarheid & Continuïteit | Onderhoudsstrategie en uitvoering | 4 / 3 / 3 / 3 |
| Betrouwbaarheid & Continuïteit | Werkbeheer en uitvoering | 4 / 4 / 3 / 3 |

Governance en Waarde scoren zwak tot gemengd, Betrouwbaarheid sterk. Dat spreekt het Koers-beeld niet tegen.

**Verschillen tussen website en app (voor de app-backlog):**
1. **Legenda diagnosekaart:** de app schrijft "Toont waar de verbetercyclus consistent zwak is: rood vraagt aandacht, groen is op orde." De website toont een beschrijvende legenda met de kleuren van de app: "lagere score" (< 2,0), "middelste score" (2,0 tot 3,0), "hogere score" (≥ 3,0).
2. **"Zelfevaluatie":** de app toont in de kop van zone A "Eén respondent · zelfevaluatie". De website laat dat weg, omdat het botst met "geen zelftest".
3. **Decimalen:** twee decimalen zijn vervallen. De website toont Koers-waarden nu met één decimaal, net als de app (besluit 30-10); hier is geen verschil meer.
4. **Controle-radar:** de radar "Ontwikkeldomeinen" in de app heeft tien assen (D1–D10) en is blauw (`#378ADD`). Hij past niet bij de zes assen die eerder werden genoemd en staat niet op de website.
5. **Decimaalteken diagnosekaart:** de app toont "2.0" (`toFixed(1)`), de website "2,0".
6. **Uittreksel:** de website toont 8 van de 25 rijen; de app toont altijd alle 25.
7. **Labels Koers:** het label van de kernconclusie is in de app "Kernconclusie · spiegel van bestuurbaarheid". Op de website is het "Wat de antwoorden samen laten zien"; in de app is dat de kop van zone B.
8. **Spiegelkaarten:** in de app heeft een patroonkaart als label "{dimensie} · raakt …". Op de website is het label de themanaam.
9. **Perspectiefkaarten:** de website gebruikt eigen vragen en regels. In de app zijn dat "Doen we de juiste dingen?", "Hebben we het in de hand?" en "Wat verbeteren we als eerste?". Het badge van Groei is in de app "Gepland", op de website "Binnenkort".
10. **Kleurgebruik in de app:** de diagnosekaart gebruikt stoplichtkleuren, terwijl de Koers-bijlage bewust een groene niveauschaal zonder stoplicht gebruikt. De website volgt de app per scherm.
11. **Typografie:** gewicht 600 alleen voor eyebrows in hoofdletters met 0,12 em (huisregel van de site). In de app staat 600 ook op cijfers en badges, en heeft een deel van de eyebrows 0,14 em.

**Afwijkingen van de opdracht:**
- **Totaal 2,5 niet zichtbaar:** de specificatie noemt het totaal onder Weergave en in criterium 2, maar Blok 4 vraagt alleen de score per thema en de hero sluit de stand uit. Daarom staat het totaal nergens op de pagina. Het wordt wel berekend, en de build controleert dat de weergave 2,5 is. Wil je het totaal zichtbaar, dan kan het als één regel boven de scorelijst.
- **Radar-labels:** de radar toont op de assen themanummers, zoals de app. De waarden met één decimaal staan in het `aria-label` en in de scorelijst.
- **Groei-kaart:** label en badge "Binnenkort" in de badge-stijl van de app; zonder vraag en regel, zoals de specificatie vraagt.
- **Opgeschoond:** `BestuurlijkOordeel.astro` is vervangen door `ScorePerThema.astro`. Ongebruikte data (niveaubeschrijvingen, "relatief sterk") is uit `voorbeeld-data.ts` gehaald.
- **Testpoort:** lokaal getest op poort 4323, omdat 4322 bezet is door de dev-server van `atlas-ui-review`.

## Resultaat run 1

Resultaat van de eerste uitvoering en van Vervolg 1, ongewijzigd bewaard.

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

### Resultaat Vervolg 1 (specificatie vervallen door de definitieve versie)

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
