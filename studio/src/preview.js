/* Prospect preview (preview.html?p=<link code>): the page a business owner opens from the link we send them.
   It shows only what get_shared_pitch() returns (business name, their site's score, what we noticed and the
   redesigns); talking points, notes and contact details stay in the private Pitches page.
   Replies go through reply_shared_pitch(), which marks the pitch "Interested". */
import { createClient } from '@supabase/supabase-js';
import { Site, pitchProject } from './lib/site.js';
import { blank } from './store.js';
import { Render } from './lib/render.js';
import { compareHtml } from './lib/compare.js';
import { launchDeal, dealLine, timeLeft, salePrice } from './lib/launch.js';
import { suggestName, nameProblem } from './lib/publish.js';
import './lib/site.css';   // the generated site's look must apply in this page too, so the screenshot's link map and photo holes are measured with the real layout

const sb = createClient('https://gpwxuunutljcauoknhrh.supabase.co', 'sb_publishable_B7a1VEv6RX13n2JhA50tbQ_oR_oKfw9');
const $ = s => document.querySelector(s);
const app = $('#app');
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const qs = new URLSearchParams(location.search), token = qs.get('p') || '';
const DEV = { computer: [1280, 760], tablet: [820, 760], phone: [390, 720] };
let P = null, designs = [], cur = 0, dev = innerWidth < 700 ? 'phone' : 'computer';

function project(p) {
  const b = blank(), o = Object.assign(b, JSON.parse(JSON.stringify(p || {})));
  o.ui = b.ui; o.brand = Object.assign(blank().brand, o.brand || {}); o.menu = Object.assign(blank().menu, o.menu || {});
  return o;
}

async function start() {
  if (token.length < 16) return gone();
  // ?me=1 is added by the Pitches page so our own looks don't count as the prospect opening it
  const { data, error } = await sb.rpc('get_shared_pitch', { t: token, count_view: qs.get('me') != '1' });
  if (error || !data) return gone();
  P = data;
  designs = (P.redesigns || []).slice().sort((a, b) => (+b.grade || 0) - (+a.grade || 0));
  document.title = 'A new website for ' + P.business_name + ' · BAKE preview';
  draw(); loadOrders();
}

function gone() {
  app.innerHTML = '<p class="empty">This preview link isn\'t working. It may have been mistyped or replaced.<br>Please contact the person who sent it to you.</p>';
}

