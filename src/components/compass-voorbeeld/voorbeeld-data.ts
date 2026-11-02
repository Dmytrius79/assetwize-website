/**
 * Voorbeelddata voor de Compass-schermen op /compass (TASK-013). Eén bron voor alle voorbeeldschermen.
 *
 * Invoer: de antwoordniveaus per vraag (Koers) en per PDCA-fase (Controle). Al het andere
 * (themascores, totaalscore, niveau, antwoorden op niveau 1–2, niveauverdeling, spreiding,
 * Controle-volgorde) wordt hieronder berekend met de rekenregels van de app (~/dev/compass:
 * lib/maturityContract.ts, components/report/KoersZoneA.tsx, KoersBijlage.tsx, L2ReportView.tsx).
 *
 * Thema-namen, volgorde, niveaulabels, niveaubeschrijvingen, vraagteksten en antwoordteksten zijn
 * letterlijk overgenomen uit de app (lib/labels/taxonomy.ts, lib/labels/levelDescriptions.ts,
 * data/l1/L1_questions.csv, data/l1/L1_answer_options.csv).
 *
 * LET OP: de kernconclusie en de drie spiegelkaarten zijn vaste illustraties bij déze dataset,
 * geen berekende tekst. Verandert de dataset, herschrijf ze dan. De controle onderaan laat de
 * build falen als kaart 1 en 2 niet bij de twee laagste thema's horen of kaart 3 niet bij het hoogste.
 */

export const ORGANISATIE = "Voorbeeldorganisatie";

// ── Labels uit de app ────────────────────────────────────────────────────────
export const THEME_NAMES: Record<string, string> = {
  T1: "Risico, Veiligheid & Compliance",
  T2: "Betrouwbaarheid & Continuïteit",
  T3: "Waarde, Lifecycle & Investeringen",
  T4: "Besluitvorming & Stuurinformatie",
  T5: "Governance & Eigenaarschap",
  T6: "Toekomstvastheid & Verandervermogen",
  T7: "Organisatie, Mensen & Uitvoerbaarheid",
};

export const NIVEAU_LABEL = ["", "Reactief", "Fragmentarisch", "Ingericht", "Geborgd", "Lerend"];

export const LEVEL_DESCRIPTIONS: Record<number, string> = {
  1: "Sturing volgt op incidenten; een gedeeld overzicht ontbreekt en besluiten worden per geval genomen.",
  2: "Op onderdelen ingericht, maar niet organisatiebreed; de kwaliteit hangt af van personen en verschilt per onderdeel.",
  3: "Gezamenlijke kaders, processen en overzichten zijn vastgelegd en werken in de dagelijkse praktijk.",
  4: "Werkwijzen worden consequent toegepast en getoetst; besluiten rusten aantoonbaar op actuele informatie.",
  5: "De organisatie evalueert en verbetert structureel en stuurt vooruitkijkend op veranderende omstandigheden.",
};

export const SUBTHEME_NAMES_NL: Record<string, string> = {
  "T1.1": "Risico's in beeld en beoordeeld",
  "T1.2": "Naleving en toetsing",
  "T1.3": "Weerbaarheid en continuïteitsplanning",
  "T2.1": "Onderhoudsstrategie en uitvoering",
  "T2.2": "Bewaking van betrouwbaarheid en prestaties",
  "T2.3": "Continuïteit van operationele kennis",
  "T2.4": "Afstemming bedrijfsvoering en onderhoud",
  "T2.5": "Werkbeheer en uitvoering",
  "T3.1": "Portfolio- en waardebeheer",
  "T3.2": "Levenscyclus- en investeringsplanning",
  "T3.3": "Koppeling van financiële en assetinformatie",
  "T3.4": "Sturing op investeringen",
  "T4.1": "Informatiebeheer en datakwaliteit",
  "T4.2": "Prestatierapportage en inzicht",
  "T4.3": "Datagedreven besluitvorming",
  "T4.4": "Basis van assetinformatie",
  "T5.1": "Rollen en verantwoordelijkheden",
  "T5.2": "Strategische afstemming en besluitkader",
  "T5.3": "Sturing richting belanghebbenden",
  "T6.1": "Beheer van wijzigingen",
  "T6.2": "Strategische scenarioplanning",
  "T6.3": "Flexibiliteit en aanpasbaarheid van bedrijfsmiddelen",
  "T7.1": "Competenties en capaciteit",
  "T7.2": "Cultuur en gedrag",
  "T7.3": "Continu verbeteren",
};

