# BAKE Studio: architecture

This describes BAKE Studio as it is now (November 2026; two Studios since 2026-11-08, project format **v3**). It is a static web app with no server, built with **React + Vite + Tailwind CSS** and published by GitHub Pages from `deltaowleyes/bakeaweb.com` (branch `main`, folder `/docs`; moved from `deltaowleyes/bake-studio` on 2026-11-07). The source lives in `studio/`; `npm run build` writes the built site into `docs/`, the **only** folder Pages serves, so plans, docs and source code are not on the website (since 2026-11-08). Live: **https://bakeaweb.com/**, set by `docs/CNAME` (the old https://deltaowleyes.ca/bake-studio/ address and the old `deltaowleyes/bake-studio` repo forward there).

## 1. What it does

A five-step wizard that turns an existing website (or a blank start) into previews of a new site in many templates, then ends with a development request.

| Step | Name | Purpose |
|---|---|---|
| 1 | Your site | Import a site by URL or pasted code (home page plus its other pages), or create a starter site |
| 2 | Brand | Logo, hero image, illustrations (generated SVG, upload, AI, or any image from the site), colours, fonts |
| 3 | Sections | Choose a page; add, delete, reorder and edit its sections and items, including images |
| 4 | Menu | Edit menu links and groups; choose a menu style for each screen size (desktop, tablet, phone) |
| 5 | Templates | Browse templates that fit, preview any page at all sizes, pick one, request development |

**Design rules that shape the code:**
- **Two Studios (`editions.js`, `S.edition`, since 2026-11-08):** **BAKE Studio PRO** (`'pro'`, clients, the default) and **BAKE Studio BAKER** (`'baker'`, Bakers: everything in PRO plus a *Markets* area, a placeholder for now). Choose in step 1 or the header, or with `?v=pro|baker`. Old links and saved projects with `express`, `rezsite` or `indigihub` open in PRO (`normStudio()`).
- **Previews:** the **live page** in an iframe with *View code*, in both Studios. When the project uses a **premium item that isn't paid for**, previews switch to PNG/JPEG **screenshots**, so that code is never left in the DOM. The cart plugs in with `setPremiumCheck(fn)` in `editions.js` (`fn(S)` → true = unpaid premium in use); until then nothing is premium.
- **Where a site lives** (bakedby.me, rezsite.com, own domain; plus bakedbya.pro portfolio in BAKER) is chosen at **Publish** in step 5 (`S.req.dest`: `'bakedby' | 'rezsite' | 'own' | 'portfolio'`), not by the Studio.
- **Publishing** (planned, see `ROADMAP.md`): `lib/site.js` already turns a project into real page files (bakedby.me, rezsite.com, own domain) or a clickable screenshot page (BAKER portfolios on bakedbya.pro). Until accounts exist, the studio's exit is "Request development".
- **Everything runs in the browser.** State is saved to `localStorage` until Supabase is added.

## 2. File structure

```
bakeaweb.com/   (the repository)
├── docs/                     BUILT studio, the only folder Pages publishes (made by `npm run build`; don't edit by hand)
│   └── index.html, assets/, .nojekyll, CNAME (bakeaweb.com), ROADMAP.json (for the BAKE PRO panel)
├── ROADMAP.json, ROADMAP.md, VISION.md, plans/   plans and the roadmap (in the repo, not on the website)
├── README.md, ARCHITECTURE.md, CLAUDE.md
├── bake-notes/               (only while tasks are waiting to merge) notes from parallel BAKE tasks, folded into these docs at Merge and publish
├── .github/workflows/test.yml  runs the testing robot on GitHub on every push (results: the repo's Actions tab)
└── studio/                   SOURCE (Vite project)
    ├── index.html            page shell with <div id="root">
    ├── package.json          scripts: dev, build (clean → vite build → place), test, test:ui, test:install
    ├── tests/                the automatic testing robot (Playwright, `npm test`); see tests/README.md
    ├── vite.config.js        React + Tailwind plugins; base './'
    ├── scripts/clean.mjs     removes the old docs/ build
    ├── scripts/place.mjs     copies studio/dist into docs/ + .nojekyll, CNAME, ROADMAP.json
    └── src/
        ├── main.jsx          starts React; window.BAKE test hook
        ├── editions.js       the two Studios (PRO, BAKER), markets list, publish destinations, live preview vs screenshots (premium check)
        ├── index.css         Tailwind theme + utilities (no reset) + studio.css as a layer; studio colours as Tailwind colours
        ├── studio.css        the studio's component styles (cards, buttons, grids, picker, overlays, light/dark)
        ├── store.js          S (project state), load/migrate, save, commit(), undo/redo, save points, useStudio()
        ├── edit.js           editing logic shared by the steps: pages, starter, applyImport, importPage, FIELDS/ITEMF…
        ├── App.jsx           header + step buttons, Undo/Redo/History, History dialog, active step, Back/Next, storage-full warning
        ├── steps/Step1–5.jsx one component per step
        ├── components/
        │   ├── Preview.jsx   unpaid premium in use: screenshots + click-to-edit overlays; SizeButtons. Otherwise: LivePreview
        │   ├── LivePreview.jsx live page in scaled iframes, click-to-edit inside the frame, View code
        │   ├── EditionPicker.jsx Studio cards (step 1), BAKER Markets card, header menu
        │   ├── Inspector.jsx right-hand sidebar in step 3 (Text / Section / Page / Site tabs)
        │   ├── FontPicker.jsx   searchable Google Fonts picker (full catalogue)
        │   ├── ColourPicker.jsx brand colours + every art.js palette + free picker + hex
        │   ├── SortableList.jsx drag-and-drop list (SortableJS)
        │   ├── ImageEditor.jsx  crop (Cropper.js) + border and frame modal for one image
        │   ├── Field.jsx     one editor field (text, textarea, select, checkbox, image)
        │   ├── ImagePicker.jsx  the "Choose an image" dialog
        │   └── Html.jsx      shows a small generated SVG/img string (artwork thumbnails only)
        └── lib/              the page engine, plain JavaScript modules (no React)
            ├── art.js        Art       palettes, font pairs, colour maths, SVG logo/hero/illustration generators
            ├── importer.js   Importer  fetch + parse an existing page into a project-shaped result
            ├── render.js     Render    project + template → page HTML string; templates and compatibility
            ├── shot.js       Shot      page HTML → full-page image (SVG foreignObject → canvas → blob URL) + box map + link boxes
            ├── site.js       Site      project → real page files (html, files) or a clickable screenshot page (shotSite)
            ├── fonts.js      Google Fonts: catalogue, embedding fonts into screenshots, picker previews
            ├── gfonts.json   the Google Fonts catalogue (1,908 families; loaded only when needed)
            └── site.css      look of the GENERATED website (scoped to .pv); loaded in the page AND embedded in screenshots
```

