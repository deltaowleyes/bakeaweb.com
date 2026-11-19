/* BAKE Taste (taste.html): Chris and Leah rate real websites 1–99 with reasons, so Claude can learn what they
   look for and grade designs (and make pitches) to their taste. Each person rates on their own, blind: Claude's
   grade and the other person's rating only show after you save yours.
   Data: Supabase tables taste_sites (the list: top business sites + our pitches) and taste_ratings (one row per
   site per person). Row-level security: only RezSite admins can read; each admin can only write their own rating.
   Screenshots: WordPress mShots (first screen, then the whole page on request), same as the Pitches page. */
import { createClient } from '@supabase/supabase-js';

const sb = createClient('https://gpwxuunutljcauoknhrh.supabase.co', 'sb_publishable_B7a1VEv6RX13n2JhA50tbQ_oR_oKfw9');
const $ = s => document.querySelector(s);
const app = $('#app');
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const first = e => { const n = String(e || '').split('@')[0].split(/[._]/)[0]; return n ? n[0].toUpperCase() + n.slice(1) : 'Someone'; };

/* What each part of the scale means (shown under the number while you slide). */
export const ANCHORS = [
  [1, 'Broken or embarrassing'], [20, 'Badly dated, hard to use'], [35, 'Works, but looks old'],
  [50, 'OK small-business site'], [62, 'Decent: clean, nothing special'], [72, 'Good: professional and clear'],
  [80, 'Very good: I would show it off'], [88, 'Excellent: could win clients on its own'], [95, 'Best I have seen']
];
export const anchorFor = v => ANCHORS.filter(a => v >= a[0]).pop()[1];
/* Quick reasons. g = good, b = bad. The written reason matters most; these make patterns easy to count. */
export const TAGS = {
  g: ['Own real photos', 'Great first screen', 'Clear what they do', 'Strong type', 'Nice colours', 'Feels local / Indigenous', 'Easy to find info', 'Modern', 'Trustworthy', 'Memorable'],
  b: ['Stock photos', 'Cluttered', 'Dated', 'Too little content', 'Too much text', 'Hard to read', 'Weak colours', 'Generic template', 'Unclear offer', 'Broken bits']
};
const shotUrl = (url, h) => 'https://s.wordpress.com/mshots/v1/' + encodeURIComponent(url) + '?w=1280&h=' + h + '&vpw=1280&vph=' + h;

let me = null, sites = [], ratings = [], view = 'rate', cur = null, listSort = 'order';
/* Sites you've moved past (saved or skipped), newest last, so Back can return to fix a mistake. */
let hist = [];
/* Site id opened from a call (callers.html): after saving it, stay on it and say the window can be closed. */
let fromCall = null;
const go = next => { if (cur && (!next || next.id != cur.id)) hist.push(cur.id); cur = next; };
const mine = id => ratings.find(r => r.site_id == id && r.rater == me.id);
const theirs = id => ratings.filter(r => r.site_id == id && r.rater != me.id);
/* If a save fails because the sign-in ran out, the rating is kept here until it is saved. */
const DRAFT = 'bake-taste-draft';
const getDraft = id => { try { const d = JSON.parse(localStorage.getItem(DRAFT)); return d && d.site_id == id ? d : null; } catch { return null; } };
const setDraft = d => { try { d ? localStorage.setItem(DRAFT, JSON.stringify(d)) : localStorage.removeItem(DRAFT); } catch {} };
export const signedOut = e => e && (e.code == '42501' || e.code == 'PGRST301' || /row-level security|JWT|refresh token/i.test(e.message || ''));

async function start() {
  const { data } = await sb.auth.getSession();
  if (!data.session) return login();
  me = data.session.user;
  $('#who').innerHTML = '<small>' + esc(me.email) + '</small> <button class="btn2" id="out">Sign out</button>';
  $('#out').onclick = async () => { await sb.auth.signOut(); location.reload(); };
  const [s, r] = await Promise.all([
    sb.from('taste_sites').select('*').order('sort'),
    sb.from('taste_ratings').select('*')
  ]);
  if (s.error || r.error) { app.innerHTML = '<p class="empty">Could not load: ' + esc((s.error || r.error).message) + '</p>'; return; }
  sites = s.data || []; ratings = r.data || [];
  if (!sites.length) { app.innerHTML = '<p class="empty">Nothing to rate yet, or this login is not a RezSite admin.</p>'; return; }
  const h = location.hash.slice(1);
  view = h == 'list' ? 'list' : 'rate';
  let d = null; try { d = JSON.parse(localStorage.getItem(DRAFT)); } catch {}
  cur = (d && sites.find(x => x.id == d.site_id && !mine(x.id))) || nextUnrated();
  // Opened from a call on callers.html (taste.html?biz=<business id>): add that business's site to the list if needed and open it.
  const biz = +new URLSearchParams(location.search).get('biz');
  if (biz) {
    const { data: sid, error } = await sb.rpc('taste_site_for_business', { biz });
    if (error) { app.innerHTML = '<p class="empty">Could not open this business for rating: ' + esc(error.message) + '</p>'; return; }
    if (!sites.find(x => x.id == sid)) { const { data: row } = await sb.from('taste_sites').select('*').eq('id', sid).single(); if (row) sites.push(row); }
    cur = sites.find(x => x.id == sid) || cur; fromCall = cur && cur.id == sid ? sid : null; view = 'rate';
  }
  draw();
}

