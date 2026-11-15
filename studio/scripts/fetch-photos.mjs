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
  cafe: { name: 'Café and restaurant', q: [['hero', 'cafe interior', 'cafe|coffee shop|coffeehouse'], ['hero', 'restaurant interior', 'restaurant'], ['item', 'bread loaf', 'bread'], ['item', 'soup bowl', 'soup'], ['item', 'latte art', 'latte|coffee|cappuccino'], ['item', 'tacos', 'taco'], ['item', 'lemonade', 'lemonade'], ['item', 'friends eating together', 'eating|dinner|meal|food'], ['item', 'kneading dough', 'dough|baking'], ['item', 'pancakes breakfast', 'pancake|breakfast']] },
  trades: { name: 'Trades and services', q: [['hero', 'electrician', 'electrician|electric|electrical'], ['hero', 'construction worker', 'worker|construction|builder'], ['item', 'electrical panel', 'fuse|panel|circuit|electrical'], ['item', 'solar panels roof', 'solar'], ['item', 'electric car charging', 'charging|charger|charge'], ['item', 'tools workbench', 'tool|tools|workshop'], ['item', 'house exterior', 'house|home'], ['item', 'electrical wiring', 'wire|wiring|cable'], ['item', 'hard hat worker', 'helmet|hard hat|worker']] },
  crafts: { name: 'Arts and crafts shop', q: [['hero', 'craft fair handmade', 'craft|handmade|market'], ['hero', 'artisan workshop', 'workshop|artisan|craftsman'], ['item', 'beads', 'bead'], ['item', 'handmade jewelry', 'jewelry|jewellery|necklace|earring|bracelet'], ['item', 'quilt', 'quilt|patchwork'], ['item', 'pottery hands', 'pottery|ceramic|clay'], ['item', 'basket weaving', 'basket|weaving|wicker'], ['item', 'yarn knitting', 'yarn|knitting|wool'], ['item', 'leather craft', 'leather'], ['item', 'painting artist', 'paint|painting|artist']] },
  salon: { name: 'Hair and beauty salon', q: [['hero', 'hair salon interior', 'salon|hairdresser|barber|beauty'], ['hero', 'hairdresser styling hair', 'hair|hairdresser|stylist|salon'], ['item', 'hair coloring', 'color|colour|dye|hair'], ['item', 'manicure nails', 'nail|manicure'], ['item', 'barber haircut', 'barber|haircut|beard'], ['item', 'makeup artist', 'makeup|make-up|cosmetic'], ['item', 'eyelashes', 'eyelash|lash|eye'], ['item', 'spa massage', 'spa|massage'], ['item', 'hair care products', 'shampoo|product|cosmetic|bottle|hair'], ['item', 'braids hairstyle', 'braid|hairstyle']] },
  fitness: { name: 'Fitness and wellness', q: [['hero', 'gym interior', 'gym|fitness'], ['hero', 'group fitness class', 'fitness|class|workout|exercise|aerobics'], ['item', 'yoga class', 'yoga'], ['item', 'weightlifting', 'weight|dumbbell|barbell|lifting|kettlebell'], ['item', 'trail running', 'run|running|jogging|runner'], ['item', 'boxing training', 'box|boxing|punch|boxer'], ['item', 'stretching', 'stretch|stretching|flexibility'], ['item', 'healthy smoothie', 'smoothie|healthy|juice'], ['item', 'spin cycling class', 'cycling|spin|bike|bicycle'], ['item', 'personal trainer', 'trainer|coach|training']] },
  community: { name: 'Community organization', q: [['hero', 'community gathering outdoors', 'community|gathering|people|group|crowd'], ['hero', 'community center building', 'building|hall|center|centre|architecture'], ['item', 'volunteers', 'volunteer|volunteering|charity'], ['item', 'elders talking', 'elderly|senior|old|grandmother|grandfather'], ['item', 'community garden', 'garden|gardening|vegetables'], ['item', 'meeting discussion table', 'meeting|discussion|conference|team'], ['item', 'canoe lake', 'canoe|lake|kayak|paddle'], ['item', 'farmers market', 'market|farmers|vegetables'], ['item', 'library books', 'library|books|book'], ['item', 'soccer field', 'soccer|football|field|sport']] },
  consulting: { name: 'Consulting and professional services', q: [['hero', 'business meeting office', 'meeting|business|office|team'], ['hero', 'team discussion office', 'team|meeting|discussion|office|business'], ['item', 'presentation workshop', 'presentation|workshop|seminar|conference'], ['item', 'handshake business', 'handshake|agreement|deal'], ['item', 'coaching mentor', 'coach|coaching|mentor|consultant|consulting'], ['item', 'planning whiteboard', 'whiteboard|planning|strategy|plan'], ['item', 'contract signing documents', 'contract|document|signing|paper|signature'], ['item', 'construction plans blueprint', 'blueprint|plan|architect|construction'], ['item', 'forest aerial', 'forest|trees|aerial'], ['item', 'parliament ottawa', 'parliament|ottawa|government'], ['item', 'laptop analytics', 'analytics|chart|data|laptop'], ['item', 'office building glass', 'building|office|architecture']] },
  moving: { name: 'Moving, storage and logistics', q: [['hero', 'moving truck', 'truck|lorry|moving|van'], ['hero', 'movers carrying boxes', 'moving|mover|boxes|box|carry'], ['item', 'cardboard boxes moving', 'box|boxes|cardboard|moving'], ['item', 'packing boxes home', 'packing|box|boxes|tape'], ['item', 'warehouse storage shelves', 'warehouse|storage|shelves|logistics'], ['item', 'delivery truck highway', 'truck|highway|road|delivery'], ['item', 'piano', 'piano'], ['item', 'office furniture', 'office|desk|furniture'], ['item', 'family new home', 'home|house|family|keys']] },
  lodge: { name: 'Lodges, cabins and outdoor tourism', q: [['hero', 'lake cabin forest', 'cabin|lake|lodge|cottage'], ['hero', 'canada lake sunrise dock', 'lake|dock|sunrise|pier'], ['item', 'log cabin', 'cabin|log|cottage|hut'], ['item', 'cabin interior cozy', 'interior|cabin|room|bedroom|living'], ['item', 'fishing boat lake', 'fishing|boat|angler|fisherman'], ['item', 'canoe lake', 'canoe|kayak|paddle'], ['item', 'campfire night', 'campfire|fire|bonfire|camp'], ['item', 'pike fish', 'fish|pike|walleye|catch'], ['item', 'forest lake aerial', 'lake|forest|aerial|landscape'], ['item', 'starry sky lake', 'star|stars|night|milky'], ['item', 'deer forest', 'deer|forest|wildlife']] },
  film: { name: 'Film, video and media production', q: [['hero', 'film set camera crew', 'film|camera|movie|cinema|crew|set'], ['hero', 'cinema camera', 'camera|cinema|film|video'], ['item', 'clapperboard', 'clapper|clapperboard|film|movie'], ['item', 'movie theater audience', 'cinema|theater|theatre|audience|seats'], ['item', 'film projector', 'projector|projection|film'], ['item', 'studio lights', 'light|lights|studio|lighting'], ['item', 'video editing', 'editing|edit|video|computer|monitor'], ['item', 'boom microphone', 'microphone|mic|audio|sound|recording'], ['item', 'film reel', 'reel|film|negative|strip'], ['item', 'photographer landscape', 'photographer|camera|filming|videographer'], ['item', 'film festival red carpet', 'festival|carpet|award|premiere|event']] },
  marina: { name: 'Marinas, boating and waterfront', q: [['hero', 'marina boats aerial', 'marina|harbor|harbour|boats|port'], ['hero', 'marina sunset', 'marina|harbor|harbour|boat|sunset'], ['item', 'boat dock', 'dock|pier|jetty|boat'], ['item', 'motor boat lake', 'boat|motorboat|speedboat|lake'], ['item', 'sailboat lake', 'sailboat|sail|sailing|yacht'], ['item', 'boat lift crane', 'crane|lift|boatyard|shipyard|repair'], ['item', 'lake canada summer', 'lake|summer|water|shore'], ['item', 'fuel dock boat', 'fuel|gas|pump|dock'], ['item', 'lighthouse lake', 'lighthouse|beacon'], ['item', 'kayak rental', 'kayak|canoe|paddle'], ['item', 'boat rope cleat', 'rope|cleat|knot|mooring']] },
  print: { name: 'Custom apparel, embroidery and printing', q: [['hero', 'embroidery machine', 'embroidery|sewing|machine|stitch|thread'], ['hero', 'screen printing', 'screen|printing|print|ink|squeegee'], ['item', 'thread spools colorful', 'thread|spool|spools|yarn|sewing'], ['item', 't-shirt stack', 'shirt|shirts|t-shirt|tshirt|clothing|apparel'], ['item', 'hoodie', 'hoodie|sweatshirt|sweater'], ['item', 'baseball cap', 'cap|caps|hat|baseball'], ['item', 'hockey jersey', 'hockey|jersey|sport'], ['item', 'large format printer', 'printer|printing|print|plotter'], ['item', 'coffee mug', 'mug|cup|coffee'], ['item', 'graphic designer sketch', 'design|designer|sketch|drawing|graphic'], ['item', 'tote bag', 'bag|tote|canvas'], ['item', 'sewing workshop', 'sewing|workshop|tailor|fabric']] },
  civil: { name: 'Civil, excavation and shoreline contractors', q: [['hero', 'excavator construction site', 'excavator|construction|digger|site'], ['hero', 'concrete pour construction', 'concrete|pour|construction|cement'], ['item', 'excavator', 'excavator|digger|backhoe'], ['item', 'rebar concrete', 'rebar|reinforcement|steel|concrete'], ['item', 'retaining wall stone', 'wall|stone|retaining|rock'], ['item', 'shoreline rocks lake', 'shore|shoreline|rocks|lake|stone'], ['item', 'sewer pipe construction', 'pipe|pipes|sewer|drain|culvert'], ['item', 'construction workers hard hat', 'worker|workers|helmet|hard hat|construction'], ['item', 'dump truck', 'truck|dump|tipper'], ['item', 'pile driving', 'pile|piling|crane|foundation'], ['item', 'dredging river', 'dredge|dredging|barge|river'], ['item', 'wooden deck backyard', 'deck|terrace|wood|backyard'], ['item', 'pond wetland', 'pond|wetland|marsh|water'], ['item', 'blueprint plans', 'blueprint|plan|plans|drawing'], ['item', 'demolition', 'demolition|demolish|wrecking|rubble']] },
  pub: { name: 'Sports bars, pubs and roadside motels', q: [['hero', 'pub interior bar', 'pub|bar|tavern|interior|restaurant'], ['hero', 'restaurant patio river', 'patio|terrace|restaurant|river|outdoor'], ['item', 'burger fries', 'burger|hamburger|fries'], ['item', 'fish and chips', 'fish|chips|fried'], ['item', 'chicken wings', 'wings|chicken'], ['item', 'beer glasses', 'beer|pint|ale|lager'], ['item', 'cocktail bar', 'cocktail|drink|bar'], ['item', 'sports bar tv', 'tv|television|screen|sports|bar'], ['item', 'motel room', 'room|bed|bedroom|hotel|motel'], ['item', 'motel sign', 'motel|sign|neon|vacancy'], ['item', 'golf course', 'golf'], ['item', 'river sunset', 'river|sunset|water'], ['item', 'line dancing', 'dance|dancing|country|boots'], ['item', 'nachos', 'nachos|tortilla|chips'], ['item', 'poutine', 'poutine|fries|gravy']] },
};
/* Extra topics, fetched with "add" (keeps the photos already picked and only adds new candidates). */
const EXTRA = {
  cafe: [['item', 'catering buffet', 'catering|buffet|banquet'], ['item', 'gift box food', 'gift|box|hamper|basket'], ['item', 'jam jar', 'jam|jar|preserve'], ['item', 'fry bread', 'bread|fried|dough'], ['item', 'chili bowl', 'chili|stew|bowl'], ['item', 'iced tea', 'tea|iced|drink']],
  trades: [['item', 'home inspection', 'inspection|inspector|clipboard|checklist'], ['item', 'electrician outlet', 'outlet|socket|electrician'], ['item', 'commercial lighting', 'lighting|lights|lamp|led'], ['item', 'service van', 'van|truck|vehicle'], ['item', 'ceiling light installation', 'ceiling|light|lamp|installation']],
  crafts: [['item', 'knitted scarf', 'scarf|knit|knitted|wool'], ['item', 'beaded earrings', 'earring|bead'], ['item', 'leather bag handmade', 'leather|bag|pouch'], ['item', 'ceramic mug', 'mug|cup|ceramic'], ['item', 'handmade quilt', 'quilt|patchwork']]
};
const PER = 4;   // candidates kept per search (Claude picks the best by eye; the rest are deleted)
const ADD = process.argv[3] == 'add';
const want = (process.argv[2] || Object.keys(KINDS).join(',')).split(',').map(s => s.trim()).filter(k => KINDS[k]);