**Why templates stay plain HTML/CSS:** previews are screenshots made by drawing the page's HTML plus `site.css` inside an SVG. That only works with plain markup and one stylesheet, so `render.js` and `site.css` don't use React or Tailwind. React and Tailwind are for the studio around them.

**Build and publish:** `cd studio && npm install && npm run build`, then commit `docs/` and the source together and push to `main`. Vite gives built files hashed names, so there's no `?v=` cache number to bump any more.

**Packages:** react, react-dom, sortablejs, cropperjs 1.x (loaded only when the image editor opens); dev: vite, @vitejs/plugin-react, tailwindcss, @tailwindcss/vite, @playwright/test.

**Module dependencies:** `importer` → `art`; `render` → `art`; `shot` → `site.css` (raw text), `fonts`; `edit` → `store`, `art`, `importer`; steps → `store`, `edit`, `render`, components.

## 3. Project state (`S`)

One plain object, created by `blank()` in `store.js` and saved whole as JSON under the `localStorage` key `bake-studio-v2`. (The key name is historical; the format version lives in `S.v`.)

```js
S = {
  v: 3,                       // format version (v2 is migrated on load, see §3.3)
  edition: 'pro',             // 'pro' | 'baker': the two Studios (editions.js)
  step: 1,                    // current step, 1–5 (also mirrored in the URL hash #step-N)

  source: {                   // step 1
    has: true,                // "Yes, import it" vs "No, start fresh"
    url: 'https://…',         // address typed by the user
    log: [[text, cls], …],    // import progress lines shown under the URL box
    found: { url, colours, name } | null   // summary of the last home-page import
  },

  biz: { name, desc },        // business name and one-line description

  brand: {
    pal: { name, bg, ink, acc, soft },     // live palette: background, text, accent, soft panels
    palFound: {…} | null,     // palette detected from the imported site (offered first)
    font: 0,                  // index into Art.FONTS
    seed: { logo, hero, ill },// counters so "Generate more" gives new SVG options
    opts: {                   // candidate assets per kind
      logo: [Asset], hero: [Asset], ill: [Asset]
    },
    pick: { logo: id, hero: id, ill: id }, // the asset "In use" for each kind
    star: { [assetId]: true },// starred assets (starred illustrations fill cards and galleries)
    gf: { h, hcat, hw, b, bcat } | undefined // Google Fonts for the whole site (Inspector › Site); replaces the step 2 pair
  },

  pages: [Page],              // pages[0] is always Home
  lib: [LibImage],            // every image found on the imported site(s), max 400

  footer: { motto, text, fx? },  // fx: text styles, as on sections (§3.4)

  menu: {
    items: [MenuItem],        // shared by all pages
    cta: { label, href },     // optional header button
    vp: {                     // menu style per screen size
      desktop: MenuConfig, tablet: MenuConfig, phone: MenuConfig
    }
  },

  tpl: { pick, view, fav: { [tplId]: true }, all, favOnly },  // step 5
  notes: [Request],           // development requests (newest first)
  req: { name, email, pagename, dest },  // contact details, page name, and where the site lives ('bakedby' | 'rezsite' | 'own' | 'portfolio')
  ai: { endpoint: '' },       // AI image service URL; empty means sample artwork only

  ui: {                       // view state, saved too so a reload returns to the same place
    vp: 'desktop',            // preview size in steps 2–3
    tvp: 'all',               // preview size in step 5 ('all' = desktop + tablet + phone)
    mvp: 'desktop',           // screen size being configured in step 4
    btab: 'logo', bsrc: 'svg',// step 2 asset tab and source tab ('svg' | 'upload' | 'ai' | 'site')
    sel: sectionId | 'footer',// section being edited in step 3
    page: pageId,             // page being edited in step 3
    tpage: pageId,            // page previewed in step 5
    open: false,              // step 4 "Show the menu open"
    prompt: { logo, hero, ill }, // edited AI prompts
    pasteFor: pageId | null,  // which page the "Paste code" box is importing
    libq: '',                 // search text for site images in step 2
    insp: { open, tab, key, item } // step 3 Inspector: open?, 'text'|'section'|'page'|'site', text field being styled, its item index
  }
}
```

### 3.1 Shapes

```js
Asset      = { id, kind: 'svg', from: 'svg' | 'ai', mark|lay|up (logo) | k|s (hero/ill) }   // drawn by Art
           | { id, kind: 'img', src, from: 'site' | 'upload' | 'ai', label }               // a real image
LibImage   = { id, src, label, logo: bool }      // logo = "looks like a logo" (sorted first in logo pickers)
Page       = { id, name, url, status: 'imported' | 'waiting' | 'importing' | 'blocked' | 'new', sections: [Section] }
Section    = { id, type, title, text, …typeFields, items?: [Item], bg?, align?, image?, fx?, lx? }   // fx, lx: §3.4
Item       = { id, title, text, link, linkText, eyebrow?, duration?, image? }
ImageRef   = undefined (template default) | null (no image)
           | { kind: 'hero' } | { kind: 'ill', i } | { kind: 'img', src, label? }
             …each may also carry crop?, cropSrc?, frame? (§3.5)
MenuItem   = { id, label, href } | { id, label, href, children: [MenuItem] }   // a group has children
MenuConfig = { type: 'bar' | 'mega' | 'split' | 'hamburger' | 'bottom', logo: 'left' | 'center', sticky, cta, search }
Request    = { id, at (ms), name, email, text, tpl, edition, dest, pagename, status: 'Requested', summary: { sections: [titles], menu: [labels] } }
```

### 3.2 Section types (`Render.SECTION_TYPES`)

