# Undo, redo and history (bake/undo-redo-and-history)

Files changed: `studio/src/store.js`, `studio/src/App.jsx` (nothing else).

## What it does
- **Undo / Redo** buttons in the header, plus Ctrl+Z, Ctrl+Shift+Z and Ctrl+Y (⌘Z / ⌘⇧Z on a Mac). They work everywhere, including inside text boxes.
- Typing (or dragging a colour or slider) in the same box within 1.5 s counts as **one** undo step.
- Only real project changes are undoable: moving between steps, preview sizes, the selected section, open panels and the import log (`S.ui`, `S.step`, `S.source.log`) are not recorded.
- Up to 80 steps (and about 60 MB) are kept in memory for this visit; a reload starts a fresh undo list.
- **History** button opens a dialog of **save points** kept in the browser (`localStorage` key `bake-studio-history`, newest first, up to 8):
  automatic every 3 minutes while changes are being made; before an import or starter replaces all pages; before **Start over** (so Start over can be undone); before restoring another save point; and **Save point now**. Each can be restored or deleted. Restoring is also undoable.
- If the browser's storage is full, old save points are dropped first so the project itself still saves.

## For the docs (fold into ARCHITECTURE.md at merge)
- §3.3 *Saving, loading and migration*: add "**Undo and save points:** `commit()` serializes the project without view state (`snap()`: no `ui`, `step`, `source.log`) and, if it changed, pushes the previous snapshot on the undo list (same focused input within 1.5 s = one step). `undoStep()` / `redoStep()` put a snapshot back in place with `apply()`, keeping the view state and fixing `ui.page`, `ui.tpage`, `ui.sel` if they no longer exist. Save points (`addPoint`, `restorePoint`, `deletePoint`, `savePoints`) live under the `localStorage` key `bake-studio-history` (max 8); they are made every 3 min while editing, when a commit replaces every page id (import, starter), before Start over and before a restore. `save()` drops the oldest save point when storage is full."
- §7 *How the React app works*: "Change state only through `commit()` so undo sees it. Mutations outside `commit()` are folded into the next undo step."
- §2 file list: `store.js` → "S (project state), load/migrate, save, commit(), undo/redo, save points, useStudio()"; `App.jsx` → "header + step buttons, Undo/Redo/History, History dialog, active step…".
- Mark roadmap task `undo-redo-and-history` done ("Undo, redo and history").

## Tested (headless Chrome, dev server)
Typing grouped into one step; undo/redo by keys and buttons; deleting a section and undoing it; a second starter makes a "Before replacing the pages" save point and undo brings the first starter back; Start over → restore "Before Start over" brings back all pages; restore survives a reload; no console errors.

## Ideas for later
- Edits made by the Command palette, drag and drop, etc. are covered automatically as long as they use `commit()`.
- `edit.js` could call `addPoint('Before import')` explicitly for clearer labels (it is outside this task's files, so a heuristic is used now).
