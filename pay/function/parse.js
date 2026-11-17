/* Reads an Interac e-Transfer notification (already decoded to subject + text) and pulls out what bake-pay needs.
   Pure function, no libraries, so the Testing robot can check it (studio/tests/pay.spec.js).
   Interac's wording varies by bank and language, so every rule is forgiving:
   - pay code:   BAKE-XXXX anywhere (the sender's message), letters/numbers as made by order_shared_pitch()
   - amount:     "$300.00", "$1,250.00 (CAD)", "300,00 $" (French)
   - sender:     "INTERAC e-Transfer: Jane Smith sent you money." / "... a envoyé ..." in the subject
   - deposited:  Autodeposit emails say the money "has been deposited"/"automatically deposited" ("déposé" in French);
                 emails that still need a click to deposit say "To deposit your money..." and are NOT deposited. */

export const CODE = /\bBAKE[\s-]?([A-HJ-NP-Z2-9]{4})\b/i;

export function parseInterac({ subject = '', text = '', html = '' } = {}) {
  const body = (text || htmlToText(html) || '').replace(/ /g, ' ');
  const all = subject + '\n' + body;
  const m = CODE.exec(all);
  const code = m ? 'BAKE-' + m[1].toUpperCase() : null;
  return { code, amount: amountOf(all), sender: senderOf(subject, body), deposited: depositedIn(all), cancelled: /cancel(l)?ed|annul/i.test(subject) };
}

/* The transfer amount: prefer a number next to "Amount"/"Montant", else the first dollar figure. */
export function amountOf(s) {
  const num = x => { x = x.replace(/\s/g, ''); if (/,\d{2}$/.test(x) && !/\.\d{2}$/.test(x)) x = x.replace(/\./g, '').replace(',', '.'); return Number(x.replace(/,/g, '')); };
  const near = /(?:amount|montant)[^$\d]{0,40}\$?\s*([\d][\d,. ]*\d)(?:\s*\$)?/i.exec(s);
  if (near) { const n = num(near[1]); if (n > 0) return n; }
  const pre = /\$\s*([\d][\d,]*(?:\.\d{2})?)/.exec(s);
  if (pre) return num(pre[1]);
  const post = /([\d][\d .]*,\d{2})\s*\$/.exec(s);
  return post ? num(post[1]) : null;
}

export function senderOf(subject, body) {
  const m = /e-?transfer\s*:?\s*(.+?)\s+(?:sent you|has sent you|vous a envoyé|a envoyé)/i.exec(subject) || /^\s*(.+?)\s+(?:sent you|has sent you)\s+\$/im.exec(body);
  return m ? m[1].replace(/^["'\s]+|["'\s]+$/g, '').slice(0, 120) : null;
}

export function depositedIn(s) {
  if (/to deposit your (money|funds)|deposit your money by|pour déposer/i.test(s) && !/(has|have) been (automatically )?deposited|automatically deposited/i.test(s)) return false;
  return /(has|have) been (automatically )?deposited|automatically deposited|been deposited into|a été (automatiquement )?déposé|déposés? automatiquement/i.test(s);
}

export function htmlToText(h) {
  return String(h || '').replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ').replace(/<br\s*\/?>|<\/(p|div|tr|li|h\d)>/gi, '\n')
    .replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#36;|&dollar;/g, '$').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"')
    .replace(/[ \t]+/g, ' ').replace(/\n\s+/g, '\n');
}

/* Is a DKIM result proof that Interac sent it? A passing signature from an interac.ca domain that matches the From domain. */
export function interacSigned(dkimResults = [], headerFrom = []) {
  const from = String(headerFrom[0] || '').toLowerCase(), fromDom = from.split('@')[1] || '';
  if (!/(^|\.)interac\.ca$/.test(fromDom)) return { ok: false, why: 'From is not an interac.ca address (' + (from || 'none') + ')' };
  const good = dkimResults.find(r => r.status && r.status.result == 'pass' && /(^|\.)interac\.ca$/i.test(r.signingDomain || '')
    && (fromDom == r.signingDomain.toLowerCase() || fromDom.endsWith('.' + r.signingDomain.toLowerCase())));
  return good ? { ok: true, domain: good.signingDomain } : { ok: false, why: 'no passing interac.ca DKIM signature (' + (dkimResults.map(r => (r.signingDomain || '?') + ':' + (r.status && r.status.result)).join(', ') || 'unsigned') + ')' };
}
