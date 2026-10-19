/* ── Kenar çubuğu: bölüm ağacı + sayfa küçük resimleri ──
   Kaydırırken görünen bölüm/sayfa vurgulanır. Ctrl+B ile aç/kapat. */

let sidebarTab = 'outline';
let sidebarHeadingTops = [];   // [{ top, entryIdx }]
let sidebarPageTops = [];      // [{ top, pageIdx }]
let sidebarThumbObserver = null;
let sidebarScrollRaf = 0;

const THUMB_W = 132;
const THUMB_SCALE = THUMB_W / 794;

function initSidebar() {
  const open = prefGet('sidebar', true);
  document.body.classList.toggle('sidebar-open', !!open);
  sidebarTab = prefGet('sidebarTab', 'outline');
  syncSidebarTabs();

  document.addEventListener('guide-rendered', refreshSidebar);
  document.addEventListener('zoom-changed', () => requestAnimationFrame(measureSidebarTargets));
  window.addEventListener('resize', () => requestAnimationFrame(measureSidebarTargets));
  document.getElementById('contentArea').addEventListener('scroll', () => {
    if (sidebarScrollRaf) return;
    sidebarScrollRaf = requestAnimationFrame(() => {
      sidebarScrollRaf = 0;
      syncSidebarActive();
    });
  }, { passive: true });
}

function toggleSidebar() {
  const open = !document.body.classList.contains('sidebar-open');
  document.body.classList.toggle('sidebar-open', open);
  prefSet('sidebar', open);
  if (open) refreshSidebar();
}

function setSidebarTab(tab) {
  sidebarTab = tab;
  prefSet('sidebarTab', tab);
  syncSidebarTabs();
  refreshSidebar();
}

