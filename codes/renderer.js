let currentModel = '';
let currentLang = 'tr';
let currentRev = '';
let currentDate = '';
let currentHeaderVariant = 'DOLFIN';
let currentCoverVariant = 'DOLFIN';

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

  renderGuide(res.model, res.tree, pagesContainer);
}

function infoCard(html) {
  return `
    <div style="color:#4a5568; text-align:center; padding:60px; font-size:14px;">
      <p style="margin-bottom:8px; font-size:32px;">📄</p>
      <p>${html}</p>
    </div>`;
}

/* ── Kılavuzu oluştur ── */
function renderGuide(modelName, tree, container) {
  const { blocks, entries } = buildBlocks(tree);
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
  renderPages(tocPages, container, 1, modelName);
  renderPages(contentPages, container, T + 1, modelName);

  // Kapak sayfası: 1. sayfa, numarasız
  const cover = buildCoverPage({
    model: modelName, rev: currentRev, date: currentDate, variant: currentCoverVariant
  });
  container.insertBefore(cover, container.firstChild);
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
  h.textContent = 'İçindekiler';
  blocks.push(h);

  for (const e of entries) {
    const row = document.createElement('div');
    row.className = `toc-row toc-l${Math.min(e.level, 4)}`;
    row.style.paddingLeft = ((e.level - 1) * 22) + 'px';

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

function onCoverVariantChange(v) {
  currentCoverVariant = v;
  updateCover();
}

function onHeaderChange(v) {
  currentHeaderVariant = v;
  if (currentModel) onModelChange(currentModel);
}

function updateCover() {
  const container = document.getElementById('pagesContainer');
  const existing = container.querySelector('.cover-page');
  if (existing && currentModel) {
    existing.replaceWith(buildCoverPage({
      model: currentModel, rev: currentRev, date: currentDate, variant: currentCoverVariant
    }));
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

/* ── A4 Sayfalama: blokları ölçüp sayfa dizilerine böler ── */
function computePages(blocks) {
  const MAX = usableHeight();

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

  function place(el) {
    mContent.appendChild(el);
    if (h() <= MAX) {
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

    if (currentHeaderVariant && typeof buildHeader === 'function') {
      page.appendChild(buildHeader(currentHeaderVariant, modelName));
    }

    const content = document.createElement('div');
    content.className = 'page-content';
    for (const el of pageBlocks) content.appendChild(el);
    page.appendChild(content);

    const num = document.createElement('div');
    num.className = 'page-number';
    num.textContent = n++;
    page.appendChild(num);

    container.appendChild(page);
  }
}

function usableHeight() {
  const probe = document.createElement('div');
  probe.className = 'a4-page';
  probe.style.position = 'absolute';
  probe.style.visibility = 'hidden';
  probe.style.left = '-9999px';
  document.body.appendChild(probe);
  const cs = getComputedStyle(probe);
  const h = parseFloat(cs.minHeight) - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
  document.body.removeChild(probe);
  return (h && h > 100) ? h - 8 : 995;
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
      for (const c of header) {
        const th = document.createElement('th');
        th.innerHTML = inline(c);
        htr.appendChild(th);
      }
      thead.appendChild(htr);
      table.appendChild(thead);
      const tbody = document.createElement('tbody');
      for (const r of rows) {
        const tr = document.createElement('tr');
        for (const c of r) {
          const td = document.createElement('td');
          td.innerHTML = inline(c);
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
    p.innerHTML = inline(buf.join(' '));
    blocks.push(p);
  }

  return blocks;
}

function splitRow(line) {
  let s = line.trim();
  if (s.startsWith('|')) s = s.slice(1);
  if (s.endsWith('|')) s = s.slice(0, -1);
  return s.split('|').map(c => c.trim());
}

/* ── Satır içi markdown ── */
function inline(text) {
  let s = escapeHtml(text);
  s = s.replace(/`([^`]+)`/g, '<code class="md-inline-code">$1</code>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/__([^_]+)__/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
  s = s.replace(/(^|[^_])_([^_]+)_/g, '$1<em>$2</em>');
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
  const result = await window.electronAPI.printPdf();
  if (result.success) {
    showToast('PDF kaydedildi', 'success');
  } else {
    showToast('PDF kaydedilemedi', 'error');
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
