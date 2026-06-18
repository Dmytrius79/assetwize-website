# OPERATIONEEL_PROTOCOL.md — AssetWize Platform

> Hoe Claude Code én Claude.ai werken in dit project.
> Lees dit samen met CLAUDE.md bij elke nieuwe sessie.

---

## 1. Claude Code starten

Open VS Code terminal in `/Users/drvandort/dev/assetwize-platform` en typ:

```bash
claude
```

Claude Code vraagt nooit om bevestiging van commando's.
Dit is permanent ingesteld via `~/.claude/settings.json`.

Geef daarna de taak:

```
Lees /Users/drvandort/dev/assetwize-platform/docs/CLAUDE.md
en voer daarna /Users/drvandort/dev/assetwize-platform/tasks/TASK-XXX.md uit
```

---

## 2. Bypass approvals — permanent instellen

Voer eenmalig uit in de terminal:

```bash
mkdir -p ~/.claude && cat > ~/.claude/settings.json << 'EOF'
{
  "permissions": {
    "allow": [
      "Bash(*)",
      "Write(*)",
      "Read(*)",
      "Edit(*)",
      "MultiEdit(*)"
    ],
    "deny": []
  }
}
EOF
```

Na dit commando stelt Claude Code nooit meer vragen.

---

## 3. Taken uitvoeren

Alle taken staan in `/tasks/TASK-XXX.md`.
Claude Code voert een taak volledig uit zonder tussenkomst.

Volgorde binnen een taak:
1. Lees CLAUDE.md
2. Lees taakbestand
3. Voer uit
4. Commit en push
5. Zet STATUS op DONE in het taakbestand

---

## 4. Nieuwe sessie starten

```bash
# 1. VS Code openen in juiste map
code /Users/drvandort/dev/assetwize-platform

# 2. Terminal openen in VS Code (Ctrl+`)

# 3. Claude Code starten
claude

# 4. Taak opgeven
Lees /Users/drvandort/dev/assetwize-platform/docs/CLAUDE.md
en voer daarna /Users/drvandort/dev/assetwize-platform/tasks/TASK-XXX.md uit
```

---

## 5. Terminal commando's

Claude Code voert alle commando's zelf uit.
Jij hoeft nooit handmatig iets in de terminal te typen tijdens een taak.

Commando's die Claude Code gebruikt:
```bash
# Afhankelijkheden installeren
npm install
pip install -r requirements.txt

# Starten
npm run dev
uvicorn main:app --reload

# Git
git add .
git commit -m "feat: beschrijving"
git push

# Cloudflare deploy (via GitHub Actions — automatisch)
git push  # triggert deploy pipeline
```

---

## 6. Cloudflare Pages koppeling

Website deploy gaat automatisch via GitHub Actions.
Eenmalige setup (TASK-001):
1. Cloudflare Pages project aanmaken
2. Koppelen aan GitHub repo
3. Build instellingen:
   - Build command: `cd apps/website && npm run build`
   - Output directory: `apps/website/dist`

Na setup: elke `git push` naar `main` deployt automatisch.

---

## 7. GitHub workflow

```bash
# Nieuwe feature
git checkout -b feature/w1-website-homepage
# ... werk ...
git add .
git commit -m "feat(website): homepage hero"
git push origin feature/w1-website-homepage

