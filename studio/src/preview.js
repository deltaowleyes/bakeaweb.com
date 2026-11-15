/* Prospect preview (preview.html?p=<link code>): the page a business owner opens from the link we send them.
   It shows only what get_shared_pitch() returns (business name, their site's score, what we noticed and the
   redesigns); talking points, notes and contact details stay in the private Pitches page.
   Replies go through reply_shared_pitch(), which marks the pitch "Interested". */
import { createClient } from '@supabase/supabase-js';
import { Site } from './lib/site.js';
import { blank } from './store.js';

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
  const after = P.rating_after || designs.reduce((m, d) => Math.max(m, +d.grade || 0), 0);
  app.innerHTML = `
    <p class="score">Design score <span class="b">${esc(P.rating_before ?? '?')}/99 today</span> → <span class="a">${esc(after)}/99 redesigned</span></p>
    <h1>A fresh website for ${esc(P.business_name)}</h1>
    <p class="lead">We made ${designs.length == 1 ? 'a free redesign' : designs.length + ' free redesigns'} of your website so you can see what's possible, with no commitment.
      Pick a design below and try it on a computer or a phone. Photos labelled “Sample photo” are placeholders that we swap for your own.</p>
    <div class="bar"><div class="tabs" role="tablist">${designs.map((d, i) => `<button data-i="${i}" aria-pressed="${i == cur}">${i == 0 && designs.length > 1 ? '★ ' : ''}${esc(d.name)}</button>`).join('')}</div>
      <div class="dev">${Object.keys(DEV).map(k => `<button data-d="${k}" aria-pressed="${k == dev}">${k[0].toUpperCase() + k.slice(1)}</button>`).join('')}</div></div>
    <div class="stage" id="stage"><div class="frame" id="frame"><iframe id="f" title="Website preview" sandbox="allow-same-origin"></iframe></div></div>
    <p class="hint">Scroll inside the preview to see the whole page.${designs.length > 1 ? ' ★ = the design we think suits you best.' : ''}</p>
    <div class="grid">
      <div class="card before"><h2>Your website today</h2>
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
function mark(sel, on) { app.querySelectorAll(sel).forEach(x => x.setAttribute('aria-pressed', x == on)); }

function show() {
  const d = designs[cur]; if (!d) return;
  $('#f').srcdoc = Site.html(project(d.project || P.base_project), d.tpl);
  fit();
}
function fit() {
  const st = $('#stage'), fr = $('#frame'), f = $('#f'); if (!st) return;
  const [w, h] = DEV[dev], room = st.clientWidth - parseFloat(getComputedStyle(st).paddingLeft) * 2, s = Math.min(1, room / w);
  const vh = Math.min(h, Math.max(480, innerHeight - 160));
  fr.style.width = Math.floor(w * s) + 'px'; fr.style.height = vh + 'px';
  f.style.width = w + 'px'; f.style.height = Math.ceil(vh / s) + 'px'; f.style.transform = 'scale(' + s + ')';
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
