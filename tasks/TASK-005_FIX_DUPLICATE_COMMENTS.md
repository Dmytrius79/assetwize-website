# CURSOR TASK: Fix Duplicate Comment Fields

**Created:** 2026-02-27  
**Priority:** 🔴 HIGH  
**Effort:** 5-10 min  
**Status:** To Do

---

## Context

Currently in the L1/L2 question runner, both the **client comment field** ("Optioneel commentaar") and the **consultant notes panel** ("CONSULTANT NOTES") are visible simultaneously. This creates confusion:
- Users don't know which field to use
- Distinction between client-facing and internal notes is unclear
- UI is cluttered with redundant fields

### Desired Behavior
- Client comment: Remains prominent and always visible
- Consultant notes: Collapsed by default in `<details>` element

---

## Implementation

### File to Edit
`app/assessments/[assessmentId]/[moduleCode]/page.tsx`

### Solution
Wrap ConsultantNoteField in collapsible details element:

```tsx
<details className="mt-4">
  <summary className="cursor-pointer text-sm font-medium text-zinc-600 hover:text-zinc-900">
    🔒 Consultant Notes (Internal)
  </summary>
  <div className="mt-3">
    <ConsultantNoteField 
      questionId={currentQuestion.id}
      initialNote={currentResponse?.consultantNote || ''}
      onSave={handleSaveConsultantNote}
    />
  </div>
</details>
```

---

## Verification

### Manual Testing
1. Open L1 or L2 assessment
2. Navigate to any question
3. Verify:
   - [ ] Client comment field is visible and prominent
   - [ ] Consultant notes are collapsed by default
   - [ ] Clicking summary expands consultant notes
   - [ ] Auto-save still works

---

## Git

### Commit Message
```
fix: Collapse consultant notes panel by default

- Wrap ConsultantNoteField in <details> element
- Reduces UI clutter and confusion
- Client comment remains prominent

Fixes duplicate comment fields issue (HIGH priority)
```

---

## BACKLOG Update

After completion, move "Fix Duplicate Comment Fields" from **TO DO** → **DONE** in BACKLOG.md

---

_Quick win task - should take < 10 minutes in Cursor_
