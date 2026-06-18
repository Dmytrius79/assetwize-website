# AssetWize — BACKLOG
**Laatste update:** 2026-02-27 (Session 2)  
**Bijgewerkt door:** Claude

---

## 🔴 TO DO (IMMEDIATE - DEZE WEEK)

### Quick Fixes (< 1 dag)

- [ ] **Fix Duplicate Comment Fields** (L1/L2 Runner)
  - **Priority:** 🔴 HIGH
  - **Effort:** 5-10 min
  - **Owner:** -
  - **Created:** 2026-02-27
  - **Context:** Both "Optioneel commentaar" (client) and "CONSULTANT NOTES" visible simultaneously
  - **Solution:** Wrap ConsultantNoteField in `<details>` element, collapsed by default
  - **Task:** Create `tasks/TASK_FIX_DUPLICATE_COMMENTS.md`
  - **Files:** `app/assessments/[assessmentId]/[moduleCode]/page.tsx`

### Testing & Validation (1-2 dagen)

- [ ] **Test Consultancy Workflow End-to-End**
  - **Priority:** 🟡 MEDIUM  
  - **Effort:** 1 dag (real assessment doorlopen)
  - **Owner:** Dimitry
  - **Created:** 2026-02-27
  - **Tasks:**
    - Create new assessment (L1 + L2)
    - Fill in questions, add consultant notes, add theme notes
    - Mark REVIEW_READY, test preview mode
    - Finalize assessment, verify read-only
    - Generate report, verify notes appear
    - Test L3 recommended domains → capability scan → roadmap
  - **Success Criteria:** No bugs, workflow feels smooth, notes visible in report

- [ ] **Setup Backup Automation** (Cron Jobs)
  - **Priority:** 🟡 MEDIUM
  - **Effort:** 30 min
  - **Owner:** -
  - **Created:** 2026-02-27
  - **Context:** Backup scripts exist, need cron configuration
  - **Tasks:**
    - `crontab -e` on server
    - Add: `0 2 * * * /home/amadmin/am-scan-app/scripts/backup-database.sh >> /home/amadmin/logs/backup.log 2>&1`
    - Add: `*/5 * * * * /home/amadmin/am-scan-app/scripts/uptime-monitor.sh`
    - Create `/home/amadmin/logs` directory
    - Test backup manually, verify restore works
  - **Docs:** `docs/operations/RUNBOOK.md`

---

## 🔴 TO DO (L3 DATA ARCHITECTURE - 2-3 WEKEN)

### Part 1: L2→L3 Question Mapping (2-3 dagen)

- [ ] **Design L2→L3 Mapping Schema**
  - **Priority:** 🔴 CRITICAL (blocks auto-suggestion)
  - **Effort:** 4 hours
  - **Owner:** -
  - **Created:** 2026-02-27
  - **Tasks:**
    - Create Prisma model: `L2ToL3QuestionMapping`
    - Define CSV structure
    - Migration: `add_l2_to_l3_question_mapping`
  - **Context:** `docs/design/L3_DATA_ARCHITECTURE.md` Part 1
  - **Deliverable:** Schema + migration

- [ ] **Generate 150 L2→L3 Mappings** (ChatGPT)
  - **Priority:** 🔴 CRITICAL
  - **Effort:** 2-3 dagen (domain expertise required)
  - **Owner:** -
  - **Created:** 2026-02-27
  - **Tasks:**
    - 30 L3 questions × ~5 L2 subthemes each
    - Define weights (0.1-1.0 per mapping)
    - Identify inversions (rare, ~5%)
    - Set confidence thresholds
  - **Context:** `docs/design/L3_DATA_ARCHITECTURE.md` Part 1
  - **Deliverable:** `data/l3/l2_to_l3_question_mapping.csv` (150 rows)

### Part 2: Observable Behaviors (3-4 dagen)

- [ ] **Define Observable Behaviors (30 Questions × 5 Levels)**
  - **Priority:** 🔴 CRITICAL (enables review UI)
  - **Effort:** 3-4 dagen
  - **Owner:** -
  - **Created:** 2026-02-27
  - **Tasks:**
    - Per level (A-E): behavior + example + 3-5 diagnostics
    - 750 data points total (30 × 25 fields)
    - Concrete, measurable definitions
    - ChatGPT assisted generation
  - **Context:** `docs/design/L3_DATA_ARCHITECTURE.md` Part 2
  - **Deliverable:** `data/l3/capability_questions_enhanced.csv`

### Part 3-5 continuing...
[Remaining L3 tasks omitted for brevity - see full BACKLOG.md for complete list]

---

## 🟡 TO DO (LATER - VOLGENDE MAAND)

### L3 Program Reporting (Stage 5C)
- [ ] Design Program Aggregation (1 dag)
- [ ] Implement Program Generation API (2-3 dagen)

### UI Improvements
- [ ] L2 Filter Persistence (sessionStorage)
- [ ] Add Missing Timestamps (createdAt/updatedAt on models)

### Consultancy Guides
- [ ] Write Board Workshop Script (L1 facilitation guide)
- [ ] Write L2 Interview Guide (per subthema)
- [ ] Write Capability Scan Guide (observable behaviors per level)
- [ ] Evidence Checklist (what to request from MT)

---

## 🔵 IN PROGRESS

_(Currently empty - items move here when work starts)_

---

## 🟢 DONE (RECENT)

### 2026-02-27 (Session 2) - Consultancy-First Epics

- [x] **Bundle A: Assessment State Machine**
  - **Completed:** 2026-02-27
  - **Effort:** ~8 hours
  - **Result:** 12 files, ~800 LOC
  - **Doc:** `tasks/CURSOR_TASK_BUNDLE_A_STATE_MACHINE.md`

- [x] **Bundle B: Evidence & Commentary Layer**
  - **Completed:** 2026-02-27
  - **Effort:** ~10 hours
  - **Result:** 15 files, ~1200 LOC
  - **Doc:** `tasks/CURSOR_TASK_BUNDLE_B_EVIDENCE_COMMENTARY.md`

- [x] **Bundle C: Operational Hardening**
  - **Completed:** 2026-02-27
  - **Effort:** ~6 hours
  - **Result:** 13 files, ~600 LOC
  - **Doc:** `tasks/CURSOR_TASK_BUNDLE_C_OPERATIONAL_HARDENING.md`

- [x] **L3 Data Architecture Design**
  - **Completed:** 2026-02-27
  - **Result:** 42-page specification document
  - **Doc:** `docs/design/L3_DATA_ARCHITECTURE.md`

- [x] **Chat Continuity Framework Setup**
  - **Completed:** 2026-02-27
  - **Deliverables:** START_HERE.md, BACKLOG.md, CHANGELOG.md

---

## 📊 METRICS

**Session 2026-02-27:**
- Progress: 75% → 85% (+10%)
- Files changed: 40 files
- LOC added: ~2600

**L3 Data Completion:**
- L2→L3 Mappings: 0/150 (0%)
- Observable Behaviors: 0/30 (0%)
- Enhanced Interventions: 24/200 (12%)

**Known Issues:**
- High: 1 (duplicate comment fields)
- Medium: 2 (L3 content, program reporting)

---

_Voor context: zie `START_HERE.md`._  
_Voor geschiedenis: zie `CHANGELOG.md`._
