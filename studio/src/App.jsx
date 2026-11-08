/* BAKE Studio: the app shell. Header with the five steps, undo / redo / history, the active step, and Back / Next. */
import { useEffect, useRef, useState } from 'react';
import { S, commit, useStudio, isStorageFull, canUndo, canRedo, undoStep, redoStep, savePoints, addPoint, restorePoint, deletePoint } from './store.js';
import { STEPS, ensureArt, ensurePages } from './edit.js';
import { EditionMenu } from './components/EditionPicker.jsx';
import { edition } from './editions.js';
import Step1 from './steps/Step1.jsx';
import Step2 from './steps/Step2.jsx';
import Step3 from './steps/Step3.jsx';
import Step4 from './steps/Step4.jsx';
import Step5 from './steps/Step5.jsx';

const VIEWS = [Step1, Step2, Step3, Step4, Step5];
const MAC = typeof navigator != 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
const MOD = MAC ? '⌘' : 'Ctrl+';

/* Ctrl+Z undo, Ctrl+Shift+Z or Ctrl+Y redo (⌘ on a Mac), everywhere in the studio, including text boxes. */
function useUndoKeys() {
  useEffect(() => {
    function key(e) {
      if (!(e.ctrlKey || e.metaKey) || e.altKey) return;
      const k = e.key.toLowerCase();
      if (k == 'z' && !e.shiftKey) { e.preventDefault(); undoStep(); }
      else if ((k == 'z' && e.shiftKey) || (k == 'y' && !MAC)) { e.preventDefault(); redoStep(); }
    }
    addEventListener('keydown', key);
    return () => removeEventListener('keydown', key);
  }, []);
}

function ago(t) {
  const m = Math.round((Date.now() - t) / 60e3);
  if (m < 1) return 'just now';
  if (m < 60) return m + ' min ago';
  if (m < 60 * 24) return Math.round(m / 60) + ' h ago';
  return Math.round(m / 1440) + ' days ago';
}

/* History: the save points kept in this browser. Restoring one keeps a save point of the current work first. */
function History({ open, onClose }) {
  const dlg = useRef(null);
  const [, tick] = useState(0);
  useEffect(() => { const d = dlg.current; if (!d) return; if (open && !d.open) d.showModal(); if (!open && d.open) d.close(); }, [open]);
  useEffect(() => { if (!open) return; const t = setInterval(() => tick(n => n + 1), 30e3); return () => clearInterval(t); }, [open]);
  const list = savePoints();
  return <dialog ref={dlg} onClose={onClose} aria-labelledby="hih" className="m-auto w-[min(640px,94vw)] max-h-[88vh] overflow-auto rounded-2xl border border-line bg-panel p-0 text-ink backdrop:bg-black/50">
    <div className="p-5">
      <div className="flex items-center justify-between gap-3"><h2 id="hih" className="m-0">History</h2><button onClick={onClose} aria-label="Close">✕</button></div>
      <p className="mu">Save points are kept in this browser: automatically every few minutes while you work, before an import or starter replaces your pages, before Start over, and whenever you click <b>Save point now</b>. For single steps, use <b>Undo</b> ({MOD}Z) and <b>Redo</b> ({MAC ? '⌘⇧Z' : 'Ctrl+Y'}).</p>
      <p><button className="pri" onClick={() => addPoint('Saved by you')}>Save point now</button></p>
      {!list.length && <p className="mu">No save points yet.</p>}
      <ul className="m-0 list-none p-0">
        {list.map(p => <li key={p.id} className="flex flex-wrap items-center justify-between gap-2 border-t border-line py-3">
          <div><b>{p.label}</b> <span className="mu">· {ago(p.at)} ({new Date(p.at).toLocaleString()})</span><br /><span className="mu text-sm">{p.info}</span></div>
          <div className="flex gap-2">
            <button onClick={() => { if (confirm('Restore this save point? Your current work is kept as a save point first, and Undo also brings it back.')) { restorePoint(p.id); onClose(); } }}>Restore</button>
            <button onClick={() => { if (confirm('Delete this save point?')) deletePoint(p.id); }} aria-label={'Delete save point: ' + p.label}>Delete</button>
          </div>
        </li>)}
      </ul>
    </div>
  </dialog>;
}

export function go(n) {
  commit(S => { S.step = n; });
  try { history.replaceState(null, '', '#step-' + n); } catch (e) { /* ignore */ }
  window.scrollTo(0, 0);
}

export default function App() {
  useStudio();
  useUndoKeys();
  const [hist, setHist] = useState(false);
  ensureArt(); ensurePages();   // always have artwork options and a Home page
  const View = VIEWS[S.step - 1] || Step1;
  const insp = S.step == 3 && S.ui.insp && S.ui.insp.open ? 'insp-open' : undefined;   // make room for the Inspector
  return <>
    <header className={'top' + (insp ? ' insp-open' : '')}>
      <div className="topin">
        <div><h1>BAKE Studio <small className="edtag">{edition(S).name}</small></h1><p className="mu">Build a website in five steps. Your work is saved in this browser.</p></div>
        <div className="flex gap-2" role="group" aria-label="Undo and history">
          <button onClick={undoStep} disabled={!canUndo()} className="disabled:cursor-default disabled:opacity-40" title={'Undo (' + MOD + 'Z)'}>↶ Undo</button>
          <button onClick={redoStep} disabled={!canRedo()} className="disabled:cursor-default disabled:opacity-40" title={'Redo (' + (MAC ? '⌘⇧Z' : 'Ctrl+Y') + ')'}>↷ Redo</button>
          <button onClick={() => setHist(true)} title="Save points you can go back to">History</button>
        </div>
        <EditionMenu />
        <nav className="steps" aria-label="Steps">
          {STEPS.map((n, i) => <button key={n} aria-current={S.step == i + 1 ? 'step' : undefined} onClick={() => go(i + 1)}>{i + 1}. {n}</button>)}
        </nav>
      </div>
    </header>
    <main id="app" className={insp}>
      {isStorageFull() && <p className="warn">Your browser’s storage is full, so the latest changes aren’t saved. Try removing some uploaded images.</p>}
      <View go={go} />
      <nav className="pager">
        {S.step > 1 ? <button onClick={() => go(S.step - 1)}>← Back: {STEPS[S.step - 2]}</button> : <span />}
        {S.step < 5 && <button className="pri" onClick={() => go(S.step + 1)}>Next: {STEPS[S.step]} →</button>}
      </nav>
    </main>
    <History open={hist} onClose={() => setHist(false)} />
  </>;
}
