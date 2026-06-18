# TASK-003 — RELICORE marketing pagina

**STATUS**: DONE
**Sprint**: W1.2
**Geschatte tijd**: 2.5 uur

---

## Context

De RELICORE marketing pagina op assetwize.nl/relicore.
Doelgroep: asset managers, maintenance engineers, plant managers, besluitvormers.
Niet board-niveau zoals de homepage — maar wel strategisch/technisch niveau.

Positionering: RELICORE is geen CMMS-vervanging.
Het is een engineering- en beslissingslaag bóven CMMS-systemen.

Visuals: twee gecropte screenshots van de live RELICORE software
+ één SVG architectuurdiagram (CMMS → RELICORE → Beslissingen).
Geen stockfoto's.

---

## Stap 1 — Screenshots verzamelen

Maak twee screenshots van de RELICORE software en sla op in public/:

### Screenshot 1 — Structure module
Open in Chrome: https://qld-cloud-therapeutic-apr.trycloudflare.com/assets
Sla de pagina op als screenshot via Python:

```bash
pip3 install selenium 2>/dev/null || true
python3 << 'EOF'
from PIL import Image
import subprocess, os

# Screenshot via screencapture (macOS)
subprocess.run([
    'screencapture', '-x',
    '/Users/drvandort/dev/assetwize-platform/apps/website/public/relicore_structure.png'
])
print("Screenshot opgeslagen")
EOF
```

Als screencapture niet werkt: vraag Dimitry om handmatig een screenshot te maken
van https://qld-cloud-therapeutic-apr.trycloudflare.com/assets
en op te slaan als:
`apps/website/public/relicore_structure.png`

### Screenshot 2 — Governance module
Zelfde aanpak voor: https://qld-cloud-therapeutic-apr.trycloudflare.com/governance
Opslaan als: `apps/website/public/relicore_governance.png`

---

## Stap 2 — Pagina aanmaken

Vervang `src/pages/relicore/index.astro` volledig:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---
<BaseLayout
  title="RELICORE — Lifecycle Asset Intelligence Platform"
  description="RELICORE is een engineering- en beslissingslaag boven CMMS-systemen. Gestructureerde asset intelligence voor reliability, lifecycle en strategische besluitvorming."
