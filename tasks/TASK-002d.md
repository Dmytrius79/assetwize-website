# TASK-002d — Homepage finale iteratie

**STATUS**: DONE
**Sprint**: W1.1
**Geschatte tijd**: 1.5 uur

---

## Context

Derde en laatste copy/structuur iteratie op de homepage.
Wijzigingen zijn zowel structureel (sticky header, nav volgorde)
als inhoudelijk (copy, positionering, productnaam).

Belangrijkste wijziging: AM Scan heet extern voortaan
"Governance Compass" met tagline "Direction for asset-based decision making".

---

## Wijzigingen overzicht

| Onderdeel | Wijziging |
|---|---|
| Header | Sticky + navigatievolgorde omgedraaid |
| Productnaam | AM Scan → Governance Compass (extern) |
| Hero | Subzin strakker, CTA scherper |
| Pijnlagen | Minder kaartachtig, meer narratief |
| Aanpak | Sterkere centrale stelling |
| Resultaatblok | Board language, geen bullets |
| Software sectie | Compass links, RELICORE rechts |
| Over AssetWize | Eerste zin korter |
| CTA | Scherpere opener |

---

## Stap 1 — Sticky header in BaseLayout.astro

Vervang de bestaande `<header>` tag:

Oud:
```astro
<header class="border-b border-gray-100">
```

Nieuw:
```astro
<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all">
```

Verander navigatievolgorde in de `<ul>`:

Oud:
```astro
<li><a href="/relicore" ...>RELICORE</a></li>
<li><a href="/am-scan" ...>AM Scan</a></li>
```

Nieuw:
```astro
<li><a href="/governance-compass" class="hover:text-teal-700">Governance Compass</a></li>
<li><a href="/relicore" class="hover:text-teal-700">RELICORE</a></li>
```


---

## Stap 2 — Paginamap aanmaken voor Governance Compass

```bash
mkdir -p /Users/drvandort/dev/assetwize-platform/apps/website/src/pages/governance-compass
```

Maak stub pagina `src/pages/governance-compass/index.astro`:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---
<BaseLayout title="Governance Compass">
  <section class="py-24 px-6 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-navy-900 mb-2">Governance Compass</h1>
    <p class="text-teal-700 font-medium mb-6">Direction for asset-based decision making</p>
    <p class="text-gray-500">Wordt uitgewerkt in TASK-004.</p>
  </section>
