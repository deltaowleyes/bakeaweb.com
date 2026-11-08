// Before a build: remove the previous build. The finished studio lives in the repo's docs/ folder,
// which is the ONLY folder GitHub Pages publishes (https://bakeaweb.com/). Everything in docs/ is made
// by the build, so it is safe to remove it all.
import { rmSync } from 'node:fs';
rmSync(new URL('../../docs', import.meta.url), { recursive: true, force: true });
