/* ── Belge kurulumu ──
   Bölüm ağacı → numaralı bloklar → (PDF) A4 sayfaları / (HTML) akan belge.
   Kapak, revizyon geçmişi, içindekiler (+ şekil/tablo listesi), içerik,
   arka kapak. Belge içi bağlantılar data-goto (CSS seçici) taşır; tıklama
   ui.js'teki tek dinleyiciyle çözülür. */

/* Bölüm başlığı seçili dilde dosyada bulunamazsa kullanılan yedek adlar.
   Klasör id'leri İngilizce olduğundan (01-introduction …) prettifyId "Introduction"
   üretir; bu, Türkçe/Almanca kılavuzda dil sızıntısına yol açar. Yedek başlık,
   seçili dile göre verilir; asla klasör id'sinden İngilizce isim türetilmez. */
const SECTION_TITLES = {
  '01-introduction':    { tr: 'Giriş',              en: 'Introduction',    de: 'Einleitung' },
  '02-safety':          { tr: 'Güvenlik',           en: 'Safety',          de: 'Sicherheit' },
  '03-overview':        { tr: 'Genel Bakış',        en: 'Overview',        de: 'Übersicht' },
  '04-transport':       { tr: 'Nakliye',            en: 'Transport',       de: 'Transport' },
  '05-assembly':        { tr: 'Montaj',             en: 'Assembly',        de: 'Montage' },
  '06-settings':        { tr: 'Ayarlar',            en: 'Settings',        de: 'Einstellungen' },
  '07-operation':       { tr: 'İşletim',            en: 'Operation',       de: 'Betrieb' },
  '08-capacity':        { tr: 'Kapasite',           en: 'Capacity',        de: 'Kapazität' },
  '09-maintenance':     { tr: 'Bakım',              en: 'Maintenance',     de: 'Wartung' },
  '10-cleaning':        { tr: 'Temizlik',           en: 'Cleaning',        de: 'Reinigung' },
  '11-troubleshooting': { tr: 'Arıza Giderme',      en: 'Troubleshooting', de: 'Fehlerbehebung' },
  '12-dismantle':       { tr: 'Sökme ve Bertaraf',  en: 'Dismantling',     de: 'Demontage' },
  '13-documents':       { tr: 'Dokümanlar',         en: 'Documents',       de: 'Dokumente' },
  '14-index':           { tr: 'Ekler ve Dizin',     en: 'Index',           de: 'Anhang und Index' }
};

function sectionFallbackTitle(id, lang) {
  const entry = SECTION_TITLES[String(id)];
  if (entry) return entry[String(lang || 'tr').toLowerCase()] || entry.tr;
  return prettifyId(id);
}

