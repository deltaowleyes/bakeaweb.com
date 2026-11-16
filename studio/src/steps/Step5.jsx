/* Step 5: Templates. Browse templates that fit, preview any page at any size, pick one, request development. */
import { useEffect, useState } from 'react';
import { Render } from '../lib/render.js';
import { compare, CHECKED } from '../lib/compare.js';
import { Shot } from '../lib/shot.js';
import { S, commit, useStudio, useRev, startOver } from '../store.js';
import { nid, SEC } from '../edit.js';
import { edition, DESTS, DEST_KEYS } from '../editions.js';
import Preview, { SizeButtons } from '../components/Preview.jsx';


/* "How the price compares": a comparable template at Framer/Webflow and a comparable agency build (lib/compare.js). */
function Compare({ t, full }) {
  const c = compare(t.grade, t.price); if (!c) return null;
  return (
    <div className="cmp" data-testid="cmp">
      <p className="m-0"><span className="mu">Template elsewhere:</span> <b>{c.tpl.label}</b>{full && <span className="mu"> ({c.tpl.what})</span>}</p>
      <p className="m-0"><span className="mu">Agency:</span> <b>{c.agency.label}</b>{full && <span className="mu"> ({c.agency.what})</span>}</p>
      {full && <details><summary>Where these numbers come from (checked {CHECKED})</summary><ul>{c.sources.map(s => <li key={s.url}><a href={s.url} target="_blank" rel="noopener">{s.name}</a>: {s.says}</li>)}</ul><p className="mu">Template prices are US dollars, agency prices Canadian dollars. Published ranges, not quotes.</p></details>}
    </div>
  );
}

/* Thumbnails are made one after another (Home page, 1280 px wide, cropped to 960 px, half scale, JPEG). */
function PublishCard() {
  useStudio();
  const st = edition(S), pn = S.req.pagename || '';
  const dests = DEST_KEYS.concat(st.markets ? ['portfolio'] : []);
  const dk = dests.includes(S.req.dest) ? S.req.dest : 'bakedby';
  const d = dk == 'portfolio' ? { host: 'bakedbya.pro' } : DESTS[dk];
  const ok = /^[a-z][a-z0-9-]{2,11}$/.test(pn);
  const addr = dk == 'own' ? 'your own domain (for example yourname.com)' : d.host + '/' + (pn || 'yourname');
  return (
    <div className="card" id="pubc"><h3>Publish ({st.full})</h3>
      <p className="mu">Choose where your site will live. You can design first and decide here.</p>
      <div className="dests" role="radiogroup" aria-label="Where your site will live">
        {dests.map(k => (
          <label key={k}><input type="radio" name="dest" value={k} checked={dk == k} onChange={() => commit(S => { S.req.dest = k; })} />
            <span><b>{k == 'portfolio' ? 'bakedbya.pro (portfolio)' : DESTS[k].name}</b><br /><span className="mu small">{k == 'portfolio' ? 'For Bakers: portfolio pieces, published as screenshots with every link and menu clickable.' : DESTS[k].blurb}</span></span>
          </label>
        ))}
      </div>
      {dk != 'own' && <>
        <label htmlFor="pname">Your page name</label>
        <input id="pname" value={pn} placeholder="sunrise" maxLength={12} aria-describedby="pnhelp"
          onChange={e => commit(S => { S.req.pagename = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 12); })} />
        <p id="pnhelp" className={pn && !ok ? 'errmsg' : 'mu small'}>{pn && !ok ? 'Use 3 to 12 lowercase letters, numbers or hyphens, starting with a letter.' : '3 to 12 lowercase letters, numbers or hyphens, starting with a letter.'}</p>
      </>}
      <p>Your site’s address: <b>https://{addr}</b></p>
      {dk == 'rezsite' && <p className="mu small">You’ll state your Nation or community, and your page goes live right away. BAKE takes no share on premium items for RezSite sites, so they cost less.</p>}
      <p className="mu small">One-click publishing turns on when accounts arrive. Until then, use Request development below and we’ll publish it for you.</p>
    </div>
  );
}