function syncSidebarTabs() {
  document.querySelectorAll('.sb-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === sidebarTab));
}

function refreshSidebar() {
  if (!document.body.classList.contains('sidebar-open')) return;
  const body = document.getElementById('sidebarBody');
  if (!body) return;
  body.innerHTML = '';
  if (sidebarThumbObserver) { sidebarThumbObserver.disconnect(); sidebarThumbObserver = null; }

  if (sidebarTab === 'data') {
    buildDataPanel(body);
    return;
  }
  if (viewMode === 'compare') {
    body.innerHTML = '<div class="sb-empty">Karşılaştırma görünümünde bölüm ağacı kullanılmaz.</div>';
    return;
  }
  if (sidebarTab === 'pages') buildThumbs(body);
  else buildOutline(body);
  requestAnimationFrame(() => {
    measureSidebarTargets();
    syncSidebarActive();
  });
}

function buildOutline(body) {
  const entries = (lastRender && lastRender.entries) || [];
  if (!entries.length) {
    body.innerHTML = '<div class="sb-empty">Kılavuz seçilmedi.</div>';
    return;
  }
  const frag = document.createDocumentFragment();
  entries.forEach((e, i) => {
    if (e.level > 3) return;
    const row = document.createElement('button');
    row.className = `sb-row sb-l${e.level}`;
    row.dataset.entryIdx = String(i);
    row.innerHTML = `<span class="sb-num">${escapeHtml(fmtNum(e.number))}</span><span class="sb-label">${escapeHtml(e.title)}</span>`;
    row.title = `${fmtNum(e.number)} ${e.title} — çift tık: düzenleyicide aç`;
    row.ondblclick = () => {
      const target = document.getElementById('toc-anchor-' + e.anchorId);
      if (target && target.dataset.src) openEditor(target.dataset.src, target.dataset.line);
    };
    row.onclick = () => {
      const target = document.getElementById('toc-anchor-' + e.anchorId);
      if (target) scrollToPage(target, { exact: true, flash: true });
    };
    frag.appendChild(row);
  });
  body.appendChild(frag);
}

function buildThumbs(body) {
  const pages = [...document.querySelectorAll('#pagesContainer > .a4-page')];
  if (viewMode !== 'pdf' || !pages.length) {
    body.innerHTML = '<div class="sb-empty">Sayfa küçük resimleri PDF görünümünde gösterilir.</div>';
    return;
  }
  const frag = document.createDocumentFragment();
  pages.forEach((page, i) => {
    const item = document.createElement('button');
    item.className = 'sb-thumb';
    item.dataset.pageIdx = String(i);
    const frame = document.createElement('div');
    frame.className = 'sb-thumb-frame';
    // Sayfa ölçüsü A4/A5/Letter'a göre değişir; zoom'dan bağımsız offset ölçüleri kullanılır.
    const pw = page.offsetWidth || 794;
    const ph = page.offsetHeight || 1123;
    frame.style.width = THUMB_W + 'px';
    frame.style.height = Math.round(ph * THUMB_W / pw) + 'px';
    frame.dataset.scale = String(THUMB_W / pw);
    item.appendChild(frame);
    const label = document.createElement('span');
    label.className = 'sb-thumb-no';
    label.textContent = page.dataset.pageNumber || (page.classList.contains('cover-page') ? '—' : String(i + 1));
    item.appendChild(label);
    item.onclick = () => scrollToPage(page, { instant: false });
    frag.appendChild(item);
  });
  body.appendChild(frag);

  // Küçük resimler yalnızca görünür olduklarında oluşturulur (yüzlerce sayfada bellek dostu).
  sidebarThumbObserver = new IntersectionObserver((list) => {
    list.forEach(entry => {
      if (!entry.isIntersecting) return;
      const item = entry.target;
      sidebarThumbObserver.unobserve(item);
      const page = pages[Number(item.dataset.pageIdx)];
      const frame = item.querySelector('.sb-thumb-frame');
      if (!page || frame.firstChild) return;
      const clone = page.cloneNode(true);
      clone.removeAttribute('id');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      clone.querySelectorAll('[data-toc-anchor],[data-goto],[data-src]').forEach(el => {
        delete el.dataset.tocAnchor;
        delete el.dataset.goto;
        delete el.dataset.src;
      });
      clone.classList.add('sb-thumb-page');
      clone.style.transform = `scale(${frame.dataset.scale || THUMB_SCALE})`;
      frame.appendChild(clone);
    });
  }, { root: body, rootMargin: '300px 0px' });
  body.querySelectorAll('.sb-thumb').forEach(el => sidebarThumbObserver.observe(el));
}

/* Başlık ve sayfaların içerik alanındaki dikey konumları (ikili arama için). */
function measureSidebarTargets() {
  const area = document.getElementById('contentArea');
  if (!area) return;
  const areaTop = area.getBoundingClientRect().top - area.scrollTop;
  const entries = (lastRender && lastRender.entries) || [];
  sidebarHeadingTops = [];
  entries.forEach((e, i) => {
    if (e.level > 3) return;
    const el = document.getElementById('toc-anchor-' + e.anchorId);
    if (el) sidebarHeadingTops.push({ top: el.getBoundingClientRect().top - areaTop, entryIdx: i });
  });
  sidebarPageTops = [...document.querySelectorAll('#pagesContainer > .a4-page')]
    .map((p, i) => ({ top: p.getBoundingClientRect().top - areaTop, pageIdx: i }));
}

function lastAtOrBefore(list, y) {
  let lo = 0;
  let hi = list.length - 1;
  let ans = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (list[mid].top <= y) { ans = mid; lo = mid + 1; } else hi = mid - 1;
  }
  return ans < 0 ? null : list[ans];
}

function syncSidebarActive() {
  if (!document.body.classList.contains('sidebar-open')) return;
  const area = document.getElementById('contentArea');
  const body = document.getElementById('sidebarBody');
  if (!area || !body) return;
  const y = area.scrollTop + area.clientHeight * 0.25;

  const selector = sidebarTab === 'pages' ? '.sb-thumb' : '.sb-row';
  const hit = sidebarTab === 'pages'
    ? lastAtOrBefore(sidebarPageTops, y)
    : lastAtOrBefore(sidebarHeadingTops, y);
  const key = sidebarTab === 'pages' ? 'pageIdx' : 'entryIdx';
  const value = hit ? String(hit[key]) : '';

  let activeEl = null;
  body.querySelectorAll(selector).forEach(el => {
    const on = el.dataset[key] === value;
    el.classList.toggle('active', on);
    if (on) activeEl = el;
  });
  if (activeEl) {
    const r = activeEl.getBoundingClientRect();
    const br = body.getBoundingClientRect();
    if (r.top < br.top || r.bottom > br.bottom) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }
}

