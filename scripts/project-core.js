/*
 * Proje olusturma cekirdegi (CLI + Electron ortak).
 * Kapsam: yalnizca makineye ozel bolumler (content/_models/<model>) projeye
 * kopyalanir; icerik modelin mevcut .tr.md'sinden alinir (gercek taslak).
 * Ortak/guvenlik/intro bolumleri content/_common'dan mirasla gelmeye devam eder.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const yaml = require(path.join(ROOT, 'codes', 'node_modules', 'js-yaml'));

function listModels(root = ROOT) {
  const dir = path.join(root, 'content', '_models');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort();
}

function slugify(name) {
  return String(name).trim().replace(/\s+/g, '-');
}

/* Proje kökünde project.yaml veya "<proje adı>.yaml" arar. */
function findProjectYaml(projectDir) {
  if (!projectDir || !fs.existsSync(projectDir)) return null;
  const preferred = path.join(projectDir, 'project.yaml');
  if (fs.existsSync(preferred)) return preferred;

  const files = fs.readdirSync(projectDir).filter((n) => {
    if (!/\.ya?ml$/i.test(n)) return false;
    try { return fs.statSync(path.join(projectDir, n)).isFile(); }
    catch (e) { return false; }
  });
  if (!files.length) return null;

  const dirKey = path.basename(projectDir).toLowerCase();
  files.sort((a, b) => {
    const ka = a.replace(/\s+/g, '-').replace(/\.ya?ml$/i, '').toLowerCase();
    const kb = b.replace(/\s+/g, '-').replace(/\.ya?ml$/i, '').toLowerCase();
    const da = ka === dirKey ? 0 : 1;
    const db = kb === dirKey ? 0 : 1;
    if (da !== db) return da - db;
    return a.localeCompare(b);
  });
  return path.join(projectDir, files[0]);
}

/* content/_models/<model> altindaki tum .tr.md dosyalarini (rel yol) bulur. */
function modelSources(modelDir) {
  const out = [];
  const walk = (abs) => {
    for (const e of fs.readdirSync(abs, { withFileTypes: true })) {
      const p = path.join(abs, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.tr\.md$/i.test(e.name)) out.push(path.relative(modelDir, p));
    }
  };
  walk(modelDir);
  return out.sort();
}

/*
 * createProject(root, name, model, langs)
 *   -> { ok, id, slug, label, model, files, error }
 */
function createProject(root, name, modelRaw, langsRaw) {
  root = root || ROOT;
  const nameTrim = String(name || '').trim();
  const model = String(modelRaw || '').toLowerCase().trim();

  if (!nameTrim) return { ok: false, error: 'Proje adi bos olamaz.' };
  if (!model) return { ok: false, error: 'Model secilmedi.' };

  const modelDir = path.join(root, 'content', '_models', model);
  if (!fs.existsSync(modelDir)) {
    return { ok: false, error: `Model bulunamadi: ${model}. Mevcut: ${listModels(root).join(', ')}` };
  }

  const langs = (Array.isArray(langsRaw) ? langsRaw : String(langsRaw || 'tr').split(','))
    .map(s => String(s).trim().toLowerCase())
    .filter(Boolean);
  const diller = langs.length ? [...new Set(['tr', ...langs])] : ['tr'];

  const slug = slugify(nameTrim);
  const projDir = path.join(root, 'projects', slug);
  if (findProjectYaml(projDir)) {
    return { ok: false, error: `Bu proje zaten var: ${slug}` };
  }
  fs.mkdirSync(projDir, { recursive: true });

  // project.yaml
  const doc = {
    proje_adi: nameTrim,
    model,
    diller,
    varsayilan_dil: diller[0] || 'tr',
    extends: 'templates/base.yaml',
    kapak: { rev: '', tarih: '', firma: 'DOLFIN' }
  };
  fs.writeFileSync(
    path.join(projDir, 'project.yaml'),
    '# Proje receta: model + diller + kapak. Makineye ozel bolumler asagida,\n' +
    '# ortak bolumler content/_common katmanindan mirasla gelir.\n\n' +
    yaml.dump(doc, { lineWidth: -1 }),
    'utf8'
  );

  // Makineye ozel bolumleri modelin icerigiyle kopyala (yalniz .tr.md)
  const files = [];
  for (const rel of modelSources(modelDir)) {
    const src = path.join(modelDir, rel);
    const dest = path.join(projDir, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, fs.readFileSync(src, 'utf8'), 'utf8');
    files.push(rel.replace(/\\/g, '/'));
  }

  return {
    ok: true,
    id: 'proje:' + slug,
    slug,
    label: nameTrim,
    model,
    diller,
    files
  };
}

module.exports = { createProject, listModels, slugify, findProjectYaml };
