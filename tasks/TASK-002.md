# TASK-002 — Homepage inhoud

**STATUS**: DONE
**Sprint**: W1.1
**Geschatte tijd**: 2 uur

---

## Context

TASK-001 heeft de Astro structuur neergezet. De homepage is nu een lege stub.
Dit is de inhoudstaak: de homepage wordt volledig uitgewerkt.

Positionering: board-niveau. Niet operationeel, niet tooling-taal.
AssetWize is een governance-systeem voor organisaties die sturen op assets —
niet een onderhoudsoplossing.

De doelgroep voelt de spanning: eindverantwoordelijk voor assets
(kapitaal, risico, continuïteit) maar zonder betrouwbaar stuurinstrument.

Toon: direct, analytisch, geen hype. Zie stijlgids in docs/stijlgids_dimitry_v2_1.md

---

## Doel

Een volledig uitgewerkte homepage die:
- Board-niveau beslissers direct herkent en aanspreekt
- De bestuurlijke spanning benoemt — niet de operationele pijn
- Het AssetWize aanbod positioneert als governance systeem, niet als software tool
- Duidelijk maakt dat contact opnemen de volgende stap is
- Consistent is in teal/navy kleurpalet en Inter typografie


---

## Paginastructuur

```
1. Navigatie          ← al aanwezig via BaseLayout
2. Hero               ← de spanning + positionering
3. Pijnlagen          ← wat een board voelt (4 blokken)
4. Het systeem        ← wat AssetWize is en doet
5. Producten          ← RELICORE + AM Scan (kort)
6. Over Dimitry       ← expertise + vertrouwen
7. CTA                ← contact opnemen
8. Footer             ← al aanwezig via BaseLayout
```

---

## Stap 1 — Vervang src/pages/index.astro volledig

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout
  title="Asset governance — sturen op waarde, risico en continuïteit"
  description="AssetWize helpt boards en directies grip te krijgen op asset performance, risico en kapitaalallocatie via gestructureerde asset governance."
