// Makes ROADMAP.md from ROADMAP.json (the BAKE PRO list). Run: node studio/scripts/roadmap.mjs
import { readFileSync, writeFileSync } from 'node:fs';
const root = new URL('../../', import.meta.url);
const d = JSON.parse(readFileSync(new URL('ROADMAP.json', root), 'utf8'));
const f = Object.fromEntries(d.fields.map((k, i) => [k, i]));
const cell = s => String(s || '').replace(/\|/g, '\\|');
const READY = { now: '▶ now', plan: '✎ plan', after: '⏳ after', you: '✋ you' };
/* Path a task changes, without notes: "studio/src/ (almost every file)" -> "studio/src/". */
const clean = p => String(p).split(' ')[0];
const clash = (a, b) => a.some(x => b.some(y => { x = clean(x); y = clean(y); return x == y || (x.endsWith('/') && y.startsWith(x)) || (y.endsWith('/') && x.startsWith(y)); }));
/** Groups of ready tasks that can run at the same time (no shared files). Top picks and studio work first. */
export function waves(d, max = 20) {
  const f = Object.fromEntries(d.fields.map((k, i) => [k, i]));
  let left = d.tasks.filter(t => t[f.ready] == 'now' || t[f.ready] == 'plan')
    .sort((a, b) => (b[f.top] - a[f.top]) || ((a[f.ready] == 'now' ? 0 : 1) - (b[f.ready] == 'now' ? 0 : 1)));
  const out = [];
  while (left.length && out.length < max) {
    const wave = [], rest = [];
    for (const t of left) (wave.some(w => clash(w[f.touches], t[f.touches])) ? rest : wave).push(t);
    out.push(wave); left = rest;
  }
  return out;
}
let md = `# BAKE PRO roadmap

Every idea for BAKE Studio, in one list. These are possible avenues, not a to-do list. The list itself lives in \`ROADMAP.json\` (edit that file and the BAKE PRO buttons update too); this page is made from it by \`node studio/scripts/roadmap.mjs\`. Business plan: \`VISION.md\`. Updated ${d.updated}. ${d.tasks.length} tasks.

**Already done:** ${d.done.join('; ')}.

**Top picks** are marked ★. **Plan first** means Claude shows a plan and costs and waits for an OK before building.
**Ready:** ▶ now = can start now; ✎ plan = the planning part can start now; ⏳ after = waits for other tasks; ✋ you = waits for you.

## BAKE PRO 2.0: run together now

Tasks in the same wave change different files, so they can all run at the same time. Each works on its own branch (\`bake/<id>\`) and never builds or publishes; one **Merge and publish** step does that at the end (CLAUDE.md, *Parallel BAKE*).

${waves(d).map((w, i) => `**Wave ${i + 1}** (${w.length} task${w.length == 1 ? "" : "s"}): ` + w.map(t => t[f.title]).join(' · ')).join('\n\n')}
`;
// JavaScript puts number-like keys first, so list Anytime first on purpose.
const order = ['Anytime', ...Object.keys(d.phases).filter(k => k !== 'Anytime')];
for (const key of order) {
  const desc = d.phases[key];
  const rows = d.tasks.filter(t => t[f.phase] === key);
  md += `\n## ${key === 'Anytime' ? 'Anytime' : 'Phase ' + key}: ${desc}\n\n| | Task | Area | Size | Ready | You'll need |\n|---|---|---|---|---|---|\n`;
  for (const t of rows)
    md += `| ${t[f.top] ? '★' : ''} | **${cell(t[f.title])}**${t[f.planFirst] ? ' (plan first)' : ''}<br>${cell(t[f.why])} | ${t[f.area]} | ${t[f.size]} | ${READY[t[f.ready]] || ''}${t[f.after] && t[f.after].length ? ' ' + t[f.after].join(', ') : ''} | ${cell(t[f.need]) || '—'} |\n`;
}
if (import.meta.url == 'file://' + process.argv[1]) {
  writeFileSync(new URL('ROADMAP.md', root), md);
  console.log(`ROADMAP.md written: ${d.tasks.length} tasks. Waves: ${waves(d).map(w => w.length).join(', ')}.`);
}
