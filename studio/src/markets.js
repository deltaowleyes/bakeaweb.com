/* BAKE Markets (markets.html): the future markets BAKE can serve (restaurants, lawyers, schools, …) and the
   domain names we might buy for each one. Leah and Chris open several Claude chats at once; each chat takes one
   batch of 10 markets (the "Copy prompt" button), brainstorms domains, checks which are free, and saves them here.
   Data: Supabase tables markets (207 markets, rank 1–50 = top 50, batch = which chat) and market_domains
   (one row per domain idea with its status). Row-level security: only RezSite admins can read or change them. */
import { createClient } from '@supabase/supabase-js';

const sb = createClient('https://gpwxuunutljcauoknhrh.supabase.co', 'sb_publishable_B7a1VEv6RX13n2JhA50tbQ_oR_oKfw9');
const $ = s => document.querySelector(s);
const app = $('#app');
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export const STATUSES = ['idea', 'available', 'premium', 'for sale', 'taken', 'bought', 'skip'];
export const OWNED = ['bakeaweb.com', 'bakedby.me', 'bakedbya.pro', 'rezsite.com', 'tasteaweb.com'];
export const signedOut = e => e && (e.code == '42501' || e.code == 'PGRST301' || /row-level security|JWT|refresh token/i.test(e.message || ''));
const cls = s => String(s || '').replace(/\s+/g, '');

/* The message pasted into a new Claude chat to search one batch. Everything the chat needs is in it. */
export function batchPrompt(batch, markets) {
  const list = markets.map(m => `- id ${m.id}: ${m.name} (${m.examples}). Fitting endings: ${m.tlds || 'any'}`).join('\n');
  return `BAKE domain search, batch ${batch}.

We own ${OWNED.join(', ')}. We want great domains where BAKE can host websites for whole markets in the future, in the same spirit (short, friendly, brandable, "baked" / "taste" / "a web" family names are welcome but not required).

Use our Supabase project "bakeaweb" (project id gpwxuunutljcauoknhrh), tables public.markets and public.market_domains.

Markets in this batch:
${list}

Steps:
1. Set search_status = 'searching' for these market ids in public.markets.
2. Read public.market_domains first so you don't repeat names already there.
3. For each market, brainstorm 15 to 25 domain names: a few .com names, short brandable names, and names on the market's own endings above (for example bakedfor.lawyer or tasteaweb.cafe style). No trademarks or real businesses' names.
4. Check each name. Look up https://rdap.org/domain/NAME with WebFetch (a record means taken; "not found" means probably available). For the probably-available ones, check the price on Porkbun (https://porkbun.com/checkout/search?q=NAME) if you can, and mark premium or for-sale names.
5. Save every name you checked: insert into public.market_domains (market_id, domain, status, price_usd, renewal_usd, registrar, notes, checked_at, added_by) with status one of ${STATUSES.filter(s => s != 'bought').map(s => "'" + s + "'").join(', ')}, added_by 'claude batch ${batch}', and "on conflict ((lower(domain))) do nothing".
6. Set search_status = 'done' for each market you finished.
7. Tell me the best 3 available names per market with prices, and star your top pick by setting favorite = true.

Do not buy anything. The results show on https://bakeaweb.com/markets.html.`;
}

let me = null, markets = [], domains = [], view = 'markets', open = null;
const f = { q: '', grp: '', top: false, st: '', dst: '', fav: false };

function toast(t) { const el = $('#toast'); el.textContent = t; el.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('on'), 2200); }

async function start() {
  const { data } = await sb.auth.getSession();
  if (!data.session) return login();
  me = data.session.user;
  $('#who').innerHTML = '<small>' + esc(me.email) + '</small> <button class="btn2" id="out">Sign out</button>';
  $('#out').onclick = async () => { await sb.auth.signOut(); location.reload(); };
  await load();
  const h = location.hash.slice(1); if (['markets', 'domains', 'batches'].includes(h)) view = h;
  draw();
}

async function load() {
  const [m, d] = await Promise.all([
    sb.from('markets').select('*').order('rank'),
    sb.from('market_domains').select('*').order('created_at', { ascending: false })
  ]);
  if (m.error || d.error) { app.innerHTML = '<p class="empty">Could not load: ' + esc((m.error || d.error).message) + '</p>'; throw m.error || d.error; }
  markets = m.data || []; domains = d.data || [];
  if (!markets.length) app.innerHTML = '<p class="empty">No markets, or this login is not a RezSite admin.</p>';
}

