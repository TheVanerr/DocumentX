let currentModel = '';
let currentLang = 'tr';
let currentRev = '';
let currentDate = '';
let currentFirma = 'DOLFIN';
let viewMode = 'pdf';
let lastGuideCache = null;

async function onModelChange(value) {
  currentModel = value;
  const emptyState = document.getElementById('emptyState');
  const pagesContainer = document.getElementById('pagesContainer');

  pagesContainer.innerHTML = '';

  if (!value) {
    emptyState.style.display = 'flex';
    return;
  }

  emptyState.style.display = 'none';

  const res = await window.electronAPI.getGuide(value);

  if (!res || !res.ok) {
    pagesContainer.innerHTML = infoCard(
      res && res.error === 'yaml-parse'
        ? `<strong>${value}</strong> YAML dosyası okunamadı.<br><span style="font-size:12px;color:#a00;">${escapeHtml(res.message || '')}</span>`
        : `<strong>${value}</strong> için YAML dosyası bulunamadı.`
    );
    return;
  }

  if (!res.tree || !res.tree.length) {
    pagesContainer.innerHTML = infoCard(
      `<strong>${res.model}</strong> için içerik bulunamadı. Tüm md dosyaları boş görünüyor.`
    );
    return;
  }

  await renderGuide(res.model, res.tree, pagesContainer);
}

function infoCard(html) {
  return `
    <div style="color:#4a5568; text-align:center; padding:60px; font-size:14px;">
      <p style="margin-bottom:8px; font-size:32px;">📄</p>
      <p>${html}</p>
    </div>`;
}

function collectImageSrcs(blocks) {
  const srcs = new Set();
  for (const el of blocks) {
    el.querySelectorAll?.('img.md-img').forEach(img => {
      const s = img.getAttribute('src');
      if (s && !/^data:/i.test(s)) srcs.add(s);
    });
  }
  return [...srcs];
}

function preloadImages(srcs) {
  if (!srcs.length) return Promise.resolve();
  return Promise.all(srcs.map(src => new Promise(resolve => {
    const img = new Image();
    img.onload = img.onerror = () => resolve();
    img.src = src;
  })));
}

function measureImages(srcs) {
  if (!srcs.length) return Promise.resolve(new Map());
  return Promise.all(srcs.map(src => new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve({
      src,
      w: img.naturalWidth || 1,
      h: img.naturalHeight || 1
    });
    img.onerror = () => resolve({ src, w: 4, h: 3 });
    img.src = src;
  }))).then(list => {
    const map = new Map();
    list.forEach(({ src, w, h }) => map.set(src, { w, h }));
    return map;
  });
}

/* ── Kılavuzu oluştur ── */
async function renderGuide(modelName, tree, container) {
  lastGuideCache = { modelName, tree };
  if (viewMode === 'html') {
    await renderHtmlGuide(modelName, tree, container);
  } else {
    await renderPdfGuide(modelName, tree, container);
  }
}

async function renderPdfGuide(modelName, tree, container) {
  const { blocks, entries } = buildBlocks(tree);
  await preloadImages(collectImageSrcs(blocks));
  const contentPages = computePages(blocks);

  for (const e of entries) {
    const idx = pageIndexOfAnchor(contentPages, e.anchorId);
    e.contentIdx = idx < 0 ? 0 : idx;
  }

  const { blocks: tocBlocks, rows } = buildTocBlocks(entries);
  const tocPages = computePages(tocBlocks);
  const T = tocPages.length;

  for (const r of rows) {
    r.pageSpan.textContent = String(T + r.entry.contentIdx + 1);
  }

  container.innerHTML = '';
  container.className = 'pages-container';
  renderPages(tocPages, container, 1, modelName);
  renderPages(contentPages, container, T + 1, modelName);

  // Kapak sayfası: 1. sayfa, numarasız
  const cover = buildCoverPage({
    model: modelName, rev: currentRev, date: currentDate, variant: currentFirma
  });
  container.insertBefore(cover, container.firstChild);

  // Bölüm başlıkları → İçindekiler dönüş linkleri
  container.querySelectorAll('[data-toc-anchor]').forEach(el => {
    const anchorId = el.dataset.tocAnchor;
    const a = document.createElement('a');
    a.href = '#toc-row-' + anchorId;
    a.style.cssText = 'color:inherit;text-decoration:none;display:block;';
    a.addEventListener('click', (evt) => {
      evt.preventDefault();
      const target = document.getElementById('toc-row-' + anchorId);
      if (target) scrollToPage(target);
    });
    while (el.firstChild) a.appendChild(el.firstChild);
    el.appendChild(a);
  });

  // PDF hrefs → A4 sayfa başlarına güncelle (tam sayfa görünümü)
  container.querySelectorAll('a.toc-row[id]').forEach(row => {
    const anchorId = row.id.replace('toc-row-', '');
    const target = document.getElementById('toc-anchor-' + anchorId);
    if (target) {
      const pg = target.closest('.a4-page');
      if (pg) row.href = '#' + pg.id;
    }
  });

  container.querySelectorAll('[data-toc-anchor] a[href]').forEach(a => {
    const rowId = a.getAttribute('href').replace('#', '');
    const tocRow = document.getElementById(rowId);
    if (tocRow) {
      const pg = tocRow.closest('.a4-page');
      if (pg) a.href = '#' + pg.id;
    }
  });
}

