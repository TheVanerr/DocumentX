/*
 * Eksik dil (.en.md, .de.md ...) dosyalarını otomatik oluşturur.
 * Her <ad>.tr.md için hedef <ad>.<dil>.md yoksa, kaynak TR içeriğini
 * bir "ÇEVİRİ GEREKLİ" başlığıyla kopyalar. Başlık/görsel/tablo/liste
 * yapısı korunur; çevirmen yalnızca metni günceller.
 *
 * Kullanım:
 *   node scripts/scaffold-lang.js en          → tüm içerikte eksik .en.md
 *   node scripts/scaffold-lang.js en de        → EN + DE
 *   node scripts/scaffold-lang.js en --force   → var olanları da yeniden yaz
 *
 * Mevcut çeviriler VARSAYILAN olarak KORUNUR (--force verilmedikçe).
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const SOURCE_LANG = 'tr';
const args = process.argv.slice(2);
const force = args.includes('--force');
const langs = args.filter(a => !a.startsWith('--')).map(s => s.toLowerCase());

if (!langs.length) {
  console.error('Kullanım: node scripts/scaffold-lang.js <dil...> [--force]');
  console.error('Örn:     node scripts/scaffold-lang.js en de');
  process.exit(1);
}

const SCAN_DIRS = [
  path.join(ROOT, 'content', '_common'),
  path.join(ROOT, 'content', '_models'),
  path.join(ROOT, 'projects')
];

const SRC_RX = new RegExp(`\\.${SOURCE_LANG}\\.md$`, 'i');

function banner(lang) {
  return `<!-- ÇEVİRİ GEREKLİ → ${lang.toUpperCase()} | kaynak: ${SOURCE_LANG.toUpperCase()} ` +
    `| bu satırı çeviri bitince silin. Başlık/görsel/tablo yapısını koruyun, yalnızca metni çevirin. -->\n\n`;
}

const report = {};
langs.forEach(l => (report[l] = { created: 0, skipped: 0, overwritten: 0 }));

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) { walk(abs); continue; }
    if (!SRC_RX.test(e.name)) continue;

    const src = fs.readFileSync(abs, 'utf8');
    for (const lang of langs) {
      if (lang === SOURCE_LANG) continue;
      const dest = abs.replace(SRC_RX, `.${lang}.md`);
      const exists = fs.existsSync(dest);
      if (exists && !force) { report[lang].skipped++; continue; }
      fs.writeFileSync(dest, banner(lang) + src, 'utf8');
      if (exists) report[lang].overwritten++; else report[lang].created++;
    }
  }
}

SCAN_DIRS.forEach(walk);

console.log('Dil iskeleti raporu' + (force ? ' (--force)' : '') + ':');
for (const lang of langs) {
  const r = report[lang];
  console.log(`  ${lang.toUpperCase()}: +${r.created} oluşturuldu, ${r.overwritten} güncellendi, ${r.skipped} atlandı (mevcut)`);
}
console.log('Not: fallback sayesinde çevrilmeyen dosyalar uygulamada otomatik TR gösterir.');