>

  <!-- HERO -->
  <section class="bg-navy-900 text-white pt-28 pb-20 px-6">
    <div class="max-w-4xl mx-auto">
      <p class="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-5">
        RELICORE
      </p>
      <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl">
        Lifecycle Asset Intelligence Platform
      </h1>
      <p class="text-white text-lg font-semibold mb-2 max-w-2xl">
        RELICORE is geen CMMS-vervanging.
      </p>
      <p class="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
        Het is een engineering- en beslissingslaag bóven CMMS-systemen —
        die ruwe assetdata omzet in gestructureerde intelligence voor
        reliability, lifecycle en strategische besluitvorming.
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <a href="https://relicore.assetwize.nl"
           class="inline-flex px-7 py-3.5 bg-teal-700 hover:bg-teal-600
                  text-white font-semibold rounded-lg transition-colors text-sm">
          Open RELICORE
        </a>
        <a href="/contact"
           class="inline-flex px-7 py-3.5 border border-gray-600 hover:border-gray-400
                  text-gray-300 hover:text-white font-semibold rounded-lg transition-colors text-sm">
          Demo aanvragen
        </a>
      </div>
    </div>
  </section>


  <!-- HET PROBLEEM -->
  <section class="py-20 px-6 bg-gray-50">
    <div class="max-w-5xl mx-auto">
      <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-3">
        Het probleem
      </p>
      <h2 class="text-2xl font-bold text-navy-900 mb-12 max-w-2xl">
        Assetregisters zijn technisch gevuld — maar strategisch onbruikbaar.
      </h2>
      <div class="space-y-0 divide-y divide-gray-200">

        <div class="py-8 grid md:grid-cols-4 gap-4 items-start">
          <div class="text-teal-700 font-bold text-sm uppercase tracking-wide">
            Verkeerd perspectief
          </div>
          <div class="md:col-span-3">
            <p class="text-navy-900 font-semibold mb-1">
              Assets worden geregistreerd vanuit wat er staat — niet vanuit wat er moet werken.
            </p>
            <p class="text-gray-500 text-sm leading-relaxed">
              Het register groeit organisch mee met de organisatie.
              Resultaat: technisch gevuld, strategisch onbruikbaar.
            </p>
          </div>
        </div>

        <div class="py-8 grid md:grid-cols-4 gap-4 items-start">
          <div class="text-teal-700 font-bold text-sm uppercase tracking-wide">
            Onbetrouwbaar onderhoud
          </div>
          <div class="md:col-span-3">
            <p class="text-navy-900 font-semibold mb-1">
              Onduidelijk wat een asset is en welke functie het vervult.
            </p>
            <p class="text-gray-500 text-sm leading-relaxed">
              Onderhoud wordt onbetrouwbaar. Compliance wordt een risico.
              Wettelijk verplichte keuringen zijn niet herleidbaar.
            </p>
          </div>
        </div>

        <div class="py-8 grid md:grid-cols-4 gap-4 items-start">
          <div class="text-teal-700 font-bold text-sm uppercase tracking-wide">
            Lifecycle op gevoel
          </div>
          <div class="md:col-span-3">
            <p class="text-navy-900 font-semibold mb-1">
              Vervangingsbeslissingen zonder grondslag.
            </p>
            <p class="text-gray-500 text-sm leading-relaxed">
              Lifecycle-beslissingen verliezen hun fundament.
              Investeringen worden gedaan op gevoel — niet op engineering intelligence.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ARCHITECTUURDIAGRAM -->
  <section class="py-20 px-6">
    <div class="max-w-5xl mx-auto">
      <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-3">
        De architectuur
      </p>
      <h2 class="text-2xl font-bold text-navy-900 mb-4">
        Een beslissingslaag boven uw CMMS
      </h2>
      <p class="text-gray-500 mb-12 max-w-xl">
        RELICORE vervangt uw CMMS niet — het voegt de engineeringlaag toe
        die uw CMMS mist.
      </p>

      <!-- SVG Architectuurdiagram -->
      <div class="bg-gray-50 rounded-2xl p-8 md:p-12">
        <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-3xl mx-auto">
          <!-- CMMS blok -->
          <rect x="20" y="60" width="180" height="80" rx="8" fill="#0f1f35"/>
          <text x="110" y="95" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="600" letter-spacing="2" font-family="Inter,system-ui,sans-serif">CMMS</text>
          <text x="110" y="113" text-anchor="middle" fill="#9ca3af" font-size="9" font-family="Inter,system-ui,sans-serif">Ultimo · SAP PM · Maximo</text>
          <text x="110" y="127" text-anchor="middle" fill="#9ca3af" font-size="9" font-family="Inter,system-ui,sans-serif">Infor EAM</text>

          <!-- Pijl CMMS → RELICORE -->
          <line x1="200" y1="100" x2="290" y2="100" stroke="#147878" stroke-width="2"/>
          <polygon points="290,95 302,100 290,105" fill="#147878"/>
          <text x="251" y="90" text-anchor="middle" fill="#6b7280" font-size="8" font-family="Inter,system-ui,sans-serif">import</text>

          <!-- RELICORE blok -->
          <rect x="302" y="40" width="196" height="120" rx="8" fill="#147878"/>
          <text x="400" y="75" text-anchor="middle" fill="white" font-size="11" font-weight="700" letter-spacing="1" font-family="Inter,system-ui,sans-serif">RELICORE</text>
          <text x="400" y="93" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="8" font-family="Inter,system-ui,sans-serif">Structure · Criticality · FMECA</text>
          <text x="400" y="108" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="8" font-family="Inter,system-ui,sans-serif">Lifecycle · Spares · KPI Impact</text>
          <text x="400" y="123" text-anchor="middle" fill="rgba(255,255,255,0.55)" font-size="8" font-style="italic" font-family="Inter,system-ui,sans-serif">Engineering Intelligence Layer</text>
          <text x="400" y="148" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="7.5" font-family="Inter,system-ui,sans-serif">publish</text>
          <line x1="400" y1="138" x2="400" y2="160" stroke="rgba(255,255,255,0.3)" stroke-width="1" stroke-dasharray="3,2"/>

          <!-- Pijl RELICORE → Beslissingen -->
          <line x1="498" y1="100" x2="578" y2="100" stroke="#147878" stroke-width="2"/>
          <polygon points="578,95 590,100 578,105" fill="#147878"/>
          <text x="534" y="90" text-anchor="middle" fill="#6b7280" font-size="8" font-family="Inter,system-ui,sans-serif">intelligence</text>

          <!-- Beslissingen blok -->
          <rect x="590" y="30" width="190" height="140" rx="8" fill="#0f1f35"/>
          <text x="685" y="60" text-anchor="middle" fill="#2dd4bf" font-size="9" font-weight="600" letter-spacing="1.5" font-family="Inter,system-ui,sans-serif">BESLISSINGEN</text>
          <text x="685" y="80" text-anchor="middle" fill="#9ca3af" font-size="8.5" font-family="Inter,system-ui,sans-serif">Reliability strategie</text>
          <text x="685" y="96" text-anchor="middle" fill="#9ca3af" font-size="8.5" font-family="Inter,system-ui,sans-serif">Lifecycle planning</text>
          <text x="685" y="112" text-anchor="middle" fill="#9ca3af" font-size="8.5" font-family="Inter,system-ui,sans-serif">Onderhoudsstrategie</text>
          <text x="685" y="128" text-anchor="middle" fill="#9ca3af" font-size="8.5" font-family="Inter,system-ui,sans-serif">Reservedelen</text>
          <text x="685" y="144" text-anchor="middle" fill="#9ca3af" font-size="8.5" font-family="Inter,system-ui,sans-serif">Business impact</text>
        </svg>
      </div>
    </div>
  </section>


  <!-- SCREENSHOT STRUCTURE -->
  <section class="py-20 px-6 bg-gray-50">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-3">
          Structure module
        </p>
        <h2 class="text-2xl font-bold text-navy-900 mb-4">
          Van registratie naar procesfunctie
        </h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          RELICORE organiseert assets op basis van procesfuncties —
          de functionele bijdrage van een asset, onafhankelijk van technische uitvoering.
        </p>
        <p class="text-gray-600 leading-relaxed">
          De procesfunctie is het meest stabiele element in een assetstructuur.
          Equipment wordt vervangen, technologie verandert —
          maar de functie blijft. Dat is het ankerpunt.
        </p>
      </div>
      <div class="rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <img
          src="/relicore_structure.png"
          alt="RELICORE Structure module — procesfunctie boom met asset toewijzing"
          class="w-full h-auto"
        />
      </div>
    </div>
  </section>

  <!-- SCREENSHOT GOVERNANCE -->
  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div class="rounded-xl overflow-hidden shadow-lg border border-gray-200 order-2 md:order-1">
        <img
          src="/relicore_governance.png"
          alt="RELICORE Governance module — datakwaliteit dashboard"
          class="w-full h-auto"
        />
      </div>
      <div class="order-1 md:order-2">
        <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-3">
          Governance module
        </p>
        <h2 class="text-2xl font-bold text-navy-900 mb-4">
          Datakwaliteit als besturingsinstrument
        </h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          RELICORE maakt de kwaliteit van assetdata inzichtelijk en beheersbaar.
          Niet als eenmalige opschoonactie — als continu governance instrument.
        </p>
        <p class="text-gray-600 leading-relaxed">
          Volledigheid, structuurkoppeling en workflowstatus
          zijn altijd zichtbaar — per asset, per veld, per verantwoordelijke.
        </p>
      </div>
    </div>
  </section>

  <!-- MODULES -->
  <section class="py-20 px-6 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-3">
        Modules
      </p>
      <h2 class="text-2xl font-bold text-navy-900 mb-12">
        Één platform. Zeven engineering modules.
      </h2>
      <div class="grid md:grid-cols-4 gap-4">

        <div class="bg-white rounded-xl p-6 border border-gray-200">
          <div class="text-teal-700 font-bold text-xs uppercase tracking-widest mb-2">Foundation</div>
          <p class="text-navy-900 font-semibold text-sm mb-1">Import & normalisatie</p>
          <p class="text-gray-500 text-xs leading-relaxed">Asset import en master data normalisatie vanuit CMMS</p>
        </div>

        <div class="bg-white rounded-xl p-6 border border-gray-200">
          <div class="text-teal-700 font-bold text-xs uppercase tracking-widest mb-2">Structure</div>
          <p class="text-navy-900 font-semibold text-sm mb-1">Functioneel modelleren</p>
          <p class="text-gray-500 text-xs leading-relaxed">Procesfunctie-gebaseerde assetstructuur</p>
        </div>

        <div class="bg-white rounded-xl p-6 border border-gray-200">
          <div class="text-teal-700 font-bold text-xs uppercase tracking-widest mb-2">Criticality</div>
          <p class="text-navy-900 font-semibold text-sm mb-1">Kritikaliteitsmodel</p>
          <p class="text-gray-500 text-xs leading-relaxed">Kritikaliteitsmodellering per asset en systeem</p>
        </div>

        <div class="bg-white rounded-xl p-6 border border-gray-200">
          <div class="text-teal-700 font-bold text-xs uppercase tracking-widest mb-2">FMECA</div>
          <p class="text-navy-900 font-semibold text-sm mb-1">Faalmodus analyse</p>
          <p class="text-gray-500 text-xs leading-relaxed">Faalmodus en effect modellering</p>
        </div>

        <div class="bg-white rounded-xl p-6 border border-gray-200">
          <div class="text-teal-700 font-bold text-xs uppercase tracking-widest mb-2">Lifecycle</div>
          <p class="text-navy-900 font-semibold text-sm mb-1">Levensduurmodellering</p>
          <p class="text-gray-500 text-xs leading-relaxed">Resterende levensduur en vervangingsplanning</p>
        </div>

        <div class="bg-white rounded-xl p-6 border border-gray-200">
          <div class="text-teal-700 font-bold text-xs uppercase tracking-widest mb-2">Spares</div>
          <p class="text-navy-900 font-semibold text-sm mb-1">Reservedelen</p>
          <p class="text-gray-500 text-xs leading-relaxed">Strategische reserveonderdelenoptimalisatie</p>
        </div>

        <div class="bg-white rounded-xl p-6 border border-gray-200">
          <div class="text-teal-700 font-bold text-xs uppercase tracking-widest mb-2">KPI Impact</div>
          <p class="text-navy-900 font-semibold text-sm mb-1">Business impact</p>
          <p class="text-gray-500 text-xs leading-relaxed">Business impact modellering per asset</p>
        </div>

        <div class="bg-navy-900 rounded-xl p-6 border border-navy-800 flex items-center justify-center">
          <p class="text-teal-400 text-sm font-semibold text-center">
            Actief in pilotimplementatie bij Syngenta NL<br/>
            <span class="text-gray-400 font-normal text-xs mt-1 block">29.872 assets</span>
          </p>
        </div>

      </div>
    </div>
  </section>


  <!-- INTEGRATIES -->
  <section class="py-20 px-6">
    <div class="max-w-5xl mx-auto">
      <p class="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-3">
        Integraties
      </p>
      <h2 class="text-2xl font-bold text-navy-900 mb-4">
        Werkt samen met uw bestaande CMMS
      </h2>
      <p class="text-gray-500 mb-10 max-w-xl">
        RELICORE vervangt uw CMMS niet. Import en export zijn bewuste acties —
        engineering logica gaat altijd boven administratief gemak.
      </p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
          <div class="text-navy-900 font-bold text-sm">Ultimo</div>
        </div>
        <div class="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
          <div class="text-navy-900 font-bold text-sm">SAP PM</div>
        </div>
        <div class="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
          <div class="text-navy-900 font-bold text-sm">Maximo</div>
        </div>
        <div class="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
          <div class="text-navy-900 font-bold text-sm">Infor EAM</div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-24 px-6 bg-navy-900 text-white">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-2xl md:text-3xl font-bold mb-5">
        Van assetregister naar engineering intelligence.
      </h2>
      <p class="text-gray-300 leading-relaxed mb-10 max-w-xl mx-auto">
        In een eerste gesprek bekijken we hoe RELICORE aansluit op uw
        huidige CMMS en assetstructuur — en wat dat concreet oplevert.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://relicore.assetwize.nl"
           class="inline-flex px-8 py-4 bg-teal-700 hover:bg-teal-600
                  text-white font-semibold rounded-lg transition-colors">
          Open RELICORE
        </a>
        <a href="/contact"
           class="inline-flex px-8 py-4 border border-gray-600 hover:border-gray-400
                  text-gray-300 hover:text-white font-semibold rounded-lg transition-colors">
          Demo aanvragen
        </a>
      </div>
    </div>
  </section>

