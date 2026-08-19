/*
 * templates/ altinda bos proje iskeleti (01-14, DATA, project.yaml, assets).
 * Kullanim: node scripts/scaffold-templates-project.js
 */
const fs = require('fs');
const path = require('path');
const yaml = require(path.join(__dirname, '..', 'codes', 'node_modules', 'js-yaml'));

const ROOT = path.resolve(__dirname, '..');
const TEMPLATES = path.join(ROOT, 'templates');
const BASE_YAML = path.join(TEMPLATES, 'base.yaml');
const REF_DATA = path.join(ROOT, 'projects', '1726050-ALPER-KNV-30', '1726050-ALPER-KNV 30 DATA');
const LANGS = ['tr', 'en', 'de'];

function collectFiles(items, dirParts, out) {
  for (const it of items || []) {
    const folder = dirParts.concat(String(it.id));
    if (it.dosya) out.push({ parts: folder, base: String(it.dosya) });
    collectFiles(it.alt_bolumler, folder, out);
  }
}

function writeEmpty(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '', 'utf8');
}

function buildEmptyData(refText) {
  const fieldRe = /^([^:#\[\-\n][^:]*?):\s*(.*)$/;
  const lines = refText.split(/\r?\n/);
  const out = [];

  out.push('# =============================================================================');
  out.push('# MAKİNE VERİ DOSYASI (SSOT) — ŞABLON');
  out.push('# =============================================================================');
  out.push('# Bu dosya kılavuz yazımının TEK kaynağıdır. Bölüm .md dosyaları buradan üretilir.');
  out.push('# Doldurma: \':\' sonrasına yaz. Bilinmiyorsa [EKSİK] bırak. Uydurma yapma.');
  out.push('# Son güncelleme:');
  out.push('# Hazırlayan:');
  out.push('# Onaylayan:');
  out.push('# =============================================================================');
  out.push('');

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('# =====') && i < 15) {
      while (i < lines.length && !lines[i].trim().startsWith('[PROJE]')) i++;
      continue;
    }

    if (line.trim() === '[PROJE]') {
      out.push('# =============================================================================');
      out.push('# 0 — MAKİNE VE ÜRETİCİ BİLGİLERİ');
      out.push('# =============================================================================');
      out.push('');
      out.push('[PROJE]');
      out.push('Makine ticari adı: ');
      out.push('Makine model kodu: ');
      out.push('Üretim yılı: ');
      out.push('İmalat / sevk tarihi: ');
      out.push('');
      out.push('[URETICI]');
      out.push('Üretici firma adı: ');
      out.push('Fabrika adresi: ');
      out.push('İlçe: ');
      out.push('Şehir: ');
      out.push('Ülke: ');
      out.push('Telefon: ');
      out.push('Fax: ');
      out.push('Web sitesi: ');
      out.push('E-posta: ');
      out.push('Yetkili servis / teknik destek: ');
      out.push('');
      out.push('[MODEL_VARYANTLARI]');
      out.push('# Bu model ailesindeki tüm varyantlar');
      out.push('Varyant 1: ');
      out.push('');
      i++;
      while (i < lines.length && lines[i].trim() !== '[GIRIS_GENEL]') i++;
      continue;
    }

    const blockMatch = line.trim().match(/^\[([A-Z_ÇĞİÖŞÜ]+)\]$/);
    if (blockMatch) {
      const block = blockMatch[1];
      if (block === 'URETICI' || block === 'MODEL_VARYANTLARI') {
        i++;
        while (i < lines.length && !lines[i].trim().startsWith('[')) i++;
        continue;
      }

      out.push(line);
      i++;

      while (i < lines.length) {
        const nxt = lines[i];
        if (nxt.trim().match(/^\[[A-Z_ÇĞİÖŞÜ]+\]$/)) break;
        if (nxt.startsWith('# ===') && nxt.includes('—')) break;

        if (nxt.trim().startsWith('# ---') || (nxt.trim().startsWith('#') && !fieldRe.test(nxt))) {
          out.push(nxt.replace(/1726050-ALPER-KNV 30/gi, '').replace(/ALPER/gi, '').trimEnd());
        } else if (fieldRe.test(nxt)) {
          out.push(nxt.replace(fieldRe, (_, k) => `${k.trim()}: `));
        } else if (nxt.trim().startsWith('X:')) {
          out.push('X: | | | | | ');
        } else if (nxt.trim().startsWith('|') && nxt.includes('---')) {
          out.push(nxt);
        } else if (nxt.trim().startsWith('- Error-')) {
          out.push('- Error-: ');
        } else if (nxt.trim().startsWith('Motor ') || nxt.trim().startsWith('Adım ') || nxt.trim().startsWith('Arıza ')) {
          out.push(nxt.replace(fieldRe, (_, k) => `${k.trim()}: `));
        } else if (nxt.trim().startsWith('## ')) {
          out.push(nxt);
        } else if (!nxt.trim()) {
          if (out[out.length - 1] !== '') out.push('');
        }
        i++;
      }
      if (out[out.length - 1] !== '') out.push('');
      continue;
    }

    if (line.startsWith('# ===') || line.startsWith('# ---')) {
      out.push(line.replace(/1726050-ALPER-KNV 30/gi, '').replace(/ALPER/gi, ''));
    } else if (line.trim().startsWith('#')) {
      out.push(line);
    } else if (fieldRe.test(line)) {
      out.push(line.replace(fieldRe, (_, k) => `${k.trim()}: `));
    }
    i++;
  }

  out.push('# =============================================================================');
  out.push('# SON — DOSYA SONU');
  out.push('# =============================================================================');
  return out.join('\n').replace(/\n{3,}/g, '\n\n') + '\n';
}