function useThumbs(ids) {
  const rev = useRev(), [urls, setUrls] = useState({}), key = ids.join(',');
  useEffect(() => {
    let live = true; const list = ids.slice(), home = S.pages[0] && S.pages[0].id;
    (function next() {
      if (!live || !list.length) return;
      const id = list.shift();
      Shot.take(Render.page(S, id, { pageId: home }), 1280, { maxH: 960, scale: .5, type: 'image/jpeg' })
        .then(r => { if (live) setUrls(u => (u[id] == r.url ? u : Object.assign({}, u, { [id]: r.url }))); }).catch(() => { }).then(next);
    })();
    return () => { live = false; };
  }, [rev, key]); // eslint-disable-line react-hooks/exhaustive-deps
  return urls;
}

/* The variant of a design shown on its card: the picked template if it's in this family, else the visitor's choice, else the best-rated variant. */
function variantOf(d) {
  if (S.tpl.pick && d.variants.some(t => t.id == S.tpl.pick)) return Render.tpl(S.tpl.pick);
  const k = (S.tpl.vk || {})[d.k], v = d.variants.find(t => t.v.k == k);
  return v || d.variants.slice().sort((a, b) => b.grade - a.grade)[0];
}

/* Classic / Soft / Crisp: the small differences between versions of one design (corners, colour bands, spacing). */
function Variants({ d, cur, onPick }) {
  if (d.variants.length < 2) return null;
  return (
    <div className="vrow" role="radiogroup" aria-label={'Style of ' + d.name}>
      {d.variants.map(t => (
        <button key={t.id} role="radio" aria-checked={cur.id == t.id} className={'vb' + (cur.id == t.id ? ' on' : '')} title={Render.VARIANT_HINTS[t.v.k]}
          onClick={e => { e.stopPropagation(); onPick(t); }}>{t.v.name}</button>
      ))}
    </div>
  );
}

