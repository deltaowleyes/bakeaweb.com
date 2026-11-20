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

/* Market size and domain value. Counts and budgets are estimates saved in public.markets; the database works out
   value_canada / value_na / value_world (businesses x average website budget) and, for every scored domain,
   max_uplift_usd with public.domain_max_uplift() (same numbers as UPLIFT below). */
export const REGIONS = { canada: 'Canada', na: 'North America', world: 'World' };
export const UPLIFT = { perYear: 0.25, share: 0.02, multiple: 3, domainShare: 0.10 };   // keep in step with domain_max_uplift()
export const upliftOf = (value, quality) => value == null || quality == null ? null
  : Math.round(value * UPLIFT.perYear * UPLIFT.share * UPLIFT.multiple * UPLIFT.domainShare * (quality / 100) ** 2);
export const RUBRIC = `Domain quality score, 0 to 100 (add these up):
- Ending (up to 25): .com 25 · .ca 18 (reaches Canada only) · the market's own word as the ending (like .restaurant, .dentist, .cafe) 20 · another ending from the market's list (like .shop, .care, .repair) 16 · .co .io .app .shop .store .pro .me 15 · any other ending 10
- Length of the name before the dot (up to 20): 5 letters or fewer 20 · 6-8 17 · 9-11 13 · 12-14 9 · 15-18 5 · longer 2
- Clean (up to 10): no hyphens and no numbers 10 (take off 6 for each)
- Easy to say (up to 15): 1 word 15 · 2 words 13 · 3 words 9 · 4 or more 4 (small words like "a", "by", "for" count)
- Says the market (up to 20): the name says it 14, or the ending says it 14, both 20
- BAKE family (up to 10): uses bake, baked, taste, aweb or oven 10 · a "by" / "for" name 4
- Take off: renewal over $60 a year 5, over $150 a year 10; premium or for-sale 5`;
export const money = v => v == null || v === '' ? '' : (v = Number(v), v >= 1e12 ? '$' + (v / 1e12).toFixed(2) + 'T' : v >= 1e9 ? '$' + (v / 1e9).toFixed(1) + 'B'
  : v >= 1e6 ? '$' + (v / 1e6).toFixed(1) + 'M' : v >= 1e4 ? '$' + Math.round(v / 1e3) + 'K' : '$' + Math.round(v).toLocaleString('en-US'));
export const count = v => v == null || v === '' ? '' : (v = Number(v), v >= 1e6 ? (v / 1e6).toFixed(v >= 1e7 ? 0 : 1) + 'M' : v >= 1e3 ? Math.round(v / 1e3) + 'K' : String(v));

/* The message pasted into a new Claude chat to search one batch. Everything the chat needs is in it. */
export function batchPrompt(batch, markets) {
  const list = markets.map(m => `- id ${m.id}: ${m.name} (${m.examples}). Fitting endings: ${m.tlds || 'any'}`
    + (m.biz_world ? `. Sized: ${count(m.biz_canada)} Canada / ${count(m.biz_na)} North America / ${count(m.biz_world)} world, ${money(m.avg_site_usd)} average site` : '. Not sized yet')).join('\n');
  return `BAKE domain search, batch ${batch}.

We own ${OWNED.join(', ')}. We want great domains where BAKE can host websites for whole markets in the future, in the same spirit (short, friendly, brandable, "baked" / "taste" / "a web" family names are welcome but not required).

Use our Supabase project "bakeaweb" (project id gpwxuunutljcauoknhrh), tables public.markets and public.market_domains.

Markets in this batch:
${list}

Steps:
1. Set search_status = 'searching' for these market ids in public.markets.
2. Size each market (skip any already marked "Sized" above unless the numbers look wrong). Search the web for official counts (Statistics Canada, US Census / SBA, INEGI for Mexico, world bodies) and estimate: biz_canada, biz_na (Canada + United States + Mexico) and biz_world = how many businesses or organizations in this market could buy a website (count one-person businesses too), and avg_site_usd = what one of them typically spends on a website build (one-time, USD). Save them in public.markets with sizing_notes (one line: your sources and how you estimated), sized_by 'claude batch ${batch}' and sized_at = now(). The database works out value_canada, value_na and value_world (businesses x average budget) by itself.
3. Read public.market_domains first so you don't repeat names already there.
4. For each market, brainstorm 15 to 25 domain names: a few .com names, short brandable names, and names on the market's own endings above (for example bakedfor.lawyer or tasteaweb.cafe style). No trademarks or real businesses' names.
5. Check each name. Look up https://rdap.org/domain/NAME with WebFetch (a record means taken; "not found" means probably available). For the probably-available ones, check the price on Porkbun (https://porkbun.com/checkout/search?q=NAME) if you can, and mark premium or for-sale names.
6. Score the quality of every name that is not taken, with this rubric:
${RUBRIC}
7. Save every name you checked: insert into public.market_domains (market_id, domain, status, price_usd, renewal_usd, registrar, notes, checked_at, added_by, quality_score, quality_notes) with status one of ${STATUSES.filter(s => s != 'bought').map(s => "'" + s + "'").join(', ')}, added_by 'claude batch ${batch}', quality_notes = the short reasons (for example ".com · 8 letters · 2 words · says the market · BAKE family"), and "on conflict ((lower(domain))) do nothing". Leave max_uplift_usd empty: the database fills it in from the market size and the quality score (market value in the domain's reach x 1/4 yearly x 2% share x 3x valuation x 10% for the domain x (quality/100) squared). A .ca name only counts Canada.
8. Set search_status = 'done' for each market you finished.
9. Tell me, per market: the business counts and total website value for Canada, North America and the world; then the best 3 available names with price, quality score and estimated maximum valuation increase (read max_uplift_usd back). Star your top pick by setting favorite = true. End with which market in this batch looks like the best one to choose next, and why.

Do not buy anything. The results show on https://bakeaweb.com/markets.html.`;
}