>

  <!-- ============================================================ -->
  <!-- 1. HERO                                                        -->
  <!-- ============================================================ -->
  <section class="bg-navy-900 text-white pt-28 pb-24 px-6">
    <div class="max-w-4xl mx-auto">
      <p class="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-5">
        Asset Governance
      </p>
      <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-7 max-w-3xl">
        Boards zijn verantwoordelijk voor assets.<br />
        De meeste hebben geen stuurinstrument.
      </h1>
      <p class="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
        AssetWize geeft directies en boards een governance-gedreven systeem
        om te sturen op asset performance, risico en investeringsbeslissingen —
        niet als operationele tool, maar als bestuurlijk instrument.
      </p>
      <a href="/contact"
         class="inline-flex px-7 py-3.5 bg-teal-600 hover:bg-teal-500
                text-white font-semibold rounded-lg transition-colors text-sm">
        Gesprek aanvragen
      </a>
    </div>
  </section>


  <!-- ============================================================ -->
  <!-- 2. PIJNLAGEN                                                   -->
  <!-- ============================================================ -->
  <section class="py-20 px-6 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-3">
        De bestuurlijke spanning
      </p>
      <h2 class="text-2xl font-bold text-navy-900 mb-12 max-w-2xl">
        Wat boards voelen als asset governance ontbreekt
      </h2>
      <div class="grid md:grid-cols-2 gap-6">

        <div class="bg-white rounded-xl p-7 border border-gray-100">
          <div class="text-teal-600 font-bold text-sm uppercase tracking-wide mb-3">
            Risico vs. investering
          </div>
          <p class="text-navy-900 font-semibold mb-2">
            We sturen op gevoel, niet op onderbouwde keuzes.
          </p>
          <p class="text-gray-500 text-sm leading-relaxed">
            Investeringen worden gedaan zonder helder risico- en waardebeeld.
            Of er wordt te weinig geïnvesteerd — totdat het fout gaat.
          </p>
        </div>

        <div class="bg-white rounded-xl p-7 border border-gray-100">
          <div class="text-teal-600 font-bold text-sm uppercase tracking-wide mb-3">
            Informatie vs. inzicht
          </div>
          <p class="text-navy-900 font-semibold mb-2">
            We krijgen rapporten — maar geen besluitvorming.
          </p>
          <p class="text-gray-500 text-sm leading-relaxed">
            Assetdata is versnipperd, taal is niet uniform,
            en rapportages leiden niet tot heldere keuzes op directieniveau.
          </p>
        </div>

        <div class="bg-white rounded-xl p-7 border border-gray-100">
          <div class="text-teal-600 font-bold text-sm uppercase tracking-wide mb-3">
            Governance vs. persoon
          </div>
          <p class="text-navy-900 font-semibold mb-2">
            Uitkomsten zijn inconsistent en moeilijk uitlegbaar.
          </p>
          <p class="text-gray-500 text-sm leading-relaxed">
            OPEX vs. CAPEX discussies zonder consistente logica.
            Geen vast besluitvormingsmodel — afhankelijk van personen, niet van systeem.
          </p>
        </div>

        <div class="bg-white rounded-xl p-7 border border-gray-100">
          <div class="text-teal-600 font-bold text-sm uppercase tracking-wide mb-3">
            Voorspelbaarheid
          </div>
          <p class="text-navy-900 font-semibold mb-2">
            We lopen achter de feiten aan.
          </p>
          <p class="text-gray-500 text-sm leading-relaxed">
            Geen betrouwbare lifecycle planning, onverwachte CAPEX-pieken,
            verrassingen in compliance — terwijl de raad van bestuur verwacht te sturen.
          </p>
        </div>

      </div>
    </div>
  </section>


  <!-- ============================================================ -->
  <!-- 3. HET SYSTEEM                                                 -->
  <!-- ============================================================ -->
  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-3">
          De aanpak
        </p>
        <h2 class="text-2xl font-bold text-navy-900 mb-5">
          Asset governance is geen project.<br />Het is een besturingssysteem.
        </h2>
        <p class="text-gray-600 leading-relaxed mb-5">
          AssetWize combineert strategie, structuur en software tot één
          samenhangend governance systeem. Niet als tijdelijk adviestraject —
          maar als fundament voor structurele besluitvorming op directieniveau.
        </p>
        <p class="text-gray-600 leading-relaxed">
          Het resultaat: transparantie over waarde en risico,
          voorspelbaarheid in investeringen, en besluitvorming
          die consistent én uitlegbaar is — naar bestuur, finance en toezicht.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-navy-900 text-white rounded-xl p-6">
          <div class="text-teal-400 font-bold text-xs uppercase tracking-widest mb-2">Strategie</div>
          <p class="text-sm text-gray-300">Governance framework afgestemd op organisatiestrategie en risicoprofiel</p>
        </div>
        <div class="bg-navy-900 text-white rounded-xl p-6">
          <div class="text-teal-400 font-bold text-xs uppercase tracking-widest mb-2">Structuur</div>
          <p class="text-sm text-gray-300">Rollen, besluitvormingslogica en uniforme taal tussen techniek, finance en bestuur</p>
        </div>
        <div class="bg-navy-900 text-white rounded-xl p-6">
          <div class="text-teal-400 font-bold text-xs uppercase tracking-widest mb-2">Software</div>
          <p class="text-sm text-gray-300">RELICORE en AM Scan als digitaal fundament voor governance en analyse</p>
        </div>
        <div class="bg-navy-900 text-white rounded-xl p-6">
          <div class="text-teal-400 font-bold text-xs uppercase tracking-widest mb-2">Implementatie</div>
          <p class="text-sm text-gray-300">Trajectbegeleiding door Dimitry van Dort — van nulmeting tot borging</p>
        </div>
      </div>
    </div>
  </section>


  <!-- ============================================================ -->
  <!-- 4. PRODUCTEN                                                   -->
  <!-- ============================================================ -->
  <section class="py-20 px-6 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-3">
        Software
      </p>
      <h2 class="text-2xl font-bold text-navy-900 mb-3">
        Twee producten. Één samenhangend systeem.
      </h2>
      <p class="text-gray-500 mb-12 max-w-xl">
        RELICORE en AM Scan zijn niet losstaande tools —
        ze zijn de digitale laag van het governance systeem.
      </p>
      <div class="grid md:grid-cols-2 gap-8">

        <div class="bg-white rounded-xl p-8 border border-gray-200 hover:border-teal-300 transition-colors">
          <h3 class="text-xl font-bold text-navy-900 mb-3">RELICORE</h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-5">
            Het governance platform voor asset management.
            Van positionering en beleid tot besluitvormingsstructuur
            en tier-gebaseerde kennisborging.
          </p>
          <a href="/relicore"
             class="text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors">
            Meer over RELICORE →
          </a>
        </div>

        <div class="bg-white rounded-xl p-8 border border-gray-200 hover:border-teal-300 transition-colors">
          <h3 class="text-xl font-bold text-navy-900 mb-3">AM Scan</h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-5">
            Gestructureerde analyse van de asset management volwassenheid.
            Geeft inzicht in waar de organisatie staat —
            en een concreet ontwikkelpad richting governance.
          </p>
          <a href="/am-scan"
             class="text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors">
            Meer over AM Scan →
          </a>
        </div>

      </div>
    </div>
  </section>


  <!-- ============================================================ -->
  <!-- 5. OVER DIMITRY                                                -->
  <!-- ============================================================ -->
  <section class="py-20 px-6">
    <div class="max-w-4xl mx-auto border-l-4 border-teal-600 pl-10">
      <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-4">
        Wie is AssetWize
      </p>
      <p class="text-xl text-navy-900 font-semibold leading-relaxed mb-5">
        AssetWize is Dimitry van Dort — asset governance specialist
        met meer dan vijftien jaar ervaring in complexe asset-intensieve omgevingen.
      </p>
      <p class="text-gray-600 leading-relaxed mb-5">
        Van strategieontwikkeling tot implementatie van governance structuren —
        altijd op het snijvlak van bestuur, techniek en finance.
        Niet als uitvoerende consultant, maar als de partij die het systeem ontwerpt
        en borgt in de organisatie.
      </p>
      <p class="text-gray-600 leading-relaxed">
        RELICORE en AM Scan zijn voortgekomen uit die praktijk —
        gebouwd op governance-expertise, niet op generieke softwarelogica.
      </p>
    </div>
  </section>

  <!-- ============================================================ -->
  <!-- 6. CTA                                                         -->
  <!-- ============================================================ -->
  <section class="py-24 px-6 bg-navy-900 text-white">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-2xl md:text-3xl font-bold mb-5">
        Asset governance begint met het goede gesprek.
      </h2>
      <p class="text-gray-300 leading-relaxed mb-10 max-w-xl mx-auto">
        Of het nu gaat om software, een traject, of een eerste oriëntatie —
        neem contact op. Dan kijken we of en hoe AssetWize relevant is
        voor jouw organisatie.
      </p>
      <a href="/contact"
         class="inline-flex px-8 py-4 bg-teal-600 hover:bg-teal-500
                text-white font-semibold rounded-lg transition-colors">
        Neem contact op
      </a>
    </div>
  </section>