async function renderHtmlGuide(modelName, tree, container) {
  const { blocks, entries } = buildBlocks(tree);
  const imageSrcs = collectImageSrcs(blocks);
  const imageDims = await measureImages(imageSrcs);

  const tocBlocks = buildHtmlTocBlocks(entries);

  container.innerHTML = '';
  container.className = 'pages-container';

  const doc = document.createElement('div');
  doc.className = 'html-document html-unified';

  const coverSection = document.createElement('div');
  coverSection.className = 'html-cover-section';
  const cover = buildCoverPage({
    model: modelName, rev: currentRev, date: currentDate, variant: currentFirma
  });
  cover.classList.add('html-inline-cover');
  coverSection.appendChild(cover);
  doc.appendChild(coverSection);

  const tocSection = document.createElement('div');
  tocSection.className = 'html-toc-section';
  tocSection.id = 'html-toc';
  for (const b of tocBlocks) tocSection.appendChild(b);
  doc.appendChild(tocSection);

  const contentSection = document.createElement('div');
  contentSection.className = 'html-content-section';

  if (currentFirma && typeof buildHeader === 'function') {
    const header = buildHeader(currentFirma, modelName);
    header.classList.add('html-doc-header');
    const _brand = (typeof HEADER_BRANDS !== 'undefined' && HEADER_BRANDS[currentFirma])
      ? HEADER_BRANDS[currentFirma] : { color: '#ff0000' };
    contentSection.style.setProperty('--brand-color', _brand.color);
    contentSection.appendChild(header);
  }

  const mainContent = document.createElement('div');
  mainContent.className = 'html-flow-content';
  const htmlBlocks = applyHtmlFigureLayout(blocks);
  for (const b of htmlBlocks) mainContent.appendChild(b);
  contentSection.appendChild(mainContent);
  doc.appendChild(contentSection);

  container.appendChild(doc);
  applyHtmlFigureSmartFit(mainContent, imageDims);

  container.querySelectorAll('[data-toc-anchor]').forEach(el => {
    const anchorId = el.dataset.tocAnchor;
    const a = document.createElement('a');
    a.href = '#toc-row-' + anchorId;
    a.style.cssText = 'color:inherit;text-decoration:none;display:block;';
    a.addEventListener('click', (evt) => {
      evt.preventDefault();
      const target = document.getElementById('toc-row-' + anchorId);
      if (target) scrollToPage(target);
    });
    while (el.firstChild) a.appendChild(el.firstChild);
    el.appendChild(a);
  });
}

async function setViewMode(mode) {
  if (mode !== 'html' && mode !== 'pdf') return;
  if (viewMode === mode) return;

  viewMode = mode;
  document.body.classList.toggle('view-html', mode === 'html');
  document.body.classList.toggle('view-pdf', mode === 'pdf');
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === mode);
  });

  if (lastGuideCache) {
    const container = document.getElementById('pagesContainer');
    await renderGuide(lastGuideCache.modelName, lastGuideCache.tree, container);
    applyZoom();
  }
}

function mdLevel(el) { return parseInt(el.tagName.slice(1), 10); }

/* Üst seviye tek numaraya nokta ekler: "1" -> "1.", "1.1" -> "1.1" */
function fmtNum(n) { return /^\d+$/.test(n) ? n + '.' : n; }

/* Başlık metninde önceden yazılmış numarayı ("1.", "1.3.5." vb.) temizler. */
function stripNum(t) { return String(t).replace(/^\s*\d+(?:\.\d+)*\.?(?=\s)\s*/, ''); }

/* Bölüm ağacını numaralandırarak bloklara çevirir.
   - Klasör hiyerarşisi: 1 (ana bölüm), 1.1 (alt bölüm) ...
   - md dosyası içindeki başlıklar: 1.1.1, 1.1.2 (bir alt seviye)
   İçindekiler için her başlık işaretlenir. */
