/**
 * Voorbeelddata voor de Compass-schermen op /compass (TASK-013). Eén bron voor alle voorbeeldschermen.
 *
 * Invoer: de antwoordniveaus per vraag (Koers) en per PDCA-fase (Controle). Al het andere
 * (themascores, totaalscore, niveau, antwoorden op niveau 1–2, niveauverdeling, Controle-volgorde) wordt hieronder berekend met de rekenregels van de app (~/dev/compass:
 * lib/maturityContract.ts, components/report/KoersZoneA.tsx, L2ReportView.tsx).
 *
 * Thema-namen, subthema-namen, volgorde en niveaulabels zijn letterlijk overgenomen uit de app
 * (lib/labels/taxonomy.ts, lib/maturityContract.ts).
 *
 * Berekenen en controleren gebeurt op de ongeronde waarden; alleen de weergave rondt af (fmt1).
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

// Uittreksel van de diagnosekaart op de website: acht van de 25 rijen, waarden ongewijzigd.
// Laag (Governance), midden (Waarde) en hoog (Betrouwbaarheid), zodat het Koers-beeld niet wordt tegengesproken.
const UITTREKSEL = ["T5.1", "T3.4", "T2.5"];

// ── Vaste illustraties bij déze dataset (zie LET OP bovenaan) ────────────────
export const KERNCONCLUSIE = "Volgens de antwoorden werkt de uitvoering overwegend goed, maar hangen keuzes af van wie erbij betrokken is.";

export const SPIEGELKAARTEN: Array<{ themaId: string; kop: string; tekst: string }> = [
  {
    themaId: "T5",
    kop: "Keuzes hangen af van wie erbij betrokken is.",
    tekst: "Volgens de antwoorden is eindverantwoordelijkheid niet overal helder en hanteren afdelingen verschillende uitgangspunten voor besluiten over bedrijfsmiddelen. De gevolgen van strategische plannen worden vaak pas later duidelijk.",
  },
  {
    themaId: "T3",
    kop: "Investeringen worden vooral op de huidige behoefte beoordeeld",
    tekst: "Volgens de antwoorden is de bijdrage van bedrijfsmiddelen aan de doelen slechts voor een deel in beeld. Investeringskeuzes kijken vooral naar de huidige behoefte en aanschafkosten; toekomstige mogelijkheden en beperkingen blijven grotendeels buiten beeld.",
  },
  {
    themaId: "T2",
    kop: "De dagelijkse uitvoering werkt overwegend goed.",
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
export type Thema = { id: string; nr: number; naam: string; avg: number };

export const THEMAS: Thema[] = Object.keys(THEME_NAMES).map((id) => ({
  id,
  nr: Number(id.slice(1)),
  naam: THEME_NAMES[id],
  avg: average(KOERS_ANTWOORDEN[id]),
}));

const alleNiveaus = Object.values(KOERS_ANTWOORDEN).flat();

/** Totaalscore: gemiddelde van de themagemiddelden (themeWeightedOverall). */
export const TOTAAL = average(THEMAS.map((t) => t.avg));
export const BAND = bandFromRoundedAvg(round1(TOTAAL));
/** Niveauverdeling niveau 1 t/m 5. */
export const VERDELING = [1, 2, 3, 4, 5].map((n) => alleNiveaus.filter((x) => x === n).length);
export const AANTAL_ANTWOORDEN = alleNiveaus.length;
export const LAAG_12 = VERDELING[0] + VERDELING[1];

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

/** Uittreksel voor de website: zelfde groepering en volgorde als de volledige kaart, alleen de rijen uit UITTREKSEL. */
export const CONTROLE_UITTREKSEL = CONTROLE_THEMAS
  .map((t) => ({ ...t, subs: t.subs.filter((s) => UITTREKSEL.includes(s.code)) }))
  .filter((t) => t.subs.length > 0);

// ── Weergave ─────────────────────────────────────────────────────────────────
/** Eén decimaal met komma, afgerond met round1() van de app (TASK-013 Vervolg 1: 2,3 / 2,5). */
export const fmt1 = (v: number) => round1(v).toFixed(1).replace(".", ",");
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
  // Weergave met één decimaal moet de verwachte waarden uit TASK-013 opleveren
  const getoond = THEMAS.map((t) => fmt1(t.avg)).join(" / ") + ` · totaal ${fmt1(TOTAAL)}`;
  if (getoond !== "2,3 / 3,3 / 2,0 / 2,8 / 2,0 / 2,5 / 3,0 · totaal 2,5") fouten.push(`weergave wijkt af van TASK-013: ${getoond}`);
  if (LAAG_12 !== 14 || VERDELING.join("/") !== "2/12/11/3/0" || BAND?.levelInt !== 2) fouten.push(`controlewaarden wijken af: ${LAAG_12} op niveau 1–2, verdeling ${VERDELING.join("/")}`);
  if (AANTAL_SUBTHEMAS !== 25 || CONTROLE_UITTREKSEL.reduce((n, t) => n + t.subs.length, 0) !== 3) fouten.push("diagnosekaart: verwacht 25 rijen in de dataset en 3 in het uittreksel");
  if (fouten.length) throw new Error(`voorbeeld-data.ts: ${fouten.join("; ")}. Pas de spiegelkaarten en de kernconclusie aan de dataset aan.`);
}
