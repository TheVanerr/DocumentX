/* ── Markdown → blok elemanları ──
   Her blok, kaynağa atlama ve kalite kontrol için data-src (dosya) ve
   data-line (satır) taşır. Desteklenenler: başlık, paragraf, tablo (hizalı),
   iç içe liste, alıntı, kod, yatay çizgi, güvenlik uyarı kutusu, çapraz referans. */

/* ISO 3864-2 / ANSI Z535 sinyal kelimeleri → seviye. lang: kelimenin dili (dil sızıntısı kontrolü). */
const SIGNAL_WORDS = {
  'TEHLİKE': { level: 'danger', lang: 'tr' },
  'UYARI': { level: 'warning', lang: 'tr' },
  'DİKKAT': { level: 'caution', lang: 'tr' },
  'ÖNEMLİ': { level: 'notice', lang: 'tr' },
  'NOT': { level: 'note', lang: 'tr' },
  'BİLGİ': { level: 'note', lang: 'tr' },
  'DANGER': { level: 'danger', lang: 'en' },
  'WARNING': { level: 'warning', lang: 'en' },
  'CAUTION': { level: 'caution', lang: 'en' },
  'NOTICE': { level: 'notice', lang: 'en' },
  'IMPORTANT': { level: 'notice', lang: 'en' },
  'NOTE': { level: 'note', lang: 'en' },
  'GEFAHR': { level: 'danger', lang: 'de' },
  'WARNUNG': { level: 'warning', lang: 'de' },
  'VORSICHT': { level: 'caution', lang: 'de' },
  'ACHTUNG': { level: 'caution', lang: 'de' },
  'HINWEIS': { level: 'notice', lang: 'de' },
  'WICHTIG': { level: 'notice', lang: 'de' }
};

function lookupSignal(word) {
  const w = String(word || '');
  return SIGNAL_WORDS[w.toLocaleUpperCase('tr-TR')] || SIGNAL_WORDS[w.toLocaleUpperCase('en-US')] || null;
}

/* "**UYARI — Ezilme:** Gövde metni." → { word, level, lang, hazard, body } */
function parseSignalText(raw) {
  const m = String(raw || '').match(/^\s*\*\*\s*([\p{L}]+)(?=[\s:—–\-*]|$)([^*]*)\*\*\s*:?\s*([\s\S]*)$/u);
  if (!m) return null;
  const sig = lookupSignal(m[1]);
  if (!sig) return null;
  // Sinyal kelimesinden sonra yalnızca "— tehlike:" veya ":" gelebilir;
  // "**Not alınacak noktalar:**" gibi sıradan kalın etiketler uyarı sayılmaz.
  const rest = m[2];
  if (rest.trim() && !/^\s*[—–-]/.test(rest) && !/^\s*:\s*$/.test(rest)) return null;
  const hazard = m[2].replace(/^\s*[—–-]\s*/, '').replace(/\s*:\s*$/, '').trim();
  return {
    word: m[1].toLocaleUpperCase(sig.lang === 'tr' ? 'tr-TR' : 'en-US'),
    level: sig.level,
    lang: sig.lang,
    hazard,
    body: m[3].trim()
  };
}

const CALLOUT_ICON =
  '<svg class="callout-icon" viewBox="0 0 24 24" aria-hidden="true">' +
  '<path style="fill:currentColor" d="M12 1.6 23.2 21.6H.8z"/>' +
  '<rect style="fill:var(--callout-band)" x="10.9" y="8" width="2.2" height="7.6" rx=".6"/>' +
  '<rect style="fill:var(--callout-band)" x="10.9" y="17" width="2.2" height="2.3" rx=".6"/></svg>';

function buildCallout(sig) {
  const box = document.createElement('div');
  box.className = `md-callout callout-${sig.level}`;
  box.dataset.signal = sig.word;
  box.dataset.signalLang = sig.lang;

  const hazardHtml = sig.hazard ? `<strong class="callout-hazard">${inline(sig.hazard)}:</strong> ` : '';

  if (sig.level === 'note') {
    const body = document.createElement('div');
    body.className = 'callout-body';
    body.innerHTML = `<strong class="callout-word">${escapeHtml(sig.word)}:</strong> ${hazardHtml}${inline(sig.body)}`;
    box.appendChild(body);
    return box;
  }

  const head = document.createElement('div');
  head.className = 'callout-head';
  head.innerHTML = (sig.level === 'notice' ? '' : CALLOUT_ICON) +
    `<span class="callout-word">${escapeHtml(sig.word)}</span>`;
  box.appendChild(head);

  const body = document.createElement('div');
  body.className = 'callout-body';
  body.innerHTML = hazardHtml + inline(sig.body);
  box.appendChild(body);
  return box;
}