function buildBlocks(tree) {
  const blocks = [];
  const entries = [];
  let anchorIdx = 0;

  function addEntry(number, title, level, el) {
    const id = 'toc-anchor-' + anchorIdx;
    el.id = id;
    el.dataset.tocAnchor = String(anchorIdx);
    entries.push({ number, title, level, anchorId: String(anchorIdx), contentIdx: 0 });
    anchorIdx++;
  }

  function walk(nodes, prefix, level) {
    nodes.forEach((node, i) => {
      const N = prefix ? `${prefix}.${i + 1}` : `${i + 1}`;
      const secBlocks = mdToBlocks(node.content || '');

      const headings = secBlocks.filter(b => /^H[1-6]$/.test(b.tagName));
      const anchorLevel = headings.length ? mdLevel(headings[0]) : null;

      // Bölümün kendi başlığı (numara = N)
      let titleEl = headings.length ? headings[0] : null;
      let nodeTitle = titleEl ? (stripNum(titleEl.textContent.trim()) || prettifyId(node.id)) : prettifyId(node.id);

      if (titleEl) {
        titleEl.textContent = `${fmtNum(N)} ${nodeTitle}`;
        titleEl.className = `md-h sec-h sec-h${Math.min(level, 6)}`;
      } else {
        titleEl = document.createElement('h' + Math.min(level + 1, 6));
        titleEl.className = `md-h sec-h sec-h${Math.min(level, 6)}`;
        titleEl.textContent = `${fmtNum(N)} ${nodeTitle}`;
        secBlocks.unshift(titleEl);
      }
      addEntry(N, nodeTitle, level, titleEl);
      if (level === 1) titleEl.dataset.pageBreakBefore = 'true';

      // md içindeki diğer başlıklar → alt kırılım (N.1, N.1.1 ...)
      let counters = [];
      for (const b of secBlocks) {
        if (!/^H[1-6]$/.test(b.tagName) || b === titleEl) continue;

        const rel = (anchorLevel == null) ? 1 : mdLevel(b) - anchorLevel;
        let depth = rel < 1 ? 1 : rel;
        depth = Math.min(depth, counters.length + 1);

        counters = counters.slice(0, depth);
        counters[depth - 1] = (counters[depth - 1] || 0) + 1;

        const subNum = `${N}.${counters.slice(0, depth).join('.')}`;
        const subTitle = stripNum(b.textContent.trim());
        const subLevel = level + depth;

        b.textContent = `${fmtNum(subNum)} ${subTitle}`;
        b.className = `md-h sec-h sec-h${Math.min(subLevel, 6)}`;
        addEntry(subNum, subTitle, subLevel, b);
      }

      for (const b of secBlocks) blocks.push(b);

      if (node.children && node.children.length) walk(node.children, N, level + 1);
    });
  }

  walk(tree, '', 1);
  return { blocks, entries };
}

