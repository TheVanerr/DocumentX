const test = require('node:test');
const assert = require('node:assert');
const yaml = require('js-yaml');
const { applyPatch, setTopLevelKey } = require('../../yaml-edit');

const SAMPLE = `# Proje recetesi — icerik yalnizca bu klasorden okunur.

proje_adi: 1730000-XYZ-KNV 40
model: knv
diller:
  - tr
  - en
# kapak bilgileri
kapak:
  rev: ''
  tarih: 2026-10-01
  firma: DOLFIN
  baslik: KNV 40   # yorum
bolumler:
- id: 01-introduction
  dosya: introduction
`;

test('kapak alanı güncellenir, diğer bloklar ve yorumlar korunur', () => {
  const out = applyPatch(SAMPLE, { kapak: { rev: '02', firma: 'OBG' } });
  const doc = yaml.load(out);
  assert.strictEqual(doc.kapak.rev, '02');
  assert.strictEqual(doc.kapak.firma, 'OBG');
  assert.strictEqual(doc.kapak.baslik, 'KNV 40');
  assert.strictEqual(doc.kapak.tarih, '2026-10-01', 'tırnaksız tarih metin olarak geri yazılmalı');
  assert.deepStrictEqual(doc.diller, ['tr', 'en']);
  assert.strictEqual(doc.bolumler[0].id, '01-introduction');
  assert.ok(out.startsWith('# Proje recetesi'), 'dosya başı yorumu korunmalı');
  assert.ok(out.includes('# kapak bilgileri'), 'blok önündeki yorum korunmalı');
  assert.ok(out.includes('bolumler:\n- id: 01-introduction'), 'sütun 0 liste bloğu dokunulmadan kalmalı');
});

test('"01" gibi revizyonlar sayıya dönüşmez', () => {
  const out = applyPatch(SAMPLE, { kapak: { rev: '01' } });
  assert.strictEqual(yaml.load(out).kapak.rev, '01');
});

test('null alan silinir, eksik blok dosya sonuna eklenir', () => {
  const out = applyPatch(SAMPLE, { kapak: { baslik: null }, cikti: { sekil_numara: true } });
  const doc = yaml.load(out);
  assert.ok(!('baslik' in doc.kapak));
  assert.strictEqual(doc.cikti.sekil_numara, true);
  assert.ok(out.endsWith('\n'));
});

test('liste bloğu (revizyonlar) yazılır ve null ile silinir', () => {
  const withRev = applyPatch(SAMPLE, {
    revizyonlar: [{ rev: '00', tarih: '2026-10-19', aciklama: { tr: 'İlk yayın' } }]
  });
  assert.strictEqual(yaml.load(withRev).revizyonlar[0].aciklama.tr, 'İlk yayın');
  const removed = applyPatch(withRev, { revizyonlar: null });
  assert.ok(!('revizyonlar' in yaml.load(removed)));
  assert.strictEqual(yaml.load(removed).kapak.firma, 'DOLFIN');
});

test('CRLF satır sonları korunur', () => {
  const crlf = SAMPLE.replace(/\n/g, '\r\n');
  const out = setTopLevelKey(crlf, 'kapak', { rev: '03' });
  assert.ok(!/[^\r]\n/.test(out), 'yalnız LF satır sonu kalmamalı');
  assert.strictEqual(yaml.load(out).kapak.rev, '03');
});

test('değişiklik yoksa metin aynı kalır', () => {
  const once = applyPatch(SAMPLE, { kapak: { rev: '05' } });
  const twice = applyPatch(once, { kapak: { rev: '05' } });
  assert.strictEqual(once, twice);
});
