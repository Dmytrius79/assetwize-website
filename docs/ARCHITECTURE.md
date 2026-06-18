# ARCHITECTURE.md — AssetWize Platform

> Uitgebreide architectuurbeschrijving voor het AssetWize Platform.
> Dit document is de technische grondslag voor alle beslissingen in dit project.
>
> Versie: 3.0 — bijgewerkt na go-to-market beslissingen en domeinregistratie relicore.app

---

## 1. Merkstructuur en productportfolio

### Merkprincipe en hiërarchie

```
AssetWize Software Solutions     ← moedermerk, strategisch niveau
│  assetwize.nl
│  Doelgroep: board / directie
│  Taal: governance · systeem · richting · bestuur
│
├── RELICORE                      ← productmerk, tactisch/operationeel niveau
│   relicore.app                  ← eigen domein (geregistreerd maart 2026)
│   Doelgroep: asset managers · reliability engineers · plant managers
│   Taal: structuur · inzicht · controle · boven CMMS
│   Positionering: "RELICORE by AssetWize" / "Powered by AssetWize"
│   │
│   └── Kennisbank                ← INTERN — add-on, niet publiek
│
├── Governance Compass            ← productmerk (voorheen AM Scan)
│   Tagline: "Direction for asset-based decision making"
│   Doelgroep: board / directie (assessment ingang)
│   └── Kennisbank                ← INTERN — AI-bron voor rapportage
│
└── KADENZ                        ← productmerk (in planning)

TradeMind ONE                     ← apart merk, eigen domein trademind.com
```

### Go-to-market model — hybride (besluit maart 2026)

**Twee ingangen, één gedeelde kern.**

```
Ingang 1: AssetWize (strategisch)        Ingang 2: RELICORE (product)
─────────────────────────────────        ────────────────────────────
Board / directie                         Asset managers / engineers
Governance vraagstuk                     CMMS frustratie / data probleem
Trajecten + software                     Software first
Hoge waarde, lage volume                 Bredere markt, snellere adoptie
assetwize.nl                             relicore.app

             ↓                                      ↓
        ─────────────────────────────────────────────
                    Gedeelde kern
              Kennisbank · Methode · Denkkader
              Software · AI · Platform
        ─────────────────────────────────────────────

Cross-sell flow A: RELICORE → gebruiker loopt vast → AssetWize traject
Cross-sell flow B: AssetWize → governance → RELICORE implementatie
```

### Messaging scheiding (strikte regel)

| | AssetWize | RELICORE |
|---|---|---|
| **Taal** | Governance · bestuur · systeem · richting | Structuur · inzicht · controle · boven CMMS |
| **Niveau** | Strategisch / bestuurlijk | Tactisch / operationeel |
| **CTA** | Gesprek aanvragen | Demo aanvragen / Open RELICORE |
| **Nooit** | CMMS-taal, tool-taal | Board-taal, governance-jargon |

Nooit door elkaar. Elke pagina heeft één taal.

### Merkhiërarchie in de software

RELICORE draagt altijd "by AssetWize" — in de header, ontvangstpagina en footer.
Dit verankert RELICORE als productlaag binnen het AssetWize systeem,
niet als los merk. De naambekendheid van AssetWize geeft RELICORE autoriteit.


---

## 2. Productportfolio

### AssetWize Software Solutions

| Product | Beschrijving | Status | Billing | Publiek |
|---|---|---|---|---|
| RELICORE | Lifecycle Asset Intelligence Platform | Live (pilot Syngenta NL) | Flat fee + tier | relicore.app |
| Kennisbank | Governance documentatie (intern) | Live (MkDocs) | Inbegrepen bij RELICORE | Nee |
| Governance Compass | Asset governance assessment | In ontwikkeling | Flat fee | assetwize.nl |
| KADENZ | Project/framework tool | In planning | Flat fee | Later |

### Apart merk

| Product | Beschrijving | Status | Billing |
|---|---|---|---|
| TradeMind ONE | Trading platform (Kraken) | In planning | Abonnement + volume 0.25% |

---

## 3. Systeemoverzicht