function draw() {
  const notes = (P.before_notes || '').split('\n').map(l => l.replace(/^[-•]\s*/, '').trim()).filter(Boolean);
  const none = !P.website;   /* no website yet: a first website, not a redesign */
  const after = P.rating_after || designs.reduce((m, d) => Math.max(m, +d.grade || 0), 0);
  app.innerHTML = `
    <p class="score">${none ? `Design score <span class="a">${esc(after)}/99</span>` : `Design score <span class="b">${esc(P.rating_before ?? '?')}/99 today</span> → <span class="a">${esc(after)}/99 redesigned</span>`}</p>
    <h1>A fresh website for ${esc(P.business_name)}</h1>
    <p class="lead">${none ? `We made ${designs.length == 1 ? 'a free website design' : designs.length + ' free website designs'} for you, with your own photos, so you can see what's possible, with no commitment.` : `We made ${designs.length == 1 ? 'a free redesign' : designs.length + ' free redesigns'} of your website so you can see what's possible, with no commitment.`}
      Pick a design below and try it on a computer or a phone. Photos labelled “Sample photo” are placeholders that we swap for your own.</p>
    <div class="bar"><div class="tabs" role="tablist">${designs.map((d, i) => `<button data-i="${i}" aria-pressed="${i == cur}">${i == 0 && designs.length > 1 ? '★ ' : ''}${esc(d.name)}</button>`).join('')}</div>
      <div class="dev">${Object.keys(DEV).map(k => `<button data-d="${k}" aria-pressed="${k == dev}">${k[0].toUpperCase() + k.slice(1)}</button>`).join('')}</div></div>
    <div class="pages" aria-label="Pages of this website"><span class="pl" id="pgc">Pages</span><div class="tabs" id="pgs"></div></div>
    <p class="pvnote" role="note"><b>Preview note:</b> this is a picture of your new website. Drop-down menus (like the ones marked ▾) don't open in the preview, so use the page buttons above to reach those pages. They will open normally once your site is live. Any blue outline that appears when you click a link is only part of this preview and won't show on your live site.</p>
    <div class="stage" id="stage"><div class="frame" id="frame"><div class="sv" id="sv"><div class="pic" id="pic"></div></div><p class="wait" id="wait">Drawing the page…</p></div></div>
    <p class="hint">Every page of your new website is here: pick one above, or click a link inside the preview. Scroll inside the preview to see the whole page.${designs.length > 1 ? ' ★ = the design we think suits you best.' : ''}</p>
    <div class="card price"><h2>What this design costs, compared</h2><div id="deal"></div><div id="cmp"></div>
      <p class="hint">Publishing to a free <b>yourname.rezsite.com</b> address is included. <b>Hosting is free</b>, on the free address or on your own domain, while a small “Baked with BAKE” badge shows at the bottom of your pages. Your own domain: +$50 to register a new one (plus the yearly domain fee, about $15) or +$100 to connect one you already have.</p></div>
    <div class="card buy" id="buy"></div>
    <div class="grid">
      <div class="card before"><h2>${none ? 'Today' : 'Your website today'}</h2>
        ${P.before_shot ? `<a href="${esc(P.website)}" target="_blank" rel="noopener"><img id="bshot" data-url="${esc(P.website)}" src="${esc(P.before_shot)}" alt="Your current website" loading="lazy"></a>` : ''}
        ${notes.length ? '<h3 style="margin:16px 0 0;font-size:16px">Quick things we noticed</h3><ul>' + notes.map(n => '<li>' + esc(n) + '</li>').join('') + '</ul>' : ''}
      </div>
      <div class="card"><h2>Like what you see?</h2>
        <p style="margin-top:0">Tell us which design you like, or ask us anything. We'll get back to you within one business day.</p>
        <form id="rf">
          <div class="choices"><button type="button" class="ch primary" data-c="interested" aria-pressed="true">I'm interested</button><button type="button" class="ch" data-c="question" aria-pressed="false">I have a question</button></div>
          <input id="nm" placeholder="Your name" autocomplete="name" maxlength="120">
          <input id="ct" placeholder="Best phone number or email" maxlength="160" required>
          <textarea id="ms" rows="3" placeholder="Anything you'd like changed or added? (optional)" maxlength="2000"></textarea>
          <button type="submit" class="primary">Send to BAKE</button>
          <p class="msg" id="rm" aria-live="polite"></p>
        </form>
      </div>
    </div>`;
  app.querySelectorAll('[data-i]').forEach(b => b.onclick = () => { cur = +b.dataset.i; mark('[data-i]', b); show(); });
  app.querySelectorAll('[data-d]').forEach(b => b.onclick = () => { dev = b.dataset.d; mark('[data-d]', b); fit(); });
  let choice = 'interested';
  app.querySelectorAll('.ch').forEach(b => b.onclick = () => { choice = b.dataset.c; app.querySelectorAll('.ch').forEach(x => { const on = x == b; x.setAttribute('aria-pressed', on); x.classList.toggle('primary', on); }); });
  $('#rf').onsubmit = async e => {
    e.preventDefault();
    const btn = e.target.querySelector('[type=submit]'); btn.disabled = true; $('#rm').className = 'msg'; $('#rm').textContent = 'Sending…';
    const { data, error } = await sb.rpc('reply_shared_pitch', { t: token, choice, pick: designs[cur]?.name || '', name: $('#nm').value.trim(), contact: $('#ct').value.trim(), message: $('#ms').value.trim() });
    if (error || !data) { btn.disabled = false; $('#rm').className = 'msg err'; $('#rm').textContent = 'Sorry, that didn\'t send. Please try again, or reply to the message that brought you here.'; return; }
    const f = e.target, box = document.createElement('div');
    box.className = 'sent'; box.setAttribute('role', 'status'); box.tabIndex = -1;
    box.innerHTML = '<div class="sent-tick" aria-hidden="true">✓</div><h3>Message sent</h3><p>Thank you! We got your message and will be in touch within one business day.</p>';
    f.replaceWith(box); box.scrollIntoView({ behavior: 'smooth', block: 'center' }); box.focus({ preventScroll: true });
    toast('✓ Message sent. Thank you, we\'ll be in touch soon!');
  };
  if ($('#bshot')) watchShot($('#bshot'));
  show(); new ResizeObserver(fit).observe($('#stage'));
}
function toast(text) {
  let t = $('#toast'); if (!t) { t = document.createElement('div'); t.id = 'toast'; t.setAttribute('role', 'status'); t.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);max-width:min(92vw,520px);background:#1d2a2c;color:#fff;padding:12px 18px;border-radius:12px;box-shadow:0 8px 24px #0004;font-size:15px;z-index:20;transition:opacity .3s'; document.body.append(t); }
  t.textContent = text; t.style.opacity = 1; clearTimeout(toast.h); toast.h = setTimeout(() => t.style.opacity = 0, 3500);
}
function mark(sel, on) { app.querySelectorAll(sel).forEach(x => x.setAttribute('aria-pressed', x == on)); }

