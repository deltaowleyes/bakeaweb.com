/* The call script, shown over the page from "View script" on an open call.
   Source text: call-script.md (copy of the project doc claude/calls/call-script.md; edit both together).
   Placeholders are filled for this call: [your name], [business], [website], [turnaround]. */
import { useEffect } from 'react';
import md from './call-script.md?raw';

const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const inline = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\*(.+?)\*/g, '<i>$1</i>');

/** Tiny markdown → HTML for this one script: headings, quotes, lists, tables, rules, bold, italic. */
export function mdHtml(text) {
  const out = [], lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (!l.trim()) continue;
    let m;
    if ((m = /^(#{1,3}) (.*)/.exec(l))) { const n = m[1].length; out.push(`<h${n + 1} id="s-${out.length}">${inline(m[2])}</h${n + 1}>`); }
    else if (/^---+$/.test(l)) out.push('<hr>');
    else if (l.startsWith('> ')) out.push(`<blockquote>${inline(l.slice(2))}</blockquote>`);
    else if (l.startsWith('|')) {
      const rows = []; while (i < lines.length && lines[i].startsWith('|')) rows.push(lines[i++]); i--;
      const cells = r => r.slice(1, -1).split('|').map(c => c.trim());
      out.push('<table><thead><tr>' + cells(rows[0]).map(c => `<th>${inline(c)}</th>`).join('') + '</tr></thead><tbody>'
        + rows.slice(2).map(r => '<tr>' + cells(r).map(c => `<td>${inline(c)}</td>`).join('') + '</tr>').join('') + '</tbody></table>');
    } else if (/^(\d+\.|-) /.test(l)) {
      const ol = /^\d/.test(l), items = [];
      while (i < lines.length && /^(\d+\.|-) /.test(lines[i])) items.push(lines[i++].replace(/^(\d+\.|-) /, '')); i--;
      out.push(`<${ol ? 'ol' : 'ul'}>${items.map(x => `<li>${inline(x)}</li>`).join('')}</${ol ? 'ol' : 'ul'}>`);
    } else out.push(`<p>${inline(l)}</p>`);
  }
  return out.join('\n');
}

/** Yes before 3 pm Eastern → designs today; after → tomorrow by noon. */
function turnaround() {
  const h = +new Date().toLocaleString('en-US', { timeZone: 'America/Toronto', hour: 'numeric', hour12: false });
  return h < 15 ? 'today' : 'tomorrow by noon';
}

export function scriptFor(c, me) {
  const site = c.website ? c.website.replace(/^https?:\/\//, '').replace(/\/$/, '') : 'your website';
  return md.replaceAll('[your name]', me?.name || '[your name]').replaceAll('[business]', c.name || 'your business')
    .replaceAll('[website]', site).replaceAll('[turnaround]', turnaround());
}

const JUMP = [['Opening', '1.'], ['Offer', '2.'], ['If yes', '3.'], ['Voicemail', '4.'], ['Price', 'Price'], ['Objections', 'Common objections']];

export default function Script({ c, me, onClose }) {
  useEffect(() => {
    const k = e => e.key === 'Escape' && onClose();
    addEventListener('keydown', k); document.body.style.overflow = 'hidden';
    return () => { removeEventListener('keydown', k); document.body.style.overflow = ''; };
  }, [onClose]);
  const jump = start => {
    const h = [...document.querySelectorAll('.script h3')].find(x => x.textContent.startsWith(start));
    h?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className="fixed inset-0 z-50 bg-ink/50 flex justify-end" onClick={onClose} role="dialog" aria-modal="true" aria-label="Call script">
      <div className="bg-white w-full max-w-2xl h-full flex flex-col shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="shrink-0 bg-ink text-white px-4 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0"><div className="text-xs opacity-70">Call script for</div><b className="block truncate">{c.name}</b></div>
          <button className="rounded-lg px-4 py-2 font-semibold bg-white text-ink" onClick={onClose}>Close script</button>
        </div>
        <div className="shrink-0 flex gap-2 overflow-x-auto px-4 py-2 border-b border-line bg-paper">
          {JUMP.map(([label, start]) => <button key={label} className="btn2 whitespace-nowrap text-sm !py-1" onClick={() => jump(start)}>{label}</button>)}
        </div>
        <div className="script flex-1 min-h-0 overflow-y-auto px-5 py-4" dangerouslySetInnerHTML={{ __html: mdHtml(scriptFor(c, me)) }} />
      </div>
    </div>
  );
}