</BaseLayout>
```

---

## Stap 3 — Vervang src/pages/index.astro volledig

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout
  title="Asset governance — sturen op waarde, risico en continuïteit"
  description="AssetWize maakt asset management bestuurbaar op board-niveau — door governance, structuur en data als één systeem te ontwerpen."
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
      <p class="text-white text-lg font-semibold mb-2">
        AssetWize maakt asset management bestuurbaar op board-niveau.
      </p>
      <p class="text-teal-400 font-medium mb-10">
        Niet als operationele tool — maar als bestuurlijk instrument.
      </p>
      <a href="/contact"
         class="inline-flex px-7 py-3.5 bg-teal-700 hover:bg-teal-600
                text-white font-semibold rounded-lg transition-colors text-sm">
        Start het gesprek
      </a>
    </div>
  </section>


  <!-- PIJNLAGEN — narratief, minder kaartachtig -->
  <section class="py-20 px-6 bg-gray-50">
    <div class="max-w-5xl mx-auto">
      <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-3">
        De bestuurlijke spanning
      </p>
      <h2 class="text-2xl font-bold text-navy-900 mb-12 max-w-2xl">
        Wat boards voelen als asset governance ontbreekt
      </h2>
      <div class="space-y-0 divide-y divide-gray-200">

        <div class="py-8 grid md:grid-cols-4 gap-4 items-start">
          <div class="text-teal-700 font-bold text-sm uppercase tracking-wide">
            1 — Zonder fundament
          </div>
          <div class="md:col-span-3">
            <p class="text-navy-900 font-semibold mb-1">
              Beslissingen worden genomen zonder onderbouwd risico- en waardebeeld.
            </p>
            <p class="text-gray-500 text-sm leading-relaxed">
              Investeringen op gevoel of historische gewoonte.
              Of te weinig — totdat het fout gaat.
            </p>
          </div>
        </div>

        <div class="py-8 grid md:grid-cols-4 gap-4 items-start">
          <div class="text-teal-700 font-bold text-sm uppercase tracking-wide">
            2 — Zonder scherpte
          </div>
          <div class="md:col-span-3">
            <p class="text-navy-900 font-semibold mb-1">
              Informatie is beschikbaar — maar niet besluitvormend.
            </p>
            <p class="text-gray-500 text-sm leading-relaxed">
              Assetdata versnipperd, taal niet uniform.
              Rapportages leiden niet tot heldere keuzes op directieniveau.
            </p>
          </div>
        </div>

        <div class="py-8 grid md:grid-cols-4 gap-4 items-start">
          <div class="text-teal-700 font-bold text-sm uppercase tracking-wide">
            3 — Zonder systeem
          </div>
          <div class="md:col-span-3">
            <p class="text-navy-900 font-semibold mb-1">
              Uitkomsten zijn inconsistent en moeilijk uitlegbaar.
            </p>
            <p class="text-gray-500 text-sm leading-relaxed">
              OPEX vs. CAPEX zonder consistente logica.
              Besluitvorming afhankelijk van personen, niet van structuur.
            </p>
          </div>
        </div>

        <div class="py-8 grid md:grid-cols-4 gap-4 items-start">
          <div class="text-teal-700 font-bold text-sm uppercase tracking-wide">
            4 — Zonder controle
          </div>
          <div class="md:col-span-3">
            <p class="text-navy-900 font-semibold mb-1">
              De toekomst is niet voorspelbaar.
            </p>
            <p class="text-gray-500 text-sm leading-relaxed">
              Geen betrouwbare lifecycle planning, onverwachte CAPEX-pieken —
              terwijl continuïteit wél bestuurlijk risico is.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>


  <!-- AANPAK -->
  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
      <div>
        <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-3">
          De aanpak
        </p>
        <h2 class="text-2xl font-bold text-navy-900 mb-5">
          Asset governance is geen project.<br />Het is een besturingssysteem.
        </h2>
        <p class="text-gray-600 leading-relaxed mb-5">
          AssetWize ontwerpt en implementeert het governance-systeem
          waarop asset management wordt gestuurd.
          Niet als tijdelijk adviestraject —
          als fundament voor bestuurlijke besluitvorming.
        </p>
        <p class="text-sm font-semibold text-navy-900 mb-3">Het resultaat:</p>
        <div class="space-y-2 text-sm text-gray-700">
          <div class="flex items-start gap-3">
            <span class="text-teal-600 font-bold mt-0.5">→</span>
            <span>Besluitvorming die consistent en uitlegbaar is — naar bestuur, finance en toezicht</span>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-teal-600 font-bold mt-0.5">→</span>
            <span>Inzicht in risico en assetwaarde als bestuurlijk instrument</span>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-teal-600 font-bold mt-0.5">→</span>
            <span>Voorspelbare en onderbouwde investeringsbeslissingen</span>
          </div>
        </div>
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
          Het governance-systeem bestaat uit vier lagen
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
            <p class="text-sm text-gray-300">Governance Compass en RELICORE als digitaal fundament</p>
          </div>
          <div class="bg-navy-900 text-white rounded-xl p-6">
            <div class="text-teal-400 font-bold text-xs uppercase tracking-widest mb-2">Implementatie</div>
            <p class="text-sm text-gray-300">Borging in de organisatie — van nulmeting tot structureel stuurinstrument</p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- SOFTWARE — Compass links, RELICORE rechts -->
  <section class="py-20 px-6 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-3">
        Software
      </p>
      <h2 class="text-2xl font-bold text-navy-900 mb-3">
        Twee producten. Één samenhangend systeem.
      </h2>
      <p class="text-gray-500 mb-12 max-w-xl">
        Governance Compass en RELICORE zijn niet losstaande softwareproducten —
        ze zijn de digitale laag van het governance-systeem.
      </p>
      <div class="grid md:grid-cols-2 gap-8">

        <!-- Governance Compass — links, ingang -->
        <div class="bg-white rounded-xl p-8 border border-gray-200 hover:border-teal-300 transition-colors">
          <p class="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-2">
            Startpunt
          </p>
          <h3 class="text-xl font-bold text-navy-900 mb-1">Governance Compass</h3>
          <p class="text-sm text-gray-400 italic mb-4">Direction for asset-based decision making</p>
          <p class="text-gray-600 text-sm leading-relaxed mb-5">
            Geeft boards direct inzicht in waar governance ontbreekt —
            en waar de grootste bestuurlijke risico's en kansen liggen.
          </p>
          <a href="/governance-compass"
             class="text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors">
            Meer over Governance Compass →
          </a>
        </div>

        <!-- RELICORE — rechts, systeem -->
        <div class="bg-white rounded-xl p-8 border border-gray-200 hover:border-teal-300 transition-colors">
          <p class="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-2">
            Systeem
          </p>
          <h3 class="text-xl font-bold text-navy-900 mb-4">RELICORE</h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-5">
            Het systeem waarin asset governance daadwerkelijk wordt ingericht en gestuurd.
            Van positionering en beleid tot besluitvormingsstructuur en kennisborging.
          </p>
          <a href="/relicore"
             class="text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors">
            Meer over RELICORE →
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
        AssetWize is opgericht door Dimitry van Dort, asset governance specialist
        met meer dan vijftien jaar ervaring in complexe asset-intensieve omgevingen.
      </p>
      <p class="text-gray-600 leading-relaxed mb-4">
        AssetWize opereert als onafhankelijke asset governance partner —
        op het snijvlak van bestuur, techniek en finance.
      </p>
      <p class="text-gray-600 leading-relaxed">
        Governance Compass en RELICORE zijn voortgekomen uit die praktijk.
        Gebouwd op governance-expertise, niet op generieke softwarelogica.
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
        In een eerste gesprek maken we zichtbaar waar de grootste
        bestuurlijke risico's en kansen liggen.
      </p>
      <a href="/contact"
         class="inline-flex px-8 py-4 bg-teal-700 hover:bg-teal-600
                text-white font-semibold rounded-lg transition-colors">
        Start het gesprek
      </a>
    </div>
  </section>

</BaseLayout>
```