// ── Koers-vragen en antwoordopties (niveau 1 t/m 5), uit de app ─────────────
const VRAGEN: Record<string, Array<{ id: string; tekst: string; antwoorden: string[] }>> = {
  T1: [
    { id: "T1_Q1", tekst: "Hebben we een actueel beeld van de belangrijkste risico’s rond onze bedrijfsmiddelen?", antwoorden: [
      "We missen een gezamenlijk risico-overzicht. Belangrijke risico’s worden vaak pas duidelijk wanneer iets misgaat.",
      "Afdelingen kennen een deel van de risico’s, maar hun inzichten zijn niet samengebracht in een actueel overzicht.",
      "De belangrijkste risico’s zijn gezamenlijk in beeld. Veranderingen worden nog niet overal tijdig verwerkt.",
      "We gebruiken een actueel, gezamenlijk risico-overzicht consequent bij belangrijke besluiten.",
      "We toetsen ook of het overzicht belangrijke risico’s mist. De directie volgt de uitkomsten en laat tekortkomingen herstellen.",
    ] },
    { id: "T1_Q2", tekst: "Kunnen we onderbouwen welke risico’s we bewust accepteren, waarom en wie daarover beslist?", antwoorden: [
      "Bij belangrijke risico’s is niet duidelijk welke we bewust accepteren, waarom of door wie dat is besloten.",
      "Sommige risicokeuzes zijn besproken en onderbouwd. Dit hangt vooral af van de betrokken personen.",
      "Voor belangrijke risicokeuzes leggen we de afweging en besluitnemer vast. Opvolging en heroverweging zijn nog wisselend.",
      "We kunnen belangrijke risicokeuzes uitleggen. Bevoegde personen besluiten en bewaken de afgesproken voorwaarden.",
      "We toetsen ook of geaccepteerde risico’s nog verantwoord zijn. De directie bewaakt dat veranderde omstandigheden tot heroverweging leiden.",
    ] },
    { id: "T1_Q3", tekst: "Handelen we tijdig om voorzienbare incidenten te voorkomen of hun gevolgen te beperken?", antwoorden: [
      "We reageren vooral nadat iets misgaat. Eerdere signalen leiden zelden tot tijdige maatregelen.",
      "Sommige teams grijpen vroeg in, vooral dankzij de ervaring en inzet van individuele medewerkers.",
      "Voor belangrijke risico’s hebben we preventieve maatregelen afgesproken. Uitvoering en controle zijn nog niet overal consequent.",
      "We nemen tijdig passende maatregelen en controleren hun werking. Waar voorkomen niet lukt, beperken we de gevolgen.",
      "We toetsen ook of onze preventie voldoende werkt. De directie volgt belangrijke resterende risico’s en de verbetering van maatregelen.",
    ] },
    { id: "T1_Q4", tekst: "Kunnen we aantonen dat we onze bedrijfsmiddelen veilig en volgens de geldende eisen beheren?", antwoorden: [
      "We missen overzicht van belangrijke eisen en kunnen onvoldoende onderbouwen of ons beheer veilig is en aan die eisen voldoet.",
      "Voor enkele onderdelen kunnen we veilig beheer en naleving onderbouwen. Elders ontbreken overzicht, controles of opvolging.",
      "De belangrijkste eisen en controles zijn geregeld. Bewijs of opvolging van tekortkomingen is nog niet overal op orde.",
      "We kunnen veilig beheer en naleving onderbouwen met actuele controles en opvolging. Bekende kritieke tekortkomingen zijn opgelost of aantoonbaar beheerst.",
      "We toetsen ook of eisen en controles nog passend zijn. De directie bewaakt belangrijke afwijkingen en de verbetering van onze aanpak.",
    ] },
  ],
  T2: [
    { id: "T2_Q1", tekst: "Leveren onze belangrijkste bedrijfsmiddelen voorspelbaar de prestaties die we nodig hebben?", antwoorden: [
      "Onverwachte uitval en wisselende prestaties bepalen onze planning. We kunnen onvoldoende aangeven waarop de organisatie kan rekenen.",
      "Sommige bedrijfsmiddelen presteren voorspelbaar. Bij andere moeten we regelmatig improviseren om de bedrijfsvoering voort te zetten.",
      "De belangrijkste prestaties zijn meestal voorspelbaar. Bij enkele belangrijke bedrijfsmiddelen blijven we kwetsbaar voor onverwachte afwijkingen.",
      "We kunnen doorgaans rekenen op de benodigde prestaties. We bewaken afwijkingen en beperken hun gevolgen voor de bedrijfsvoering.",
      "We toetsen ook of prestaties voorspelbaar blijven bij veranderend gebruik. De directie volgt trends en laat de belangrijkste kwetsbaarheden aanpakken.",
    ] },
    { id: "T2_Q2", tekst: "Kunnen we onze leverings- en dienstverleningsafspraken waarmaken met de beschikbare bedrijfsmiddelen?", antwoorden: [
      "We kunnen onvoldoende onderbouwen of onze bedrijfsmiddelen de gemaakte afspraken aankunnen. Uitval dwingt ons vaak tot noodoplossingen.",
      "Sommige afspraken zijn goed onderbouwd. Andere moeten we regelmatig aanpassen doordat bedrijfsmiddelen niet beschikbaar zijn.",
      "We houden bij belangrijke afspraken rekening met beschikbaarheid. Bij enkele kritieke afspraken blijven er onverwachte tekorten.",
      "We komen belangrijke afspraken betrouwbaar na en kunnen onderbouwen dat onze bedrijfsmiddelen daarvoor voldoende beschikbaar zijn.",
      "We toetsen ook of afspraken haalbaar blijven bij veranderende vraag. De directie gebruikt die inzichten bij toezeggingen en capaciteitskeuzes.",
    ] },
    { id: "T2_Q3", tekst: "Kan het belangrijkste werk doorgaan als een medewerker met onmisbare kennis wegvalt?", antwoorden: [
      "Belangrijk werk hangt af van enkele personen. Als zij wegvallen, kunnen anderen het onvoldoende overnemen.",
      "We kennen de belangrijkste persoonsafhankelijkheden. Overdracht of vervanging is slechts op enkele plekken geregeld.",
      "Voor belangrijk werk regelen we overdracht en vervanging. Bij enkele kritieke werkzaamheden blijven we kwetsbaar.",
      "We hebben getoetst dat belangrijk werk kan worden overgenomen, binnen de grenzen die onze bedrijfsvoering nodig heeft.",
      "We toetsen ook nieuwe persoonsafhankelijkheden. De directie volgt resterende kwetsbaarheden en laat overdracht en vervanging waar nodig verbeteren.",
    ] },
    { id: "T2_Q4", tekst: "Houden we grip op gepland beheer en onderhoud wanneer onverwacht werk tussendoor komt?", antwoorden: [
      "Problemen bepalen vrijwel dagelijks welk werk wordt uitgevoerd. Belangrijk gepland werk blijft vaak liggen.",
      "Sommige teams plannen vooruit. Of hun planning standhoudt, hangt vooral af van personen en beschikbare tijd.",
      "We plannen belangrijk werk en volgen achterstanden. Onverwacht werk verdringt nog regelmatig noodzakelijke werkzaamheden zonder duidelijke afweging.",
      "We voeren belangrijk werk volgens afspraak uit. Bij verstoringen wegen we prioriteiten af en bewaken we achterstanden en risico’s.",
      "We toetsen ook waarom plannen niet worden gehaald. De directie bewaakt dat terugkerende knelpunten in planning, afstemming of capaciteit worden aangepakt.",
    ] },
  ],
  T3: [
    { id: "T3_Q1", tekst: "Weten we welke bedrijfsmiddelen voldoende bijdragen aan onze doelen en welke achterblijven?", antwoorden: [
      "We nemen aan dat onze bedrijfsmiddelen waarde leveren, maar hebben onvoldoende zicht op hun bijdrage aan onze doelen.",
      "Voor enkele bedrijfsmiddelen kennen we de bijdrage en kosten. Een samenhangend beeld ontbreekt.",
      "Voor de belangrijkste bedrijfsmiddelen beoordelen we bijdrage, kosten en risico’s. Het beeld is nog niet overal compleet.",
      "We hebben een samenhangend beeld van de waardebijdrage en gebruiken dit bij belangrijke keuzes over ons bezit en gebruik.",
      "We toetsen ook of de waardebijdrage aansluit op veranderende doelen. De directie laat prioriteiten bijstellen wanneer middelen onvoldoende bijdragen.",
    ] },
    { id: "T3_Q2", tekst: "Weten we wat uitgesteld onderhoud nu en later kan kosten en welke risico’s het oplevert?", antwoorden: [
      "We stellen onderhoud uit zonder de mogelijke extra kosten en risico’s voldoende in beeld te hebben.",
      "Bij enkele uitstelbesluiten bespreken we de gevolgen. De onderbouwing hangt vooral af van individuele medewerkers.",
      "We schatten de gevolgen van belangrijk uitstel volgens een vaste aanpak in. Langetermijnkosten of risico’s blijven soms onduidelijk.",
      "We wegen kortetermijnbesparing, toekomstige kosten en risico’s consequent af. We leggen vast wanneer een uitstelbesluit opnieuw wordt beoordeeld.",
      "We vergelijken ook geraamde en werkelijke gevolgen. De directie gebruikt de uitkomsten om achterstanden, prioriteiten en budgetten bij te sturen.",
    ] },
    { id: "T3_Q3", tekst: "Wegen we bij investeringen mee wat onze bedrijfsmiddelen later moeten kunnen?", antwoorden: [
      "We kijken vooral naar de huidige behoefte en aanschafkosten. Toekomstige mogelijkheden en beperkingen blijven grotendeels buiten beeld.",
      "Bij sommige investeringen kijken we vooruit. Dit hangt vooral af van de betrokken personen of het project.",
      "Bij belangrijke investeringen beoordelen we toekomstige behoeften. De uitkomsten worden nog niet bij ieder besluit voldoende meegewogen.",
      "We vergelijken relevante alternatieven op toekomstige prestaties, kosten en risico’s. We kunnen uitleggen welke mogelijkheden en beperkingen we accepteren.",
      "We toetsen ook eerdere investeringskeuzes aan werkelijke resultaten. De directie bewaakt dat lessen doorwerken in nieuwe investeringen.",
    ] },
    { id: "T3_Q4", tekst: "Hebben we onderbouwd wat nodig is om onze bedrijfsmiddelen ook later van waarde te laten zijn?", antwoorden: [
      "We merken achteruitgang meestal pas wanneer storingen of kosten oplopen. Een onderbouwd beeld van toekomstige geschiktheid ontbreekt.",
      "Voor enkele bedrijfsmiddelen volgen we toestand en kosten. Toekomstige beperkingen zijn slechts gedeeltelijk in beeld.",
      "We volgen de ontwikkeling van belangrijke bedrijfsmiddelen. De vertaling naar tijdige maatregelen en plannen is nog wisselend.",
      "We onderbouwen welke maatregelen nodig zijn om toekomstige waarde en prestaties te ondersteunen, en bewaken de uitvoering.",
      "We toetsen ook of onze verwachtingen nog kloppen. De directie laat plannen aanpassen aan nieuwe inzichten en veranderende organisatiedoelen.",
    ] },
  ],
  T4: [
    { id: "T4_Q1", tekst: "Hebben we betrouwbare informatie om belangrijke investeringsbesluiten over onze bedrijfsmiddelen te onderbouwen?", antwoorden: [
      "We kunnen onvoldoende onderbouwen of de informatie voor belangrijke investeringen juist, actueel en bruikbaar is.",
      "Voor sommige investeringen controleren we de informatie. De kwaliteit wisselt per onderwerp of betrokken medewerker.",
      "Voor belangrijke investeringen verzamelen en controleren we informatie volgens een vaste aanpak. Er blijven hiaten in kwaliteit of volledigheid.",
      "De informatie voor belangrijke investeringen is actueel en passend gecontroleerd. We maken ontbrekende gegevens en onzekerheden zichtbaar.",
      "We toetsen ook of gebruikte informatie achteraf betrouwbaar bleek. De directie volgt wezenlijke tekortkomingen en laat de informatievoorziening verbeteren.",
    ] },
    { id: "T4_Q2", tekst: "Zien we verslechterende prestaties op tijd om nog te kunnen handelen?", antwoorden: [
      "We merken belangrijke prestatieverliezen meestal pas nadat de gevolgen zich voordoen.",
      "Sommige medewerkers herkennen vroege signalen. De organisatie heeft nog geen vaste manier om die signalen samen te brengen.",
      "We volgen belangrijke prestaties volgens een vaste aanpak. Relevante afwijkingen bereiken verantwoordelijken nog niet altijd op tijd.",
      "We herkennen belangrijke verslechteringen doorgaans vroeg genoeg en geven verantwoordelijken tijdig zicht op de mogelijke gevolgen.",
      "We onderzoeken ook gemiste of late signalen. De directie bewaakt dat signalering en overdracht van informatie waar nodig verbeteren.",
    ] },
    { id: "T4_Q3", tekst: "Weten we welke aannames achter belangrijke cijfers zitten en hoe onzeker die cijfers zijn?", antwoorden: [
      "We weten onvoldoende welke aannames achter belangrijke cijfers zitten en kunnen hun betrouwbaarheid daardoor niet beoordelen.",
      "Enkele aannames zijn bekend. We beoordelen hun onderbouwing en invloed nog niet volgens een vaste aanpak.",
      "Belangrijke aannames worden vastgelegd en beoordeeld. Hun gevolgen voor de uitkomsten zijn nog niet overal duidelijk.",
      "We maken belangrijke aannames en onzekerheden inzichtelijk, inclusief wat een andere aanname voor het besluit kan betekenen.",
      "We toetsen ook aannames aan werkelijke uitkomsten. De directie bewaakt dat verouderde uitgangspunten worden aangepast en belangrijke onzekerheden zichtbaar blijven.",
    ] },
    { id: "T4_Q4", tekst: "Gebruiken we beschikbare informatie om belangrijke keuzes te onderbouwen en zo nodig bij te sturen?", antwoorden: [
      "We rapporteren informatie, maar belangrijke keuzes worden meestal zonder die informatie gemaakt.",
      "Bij sommige keuzes gebruiken we informatie. Dit hangt vooral af van personen of afdelingen.",
      "We gebruiken informatie bij belangrijke keuzes. Opvolging en terugkijken op de gevolgen zijn nog niet overal consequent geregeld.",
      "We kunnen laten zien hoe informatie belangrijke keuzes beïnvloedt en bewaken de opvolging van die besluiten.",
      "We toetsen ook of informatie bruikbaar was en besluiten het beoogde effect hadden. De directie laat tekortkomingen in informatiegebruik aanpakken.",
    ] },
  ],
  T5: [
    { id: "T5_Q1", tekst: "Is duidelijk wie eindverantwoordelijk is en ingrijpt als belangrijke prestaties of risico’s tekortschieten?", antwoorden: [
      "Bij belangrijke problemen is onduidelijk wie de regie neemt. Problemen blijven liggen of worden tussen afdelingen doorgeschoven.",
      "Voor sommige problemen is een verantwoordelijke bekend. Bij afdelingsgrenzen of vastlopende oplossingen ontstaat vaak onduidelijkheid.",
      "Voor belangrijke problemen zijn verantwoordelijken en escalatieafspraken bepaald. Die afspraken werken nog niet in alle situaties.",
      "De eindverantwoordelijke bewaakt de oplossing. Als deze uitblijft, wordt tijdig op het afgesproken hogere niveau ingegrepen.",
      "We toetsen ook waar regie of escalatie tekortschiet. De directie bewaakt dat verantwoordelijkheden en ingrijpen in de praktijk blijven werken.",
    ] },
    { id: "T5_Q2", tekst: "Nemen we belangrijke besluiten over bedrijfsmiddelen volgens gezamenlijke uitgangspunten?", antwoorden: [
      "Belangrijke besluiten hangen vooral af van personen, afdelingen of de urgentie van het moment. Gezamenlijke uitgangspunten ontbreken.",
      "Sommige afdelingen gebruiken vaste uitgangspunten. Die verschillen en worden niet consequent toegepast.",
      "We hebben gezamenlijke uitgangspunten voor belangrijke besluiten. De toepassing en uitleg van afwijkingen zijn nog wisselend.",
      "We gebruiken de gezamenlijke uitgangspunten consequent en kunnen afwijkende besluiten vanuit de omstandigheden uitleggen.",
      "We toetsen ook of de uitgangspunten passende besluiten ondersteunen. De directie laat ze bijstellen op basis van ervaringen en veranderende doelen.",
    ] },
    { id: "T5_Q3", tekst: "Wegen we bij strategische plannen mee wat onze bedrijfsmiddelen mogelijk maken en beperken?", antwoorden: [
      "We maken strategische plannen zonder de gevolgen voor bedrijfsmiddelen voldoende te beoordelen. Beperkingen worden vaak pas later duidelijk.",
      "Bij enkele strategische plannen kijken we naar bedrijfsmiddelen. Dit hangt vooral af van de betrokken personen.",
      "Bij belangrijke plannen beoordelen we mogelijkheden en beperkingen. Die inzichten wegen nog niet bij ieder besluit voldoende mee.",
      "De directie weegt mogelijkheden, beperkingen en benodigde investeringen consequent mee en kan uitleggen welke gevolgen zij accepteert.",
      "We toetsen ook of strategie en bedrijfsmiddelen op elkaar blijven aansluiten. De directie stuurt plannen bij wanneer omstandigheden of mogelijkheden veranderen.",
    ] },
    { id: "T5_Q4", tekst: "Kunnen we aan toezichthouders laten zien hoe belangrijke risicoafwegingen tot stand kwamen?", antwoorden: [
      "We kunnen belangrijke risicoafwegingen niet goed reconstrueren. Bij vragen moeten we achteraf uitzoeken wat is besloten en waarom.",
      "Sommige afwegingen zijn te reconstrueren. De onderbouwing is verspreid of afhankelijk van de herinnering van betrokkenen.",
      "Voor belangrijke afwegingen leggen we de onderbouwing vast. De bewijsstukken zijn nog niet overal compleet of actueel.",
      "We kunnen belangrijke risicoafwegingen tijdig reconstrueren en onderbouwen tegenover toezichthouders, met de gebruikte informatie, eisen en besluiten.",
      "We toetsen ook of onze verantwoording controleerbaar blijft. De directie laat tekortkomingen in vastlegging en onderbouwing herstellen.",
    ] },
  ],
  T6: [
    { id: "T6_Q1", tekst: "Onderzoeken we tijdig hoe externe veranderingen de waarde en bruikbaarheid van onze bedrijfsmiddelen kunnen raken?", antwoorden: [
      "Externe veranderingen verrassen ons. We onderzoeken hun gevolgen voor onze bedrijfsmiddelen pas wanneer problemen ontstaan.",
      "Sommige medewerkers volgen externe ontwikkelingen. De gevolgen voor onze bedrijfsmiddelen worden slechts incidenteel onderzocht.",
      "We onderzoeken relevante ontwikkelingen volgens een vaste aanpak. De gevolgen worden nog niet altijd tijdig vertaald naar keuzes.",
      "We brengen mogelijke gevolgen tijdig in beeld en gebruiken die bij keuzes over onderhoud, aanpassing en investeringen.",
      "We toetsen ook verwachtingen en scenario’s aan nieuwe inzichten. De directie laat toekomstplannen bijstellen wanneer aannames niet meer passen.",
    ] },
    { id: "T6_Q2", tekst: "Kunnen we onze bedrijfsmiddelen op tijd aanpassen, vervangen of anders inzetten als onze organisatie verandert?", antwoorden: [
      "We ontdekken beperkingen te laat en hebben geen uitvoerbare alternatieven. Noodzakelijke veranderingen lopen daardoor vast.",
      "Aanpassen of vervangen lukt soms, dankzij improvisatie. Benodigde tijd, kosten en afhankelijkheden zijn vooraf onvoldoende duidelijk.",
      "Voor belangrijke bedrijfsmiddelen kennen we opties en doorlooptijden. De uitvoering is nog niet overal voldoende voorbereid.",
      "We hebben passende opties voorbereid en kunnen noodzakelijke veranderingen binnen de voor onze organisatie benodigde termijn uitvoeren.",
      "We toetsen ook of opties en voorbereidingen bruikbaar blijven. De directie laat knelpunten in ons vermogen om te veranderen aanpakken.",
    ] },
    { id: "T6_Q3", tekst: "Beoordelen en beheersen we vóór belangrijke wijzigingen de nieuwe of grotere risico’s?", antwoorden: [
      "We voeren wijzigingen door zonder vooraf voldoende naar nieuwe risico’s te kijken. Problemen blijken pas tijdens of na de uitvoering.",
      "Bij sommige wijzigingen beoordelen medewerkers vooraf risico’s. Een vaste aanpak en consequente opvolging ontbreken.",
      "We beoordelen risico’s van belangrijke wijzigingen en spreken maatregelen af. Uitvoering en controle zijn nog niet overal consequent.",
      "We controleren vóór ingebruikname of de afgesproken voorwaarden zijn vervuld en de belangrijke veranderingsrisico’s voldoende worden beheerst.",
      "We toetsen ook of eerdere beoordelingen volledig genoeg waren. De directie bewaakt dat lessen doorwerken in volgende wijzigingen.",
    ] },
    { id: "T6_Q4", tekst: "Kunnen we bij onverwachte verstoringen snel en beheerst handelen om belangrijke activiteiten voort te zetten of te herstellen?", antwoorden: [
      "Bij verstoringen is onduidelijk wie leidt en wat voorrang krijgt. Ongecoördineerd handelen vergroot de gevolgen.",
      "Ervaren medewerkers lossen sommige verstoringen op. De reactie hangt sterk af van wie beschikbaar is.",
      "Voor belangrijke verstoringen zijn verantwoordelijkheden en herstelafspraken geregeld. Samenwerking en uitvoering zijn nog niet altijd voldoende snel.",
      "We reageren gecoördineerd en beperken gevolgen. Belangrijke activiteiten worden voortgezet of hersteld binnen de grenzen die we vooraf hebben afgesproken.",
      "We toetsen ook met oefeningen of praktijkervaring of onze reactie werkt. De directie laat knelpunten in besluitvorming, samenwerking en herstel aanpakken.",
    ] },
  ],
  T7: [
    { id: "T7_Q1", tekst: "Is de benodigde kennis beschikbaar om onze bedrijfsmiddelen verantwoord te beheren en goede besluiten te nemen?", antwoorden: [
      "We missen essentiële kennis of betrouwbare toegang daartoe. We kunnen belangrijke werkzaamheden of adviezen onvoldoende beoordelen.",
      "Voor sommige onderwerpen is kennis beschikbaar. Toegang, overdracht en eigen beoordelingsvermogen zijn nog kwetsbaar.",
      "We weten welke kennis nodig is en organiseren toegang en overdracht. De beschikbaarheid is nog niet overal voldoende zeker.",
      "Essentiële kennis is tijdig beschikbaar en overdraagbaar. We behouden zelf voldoende inzicht om belangrijke werkzaamheden en adviezen te beoordelen.",
      "We toetsen ook toekomstige kennisbehoeften en afhankelijkheden. De directie laat hiaten in eigen inzicht, toegang en overdracht gericht aanpakken.",
    ] },
    { id: "T7_Q2", tekst: "Weten betrokkenen wat hun verantwoordelijkheid is, waarover ze mogen beslissen en wanneer afstemming nodig is?", antwoorden: [
      "Betrokkenen weten onvoldoende wie het werk oppakt of mag beslissen. Taken blijven liggen of worden dubbel uitgevoerd.",
      "Binnen enkele teams zijn rollen duidelijk. Tussen teams of met externe partijen ontstaan regelmatig onduidelijkheden.",
      "Voor belangrijk werk zijn verantwoordelijkheden, bevoegdheden en afstemming afgesproken. De toepassing is nog niet overal consequent.",
      "Betrokkenen kennen hun verantwoordelijkheid en bevoegdheid en handelen ernaar. Ook bij overdrachten en samenwerking zijn de afspraken duidelijk.",
      "We toetsen ook waar de rolverdeling vastloopt. De directie bewaakt dat verantwoordelijkheden en bevoegdheden blijven passen bij het werk.",
    ] },
    { id: "T7_Q3", tekst: "Wegen leidinggevenden bij keuzes over bedrijfsmiddelen hun bijdrage aan organisatiedoelen mee, naast de kosten?", antwoorden: [
      "Gesprekken gaan vooral over directe kosten. De gevolgen voor prestaties, veiligheid of andere organisatiedoelen blijven meestal buiten beeld.",
      "Sommige leidinggevenden brengen de bredere bijdrage ter sprake. Of die meeweegt, hangt vooral van personen af.",
      "Bij belangrijke keuzes bespreken leidinggevenden kosten én bijdrage aan doelen. Onder druk vallen sommige teams terug op alleen kosten.",
      "Leidinggevenden wegen kosten en bijdrage aan doelen consequent samen af en laten dit zien in hun keuzes, ook onder budgetdruk.",
      "We toetsen ook of dit gedrag standhoudt bij lastige afwegingen. De directie bespreekt terugval en versterkt het voorbeeldgedrag.",
    ] },
    { id: "T7_Q4", tekst: "Gebruiken en delen we ervaringen om te verbeteren, ook voordat er iets ernstigs misgaat?", antwoorden: [
      "We lossen vooral directe problemen op. Oorzaken en vroege signalen leiden zelden tot blijvende verbeteringen.",
      "Enkele teams leren en verbeteren op eigen initiatief. Opvolging en het delen van lessen zijn beperkt.",
      "We bespreken verbeterkansen volgens een vaste aanpak. Uitvoering, effectcontrole en het delen van lessen zijn nog wisselend.",
      "We voeren verbeteringen uit, controleren hun effect en delen bruikbare lessen tussen teams, ook op basis van vroege signalen.",
      "We toetsen ook of ons gezamenlijke leerproces werkt. De directie laat belemmeringen in melden, opvolgen en delen aanpakken.",
    ] },
  ],
};

