// After a build: copy studio/dist into the repo's docs/ folder. GitHub Pages publishes ONLY docs/
// (Settings → Pages → Branch: main, Folder: /docs), so plans, docs and source code stay off the website.
// docs/ gets: the built studio (index.html, assets/), .nojekyll, CNAME (bakeaweb.com) and ROADMAP.json
// (read by the BAKE PRO panel).
import { cpSync, mkdirSync, writeFileSync } from 'node:fs';
const root = new URL('../../', import.meta.url);
const docs = new URL('docs/', root);
mkdirSync(docs, { recursive: true });
cpSync(new URL('../dist/', import.meta.url), docs, { recursive: true });
writeFileSync(new URL('.nojekyll', docs), '');            // serve files as they are, no Jekyll processing
writeFileSync(new URL('CNAME', docs), 'bakeaweb.com\n');  // keeps the site on https://bakeaweb.com/
cpSync(new URL('ROADMAP.json', root), new URL('ROADMAP.json', docs));
console.log('Placed the build in docs/ (the only folder GitHub Pages publishes).');
