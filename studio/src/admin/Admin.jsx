/* BAKER Admin (BAKE Studio BAKER → Admin, or bakeaweb.com/?v=baker#admin).
   For BAKE admins (the rezsite_admins list): every pitch with a Publish button, the studio's current work,
   and every published site. Publishing puts the site's pages on a free address:
     pagename.rezsite.com · pagename.bakedby.me · bakedbya.pro/pagename/
   (lib/publish.js uploads the files; the Cloudflare Worker in host/ serves them). */
import { useEffect, useState } from 'react';
import { S } from '../store.js';
import { Render } from '../lib/render.js';
import { sb, HOSTS, HOST_KEYS, siteUrl, nameProblem, suggestName, publishSite, unpublishSite, checkLive, fullProject, publishProject } from '../lib/publish.js';

const STATUS = { drafted: 'Drafted', offered: 'Offered', interested: 'Interested', accepted: 'Accepted', declined: 'Declined' };
const day = d => d ? new Date(d).toLocaleDateString([], { dateStyle: 'medium' }) : '';

function Login() {
  const [em, setEm] = useState(''), [pw, setPw] = useState(''), [msg, setMsg] = useState('');
  async function go(e) {
    e.preventDefault(); setMsg('');
    const { error } = await sb.auth.signInWithPassword({ email: em.trim(), password: pw });
    if (error) setMsg(error.message + ' (or use “Email me a sign-in link”)');
  }
  async function link() {
    if (!em.trim()) return setMsg('Type your email first.');
    const { error } = await sb.auth.signInWithOtp({ email: em.trim(), options: { shouldCreateUser: false, emailRedirectTo: location.href.split('#')[0] + '#admin' } });
    setMsg(error ? error.message : 'Check your email for the sign-in link.');
  }
  return <form className="card mx-auto flex max-w-md flex-col gap-3" onSubmit={go}>
    <h2 className="m-0">Sign in to Admin</h2>
    <p className="mu m-0">For BAKE admins only. Same login as the Pitches page.</p>
    <input type="email" placeholder="Email" autoComplete="username" value={em} onChange={e => setEm(e.target.value)} required />
    <input type="password" placeholder="Password" autoComplete="current-password" value={pw} onChange={e => setPw(e.target.value)} />
    <button className="pri" type="submit">Sign in</button>
    <button type="button" onClick={link}>Email me a sign-in link instead</button>
    {msg && <p className="errmsg" role="alert">{msg}</p>}
  </form>;
}

/* Choose a design, an address and a page name, then publish. */
function PublishPanel({ title, designs, pitchId, sites, onDone, defaultDomain }) {
  const [di, setDi] = useState(0), [domain, setDomain] = useState(defaultDomain || 'bakedby.me');
  const [name, setName] = useState(suggestName(title)), [busy, setBusy] = useState(false), [msg, setMsg] = useState(null);
  const d = designs[di], bad = nameProblem(name), url = siteUrl(domain, name || 'pagename');
  const taken = sites.find(s => s.domain == domain && s.pagename == name && s.status == 'live');
  async function go() {
    if (bad || !d) return;
    if (taken && (taken.pitch_id != pitchId || !pitchId) && !confirm(url + ' already shows “' + (taken.title || taken.pagename) + '”. Replace it with this site?')) return;
    setBusy(true); setMsg({ t: 'Publishing ' + (publishProject(d.project).pages.length) + ' page(s)…' });
    try {
      const row = await publishSite({ domain, name, project: d.project, tpl: d.tpl, meta: { pitch_id: pitchId, design: d.name, title } });
      setMsg({ ok: true, t: 'Published', url });
      onDone(row);
    } catch (e) { setMsg({ err: true, t: e.message }); }
    setBusy(false);
  }
  if (!designs.length) return <p className="mu">No design to publish yet.</p>;
  return <div className="mt-3 flex flex-col gap-3 rounded-xl border border-line p-3">
    {designs.length > 1 && <label className="flex flex-col gap-1"><b>Design</b>
      <select value={di} onChange={e => setDi(+e.target.value)}>{designs.map((x, i) => <option key={i} value={i}>{x.name}{x.grade ? ' · ' + x.grade + '/99' : ''}</option>)}</select></label>}
    <fieldset className="m-0 border-0 p-0"><legend className="mb-1 font-bold">Address</legend>
      <div className="flex flex-wrap gap-2">{HOST_KEYS.map(k => <button key={k} type="button" aria-pressed={domain == k} onClick={() => setDomain(k)} title={HOSTS[k].who}>{k}</button>)}</div>
      <p className="mu small">{HOSTS[domain].who}.</p></fieldset>
    <label className="flex flex-col gap-1"><b>Page name</b>
      <input value={name} maxLength={12} onChange={e => setName(e.target.value.toLowerCase().replace(/\s+/g, '-'))} aria-invalid={!!bad} aria-describedby={'pn-' + (pitchId || 'w')} />
      <span id={'pn-' + (pitchId || 'w')} className={bad ? 'errmsg' : 'mu small'}>{bad || 'Will be at ' + url}{!bad && taken ? ' (already used: publishing replaces it)' : ''}</span></label>
    <div><button className="pri" disabled={!!bad || busy} onClick={go}>{busy ? 'Publishing…' : 'Publish to ' + url.replace('https://', '')}</button></div>
    {msg && <p className={msg.err ? 'errmsg' : 'okmsg'} role="status">{msg.t}{msg.url && <> · <a href={msg.url} target="_blank" rel="noopener">{msg.url}</a></>}</p>}
  </div>;
}

