/* Makine veri dosyası (SSOT) — "<proje> DATA" (uzantısız).
   Biçim: [BLOK] başlıkları, altında "Anahtar: değer" satırları, # yorum.
   Değer içinde "|" varsa sütunlara ayrılır (ör. motor listesi).
   "# Her satır: Ad | Güç (kW) | …" yorumu o bloğun sütun başlıklarıdır. */
const fs = require('fs');
const path = require('path');

/* Proje klasöründe DATA dosyası: "DATA" ya da "<herhangi> DATA". */
function findDataFile(projectDir) {
  if (!projectDir || !fs.existsSync(projectDir)) return null;
  const hit = fs.readdirSync(projectDir, { withFileTypes: true })
    .filter(e => e.isFile() && /(^|\s)DATA$/.test(e.name))
    .map(e => e.name)
    .sort();
  return hit.length ? path.join(projectDir, hit[0]) : null;
}

function parseData(text) {
  const blocks = {};
  const order = [];
  let cur = null;
  String(text || '').replace(/^﻿/, '').split(/\r?\n/).forEach((raw, i) => {
    const line = raw.trim();
    if (!line) return;
    const head = line.match(/^\[([^\]]+)\]\s*$/);
    if (head) {
      const name = head[1].trim();
      cur = blocks[name] || (blocks[name] = { name, line: i + 1, columns: null, entries: [] });
      if (!order.includes(name)) order.push(name);
      return;
    }
    if (line.startsWith('#')) {
      const cols = line.match(/^#\s*Her satır\s*:\s*(.+)$/i);
      if (cur && cols && cols[1].includes('|')) cur.columns = cols[1].split('|').map(s => s.trim());
      return;
    }
    if (!cur) return;
    const m = raw.match(/^\s*([^:]+?)\s*:\s?(.*)$/);
    if (!m) return;
    const value = m[2].trim();
    cur.entries.push({
      key: m[1].trim(),
      value,
      cells: value.includes('|') ? value.split('|').map(s => s.trim()) : null,
      line: i + 1
    });
  });
  return { blocks, order };
}

function readData(projectDir, root) {
  const file = findDataFile(projectDir);
  if (!file) return null;
  try {
    const parsed = parseData(fs.readFileSync(file, 'utf8'));
    return {
      file: root ? path.relative(root, file).split(path.sep).join('/') : file,
      ...parsed
    };
  } catch (e) {
    return null;
  }
}

module.exports = { findDataFile, parseData, readData };
