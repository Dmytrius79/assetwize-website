# TASK-003b — RELICORE logo + software ontvangstpagina

**STATUS**: DONE
**Sprint**: W1.2
**Geschatte tijd**: 1.5 uur

---

## Context

Twee acties in één taak:

1. RELICORE SVG logo aanmaken en gebruiken op de marketing pagina
2. RELICORE software ontvangstpagina bouwen op /relicore-app
   (tijdelijk in Astro site — verhuist later naar relicore.assetwize.nl)

De "Open RELICORE" knop op de marketing pagina (/relicore) linkt
tijdelijk naar /relicore-app. Zodra relicore.assetwize.nl live is,
wordt die link vervangen.

---

## Stap 1 — RELICORE SVG logo aanmaken

Maak `apps/website/public/relicore_logo.svg`:

```svg
<svg viewBox="0 0 200 48" xmlns="http://www.w3.org/2000/svg">
  <!-- Crosshair icoon -->
  <circle cx="24" cy="24" r="20" fill="none" stroke="#ffffff" stroke-width="2"/>
  <circle cx="24" cy="24" r="5" fill="none" stroke="#ffffff" stroke-width="2"/>
  <line x1="24" y1="4" x2="24" y2="14" stroke="#ffffff" stroke-width="2"/>
  <line x1="24" y1="34" x2="24" y2="44" stroke="#ffffff" stroke-width="2"/>
  <line x1="4" y1="24" x2="14" y2="24" stroke="#ffffff" stroke-width="2"/>
  <line x1="34" y1="24" x2="44" y2="24" stroke="#ffffff" stroke-width="2"/>
  <!-- Woordmerk -->
  <text x="56" y="30" font-family="Inter,system-ui,sans-serif"
        font-size="18" font-weight="700" letter-spacing="3"
        fill="#ffffff">RELICORE</text>
</svg>
```

Maak ook een donkere variant voor gebruik op lichte achtergronden
`apps/website/public/relicore_logo_dark.svg`:

```svg
<svg viewBox="0 0 200 48" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="24" r="20" fill="none" stroke="#0f1f35" stroke-width="2"/>
  <circle cx="24" cy="24" r="5" fill="none" stroke="#0f1f35" stroke-width="2"/>
  <line x1="24" y1="4" x2="24" y2="14" stroke="#0f1f35" stroke-width="2"/>
  <line x1="24" y1="34" x2="24" y2="44" stroke="#0f1f35" stroke-width="2"/>
  <line x1="4" y1="24" x2="14" y2="24" stroke="#0f1f35" stroke-width="2"/>
  <line x1="34" y1="24" x2="44" y2="24" stroke="#0f1f35" stroke-width="2"/>
  <text x="56" y="30" font-family="Inter,system-ui,sans-serif"
        font-size="18" font-weight="700" letter-spacing="3"
        fill="#0f1f35">RELICORE</text>
</svg>
```


---

## Stap 2 — RELICORE logo gebruiken op marketing pagina

Pas `src/pages/relicore/index.astro` aan — alleen de hero sectie:

Voeg het logo toe boven de h1, en update de "Open RELICORE" link:

Vervang in de hero:
```astro
<p class="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-5">
  RELICORE
</p>
```

Door:
```astro
<div class="mb-8">
  <img src="/relicore_logo.svg" alt="RELICORE" class="h-10 w-auto" />
</div>
```

Update de "Open RELICORE" knop URL:
```astro
<!-- Tijdelijk naar /relicore-app — wordt later relicore.assetwize.nl -->
<a href="/relicore-app" ...>Open RELICORE</a>
```

---

## Stap 3 — RELICORE software ontvangstpagina aanmaken

Maak map en bestand `src/pages/relicore-app/index.astro`.

Dit is een volledig zelfstandige pagina — GEEN BaseLayout.
Eigen header in RELICORE stijl (navy, crosshair logo, BY ASSETWIZE).