# Pull request → merge naar main → automatische deploy
```

---

## 8. Lokale ontwikkelomgeving

### Website (Astro)
```bash
cd apps/website
npm install
npm run dev
# Beschikbaar op http://localhost:4321
```

### Platform backend (FastAPI)
```bash
cd apps/platform/backend
pip install -r requirements.txt
uvicorn main:app --reload
# Beschikbaar op http://localhost:8000
```

### Platform frontend (Next.js)
```bash
cd apps/platform/frontend
npm install
npm run dev
# Beschikbaar op http://localhost:3000
```

---

## 9. Environment variables

Nooit in git zetten. Lokaal in `.env` bestanden.

```bash
# apps/platform/backend/.env
DATABASE_URL=postgresql://...
CLERK_SECRET_KEY=sk_live_...
STRIPE_SECRET_KEY=sk_live_...
PLATFORM_ENCRYPTION_KEY=...  # Fernet key voor TradeMind API keys
```

`.env` staat in `.gitignore` — nooit committen.

---

## 10. Wat Claude.ai doet vs Claude Code

| Actie | Claude.ai (dit venster) | Claude Code (VS Code) |
|---|---|---|
| Architectuur bespreken en uitwerken | ✅ | ❌ |
| Taakbestand schrijven | ✅ | ❌ |
| Projectbestanden lezen (Mac) | ✅ via Desktop Commander | ✅ |
| Projectbestanden schrijven (Mac) | ✅ via Desktop Commander | ✅ |
| Website bekijken in Chrome | ✅ via Chrome tool | ❌ |
| Bestaande sites inspecteren (design, structuur) | ✅ via Chrome tool | ❌ |
| Code schrijven | ❌ (via taakbestand → Claude Code) | ✅ |
| Committen en pushen | ❌ | ✅ |
| Deployen | ❌ | ✅ |
| Beslissingen nemen | ✅ | ❌ |

Claude Code voert uit — neemt nooit beslissingen.
Bij twijfel: meest logische keuze, documenteer in Result veld van taakbestand.

---

## 11. Claude.ai — toegang tot projectbestanden

Claude.ai heeft via Desktop Commander directe toegang tot de projectmap op de Mac.

### Bestanden lezen
Claude.ai leest projectbestanden direct:
```
/Users/drvandort/dev/assetwize-platform/docs/ARCHITECTURE.md
/Users/drvandort/dev/assetwize-platform/docs/CLAUDE.md
/Users/drvandort/dev/assetwize-platform/docs/OPERATIONEEL_PROTOCOL.md
/Users/drvandort/dev/assetwize-platform/tasks/TASK-XXX.md
```

### Bestanden bijwerken
Claude.ai kan documenten bijwerken en als download aanbieden.
De bijgewerkte versie wordt door Dimitry handmatig geplaatst in de projectmap,
of Claude Code pakt dit op als onderdeel van een taak.

Werkwijze bij documentupdates:
1. Claude.ai werkt het document bij op basis van het gesprek
2. Claude.ai biedt het bestand aan als download
3. Dimitry plaatst het bestand in de juiste map (`/docs/`)
4. Of: Claude Code krijgt een taak om het bestand te committen

### Taakbestanden aanmaken
Claude.ai schrijft taakbestanden in dit formaat:

```markdown
# TASK-XXX — Taaknaam

**STATUS**: TODO
**Sprint**: W1.0

## Context
Waarom deze taak nodig is.

## Doel
Wat het eindresultaat moet zijn.

## Stappen
1. Stap een
2. Stap twee
3. Commit en push
4. Zet STATUS op DONE

## Acceptatiecriteria
- [ ] Criterium 1
- [ ] Criterium 2

## Result
<!-- Claude Code vult dit in na uitvoering -->
```

---

## 12. Claude.ai — Chrome toegang

Claude.ai heeft via de Chrome tool toegang tot de browser op de Mac.

### Gebruik
- Bestaande website bekijken (bijv. assetwize.nl voor redesign analyse)
- Referentiesites inspecteren voor design of functionaliteit
- Lokaal draaiende applicaties bekijken (localhost)
- Screenshots maken ter referentie

### Niet voor
- Inloggen op accounts of portalen
- Formulieren invullen namens Dimitry
- Gevoelige data invoeren

### Vereiste
De "Claude in Chrome" extensie moet actief zijn in de browser.---

## 6. Cloudflare Pages koppeling

Website deploy gaat automatisch via GitHub Actions.
Eenmalige setup (TASK-001):
1. Cloudflare Pages project aanmaken
2. Koppelen aan GitHub repo
3. Build instellingen:
   - Build command: `cd apps/website && npm run build`
   - Output directory: `apps/website/dist`

Na setup: elke `git push` naar `main` deployt automatisch.

---

## 7. GitHub workflow

```bash
# Nieuwe feature
git checkout -b feature/w1-website-homepage
# ... werk ...
git add .
git commit -m "feat(website): homepage hero"
git push origin feature/w1-website-homepage