// ── Invoer Koers: gekozen niveau per vraag, 4 vragen per thema ───────────────
// Toewijzing (TASK-013): T3 Waarde en T5 Governance = 2,00; T2 Betrouwbaarheid = 3,25.
// De thema's staan in de app al op deze posities; er zijn geen rijen verplaatst.
const KOERS_ANTWOORDEN: Record<string, number[]> = {
  T1: [2, 2, 3, 2],
  T2: [3, 4, 3, 3],
  T3: [1, 2, 3, 2],
  T4: [3, 2, 3, 3],
  T5: [2, 2, 1, 3],
  T6: [4, 2, 2, 2],
  T7: [3, 3, 2, 4],
};

// ── Invoer Controle: gekozen niveau per PDCA-fase (Plannen, Uitvoeren, Controleren, Bijsturen) ─
const CONTROLE_ANTWOORDEN: Record<string, [number, number, number, number]> = {
  "T1.1": [3, 2, 2, 2], "T1.2": [3, 3, 2, 2], "T1.3": [2, 2, 1, 2],
  "T2.1": [4, 3, 3, 3], "T2.2": [3, 4, 3, 2], "T2.3": [3, 3, 2, 3], "T2.4": [3, 3, 3, 2], "T2.5": [4, 4, 3, 3],
  "T3.1": [2, 2, 1, 1], "T3.2": [2, 2, 2, 1], "T3.3": [2, 1, 2, 1], "T3.4": [3, 2, 1, 2],
  "T4.1": [3, 3, 2, 2], "T4.2": [3, 3, 3, 2], "T4.3": [3, 2, 2, 2], "T4.4": [3, 3, 2, 3],
  "T5.1": [2, 2, 1, 1], "T5.2": [2, 1, 2, 1], "T5.3": [2, 2, 2, 1],
  "T6.1": [3, 2, 2, 2], "T6.2": [2, 2, 2, 1], "T6.3": [3, 3, 2, 2],
  "T7.1": [3, 3, 3, 2], "T7.2": [3, 3, 2, 3], "T7.3": [3, 2, 2, 2],
};