const root = new URL('../', import.meta.url);
const listFile = new URL('src/lib/photos.json', root);
const list = existsSync(listFile) ? JSON.parse(readFileSync(listFile, 'utf8')) : { source: 'Pixabay', sourceUrl: 'https://pixabay.com/', kinds: {} };
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function search(q, horizontal) {
  const base = 'https://pixabay.com/api/?key=' + encodeURIComponent(KEY) + '&q=' + encodeURIComponent(q) +
    '&image_type=photo&safesearch=true&per_page=80&min_width=1200' + (horizontal ? '&orientation=horizontal' : '');
  for (const ec of ['']) {
    const r = await fetch(base + ec);
    if (!r.ok) throw new Error('Pixabay said ' + r.status + ': ' + (await r.text()).slice(0, 200));
    const j = await r.json();
    return j.hits || [];
  }
}

for (const k of want) {
  const K = KINDS[k], dir = new URL('public/photos/' + k + '/', root), old = ADD && list.kinds[k] ? list.kinds[k].photos : [];
  if (!ADD) rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
  const seen = new Set(old.map(p => +p.id)), photos = old.slice();
  for (const [role, q, must] of (ADD ? EXTRA[k] || [] : K.q)) {
    const re = new RegExp('\\b(' + must + ')', 'i');
    const hits = (await search(q, role == 'hero')).filter(h => re.test(h.tags)).sort((a, b) => (b.likes + b.downloads / 50) - (a.likes + a.downloads / 50));
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
