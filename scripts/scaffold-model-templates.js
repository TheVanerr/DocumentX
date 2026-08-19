/*
 * 8 model sablonu: projects/<model>/ (01-14, assets, yaml)
 * Klasor yapisi 1726050-ALPER-KNV-30 referans alinir.
 * Kullanim: node scripts/scaffold-model-templates.js
 */
const fs = require('fs');
const path = require('path');
const yaml = require(path.join(__dirname, '..', 'codes', 'node_modules', 'js-yaml'));

const ROOT = path.resolve(__dirname, '..');
const PROJECTS = path.join(ROOT, 'projects');
const LANGS = ['tr', 'en', 'de'];

const MODEL_IDS = ['kbn', 'knv', 'lym', 'mst', 'pyt', 'rts', 'ult', 'vdl'];
const REF_PROJECT = path.join(PROJECTS, '1726050-ALPER-KNV-30');

function readIf(p) {
  if (!fs.existsSync(p)) return null;
  const c = fs.readFileSync(p, 'utf8');
  return c.trim() ? c : null;
}

function collectFiles(items, dirParts, out) {
  for (const it of items || []) {
    const folder = dirParts.concat(String(it.id));
    if (it.dosya) out.push({ parts: folder, base: String(it.dosya) });
    collectFiles(it.alt_bolumler, folder, out);
  }
}

function placeholder(title, model) {
  return `# ${title}\n\n<!-- ${model.toUpperCase()} sablon | icerik DATA dosyasindan uretilecek -->\n`;
}

function translationBanner(lang) {
  if (lang === 'tr') return '';
  return (
    `<!-- CEVIRI GEREKLI -> ${lang.toUpperCase()} | kaynak: TR ` +
    `| bu satiri ceviri bitince silin. -->\n\n`
  );
}

function writeMd(dest, content) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (!fs.existsSync(dest)) fs.writeFileSync(dest, content, 'utf8');
}

function mirrorRefDirs(projDir) {
  if (!fs.existsSync(REF_PROJECT)) return;
  for (const e of fs.readdirSync(REF_PROJECT, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    if (!/^\d{2}-/.test(e.name) && e.name !== 'assets') continue;
    fs.mkdirSync(path.join(projDir, e.name), { recursive: true });
    if (e.name === 'assets') continue;
    const refSub = path.join(REF_PROJECT, e.name);
    for (const sub of fs.readdirSync(refSub, { withFileTypes: true })) {
      if (sub.isDirectory()) fs.mkdirSync(path.join(projDir, e.name, sub.name), { recursive: true });
    }
  }
}

const base = yaml.load(fs.readFileSync(path.join(ROOT, 'templates', 'base.yaml'), 'utf8'));
const needed = [];
collectFiles(base.bolumler, [], needed);

for (const model of MODEL_IDS) {
  const projDir = path.join(PROJECTS, model);
  const yamlPath = path.join(projDir, `${model}.yaml`);

  if (!fs.existsSync(projDir)) fs.mkdirSync(projDir, { recursive: true });
  mirrorRefDirs(projDir);

  if (!fs.existsSync(yamlPath)) {
    const doc = {
      proje_adi: model.toUpperCase(),
      model,
      sablon: true,
      tip: 'sablon',
      diller: LANGS,
      varsayilan_dil: 'tr',
      extends: 'templates/base.yaml',
      kapak: { rev: '', tarih: '', firma: 'DOLFIN' }
    };
    fs.writeFileSync(
      yamlPath,
      `# ${model.toUpperCase()} model sablonu — icerik yalnizca bu klasorden okunur.\n\n` +
      yaml.dump(doc, { lineWidth: -1 }),
      'utf8'
    );
    console.log('yaml ->', path.relative(ROOT, yamlPath));
  }

  const assetsDir = path.join(projDir, 'assets');
  if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

  let created = 0;
  for (const { parts, base: baseName } of needed) {
    const title = baseName.replace(/-/g, ' ');
    for (const lang of LANGS) {
      const dest = path.join(projDir, ...parts, `${baseName}.${lang}.md`);
      if (fs.existsSync(dest)) continue;

      if (lang !== 'tr') {
        const trPath = path.join(projDir, ...parts, `${baseName}.tr.md`);
        const trContent = readIf(trPath);
        if (trContent) {
          writeMd(dest, translationBanner(lang) + trContent);
          created++;
          continue;
        }
      }

      writeMd(dest, placeholder(title, model));
      created++;
    }
  }

  console.log(`${model}: ${created} yeni md (mevcutlar korundu)`);
}

console.log('\nModel sablonlari: projects/' + MODEL_IDS.join(', projects/'));
