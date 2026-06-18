# TASK-002b — Homepage copy verscherpen

**STATUS**: DONE
**Sprint**: W1.1
**Geschatte tijd**: 1 uur

---

## Context

TASK-002 heeft de homepage structuur neergezet. Inhoud en positionering kloppen,
maar de copy mist druk en scherpte. Te veel uitleg, te weinig statements.
De pijnlagen lezen als lijst in plaats van escalerende spanning.

Dit is een copy-revisie — geen structuurwijziging.
Alle secties blijven staan, alleen de teksten worden herschreven.

Wijzigingen per sectie hieronder. Vervang src/pages/index.astro volledig.

---

## Stap 1 — Vervang src/pages/index.astro volledig

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout
  title="Asset governance — sturen op waarde, risico en continuïteit"
  description="AssetWize geeft boards een governance-systeem om te sturen op asset performance, risico en investeringsbeslissingen."
>

  <!-- HERO -->
  <section class="bg-navy-900 text-white pt-28 pb-24 px-6">
    <div class="max-w-4xl mx-auto">
      <p class="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-5">
        Asset Governance
      </p>
      <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl">
        Boards zijn verantwoordelijk voor assets die kapitaal, risico en continuïteit bepalen.
        Maar missen een systeem om daarop te sturen.
      </h1>
      <p class="text-gray-300 text-lg leading-relaxed max-w-2xl mb-3">
        AssetWize geeft boards een governance-systeem om te sturen op performance,
        risico en investeringen.
      </p>
      <p class="text-teal-400 font-medium mb-10">
        Niet als operationele tool — maar als bestuurlijk instrument.
      </p>
      <a href="/contact"
         class="inline-flex px-7 py-3.5 bg-teal-600 hover:bg-teal-500
                text-white font-semibold rounded-lg transition-colors text-sm">
        Gesprek aanvragen
      </a>
    </div>
  </section>

  <!-- PIJNLAGEN — escalerende opbouw, geen lijst -->
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
            1 — We sturen zonder fundament
          </div>
          <p class="text-navy-900 font-semibold mb-2">
            Beslissingen worden genomen zonder onderbouwd risico- en waardebeeld.
          </p>
          <p class="text-gray-500 text-sm leading-relaxed">
            Investeringen worden gedaan op gevoel of historische gewoonte.
            Of er wordt te weinig geïnvesteerd — totdat het fout gaat.
          </p>
        </div>

        <div class="bg-white rounded-xl p-7 border border-gray-100">
          <div class="text-teal-600 font-bold text-sm uppercase tracking-wide mb-3">
            2 — We zien het niet scherp
          </div>
          <p class="text-navy-900 font-semibold mb-2">
            We krijgen informatie — maar geen inzicht.
          </p>
          <p class="text-gray-500 text-sm leading-relaxed">
            Assetdata is versnipperd, taal is niet uniform tussen techniek en finance.
            Rapportages leiden niet tot heldere keuzes op directieniveau.
          </p>
        </div>

        <div class="bg-white rounded-xl p-7 border border-gray-100">
          <div class="text-teal-600 font-bold text-sm uppercase tracking-wide mb-3">
            3 — We beslissen inconsistent
          </div>
          <p class="text-navy-900 font-semibold mb-2">
            Uitkomsten zijn inconsistent en moeilijk uitlegbaar.
          </p>
          <p class="text-gray-500 text-sm leading-relaxed">
            OPEX vs. CAPEX zonder consistente logica.
            Geen vast besluitvormingsmodel — afhankelijk van personen, niet van systeem.
          </p>
        </div>

        <div class="bg-white rounded-xl p-7 border border-gray-100">
          <div class="text-teal-600 font-bold text-sm uppercase tracking-wide mb-3">
            4 — We verliezen controle over de toekomst
          </div>
          <p class="text-navy-900 font-semibold mb-2">
            We lopen achter de feiten aan.
          </p>
          <p class="text-gray-500 text-sm leading-relaxed">
            Geen betrouwbare lifecycle planning, onverwachte CAPEX-pieken,
            verrassingen in compliance — terwijl continuïteit wél bestuurlijk risico is.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- HET SYSTEEM — architectuur, niet dienstenlijst -->
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
          AssetWize maakt asset management bestuurbaar — door governance,
          structuur en data als één systeem te ontwerpen en te implementeren.
        </p>
        <p class="text-gray-600 leading-relaxed mb-6">
          Niet als tijdelijk adviestraject. Als fundament voor besluitvorming
          die consistent, transparant en uitlegbaar is — naar bestuur, finance en toezicht.
        </p>
        <div class="text-sm text-navy-900 font-semibold mb-2">Het resultaat:</div>
        <ul class="space-y-1 text-sm text-gray-600">
          <li class="flex items-start gap-2"><span class="text-teal-500 mt-0.5">→</span>Besluitvorming die consistent en uitlegbaar is</li>
          <li class="flex items-start gap-2"><span class="text-teal-500 mt-0.5">→</span>Inzicht in risico en assetwaarde</li>
          <li class="flex items-start gap-2"><span class="text-teal-500 mt-0.5">→</span>Voorspelbare investeringsbeslissingen</li>
        </ul>
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
          Het governance systeem bestaat uit vier lagen
        </p>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-navy-900 text-white rounded-xl p-6">
            <div class="text-teal-400 font-bold text-xs uppercase tracking-widest mb-2">Strategie</div>
            <p class="text-sm text-gray-300">Governance kaders afgestemd op risicoprofiel en organisatiestrategie</p>
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
            <p class="text-sm text-gray-300">Borging in de organisatie — van nulmeting tot structureel stuurinstrument</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PRODUCTEN -->
  <section class="py-20 px-6 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-3">
        Software
      </p>
      <h2 class="text-2xl font-bold text-navy-900 mb-3">
        Twee producten. Één samenhangend systeem.
      </h2>
      <p class="text-gray-500 mb-12 max-w-xl">
        RELICORE en AM Scan zijn niet losstaande softwareproducten —
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
            Inzicht in waar de organisatie staat —
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

  <!-- OVER ASSETWIZE -->
  <section class="py-20 px-6">
    <div class="max-w-4xl mx-auto border-l-4 border-teal-600 pl-10">
      <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-4">
        Wie is AssetWize
      </p>
      <p class="text-xl text-navy-900 font-semibold leading-relaxed mb-5">
        AssetWize is opgericht door Dimitry van Dort — asset governance specialist
        met meer dan vijftien jaar ervaring in complexe asset-intensieve omgevingen.
      </p>
      <p class="text-gray-600 leading-relaxed mb-4">
        AssetWize opereert als onafhankelijke asset governance partner.
        Van strategieontwikkeling tot implementatie van governance structuren —
        altijd op het snijvlak van bestuur, techniek en finance.
      </p>
      <p class="text-gray-600 leading-relaxed">
        RELICORE en AM Scan zijn voortgekomen uit die praktijk —
        gebouwd op governance-expertise, niet op generieke softwarelogica.
      </p>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-24 px-6 bg-navy-900 text-white">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-2xl md:text-3xl font-bold mb-5">
        De vraag is niet óf asset governance nodig is —<br />
        maar of het al bestuurbaar is ingericht.
      </h2>
      <p class="text-gray-300 leading-relaxed mb-10 max-w-xl mx-auto">
        In een eerste gesprek bepalen we waar de grootste bestuurlijke
        risico's en kansen liggen — voor software, een traject, of beide.
      </p>
      <a href="/contact"
         class="inline-flex px-8 py-4 bg-teal-600 hover:bg-teal-500
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

