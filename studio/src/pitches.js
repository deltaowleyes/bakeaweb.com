/* BAKE Pitch Book (pitches.html): PRIVATE before/after redesigns for real businesses.
   The page code is public, but the data is not: it lives in the Supabase table redesign_pitches,
   which only RezSite admins (rezsite_admins) can read or change (row-level security).
   Their photos are links to their own website, never copies. */
import { createClient } from '@supabase/supabase-js';
import { Site } from './lib/site.js';
import { Render } from './lib/render.js';
import { blank, KEY, addPoint } from './store.js';

const sb = createClient('https://gpwxuunutljcauoknhrh.supabase.co', 'sb_publishable_B7a1VEv6RX13n2JhA50tbQ_oR_oKfw9');
const $ = s => document.querySelector(s);
const app = $('#app');
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const STATUS = { drafted: 'Drafted', offered: 'Offered', interested: 'Interested', accepted: 'Accepted', declined: 'Declined' };
let rows = [], filt = { status: '', q: '' };

/** A full studio project from what is stored (missing keys come from blank()). */
function project(p) {
  const b = blank(), o = Object.assign(b, JSON.parse(JSON.stringify(p || {})));
  o.ui = b.ui; o.brand = Object.assign(blank().brand, o.brand || {}); o.menu = Object.assign(blank().menu, o.menu || {});
  return o;
}
const pageHtml = (row, d) => Site.html(project(d.project || row.base_project), d.tpl);

async function start() {
  const { data } = await sb.auth.getSession();
  if (!data.session) return login();
  $('#who').innerHTML = '<small>' + esc(data.session.user.email) + '</small> <button class="btn2" id="out">Sign out</button>';
  $('#out').onclick = async () => { await sb.auth.signOut(); location.reload(); };
  const r = await sb.from('redesign_pitches').select('*').order('created_at', { ascending: false });
  if (r.error) { app.innerHTML = '<p class="empty">Could not load pitches: ' + esc(r.error.message) + '</p>'; return; }
  rows = r.data || [];
  if (!rows.length) { app.innerHTML = '<p class="empty">No pitches yet, or this login is not a RezSite admin.</p>'; return; }
  draw();
}

function login() {
  app.innerHTML = `<form class="login" id="lf"><h2 style="margin:0">Sign in</h2>
    <p class="note" style="margin:0">For BAKE admins only. Use the same login as the RezSite admin pages.</p>
    <input type="email" id="em" placeholder="Email" autocomplete="username" required>
    <input type="password" id="pw" placeholder="Password" autocomplete="current-password">
    <button type="submit">Sign in</button>
    <button type="button" class="btn2" id="link">Email me a sign-in link instead</button>
    <p class="msg" id="msg"></p></form>`;
  $('#lf').onsubmit = async e => {
    e.preventDefault(); $('#msg').textContent = '';
    const { error } = await sb.auth.signInWithPassword({ email: $('#em').value.trim(), password: $('#pw').value });
    if (error) $('#msg').textContent = error.message + ' (or use “Email me a sign-in link”)'; else location.reload();
  };
  $('#link').onclick = async () => {
    const email = $('#em').value.trim(); if (!email) { $('#msg').textContent = 'Type your email first.'; return; }
    const { error } = await sb.auth.signInWithOtp({ email, options: { shouldCreateUser: false, emailRedirectTo: location.href.split('#')[0] } });
    $('#msg').textContent = error ? error.message : 'Check your email for the sign-in link.';
  };
}

function draw() {
  const list = rows.filter(r => (!filt.status || r.status == filt.status) && (!filt.q || (r.business_name + ' ' + (r.website || '')).toLowerCase().includes(filt.q)));
  app.innerHTML = `<div class="filters"><b>${rows.length} pitch${rows.length == 1 ? '' : 'es'}</b>
    <select id="fs"><option value="">All statuses</option>${Object.entries(STATUS).map(([k, v]) => `<option value="${k}"${filt.status == k ? ' selected' : ''}>${v}</option>`).join('')}</select>
    <input id="fq" placeholder="Search name or site" value="${esc(filt.q)}"></div>` + list.map(card).join('');
  $('#fs').onchange = e => { filt.status = e.target.value; draw(); };
  $('#fq').oninput = e => { filt.q = e.target.value.toLowerCase(); clearTimeout(draw.t); draw.t = setTimeout(() => { draw(); const q = $('#fq'); q.focus(); q.setSelectionRange(q.value.length, q.value.length); }, 300); };
  app.querySelectorAll('.after').forEach(el => {
    const r = rows.find(x => x.id == el.dataset.p), d = r.redesigns[+el.dataset.i], f = el.querySelector('iframe'), fr = el.querySelector('.frame');
    f.srcdoc = pageHtml(r, d); const fit = () => { const s = fr.clientWidth / 1280; f.style.width = '1280px'; f.style.height = Math.ceil(420 / s) + 'px'; f.style.transform = 'scale(' + s + ')'; }; fit(); new ResizeObserver(fit).observe(fr);
    el.querySelector('.big').onclick = () => open(r, d);
    el.querySelector('.studio').onclick = () => toStudio(r, d);
  });
  app.querySelectorAll('img.bshot').forEach(watchShot);
  app.querySelectorAll('.save').forEach(b => b.onclick = async () => {
    const box = b.closest('.pitch'), r = rows.find(x => x.id == box.dataset.p);
    const upd = { status: box.querySelector('.st').value, notes: box.querySelector('.nt').value };
    const { error } = await sb.from('redesign_pitches').update(upd).eq('id', r.id);
    box.querySelector('.saved').textContent = error ? 'Not saved: ' + error.message : 'Saved'; if (!error) Object.assign(r, upd);
  });
}

