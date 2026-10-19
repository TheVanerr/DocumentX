/* ── Kılavuz içinde arama (Ctrl+F) ──
   CSS Custom Highlight API ile işaretler: DOM'a <mark> eklenmez, böylece
   A4 sayfa yerleşimi bozulmaz. Türkçe büyük/küçük harf duyarsız (İ/ı). */

let searchRanges = [];
let searchIndex = -1;
let searchTimer = null;

function initSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  input.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(runSearch, 180);
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchStep(e.shiftKey ? -1 : 1);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeSearch();
    }
  });
  document.addEventListener('guide-rendered', () => {
    if (isSearchOpen()) runSearch({ keepIndex: true });
  });
}

function isSearchOpen() {
  const bar = document.getElementById('searchBar');
  return !!bar && bar.classList.contains('open');
}

function openSearch() {
  const bar = document.getElementById('searchBar');
  const input = document.getElementById('searchInput');
  bar.classList.add('open');
  input.focus();
  input.select();
  if (input.value) runSearch({ keepIndex: true });
}

function closeSearch() {
  const bar = document.getElementById('searchBar');
  if (!bar) return;
  bar.classList.remove('open');
  clearSearchHighlights();
  searchRanges = [];
  searchIndex = -1;
  updateSearchCount();
}

function clearSearchHighlights() {
  if (window.CSS && CSS.highlights) {
    CSS.highlights.delete('dx-search');
    CSS.highlights.delete('dx-search-active');
  }
}

function foldCase(s) {
  return s.toLocaleLowerCase('tr-TR');
}

function runSearch(opts = {}) {
  const input = document.getElementById('searchInput');
  const q = foldCase(input.value.trim());
  const prevIndex = searchIndex;
  searchRanges = [];
  searchIndex = -1;
  clearSearchHighlights();

  if (q.length >= 2) {
    const root = document.getElementById('pagesContainer');
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const p = node.parentElement;
        if (!p || p.closest('.measure, .xref-page, .toc-leader')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let node;
    while ((node = walker.nextNode())) {
      const raw = node.nodeValue;
      let text = foldCase(raw);
      // Harf dönüşümü uzunluğu değiştirdiyse (nadiren) indeksler kayar; basit küçültmeye düş.
      if (text.length !== raw.length) text = raw.toLowerCase();
      if (text.length !== raw.length) continue;
      let from = 0;
      let idx;
      while ((idx = text.indexOf(q, from)) !== -1) {
        const r = new Range();
        r.setStart(node, idx);
        r.setEnd(node, idx + q.length);
        searchRanges.push(r);
        from = idx + q.length;
        if (searchRanges.length >= 2000) break;
      }
      if (searchRanges.length >= 2000) break;
    }
  }

  if (searchRanges.length && window.CSS && CSS.highlights) {
    CSS.highlights.set('dx-search', new Highlight(...searchRanges));
  }
  if (searchRanges.length) {
    searchIndex = opts.keepIndex && prevIndex >= 0 ? Math.min(prevIndex, searchRanges.length - 1) : 0;
    focusSearchHit(!opts.keepIndex);
  }
  updateSearchCount();
}

function searchStep(dir) {
  if (!isSearchOpen()) { openSearch(); return; }
  if (!searchRanges.length) return;
  searchIndex = (searchIndex + dir + searchRanges.length) % searchRanges.length;
  focusSearchHit(true);
  updateSearchCount();
}

function focusSearchHit(scroll) {
  const r = searchRanges[searchIndex];
  if (!r) return;
  if (window.CSS && CSS.highlights) CSS.highlights.set('dx-search-active', new Highlight(r));
  if (!scroll) return;
  const area = document.getElementById('contentArea');
  const rect = r.getBoundingClientRect();
  const areaRect = area.getBoundingClientRect();
  if (rect.top < areaRect.top + 40 || rect.bottom > areaRect.bottom - 40) {
    area.scrollTo({ top: area.scrollTop + rect.top - areaRect.top - area.clientHeight / 3, behavior: 'auto' });
  }
}

function updateSearchCount() {
  const el = document.getElementById('searchCount');
  if (!el) return;
  const q = document.getElementById('searchInput').value.trim();
  if (!q) { el.textContent = ''; el.classList.remove('none'); return; }
  el.textContent = searchRanges.length
    ? `${searchIndex + 1}/${searchRanges.length}${searchRanges.length >= 2000 ? '+' : ''}`
    : 'yok';
  el.classList.toggle('none', !searchRanges.length && q.length >= 2);
}