| type | Shown as | Key fields | Items |
|---|---|---|---|
| `hero` | Hero banner | eyebrow, title, text, linkText/link, link2Text/link2, layout, image | none |
| `pagehead` | Page header (inner pages) | title, text, image | none |
| `tiles` | Card grid | title, text, moreText/moreLink, cols (2–4), style, showImg | image, eyebrow, title, text, link, linkText |
| `feature` | Featured story | title, moreText/moreLink, eyebrow, headline, text, linkText/link, style, image | none |
| `list` | Link list | title, text, linkText/link | title, text, linkText, link |
| `text` | Text block | title, text (blank line = paragraph), linkText/link, image | none |
| `videos` | Video gallery | title, text, moreText/moreLink, style (`lead` / `grid` / `row`) | image (thumbnail), title, eyebrow, duration, link |
| `podcast` | Podcasts / audio | title, text, moreText/moreLink | image, title, text, link |
| `stats` | Numbers | title, text | title (number), text (label) |
| `gallery` | Gallery | title, text | image, title (caption) |
| `testimonial` | Quotes | title | text (quote), title (name) |
| `cta` | Call to action | title, text, linkText/link | none |
| `contact` | Contact details | title, text, linkText/link | title (label), text (value), link |
| `menu` | Menu with prices | title, text, linkText/link, showImg | group (category), image, title (dish), text, price |
| `booking` | Booking and service area | title, text, areasTitle, areas (comma list), cardTitle, linkText/link, note | title (service), text (details), price |
| `products` | Products with prices | title, text, moreText/moreLink, cols | image, eyebrow (badge), title, price, text, linkText, link |

Every section also takes `bg` (`auto`, `default`, `soft`, `ink`, `acc`) and `align` (`auto`, `left`, `center`, `right`). The editable fields per type are defined in `FIELDS` and `ITEMF` in `edit.js`. A field kind of `pick` opens the image picker.

### 3.3 Saving, loading and migration

- **Saving:** `save()` writes the whole `S` 250 ms after the last change. If the browser's storage is full (usually from large uploads), a warning banner appears.
- **Saving and loading** are in `store.js`. The key and format are unchanged from the pre-React studio, so saved work carries over.
- **Loading:** `load()` reads the key. A **v2** project (one page, `S.sections`) is converted to v3: its sections become `pages[0]` ("Home"), and site images found in `brand.opts` seed `lib`. Missing top-level keys and `ui` keys are filled from `blank()`. Any `edition` other than `'baker'` (old `express`, `rezsite`, `indigihub`) becomes `'pro'`.
- **Start over** clears the key and reloads (a save point is made first, so it can be undone).
- **Undo and save points:** `commit()` serializes the project without view state (`snap()`: no `ui`, `step`, `source.log`) and, if it changed, pushes the previous snapshot on the undo list (same focused input within 1.5 s = one step; up to 80 steps, about 60 MB, for this visit only). `undoStep()` / `redoStep()` put a snapshot back in place with `apply()`, keeping the view state and fixing `ui.page`, `ui.tpage`, `ui.sel` if they no longer exist. Keys: Ctrl+Z, Ctrl+Shift+Z, Ctrl+Y (⌘ on a Mac), plus header buttons. Save points (`addPoint`, `restorePoint`, `deletePoint`, `savePoints`) live under the `localStorage` key `bake-studio-history` (newest first, max 8); they are made every 3 min while editing, when a commit replaces every page id (import, starter), before Start over, before a restore, and by *Save point now*. `save()` drops the oldest save point when storage is full.
- **Images in state:** uploads are stored as data URLs (shrunk to 1600 px for hero images, 700 px otherwise, WebP). Site images are stored as URLs only.

### 3.4 Inspector overrides (`fx`, `lx`)

Set in step 3's Inspector. Empty values mean "template default" and are deleted, so untouched sections stay clean.

```js
fx = { [fieldKey]: TextStyle }      // 'title', 'text', 'headline'…; item fields use 'item.title' etc. (one style for that field on every item)
TextStyle = { font, fcat, size (px), weight, ls (em), lh, tt ('none'|'uppercase'|'lowercase'|'capitalize'), ital, color }
lx = { pt, pb (px space above/below), cw (720|960|1200|1440|'full'), mh (min height px), va ('top'|'bottom'; default middle),
       gap (px), r (corner px), bgc (custom background), ink (text colour; automatic contrast if only bgc) }
```

- **How it renders:** `render.js` sets `FX` while drawing a section; `fk(k)` / `ifk(k)` add an inline `style` to that field's element. Sizes over 20 px use `clamp(…, cqw, …)` so big text shrinks on phones. `lxAttr()` adds `lx-*` classes and CSS variables (`--pt --pb --cw --mh --gap --r --sbg --sink`) to the `<section>`. The rules for those classes are at the end of `site.css` ("inspector overrides"). On phones, space above and below is 60%.
- **Fonts:** any Google font used (site fonts and `fx.font`) is collected while rendering and written on the page root as `data-gf="Family:400,700|…"`. Colours are only accepted as hex.

### 3.5 Image crop and frame (`ImageRef.crop`, `cropSrc`, `frame`)

Set in step 3's image editor (`ImageEditor.jsx`). An image whose ref is `undefined` (template default) gets an explicit ref first (`imageDefault(type, itemIndex)` in `edit.js`), so it can carry a crop or frame.

```js
crop     = { x, y, w, h (fractions of the original), rotate (deg), aspect ('slot'|'free'|'1'|'4/3'|'3/2'|'16/9'|'3/4') }
cropSrc  = 'data:image/webp;…'   // the cropped picture, max 1600 px; the original (src, or hero/ill artwork) is kept for re-cropping
frame    = { art ('polaroid'|'tilt'|'mat'|'gold'|'double'|'vintage'|'circle'|'arch'|'blob'|'offset'|'neon'),
             bw (px), bs (border style), bc (hex), br (px radius), sh ('none'|'soft'|'medium'|'strong'|'offset'|'hard'|'glow'),
             pad (px mat), bg (hex mat colour), tilt (deg) }
```

- **Crop:** Cropper.js on the original. Generated SVG artwork is turned into a large SVG data URL; web images are downloaded first (if their site blocks that, cropping is refused with a message and framing still works). "Fits this spot" uses the image's box from the box map, so the template doesn't cut it again.
- **Frame:** `Render.decorate()` (used by `imageRef`) swaps in `cropSrc` and adds `class="fr fr-{art}"` and inline CSS variables (`--ibw --ibs --ibc --ibr --ish --ipad --ibg --itf`) to the `<img>`/`<svg>`. The "image frames" rules at the end of `site.css` turn those into border, radius, shadow, padding, background, tilt and filter. Frame styles only set variables, and the editor's choices are inline variables, so the editor always wins. A framed image's container stops clipping (`:has(> .fr)`), so shadows and tilts show.
- **Re-shooting:** every change is saved to `S`, which changes the page HTML, so `Preview` makes a new screenshot through `Shot.take` (no extra wiring).
- "Use on all images in this section" copies the frame to every item image.

