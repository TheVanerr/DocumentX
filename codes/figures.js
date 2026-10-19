/* ── Fotoğraf / SVG yerleşimi ve şekil–tablo numaralandırma ──
   Tek başına duran görseller çerçeveye (md-figure-frame), ardışık görseller
   ızgaraya (md-figure-group) alınır. Numaralandırma açıksa (cikti.sekil_numara)
   çerçevelere "Şekil 3-1: <alt metin>" alt yazısı, "Tablo: …" satırı olan
   tablolara "Tablo 3-1: …" başlığı eklenir. */

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
          copySourceAttrs(b, p);
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

function copySourceAttrs(from, to) {
  ['src', 'line', 'chapter'].forEach(k => {
    if (from.dataset && from.dataset[k]) to.dataset[k] = from.dataset[k];
  });
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
      copySourceAttrs(run[0], frame);
      frame.appendChild(figureBlockToCell(run[0]));
      out.push(frame);
      continue;
    }

    const group = document.createElement('div');
    group.className = run.length <= 4
      ? 'md-figure-group md-figure-group--' + run.length
      : 'md-figure-group md-figure-group--multi';
    group.dataset.figureCount = String(run.length);
    copySourceAttrs(run[0], group);
    run.forEach(el => group.appendChild(figureBlockToCell(el, 'cover')));
    out.push(group);
  }

  return out;
}

function applyHtmlFigureLayout(blocks) {
  return groupHtmlFigureBlocks(normalizeHtmlFigureBlocks(blocks));
}

function applyHtmlFigureSmartFit(root) {
  if (!root) return;

  root.querySelectorAll('.md-figure-layout-single .md-figure-cell').forEach(cell => {
    cell.classList.remove('md-figure-cell--contain', 'md-figure-cell--cover');
    if (!cell.querySelector('img.md-img')) return;
    cell.classList.add('md-figure-cell--contain');
  });
}

/* PDF görünümü için şekil bloklarını ölçüm sayfasında hazırlar. */
function prepareFigureBlocks(blocks) {
  const prep = document.createElement('div');
  prep.className = 'a4-page measure';
  const content = document.createElement('div');
  content.className = 'page-content';
  prep.appendChild(content);
  document.body.appendChild(prep);
  for (const b of blocks) content.appendChild(b);
  applyHtmlFigureSmartFit(content);
  const out = Array.from(content.childNodes);
  document.body.removeChild(prep);
  return out;
}

/* Alt metin dosya adına benziyorsa (img_01, foto3.png …) alt yazıya yazılmaz. */
function captionFromAlt(alt) {
  const a = String(alt || '').trim();
  if (!a) return '';
  if (/\.(png|jpe?g|svg|webp|gif)$/i.test(a)) return '';
  if (/^(img|image|foto|photo|resim|bild|pic|görsel|gorsel)?[\s_-]*\d*[a-z]?$/i.test(a)) return '';
  return a;
}

/* Şekil ve tablo numaraları — bölüm bazlı: "Şekil 3-1", "Tablo 3-2".
   blocks: applyHtmlFigureLayout sonrası, data-chapter taşıyan bloklar.
   → { blocks, figures: [{ id, label, caption }], tables: [...] } */
function numberFiguresAndTables(blocks, lang) {
  const i18n = tDoc(lang);
  const figures = [];
  const tables = [];
  const counters = {};
  const next = (kind, chapter) => {
    const key = kind + ':' + chapter;
    counters[key] = (counters[key] || 0) + 1;
    return `${chapter}-${counters[key]}`;
  };
  const out = [];

  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    const chapter = (b.dataset && b.dataset.chapter) || '0';

    if (b.classList && (b.classList.contains('md-figure-frame') || b.classList.contains('md-figure-group'))) {
      const alts = [...b.querySelectorAll('img.md-img')].map(img => captionFromAlt(img.getAttribute('alt')));
      const text = [...new Set(alts.filter(Boolean))].join(' / ');
      const num = next('fig', chapter);
      const id = 'fig-' + figures.length;
      const label = `${i18n.fig} ${num}`;
      const cap = document.createElement('div');
      cap.className = 'md-figcaption';
      cap.innerHTML = `<span class="cap-num">${escapeHtml(label)}</span>${text ? ': ' + escapeHtml(text) : ''}`;
      b.appendChild(cap);
      b.dataset.figAnchor = id;
      figures.push({ id, label, caption: text });
      out.push(b);
      continue;
    }

    if (b.classList && b.classList.contains('md-table-caption-src') && blocks[i + 1] && blocks[i + 1].tagName === 'TABLE') {
      const table = blocks[i + 1];
      const tChapter = (table.dataset && table.dataset.chapter) || chapter;
      const num = next('tbl', tChapter);
      const id = 'tbl-' + tables.length;
      const label = `${i18n.tbl} ${num}`;
      const text = b.dataset.caption || '';
      const caption = document.createElement('caption');
      caption.className = 'md-tblcaption';
      caption.innerHTML = `<span class="cap-num">${escapeHtml(label)}</span>${text ? ': ' + inline(text) : ''}`;
      caption.dataset.label = label;
      table.insertBefore(caption, table.firstChild);
      table.dataset.tblAnchor = id;
      tables.push({ id, label, caption: text });
      continue; // kaynak "Tablo: …" paragrafı atlanır, tablo bir sonraki turda eklenir
    }

    out.push(b);
  }

  return { blocks: out, figures, tables };
}