function main() {
  if (!fs.existsSync(BASE_YAML)) {
    console.error('templates/base.yaml bulunamadi');
    process.exit(1);
  }

  const base = yaml.load(fs.readFileSync(BASE_YAML, 'utf8'));
  const files = [];
  collectFiles(base.bolumler, [], files);

  const assetsDir = path.join(TEMPLATES, 'assets');
  fs.mkdirSync(assetsDir, { recursive: true });
  const gitkeep = path.join(assetsDir, '.gitkeep');
  if (!fs.existsSync(gitkeep)) fs.writeFileSync(gitkeep, '', 'utf8');

  let mdCreated = 0;
  for (const { parts, base: baseName } of files) {
    for (const lang of LANGS) {
      const dest = path.join(TEMPLATES, ...parts, `${baseName}.${lang}.md`);
      if (!fs.existsSync(dest)) {
        writeEmpty(dest);
        mdCreated++;
      }
    }
  }

  const yamlPath = path.join(TEMPLATES, 'project.yaml');
  if (!fs.existsSync(yamlPath)) {
    const doc = {
      proje_adi: '',
      model: '',
      sablon: true,
      tip: 'sablon',
      diller: LANGS,
      varsayilan_dil: 'tr',
      extends: 'templates/base.yaml',
      kapak: { rev: '', tarih: '', firma: 'DOLFIN' }
    };
    fs.writeFileSync(
      yamlPath,
      '# Genel proje sablonu — yeni proje olustururken bu klasor kopyalanir.\n\n' +
      yaml.dump(doc, { lineWidth: -1 }),
      'utf8'
    );
    console.log('yaml -> templates/project.yaml');
  }

  const dataPath = path.join(TEMPLATES, 'DATA');
  if (!fs.existsSync(dataPath)) {
    if (!fs.existsSync(REF_DATA)) {
      console.error('Referans DATA bulunamadi:', REF_DATA);
      process.exit(1);
    }
    fs.writeFileSync(dataPath, buildEmptyData(fs.readFileSync(REF_DATA, 'utf8')), 'utf8');
    console.log('DATA -> templates/DATA');
  }

  console.log(`md: ${mdCreated} yeni bos dosya (${files.length} bolum x ${LANGS.length} dil)`);
  console.log(`Toplam bolum dosyasi: ${files.length}`);
  console.log('Sablon hazir: templates/');
}

main();