let pg = 'home';   // the page of the site being previewed (prospects can click through every page)
function show() {
  const d = designs[cur]; if (!d) return;
  const pr = project(pitchProject(d, P.base_project)), names = pr.pages.map(p => p.name || 'Page');
  let at = names.findIndex(n => n.trim().toLowerCase() == String(pg).trim().toLowerCase()); if (at < 0) at = 0;
  draw1(pr, d.tpl, names[at]);
  $('#pgc').textContent = names.length + ' pages';
  $('#pgs').innerHTML = names.map((n, i) => `<button data-p="${i}" aria-pressed="${i == at}">${esc(i == 0 ? 'Home' : n)}</button>`).join('');
  $('#pgs').querySelectorAll('[data-p]').forEach(b => b.onclick = () => { pg = names[+b.dataset.p]; show(); });
  const g = +d.grade || 0; $('#cmp').innerHTML = compareHtml(g, Render.priceFor(g), Render.money, { forProspect: true, deal: launchDeal() }) || '<p>Ask us about this design.</p>';
  dealBanner(); buyCard();
  fit();
}
function fit() {
  const st = $('#stage'), fr = $('#frame'); if (!st) return;
  const [w, h] = DEV[dev], room = st.clientWidth - parseFloat(getComputedStyle(st).paddingLeft) * 2, s = Math.min(1, room / w);
  const vh = Math.min(h, Math.max(480, innerHeight - 160));
  fr.style.width = Math.floor(w * s) + 'px'; fr.style.height = vh + 'px';
  if (fit.w != w) { fit.w = w; if (fit.redraw) fit.redraw(); }
}

/* The preview is a SCREENSHOT of the page (the page code only reaches the client once it is paid for), with a
   see-through link over every link: other pages open that page, "#part" links scroll to it. Photos whose
   website won't let us copy them into the picture are laid over it at their exact spot (map.holes). */