function card(r) {
  const i = r.info || {}, contact = [['Phone', i.phone], ['Email', i.email], ['Address', i.address], ['Hours', i.hours], ['Category', i.category], ['Community', i.community]].filter(x => x[1]);
  const best = (r.redesigns || []).reduce((m, d) => Math.max(m, +d.grade || 0), 0);
  return `<section class="pitch" data-p="${r.id}"><div class="ph"><div><h2>${esc(r.business_name)}</h2>
    <a href="${esc(r.website)}" target="_blank" rel="noopener">${esc(r.website)}</a>${r.run ? ' · run ' + r.run : ''} · ${new Date(r.created_at).toLocaleDateString()}</div>
    <span class="score">Design <span class="b">${r.rating_before ?? '?'}/99</span> → <span class="a">${r.rating_after ?? best}/99</span></span></div>
    <div class="cols"><div class="before"><h3 style="margin-top:0">Before (their site today)</h3>
      <a href="${esc(r.website)}" target="_blank" rel="noopener"><img class="bshot" data-url="${esc(r.website)}" src="${esc(r.before_shot)}" alt="Screenshot of ${esc(r.business_name)}'s current site" loading="lazy"></a>
      ${r.before_notes ? '<h3>What we found</h3><ul>' + r.before_notes.split('\n').filter(Boolean).map(l => '<li>' + esc(l.replace(/^[-•]\s*/, '')) + '</li>').join('') + '</ul>' : ''}
      ${contact.length ? '<h3>Their details</h3><div class="info">' + contact.map(c => '<div><b>' + c[0] + ':</b> ' + esc(c[1]) + '</div>').join('') + '</div>' : ''}
      ${(r.photos || []).length ? '<h3>Their photos (links to their site)</h3><div class="info">' + r.photos.map(p => '<div><a href="' + esc(p.src) + '" target="_blank" rel="noopener">' + esc(p.what || p.src) + '</a></div>').join('') + '</div>' : ''}
    </div><div><h3 style="margin-top:0">After (our redesigns)</h3><div class="afters">${(r.redesigns || []).map((d, k) => `<div class="after" data-p="${r.id}" data-i="${k}">
      <div class="frame"><iframe title="${esc(d.name)}" loading="lazy" sandbox="allow-same-origin"></iframe></div>
      <div class="bar"><div><b>${esc(d.name)}</b> <span>${d.grade ? d.grade + '/99' : ''}</span>${priceChip(d)}</div><div class="acts"><button class="big">Full view</button><button class="btn2 studio">Open in studio</button></div></div></div>`).join('')}</div>
      ${r.pitch ? '<h3>Talking points for the call</h3><p class="talk">' + esc(r.pitch) + '</p>' : ''}
      <div class="edit"><select class="st">${Object.entries(STATUS).map(([k, v]) => `<option value="${k}"${r.status == k ? ' selected' : ''}>${v}</option>`).join('')}</select>
      <textarea class="nt" rows="2" placeholder="Notes (who you spoke to, what they said)">${esc(r.notes || '')}</textarea><div><button class="save">Save</button> <span class="saved"></span></div></div>
    </div></div></section>`;
}

/* Before screenshots come from WordPress's free mshots service, which first answers with a small
   "Generating preview" picture (400 px wide). Retry it a few times, then fall back to Microlink's screenshot. */
function watchShot(img) {
  let tries = 0;
  const check = () => {
    if (!img.naturalWidth || img.naturalWidth > 400 || !/mshots/.test(img.src)) return;
    if (++tries <= 4) { setTimeout(() => { img.src = img.src.replace(/&t=\d+/, '') + '&t=' + Date.now(); }, 5000); return; }
    img.src = 'https://api.microlink.io/?url=' + encodeURIComponent(img.dataset.url) + '&screenshot=true&meta=false&embed=screenshot.url';
  };
  img.addEventListener('load', check); if (img.complete) check();
}
/* Price from a redesign's grade (1–99), same bands as the studio. */
function priceChip(d) { const p = Render.priceFor(+d.grade || 0); return p == null ? '' : ' <span>· ' + (p ? '$' + p : 'Free') + '</span>'; }

let cur = null;
function open(r, d) { cur = d; $('#dlgT').textContent = r.business_name + ' · ' + d.name; size(1280); $('#dlgF').srcdoc = pageHtml(r, d); $('#dlg').showModal(); }
function size(w) { $('#dlgF').style.width = Math.min(w, innerWidth * .96 - 4) + 'px'; }
document.querySelectorAll('#dlg [data-w]').forEach(b => b.onclick = () => size(+b.dataset.w));
$('#dlgX').onclick = () => $('#dlg').close();

/* Load a redesign into the studio on this browser (a save point keeps the work that was there). */
function toStudio(r, d) {
  addPoint('Before opening a pitch');
  const p = project(d.project || r.base_project); p.tpl.pick = d.tpl; p.step = 5;
  try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) { alert('Not enough browser storage to open it.'); return; }
  location.href = './?v=pro#step-5';
}

start();
