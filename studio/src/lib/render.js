import { Art } from './art.js';
import photoList from './photos.json';
/* BAKE Studio: turn a project into a web page (used for previews; data-sec / data-ii / data-fk attributes let Shot map where things land) */
var Render = (function () {
  var esc = Art.esc;
  var SECTION_TYPES = {
    hero: 'Hero banner', tiles: 'Card grid', feature: 'Featured story', list: 'Link list', text: 'Text block',
    stats: 'Numbers', gallery: 'Gallery', testimonial: 'Quotes', cta: 'Call to action', contact: 'Contact details',
    videos: 'Video gallery', podcast: 'Podcasts / audio', pagehead: 'Page header',
    menu: 'Menu with prices', booking: 'Booking and service area', products: 'Products with prices'
  };
  var MENU_TYPES = {
    bar: { name: 'Links bar', desc: 'Links in a row. Groups open as dropdowns.', vps: ['desktop', 'tablet'] },
    mega: { name: 'Mega menu', desc: 'Main links plus one big panel showing every group.', vps: ['desktop'] },
    split: { name: 'Split with centred logo', desc: 'Logo in the middle, links on both sides.', vps: ['desktop', 'tablet'] },
    hamburger: { name: 'Menu button', desc: 'A single Menu button that opens the full list.', vps: ['desktop', 'tablet', 'phone'] },
    bottom: { name: 'Bottom tab bar', desc: 'App-style tabs at the bottom of the screen.', vps: ['tablet', 'phone'] }
  };

  var FAMILIES = [
    { k: 'news', videos: 'lead', name: 'Newsroom', desc: 'Newspaper rules, serif headlines and a big lead story.', hero: 'editorial', tiles: 'rule', feature: 'wide', menus: ['bar', 'mega', 'split', 'hamburger'] },
    { k: 'app', videos: 'grid', name: 'App grid', desc: 'Rounded tiles you can tap, like a phone home screen.', hero: 'split', tiles: 'app', feature: 'card', menus: ['bar', 'mega', 'split', 'hamburger'] },
    { k: 'mag', videos: 'row', name: 'Magazine', desc: 'Full-width photo opener and a mixed-size card mosaic.', hero: 'overlay', tiles: 'bento', feature: 'split', menus: ['bar', 'mega', 'hamburger'] },
    { k: 'min', videos: 'grid', name: 'Minimal', desc: 'Lots of white space, centred text and simple lists.', hero: 'center', tiles: 'list', feature: 'split', menus: ['bar', 'split', 'hamburger'], no: ['gallery'] },
    { k: 'bold', videos: 'row', name: 'Bold blocks', desc: 'Strong colour bands and icon cards.', hero: 'band', tiles: 'icons', feature: 'wide', menus: ['bar', 'mega', 'hamburger'], bands: true },
    { k: 'portal', videos: 'lead', name: 'Community portal', desc: 'A dark welcome panel with search-style shortcuts.', hero: 'portal', tiles: 'icons', feature: 'card', menus: ['mega', 'bar', 'hamburger'] },
    { k: 'story', videos: 'lead', name: 'Storyteller', desc: 'Photo-led, long-form pages for telling a story.', hero: 'overlay', tiles: 'cards', feature: 'split', menus: ['split', 'bar', 'hamburger'], maxTiles: 6 },
    { k: 'board', videos: 'grid', name: 'Notice board', desc: 'Compact, two-column lists for lots of links.', hero: 'none', tiles: 'cols', feature: 'card', menus: ['mega', 'bar'], need: ['list', 'tiles'] }
,
    /* 2026-11-14: ten designer families. gf = the family's own Google Fonts (used unless the site picks fonts in the Inspector);
       dark = shown on a dark background made from the palette; img = cards show pictures by default. */
    { k: 'tide', videos: 'grid', name: 'Tide', desc: 'Airy and rounded: a floating menu, a big soft hero panel and pill buttons.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], gf: { h: 'Fraunces', hcat: 'r', hw: 600, b: 'Inter', bcat: 's' } },
    { k: 'ember', wordmark: 1, videos: 'lead', name: 'Ember', desc: 'Dark and warm, like a candle-lit dining room. Elegant serif type and a menu-style list.', hero: 'overlay', tiles: 'cols', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], dark: 1, gf: { h: 'Playfair Display', hcat: 'r', hw: 600, b: 'Karla', bcat: 's' } },
    { k: 'folio', videos: 'lead', name: 'Folio', desc: 'A fashion-magazine look: giant headlines, numbered sections and fine rules.', hero: 'editorial', tiles: 'rule', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], gf: { h: 'Instrument Serif', hcat: 'r', hw: 400, b: 'Inter Tight', bcat: 's' } },
    { k: 'block', videos: 'grid', name: 'Block party', desc: 'Bold outlines, hard shadows and loud colour. Impossible to ignore.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], gf: { h: 'Space Grotesk', hcat: 's', hw: 700, b: 'Space Grotesk', bcat: 's' } },
    { k: 'bento', videos: 'grid', name: 'Bento', desc: 'Everything sits in neat rounded panels, like a tidy lunch box.', hero: 'split', tiles: 'bento', feature: 'card', menus: ['bar', 'mega', 'split', 'hamburger'], gf: { h: 'Manrope', hcat: 's', hw: 800, b: 'Inter', bcat: 's' } },
    { k: 'craft', videos: 'grid', name: 'Handmade', desc: 'Warm and crafted: arched pictures, stitched cards and a scalloped edge.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, gf: { h: 'Young Serif', hcat: 'r', hw: 400, b: 'Nunito Sans', bcat: 's' } },
    { k: 'glow', wordmark: 1, videos: 'grid', name: 'Glow', desc: 'Dark and modern with soft coloured light and glowing buttons.', hero: 'center', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], dark: 2, gf: { h: 'Sora', hcat: 's', hw: 700, b: 'Inter', bcat: 's' } },
    { k: 'swiss', videos: 'grid', name: 'Swiss grid', desc: 'Strict grid, huge type and section labels in their own column.', hero: 'editorial', tiles: 'rule', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], gf: { h: 'Archivo', hcat: 's', hw: 800, b: 'Archivo', bcat: 's' } },
    { k: 'retro', videos: 'row', name: 'Sunny retro', desc: 'A cheerful 70s feel: chunky type, stripes and a sunburst.', hero: 'center', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], gf: { h: 'Bricolage Grotesque', hcat: 's', hw: 800, b: 'DM Sans', bcat: 's' } },
    { k: 'lens', videos: 'row', name: 'Lens', desc: 'Photo first: a full-screen opener, picture cards and an edge-to-edge gallery.', hero: 'overlay', tiles: 'cards', feature: 'wide', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, gf: { h: 'Outfit', hcat: 's', hw: 600, b: 'Outfit', bcat: 's' } },
    /* 2026-11-14 flagships: one per industry, photo-led, with gentle motion (see "Flagship families" in site.css) */
    { k: 'hearth', wordmark: 1, videos: 'lead', name: 'Hearth', desc: 'Flagship for cafés and restaurants: a full-screen food photo, a menu with prices and a warm, elegant feel.', hero: 'overlay', tiles: 'menu', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Cormorant Garamond', hcat: 'r', hw: 600, b: 'Jost', bcat: 's' } },
    { k: 'volt', wordmark: 1, videos: 'grid', name: 'Volt', desc: 'Flagship for trades and services: bold and trustworthy, with service cards, big numbers and a strong call to book.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Barlow Condensed', hcat: 's', hw: 700, b: 'Barlow', bcat: 's' } },
    { k: 'loom', wordmark: 1, videos: 'grid', name: 'Loom', desc: 'Flagship for makers and craft shops: a product grid, an arched hero and a hand-stitched feel.', hero: 'split', tiles: 'shop', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'DM Serif Display', hcat: 'r', hw: 400, b: 'Work Sans', bcat: 's' } },
    { k: 'bloom', wordmark: 1, videos: 'grid', name: 'Bloom', desc: 'Flagship for salons and beauty: elegant type, a price list, a booking card and a lookbook gallery.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Bodoni Moda', hcat: 'r', hw: 500, b: 'Manrope', bcat: 's' } },
    { k: 'pulse', wordmark: 1, videos: 'grid', name: 'Pulse', desc: 'Flagship for gyms and fitness: dark, loud and full of energy, with a class schedule and memberships.', hero: 'overlay', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, dark: 2, gf: { h: 'Anton', hcat: 's', hw: 400, b: 'Inter', bcat: 's' } },
    { k: 'commons', wordmark: 1, videos: 'grid', name: 'Commons', desc: 'Flagship for community organizations and band offices: clear, welcoming and easy to read, with notices and programs.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Merriweather', hcat: 'r', hw: 700, b: 'Source Sans 3', bcat: 's' } },
    /* 2026-11-14 Indigenous business series, run 1: consulting and professional services firms */
    { k: 'council', wordmark: 1, videos: 'grid', name: 'Council', desc: 'For consulting firms that work with government: formal, credible and easy to scan, with credentials up front.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Libre Baskerville', hcat: 'r', hw: 700, b: 'IBM Plex Sans', bcat: 's' } },
    { k: 'meridian', wordmark: 1, videos: 'grid', name: 'Meridian', desc: 'For modern consultancies: a dark, confident opener, glowing step cards and services that read like a pitch deck.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Plus Jakarta Sans', hcat: 's', hw: 800, b: 'Plus Jakarta Sans', bcat: 's' } },
    { k: 'bridge', wordmark: 1, videos: 'grid', name: 'Bridge', desc: 'For people-first firms: warm photography, a step-by-step timeline and a welcoming, human tone.', hero: 'overlay', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Lora', hcat: 'r', hw: 600, b: 'Figtree', bcat: 's' } },
    /* 2026-11-14 Indigenous business series, run 2: movers, storage and logistics */
    { k: 'convoy', wordmark: 1, videos: 'grid', name: 'Convoy', desc: 'For movers and trucking: loud condensed type, road-stripe accents, big numbers and a quote button that never leaves the screen.', hero: 'overlay', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Barlow Condensed', hcat: 's', hw: 800, b: 'Barlow', bcat: 's' } },
    { k: 'homeward', wordmark: 1, videos: 'grid', name: 'Homeward', desc: 'For family movers: friendly and reassuring, with rounded photos, a three-step moving plan and a quote card up front.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Nunito', hcat: 's', hw: 800, b: 'Nunito Sans', bcat: 's' } },
    { k: 'freight', mono: 'IBM Plex Mono', wordmark: 1, videos: 'grid', name: 'Freight', desc: 'For logistics, storage and delivery firms: a blueprint grid, data-style numbers and services laid out like a shipping manifest.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Space Grotesk', hcat: 's', hw: 700, b: 'IBM Plex Sans', bcat: 's' } },
    /* 2026-11-14 Indigenous business series, run 3: lodges, cabins and outdoor tourism */
    { k: 'timber', wordmark: 1, videos: 'grid', name: 'Timber', desc: 'For northern lodges and fishing camps: deep forest colours, slab-serif type, a full-screen lake photo and cabin rates like a trail sign.', hero: 'overlay', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, dark: 1, gf: { h: 'Zilla Slab', hcat: 'r', hw: 700, b: 'Source Sans 3', bcat: 's' } },
    { k: 'shoreline', wordmark: 1, videos: 'grid', name: 'Shoreline', desc: 'For lake resorts and cottages: light and calm, elegant italic headings, a wave under the opener and big soft photos.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Cormorant Garamond', hcat: 'r', hw: 600, b: 'Jost', bcat: 's' } },
    { k: 'basecamp', wordmark: 1, videos: 'grid', name: 'Basecamp', desc: 'For outfitters and adventure tourism: topographic-map backgrounds, badge labels and bold activity cards.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Rubik', hcat: 's', hw: 800, b: 'Rubik', bcat: 's' } },
    /* 2026-11-14 Indigenous business series, run 4: film, video and media production */
    { k: 'reel', wordmark: 1, videos: 'lead', name: 'Reel', desc: 'For film and video studios: cinematic and dark, a letterboxed 2.39:1 opener with viewfinder marks, festival laurels, numbered title cards, a screenings listing, a rate card, credits that roll and stills on a strip of 35 mm film.', hero: 'overlay', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, dark: 2, gf: { h: 'DM Serif Display', hcat: 'r', hw: 400, b: 'Inter Tight', bcat: 's' } },
    { k: 'marquee', wordmark: 1, videos: 'grid', name: 'Marquee', desc: 'For filmmakers and festivals: poster-style type, film posters as cards, laurels for every selection and a bright festival feel.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Syne', hcat: 's', hw: 800, b: 'Space Grotesk', bcat: 's' } },
    { k: 'frame', wordmark: 1, videos: 'row', name: 'Frame', desc: 'For photographers and directors: a quiet gallery wall with wide stills, numbered projects and elegant italic type.', hero: 'editorial', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Newsreader', hcat: 'r', hw: 500, b: 'Inter', bcat: 's' } },
    /* 2026-11-14 Indigenous business series, run 5: marinas, boating and waterfront */
    { k: 'harbour', wordmark: 1, videos: 'grid', name: 'Harbour', desc: 'For marinas and yacht clubs: classic navy and white, signal-flag accents, GPS coordinates up top and a rate card like a harbour board.', hero: 'overlay', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Spectral', hcat: 'r', hw: 600, b: 'Work Sans', bcat: 's' } },
    { k: 'waterline', wordmark: 1, videos: 'grid', name: 'Waterline', desc: 'For boat rentals and waterfront businesses: bright and modern, a wave line under the opener, amenity chips and a quick booking card.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Lexend', hcat: 's', hw: 700, b: 'Lexend', bcat: 's' } },
    { k: 'dockside', wordmark: 1, videos: 'grid', name: 'Dockside', desc: 'For summer marinas, resorts and outfitters: sun-warmed colours, dock-plank stripes, tag-shaped cards and snapshot photos.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Gabarito', hcat: 's', hw: 800, b: 'Figtree', bcat: 's' } },
    /* 2026-11-15 Indigenous business series, run 6: custom apparel, embroidery and printing */
    { k: 'press', wordmark: 1, videos: 'grid', name: 'Press', desc: 'For print shops and screen printers: halftone dots, off-register colour headlines, registration marks and loud poster type.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Big Shoulders Display', hcat: 's', hw: 900, b: 'Karla', bcat: 's' } },
    { k: 'stitch', wordmark: 1, videos: 'grid', name: 'Stitch', desc: 'For embroidery, sewing and team uniforms: stitched borders, patch-shaped badges and a sturdy workwear feel.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Chivo', hcat: 's', hw: 800, b: 'Chivo', bcat: 's' } },
    { k: 'merch', wordmark: 1, videos: 'grid', name: 'Merch', desc: 'For apparel and promo product shops: a clean storefront with product prices, category chips and an order-in-three-steps strip.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Onest', hcat: 's', hw: 700, b: 'Onest', bcat: 's' } },
    /* 2026-11-15 Indigenous business series, run 7: sports bars, pubs, roadside motels and riverside restaurants */
    { k: 'taproom', wordmark: 1, videos: 'grid', name: 'Taproom', desc: 'For sports bars and pubs: dark and lively, a scoreboard of numbers, a chalkboard menu, game-night listings and jersey-stripe banners.', hero: 'overlay', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, dark: 2, gf: { h: 'Teko', hcat: 's', hw: 600, b: 'Barlow', bcat: 's' } },
    { k: 'roadside', mono: 'Yellowtail', monoW: 400, wordmark: 1, videos: 'grid', name: 'Roadside', desc: 'For motels, diners and highway stops: a retro sunburst opener, neon script, highway-shield numbers, a diner menu and a room-key booking card.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Righteous', hcat: 'd', hw: 400, b: 'Nunito Sans', bcat: 's' } },
    { k: 'patio', wordmark: 1, videos: 'grid', name: 'Patio', desc: 'For riverside restaurants, inns and patios: a scalloped awning, a photo opener with a menu-card welcome, plate-round numbers and a striped booking card.', hero: 'overlay', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Fraunces', hcat: 'r', hw: 600, b: 'DM Sans', bcat: 's' } },
    /* 2026-11-15 Indigenous business series, run 8: civil, excavation, concrete and shoreline contractors */
    { k: 'bedrock', wordmark: 1, videos: 'grid', name: 'Bedrock', desc: 'For civil and excavation contractors: a full-screen site photo with a hazard-stripe edge, a spec-sheet of numbers, a numbered capability list and project cards.', hero: 'overlay', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Saira Condensed', hcat: 's', hw: 800, b: 'Barlow', bcat: 's' } },
    { k: 'breakwater', wordmark: 1, videos: 'grid', name: 'Breakwater', desc: 'For shoreline, landscape and environmental contractors: calm water colours, stacked armour-stone shapes, a water-line band and stone-shaped bullets.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Young Serif', hcat: 'r', hw: 400, b: 'Instrument Sans', bcat: 's' } },
    { k: 'rebar', wordmark: 1, videos: 'grid', name: 'Rebar', desc: 'For concrete, foundation and septic contractors: a rebar-mesh opener with orange safety caps, concrete-block numbers with form-tie holes and cap-dot lists.', hero: 'split', tiles: 'cards', feature: 'split', menus: ['bar', 'mega', 'split', 'hamburger'], img: 1, flag: 1, gf: { h: 'Familjen Grotesk', hcat: 's', hw: 700, b: 'Familjen Grotesk', bcat: 's' } }
  ];
  var VARIANTS = [
    { k: 'a', name: 'Classic', r: 0, band: 'none', dens: 'm' },
    { k: 'b', name: 'Soft', r: 14, band: 'soft', dens: 'l' },
    { k: 'c', name: 'Crisp', r: 4, band: 'ink', dens: 's' }
  ];
  /* Grades on a 1–99 scale (Claude's grading from screenshots, 2026-11-14; the owner and Leah grade the finalists).
     A family's grade applies to its three variants unless a variant is listed (e.g. 'homeward-b').
     Prices follow the grade point by point (decided 2026-11-15, VISION.md §5): 74 and lower free, 75 $50 … 99 $7,500 (PRICE_BY_GRADE).
     Templates under 65 are not offered (cutoff lowered from 70 on 2026-11-15) in step 5 (they stay here so older saved projects still open). */
  var GRADES = { news: 45, app: 50, mag: 52, min: 50, bold: 48, portal: 50, story: 55, board: 42,
    tide: 72, ember: 73, folio: 74, block: 70, bento: 72, craft: 66, glow: 67, swiss: 71, retro: 70, lens: 64,
    hearth: 86, volt: 85, loom: 85, bloom: 85, pulse: 84, commons: 80, council: 80, meridian: 84, bridge: 80,
    convoy: 80, homeward: 84, 'homeward-b': 85, freight: 76, timber: 85, shoreline: 85, 'shoreline-b': 86, basecamp: 80,
    reel: 92, marquee: 84, frame: 86,   /* Reel 2.0 (2026-11-15): 88 → 92 */
    harbour: 85, waterline: 84, dockside: 84,
    press: 87, stitch: 85, merch: 84,
    taproom: 85, roadside: 85, patio: 84,
    bedrock: 85, breakwater: 84, rebar: 84 };
  var PRICE_BY_GRADE = { 75: 50, 76: 60, 77: 70, 78: 80, 79: 90, 80: 100, 81: 120, 82: 140, 83: 160, 84: 180, 85: 200, 86: 250, 87: 300, 88: 350, 89: 400,
    90: 500, 91: 600, 92: 700, 93: 800, 94: 900, 95: 1000, 96: 1500, 97: 2500, 98: 4000, 99: 7500 };
  var MIN_GRADE = 65;
  function priceFor(g) { g = Math.floor(+g || 0); if (g < MIN_GRADE) return null; if (g > 99) g = 99; return PRICE_BY_GRADE[g] || 0; }
  function money(n) { return '$' + Number(n).toLocaleString('en-US'); }
  function priceLabel(t) { return t.price == null ? 'Not offered' : t.price ? money(t.price) : 'Free'; }
  var TEMPLATES = [];
  FAMILIES.forEach(function (f) { VARIANTS.forEach(function (v) { var id = f.k + '-' + v.k, g = GRADES[id] || GRADES[f.k] || 0; TEMPLATES.push({ id: id, name: f.name + ' ' + v.name, fam: f, v: v, grade: g, price: priceFor(g), offered: g >= MIN_GRADE }); }); });
  var OFFERED = TEMPLATES.filter(function (t) { return t.offered; }).sort(function (a, b) { return b.grade - a.grade; });
  function tpl(id) { return TEMPLATES.filter(function (t) { return t.id == id; })[0] || TEMPLATES[0]; }

  function compat(t, P) {
    var why = [], f = t.fam, dm = P.menu.vp.desktop.type, all = allSections(P), types = all.map(function (s) { return s.type; });
    if (f.menus.indexOf(dm) < 0) why.push('doesn’t offer a ' + MENU_TYPES[dm].name.toLowerCase() + ' on desktop');
    (f.no || []).forEach(function (n) { if (types.indexOf(n) >= 0) why.push('has no ' + SECTION_TYPES[n].toLowerCase() + ' section'); });
    if (f.maxTiles) all.forEach(function (s) { if (s.type == 'tiles' && (s.items || []).length > f.maxTiles) why.push('fits up to ' + f.maxTiles + ' cards per grid (“' + s.title + '” has ' + s.items.length + ')'); });
    if (f.need && !f.need.some(function (n) { return types.indexOf(n) >= 0; })) why.push('needs a card grid or link list');
    return { ok: !why.length, why: why };
  }

  function allSections(P) { var o = []; (P.pages || []).forEach(function (p) { o = o.concat(p.sections); }); return o; }
  function pageOf(P, id) { var ps = P.pages || []; return ps.filter(function (p) { return p.id == id; })[0] || ps[0] || { sections: [] }; }

  /* ---------- art helpers ---------- */
  var PALX = null; /* the palette in use while a dark family is drawn */
  function pal(P) { return PALX || P.brand.pal; }
  function font(P) { return Art.FONTS[P.brand.font] || Art.FONTS[0]; }
  function asset(P, a, kind, h) {
    if (!a) return '';
    if (a.kind == 'img') return '<img src="' + esc(a.src) + '" alt="' + esc(a.label || '') + '"' + (h ? ' style="height:' + h + 'px;width:auto"' : '') + ' loading="lazy">';
    if (kind == 'logo') return Art.logo(a, P.biz.name, h || 40, pal(P), font(P));
    if (kind == 'hero') return Art.hero(a, pal(P));
    return Art.ill(a, pal(P));
  }
  function picked(P, kind) { var b = P.brand; return b.opts[kind].filter(function (o) { return o.id == b.pick[kind]; })[0] || b.opts[kind][0]; }
  function ills(P) { var b = P.brand, s = b.opts.ill.filter(function (o) { return b.star[o.id]; }), p = picked(P, 'ill'); if (p && s.indexOf(p) < 0) s.unshift(p); return s.length ? s : b.opts.ill.slice(0, 3); }
  function illAt(P, i) { var l = ills(P); return l.length ? asset(P, l[i % l.length], 'ill') : ''; }
  /* the picture an ImageRef points at, before any crop or frame (the image editor crops from this) */
  function imageRaw(P, im, i) {
    if (!im) return '';
    if (im.kind == 'hero') return asset(P, picked(P, 'hero'), 'hero');
    if (im.kind == 'ill') return illAt(P, im.i || i || 0);
    return asset(P, im, 'img');
  }
  function imageRef(P, im, i) { return decorate(imageRaw(P, im, i), im); }
  function sectionImage(P, s, i) { return imageRef(P, s.image, i); }

  /* ---------- image crop + frame (ARCHITECTURE.md §3.5) ----------
     A crop is stored as a ready-made picture (im.cropSrc). A frame becomes the class "fr" (+ "fr-{art}")
     and CSS variables on the <img>/<svg>; the rules are at the end of site.css ("image frames"). */
  var SHADOWS = { none: 'none', soft: '0 4px 14px rgba(0,0,0,.14)', medium: '0 10px 26px rgba(0,0,0,.22)', strong: '0 20px 44px rgba(0,0,0,.34)', offset: '12px 12px 0 var(--acc)', hard: '8px 8px 0 var(--ink)', glow: '0 0 0 3px var(--acc),0 0 26px var(--acc)' };
  var FRAMES = { polaroid: 'Polaroid', tilt: 'Tilted polaroid', mat: 'Gallery mat', gold: 'Gold frame', double: 'Double line', vintage: 'Vintage', circle: 'Circle', arch: 'Arch', blob: 'Organic blob', offset: 'Offset block', neon: 'Neon glow' };
  var BSTYLES = ['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset'];
  function frameAttrs(fr) {
    if (!fr) return null;
    var st = [], set = function (v) { return v != null && v !== ''; };
    if (set(fr.bw)) st.push('--ibw:' + num(fr.bw) + 'px');
    if (BSTYLES.indexOf(fr.bs) >= 0) st.push('--ibs:' + fr.bs);
    if (okColor(fr.bc)) st.push('--ibc:' + fr.bc);
    if (set(fr.br)) st.push('--ibr:' + num(fr.br) + 'px');
    if (SHADOWS[fr.sh]) st.push('--ish:' + SHADOWS[fr.sh]);
    if (set(fr.pad)) st.push('--ipad:' + num(fr.pad) + 'px');
    if (okColor(fr.bg)) st.push('--ibg:' + fr.bg);
    if (set(fr.tilt) && num(fr.tilt)) st.push('--itf:rotate(' + num(fr.tilt) + 'deg)');
    var art = FRAMES[fr.art] ? ' fr-' + fr.art : '';
    return art || st.length ? { cls: 'fr' + art, style: st.join(';') } : null;
  }
  function decorate(html, im) {
    if (!html || !im) return html;
    if (/^data:image\//.test(im.cropSrc || '')) html = '<img src="' + esc(im.cropSrc) + '" alt="' + esc(im.label || '') + '">';
    var f = frameAttrs(im.frame); if (!f) return html;
    return html.replace(/^<(img|svg)\b([^>]*?)(\/?)>/, function (m, tag, attrs, sl) {
      attrs = /\sclass="/.test(attrs) ? attrs.replace(/\sclass="/, ' class="' + f.cls + ' ') : attrs + ' class="' + f.cls + '"';
      if (f.style) attrs = /\sstyle="/.test(attrs) ? attrs.replace(/\sstyle="/, ' style="' + f.style + ';') : attrs + ' style="' + f.style + '"';
      return '<' + tag + attrs + sl + '>';
    });
  }
  function href(u) { return esc(u || '#'); }
  /* data-fk marks an editable field so Shot can map where it landed (the key matches the editor's field name) */
  /* ---------- inspector overrides (ARCHITECTURE.md §3.4) ----------
     FX = the fx of the section being drawn; GF collects Google font families + weights the page needs. */
  var FX = null, GF = null;
  var FB = { s: 'sans-serif', r: 'serif', d: 'sans-serif', h: 'cursive', m: 'monospace' };
  function num(v) { v = parseFloat(v); return isFinite(v) ? Math.round(v * 1000) / 1000 : 0; }
  function okColor(c) { return /^#[0-9a-f]{3,8}$/i.test(c || ''); }
  function useFont(fam, w) { if (GF && fam) (GF[fam] = GF[fam] || {})[w] = 1; }
  function fstack(fam, cat) { return "'" + String(fam).replace(/['"<>&;]/g, '') + "'," + (FB[cat] || 'sans-serif'); }
  function fxStyle(key) {
    var x = FX && FX[key]; if (!x) return '';
    var st = [];
    if (x.font) { st.push('font-family:' + fstack(x.font, x.fcat)); if (x.weight) useFont(x.font, x.weight); else { useFont(x.font, 400); useFont(x.font, 700); } }
    if (x.size) { var z = num(x.size); st.push('font-size:' + (z > 20 ? 'clamp(' + Math.max(14, Math.round(z * .5)) + 'px,' + (z * 1.8 / 12.8).toFixed(2) + 'cqw,' + z + 'px)' : z + 'px')); }
    if (x.weight) st.push('font-weight:' + num(x.weight));
    if (x.ls != null && x.ls !== '') st.push('letter-spacing:' + num(x.ls) + 'em');
    if (x.lh) st.push('line-height:' + num(x.lh));
    if (/^(none|uppercase|lowercase|capitalize)$/.test(x.tt || '')) st.push('text-transform:' + x.tt);
    if (x.ital) st.push('font-style:italic');
    if (okColor(x.color)) st.push('color:' + x.color);
    return st.length ? ' style="' + st.join(';') + '"' : '';
  }
  /* section layout: classes + CSS variables read by the "inspector overrides" rules at the end of site.css */
  function lxAttr(s) {
    var x = s.lx || {}, cls = '', st = [];
    if (x.pt != null && x.pt !== '') { cls += ' lx-pt'; st.push('--pt:' + num(x.pt) + 'px'); }
    if (x.pb != null && x.pb !== '') { cls += ' lx-pb'; st.push('--pb:' + num(x.pb) + 'px'); }
    if (x.cw == 'full') cls += ' lx-full'; else if (x.cw) { cls += ' lx-cw'; st.push('--cw:' + num(x.cw) + 'px'); }
    if (x.mh) { cls += ' lx-mh lx-va-' + (/^(top|bottom)$/.test(x.va || '') ? x.va : 'center'); st.push('--mh:' + num(x.mh) + 'px'); }
    if (x.gap != null && x.gap !== '') st.push('--gap:' + num(x.gap) + 'px');
    if (x.r != null && x.r !== '') st.push('--r:' + num(x.r) + 'px');
    if (okColor(x.bgc)) { cls += ' lx-bg'; st.push('--sbg:' + x.bgc + ';--sink:' + (okColor(x.ink) ? x.ink : Art.onColor(x.bgc))); }
    else if (okColor(x.ink)) { cls += ' lx-ink'; st.push('--sink:' + x.ink); }
    return { cls: cls, style: st.length ? ' style="' + st.join(';') + '"' : '' };
  }
  function fk(k) { return k ? ' data-fk="' + k + '"' + fxStyle(k) : ''; }
  /* an item field: its style is shared by that field on every item of the section ('item.title') */
  function ifk(k) { return k ? ' data-fk="' + k + '"' + fxStyle('item.' + k) : ''; }
  function tagImg(html, k) { return html ? html.replace(/^<(img|svg)\b/, '<$1' + fk(k || 'image')) : ''; }
  function btn(text, link, cls, k, item) { return text ? '<a class="' + (cls || 'bt') + '" href="' + href(link) + '"' + (item ? ifk(k) : fk(k)) + '>' + esc(text) + '</a>' : ''; }
  function paras(t, k) { return String(t || '').split(/\n{2,}/).filter(Boolean).map(function (p) { return '<p' + fk(k || 'text') + '>' + esc(p) + '</p>'; }).join(''); }
  function ii(i) { return ' data-ii="' + i + '"'; }

  /* ---------- menu ---------- */
  function linkHtml(m) { return '<a href="' + href(m.href) + '">' + esc(m.label) + '</a>'; }
  function dd(m, open) { return '<details class="dd"' + (open ? ' open' : '') + '><summary>' + esc(m.label) + '</summary><div class="pn">' + m.children.map(linkHtml).join('') + '</div></details>'; }
  function navItems(items, open) { var first = true; return items.map(function (m) { if (m.children && m.children.length) { var h = dd(m, open && first); first = false; return h; } return linkHtml(m); }).join(''); }
  function tree(items) {
    var flat = items.filter(function (m) { return !(m.children && m.children.length); }), groups = items.filter(function (m) { return m.children && m.children.length; });
    return (flat.length ? '<div class="dg"><strong>Main</strong>' + flat.map(linkHtml).join('') + '</div>' : '') + groups.map(function (g) { return '<div class="dg"><strong>' + esc(g.label) + '</strong>' + g.children.map(linkHtml).join('') + '</div>'; }).join('');
  }
  function header(P, vp, open) {
    var c = P.menu.vp[vp], items = P.menu.items, t = c.type, L = '<a class="lg" href="#">' + logoHtml(P, vp == 'phone' ? 34 : 44) + '</a>';
    var extras = (c.search ? '<span class="sr" aria-label="Search">⌕</span>' : '') + (c.cta && P.menu.cta.label ? btn(P.menu.cta.label, P.menu.cta.href, 'bt hc') : '');
    var drawer = '<details class="dr"' + (open ? ' open' : '') + '><summary>☰ Menu</summary><div class="dw">' + tree(items) + '</div></details>';
    var cls = 'hd hd-' + t + ' lp-' + (t == 'split' ? 'center' : c.logo) + (c.sticky ? ' sk' : '');
    var inner;
    if (t == 'bar') inner = L + '<nav class="mn">' + navItems(items, open) + '</nav><div class="ha">' + extras + '</div>';
    else if (t == 'mega') {
      var flat = items.filter(function (m) { return !(m.children && m.children.length); }), groups = items.filter(function (m) { return m.children && m.children.length; });
      inner = L + '<nav class="mn">' + flat.map(linkHtml).join('') + (groups.length ? '<details class="dd mg"' + (open ? ' open' : '') + '><summary>Explore all</summary><div class="pn">' + groups.map(function (g) { return '<div class="dg"><strong>' + esc(g.label) + '</strong>' + g.children.map(linkHtml).join('') + '</div>'; }).join('') + '</div></details>' : '') + '</nav><div class="ha">' + extras + '</div>';
    } else if (t == 'split') {
      var half = Math.ceil(items.length / 2);
      inner = '<nav class="mn ml">' + navItems(items.slice(0, half), open) + '</nav>' + L + '<nav class="mn mr">' + navItems(items.slice(half), false) + extras + '</nav>';
    } else if (t == 'bottom') inner = L + '<div class="ha">' + extras + '</div>';
    else inner = L + '<div class="ha">' + extras + drawer + '</div>';
    return '<header class="' + cls + '">' + inner + '</header>';
  }
  function bottomBar(P, vp, open) {
    var items = P.menu.items, top = items.slice(0, 3);
    return '<nav class="bb bb-' + vp + '" aria-label="Tabs">' + top.map(function (m) { return '<a href="' + href(m.href || (m.children && m.children[0] && m.children[0].href)) + '"><i>●</i>' + esc(m.label) + '</a>'; }).join('') +
      '<details class="bm"' + (open ? ' open' : '') + '><summary><i>☰</i>More</summary><div class="dw">' + tree(items) + '</div></details></nav>';
  }

  /* ---------- sections ---------- */
  function head(s) { return (s.title ? '<div class="sh"><h2' + fk('title') + '>' + esc(s.title) + '</h2>' + (s.moreText ? btn(s.moreText, s.moreLink, 'mo', 'moreText') : '') + '</div>' : '') + (s.text && s.type != 'feature' && s.type != 'text' && s.type != 'cta' ? '<p class="in"' + fk('text') + '>' + esc(s.text) + '</p>' : ''); }
  var SEC = {
    hero: function (P, s, f) {
      var lay = s.layout && s.layout != 'auto' ? s.layout : f.hero; if (lay == 'none') lay = 'center';
      var img = s.image === null ? '' : (s.image ? sectionImage(P, s) : asset(P, picked(P, 'hero'), 'hero'));
      return '<section class="s s-hero hl-' + lay + '"><div class="hx"><div class="ht">' + (s.eyebrow ? '<p class="ey"' + fk('eyebrow') + '>' + esc(s.eyebrow) + '</p>' : '') + '<h1' + fk('title') + '>' + esc(s.title || P.biz.name) + '</h1>' + paras(s.text) +
        '<div class="bts">' + btn(s.linkText, s.link, 'bt', 'linkText') + btn(s.link2Text, s.link2, 'bt bt2', 'link2Text') + '</div></div>' + (img ? '<div class="hm">' + tagImg(img) + '</div>' : '') + '</div></section>';
    },
    tiles: function (P, s, f) {
      var st = s.style && s.style != 'auto' ? s.style : f.tiles, cols = s.cols || 3;
      if (s.showImg === undefined && f.img) s = Object.assign({}, s, { showImg: true });
      return '<section class="s s-tiles"><div class="w">' + head(s) + '<div class="tl tl-' + st + ' c' + cols + '">' + (s.items || []).map(function (it, i) {
        var pic = s.showImg === false && st != 'icons' ? '' : it.image ? '<span class="tim">' + tagImg(imageRef(P, it.image, i)) + '</span>' : (s.showImg || st == 'icons') ? '<span class="tim">' + tagImg(illAt(P, i)) + '</span>' : '';
        return '<a class="ti" href="' + href(it.link) + '"' + ii(i) + '>' + pic + '<span class="tx">' + (it.eyebrow ? '<small class="meta"' + ifk('eyebrow') + '>' + esc(it.eyebrow) + '</small>' : '') + '<h3' + ifk('title') + '>' + esc(it.title) + '</h3>' + (it.text ? '<p' + ifk('text') + '>' + esc(it.text) + '</p>' : '') + (it.linkText ? '<b' + ifk('linkText') + '>' + esc(it.linkText) + ' →</b>' : '') + '</span></a>';
      }).join('') + '</div></div></section>';
    },
    feature: function (P, s, f) {
      var st = s.style && s.style != 'auto' ? s.style : f.feature, img = s.image === null ? '' : (s.image ? sectionImage(P, s) : illAt(P, 1));
      return '<section class="s s-feature"><div class="w">' + head(s) + '<div class="fe fe-' + st + '">' + (img ? '<div class="fm">' + tagImg(img) + '</div>' : '') + '<div class="fx">' + (s.eyebrow ? '<p class="ey"' + fk('eyebrow') + '>' + esc(s.eyebrow) + '</p>' : '') +
        '<h3' + fk('headline') + '>' + esc(s.headline || '') + '</h3>' + paras(s.text) + btn(s.linkText, s.link, 'bt', 'linkText') + '</div></div></div></section>';
    },
    list: function (P, s) {
      return '<section class="s s-list"><div class="w">' + head(s) + '<div class="ls">' + (s.items || []).map(function (it, i) { return '<div class="lr"' + ii(i) + '><strong' + ifk('title') + '>' + esc(it.title) + '</strong>' + (it.text ? '<span' + ifk('text') + '>' + esc(it.text) + '</span>' : '') + (it.linkText || (it.link && it.link != '#') ? btn(it.linkText || 'Open', it.link, 'mo', 'linkText', 1) : '') + '</div>'; }).join('') + '</div>' + (s.linkText ? btn(s.linkText, s.link, 'mo', 'linkText') : '') + '</div></section>';
    },
    text: function (P, s) {
      var img = s.image ? sectionImage(P, s) : '';
      return '<section class="s s-text' + (img ? ' wi' : '') + '"><div class="w"><div class="tb">' + (s.title ? '<h2' + fk('title') + '>' + esc(s.title) + '</h2>' : '') + paras(s.text) + btn(s.linkText, s.link, 'mo', 'linkText') + '</div>' + (img ? '<div class="fm">' + tagImg(img) + '</div>' : '') + '</div></section>';
    },
    stats: function (P, s) { return '<section class="s s-stats"><div class="w">' + head(s) + '<div class="stt">' + (s.items || []).map(function (it, i) { return '<div' + ii(i) + '><b' + ifk('title') + '>' + esc(it.title) + '</b><span' + ifk('text') + '>' + esc(it.text) + '</span></div>'; }).join('') + '</div></div></section>'; },
    gallery: function (P, s) { return '<section class="s s-gallery"><div class="w">' + head(s) + '<div class="gl">' + (s.items || []).map(function (it, i) { return '<figure' + ii(i) + '>' + tagImg(it.image ? imageRef(P, it.image, i) : illAt(P, i)) + (it.title ? '<figcaption' + ifk('title') + '>' + esc(it.title) + '</figcaption>' : '') + '</figure>'; }).join('') + '</div></div></section>'; },
    testimonial: function (P, s) { return '<section class="s s-quotes"><div class="w">' + head(s) + '<div class="qs">' + (s.items || []).map(function (it, i) { return '<blockquote' + ii(i) + '><p' + ifk('text') + '>“' + esc(it.text) + '”</p><cite' + ifk('title') + '>' + esc(it.title) + '</cite></blockquote>'; }).join('') + '</div></div></section>'; },
    cta: function (P, s) { return '<section class="s s-cta"><div class="w"><h2' + fk('title') + '>' + esc(s.title) + '</h2>' + paras(s.text) + btn(s.linkText, s.link, 'bt bt3', 'linkText') + '</div></section>'; },
    videos: function (P, s, f) {
      var st = s.style && s.style != 'auto' ? s.style : (f.videos || 'grid'), items = (s.items || []).slice(0, 12);
      function card(it, i, big) {
        var th = it.image ? imageRef(P, it.image, i) : illAt(P, i);
        return '<a class="vi' + (big ? ' big' : '') + '" href="' + href(it.link) + '"' + ii(i) + '><span class="vt">' + tagImg(th) + '<span class="play" aria-hidden="true"></span>' + (it.duration ? '<span class="du"' + ifk('duration') + '>' + esc(it.duration) + '</span>' : '') + '</span><span class="vx">' + (it.eyebrow ? '<small class="meta"' + ifk('eyebrow') + '>' + esc(it.eyebrow) + '</small>' : '') + '<h3' + ifk('title') + '>' + esc(it.title) + '</h3>' + (big && it.text ? '<p' + ifk('text') + '>' + esc(it.text) + '</p>' : '') + '</span></a>';
      }
      var body;
      if (st == 'lead' && items.length > 1) body = '<div class="vl-lead">' + card(items[0], 0, true) + '<div class="rail">' + items.slice(1, 5).map(function (it, i) { return card(it, i + 1); }).join('') + '</div></div>' + (items.length > 5 ? '<div class="vg">' + items.slice(5, 9).map(function (it, i) { return card(it, i + 5); }).join('') + '</div>' : '');
      else if (st == 'row') body = '<div class="vrow">' + items.slice(0, 8).map(function (it, i) { return card(it, i); }).join('') + '</div><div class="arr" aria-hidden="true"><span>‹</span><span>›</span></div>';
      else body = '<div class="vg">' + items.map(function (it, i) { return card(it, i); }).join('') + '</div>';
      return '<section class="s s-videos vs-' + st + '"><div class="w">' + head(s) + body + '</div></section>';
    },
    podcast: function (P, s) {
      return '<section class="s s-podcast"><div class="w">' + head(s) + '<div class="pods">' + (s.items || []).slice(0, 8).map(function (it, i) {
        return '<div class="pod"' + ii(i) + '><span class="pc">' + tagImg(it.image ? imageRef(P, it.image, i) : illAt(P, i + 2)) + '</span><div class="px"><h3' + ifk('title') + '>' + esc(it.title) + '</h3>' + (it.text ? '<p' + ifk('text') + '>' + esc(it.text) + '</p>' : '') + '<div class="bar"><span class="pb" aria-hidden="true">▶</span><span class="tr"><i style="width:' + (18 + (i * 23) % 60) + '%"></i></span><span class="tm">00:00</span></div></div></div>';
      }).join('') + '</div></div></section>';
    },
    pagehead: function (P, s) {
      var img = s.image ? imageRef(P, s.image) : '';
      return '<section class="s s-pagehead' + (img ? ' wi' : '') + '"><div class="w"><p class="crumb">Home <span>/</span> ' + esc(s.title) + '</p><h1' + fk('title') + '>' + esc(s.title) + '</h1>' + paras(s.text) + '</div>' + (img ? '<div class="phm">' + tagImg(img) + '</div>' : '') + '</section>';
    },
    contact: function (P, s) { return '<section class="s s-contact"><div class="w">' + head(s) + '<dl class="ct">' + (s.items || []).map(function (it, i) { return '<div' + ii(i) + '><dt' + ifk('title') + '>' + esc(it.title) + '</dt><dd' + ifk('text') + '>' + (it.link ? '<a href="' + href(it.link) + '">' + esc(it.text || it.link) + '</a>' : esc(it.text)) + '</dd></div>'; }).join('') + '</dl>' + btn(s.linkText, s.link, 'bt', 'linkText') + '</div></section>'; }
  };

  /* Logo: an uploaded or site logo is shown as it is. Families with a wordmark draw the business name in the
     template's own type with a monogram (first letter) instead of the generated sample logo. FAM = family being drawn. */
  var FAM = null;
  function logoHtml(P, h) {
    var a = picked(P, 'logo'), n = String(P.biz.name || '').trim();
    if (FAM && FAM.wordmark && n && (!a || a.kind != 'img')) return '<span class="wm" role="img" aria-label="' + esc(n) + ' logo"><span class="wm-i" aria-hidden="true">' + esc(n.charAt(0).toUpperCase()) + '</span><span class="wm-n" aria-hidden="true">' + esc(n) + '</span></span>';
    return asset(P, a, 'logo', h);
  }
  function groupsOf(items) { var o = [], m = {}; items.forEach(function (it, i) { var g = String(it.group || '').trim(); if (!m.hasOwnProperty(g)) { m[g] = o.length; o.push({ name: g, items: [] }); } o[m[g]].items.push([it, i]); }); return o; }
  SEC.menu = function (P, s) {
    var items = s.items || [], pics = s.showImg !== false && items.some(function (it) { return it.image; });
    return '<section class="s s-menu"><div class="w">' + head(s) + '<div class="mu-g' + (pics ? ' mu-pics' : '') + '">' + groupsOf(items).map(function (g) {
      return '<div class="mu-c">' + (g.name ? '<h3 class="mu-h">' + esc(g.name) + '</h3>' : '') + g.items.map(function (x) {
        var it = x[0], i = x[1];
        return '<div class="mu-i"' + ii(i) + '>' + (pics && it.image ? '<span class="mu-im">' + tagImg(imageRef(P, it.image, i)) + '</span>' : '') + '<div class="mu-x"><div class="mu-l"><strong' + ifk('title') + '>' + esc(it.title) + '</strong><span class="mu-d" aria-hidden="true"></span>' + (it.price ? '<b class="mu-p"' + ifk('price') + '>' + esc(it.price) + '</b>' : '') + '</div>' + (it.text ? '<p' + ifk('text') + '>' + esc(it.text) + '</p>' : '') + '</div></div>';
      }).join('') + '</div>';
    }).join('') + '</div>' + (s.linkText ? '<div class="mu-f">' + btn(s.linkText, s.link, 'bt', 'linkText') + '</div>' : '') + '</div></section>';
  };
  SEC.booking = function (P, s) {
    var areas = String(s.areas || '').split(',').map(function (a) { return a.trim(); }).filter(Boolean);
    return '<section class="s s-booking"><div class="w"><div class="bk"><div class="bk-a">' + (s.title ? '<h2' + fk('title') + '>' + esc(s.title) + '</h2>' : '') + paras(s.text) +
      (areas.length ? '<p class="bk-at"' + fk('areasTitle') + '>' + esc(s.areasTitle || 'Areas we serve') + '</p><ul class="bk-ar" data-fk="areas">' + areas.map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('') + '</ul>' : '') + '</div>' +
      '<div class="bk-b">' + (s.cardTitle ? '<h3' + fk('cardTitle') + '>' + esc(s.cardTitle) + '</h3>' : '') + '<div class="bk-l">' + (s.items || []).map(function (it, i) {
        return '<div class="bk-i"' + ii(i) + '><div class="bk-x"><strong' + ifk('title') + '>' + esc(it.title) + '</strong>' + (it.text ? '<span' + ifk('text') + '>' + esc(it.text) + '</span>' : '') + '</div>' + (it.price ? '<b' + ifk('price') + '>' + esc(it.price) + '</b>' : '') + '</div>';
      }).join('') + '</div>' + btn(s.linkText, s.link, 'bt bk-bt', 'linkText') + (s.note ? '<p class="bk-n"' + fk('note') + '>' + esc(s.note) + '</p>' : '') + '</div></div></div></section>';
  };
  SEC.products = function (P, s) {
    var cols = s.cols || 3;
    return '<section class="s s-products"><div class="w">' + head(s) + '<div class="pr-g c' + cols + '">' + (s.items || []).map(function (it, i) {
      return '<a class="pr-i" href="' + href(it.link) + '"' + ii(i) + '><span class="pr-im">' + tagImg(it.image ? imageRef(P, it.image, i) : illAt(P, i)) + (it.eyebrow ? '<small class="pr-bd"' + ifk('eyebrow') + '>' + esc(it.eyebrow) + '</small>' : '') + '</span><span class="pr-x"><span class="pr-t"><h3' + ifk('title') + '>' + esc(it.title) + '</h3>' + (it.price ? '<b class="pr-p"' + ifk('price') + '>' + esc(it.price) + '</b>' : '') + '</span>' + (it.text ? '<p' + ifk('text') + '>' + esc(it.text) + '</p>' : '') + (it.linkText ? '<span class="pr-btn"' + ifk('linkText') + '>' + esc(it.linkText) + '</span>' : '') + '</span></a>';
    }).join('') + '</div></div></section>';
  };

  /* Sample photos (photo robot, Pixabay) used on a page get a credit line in the footer:
     the photographer and Pixabay, linked, so a Maker who keeps any of them gives credit automatically. */
  var PHOTO_BY = {};
  Object.keys(photoList.kinds || {}).forEach(function (k) { photoList.kinds[k].photos.forEach(function (p) { PHOTO_BY[p.file] = p; }); });
  function credits(html) {
    var re = /photos\/[a-z]+\/\d+\.jpg/g, m, seen = {}, out = [];
    while ((m = re.exec(html))) { var p = PHOTO_BY[m[0]]; if (p && !seen[p.id]) { seen[p.id] = 1; out.push(p); } }
    return out;
  }
  function creditLine(list) {
    if (!list.length) return '';
    var by = {}; list.forEach(function (p) { if (!by[p.by]) by[p.by] = p.page; });
    var names = Object.keys(by).map(function (n) { return '<a href="' + esc(by[n]) + '">' + esc(n) + '</a>'; });
    return '<p class="pc">Photos by ' + names.join(', ') + ' on <a href="' + esc(photoList.sourceUrl || 'https://pixabay.com/') + '">' + esc(photoList.source || 'Pixabay') + '</a></p>';
  }
  function footer(P, cr) {
    var items = P.menu.items, links = [];
    items.forEach(function (m) { if (m.children && m.children.length) links = links.concat(m.children); else links.push(m); });
    return '<footer class="ft" data-sec="footer" data-type="footer" data-si="-1"><div class="w"><div class="fb">' + logoHtml(P, 36) + (P.footer.motto ? '<p class="mt"' + fk('motto') + '>' + esc(P.footer.motto) + '</p>' : '') + '</div><nav>' + links.slice(0, 12).map(linkHtml).join('') + '</nav><p class="cp"' + fk('text') + '>' + esc(P.footer.text || ('© ' + P.biz.name)) + '</p>' + (cr || '') + '</div></footer>';
  }

  function page(P, tplId, opt) {
    opt = opt || {}; PALX = null; var t = tpl(tplId), f = t.fam, v = t.v, p = pal(P), F = font(P); FAM = f;
    if (f.dark && Art.lum(p.bg) >= 110) { var nb = f.dark == 2 ? Art.mix(p.ink, '#05060a', .55) : Art.mix(p.ink, '#000000', .25); p = { bg: nb, ink: p.bg, acc: p.acc, soft: Art.mix(nb, p.bg, .08) }; PALX = p; }
    var dark = Art.lum(p.bg) < 110;
    GF = {}; var gf = P.brand.gf || f.gf || {};
    if (gf.h) { F = Object.assign({}, F, { h: fstack(gf.h, gf.hcat) }); useFont(gf.h, gf.hw || F.w); }
    if (gf.hw) F = Object.assign({}, F, { w: num(gf.hw) });
    if (gf.b) { F = Object.assign({}, F, { b: fstack(gf.b, gf.bcat) }); useFont(gf.b, 400); useFont(gf.b, 700); }
    if (f.mono) { if (f.monoW) useFont(f.mono, f.monoW); else { useFont(f.mono, 500); useFont(f.mono, 600); } }   /* a family's label font (Freight) */
    var vars = '--bg:' + p.bg + ';--ink:' + p.ink + ';--acc:' + p.acc + ';--soft:' + p.soft + ';--oa:' + Art.onColor(p.acc) + ';--oi:' + Art.onColor(p.ink) + ';--line:' + Art.mix(p.bg, p.ink, dark ? .3 : .16) + ';--mute:' + Art.mix(p.ink, p.bg, .3) + ';--card:' + (dark ? Art.mix(p.bg, p.ink, .06) : '#ffffff') + ';--hf:' + F.h.replace(/"/g, "'") + ';--bf:' + F.b.replace(/"/g, "'") + ';--hw:' + F.w + ';--r:' + v.r + 'px';
    var secs = pageOf(P, opt.pageId).sections.map(function (s, i) {
      FX = s.fx || null; var h = (SEC[s.type] || SEC.text)(P, s, f), lx = lxAttr(s); FX = null; var bg = s.bg && s.bg != 'auto' ? s.bg : (v.band != 'none' && i % 2 == 1 && s.type != 'hero' ? (f.dark && v.band == 'ink' ? 'soft' : v.band) : 'default');
      if (f.bands && s.type == 'cta') bg = 'acc';
      if (s.type == 'pagehead' && (!s.bg || s.bg == 'auto')) bg = f.k == 'bold' || f.k == 'portal' ? 'ink' : 'soft';
      return h.replace('<section class="s ', '<section data-sec="' + s.id + '" data-type="' + s.type + '" data-si="' + i + '"' + lx.style + ' class="s bg-' + bg + ' al-' + (s.align || 'auto') + lx.cls + (opt.sel == s.id ? ' sel' : '') + ' ');
    }).join('');
    var mv = opt.openMenu;
    FX = P.footer.fx || null; var foot = footer(P, creditLine(credits(secs))); FX = null;
    PALX = null;
    var gfs = Object.keys(GF).map(function (k) { return k + ':' + Object.keys(GF[k]).join(','); }).join('|'); GF = null;
    return '<div class="pv tf-' + f.k + ' tv-' + v.k + ' dn-' + v.dens + '" style="' + vars + '"' + (gfs ? ' data-gf="' + esc(gfs) + '"' : '') + '>' +
      '<div class="vh vh-d">' + header(P, 'desktop', mv == 'desktop') + '</div><div class="vh vh-t">' + header(P, 'tablet', mv == 'tablet') + '</div><div class="vh vh-p">' + header(P, 'phone', mv == 'phone') + '</div>' +
      '<main>' + secs + '</main>' + foot +
      (P.menu.vp.tablet.type == 'bottom' ? '<div class="vh vh-t">' + bottomBar(P, 'tablet', mv == 'tablet') + '</div>' : '') +
      (P.menu.vp.phone.type == 'bottom' ? '<div class="vh vh-p">' + bottomBar(P, 'phone', mv == 'phone') + '</div>' : '') + '</div>';
  }

  return { page: page, credits: credits, GRADES: GRADES, PRICE_BY_GRADE: PRICE_BY_GRADE, money: money, MIN_GRADE: MIN_GRADE, priceFor: priceFor, priceLabel: priceLabel, OFFERED: OFFERED, pageOf: pageOf, allSections: allSections, imageRef: imageRef, imageRaw: imageRaw, decorate: decorate, SHADOWS: SHADOWS, FRAMES: FRAMES, BSTYLES: BSTYLES, TEMPLATES: TEMPLATES, FAMILIES: FAMILIES, tpl: tpl, compat: compat, SECTION_TYPES: SECTION_TYPES, MENU_TYPES: MENU_TYPES, asset: asset, picked: picked };
})();

export { Render };
