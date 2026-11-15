/* Links inside a preview iframe (srcdoc). A plain "#" link would load the page around the preview INSIDE the
   preview (with scripts off, so it hangs on "Loading…"). This catches every click instead:
   - "#section" scrolls to that part of the preview,
   - real web, email and phone links open in a new tab,
   - placeholder links ("#", or pages not built yet) stay put and call onPlaceholder(label). */
export function tameLinks(iframe, onPlaceholder) {
  const hook = () => {
    const doc = iframe.contentDocument; if (!doc || doc.__tamed) return; doc.__tamed = true;
    doc.addEventListener('click', e => {
      const a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
      e.preventDefault();
      const h = (a.getAttribute('href') || '').trim();
      if (/^#.+/.test(h)) { const t = doc.getElementById(decodeURIComponent(h.slice(1))); if (t) { t.scrollIntoView({ behavior: 'smooth' }); return; } }
      if (/^(https?:|mailto:|tel:)/i.test(h)) { window.open(h, '_blank', 'noopener'); return; }
      onPlaceholder && onPlaceholder((a.textContent || '').trim());
    }, true);
    doc.addEventListener('submit', e => { e.preventDefault(); onPlaceholder && onPlaceholder('form'); }, true);
  };
  iframe.addEventListener('load', hook);
}
