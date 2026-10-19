const test = require('node:test');
const assert = require('node:assert');
const { parseData } = require('../../data-file');

const SAMPLE = `# ====
# MAKİNE VERİ DOSYASI
# ====

[ELEKTRIK]
Besleme gerilimi (V): 400
Ana şalter tipi / In (A): 3P / 63 A
Ana şalter marka:

[MOTOR_SURUCU_LISTESI]
# Her satır: Ad | Güç (kW) | Devir (rpm) | Marka | Model
Konveyör Redüktörü motoru: 0,75 | 1400 | SEW | R37
`;

test('bloklar, anahtarlar ve satır numaraları okunur', () => {
  const d = parseData(SAMPLE);
  assert.deepStrictEqual(d.order, ['ELEKTRIK', 'MOTOR_SURUCU_LISTESI']);
  const e = d.blocks.ELEKTRIK.entries;
  assert.strictEqual(e[0].key, 'Besleme gerilimi (V)');
  assert.strictEqual(e[0].value, '400');
  assert.strictEqual(e[0].line, 6);
  assert.strictEqual(e[1].key, 'Ana şalter tipi / In (A)', 'anahtar ilk ":" işaretine kadar');
  assert.strictEqual(e[1].value, '3P / 63 A');
  assert.strictEqual(e[2].value, '', 'boş değer');
});

test('"|" değerleri sütunlara, "# Her satır" yorumu başlıklara ayrılır', () => {
  const b = parseData(SAMPLE).blocks.MOTOR_SURUCU_LISTESI;
  assert.deepStrictEqual(b.columns, ['Ad', 'Güç (kW)', 'Devir (rpm)', 'Marka', 'Model']);
  assert.deepStrictEqual(b.entries[0].cells, ['0,75', '1400', 'SEW', 'R37']);
});
