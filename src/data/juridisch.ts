// Letterlijk overgenomen uit de Word-documenten in Gedeelde drives/AssetWize/00-bedrijf/10-administratie/juridisch.
// Niet inhoudelijk aanpassen zonder nieuwe versie van het brondocument.
export type Blok =
  | { t: 'h1' | 'h2' | 'p'; x: string }
  | { t: 'ul' | 'ol'; items: string[] };

export const juridisch: Record<'disclaimer' | 'privacy' | 'voorwaarden', Blok[]> = {
  "disclaimer": [
    {
      "t": "h1",
      "x": "Disclaimer AssetWize"
    },
    {
      "t": "h2",
      "x": "Inhoud van de website"
    },
    {
      "t": "p",
      "x": "De inhoud van de website AssetWize.nl is uitsluitend bedoeld voor algemene informatiedoeleinden. Hoewel we streven naar de meest actuele en nauwkeurige informatie, kunnen we niet garanderen dat alle inhoud op elk moment volledig, correct of up-to-date is. Gebruik van de informatie op deze website is volledig op eigen risico. AssetWize is niet aansprakelijk voor enige schade of verlies, direct of indirect, voortvloeiend uit het gebruik van de website of de inhoud ervan."
    },
    {
      "t": "h2",
      "x": "Gebruik van de website"
    },
    {
      "t": "p",
      "x": "De informatie op AssetWize.nl is vrij toegankelijk, maar het gebruik van de website betekent dat u akkoord gaat met deze disclaimer. Wij behouden ons het recht voor om de inhoud van de website zonder voorafgaande kennisgeving te wijzigen of te verwijderen."
    },
    {
      "t": "h2",
      "x": "Links naar externe websites"
    },
    {
      "t": "p",
      "x": "Deze website kan links bevatten naar externe websites die buiten de controle van AssetWize vallen. Wij zijn niet verantwoordelijk voor de inhoud, nauwkeurigheid of het privacy beleid van deze externe sites. Het volgen van dergelijke links gebeurt op eigen risico."
    },
    {
      "t": "h2",
      "x": "Geen garantie"
    },
    {
      "t": "p",
      "x": "AssetWize biedt geen garanties, expliciet of impliciet, over de geschiktheid, betrouwbaarheid, beschikbaarheid of nauwkeurigheid van de website en de inhoud ervan. Wij kunnen niet garanderen dat de website te allen tijde foutloos of ononderbroken functioneert."
    },
    {
      "t": "h2",
      "x": "Intellectueel eigendom"
    },
    {
      "t": "p",
      "x": "Alle teksten, afbeeldingen, ontwerpen en andere inhoud op AssetWize.nl zijn eigendom van AssetWize, tenzij anders aangegeven. Het is niet toegestaan om deze te kopiëren, te reproduceren of te gebruiken zonder voorafgaande schriftelijke toestemming."
    },
    {
      "t": "h2",
      "x": "Wijzigingen"
    },
    {
      "t": "p",
      "x": "Wij behouden ons het recht voor om deze disclaimer op elk moment te wijzigen. Het is de verantwoordelijkheid van de gebruiker om deze pagina regelmatig te controleren voor eventuele updates."
    },
    {
      "t": "h2",
      "x": "Contact"
    },
    {
      "t": "p",
      "x": "Voor vragen over deze disclaimer kunt u contact met ons opnemen via info@assetwize.nl."
    },
    {
      "t": "p",
      "x": "Laatste wijziging: 15 januari 2025."
    }
  ],
  "privacy": [
    {
      "t": "h1",
      "x": "Privacyverklaring AssetWize"
    },
    {
      "t": "p",
      "x": "Bij AssetWize respecteren en beschermen we uw privacy. In deze privacyverklaring leggen we uit hoe we omgaan met uw persoonsgegevens, welke gegevens we verzamelen, waarom we deze gegevens verzamelen, en hoe we ervoor zorgen dat uw gegevens veilig blijven."
    },
    {
      "t": "h2",
      "x": "1. Verzamelde gegevens"
    },
    {
      "t": "p",
      "x": "Wij verzamelen persoonsgegevens wanneer u gebruik maakt van onze website of diensten. Dit kan zijn wanneer u een account aanmaakt, contact met ons opneemt, of zich inschrijft voor nieuwsbrieven. De gegevens die we mogelijk verzamelen zijn onder andere:"
    },
    {
      "t": "ul",
      "items": [
        "Naam",
        "E-mailadres",
        "Telefoonnummer",
        "Bedrijfsnaam (indien van toepassing)",
        "Gebruiksgegevens van onze website (IP-adres, browsertype, bezochte pagina's, enz.)"
      ]
    },
    {
      "t": "h2",
      "x": "2. Gebruik van gegevens"
    },
    {
      "t": "p",
      "x": "Wij verwerken uw gegevens voor de volgende doeleinden:"
    },
    {
      "t": "ul",
      "items": [
        "Het verstrekken van onze diensten en het beheren van uw account.",
        "Het verbeteren van onze website en diensten op basis van gebruikersgedrag en feedback.",
        "Het verzenden van nieuwsbrieven en updates over onze diensten, mits u hiervoor toestemming hebt gegeven.",
        "Het afhandelen van uw vragen of verzoeken die via chat, e-mail, telefoon of WhatsApp worden gesteld."
      ]
    },
    {
      "t": "h2",
      "x": "3. Rechtsgrond voor verwerking"
    },
    {
      "t": "p",
      "x": "Wij verwerken uw gegevens alleen als we een wettelijke basis hebben, zoals:"
    },
    {
      "t": "ul",
      "items": [
        "Uw toestemming: bijvoorbeeld wanneer u zich inschrijft voor onze nieuwsbrief.",
        "Uitvoering van een overeenkomst: bijvoorbeeld wanneer u een dienst afneemt via onze website.",
        "Wettelijke verplichtingen: bijvoorbeeld het bewaren van factuurgegevens voor belastingdoeleinden."
      ]
    },
    {
      "t": "h2",
      "x": "4. Delen van gegevens"
    },
    {
      "t": "p",
      "x": "Uw gegevens worden niet gedeeld met derden, tenzij dit noodzakelijk is voor de uitvoering van onze diensten, zoals met onze IT-leveranciers, of wanneer wij wettelijk verplicht zijn om gegevens te verstrekken."
    },
    {
      "t": "h2",
      "x": "5. Beveiliging van gegevens"
    },
    {
      "t": "p",
      "x": "AssetWize neemt de bescherming van uw gegevens serieus. We hebben passende technische en organisatorische maatregelen getroffen om uw persoonsgegevens te beveiligen tegen verlies, diefstal, onbevoegde toegang, wijziging of openbaarmaking."
    },
    {
      "t": "h2",
      "x": "6. Bewaartermijn"
    },
    {
      "t": "p",
      "x": "Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk is voor de doeleinden waarvoor ze zijn verzameld, tenzij we wettelijk verplicht zijn de gegevens langer te bewaren. Voor bijvoorbeeld facturatiegegevens hanteren wij een bewaartermijn van zeven jaar volgens de fiscale wetgeving."
    },
    {
      "t": "h2",
      "x": "7. Uw rechten"
    },
    {
      "t": "p",
      "x": "U heeft het recht om:"
    },
    {
      "t": "ul",
      "items": [
        "Inzage te vragen in uw persoonsgegevens.",
        "Uw persoonsgegevens te corrigeren of te laten verwijderen.",
        "Beperking van de verwerking van uw persoonsgegevens te verzoeken.",
        "Bezwaar te maken tegen de verwerking van uw persoonsgegevens.",
        "Uw toestemming in te trekken als de verwerking op toestemming is gebaseerd.",
        "Een klacht in te dienen bij de Autoriteit Persoonsgegevens als u van mening bent dat wij niet correct met uw gegevens omgaan."
      ]
    },
    {
      "t": "h2",
      "x": "8. Cookies"
    },
    {
      "t": "p",
      "x": "Onze website maakt gebruik van cookies om de gebruikerservaring te verbeteren en om statistieken over het gebruik van de website te verzamelen. In onze Cookieverklaring kunt u meer lezen over de specifieke cookies die we gebruiken."
    },
    {
      "t": "h2",
      "x": "9. Wijzigingen in deze privacyverklaring"
    },
    {
      "t": "p",
      "x": "Wij behouden ons het recht voor om deze privacyverklaring te wijzigen. Controleer deze pagina regelmatig om op de hoogte te blijven van eventuele wijzigingen. De datum van de laatste wijziging wordt onderaan deze verklaring vermeld."
    },
    {
      "t": "h2",
      "x": "10. Contact"
    },
    {
      "t": "p",
      "x": "Voor vragen of verzoeken met betrekking tot deze privacyverklaring kunt u contact met ons opnemen via info@assetwize.nl."
    },
    {
      "t": "p",
      "x": "Laatste wijziging: 01 september 2024."
    }
  ],
  "voorwaarden": [
    {
      "t": "h1",
      "x": "Algemene voorwaarden AssetWize"
    },
    {
      "t": "h2",
      "x": "Artikel 1. Algemeen"
    },
    {
      "t": "ol",
      "items": [
        "Deze voorwaarden zijn van toepassing op iedere aanbieding, offerte en overeenkomst tussen AssetWize, hierna te noemen: “Gebruiker”, en een Opdrachtgever waarop Gebruiker deze voorwaarden van toepassing heeft verklaard, voor zover van deze voorwaarden niet door partijen uitdrukkelijk en schriftelijk is afgeweken.",
        "De onderhavige voorwaarden zijn eveneens van toepassing op overeenkomsten met Gebruiker, voor de uitvoering waarvan door Gebruiker derden dienen te worden betrokken.",
        "De algemene voorwaarden zijn eveneens geschreven voor de medewerkers van Gebruiker en zijn directie.",
        "De toepasselijkheid van eventuele inkoop­ of andere voorwaarden van Opdrachtgever wordt uitdrukkelijk van de hand gewezen.",
        "Indien één of meerdere bepalingen in deze algemene voorwaarden op enig moment geheel of gedeeltelijk nietig zijn of vernietigd mochten worden, dan blijft het overigens in deze algemene voorwaarden bepaalde volledig van toepassing. Gebruiker en de Opdrachtgever zullen alsdan in overleg treden teneinde nieuwe bepalingen ter vervanging van de nietige of vernietigde bepalingen overeen te komen, waarbij zoveel als mogelijk het doel en de strekking van de oorspronkelijke bepalingen in acht wordt genomen.",
        "Als onduidelijkheid bestaat omtrent de uitleg van één of meerdere bepalingen van deze algemene voorwaarden, dan dient de uitleg plaats te vinden ‘naar de geest’ van deze bepalingen.",
        "Mocht zich tussen partijen een situatie voordoet die niet in deze algemene voorwaarden geregeld is, dan dient deze situatie te worden beoordeeld naar de geest van deze algemene voorwaarden.",
        "Als Gebruiker niet steeds strikte naleving van deze voorwaarden verlangt, betekent dit niet dat de bepalingen daarvan niet van toepassing zijn, of dat Gebruiker in enigerlei mate het recht zou verliezen om in andere gevallen de stipte naleving van de bepalingen van deze voorwaarden te verlangen."
      ]
    },
    {
      "t": "h2",
      "x": "Artikel 2. Offertes en aanbiedingen"
    },
    {
      "t": "ol",
      "items": [
        "Alle offertes en aanbiedingen van Gebruiker zijn vrijblijvend, tenzij in de offerte een termijn voor aanvaarding is gesteld. Indien geen aanvaardingstermijn is gesteld, kan aan de offerte of aanbieding op generlei wijze enig recht worden ontleend indien het product waarop de offerte of de aanbieding betrekking heeft in de tussentijd niet meer beschikbaar is.",
        "Gebruiker kan niet aan zijn offertes of aanbiedingen worden gehouden indien de Opdrachtgever redelijkerwijs kan begrijpen dat de offertes of aanbiedingen, dan wel een onderdeel daarvan, een kennelijke vergissing of verschrijving bevat.",
        "De in een offerte of aanbieding vermelde prijzen zijn exclusief BTW en andere heffingen van overheidswege, eventuele in het kader van de overeenkomst te maken kosten, daaronder begrepen reis- en verblijf-, verzend- en administratiekosten, tenzij anders aangegeven.",
        "Indien de aanvaarding (al dan niet op ondergeschikte punten) afwijkt van het in de offerte of de aanbieding opgenomen aanbod dan is Gebruiker daaraan niet gebonden. De overeenkomst komt dan niet overeenkomstig deze afwijkende aanvaarding tot stand, tenzij Gebruiker anders aangeeft.",
        "Een samengestelde prijsopgave verplicht Gebruiker niet tot het verrichten van een gedeelte van de opdracht tegen een overeenkomstig deel van de opgegeven prijs. Aanbiedingen of offertes gelden niet automatisch voor toekomstige orders."
      ]
    },
    {
      "t": "h2",
      "x": "Artikel 3. Contractduur; uitvoeringstermijnen, risico-overgang, uitvoering en wijziging overeenkomst; prijsverhoging"
    },
    {
      "t": "ol",
      "items": [
        "De overeenkomst tussen Gebruiker en de Opdrachtgever wordt aangegaan voor onbepaalde tijd, tenzij uit de aard van de overeenkomst anders voortvloeit of indien partijen uitdrukkelijk en schriftelijk anders overeenkomen.",
        "Is voor de uitvoering van bepaalde werkzaamheden of voor de levering van bepaalde zaken een termijn overeengekomen of opgegeven, dan is dit nimmer een fatale termijn. Bij overschrijding van een termijn dient de Opdrachtgever Gebruiker derhalve schriftelijk in gebreke te stellen. Gebruiker dient daarbij een redelijke termijn te worden geboden om alsnog uitvoering te geven aan de overeenkomst.",
        "Gebruiker zal deze overeenkomst naar beste inzicht en vermogen en overeenkomstig de eisen van goed vakmanschap uitvoeren. Een en ander op grond van de op dat moment bekende stand der wetenschap.",
        "Gebruiker heeft het recht bepaalde werkzaamheden te laten verrichten door derden. De toepasselijkheid van artikel 7:404, 7:407 lid 2 en 7:409 BW wordt uitdrukkelijk uitgesloten.",
        "Indien door Gebruiker of door Gebruiker ingeschakelde derden in het kader van de opdracht werkzaamheden worden verricht op de locatie van de Opdrachtgever of een door de Opdrachtgever aangewezen locatie, draagt de Opdrachtgever kosteloos zorg voor de door die medewerkers in redelijkheid gewenste faciliteiten.",
        "Levering geschiedt af bedrijf van Gebruiker. De Opdrachtgever is verplicht de zaken af te nemen op het moment dat deze hem ter beschikking worden gesteld. Indien de Opdrachtgever afname weigert of nalatig is met het verstrekken van informatie of instructies die noodzakelijk zijn voor de levering, dan is Gebruiker gerechtigd de zaken op te slaan voor rekening en risico van de Opdrachtgever. Het risico van verlies, beschadiging of waardevermindering gaat op de Opdrachtgever over op het moment waarop zaken aan de Opdrachtgever ter beschikking staan.",
        "Gebruiker is gerechtigd de overeenkomst in verschillende fasen uit te voeren en het aldus uitgevoerde gedeelte afzonderlijk te factureren.",
        "Indien de overeenkomst in fasen wordt uitgevoerd kan Gebruiker de uitvoering van die onderdelen die tot een volgende fase behoren opschorten totdat de Opdrachtgever de resultaten van de daaraan voorafgaande fase schriftelijk heeft goedgekeurd.",
        "De Opdrachtgever draagt er zorg voor dat alle gegevens, waarvan Gebruiker aangeeft dat deze noodzakelijk zijn of waarvan de Opdrachtgever redelijkerwijs behoort te begrijpen dat deze noodzakelijk zijn voor het uitvoeren van de overeenkomst, tijdig aan Gebruiker worden verstrekt. Indien de voor de uitvoering van de overeenkomst benodigde gegevens niet tijdig aan Gebruiker zijn verstrekt, heeft Gebruiker het recht de uitvoering van de overeenkomst op te schorten en/ of de uit de vertraging voortvloeiende extra kosten volgens de alsdan gebruikelijke tarieven aan de Opdrachtgever in rekening te brengen. De uitvoeringstermijn vangt niet eerder aan dan nadat de Opdrachtgever de gegevens aan Gebruiker ter beschikking heeft gesteld. Gebruiker is niet aansprakelijk voor schade, van welke aard ook, doordat Gebruiker is uitgegaan van door de Opdrachtgever verstrekte onjuiste en/ of onvolledige gegevens.",
        "Als tijdens de uitvoering van de overeenkomst blijkt dat het voor een behoorlijke uitvoering daarvan noodzakelijk is om deze te wijzigen of aan te vullen, dan zullen partijen tijdig en in onderling overleg tot aanpassing van de overeenkomst overgaan. Indien de aard, omvang of inhoud van de overeenkomst, al dan niet op verzoek of aanwijzing van de Opdrachtgever, van de bevoegde instanties et cetera, wordt gewijzigd en de overeenkomst daardoor in kwalitatief en/ of kwantitatief opzicht wordt gewijzigd, dan kan dit consequenties hebben voor hetgeen oorspronkelijk overeengekomen werd. Daardoor kan ook het oorspronkelijk overeengekomen bedrag worden verhoogd of verlaagd. Gebruiker zal daarvan zoveel als mogelijk vooraf prijsopgaaf doen. Door een wijziging van de overeenkomst kan voorts de oorspronkelijk opgegeven termijn van uitvoering worden gewijzigd. De Opdrachtgever aanvaardt de mogelijkheid van wijziging van de overeenkomst, daaronder begrepen de wijziging in prijs en termijn van uitvoering.",
        "Bij wijziging van de overeenkomst, daaronder begrepen een aanvulling, dan is Gebruiker gerechtigd om daaraan eerst uitvoering te geven nadat daarvoor akkoord is gegeven door de binnen Gebruiker bevoegde persoon en de Opdrachtgever akkoord is gegaan met de voor de uitvoering opgegeven prijs en andere voorwaarden, daaronder begrepen het alsdan te bepalen tijdstip waarop daaraan uitvoering gegeven zal worden. Het niet of niet onmiddellijk uitvoeren van de gewijzigde overeenkomst levert geen wanprestatie van Gebruiker op en is voor de Opdrachtgever geen grond om de overeenkomst op te zeggen of te annuleren.",
        "Zonder daarmee in gebreke te komen, kan Gebruiker een verzoek tot wijziging van de overeenkomst weigeren, indien dit in kwalitatief en/ of kwantitatief opzicht gevolg zou kunnen hebben bijvoorbeeld voor de in dat kader te verrichten werkzaamheden of te leveren zaken.",
        "Indien de Opdrachtgever in gebreke mocht komen in de deugdelijke nakoming van hetgeen waartoe hij jegens Gebruiker gehouden is, dan is de Opdrachtgever aansprakelijk voor alle schade aan de zijde van Gebruiker daardoor direct of indirect ontstaan.",
        "Indien een vast honorarium of een vaste prijs wordt overeengekomen tussen Gebruiker en Opdrachtgever, dan is Gebruiker niettemin te allen tijde gerechtigd tot verhoging van dit honorarium of deze prijs zonder dat de Opdrachtgever in dat geval gerechtigd is om de overeenkomst om die reden te ontbinden, indien de verhoging van de prijs voortvloeit uit een bevoegdheid of verplichting ingevolge de wet- of regelgeving of haar oorzaak vindt in een stijging van de prijs van grondstoffen, lonen et cetera of op andere gronden die bij het aangaan van de overeenkomst redelijkerwijs niet voorzienbaar waren.",
        "Indien de prijsstijging anders dan als gevolg van een wijziging van de overeenkomst meer bedraagt dan 10% en plaatsvindt binnen drie maanden na het sluiten van de overeenkomst, dan is uitsluitend de Opdrachtgever die een beroep toekomt op titel 5 afdeling 3 van Boek 6 BW gerechtigd de overeenkomst door een schriftelijke verklaring te ontbinden, tenzij Gebruiker alsdan alsnog bereid is om de overeenkomst op basis van het oorspronkelijk overeengekomen uit te voeren; indien de prijsverhoging voortvloeit uit een bevoegdheid of een op Gebruiker rustende verplichting ingevolge de wet; indien bedongen is dat de aflevering langer dan drie maanden na de totstandkoming van de overeenkomst zal plaatsvinden; of, bij levering van een zaak, indien is bedongen dat de aflevering langer dan drie maanden na de koop zal plaatsvinden."
      ]
    },
    {
      "t": "h2",
      "x": "Artikel 4. Opschorting, ontbinding en tussentijdse opzegging van de overeenkomst"
    },
    {
      "t": "ol",
      "items": [
        "Gebruiker is bevoegd de nakoming van de verplichtingen op te schorten of de overeenkomst te ontbinden, indien de Opdrachtgever de verplichtingen uit de overeenkomst niet, niet volledig of niet tijdig nakomt, na het sluiten van de overeenkomst Gebruiker ter kennis gekomen omstandigheden goede grond geven te vrezen dat de Opdrachtgever de verplichtingen niet zal nakomen, indien de Opdrachtgever bij het sluiten van de overeenkomst verzocht is om zekerheid te stellen voor de voldoening van zijn verplichtingen uit de overeenkomst en deze zekerheid uitblijft of onvoldoende is of indien door de vertraging aan de zijde van de Opdrachtgever niet langer van Gebruiker kan worden gevergd dat hij de overeenkomst tegen de oorspronkelijk overeengekomen condities zal nakomen.",
        "Voorts is Gebruiker bevoegd de overeenkomst te ontbinden indien zich omstandigheden voordoen welke van dien aard zijn dat nakoming van de overeenkomst onmogelijk is of indien er zich anderszins omstandigheden voordoen die van dien aard zijn dat ongewijzigde instandhouding van de overeenkomst in redelijkheid niet van Gebruiker kan worden gevergd.",
        "Indien de overeenkomst wordt ontbonden zijn de vorderingen van Gebruiker op de Opdrachtgever onmiddellijk opeisbaar. Indien Gebruiker de nakoming van de verplichtingen opschort, behoudt hij zijn aanspraken uit de wet en overeenkomst.",
        "Als Gebruiker tot opschorting of ontbinding overgaat, is hij op generlei wijze gehouden tot vergoeding van schade en kosten daardoor op enigerlei wijze ontstaan.",
        "De ontbinding aan de Opdrachtgever is toerekenbaar, dan is Gebruiker gerechtigd tot vergoeding van de schade, daaronder begrepen de kosten, daardoor direct en indirect ontstaan.",
        "Indien de Opdrachtgever zijn uit de overeenkomst voortvloeiende verplichtingen niet nakomt en deze niet-nakoming ontbinding rechtvaardigt, dan is Gebruiker gerechtigd de overeenkomst terstond en met directe ingang te ontbinden zonder enige verplichting zijnerzijds tot betaling van enige schadevergoeding of schadeloosstelling, terwijl de Opdrachtgever, uit hoofde van wanprestatie, wél tot schadevergoeding of schadeloosstelling is verplicht.",
        "Indien de overeenkomst tussentijds wordt opgezegd door Gebruiker, zal Gebruiker in overleg met de Opdrachtgever zorgdragen voor overdracht van nog te verrichten werkzaamheden aan derden. Dit tenzij de opzegging aan de Opdrachtgever toerekenbaar is. Indien de overdracht van de werkzaamheden voor Gebruiker extra kosten met zich meebrengt, dan worden deze aan de Opdrachtgever in rekening gebracht. De Opdrachtgever is gehouden deze kosten binnen de daarvoor genoemde termijn te voldoen, tenzij Gebruiker anders aangeeft.",
        "Bij liquidatie, van (aanvrage van) surséance van betaling of faillissement, van beslaglegging – indien en voor zover het beslag niet binnen drie maanden is opgeheven – ten laste van de Opdrachtgever, van schuldsanering of een andere omstandigheid waardoor de Opdrachtgever niet langer vrijelijk over zijn vermogen kan beschikken, staat het Gebruiker vrij om de overeenkomst terstond en met directe ingang op te zeggen dan wel de order of overeenkomst te annuleren, zonder enige verplichting zijnerzijds tot betaling van enige schadevergoeding of schadeloosstelling. De vorderingen van Gebruiker op de Opdrachtgever zijn in dat geval onmiddellijk opeisbaar.",
        "Indien de Opdrachtgever een geplaatste order geheel of gedeeltelijk annuleert, dan zullen de werkzaamheden die werden verricht en de daarvoor bestelde of gereedgemaakte zaken, vermeerderd met de eventuele aan- afvoer- en afleveringskosten daarvan en de voor de uitvoering van de overeenkomst gereserveerde arbeidstijd, integraal aan de Opdrachtgever in rekening worden gebracht."
      ]
    },
    {
      "t": "h2",
      "x": "Artikel 5. Overmacht"
    },
    {
      "t": "ol",
      "items": [
        "Gebruiker is niet gehouden tot het nakomen van enige verplichting jegens de Opdrachtgever indien hij daartoe gehinderd wordt als gevolg van een omstandigheid die niet is te wijten aan schuld, en noch krachtens de wet, een rechtshandeling of in het verkeer geldende opvattingen voor zijn rekening komt.",
        "Onder overmacht wordt in deze algemene voorwaarden verstaan, naast hetgeen daaromtrent in de wet en jurisprudentie wordt begrepen, alle van buitenkomende oorzaken, voorzien of niet-voorzien, waarop Gebruiker geen invloed kan uitoefenen, doch waardoor Gebruiker niet in staat is zijn verplichtingen na te komen. Werkstakingen in het bedrijf van Gebruiker of van derden daaronder begrepen. Gebruiker heeft ook het recht zich op overmacht te beroepen indien de omstandigheid die (verdere) nakoming van de overeenkomst verhindert, intreedt nadat Gebruiker zijn verbintenis had moeten nakomen.",
        "Gebruiker kan gedurende de periode dat de overmacht voortduurt de verplichtingen uit de overeenkomst opschorten. Indien deze periode langer duurt dan twee maanden, dan is ieder der partijen gerechtigd de overeenkomst te ontbinden, zonder verplichting tot vergoeding van schade aan de andere partij.",
        "Voor zover gebruiker ten tijde van het intreden van overmacht zijn verplichtingen uit de overeenkomst inmiddels gedeeltelijk is nagekomen of deze zal kunnen nakomen, en aan het nagekomen respectievelijk na te komen gedeelte zelfstandige waarde toekomt, is Gebruiker gerechtigd om het reeds nagekomen respectievelijk na te komen gedeelte separaat te factureren. De Opdrachtgever is gehouden deze factuur te voldoen als ware er sprake van een afzonderlijke overeenkomst."
      ]
    },
    {
      "t": "h2",
      "x": "Artikel 6. Betaling en incassokosten"
    },
    {
      "t": "ol",
      "items": [
        "Betaling dient steeds te geschieden binnen 14 dagen na factuurdatum, op een door Gebruiker aan te geven wijze in de valuta waarin is gefactureerd, tenzij schriftelijk anders door Gebruiker aangegeven. Gebruiker is gerechtigd om periodiek te factureren.",
        "Indien de Opdrachtgever in gebreke blijft in de tijdige betaling van een factuur, dan is de Opdrachtgever van rechtswege in verzuim. De Opdrachtgever is alsdan een rente verschuldigd van 1% per maand, tenzij de wettelijke rente hoger is, in welk geval de wettelijke rente verschuldigd is. De rente over het opeisbare bedrag zal worden berekend vanaf het moment dat de Opdrachtgever in verzuim is tot het moment van voldoening van het volledig verschuldigde bedrag.",
        "Gebruiker heeft het recht de door Opdrachtgever gedane betalingen te laten strekken in de eerste plaats in mindering van de kosten, vervolgens in mindering van de opengevallen rente en tenslotte in mindering van de hoofdsom en de lopende rente. Gebruiker kan, zonder daardoor in verzuim te komen, een aanbod tot betaling weigeren, indien de Opdrachtgever een andere volgorde voor de toerekening van de betaling aanwijst. Gebruiker kan volledige aflossing van de hoofdsom weigeren, indien daarbij niet eveneens de opengevallen en lopende rente en incassokosten worden voldaan.",
        "De Opdrachtgever is nimmer gerechtigd tot verrekening van het door hem aan Gebruiker verschuldigde. Bezwaren tegen de hoogte van een factuur schorten de betalingsverplichting niet op. De Opdrachtgever die geen beroep toekomt op afdeling 6.5.3 (de artikelen 231 tot en met 247 boek 6 BW) is evenmin gerechtigd om de betaling van een factuur om een andere reden op te schorten.",
        "Indien de Opdrachtgever in verzuim is in de (tijdige) nakoming van zijn verplichtingen, dan komen alle redelijke kosten ter verkrijging van voldoening buiten rechte voor rekening van de Opdrachtgever. Het verzuim van de Opdrachtgever die een natuurlijk persoon is, die niet handelt in de uitoefening van een beroep of bedrijf (particuliere opdrachtgever), treedt in nadat hij is aangemaand tot betaling binnen veertien dagen na de dag van aanmaning en betaling uitblijft. In de aanmaning wordt eveneens aangegeven wat de gevolgen van het uitblijven van betaling zijn. De buitengerechtelijke kosten worden berekend op basis van hetgeen in de Nederlandse incassopraktijk gebruikelijk is. Indien Gebruiker echter hogere kosten ter incasso heeft gemaakt die redelijkerwijs noodzakelijk waren en de Opdrachtgever geen natuurlijk persoon is die niet handelt in de uitoefening van een beroep of bedrijf (zakelijke opdrachtgever), komen de werkelijk gemaakte kosten voor vergoeding in aanmerking. De eventuele gemaakte gerechtelijke en executiekosten zullen eveneens op de Opdrachtgever worden verhaald. De Opdrachtgever is over de verschuldigde incassokosten eveneens rente verschuldigd."
      ]
    },
    {
      "t": "h2",
      "x": "Artikel 7. Eigendomsvoorbehoud"
    },
    {
      "t": "ol",
      "items": [
        "Het door in het kader van de overeenkomst Gebruiker geleverde blijft eigendom van Gebruiker totdat de Opdrachtgever alle verplichtingen uit de met Gebruiker gesloten overeenkomst(en) deugdelijk is nagekomen.",
        "Het door Gebruiker geleverde, dat ingevolge lid 1 onder het eigendomsvoorbehoud valt, mag niet worden doorverkocht en mag nimmer als betaalmiddel worden gebruikt. De Opdrachtgever is niet bevoegd om het onder het eigendomsvoorbehoud vallende te verpanden of op enige andere wijze te bezwaren.",
        "De Opdrachtgever dient steeds al hetgeen te doen dat redelijkerwijs van hem verwacht mag worden om de eigendomsrechten van Gebruiker veilig te stellen. Indien derden beslag leggen op het onder eigendomsvoorbehoud geleverde dan wel rechten daarop willen vestigen of doen gelden, dan is de Opdrachtgever verplicht om Gebruiker daarvan onmiddellijk op de hoogte te stellen. Voorts verplicht de Opdrachtgever zich om het onder eigendomsvoorbehoud geleverde te verzekeren en verzekerd te houden tegen brand, ontploffings- en waterschade alsmede tegen diefstal en de polis van deze verzekering op eerste verzoek aan Gebruiker ter inzage te geven. Bij een eventuele uitkering van de verzekering is Gebruiker gerechtigd tot deze penningen. Voor zoveel als nodig verbindt de Opdrachtgever zich er jegens Gebruiker bij voorbaat toe om zijn medewerking te verlenen aan al hetgeen dat in dat kader nodig of wenselijk mocht (blijken) te zijn.",
        "Voor het geval Gebruiker zijn in dit artikel aangeduide eigendomsrechten wil uitoefenen, geeft de Opdrachtgever bij voorbaat onvoorwaardelijke en niet herroepelijke toestemming aan Gebruiker en door Gebruiker aan te wijzen derden om al die plaatsen te betreden waar de eigendommen van Gebruiker zich bevinden en deze terug te nemen."
      ]
    },
    {
      "t": "h2",
      "x": "Artikel 8. Garanties, onderzoek en reclames, verjaringstermijn"
    },
    {
      "t": "ol",
      "items": [
        "De door Gebruiker te leveren zaken voldoen aan de gebruikelijke eisen en normen die daaraan op het moment van levering redelijkerwijs gesteld kunnen worden en waarvoor zij bij normaal gebruik in Nederland zijn bestemd. De in dit artikel genoemde garantie is van toepassing op zaken die bestemd zijn voor het gebruik binnen Nederland. Bij gebruik buiten Nederland dient de Opdrachtgever zelf te verifiëren of het gebruik daarvan geschikt is voor het gebruik aldaar en voldoen aan de voorwaarden die daaraan gesteld worden. Gebruiker kan in dat geval andere garantie- en andere voorwaarden stellen ter zake van de te leveren zaken of uit te voeren werkzaamheden.",
        "De in lid 1 van dit artikel genoemde garantie geldt voor een periode van 3 maanden na levering, tenzij uit de aard van het geleverde anders voortvloeit of partijen anders zijn overeengekomen. Indien de door Gebruiker verstrekte garantie een zaak betreft die door een derde werd geproduceerd, dan is de garantie beperkt tot die, die door de producent van de zaak ervoor wordt verstrekt, tenzij anders wordt vermeld.",
        "Iedere vorm van garantie komt te vervallen indien een gebrek is ontstaan als gevolg van of voortvloeit uit onoordeelkundig of oneigenlijk gebruik daarvan of gebruik na de houdbaarheidsdatum, onjuiste opslag of onderhoud daaraan door de Opdrachtgever en / of door derden wanneer, zonder schriftelijke toestemming van Gebruiker, de Opdrachtgever of derden aan de zaak wijzigingen hebben aangebracht dan wel hebben getracht aan te brengen, daaraan andere zaken werden bevestigd die daaraan niet bevestigd dienen te worden of indien deze werden ver- of bewerkt op een andere dan de voorgeschreven wijze. De Opdrachtgever komt evenmin aanspraak op garantie toe indien het gebrek is ontstaan door of het gevolg is van omstandigheden waar Gebruiker geen invloed op kan uitoefenen, daaronder begrepen weersomstandigheden (zoals bijvoorbeeld doch niet uitsluitend, extreme regenval of temperaturen) et cetera.",
        "De Opdrachtgever is gehouden het geleverde te (doen) onderzoeken, onmiddellijk op het moment dat de zaken hem ter beschikking worden gesteld respectievelijk de desbetreffende werkzaamheden zijn uitgevoerd. Daarbij behoort de Opdrachtgever te onderzoeken of kwaliteit en/of kwantiteit van het geleverde overeenstemt met hetgeen is overeengekomen en voldoet aan de eisen die partijen dienaangaande zijn overeengekomen. Eventuele zichtbare gebreken dienen binnen zeven dagen na levering schriftelijk aan Gebruiker te worden gemeld. Eventuele niet zichtbare gebreken dienen terstond, doch in ieder geval uiterlijk binnen veertien dagen, na ontdekking daarvan, schriftelijk aan Gebruiker te worden gemeld. De melding dient een zo gedetailleerd mogelijke omschrijving van het gebrek te bevatten, zodat Gebruiker in staat is adequaat te reageren. De Opdrachtgever dient Gebruiker in de gelegenheid te stellen een klacht te (doen) onderzoeken.",
        "Indien de Opdrachtgever tijdig reclameert, schort dit zijn betalingsverplichting niet op. De Opdrachtgever blijft in dat geval ook gehouden tot afname en betaling van de overigens bestelde zaken en hetgeen waartoe hij Gebruiker opdracht gegeven heeft.",
        "Indien van een gebrek later melding wordt gemaakt, dan komt de Opdrachtgever geen recht meer toe op herstel, vervanging of schadeloosstelling.",
        "Indien vaststaat dat een zaak gebrekkig is en dienaangaande tijdig is gereclameerd, dan zal Gebruiker de gebrekkige zaak binnen redelijke termijn na retourontvangst daarvan dan wel, indien retournering redelijkerwijze niet mogelijk is, schriftelijke kennisgeving ter zake van het gebrek door de Opdrachtgever, ter keuze van Gebruiker, vervangen of zorgdragen voor herstel daarvan dan wel vervangende vergoeding daarvoor aan de Opdrachtgever voldoen. In geval van vervanging is de Opdrachtgever gehouden om de vervangen zaak aan Gebruiker te retourneren en de eigendom daarover aan Gebruiker te verschaffen, tenzij Gebruiker anders aangeeft.",
        "Indien komt vast te staan dat een klacht ongegrond is, dan komen de kosten daardoor ontstaan, daaronder begrepen de onderzoekskosten, aan de zijde van Gebruiker daardoor gevallen, integraal voor rekening van de Opdrachtgever.",
        "Na verloop van de garantietermijn zullen alle kosten voor herstel of vervanging, inclusief administratie-, verzend- en voorrijkosten, aan de Opdrachtgever in rekening gebracht worden.",
        "In afwijking van de wettelijke verjaringstermijnen, bedraagt de verjaringstermijn van alle vorderingen en verweren jegens Gebruiker en de door Gebruiker bij de uitvoering van een overeenkomst betrokken derden, één jaar."
      ]
    },
    {
      "t": "h2",
      "x": "Artikel 9. Aansprakelijkheid"
    },
    {
      "t": "ol",
      "items": [
        "Indien Gebruiker aansprakelijk mocht zijn, dan is deze aansprakelijkheid beperkt tot hetgeen in deze bepaling is geregeld.",
        "Gebruiker is niet aansprakelijk voor schade, van welke aard ook, ontstaan doordat Gebruiker is uitgegaan van door of namens de Opdrachtgever verstrekte onjuiste en/ of onvolledige gegevens.",
        "Indien Gebruiker aansprakelijk mocht zijn voor enigerlei schade, dan is de aansprakelijkheid van Gebruiker beperkt tot maximaal tweemaal de factuurwaarde van de order, althans tot dat gedeelte van de order waarop de aansprakelijkheid betrekking heeft.",
        "De aansprakelijkheid van Gebruiker is in ieder geval steeds beperkt tot het bedrag der uitkering van zijn verzekeraar in voorkomend geval.",
        "Gebruiker is uitsluitend aansprakelijk voor directe schade.",
        "Onder directe schade wordt uitsluitend verstaan de redelijke kosten ter vaststelling van de oorzaak en de omvang van de schade, voor zover de vaststelling betrekking heeft op schade in de zin van deze voorwaarden, de eventuele redelijke kosten gemaakt om de gebrekkige prestatie van Gebruiker aan de overeenkomst te laten beantwoorden, voor zoveel deze aan Gebruiker toegerekend kunnen worden en redelijke kosten, gemaakt ter voorkoming of beperking van schade, voor zover de Opdrachtgever aantoont dat deze kosten hebben geleid tot beperking van directe schade als bedoeld in deze algemene voorwaarden. Gebruiker is nimmer aansprakelijk voor indirecte schade, daaronder begrepen gevolgschade, gederfde winst, gemiste besparingen en schade door bedrijfsstagnatie.",
        "De in dit artikel opgenomen beperkingen van de aansprakelijkheid gelden niet indien de schade te wijten is aan opzet of grove schuld van Gebruiker of zijn leidinggevende ondergeschikten."
      ]
    },
    {
      "t": "h2",
      "x": "Artikel 10. Vrijwaring"
    },
    {
      "t": "ol",
      "items": [
        "De Opdrachtgever vrijwaart Gebruiker voor eventuele aanspraken van derden, die in verband met de uitvoering van de overeenkomst schade lijden en waarvan de oorzaak aan andere dan aan Gebruiker toerekenbaar is. Indien Gebruiker uit dien hoofde door derden mocht worden aangesproken, dan is de Opdrachtgever gehouden Gebruiker zowel buiten als in rechte bij te staan en onverwijld al hetgeen te doen dat van hem in dat geval verwacht mag worden. Mocht de Opdrachtgever in gebreke blijven in het nemen van adequate maatregelen, dan is Gebruiker, zonder ingebrekestelling, gerechtigd zelf daartoe over te gaan. Alle kosten en schade aan de zijde van Gebruiker en derden daardoor ontstaan, komen integraal voor rekening en risico van de Opdrachtgever."
      ]
    },
    {
      "t": "h2",
      "x": "Artikel 11. Intellectuele eigendom"
    },
    {
      "t": "ol",
      "items": [
        "Gebruiker behoudt zich de rechten en bevoegdheden voor die hem toekomen op grond van de Auteurswet en andere intellectuele wet- en regelgeving. Gebruiker heeft het recht de door de uitvoering van een overeenkomst aan zijn zijde toegenomen kennis ook voor andere doeleinden te gebruiken, voor zover hierbij geen strikt vertrouwelijke informatie van de Opdrachtgever ter kennis van derden wordt gebracht."
      ]
    },
    {
      "t": "h2",
      "x": "Artikel 12. Toepasselijk recht en geschillen"
    },
    {
      "t": "ol",
      "items": [
        "Op alle rechtsbetrekkingen waarbij Gebruiker partij is, is uitsluitend het Nederlands recht van toepassing, ook indien aan een verbintenis geheel of gedeeltelijk in het buitenland uitvoering wordt gegeven of indien de bij de rechtsbetrekking betrokken partij aldaar woonplaats heeft. De toepasselijkheid van het Weens Koopverdrag wordt uitgesloten.",
        "De rechter in de vestigingsplaats van Gebruiker is bij uitsluiting bevoegd van geschillen kennis te nemen, tenzij de wet dwingend anders voorschrijft. Niettemin heeft Gebruiker het recht het geschil voor te leggen aan de volgens de wet bevoegde rechter.",
        "Partijen zullen eerst een beroep op de rechter doen nadat zij zich tot het uiterste hebben ingespannen een geschil in onderling overleg te beslechten."
      ]
    },
    {
      "t": "p",
      "x": "Opgesteld op 15 januari 2025."
    }
  ]
};
