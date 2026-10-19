/* project.yaml içinde tek bir üst düzey anahtarı (kapak, cikti, revizyonlar …)
   yeniden yazar. Dosyanın geri kalanı — yorumlar, sıralama, boş satırlar —
   olduğu gibi kalır; yalnızca o anahtarın bloğu yeniden üretilir. */
const fs = require('fs');
const yaml = require('js-yaml');

function escapeRx(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* Üst düzey `key:` bloğunun satır aralığı [start, end). Blok; girintili,
   boş, yorum ve sütun 0'daki "- " liste satırlarıyla devam eder. Sondaki
   boş/yorum satırları bir sonraki bloğa aittir, aralığa katılmaz. */
function findTopLevelBlock(lines, key) {
  const rx = new RegExp('^' + escapeRx(key) + '\\s*:');
  const start = lines.findIndex(l => rx.test(l));
  if (start < 0) return null;
  let end = start + 1;
  while (end < lines.length) {
    const l = lines[end];
    if (l === '' || /^\s/.test(l) || /^#/.test(l) || /^-(\s|$)/.test(l)) { end++; continue; }
    break;
  }
  while (end > start + 1 && (/^\s*$/.test(lines[end - 1]) || /^\s*#/.test(lines[end - 1]))) end--;
  return { start, end };
}

function isPlainObject(v) {
  return v != null && typeof v === 'object' && !Array.isArray(v) && !(v instanceof Date);
}

/* yaml'da tırnaksız yazılmış tarih (2026-10-19) Date olarak okunur — geri yazarken metne çevir. */
function normalizeValue(v) {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  if (Array.isArray(v)) return v.map(normalizeValue);
  if (isPlainObject(v)) {
    const out = {};
    for (const [k, x] of Object.entries(v)) out[k] = normalizeValue(x);
    return out;
  }
  return v;
}

/* value === undefined → blok silinir. */
function setTopLevelKey(text, key, value) {
  const eol = /\r\n/.test(text) ? '\r\n' : '\n';
  const lines = String(text).split(/\r?\n/);
  const blk = findTopLevelBlock(lines, key);
  const dumped = value === undefined
    ? []
    : yaml.dump({ [key]: normalizeValue(value) }, { lineWidth: -1 }).replace(/\n+$/, '').split('\n');

  if (blk) {
    lines.splice(blk.start, blk.end - blk.start, ...dumped);
  } else if (dumped.length) {
    while (lines.length && lines[lines.length - 1] === '') lines.pop();
    if (lines.length) lines.push('');
    lines.push(...dumped);
  }
  let out = lines.join(eol);
  if (!out.endsWith(eol)) out += eol;
  return out;
}

/* patch: { kapak: { rev: '02' }, cikti: {...}, revizyonlar: [...] }
   Nesne değerler mevcut blokla birleştirilir (null alan silinir), diğerleri
   değiştirilir; üst düzeyde null/undefined → blok silinir. */
function applyPatch(text, patch) {
  const doc = yaml.load(text) || {};
  let out = text;
  for (const [key, val] of Object.entries(patch || {})) {
    let next = val == null ? undefined : val;
    if (isPlainObject(val)) {
      next = { ...(isPlainObject(doc[key]) ? normalizeValue(doc[key]) : {}) };
      for (const [k, v] of Object.entries(val)) {
        if (v === null || v === undefined) delete next[k];
        else next[k] = v;
      }
    }
    out = setTopLevelKey(out, key, next);
  }
  yaml.load(out); // bozuk çıktı diske yazılmasın
  return out;
}

function updateYamlFile(file, patch) {
  const text = fs.readFileSync(file, 'utf8');
  const out = applyPatch(text, patch);
  if (out !== text) fs.writeFileSync(file, out, 'utf8');
  return out !== text;
}

module.exports = { findTopLevelBlock, setTopLevelKey, applyPatch, updateYamlFile, normalizeValue };