function login() {
  app.innerHTML = `<form class="login" id="lf"><h2 style="margin:0">Sign in</h2>
    <p class="note">For BAKE admins only. Use the same login as the Pitches and Taste pages.</p>
    <input type="email" id="em" placeholder="Email" autocomplete="username" required>
    <input type="password" id="pw" placeholder="Password" autocomplete="current-password">
    <button type="submit">Sign in</button>
    <button type="button" class="btn2" id="link">Email me a sign-in link instead</button>
    <p class="msg" id="msg"></p></form>`;
  $('#lf').onsubmit = async e => {
    e.preventDefault(); $('#msg').textContent = '';
    const { error } = await sb.auth.signInWithPassword({ email: $('#em').value.trim(), password: $('#pw').value });
    if (error) $('#msg').textContent = error.message; else start();
  };
  $('#link').onclick = async () => {
    const email = $('#em').value.trim(); if (!email) { $('#msg').textContent = 'Type your email first.'; return; }
    const { error } = await sb.auth.signInWithOtp({ email, options: { emailRedirectTo: location.href.split('#')[0], shouldCreateUser: false } });
    $('#msg').textContent = error ? error.message : 'Check your email for the sign-in link.';
  };
}

const domsOf = id => domains.filter(d => d.market_id == id);
const mName = id => (markets.find(m => m.id == id) || {}).name || '';

function stats() {
  const n = s => domains.filter(d => d.status == s).length;
  const box = (v, l) => `<div class="stat"><b>${v}</b><span>${l}</span></div>`;
  return `<div class="stats">${box(markets.length, 'markets')}${box(markets.filter(m => m.search_status == 'done').length, 'searched')}
    ${box(markets.filter(m => m.search_status == 'searching').length, 'searching now')}${box(domains.length, 'domains checked')}
    ${box(n('available'), 'available')}${box(domains.filter(d => d.favorite).length, 'starred')}${box(n('bought'), 'owned')}</div>`;
}

function draw() {
  if (!markets.length) return;
  location.hash = view;
  app.innerHTML = stats() + `<div class="tabs">
      <button data-v="markets" aria-pressed="${view == 'markets'}">Markets</button>
      <button data-v="domains" aria-pressed="${view == 'domains'}">Domains</button>
      <button data-v="batches" aria-pressed="${view == 'batches'}">Search batches</button>
      <button class="btn2 sm" id="reload" style="margin-left:auto">Refresh</button></div><div id="body"></div>`;
  app.querySelectorAll('.tabs [data-v]').forEach(b => b.onclick = () => { view = b.dataset.v; draw(); });
  $('#reload').onclick = async () => { await load(); draw(); toast('Up to date'); };
  ({ markets: drawMarkets, domains: drawDomains, batches: drawBatches })[view]();
}

