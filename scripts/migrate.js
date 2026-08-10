/*
 * DocumentX mimari geçişi (tek seferlik).
 *  1) BACKUP/ oluştur; tüm 01-14 bölüm klasörlerini + eski projeyi + eski yaml-files'ı taşı.
 *  2) BACKUP'taki kök bölüm klasörlerinden yeni içerik ağacını üret:
 *       content/_common/<bölüm>/<alt>/<ad>.tr.md      (öneksiz ortak metin)
 *       content/_models/<model>/<bölüm>/<alt>/<ad>.tr.md
 *  Boş (0 byte) dosyalar taşınmaz; yapı templates/base.yaml'da tutulur.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BACKUP = path.join(ROOT, 'BACKUP');

const MODEL_PREFIXES = ['kbn', 'knv', 'lym', 'mst', 'pyt', 'rts', 'ult', 'vdl'];
const SKIP_PREFIXES = ['idea']; // proje kopyası — vdl ile birebir aynı, model'den miras alınacak

const CHAPTER_DIRS = [
  '01-introduction', '02-safety', '03-overview', '04-transport', '05-assembly',
  '06-settings', '07-operation', '08-capacity', '09-maintenance', '10-cleaning',
  '11-troubleshooting', '12-dismantle', '13-documents', '14-index'
];
const MOVE_ALSO = ['1726050-ALPER-KNV 30', 'yaml-files'];

if (fs.existsSync(BACKUP)) {
  console.error('HATA: BACKUP zaten var. İşlem iptal.');
  process.exit(1);
}
fs.mkdirSync(BACKUP);

function moveIntoBackup(name) {
  const src = path.join(ROOT, name);
  if (!fs.existsSync(src)) return;
  fs.renameSync(src, path.join(BACKUP, name));
  console.log('BACKUP <-', name);
}
CHAPTER_DIRS.forEach(moveIntoBackup);
MOVE_ALSO.forEach(moveIntoBackup);

const CONTENT = path.join(ROOT, 'content');
const COMMON = path.join(CONTENT, '_common');
const MODELS = path.join(CONTENT, '_models');
fs.mkdirSync(COMMON, { recursive: true });
MODEL_PREFIXES.forEach(m => fs.mkdirSync(path.join(MODELS, m), { recursive: true }));

function classify(stem) {
  for (const p of SKIP_PREFIXES) if (stem.startsWith(p)) return { skip: true };
  for (const m of MODEL_PREFIXES) {
    if (stem.startsWith(m) && stem.length > m.length) return { model: m, base: stem.slice(m.length) };
  }
  return { base: stem };
}
function normBase(base) {
  return base.replace(/\.md$/i, '').replace(/\./g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

const report = { common: 0, model: 0, skipped: 0, empty: 0 };

function walk(absDir, relParts) {
  for (const entry of fs.readdirSync(absDir, { withFileTypes: true })) {
    const abs = path.join(absDir, entry.name);
    if (entry.isDirectory()) { walk(abs, relParts.concat(entry.name)); continue; }
    if (!/\.md$/i.test(entry.name)) continue;

    const stem = entry.name.replace(/\.md$/i, '');
    const c = classify(stem);
    if (c.skip) { report.skipped++; continue; }
    if (fs.statSync(abs).size === 0) { report.empty++; continue; }

    const base = normBase(c.base);
    const destRoot = c.model ? path.join(MODELS, c.model) : COMMON;
    const destDir = path.join(destRoot, ...relParts);
    fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(abs, path.join(destDir, `${base}.tr.md`));
    if (c.model) report.model++; else report.common++;
  }
}

CHAPTER_DIRS.forEach(ch => {
  const abs = path.join(BACKUP, ch);
  if (fs.existsSync(abs)) walk(abs, [ch]);
});

console.log('Rapor:', JSON.stringify(report));
console.log('Modeller:', MODEL_PREFIXES.join(', '));
