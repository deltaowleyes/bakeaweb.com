/* BAKE Studio: the project state (S), saving to this browser, and a tiny store React subscribes to.
   S is one plain object (see ARCHITECTURE.md §3). Change it inside commit(fn); every subscribed
   component then redraws and the project is saved 250 ms later. */
import { useSyncExternalStore } from 'react';
import { Art } from './lib/art.js';
import { normStudio } from './editions.js';

export const KEY = 'bake-studio-v2';

export function blank() {
  return {
    v: 3, step: 1, edition: 'pro',   // 'pro' | 'baker': the two Studios (editions.js)
    source: { has: true, url: 'https://deltaowleyes.ca/', log: [], found: null },
    biz: { name: 'Your business', desc: '' },
    brand: { pal: Object.assign({}, Art.PALETTES[0]), palFound: null, font: 0, seed: { logo: 0, hero: 0, ill: 0 }, opts: { logo: [], hero: [], ill: [] }, pick: {}, star: {} },
    pages: [], lib: [], footer: { motto: '', text: '' },
    menu: { items: [], cta: { label: 'Contact us', href: '#contact' }, vp: { desktop: { type: 'bar', logo: 'left', sticky: true, cta: false, search: false }, tablet: { type: 'hamburger', logo: 'left', sticky: true, cta: false, search: false }, phone: { type: 'hamburger', logo: 'left', sticky: true, cta: false, search: false } } },
    tpl: { pick: null, view: null, fav: {}, all: false, favOnly: false },
    notes: [], req: { name: '', email: '', dest: 'bakedby' }, ai: { endpoint: '' },
    ui: { vp: 'desktop', tvp: 'all', mvp: 'desktop', btab: 'logo', bsrc: 'svg', sel: null, open: false, prompt: {}, page: null, tpage: null, pasteFor: null, libq: '', insp: { open: false, tab: 'section', key: null, item: null } }
  };
}

export function load() {
  try {
    const o = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (o && o.v == 2) {   // v2 had one page in S.sections
      o.v = 3; o.pages = [{ id: 'p-home', name: 'Home', url: (o.source && o.source.url) || '', status: 'imported', sections: o.sections || [] }]; delete o.sections; o.lib = [];
      ['logo', 'hero'].forEach(t => o.brand.opts[t].forEach(x => { if (x.from == 'site') o.lib.push({ id: x.id, src: x.src, label: x.label || '', logo: t == 'logo' }); }));
    }
    if (o) o.edition = normStudio(o.edition);   // two Studios since 2026-11-08: express, rezsite, indigihub → pro
    if (o && o.v == 3) { const b = blank(); for (const k in b) if (!(k in o)) o[k] = b[k]; for (const k in b.ui) if (!(k in o.ui)) o.ui[k] = b.ui[k]; return o; }
  } catch (e) { /* unreadable save: start fresh */ }
  return null;
}

/* ---------- store ---------- */
export let S = load() || blank();
const hm = /#step-(\d)/.exec(location.hash); if (hm) S.step = Math.min(5, Math.max(1, +hm[1]));
const em = /[?&]v=(express|rezsite|indigihub|baker|pro)\b/.exec(location.search); if (em) S.edition = normStudio(em[1]);   // old ?v= links open PRO

let rev = 0, saveT, storageFull = false;
const subs = new Set();
function emit() { rev++; subs.forEach(f => f()); }
export function save() {
  clearTimeout(saveT);
  saveT = setTimeout(() => {
    let full = !writeMain();
    while (full && dropOldestPoint()) full = !writeMain();   // room for the project comes first: give up old save points
    if (full != storageFull) { storageFull = full; emit(); }
  }, 250);
}
function writeMain() { try { localStorage.setItem(KEY, JSON.stringify(S)); return true; } catch (e) { return false; } }

/* ---------- undo, redo and save points ----------
   A snapshot is S as JSON without view state (S.ui, S.step, the import log), so undo only steps through real
   changes to the project, and moving around the studio never fills the history. commit() compares the
   project before and after; if it changed, the "before" goes on the undo list. Quick changes in the same
   box (typing, dragging a colour or slider) within GROUP_MS become one step. */
const UNDO_MAX = 80, UNDO_CHARS = 60e6, GROUP_MS = 1500;
const HKEY = 'bake-studio-history', POINTS_MAX = 8, AUTO_MS = 3 * 60e3;
let undo = [], redo = [], last = null, lastAt = 0, lastEl = null, changedAt = 0;

