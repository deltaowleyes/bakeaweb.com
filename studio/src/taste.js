/* Tasteaweb (taste.html, moving to tasteaweb.com later; was BAKE Taste): Chris and Leah rate real websites on 10
   categories (1–99 each, 3 timed buckets over a strict 5 minutes) with good/bad notes. Older ratings were one 1–99 number
   (method 'v1-overall'); new ones are method 'tw10' with score = average of the 10. Originally: rate real websites 1–99 with reasons, so Claude can learn what they
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
  const [s, r, p] = await Promise.all([
    sb.from('taste_sites').select('*').order('sort'),
    sb.from('taste_ratings').select('*'),
    sb.from('taste_pairs').select('id,rater,rater_email,site_a,site_b,winner')
  ]);
  if (s.error || r.error) { app.innerHTML = '<p class="empty">Could not load: ' + esc((s.error || r.error).message) + '</p>'; return; }
  sites = s.data || []; ratings = r.data || []; pairs = p.data || [];
  if (!sites.length) { app.innerHTML = '<p class="empty">Nothing to rate yet, or this login is not a RezSite admin.</p>'; return; }
  const h = location.hash.slice(1);
  view = h == 'list' ? 'list' : h == 'pair' ? 'pair' : 'rate';
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
  location.hash = view == 'list' ? 'list' : view == 'pair' ? 'pair' : '';
  clearInterval(tick); clearInterval(ptick);
  app.innerHTML = `<div class="tabs">
      <button data-v="rate" aria-pressed="${view == 'rate'}">Rate (10 categories)</button>
      <button data-v="pair" aria-pressed="${view == 'pair'}">This or That</button>
      <button data-v="list" aria-pressed="${view == 'list'}">All ratings</button>
      <span class="prog" id="prog">${esc(view == 'pair' ? pairProgress() : progress())}</span></div><div id="body"></div>`;
  app.querySelectorAll('.tabs [data-v]').forEach(b => b.onclick = () => { view = b.dataset.v; if (view == 'rate' && !cur) cur = nextUnrated(); draw(); });
  view == 'list' ? drawList() : view == 'pair' ? drawPair() : drawRate();
}

/* ---------- This or That: two sites side by side, click the better one (about 10 seconds each) ----------
   Saved to taste_pairs (rater, site_a, site_b, winner = the better site's id or null for a tie, note, seconds).
   Supabase function taste_pair_next picks the pair that teaches the most: a site with few comparisons so far,
   against a site close in level that you haven't compared it with. The tournament maths (taste_tourney_compute)
   counts each pick as 2 head-to-heads. The pair on screen (and your note) is kept in the browser until saved, so a
   reload, a tab switch or a run-out sign-in never loses it. */
const PDRAFT = 'bake-taste-pair-draft';
export const PAIR_MIN = 2;   // seconds after both pictures show before a pick counts (stops accidental double-clicks)
export const pairWinner = (choice, a, b) => choice == 'a' ? a : choice == 'b' ? b : null;
let pairs = [], pair = null, pairQueue = null, lastPair = null, ptick = null, picking = false;
const getPDraft = () => { try { const d = JSON.parse(localStorage.getItem(PDRAFT)); return d && d.a && d.b ? d : null; } catch { return null; } };
const setPDraft = d => { try { d ? localStorage.setItem(PDRAFT, JSON.stringify(d)) : localStorage.removeItem(PDRAFT); } catch {} };
const siteById = id => sites.find(s => s.id == id);

function pairProgress() {
  const people = {}; pairs.forEach(p => { people[p.rater_email] = (people[p.rater_email] || 0) + 1; });
  const you = pairs.filter(p => p.rater == me.id).length;
  const others = Object.entries(people).filter(([e]) => e != me.email).map(([e, n]) => first(e) + ': ' + n);
  return 'Your picks: ' + you + (others.length ? ' · ' + others.join(' · ') : '') + ' · all: ' + pairs.length;
}