## 4. Logic per step

### Step 1: Your site
- **Import:** `Importer.fetchHtml(url)` then `runImport()` → `Importer.analyse(html, url)` → `applyImport(result)`. Most sites block this (browser CORS rules). When that happens, the user is offered **Paste code**: `#paste` → `analyse(html, url)`.
- **`applyImport` builds the project:**
  - `lib` = all found images.
  - Logo options = images flagged as logos, preferring ones whose label matches the site name.
  - Hero options = the first non-logo images.
  - SVG options are added for all three asset kinds.
  - The palette and font come from the site.
  - `pages[0]` = a suggested `hero` section plus the imported sections.
  - Each internal menu link becomes a placeholder page with status `waiting`.
  - The menu is imported, with Contact as the header button if one is found.
- **Other pages:** "Import" or "Import all pages" calls `importPage(page)` (fetch, then `analyse(…, {inner: true})`). The result replaces the page's sections, which start with a `pagehead`, and new images merge into `lib`. A page that blocks importing gets status `blocked`, and its **Paste code** button sets `ui.pasteFor`.
- **Fresh start:** `starter(kind)` (community, food, shop, services) creates Home sections plus one placeholder page per menu item.

### Step 2: Brand
- Asset tabs: logo, hero, illustrations. Source tabs:
  - **Generated:** `genSvg` keeps starred and in-use options and adds 6 new seeded ones.
  - **Upload:** `shrink()` turns the file into a data URL.
  - **AI images:** if `S.ai.endpoint` is set, it POSTs `{prompt, type, n: 4}` and expects `{images: [url]}`. Otherwise it adds seeded sample SVGs labelled "Sample for: …".
  - **From your site:** lists `lib` (searchable, logo-like images first, add an image by link). Choosing one copies it into `brand.opts` through `libOpt()`.
- Palettes: the site palette plus 8 presets; each colour can be edited with a colour picker. There are 6 font pairs.