function drawMarkets() {
  const groups = [...new Set(markets.map(m => m.grp))].sort();
  const q = f.q.toLowerCase();
  const rows = markets.filter(m => (!f.grp || m.grp == f.grp) && (!f.top || m.rank <= 50) && (!f.st || m.search_status == f.st)
    && (!q || (m.name + ' ' + m.examples + ' ' + m.grp).toLowerCase().includes(q)));
  $('#body').innerHTML = `<div class="filters">
      <input id="q" placeholder="Search markets" value="${esc(f.q)}" style="min-width:220px">
      <select id="grp"><option value="">All groups</option>${groups.map(g => `<option ${g == f.grp ? 'selected' : ''}>${esc(g)}</option>`).join('')}</select>
      <select id="st"><option value="">Any search status</option>${['not started', 'searching', 'done'].map(s => `<option ${s == f.st ? 'selected' : ''}>${s}</option>`).join('')}</select>
      <label><input type="checkbox" id="top" ${f.top ? 'checked' : ''}> Top 50 only</label>
      <span class="note">${rows.length} shown · click a market to see its domains</span></div>
    <table><thead><tr><th class="n">#</th><th>Market</th><th class="hide-s">Group</th><th class="hide-s">Who</th><th class="hide-s">Endings</th><th>Batch</th><th>Search</th><th class="n">Free / checked</th></tr></thead><tbody>
    ${rows.map(m => {
      const ds = domsOf(m.id), free = ds.filter(d => d.status == 'available').length;
      return `<tr class="mk ${open == m.id ? 'open' : ''}" data-id="${m.id}"><td class="n">${m.rank}</td><td><b>${esc(m.name)}</b>${m.rank <= 50 ? '<span class="top">TOP 50</span>' : ''}</td>
        <td class="hide-s">${esc(m.grp)}</td><td class="hide-s note">${esc(m.examples)}</td><td class="hide-s tld">${esc(m.tlds)}</td><td>${m.batch}</td>
        <td><span class="pill s-${cls(m.search_status)}">${esc(m.search_status)}</span></td><td class="n">${free} / ${ds.length}</td></tr>`
        + (open == m.id ? `<tr><td colspan="8"><div class="sub">${domTable(ds, false)}</div></td></tr>` : '');
    }).join('')}</tbody></table>`;
  const q$ = $('#q'); q$.oninput = () => { f.q = q$.value; const p = q$.selectionStart; drawMarkets(); const n = $('#q'); n.focus(); n.setSelectionRange(p, p); };
  $('#grp').onchange = e => { f.grp = e.target.value; drawMarkets(); };
  $('#st').onchange = e => { f.st = e.target.value; drawMarkets(); };
  $('#top').onchange = e => { f.top = e.target.checked; drawMarkets(); };
  $('#body').querySelectorAll('tr.mk').forEach(tr => tr.onclick = () => { open = open == tr.dataset.id ? null : tr.dataset.id; drawMarkets(); });
  wireDomains();
}

function domTable(ds, showMarket) {
  if (!ds.length) return '<p class="note">No domains checked yet for this market.</p>';
  return `<table><thead><tr><th></th><th>Domain</th>${showMarket ? '<th>Market</th>' : ''}<th>Status</th><th class="n">Price</th><th class="n hide-s">Renews</th><th class="hide-s">Notes</th><th class="hide-s">Checked</th><th></th></tr></thead><tbody>
    ${ds.map(d => `<tr data-d="${d.id}"><td><button class="star ${d.favorite ? 'on' : ''}" data-fav="${d.id}" title="Star">★</button></td>
      <td><b>${esc(d.domain)}</b></td>${showMarket ? `<td>${esc(mName(d.market_id))}</td>` : ''}
      <td><select class="sm" data-st="${d.id}">${STATUSES.map(s => `<option ${s == d.status ? 'selected' : ''}>${s}</option>`).join('')}</select></td>
      <td class="n">${d.price_usd != null ? '$' + Number(d.price_usd).toFixed(2) : ''}</td><td class="n hide-s">${d.renewal_usd != null ? '$' + Number(d.renewal_usd).toFixed(2) : ''}</td>
      <td class="hide-s note">${esc(d.notes)}</td><td class="hide-s note">${d.checked_at ? new Date(d.checked_at).toLocaleDateString() : ''}${d.added_by ? '<br>' + esc(d.added_by) : ''}</td>
      <td><a class="note" href="https://porkbun.com/checkout/search?q=${encodeURIComponent(d.domain)}" target="_blank" rel="noopener">Porkbun ↗</a></td></tr>`).join('')}</tbody></table>`;
}

function wireDomains() {
  const stop = e => e.stopPropagation();
  $('#body').querySelectorAll('[data-fav]').forEach(b => b.onclick = e => { stop(e); const d = domains.find(x => x.id == b.dataset.fav); save(d, { favorite: !d.favorite }); });
  $('#body').querySelectorAll('[data-st]').forEach(s => { s.onclick = stop; s.onchange = () => save(domains.find(x => x.id == s.dataset.st), { status: s.value }); });
}

async function save(d, patch) {
  const { error } = await sb.from('market_domains').update(patch).eq('id', d.id);
  if (error) { toast(signedOut(error) ? 'Signed out: please sign in again' : 'Not saved: ' + error.message); if (signedOut(error)) setTimeout(() => location.reload(), 1500); return; }
  Object.assign(d, patch); draw(); toast('Saved');
}