async function fetchPair(avoid) {
  const { data, error } = await sb.rpc('taste_pair_next', { p_avoid: avoid || [] });
  if (error) throw error;
  const p = (data || [])[0];
  if (!p || !p.site_b || !siteById(p.site_a) || !siteById(p.site_b)) return null;
  const [a, b] = Math.random() < .5 ? [p.site_a, p.site_b] : [p.site_b, p.site_a];   // random sides
  return { a, b, started: 0, note: '' };
}
const prefetch = p => p && [p.a, p.b].forEach(id => { const s = siteById(id); if (s && s.kind == 'biz') new Image().src = shotUrl(s.website, 900); });
const queueNext = () => { if (!pair || pairQueue) return; const want = pair; fetchPair([pair.a, pair.b]).then(p => { if (pair === want && !pairQueue) { pairQueue = p; prefetch(p); } }).catch(() => {}); };

async function drawPair() {
  const body = $('#body');
  clearInterval(ptick);
  if (!pair) pair = getPDraft();
  if (!pair) {
    body.innerHTML = '<p class="empty">Finding a good pair…</p>';
    try { pair = pairQueue || await fetchPair(); pairQueue = null; }
    catch (e) { if (view == 'pair') body.innerHTML = signedOut(e) ? '<p class="empty">Your sign-in ran out. <button id="relog">Sign in again</button></p>' : '<p class="empty">Could not get a pair: ' + esc(e.message) + '</p>'; if ($('#relog')) $('#relog').onclick = relog; return; }
    if (!pair) { if (view == 'pair') body.innerHTML = '<p class="empty">You have compared every useful pair for now. Thank you!</p>'; return; }
    setPDraft(pair);
  }
  if (view != 'pair' || !document.body.contains(body)) return;
  const A = siteById(pair.a), B = siteById(pair.b);
  if (!A || !B) { setPDraft(null); pair = null; return drawPair(); }
  const side = (k, s, key) => `<div class="side shot" data-side="${k}">
      <div class="bar"><div><h2>${esc(s.name)}</h2><span class="note">${s.kind == 'pitch' ? 'Our pitch design' : esc(s.city || '')}</span></div>
        <div class="row">${s.kind == 'pitch' ? '' : '<button class="btn2" data-whole="' + k + '">Whole page</button>'}<a href="${esc(s.website)}" target="_blank" rel="noopener">Open ↗</a></div></div>
      <div class="view pv" id="pv-${k}">${s.kind == 'pitch' ? '<iframe title="Pitch preview" src="' + esc(s.website) + '"></iframe>' : '<div class="wait">Getting a picture of their site…</div>'}</div>
      <button class="pick" data-c="${k}">${key} This one is better</button></div>`;
  body.innerHTML = `<div class="pairtop"><span class="pclk" id="pclk">…</span><span class="note">Which site is better overall? Go with your gut (about 10 seconds). Keys: <b>←</b> left · <b>→</b> right · <b>↓</b> tie · <b>S</b> skip</span></div>
    <div class="pair">${side('a', A, '←')}${side('b', B, '→')}</div>
    <div class="pairbot"><button class="btn2" data-c="tie">↓ About the same</button>
      <input id="pnote" maxlength="200" placeholder="Optional: one line on why (e.g. 'own photos beat stock')" value="${esc(pair.note || '')}">
      <button class="btn2" id="pskip">Skip (S)</button>${lastPair ? '<button class="btn2" id="pundo">Undo last pick</button>' : ''}</div>
    <p class="msg" id="pm"></p>`;
  const cp = pair;
  let shown = 0;
  const ready = () => { if (++shown >= 2 && pair === cp && !cp.started) { cp.started = Date.now(); setPDraft(cp); } };
  [['a', A], ['b', B]].forEach(([k, s]) => {
    if (s.kind == 'pitch') { const f = $('#pv-' + k + ' iframe'); f.onload = ready; setTimeout(ready, 4000); }
    else shotInto($('#pv-' + k), s, 900, () => pair === cp, ready);
  });
  body.querySelectorAll('[data-whole]').forEach(b => b.onclick = () => { const s = b.dataset.whole == 'a' ? A : B; shotInto($('#pv-' + b.dataset.whole), s, 3200, () => pair === cp, () => {}); b.remove(); });
  body.querySelectorAll('[data-c]').forEach(b => b.onclick = () => pickPair(b.dataset.c));
  $('#pnote').oninput = e => { cp.note = e.target.value; setPDraft(cp); };
  $('#pskip').onclick = skipPair;
  if ($('#pundo')) $('#pundo').onclick = undoPair;
  const step = () => { if (!document.body.contains(body) || pair !== cp) { clearInterval(ptick); return; } $('#pclk').textContent = cp.started ? Math.floor((Date.now() - cp.started) / 1000) + 's' : 'loading…'; };
  step(); ptick = setInterval(step, 500);
  queueNext();
}

