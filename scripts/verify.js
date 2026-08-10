/* main.js'teki çözümleme mantığını taklit ederek yeni mimariyi doğrular. */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const yaml = require(path.join(ROOT, 'codes', 'node_modules', 'js-yaml'));

const CONTENT_COMMON = path.join(ROOT, 'content', '_common');
const CONTENT_MODELS = path.join(ROOT, 'content', '_models');
const PROJECTS_DIR = path.join(ROOT, 'projects');
const DEFAULT_LANG = 'tr';

const base = yaml.load(fs.readFileSync(path.join(ROOT, 'templates', 'base.yaml'), 'utf8'));

function resolveContent(roots, folderParts, baseName, lang) {
  if (!baseName) return null;
  const langs = lang === DEFAULT_LANG ? [lang] : [lang, DEFAULT_LANG];
  for (const root of roots) {
    for (const L of langs) {
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
  const common = out.filter(o => o.from.includes('_common')).length;
  const model = out.filter(o => o.from.includes('_models')).length;
  const proj = out.filter(o => o.from.startsWith('projects')).length;
  console.log(`\n[${name}] lang=${lang} → ${out.length} dolu bölüm  (ortak:${common} model:${model} proje:${proj})`);
  return out.length;
}

// Proje: 1726050 → model vdl + common
const projDoc = yaml.load(fs.readFileSync(path.join(PROJECTS_DIR, '1726050-ALPER-KNV-30', 'project.yaml'), 'utf8'));
const projRoots = [
  path.join(PROJECTS_DIR, '1726050-ALPER-KNV-30'),
  path.join(CONTENT_MODELS, projDoc.model),
  CONTENT_COMMON
];
const nProj = testGuide('PROJE 1726050 (model=' + projDoc.model + ')', projRoots, 'tr');

// Model vdl (tek başına)
const nVdl = testGuide('MODEL vdl', [path.join(CONTENT_MODELS, 'vdl'), CONTENT_COMMON], 'tr');

// Model lym (kısmi) — common fallback çalışıyor mu?
const nLym = testGuide('MODEL lym', [path.join(CONTENT_MODELS, 'lym'), CONTENT_COMMON], 'tr');

// EN istendi ama yok → tr fallback tüm dosyalarda çalışmalı
const nEn = testGuide('PROJE 1726050 EN-iste-tr-fallback', projRoots, 'en');

console.log('\nSONUC:',
  (nProj > 30 && nProj === nEn && nVdl > 30 && nLym >= nVdl - 30) ? 'OK ✓' : 'KONTROL ET');
console.log('Not: proje ve model vdl ayni sayida bolum vermeli:', nProj === nVdl);
