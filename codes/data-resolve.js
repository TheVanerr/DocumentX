/* ── DATA (SSOT) yer tutucuları ──
   Satır içi : {{BLOK:Anahtar}}      → değer
               {{BLOK:Anahtar#2}}    → değerin 2. sütunu ("a | b | c" biçimli değerlerde)
   Blok      : {{TABLO:BLOK}}        → bloğun tamamı tablo
               {{TABLO:BLOK|Anahtar 1, Anahtar 2}} → yalnızca seçilen anahtarlar
   Anahtarlar büyük/küçük harf ve fazla boşluk duyarsız eşleşir. Boş değer
   "[EKSİK]" olarak basılır; DATA'da olmayan anahtar kırmızı işaretlenir. */

const DATA_INLINE_RX = /\{\{([^{}:|]+):([^{}#]+?)(?:#(\d+))?\}\}/g;
const DATA_TABLE_RX = /^\s*\{\{TABLO:([^{}|]+?)(?:\|([^{}]+))?\}\}\s*$/i;
const DATA_EMPTY = '[EKSİK]';

const DATA_HEADERS = {
  tr: ['Parametre', 'Değer'],
  en: ['Parameter', 'Value'],
  de: ['Parameter', 'Wert']
};

function normDataKey(s) {
  return String(s || '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .toLocaleLowerCase('tr-TR')
    .replace(/\s+/g, ' ')
    .replace(/\s*:\s*$/, '')
    .trim();
}

function findDataBlock(name) {
  if (!currentData || !currentData.blocks) return null;
  const want = normDataKey(name);
  const hit = Object.keys(currentData.blocks).find(k => normDataKey(k) === want);
  return hit ? currentData.blocks[hit] : null;
}

function findDataEntry(blockName, key) {
  const block = findDataBlock(blockName);
  if (!block) return null;
  const want = normDataKey(key);
  return block.entries.find(e => normDataKey(e.key) === want) || null;
}

/* → { ok, value, entry } — value: ham metin (markdown olabilir). */
function resolveDataValue(blockName, key, col) {
  const entry = findDataEntry(blockName, key);
  if (!entry) return { ok: false };
  let value = entry.value;
  if (col) {
    const cells = entry.cells || [entry.value];
    value = cells[Number(col) - 1] || '';
  }
  return { ok: true, value: value.trim() ? value : DATA_EMPTY, entry };
}

/* inline() içinden çağrılır; s kaçışlı metindir, keep() yer tutucu üretir. */
function replaceDataPlaceholders(s, keep) {
  return s.replace(DATA_INLINE_RX, (whole, blockName, key, col) => {
    if (/^TABLO$/i.test(blockName.trim())) return whole;
    const r = resolveDataValue(blockName.trim(), key.trim(), col);
    const ref = `${blockName.trim()}:${key.trim()}${col ? '#' + col : ''}`;
    if (!r.ok) {
      return keep(`<span class="data-missing" data-key="${ref}" title="DATA dosyasında bu anahtar yok">`) +
        whole + keep('</span>');
    }
    return keep(`<span class="data-val" data-key="${ref}" data-dline="${r.entry.line}" title="DATA › ${ref}">`) +
      escapeHtml(r.value) + keep('</span>');
  });
}

/* {{TABLO:BLOK}} satırı → tablo elemanı (kaynak: DATA dosyası, satır = anahtar satırı). */
function buildDataTable(line) {
  const m = line.match(DATA_TABLE_RX);
  if (!m) return null;
  const block = findDataBlock(m[1].trim());
  if (!block) {
    const p = document.createElement('p');
    p.className = 'md-p';
    p.innerHTML = `<span class="data-missing" data-key="TABLO:${escapeHtml(m[1].trim())}" title="DATA dosyasında bu blok yok">${escapeHtml(line.trim())}</span>`;
    return p;
  }
  let entries = block.entries;
  if (m[2]) {
    const wanted = m[2].split(',').map(normDataKey).filter(Boolean);
    entries = wanted.map(w => block.entries.find(e => normDataKey(e.key) === w)).filter(Boolean);
  }

  const multi = entries.some(e => e.cells);
  const width = Math.max(1, ...entries.map(e => (e.cells ? e.cells.length : 1)));
  let header;
  if (block.columns && block.columns.length) header = block.columns.slice();
  else header = (DATA_HEADERS[currentLang] || DATA_HEADERS.tr).slice();
  // Sütun başlığı sayısı = anahtar + değer sütunları
  while (header.length < width + 1) header.push('');
  header = header.slice(0, width + 1);

  const table = document.createElement('table');
  table.className = 'md-table data-table';
  const thead = document.createElement('thead');
  const htr = document.createElement('tr');
  header.forEach(h => {
    const th = document.createElement('th');
    th.innerHTML = inline(h);
    htr.appendChild(th);
  });
  thead.appendChild(htr);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  entries.forEach(e => {
    const tr = document.createElement('tr');
    tr.dataset.dline = String(e.line);
    const cells = multi ? (e.cells || [e.value]) : [e.value];
    const row = [e.key, ...cells];
    while (row.length < header.length) row.push('');
    row.slice(0, header.length).forEach((c, ci) => {
      const td = document.createElement('td');
      td.innerHTML = ci > 0 && !String(c).trim() ? DATA_EMPTY : inline(c);
      if (ci > 0) td.classList.add('data-cell');
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  if (currentData && currentData.file) table.dataset.dataSrc = currentData.file;
  table.dataset.dataBlock = block.name;
  return table;
}