# Pull request → merge naar main → automatische deploy
```

---

## 8. Lokale ontwikkelomgeving

### Website (Astro)
```bash
cd apps/website
npm install
npm run dev
# Beschikbaar op http://localhost:4321
```

### Platform backend (FastAPI)
```bash
cd apps/platform/backend
pip install -r requirements.txt
uvicorn main:app --reload
# Beschikbaar op http://localhost:8000
```

### Platform frontend (Next.js)
```bash
cd apps/platform/frontend
npm install
npm run dev
# Beschikbaar op http://localhost:3000
```

---

## 9. Environment variables

Nooit in git zetten. Lokaal in `.env` bestanden.

```bash
# apps/platform/backend/.env
DATABASE_URL=postgresql://...
CLERK_SECRET_KEY=sk_live_...
STRIPE_SECRET_KEY=sk_live_...
PLATFORM_ENCRYPTION_KEY=...  # Fernet key voor TradeMind API keys
```

`.env` staat in `.gitignore` — nooit committen.

---

## 10. Wat Claude.ai doet vs Claude Code

| Actie | Claude.ai (dit venster) | Claude Code (VS Code) |
|---|---|---|
| Architectuur bespreken en uitwerken | ✅ | ❌ |
| Taakbestand schrijven | ✅ | ❌ |
| Projectbestanden lezen (Mac) | ✅ via Desktop Commander | ✅ |
| Projectbestanden schrijven (Mac) | ✅ via Desktop Commander | ✅ |
| Website bekijken in Chrome | ✅ via Chrome tool | ❌ |
| Bestaande sites inspecteren (design, structuur) | ✅ via Chrome tool | ❌ |
| Code schrijven | ❌ (via taakbestand → Claude Code) | ✅ |
| Committen en pushen | ❌ | ✅ |
| Deployen | ❌ | ✅ |
| Beslissingen nemen | ✅ | ❌ |

Claude Code voert uit — neemt nooit beslissingen.
Bij twijfel: meest logische keuze, documenteer in Result veld van taakbestand.


---

## 11. Claude.ai — toegang tot projectbestanden

Claude.ai heeft via Desktop Commander directe toegang tot de projectmap op de Mac.

### Bestanden lezen
Claude.ai leest projectbestanden direct:
```
/Users/drvandort/dev/assetwize-platform/docs/ARCHITECTURE.md
/Users/drvandort/dev/assetwize-platform/docs/CLAUDE.md
/Users/drvandort/dev/assetwize-platform/docs/OPERATIONEEL_PROTOCOL.md
/Users/drvandort/dev/assetwize-platform/tasks/TASK-XXX.md
```

### Bestanden bijwerken
Claude.ai kan documenten direct schrijven naar de projectmap via Desktop Commander.
Geen handmatige tussenkomst nodig — bestand wordt direct bijgewerkt op de juiste locatie.

Werkwijze bij documentupdates:
1. Claude.ai werkt het document bij op basis van het gesprek
2. Claude.ai schrijft het direct naar de projectmap
3. Dimitry commit en pusht (of Claude Code doet dit via taakbestand)

### Taakbestanden aanmaken
Claude.ai schrijft taakbestanden in dit formaat:

```markdown
# TASK-XXX — Taaknaam

**STATUS**: TODO
**Sprint**: W1.0

## Context
Waarom deze taak nodig is.

## Doel
Wat het eindresultaat moet zijn.

## Stappen
1. Stap een
2. Stap twee
3. Commit en push
4. Zet STATUS op DONE

## Acceptatiecriteria
- [ ] Criterium 1
- [ ] Criterium 2

## Result
<!-- Claude Code vult dit in na uitvoering -->
```

---

## 12. Claude.ai — Chrome toegang

Claude.ai heeft via de Chrome tool toegang tot de browser op de Mac.

### Gebruik
- Bestaande website bekijken (bijv. assetwize.nl voor redesign analyse)
- Referentiesites inspecteren voor design of functionaliteit
- Lokaal draaiende applicaties bekijken (localhost)
- Screenshots maken ter referentie

### Niet voor
- Inloggen op accounts of portalen namens Dimitry
- Formulieren invullen met gevoelige data
- Financiële of account-gerelateerde handelingen

### Vereiste
De "Claude in Chrome" extensie moet actief zijn in de browser.