```astro
---
// Geen BaseLayout — eigen RELICORE shell
---
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>RELICORE — Lifecycle Asset Intelligence</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', system-ui, sans-serif; background: #f8f9fa; color: #0f1f35; min-height: 100vh; }
  </style>
</head>
<body>

  <!-- RELICORE Header — zelfde stijl als live app -->
  <header style="background: #0f1f35; padding: 0 2rem; height: 56px; display: flex; align-items: center; justify-content: space-between;">
    <div style="display: flex; align-items: center; gap: 1rem;">
      <svg viewBox="0 0 48 48" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" fill="none" stroke="white" stroke-width="2"/>
        <circle cx="24" cy="24" r="5" fill="none" stroke="white" stroke-width="2"/>
        <line x1="24" y1="4" x2="24" y2="14" stroke="white" stroke-width="2"/>
        <line x1="24" y1="34" x2="24" y2="44" stroke="white" stroke-width="2"/>
        <line x1="4" y1="24" x2="14" y2="24" stroke="white" stroke-width="2"/>
        <line x1="34" y1="24" x2="44" y2="24" stroke="white" stroke-width="2"/>
      </svg>
      <span style="color: white; font-size: 15px; font-weight: 700; letter-spacing: 3px;">RELICORE</span>
    </div>
    <span style="color: #6b7280; font-size: 11px; letter-spacing: 1px; text-transform: uppercase;">By AssetWize</span>
  </header>

  <!-- Ontvangstpagina content -->
  <main style="max-width: 640px; margin: 0 auto; padding: 80px 2rem;">

    <div style="margin-bottom: 3rem;">
      <p style="font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #147878; margin-bottom: 1rem;">
        RELICORE Platform
      </p>
      <h1 style="font-size: 2rem; font-weight: 700; color: #0f1f35; margin-bottom: 1rem; line-height: 1.3;">
        Lifecycle Asset Intelligence
      </h1>
      <p style="color: #4b5563; line-height: 1.7; margin-bottom: 0.75rem;">
        RELICORE is een engineering- en beslissingslaag voor assetintensieve organisaties.
        Van ruwe CMMS-data naar gestructureerde intelligence voor reliability,
        lifecycle en strategische besluitvorming.
      </p>
      <p style="color: #4b5563; line-height: 1.7;">
        Log in met uw organisatieaccount om uw werkruimtes te openen.
      </p>
    </div>

    <!-- Login blok -->
    <div style="background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 2rem;">
      <p style="font-size: 13px; font-weight: 600; color: #0f1f35; margin-bottom: 1.5rem;">
        Toegang voor organisaties
      </p>

      <!-- Placeholder login — wordt vervangen door Clerk component -->
      <div style="background: #f8f9fa; border: 1px dashed #d1d5db; border-radius: 8px; padding: 2rem; text-align: center; color: #9ca3af; font-size: 13px;">
        Login component (Clerk) — wordt gekoppeld in Platform Fase 3
      </div>

      <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid #f3f4f6;">
        <p style="font-size: 12px; color: #9ca3af; text-align: center;">
          Nog geen toegang?
          <a href="/contact" style="color: #147878; font-weight: 500; text-decoration: none;">Neem contact op →</a>
        </p>
      </div>
    </div>

    <!-- Terug link -->
    <div style="margin-top: 2rem; text-align: center;">
      <a href="/relicore" style="font-size: 12px; color: #9ca3af; text-decoration: none;">
        ← Terug naar RELICORE informatie
      </a>
    </div>

  </main>

</body>
</html>
```


---

## Stap 4 — Lokaal testen

```bash
cd /Users/drvandort/dev/assetwize-platform/apps/website
npm run dev
```

Controleer:

**Marketing pagina** http://localhost:4321/relicore:
- RELICORE SVG logo zichtbaar in de hero (wit op navy)
- "Open RELICORE" knop linkt naar /relicore-app

**Software ontvangstpagina** http://localhost:4321/relicore-app:
- Eigen RELICORE header (navy, crosshair icoon, BY ASSETWIZE)
- Geen AssetWize navigatie — volledig eigen shell
- Ontvangstpagina met intro tekst
- Login placeholder zichtbaar
- "Terug naar RELICORE informatie" link werkt
- Geen build errors

---

## Stap 5 — Committen en pushen

```bash
cd /Users/drvandort/dev/assetwize-platform
git add .
git commit -m "feat(website): RELICORE SVG logo + software ontvangstpagina /relicore-app (TASK-003b)"
git push
```

Zet STATUS op DONE.

---

## Acceptatiecriteria

- [ ] relicore_logo.svg aanwezig in public/
- [ ] relicore_logo_dark.svg aanwezig in public/
- [ ] Marketing pagina /relicore toont SVG logo in hero
- [ ] "Open RELICORE" linkt naar /relicore-app
- [ ] /relicore-app heeft eigen RELICORE header (geen BaseLayout)
- [ ] Login placeholder aanwezig
- [ ] "Terug naar RELICORE informatie" link werkt
- [ ] Geen build errors
- [ ] Gecommit en gepusht

---

## Notitie voor later

Zodra relicore.assetwize.nl live is:
1. /relicore-app pagina verhuist naar relicore.assetwize.nl
2. "Open RELICORE" knop op marketing pagina wordt bijgewerkt naar https://relicore.assetwize.nl
3. Login placeholder wordt vervangen door Clerk component (Platform Fase 3)

## Result

Uitgevoerd op 2026-03-28.

- relicore_logo.svg (wit) en relicore_logo_dark.svg (navy) aangemaakt in public/
- Marketing hero: SVG logo vervangt tekst-label, h-10
- "Open RELICORE" knoppen linken naar /relicore-app (2x: hero + CTA)
- /relicore-app ontvangstpagina: eigen RELICORE shell (geen BaseLayout)
  - Navy header met crosshair icoon + "BY ASSETWIZE"
  - Intro tekst + login placeholder (Clerk, Fase 3)
  - "Terug naar RELICORE informatie" link naar /relicore
- Build succesvol, alle criteria geverifieerd