// ── Vaste illustraties bij déze dataset (zie LET OP bovenaan) ────────────────
export const KERNCONCLUSIE = "Volgens de antwoorden kan het bestuur bouwen op de uitvoering, maar rusten de afwegingen op personen.";

export const SPIEGELKAARTEN: Array<{ themaId: string; kop: string; tekst: string }> = [
  {
    themaId: "T5",
    kop: "Afwegingen rusten op personen",
    tekst: "Volgens de antwoorden is eindverantwoordelijkheid niet overal helder en hanteren afdelingen verschillende uitgangspunten voor besluiten over bedrijfsmiddelen. Afwegingen hangen daardoor af van wie erbij betrokken is, en de gevolgen van strategische plannen worden vaak pas later duidelijk.",
  },
  {
    themaId: "T3",
    kop: "Investeringen worden vooral op de huidige behoefte beoordeeld",
    tekst: "Volgens de antwoorden is de bijdrage van bedrijfsmiddelen aan de doelen slechts voor een deel in beeld. Investeringskeuzes kijken vooral naar de huidige behoefte en aanschafkosten; toekomstige mogelijkheden en beperkingen blijven grotendeels buiten beeld.",
  },
  {
    themaId: "T2",
    kop: "De uitvoering is de stabiele basis",
    tekst: "Volgens de antwoorden leveren de belangrijkste bedrijfsmiddelen meestal voorspelbaar de prestaties die nodig zijn en worden belangrijke afspraken betrouwbaar nagekomen. Kwetsbaar blijven enkele kritieke werkzaamheden en gepland werk dat door onverwacht werk wordt verdrongen.",
  },
];

