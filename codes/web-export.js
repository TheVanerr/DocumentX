/* Etkileşimli web kılavuzu — tüm diller tek HTML dosyasında.
   Dil seçici, bölüm menüsü (kaydırmayı izler), arama, mobil uyumlu düzen.
   Görseller bir kez gömülür (DX_IMG) ve dillere paylaştırılır. */
const fs = require('fs');
const path = require('path');

const WEB_CSS = `
body.dx-web { padding: 0 !important; background: #eef1f6; }
.dxw-bar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 50; height: 54px;
  display: flex; align-items: center; gap: 12px; padding: 0 16px;
  background: #fff; border-bottom: 3px solid var(--dxw-brand, #4a7cf7);
  box-shadow: 0 2px 10px rgba(0,0,0,.08); font-family: 'Segoe UI', system-ui, sans-serif;
}
.dxw-menu { display: none; border: 1px solid #cbd5e0; background: #fff; border-radius: 6px; padding: 5px 10px; font-size: 16px; cursor: pointer; }
.dxw-title { flex: 1; min-width: 0; font-weight: 700; font-size: 15px; color: #1a2540; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.dxw-search { width: 240px; padding: 7px 10px; border: 1px solid #cbd5e0; border-radius: 6px; font-size: 13px; outline: none; }
.dxw-search:focus { border-color: var(--dxw-brand, #4a7cf7); }
.dxw-count { min-width: 52px; font-size: 12px; color: #4a5568; text-align: center; }
.dxw-lang { padding: 6px 8px; border: 1px solid #cbd5e0; border-radius: 6px; font-size: 13px; background: #fff; }
.dxw-nav {
  position: fixed; top: 54px; bottom: 0; left: 0; width: 290px; z-index: 40;
  overflow-y: auto; padding: 12px 8px 40px; background: #fff; border-right: 1px solid #e2e8f0;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
.dxw-nav a { display: flex; gap: 6px; padding: 5px 8px; border-radius: 5px; color: #2d3748; text-decoration: none; font-size: 13px; line-height: 1.35; }
.dxw-nav a:hover { background: #f1f5fb; }
.dxw-nav a.active { background: #e8efff; color: #1a2540; box-shadow: inset 3px 0 0 var(--dxw-brand, #4a7cf7); }
.dxw-nav a.l1 { margin-top: 8px; font-weight: 700; }
.dxw-nav a.l2 { padding-left: 18px; }
.dxw-nav a.l3 { padding-left: 30px; font-size: 12px; color: #4a5568; }
.dxw-nav .n { flex-shrink: 0; min-width: 30px; color: #718096; }
.dxw-main { margin-left: 290px; padding: 78px 20px 60px; }
.dxw-doc[hidden] { display: none !important; }
::highlight(dxw-hit) { background-color: rgba(255, 214, 10, .6); }
::highlight(dxw-cur) { background-color: #ff9632; }
@media (max-width: 1000px) {
  .dxw-menu { display: block; }
  .dxw-nav { transform: translateX(-100%); transition: transform .2s; box-shadow: 4px 0 16px rgba(0,0,0,.15); }
  body.dxw-nav-open .dxw-nav { transform: none; }
  .dxw-main { margin-left: 0; padding: 70px 6px 40px; }
  .dxw-search { width: 140px; }
  .html-inline-cover, .html-cover-section { height: auto !important; min-height: 0 !important; aspect-ratio: 794 / 1123; }
}
@media print {
  .dxw-bar, .dxw-nav { display: none !important; }
  .dxw-main { margin: 0; padding: 0; }
}
`;

