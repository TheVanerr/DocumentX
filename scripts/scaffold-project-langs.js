/*
 * Belirli bir proje klasorundeki tum .tr.md dosyalari icin .en.md / .de.md olusturur.
 * Kullanim: node scripts/scaffold-project-langs.js 1726050-ALPER-KNV-30 en de
 */
const fs = require('fs');
const path = require('path');
const yaml = require(path.join(__dirname, '..', 'codes', 'node_modules', 'js-yaml'));

const ROOT = path.resolve(__dirname, '..');
const [, , slugRaw, ...langArgs] = process.argv;
const langs = langArgs.map(s => s.toLowerCase()).filter(l => l && l !== 'tr');

if (!slugRaw || !langs.length) {
  console.error('Kullanim: node scripts/scaffold-project-langs.js <proje-slug> <dil...>');
  console.error('Orn:     node scripts/scaffold-project-langs.js 1726050-ALPER-KNV-30 en de');
  process.exit(1);
}

const slug = slugRaw.trim();
const PROJ = path.join(ROOT, 'projects', slug);
if (!fs.existsSync(PROJ)) {
  console.error('Proje bulunamadi:', PROJ);
  process.exit(1);
}

const SRC_RX = /\.tr\.md$/i;
const SEED_ROOTS = [
  path.join(ROOT, 'content', '_models', 'vdl'),
  path.join(ROOT, 'content', '_models', 'lym'),
  path.join(ROOT, 'content', '_common')
];

function banner(lang) {
  return (
    `<!-- CEVIRI GEREKLI -> ${lang.toUpperCase()} | kaynak: TR ` +
    `| bu satiri ceviri bitince silin. Baslik/gorsel/tablo yapisini koruyun. -->\n\n`
  );
}

function readIf(p) {
  if (!fs.existsSync(p)) return null;
  const c = fs.readFileSync(p, 'utf8');
  return c.trim() ? c : null;
}

function resolveSeed(relParts, baseName, lang) {
  for (const root of SEED_ROOTS) {
    const p = path.join(root, ...relParts, `${baseName}.${lang}.md`);
    const c = readIf(p);
    if (c) return { content: c, from: path.relative(ROOT, p) };
  }
  const trPath = path.join(PROJ, ...relParts, `${baseName}.tr.md`);
  const tr = readIf(trPath);
  if (tr) return { content: banner(lang) + tr, from: 'scaffold-tr' };
  return null;
}

const report = {};
langs.forEach(l => (report[l] = { created: 0, skipped: 0 }));

function walk(dir, relParts) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) {
      walk(abs, relParts.concat(e.name));
      continue;
    }
    if (!SRC_RX.test(e.name)) continue;

    const baseName = e.name.replace(SRC_RX, '');
    for (const lang of langs) {
      const dest = path.join(dir, `${baseName}.${lang}.md`);
      if (fs.existsSync(dest)) {
        report[lang].skipped++;
        continue;
      }
      const seed = resolveSeed(relParts, baseName, lang);
      if (!seed) continue;
      fs.writeFileSync(dest, seed.content, 'utf8');
      report[lang].created++;
      console.log('+', path.relative(ROOT, dest).replace(/\\/g, '/'), '<-', seed.from);
    }
  }
}

walk(PROJ, []);

const yamlPath = path.join(PROJ, 'project.yaml');
if (fs.existsSync(yamlPath)) {
  const raw = fs.readFileSync(yamlPath, 'utf8');
  const headerEnd = raw.indexOf('\nproje_adi:');
  const header = headerEnd >= 0 ? raw.slice(0, headerEnd) : '';
  const doc = yaml.load(raw) || {};
  doc.diller = [...new Set(['tr', ...langs, ...(doc.diller || [])])];
  doc.varsayilan_dil = doc.varsayilan_dil || 'tr';
  fs.writeFileSync(yamlPath, header + '\n' + yaml.dump(doc, { lineWidth: -1 }), 'utf8');
  console.log('\nproject.yaml diller:', doc.diller.join(', '));
}

console.log('\nRapor:');
for (const lang of langs) {
  const r = report[lang];
  console.log(`  ${lang.toUpperCase()}: +${r.created} olusturuldu, ${r.skipped} atlandi (mevcut)`);
}
