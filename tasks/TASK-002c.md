# TASK-002c — Logo integreren + kleur afstemmen op merkidentiteit

**STATUS**: DONE
**Sprint**: W1.1
**Geschatte tijd**: 30 minuten

---

## Context

Het AssetWize logo (docs/assetwize_logo.png) is beschikbaar.
Het logo heeft twee kleuren:
- "ASSET" → navy #0D1F3C (matcht al met huidige navy-900)
- "WIZE" → teal #147878 (iets donkerder/blauwer dan huidige teal-700 #0f766e)

Drie acties:
1. Teal primaire kleur bijstellen naar logo-waarde #147878
2. Logo kopiëren naar public/ map
3. Tekstlabel "AssetWize" in navigatie vervangen door logo-afbeelding

---

## Stap 1 — Logo kopiëren naar public map

```bash
cp /Users/drvandort/dev/assetwize-platform/docs/assetwize_logo.png \
   /Users/drvandort/dev/assetwize-platform/apps/website/public/assetwize_logo.png
```

---

## Stap 2 — Teal kleur bijstellen in global.css

Pas in src/styles/global.css de teal-700 waarde aan:

```css
--color-teal-700: #147878;
```

Volledig bijgewerkte global.css:

```css
@import "tailwindcss";

@theme {
  --color-teal-50:  #f0fdfa;
  --color-teal-400: #2dd4bf;
  --color-teal-500: #14b8a6;
  --color-teal-600: #0d9488;
  --color-teal-700: #147878;
  --color-teal-800: #115e59;
  --color-teal-900: #134e4a;

  --color-navy-700: #1e3a5f;
  --color-navy-800: #162d4a;
  --color-navy-900: #0f1f35;

  --font-sans: 'Inter', system-ui, sans-serif;
}
```


---

## Stap 3 — Logo in navigatie + footer

Pas src/layouts/BaseLayout.astro aan.

### Navigatie — vervang tekstlabel door logo

Vervang:
```astro
<a href="/" class="text-lg font-bold text-navy-900">AssetWize</a>
```

Door:
```astro
<a href="/" class="flex items-center">
  <img
    src="/assetwize_logo.png"
    alt="AssetWize"
    class="h-8 w-auto"
  />
</a>
```

### Footer — vervang tekstlabel door logo (kleiner)

Vervang:
```astro
<div class="font-bold mb-2">AssetWize</div>
```

Door:
```astro
<div class="mb-2">
  <img
    src="/assetwize_logo.png"
    alt="AssetWize"
    class="h-6 w-auto brightness-0 invert"
  />
</div>
```

Let op: `brightness-0 invert` maakt het logo wit in de donkere footer.

---

## Stap 4 — Lokaal testen

```bash
cd /Users/drvandort/dev/assetwize-platform/apps/website
npm run dev
```

Controleer op http://localhost:4321:
- Logo zichtbaar in navigatie, niet te groot (hoogte ~32px)
- Logo wit/inverted in footer
- Teal kleur op knoppen en accenten matcht het logo
- Geen console errors
- Logo laadt op alle pagina's

---

## Stap 5 — Committen en pushen

```bash
cd /Users/drvandort/dev/assetwize-platform
git add .
git commit -m "feat(website): logo integreren + teal kleur afstemmen op merkidentiteit (TASK-002c)"
git push
```

Zet STATUS op DONE.

---

## Acceptatiecriteria

- [ ] Logo staat in apps/website/public/
- [ ] Teal-700 is #147878 in global.css
- [ ] Navigatie toont logo in plaats van tekst
- [ ] Footer toont logo wit (brightness-0 invert)
- [ ] Kleur op knoppen en accenten sluit aan op logo
- [ ] Geen build errors
- [ ] Gecommit en gepusht

---

## Result

Uitgevoerd op 2026-03-28.

- Logo gekopieerd naar apps/website/public/assetwize_logo.png
- Teal-700 bijgesteld van #0f766e naar #147878 (matcht logo)
- Navigatie: tekstlabel vervangen door logo img (h-8)
- Footer: tekstlabel vervangen door logo img (h-6, brightness-0 invert voor wit)
- Build succesvol, logo correct op alle pagina's geverifieerd
