import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './lib/site.css';   // the generated site's look; must apply in the page so screenshots are measured correctly
import { S } from './store.js';
import App from './App.jsx';
import { getEditMaps } from './components/Preview.jsx';
import { Site } from './lib/site.js';
import { setPremiumCheck } from './editions.js';

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
window.BAKE = {   // test hook (ARCHITECTURE.md §7)
  state: () => S,
  maps: getEditMaps,   // box maps of the step 3 preview screenshots
  site: Site,          // page files for publishing: Site.files(S, tplId), Site.shotSite(S, tplId)
  premium: setPremiumCheck   // premium(fn): fn(S) true = an unpaid premium item is in use (screenshot previews)
};
