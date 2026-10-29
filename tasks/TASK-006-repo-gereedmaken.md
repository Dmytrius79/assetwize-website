# TASK-006 — Repo gereedmaken

## Doel
De repo gereedmaken voor de rebrand, zonder iets visueel of inhoudelijk te wijzigen.

## Context
- Werkwijze: `tasks/README.md`.
- Het oude `docs/CLAUDE.md` (uit het assetwize-platform-project) is gearchiveerd naar
  `docs/archief/CLAUDE_assetwize-platform.md`. Er is nog geen `CLAUDE.md` in de root.
- Merknorm: `BRAND_GUIDELINES.md` v2.0 in Drive, `00-bedrijf/30-merk-en-marketing/merkidentiteit`.
- Branch: `chore/werkwijze-taken`.

## Opdracht
1. Controleer of `/Users/drvandort/dev/MASTER_OVERZICHT.md` en
   `/Users/drvandort/dev/_assetwize/BORGING_SPELREGELS.md` bestaan. Bestaan beide: laat commit
   `8e8d799` staan. Ontbreekt een van beide: draai `8e8d799` terug met `git revert`
   (geen force-push). Meld in Resultaat wat je vond en wat je deed.
2. Maak `CLAUDE.md` in de repo-root, kort: wat de site is; stack (Astro, Tailwind,
   Cloudflare Pages); werkwijze (taak in `tasks/`, branch, `npm run build` vóór commit, nooit
   direct op `main`, merge alleen door Dimitry). Merkregels alleen als verwijzing naar
   `BRAND_GUIDELINES.md` v2.0 in Drive. Kopieer geen kleuren of teksten uit die richtlijn.
   Harde regels wel: Inter 400/500, sentence case, geen uitroeptekens, logo nooit natypen maar
   als bestand gebruiken, productnamen altijd "by AssetWize", teksten niet wijzigen zonder opdracht.
3. Pas de verwijzingen naar het oude CLAUDE.md aan: `START_HERE.md` regel 132,
   `docs/OPERATIONEEL_PROTOCOL.md` (meerdere plekken) en `docs/WERKAFSPRAKEN_DOCUMENTATIE.md`
   regel 46. Wijs naar `CLAUDE.md` in de root. Inhoud in `OPERATIONEEL_PROTOCOL.md` die bij het
   oude platform-project hoort: markeren in Resultaat, niets verwijderen.
4. Controleer `START_HERE.md` op feitelijke onjuistheden t.o.v. de repo (paginalijst en URLs,
   GitHub/Cloudflare-status, schrijfwijze Relicore). Corrigeer alleen feiten. Haal brandwaarden
   uit `START_HERE.md` en verwijs naar `CLAUDE.md`.

## Niet doen
Kleuren, componenten, teksten of logo's wijzigen. Geen force-push. Niet mergen.

## Klaar als
- [x] `npm run build` slaagt
- [x] Resultaat is ingevuld, inclusief de bevinding bij stap 1 en wat er bij stap 3 en 4 is gevonden

## Resultaat
*Uitgevoerd door Claude Code op 2026-10-29, branch `chore/werkwijze-taken`.*

### Stap 1 — Borging-bestanden
- `/Users/drvandort/dev/MASTER_OVERZICHT.md`: **bestaat** (sectie `assetwize-website` aanwezig,
  bijgewerkt 2026-08-03).
- `/Users/drvandort/dev/_assetwize/BORGING_SPELREGELS.md`: **bestaat niet**. De hele map
  `/Users/drvandort/dev/_assetwize/` bestaat niet. Ook elders onder `/dev` geen `BORGING_SPELREGELS.md`.
- Actie: `8e8d799` teruggedraaid met `git revert` (commit `2d04bc5`). Geen force-push.

### Stap 2 — CLAUDE.md
`CLAUDE.md` in de repo-root aangemaakt: wat de site is, stack, werkwijze, verwijzing naar
`BRAND_GUIDELINES.md` v2.0 (Drive-pad en lokaal pad) en de harde regels. Geen kleuren of
teksten uit de richtlijn overgenomen.

Bevinding (niet gewijzigd): de site laadt Inter in de gewichten 400/500/600/700
(`BaseLayout.astro`, `relicore-app/index.astro`). 600/700 wijkt af van de harde regel Inter 400/500.

### Stap 3 — Verwijzingen naar het oude CLAUDE.md
- `START_HERE.md` bestandsstructuur: `docs/CLAUDE.md` weg, `CLAUDE.md` in de root en `docs/archief/` toegevoegd.
- `docs/WERKAFSPRAKEN_DOCUMENTATIE.md` r.46: wijst nu naar `CLAUDE.md` (repo-root), met vermelding van het archief.
- `docs/OPERATIONEEL_PROTOCOL.md` r.4, 22, 59, 79, 212, 379: wijzen nu naar
  `/Users/drvandort/dev/assetwize-website/CLAUDE.md`.