// ── Rekenregels uit de app (lib/maturityContract.ts) ─────────────────────────
export function round1(v: number): number {
  return Math.round(v * 10) / 10;
}
function average(values: number[]): number {
  return values.reduce((a, b) => a + b, 0) / values.length;
}
export function bandFromRoundedAvg(avgRounded: number): { label: string; levelInt: number } | null {
  if (avgRounded >= 1.0 && avgRounded <= 1.9) return { label: "Reactief", levelInt: 1 };
  if (avgRounded >= 2.0 && avgRounded <= 2.9) return { label: "Fragmentarisch", levelInt: 2 };
  if (avgRounded >= 3.0 && avgRounded <= 3.9) return { label: "Ingericht", levelInt: 3 };
  if (avgRounded >= 4.0 && avgRounded <= 4.4) return { label: "Geborgd", levelInt: 4 };
  if (avgRounded >= 4.5 && avgRounded <= 5.0) return { label: "Lerend", levelInt: 5 };
  return null;
}

// ── Afgeleid: Koers ──────────────────────────────────────────────────────────
export type Thema = {
  id: string;
  nr: number;
  naam: string;
  avg: number;
  spreiding: number;
  vragen: Array<{ id: string; nr: number; tekst: string; niveau: number; antwoord: string }>;
};

