/* 1726050-ALPER-KNV 30 proje iskeleti — tek seferlik kurulum */
const fs = require('fs');
const path = require('path');
const yaml = require(path.join(__dirname, '..', 'codes', 'node_modules', 'js-yaml'));

const ROOT = path.resolve(__dirname, '..');
const PROJ = path.join(ROOT, 'projects', '1726050-ALPER-KNV-30');
const SEED_MODEL = 'vdl';

const PROJECT_SECTIONS = new Set([
  '03-overview', '05-assembly', '06-settings', '07-operation', '08-capacity',
  '09-maintenance', '10-cleaning', '11-troubleshooting', '12-dismantle',
  '13-documents', '14-index'
]);

const base = yaml.load(fs.readFileSync(path.join(ROOT, 'templates', 'base.yaml'), 'utf8'));

function collectFiles(items, dirParts, out) {
  for (const it of items || []) {
    const folder = dirParts.concat(String(it.id));
    const top = folder[0];
    if (PROJECT_SECTIONS.has(top)) {
      if (it.dosya) out.push({ parts: folder, base: String(it.dosya) });
      collectFiles(it.alt_bolumler, folder, out);
    }
  }
}

const needed = [];
collectFiles(base.bolumler, [], needed);

function readIf(p) {
  if (!fs.existsSync(p)) return null;
  const c = fs.readFileSync(p, 'utf8');
  return c.trim() ? c : null;
}

function resolveSeed(parts, baseName) {
  const roots = [
    path.join(ROOT, 'content', '_models', SEED_MODEL),
    path.join(ROOT, 'content', '_models', 'lym'),
    path.join(ROOT, 'content', '_common')
  ];
  for (const root of roots) {
    const p = path.join(root, ...parts, `${baseName}.tr.md`);
    const c = readIf(p);
    if (c) return { content: c, from: path.relative(ROOT, p) };
  }
  return {
    content: `# ${baseName.replace(/-/g, ' ')}\n\n<!-- 1726050-ALPER-KNV 30 | proje ozel icerik -->\n`,
    from: '(placeholder)'
  };
}

let created = 0;
let skipped = 0;

for (const { parts, base: baseName } of needed) {
  const dest = path.join(PROJ, ...parts, `${baseName}.tr.md`);
  if (fs.existsSync(dest)) {
    skipped++;
    continue;
  }
  const seed = resolveSeed(parts, baseName);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, seed.content, 'utf8');
  created++;
  console.log('+', path.relative(ROOT, dest).replace(/\\/g, '/'), '<-', seed.from);
}

const projectDoc = {
  proje_adi: '1726050-ALPER-KNV 30',
  model: 'knv',
  diller: ['tr', 'en', 'de'],
  varsayilan_dil: 'tr',
  extends: 'templates/base.yaml',
  kapak: { rev: '', tarih: '', firma: 'DOLFIN' }
};

const header =
  '# 1726050-ALPER-KNV 30 - proje recetesi\n' +
  '# Dil derleme: TR -> .<dil=tr>.md, EN -> .en.md, DE -> .de.md\n' +
  '# Cozumleme: projects/... -> content/_models/knv/... -> content/_common/...\n' +
  '#\n' +
  '# Ortak (_common; proje klasorunde dosya YOK):\n' +
  '#   01-introduction, 02-safety, 04-transport\n' +
  '#\n' +
  '# Proje ozel (projects/1726050-ALPER-KNV-30/ altindaki .<dil>.md):\n' +
  '#   03-overview, 05-assembly .. 14-index\n\n';

fs.mkdirSync(PROJ, { recursive: true });
fs.writeFileSync(
  path.join(PROJ, '1726050-ALPER-KNV 30.yaml'),
  header + yaml.dump(projectDoc, { lineWidth: -1 }),
  'utf8'
);

console.log('\n1726050-ALPER-KNV 30.yaml guncellendi (model: knv)');
console.log(`Olusturulan: ${created} | Atlanan: ${skipped} | Hedef: ${needed.length} dosya`);
