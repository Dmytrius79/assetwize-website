# TASK-001 — Astro website structuur opzetten

**STATUS**: DONE
**Sprint**: W1.0
**Geschatte tijd**: 1 uur

---

## Context

De apps/website map bestaat al met lege submappen (src/pages, src/components,
src/layouts, src/content, public). Er is nog geen package.json of Astro installatie.

Dit is de fundament-taak. Geen content — alleen werkende structuur.

---

## Doel

Een draaiende Astro installatie met:
- Tailwind CSS geconfigureerd met AssetWize kleurpalet
- Cloudflare Pages adapter geïnstalleerd
- BaseLayout met minimale navigatie en footer
- Lege stub pagina's voor alle routes
- Lokaal bereikbaar op localhost:4321

---

## Stap 1 — Astro initialiseren

```bash
cd /Users/drvandort/dev/assetwize-platform/apps/website
npm create astro@latest . -- --template minimal --no-git
```

Kies bij prompts: Yes to install dependencies, No to TypeScript strict mode.

---

## Stap 2 — Tailwind installeren

```bash
npx astro add tailwind --yes
```


---

## Stap 3 — Cloudflare Pages adapter installeren

```bash
npx astro add cloudflare --yes
```

---

## Stap 4 — astro.config.mjs instellen

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
});
```

---

## Stap 5 — Tailwind kleurpalet instellen

Maak of overschrijf `tailwind.config.mjs`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#f0fdfa',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        navy: {
          700: '#1e3a5f',
          800: '#162d4a',
          900: '#0f1f35',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```


---

## Stap 6 — BaseLayout aanmaken

Maak `src/layouts/BaseLayout.astro`:

```astro
---
export interface Props {
  title: string;
  description?: string;
}
const { title, description = 'AssetWize — Structured asset governance' } = Astro.props;
---
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content={description} />
  <title>{title} | AssetWize</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
</head>
<body class="bg-white text-gray-900 font-sans">

  <header class="border-b border-gray-100">
    <nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="/" class="text-lg font-bold text-navy-900">AssetWize</a>
      <ul class="hidden md:flex gap-8 text-sm font-medium text-gray-600">
        <li><a href="/relicore" class="hover:text-teal-700">RELICORE</a></li>
        <li><a href="/am-scan" class="hover:text-teal-700">AM Scan</a></li>
        <li><a href="/over-ons" class="hover:text-teal-700">Over ons</a></li>
        <li><a href="/contact" class="hover:text-teal-700">Contact</a></li>
      </ul>
      <a href="/contact" class="px-4 py-2 bg-teal-700 text-white text-sm font-medium rounded-lg hover:bg-teal-800">
        Demo aanvragen
      </a>
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer class="bg-navy-900 text-white mt-24">
    <div class="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
      <div>
        <div class="font-bold mb-2">AssetWize</div>
        <p class="text-gray-400">Structured asset governance.</p>
      </div>
      <div>
        <div class="font-semibold text-gray-300 mb-3">Producten</div>
        <ul class="space-y-2 text-gray-400">
          <li><a href="/relicore" class="hover:text-white">RELICORE</a></li>
          <li><a href="/am-scan" class="hover:text-white">AM Scan</a></li>
        </ul>
      </div>
      <div>
        <div class="font-semibold text-gray-300 mb-3">Bedrijf</div>
        <ul class="space-y-2 text-gray-400">
          <li><a href="/over-ons" class="hover:text-white">Over ons</a></li>
          <li><a href="/contact" class="hover:text-white">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-gray-800 max-w-6xl mx-auto px-6 py-4 text-xs text-gray-500">
      © {new Date().getFullYear()} AssetWize Software Solutions
    </div>
  </footer>

</body>
</html>
```


---

## Stap 7 — Stub pagina's aanmaken

Maak de volgende pagina's aan — allemaal met dezelfde minimale inhoud:

**`src/pages/index.astro`**
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Asset governance platform">
  <section class="py-24 px-6 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-navy-900 mb-4">Homepage</h1>
    <p class="text-gray-500">Wordt uitgewerkt in TASK-002.</p>
  </section>
</BaseLayout>
```

**`src/pages/relicore/index.astro`**
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---
<BaseLayout title="RELICORE">
  <section class="py-24 px-6 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-navy-900 mb-4">RELICORE</h1>
    <p class="text-gray-500">Wordt uitgewerkt in TASK-003.</p>
  </section>
</BaseLayout>
```

**`src/pages/am-scan/index.astro`**
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---
<BaseLayout title="AM Scan">
  <section class="py-24 px-6 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-navy-900 mb-4">AM Scan</h1>
    <p class="text-gray-500">Wordt uitgewerkt in TASK-004.</p>
  </section>
</BaseLayout>
```

**`src/pages/over-ons/index.astro`**
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---
<BaseLayout title="Over ons">
  <section class="py-24 px-6 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-navy-900 mb-4">Over ons</h1>
    <p class="text-gray-500">Wordt uitgewerkt in TASK-005.</p>
  </section>
</BaseLayout>
```

**`src/pages/contact/index.astro`**
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---
<BaseLayout title="Contact">
  <section class="py-24 px-6 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-navy-900 mb-4">Contact</h1>
    <p class="text-gray-500">Wordt uitgewerkt in TASK-006.</p>
  </section>
</BaseLayout>
```

---

## Stap 8 — Lokaal testen

```bash
cd /Users/drvandort/dev/assetwize-platform/apps/website
npm run dev
```

Controleer op http://localhost:4321:
- Alle pagina's laden zonder errors
- Navigatie werkt tussen pagina's
- Footer zichtbaar op elke pagina
- Geen console errors

---

## Stap 9 — Committen en pushen

```bash
cd /Users/drvandort/dev/assetwize-platform
git add .
git commit -m "feat(website): Astro structuur + BaseLayout + stub pagina's (TASK-001)"
git push
```

Zet STATUS op DONE.

---

## Acceptatiecriteria

- [ ] Astro draait op localhost:4321
- [ ] Tailwind geconfigureerd met teal/navy kleuren
- [ ] BaseLayout aanwezig met nav en footer
- [ ] Stub pagina's aanwezig: /, /relicore, /am-scan, /over-ons, /contact
- [ ] Geen build errors
- [ ] Gecommit en gepusht

---

## Result

Uitgevoerd op 2026-03-28.

- Astro v6.1.1 geïnstalleerd met minimal template
- Tailwind CSS v4.2.2 geconfigureerd via @tailwindcss/vite plugin (v4 aanpak, CSS-based config i.p.v. tailwind.config.mjs)
- Cloudflare Pages adapter v13.1.4 geïnstalleerd
- AssetWize kleurpalet (teal + navy) ingesteld in src/styles/global.css met @theme directive
- BaseLayout.astro aangemaakt met navigatie en footer
- 5 stub pagina's: /, /relicore, /am-scan, /over-ons, /contact
- Build succesvol, alle routes retourneren HTTP 200 op localhost:4321