export const THEMAS: Thema[] = Object.keys(THEME_NAMES).map((id) => {
  const nr = Number(id.slice(1));
  const niveaus = KOERS_ANTWOORDEN[id];
  const vragen = VRAGEN[id].map((v, i) => ({
    id: v.id,
    nr: (nr - 1) * 4 + i + 1, // V1–V28, zoals vraagNr() in de app
    tekst: v.tekst,
    niveau: niveaus[i],
    antwoord: v.antwoorden[niveaus[i] - 1],
  }));
  return {
    id,
    nr,
    naam: THEME_NAMES[id],
    avg: average(niveaus),
    spreiding: Math.max(...niveaus) - Math.min(...niveaus),
    vragen,
  };
});

const alleNiveaus = THEMAS.flatMap((t) => t.vragen.map((v) => v.niveau));

/** Totaalscore: gemiddelde van de themagemiddelden (themeWeightedOverall). */
export const TOTAAL = average(THEMAS.map((t) => t.avg));
export const BAND = bandFromRoundedAvg(round1(TOTAAL));
/** Niveauverdeling niveau 1 t/m 5. */
export const VERDELING = [1, 2, 3, 4, 5].map((n) => alleNiveaus.filter((x) => x === n).length);
export const AANTAL_ANTWOORDEN = alleNiveaus.length;
export const LAAG_12 = VERDELING[0] + VERDELING[1];
export const STERKSTE = [...THEMAS].sort((a, b) => b.avg - a.avg)[0];