function snap() {
  return JSON.stringify(S, function (k, v) {
    if (this === S && (k == 'ui' || k == 'step')) return undefined;
    if (this === S.source && k == 'log') return undefined;
    return v;
  });
}
function typingIn() {
  const a = document.activeElement;
  return a && (a.tagName == 'INPUT' || a.tagName == 'TEXTAREA' || a.isContentEditable) ? a : null;
}
function pageIds(json) { try { return (JSON.parse(json).pages || []).map(p => p.id); } catch (e) { return []; } }
function trim(list) {
  let n = list.reduce((t, x) => t + x.length, 0);
  while (list.length > UNDO_MAX || (n > UNDO_CHARS && list.length > 1)) n -= list.shift().length;
}
/** Put a snapshot back into S (in place, so every module keeps the same object), keeping the view state. */
function apply(json) {
  const o = JSON.parse(json), keep = { ui: S.ui, step: S.step, log: S.source.log };
  for (const k in S) delete S[k];
  Object.assign(S, blank(), o, { ui: keep.ui, step: keep.step });
  S.source.log = keep.log || [];
  const page = S.pages.find(p => p.id == S.ui.page) || S.pages[0];   // keep the selection pointing at something real
  S.ui.page = page ? page.id : null;
  if (!S.pages.some(p => p.id == S.ui.tpage)) S.ui.tpage = page ? page.id : null;
  if (S.ui.sel != 'footer' && !(page && page.sections.some(x => x.id == S.ui.sel))) { S.ui.sel = null; if (S.ui.insp) S.ui.insp.open = false; }
  last = json; lastEl = null; lastAt = 0; changedAt = Date.now();
}

/** Change the project: commit(S => { S.biz.name = 'x' }). Redraws, saves, and records an undo step. */
export function commit(fn) {
  if (last === null) last = snap();
  if (fn) fn(S);
  const now = snap();
  if (now !== last) {
    const t = Date.now(), el = typingIn();
    const group = el && el === lastEl && t - lastAt < GROUP_MS && undo.length;
    if (!group) { undo.push(last); trim(undo); }
    redo = [];
    // a whole new set of pages (import, starter) is a big change: keep a save point of what was there
    const before = pageIds(last), after = new Set(pageIds(now));
    if (before.length && !before.some(id => after.has(id)) && JSON.parse(last).pages.some(p => p.sections.length)) addPoint('Before replacing the pages', last);
    last = now; lastAt = t; lastEl = el; changedAt = t;
  }
  save(); emit();
}
export function canUndo() { return undo.length > 0; }
export function canRedo() { return redo.length > 0; }
export function undoStep() { if (!undo.length) return; if (last === null) last = snap(); redo.push(last); apply(undo.pop()); save(); emit(); }
export function redoStep() { if (!redo.length) return; undo.push(last); apply(redo.pop()); save(); emit(); }

/* Save points: whole-project snapshots kept in this browser under HKEY (newest first), made every few
   minutes while you work, before big changes, before Start over and before restoring another one. */
function readPoints() { try { return JSON.parse(localStorage.getItem(HKEY) || '[]'); } catch (e) { return []; } }
function writePoints(list) {
  for (;;) {
    try { localStorage.setItem(HKEY, JSON.stringify(list)); return true; } catch (e) { if (!list.length) return false; list.pop(); }
  }
}
function dropOldestPoint() { const l = readPoints(); if (!l.length) return false; l.pop(); writePoints(l); emit(); return true; }
let pointsCache = null;
export function savePoints() { if (!pointsCache) pointsCache = readPoints().map(p => ({ id: p.id, at: p.at, label: p.label, info: p.info })); return pointsCache; }
function info(json) {
  try { const o = JSON.parse(json), n = (o.pages || []).reduce((t, p) => t + p.sections.length, 0); const pl = (k, w) => k + ' ' + w + (k == 1 ? '' : 's'); return (o.biz && o.biz.name || '') + ' · ' + pl((o.pages || []).length, 'page') + ', ' + pl(n, 'section'); } catch (e) { return ''; }
}
/** Keep a save point. json defaults to the project as it is now. */
export function addPoint(label, json) {
  json = json || snap();
  const list = readPoints();
  if (list[0] && list[0].snap === json) return;   // nothing new since the last one
  list.unshift({ id: 'h' + Date.now().toString(36), at: Date.now(), label, info: info(json), snap: json });
  writePoints(list.slice(0, POINTS_MAX));
  pointsCache = null; emit();
}
export function restorePoint(id) {
  const p = readPoints().find(x => x.id == id); if (!p) return;
  addPoint('Before restoring a save point');
  if (last === null) last = snap();
  undo.push(last); trim(undo); redo = [];   // restoring can be undone too
  apply(p.snap); save(); emit();
}
export function deletePoint(id) { writePoints(readPoints().filter(x => x.id != id)); pointsCache = null; emit(); }
let autoAt = Date.now();
setInterval(() => { if (changedAt > autoAt && Date.now() - autoAt >= AUTO_MS) { autoAt = Date.now(); addPoint('Automatic save point'); } }, 30e3);

export function useStudio() { useSyncExternalStore(f => { subs.add(f); return () => subs.delete(f); }, () => rev); return S; }
export function useRev() { return useSyncExternalStore(f => { subs.add(f); return () => subs.delete(f); }, () => rev); }
export function isStorageFull() { return storageFull; }
/** Clears the project (a save point is kept first, so Start over can be undone from History). */
export function startOver() { addPoint('Before Start over'); try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ } location.href = location.pathname; }