function prettifyId(id) {
  return String(id)
    .replace(/^\d+[-_]?/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim();
}

function mdLevel(el) { return parseInt(el.tagName.slice(1), 10); }

/* Üst seviye tek numaraya nokta ekler: "1" -> "1.", "1.1" -> "1.1" */
function fmtNum(n) { return /^\d+$/.test(n) ? n + '.' : n; }

/* Başlık metninde önceden yazılmış numarayı ("1.", "1.3.5." vb.) temizler. */
function stripNum(t) { return String(t).replace(/^\s*\d+(?:\.\d+)*\.?(?=\s)\s*/, ''); }

/* Bölüm ağacını numaralandırarak bloklara çevirir.
   - Klasör hiyerarşisi: 1 (ana bölüm), 1.1 (alt bölüm) ...
   - md dosyasındaki # / ## / ### hiyerarşisi korunur; yalnızca numara öneki güncellenir.
   - Dosyada başlık yoksa yedek başlık (SECTION_TITLES) eklenir.
   İçindekiler için her başlık işaretlenir; her blok ana bölüm numarasını
   (data-chapter) taşır — şekil/tablo numaraları ve değişken başlık bunu kullanır. */
function buildBlocks(tree) {
  const blocks = [];
  const entries = [];
  let anchorIdx = 0;

  function addEntry(number, title, level, el, extra) {
    const id = 'toc-anchor-' + anchorIdx;
    el.id = id;
    el.dataset.tocAnchor = String(anchorIdx);
    entries.push({ number, title, level, anchorId: String(anchorIdx), contentIdx: 0, ...(extra || {}) });
    anchorIdx++;
  }

  function walk(nodes, prefix, level, chapter, pathIds) {
    nodes.forEach((node, i) => {
      const N = prefix ? `${prefix}.${i + 1}` : `${i + 1}`;
      const chap = chapter || N;
      const nodePath = pathIds.concat(node.id).join('/');
      const secBlocks = mdToBlocks(node.content || '', node.file || '');

      const headings = secBlocks.filter(b => /^H[1-6]$/.test(b.tagName));
      const anchorLevel = headings.length ? mdLevel(headings[0]) : null;

      let titleEl = headings.length ? headings[0] : null;
      const fallbackTitle = sectionFallbackTitle(node.id, currentLang);
      const nodeTitle = titleEl ? (stripNum(titleEl.textContent.trim()) || fallbackTitle) : fallbackTitle;

      if (titleEl) {
        titleEl.textContent = `${fmtNum(N)} ${nodeTitle}`;
        titleEl.className = `md-h sec-h sec-h${Math.min(level, 6)}`;
      } else {
        titleEl = document.createElement('h' + Math.min(level + 1, 6));
        titleEl.className = `md-h sec-h sec-h${Math.min(level, 6)}`;
        titleEl.textContent = `${fmtNum(N)} ${nodeTitle}`;
        if (node.file) {
          titleEl.dataset.src = node.file;
          titleEl.dataset.line = '1';
        }
        secBlocks.unshift(titleEl);
      }
      titleEl.dataset.nodePath = nodePath;
      addEntry(N, nodeTitle, level, titleEl, { nodePath, file: node.file || '' });
      if (level === 1) titleEl.dataset.pageBreakBefore = 'true';

      let counters = [];
      for (const b of secBlocks) {
        b.dataset.chapter = chap;
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
        addEntry(subNum, subTitle, subLevel, b, { file: node.file || '' });
      }

      for (const b of secBlocks) blocks.push(b);

      if (node.children && node.children.length) walk(node.children, N, level + 1, chap, pathIds.concat(node.id));
    });
  }

  walk(tree, '', 1, '', []);
  return { blocks, entries };
}

/* Çapraz referansları başlıklara bağlar. withPageRefs: PDF görünümünde
   " (s. 000)" yer tutucusu eklenir — sayfalamadan ÖNCE eklendiği için gerçek
   numara yazıldığında satır kırılımı değişmez. */
function resolveXrefs(blocks, entries, withPageRefs) {
  const byNumber = new Map(entries.map(e => [e.number, e]));
  const out = [];
  const i18n = tDoc(currentLang);
  for (const b of blocks) {
    b.querySelectorAll && b.querySelectorAll('a.xref').forEach(a => {
      const num = a.dataset.xref;
      const entry = byNumber.get(num);
      if (!entry) {
        a.classList.add('xref-broken');
        a.removeAttribute('href');
        a.title = `Bölüm ${num} bu kılavuzda yok`;
        out.push({ num, ok: false });
        return;
      }
      a.dataset.goto = '#toc-anchor-' + entry.anchorId;
      a.dataset.entry = entry.anchorId;
      a.href = '#toc-anchor-' + entry.anchorId;
      if (withPageRefs) {
        const span = document.createElement('span');
        span.className = 'xref-page';
        span.textContent = ` (${i18n.pageRef} 000)`;
        a.appendChild(span);
      }
      out.push({ num, ok: true, anchorId: entry.anchorId });
    });
  }
  return out;
}

/* Numaralı içerik blokları + içindekiler/şekil/tablo kayıtları. */
function buildContentBlocks(tree, { withPageRefs }) {
  const { blocks, entries } = buildBlocks(tree);
  let laid = applyHtmlFigureLayout(blocks);
  if (typeof applyChangeBars === 'function' && currentChanges) applyChangeBars(laid, currentChanges);
  let figures = [];
  let tables = [];
  if (outputOption('sekil_numara')) {
    ({ blocks: laid, figures, tables } = numberFiguresAndTables(laid, currentLang));
  }
  const xrefs = resolveXrefs(laid, entries, withPageRefs);
  return { blocks: laid, entries, figures, tables, xrefs };
}

function pageIndexOfAnchor(pages, anchorId) {
  return pages.findIndex(p =>
    p.some(el => el.dataset && el.dataset.tocAnchor === anchorId)
  );
}

function pageIndexOfData(pages, key, value) {
  return pages.findIndex(p => p.some(el => el.dataset && el.dataset[key] === value));
}

/* ── İçindekiler blokları ── */
function makeTocRow({ cls, level, number, title, goto, id }, withPage) {
  const row = document.createElement('a');
  row.className = `toc-row ${cls || ''} toc-l${Math.min(level, 4)}`.replace(/\s+/g, ' ');
  if (id) row.id = id;
  row.href = goto;
  row.dataset.goto = goto;
  row.style.paddingLeft = ((level - 1) * 22) + 'px';

  if (number) {
    const num = document.createElement('span');
    num.className = 'toc-num';
    num.textContent = number;
    row.appendChild(num);
  }

  const label = document.createElement('span');
  label.className = 'toc-label';
  label.textContent = title;
  row.appendChild(label);

  let pageSpan = null;
  if (withPage) {
    const leader = document.createElement('span');
    leader.className = 'toc-leader';
    pageSpan = document.createElement('span');
    pageSpan.className = 'toc-page';
    row.appendChild(leader);
    row.appendChild(pageSpan);
  }
  return { row, pageSpan };
}

function tocTitle(text, extraClass) {
  const h = document.createElement('h1');
  h.className = 'toc-title' + (extraClass ? ' ' + extraClass : '');
  h.textContent = text;
  return h;
}

/* withPage: PDF (sayfa numarası + nokta çizgisi); değilse HTML içindekiler.
   extras: içindekilerin sonuna eklenen satırlar (dizin) — { title, goto, ref } */
function buildTocBlocks(entries, figures, tables, withPage, extras = []) {
  const i18n = tDoc(currentLang);
  const blocks = [tocTitle(i18n.toc)];
  const rows = [];
  const htmlCls = withPage ? '' : 'toc-html';

  for (const e of entries) {
    const { row, pageSpan } = makeTocRow({
      cls: htmlCls, level: e.level, number: fmtNum(e.number), title: e.title,
      goto: '#toc-anchor-' + e.anchorId, id: 'toc-row-' + e.anchorId
    }, withPage);
    blocks.push(row);
    rows.push({ ref: e, pageSpan });
  }

  const addList = (title, list, attr) => {
    if (!list || !list.length) return;
    blocks.push(tocTitle(title, 'toc-title-sub'));
    for (const f of list) {
      const { row, pageSpan } = makeTocRow({
        cls: htmlCls + ' toc-fig', level: 1, number: f.label, title: f.caption || '',
        goto: `[data-${attr}="${f.id}"]`
      }, withPage);
      blocks.push(row);
      rows.push({ ref: f, pageSpan });
    }
  };
  for (const x of extras) {
    const { row, pageSpan } = makeTocRow({ cls: htmlCls, level: 1, number: '', title: x.title, goto: x.goto }, withPage);
    blocks.push(row);
    rows.push({ ref: x.ref, pageSpan });
  }

  addList(i18n.figList, figures, 'fig-anchor');
  addList(i18n.tblList, tables, 'tbl-anchor');

  return { blocks, rows };
}

/* ── Revizyon geçmişi (yaml: revizyonlar) ── */
function revisionText(v, lang) {
  if (v && typeof v === 'object') {
    return String(v[lang] || v.tr || Object.values(v)[0] || '');
  }
  return String(v || '');
}

function buildRevisionBlocks(revisions, lang) {
  if (!Array.isArray(revisions) || !revisions.length) return [];
  const i18n = tDoc(lang);
  const withAuthor = revisions.some(r => r.hazirlayan);
  const cols = withAuthor ? i18n.revCols : i18n.revCols.slice(0, 3);

  const table = document.createElement('table');
  table.className = 'md-table rev-table';
  const thead = document.createElement('thead');
  const htr = document.createElement('tr');
  cols.forEach(c => {
    const th = document.createElement('th');
    th.textContent = c;
    htr.appendChild(th);
  });
  thead.appendChild(htr);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  revisions.forEach(r => {
    const tr = document.createElement('tr');
    const cells = [r.rev, formatCoverDate(r.tarih), revisionText(r.aciklama, lang)];
    if (withAuthor) cells.push(r.hazirlayan || '');
    cells.forEach((text, ci) => {
      const td = document.createElement('td');
      td.textContent = text;
      if (ci === 2) td.className = 'al-left';
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  return [tocTitle(i18n.revHistory, 'rev-title'), table];
}

/* ── Sayfa dizilerini gerçek A4 sayfalarına dönüştürür (antet + numara) ──
   opts.chapter: sabit değişken başlık (içindekiler gibi);
   opts.trackChapters: içerik sayfalarında ana bölüm başlığını izle. */
function renderPages(pages, container, startNumber, modelName, opts = {}) {
  let n = startNumber;
  let chapter = opts.chapter || '';
  const running = outputOption('bolum_basligi');
  const brand = getBrand(currentFirma);

  for (const pageBlocks of pages) {
    if (!pageBlocks.length) continue;

    if (opts.trackChapters) {
      const h1 = pageBlocks.find(el => el.classList && el.classList.contains('sec-h1'));
      if (h1) chapter = h1.textContent.trim();
    }

    const page = document.createElement('div');
    page.className = 'a4-page';
    page.id = 'a4-page-' + n;
    page.dataset.pageNumber = String(n);
    page.style.setProperty('--brand-color', brand.color);

    if (currentFirma) {
      page.appendChild(buildHeader(currentFirma, modelName, running ? chapter : ''));
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

function coverPageOpts() {
  return {
    model: currentCoverName || currentModel,
    rev: currentRev,
    date: currentDate,
    variant: currentFirma,
    lang: currentLang,
    series: currentCoverSeries,
    by: preparedBy()
  };
}

/* Başlıklara "İçindekiler'e dön" bağlantısı. */
function wrapHeadingBackLinks(container) {
  container.querySelectorAll('[data-toc-anchor]').forEach(el => {
    if (el.querySelector(':scope > a.toc-back')) return;
    const anchorId = el.dataset.tocAnchor;
    const a = document.createElement('a');
    a.className = 'toc-back';
    a.href = '#toc-row-' + anchorId;
    a.dataset.goto = '#toc-row-' + anchorId;
    while (el.firstChild) a.appendChild(el.firstChild);
    el.appendChild(a);
  });
}

/* PDF'te bağlantılar hedefin A4 sayfa başına gider (tam sayfa görünümü). */
function retargetLinksToPages(container) {
  container.querySelectorAll('a[data-goto]').forEach(a => {
    let target = null;
    try { target = container.querySelector(a.dataset.goto); } catch (e) { target = null; }
    const pg = target && target.closest('.a4-page');
    if (pg && pg.id) a.setAttribute('href', '#' + pg.id);
  });
}

async function renderPdfGuide(modelName, tree, container) {
  const doc = buildContentBlocks(tree, { withPageRefs: true });
  await preloadImages(collectImageSrcs(doc.blocks));
  const layoutBlocks = prepareFigureBlocks(doc.blocks);
  const contentPages = computePages(layoutBlocks, { cache: true });

  for (const e of doc.entries) {
    const idx = pageIndexOfAnchor(contentPages, e.anchorId);
    e.contentIdx = idx < 0 ? 0 : idx;
  }
  for (const f of doc.figures) f.contentIdx = Math.max(0, pageIndexOfData(contentPages, 'figAnchor', f.id));
  for (const t of doc.tables) t.contentIdx = Math.max(0, pageIndexOfData(contentPages, 'tblAnchor', t.id));

  const i18n = tDoc(currentLang);
  const revPages = (() => {
    const b = buildRevisionBlocks(currentRevisions, currentLang);
    return b.length ? computePages(b) : [];
  })();
  // Dizin: sözlük terimlerinin geçtiği içerik sayfaları (sayfa indeksi → numara sonra)
  const terms = outputOption('dizin') ? indexTerms(currentLang) : [];
  const occ = terms.length
    ? indexOccurrences(terms, contentPages.map((p, i) => ({ key: i, text: p.map(el => el.textContent).join(' ') })))
    : new Map();
  const extras = occ.size
    ? [{ title: i18n.index, goto: '#dx-index', ref: { contentIdx: contentPages.length } }]
    : [];

  const { blocks: tocBlocks, rows } = buildTocBlocks(doc.entries, doc.figures, doc.tables, true, extras);
  const tocPages = computePages(tocBlocks);
  const front = revPages.length + tocPages.length;
  const pageOf = (idx) => front + idx + 1;
  const indexPages = occ.size
    ? computePages(buildIndexBlocks([...occ].map(([term, set]) => ({ term, pages: [...set].map(pageOf) })), currentLang))
    : [];

  for (const r of rows) r.pageSpan.textContent = String(pageOf(r.ref.contentIdx));

  container.innerHTML = '';
  container.className = 'pages-container';
  renderPages(revPages, container, 1, modelName, { chapter: i18n.revHistory });
  renderPages(tocPages, container, revPages.length + 1, modelName, { chapter: i18n.toc });
  renderPages(contentPages, container, front + 1, modelName, { trackChapters: true });
  renderPages(indexPages, container, front + contentPages.length + 1, modelName, { chapter: i18n.index });

  // Kapak sayfası: 1. sayfa, numarasız
  container.insertBefore(buildCoverPage(coverPageOpts()), container.firstChild);
  if (outputOption('arka_kapak')) container.appendChild(buildBackCoverPage(coverPageOpts()));

  // Çapraz referans sayfa numaraları
  const entryPage = new Map(doc.entries.map(e => [e.anchorId, pageOf(e.contentIdx)]));
  container.querySelectorAll('a.xref[data-entry] .xref-page').forEach(span => {
    const p = entryPage.get(span.parentElement.dataset.entry);
    span.textContent = ` (${i18n.pageRef} ${p})`;
  });

  wrapHeadingBackLinks(container);
  retargetLinksToPages(container);

  lastRender = { entries: doc.entries, figures: doc.figures, tables: doc.tables, xrefs: doc.xrefs, tree };
}

async function renderHtmlGuide(modelName, tree, container) {
  const doc = buildContentBlocks(tree, { withPageRefs: false });
  await measureImages(collectImageSrcs(doc.blocks));

  container.innerHTML = '';
  container.className = 'pages-container';

  const root = document.createElement('div');
  root.className = 'html-document html-unified';

  const coverSection = document.createElement('div');
  coverSection.className = 'html-cover-section';
  const cover = buildCoverPage(coverPageOpts());
  cover.classList.add('html-inline-cover');
  coverSection.appendChild(cover);
  root.appendChild(coverSection);

  const revBlocks = buildRevisionBlocks(currentRevisions, currentLang);
  if (revBlocks.length) {
    const revSection = document.createElement('div');
    revSection.className = 'html-toc-section html-rev-section';
    revBlocks.forEach(b => revSection.appendChild(b));
    root.appendChild(revSection);
  }

  // Dizin (HTML): terimin geçtiği bölüm numaraları, başlıklara bağlantılı
  const htmlIndex = buildHtmlIndex(doc);

  const tocSection = document.createElement('div');
  tocSection.className = 'html-toc-section';
  tocSection.id = 'html-toc';
  buildTocBlocks(doc.entries, doc.figures, doc.tables, false,
    htmlIndex.length ? [{ title: tDoc(currentLang).index, goto: '#dx-index', ref: {} }] : [])
    .blocks.forEach(b => tocSection.appendChild(b));
  root.appendChild(tocSection);

  const contentSection = document.createElement('div');
  contentSection.className = 'html-content-section';

  if (currentFirma) {
    const header = buildHeader(currentFirma, modelName);
    header.classList.add('html-doc-header');
    contentSection.style.setProperty('--brand-color', getBrand(currentFirma).color);
    contentSection.appendChild(header);
  }

  const mainContent = document.createElement('div');
  mainContent.className = 'html-flow-content';
  for (const b of doc.blocks) mainContent.appendChild(b);
  contentSection.appendChild(mainContent);
  root.appendChild(contentSection);

  if (htmlIndex.length) {
    const idxSection = document.createElement('div');
    idxSection.className = 'html-toc-section html-index-section';
    htmlIndex.forEach(b => idxSection.appendChild(b));
    root.appendChild(idxSection);
  }

  if (outputOption('arka_kapak')) {
    const back = buildBackCoverPage(coverPageOpts());
    back.classList.add('html-inline-cover');
    const backSection = document.createElement('div');
    backSection.className = 'html-cover-section html-back-section';
    backSection.appendChild(back);
    root.appendChild(backSection);
  }

  container.appendChild(root);
  applyHtmlFigureSmartFit(mainContent);
  wrapHeadingBackLinks(container);

  lastRender = { entries: doc.entries, figures: doc.figures, tables: doc.tables, xrefs: doc.xrefs, tree };
}

/* ── Görsel ön yükleme ── */
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

/* HTML dizini: her blok, kendinden önceki en yakın numaralı başlığa atanır. */
function buildHtmlIndex(doc) {
  const terms = outputOption('dizin') ? indexTerms(currentLang) : [];
  if (!terms.length) return [];
  const byAnchor = new Map(doc.entries.map(e => [e.anchorId, e]));
  const texts = [];
  let cur = null;
  for (const b of doc.blocks) {
    if (b.dataset && b.dataset.tocAnchor) cur = byAnchor.get(b.dataset.tocAnchor) || cur;
    if (cur) texts.push({ key: cur.anchorId, text: b.textContent });
  }
  const occ = indexOccurrences(terms, texts);
  if (!occ.size) return [];
  const rows = [...occ].map(([term, set]) => ({
    term,
    refs: [...set].map(id => byAnchor.get(id)).filter(Boolean).map(e => ({ number: e.number, anchorId: e.anchorId }))
  }));
  return buildIndexBlocks(rows, currentLang);
}
