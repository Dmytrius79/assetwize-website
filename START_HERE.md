# AssetWize — START_HERE
**Versie:** 2026-02-27 (Session 2)  
**Laatst gewijzigd:** Dimitry (via Claude)

---

## 🎯 LEESINSTRUCTIE VOOR NIEUWE CHAT

**Verplichte volgorde:**
1. Lees dit document (5 min)
2. Lees `BACKLOG.md` (huidige werklijst)
3. Lees het document dat bij jouw sessie past (zie Routering hieronder)
4. Bevestig in chat: _"Ik heb gelezen: [docs]. Huidige focus: [X]"_

**Als je niet weet waar te beginnen:** Lees BACKLOG.md → 🔴 TO DO sectie

---

## 📝 WAT IS DIT PROJECT?

**AssetWize** is een consultancy-first SaaS platform voor asset management maturity assessments gebaseerd op ISO 55000. 

**Drielaags:**
- **L1:** Board Scan (28 vragen, governance niveau)
- **L2:** Management Control (100 vragen, proces niveau)  
- **L3:** Growth Paths (capability-driven roadmaps)

**Doel:** Van board-pijn naar traceerbare actie via maturity scans + interventie roadmaps.

**Operating model:** Tool gebruikt door consultant tijdens begeleide workshops (niet zelfbediening SaaS).

---

## 📊 HUIDIGE STAAT (2026-02-27)

### ✅ WERKT (PRODUCTION READY)

**Core Functionality:**
- L1 Board Scan: questions, responses, reports (radar chart, band analysis)
- L2 Management Control: questions with filters (theme/subtheme/PDCA), PDCA analysis, reports
- L3 Growth Paths: database models, recommended domains, capability scan UI, roadmap generation per domain

**State Management:**
- Assessment lifecycle: IN_PROGRESS → REVIEW_READY → FINALIZED
- Preview report mode (geen auto-lock)
- Read-only enforcement voor finalized assessments

**Evidence & Commentary:**
- Consultant notes per question (auto-save, debounced)
- Theme notes (observation, insight, action, risk)
- SubTheme notes (L2 diagnostic)
- Evidence linking systeem

**Operations:**
- Health monitoring (`/api/health`)
- Structured error logging (daily files in `/logs`)
- Database backup scripts (daily cron ready)
- PM2 process management
- Uptime monitoring script

### ⚠️ IN PROGRESS

**L3 Data Enrichment:**
- Need 150 L2→L3 question mappings (0/150 done)
- Need 200+ rich interventions (24/200 done, content te summier)
- Need observable behaviors per capability question (0/30 done)
- Need intervention dependencies (0/400 done)

**Quick Fixes:**
- Duplicate comment fields bug (consultant + client comment both visible)

### 🔴 KNOWN ISSUES

**High Priority:**
1. **Duplicate Comment Fields** (L1/L2 runner)
   - Impact: Confusing UX, unclear distinction
   - Fix: Cursor task (5-10 min) - wrap consultant notes in collapsible

**Medium Priority:**
2. **L3 Content Quality**
   - Impact: Roadmaps niet board-ready (geen business case, rationale)
   - Fix: Data enrichment (15-22 dagen, 8-12 met 2 mensen)

3. **L3 Program Reporting Missing**
   - Impact: Losse roadmaps per domain, geen integraal programma
   - Fix: Program aggregation (Stage 5C, 3-4 dagen)

**Low Priority:**
4. L2 filter persistence (sessionstorage oplossing)
5. Missing timestamps op enkele models

---

## 🎯 ACTIEVE PRIORITEITEN

| Pri | Wat | Document | Status | Owner |
|-----|-----|----------|--------|-------|
| 🔴 | Fix duplicate comment fields | `tasks/TASK_FIX_DUPLICATE_COMMENTS.md` | To Do | - |
| 🔴 | L3 L2→L3 question mapping | `docs/design/L3_DATA_ARCHITECTURE.md` Part 1 | Design | - |
| 🔴 | L3 Observable behaviors | `docs/design/L3_DATA_ARCHITECTURE.md` Part 2 | Design | - |
| 🟡 | Test consultancy workflow | - | To Do | Dimitry |
| 🟡 | Setup backup automation (cron) | `docs/operations/RUNBOOK.md` | To Do | - |
| 🟡 | L3 Enhanced interventions | `docs/design/L3_DATA_ARCHITECTURE.md` Part 3 | Design | - |

---

## 🗺️ ROUTERING — BIJ VRAAG OVER X, LEES Y

