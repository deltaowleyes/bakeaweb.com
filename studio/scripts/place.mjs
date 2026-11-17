// After a build: copy studio/dist into the repo's docs/ folder. GitHub Pages publishes ONLY docs/
// (Settings → Pages → Branch: main, Folder: /docs), so plans, docs and source code stay off the website.
// docs/ gets: the built studio (index.html, assets/), .nojekyll, CNAME (bakeaweb.com) and ROADMAP.json
// (read by the BAKE PRO panel), and assets/site-builder.js (for bake-pay).
import { cpSync, mkdirSync, writeFileSync } from 'node:fs';
const root = new URL('../../', import.meta.url);
const docs = new URL('docs/', root);
mkdirSync(docs, { recursive: true });
cpSync(new URL('../dist/', import.meta.url), docs, { recursive: true });
writeFileSync(new URL('.nojekyll', docs), '');            // serve files as they are, no Jekyll processing
writeFileSync(new URL('CNAME', docs), 'bakeaweb.com\n');  // keeps the site on https://bakeaweb.com/
cpSync(new URL('ROADMAP.json', root), new URL('ROADMAP.json', docs));
// The site builder for automatic e-Transfer publishing (pay/README.md): the same template code the studio already
// ships in assets/, as one file the bake-pay function loads.
cpSync(new URL('pay/function/site-build.js', root), new URL('assets/site-builder.js', docs));
console.log('Placed the build in docs/ (the only folder GitHub Pages publishes).');
