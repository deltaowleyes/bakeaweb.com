/* Photo robot: downloads free sample photos from Pixabay for each kind of business, plus a credits list.
   Runs on GitHub Actions (.github/workflows/photos.yml), where the key lives as the secret PIXABAY_API_KEY.
   Usage: PIXABAY_API_KEY=… node scripts/fetch-photos.mjs [kind,kind…]
   Writes: studio/public/photos/<kind>/<id>.jpg (published with the studio) and studio/src/lib/photos.json (the list + credits).
   Pixabay rules we follow: download (no hotlinking), show where photos come from, no mass downloading
   (a few dozen photos, one request per search, with pauses). https://pixabay.com/api/docs/ */
import { mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } from 'node:fs';

const KEY = process.env.PIXABAY_API_KEY;
if (!KEY) { console.error('PIXABAY_API_KEY is missing (add it under Settings → Secrets and variables → Actions).'); process.exit(1); }

/* Each kind: searches in order; role says where a photo is meant to go (hero = wide opener, item = cards and gallery). */
const KINDS = {
  cafe: { name: 'Café and restaurant', q: [['hero', 'cafe interior'], ['hero', 'restaurant table food'], ['item', 'fresh bread bakery'], ['item', 'soup bowl'], ['item', 'latte coffee cup'], ['item', 'tacos food'], ['item', 'lemonade drink'], ['item', 'friends eating dinner'], ['item', 'baker hands dough']] },
  trades: { name: 'Trades and services', q: [['hero', 'electrician working'], ['hero', 'construction worker house'], ['item', 'electrical panel'], ['item', 'solar panels roof'], ['item', 'electric car charging'], ['item', 'tools workbench'], ['item', 'modern house exterior'], ['item', 'light bulb led']] },
  crafts: { name: 'Arts and crafts shop', q: [['hero', 'craft market stall'], ['hero', 'artisan workshop'], ['item', 'colorful beads'], ['item', 'handmade jewelry'], ['item', 'quilt fabric'], ['item', 'pottery hands'], ['item', 'weaving basket'], ['item', 'knitting yarn']] }
};
const PER = 2;   // photos kept per search
const want = (process.argv[2] || Object.keys(KINDS).join(',')).split(',').map(s => s.trim()).filter(k => KINDS[k]);

const root = new URL('../', import.meta.url);
const listFile = new URL('src/lib/photos.json', root);
const list = existsSync(listFile) ? JSON.parse(readFileSync(listFile, 'utf8')) : { source: 'Pixabay', sourceUrl: 'https://pixabay.com/', kinds: {} };
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function search(q, horizontal) {
  const base = 'https://pixabay.com/api/?key=' + encodeURIComponent(KEY) + '&q=' + encodeURIComponent(q) +
    '&image_type=photo&safesearch=true&per_page=30&min_width=1200' + (horizontal ? '&orientation=horizontal' : '');
  for (const ec of ['&editors_choice=true', '']) {   // Pixabay's hand-picked photos first, then everything
    const r = await fetch(base + ec);
    if (!r.ok) throw new Error('Pixabay said ' + r.status + ': ' + (await r.text()).slice(0, 200));
    const j = await r.json();
    if ((j.hits || []).length >= PER) return j.hits;
    await sleep(800);
  }
  return [];
}

for (const k of want) {
  const K = KINDS[k], dir = new URL('public/photos/' + k + '/', root);
  rmSync(dir, { recursive: true, force: true }); mkdirSync(dir, { recursive: true });
  const seen = new Set(), photos = [];
  for (const [role, q] of K.q) {
    const hits = (await search(q, role == 'hero')).sort((a, b) => (b.likes + b.downloads / 50) - (a.likes + a.downloads / 50));
    let kept = 0;
    for (const h of hits) {
      if (kept >= PER) break;
      if (seen.has(h.id)) continue;
      const img = await fetch(h.largeImageURL);
      if (!img.ok) continue;
      writeFileSync(new URL(h.id + '.jpg', dir), Buffer.from(await img.arrayBuffer()));
      seen.add(h.id); kept++;
      photos.push({ id: String(h.id), file: 'photos/' + k + '/' + h.id + '.jpg', role, topic: q, w: h.imageWidth, h: h.imageHeight, tags: h.tags, by: h.user, page: h.pageURL });
      await sleep(300);
    }
    console.log(k, '·', q, '→', kept);
    await sleep(800);
  }
  list.kinds[k] = { name: K.name, photos };
}
list.updated = new Date().toISOString().slice(0, 10);
writeFileSync(listFile, JSON.stringify(list, null, 1) + '\n');
console.log('Saved', want.map(k => k + ' (' + list.kinds[k].photos.length + ')').join(', '));
