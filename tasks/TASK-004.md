# TASK-004 — Over ons pagina

**STATUS**: DONE
**Sprint**: W1.3
**Geschatte tijd**: 1.5 uur

---

## Context

De Over ons pagina op assetwize.nl/over-ons.
Toon: board-niveau — geen CV, geen dienstenlijst, geen operationele taal.
Vertrekpunt: de observatie die AssetWize noodzakelijk maakte.
Taal: Nederlands (Engelstalige versie volgt later — zie TODO.md).

Cases open laten — geen referenties benoemen behalve Syngenta NL als
context bij Dimitry. Zodra meer cases beschikbaar zijn, wordt dit toegevoegd.

---

## Doel

Een pagina die board-niveau bezoekers antwoord geeft op:
- Waarom bestaat AssetWize?
- Wat is de filosofie achter de aanpak?
- Wie zit er achter — en waarom is dat relevant?
- Hoe kijkt AssetWize naar het vak?

---

## Stap 1 — Vervang src/pages/over-ons/index.astro volledig

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---
<BaseLayout
  title="Over AssetWize"
  description="AssetWize is een asset governance architectuurbedrijf. Geen consultancybureau, geen softwareleverancier — maar een governance partner die strategie, structuur en software als één systeem ontwerpt."
>

  <!-- HERO -->
  <section class="bg-navy-900 text-white pt-28 pb-20 px-6">
    <div class="max-w-4xl mx-auto">
      <p class="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-5">
        Over AssetWize
      </p>
      <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-8 max-w-3xl">
        Asset management zit structureel te laag in organisaties.
        Dat is het probleem dat AssetWize oplost.
      </h1>
      <p class="text-gray-300 text-lg leading-relaxed max-w-2xl">
        Niet als tijdelijk adviestraject. Als governance systeem
        dat de verbinding legt tussen bestuur, techniek en finance —
        en daar blijft werken.
      </p>
    </div>
  </section>


  <!-- DE OBSERVATIE -->
  <section class="py-20 px-6 bg-white">
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
      <div>
        <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-3">
          De observatie
        </p>
        <h2 class="text-2xl font-bold text-navy-900 mb-6">
          Wat er structureel ontbreekt
        </h2>
        <div class="space-y-4 text-gray-600 leading-relaxed">
          <p>
            In de meeste organisaties wordt asset management behandeld als
            operationele discipline. Onderhoud, beheer, uitvoering.
            Belangrijk — maar niet bestuurlijk.
          </p>
          <p>
            Dat is precies het probleem. Assets bepalen kapitaal, risico en
            continuïteit. Ze zijn onderdeel van elke strategische beslissing
            over investering, groei en weerbaarheid. Maar de governance
            ontbreekt om ze op dat niveau te besturen.
          </p>
          <p>
            Het gevolg: beslissingen worden genomen zonder grondslag.
            Investeringen op gevoel. Risico's die niet zichtbaar zijn
            totdat ze zich manifesteren. Een board die verantwoordelijk is
            maar niet kan sturen.
          </p>
        </div>
      </div>
      <div class="space-y-0 divide-y divide-gray-200 pt-2">
        <div class="py-6">
          <p class="text-navy-900 font-semibold mb-1">
            Niet een gebrek aan data
          </p>
          <p class="text-gray-500 text-sm leading-relaxed">
            De meeste organisaties hebben genoeg data. Wat ontbreekt is de
            structuur om die data besluitvormend te maken op het juiste niveau.
          </p>
        </div>
        <div class="py-6">
          <p class="text-navy-900 font-semibold mb-1">
            Niet een gebrek aan expertise
          </p>
          <p class="text-gray-500 text-sm leading-relaxed">
            Er zijn goede engineers, beheerders en planners. Wat ontbreekt
            is de verbinding tussen hun werk en de bestuurlijke besluitvorming.
          </p>
        </div>
        <div class="py-6">
          <p class="text-navy-900 font-semibold mb-1">
            Niet een gebrek aan tools
          </p>
          <p class="text-gray-500 text-sm leading-relaxed">
            CMMS-systemen, ERP, dashboards — die zijn er.
            Wat ontbreekt is een governance systeem dat alles verbindt
            en op bestuurlijk niveau werkbaar maakt.
          </p>
        </div>
      </div>
    </div>
  </section>


  <!-- FILOSOFIE -->
  <section class="py-20 px-6 bg-gray-50">
    <div class="max-w-4xl mx-auto">
      <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-3">
        De filosofie
      </p>
      <h2 class="text-2xl font-bold text-navy-900 mb-8">
        Governance is geen project. Het is een systeem.
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <div class="w-8 h-0.5 bg-teal-600 mb-4"></div>
          <p class="text-navy-900 font-semibold mb-2">Geen losse documenten</p>
          <p class="text-gray-500 text-sm leading-relaxed">
            Beleidsdocumenten zonder structuur veranderen niets.
            AssetWize bouwt governance die doorwerkt in de praktijk —
            in beslissingen, systemen en gedrag.
          </p>
        </div>
        <div>
          <div class="w-8 h-0.5 bg-teal-600 mb-4"></div>
          <p class="text-navy-900 font-semibold mb-2">Geen tool zonder context</p>
          <p class="text-gray-500 text-sm leading-relaxed">
            Software zonder methodiek lost niets op.
            RELICORE en Governance Compass zijn gebouwd op een
            governance fundament — niet omgekeerd.
          </p>
        </div>
        <div>
          <div class="w-8 h-0.5 bg-teal-600 mb-4"></div>
          <p class="text-navy-900 font-semibold mb-2">Geen advies zonder richting</p>
          <p class="text-gray-500 text-sm leading-relaxed">
            Consultancy als louter capaciteit levert geen systeem op.
            AssetWize ontwerpt en implementeert — en borgt dat het
            blijft werken zonder externe afhankelijkheid.
          </p>
        </div>
      </div>
      <div class="mt-12 border-l-4 border-teal-600 pl-8">
        <p class="text-xl text-navy-900 font-semibold leading-relaxed">
          "Geen losse documenten. Geen tool zonder context.
          Geen advies zonder richting — maar één systeem
          waarin alles samenkomt."
        </p>
      </div>
    </div>
  </section>

  <!-- DIMITRY -->
  <section class="py-20 px-6 bg-white">
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
      <div>
        <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-3">
          Wie is AssetWize
        </p>
        <h2 class="text-2xl font-bold text-navy-900 mb-6">
          Dimitry van Dort
        </h2>
        <div class="space-y-4 text-gray-600 leading-relaxed">
          <p>
            AssetWize is opgericht door Dimitry van Dort, asset governance
            specialist met meer dan vijftien jaar ervaring in complexe
            asset-intensieve omgevingen — industrie, utilities en agrochemie.
          </p>
          <p>
            Zijn werk staat altijd op het snijvlak van bestuur, techniek
            en finance. Niet als uitvoerende consultant, maar als de partij
            die het systeem ontwerpt, implementeert en borgt.
          </p>
          <p>
            RELICORE is voortgekomen uit die praktijk. Gebouwd omdat
            de beschikbare software het governance vraagstuk niet raakte —
            en een engineering- en beslissingslaag boven CMMS-systemen
            structureel ontbrak. Actief in pilotimplementatie bij Syngenta NL
            met 29.872 assets.
          </p>
        </div>
      </div>
      <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100">
        <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Expertise
        </p>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <span class="text-teal-600 font-bold mt-0.5">→</span>
            <span class="text-sm text-gray-700">Asset governance strategie en beleid</span>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-teal-600 font-bold mt-0.5">→</span>
            <span class="text-sm text-gray-700">Lifecycle asset management en planning</span>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-teal-600 font-bold mt-0.5">→</span>
            <span class="text-sm text-gray-700">Reliability engineering en FMECA</span>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-teal-600 font-bold mt-0.5">→</span>
            <span class="text-sm text-gray-700">Governance implementatie in asset-intensieve sectoren</span>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-teal-600 font-bold mt-0.5">→</span>
            <span class="text-sm text-gray-700">Software ontwikkeling: RELICORE platform</span>
          </div>
        </div>
        <div class="mt-6 pt-6 border-t border-gray-200">
          <p class="text-xs text-gray-400 uppercase tracking-widest mb-2">Sectoren</p>
          <p class="text-sm text-gray-600">
            Industrie · Utilities · Agrochemie · Gebouwbeheer · Voedingsmiddelen
          </p>
        </div>
      </div>
    </div>
  </section>


  <!-- VIER DOMEINEN -->
  <section class="py-20 px-6 bg-gray-50">
    <div class="max-w-5xl mx-auto">
      <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-3">
        De aanpak
      </p>
      <h2 class="text-2xl font-bold text-navy-900 mb-4">
        Hoe AssetWize het vak ziet
      </h2>
      <p class="text-gray-500 mb-12 max-w-xl">
        Vier domeinen die samen één samenhangend systeem vormen.
        Elk domein bouwt voort op het vorige — en versterkt het geheel.
      </p>
      <div class="grid md:grid-cols-4 gap-6">

        <div class="relative">
          <div class="text-teal-600 font-bold text-xs uppercase tracking-widest mb-3">
            01 — Governance
          </div>
          <h3 class="text-navy-900 font-bold mb-2">Kaders die bepalen wat er moet werken</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            Normatieve principes die richting geven aan hoe de organisatie
            assets bestuurt, beslissingen neemt en verantwoording aflegt.
          </p>
          <div class="hidden md:block absolute top-3 right-0 text-gray-200 font-bold text-lg">→</div>
        </div>

        <div class="relative">
          <div class="text-teal-600 font-bold text-xs uppercase tracking-widest mb-3">
            02 — Blueprints
          </div>
          <h3 class="text-navy-900 font-bold mb-2">Structuren en beslisregels</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            Vertaling van governance naar concrete frameworks, beslislogica
            en structuren die in de praktijk werken.
          </p>
          <div class="hidden md:block absolute top-3 right-0 text-gray-200 font-bold text-lg">→</div>
        </div>

        <div class="relative">
          <div class="text-teal-600 font-bold text-xs uppercase tracking-widest mb-3">
            03 — Implementatie
          </div>
          <h3 class="text-navy-900 font-bold mb-2">Software en uitvoering</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            RELICORE en Governance Compass als digitaal fundament.
            Governance die niet op papier blijft maar doorwerkt in systemen.
          </p>
          <div class="hidden md:block absolute top-3 right-0 text-gray-200 font-bold text-lg">→</div>
        </div>

        <div>
          <div class="text-teal-600 font-bold text-xs uppercase tracking-widest mb-3">
            04 — Assessment & Groei
          </div>
          <h3 class="text-navy-900 font-bold mb-2">Inzicht en ontwikkeling</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            Inzicht in volwassenheid en gerichte verbeterpaden.
            Niet als eenmalige meting — als continu stuurinstrument.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-24 px-6 bg-navy-900 text-white">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-2xl md:text-3xl font-bold mb-5">
        Asset governance begint met de juiste vragen.
      </h2>
      <p class="text-gray-300 leading-relaxed mb-10 max-w-xl mx-auto">
        In een eerste gesprek kijken we samen of en hoe AssetWize
        relevant is voor uw organisatie — zonder verplichtingen.
      </p>
      <a href="/contact"
         class="inline-flex px-8 py-4 bg-teal-700 hover:bg-teal-600
                text-white font-semibold rounded-lg transition-colors">
        Gesprek aanvragen
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

