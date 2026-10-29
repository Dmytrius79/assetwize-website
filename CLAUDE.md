# CLAUDE.md — AssetWize website

> Lees dit bij elke sessie, samen met `START_HERE.md` en `tasks/README.md`.

## Wat dit is

De marketingwebsite van AssetWize, live op `www.assetwize.nl`. De site presenteert
AssetWize en de instrumenten Compass, Atlas en Relicore en linkt door naar de apps zelf.
Het is een statische site, geen productapp.

## Stack

| Onderdeel | Keuze |
|---|---|
| Framework | Astro (statisch) |
| Styling | Tailwind CSS |
| Hosting | Cloudflare Pages, gekoppeld aan GitHub `Dmytrius79/assetwize-website` |

`npm run dev` start de site lokaal, `npm run build` bouwt hem naar `dist/`.
Een push naar een branch geeft een Cloudflare-preview; een push naar `main` gaat live.

## Werkwijze

Volledig in `tasks/README.md`. In het kort:

- Elke wijziging begint met een taakbestand in `tasks/`.
- Werk op een branch, nooit direct op `main`, tenzij de taak dat zegt.
- Draai `npm run build` vóór elke commit. Faalt de build, dan niet pushen.
- Merge naar `main` doet alleen Dimitry, na controle van preview en pull request.

## Merkregels

**De norm is `BRAND_GUIDELINES.md` v2.0** in Google Drive:
`00-bedrijf/30-merk-en-marketing/merkidentiteit/BRAND_GUIDELINES.md`

Lokaal: `/Users/drvandort/Library/CloudStorage/GoogleDrive-d.van.dort@assetwize.nl/Gedeelde drives/AssetWize/00-bedrijf/30-merk-en-marketing/merkidentiteit/BRAND_GUIDELINES.md`

Kleuren, tagline en teksten staan daar, niet hier. Lees de richtlijn zelf.

**Harde regels:**

- Lettertype Inter, gewichten 400 en 500. 600 alleen voor eyebrows in hoofdletters (spatiëring 0,12 em). Nooit 700.
- Sentence case in koppen, knoppen en navigatie.
- Geen uitroeptekens.
- Logo's nooit natypen of nabouwen in tekst of CSS; gebruik altijd het logobestand.
- Productnamen altijd met "by AssetWize": Compass by AssetWize, Atlas by AssetWize, Relicore by AssetWize.
- Teksten op de site niet wijzigen zonder opdracht in een taakbestand.
