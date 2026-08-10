/*
 * Yeni proje iskeleti olusturur (saniyeler icinde).
 * Kullanim:
 *   node scripts/new-project.js "1730000-XYZ-KNV 40" knv tr,en,de
 *
 * Yalnizca makineye ozel bolumler (content/_models/<model>) projeye kopyalanir;
 * icerik modelin mevcut .tr.md'sinden alinir. Ortak bolumler mirasla gelir.
 * Projeye ozel farkli bir metin gerekiyorsa dosyayi duzenlemen yeterli.
 */
const path = require('path');
const { createProject } = require(path.join(__dirname, 'project-core'));

const [, , adRaw, modelRaw, dillerRaw] = process.argv;
if (!adRaw || !modelRaw) {
  console.error('Kullanim: node scripts/new-project.js "<proje adi>" <model> [diller]');
  console.error('Orn:     node scripts/new-project.js "1730000-XYZ-KNV 40" knv tr,en');
  process.exit(1);
}

const r = createProject(path.resolve(__dirname, '..'), adRaw, modelRaw, dillerRaw);
if (!r.ok) {
  console.error('HATA:', r.error);
  process.exit(1);
}

console.log('Olusturuldu ->', 'projects/' + r.slug + '/project.yaml');
console.log(`Model: ${r.model} | Diller: ${r.diller.join(', ')}`);
console.log(`Kopyalanan makineye ozel dosya: ${r.files.length}`);
r.files.forEach(f => console.log('  + ' + f));