---

## Stap 4 — am-scan pagina hernoemen naar governance-compass

De bestaande `/am-scan/` stub vervangen door `/governance-compass/` (al aangemaakt in stap 2).
De oude map verwijderen:

```bash
rm -rf /Users/drvandort/dev/assetwize-platform/apps/website/src/pages/am-scan
```

---

## Stap 5 — Lokaal testen

```bash
cd /Users/drvandort/dev/assetwize-platform/apps/website
npm run dev
```

Controleer op http://localhost:4321:
- Header is sticky — blijft zichtbaar bij scrollen
- Navigatievolgorde: Governance Compass → RELICORE → Over ons → Contact
- Hero: witte subzin + teal accent + "Start het gesprek"
- Pijnlagen: horizontale rij-layout met dividers, geen kaarten
- Aanpak: sterkere stelling, resultaat met pijlen
- Software: Compass links (Startpunt), RELICORE rechts (Systeem)
- Compass heeft tagline in italic
- Over AssetWize: kortere eerste zin
- CTA: scherpere opener
- Geen console errors

---

## Stap 6 — Committen en pushen

```bash
cd /Users/drvandort/dev/assetwize-platform
git add .
git commit -m "feat(website): homepage finale — sticky header, Governance Compass, narratieve pijnlagen (TASK-002d)"
git push
```

Zet STATUS op DONE.

---

## Acceptatiecriteria

- [ ] Header sticky met backdrop-blur
- [ ] Navigatie: Governance Compass eerst, dan RELICORE
- [ ] /governance-compass stub pagina aanwezig
- [ ] /am-scan map verwijderd
- [ ] Hero: witte subzin + teal accent los + "Start het gesprek"
- [ ] Pijnlagen: rij-layout met dividers (geen kaarten)
- [ ] Aanpak: "ontwerpt en implementeert het governance-systeem waarop..."
- [ ] Vier lagen: "Software" verwijst naar Governance Compass en RELICORE
- [ ] Software: Compass links met tagline, RELICORE rechts
- [ ] CTA: "maken we zichtbaar waar de grootste bestuurlijke risico's..."
- [ ] Geen build errors
- [ ] Gecommit en gepusht

---

## Result

Uitgevoerd op 2026-03-28.

- Header sticky met backdrop-blur-sm en z-50
- Navigatie: Governance Compass eerst, dan RELICORE (nav + footer)
- /governance-compass stub pagina aangemaakt met tagline
- /am-scan map verwijderd
- Hero: witte subzin + teal accent los + "Start het gesprek" (bg-teal-700)
- Pijnlagen: rij-layout met divide-y dividers, narratief format
- Aanpak: "ontwerpt en implementeert het governance-systeem waarop..."
- Vier lagen: Software verwijst naar Governance Compass en RELICORE
- Software: Compass links (Startpunt) met italic tagline, RELICORE rechts (Systeem)
- CTA: "maken we zichtbaar waar de grootste bestuurlijke risico's..."
- Handmatige wijzigingen van gebruiker behouden: logo h-16 in nav, h-12 in footer, py-3 nav
- Build succesvol, alle criteria geverifieerd