/* Liste maddesi uyarıyla başlıyorsa: kutu yerine maddenin başına renkli etiket. */
function inlineSignalHtml(raw) {
  const sig = parseSignalText(raw);
  if (!sig) return null;
  const hazardHtml = sig.hazard ? ` <strong class="callout-hazard">${inline(sig.hazard)}:</strong>` : '';
  return {
    sig,
    html: `<span class="sig-pill sig-${sig.level}" data-signal="${escapeHtml(sig.word)}" data-signal-lang="${sig.lang}">${escapeHtml(sig.word)}</span>${hazardHtml} ${inline(sig.body)}`
  };
}

/* ── Liste ayrıştırma ──
   Girintili maddeler alt listedir. Sayfalama motoru listeleri üst düzey blok
   olarak böldüğü için alt listeler ayrı blok (md-sublist md-depth-N) olarak
   üretilir; numaralı üst liste alt listeden sonra `start` ile kaldığı yerden sürer. */
const LIST_LINE_RX = /^(\s*)([-*+]|\d+[.)])\s+(.*)$/;

function indentWidth(ws) {
  return String(ws).replace(/\t/g, '    ').length;
}

function listBlocksFromItems(items, src) {
  const blocks = [];
  const stack = [items[0].indent];
  const counters = [];
  let group = null;

  const flush = () => {
    if (!group) return;
    const list = document.createElement(group.ordered ? 'ol' : 'ul');
    list.className = 'md-list' + (group.depth ? ` md-sublist md-depth-${group.depth}` : '');
    if (group.ordered && group.start > 1) list.start = group.start;
    for (const it of group.items) {
      const li = document.createElement('li');
      const signal = inlineSignalHtml(it.text);
      if (signal) {
        li.innerHTML = signal.html;
        li.classList.add('li-signal');
      } else {
        li.innerHTML = inline(it.text);
      }
      if (src) li.dataset.line = String(it.line);
      list.appendChild(li);
    }
    if (src) {
      list.dataset.src = src;
      list.dataset.line = String(group.line);
    }
    markFigureListItems(list);
    blocks.push(list);
    group = null;
  };

  for (const it of items) {
    while (stack.length > 1 && it.indent < stack[stack.length - 1]) stack.pop();
    if (it.indent >= stack[stack.length - 1] + 2 && stack.length < 4) stack.push(it.indent);
    const depth = stack.length - 1;

    counters.length = depth + 1;
    counters[depth] = (counters[depth] || 0) + 1;

    if (!group || group.depth !== depth || group.ordered !== it.ordered) {
      flush();
      group = { depth, ordered: it.ordered, start: counters[depth], items: [], line: it.line };
    }
    group.items.push(it);
  }
  flush();
  return blocks;
}

/* ── Tablo yardımcıları ── */
function splitRow(line) {
  let s = line.trim();
  if (s.startsWith('|')) s = s.slice(1);
  if (s.endsWith('|')) s = s.slice(0, -1);
  return s.split('|').map(c => c.trim());
}

/* Ayırıcı satırdan sütun hizası. `---` ve `:---` → varsayılan (ortalı, mevcut görünüm),
   `---:` → sağ, `:---:` → açıkça orta. */
function parseAligns(sepLine) {
  return splitRow(sepLine).map(c => {
    const t = c.replace(/\s+/g, '');
    if (/^:-+:$/.test(t)) return 'center';
    if (/^-+:$/.test(t)) return 'right';
    return '';
  });
}

function isTableStart(lines, i) {
  return lines[i].includes('|') && i + 1 < lines.length &&
    /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i + 1]) && lines[i + 1].includes('-');
}