function login() {
  app.innerHTML = `<form class="login" id="lf"><h2 style="margin:0">Sign in</h2>
    <p class="note">For BAKE admins only. Use the same login as the Pitches page.</p>
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

function nextUnrated(after) {
  const order = sites.slice(), i = after ? order.findIndex(s => s.id == after) : -1;
  const rest = order.slice(i + 1).concat(order.slice(0, i + 1));
  return rest.find(s => !mine(s.id)) || null;
}

function progress() {
  const people = {}; ratings.forEach(r => { people[r.rater_email] = (people[r.rater_email] || 0) + 1; });
  const you = ratings.filter(r => r.rater == me.id).length;
  const others = Object.entries(people).filter(([e]) => e != me.email).map(([e, n]) => first(e) + ': ' + n);
  return 'You: ' + you + ' of ' + sites.length + (others.length ? ' · ' + others.join(' · ') : '');
}

function draw() {
  location.hash = view == 'list' ? 'list' : '';
  app.innerHTML = `<div class="tabs">
      <button data-v="rate" aria-pressed="${view == 'rate'}">Rate</button>
      <button data-v="list" aria-pressed="${view == 'list'}">All ratings</button>
      <span class="prog">${esc(progress())}</span></div><div id="body"></div>`;
  app.querySelectorAll('.tabs [data-v]').forEach(b => b.onclick = () => { view = b.dataset.v; if (view == 'rate' && !cur) cur = nextUnrated(); draw(); });
  view == 'list' ? drawList() : drawRate();
}

/* ---------- Rate one site ---------- */
function drawRate() {
  const body = $('#body');
  if (!cur) { body.innerHTML = '<p class="empty">You have rated every site. Thank you! See <b>All ratings</b> to compare, or tell Claude the ratings are ready.</p>' + (hist.length ? '<p><button class="btn2" id="back">← Back</button></p>' : ''); if ($('#back')) $('#back').onclick = () => { cur = sites.find(x => x.id == hist.pop()) || null; draw(); }; return; }
  const s = cur, pitch = s.kind == 'pitch', r = mine(s.id) || getDraft(s.id);
  const val = r ? r.score : 60, tags = new Set(r ? r.tags : []);
  body.innerHTML = `<div class="rate">
    <div class="shot">
      <div class="bar"><div><h2>${esc(s.name)}</h2>${fromCall == s.id ? '<span class="note" style="display:block;color:#7c3aed;font-weight:700">📞 From your call: rate while you talk</span>' : ''}<span class="note">${pitch ? 'Our pitch design (★ design, rate the design not the price box)' : esc(s.city || '')}</span></div>
        <div class="row">${pitch ? '' : '<button class="btn2" id="whole">Whole page</button>'}<a href="${esc(s.website)}" target="_blank" rel="noopener">Open ${pitch ? 'the preview' : 'their site'} ↗</a></div></div>
      <div class="view" id="view">${pitch ? '<iframe title="Pitch preview" src="' + esc(s.website) + '"></iframe>' : '<div class="wait">Getting a picture of their site… (the first time can take up to a minute)</div>'}</div>
    </div>
    <form class="form" id="f">
      <div><p class="lbl">Your rating</p><div class="row" style="align-items:baseline;gap:14px"><span class="big" id="num">${val}</span><span class="anchor" id="anc">${esc(anchorFor(val))}</span></div>
        <input type="range" id="sc" min="1" max="99" step="1" value="${val}" aria-label="Rating from 1 to 99"></div>
      <div><p class="lbl">What's good</p><div class="chips">${TAGS.g.map(t => '<button type="button" class="g' + (tags.has(t) ? ' on' : '') + '" data-t="' + esc(t) + '">' + esc(t) + '</button>').join('')}</div></div>
      <div><p class="lbl">What's not</p><div class="chips">${TAGS.b.map(t => '<button type="button" class="b' + (tags.has(t) ? ' on' : '') + '" data-t="' + esc(t) + '">' + esc(t) + '</button>').join('')}</div></div>
      <div><p class="lbl">Why this number? (in your own words)</p><textarea id="why" rows="4" placeholder="What makes it better or worse than the last few you rated?">${esc(r ? r.reason : '')}</textarea></div>
      <p class="msg" id="fm"></p>
      <div class="row">${hist.length ? '<button type="button" class="btn2" id="back">← Back</button>' : ''}<button type="submit">${mine(s.id) ? 'Update and next' : 'Save and next'}</button><button type="button" class="btn2" id="skip">Skip for now</button></div>
      ${mine(s.id) ? reveal(s) : '<p class="note">Claude\'s grade and the other person\'s rating show after you save, so they don\'t sway you.</p>'}
    </form></div>`;
  if (!pitch) loadShot(s, 900);
  const sc = $('#sc');
  sc.oninput = () => { $('#num').textContent = sc.value; $('#anc').textContent = anchorFor(+sc.value); };
  body.querySelectorAll('.chips button').forEach(b => b.onclick = () => { b.classList.toggle('on'); tags.has(b.dataset.t) ? tags.delete(b.dataset.t) : tags.add(b.dataset.t); });
  if ($('#whole')) $('#whole').onclick = () => { loadShot(s, 3200); $('#whole').remove(); };
  $('#skip').onclick = () => { go(nextUnrated(s.id) || cur); draw(); };
  if ($('#back')) $('#back').onclick = () => { const id = hist.pop(); cur = sites.find(x => x.id == id) || cur; draw(); };
  $('#f').onsubmit = async e => {
    e.preventDefault();
    const why = $('#why').value.trim();
    if (why.length < 5 && !tags.size) { $('#fm').textContent = 'Add a reason or pick at least one tag, so Claude knows why.'; return; }
    const row = { site_id: s.id, score: +sc.value, tags: [...tags], reason: why, rated_at: new Date().toISOString() };
    const { data, error } = await sb.from('taste_ratings').upsert(row, { onConflict: 'site_id,rater' }).select().single();
    if (error) {
      if (signedOut(error)) {
        setDraft(row);
        $('#fm').innerHTML = 'Your sign-in ran out, so this was not saved yet. Your rating is kept. <button type="button" id="relog">Sign in again</button>';
        $('#relog').onclick = async () => { await sb.auth.signOut({ scope: 'local' }); location.reload(); };
      } else $('#fm').textContent = 'Not saved: ' + error.message;
      return;
    }
    setDraft(null);
    ratings = ratings.filter(x => !(x.site_id == s.id && x.rater == me.id)).concat(data);
    if (fromCall == s.id) { draw(); $('#fm').innerHTML = '<b style="color:#047857">✓ Saved ' + esc(s.name) + ' (' + data.score + '). You can close this window and get back to the call.</b>'; return; }
    go(nextUnrated(s.id));
    draw();
    if (cur) toastPrev(s);
  };
  // load the next site's picture early, so it is ready when you get there
  const nx = nextUnrated(s.id); if (nx && nx.kind == 'biz') new Image().src = shotUrl(nx.website, 900);
}

function reveal(s) {
  const o = theirs(s.id);
  return '<div class="reveal"><b>Claude: ' + (s.claude_score ?? '–') + '</b> <span class="note">(' + (s.kind == 'pitch' ? 'our pitch grade' : 'old code-based grade') + ')</span>' +
    o.map(r => '<div style="margin-top:6px"><b>' + esc(first(r.rater_email)) + ': ' + r.score + '</b> ' + (r.tags.length ? '<span class="tagl">' + esc(r.tags.join(', ')) + '</span>' : '') + (r.reason ? '<div>' + esc(r.reason) + '</div>' : '') + '</div>').join('') + '</div>';
}

/* After saving, a small box shows how the last one compared. */
function toastPrev(s) {
  const d = document.createElement('div');
  d.style.cssText = 'position:fixed;right:20px;bottom:20px;max-width:380px;z-index:9;background:#fff;border:1px solid var(--line);border-radius:12px;padding:12px 14px;box-shadow:0 8px 30px #0002;font-size:14px';
  d.innerHTML = '<b>Saved: ' + esc(s.name) + '</b>' + reveal(s) + '<p class="note" style="margin-top:6px">Click to close.</p>';
  d.onclick = () => d.remove(); document.body.append(d); setTimeout(() => d.remove(), 9000);
}

/* mShots first answers with a small "Generating preview" picture; try again a few times, then offer the live site. */
function loadShot(s, h) {
  const box = $('#view'); if (!box) return;
  let tries = 0;
  const img = new Image(); img.alt = 'Picture of ' + s.name + "'s website";
  const fail = () => { if (cur && cur.id == s.id) box.innerHTML = '<div class="wait">No picture available right now. Use <b>Open their site ↗</b> above, then rate.</div>'; };
  img.onload = () => {
    if (!cur || cur.id != s.id) return;
    if (img.naturalWidth <= 400) { if (++tries <= 8) setTimeout(() => { img.src = shotUrl(s.website, h) + '&t=' + Date.now(); }, 5000); else fail(); return; }
    box.innerHTML = ''; box.append(img);
  };
  img.onerror = fail;
  img.src = shotUrl(s.website, h);
}

/* ---------- All ratings ---------- */
function drawList() {
  const people = [...new Set(ratings.map(r => r.rater_email))].sort((a, b) => a == me.email ? -1 : b == me.email ? 1 : a.localeCompare(b));
  const rowsData = sites.map(s => {
    const rs = people.map(p => ratings.find(r => r.site_id == s.id && r.rater_email == p));
    const sc = rs.filter(Boolean).map(r => r.score);
    const avg = sc.length ? sc.reduce((a, b) => a + b, 0) / sc.length : null;
    const spread = sc.length > 1 ? Math.max(...sc) - Math.min(...sc) : 0;
    return { s, rs, avg, spread, gap: avg == null || s.claude_score == null ? null : Math.round(avg - s.claude_score) };
  });
  const sorters = { order: (a, b) => a.s.sort - b.s.sort, ours: (a, b) => (b.avg ?? -1) - (a.avg ?? -1), disagree: (a, b) => b.spread - a.spread, claude: (a, b) => Math.abs(b.gap ?? 0) - Math.abs(a.gap ?? 0) };
  rowsData.sort(sorters[listSort]);
  // I can only show my own rating, and others' ratings for sites I've rated (stay blind otherwise)
  const cell = (r, s) => !r ? '<td class="n">–</td>' : (r.rater == me.id || mine(s.id)) ? '<td><b>' + r.score + '</b> <span class="tagl">' + esc(r.tags.join(', ')) + '</span>' + (r.reason ? '<div>' + esc(r.reason) + '</div>' : '') + '</td>' : '<td class="n tagl">rated (rate it to see)</td>';
  $('#body').innerHTML = `<div class="tabs"><span class="note">Sort:</span>
      ${[['order', 'List order'], ['ours', 'Our average'], ['disagree', 'Where we disagree'], ['claude', 'Where we differ from Claude']].map(([k, t]) => '<button data-s="' + k + '" aria-pressed="' + (listSort == k) + '">' + t + '</button>').join('')}</div>
    <div style="overflow-x:auto"><table><thead><tr><th>Site</th>${people.map(p => '<th>' + esc(first(p)) + '</th>').join('')}<th class="n">Claude</th><th></th></tr></thead><tbody>
    ${rowsData.map(({ s, rs, spread }) => '<tr><td><a href="' + esc(s.website) + '" target="_blank" rel="noopener">' + esc(s.name) + '</a><div class="tagl">' + (s.kind == 'pitch' ? 'Our pitch' : esc(s.city || '')) + '</div></td>' +
      rs.map(r => cell(r, s)).join('') + '<td class="n">' + (mine(s.id) ? (s.claude_score ?? '–') : '<span class="tagl">hidden</span>') + (spread >= 15 ? '<div class="diff hi">±' + spread + '</div>' : '') + '</td>' +
      '<td><button class="btn2" data-go="' + s.id + '" style="padding:4px 10px;font-size:13px">' + (mine(s.id) ? 'Change' : 'Rate') + '</button></td></tr>').join('')}
    </tbody></table></div>`;
  $('#body').querySelectorAll('[data-s]').forEach(b => b.onclick = () => { listSort = b.dataset.s; drawList(); });
  $('#body').querySelectorAll('[data-go]').forEach(b => b.onclick = () => { go(sites.find(s => s.id == b.dataset.go)); view = 'rate'; draw(); });
}

if (!globalThis.BAKE_TASTE_NO_START) start();