</BaseLayout>
```

---

## Stap 3 — Screenshots plaatsen

Controleer of screenshots beschikbaar zijn:
```bash
ls /Users/drvandort/dev/assetwize-platform/apps/website/public/relicore_*.png
```

Als de bestanden ontbreken: maak ze handmatig via Chrome van de RELICORE applicatie
en sla op in de public map met exact deze namen:
- `relicore_structure.png`
- `relicore_governance.png`

Als screenshots ontbreken: vervang de `<img>` tags tijdelijk door:
```astro
<div class="w-full aspect-video bg-navy-900 rounded-xl flex items-center justify-center">
  <span class="text-teal-400 text-sm font-medium">Screenshot volgt</span>
</div>
```

---

## Stap 4 — Lokaal testen

```bash
cd /Users/drvandort/dev/assetwize-platform/apps/website
npm run dev
```

Controleer op http://localhost:4321/relicore:
- Hero laadt met navy achtergrond, twee knoppen
- Probleemblok: drie rijen met dividers
- SVG architectuurdiagram correct weergegeven
- Screenshots OF placeholder containers zichtbaar
- Modules grid: 7 kaarten + 1 navy status blok
- Integraties: 4 CMMS namen
- CTA: twee knoppen (Open RELICORE + Demo aanvragen)
- Navigatie sticky, header correct

---

## Stap 5 — Committen en pushen

```bash
cd /Users/drvandort/dev/assetwize-platform
git add .
git commit -m "feat(website): RELICORE marketing pagina — architectuurdiagram + modules + screenshots (TASK-003)"
git push
```

Zet STATUS op DONE.

---

## Acceptatiecriteria

- [ ] Hero: RELICORE positionering, twee knoppen
- [ ] Probleemblok: drie rijen narratief
- [ ] SVG architectuurdiagram aanwezig (CMMS → RELICORE → Beslissingen)
- [ ] Structure sectie: screenshot OF placeholder
- [ ] Governance sectie: screenshot OF placeholder
- [ ] Modules grid: alle 7 modules + status blok
- [ ] Integraties: 4 CMMS systemen
- [ ] CTA: Open RELICORE + Demo aanvragen
- [ ] Geen build errors
- [ ] Gecommit en gepusht

---

## Result

Uitgevoerd op 2026-03-28.

- Hero: RELICORE positionering met twee knoppen (Open RELICORE + Demo aanvragen)
- Probleemblok: drie rijen narratief met dividers
- SVG architectuurdiagram: CMMS → RELICORE → Beslissingen
- Structure sectie: placeholder (screenshots ontbreken, Dimitry moet handmatig maken)
- Governance sectie: placeholder (idem)
- Modules grid: alle 7 modules + Syngenta NL status blok (29.872 assets)
- Integraties: Ultimo, SAP PM, Maximo, Infor EAM
- CTA: twee knoppen
- Handmatige wijzigingen van gebruiker behouden: cropped logo, bg-gray-50 header, shadow-sm, transition-colors op links
- Build succesvol, alle secties geverifieerd
