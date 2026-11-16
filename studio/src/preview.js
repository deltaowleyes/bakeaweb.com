/* Prospect preview (preview.html?p=<link code>): the page a business owner opens from the link we send them.
   It shows only what get_shared_pitch() returns (business name, their site's score, what we noticed and the
   redesigns); talking points, notes and contact details stay in the private Pitches page.
   Replies go through reply_shared_pitch(), which marks the pitch "Interested". */
import { createClient } from '@supabase/supabase-js';
import { Site, pitchProject } from './lib/site.js';
import { blank } from './store.js';
import { Render } from './lib/render.js';
import { compareHtml } from './lib/compare.js';
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
  draw();
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
    <div class="stage" id="stage"><div class="frame" id="frame"><div class="sv" id="sv"><div class="pic" id="pic"></div></div><p class="wait" id="wait">Drawing the page…</p></div></div>
    <p class="hint">Every page of your new website is here: pick one above, or click a link inside the preview. Scroll inside the preview to see the whole page.${designs.length > 1 ? ' ★ = the design we think suits you best.' : ''}</p>
    <div class="card price"><h2>What this design costs, compared</h2><div id="cmp"></div>
      <p class="hint">Publishing to a free BAKE address is included. Your own domain is +$50 for a new one or +$100 to connect one you have.</p></div>
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
    $('#rm').className = 'msg ok'; $('#rm').textContent = 'Thank you! We got your message and will be in touch soon.'; e.target.querySelectorAll('input,textarea,button').forEach(x => x.disabled = true);
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
  const g = +d.grade || 0; $('#cmp').innerHTML = compareHtml(g, Render.priceFor(g), Render.money, { forProspect: true }) || '<p>Ask us about this design.</p>';
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