export default function Step5() {
  useStudio();
  const all = Render.designsFor(S).map(x => Object.assign(x, { c: Render.compat(x.d.variants[0], S) })), ok = all.filter(x => x.c.ok);
  const CUR = all.filter(x => (S.tpl.all || x.c.ok) && (!S.tpl.favOnly || x.d.variants.some(t => S.tpl.fav[t.id])));
  if (!S.pages.some(p => p.id == S.ui.tpage)) S.ui.tpage = S.pages[0] && S.pages[0].id;
  if (!S.tpl.view || !Render.tpl(S.tpl.view).offered && S.tpl.view != S.tpl.pick) S.tpl.view = S.tpl.pick || variantOf((ok[0] || all[0]).d).id;
  const shown = CUR.map(x => variantOf(x.d));
  const thumbs = useThumbs(shown.map(t => t.id));
  const [note, setNote] = useState(''), [msg, setMsg] = useState(null);

  const vt = Render.tpl(S.tpl.view), vc = Render.compat(vt, S), picked = S.tpl.pick == vt.id;
  const vd = Render.DESIGNS.find(d => d.fam === vt.fam);
  function view(id) { commit(S => { S.tpl.view = id; }); document.getElementById('tpc').scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  function choose(d, t) { commit(S => { S.tpl.vk = Object.assign({}, S.tpl.vk, { [d.k]: t.v.k }); if (S.tpl.view && Render.tpl(S.tpl.view).fam === t.fam) S.tpl.view = t.id; if (S.tpl.pick && Render.tpl(S.tpl.pick).fam === t.fam) S.tpl.pick = t.id; }); }
  function step(dir) {
    const L = (CUR.length ? CUR : all).map(x => x.d);
    let ix = L.findIndex(d => d.fam === vt.fam); ix = (ix + dir + L.length) % L.length;
    commit(S => { S.tpl.view = variantOf(L[ix]).id; });
  }
  function request() {
    const nm = S.req.name.trim(), em = S.req.email.trim(), nt = note.trim();
    if (!S.tpl.pick) return setMsg({ bad: true, text: 'Pick a template first: preview one above and click “Use this template”.' });
    if (!nm) { setMsg({ bad: true, text: 'Enter your name.' }); return document.getElementById('rname').focus(); }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) { setMsg({ bad: true, text: 'Enter a valid email address so we can reach you.' }); return document.getElementById('remail').focus(); }
    commit(S => {
      S.req = { name: nm, email: em, pagename: S.req.pagename || '' };
      S.notes.unshift({ id: nid('n'), at: Date.now(), name: nm, email: em, text: nt, tpl: S.tpl.pick, edition: S.edition, dest: S.req.dest || 'bakedby', pagename: S.req.pagename || '', status: 'Requested', summary: { sections: SEC().map(x => x.title || x.type), menu: S.menu.items.map(m => m.label) } });
    });
    setNote(''); setMsg({ bad: false, text: 'Request saved. We’ll be in touch at ' + em + '.' });
  }

  return (
    <section className="step" aria-labelledby="h5s">
      <h2 id="h5s" className="sth">5. Templates</h2>
      <div className="card">
        <div className="bar">
          <div className="flex-1 min-w-[220px]"><h3>{ok.length} of {all.length} designs fit your site</h3><p className="mu">Best match for your kind of business first (we read the words on your site), then by rating. Each design is shown once: pick <b>Classic</b>, <b>Soft</b> or <b>Crisp</b> on its card for the small differences (corners, colour bands, spacing). Fonts and colours are yours to change in the editor. Prices follow each version’s rating out of 99: 74 and lower free, then $50 at 75 rising to $500 at 90. Each one also shows what a comparable template costs at Framer or Webflow and what an agency charges, with sources.</p></div>
          <label className="ck"><input type="checkbox" checked={!!S.tpl.all} onChange={e => commit(S => { S.tpl.all = e.target.checked; })} /> Show designs that don’t fit</label>
          <label className="ck"><input type="checkbox" checked={!!S.tpl.favOnly} onChange={e => commit(S => { S.tpl.favOnly = e.target.checked; })} /> Favourites only</label>
        </div>
        <div className="tg">
          {CUR.length ? CUR.map(({ d, c, m, tier }, i) => {
            const t = shown[i], on = S.tpl.pick == t.id, fav = !!S.tpl.fav[t.id];
            return (
              <article key={d.k} className={'tc' + (on ? ' sel' : '') + (c.ok ? '' : ' no')} data-design={d.k}>
                <div className="tw" role="button" tabIndex={0} aria-label={'Preview ' + t.name} onClick={() => view(t.id)} onKeyDown={e => { if (e.key == 'Enter' || e.key == ' ') { e.preventDefault(); view(t.id); } }}>
                  <img alt={'Screenshot of ' + t.name} src={thumbs[t.id] || undefined} />
                </div>
                <div className="tb">
                  <h4>{d.name}{on && <span className="chip on">Picked</span>}</h4>
                  {tier == 2 && <p className="match">Good match: {m.hits.slice(0, 3).join(', ')}</p>}
                  <Variants d={d} cur={t} onPick={v => choose(d, v)} />
                  <p className="tpr"><span className="chip" title="Rating out of 99">{t.grade}/99</span> <span className={'chip' + (t.price ? ' pay' : ' free')}>{Render.priceLabel(t)}</span></p>
                  <Compare t={t} />
                  <p className="mu">{d.fam.desc}</p>
                  {!c.ok && <p className="why">Doesn’t fit: {c.why.join('; ')}.</p>}
                  <div className="row">
                    <button onClick={() => view(t.id)}>Preview</button>
                    <button aria-pressed={fav} onClick={() => commit(S => { S.tpl.fav[t.id] = !fav; })}>{fav ? '♥ Favourite' : '♡ Favourite'}</button>
                  </div>
                </div>
              </article>
            );
          }) : <p className="mu">No designs to show. Try turning off “Favourites only”, or tick “Show designs that don’t fit”.</p>}
        </div>
      </div>

      <div className="card" id="tpc">
        <div className="bar">
          <div className="flex-1 min-w-[200px]"><h3>{vt.name} <span className="chip">{vt.grade}/99</span> <span className={'chip' + (vt.price ? ' pay' : ' free')}>{Render.priceLabel(vt)}</span></h3><p className="mu">{picked ? 'This is your picked template.' : vt.fam.desc + (vc.ok ? '' : ' Doesn’t fit: ' + vc.why.join('; ') + '.')}</p>{vd && <Variants d={vd} cur={vt} onPick={t => choose(vd, t)} />}<Compare t={vt} full /></div>
          <button aria-label="Previous design" onClick={() => step(-1)}>←</button>
          <button aria-label="Next design" onClick={() => step(1)}>→</button>
          <button className={picked ? '' : 'pri'} aria-pressed={picked} onClick={() => commit(S => { S.tpl.pick = S.tpl.view; })}>{picked ? 'Picked' : 'Use this template'}</button>
        </div>
        <div className="bar mt-2.5">
          <label htmlFor="tpage" className="m-0">Page</label>
          <select id="tpage" className="w-auto max-w-full" value={S.ui.tpage || ''} onChange={e => commit(S => { S.ui.tpage = e.target.value; })}>
            {S.pages.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
        </div>
        <SizeButtons k="tvp" onPick={v => commit(S => { S.ui.tvp = v; })} />
        <Preview vp={S.ui.tvp} opt={{ tpl: vt.id, pageId: S.ui.tpage }} />
      </div>

      <PublishCard />

      <div className="card" id="reqc"><h3>Request development</h3>
        <p className="mu">Happy with your choices? Send them to us and we’ll build your site. Add anything you’d like changed.</p>
        <div className="g2">
          <div><label htmlFor="rname">Your name</label><input id="rname" autoComplete="name" value={S.req.name} onChange={e => commit(S => { S.req.name = e.target.value; })} /></div>
          <div><label htmlFor="remail">Email</label><input id="remail" type="email" autoComplete="email" value={S.req.email} onChange={e => commit(S => { S.req.email = e.target.value; })} /></div>
        </div>
        <label htmlFor="note">Notes for changes (optional)</label>
        <textarea id="note" rows={4} value={note} onChange={e => setNote(e.target.value)} placeholder="For example: make the hero image bigger and add our phone number to the menu." />
        <p className="mu">{S.tpl.pick ? 'Template: ' + Render.tpl(S.tpl.pick).name + '.' : 'Pick a template above (Use this template) before requesting development.'}</p>
        {msg && <p className={msg.bad ? 'errmsg' : 'okmsg'} role="alert">{msg.text}</p>}
        <div className="row"><button className="pri" onClick={request}>Request development</button></div>
        {S.notes.length > 0 && <h4>Your requests</h4>}
        <ul className="notes">
          {S.notes.map((n, i) => (
            <li key={n.id || i}>
              <div><b>{n.status || 'Requested'}</b> · {new Date(n.at).toLocaleString()} · {Render.tpl(n.tpl).name}{n.name ? ' · ' + n.name : ''}{n.text ? '\n' + n.text : ''}</div>
              <button className="ib" aria-label="Cancel request" onClick={() => commit(S => { S.notes.splice(i, 1); })}>✕</button>
            </li>
          ))}
        </ul>
        <p className="mu small">Requests are saved in this browser for now. Once Supabase is connected, they’ll be sent to us automatically.</p>
      </div>
      <p className="mu mt-4"><button onClick={() => { if (confirm('Start over? This clears everything saved in this browser.')) startOver(); }}>Start over</button></p>
    </section>
  );
}