const pmsg = h => { const m = $('#pm'); if (m) m.innerHTML = h; };
async function relog() { await sb.auth.signOut({ scope: 'local' }); location.reload(); }

async function pickPair(c) {
  if (!pair || picking) return;
  const cp = pair, e = cp.started ? (Date.now() - cp.started) / 1000 : 0;
  if (!cp.started) { pmsg('Wait for both pictures to show (or open both sites).'); return; }
  if (e < PAIR_MIN) { pmsg('Take one more look first.'); return; }
  picking = true;
  const row = { site_a: cp.a, site_b: cp.b, winner: pairWinner(c, cp.a, cp.b), note: (cp.note || '').trim() || null, seconds: Math.round(e) };
  const { data, error } = await sb.from('taste_pairs').insert(row).select('id,rater,rater_email,site_a,site_b,winner').single();
  picking = false;
  if (error) {
    setPDraft(cp);
    if (signedOut(error)) { pmsg('Your sign-in ran out, so this pick was not saved yet. The pair is kept. <button type="button" id="relog">Sign in again</button>'); $('#relog').onclick = relog; }
    else pmsg('Not saved: ' + esc(error.message));
    return;
  }
  pairs.push(data);
  lastPair = { id: data.id, pair: { a: cp.a, b: cp.b, note: cp.note || '', started: 0 } };
  nextPair();
}
function nextPair() { pair = pairQueue; pairQueue = null; if (pair) { pair.started = 0; setPDraft(pair); } else setPDraft(null); const pr = $('#prog'); if (pr) pr.textContent = pairProgress(); drawPair(); }
function skipPair() { if (!pair) return; nextPair(); }
async function undoPair() {
  if (!lastPair) return;
  const { error } = await sb.from('taste_pairs').delete().eq('id', lastPair.id);
  if (error) { pmsg('Could not undo: ' + esc(error.message)); return; }
  pairs = pairs.filter(p => p.id != lastPair.id);
  pairQueue = pair; pair = lastPair.pair; lastPair = null; setPDraft(pair);
  const pr = $('#prog'); if (pr) pr.textContent = pairProgress();
  drawPair();
}
/* Keyboard: ← left, → right, ↓ tie, S skip (not while typing the note). */
if (typeof document != 'undefined') document.addEventListener('keydown', e => {
  if (view != 'pair' || !pair || e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.target.matches && e.target.matches('input,textarea')) return;
  const c = { ArrowLeft: 'a', ArrowRight: 'b', ArrowDown: 'tie' }[e.key];
  if (c) { e.preventDefault(); pickPair(c); } else if (e.key == 's' || e.key == 'S') skipPair();
});

/* ---------- Tasteaweb: 10 categories in 3 timed buckets over 5 minutes ----------
   Each category is rated 1–99 (slider or quick buttons) with optional "good / bad" notes, so the ratings teach
   the AI grader what to look for and give the developer ideas for BAKE Studio features. Overall = average. */
