# TODO.md — AssetWize Platform

> Openstaande beslissingen en toekomstige taken.
> Bijhouden per onderwerp.

---

## Website

| # | Onderwerp | Notitie | Status |
|---|---|---|---|
| 1 | Cases / referenties op Over ons pagina | Open laten totdat meer cases beschikbaar zijn naast Syngenta NL | Open |
| 2 | Engelstalige versie website | Komt later — NL is primair | Open |
| 3 | Screenshots RELICORE software | relicore_structure.png + relicore_governance.png handmatig toevoegen aan public/ | Open |
| 4 | RELICORE open link | /relicore-app → https://relicore.app zodra domein live is | Open |

---

## Platform

| # | Onderwerp | Notitie | Status |
|---|---|---|---|
| 1 | Cloudflare Pages koppeling | Eenmalige setup — domein assetwize.nl overzetten van Wix naar Cloudflare | Open |
| 2 | relicore.app | Permanente Cloudflare tunnel instellen op NUC — stabiel domein koppelen | Open |
| 3 | Clerk multi-tenant setup | Platform Fase 3 | Open |
| 4 | Stripe producten aanmaken | Platform Fase 3 | Open |

---

## Producten

| # | Onderwerp | Notitie | Status |
|---|---|---|---|
| 1 | Governance Compass pagina | Volgt na Over ons | Open |
| 2 | Contact pagina | Formulier + Cloudflare Turnstile | Open |
| 3 | Governance Compass software ontvangstpagina | Zelfde aanpak als RELICORE | Open |
| 4 | KADENZ pagina | Zodra product concreter is | Open |

---

## Data Security — RELICORE / Syngenta NL

> Aansprakelijkheidsrisico bij datalek. Borgen voordat meer klanten live gaan.
> Prioriteit: hoog voor Syngenta, verplicht voor elke volgende klant.

### Nu — voor Syngenta inlogt

| # | Actie | Hoe | Status |
|---|---|---|---|
| 1 | Auth bouwen | TASK-031 uitvoeren | Open |
| 2 | SECRET_KEY niet in git | Controleren via `git log --all -- .env` op NUC | Open |
| 3 | .env niet in git | Controleren via `git log --all -- .env` op NUC | Open |

### Deze week

| # | Actie | Hoe | Status |
|---|---|---|---|
| 4 | HTTPS-only op Cloudflare tunnel | Cloudflare tunnel config — geen HTTP doorlaten | Open |
| 5 | Dagelijkse database backup | Cron op NUC: `pg_dump` naar externe locatie | Open |

### Binnenkort

| # | Actie | Hoe | Status |
|---|---|---|---|
| 6 | Disk encryption NUC | LUKS op Ubuntu — éénmalige setup, check eerst met `lsblk` | Open |
| 7 | Verwerkersovereenkomst Syngenta | Juridisch document — welke data, hoe beveiligd, bewaartermijn, meldplicht bij lek | Open |

### Later (bij groei)

| # | Actie | Hoe | Status |
|---|---|---|---|
| 8 | Penetratietest | Externe partij laten testen zodra platform live is | Open |
| 9 | ISO 27001 oriëntatie | Relevant als enterprise klanten komen | Open |
| 10 | Data residency policy | Waar staat de data — NL/EU — voor overheidsklanten | Open |

---

## Noot: verwerkersovereenkomst

Syngenta's assetdata is bedrijfsvertrouwelijk. Juridisch is een verwerkersovereenkomst
(DPA) nodig die vastlegt:
- Welke data verwerkt wordt
- Hoe beveiligd (technische maatregelen)
- Bewaartermijn
- Procedure bij datalek (meldplicht AVG: 72 uur)
- Subverwerkers (Cloudflare, GitHub, hosting)

Dit beschermt Dimitry/AssetWize bij een incident.
Template opstellen zodra TASK-031 klaar is.