function LiveBadge({ row }) {
  const [st, setSt] = useState('checking');
  useEffect(() => { let on = true; if (row.status != 'live') return; checkLive(row.domain, row.pagename).then(s => on && setSt(s)); return () => { on = false; }; }, [row.domain, row.pagename, row.status, row.published_at]);
  if (row.status != 'live') return <span className="st">Unpublished</span>;
  if (st == 'checking') return <span className="st">Checking…</span>;
  return st == 'live' ? <span className="st st-imported">Live</span>
    : <span className="st st-blocked" title="The files are uploaded. The address starts working once the Cloudflare step in host/README.md is done.">Uploaded · address not active yet</span>;
}

export default function Admin({ onClose }) {
  const [session, setSession] = useState(undefined), [admin, setAdmin] = useState(null);
  const [pitches, setPitches] = useState([]), [sites, setSites] = useState([]), [open, setOpen] = useState(null), [err, setErr] = useState('');
  useEffect(() => {
    sb.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = sb.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);
  async function load() {
    const [p, s, a] = await Promise.all([
      sb.from('redesign_pitches').select('id,business_name,website,status,rating_before,rating_after,redesigns,base_project,info,created_at').order('created_at', { ascending: false }),
      sb.from('published_sites').select('*').order('published_at', { ascending: false }),
      sb.rpc('is_rezsite_admin')
    ]);
    if (p.error || s.error) setErr((p.error || s.error).message);
    setAdmin(a.data === true); setPitches(p.data || []); setSites(s.data || []);
  }
  useEffect(() => { if (session) load(); }, [session]);
  const saved = row => setSites(list => [row, ...list.filter(x => x.id != row.id)]);
  async function takeDown(row) {
    if (!confirm('Take ' + siteUrl(row.domain, row.pagename) + ' offline? You can publish it again later.')) return;
    try { await unpublishSite(row); setSites(list => list.map(x => x.id == row.id ? { ...x, status: 'unpublished' } : x)); } catch (e) { alert('Could not unpublish: ' + e.message); }
  }
  const pitchDesigns = p => (p.redesigns || []).slice().sort((a, b) => (+b.grade || 0) - (+a.grade || 0)).map(d => ({ name: d.name, grade: d.grade, tpl: d.tpl, project: d.project || p.base_project }));
  const studioDesigns = S.tpl && S.tpl.pick ? [{ name: (Render.tpl(S.tpl.pick) || {}).name || S.tpl.pick, tpl: S.tpl.pick, project: JSON.parse(JSON.stringify(S)) }] : [];
  const live = sites.filter(s => s.status == 'live').length;

  return <div className="flex flex-col gap-2">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div><h2 className="m-0">BAKER Admin</h2><p className="mu">Every pitch and published site. Publish to a free address: <b>name.rezsite.com</b>, <b>name.bakedby.me</b> or <b>bakedbya.pro/name/</b>.</p></div>
      <div className="flex gap-2">
        {session && <button onClick={async () => { await sb.auth.signOut(); setAdmin(null); }}>Sign out</button>}
        <button onClick={onClose}>← Back to the studio</button>
      </div>
    </div>
    {session === undefined ? <p className="mu">Loading…</p> : !session ? <Login /> : <>
      {admin === false && <p className="errmsg" role="alert">{session.user.email} isn’t on the admin list, so pitches and publishing are hidden.</p>}
      {err && <p className="errmsg" role="alert">{err}</p>}

      <section className="card">
        <h3 className="m-0">Published sites <span className="mu">({live} live)</span></h3>
        {!sites.length ? <p className="mu">Nothing published yet.</p> :
          <div className="overflow-x-auto"><table className="w-full border-collapse text-sm">
            <thead><tr className="text-left">{['Site', 'Address', 'Design', 'Published', 'Status', ''].map(h => <th key={h} className="border-b border-line p-2">{h}</th>)}</tr></thead>
            <tbody>{sites.map(r => <tr key={r.id}>
              <td className="border-b border-line p-2">{r.title || r.pagename}</td>
              <td className="border-b border-line p-2"><a href={siteUrl(r.domain, r.pagename)} target="_blank" rel="noopener">{siteUrl(r.domain, r.pagename).replace('https://', '')}</a></td>
              <td className="border-b border-line p-2">{r.design || r.tpl}</td>
              <td className="border-b border-line p-2">{day(r.published_at)}</td>
              <td className="border-b border-line p-2"><LiveBadge row={r} /></td>
              <td className="border-b border-line p-2">{r.status == 'live' && <button onClick={() => takeDown(r)}>Unpublish</button>}</td>
            </tr>)}</tbody>
          </table></div>}
      </section>

      <section className="card">
        <h3 className="m-0">This studio’s current work</h3>
        <p className="mu">{studioDesigns.length ? <>“{S.biz.name || 'My site'}” in <b>{studioDesigns[0].name}</b>, {S.pages.length} page{S.pages.length == 1 ? '' : 's'}.</> : 'Pick a template in step 5 first, then come back here to publish it.'}</p>
        {studioDesigns.length > 0 && (open == 'studio'
          ? <PublishPanel title={S.biz.name || 'my site'} designs={studioDesigns} pitchId={null} sites={sites} onDone={saved} defaultDomain="bakedbya.pro" />
          : <button onClick={() => setOpen('studio')}>Publish this work…</button>)}
      </section>

      <section className="card">
        <h3 className="m-0">Pitches <span className="mu">({pitches.length})</span> <a className="small" href="pitches.html" target="_blank" rel="noopener">Open the full Pitches page ↗</a></h3>
        {!pitches.length && <p className="mu">No pitches to show.</p>}
        <ul className="m-0 list-none p-0">{pitches.map(p => {
          const pub = sites.filter(s => s.pitch_id == p.id && s.status == 'live'), ds = pitchDesigns(p);
          return <li key={p.id} className="border-t border-line py-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div><b>{p.business_name}</b> <span className="st">{STATUS[p.status] || p.status}</span>
                <span className="mu"> · {p.rating_before ?? '?'} → {p.rating_after ?? (ds[0] && ds[0].grade) ?? '?'}/99 · {ds.length} design{ds.length == 1 ? '' : 's'} · {day(p.created_at)}</span>
                {pub.map(s => <div key={s.id} className="small">Live: <a href={siteUrl(s.domain, s.pagename)} target="_blank" rel="noopener">{siteUrl(s.domain, s.pagename).replace('https://', '')}</a> ({s.design})</div>)}
              </div>
              <button aria-expanded={open == p.id} onClick={() => setOpen(open == p.id ? null : p.id)}>{open == p.id ? 'Close' : pub.length ? 'Publish again…' : 'Publish…'}</button>
            </div>
            {open == p.id && <PublishPanel title={p.business_name} designs={ds} pitchId={p.id} sites={sites} onDone={saved} defaultDomain="rezsite.com" />}
          </li>;
        })}</ul>
      </section>
    </>}
  </div>;
}