function prettifyId(id) {
  return String(id)
    .replace(/^\d+[-_]?/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim();
}

function pageIndexOfAnchor(pages, anchorId) {
  return pages.findIndex(p =>
    p.some(el => el.dataset && el.dataset.tocAnchor === anchorId)
  );
}

/* ── İçindekiler blokları ── */
function buildTocBlocks(entries) {
  const blocks = [];
  const rows = [];

  const h = document.createElement('h1');
  h.className = 'toc-title';
  h.textContent = 'İÇİNDEKİLER';
  blocks.push(h);

  for (const e of entries) {
    const row = document.createElement('a');
    row.className = `toc-row toc-l${Math.min(e.level, 4)}`;
    row.id = 'toc-row-' + e.anchorId;
    row.href = '#toc-anchor-' + e.anchorId;
    row.style.paddingLeft = ((e.level - 1) * 22) + 'px';
    row.addEventListener('click', (evt) => {
      evt.preventDefault();
      const target = document.getElementById('toc-anchor-' + e.anchorId);
      if (target) scrollToPage(target);
    });

    const num = document.createElement('span');
    num.className = 'toc-num';
    num.textContent = fmtNum(e.number);

    const label = document.createElement('span');
    label.className = 'toc-label';
    label.textContent = e.title;

    const leader = document.createElement('span');
    leader.className = 'toc-leader';

    const pageSpan = document.createElement('span');
    pageSpan.className = 'toc-page';

    row.appendChild(num);
    row.appendChild(label);
    row.appendChild(leader);
    row.appendChild(pageSpan);
    blocks.push(row);
    rows.push({ entry: e, pageSpan });
  }

  return { blocks, rows };
}

/* HTML görünümü — sayfa numarası ve leader olmadan içindekiler */
function buildHtmlTocBlocks(entries) {
  const blocks = [];

  const h = document.createElement('h1');
  h.className = 'toc-title';
  h.textContent = 'İÇİNDEKİLER';
  blocks.push(h);

  for (const e of entries) {
    const row = document.createElement('a');
    row.className = `toc-row toc-html toc-l${Math.min(e.level, 4)}`;
    row.id = 'toc-row-' + e.anchorId;
    row.href = '#toc-anchor-' + e.anchorId;
    row.style.paddingLeft = ((e.level - 1) * 22) + 'px';
    row.addEventListener('click', (evt) => {
      evt.preventDefault();
      const target = document.getElementById('toc-anchor-' + e.anchorId);
      if (target) scrollToPage(target);
    });

    const num = document.createElement('span');
    num.className = 'toc-num';
    num.textContent = fmtNum(e.number);

    const label = document.createElement('span');
    label.className = 'toc-label';
    label.textContent = e.title;

    row.appendChild(num);
    row.appendChild(label);
    blocks.push(row);
  }

  return blocks;
}

/* ── Kapak meta (Rev / Tarih) ── */
function onCoverMetaChange() {
  const revInput = document.getElementById('revInput');
  const dateInput = document.getElementById('dateInput');
  const dateLabel = document.getElementById('dateLabel');

  currentRev = revInput.value;
  currentDate = dateInput.value;
  dateLabel.textContent = currentDate ? formatCoverDate(currentDate) : 'Tarih';

  updateCover();
}

function onFirmaChange(v) {
  currentFirma = v;
  if (currentModel) onModelChange(currentModel);
}

function updateCover() {
  const container = document.getElementById('pagesContainer');
  const existing = container.querySelector('.cover-page');
  if (existing && currentModel) {
    const cover = buildCoverPage({
      model: currentModel, rev: currentRev, date: currentDate, variant: currentFirma
    });
    if (viewMode === 'html') cover.classList.add('html-inline-cover');
    existing.replaceWith(cover);
  }
}

function openDatePicker() {
  const dateInput = document.getElementById('dateInput');
  if (dateInput.showPicker) {
    try { dateInput.showPicker(); return; } catch (e) {}
  }
  dateInput.focus();
  dateInput.click();
}

function isHeadingEl(el) {
  return el && el.nodeType === 1 && /^H[1-6]$/.test(el.tagName);
}

/* ── A4 Sayfalama: blokları ölçüp sayfa dizilerine böler ── */
function getContentMetrics() {
  const probe = document.createElement('div');
  probe.className = 'a4-page';
  probe.style.cssText = 'position:absolute;visibility:hidden;left:-9999px;top:0';
  document.body.appendChild(probe);
  const cs = getComputedStyle(probe);
  const lineH = parseFloat(cs.getPropertyValue('--line-h')) || 22;
  const pageH = parseFloat(cs.height) || parseFloat(cs.minHeight) || 1123;
  const pt = parseFloat(cs.paddingTop);
  const pb = parseFloat(cs.paddingBottom);
  const maxH = pageH - pt - pb;
  document.body.removeChild(probe);
  return { MAX: maxH > 0 ? maxH : 909, LINE_H: lineH };
}

function computePages(blocks) {
  const { MAX, LINE_H } = getContentMetrics();
  const ORPHAN_MIN = LINE_H * 3;

  const pages = [[]];
  let cur = pages[0];

  const measure = document.createElement('div');
  measure.className = 'a4-page measure';
  const mContent = document.createElement('div');
  mContent.className = 'page-content';
  measure.appendChild(mContent);
  document.body.appendChild(measure);

  const h = () => mContent.scrollHeight;

  function newPage() {
    pages.push([]);
    cur = pages[pages.length - 1];
    mContent.innerHTML = '';
  }

  function splitAndPush(el) {
    const source = el.cloneNode(true);
    const kids = Array.from(source.childNodes);
    let part = el.cloneNode(false);
    mContent.innerHTML = '';
    mContent.appendChild(part);

    const commit = () => {
      cur.push(part);
      newPage();
      part = el.cloneNode(false);
      mContent.appendChild(part);
    };

    for (const kid of kids) {
      part.appendChild(kid);
      if (h() <= MAX) continue;

      if (kid.nodeType === Node.TEXT_NODE) {
        part.removeChild(kid);
        const words = kid.textContent.split(/(\s+)/);
        let tn = document.createTextNode('');
        part.appendChild(tn);
        for (const w of words) {
          const prev = tn.textContent;
          tn.textContent = prev + w;
          if (h() > MAX && prev.trim()) {
            tn.textContent = prev;
            commit();
            tn = document.createTextNode(w.replace(/^\s+/, ''));
            part.appendChild(tn);
          }
        }
      } else {
        part.removeChild(kid);
        if (part.childNodes.length === 0) {
          part.appendChild(kid);
        } else {
          commit();
          part.appendChild(kid);
        }
      }
    }
    cur.push(part);
  }

  function placeTable(tableEl) {
    const thead = tableEl.querySelector('thead');
    const tbody = tableEl.querySelector('tbody');
    const TABLE_RESERVE = 0;
    const TABLE_MAX = MAX;

    if (!thead || !tbody || tbody.rows.length === 0) {
      mContent.appendChild(tableEl);
      if (h() <= TABLE_MAX) { cur.push(tableEl); return; }
      if (cur.length === 0) {
        cur.push(tableEl);
        return;
      }
      mContent.removeChild(tableEl);
      newPage();
      placeTable(tableEl);
      return;
    }

    const bodyRows = Array.from(tbody.rows);

    const makeSubTable = (rows) => {
      const t = tableEl.cloneNode(false);
      t.appendChild(thead.cloneNode(true));
      const tb = document.createElement('tbody');
      rows.forEach(r => tb.appendChild(r.cloneNode(true)));
      t.appendChild(tb);
      return t;
    };

    let start = 0;

    while (start < bodyRows.length) {
      let end = start;
      let sub = makeSubTable([]);
      mContent.appendChild(sub);

      while (end < bodyRows.length) {
        const next = makeSubTable(bodyRows.slice(start, end + 1));
        mContent.removeChild(sub);
        mContent.appendChild(next);
        if (h() <= TABLE_MAX) {
          sub = next;
          end++;
        } else {
          mContent.removeChild(next);
          mContent.appendChild(sub);
          break;
        }
      }

      // Mevcut sayfaya başlık + tek satır + 1 satır rezerv bile sığmıyorsa
      // tabloyu sonraki sayfadan devam ettir.
      if (end === start && cur.length > 0) {
        mContent.removeChild(sub);
        newPage();
        continue;
      }

      // Tek bir tablo satırı boş A4 sayfaya dahi sığmıyorsa satırı bölmeden
      // yerleştir; aksi halde sonsuz sayfalama döngüsü oluşur.
      if (end === start) {
        mContent.removeChild(sub);
        sub = makeSubTable([bodyRows[start]]);
        mContent.appendChild(sub);
        end++;
      }

      cur.push(sub);
      start = end;
      if (start < bodyRows.length) newPage();
    }
  }

  function splitListItemAcrossPages(listEl, li, olStart) {
    const tag = listEl.tagName;
    let continuation = false;

    function startPart() {
      const list = document.createElement(tag.toLowerCase());
      list.className = listEl.className;
      if (tag === 'OL' && olStart > 1 && !continuation) list.start = olStart;
      const newLi = document.createElement('li');
      if (continuation) newLi.classList.add('li-continued');
      list.appendChild(newLi);
      mContent.appendChild(list);
      return { list, newLi };
    }

    function appendWords(target, text) {
      const words = text.split(/(\s+)/);
      let tn = document.createTextNode('');
      target.appendChild(tn);
      for (const w of words) {
        const prev = tn.textContent;
        tn.textContent = prev + w;
        if (h() > MAX && prev.trim()) {
          tn.textContent = prev;
          commitPart();
          tn = document.createTextNode(w.replace(/^\s+/, ''));
          partLi.appendChild(tn);
        }
      }
    }

    function splitElementWords(el) {
      const shell = el.cloneNode(false);
      partLi.appendChild(shell);
      if (el.childNodes.length === 1 && el.firstChild.nodeType === Node.TEXT_NODE) {
        const words = el.firstChild.textContent.split(/(\s+)/);
        let tn = document.createTextNode('');
        shell.appendChild(tn);
        for (const w of words) {
          const prev = tn.textContent;
          tn.textContent = prev + w;
          if (h() > MAX && prev.trim()) {
            tn.textContent = prev;
            commitPart();
            const nextShell = el.cloneNode(false);
            partLi.appendChild(nextShell);
            tn = document.createTextNode(w.replace(/^\s+/, ''));
            nextShell.appendChild(tn);
          }
        }
        return;
      }
      shell.appendChild(el.cloneNode(true));
    }

    let partList;
    let partLi;

    function commitPart() {
      cur.push(partList);
      newPage();
      continuation = true;
      ({ list: partList, newLi: partLi } = startPart());
    }

    ({ list: partList, newLi: partLi } = startPart());
    const kids = Array.from(li.cloneNode(true).childNodes);

    for (const kid of kids) {
      partLi.appendChild(kid.cloneNode(true));
      if (h() <= MAX) continue;

      partLi.removeChild(partLi.lastChild);

      if (kid.nodeType === Node.TEXT_NODE) {
        appendWords(partLi, kid.textContent);
      } else if (partLi.childNodes.length === 0) {
        splitElementWords(kid);
        if (h() > MAX) {
          partLi.lastChild.remove();
          commitPart();
          partLi.appendChild(kid.cloneNode(true));
        }
      } else {
        commitPart();
        partLi.appendChild(kid.cloneNode(true));
        if (h() > MAX) {
          partLi.removeChild(partLi.lastChild);
          splitElementWords(kid);
        }
      }
    }

    cur.push(partList);
  }

  function placeList(listEl) {
    const tag = listEl.tagName;
    const items = Array.from(listEl.children).filter(c => c.tagName === 'LI');
    if (!items.length) return;

    const makeSubList = (lis, olStart) => {
      const list = document.createElement(tag.toLowerCase());
      list.className = listEl.className;
      if (tag === 'OL' && olStart > 1) list.start = olStart;
      lis.forEach(li => list.appendChild(li.cloneNode(true)));
      return list;
    };

    let start = 0;

    while (start < items.length) {
      let end = start;
      let sub = makeSubList([], tag === 'OL' ? start + 1 : 1);
      mContent.appendChild(sub);

      while (end < items.length) {
        const next = makeSubList(items.slice(start, end + 1), tag === 'OL' ? start + 1 : 1);
        mContent.removeChild(sub);
        mContent.appendChild(next);
        if (h() <= MAX) {
          sub = next;
          end++;
        } else {
          mContent.removeChild(next);
          mContent.appendChild(sub);
          break;
        }
      }

      if (end === start) {
        mContent.removeChild(sub);
        splitListItemAcrossPages(listEl, items[start], tag === 'OL' ? start + 1 : 1);
        start++;
        continue;
      }

      cur.push(sub);
      start = end;
      if (start < items.length) newPage();
    }
  }

  function placeFigureIfNeeded(el) {
    if (el.tagName !== 'P' || !el.classList.contains('md-figure')) return false;
    mContent.appendChild(el);
    const fits = h() <= MAX;
    mContent.removeChild(el);
    return !fits;
  }

  function place(el) {
    if (el.tagName === 'TABLE') { placeTable(el); return; }
    if (el.tagName === 'UL' || el.tagName === 'OL') { placeList(el); return; }
    if (el.dataset && el.dataset.pageBreakBefore === 'true' && cur.length > 0) {
      newPage();
    }
    if (placeFigureIfNeeded(el) && cur.length > 0) {
      newPage();
    }
    mContent.appendChild(el);
    if (h() <= MAX) {
      // Başlık yalnız kalmasın: altında en az ~3 satır yer yoksa sonraki sayfaya al
      if (isHeadingEl(el) && cur.length > 0 && (MAX - h()) < ORPHAN_MIN) {
        mContent.removeChild(el);
        newPage();
        place(el);
        return;
      }
      cur.push(el);
      return;
    }
    if (cur.length === 0) {
      mContent.removeChild(el);
      mContent.innerHTML = '';
      splitAndPush(el);
      return;
    }
    mContent.removeChild(el);
    newPage();
    place(el);
  }

  for (const b of blocks) place(b);

  document.body.removeChild(measure);

  return pages.filter(p => p.length);
}

/* ── Sayfa dizilerini gerçek A4 sayfalarına dönüştürür (antet + numara) ── */
function renderPages(pages, container, startNumber, modelName) {
  let n = startNumber;
  for (const pageBlocks of pages) {
    if (!pageBlocks.length) continue;

    const page = document.createElement('div');
    page.className = 'a4-page';
    page.id = 'a4-page-' + n;

    const _brand = (typeof HEADER_BRANDS !== 'undefined' && HEADER_BRANDS[currentFirma])
      ? HEADER_BRANDS[currentFirma] : { color: '#ff0000' };
    page.style.setProperty('--brand-color', _brand.color);

    if (currentFirma && typeof buildHeader === 'function') {
      page.appendChild(buildHeader(currentFirma, modelName));
    }

    const footerLine = document.createElement('div');
    footerLine.className = 'ph-footer-line';
    page.appendChild(footerLine);

    const content = document.createElement('div');
    content.className = 'page-content';
    for (const el of pageBlocks) content.appendChild(el);
    page.appendChild(content);

    const num = document.createElement('div');
    num.className = 'page-number';
    num.textContent = n++;
    page.appendChild(num);

    const cnkFooter = document.createElement('div');
    cnkFooter.className = 'ph-footer';
    cnkFooter.textContent = getFirmaFooter(currentFirma);
    page.appendChild(cnkFooter);

    container.appendChild(page);
  }
}

/* Hedef elementi görünür alana kaydırır */
function scrollToPage(el) {
  const area = document.querySelector('.content-area');
  if (!el || !area) return;

  if (viewMode === 'html') {
    const areaRect = area.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const top = elRect.top - areaRect.top + area.scrollTop - 24;
    area.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    return;
  }

  const page = el.closest('.a4-page');
  if (!page) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }

  const areaRect = area.getBoundingClientRect();
  const pageRect = page.getBoundingClientRect();
  const pageTopInArea = pageRect.top - areaRect.top + area.scrollTop;

  let targetScroll;
  if (page.offsetHeight <= area.clientHeight) {
    targetScroll = pageTopInArea - (area.clientHeight - page.offsetHeight) / 2;
  } else {
    targetScroll = pageTopInArea;
  }
  area.scrollTo({ top: Math.max(0, targetScroll), behavior: 'smooth' });
}