let drawId = 0;
async function draw1(pr, tpl, name) {
  const id = ++drawId, w = DEV[dev][0], pic = $('#pic'), sv = $('#sv');
  fit.w = w; fit.redraw = () => draw1(pr, tpl, name);
  $('#wait').hidden = false;
  let r; try { r = await Site.previewShot(pr, tpl, name, w); } catch (e) { $('#wait').textContent = 'This page could not be drawn. Please try another page.'; return; }
  if (id != drawId) return;
  const pc = (v, t) => (v / t * 100).toFixed(3) + '%', box = b => 'left:' + pc(b.x, r.w) + ';top:' + pc(b.y, r.h) + ';width:' + pc(b.width, r.w) + ';height:' + pc(b.height, r.h);
  pic.innerHTML = '<img class="shot" src="' + r.url + '" alt="' + esc(name) + ' page of the new website" draggable="false">' +
    r.holes.map(b => '<img class="hole" src="' + esc(b.src) + '" alt="" style="' + box(b) + ';object-fit:' + esc(b.fit || 'cover') + ';object-position:' + esc(b.pos || '50% 50%') + ';border-radius:' + esc(b.radius || '0') + '">').join('') +
    r.links.map((l, i) => '<a href="#" data-l="' + i + '" style="' + box(l) + '" aria-label="' + esc(l.label || 'Link') + '"></a>').join('');
  pic.style.aspectRatio = r.w + ' / ' + r.h;
  pic.querySelectorAll('a[data-l]').forEach(a => a.onclick = e => {
    e.preventDefault();
    const l = r.links[+a.dataset.l], h = l.href;
    if (/^#@/.test(h)) { pg = decodeURIComponent(h.slice(2)); show(); sv.scrollTop = 0; return; }
    if (h == '#bake-menu') { toast('“' + (l.label || 'This menu') + '” opens a drop-down list on your live site. For now, use the page buttons above the preview.'); return; }
    if (h == '#top') { sv.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    if (/^#./.test(h)) { const s = r.secs.find(x => x.id == h.slice(1)); if (s) sv.scrollTo({ top: Math.max(0, s.y / r.h * pic.clientHeight - 70), behavior: 'smooth' }); return; }
    if (/^https?:/.test(h)) { window.open(h, '_blank', 'noopener'); return; }
    toast((l.label ? '“' + l.label + '”' : 'This link') + ' will work on your finished site.');
  });
  $('#wait').hidden = true;
}

/* Same before-screenshot fallback as the Pitches page: mshots first answers with a small "Generating preview" image. */
function watchShot(img) {
  /* Before screenshots: mshots (WordPress) first, then Microlink if mshots fails or keeps showing "Generating preview",
     and if both fail, a plain "visit the current site" box instead of a broken image. */
  let tries = 0;
  const ML = () => 'https://api.microlink.io/?url=' + encodeURIComponent(img.dataset.url) + '&screenshot=true&meta=false&embed=screenshot.url';
  const giveUp = () => {
    const box = document.createElement('a'); box.href = img.dataset.url; box.target = '_blank'; box.rel = 'noopener'; box.className = 'noshot';
    box.textContent = 'Picture not available right now. Visit the current site ↗';
    box.style.cssText = 'display:flex;align-items:center;justify-content:center;text-align:center;aspect-ratio:4/3;border:1px dashed #b9c0bb;border-radius:10px;background:#eef0ec;color:#2f5d62;font-weight:600;padding:20px;text-decoration:none';
    (img.closest('a') || img).replaceWith(box);
  };
  const next = () => { if (/mshots/.test(img.src)) img.src = ML(); else giveUp(); };
  img.addEventListener('error', next);
  img.addEventListener('load', () => {
    if (!/mshots/.test(img.src) || img.naturalWidth > 400) return;
    if (++tries <= 3) setTimeout(() => { img.src = img.src.replace(/&t=\d+/, '') + '&t=' + Date.now(); }, 5000); else img.src = ML();
  });
  if (img.complete) img.naturalWidth ? img.dispatchEvent(new Event('load')) : next();
}

start();

/* Launch-week banner above the price: today's discount and the time left until midnight Eastern.
   Rechecked every 30 seconds, so the price drops to the next day's discount at midnight without a reload. */
let dealDay = null;
function dealBanner() {
  const el = $('#deal'); if (!el) return;
  const d = launchDeal();
  if ((d && d.day) !== dealDay) { const was = dealDay; dealDay = d && d.day; if (was !== null && designs[cur]) { const g = +designs[cur].grade || 0; $('#cmp').innerHTML = compareHtml(g, Render.priceFor(g), Render.money, { forProspect: true, deal: d }) || ''; } }
  el.innerHTML = d ? `<div role="note" style="background:#fff4ec;border:2px solid #c2410c;border-radius:12px;padding:12px 14px;margin:4px 0 12px;font-size:15px;line-height:1.45">
    <b style="color:#c2410c;font-size:17px">🎉 ${esc(dealLine(d))}</b><br><span>Time left at ${d.pct}% off: <b>${esc(timeLeft(d.msLeft))}</b>. The price below already includes today's discount.</span></div>` : '';
}
setInterval(dealBanner, 30000);

/* ---------- Buy with Interac e-Transfer → live on rezsite.com ----------
   The prospect picks a page name and address, and gets a pay code. order_shared_pitch() (Supabase) works out the
   price and today's launch discount on the server and records the order in pitch_orders; when the e-Transfer
   arrives, an admin clicks "Payment received → publish" in BAKER Admin and the site goes live at name.rezsite.com. */
const PAY_TO = 'leah@rezsite.com';
let orders = [], buyState = null, nameCheck = 0;
async function loadOrders() {
  const { data } = await sb.rpc('shared_pitch_orders', { t: token }), before = JSON.stringify(orders);
  orders = Array.isArray(data) ? data : [];
  if (JSON.stringify(orders) != before || !$('#buy').innerHTML) buyCard();   /* redraw only on change, so typing isn't interrupted */
}
/* While an order waits for its e-Transfer, check every 20 seconds, so the page shows "live" by itself. */
setInterval(() => { if (orders.some(o => o.status == 'awaiting_payment' || o.status == 'paid') && !document.hidden) loadOrders(); }, 20000);
function payBox(o) {
  const live = o.status == 'live', paid = o.status == 'paid';
  return `<div class="paybox" style="border:2px solid ${live ? '#15803d' : '#0f766e'};border-radius:14px;padding:14px 16px;margin-top:12px;background:${live ? '#f0fdf4' : '#f0fdfa'}">
    ${live ? `<b style="font-size:17px">✅ Your website is live: <a href="${esc(o.address)}" target="_blank" rel="noopener">${esc(o.address.replace('https://', '').replace(/\/$/, ''))}</a></b>`
    : paid ? `<b style="font-size:17px">💚 Payment received for ${esc(o.pay_code)}.</b><p style="margin:6px 0 0">We're putting ${esc(o.design)} live at <b>${esc(o.address.replace('https://', '').replace(/\/$/, ''))}</b> now.</p>`
    : `<b style="font-size:17px">Your pay code: <span style="font-family:ui-monospace,monospace;letter-spacing:.06em;background:#fff;border:1px solid #99d5cc;border-radius:8px;padding:2px 8px">${esc(o.pay_code)}</span></b>
      <ol style="margin:10px 0 0;padding-left:20px;line-height:1.6">
        <li>In your bank's app or website, choose <b>Interac e-Transfer</b> → <b>Send money</b>.</li>
        <li>Send <b>${Render.money(o.amount)}</b> to <b>${PAY_TO}</b> <button type="button" class="copy" data-copy="${PAY_TO}" style="font-size:13px;padding:2px 10px">Copy</button></li>
        <li>In the message, write <b>${esc(o.pay_code)}</b> <button type="button" class="copy" data-copy="${esc(o.pay_code)}" style="font-size:13px;padding:2px 10px">Copy</button> so we know it's yours.</li>
        <li>That's it. As soon as it arrives, <b>${esc(o.design)}</b> goes live at <b>${esc(o.address.replace('https://', '').replace(/\/$/, ''))}</b> automatically, usually within a few minutes. This page updates by itself.</li>
      </ol>
      <p class="hint" style="margin:8px 0 0">${o.discount_pct ? `Your launch-week price (${o.discount_pct}% off) is locked in with this code. ` : ''}No security question is needed: the money is deposited automatically.</p>`}
  </div>`;
}
function buyCard() {
  const el = $('#buy'), d = designs[cur]; if (!el || !d) return;
  const g = +d.grade || 0, reg = Render.priceFor(g), deal = launchDeal();
  const firstOpen = orders.find(o => o.status == 'awaiting_payment');   /* newest unpaid order replaces older ones */
  const mine = orders.filter(o => o.status == 'paid' || o.status == 'live' || o == firstOpen);
  if (reg == null) { el.innerHTML = '<h2>Want this design?</h2><p>Send us a message below and we\'ll quote it.</p>'; return; }
  const today = salePrice(reg, deal) || 0;
  if (!buyState) buyState = { name: suggestName(P.business_name), opt: 'free', dom: '', who: '', contact: '', open: false };
  const fee = { free: 0, connect: 100, new: 50 }[buyState.opt], total = today + fee;
  el.innerHTML = `<h2 style="margin:0 0 6px">Buy ${esc(d.name)}: pay by Interac e-Transfer</h2>
    <p style="margin:0 0 10px">Your new website goes live at <b>${esc((buyState.name || 'yourname') + '.rezsite.com')}</b> as soon as your e-Transfer arrives. No credit card, no account, no monthly fees.</p>
    ${mine.map(payBox).join('')}
    ${mine.some(o => o.status == 'awaiting_payment') && !buyState.open ? `<p style="margin:12px 0 0"><button type="button" id="buyAgain">Order a different design or name instead</button></p>` : `
    <form id="bf" style="display:grid;gap:10px;margin-top:12px">
      <label><b>1. Your page name</b> <span class="hint">(3–12 letters, numbers or hyphens)</span>
        <div style="display:flex;align-items:center;gap:6px;margin-top:4px"><input id="bn" value="${esc(buyState.name)}" maxlength="12" autocomplete="off" style="max-width:220px"><span style="font-weight:600">.rezsite.com</span></div>
        <span id="bnm" class="msg" aria-live="polite" style="font-weight:500"></span></label>
      <fieldset style="border:0;padding:0;margin:0"><legend><b>2. Your address</b></legend>
        ${[['free', 'Just the free rezsite.com address', 'Included'], ['connect', 'Also connect a domain I already have', '+$100'], ['new', 'Also register a new domain for me', '+$50 + about $15/year for the domain']].map(([k, t, f]) =>
          `<label style="display:flex;gap:8px;align-items:baseline;margin-top:6px"><input type="radio" name="bo" value="${k}" ${buyState.opt == k ? 'checked' : ''} style="width:auto"> <span>${t} <span class="hint">(${f})</span></span></label>`).join('')}
        ${buyState.opt != 'free' ? `<input id="bd" value="${esc(buyState.dom)}" placeholder="${buyState.opt == 'connect' ? 'yourbusiness.ca' : 'the domain you would like, e.g. yourbusiness.ca'}" maxlength="120" style="margin-top:8px;max-width:360px">` : ''}
        <p class="hint" style="margin:6px 0 0">Hosting is free on either address while the small “Baked with BAKE” badge shows.</p></fieldset>
      <label><b>3. Your name</b><input id="bw" value="${esc(buyState.who)}" autocomplete="name" maxlength="120"></label>
      <label><b>4. Phone or email</b> <span class="hint">(so we can tell you when it's live)</span><input id="bc" value="${esc(buyState.contact)}" maxlength="160" required></label>
      <div style="background:var(--bg,#f6f7f7);border-radius:12px;padding:10px 14px;line-height:1.6">
        ${esc(d.name)}: ${today != reg ? `<s>${Render.money(reg)}</s> ` : ''}<b>${today ? Render.money(today) : 'Free'}</b>${deal && reg ? ` <span class="hint">(${deal.pct}% launch-week discount, today only)</span>` : ''}
        ${fee ? `<br>${buyState.opt == 'connect' ? 'Connect your domain' : 'Register a new domain'}: <b>${Render.money(fee)}</b>${buyState.opt == 'new' ? ' <span class="hint">(+ the yearly domain fee, about $15, which we confirm with you)</span>' : ''}` : ''}
        <br><span style="font-size:18px">Total: <b>${Render.money(total)}</b></span></div>
      <button type="submit" class="primary" style="justify-self:start;font-size:17px;padding:12px 22px">${total ? 'Get my pay code' : 'Publish my free site'}</button>
      <p class="msg" id="bm" aria-live="polite"></p>
    </form>`}`;
  el.querySelectorAll('.copy').forEach(b => b.onclick = async () => { try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = 'Copied'; } catch (e) { b.textContent = b.dataset.copy; } });
  if ($('#buyAgain')) $('#buyAgain').onclick = () => { buyState.open = true; buyCard(); };
  const f = $('#bf'); if (!f) return;
  const keep = () => { buyState.name = $('#bn').value.trim().toLowerCase(); buyState.who = $('#bw').value; buyState.contact = $('#bc').value; if ($('#bd')) buyState.dom = $('#bd').value; };
  f.querySelectorAll('[name=bo]').forEach(r => r.onchange = () => { keep(); buyState.opt = r.value; buyCard(); });
  const check = async () => {
    const n = $('#bn').value.trim().toLowerCase(), bad = nameProblem(n), m = $('#bnm'), id = ++nameCheck;
    if (bad) { m.className = 'msg err'; m.textContent = bad; return false; }
    m.className = 'msg'; m.textContent = 'Checking…';
    const { data } = await sb.rpc('pagename_free', { p_domain: 'rezsite.com', p_name: n, t: token });
    if (id != nameCheck) return data !== false;
    m.className = data === false ? 'msg err' : 'msg ok'; m.textContent = data === false ? n + '.rezsite.com is taken. Please try another name.' : '✓ ' + n + '.rezsite.com is available';
    return data !== false;
  };
  let h; $('#bn').oninput = () => { $('#bn').value = $('#bn').value.toLowerCase().replace(/\s+/g, '-'); keep(); clearTimeout(h); h = setTimeout(check, 400); };
  if (buyState.name) check();
  f.onsubmit = async e => {
    e.preventDefault(); keep();
    if (!(await check())) { $('#bn').focus(); return; }
    if (buyState.opt != 'free' && !/^[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(buyState.dom.trim())) { $('#bm').className = 'msg err'; $('#bm').textContent = 'Please type the domain, for example yourbusiness.ca'; $('#bd').focus(); return; }
    if (buyState.contact.trim().length < 5) { $('#bm').className = 'msg err'; $('#bm').textContent = 'Please give a phone number or email.'; $('#bc').focus(); return; }
    const btn = f.querySelector('[type=submit]'); btn.disabled = true; $('#bm').className = 'msg'; $('#bm').textContent = 'One moment…';
    const { data, error } = await sb.rpc('order_shared_pitch', { t: token, pick: d.name, p_pagename: buyState.name, p_option: buyState.opt, p_own_domain: buyState.opt == 'free' ? '' : buyState.dom, p_name: buyState.who, p_contact: buyState.contact, p_message: '' });
    if (error || !data) { btn.disabled = false; $('#bm').className = 'msg err'; $('#bm').textContent = (error && error.message) || 'Sorry, that didn\'t work. Please try again.'; return; }
    buyState.open = false; await loadOrders();
    $('#buy').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
}