const WEB_JS = `
(function () {
  var docs = Array.prototype.slice.call(document.querySelectorAll('.dxw-doc'));
  var nav = document.getElementById('dxwNav');
  var sel = document.getElementById('dxwLang');
  var search = document.getElementById('dxwSearch');
  var count = document.getElementById('dxwCount');
  var active = null, heads = [], hits = [], hitIdx = -1;

  function loadImages(doc) {
    doc.querySelectorAll('img[data-dx-img]').forEach(function (img) {
      img.src = window.DX_IMG[img.getAttribute('data-dx-img')] || '';
      img.removeAttribute('data-dx-img');
    });
  }
  function buildNav() {
    nav.innerHTML = '';
    heads = Array.prototype.slice.call(active.querySelectorAll('.html-flow-content .sec-h'));
    heads.forEach(function (h) {
      var lvl = +((h.className.match(/sec-h(\\d)/) || [])[1] || 2);
      if (lvl > 3) return;
      var text = h.textContent.trim();
      var m = text.match(/^([\\d.]+)\\s+(.*)$/);
      var a = document.createElement('a');
      a.href = '#';
      a.className = 'l' + lvl;
      a.innerHTML = '<span class="n"></span><span></span>';
      a.firstChild.textContent = m ? m[1] : '';
      a.lastChild.textContent = m ? m[2] : text;
      a.onclick = function (e) { e.preventDefault(); go(h); document.body.classList.remove('dxw-nav-open'); };
      a._head = h;
      nav.appendChild(a);
    });
  }
  function go(el) {
    var y = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  function setLang(lang) {
    docs.forEach(function (d) { d.hidden = d.getAttribute('data-lang') !== lang; });
    active = docs.filter(function (d) { return !d.hidden; })[0] || docs[0];
    active.hidden = false;
    loadImages(active);
    document.documentElement.lang = active.getAttribute('data-lang');
    document.title = active.getAttribute('data-title');
    document.getElementById('dxwTitle').textContent = active.getAttribute('data-title');
    sel.value = active.getAttribute('data-lang');
    try { history.replaceState(null, '', '#lang=' + sel.value); } catch (e) {}
    buildNav();
    runSearch();
    spy();
  }
  function spy() {
    var top = 90, cur = null;
    for (var i = 0; i < heads.length; i++) { if (heads[i].getBoundingClientRect().top <= top) cur = heads[i]; else break; }
    Array.prototype.forEach.call(nav.children, function (a) {
      var on = a._head === cur;
      a.classList.toggle('active', on);
      if (on && (a.offsetTop < nav.scrollTop || a.offsetTop > nav.scrollTop + nav.clientHeight - 40)) nav.scrollTop = a.offsetTop - 80;
    });
  }
  function fold(s) { return s.toLocaleLowerCase(document.documentElement.lang === 'tr' ? 'tr-TR' : undefined); }
  function runSearch() {
    var q = fold(search.value.trim());
    hits = []; hitIdx = -1;
    if (window.CSS && CSS.highlights) { CSS.highlights.delete('dxw-hit'); CSS.highlights.delete('dxw-cur'); }
    if (q.length >= 2) {
      var w = document.createTreeWalker(active, NodeFilter.SHOW_TEXT);
      var n;
      while ((n = w.nextNode()) && hits.length < 1000) {
        var t = fold(n.nodeValue);
        if (t.length !== n.nodeValue.length) continue;
        var i = 0, k;
        while ((k = t.indexOf(q, i)) !== -1) { var r = new Range(); r.setStart(n, k); r.setEnd(n, k + q.length); hits.push(r); i = k + q.length; }
      }
      if (hits.length && window.CSS && CSS.highlights) CSS.highlights.set('dxw-hit', new Highlight(...hits));
    }
    count.textContent = q.length >= 2 ? (hits.length ? '0/' + hits.length : 'yok') : '';
  }
  function step(d) {
    if (!hits.length) return;
    hitIdx = (hitIdx + d + hits.length) % hits.length;
    var r = hits[hitIdx];
    if (window.CSS && CSS.highlights) CSS.highlights.set('dxw-cur', new Highlight(r));
    var b = r.getBoundingClientRect();
    window.scrollTo({ top: b.top + window.scrollY - window.innerHeight / 3 });
    count.textContent = (hitIdx + 1) + '/' + hits.length;
  }
  var timer;
  search.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(runSearch, 200); });
  search.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); step(e.shiftKey ? -1 : 1); } });
  sel.addEventListener('change', function () { setLang(sel.value); window.scrollTo(0, 0); });
  document.getElementById('dxwMenu').onclick = function () { document.body.classList.toggle('dxw-nav-open'); };
  window.addEventListener('scroll', function () { window.requestAnimationFrame(spy); }, { passive: true });
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[data-goto]');
    if (!link || !active.contains(link)) return;
    var t = null;
    try { t = active.querySelector(link.getAttribute('data-goto')); } catch (err) {}
    if (!t) return;
    e.preventDefault();
    go(t);
  });
  var want = (location.hash.match(/lang=([a-z]{2})/) || [])[1] || document.body.getAttribute('data-default-lang');
  setLang(want);
})();
`;

function escapeText(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* langs: [{ lang, title, html }]; toDataUri(src) → data URI | null (main.js sağlar) */
function buildWebManual({ langs, defaultLang, brandColor, css, toDataUri }) {
  const images = {};
  const keyOf = new Map();
  const swap = (html) => html.replace(/<img\b([^>]*?)\bsrc="([^"]+)"([^>]*)>/gi, (tag, a, src, b) => {
    if (/^data:/i.test(src) && src.length < 4096) return tag;   // küçük gömülü işaretler olduğu gibi
    if (!keyOf.has(src)) {
      const uri = /^data:/i.test(src) ? src : toDataUri(src);
      if (!uri) return tag;
      const k = 'i' + keyOf.size;
      keyOf.set(src, k);
      images[k] = uri;
    }
    return `<img${a}src="" data-dx-img="${keyOf.get(src)}"${b}>`;
  });

  const sections = langs.map(l =>
    `<section class="dxw-doc" data-lang="${escapeText(l.lang)}" data-title="${escapeText(l.title)}" hidden>${swap(l.html)}</section>`
  ).join('\n');
  const options = langs.map(l => `<option value="${escapeText(l.lang)}">${escapeText(l.lang.toUpperCase())}</option>`).join('');

  return `<!DOCTYPE html>
<html lang="${escapeText(defaultLang)}" class="html-export">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeText((langs[0] || {}).title)}</title>
  <style>${css}${WEB_CSS}</style>
</head>
<body class="html-export dx-web" data-default-lang="${escapeText(defaultLang)}" style="--dxw-brand:${escapeText(brandColor || '#4a7cf7')}">
<header class="dxw-bar">
  <button class="dxw-menu" id="dxwMenu" aria-label="Bölümler">&#9776;</button>
  <div class="dxw-title" id="dxwTitle"></div>
  <input class="dxw-search" id="dxwSearch" type="search" placeholder="Ara / Search / Suchen" />
  <span class="dxw-count" id="dxwCount"></span>
  <select class="dxw-lang" id="dxwLang" aria-label="Dil / Language">${options}</select>
</header>
<nav class="dxw-nav" id="dxwNav"></nav>
<main class="dxw-main">
${sections}
</main>
<script>window.DX_IMG = ${JSON.stringify(images)};</script>
<script>${WEB_JS}</script>
</body>
</html>`;
}

module.exports = { buildWebManual };
