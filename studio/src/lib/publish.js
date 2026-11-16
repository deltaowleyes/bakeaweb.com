/* BAKE publishing to the free addresses (ARCHITECTURE.md §9, host/README.md).
   Files go to the public Supabase Storage bucket "sites" at <domain>/<pagename>/<file>, and a row in
   published_sites records what is live. Only RezSite admins can write either (row-level security).
   The Cloudflare Worker in host/ serves them at:
     pagename.rezsite.com · pagename.bakedby.me · bakedbya.pro/pagename/ */
import { createClient } from '@supabase/supabase-js';
import { Site, pitchProject } from './site.js';
export { pitchProject };
import { completeSite } from './complete.js';
import { blank } from '../store.js';

export const sb = createClient('https://gpwxuunutljcauoknhrh.supabase.co', 'sb_publishable_B7a1VEv6RX13n2JhA50tbQ_oR_oKfw9');

export const HOSTS = {
  'rezsite.com': { label: 'rezsite.com', who: 'Free for First Nations, Métis and Inuit', style: 'sub' },
  'bakedby.me': { label: 'bakedby.me', who: 'Free for anyone', style: 'sub' },
  'bakedbya.pro': { label: 'bakedbya.pro', who: 'Baker portfolios', style: 'path' }
};
export const HOST_KEYS = Object.keys(HOSTS);
const RESERVED = new Set(['www', 'mail', 'admin', 'api', 'app', 'studio', 'assets', 'static', 'cdn', 'ftp', 'email', 'webmail', 'smtp', 'imap', 'pop']);

/** The public address of a published site. */
export function siteUrl(domain, name) {
  return HOSTS[domain] && HOSTS[domain].style == 'path' ? 'https://' + domain + '/' + name + '/' : 'https://' + name + '.' + domain + '/';
}

/** Pagename rules (VISION.md): 3–12 characters, lowercase letters, numbers and hyphens, starting with a letter. '' = fine. */
export function nameProblem(n) {
  if (!n) return 'Type a page name.';
  if (n.length < 3 || n.length > 12) return 'Use 3 to 12 characters.';
  if (!/^[a-z]/.test(n)) return 'Start with a letter.';
  if (!/^[a-z][a-z0-9-]*$/.test(n)) return 'Use only lowercase letters, numbers and hyphens.';
  if (/--|-$/.test(n)) return 'No double hyphens, and don’t end with a hyphen.';
  if (RESERVED.has(n)) return 'That name is reserved.';
  return '';
}

/** A page name suggested from a business name: "Sweet Tree Cafe" → "sweettree". */
export function suggestName(biz) {
  const words = String(biz || '').toLowerCase().normalize('NFKD').replace(/[^\w\s-]/g, '').replace(/_/g, ' ')
    .split(/\s+/).filter(w => w && !['the', 'and', 'of', 'inc', 'ltd', 'llc', 'co', 'corp'].includes(w));
  let n = '';
  for (const w of words) { if ((n + w).length > 12) break; n += w; }
  if (!n && words[0]) n = words[0].slice(0, 12);
  n = n.replace(/^[^a-z]+/, '');
  return n.length >= 3 ? n : (n + 'site').slice(0, 12);
}

/** A full studio project from stored JSON (missing keys come from blank()). */
export function fullProject(p) {
  const b = blank(), o = Object.assign(b, JSON.parse(JSON.stringify(p || {})));
  o.ui = b.ui; o.brand = Object.assign(blank().brand, o.brand || {}); o.menu = Object.assign(blank().menu, o.menu || {});
  return o;
}

/* Sample photos and other studio files are linked with the studio's own address; published pages
   must always point at https://bakeaweb.com/, even when publishing from a test copy of the studio. */
function absolute(html) {
  const base = typeof document != 'undefined' ? new URL('./', document.baseURI).href : 'https://bakeaweb.com/';
  return base == 'https://bakeaweb.com/' ? html : html.split(base).join('https://bakeaweb.com/');
}

/** The project as it will be published: a one-page pitch gets a real page for every menu entry (complete.js). */
export function publishProject(project) { return completeSite(fullProject(project)); }

/** The files of a site, ready to upload: [{ path, content }]. */
export function siteFiles(project, tpl) {
  return Site.files(publishProject(project), tpl).map(f => ({ path: f.path, content: absolute(f.content) }));
}

/** Publish (or republish) a site. Returns the published_sites row. meta: { pitch_id, design, title } */
export async function publishSite({ domain, name, project, tpl, meta = {} }) {
  if (!HOSTS[domain]) throw new Error('Unknown address: ' + domain);
  const bad = nameProblem(name); if (bad) throw new Error(bad);
  const files = siteFiles(project, tpl), dir = domain + '/' + name + '/';
  for (const f of files) {
    const { error } = await sb.storage.from('sites').upload(dir + f.path, new Blob([f.content], { type: 'text/html' }),
      { upsert: true, contentType: 'text/html; charset=utf-8', cacheControl: '60' });
    if (error) throw new Error('Uploading ' + f.path + ' failed: ' + error.message);
  }
  // remove pages left over from an earlier publish of this address
  const { data: old } = await sb.storage.from('sites').list(domain + '/' + name, { limit: 1000 });
  const keep = new Set(files.map(f => f.path)), extra = (old || []).filter(o => o.id && !keep.has(o.name)).map(o => dir + o.name);
  if (extra.length) await sb.storage.from('sites').remove(extra);
  const row = { domain, pagename: name, tpl, files: files.map(f => f.path), status: 'live', published_at: new Date().toISOString(),
    pitch_id: meta.pitch_id ?? null, design: meta.design || null, title: meta.title || fullProject(project).biz.name || null };
  const { data, error } = await sb.from('published_sites').upsert(row, { onConflict: 'domain,pagename' }).select().single();
  if (error) throw new Error('Saving the record failed: ' + error.message);
  return data;
}

/** Take a site down (its files are deleted; the record stays as "unpublished" so it can be republished). */
export async function unpublishSite(row) {
  const dir = row.domain + '/' + row.pagename + '/';
  const { data: list } = await sb.storage.from('sites').list(row.domain + '/' + row.pagename, { limit: 1000 });
  const paths = (list || []).filter(o => o.id).map(o => dir + o.name);
  if (paths.length) { const { error } = await sb.storage.from('sites').remove(paths); if (error) throw new Error(error.message); }
  const { error } = await sb.from('published_sites').update({ status: 'unpublished' }).eq('id', row.id);
  if (error) throw new Error(error.message);
}

/** Is the address answering from BAKE Host yet? 'live' | 'waiting' (the Cloudflare step isn't done) */
export async function checkLive(domain, name) {
  try {
    const r = await fetch(siteUrl(domain, name) + '?check=' + Date.now(), { mode: 'cors', cache: 'no-store' });
    return r.headers.get('x-bake-site') ? 'live' : 'waiting';
  } catch (e) { return 'waiting'; }
}