/* ── Markdown → blok elemanları ── */
function mdToBlocks(md) {
  const lines = md.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  const blocks = [];
  let i = 0;

  const flushList = (items, ordered) => {
    const list = document.createElement(ordered ? 'ol' : 'ul');
    list.className = 'md-list';
    for (const it of items) {
      const li = document.createElement('li');
      li.innerHTML = inline(it);
      list.appendChild(li);
    }
    blocks.push(list);
    markFigureListItems(list);
  };

  while (i < lines.length) {
    let line = lines[i];

    if (!line.trim()) { i++; continue; }

    // Fenced code block
    if (/^```/.test(line.trim())) {
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i].trim())) {
        buf.push(lines[i]);
        i++;
      }
      i++;
      const pre = document.createElement('pre');
      pre.className = 'md-code';
      const code = document.createElement('code');
      code.textContent = buf.join('\n');
      pre.appendChild(code);
      blocks.push(pre);
      continue;
    }

    // Heading
    const hm = line.match(/^(#{1,6})\s+(.*)$/);
    if (hm) {
      const lvl = hm[1].length;
      const el = document.createElement('h' + lvl);
      el.className = 'md-h md-h' + lvl;
      el.innerHTML = inline(hm[2].trim());
      blocks.push(el);
      i++;
      continue;
    }

    // Horizontal rule
    if (/^(\*\s*){3,}$|^(-\s*){3,}$|^(_\s*){3,}$/.test(line.trim())) {
      const hr = document.createElement('hr');
      hr.className = 'md-hr';
      blocks.push(hr);
      i++;
      continue;
    }

    // Blockquote
    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        buf.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }
      const bq = document.createElement('blockquote');
      bq.className = 'md-quote';
      bq.innerHTML = inline(buf.join(' '));
      blocks.push(bq);
      continue;
    }

    // Table
    if (line.includes('|') && i + 1 < lines.length && /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i + 1]) && lines[i + 1].includes('-')) {
      const header = splitRow(line);
      const aligns = parseAlignRow(lines[i + 1]);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].includes('|') && lines[i].trim()) {
        rows.push(splitRow(lines[i]));
        i++;
      }
      const table = document.createElement('table');
      table.className = 'md-table';
      const thead = document.createElement('thead');
      const htr = document.createElement('tr');
      for (let ci = 0; ci < header.length; ci++) {
        const th = document.createElement('th');
        th.innerHTML = inline(header[ci]);
        htr.appendChild(th);
      }
      thead.appendChild(htr);
      table.appendChild(thead);
      const tbody = document.createElement('tbody');
      for (const r of rows) {
        const tr = document.createElement('tr');
        for (let ci = 0; ci < r.length; ci++) {
          const td = document.createElement('td');
          td.innerHTML = inline(r[ci]);
          applyCellAlign(td, aligns[ci]);
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
      blocks.push(table);
      continue;
    }

    // Unordered list
    if (/^\s*[-*+]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*+]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*+]\s+/, ''));
        i++;
      }
      flushList(items, false);
      continue;
    }

    // Ordered list
    if (/^\s*\d+[.)]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+[.)]\s+/, ''));
        i++;
      }
      flushList(items, true);
      continue;
    }

    // Paragraph (accumulate until blank line or block start)
    const buf = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,6})\s+/.test(lines[i]) &&
      !/^\s*[-*+]\s+/.test(lines[i]) &&
      !/^\s*\d+[.)]\s+/.test(lines[i]) &&
      !/^>\s?/.test(lines[i]) &&
      !/^```/.test(lines[i].trim())
    ) {
      buf.push(lines[i]);
      i++;
    }
    const p = document.createElement('p');
    p.className = 'md-p';
    const html = inline(buf.join(' '));
    p.innerHTML = html;
    markFigureParagraph(p);
    blocks.push(p);
  }

  return blocks;
}

