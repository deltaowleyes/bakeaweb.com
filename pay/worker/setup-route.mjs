/* Points the Email Routing rule for leah@rezsite.com at the bake-pay Worker (run by the BAKE Host workflow after deploy).
   Needs the Cloudflare token to include "Zone · Email Routing Rules · Edit". If it doesn't, it prints the
   2-minute dashboard steps instead (pay/README.md) and the workflow still succeeds. Safe to run again. */
const T = process.env.CLOUDFLARE_API_TOKEN, ADDRESS = 'leah@rezsite.com', WORKER = 'bake-pay';
const api = async (path, init = {}) => { const r = await fetch('https://api.cloudflare.com/client/v4' + path, { ...init, headers: { authorization: 'Bearer ' + T, 'content-type': 'application/json' } }); return r.json(); };
const manual = why => { console.log('::warning::Could not switch ' + ADDRESS + ' to the bake-pay Worker automatically (' + why + '). Do the dashboard step in pay/README.md (Routing rules → ' + ADDRESS + ' → Edit → Send to a Worker → bake-pay).'); process.exit(0); };
const z = await api('/zones?name=rezsite.com'); const zone = z.result && z.result[0]; if (!zone) manual('zone not found');
const rules = await api('/zones/' + zone.id + '/email/routing/rules?per_page=50');
if (!rules.success) manual((rules.errors || []).map(e => e.message).join('; ') || 'no permission to read routing rules');
const rule = rules.result.find(r => (r.matchers || []).some(m => m.field == 'to' && String(m.value).toLowerCase() == ADDRESS));
const body = { name: 'leah@ → bake-pay (forwards to Gmail + e-Transfer payments)', enabled: true, matchers: [{ type: 'literal', field: 'to', value: ADDRESS }], actions: [{ type: 'worker', value: [WORKER] }] };
if (rule && (rule.actions || []).some(a => a.type == 'worker' && (a.value || []).includes(WORKER))) { console.log(ADDRESS + ' already goes to ' + WORKER + '.'); process.exit(0); }
const res = rule ? await api('/zones/' + zone.id + '/email/routing/rules/' + rule.id, { method: 'PUT', body: JSON.stringify(body) })
                 : await api('/zones/' + zone.id + '/email/routing/rules', { method: 'POST', body: JSON.stringify(body) });
if (!res.success) manual((res.errors || []).map(e => e.message).join('; '));
console.log(ADDRESS + ' now goes to the ' + WORKER + ' Worker (which forwards everything to Leah\'s Gmail).');
