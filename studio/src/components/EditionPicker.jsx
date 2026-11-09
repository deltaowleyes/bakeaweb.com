/* Choose the Studio (editions.js): BAKE Studio PRO or BAKE Studio BAKER. Cards in step 1; a compact menu in the header.
   The BAKER Studio also shows the Markets area (placeholder until accounts and the markets exist). */
import { S, commit, useStudio } from '../store.js';
import { STUDIOS, STUDIO_KEYS, MARKETS, normStudio } from '../editions.js';

function pick(k) {
  commit(S => { S.edition = k; });
  try { const u = new URL(location.href); u.searchParams.set('v', k); history.replaceState(null, '', u); } catch (e) { /* ignore */ }
}

export function MarketsCard() {
  return (
    <div className="card" id="markets">
      <h3>Markets</h3>
      <p className="mu">Coming soon. Practise here any time; an administrator approves a Baker before they can bid or sell. You can’t use other Bakers’ premium items in your own work.</p>
      <div className="eds" role="list" aria-label="Markets">
        {MARKETS.map(m => (
          <div key={m.k} role="listitem" className="mk"><b>{m.name}</b><span>{m.blurb}</span><span className="soon">Coming soon</span></div>
        ))}
      </div>
    </div>
  );
}

export function EditionCards() {
  useStudio();
  const cur = normStudio(S.edition);
  return (
    <>
      <div className="card">
        <h3>Which Studio?</h3>
        <p className="mu">You can switch any time. Where your site lives (bakedby.me, rezsite.com or your own domain) is chosen when you publish.</p>
        <div className="eds" role="group" aria-label="BAKE Studio">
          {STUDIO_KEYS.map(k => (
            <button key={k} aria-pressed={cur == k} onClick={() => pick(k)}>
              <b>{STUDIOS[k].full}</b><span>{STUDIOS[k].who}</span><span>{STUDIOS[k].blurb}</span>
            </button>
          ))}
        </div>
      </div>
      {STUDIOS[cur].markets && <MarketsCard />}
    </>
  );
}

export function EditionMenu() {
  useStudio();
  return (
    <label className="ed"><span className="mu small" style={{ margin: 0 }}>Studio</span>
      <select value={normStudio(S.edition)} onChange={e => pick(e.target.value)} aria-label="BAKE Studio">
        {STUDIO_KEYS.map(k => <option key={k} value={k}>{STUDIOS[k].name}</option>)}
      </select>
    </label>
  );
}
