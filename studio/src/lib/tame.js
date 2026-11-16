/* Links inside a preview iframe (srcdoc). A plain "#" link would load the page around the preview INSIDE the
   preview (with scripts off, so it hangs on "Loading…"). This catches every click instead:
   - "#section" scrolls smoothly to that part of the preview (below the sticky header), and closes an open
     menu (phone drawer, dropdowns) so the part it scrolled to can be seen,
   - real web, email and phone links open in a new tab,
   - placeholder links ("#", or pages not built yet) stay put and call onPlaceholder(label). */
export function tameLinks(iframe, onPlaceholder) {
  const hook = () => {
    const doc = iframe.contentDocument; if (!doc || doc.__tamed) return; doc.__tamed = true;
    const win = doc.defaultView;
    const closeMenus = () => doc.querySelectorAll('details[open]').forEach(d => { d.open = false; });
    /* height of the sticky header that is showing at this width, so the heading isn't hidden under it */
    const headerH = () => {
      for (const h of doc.querySelectorAll('header.sk')) { const r = h.getBoundingClientRect(); if (r.height && getComputedStyle(h).display != 'none' && h.offsetParent !== null) return r.height; }
      return 0;
    };
    doc.addEventListener('click', e => {
      const a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
      e.preventDefault();
      const h = (a.getAttribute('href') || '').trim();
      if (/^#.+/.test(h)) {
        const t = doc.getElementById(decodeURIComponent(h.slice(1)));
        if (t) {
          closeMenus();
          const se = doc.scrollingElement || doc.documentElement;
          const y = h == '#top' ? 0 : t.getBoundingClientRect().top + (win.scrollY || se.scrollTop) - headerH() - 8;
          try { win.scrollTo({ top: Math.max(0, y), behavior: 'smooth' }); } catch (err) { se.scrollTop = Math.max(0, y); }
          return;
        }
      }
      if (/^(https?:|mailto:|tel:)/i.test(h)) { closeMenus(); window.open(h, '_blank', 'noopener'); return; }
      onPlaceholder && onPlaceholder((a.textContent || '').trim());
    }, true);
    doc.addEventListener('submit', e => { e.preventDefault(); onPlaceholder && onPlaceholder('form'); }, true);
  };
  iframe.addEventListener('load', hook);
}