// ── Afgeleid: Controle (diagnosekaart) ───────────────────────────────────────
export const PDCA_STEPS = ["Plannen", "Uitvoeren", "Controleren", "Bijsturen"];

export const CONTROLE_THEMAS = Object.keys(THEME_NAMES)
  .map((id) => {
    const subs = Object.keys(CONTROLE_ANTWOORDEN)
      .filter((code) => code.split(".")[0] === id)
      .map((code) => ({ code, naam: SUBTHEME_NAMES_NL[code], pdca: CONTROLE_ANTWOORDEN[code], avg: average(CONTROLE_ANTWOORDEN[code]) }));
    return { id, naam: THEME_NAMES[id], subs, avg: average(subs.map((s) => s.avg)) };
  })
  // Zoals themesGrouped in L2ReportView: zwakste thema's eerst
  .sort((a, b) => a.avg - b.avg);

export const AANTAL_SUBTHEMAS = CONTROLE_THEMAS.reduce((n, t) => n + t.subs.length, 0);

// ── Weergave ─────────────────────────────────────────────────────────────────
/** Twee decimalen met komma (TASK-013: 2,25 / 2,54). */
export const fmt2 = (v: number) => v.toFixed(2).replace(".", ",");
export const fmt1 = (v: number) => v.toFixed(1).replace(".", ",");
export const themaNaam = (id: string) => THEME_NAMES[id] ?? id;