### Step 3: Sections
- **Page bar:** choose a page (`ui.page`), add, rename or delete pages (Home can't be deleted).
- **The list** works on `SEC()` (the current page's sections): select, move up/down, delete, or add a section of any type after the selected one (`defaultSection`).
- **The editor** is built from `FIELDS[type]` + background/alignment + `ITEMF[type]` for items (add, move, delete). Inputs update `S` straight away and refresh the preview after 120 ms.
- **Image picker** (`<dialog id="picker">`): no image, the hero, illustrations 1–3, uploads (or upload a new one), and every `lib` image (searchable). The choice is stored as an `ImageRef`.
- **Reordering:** drag the ⠿ handle in the section list (SortableJS via `SortableList`), or use the ↑/↓ buttons (keyboard route). SortableJS moves the DOM; `SortableList` puts it back and the new order is committed to `S`, so React stays in charge.
- **Click-to-edit overlays:** the step 3 preview (`<Preview onPart>`) draws one empty, see-through `<button class="ov">` per box in the screenshot's box map (§5.1), positioned in percentages so they stay aligned at any width. They contain no page code. Hover shows a label ("Headline", "Item 2"…).
  - Clicking a **section** or **item** selects the section and opens the Inspector on its Section tab. Clicking **text** opens the Text tab for that field. Clicking an **image** opens the image editor (crop, border and frame, Replace image → picker). Image fields in the left editor also have a "Crop and frame" button.
  - Section boxes are keyboard-focusable; inner boxes are `tabindex=-1` (the section list is the keyboard route).
- **Inspector** (`Inspector.jsx`, fixed on the right, 380 px; the page and header make room on screens ≥1100 px; Esc closes):
  - **Text:** the field's content, Google font (`FontPicker`), size, weight (limited to the font's weights), letter spacing, line height, capitals, italic, colour (`ColourPicker`). Item fields style every item of the section.
  - **Section:** the section's own layout fields (layout/style/columns), space above/below, gap, content width, minimum height and content position, alignment, corner rounding, background (template choice or custom colour) and text colour.
  - **Page:** drag-and-drop list of the page's sections.
  - **Site:** Google Fonts for headings (with weight) and body text.

### Step 4: Menu
- Each screen size has its own `MenuConfig`. Allowed types: desktop `bar`, `mega`, `split`, `hamburger`; tablet `bar`, `split`, `hamburger`, `bottom`; phone `hamburger`, `bottom`. Options: logo position, sticky header, search, show button. A button copies the current style to the other sizes where it's allowed.
- **Link editor:** labels and links for top-level items and groups. You can move items, delete them, move a link into the group above, move it out of a group, and add sub-links, links or groups. The header button's label and link are set here too.
- The preview always shows Home. "Show the menu open" renders the `<details>` menus open.

### Step 5: Templates
- **Templates:** `Render.TEMPLATES` = 60 families × 3 variants = **180**. Each has a grade out of 99 (`Render.GRADES`) and a price from it (`Render.priceFor`: 70–74 free, 75–79 $50, 80–84 $100, 85–89 $250, 90+ $500, decided 2026-11-14). Step 5 shows **one card per design family** (`Render.DESIGNS`, 2026-11-15): the three variants (Classic, Soft, Crisp: corners, colour bands, spacing; `Render.VARIANT_HINTS`) are a switch on the card (`S.tpl.vk[family]`), each with its own grade and price. Order is **best match first** (`Render.designsFor(S)`): words on the site are matched against each family's business words (`FITS`); matches first, then all-purpose families (`GENERAL`), then families made for other industries; ties by rating. `RETIRED` families (Reel, film-only, removed 2026-11-15) and grades under 65 stay in `TEMPLATES` so older projects and pitches still open. Payment comes with the cart task.
  - Original families: Newsroom, App grid, Magazine, Minimal, Bold blocks, Community portal, Storyteller, Notice board.
  - Designer families (2026-11-14): Tide, Ember, Folio, Block party, Bento, Handmade, Glow, Swiss grid, Sunny retro, Lens. Their look lives at the end of `site.css` ("Designer families"). Extra family options in `render.js`: `gf` (the family's own Google Fonts, used unless the site picks fonts in the Inspector's Site tab), `dark` (a light palette is turned into a dark page; `pal()` returns that palette while drawing so logos and artwork match; `ink` bands become `soft`), `img` (cards show pictures unless turned off).
  - Flagship families (2026-11-14, `flag: 1`): Hearth (cafés and restaurants, menu list with prices from the card's small line), Volt (trades and services), Loom (makers and craft shops, product grid with price chips). Round 2: Bloom (salons; elegant serif, price list, booking card, staggered lookbook), Pulse (gyms; dark, Anton type, programs on photos, class schedule from the menu section, memberships from the booking section), Commons (community organizations and band offices; larger readable text, notices list, program cards, departments with phone numbers). Indigenous business series run 1 (consulting firms, modelled on a real Indigenous consulting firm; the demo uses an invented firm): Council (government-ready, credentials and two-column services), Meridian (dark hero, floating stats panel, service cards), Bridge (photo hero, centred step timeline). Run 2 (movers, storage and logistics; demo business Island Haul Moving & Storage is invented): Convoy (loud condensed type, road-stripe hero, accent stats band, hard-shadow cards, striped call to action), Homeward (friendly family mover: rounded split hero with a house badge, floating stats card, centred step cards, checklist rows), Freight (logistics: blueprint-grid hero, mono labels in IBM Plex Mono via the family's `mono` font, manifest-numbered list). Run 3 (lodges, cabins and outdoor tourism; demo business Fernhill Lake Lodge is invented): Timber (dark northern lodge, slab serif, full-screen photo, rate list on a panel, mosaic gallery), Shoreline (light lake resort, italic serif, wave under the opener, arched photos), Basecamp (outfitter, topographic-line backgrounds, badge labels, outlined cards with hard shadows). Run 4 (film, video and media production; demo business Northern Lantern Pictures is invented): Reel (cinematic dark, letterbox hero, laurel-wreath award stats, credits that roll, 2.39:1 stills), Marquee (festival poster: tilted poster hero, outlined FILM type, poster cards, big lead video), Frame (gallery wall: wide editorial hero, alternating numbered projects, mixed-width stills). The laurel is an original SVG used as a CSS mask. **Photo credits:** `Render.credits()` finds sample photos on a page and the footer gets a 'Photos by … on Pixabay' line with links (Pixabay asks API users to show where photos come from). Run 5 (marinas, boating and waterfront; demo business Pinecrest Bay Marina is invented): Harbour (navy and white, signal-flag eyebrow with GPS coordinates, harbour-board rate card, life-ring list), Waterline (bright, wave line under the opener, rounded stat and rate cards, amenity chips), Dockside (summer: polaroid hero, dock-plank stats band, tag cards with a punched hole, tilted snapshot gallery). Menu items only get sample photos in template-shots when the menu shows pictures. Run 6 (custom apparel, embroidery and printing; demo business Thunderbird Thread Co. is invented): Press (screen-print poster: halftone dots, off-register cyan/magenta headline shadows, registration-mark eyebrow, hard-shadow cards), Stitch (embroidery: dashed stitched outlines on buttons, cards and photos, round patch hero), Merch (clean storefront: product cards with prices, dark order-in-three-steps strip, chip list). Run 7 (sports bars, pubs, roadside motels and riverside restaurants; demo business Kingfisher Landing is invented): Taproom (dark sports bar: scoreboard stats with glowing numbers, chalkboard menu in a wood frame, game-night rows with an accent edge, ticket-stub booking card, jersey-stripe call to action), Roadside (retro motel and diner: sunburst opener, neon script eyebrow in Yellowtail via the family's `mono` font with `monoW: 400`, highway-shield stats, checkered diner menu, room-key booking card, checkered call-to-action edge), Patio (riverside restaurant and inn: scalloped awning under the header, photo opener with a menu-card welcome and awning stripe, plate-round stats, arched feature photo, striped booking card). On banded variants the Roadside and Patio stats keep the page colours. Run 8 (civil, excavation, concrete and shoreline contractors; demo business Ironwood Civil & Shoreline is invented): Bedrock (heavy civil: full-screen site photo with a hazard-stripe edge, spec-sheet stats under orange bars, numbered capability list, project cards with a heavy base, hazard-striped quote card and call to action), Breakwater (shoreline and environmental: rounded-top hero photo with a pile of armour stones, water-line stats band, stone-shaped bullets, organic feature photo, stones along the call-to-action edge), Rebar (concrete and foundations: rebar-mesh opener with orange safety caps, concrete-block stats with form-tie holes, safety-cap bullets, hard-shadow cards). List rows show their link only when the item has a real link or link text. New card style `steps` (Numbered steps) for any template. New card styles `menu` and `shop`. `wordmark: 1` (flagships, Ember, Glow) draws the business name in the template's type with a monogram instead of a generated sample logo (`logoHtml()`); an uploaded or site logo is always used as it is. Gentle motion (hover lifts, slow hero drift, scroll-in rise using CSS `animation-timeline: view()`); it only moves things, never hides them, so screenshots stay correct, and it's off under `prefers-reduced-motion`.
  - Pitch run 2026-11-15 (trappers, tanners and traditional-skills keepers; first made for a family pitch, the demo business Cedar Marsh Trapping & Tanning is invented): Trapline (dark, forced with `!important` palette variables; paw-print trails, numbers on pelt tags, numbered services, price list), Tannery (buckskin; the opening photo clipped to a stretched-hide shape inside a laced wooden frame, saddle-stitched cards, an oval maker's stamp eyebrow), Birchbark (birch-bark texture bands, an arched photo, cedar-leaf bullets). Photo robot kind `trapper`. A pitch's own photos (when the business has no website to link to) go in the Supabase storage bucket `pitch-photos`, in a random folder per pitch: readable only by exact link, not listable, GPS data stripped first; uploads are opened by a temporary policy for that folder and closed straight after.
  - Pitch run 2026-11-15 (water savings, plumbing and building-efficiency products; first made for a family pitch, The Smart Valve; the demo business Clearwell Water Savings is invented): Gauge (blueprint-grid opener with crop-mark photo frame, results on pressure-gauge dials drawn with conic gradients and a needle, a spec-sheet of STEP 01… steps, IBM Plex Mono labels), Flowline (full-bleed water opener with a wave edge, drop-shaped numbers, steps on a wave line, wave-edged card photos, drop bullets, blob-shaped feature photo, wave-topped call to action), Ledger (utility-statement numbers between double rules, receipts with a zigzag edge and a SAVED stamp, an invoice-style booking card, DM Mono labels). Photo robot kind `water`. **Logo mark:** a picture-only logo option with `mark: 1` sits beside the business name in wordmark families (`.wm-pic`); `pitch-build.mjs` sets it with `logoMark: true`, and `sample:<kind>:<photo id>` now picks an exact sample photo.
  - Pitch run 2026-11-15 (specialty drink cafés, coffee houses and drive-thrus; first made for a friend's pitch, Sweet Tree Cafe on Walpole Island; the demo business Cattail Coffee & Sweets is invented, `DEMO=drinks`, photo-robot kind `drinks`): Whip (syrup drips under the header, sprinkle-dot opener, cup-shaped arched photos with a striped straw, sticker-card drink menu with price pills, dome-topped stat cards, drip-edged call to action; Caprasimo + Figtree), Pourover (warm paper tones, italic Instrument Serif, IBM Plex Mono labels, coffee-ring stamps, tasting-card menu, origin-tag card labels, numbered brew-step list, receipt-edged order card), Letterboard (dark; framed felt letterboard menu with dotted leaders, drive-thru lane stripes around the numbers, taped photo cards, a loyalty punch card for the booking card and a gift-card call to action; Bebas Neue + Work Sans).
  - Pitch run 2026-11-16 (Indigenous consulting firms, government contracting and professional networks; made for the Mobile Resources Group pitch; demo business Northway Consulting Group, DEMO=consulting): **Tender** 85 (bid-binder tab dividers, a credentials seal, check-mark capability list), **Quill** 86 (four-colour band, a gold feather in the opener and CTA, step rounds in four colours), **Lattice** 85 (dark, a network of connected dots, a big member counter, an opportunity-to-contract pipeline).
  - **Sample photos:** The photo robot (`.github/workflows/photos.yml` + `studio/scripts/fetch-photos.mjs`) downloads free Pixabay photos per kind of business (cafe, trades, crafts, salon, fitness, community, consulting) into `studio/public/photos/<kind>/` (published with the studio at bakeaweb.com/photos/…) and writes `studio/src/lib/photos.json` with credits (photographer, Pixabay page). Needs the repo secret `PIXABAY_API_KEY`; run it from the Actions tab. Candidates are picked by eye and the rest deleted; running the robot again replaces the picks. `lib/photos.js` gives absolute URLs; Restaurant starters open with a `menu` section, shop starters with `products`, services starters add `booking`. `starter()` gives restaurant, shop and services starters hero options, card, gallery and feature photos (topics mixed) and puts every photo in `S.lib`. Step 1 credits Pixabay.
 `cd studio && node scripts/template-shots.mjs <folder> [filter]` renders every template with a demo business (`DEMO=food|services|crafts|salon|fitness|community|consulting`, `PAL=0–7` picks the palette, `NOPHOTOS=1` uses the generated artwork; it uses the sample photos matched to each card) at 1280 and 390 px, for grading by eye.
  - Variants: Classic (square corners), Soft (rounded corners, soft bands), Crisp (tight spacing, dark bands).
- **Fit check:** `Render.compat(template, S)` looks at every page's sections. A template doesn't fit if:
  - it doesn't offer the chosen **desktop** menu style;
  - a section type it can't show is used (Minimal: gallery);
  - a card grid has more cards than it allows (Storyteller: 6);
  - the site has neither a card grid nor a link list (Notice board needs one).
  Templates that don't fit are hidden unless "Show templates that don't fit" is ticked, and then they show the reasons.
- **Thumbnails** are made one after another: the Home page at 1280 px, cropped to 960 px, at half scale, JPEG.
- **The preview** shows the chosen page (`ui.tpage`) at all sizes or one size, with previous/next buttons and "Use this template" (`tpl.pick`).
- **Request development** needs a picked template, a name and a valid email. It adds a `Request` to `S.notes` (saved locally for now).

## 5. Rendering pipeline

```
S + template id + {pageId, sel, openMenu}
   │  Render.page()
   ▼
<div class="pv tf-{family} tv-{variant} dn-{density}" style="--bg --ink --acc --soft --oa --oi --line --mute --card --hf --bf --hw --r">
   ├─ <div class="vh vh-d">header(desktop)</div>   three headers; the visible one is chosen by
   ├─ <div class="vh vh-t">header(tablet)</div>    container queries on the frame width
   ├─ <div class="vh vh-p">header(phone)</div>     (≥1024 desktop, 600–1023 tablet, <600 phone)
   ├─ <main> sections of the page, each <section data-sec="id" class="s s-{type} bg-… al-…"> </main>
   ├─ <footer class="ft"> logo, motto, all links, bottom line </footer>
   └─ bottom tab bars (tablet/phone) when that menu type is chosen
   │  Shot.take(html, width, {maxH, scale, type})
   ▼
 1. Put the HTML in a hidden off-screen .cq box at the target width (so container queries apply).
 1b. If the page has data-gf, fonts.pageFonts() fetches each family's Google CSS (Latin subset), turns the font files into
    data URLs, adds the @font-face rules to the studio page (so measuring matches) and waits for them to load.
 2. Turn every <img> into a data URL (fetch → FileReader). Images that can't be fetched are dropped.
    `loading="lazy"` is removed first, because lazy images never load off-screen.
 3. Measure the full height and build the box map (sections, items, text, images; see §5.1).
 4. Serialize to XHTML and wrap it with the embedded fonts + lib/site.css in <svg><foreignObject>.
 5. Draw it on a canvas (scale 1 for desktop, 2 for tablet/phone, 0.5 for thumbnails) → blob URL.
 6. Results are cached by width + options + HTML (last 80).
```

- **How template differences work:** in `render.js`, each family has defaults for `hero` layout, `tiles` style, `feature` style and `videos` layout (`lead`, `grid` or `row`). In `site.css`, `.tf-{family}` rules adjust typography, headers, bands and panels. A section's own `layout` or `style` field overrides the family default.
- **Menus** are plain `<details>`/`<summary>` HTML (dropdowns, mega panel, drawer, bottom-bar "More"), so they need no JavaScript.
- **The site's colours** for the generated page are derived from the palette: text on accent, text on dark, lines, muted text and card background are all computed with `Art.mix` and `Art.onColor`.

### 5.1 Box map

While the page is still off-screen, `Shot` measures every tagged element and returns `map` with the picture:

```js
map = { width, height,             // CSS px of the render width (not the pixel scale), clipped to the picture
  boxes: [{ id, type, sectionIndex, x, y, width, height,
            sectionId, sectionType, itemIndex, field }] }
```

- `type`: `section`, `item`, `text` or `image`. Boxes are ordered sections → items → text/images, so later ones sit on top.
- `sectionIndex`: the section's position on the page; the footer is `-1` (`sectionId: 'footer'`).
- `id`: `sectionId[:itemIndex][:field]`, with `:2`, `:3`… for repeats (for example several paragraphs of one text field).
- The tags come from `render.js`: `data-sec`, `data-type`, `data-si` on each section (and the footer), `data-ii` on each item, `data-fk="{field}"` on each editable text or image. Field names match `FIELDS` / `ITEMF` in `edit.js`.
- `links`: every visible `<a href>` (not `#`) as `{ x, y, width, height, href, label }`, used by `Site.shotSite` to make screenshots clickable.
- Test hook: `BAKE.maps()` returns the maps of the step 3 preview's current screenshots (screenshot previews only).

### 5.2 Live preview and page files

- **`LivePreview`** draws each screen size in a same-origin iframe at its real width (1280, 820, 390 px), scaled to fit. The frame gets `site.css` and the page's Google Fonts once; later changes replace the page inside it, so typing doesn't flash. In step 3, clicking inside the frame finds the nearest `data-fk`, `data-ii` or `data-sec` and calls the same `onPart` as the screenshot overlays. Links don't navigate; menus open and close.
- **Placeholder links (since 2026-11-15):** every `<section>` gets `id="<section id>"`, the page root is `#top`, the footer `#footer`. `Render.page` points every menu entry, button and card whose link is `#` or empty at the best-matching section of that page (else Contact); "Get directions" and contact addresses open Google Maps. On a multi-page site a link named like one of its pages becomes `#@name`, which `Site.files` turns into that page's file. Tests: `tests/links.spec.js`.
- **Full site at publish (since 2026-11-15, `lib/complete.js`):** pitches are one Home page. `publishProject()` in `publish.js` runs `completeSite()`, which gives every menu entry without a page of its own a real page (page header + the matching Home section(s) via `Render.matchSection` + the Home call to action or contact). Outside links stay outside; projects that already have inner pages are unchanged; the saved project never changes. Admin › Publish therefore uploads `index.html` plus one file per menu entry, all linked. Test: `tests/complete.spec.js`.
- **`Site.html(S, tpl, {pageId})`** makes one complete HTML file: doctype, title, description, Google Fonts link, `site.css` inline and the page inside `<div class="cq">`. *View code* shows it.
- **`Site.files(S, tpl)`** makes every page (`index.html`, `about.html`…). Links that lead to the site's own pages (by imported address, or a `#` link whose text is a page name) point at those files.
- **`Site.shotSite(S, tpl, {pageId})`** makes a desktop (1280) and phone (390) WebP screenshot plus a small HTML page with a see-through `<a>` over every link from the box map. Used for BAKER portfolios on bakedbya.pro, so the template code is never published there.
- Test hook: `BAKE.site` is `Site`.

## 6. Importer logic (`Importer.analyse(html, url, log, {inner})`)

1. **Parse:** read the page with `DOMParser`. For home pages, also fetch up to 8 linked style sheets (4 s limit each) to find colours.
2. **Name and description:** from `og:site_name` or the `<title>`, and `meta description`. The footer motto comes from a `[class*="motto"], [class*="tagline"]` element.
3. **Image library:**
   - **Sources:** every `<img>` (checking `data-src`, `data-lazy-src`, `data-srcset`, `<picture>` sources, then `src` and `srcset`), inline and lazy backgrounds (`style="url()"`, `data-bg` and similar), `url()`s in the CSS, `og:image`, the JSON-LD logo, icons, and SVG logos in the header (turned into data URLs).
   - **Filtering:** placeholders, tracking pixels, ads and play-button overlays are skipped.
   - **Logo flag:** an image counts as a likely logo if "logo" or "wordmark" is in its name, alt text or class, or it sits in a logo or brand container.
4. **Colours:** count hex values; background = the most common light colour, text = the darkest of the common dark colours, accent = the first saturated colour that differs from the text, soft = a light tinted colour.
5. **Menu:** read header `<nav>` elements (skipping mobile copies). Groups come from `<details>` or nested `<ul>` lists, up to 14 items. **Internal pages** = same-site menu links (up to 24).
6. **Sections:**
   - **Card groups:** repeated siblings (same tag and first class, ≥3, ≥60 % of siblings), each with a link. Header, nav, footer, menus, share and tag lists are ignored. Wrappers like carousel slides are merged into their inner groups of the same kind. Groups that repeat (carousel clones) are dropped.
   - **Group title:** from a real tab label, a heading inside the group, `aria-label`, or the nearest heading before it.
   - **Each card** gives `title`, `text`, `link`, `image`, `eyebrow` (date, category or byline), `duration`, and whether it's a video (video-style link, video class, embedded player, play overlay, or a duration).
   - **Group type:** ≥50 % videos → `videos`; short rows with bold labels → `list`; otherwise `tiles`.
   - **Embeds:** YouTube/Vimeo/`<video>` → `videos`; audio players (libsyn, Spotify, Apple Podcasts…) → `podcast`.
   - **Other blocks:** `section`/`article` blocks that aren't card groups → `feature` (heading + subheading + paragraph) or `text`. Runs of 3+ `<article>`s are combined into one `tiles` "Stories" grid.
   - Sections are kept in page order, up to 14. Inner pages also start with a `pagehead`.

## 7. How the React app works

- **One store, mutable state.** `S` is a plain object (as before). Change it with `commit(S => { … })`: the change is applied, every component using `useStudio()` redraws, and `save()` writes to `localStorage` 250 ms later. Components read `S` directly; avoid `React.memo` on them, since `S` is changed in place. Change state only through `commit()` so Undo sees it; changes made outside `commit()` are folded into the next undo step.
- **Inputs are controlled:** they show values from `S` and call `commit` on every keystroke. React keeps focus, so no special handling is needed.
- **Previews:** `<Preview vp opt onPart>` builds the page HTML with `Render.page` on every redraw and, 120 ms after the HTML stops changing, asks `Shot.take` for screenshots. Late results from an older HTML are ignored. With `onPart` it also draws the click-to-edit overlays from the box map.
- **Template thumbnails** (`useThumbs` in Step5) are made one after another and restart after any change; `Shot`'s cache makes unchanged ones instant.
- **Font picker previews** download only the letters of each font's name, under a separate family name (`bake-preview …`), so a preview copy can never replace the full font on the page.
- **Styling:** existing look in `studio.css`, layered under Tailwind utilities, so a utility class always wins. Use Tailwind classes for new layout and the studio colours (`text-muted`, `border-line`, `bg-acc`, `text-onacc`, `bg-panel`, `text-warn`). Tailwind's reset (preflight) is deliberately off so generated pages measure the same in the page as in the screenshot.
- **Test hook:** `window.BAKE = { state(), maps(), site, premium }`: `maps()` returns the box maps of the step 3 preview's screenshots; `site` is `Site` (§5.2); `premium(fn)` is `setPremiumCheck` (tests use it to force screenshot previews). The testing robot (`studio/tests/`) uses this hook.
- **Testing robot:** `cd studio && npm test` runs Playwright tests of all five steps and the page engine on its own Vite server (random free port); any console error fails a test, and outside sites are blocked. `BAKE_TEST_BUILT=1 npm test` tests the finished build. First time on a computer: `npm run test:install`. GitHub runs the same tests on every push.

## 8. Known limits and what Supabase will add

| Now | Planned with Supabase |
|---|---|
| Work is saved only in one browser (`localStorage`) | Logins; projects saved per user |
| Requests are saved only locally | A `requests` table, so requests reach Delta Owl Eyes |
| Most sites block importing; users paste code | A server function that fetches pages (works for sites like APTN) |
| "AI images" makes sample SVGs | A server function calling OpenAI images, with the key kept on the server (`S.ai.endpoint`) |
| Template code ships to the browser, so a determined user could reuse it | Rendering and screenshots moved to the server, so only images reach the browser |
| Screenshots drop images whose servers block cross-site reading | The image proxy is handled by the same server function |
| Each card grid shows up to 12 items; each video row shows 12, and the "row" layout 8 | (design choice, adjustable in `render.js`) |

## 9. Pitch Book (private before/after redesigns)

- **What:** the Indigenous business series picks real Indigenous businesses from the RezSite directory (`rezsite_businesses.score` 2–6, site working), designs up to 3 redesigns per run, and keeps them in a private Pitch Book so Chris and Leah can offer the redesign on a call.
- **Data:** Supabase table `redesign_pitches` (project `bakeaweb`, Canada). Row-level security: only RezSite admins (`is_rezsite_admin()`) can read or change it. Columns: business link (`business_id`), `rating_before` / `rating_after` (1–9), `before_shot` (screenshot link of their live site), `before_notes`, `info` (their public contact details), `photos` (**links** to their own photos, never copies), `base_project` (the studio project with their content), `redesigns` (`[{tpl, name, grade, project?}]`; a redesign's own `project` overrides `base_project`), `pitch` (talking points), `status` (drafted / offered / interested / accepted / declined), `notes`.
- **Page:** `studio/pitches.html` + `src/pitches.js` (a second Vite entry, built to `docs/pitches.html`, `noindex`). The code is public; the data needs an admin sign-in (password or emailed link). Each redesign renders live with `Site.html`; *Open in studio* makes a save point and loads it into the studio.
- **Inner pages (every pitch run, since 2026-11-15):** while building a pitch, read the business's other pages (About, Services, Contact… one per menu entry) and put them in the spec as `pages: [{ name, url, sections }]`, named exactly like their menu entries; `pitch-build.mjs` saves them in `base_project.pages` after Home. Keep their own words (it is their site), dropping quote-form boilerplate. Sites whose pages a web reader can't open are read with the built-in browser (same-origin fetch of each page, converted to `pagehead` + `text`/`list` sections). Menu entries with no page of their own get one made from Home at publish. `pitchProject(design, base)` (`site.js`) gives every design the pitch's inner pages, fills the missing ones and, for pitches only, pads thin pages with the matching Home part and ends each inner page with the Home call to action (`completeSite(P, {enrich:true})`). The prospect preview and Pitches page can click through every page (`Site.previewPage`, `tameLinks(…, onPage)`; links to pages are `#@name`). The 10 pitches of 2026-11-15 were filled this way (backup of the old rows: table `redesign_pitches_backup_20261115`).
- **Making one:** `cd studio && node scripts/pitch-build.mjs spec.json outDir` turns a pitch spec (the business's details, kept **outside** this repo) into `project.json` and screenshots; Claude then inserts the row. Sample photos use `sample:<kind>:<topic>`; their URLs are rewritten to `https://bakeaweb.com/photos/...` before saving.
- **Copyright rule:** templates in the studio never carry a real business's name, text, logo or photos (invented substitutes only). Real details live only in the private Pitch Book. Copy is rewritten, not copied.
- **Photo robot:** besides the Actions button, pushing a change to `studio/photo-request.txt` (one line: kinds then mode, e.g. `moving replace`) starts it.

## 9. Publishing to the free addresses (BAKE Host, since 2026-11-15)

- **Admin** (BAKER Studio header → *Admin*, or `?v=baker#admin`; `studio/src/admin/Admin.jsx`, loaded only when opened): Supabase login (admins in `rezsite_admins`), lists **published sites** (live check, Unpublish), **this studio's current work** (publish `S` with `S.tpl.pick`) and **every pitch** (choose a design, an address and a page name, then Publish).
- **`lib/publish.js`**: `publishSite({domain, name, project, tpl, meta})` → `Site.files()` → uploads each page to the public Storage bucket `sites` at `<domain>/<pagename>/<file>` (old leftover pages removed) → upserts `published_sites` (unique per domain + pagename). Also `unpublishSite`, `siteUrl`, `nameProblem` (3–12 chars, a–z 0–9 -, starts with a letter, reserved names), `suggestName`, `checkLive` (looks for the Worker's `x-bake-site` header). Studio file links are rewritten to `https://bakeaweb.com/`.
- **`host/`**: Cloudflare Worker `bake-host` serving `pagename.rezsite.com`, `pagename.bakedby.me`, `bakedbya.pro/pagename/` from Storage; everything else passes through to GitHub Pages. Deployed by `.github/workflows/host.yml` with secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. Setup steps: `host/README.md`.
