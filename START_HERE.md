# START_HERE.md — AssetWize Website Project

> Dit is het startpunt voor een nieuw gesprek of een nieuwe Claude Code sessie.
> Lees dit volledig voordat je iets doet.

---

## 1. Wat is dit project?

Dit is de **officiële marketingwebsite van AssetWize Software Solutions** —
het moedermerk achter Compass, Atlas en Relicore.

De website draait op **www.assetwize.nl** en is het centrale publieke gezicht van AssetWize.
Hij dient als:

- Merkplatform op board/directieniveau (AssetWize als governance partner)
- Landingspagina voor drie instrumenten: **Compass**, **Atlas** en **Relicore**
- Doorgangspunt naar de apps zelf (`compass.assetwize.nl`, `relicore.app`)

**De website is GEEN productapp.** Hij is marketing + doorgangspunt.

---

## 2. Huidige staat

### Wat er is

Een werkende Astro-website met de volgende pagina's:

| Pagina | Route | Status |
|---|---|---|
| Homepage | `/` | Uitgewerkt — board-niveau, governance narratief |
| Compass | `/compass` | Uitgewerkt — productpagina, linkt naar `compass.assetwize.nl` |
| Atlas | `/atlas` | Uitgewerkt — productpagina |
| Relicore | `/relicore` | Uitgewerkt — productpagina, linkt naar `relicore.app` |
| Relicore-app landingspagina | `/relicore-app` | Uitgewerkt — eigen Relicore-shell, zonder BaseLayout |
| Waarom AssetWize | `/waarom` | Uitgewerkt |
| Contact | `/contact` | Uitgewerkt |

### Wat ontbreekt / nog te bouwen

- Geen Compass-landingspagina op de site (equivalent van `/relicore-app`)
- Geen KADENZ pagina (status product niet vastgesteld)
- Live site volgt nog niet de merkrichtlijn v2.0 (rebrand nog te doen, zie `CLAUDE.md`)

### Lokaal draaien

```bash
cd /Users/drvandort/dev/assetwize-website
npm install
npm run dev
# → http://localhost:4321/
```

---

## 3. Merkstructuur

Merkregels, taal en kleuren: zie `CLAUDE.md` (verwijst naar `BRAND_GUIDELINES.md` v2.0).

**Producthiërarchie:**

```
AssetWize Software Solutions     ← moedermerk (www.assetwize.nl)
├── Compass                      ← www.assetwize.nl/compass · app: compass.assetwize.nl
├── Atlas                        ← www.assetwize.nl/atlas
└── Relicore                     ← www.assetwize.nl/relicore · app: relicore.app
```

---

## 4. Tech stack

| Onderdeel | Keuze |
|---|---|
| Framework | Astro (statisch, snel) |
| Styling | Tailwind CSS (utility-first) |
| Hosting | Cloudflare Pages — push naar `main` gaat live, push naar een branch geeft een preview |
| Domein | www.assetwize.nl (gemigreerd van Wix naar Cloudflare Pages) |
| DNS | Cloudflare DNS |
| Repo | GitHub — `Dmytrius79/assetwize-website` (publiek) |

**Build:**
```bash
npm run build
# Output: dist/
```

**Cloudflare Pages config:**
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18+

---

## 5. Bestandsstructuur

```
assetwize-website/
├── src/
│   ├── components/
│   │   └── CompassLogo.astro      ← Compass merkcomponent
│   ├── layouts/
│   │   └── BaseLayout.astro       ← Gedeelde header/footer shell
│   ├── pages/
│   │   ├── index.astro            ← Homepage (board niveau)
│   │   ├── compass/index.astro    ← Compass productpagina
│   │   ├── atlas/index.astro      ← Atlas productpagina
│   │   ├── relicore/index.astro   ← Relicore productpagina
│   │   ├── relicore-app/index.astro ← Relicore-app landingspagina
│   │   ├── waarom/index.astro     ← Waarom AssetWize
│   │   └── contact/index.astro    ← Contact
│   └── styles/
│       └── global.css             ← Tailwind + design tokens
├── public/                        ← Logo's, favicons, og-image, robots.txt
├── docs/
│   ├── ARCHITECTURE.md            ← Volledige platformarchitectuur
│   ├── OPERATIONEEL_PROTOCOL.md
│   ├── ASSETWIZE_KB_START.md      ← Kennisbank overdrachtsnotitie
│   ├── WERKAFSPRAKEN_DOCUMENTATIE.md
│   ├── operations/RUNBOOK.md
│   ├── design/CONSULTANCY_WORKFLOW.md
│   └── archief/                   ← Gearchiveerde documenten (o.a. oud CLAUDE.md)
├── tasks/                         ← Taakbestanden + werkwijze (README.md)
├── astro.config.mjs
├── package.json
├── wrangler.jsonc                 ← Cloudflare-config
├── CLAUDE.md                      ← Werkwijze en merkregels voor Claude Code
└── START_HERE.md                  ← Dit bestand
```

