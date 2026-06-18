# AssetWize Kennisbank — Projectstart & Eerste Sessie

## Aan het nieuwe gesprek

Dit document is geschreven door Claude.ai in het RELICORE-project om de start
van een nieuw Claude-project voor de AssetWize Kennisbank te sturen. Lees het
volledig voordat je iets doet.

---

## 1. Wat is dit project?

De **AssetWize Kennisbank** (`assetwize-kb`) is een zelfstandige module binnen
het RELICORE-ecosysteem. Het is een **MkDocs Material**-site die draait op de
RELICORE-server en bereikbaar is via een eigen route.

De kennisbank is de publieke documentatielaag van AssetWize:
governance-documenten, blueprints, testprotocollen en implementatiegidsen.
Het is geen vervanger voor de RELICORE-software — het is de kennis die
de software onderbouwt.

**Relatie met RELICORE:**
- Draait op dezelfde VM: `relicore@relicore-dev` (`192.168.1.128`)
- Projectmap op de VM: `/opt/relicore/assetwize-kb/`
- Bronbestanden (MD): `/opt/relicore/docs/kb/`
- Nginx route: nog te bepalen (zie §7 — dit is de eerste taak)
- GitHub: onderdeel van de RELICORE-repo (`https://github.com/Dmytrius79/relicore`)

---

## 2. De drie-rollen aanpak (identiek aan RELICORE)

| Rol | Wie | Doet |
|---|---|---|
| **Architect / taakschrijver** | Claude.ai (dit gesprek) | Analyseert, ontwerpt werkwijze, schrijft taakbestanden |
| **Implementeerder** | Claude Code (terminal) | Voert taken uit op de VM, commit & push |
| **Beslisser** | Dimitry | Bevestigt richting, start Claude Code, beoordeelt resultaat |

**Kernregel:** Claude Code implementeert. Claude.ai formuleert taken.
De developer beslist.

**Claude Code starten:**
```bash
# In VS Code terminal:
claude --dangerously-skip-permissions
```
Daarna: `"Lees /opt/relicore/CLAUDE.md en voer /opt/relicore/tasks/TASK-XXX.md uit"`

---

## 3. Tech stack kennisbank

| Onderdeel | Technologie |
|---|---|
| Framework | MkDocs Material (`pip install mkdocs-material`) |
| Configuratie | `/opt/relicore/assetwize-kb/mkdocs.yml` |
| Bronbestanden | `/opt/relicore/assetwize-kb/docs/` (Markdown) |
| Build output | `/opt/relicore/assetwize-kb/site/` (statische HTML) |
| Python venv | `/opt/relicore/assetwize-kb/.venv/` |
| Build commando | `cd /opt/relicore/assetwize-kb && .venv/bin/mkdocs build` |
| Serve lokaal | `cd /opt/relicore/assetwize-kb && .venv/bin/mkdocs serve` |

**Navigatiestructuur (mkdocs.yml):**
```
Governance/
  - Visie & Fundament
  - Asset Positionering & Borging
  - (uitbreidbaar)
Blueprints/
  - Asset Positionering & Borging
  - (uitbreidbaar)
Implementatie/
  - RELICORE modules
  - Testprotocollen
Assessment/
Over AssetWize/
```

---

## 4. Huidige staat van de kennisbank

Per datum van dit document (april 2026):

**Documenten op de VM in `/opt/relicore/docs/kb/`:**
- `AssetWize — Visie, Fundament en Architectuur.md` (v0.1, Richtinggevend)
- `AssetWize_GD_Asset_Positionering_en_Borging.md` (v0.8, In ontwikkeling)
- `AssetWize_BP_Asset_Positionering_en_Borging.md` (v0.1, In ontwikkeling)
- `AssetWize_TP_RELICORE_Foundation.md` (v1.0, Normatief)

**MkDocs-structuur op de VM in `/opt/relicore/assetwize-kb/docs/`:**
- `governance/visie-fundament.md` — aanwezig
- `governance/asset-positionering.md` — aanwezig (verwijst naar GD)
- `blueprints/asset-positionering.md` — aanwezig (verwijst naar BP)
- `testprotocollen/relicore-foundation.md` — aanwezig (verwijst naar TP)
- Overige secties: index-bestanden aanwezig, inhoud nog leeg

**Status nginx-route:** nog niet geconfigureerd voor de kennisbank.
De kennisbank draait wel via MkDocs maar is nog niet publiek bereikbaar
via de Cloudflare-tunnel.

---

## 5. Naamgevingsconventie documenten

Alle governance-documenten volgen een vaste naamgevingsconventie:

| Prefix | Type | Voorbeeld |
|---|---|---|
| `AssetWize_GD_` | Governance Document | `AssetWize_GD_Asset_Positionering_en_Borging.md` |
| `AssetWize_BP_` | Blueprint | `AssetWize_BP_Asset_Positionering_en_Borging.md` |
| `AssetWize_EX_` | Voorbeeld / Praktijkcase | `AssetWize_EX_Utilities_Syngenta.md` |
| `AssetWize_TP_` | Test Protocol | `AssetWize_TP_RELICORE_Foundation.md` |

Bronbestanden bewaren altijd deze naam. De MkDocs-pagina krijgt een
kortere slug (bijv. `governance/asset-positionering.md`).

---

## 6. Wat ontbreekt — de eerste taak van dit project

Het centrale probleem dat in dit project opgelost moet worden:

> **Er is geen gedefinieerde werkwijze voor het toevoegen van een nieuw
> document aan de kennisbank.**

Momenteel vereist het toevoegen van een document:
1. Bronbestand schrijven (MD) → al goed geregeld via claude.ai
2. Bestand op juiste plek in `/opt/relicore/docs/kb/` zetten
3. Bestand kopiëren naar de juiste map in `/opt/relicore/assetwize-kb/docs/`
4. Entry toevoegen aan `mkdocs.yml` onder de juiste sectie
5. MkDocs-site rebuilden
6. Controleren dat de pagina bereikbaar is

Stap 3–6 zijn handmatig en foutgevoelig. Dit moet worden geautomatiseerd.

---

## 7. Eerste sessie — wat te doen

### Stap 1: Oriënteer op de huidige staat

Lees via SSH:
```bash
# Huidige navigatiestructuur
cat /opt/relicore/assetwize-kb/mkdocs.yml

# Welke bestanden staan er al in de KB-structuur
find /opt/relicore/assetwize-kb/docs -name "*.md" | sort

# Welke bronbestanden staan klaar
ls /opt/relicore/docs/kb/

# Is de venv intact?
ls /opt/relicore/assetwize-kb/.venv/bin/mkdocs
```

### Stap 2: Ontwerp de uploadwerkwijze

Dit is het kernvraagstuk van de eerste sessie. Ontwerp samen met Dimitry:

**a) Mappenstructuur bronbestanden**

Hoe leven bronbestanden samen met de MkDocs-structuur?
Optie A: Bronbestand IS de MkDocs-pagina (één bron, één locatie)
Optie B: Bronbestand in `/docs/kb/`, kopie in `/assetwize-kb/docs/`
Optie C: Symlinks tussen de twee locaties

**b) Toevoegproces**

Wat doet de redacteur? Wat doet Claude Code automatisch?
- Schrijft Dimitry alleen het `.md` bestand?
- Geeft hij de metadata mee (sectie, slug, status, versie)?
- Of detecteert een script dat automatisch op basis van bestandsnaam?

**c) mkdocs.yml beheer**

Automatisch bijwerken via script, of handmatig per document?

**d) Nginx-route**

De kennisbank moet bereikbaar zijn. Huidige RELICORE-nginx config:
- `/api/` → backend
- `/docs/` → knowledge-portal (de custom HTML portal)
- `/` → frontend

Nieuwe route nodig voor de MkDocs-site, bijv. `/kb/` of een subdomein.

### Stap 3: Schrijf TASK voor implementatie

Na het ontwerp schrijf je een concrete Cursor-taak voor:
1. Het upload-script (`add_doc.sh` of Python-equivalent)
2. Nginx-route voor de kennisbank
3. Synchronisatie van bestaande bronbestanden naar de KB-structuur

---

## 8. SSH-toegang (identiek aan RELICORE)

```bash
ssh -i ~/.ssh/id_ed25519 relicore@relicore-dev
# Of via hostname:
ssh relicore@relicore-dev
```

Projectmap op de VM:
```
/opt/relicore/assetwize-kb/     ← MkDocs project
/opt/relicore/docs/kb/          ← Bronbestanden
/opt/relicore/docs/media/       ← Logo en afbeeldingen
```

---

## 9. Referentiedocumenten

Lees via SSH als je context nodig hebt:

| Document | Pad op VM | Inhoud |
|---|---|---|
| RELICORE CLAUDE.md | `/opt/relicore/CLAUDE.md` | Werkwijze + architectuur RELICORE |
| mkdocs.yml | `/opt/relicore/assetwize-kb/mkdocs.yml` | Volledige navigatiestructuur KB |
| GD Positionering | `/opt/relicore/docs/kb/AssetWize_GD_Asset_Positionering_en_Borging.md` | Governance document v0.8 |
| BP Positionering | `/opt/relicore/docs/kb/AssetWize_BP_Asset_Positionering_en_Borging.md` | Blueprint v0.1 |
| TP RELICORE | `/opt/relicore/docs/kb/AssetWize_TP_RELICORE_Foundation.md` | Testprotocol v1.0 |

---

## 10. Taalconventie

- **Nederlands** — planning, architectuur, beslissingen, ontwerp-discussies
- **Engels** — taakbestanden, code, commit-messages, documentatie in de repo

---

## 11. Aandachtspunten vanuit het RELICORE-project

- De kennisbank deelt de VM, de repo en de nginx-configuratie met RELICORE.
  Wijzigingen aan `nginx.conf` of `docker-compose.yml` raken altijd beide.
- De `/docs/`-route in nginx is al in gebruik door de custom HTML portal
  (`/opt/relicore/knowledge-portal/`). Gebruik een andere route voor MkDocs.
- MkDocs Material heeft een eigen Python venv. Niet mengen met de
  RELICORE backend-venv.
- De Cloudflare-tunnel URL verandert bij elke herstart. Haal de huidige URL op via:
  ```bash
  ssh relicore@relicore-dev 'grep -o "https://.*trycloudflare.com" /opt/relicore/tunnel.log | tail -1'
  ```

---

*AssetWize KB — Startdocument eerste sessie*
*Geschreven door Claude.ai (RELICORE-project) als overdracht naar nieuw KB-project*
*Bewaarlocatie: `/Users/drvandort/dev/assetwize-platform/docs/ASSETWIZE_KB_START.md`*