```
Internet
│
├── assetwize.nl ───────────────── Astro / Cloudflare Pages
│   ├── /                        ← AssetWize merk + propositie (board niveau)
│   ├── /relicore                ← RELICORE marketing pagina
│   ├── /governance-compass      ← Governance Compass marketing pagina
│   ├── /over-ons                ← Bedrijfspagina
│   └── /contact
│
├── relicore.app ───────────────── Astro / Cloudflare Pages (eigen merk)
│   └── /                        ← RELICORE product website (product taal)
│       Tijdelijk: assetwize.nl/relicore-app (ontvangst + login placeholder)
│
├── trademind.com ──────────────── Astro / Cloudflare Pages (apart merk)
│
├── platform.assetwize.nl ──────── FastAPI + Next.js / eigen VM
│   ├── /api/                    ← Auth validatie, subscriptions, billing
│   ├── /admin/                  ← Superadmin dashboard (Dimitry)
│   └── /webhooks/               ← Clerk + Stripe
│
├── relicore.assetwize.nl ──────── RELICORE app / NUC VM (192.168.1.128)
│   └── Tijdelijk via Cloudflare tunnel → later vaste koppeling
│
└── kb.assetwize.nl ────────────── Kennisbank (MkDocs) / eigen VM
    ← Geen publieke toegang
```

### DNS beheer

Alle domeinen en subdomeinen via Cloudflare DNS.

| Domein | Doel | Status |
|---|---|---|
| assetwize.nl | Marketing website NL | Live (Wix) → migreren naar Cloudflare Pages |
| assetwize.com | Redirect → assetwize.nl | Te regelen |
| relicore.app | RELICORE product website | Domein geregistreerd maart 2026 |
| platform.assetwize.nl | Platform core | Te bouwen (Fase 3) |
| relicore.assetwize.nl | RELICORE app | VM → stabiel domein koppelen |
| kb.assetwize.nl | Kennisbank (intern) | Bestaand |


---

## 4. Auth / login architectuur (besluit maart 2026)

### Principe: één centraal auth platform

Auth wordt **centraal beheerd via Clerk op platform.assetwize.nl**.
Niet per product apart. Dit geldt voor alle producten:
RELICORE, Kennisbank, Governance Compass, KADENZ.

```
Clerk (platform.assetwize.nl)
│
├── Organisatie: Syngenta NL
│   ├── User: jan@syngenta.com → RELICORE active, kennisbank tier2
│   └── User: piet@syngenta.com → RELICORE active
│
├── Organisatie: Klant B
│   └── User: ... → Governance Compass active
│
└── Superadmin: Dimitry
    └── Alle organisaties, alle producten
```

### Tijdelijke situatie (nu, voor Syngenta)

Het platform is nog niet gebouwd (Fase 3). Voor Syngenta deze week:
- RELICORE krijgt minimale eigen auth (email/wachtwoord direct in de app)
- Zodra platform live is → migreren naar Clerk
- Tijdelijke auth is een brug, geen definitieve oplossing

### Auth flow per product (definitief, na Fase 3)

```
Gebruiker bezoekt relicore.app of relicore.assetwize.nl
        ↓
Login via Clerk (platform.assetwize.nl/sign-in)
        ↓
Clerk token bevat: organization_id + product permissions
        ↓
RELICORE valideert token via platform API
        ↓
/workspaces — gebruiker ziet zijn werkruimtes
```

---

## 5. Platform core architectuur

### Database schema (platform PostgreSQL)

```sql
organizations
  id UUID PRIMARY KEY
  name VARCHAR
  clerk_org_id VARCHAR UNIQUE
  created_at TIMESTAMP

subscriptions
  id UUID PRIMARY KEY
  organization_id UUID → organizations
  product VARCHAR          ← 'relicore', 'compass', 'kadenz', 'trademind'
  tier VARCHAR             ← 'tier1', 'tier2', 'tier3', 'full'
  status VARCHAR           ← 'active', 'trial', 'cancelled'
  stripe_subscription_id VARCHAR
  current_period_end TIMESTAMP

trade_volume_records
  id UUID PRIMARY KEY
  organization_id UUID → organizations
  trade_id VARCHAR
  trade_timestamp TIMESTAMP
  volume_eur DECIMAL(15,2)
  period_start DATE
  period_end DATE
  stripe_usage_record_id VARCHAR
  reported_at TIMESTAMP

api_credentials
  id UUID PRIMARY KEY
  organization_id UUID → organizations
  service VARCHAR          ← 'kraken'
  encrypted_key BYTEA
  encrypted_secret BYTEA
  created_at TIMESTAMP
  updated_at TIMESTAMP
```