function markFigureParagraph(p) {
  if (!p.querySelector(':scope > img.md-img')) return;
  const clone = p.cloneNode(true);
  clone.querySelectorAll('img.md-img, br').forEach(el => el.remove());
  if (!clone.textContent.trim()) p.classList.add('md-figure');
}

function markFigureListItems(list) {
  list.querySelectorAll(':scope > li').forEach(li => {
    if (!li.querySelector(':scope > img.md-img')) return;
    const clone = li.cloneNode(true);
    clone.querySelectorAll('img.md-img, br').forEach(el => el.remove());
    if (!clone.textContent.trim()) li.classList.add('li-figure');
  });
}

function isStandaloneFigure(el) {
  if (el.tagName === 'P' && el.classList.contains('md-figure')) return true;
  if (el.tagName === 'UL' || el.tagName === 'OL') {
    const items = el.querySelectorAll(':scope > li');
    return items.length === 1 && items[0].classList.contains('li-figure');
  }
  return false;
}

function extractFigureImage(el) {
  if (el.tagName === 'P') return el.querySelector(':scope > img.md-img');
  if (el.tagName === 'UL' || el.tagName === 'OL') {
    return el.querySelector(':scope > li.li-figure img.md-img');
  }
  return null;
}

function normalizeHtmlFigureBlocks(blocks) {
  const out = [];
  for (const b of blocks) {
    if (b.tagName === 'P' && b.classList.contains('md-figure')) {
      const imgs = b.querySelectorAll(':scope > img.md-img');
      if (imgs.length > 1) {
        imgs.forEach(img => {
          const p = document.createElement('p');
          p.className = 'md-p md-figure';
          p.appendChild(img.cloneNode(true));
          out.push(p);
        });
        continue;
      }
    }
    out.push(b);
  }
  return out;
}

