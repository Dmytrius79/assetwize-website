# CLAUDE.md — AssetWize Platform Project

> Werkwijze voor Claude Code in dit project.
> Lees dit bestand volledig bij elke nieuwe sessie.

---

## 1. Wat dit project is

AssetWize Platform bestaat uit twee hoofdcomponenten:

1. **Marketing website** (Astro + Cloudflare Pages)
2. **Platform core** (FastAPI + PostgreSQL + Next.js admin)

Producten beheerd via dit platform:
- RELICORE + Kennisbank (VM: relicore-dev, 192.168.1.128)
- AM Scan (VM: later)
- KADENZ (VM: later)
- TradeMind ONE (VM: later, apart merk)

---

## 2. Rollen

| Rol | Wie | Wat |
|---|---|---|
| Architect + Product Owner | Dimitry | Beslist over scope, stack, prioriteiten |
| Design + Taakontwerp | Claude.ai | Architectuur uitwerken, taken schrijven |
| Implementatie | Claude Code (VS Code) | Code schrijven, committen, deployen |

Claude.ai ontwerpt — Claude Code implementeert. Harde scheiding.

---

## 3. Werkwijze per sessie

### Claude Code starten
```bash
claude
# Dan de taak opgeven:
Lees /Users/drvandort/dev/assetwize-platform/docs/CLAUDE.md
en voer daarna /Users/drvandort/dev/assetwize-platform/tasks/TASK-XXX.md uit
```

Claude Code vraagt nooit om bevestiging (bypass approvals ingesteld).

---

## 4. Tech stack

### Marketing website
| Component | Keuze | Waarom |
|---|---|---|
| Framework | Astro | Statisch, snel, SEO-friendly |
| Deploy | Cloudflare Pages | Gratis, globaal CDN, git-deploy |
| Styling | Tailwind CSS | Utility-first, consistent |
| Content | Markdown files | In git, geen CMS nodig |

### Platform core
| Component | Keuze | Waarom |
|---|---|---|
| Backend | FastAPI (Python) | Zelfde als RELICORE |
| Database | PostgreSQL | Bewezen, zelfde als RELICORE |
| Auth | Clerk | Multi-tenant, per-product permissions |
| Billing | Stripe | Flat fee + metered volume billing |
| Admin UI | Next.js | Flexibel dashboard |
| Deploy | Eigen VM | Controle over data |

---

## 5. Mappenstructuur

```
assetwize-platform/
├── apps/
│   ├── website/              ← Astro marketing site
│   │   ├── src/
│   │   │   ├── pages/        ← Route pagina's (.astro)
│   │   │   ├── components/   ← UI componenten
│   │   │   ├── layouts/      ← Layout templates
│   │   │   └── content/      ← Markdown content per product
│   │   ├── public/           ← Statische assets (logo's, images)
│   │   └── astro.config.mjs
│   └── platform/             ← Auth + billing backend
│       ├── backend/          ← FastAPI service
│       │   ├── main.py
│       │   ├── routers/
│       │   │   ├── auth.py
│       │   │   ├── billing.py
│       │   │   └── admin.py
│       │   ├── models/
│       │   └── services/
│       │       ├── clerk.py
│       │       ├── stripe.py
│       │       └── secrets.py    ← Encrypted key storage
│       └── frontend/         ← Next.js admin dashboard
│           ├── app/
│           └── components/
├── packages/
│   └── shared/               ← Gedeelde types en utilities
├── docs/
│   ├── CLAUDE.md             ← Dit bestand
│   ├── ARCHITECTURE.md       ← Uitgebreide architectuur
│   └── DESIGN_PRINCIPLES.md  ← UI/UX richtlijnen
├── tasks/                    ← Taakbestanden voor Claude Code
│   └── TASK-001.md
└── .github/
    └── workflows/
        ├── website-deploy.yml
        └── platform-deploy.yml
```

---

## 6. Producten en relaties