Controleer op http://localhost:4321:
- Hero: heading in twee regels, teal accent zin los eronder
- Pijnlagen: genummerd 1–4 met escalerende titels
- Systeem: resultaatpijlen aanwezig, vier lagen correct gelabeld
- Over AssetWize: "opgericht door" i.p.v. "is"
- CTA: nieuwe vraagstelling bovenaan

---

## Stap 3 — Committen en pushen

```bash
cd /Users/drvandort/dev/assetwize-platform
git add .
git commit -m "feat(website): homepage copy verscherpt — druk en urgentie (TASK-002b)"
git push
```

Zet STATUS op DONE.

---

## Acceptatiecriteria

- [ ] Hero: heading gesplitst, teal accent zin als aparte regel
- [ ] Pijnlagen: genummerd met escalerende titels (1–4)
- [ ] Systeem: resultatenlijst aanwezig met pijlen
- [ ] Vier lagen: gelabeld als "vier lagen", niet als diensten
- [ ] Software: "losstaande softwareproducten" i.p.v. "tools"
- [ ] Over AssetWize: "opgericht door" + "onafhankelijke partner"
- [ ] CTA: vraagstelling als opener
- [ ] Geen build errors
- [ ] Gecommit en gepusht

---

## Result

Uitgevoerd op 2026-03-28.

- Hero: heading gesplitst, teal accent zin als aparte `<p>` met `text-teal-400`
- Pijnlagen: genummerd 1–4 met escalerende titels (fundament → scherp → inconsistent → controle)
- Systeem: resultatenlijst met teal pijlen, vier lagen gelabeld
- Producten: "losstaande softwareproducten" i.p.v. "tools"
- Over AssetWize: "opgericht door" + "onafhankelijke asset governance partner"
- CTA: vraagstelling als opener ("De vraag is niet óf...")
- Build succesvol, alle wijzigingen geverifieerd via curl
