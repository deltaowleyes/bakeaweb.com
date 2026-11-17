/* Entry for the server copy of the site builder (bundled by pay/bundle.mjs into site-build.js).
   Same steps as studio/src/lib/publish.js siteFiles(): full project → completeSite → Site.files, links to https://bakeaweb.com/. */
import { Site, pitchProject } from '../../studio/src/lib/site.js';
import { completeSite } from '../../studio/src/lib/complete.js';
import { blank } from '../../studio/src/store.js';

function fullProject(p) {
  const b = blank(), o = Object.assign(b, JSON.parse(JSON.stringify(p || {})));
  o.ui = b.ui; o.brand = Object.assign(blank().brand, o.brand || {}); o.menu = Object.assign(blank().menu, o.menu || {});
  return o;
}

/** The files of a pitch design as a published site: [{ path, content }]. */
export function buildPitchSite(design, baseProject) {
  return Site.files(completeSite(fullProject(pitchProject(design, baseProject))), design.tpl);
}
export const BUILT_AT = __BUILT_AT__;