Controleer op http://localhost:4321/over-ons:
- Hero: observatie als startpunt, geen biografie
- Observatie sectie: 2-koloms — proza links, drie punten rechts
- Filosofie: drie kolommen + citaat met teal border
- Dimitry: proza links, expertise kaart rechts
- Vier domeinen: genummerd 01–04 met pijlen
- CTA: aansluitend op navy achtergrond
- Geen console errors

---

## Stap 3 — Committen en pushen

```bash
cd /Users/drvandort/dev/assetwize-platform
git add .
git commit -m "feat(website): Over ons pagina — filosofie, observatie, vier domeinen (TASK-004)"
git push
```

Zet STATUS op DONE.

---

## Acceptatiecriteria

- [ ] Hero: observatie als vertrekpunt, geen biografie
- [ ] Observatie sectie: wat structureel ontbreekt — 3 punten
- [ ] Filosofie: drie kolommen + citaat
- [ ] Dimitry: autoriteit zonder CV-taal, Syngenta als context
- [ ] Vier domeinen: 01–04 genummerd als visie
- [ ] CTA aanwezig
- [ ] Geen build errors
- [ ] Gecommit en gepusht

---

## TODO (zie docs/TODO.md)
- Cases / referenties toevoegen zodra beschikbaar
- Engelstalige versie later

---

## Result

Uitgevoerd op 2026-03-29.

- Hero: observatie als vertrekpunt ("structureel te laag"), geen biografie
- Observatie sectie: 2-koloms — proza links, drie "Niet een gebrek aan..." punten rechts
- Filosofie: drie kolommen met teal accenten + citaat met teal border
- Dimitry: autoriteit zonder CV-taal, expertise kaart rechts, Syngenta NL als context
- Vier domeinen: 01–04 genummerd met pijlen (Governance → Blueprints → Implementatie → Assessment)
- CTA: "Asset governance begint met de juiste vragen"
- Build succesvol, alle secties geverifieerd