### API endpoints

```
POST /api/auth/validate-token       ← Producten valideren tokens
GET  /api/subscriptions/{org_id}    ← Welke producten + tiers actief
POST /api/usage/record              ← TradeMind volume rapporteren

POST /webhooks/clerk
POST /webhooks/stripe

GET  /admin/organizations
GET  /admin/subscriptions
GET  /admin/revenue
GET  /admin/trade-volume
```


---

## 6. Clerk configuratie

### Applicaties in Clerk

```
AssetWize Platform
├── RELICORE app
├── Governance Compass app
├── KADENZ app
└── TradeMind ONE app   ← apart merk
```

### Per-user metadata

```json
{
  "public_metadata": {
    "organization_id": "uuid",
    "products": {
      "relicore": "active",
      "kennisbank_tier": "tier2",
      "compass": "inactive",
      "kadenz": "inactive",
      "trademind": "inactive"
    }
  },
  "private_metadata": {
    "stripe_customer_id": "cus_xxx"
  }
}
```

---

## 7. Stripe configuratie

### Billing modellen

**Model A — Flat fee:** RELICORE, Governance Compass, KADENZ

**Model B — Abonnement + volume metered:** TradeMind ONE
- Vast maandelijks abonnement
- Volume: 0.25% van verhandeld maandvolume via Stripe Metered Billing

### Products in Stripe

```
AssetWize Software Solutions
├── RELICORE Starter        ← maandelijks flat fee
├── RELICORE Professional   ← maandelijks flat fee
├── RELICORE Enterprise     ← maandelijks flat fee
├── Governance Compass      ← maandelijks flat fee
└── KADENZ                  ← maandelijks flat fee

TradeMind ONE
├── TradeMind Abonnement    ← vast maandelijks
└── TradeMind Volume        ← Metered, 0.0025 per EUR volume
```

---

## 8. Kennisbank toegangsmodel

### Positie: interne infrastructuur

```
Publiek internet            → GEEN toegang
RELICORE gebruiker          → Via platform token → tier-based content
Governance Compass backend  → Via service key → AI rapportage
Dimitry (superadmin)        → Volledige toegang
```

### RELICORE tier → Kennisbank secties

```
Tier 1 (Starter)      → Governance: Visie & Fundament + Asset Positionering
Tier 2 (Professional) → + Governance alle docs + Blueprints
Tier 3 (Enterprise)   → + Implementatie + Assessment + Business Architecture
```

---

## 9. RELICORE architectuur

### Kernpositionering

**RELICORE is geen CMMS-vervanging.**
Het is een engineering- en beslissingslaag bóven CMMS-systemen.

```
CMMS (Ultimo, SAP PM, Maximo, Infor EAM)
        ↓ import
RELICORE — Engineering Intelligence Layer
  Structure · Criticality · FMECA
  Lifecycle · Spares · KPI Impact
        ↓ intelligence
Beslissingen: Reliability · Lifecycle · Onderhoud · Reservedelen · Business impact
```

### Modules

| Module | Functie |
|---|---|
| FOUNDATION | Asset import en master data normalisatie |
| STRUCTURE | Functioneel asset modellering (procesfunctie) |
| CRITICALITY | Asset kritikaliteitsmodellering |
| FMECA | Faalmodus en effect modellering |
| LIFECYCLE | Resterende levensduur en vervangingsplanning |
| SPARES | Strategische reserveonderdelenoptimalisatie |
| KPI IMPACT | Business impact modellering |

### Integraties

| CMMS | Status |
|---|---|
| Ultimo | Actief (Syngenta NL pilot) |
| SAP PM | In planning |
| Maximo | In planning |
| Infor EAM | In planning |