function tagFigureImage(img) {
  const src = img.getAttribute('src') || '';
  if (/\.svg(\?|#|$)/i.test(src)) img.classList.add('md-img-vector');
}

function figureBlockToCell(el, fitMode) {
  const cell = document.createElement('div');
  cell.className = 'md-figure-cell' + (fitMode ? ' md-figure-cell--' + fitMode : '');
  const img = extractFigureImage(el);
  if (img) {
    const clone = img.cloneNode(true);
    tagFigureImage(clone);
    cell.appendChild(clone);
  }
  return cell;
}

function groupHtmlFigureBlocks(blocks) {
  const out = [];
  let i = 0;

  while (i < blocks.length) {
    if (!isStandaloneFigure(blocks[i])) {
      out.push(blocks[i]);
      i++;
      continue;
    }

    const run = [blocks[i]];
    i++;
    while (i < blocks.length && isStandaloneFigure(blocks[i])) {
      run.push(blocks[i]);
      i++;
    }

    if (run.length === 1) {
      const frame = document.createElement('div');
      frame.className = 'md-figure-frame md-figure-layout-single';
      frame.appendChild(figureBlockToCell(run[0]));
      out.push(frame);
      continue;
    }

    const group = document.createElement('div');
    group.className = run.length <= 4
      ? 'md-figure-group md-figure-group--' + run.length
      : 'md-figure-group md-figure-group--multi';
    group.dataset.figureCount = String(run.length);
    run.forEach(el => group.appendChild(figureBlockToCell(el, 'cover')));
    out.push(group);
  }

  return out;
}

function applyHtmlFigureLayout(blocks) {
  return groupHtmlFigureBlocks(normalizeHtmlFigureBlocks(blocks));
}

function getHtmlFigureMaxHeight(root) {
  const styles = getComputedStyle(root);
  const pageH = parseFloat(styles.getPropertyValue('--html-page-h'));
  if (Number.isFinite(pageH) && pageH > 0) return pageH / 2;
  const probe = document.createElement('div');
  probe.style.cssText = 'position:absolute;visibility:hidden;height:var(--html-figure-max-h)';
  root.appendChild(probe);
  const h = probe.offsetHeight;
  root.removeChild(probe);
  return h > 0 ? h : 561;
}

function applyHtmlFigureSmartFit(root, dimMap) {
  if (!root) return;
  const contentW = root.clientWidth || 654;
  const maxH = getHtmlFigureMaxHeight(root);

  root.querySelectorAll('.md-figure-layout-single .md-figure-cell').forEach(cell => {
    cell.classList.remove('md-figure-cell--contain', 'md-figure-cell--cover');
    const img = cell.querySelector('img.md-img');
    if (!img) return;

    const src = img.getAttribute('src') || '';
    const dims = dimMap.get(src);
    const w = dims?.w || img.naturalWidth || 4;
    const h = dims?.h || img.naturalHeight || 3;
    const isSvg = /\.svg(\?|#|$)/i.test(src);

    if (isSvg || w >= h * 1.02) {
      cell.classList.add('md-figure-cell--contain');
      return;
    }

    const hAtFullW = contentW * (h / w);
    cell.classList.add(hAtFullW <= maxH ? 'md-figure-cell--contain' : 'md-figure-cell--cover');
  });
}

function splitRow(line) {
  let s = line.trim();
  if (s.startsWith('|')) s = s.slice(1);
  if (s.endsWith('|')) s = s.slice(0, -1);
  return s.split('|').map(c => c.trim());
}

function parseAlignRow(line) {
  return splitRow(line).map(cell => {
    const s = cell.replace(/\s/g, '');
    if (/^:-+:$/.test(s)) return 'center';
    if (/^-+:$/.test(s)) return 'right';
    return 'left';
  });
}

function applyCellAlign(el, align) {
  if (align && align !== 'left') el.style.textAlign = align;
}

/* ── Satır içi markdown ── */
function inline(text) {
  let s = escapeHtml(text);
  s = s.replace(/`([^`]+)`/g, '<code class="md-inline-code">$1</code>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/__([^_]+)__/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
  s = s.replace(/(^|[^_])_([^_]+)_/g, '$1<em>$2</em>');
  s = s.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img class="md-img" src="$2" alt="$1" />');
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  return s;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* ── Dil / PDF / Toast ── */
function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  showToast(`Dil değiştirildi: ${lang.toUpperCase()}`, 'success');
}

async function exportPDF() {
  if (!currentModel) {
    showToast('Önce bir model seçin', 'error');
    return;
  }
  const prevMode = viewMode;
  if (prevMode === 'html') {
    await setViewMode('pdf');
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  }
  const result = await window.electronAPI.printPdf();
  if (prevMode === 'html') await setViewMode('html');
  if (result.success) {
    showToast('PDF kaydedildi', 'success');
  } else {
    showToast('PDF kaydedilemedi', 'error');
  }
}

function buildExportHtmlBody() {
  const doc = document.querySelector('.html-document.html-unified');
  return doc ? doc.outerHTML : null;
}

async function exportHtml() {
  if (!currentModel) {
    showToast('Önce bir model seçin', 'error');
    return;
  }

  const prevMode = viewMode;
  if (prevMode === 'pdf') {
    await setViewMode('html');
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  }

  const bodyHtml = buildExportHtmlBody();
  if (!bodyHtml) {
    showToast('HTML içeriği bulunamadı', 'error');
    if (prevMode === 'pdf') await setViewMode('pdf');
    return;
  }

  showToast('HTML oluşturuluyor…', 'success');
  const title = `${currentModel} SERİSİ KULLANIM KILAVUZU`;
  const result = await window.electronAPI.exportHtml({ model: currentModel, bodyHtml, title });

  if (prevMode === 'pdf') await setViewMode('pdf');

  if (result.success) {
    showToast('HTML kaydedildi', 'success');
  } else if (result.error) {
    showToast('HTML kaydedilemedi: ' + result.error, 'error');
  } else {
    showToast('HTML kaydedilemedi', 'error');
  }
}

function showToast(msg, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

const ZOOM_MIN = 50;
const ZOOM_MAX = 200;
const ZOOM_STEP = 10;
let zoomLevel = 100;

function applyZoom() {
  const container = document.getElementById('pagesContainer');
  if (container) container.style.zoom = zoomLevel / 100;
  const label = document.getElementById('zoomLabel');
  if (label) label.textContent = `${zoomLevel}%`;
}

function setZoom(level) {
  zoomLevel = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, level));
  applyZoom();
}

function zoomIn() {
  setZoom(zoomLevel + ZOOM_STEP);
}

function zoomOut() {
  setZoom(zoomLevel - ZOOM_STEP);
}

function resetZoom() {
  setZoom(100);
}

function handleWheelZoom(e) {
  if (!e.ctrlKey) return;
  const contentArea = document.getElementById('contentArea');
  if (!contentArea) return;

  e.preventDefault();
  e.stopPropagation();

  const scrollTop = contentArea.scrollTop;
  if (e.deltaY < 0) zoomIn();
  else if (e.deltaY > 0) zoomOut();

  requestAnimationFrame(() => {
    contentArea.scrollTop = scrollTop;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const sel = document.getElementById('modelSelect');
  if (sel) {
    sel.value = 'LYM';
    onModelChange('LYM');
  }

  applyZoom();

  document.addEventListener('wheel', handleWheelZoom, { capture: true, passive: false });
});

document.addEventListener('keydown', (e) => {
  if (!e.ctrlKey) return;
  if (e.key === '=' || e.key === '+') {
    e.preventDefault();
    zoomIn();
  } else if (e.key === '-') {
    e.preventDefault();
    zoomOut();
  } else if (e.key === '0') {
    e.preventDefault();
    resetZoom();
  }
});