---

## 6. Kleurenpalet

Zie `CLAUDE.md` — kleuren staan in `BRAND_GUIDELINES.md` v2.0, niet in dit bestand.

---

## 7. Wat een designsessie moet opleveren

De huidige website werkt maar is technisch gebouwd — geen designbureau betrokken.
Bij een herontwerp of designsessie zijn dit de kernvragen:

1. **Visuele identiteit** — Is het huidige navy/teal palet het definitieve merk? Typografie?
2. **Homepage narratief** — Klopt de volgorde: pijn → aanpak → software → CTA?
3. **Productpagina's** — Hoe presenteer je Compass, Atlas en Relicore consistent maar onderscheidend?
4. **Login doorgangspunt** — `/relicore-app` is nu een simpel login card. Moet dit een volwaardige ontvangstpagina worden?
5. **Mobile** — Huidige layout is responsive maar niet mobiel geoptimaliseerd
6. **Animaties / interactie** — Nu volledig statisch

---

## 8. Volgende stappen (in volgorde)

1. ~~**GitHub repo aanmaken**~~ — gedaan: `Dmytrius79/assetwize-website` (publiek)
2. ~~**Cloudflare Pages koppelen**~~ — gedaan: automatische deploys bij push
3. **Designsessie** — visuele identiteit, paginastructuur, component library
4. **Compass-landingspagina** — equivalent van `/relicore-app`
5. ~~**Domeinmigratie**~~ — gedaan: `www.assetwize.nl` draait op Cloudflare Pages
6. **KADENZ pagina** — zodra product concreter is

---

## 9. Relatie met andere projecten

| Project | Relatie |
|---|---|
| Relicore (`/opt/relicore/` op VM) | De app waar `/relicore` naar linkt (`relicore.app`). Eigen repo: `Dmytrius79/relicore` |
| AssetWize Kennisbank (`/opt/relicore/assetwize-kb/`) | Intern, draait op Relicore-VM. Geen directe koppeling met deze website |
| Platform core (toekomstig) | Auth (Clerk) + billing (Stripe) — nog te bouwen. Deze website linkt straks naar `platform.assetwize.nl` voor login |

---

## 10. Werkwijze in dit project

- **Claude AI** — architectuur, content, taakbestanden schrijven
- **Claude Code** — implementatie, Astro pagina's bouwen, commits
- **Dimitry** — beslissingen, richting, designkeuzes

Claude Code starten:
```bash
cd /Users/drvandort/dev/assetwize-website
claude --dangerously-skip-permissions
```

Daarna: `"Lees START_HERE.md en tasks/TASK-XXX.md en voer de taak uit volgens tasks/README.md."`

**Taken en opdrachten:** zie `tasks/README.md` voor de volledige werkwijze —
taakbestanden, branches, build vóór commit, het sjabloon en de standaardopdracht.

---

*AssetWize Website — START_HERE.md*
*Aangemaakt juni 2026 — na migratie vanuit assetwize-platform*

---

## Gedeelde kennisbasis — lees altijd eerst

Deze website is onderdeel van het AssetWize-systeem.
Lees bij elke sessie **voordat je begint** `CLAUDE.md` in de repo-root. Die verwijst naar
de merknorm `BRAND_GUIDELINES.md` v2.0 in Google Drive.

Dit borgt consistentie in taal, merkidentiteit en positionering
met de rest van het AssetWize-systeem.

**Documentatiebeheer:** zie `docs/WERKAFSPRAKEN_DOCUMENTATIE.md`
voor de volledige afspraken over wat waar wordt bewaard.
