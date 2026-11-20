/* BAKE Callers (callers.html): the ONE page a caller (Leah, Brandee…) needs.
   Sign in with email + password (or an emailed sign-in link). Shows only the signed-in caller's own
   assigned calls for the day, in sort_order, with tips, an outcome form and their totals.
   All data goes through Supabase functions (security definer, checked against rezsite_callers):
     caller_me()                      → {id, name, email, rate} or null if this login isn't a caller
     caller_calls(p_day)              → that caller's call_assignments for the day (+ business details, verified_at)
     caller_business(p_id) / caller_update_business(p_id, p, p_verify, p_note) → full listing + edit/verify (Listing.jsx)
     caller_lock(p_id) / caller_unlock(p_id)   → lock a business while on the call (20-minute lock)
     caller_save(p_id, p jsonb, p_unlock)      → save the outcome (also mirrored onto rezsite_businesses)
     caller_totals()                  → assigned / called / interested / paid / commission */
import { StrictMode, useEffect, useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { createClient } from '@supabase/supabase-js';
import './callers.css';
import Script from './Script.jsx';
import Listing, { siteUrl, openSite } from './Listing.jsx';

const sb = createClient('https://gpwxuunutljcauoknhrh.supabase.co', 'sb_publishable_B7a1VEv6RX13n2JhA50tbQ_oR_oKfw9');

const OUTCOMES = [
  ['no_answer', 'No answer'], ['left_message', 'Voicemail left'], ['call_back', 'Call back later'],
  ['interested', 'Interested (yes to free designs)'], ['not_interested', 'Not interested'],
  ['wrong_number', 'Wrong number'], ['closed', 'Business closed'], ['do_not_call', 'Do not call again'],
  ['deleted', '🗑 Delete (bad website / no voicemail, not worth calling back)']
];
const OUT = Object.fromEntries(OUTCOMES);
const INTEREST = [['hot', 'Hot'], ['warm', 'Warm'], ['cold', 'Cold'], ['none', 'None']];
const money = n => '$' + (+n || 0).toLocaleString('en-CA', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const today = () => new Date().toLocaleDateString('en-CA', { timeZone: 'America/Toronto' });   // YYYY-MM-DD, Eastern
const addDays = (d, n) => { const x = new Date(d + 'T12:00:00'); x.setDate(x.getDate() + n); return x.toISOString().slice(0, 10); };
const nice = d => new Date(d + 'T12:00:00').toLocaleDateString('en-CA', { weekday: 'long', month: 'long', day: 'numeric' });

/** Earliest Eastern time to call, so nobody is called before 9 AM their time. */
function callFrom(province = '', city = '') {
  const p = province.toLowerCase();
  if (/british columbia|^bc$/.test(p)) return /golden|fort st\.? john/i.test(city) ? '11:00 AM' : '12:00 PM';
  if (/alberta|northwest|^ab$|^nt$/.test(p)) return '11:00 AM';
  if (/yukon/.test(p)) return '12:00 PM';
  if (/manitoba|saskatchewan|nunavut|^mb$|^sk$/.test(p)) return '10:00 AM';
  return '9:00 AM';
}

/** Tips written by Chris, or a simple starter tip from what we know about the business. */
/** Large firms (est_tier 'Large', custom builds of $10,000+) get a badge and the bigger-firm price line. */
const big = c => c.est_tier === 'Large' || /10,000\+/.test(c.est_package || '');
const real = v => v && !/^[-–—\s]*$/.test(v) ? v : '';
function tipsFor(c) {
  if (c.tips) return c.tips;
  const t = [];
  if (!c.website) t.push('No website on file: offer to build them their first one (3 free designs).');
  else t.push('Have their website open while you talk (link above) so you can mention one thing you noticed.');
  if (real(c.category)) t.push('Business type: ' + c.category + '.');
  if (real(c.community)) t.push('Community: ' + c.community + '. Don\'t say they\'re Indigenous-owned unless they say so.');
  return t.join('\n');
}

function Login() {
  const [em, setEm] = useState(''), [pw, setPw] = useState(''), [msg, setMsg] = useState(''), [busy, setBusy] = useState(false);
  const signIn = async e => {
    e.preventDefault(); setBusy(true); setMsg('');
    const { error } = await sb.auth.signInWithPassword({ email: em.trim(), password: pw });
    setBusy(false);
    if (error) setMsg(error.message === 'Invalid login credentials' ? 'That email and password don\'t match. Check for typos (passwords are case-sensitive).' : error.message);
  };
  const link = async () => {
    if (!em.trim()) return setMsg('Type your email first.');
    const { error } = await sb.auth.signInWithOtp({ email: em.trim(), options: { shouldCreateUser: false, emailRedirectTo: location.href.split('#')[0] } });
    setMsg(error ? error.message : 'Check your email (and Junk folder) for the sign-in link.');
  };
  return (
    <form onSubmit={signIn} className="max-w-md mx-auto mt-16 bg-white border border-line rounded-2xl p-7 grid gap-3">
      <h1 className="text-2xl font-bold m-0">BAKE Callers</h1>
      <p className="text-mute m-0">Sign in to see today's call list.</p>
      <label className="grid gap-1 font-semibold">Email<input className="inp" type="email" autoComplete="username" value={em} onChange={e => setEm(e.target.value)} required /></label>
      <label className="grid gap-1 font-semibold">Password<input className="inp" type="password" autoComplete="current-password" value={pw} onChange={e => setPw(e.target.value)} required /></label>
      <button className="btn" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
      <button type="button" className="btn2" onClick={link}>Email me a sign-in link instead</button>
      <p className="text-warn min-h-6 m-0">{msg}</p>
    </form>
  );
}

function Totals({ t, rate }) {
  if (!t) return null;
  const box = (k, v) => <div className="bg-white border border-line rounded-xl px-4 py-2"><div className="text-xs uppercase tracking-wider text-mute">{k}</div><div className="text-xl font-bold">{v}</div></div>;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-5">
      {box('Assigned', t.assigned)}{box('Called', t.called)}{box('Interested', t.interested)}
      {box('Paid by your clients', money(t.paid))}{box('Your commission' + (rate ? ' (' + Math.round(rate * 100) + '%)' : ''), money(t.commission))}
    </div>
  );
}

function CallForm({ c, onDone, onCancel }) {
  const [f, setF] = useState({
    outcome: c.outcome || '', interest: c.interest || '', next_step: c.next_step || '', call_notes: c.call_notes || '',
    contact_person: c.contact_person || '', contact_email: c.contact_email || '', has_logo: !!c.has_logo, has_photos: !!c.has_photos,
    pages_wanted: c.pages_wanted || '', designs_due: c.designs_due || ''
  });
  const [err, setErr] = useState(''), [busy, setBusy] = useState(false);
  const set = k => e => setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  const yes = f.outcome === 'interested', del = f.outcome === 'deleted';
  const save = async e => {
    e.preventDefault();
    if (!f.outcome) return setErr('Pick an outcome first.');
    if (yes && (!f.contact_person.trim() || !f.contact_email.trim())) return setErr('For a yes, fill in the contact person and their email so Chris can send the designs.');
    setBusy(true); setErr('');
    const { error } = await sb.rpc('caller_save', { p_id: c.id, p: f, p_unlock: true });
    setBusy(false);
    if (error) return setErr(error.message);
    onDone(yes);
  };
  const L = 'grid gap-1 text-sm font-semibold';
  return (
    <form onSubmit={save} className="mt-4 grid gap-3 border-t border-line pt-4">
      <div className="grid sm:grid-cols-2 gap-3">
        <label className={L}>Outcome *<select className="inp" value={f.outcome} onChange={set('outcome')}><option value="">Choose…</option>{OUTCOMES.map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></label>
        <label className={L}>Interest<select className="inp" value={f.interest} onChange={set('interest')}><option value="">Choose…</option>{INTEREST.map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></label>
      </div>
      {del && <p className="m-0 text-sm bg-rose-50 border border-rose-200 rounded-xl p-3">This business comes off your call list for good and won't be given to anyone again. Its RezSite listing stays. Add a quick note below on why (e.g. "site broken, voicemail not set up").</p>}
      <label className={L}>Next step<input className="inp" placeholder='e.g. "Call back Tue 2pm, ask for Kyle"' value={f.next_step} onChange={set('next_step')} /></label>
      {yes && (
        <div className="grid gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-3">
          <b>They said yes! Collect these:</b>
          <div className="grid sm:grid-cols-2 gap-3">
            <label className={L}>Contact person *<input className="inp" value={f.contact_person} onChange={set('contact_person')} /></label>
            <label className={L}>Their email *<input className="inp" type="email" value={f.contact_email} onChange={set('contact_email')} /></label>
          </div>
          <div className="flex gap-5 text-sm font-semibold">
            <label className="flex gap-2 items-center"><input type="checkbox" checked={f.has_logo} onChange={set('has_logo')} /> They'll send a logo</label>
            <label className="flex gap-2 items-center"><input type="checkbox" checked={f.has_photos} onChange={set('has_photos')} /> They'll send photos</label>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <label className={L}>Pages they want<input className="inp" placeholder="Home, Menu, Contact…" value={f.pages_wanted} onChange={set('pages_wanted')} /></label>
            <label className={L}>Designs due (1–2 business days)<input className="inp" type="date" value={f.designs_due} onChange={set('designs_due')} /></label>
          </div>
        </div>
      )}
      <label className={L}>Notes<textarea className="inp" rows="2" value={f.call_notes} onChange={set('call_notes')} /></label>
      {err && <p className="text-warn m-0">{err}</p>}
      <div className="flex gap-2"><button className="btn" disabled={busy}>{busy ? 'Saving…' : 'Save call'}</button><button type="button" className="btn2" onClick={onCancel}>Cancel</button></div>
    </form>
  );
}

function CallCard({ c, me, open, setOpen, reload }) {
  const [msg, setMsg] = useState(''), [script, setScript] = useState(false);
  const lockedByOther = c.locked_by_name && !c.locked_by_me;
  const start = async () => {
    setMsg('');
    const { data, error } = await sb.rpc('caller_lock', { p_id: c.id });
    if (error) return setMsg(error.message);
    if (!data.ok) return setMsg('Locked by ' + data.locked_by + ' right now.');
    setOpen(c.id); reload();
  };
  const cancel = async () => { await sb.rpc('caller_unlock', { p_id: c.id }); setOpen(null); reload(); };
  const done = yes => { setOpen(null); setMsg(yes ? 'Saved. Now message Chris so the designs get started!' : 'Saved.'); reload(); };
  return (
    <article className={'bg-white border rounded-2xl p-4 sm:p-5 ' + (open ? 'border-acc ring-2 ring-acc/30' : 'border-line') + (c.outcome && !open ? ' opacity-75' : '')}>
      <div className="flex flex-wrap gap-3 justify-between items-start">
        <div className="min-w-0">
          <div className="text-sm text-mute font-semibold">#{c.sort_order} · Call from {callFrom(c.province, c.city)} ET{c.carried_over ? ' · carried over' : ''}</div>
          <h2 className="text-xl font-bold m-0">{c.name}</h2>
          <div className="text-mute text-sm">{[c.city, c.province].filter(Boolean).join(', ')}{real(c.category) ? ' · ' + c.category : ''}</div>
        </div>
        <div className="flex flex-col items-end gap-1">
          {c.outcome === 'deleted' ? <span className="text-sm font-bold bg-rose-100 text-rose-900 rounded-full px-3 py-1">🗑 Deleted</span>
            : c.outcome ? <span className="text-sm font-bold bg-emerald-100 text-emerald-900 rounded-full px-3 py-1">✓ {OUT[c.outcome]}</span>
            : <span className="text-sm font-bold bg-amber-100 text-amber-900 rounded-full px-3 py-1">To call</span>}
          {c.verified_at && <span className="text-sm font-bold bg-emerald-600 text-white rounded-full px-3 py-1" title={'Verified by ' + (c.verified_by || '')}>✓ Listing verified</span>}
          {big(c) && <span className="text-sm font-extrabold bg-violet-700 text-white rounded-full px-3 py-1" title={c.est_package || ''}>💼 $10K+ firm</span>}
          {c.locked_by_name && <span className="text-xs text-mute">🔒 {c.locked_by_me ? 'You are on this call' : c.locked_by_name + ' is on this call'}</span>}
        </div>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-base">
        {c.phone && <a className="font-bold text-acc text-lg" href={'tel:' + c.phone.replace(/[^\d+]/g, '')}>📞 {c.phone}</a>}
        {c.website && <a className="text-acc underline break-all" href={siteUrl(c.website)} target="_blank" rel="noopener">{c.website.replace(/^https?:\/\//, '')}</a>}
        {c.website && <a className="btn2 !py-1 !px-3 text-sm no-underline" href={siteUrl(c.website)} target="_blank" rel="noopener" onClick={e => openSite(c.website, e)}>🌐 Open website in new window ↗</a>}
        {c.website && open && <a className="btn !py-1 !px-3 text-sm no-underline" href={'taste.html?biz=' + c.business_id} target="bake-taste" rel="noopener" title="Rate this business's website 1–99 on BAKE Taste while you're on the call (BAKE admins)">⭐ Rate their site's taste ↗</a>}
      </div>
      {big(c) && <div className="mt-3 bg-violet-50 border border-violet-300 rounded-xl p-3 text-sm"><b>Bigger firm: don't quote $50–$250.</b> If they ask about price, say: <i>"For a bigger site, Chris quotes it after you've seen the designs, and the half-price offer still applies."</i></div>}
      <div className="mt-3 bg-paper rounded-xl p-3 text-sm whitespace-pre-line"><b>Tips: </b>{tipsFor(c)}</div>
      {c.next_step && !open && <div className="mt-2 text-sm"><b>Next step:</b> {c.next_step}</div>}
      {msg && <p className="text-acc font-semibold mt-2 mb-0">{msg}</p>}
      {open && <div className="mt-3 flex flex-wrap items-center gap-3"><button className="btn" onClick={() => setScript(true)}>📄 View script</button><span className="text-sm text-mute">Opening, offer, voicemail, prices and objections, with this business's name filled in.</span></div>}
      {script && <Script c={c} me={me} onClose={() => setScript(false)} />}
      {open && <Listing sb={sb} c={c} onVerified={reload} />}
      {open ? <CallForm c={c} onDone={done} onCancel={cancel} />
        : <div className="mt-3"><button className={c.outcome ? 'btn2' : 'btn'} disabled={lockedByOther} onClick={start}>{c.outcome ? 'Update this call' : 'Start call'}</button></div>}
    </article>
  );
}

function App() {
  const [session, setSession] = useState(undefined), [me, setMe] = useState(undefined);
  const [day, setDay] = useState(today()), [calls, setCalls] = useState(null), [totals, setTotals] = useState(null);
  const [open, setOpen] = useState(null), [hideDone, setHideDone] = useState(false), [err, setErr] = useState(''), [script, setScript] = useState(false);

  useEffect(() => {
    sb.auth.getSession().then(({ data }) => setSession(data.session));
    // Supabase fires this on every token refresh and every time the tab gets focus again (e.g. coming back
    // from the business's website window). Only react when the signed-in PERSON changes; otherwise the whole
    // call list reloaded, the open listing was rebuilt and everything typed during the call was lost (Nov 19).
    const { data } = sb.auth.onAuthStateChange((_e, s) => setSession(old => (old?.user?.id === s?.user?.id && old !== undefined ? old : s)));
    return () => data.subscription.unsubscribe();
  }, []);
  const uid = session?.user?.id;
  useEffect(() => { if (uid) sb.rpc('caller_me').then(({ data, error }) => { setErr(error ? error.message : ''); setMe(old => (old && data && old.id === data.id ? old : data || null)); }); }, [uid]);

  const reload = useCallback(async () => {
    const [a, b] = await Promise.all([sb.rpc('caller_calls', { p_day: day }), sb.rpc('caller_totals')]);
    if (a.error) setErr(a.error.message); else { setErr(''); setCalls((a.data || []).sort((x, y) => x.sort_order - y.sort_order)); }
    if (!b.error) setTotals(b.data);
  }, [day]);
  const meId = me?.id;
  useEffect(() => { if (meId) { reload(); const t = setInterval(() => { if (!document.hidden) reload(); }, 60000); return () => clearInterval(t); } }, [meId, reload]);

  if (session === undefined) return null;
  if (!session) return <Login />;
  const out = async () => { await sb.auth.signOut(); location.reload(); };
  const header = (
    <header className="bg-ink text-white sticky top-0 z-10 px-4 sm:px-6 py-3 flex justify-between items-center gap-3">
      <b className="text-lg">BAKE Callers{me ? ' · ' + me.name : ''}</b>
      <span className="flex items-center gap-2 sm:gap-3">{me && <button className="rounded-lg px-3 py-1.5 font-semibold bg-white text-ink whitespace-nowrap" onClick={() => setScript(true)}>📄 Script</button>}<small className="opacity-70 hidden sm:inline">{session.user.email}</small><button className="rounded-lg px-3 py-1.5 font-semibold ring-1 ring-white/50 whitespace-nowrap" onClick={out}>Sign out</button></span>
    </header>
  );
  if (me === undefined) return header;
  if (!me) return <>{header}<p className="max-w-xl mx-auto mt-12 text-center">This login isn't set up as a caller yet. Ask Chris to add <b>{session.user.email}</b> to the callers list.{err && <><br /><small className="text-warn">{err}</small></>}</p></>;

  // Deleted calls drop off the list right away (they're never carried over or re-queued either).
  const list = (calls || []).filter(c => c.id === open || (c.outcome !== 'deleted' && (!hideDone || !c.outcome)));
  const left = (calls || []).filter(c => !c.outcome).length;
  return (
    <>
      {header}
      {script && <Script c={{ general: true, name: '[business name]' }} me={me} onClose={() => setScript(false)} />}
      <main className="max-w-3xl mx-auto p-4 sm:p-6">
        <Totals t={totals} rate={+me.rate} />
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <button className="btn2" onClick={() => setDay(addDays(day, -1))} aria-label="Previous day">‹</button>
          <b className="text-lg">{day === today() ? 'Today, ' : ''}{nice(day)}</b>
          <button className="btn2" onClick={() => setDay(addDays(day, 1))} aria-label="Next day">›</button>
          {day !== today() && <button className="btn2" onClick={() => setDay(today())}>Back to today</button>}
          <label className="ml-auto flex items-center gap-2 text-sm font-semibold"><input type="checkbox" checked={hideDone} onChange={e => setHideDone(e.target.checked)} /> Hide finished calls</label>
        </div>
        {calls && <p className="text-mute mt-0">{calls.length} calls on your list · {left} still to call. Work from the top down; press <b>Start call</b> before you dial. New? Read the <button className="text-acc font-semibold underline" onClick={() => setScript(true)}>call script</button> first.</p>}
        {err && <p className="text-warn">{err}</p>}
        {calls === null ? <p>Loading your calls…</p>
          : !calls.length ? <p className="bg-white border border-line rounded-2xl p-6 text-center">No calls assigned to you for this day.</p>
          : <div className="grid gap-4">{list.map(c => <CallCard key={c.id} c={c} me={me} open={open === c.id} setOpen={setOpen} reload={reload} />)}</div>}
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