let me = null, markets = [], domains = [], view = 'markets', open = null;
const f = { q: '', grp: '', top: false, st: '', dst: '', fav: false, region: 'world', sort: 'rank', dsort: 'new' };
const valueOf = (m, r = f.region) => m['value_' + r] == null ? null : Number(m['value_' + r]);
const bizOf = (m, r = f.region) => m['biz_' + r];
/* The best domain we could still get for a market (not taken or skipped), by estimated valuation increase. */
const bestDomain = id => domsOf(id).filter(d => ['available', 'premium', 'for sale', 'idea', 'bought'].includes(d.status) && d.max_uplift_usd != null)
  .sort((a, b) => b.max_uplift_usd - a.max_uplift_usd)[0];

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
  const total = markets.reduce((s, m) => s + (valueOf(m) || 0), 0);
  return `<div class="stats">${box(markets.length, 'markets')}${box(money(total), REGIONS[f.region] + ' website value')}${box(markets.filter(m => m.search_status == 'done').length, 'searched')}
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
  const sorts = { rank: m => m.rank, value: m => -(valueOf(m) || 0), biz: m => -(bizOf(m) || 0), budget: m => -(m.avg_site_usd || 0),
    uplift: m => -((bestDomain(m.id) || {}).max_uplift_usd || 0) };
  const rows = markets.filter(m => (!f.grp || m.grp == f.grp) && (!f.top || m.rank <= 50) && (!f.st || m.search_status == f.st)
    && (!q || (m.name + ' ' + m.examples + ' ' + m.grp).toLowerCase().includes(q)))
    .map(m => [sorts[f.sort](m), m]).sort((a, b) => a[0] - b[0] || a[1].rank - b[1].rank).map(x => x[1]);
  const R = REGIONS[f.region];
  $('#body').innerHTML = `<div class="filters">
      <span class="seg" role="group" aria-label="Region">${Object.entries(REGIONS).map(([k, v]) => `<button class="sm" data-r="${k}" aria-pressed="${f.region == k}">${v}</button>`).join('')}</span>
      <select id="sort" title="Sort">${[['rank', 'Sort: our rank'], ['value', 'Sort: biggest total value'], ['uplift', 'Sort: best domain value'], ['biz', 'Sort: most businesses'], ['budget', 'Sort: biggest website budget']]
        .map(([k, v]) => `<option value="${k}" ${k == f.sort ? 'selected' : ''}>${v}</option>`).join('')}</select>
      <input id="q" placeholder="Search markets" value="${esc(f.q)}" style="min-width:200px">
      <select id="grp"><option value="">All groups</option>${groups.map(g => `<option ${g == f.grp ? 'selected' : ''}>${esc(g)}</option>`).join('')}</select>
      <select id="st"><option value="">Any search status</option>${['not started', 'searching', 'done'].map(s => `<option ${s == f.st ? 'selected' : ''}>${s}</option>`).join('')}</select>
      <label><input type="checkbox" id="top" ${f.top ? 'checked' : ''}> Top 50 only</label>
      <span class="note">${rows.length} shown · click a market for details and domains</span></div>
    ${howNumbers()}
    <table><thead><tr><th class="n">#</th><th>Market</th><th class="hide-s">Group</th><th class="n">Businesses<br><small>${R}</small></th><th class="n hide-s">Avg site</th><th class="n">Total value<br><small>${R}</small></th>
      <th>Best domain<br><small>max valuation increase</small></th><th class="hide-s">Batch</th><th>Search</th><th class="n hide-s">Free / checked</th></tr></thead><tbody>
    ${rows.map(m => {
      const ds = domsOf(m.id), free = ds.filter(d => d.status == 'available').length, b = bestDomain(m.id);
      return `<tr class="mk ${open == m.id ? 'open' : ''}" data-id="${m.id}"><td class="n">${m.rank}</td><td><b>${esc(m.name)}</b>${m.rank <= 50 ? '<span class="top">TOP 50</span>' : ''}</td>
        <td class="hide-s">${esc(m.grp)}</td><td class="n">${count(bizOf(m))}</td><td class="n hide-s">${money(m.avg_site_usd)}</td><td class="n"><b>${money(valueOf(m))}</b></td>
        <td>${b ? `<b class="up">${money(b.max_uplift_usd)}</b> <span class="note">${esc(b.domain)} · ${b.quality_score}</span>` : '<span class="note">not searched yet</span>'}</td><td class="hide-s">${m.batch}</td>
        <td><span class="pill s-${cls(m.search_status)}">${esc(m.search_status)}</span></td><td class="n hide-s">${free} / ${ds.length}</td></tr>`
        + (open == m.id ? `<tr><td colspan="10"><div class="sub">${marketDetail(m)}${domTable(ds, false)}</div></td></tr>` : '');
    }).join('')}</tbody></table>`;
  const q$ = $('#q'); q$.oninput = () => { f.q = q$.value; const p = q$.selectionStart; drawMarkets(); const n = $('#q'); n.focus(); n.setSelectionRange(p, p); };
  $('#body').querySelectorAll('[data-r]').forEach(b => b.onclick = () => { f.region = b.dataset.r; draw(); });
  $('#sort').onchange = e => { f.sort = e.target.value; drawMarkets(); };
  $('#grp').onchange = e => { f.grp = e.target.value; drawMarkets(); };
  $('#st').onchange = e => { f.st = e.target.value; drawMarkets(); };
  $('#top').onchange = e => { f.top = e.target.checked; drawMarkets(); };
  $('#body').querySelectorAll('tr.mk').forEach(tr => tr.onclick = () => { open = open == tr.dataset.id ? null : tr.dataset.id; drawMarkets(); });
  wireDomains();
}

function howNumbers() {
  return `<details class="how" id="how" ${f.how ? 'open' : ''}><summary><b>How the numbers work</b> (estimates, not promises)</summary>
    <p><b>Businesses</b>: how many businesses or organizations in the market could buy a website, one-person businesses included. North America = Canada + US + Mexico.
      <b>Avg site</b>: what one of them typically spends on a website build (one-time, USD). <b>Total value</b> = businesses × avg site.</p>
    <p><b>Best domain</b>: the domain we could still get with the biggest <b>estimated maximum increase in BAKE's valuation</b> over the long term if we own it and build that market:
      total value in the domain's reach (a .ca only counts Canada) × ¼ (sites are rebuilt about every 4 years) × ${UPLIFT.share * 100}% (the most a strong BAKE brand could win)
      × ${UPLIFT.multiple} (a web business is valued at about ${UPLIFT.multiple}× yearly revenue) × ${UPLIFT.domainShare * 100}% (the most of that the domain itself carries)
      × (quality ÷ 100)². So a quality 90 domain keeps 81% of the maximum and a quality 60 keeps 36%.</p>
    <p><b>Quality</b> (0–100, the small number next to each domain; you can change it): ending (.com best, then the market's own word), short, no hyphens or numbers,
      easy to say, says the market, BAKE family name, and not expensive to renew. To choose the next market, sort by <b>best domain value</b> or <b>biggest total value</b>.</p></details>`;
}

function marketDetail(m) {
  const cell = r => `<td class="n">${count(bizOf(m, r))}</td><td class="n"><b>${money(valueOf(m, r))}</b></td>`;
  return `<p class="note" style="margin:0 0 6px">${esc(m.examples)} · endings <span class="tld">${esc(m.tlds)}</span></p>
    <table class="mini"><thead><tr><th></th>${Object.values(REGIONS).map(v => `<th class="n">Businesses<br><small>${v}</small></th><th class="n">Total value<br><small>${v}</small></th>`).join('')}<th class="n">Avg site</th></tr></thead>
      <tbody><tr><td><b>${esc(m.name)}</b></td>${cell('canada')}${cell('na')}${cell('world')}<td class="n">${money(m.avg_site_usd)}</td></tr></tbody></table>
    ${m.sizing_notes ? `<p class="note" style="margin:6px 0 10px">${esc(m.sizing_notes)}${m.sized_by ? ' (' + esc(m.sized_by) + ')' : ''}</p>` : '<p class="note">Not sized yet: the batch prompt sizes it.</p>'}`;
}

function domTable(ds, showMarket) {
  if (!ds.length) return '<p class="note">No domains checked yet for this market.</p>';
  return `<table><thead><tr><th></th><th>Domain</th>${showMarket ? '<th>Market</th>' : ''}<th>Status</th><th class="n" title="Domain quality 0-100">Quality</th><th class="n" title="Estimated maximum long-term increase in BAKE's valuation">Max value +</th><th class="n">Price</th><th class="n hide-s">Renews</th><th class="hide-s">Notes</th><th class="hide-s">Checked</th><th></th></tr></thead><tbody>
    ${ds.map(d => `<tr data-d="${d.id}"><td><button class="star ${d.favorite ? 'on' : ''}" data-fav="${d.id}" title="Star">★</button></td>
      <td><b>${esc(d.domain)}</b></td>${showMarket ? `<td>${esc(mName(d.market_id))}</td>` : ''}
      <td><select class="sm" data-st="${d.id}">${STATUSES.map(s => `<option ${s == d.status ? 'selected' : ''}>${s}</option>`).join('')}</select></td>
      <td class="n"><input class="q" type="number" min="0" max="100" data-q="${d.id}" value="${d.quality_score ?? ''}" title="${esc(d.quality_notes || 'Not scored yet')}"></td>
      <td class="n">${d.max_uplift_usd != null ? `<b class="up">${money(d.max_uplift_usd)}</b>${d.reach && d.reach != 'world' ? `<br><small class="note">${esc(d.reach)} only</small>` : ''}` : ''}</td>
      <td class="n">${d.price_usd != null ? '$' + Number(d.price_usd).toFixed(2) : ''}</td><td class="n hide-s">${d.renewal_usd != null ? '$' + Number(d.renewal_usd).toFixed(2) : ''}</td>
      <td class="hide-s note">${esc(d.notes)}</td><td class="hide-s note">${d.checked_at ? new Date(d.checked_at).toLocaleDateString() : ''}${d.added_by ? '<br>' + esc(d.added_by) : ''}</td>
      <td><a class="note" href="https://porkbun.com/checkout/search?q=${encodeURIComponent(d.domain)}" target="_blank" rel="noopener">Porkbun ↗</a></td></tr>`).join('')}</tbody></table>`;
}

function wireDomains() {
  const stop = e => e.stopPropagation();
  $('#body').querySelectorAll('[data-fav]').forEach(b => b.onclick = e => { stop(e); const d = domains.find(x => x.id == b.dataset.fav); save(d, { favorite: !d.favorite }); });
  $('#body').querySelectorAll('[data-st]').forEach(s => { s.onclick = stop; s.onchange = () => save(domains.find(x => x.id == s.dataset.st), { status: s.value }); });
  $('#body').querySelectorAll('[data-q]').forEach(i => {
    i.onclick = stop;
    i.onchange = () => {
      const v = i.value === '' ? null : Math.max(0, Math.min(100, Math.round(+i.value)));
      const d = domains.find(x => x.id == i.dataset.q);
      const base = (d.quality_notes || '').replace(/( · )?set by hand$/, '');
      save(d, { quality_score: v, quality_notes: v == null ? null : [base, 'set by hand'].filter(Boolean).join(' · ') });
    };
  });
  const how = $('#how'); if (how) how.ontoggle = () => { f.how = how.open; };
}

async function save(d, patch) {
  /* select() returns the row after the database trigger has worked out max_uplift_usd again. */
  const { data, error } = await sb.from('market_domains').update(patch).eq('id', d.id).select().single();
  if (error) { toast(signedOut(error) ? 'Signed out: please sign in again' : 'Not saved: ' + error.message); if (signedOut(error)) setTimeout(() => location.reload(), 1500); return; }
  Object.assign(d, data || patch); draw(); toast('Saved');
}

function drawDomains() {
  const q = f.q.toLowerCase();
  const by = { new: () => 0, uplift: (a, b) => (b.max_uplift_usd ?? -1) - (a.max_uplift_usd ?? -1), quality: (a, b) => (b.quality_score ?? -1) - (a.quality_score ?? -1),
    price: (a, b) => (a.price_usd ?? 1e9) - (b.price_usd ?? 1e9) }[f.dsort];
  const rows = domains.filter(d => (!f.dst || d.status == f.dst) && (!f.fav || d.favorite) && (!q || (d.domain + ' ' + mName(d.market_id)).toLowerCase().includes(q))).slice().sort(by);
  $('#body').innerHTML = `<form class="add" id="addf"><input id="nd" placeholder="Add a domain, e.g. bakedfor.lawyer" required style="min-width:240px">
      <select id="nm"><option value="">No market</option>${markets.map(m => `<option value="${m.id}">${m.rank}. ${esc(m.name)}</option>`).join('')}</select>
      <select id="ns">${STATUSES.map(s => `<option>${s}</option>`).join('')}</select><button>Add</button></form>
    <div class="filters"><input id="q" placeholder="Search domains" value="${esc(f.q)}" style="min-width:220px">
      <select id="dst"><option value="">Any status</option>${STATUSES.map(s => `<option ${s == f.dst ? 'selected' : ''}>${s}</option>`).join('')}</select>
      <select id="dsort">${[['new', 'Newest first'], ['uplift', 'Biggest valuation increase'], ['quality', 'Best quality'], ['price', 'Cheapest']]
        .map(([k, v]) => `<option value="${k}" ${k == f.dsort ? 'selected' : ''}>${v}</option>`).join('')}</select>
      <label><input type="checkbox" id="fav" ${f.fav ? 'checked' : ''}> Starred only</label><span class="note">${rows.length} shown</span></div>
    ${domTable(rows, true)}`;
  const q$ = $('#q'); q$.oninput = () => { f.q = q$.value; const p = q$.selectionStart; drawDomains(); const n = $('#q'); n.focus(); n.setSelectionRange(p, p); };
  $('#dsort').onchange = e => { f.dsort = e.target.value; drawDomains(); };
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
  $('#body').innerHTML = `<div class="how"><p><b>How to search many at once:</b> open a new Claude chat for each batch (with the Supabase connector on), press <b>Copy prompt</b>, paste it in and send. Each chat sizes its 10 markets (businesses and website budgets in Canada, North America and the world), finds and checks domains, scores their quality, and saves it all here; the database works out each domain's estimated valuation increase. Press Refresh to see results come in.</p>
      <p class="note">Batches 1 to 5 are the top 50 markets. A batch turns yellow once a chat has started it, so two chats don't do the same one.</p></div>
    <div class="batches">${nums.map(b => {
      const ms = markets.filter(m => m.batch == b), st = state(ms), found = domains.filter(d => ms.some(m => m.id == d.market_id));
      return `<div class="batch"><h3>Batch ${b} <span class="pill s-${cls(st)}">${st}</span></h3>
        <ol start="${ms[0].rank}">${ms.map(m => `<li>${esc(m.name)}</li>`).join('')}</ol>
        <p class="note">${money(ms.reduce((s, m) => s + (valueOf(m, 'world') || 0), 0))} world website value · ${found.filter(d => d.status == 'available').length} available of ${found.length} checked</p>
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