export const CATS = [
  { k: 'polish', b: 1, s: 'Polish', n: 'Visual Polish & Craft', q: 'Does this look custom-built by a pro, or like a cheap/broken template?' },
  { k: 'modern', b: 1, s: 'Modern', n: 'Aesthetic Modernity', q: 'Does the design feel current and fresh, or dated?' },
  { k: 'hierarchy', b: 1, s: 'Focus', n: 'Visual Hierarchy & Focus', q: 'Does your eye immediately know where to look first, or is everything competing for attention?' },
  { k: 'brand', b: 1, s: 'Brand', n: 'Brand Vibe / Memorability', q: 'Does the site have a distinct personality that stands out?' },
  { k: 'clarity', b: 2, s: 'Clarity', n: 'Instant Value Clarity', q: 'Within seconds, can you tell exactly what this site does and who it is for?' },
  { k: 'scan', b: 2, s: 'Scan', n: 'Scannability & Layout Breathability', q: 'Is the text easy to skim with good spacing, or an overwhelming wall of clutter?' },
  { k: 'nav', b: 2, s: 'Nav', n: 'Navigation Intuition', q: 'Without clicking deep, is it obvious how to find key information or take the next step?' },
  { k: 'trust', b: 3, s: 'Trust', n: 'Credibility & Legitimacy', q: 'Does this site feel safe, trustworthy and real enough to give your email or credit card to?' },
  { k: 'copy', b: 3, s: 'Copy', n: 'Copy & Tone Persuasion', q: 'Does the writing feel natural, human and compelling, or robotic and full of buzzwords?' },
  { k: 'cta', b: 3, s: 'Action', n: 'Action Pull (CTA Desire)', q: 'Based purely on what you see, how likely would you be to click the main button or try this?' }
];
export const BUCKETS = [
  { b: 1, t: 'Gut Reaction & Aesthetics', w: 'first 15 seconds', at: 0 },
  { b: 2, t: 'Clarity & Cognitive Load', w: 'next 90 seconds', at: 15 },
  { b: 3, t: 'Trust & Conversion Intent', w: 'final 75 seconds', at: 105 }
];
export const NOTES_AT = 180, SAVE_AT = 300;
export const QUICK = [[10, 'Bad'], [30, 'Weak'], [50, 'OK'], [70, 'Good'], [85, 'Great'], [95, 'Best']];
export const overall = cats => { const v = CATS.map(c => +(cats || {})[c.k]).filter(x => x > 0); return v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : null; };
export const fmt = t => { t = Math.max(0, Math.floor(t)); return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0'); };
export const phaseAt = e => e < 15 ? 'Bucket 1 · gut reaction' : e < 105 ? 'Bucket 2 · clarity' : e < NOTES_AT ? 'Bucket 3 · trust' : e < SAVE_AT ? 'Notes time: what makes it good or bad?' : 'Ready to save';
export const missingCats = cats => CATS.filter(c => !(+(cats || {})[c.k] > 0)).map(c => c.n);

/* The rating in progress. Kept in the browser (localStorage) on every change until saved, so a reload, a tab switch
   or a run-out sign-in never loses it, and the 5-minute clock keeps its start time. */
let work = null, tick = null;
function workFor(s) {
  if (work && work.site_id == s.id) return work;
  const r = mine(s.id), d = getDraft(s.id);
  if (d && d.cats) work = d;
  else if (r) work = { site_id: s.id, started: 0, cats: { ...(r.cats || {}) }, cat_notes: JSON.parse(JSON.stringify(r.cat_notes || {})), good: r.good || '', bad: r.bad || '', reason: r.reason || '', tags: [...(r.tags || [])], old: r.method == 'tw10' ? null : r.score };
  else work = { site_id: s.id, started: Date.now(), cats: {}, cat_notes: {}, good: '', bad: '', reason: '', tags: [] };
  return work;
}
const keep = () => setDraft(work);
const elapsed = () => work && work.started ? (Date.now() - work.started) / 1000 : 1e9;
const leave = () => { setDraft(null); work = null; };

function catHtml(c) {
  const v = +work.cats[c.k] || 0, nt = work.cat_notes[c.k] || {};
  return `<div class="cat" data-k="${c.k}"><div class="ch"><b>${CATS.indexOf(c) + 1}. ${esc(c.n)}</b><span class="cv" id="v-${c.k}">${v || '–'}</span></div>
    <p class="note">${esc(c.q)}</p>
    <input type="range" min="1" max="99" step="1" value="${v || 50}" class="${v ? '' : 'unset'}" data-k="${c.k}" aria-label="${esc(c.n)} from 1 to 99">
    <div class="qk">${QUICK.map(([n, t]) => `<button type="button" data-k="${c.k}" data-n="${n}" class="${v == n ? 'on' : ''}">${t} <span>${n}</span></button>`).join('')}</div>
    <div class="cn"><input data-k="${c.k}" data-f="good" placeholder="What makes it good?" value="${esc(nt.good || '')}"><input data-k="${c.k}" data-f="bad" placeholder="What makes it bad?" value="${esc(nt.bad || '')}"></div></div>`;
}

function drawRate() {
  const body = $('#body');
  clearInterval(tick);
  if (!cur) { body.innerHTML = '<p class="empty">You have rated every site. Thank you! See <b>All ratings</b> to compare, or tell Claude the ratings are ready.</p>' + (hist.length ? '<p><button class="btn2" id="back">← Back</button></p>' : ''); if ($('#back')) $('#back').onclick = () => { work = null; cur = sites.find(x => x.id == hist.pop()) || null; draw(); }; return; }
  const s = cur, pitch = s.kind == 'pitch';
  workFor(s);
  const tags = new Set(work.tags);
  const avg = overall(work.cats);
  body.innerHTML = `<div class="rate">
    <div class="shot">
      <div class="bar"><div><h2>${esc(s.name)}</h2>${fromCall == s.id ? '<span class="note" style="display:block;color:#7c3aed;font-weight:700">📞 From your call: rate while you talk</span>' : ''}<span class="note">${pitch ? 'Our pitch design (★ design, rate the design not the price box)' : esc(s.city || '')}</span></div>
        <div class="row">${pitch ? '' : '<button class="btn2" id="whole">Whole page</button>'}<a href="${esc(s.website)}" target="_blank" rel="noopener">Open ${pitch ? 'the preview' : 'their site'} ↗</a></div></div>
      <div class="view" id="view">${pitch ? '<iframe title="Pitch preview" src="' + esc(s.website) + '"></iframe>' : '<div class="wait">Getting a picture of their site… (the first time can take up to a minute)</div>'}</div>
    </div>
    <form class="form" id="f">
      <div class="clock"><div class="row" style="justify-content:space-between;align-items:baseline"><span class="clk" id="clk">${work.started ? '0:00' : 'Editing'}</span><span class="phase" id="phase">${work.started ? '' : 'No timer when changing a saved rating'}</span></div><div class="pbar"><i id="pb"></i></div></div>
      ${work.old != null ? '<p class="note">Your old single rating was <b>' + work.old + '</b>. Score all 10 categories to update it.</p>' : ''}
      ${BUCKETS.map(B => `<fieldset class="bk" data-b="${B.b}"><legend>Bucket ${B.b}: ${esc(B.t)} <small>${B.w}</small></legend><p class="lock" id="lk${B.b}">Unlocks at ${fmt(B.at)}</p>${CATS.filter(c => c.b == B.b).map(catHtml).join('')}</fieldset>`).join('')}
      <fieldset class="bk" data-b="4"><legend>Overall <small>notes time ${fmt(NOTES_AT)}–${fmt(SAVE_AT)}</small></legend>
        <div class="row" style="align-items:baseline;gap:14px"><span class="big" id="num">${avg ?? '–'}</span><span class="anchor" id="anc">${avg ? esc(anchorFor(avg)) : 'Average of the 10 categories'}</span></div>
        <div><p class="lbl">What makes this site good? (things the AI should copy)</p><textarea id="good" rows="3">${esc(work.good)}</textarea></div>
        <div><p class="lbl">What makes it bad? (things the AI should avoid)</p><textarea id="bad" rows="3">${esc(work.bad)}</textarea></div>
        <div><p class="lbl">Quick tags</p><div class="chips">${TAGS.g.map(t => '<button type="button" class="g' + (tags.has(t) ? ' on' : '') + '" data-t="' + esc(t) + '">' + esc(t) + '</button>').join('')}${TAGS.b.map(t => '<button type="button" class="b' + (tags.has(t) ? ' on' : '') + '" data-t="' + esc(t) + '">' + esc(t) + '</button>').join('')}</div></div>
        <div><p class="lbl">Ideas: a grading rule or a BAKE Studio feature this site suggests</p><textarea id="why" rows="3" placeholder="e.g. 'Menu stays put while the header scrolls away: BAKE should offer that'">${esc(work.reason)}</textarea></div>
      </fieldset>
      <p class="msg" id="fm"></p>
      <div class="row">${hist.length ? '<button type="button" class="btn2" id="back">← Back</button>' : ''}<button type="submit" id="sv">${mine(s.id) ? 'Update and next' : 'Save and next'}</button><button type="button" class="btn2" id="skip">Skip for now</button></div>
      ${mine(s.id) ? reveal(s) : '<p class="note">Claude\'s grade and the other person\'s rating show after you save, so they don\'t sway you.</p>'}
    </form></div>`;
  if (!pitch) loadShot(s, 900);
  const f = $('#f');
  const setCat = (k, v) => {
    work.cats[k] = v; keep();
    const r = f.querySelector('input[type=range][data-k="' + k + '"]'); r.value = v; r.classList.remove('unset');
    $('#v-' + k).textContent = v;
    f.querySelectorAll('.qk button[data-k="' + k + '"]').forEach(b => b.classList.toggle('on', +b.dataset.n == v));
    const a = overall(work.cats); $('#num').textContent = a ?? '–'; $('#anc').textContent = a ? anchorFor(a) : '';
  };
  f.querySelectorAll('input[type=range][data-k]').forEach(r => r.oninput = () => setCat(r.dataset.k, +r.value));
  f.querySelectorAll('.qk button').forEach(b => b.onclick = () => setCat(b.dataset.k, +b.dataset.n));
  f.querySelectorAll('.cn input').forEach(i => i.oninput = () => { const n = work.cat_notes[i.dataset.k] = work.cat_notes[i.dataset.k] || {}; n[i.dataset.f] = i.value; keep(); });
  [['good', 'good'], ['bad', 'bad'], ['why', 'reason']].forEach(([id, key]) => $('#' + id).oninput = e => { work[key] = e.target.value; keep(); });
  f.querySelectorAll('.chips button').forEach(b => b.onclick = () => { b.classList.toggle('on'); tags.has(b.dataset.t) ? tags.delete(b.dataset.t) : tags.add(b.dataset.t); work.tags = [...tags]; keep(); });
  if ($('#whole')) $('#whole').onclick = () => { loadShot(s, 3200); $('#whole').remove(); };
  $('#skip').onclick = () => { leave(); go(nextUnrated(s.id) || cur); draw(); };
  if ($('#back')) $('#back').onclick = () => { leave(); const id = hist.pop(); cur = sites.find(x => x.id == id) || cur; draw(); };

  // The clock: buckets unlock in order; Save unlocks at 5:00 (strict).
  const step = () => {
    if (!document.body.contains(f)) { clearInterval(tick); return; }
    const e = elapsed(), timed = !!work.started;
    if (timed) { $('#clk').textContent = fmt(Math.min(e, SAVE_AT)) + ' / ' + fmt(SAVE_AT); $('#phase').textContent = phaseAt(e); $('#pb').style.width = Math.min(100, e / SAVE_AT * 100) + '%'; }
    else $('#pb').style.width = '100%';
    BUCKETS.forEach(B => {
      const fs = f.querySelector('.bk[data-b="' + B.b + '"]'), open = e >= B.at;
      // When a bucket unlocks during the timed 5 minutes, bring it into view (not while you're typing a note).
      if (timed && open && fs.disabled && B.b > 1 && !f.contains(document.activeElement && document.activeElement.matches('input:not([type=range]),textarea') ? document.activeElement : null)) f.scrollTo({ top: fs.offsetTop - 90, behavior: 'smooth' });
      fs.disabled = !open; fs.classList.toggle('now', timed && open && e < (BUCKETS[B.b] ? BUCKETS[B.b].at : NOTES_AT));
      $('#lk' + B.b).hidden = open; if (!open) $('#lk' + B.b).textContent = '🔒 Unlocks in ' + fmt(B.at - e);
    });
    f.querySelector('.bk[data-b="4"]').classList.toggle('now', timed && e >= NOTES_AT && e < SAVE_AT);
    const sv = $('#sv'); sv.disabled = e < SAVE_AT;
    sv.textContent = e < SAVE_AT ? 'Save unlocks in ' + fmt(SAVE_AT - e) : (mine(s.id) ? 'Update and next' : 'Save and next');
  };
  step(); tick = setInterval(step, 500);

  f.onsubmit = async e => {
    e.preventDefault();
    if (elapsed() < SAVE_AT) { $('#fm').textContent = 'Keep looking: Save unlocks at 5:00.'; return; }
    const miss = missingCats(work.cats);
    if (miss.length) { $('#fm').textContent = 'Score every category first. Missing: ' + miss.join(', '); return; }
    const anyNote = (work.good + work.bad + work.reason).trim().length >= 5 || Object.values(work.cat_notes).some(n => ((n.good || '') + (n.bad || '')).trim().length >= 3);
    if (!anyNote && !work.tags.length) { $('#fm').textContent = 'Add at least one note (what makes it good or bad), so the AI learns why.'; return; }
    const cn = {}; Object.entries(work.cat_notes).forEach(([k, n]) => { const g = (n.good || '').trim(), b = (n.bad || '').trim(); if (g || b) cn[k] = { good: g, bad: b }; });
    const row = { site_id: s.id, score: overall(work.cats), cats: work.cats, cat_notes: cn, good: work.good.trim(), bad: work.bad.trim(), tags: work.tags, reason: work.reason.trim(), seconds: work.started ? Math.round(elapsed()) : null, method: 'tw10', rated_at: new Date().toISOString() };
    const { data, error } = await sb.from('taste_ratings').upsert(row, { onConflict: 'site_id,rater' }).select().single();
    if (error) {
      if (signedOut(error)) {
        keep();
        $('#fm').innerHTML = 'Your sign-in ran out, so this was not saved yet. Your rating is kept. <button type="button" id="relog">Sign in again</button>';
        $('#relog').onclick = async () => { await sb.auth.signOut({ scope: 'local' }); location.reload(); };
      } else $('#fm').textContent = 'Not saved: ' + error.message;
      return;
    }
    leave();
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
    o.map(r => '<div style="margin-top:6px"><b>' + esc(first(r.rater_email)) + ': ' + r.score + '</b> ' + (r.cats && Object.keys(r.cats).length ? '<div class="tagl">' + CATS.filter(c => r.cats[c.k]).map(c => c.s + ' ' + r.cats[c.k]).join(' · ') + '</div>' : '') + (r.good ? '<div>👍 ' + esc(r.good) + '</div>' : '') + (r.bad ? '<div>👎 ' + esc(r.bad) + '</div>' : '') + (r.tags.length ? '<span class="tagl">' + esc(r.tags.join(', ')) + '</span>' : '') + (r.reason ? '<div>' + esc(r.reason) + '</div>' : '') + '</div>').join('') + '</div>';
}

/* After saving, a small box shows how the last one compared. */
function toastPrev(s) {
  const d = document.createElement('div');
  d.style.cssText = 'position:fixed;right:20px;bottom:20px;max-width:380px;z-index:9;background:#fff;border:1px solid var(--line);border-radius:12px;padding:12px 14px;box-shadow:0 8px 30px #0002;font-size:14px';
  d.innerHTML = '<b>Saved: ' + esc(s.name) + '</b>' + reveal(s) + '<p class="note" style="margin-top:6px">Click to close.</p>';
  d.onclick = () => d.remove(); document.body.append(d); setTimeout(() => d.remove(), 9000);
}

/* mShots first answers with a small "Generating preview" picture; try again a few times, then offer the live site. */
function loadShot(s, h) { shotInto($('#view'), s, h, () => cur && cur.id == s.id, () => {}); }
/* Put a picture of site s into box; still() says the box is still showing that site; done() runs once it shows (or fails). */
function shotInto(box, s, h, still, done) {
  if (!box) return;
  let tries = 0;
  const img = new Image(); img.alt = 'Picture of ' + s.name + "'s website";
  const fail = () => { if (still() && document.body.contains(box)) { box.innerHTML = '<div class="wait">No picture available right now. Use <b>Open ↗</b> above.</div>'; done(); } };
  img.onload = () => {
    if (!still() || !document.body.contains(box)) return;
    if (img.naturalWidth <= 400) { if (++tries <= 8) setTimeout(() => { img.src = shotUrl(s.website, h) + '&t=' + Date.now(); }, 5000); else fail(); return; }
    box.innerHTML = ''; box.append(img); done();
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
  $('#body').querySelectorAll('[data-go]').forEach(b => b.onclick = () => { work = null; go(sites.find(s => s.id == b.dataset.go)); view = 'rate'; draw(); });
}

if (!globalThis.BAKE_TASTE_NO_START) start();