// ── Controle: illustraties horen bij de dataset ──────────────────────────────
// Faalt bij de build als kaart 1 en 2 niet de twee laagste thema's zijn, of kaart 3 niet het hoogste.
{
  const oplopend = [...THEMAS].sort((a, b) => a.avg - b.avg);
  const [k1, k2, k3] = SPIEGELKAARTEN;
  const laagste = [oplopend[0].id, oplopend[1].id];
  const hoogste = oplopend[oplopend.length - 1].id;
  const fouten: string[] = [];
  if (oplopend[1].avg === oplopend[2].avg) fouten.push("de twee laagste thema's zijn niet eenduidig (gelijke score op plek 2 en 3)");
  if (oplopend[oplopend.length - 1].avg === oplopend[oplopend.length - 2].avg) fouten.push("het hoogste thema is niet eenduidig");
  if (!laagste.includes(k1.themaId)) fouten.push(`spiegelkaart 1 (${k1.themaId}) hoort niet bij de twee laagste thema's (${laagste.join(", ")})`);
  if (!laagste.includes(k2.themaId) || k2.themaId === k1.themaId) fouten.push(`spiegelkaart 2 (${k2.themaId}) hoort niet bij de twee laagste thema's (${laagste.join(", ")})`);
  if (k3.themaId !== hoogste) fouten.push(`spiegelkaart 3 (${k3.themaId}) hoort niet bij het hoogste thema (${hoogste})`);
  if (fouten.length) throw new Error(`voorbeeld-data.ts: ${fouten.join("; ")}. Pas de spiegelkaarten en de kernconclusie aan de dataset aan.`);
}