function showDataTab() {
  if (!document.body.classList.contains('sidebar-open')) toggleSidebar();
  setSidebarTab('data');
}

/* ── DATA sekmesi: SSOT anahtarları; tıkla → yer tutucuyu kopyala ── */
let sidebarDataFilter = '';

function buildDataPanel(body) {
  if (!currentData || !currentData.order || !currentData.order.length) {
    body.innerHTML = '<div class="sb-empty">Bu projede DATA dosyası yok.<br>Proje klasörüne "&lt;proje&gt; DATA" dosyası ekleyin.</div>';
    return;
  }
  const used = new Map();
  document.querySelectorAll('#pagesContainer .data-val').forEach(el => {
    const k = normDataKey(el.dataset.key.replace(/#\d+$/, ''));
    used.set(k, (used.get(k) || 0) + 1);
  });

  const head = document.createElement('div');
  head.className = 'sb-data-head';
  head.innerHTML = '<input type="text" class="sb-filter" placeholder="Anahtar veya değer ara…" spellcheck="false" />' +
    '<div class="sb-data-hint">Tıkla: <code>{{BLOK:Anahtar}}</code> kopyalanır · ↗ DATA satırını açar</div>';
  body.appendChild(head);
  const list = document.createElement('div');
  body.appendChild(list);
  const input = head.querySelector('input');
  input.value = sidebarDataFilter;

  const render = () => {
    const q = normDataKey(input.value);
    sidebarDataFilter = input.value;
    list.innerHTML = '';
    currentData.order.forEach(name => {
      const block = currentData.blocks[name];
      const entries = block.entries.filter(e => !q || normDataKey(e.key).includes(q) ||
        normDataKey(e.value).includes(q) || normDataKey(name).includes(q));
      if (!entries.length) return;
      const group = document.createElement('details');
      group.className = 'sb-data-block';
      group.open = !!q || currentData.order.length <= 6;
      const filled = block.entries.filter(e => e.value.trim()).length;
      group.innerHTML = `<summary><span>${escapeHtml(name)}</span><span class="sb-data-fill">${filled}/${block.entries.length}</span></summary>`;
      entries.forEach(e => {
        const row = document.createElement('div');
        row.className = 'sb-data-row' + (e.value.trim() ? '' : ' empty');
        const n = used.get(normDataKey(`${name}:${e.key}`)) || 0;
        row.innerHTML = `<button class="sb-data-copy" title="{{${escapeHtml(name)}:${escapeHtml(e.key)}}} kopyala">` +
          `<span class="sb-data-key">${escapeHtml(e.key)}${n ? ` <b class="sb-data-used" title="Belgede ${n} kez kullanılıyor">${n}</b>` : ''}</span>` +
          `<span class="sb-data-val">${escapeHtml(e.value.trim() || '[EKSİK]')}</span></button>` +
          '<button class="qc-open-src" title="DATA dosyasında aç">↗</button>';
        row.querySelector('.sb-data-copy').onclick = async () => {
          const text = `{{${name}:${e.key}}}`;
          if (typeof isEditorOpen === 'function' && isEditorOpen()) {
            edInsert(text);
            showToast('Düzenleyiciye eklendi: ' + text, 'success');
            return;
          }
          try { await navigator.clipboard.writeText(text); showToast('Kopyalandı: ' + text, 'success'); }
          catch (err) { showToast('Panoya kopyalanamadı', 'error'); }
        };
        row.querySelector('.qc-open-src').onclick = () => openSourceFile(currentData.file, e.line);
        group.appendChild(row);
      });
      list.appendChild(group);
    });
    if (!list.children.length) list.innerHTML = '<div class="sb-empty">Eşleşen anahtar yok.</div>';
  };
  input.addEventListener('input', render);
  render();
}