- `tasks/README.md` regel 8: "nog aan te maken" weggehaald, want `CLAUDE.md` bestaat nu.

**Gemarkeerd in `OPERATIONEEL_PROTOCOL.md`: hoort bij het oude platform-project, niet bij deze repo** (niets verwijderd):
- Titel "AssetWize Platform" en §1/§4: werkmap `/Users/drvandort/dev/assetwize-platform`,
  taakpad `/dev/assetwize-platform/tasks/TASK-XXX.md` (r.10, 23, 71, 80).
- §2 en §5: bypass approvals en "Claude Code vraagt nooit om bevestiging".
- §3 en de taaksjabloon in §11: "commit en push, STATUS op DONE". Wijkt af van `tasks/README.md`
  (branch, build vóór commit, Resultaat-veld, merge door Dimitry).
- §5/§6: deploy via GitHub Actions en build command `cd apps/website && npm run build`,
  output `apps/website/dist`. Deze repo bouwt in de root naar `dist/` via Cloudflare Pages.
- §5, §8 en §9: `pip install`, `uvicorn`, FastAPI-backend, Next.js-frontend, `apps/platform/...`,
  env vars voor Clerk, Stripe en TradeMind (Fernet).
- §11 r.211–214 en r.378–381: paden naar `assetwize-platform/docs/ARCHITECTURE.md`,
  `OPERATIONEEL_PROTOCOL.md` en `tasks/`.
- **§6 t/m §12 staan twee keer in het bestand** (vanaf r.233 herhaald, met kleine verschillen in §11 en §12).

### Stap 4 — Feitencontrole START_HERE.md
Gecorrigeerd:
- §1: "RELICORE, Governance Compass en KADENZ" → Compass, Atlas en Relicore; "twee
  software-producten" → drie instrumenten; doorgangspunten `compass.assetwize.nl` en `relicore.app`;
  domein `www.assetwize.nl`.
- §2 paginalijst: `/governance-compass` → `/compass`, `/over-ons` → `/waarom`, `/atlas` toegevoegd.
  `/relicore-app` beschreven als eigen Relicore-shell (er staat geen login card meer op; de pagina
  linkt alleen naar `/relicore` en `/contact`).
- §2 "Wat ontbreekt": GitHub remote, Cloudflare-deployment en Wix-migratie zijn gedaan, dus
  weggehaald. Gecontroleerd: `origin` bestaat, de Cloudflare Pages-check draait op GitHub,
  `www.assetwize.nl` geeft HTTP 200 met `server: cloudflare`.
- §3: messaging-tabel (doelgroep/taal/CTA) en de "by AssetWize"-regel weggehaald, verwijzing
  naar `CLAUDE.md`. Producthiërarchie bijgewerkt naar Compass, Atlas en Relicore.
- §4: hosting, domein en repo (publiek, gecontroleerd met `gh`) bijgewerkt.
- §5 bestandsstructuur: pagina's, `components/`, `docs/` en `CLAUDE.md` gelijkgetrokken met de repo.
  `tailwind.config.mjs` weggehaald (bestaat niet).
- §6 kleurenpalet: waarden weggehaald, verwijzing naar `CLAUDE.md`.
- §8: stap 1, 2 en 5 doorgestreept als gedaan. Repo is publiek, niet privé.
- §9: Relicore-app wordt gelinkt vanaf `/relicore`, niet vanaf `/relicore-app`.
- Schrijfwijze: overal Relicore in plaats van RELICORE.
- "Gedeelde kennisbasis": de paden `/dev/_assetwize/brand/BRAND_GUIDELINES.md` en
  `POSITIONERING.md` bestaan niet. Vervangen door een verwijzing naar `CLAUDE.md`.

Gevonden, niet gewijzigd:
- §7 (designsessie) noemt nog het "navy/teal palet" als open vraag. Dat is achterhaald door v2.0.
- KADENZ: staat niet op de site, status onbekend. Laten staan als "status niet vastgesteld".
- `POSITIONERING.md`: niet gevonden. In Drive staat alleen
  `_archief/2026-07-01 AssetWize positionering v1.0.md`.
- `docs/BRAND_GUIDELINES.md` is een stub die naar het niet-bestaande `/dev/_assetwize/` wijst.
- `MASTER_OVERZICHT.md` noemt `/dev/_assetwize/INFRASTRUCTUUR_EN_DEPLOYMENT.md`, dat ook niet bestaat.
- Taaknummer: `tasks/TASK-001.md` (Astro-structuur, DONE) bestaat al. Dit bestand heeft hetzelfde nummer.
