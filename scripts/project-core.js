/*
 * Proje olusturma cekirdegi (CLI + Electron ortak).
 * Her proje kendi klasorunde tam icerik tasir (01-14, assets, yaml).
 * Yeni proje: projects/<model> sablonundan kopyalanir.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const yaml = require(path.join(ROOT, 'codes', 'node_modules', 'js-yaml'));

const MODEL_IDS = ['kbn', 'knv', 'lym', 'mst', 'pyt', 'rts', 'ult', 'vdl'];

function slugify(name) {
  return String(name).trim().replace(/\s+/g, '-');
}

function safeReadYaml(p) {
  try { return yaml.load(fs.readFileSync(p, 'utf8')); } catch (e) { return null; }
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

function isModelTemplate(projectDir) {
  const yp = findProjectYaml(projectDir);
  if (!yp) return false;
  const doc = safeReadYaml(yp) || {};
  return doc.sablon === true || doc.tip === 'sablon';
}

/** Model sablonlari: projects/ altinda sablon: true olan klasorler. */
function listModels(root = ROOT) {
  const projectsDir = path.join(root, 'projects');
  if (!fs.existsSync(projectsDir)) return [];

  const out = [];
  for (const e of fs.readdirSync(projectsDir, { withFileTypes: true })) {
    if (!e.isDirectory() || e.name.toLowerCase() === 'backup') continue;
    const dir = path.join(projectsDir, e.name);
    if (isModelTemplate(dir)) out.push(e.name.toLowerCase());
  }
  return out.sort();
}

function copyTemplateTree(templateDir, destDir) {
  const files = [];
  const skipNames = new Set(['backup']);

  const walk = (rel) => {
    const abs = rel ? path.join(templateDir, rel) : templateDir;
    for (const e of fs.readdirSync(abs, { withFileTypes: true })) {
      const relPath = rel ? path.join(rel, e.name) : e.name;
      if (skipNames.has(e.name.toLowerCase())) continue;

      if (e.isDirectory()) {
        fs.mkdirSync(path.join(destDir, relPath), { recursive: true });
        walk(relPath);
        continue;
      }

      if (/\.ya?ml$/i.test(e.name)) continue;
      if (/\sDATA$/i.test(e.name)) continue;

      const src = path.join(templateDir, relPath);
      const dest = path.join(destDir, relPath);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
      files.push(relPath.replace(/\\/g, '/'));
    }
  };

  walk('');
  return files;
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

  const templateDir = path.join(root, 'projects', model);
  if (!fs.existsSync(templateDir) || !findProjectYaml(templateDir)) {
    return {
      ok: false,
      error: `Model sablonu bulunamadi: projects/${model}. Mevcut: ${listModels(root).join(', ')}`
    };
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

  const templateDoc = safeReadYaml(findProjectYaml(templateDir)) || {};
  const doc = {
    proje_adi: nameTrim,
    model,
    tip: 'proje',
    diller,
    varsayilan_dil: diller[0] || 'tr',
    extends: templateDoc.extends || 'templates/base.yaml',
    kapak: { rev: '', tarih: '', firma: 'DOLFIN' }
  };
  fs.writeFileSync(
    path.join(projDir, 'project.yaml'),
    '# Proje recetesi — icerik yalnizca bu klasorden okunur.\n\n' +
    yaml.dump(doc, { lineWidth: -1 }),
    'utf8'
  );

  const files = copyTemplateTree(templateDir, projDir);
  if (!fs.existsSync(path.join(projDir, 'assets'))) {
    fs.mkdirSync(path.join(projDir, 'assets'), { recursive: true });
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

module.exports = {
  createProject,
  listModels,
  slugify,
  findProjectYaml,
  isModelTemplate,
  MODEL_IDS
};
