# tasks/ — Werkwijze voor taken en opdrachten

Elke ontwikkelwijziging aan deze website loopt via een taakbestand in deze map.
Dit document legt vast hoe dat werkt.

---

## Werkwijze

1. **Elke ontwikkelwijziging begint met een taakbestand:** `tasks/TASK-XXX-korte-naam.md`.
2. **De chat maakt het taakbestand** en geeft Dimitry één opdracht om in Claude Code te plakken
   (zie [Standaardopdracht](#standaardopdracht)).
3. **Uitzoekwerk dat VS Code nodig heeft:** de chat geeft de opdracht, Dimitry voert hem uit
   en plakt de uitkomst terug in de chat.
4. **Claude Code werkt alleen op een branch**, nooit direct op `main`, tenzij de taak dat zegt.
5. **Vóór elke commit draait `npm run build`.** Faalt de build, dan niet pushen.
6. **Na afronding** vult Claude Code het onderdeel *Resultaat* in het taakbestand in,
   commit en pusht naar de branch.
7. **Merge naar `main` doet alleen Dimitry**, na controle van preview en pull request.
8. **Brandregels staan in de repo:** in `START_HERE.md` en straks in `CLAUDE.md` in de
   repo-root (nog aan te maken). **Kennis en besluiten staan in Notion.**

---

## Standaardopdracht

Plak deze opdracht in Claude Code (vervang `TASK-XXX` door het juiste taakbestand):

```
Lees START_HERE.md en tasks/TASK-XXX.md en voer de taak uit volgens tasks/README.md.
```

---

## Sjabloon

Kopieer dit naar `tasks/TASK-XXX-korte-naam.md` en vul het in.

```markdown
# TASK-XXX — Korte naam

## Doel
Wat moet deze taak opleveren, en waarom?

## Context
Relevante achtergrond: pagina's, bestanden, eerdere taken, besluiten (link naar Notion).

## Opdracht
Concrete stappen voor Claude Code.
- Branch: `feature/korte-naam` (of: "werk op main" als de taak dat expliciet toestaat)

## Niet doen
Wat expliciet buiten scope valt of niet aangeraakt mag worden.

## Klaar als
- [ ] `npm run build` slaagt
- [ ] ...

## Resultaat
*In te vullen door Claude Code na afronding:* wat is gedaan, welke bestanden zijn gewijzigd,
branch en commit, eventuele open punten.
```
