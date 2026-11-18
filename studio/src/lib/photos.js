/* Sample photos for starter sites and templates. The photo robot (.github/workflows/photos.yml,
   scripts/fetch-photos.mjs) downloads them from Pixabay into public/photos/ and writes photos.json with credits. */
import list from './photos.json';

export const PHOTO_SOURCE = { name: list.source || 'Pixabay', url: list.sourceUrl || 'https://pixabay.com/' };
/* Starter kinds (step 1) → photo kinds */
export const STARTER_PHOTOS = { food: 'cafe', services: 'trades', shop: 'crafts' };

/** Photos of one kind, each with an absolute src (works in the studio, in previews and in published pages). */
export function samplePhotos(kind) {
  const k = (list.kinds || {})[kind]; if (!k) return [];
  const base = typeof document != 'undefined' ? document.baseURI : 'https://bakeaweb.com/';
  return k.photos.map(p => Object.assign({}, p, { src: new URL(p.file, new URL('/', base)).href, label: 'Sample photo: ' + p.topic + ' (' + PHOTO_SOURCE.name + ', by ' + p.by + ')' }));
}
