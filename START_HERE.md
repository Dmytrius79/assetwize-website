# START_HERE.md — AssetWize Website Project

> Dit is het startpunt voor een nieuw gesprek of een nieuwe Claude Code sessie.
> Lees dit volledig voordat je iets doet.

---

## 1. Wat is dit project?

Dit is de **officiële marketingwebsite van AssetWize Software Solutions** —
het moedermerk achter RELICORE, Governance Compass en KADENZ.

De website draait op **assetwize.nl** en is het centrale publieke gezicht van AssetWize.
Hij dient als:

- Merkplatform op board/directieniveau (AssetWize als governance partner)
- Landingspagina voor twee software-producten: **RELICORE** en **Governance Compass**
- Doorgangspunt naar de software zelf (login / demo aanvragen)

**De website is GEEN productapp.** Hij is marketing + doorgangspunt.

---

## 2. Huidige staat

### Wat er is

Een werkende Astro-website met de volgende pagina's:

| Pagina | Route | Status |
|---|---|---|
| Homepage | `/` | Uitgewerkt — board-niveau, governance narratief |
| RELICORE | `/relicore` | Uitgewerkt — productpagina, modules, architectuurdiagram |
| Governance Compass | `/governance-compass` | Uitgewerkt — productpagina |
| RELICORE App ontvangst | `/relicore-app` | Uitgewerkt — login card, doorgangspunt naar app |
| Over ons | `/over-ons` | Uitgewerkt — Dimitry, filosofie, vier domeinen |
| Contact | `/contact` | Aanwezig |

### Wat ontbreekt / nog te bouwen

- Geen GitHub remote (nog niet gepushed naar GitHub)
- Geen Cloudflare Pages deployment (nog lokaal)
- Geen Governance Compass login/ontvangstpagina (equivalent van `/relicore-app`)
- Geen KADENZ pagina (product nog in planning)
- Wix (`assetwize.nl`) nog niet afgekoppeld — domein migratie nog te doen
- Design nog functioneel/technisch — geen professionele designsessie geweest

### Lokaal draaien

```bash
cd /Users/drvandort/dev/assetwize-website
npm install
npm run dev
# → http://localhost:4321/
```

---

## 3. Merkstructuur en messaging

**Strikte scheiding tussen twee niveaus:**

| | AssetWize (moedermerk) | RELICORE / Compass (producten) |
|---|---|---|
| Doelgroep | Board / directie | Asset managers / engineers |
| Taal | Governance · bestuur · systeem · richting | Structuur · inzicht · controle · boven CMMS |
| CTA | "Start het gesprek" | "Demo aanvragen" / "Open RELICORE" |
| Nooit | CMMS-taal, tool-taal | Board-taal, governance-jargon |

Elke pagina heeft één taal. Nooit mengen.

**Producthiërarchie:**

```
AssetWize Software Solutions     ← moedermerk (assetwize.nl)
├── RELICORE                     ← relicore.app (eigen domein, geregistreerd)
├── Governance Compass           ← assetwize.nl/governance-compass
└── KADENZ                       ← in planning
```

RELICORE draagt altijd "by AssetWize" — in header, ontvangstpagina en footer.

---

## 4. Tech stack

| Onderdeel | Keuze |
|---|---|
| Framework | Astro (statisch, snel) |
| Styling | Tailwind CSS (utility-first) |
| Hosting | Cloudflare Pages (nog te koppelen) |
| Domein | assetwize.nl (nu nog Wix, te migreren) |
| DNS | Cloudflare DNS |
| Repo | GitHub — `Dmytrius79/assetwize-website` (nog aan te maken) |

**Build:**
```bash
npm run build
# Output: dist/
```

**Cloudflare Pages config (bij deployment):**
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18+

---

## 5. Bestandsstructuur

