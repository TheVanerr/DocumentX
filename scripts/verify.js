/* main.js'teki çözümleme mantığını taklit ederek proje-tek-kaynak mimarisini doğrular. */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const yaml = require(path.join(ROOT, 'codes', 'node_modules', 'js-yaml'));
const projectCore = require(path.join(ROOT, 'scripts', 'project-core'));

const PROJECTS_DIR = path.join(ROOT, 'projects');
const DEFAULT_LANG = 'tr';

const base = yaml.load(fs.readFileSync(path.join(ROOT, 'templates', 'base.yaml'), 'utf8'));

function resolveContent(roots, folderParts, baseName, lang) {
  if (!baseName) return null;
  const langs = lang === DEFAULT_LANG ? [lang] : [lang, DEFAULT_LANG];
  for (const L of langs) {
    for (const root of roots) {
      const p = path.join(root, ...folderParts, `${baseName}.${L}.md`);
      if (fs.existsSync(p) && fs.readFileSync(p, 'utf8').trim()) return { p, L };
    }
  }
  return null;
}

function walk(items, dirParts, roots, lang, out) {
  for (const it of items || []) {
    const folder = dirParts.concat(String(it.id));
    const hit = resolveContent(roots, folder, it.dosya, lang);
    if (hit) out.push({ node: folder.join('/'), from: path.relative(ROOT, hit.p), lang: hit.L });
    walk(it.alt_bolumler, folder, roots, lang, out);
  }
}

function testGuide(name, roots, lang) {
  const out = [];
  walk(base.bolumler, [], roots, lang, out);
  const legacy = out.filter(o => o.from.includes('_common') || o.from.includes('_models')).length;
  const proj = out.filter(o => o.from.startsWith('projects')).length;
  const mixed = out.filter(o => o.lang !== lang).length;
  console.log(`\n[${name}] lang=${lang} → ${out.length} dolu bölüm  (proje:${proj} legacy:${legacy} karisik:${mixed})`);
  return { n: out.length, mixed, legacy, out };
}

const projYaml = projectCore.findProjectYaml(path.join(PROJECTS_DIR, '1726050-ALPER-KNV-30'));
if (!projYaml) {
  console.error('Proje yaml bulunamadi');
  process.exit(1);
}
const projDoc = yaml.load(fs.readFileSync(projYaml, 'utf8'));
const projRoots = [path.join(PROJECTS_DIR, '1726050-ALPER-KNV-30')];

const rTr = testGuide('PROJE 1726050 TR', projRoots, 'tr');
const rEn = testGuide('PROJE 1726050 EN', projRoots, 'en');
const rDe = testGuide('PROJE 1726050 DE', projRoots, 'de');

const vdlDir = path.join(PROJECTS_DIR, 'vdl');
const nVdl = fs.existsSync(projectCore.findProjectYaml(vdlDir) || '')
  ? testGuide('SABLON vdl', [vdlDir], 'tr').n
  : 0;

const ok = rTr.n > 30 && rTr.n === rEn.n && rTr.n === rDe.n
  && rEn.mixed === 0 && rDe.mixed === 0 && rTr.legacy === 0;
console.log('\nSONUC:', ok ? 'OK ✓' : 'KONTROL ET');
console.log('yaml:', path.relative(ROOT, projYaml), '| diller:', (projDoc.diller || []).join(','));
console.log('sablon vdl:', nVdl);