function drawDomains() {
  const q = f.q.toLowerCase();
  const rows = domains.filter(d => (!f.dst || d.status == f.dst) && (!f.fav || d.favorite) && (!q || (d.domain + ' ' + mName(d.market_id)).toLowerCase().includes(q)));
  $('#body').innerHTML = `<form class="add" id="addf"><input id="nd" placeholder="Add a domain, e.g. bakedfor.lawyer" required style="min-width:240px">
      <select id="nm"><option value="">No market</option>${markets.map(m => `<option value="${m.id}">${m.rank}. ${esc(m.name)}</option>`).join('')}</select>
      <select id="ns">${STATUSES.map(s => `<option>${s}</option>`).join('')}</select><button>Add</button></form>
    <div class="filters"><input id="q" placeholder="Search domains" value="${esc(f.q)}" style="min-width:220px">
      <select id="dst"><option value="">Any status</option>${STATUSES.map(s => `<option ${s == f.dst ? 'selected' : ''}>${s}</option>`).join('')}</select>
      <label><input type="checkbox" id="fav" ${f.fav ? 'checked' : ''}> Starred only</label><span class="note">${rows.length} shown</span></div>
    ${domTable(rows, true)}`;
  const q$ = $('#q'); q$.oninput = () => { f.q = q$.value; const p = q$.selectionStart; drawDomains(); const n = $('#q'); n.focus(); n.setSelectionRange(p, p); };
  $('#dst').onchange = e => { f.dst = e.target.value; drawDomains(); };
  $('#fav').onchange = e => { f.fav = e.target.checked; drawDomains(); };
  $('#addf').onsubmit = async e => {
    e.preventDefault();
    const domain = $('#nd').value.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
    const row = { domain, market_id: +$('#nm').value || null, status: $('#ns').value, added_by: (me.email || '').split('@')[0] };
    const { data, error } = await sb.from('market_domains').insert(row).select().single();
    if (error) { toast(/duplicate/i.test(error.message) ? domain + ' is already on the list' : 'Not added: ' + error.message); return; }
    domains.unshift(data); draw(); toast('Added ' + domain);
  };
  wireDomains();
}

function drawBatches() {
  const nums = [...new Set(markets.map(m => m.batch))].sort((a, b) => a - b);
  const state = ms => ms.every(m => m.search_status == 'done') ? 'done' : ms.some(m => m.search_status != 'not started') ? 'searching' : 'not started';
  $('#body').innerHTML = `<div class="how"><p><b>How to search many at once:</b> open a new Claude chat for each batch (with the Supabase connector on), press <b>Copy prompt</b>, paste it in and send. Each chat checks its 10 markets and saves what it finds here. Press Refresh to see results come in.</p>
      <p class="note">Batches 1 to 5 are the top 50 markets. A batch turns yellow once a chat has started it, so two chats don't do the same one.</p></div>
    <div class="batches">${nums.map(b => {
      const ms = markets.filter(m => m.batch == b), st = state(ms), found = domains.filter(d => ms.some(m => m.id == d.market_id));
      return `<div class="batch"><h3>Batch ${b} <span class="pill s-${cls(st)}">${st}</span></h3>
        <ol start="${ms[0].rank}">${ms.map(m => `<li>${esc(m.name)}</li>`).join('')}</ol>
        <p class="note">${found.filter(d => d.status == 'available').length} available of ${found.length} checked</p>
        <div class="row"><button class="sm" data-copy="${b}">Copy prompt</button>${st != 'not started' ? `<button class="btn2 sm" data-reset="${b}">Mark not started</button>` : ''}</div></div>`;
    }).join('')}</div>`;
  $('#body').querySelectorAll('[data-copy]').forEach(btn => btn.onclick = async () => {
    const b = +btn.dataset.copy, text = batchPrompt(b, markets.filter(m => m.batch == b));
    try { await navigator.clipboard.writeText(text); toast('Batch ' + b + ' prompt copied: paste it into a new chat'); }
    catch { window.prompt('Copy this prompt:', text); }
  });
  $('#body').querySelectorAll('[data-reset]').forEach(btn => btn.onclick = async () => {
    const b = +btn.dataset.reset;
    const { error } = await sb.from('markets').update({ search_status: 'not started' }).eq('batch', b);
    if (error) { toast('Not saved: ' + error.message); return; }
    markets.filter(m => m.batch == b).forEach(m => m.search_status = 'not started'); draw();
  });
}

if (!globalThis.BAKE_MARKETS_NO_START) start().catch(e => console.warn(e));