</BaseLayout>
```


---

## Stap 2 — Lokaal testen

```bash
cd /Users/drvandort/dev/assetwize-platform/apps/website
npm run dev
```

Controleer op http://localhost:4321:
- Hero laadt correct met navy achtergrond en teal accent
- Alle secties zichtbaar en correct opgemaakt
- Pijnlagen grid klopt op desktop en mobiel
- Systeem blok: 2-koloms layout met navy kaarten
- Producten: 2 kaarten naast elkaar
- Over Dimitry: linker border in teal
- CTA sectie navy met teal knop
- Geen console errors

---

## Stap 3 — Committen en pushen

```bash
cd /Users/drvandort/dev/assetwize-platform
git add .
git commit -m "feat(website): homepage inhoud — board-level positionering (TASK-002)"
git push
```

Zet STATUS op DONE.

---

## Acceptatiecriteria

- [ ] Hero: spanning benoemd op board-niveau, niet operationeel
- [ ] Pijnlagen: 4 blokken correct weergegeven
- [ ] Systeem sectie: 2-koloms met 4 governance pijlers
- [ ] Producten: RELICORE + AM Scan kort en correct gepositioneerd
- [ ] Over Dimitry: aanwezig met juiste toon
- [ ] CTA sectie aanwezig met link naar /contact
- [ ] Geen build errors
- [ ] Gecommit en gepusht

---

## Result

Uitgevoerd op 2026-03-28.

- Homepage volledig uitgewerkt met alle 6 secties uit de taak
- Hero: board-niveau spanning, navy achtergrond, teal accent
- Pijnlagen: 4 blokken in 2-koloms grid
- Systeem: 2-koloms layout met 4 navy governance pijler-kaarten
- Producten: RELICORE + AM Scan naast elkaar met links
- Over Dimitry: teal linker border, juiste positionering
- CTA: navy achtergrond met teal knop naar /contact
- Build succesvol, geen errors, alle secties geverifieerd via curl