```
assetwize-website/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro       ← Gedeelde header/footer shell
│   ├── pages/
│   │   ├── index.astro            ← Homepage (board niveau)
│   │   ├── relicore/index.astro   ← RELICORE productpagina
│   │   ├── relicore-app/index.astro ← RELICORE login ontvangst
│   │   ├── governance-compass/index.astro ← Compass productpagina
│   │   ├── over-ons/index.astro   ← Over AssetWize
│   │   └── contact/index.astro    ← Contact
│   └── styles/
│       └── global.css             ← Tailwind + custom kleuren
├── public/
│   ├── assetwize_logo.png
│   ├── assetwize_logo_cropped.png
│   ├── relicore_logo.svg
│   └── relicore_logo_dark.svg
├── docs/
│   ├── ARCHITECTURE.md            ← Volledige platformarchitectuur
│   ├── CLAUDE.md                  ← Werkwijze voor Claude Code sessies
│   ├── OPERATIONEEL_PROTOCOL.md
│   ├── RUNBOOK.md
│   ├── ASSETWIZE_KB_START.md      ← Kennisbank overdrachtsnotitie
│   └── design/
│       └── CONSULTANCY_WORKFLOW.md
├── tasks/                         ← Uitgevoerde TASK bestanden (history)
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs (indien aanwezig)
├── wrangler.jsonc                 ← Cloudflare Workers config
└── START_HERE.md                  ← Dit bestand
```

---

## 6. Kleurenpalet (huidig, functioneel)

| Naam | Gebruik |
|---|---|
| `navy-900` | Achtergrond secties, headers, CTA-blokken |
| `teal-400` / `teal-600` / `teal-700` | Accenten, labels, knoppen, pijlen |
| `gray-50` / `gray-200` | Lichte secties, dividers |
| `white` | Tekst op donker, kaartachtergronden |

Dit palet is functioneel uitgewerkt maar nog **niet professioneel gedesigned**.
Een designsessie moet dit verfijnen.

---

## 7. Wat een designsessie moet opleveren

De huidige website werkt maar is technisch gebouwd — geen designbureau betrokken.
Bij een herontwerp of designsessie zijn dit de kernvragen:

1. **Visuele identiteit** — Is het huidige navy/teal palet het definitieve merk? Typografie?
2. **Homepage narratief** — Klopt de volgorde: pijn → aanpak → software → CTA?
3. **Productpagina's** — Hoe presenteer je RELICORE en Compass consistent maar onderscheidend?
4. **Login doorgangspunt** — `/relicore-app` is nu een simpel login card. Moet dit een volwaardige ontvangstpagina worden?
5. **Mobile** — Huidige layout is responsive maar niet mobiel geoptimaliseerd
6. **Animaties / interactie** — Nu volledig statisch

---

## 8. Volgende stappen (in volgorde)

1. **GitHub repo aanmaken** — `Dmytrius79/assetwize-website` (privé), remote koppelen, pushen
2. **Cloudflare Pages koppelen** — repo → Pages project → automatische deploys bij push
3. **Designsessie** — visuele identiteit, paginastructuur, component library
4. **Governance Compass ontvangstpagina** — equivalent van `/relicore-app`
5. **Domeinmigratie** — Wix afkoppelen, `assetwize.nl` naar Cloudflare Pages
6. **KADENZ pagina** — zodra product concreter is

---

## 9. Relatie met andere projecten

| Project | Relatie |
|---|---|
| RELICORE (`/opt/relicore/` op VM) | De app waar `/relicore-app` naartoe linkt. Eigen repo: `Dmytrius79/relicore` |
| AssetWize Kennisbank (`/opt/relicore/assetwize-kb/`) | Intern, draait op RELICORE VM. Geen directe koppeling met deze website |
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

Daarna: `"Lees START_HERE.md en voer tasks/TASK-XXX.md uit"`

---

*AssetWize Website — START_HERE.md*
*Aangemaakt juni 2026 — na migratie vanuit assetwize-platform*

---

## Gedeelde kennisbasis — lees altijd eerst

Deze website is onderdeel van het AssetWize-systeem.
Lees bij elke sessie **voordat je begint**:

1. `/Users/drvandort/dev/_assetwize/brand/BRAND_GUIDELINES.md`
2. `/Users/drvandort/dev/_assetwize/brand/POSITIONERING.md`

Dit borgt consistentie in taal, merkidentiteit en positionering
met de rest van het AssetWize-systeem.

**Documentatiebeheer:** zie `docs/WERKAFSPRAKEN_DOCUMENTATIE.md`
voor de volledige afspraken over wat waar wordt bewaard.