```
Platform core (auth.assetwize.com)
│
├── RELICORE ──────────────────── relicore-dev VM
│   └── Kennisbank ─────────────── tier-gebaseerde toegang
│       Tier 1: basis governance docs
│       Tier 2: blueprints + implementatie
│       Tier 3: alles incl. assessment
│
├── AM Scan ────────────────────── eigen VM (later)
│   └── Kennisbank ─────────────── server-side API bron voor AI
│
├── KADENZ ─────────────────────── eigen VM (later)
│
└── TradeMind ONE ──────────────── eigen VM (later)
    ├── Kraken API ─────────────── encrypted per user
    └── Volume billing ─────────── Stripe Metered
```

---

## 7. Billing modellen

### Model A — Flat fee
Producten: RELICORE, AM Scan, KADENZ
Maandelijks of jaarlijks vast bedrag per organisatie.

### Model B — Volume metered (TradeMind ONE)
```
Gebruiker draait trades via Kraken API
→ Platform registreert volume (Stripe Usage Record)
→ Stripe berekent: volume × 0.25%
→ Automatische maandfactuur

Minimum: te bepalen per klant
```

---

## 8. Auth structuur (Clerk)

```
Organization (= klant bedrijf)
├── owner     ← eigenaar, kan billing zien
├── admin     ← beheert eigen gebruikers
└── user      ← standaard gebruiker

Per-product metadata op user:
├── relicore:active / relicore:trial
├── kennisbank:tier1 / tier2 / tier3
├── amscan:active
└── trademind:active

Superadmin (Dimitry):
└── Ziet alle organisaties, producten, billing
```

---

## 9. Kraken API key beveiliging

Gebruikers slaan eigen Kraken credentials op — **nooit plaintext**.

```python
# services/secrets.py

from cryptography.fernet import Fernet
import os

def get_fernet():
    key = os.environ['PLATFORM_ENCRYPTION_KEY']  # alleen in env
    return Fernet(key)

def encrypt_api_key(plaintext: str) -> bytes:
    return get_fernet().encrypt(plaintext.encode())

def decrypt_api_key(ciphertext: bytes) -> str:
    return get_fernet().decrypt(ciphertext).decode()
    # Gebruik direct, sla nooit op, log nooit
```

PLATFORM_ENCRYPTION_KEY: nooit in DB, nooit in git, alleen in server env.

---

## 10. Deployment

### Website (Astro → Cloudflare Pages)
```
Trigger: push naar main branch
Pipeline: .github/workflows/website-deploy.yml
Cloudflare: Pages project gekoppeld aan GitHub repo
Domein: assetwize.com (Cloudflare DNS)
Preview: elke PR krijgt preview URL
```

### Platform core
```
Trigger: push naar main branch
Pipeline: .github/workflows/platform-deploy.yml
Deploy: SSH naar platform VM
Domein: platform.assetwize.com
```

---

## 11. Commits en branches

```bash
# Branch naming
feature/w{sprint}-{beschrijving}
fix/w{sprint}-{beschrijving}
task/TASK-{nr}

# Commit format
feat(website): homepage hero section
feat(platform): Clerk multi-tenant setup
feat(billing): Stripe flat fee product config
feat(trademind): encrypted Kraken key storage
fix(auth): Clerk webhook handler

# Sprint naming
W1.0, W1.1, W1.2 (week-gebaseerd)
```

---

## 12. Bypass approvals

```json
// ~/.claude/settings.json
{
  "permissions": {
    "allow": ["Bash(*)", "Write(*)", "Read(*)", "Edit(*)", "MultiEdit(*)"],
    "deny": []
  }
}
```

---

## 13. Spelregels Claude Code

1. Lees CLAUDE.md volledig bij elke nieuwe sessie
2. Voer alleen taken uit via taakbestanden — geen eigen beslissingen
3. Bij onduidelijkheid: meest logische keuze, documenteer in Result veld
4. Altijd committen en pushen na voltooide taak
5. Taakbestand STATUS zetten op DONE
6. Geen architectuurwijzigingen zonder taakbestand van Claude.ai