function isBlockStart(lines, i) {
  const l = lines[i];
  return /^(#{1,6})\s+/.test(l) || LIST_LINE_RX.test(l) || /^>\s?/.test(l) || DATA_TABLE_RX.test(l) ||
    /^```/.test(l.trim()) || isTableStart(lines, i);
}

function mdToBlocks(md, src) {
  const lines = String(md || '')
    .replace(/^﻿/, '')
    // Yorumlar silinirken satır sayısı korunur (data-line kaynak satırını göstersin).
    .replace(/<!--[\s\S]*?-->/g, m => m.replace(/[^\n]/g, ''))
    .replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  const blocks = [];
  let i = 0;

  const push = (el, line) => {
    if (src) {
      el.dataset.src = src;
      el.dataset.line = String(line + 1);
    }
    blocks.push(el);
  };

  // Her turda üretilen bloklara bitiş satırı (data-line-end) yazılır — değişiklik çubukları için.
  let turnStart = 0;
  const markEnds = () => {
    if (src) for (let k = turnStart; k < blocks.length; k++) blocks[k].dataset.lineEnd = String(Math.max(i, Number(blocks[k].dataset.line) || i));
    turnStart = blocks.length;
  };

  while (i < lines.length) {
    markEnds();
    const line = lines[i];
    const startLine = i;

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
      push(pre, startLine);
      continue;
    }

    // DATA tablosu: {{TABLO:BLOK}}
    if (DATA_TABLE_RX.test(line)) {
      push(buildDataTable(line), startLine);
      i++;
      continue;
    }

    // Heading
    const hm = line.match(/^(#{1,6})\s+(.*)$/);
    if (hm) {
      const lvl = hm[1].length;
      const el = document.createElement('h' + lvl);
      el.className = 'md-h md-h' + lvl;
      el.dataset.mdLevel = String(lvl);
      el.innerHTML = inline(hm[2].trim());
      push(el, startLine);
      i++;
      continue;
    }

    // Horizontal rule
    if (/^(\*\s*){3,}$|^(-\s*){3,}$|^(_\s*){3,}$/.test(line.trim())) {
      const hr = document.createElement('hr');
      hr.className = 'md-hr';
      push(hr, startLine);
      i++;
      continue;
    }

    // Blockquote (uyarı kalıbıyla başlıyorsa uyarı kutusu)
    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        buf.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }
      const raw = buf.join(' ');
      const sig = parseSignalText(raw);
      if (sig) {
        push(buildCallout(sig), startLine);
        continue;
      }
      const bq = document.createElement('blockquote');
      bq.className = 'md-quote';
      bq.innerHTML = inline(raw);
      push(bq, startLine);
      continue;
    }

    // Table
    if (isTableStart(lines, i)) {
      const header = splitRow(line);
      const aligns = parseAligns(lines[i + 1]);
      i += 2;
      const rows = [];
      const rowLines = [];
      while (i < lines.length && lines[i].includes('|') && lines[i].trim()) {
        rows.push(splitRow(lines[i]));
        rowLines.push(i + 1);
        i++;
      }
      const table = document.createElement('table');
      table.className = 'md-table';
      const applyAlign = (cell, ci) => {
        if (aligns[ci]) cell.classList.add('al-' + aligns[ci]);
      };
      const thead = document.createElement('thead');
      const htr = document.createElement('tr');
      for (let ci = 0; ci < header.length; ci++) {
        const th = document.createElement('th');
        th.innerHTML = inline(header[ci]);
        applyAlign(th, ci);
        htr.appendChild(th);
      }
      thead.appendChild(htr);
      table.appendChild(thead);
      const tbody = document.createElement('tbody');
      for (const [ri, r] of rows.entries()) {
        const tr = document.createElement('tr');
        if (src) tr.dataset.line = String(rowLines[ri]);
        for (let ci = 0; ci < r.length; ci++) {
          const td = document.createElement('td');
          td.innerHTML = inline(r[ci]);
          applyAlign(td, ci);
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
      push(table, startLine);
      continue;
    }

    // List (ordered / unordered, girintiyle iç içe)
    if (LIST_LINE_RX.test(line)) {
      const items = [];
      while (i < lines.length) {
        const m = lines[i].match(LIST_LINE_RX);
        if (!m) break;
        items.push({ indent: indentWidth(m[1]), ordered: /\d/.test(m[2]), text: m[3], line: i + 1 });
        i++;
      }
      listBlocksFromItems(items, src).forEach(b => blocks.push(b));
      continue;
    }

    // Paragraph (accumulate until blank line or block start)
    const buf = [line];
    i++;
    while (i < lines.length && lines[i].trim() && !isBlockStart(lines, i)) {
      buf.push(lines[i]);
      i++;
    }
    const raw = buf.join(' ');
    const sig = parseSignalText(raw);
    if (sig) {
      push(buildCallout(sig), startLine);
      continue;
    }
    const p = document.createElement('p');
    p.className = 'md-p';
    p.innerHTML = inline(raw);
    markFigureParagraph(p);
    // "Tablo: …" satırı hemen bir tablodan önce geliyorsa tablo başlığı adayıdır
    // (yalnızca şekil/tablo numaralandırma açıkken başlığa dönüştürülür).
    const capRx = tDoc(currentLang).tableCaption;
    if (capRx && capRx.test(raw)) {
      let j = i;
      while (j < lines.length && !lines[j].trim()) j++;
      if (j < lines.length && isTableStart(lines, j)) {
        p.classList.add('md-table-caption-src');
        p.dataset.caption = raw.replace(capRx, '').trim();
      }
    }
    push(p, startLine);
  }
  markEnds();

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

/* ── Görsel yolu çözümleme ──────────────────────────────────────────
   Kural (tek ve öngörülebilir):
   - Paylaşılan görseller (assets/labels/…, assets/logos/…) → kök assets/
   - Diğer her şey → o kılavuzun KENDİ klasörü (projects/<id>/assets/…)
   md dosyaları kaç ../ yazarsa yazsın (../assets, ../../assets) fark etmez;
   yol içindeki "assets/…" parçası baz alınır. Tarayıcı tabanı codes/. */
const SHARED_ASSET_RE = /^(labels|logos|iso7010)\//i;

function resolveImageSrc(src) {
  if (!src || /^data:/i.test(src) || /^https?:/i.test(src)) return src;

  let s = String(src).replace(/\\/g, '/');
  if (s.startsWith('/')) return s;

  const m = s.match(/(?:^|\/)assets\/(.+)$/);
  if (!m) return s;

  const sub = m[1];
  if (SHARED_ASSET_RE.test(sub) || !currentProjectRel) {
    return assetUrl('assets/' + sub);
  }
  return assetUrl(currentProjectRel + '/assets/' + sub);
}

/* Bağlantılarda yalnızca güvenli hedefler: http(s), mailto, sayfa içi #, göreli yol. */
function isSafeHref(url) {
  const u = String(url || '').trim();
  if (/^(https?:|mailto:)/i.test(u)) return true;
  if (u.startsWith('#')) return true;
  return !/^[a-z][a-z0-9+.-]*:/i.test(u);
}

/* Çapraz referans: "Bkz. Bölüm 2.4", "See Chapter 2.4 and 9.1", "Siehe Kapitel 3". */
const XREF_RX = /((?:Bkz\.|bkz\.|See|see|Siehe|siehe)\s*:?\s+(?:<(?:strong|em)>)?)(Bölüm|bölüm|Chapter|chapter|Section|section|Kapitel|Abschnitt)\s+(\d+(?:\.\d+)*)((?:\s*(?:,|ve|veya|and|or|und|oder)\s*\d+(?:\.\d+)*)*)/g;

function xrefAnchor(label, num) {
  return `<a class="xref" data-xref="${num}" href="#">${label}</a>`;
}

function linkXrefs(s) {
  return s.replace(XREF_RX, (_, pre, word, num, rest) => {
    const more = rest.replace(/\d+(?:\.\d+)*/g, n => xrefAnchor(n, n));
    return `${pre}${xrefAnchor(`${word} ${num}`, num)}${more}`;
  });
}

/* ── Satır içi markdown ──
   Kod, görsel ve bağlantılar önce yer tutucuya alınır; böylece dosya
   adlarındaki "_" veya "*" vurguya dönüşmez (ör. foto_01_a.png). */
function inline(text) {
  const slots = [];
  const keep = (html) => `\u0000${slots.push(html) - 1}\u0000`;

  let s = escapeHtml(text);
  s = s.replace(/`([^`]+)`/g, (_, c) => keep(`<code class="md-inline-code">${c}</code>`));
  s = replaceDataPlaceholders(s, keep);
  s = replaceIsoSymbols(s, keep);
  s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;[^)]*&quot;)?\)/g, (_, alt, src) =>
    keep(`<img class="md-img" src="${resolveImageSrc(src)}" alt="${alt}" />`));
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) =>
    isSafeHref(href) ? keep(`<a href="${href}">`) + label + keep('</a>') : label);
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^\p{L}\p{N}_])__([^_]+)__(?![\p{L}\p{N}])/gu, '$1<strong>$2</strong>');
  s = s.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
  s = s.replace(/(^|[^\p{L}\p{N}_])_([^_]+)_(?![\p{L}\p{N}])/gu, '$1<em>$2</em>');
  s = linkXrefs(s);
  return s.replace(/\u0000(\d+)\u0000/g, (_, n) => slots[Number(n)]);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