### Huidige status

Actief in pilotimplementatie bij **Syngenta NL**:
- 29.872 assets geïmporteerd
- Drie-werkstroom model operationeel (Actief / Te positioneren / Te beoordelen)


---

## 10. TradeMind ONE architectuur

### Kraken API integratie

```
Gebruiker voert in:   API Key + API Secret
Platform slaat op:    Fernet encrypted in api_credentials tabel
Platform gebruikt:    Decrypt in memory → Kraken REST API → discard
Platform logt:        user_id + actie + timestamp (NOOIT de key)
```

### Volume billing flow

```python
# Na elke uitgevoerde trade
stripe.SubscriptionItem.create_usage_record(
    subscription_item_id,
    quantity=int(trade_volume_eur * 100),  # in centen
    action='increment',
    timestamp=int(time.time())
)
```

---

## 11. Ontwikkelvolgorde

```
Fase 1 (loopt)     → RELICORE + Kennisbank
                     Syngenta tijdelijke auth (minimaal, direct in RELICORE)
                     relicore.assetwize.nl stabiel domein koppelen

Fase 2 (loopt)     → assetwize.nl website (Astro, Cloudflare Pages)
                     relicore.app website bouwen (eigen product site)
                     Wix afkoppelen, domein migreren

Fase 3             → Platform core
                     Clerk multi-tenant setup
                     Stripe producten aanmaken
                     RELICORE koppelen aan platform auth (Clerk)
                     Kennisbank tier-toegang via platform
                     Superadmin dashboard

Fase 4             → Governance Compass
                     Kennisbank AI koppeling voor rapportage

Fase 5             → TradeMind ONE
                     Kraken integratie + volume billing

Fase 6             → KADENZ
```

---

## 12. Tooling overzicht

| Laag | Tool | Doel |
|---|---|---|
| Website assetwize.nl | Astro + Cloudflare Pages | Marketing, board niveau |
| Website relicore.app | Astro + Cloudflare Pages | Product site, operationeel niveau |
| DNS | Cloudflare DNS | Alle domeinen |
| Auth | Clerk | Multi-tenant, centraal (Fase 3) |
| Billing | Stripe | Flat fee + metered |
| Platform backend | FastAPI (Python) | Auth API, billing, admin |
| Platform admin | Next.js | Dashboard Dimitry |
| Database | PostgreSQL | Organisaties, subscriptions, usage |
| Kennisbank | MkDocs | Intern, tier-based |
| AI rapportage | Claude API | Scan + kennisbank → rapport |
| Encryptie | Python Fernet | Kraken API keys |
| CI/CD | GitHub Actions | Auto-deploy bij push |
| RELICORE VM | NUC (192.168.1.128) | Bestaand, migreert later naar hosting |

---

## 13. Beveiligingsprincipes

- **Auth centraal via Clerk** — nooit per product apart (na Fase 3)
- **Kennisbank** — nooit publiek, altijd achter platform auth of service key
- **Kraken API keys** — nooit plaintext, nooit in logs, altijd Fernet encrypted
- **Stripe webhooks** — altijd signature verificatie
- **Clerk webhooks** — altijd signature verificatie
- **Secrets** — nooit in git, alleen in server environment
- **PLATFORM_ENCRYPTION_KEY** — alleen in server env, nooit in DB of logs

---

## 14. Environment variables

### Platform core (.env)

```bash
DATABASE_URL=postgresql://user:pass@localhost:5432/platform
CLERK_SECRET_KEY=sk_live_xxx
CLERK_WEBHOOK_SECRET=whsec_xxx
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
PLATFORM_ENCRYPTION_KEY=xxx
KB_SERVICE_KEY=xxx
RELICORE_API_URL=https://relicore.assetwize.nl
RELICORE_SERVICE_KEY=xxx
AMSCAN_API_URL=https://amscan.assetwize.nl
AMSCAN_SERVICE_KEY=xxx
```

### Website Cloudflare Pages

```bash
# Statische site — geen secrets nodig
# Optioneel:
CF_ANALYTICS_TOKEN=xxx
```