| Vraag over... | Lees dit document |
|---------------|-------------------|
| Tech stack, database schema, API design | `docs/foundation/PROJECT_OVERVIEW.md` |
| Roadmap, planning, stages, overall progress | `docs/foundation/ASSETWIZE_ROADMAP.md` |
| L3 data design (mappings, interventions, dependencies) | `docs/design/L3_DATA_ARCHITECTURE.md` |
| State machine implementation | `tasks/CURSOR_TASK_BUNDLE_A_STATE_MACHINE.md` |
| Evidence & commentary layer | `tasks/CURSOR_TASK_BUNDLE_B_EVIDENCE_COMMENTARY.md` |
| Operational hardening (health, backups, monitoring) | `tasks/CURSOR_TASK_BUNDLE_C_OPERATIONAL_HARDENING.md` |
| Server operations, deployment, troubleshooting | `docs/operations/RUNBOOK.md` |
| Database schema details | `schema.prisma` (root) |
| Package dependencies | `package.json` (root) |

**Als document niet in bovenstaande lijst:** Check `BACKLOG.md` voor verwijzingen.

---

## ⚠️ KRITIEKE REGELS (NEVER VIOLATE)

### Database (Prisma)
1. **Shared Prisma instance:** ALWAYS `import prisma from '@/lib/prisma'`
2. **NEVER call `$disconnect()`** in API routes or functions
3. **Absolute paths** for reliability (not relative, not tilde)

### UI Components
4. **Button variants:** Use `variant="primary"` or `variant="secondary"` (NEVER default/outline)
5. **State badges:** Use StateBadge component for assessment status display

### Assessment Flow
6. **State machine:** IN_PROGRESS → REVIEW_READY → FINALIZED (no shortcuts)
7. **Preview mode:** Use `?preview=true` query param, don't auto-lock on report view
8. **Module completion:** Sets `REVIEW_READY` (not COMPLETED)

### Commentary
9. **Client vs Consultant:** Client comment (prominent field), Consultant notes (collapsible panel)
10. **Auto-save:** Use debounce (1000ms) for all note fields

### L3 Design
11. **Auto-suggestion workflow:** L2 scores → auto-fill L3 capability answers → consultant review (NEVER blank questionnaire)
12. **Compensatie patronen:** Consultant must explain when overriding L2-based suggestion

---

## 📅 LAATSTE SESSIE (2026-02-27)

**Focus:** Consultancy-first epics (3 bundles)  
**Duration:** ~8 hours  
**Progress:** 75% → 85%

**Implemented:**
- Bundle A: Assessment State Machine (12 files, ~800 LOC)
- Bundle B: Evidence & Commentary Layer (15 files, ~1200 LOC)
- Bundle C: Operational Hardening (13 files, ~600 LOC)
- **Total:** 40 files, ~2600 LOC

**Identified:**
- Duplicate comment fields bug (high priority quick fix)
- L3 data architecture requirements (15-22 dagen effort)

**Design Decisions:**
- L3 capability scan = auto-suggestion + review (not blank questionnaire)
- Consultant notes collapsed by default (reduce confusion)
- Observable behaviors per maturity level required for meaningful review

**Next Session Focus:**
- Fix duplicate comment fields (quick win)
- Start L3 data generation (L2→L3 mappings first)
- Test consultancy workflow end-to-end

---

## 🔄 SESSIE AFSLUITING PROTOCOL

**Verplicht aan einde elke sessie (5 min):**

1. [ ] Update `BACKLOG.md`
   - Gedane items → Done (met datum)
   - Nieuwe items toevoegen
   - In Progress items updaten

2. [ ] Update `CHANGELOG.md`
   - Nieuwe sessie sectie
   - Wat added/changed/fixed/designed
   - Files changed count

3. [ ] Update `START_HERE.md` (indien status/prioriteiten wijzigen)
   - Huidige staat
   - Actieve prioriteiten
   - Laatste sessie notitie

4. [ ] Update design docs (indien architectuur beslissingen)

5. [ ] Git commit + push

---

## 📚 SNELLE REFERENTIE

**Platform:**
- Next.js 16.1.6, React 19, TypeScript 5
- Prisma 6.19.2 + PostgreSQL
- Tailwind CSS 4
- PM2 process manager

**Deployment:**
- Production: http://192.168.1.182:3000
- Server: /home/amadmin/am-scan-app
- PM2: `pm2 restart assetwize`

**Key Endpoints:**
- Health: `/api/health`
- Status: `/api/status`
- L1 Questions: `/api/modules/L1/questions`
- L2 Questions: `/api/modules/L2/questions`
- Report: `/api/assessments/[id]/report?preview=true`

**Scripts:**
- Dev: `npm run dev`
- Build: `npm run build`
- Deploy: `npm run build && pm2 restart assetwize`
- Backup: `./scripts/backup-database.sh`

---

_Voor gedetailleerde informatie: zie gerouteerde documenten hierboven._  
_Voor actieve taken: zie `BACKLOG.md`._  
_Voor geschiedenis: zie `CHANGELOG.md`._
