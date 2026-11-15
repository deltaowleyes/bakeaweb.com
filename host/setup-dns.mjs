/* BAKE Host: one-time DNS setup on Cloudflare (run by .github/workflows/host.yml, safe to run again).
   For each free domain: a proxied wildcard record (*) so any pagename.domain reaches the Worker,
   the plain domain proxied (so bakedbya.pro/pagename/ reaches the Worker), and SSL mode "Full"
   (needed for GitHub Pages behind Cloudflare). Needs CLOUDFLARE_API_TOKEN. */
const T = process.env.CLOUDFLARE_API_TOKEN;
const DOMAINS = ['rezsite.com', 'bakedby.me', 'bakedbya.pro'];
const api = async (path, opt = {}) => {
  const r = await fetch('https://api.cloudflare.com/client/v4' + path, { ...opt, headers: { Authorization: 'Bearer ' + T, 'Content-Type': 'application/json' } });
  const j = await r.json();
  if (!j.success) throw new Error(path + ': ' + JSON.stringify(j.errors));
  return j.result;
};
let bad = 0;
for (const d of DOMAINS) {
  try {
    const [z] = await api('/zones?name=' + d);
    if (!z) { console.log('✗ ' + d + ': not in this Cloudflare account yet (step 1 of host/README.md)'); bad++; continue; }
    console.log('• ' + d + ': zone status ' + z.status + (z.status != 'active' ? ' (waiting for the nameserver change to finish)' : ''));
    const recs = await api('/zones/' + z.id + '/dns_records?per_page=500');
    const wild = recs.find(r => r.name == '*.' + d);
    if (!wild) { await api('/zones/' + z.id + '/dns_records', { method: 'POST', body: JSON.stringify({ type: 'A', name: '*', content: '192.0.2.1', proxied: true, ttl: 1, comment: 'BAKE Host: every pagename goes to the Worker' }) }); console.log('  + added wildcard *.' + d); }
    else if (!wild.proxied && ['A', 'AAAA', 'CNAME'].includes(wild.type)) { await api('/zones/' + z.id + '/dns_records/' + wild.id, { method: 'PATCH', body: JSON.stringify({ proxied: true }) }); console.log('  ~ proxied wildcard *.' + d); }
    else console.log('  ✓ wildcard *.' + d);
    for (const r of recs.filter(r => (r.name == d || r.name == 'www.' + d) && ['A', 'AAAA', 'CNAME'].includes(r.type) && !r.proxied)) {
      await api('/zones/' + z.id + '/dns_records/' + r.id, { method: 'PATCH', body: JSON.stringify({ proxied: true }) }); console.log('  ~ proxied ' + r.type + ' ' + r.name);
    }
    await api('/zones/' + z.id + '/settings/ssl', { method: 'PATCH', body: JSON.stringify({ value: 'full' }) }); console.log('  ✓ SSL mode Full');
  } catch (e) { console.log('✗ ' + d + ': ' + e.message); bad++; }
}
if (bad) { console.log('\nSome domains are not ready. See host/README.md.'); process.exitCode = 1; }
