import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// npm run build puts the built studio in the repo's docs/ folder, the only folder GitHub Pages
// publishes (https://bakeaweb.com/). Relative paths keep it working in any folder.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: { outDir: 'dist', emptyOutDir: true, rollupOptions: { input: { main: 'index.html', studio: 'studio/index.html', pitches: 'pitches.html', preview: 'preview.html', callers: 'callers.html', taste: 'taste.html' } } }   // pitches.html = private Pitches page (admin login); preview.html = the link sent to a prospect; callers.html = the callers' page (Leah, Brandee); taste.html = Chris and Leah's own design ratings
});
