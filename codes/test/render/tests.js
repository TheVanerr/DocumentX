/* Render testleri — kurgusal kılavuz içeriğiyle (projects/ okunmaz).
   Sonuçlar konsola "[test] …" satırları olarak yazılır; runner.js toplar. */

let passed = 0;
let failed = 0;

function check(name, cond, info) {
  if (cond) passed++; else failed++;
  console.log('[test] ' + (cond ? '✔ ' : '✖ ') + name + (!cond && info !== undefined ? ' — ' + info : ''));
}

function section(title) {
  console.log('[test] \n── ' + title);
}

const LOREM = 'Makinenin bakım işlemleri yalnızca eğitimli personel tarafından yapılır ve her işlemden önce tüm enerji kaynakları kesilir. ';
const long = (n) => LOREM.repeat(n);
const bigTable = (rows) => '| No | Parça | Adet |\n| :--- | :--- | ---: |\n' +
  Array.from({ length: rows }, (_, i) => `| ${i + 1} | Parça ${i + 1} | ${i % 7 + 1} |`).join('\n');
const bigList = (n) => Array.from({ length: n }, (_, i) => `${i + 1}. ${i % 3 ? 'Kısa adım.' : long(1)}`).join('\n');

const SCOPE_MD = [
  '# 1.1 Kapsam',                                                              // 1
  '',
  long(3),                                                                     // 3
  '',
  '**UYARI — Ezilme:** Hareketli parçalar ezilmeye neden olur. Müdahaleden önce LOTO uygulayın. Bkz. Bölüm 2.1',
  '',
  '**Not alınacak noktalar:** sıradan kalın etiket, uyarı değildir.',        // 7
  '',
  '**TEHLİKE — Elektrik çarpması:** 400 V AC. Panoyu açmadan önce ana şalteri kapatın.',
  '',
  '**NOT:** Bilgi notu.',                                                      // 11
  '',
  '## Prosedür',                                                               // 13
  '',
  '1. Ana şalteri kapatın.',                                                   // 15
  '2. Kilidi takın.',
  '   1. Asma kilidi takın.',
  '   2. Etiketi asın.',
  '3. Enerjisizliği doğrulayın.',                                              // 19
  '',
  '- madde A',
  '  - alt madde',
  '- madde B',
  '',
  'Tablo: Teknik değerler',                                                    // 25
  '| Parametre | Değer |',
  '| :--- | ---: |',
  '| Güç | 7,5 kW |',                                                         // 28
  '| Gerilim | 400 V |',
  '',
  '![Konveyör genel görünüş](../assets/logos/dolfin.png)',
  '',
  '![img_01](../../assets/1.2/foto_01_a.png)',
  '',
  'Bkz. Bölüm 9.9 bu kılavuzda yok. Değer [EKSİK] ve uygun bir yağ kullanılır.',
  '',
  '[güvensiz](javascript:alert(1)) ve [web](https://example.com)',
  '',
  '- **DİKKAT — Sıcak yüzey:** Eldiven kullanın.',
  '',
  '**WARNING — Hot:** yanlış dilde uyarı.',
  '',
  '### Yasak başlık',
  '',
  'Son paragraf.',
  '',
  '| İşaret | Anlam |',
  '| :--- | :--- |',
  '| :W001: :W012: :M001: :P001: :E003: | yerleşik piktogramlı |',
  '| :M009: :F001: :W099: | kod yazılı yedek |'
].join('\n');

const TREE = [
  {
    id: '01-introduction', file: 'fx/01.tr.md', content: '# 1. GİRİŞ\n\n' + long(6),
    children: [{ id: '1.1-scope', file: 'fx/1.1.tr.md', content: SCOPE_MD, children: [] }]
  },
  {
    id: '02-safety', file: 'fx/02.tr.md', content: '# 2. GÜVENLİK\n\n' + long(4),
    children: [
      {
        id: '2.1-loto', file: 'fx/2.1.tr.md',
        content: '# 2.1 LOTO\n\n' + long(10) + '\n\nTablo: Yedek parça listesi\n\n' + bigTable(120) +
          '\n\n' + long(8) + '\n\n' + bigList(40),
        children: []
      },
      {
        id: '2.2-end', file: 'fx/2.2.tr.md',
        content: '# 2.2 Son\n\n' + long(14) + '\n\n## Sayfa sonunda başlık\n\n' + long(30) + '\n\nSee Chapter 2.1 and 1.1 here.',
        children: []
      }
    ]
  }
];

function blocksOf(md) {
  return mdToBlocks(md, 'fx/1.1.tr.md');
}

async function testParser() {
  section('Markdown çözümleyici');
  const blocks = blocksOf(SCOPE_MD);
  const callouts = blocks.filter(b => b.classList.contains('md-callout'));
  check('3 uyarı kutusu (UYARI, TEHLİKE, NOT) + WARNING', callouts.length === 4, callouts.map(c => c.dataset.signal).join(','));
  check('UYARI → callout-warning, tehlike türü kalın', callouts[0] && callouts[0].classList.contains('callout-warning') &&
    callouts[0].querySelector('.callout-hazard').textContent === 'Ezilme:');
  check('TEHLİKE → callout-danger + üçgen simge', callouts[1] && callouts[1].classList.contains('callout-danger') &&
    !!callouts[1].querySelector('.callout-icon'));
  check('NOT → bantsız not kutusu', callouts[2] && callouts[2].classList.contains('callout-note') && !callouts[2].querySelector('.callout-head'));
  check('"**Not alınacak noktalar:**" uyarı sayılmaz', blocks.some(b => b.tagName === 'P' && b.textContent.startsWith('Not alınacak')));

  const ols = blocks.filter(b => b.tagName === 'OL');
  check('iç içe numaralı liste → 3 blok', ols.length === 3, ols.length);
  check('alt liste md-depth-1, 2 madde', ols[1] && ols[1].classList.contains('md-depth-1') && ols[1].children.length === 2);
  check('üst liste alt listeden sonra 3 ile devam eder', ols[2] && ols[2].start === 3, ols[2] && ols[2].start);
  const uls = blocks.filter(b => b.tagName === 'UL' && !b.querySelector('.li-signal'));
  check('iç içe madde işaretli liste → 3 blok', uls.length === 3, uls.length);

  const table = blocks.find(b => b.tagName === 'TABLE');
  check('---: sütunu sağa hizalı', table && table.tBodies[0].rows[0].cells[1].classList.contains('al-right'));
  check(':--- sütunu varsayılan (ortalı) kalır', table && table.tBodies[0].rows[0].cells[0].className === '');
  check('tablo satırı kaynak satırını taşır', table && table.tBodies[0].rows[0].dataset.line === '28', table && table.tBodies[0].rows[0].dataset.line);
  const cap = blocks.find(b => b.classList.contains('md-table-caption-src'));
  check('"Tablo: …" satırı başlık adayı', cap && cap.dataset.caption === 'Teknik değerler');

  const img = blocks.map(b => b.querySelector && b.querySelector('img')).find(i => i && /foto_01_a/.test(i.getAttribute('src')));
  check('dosya adındaki "_" vurguya dönüşmez', !!img && !img.closest('em'), img && img.getAttribute('src'));
  const all = document.createElement('div');
  blocks.forEach(b => all.appendChild(b.cloneNode(true)));
  check('javascript: bağlantısı üretilmez', !all.querySelector('a[href^="javascript"]'));
  check('https bağlantısı korunur', !!all.querySelector('a[href="https://example.com"]'));
  check('çapraz referans 2.1 ve 9.9 bağlandı', !!all.querySelector('a.xref[data-xref="2.1"]') && !!all.querySelector('a.xref[data-xref="9.9"]'));
  check('liste maddesinde uyarı etiketi', !!all.querySelector('li.li-signal .sig-pill.sig-caution'));

  const h2 = blocks.find(b => b.tagName === 'H2');
  check('başlık kaynak satırı (13)', h2 && h2.dataset.line === '13' && h2.dataset.src === 'fx/1.1.tr.md', h2 && h2.dataset.line);
  check('### başlık md seviyesi işaretli', blocks.some(b => b.dataset.mdLevel === '3'));

  const x = document.createElement('div');
  x.innerHTML = inline('See Chapter 2.4 and 9.1 for details');
  check('"See Chapter 2.4 and 9.1" → 2 bağlantı', x.querySelectorAll('a.xref').length === 2);
  x.innerHTML = inline('snake_case_word ve _vurgu_');
  check('kelime içi "_" vurgu değil, _vurgu_ vurgu', x.querySelectorAll('em').length === 1 && x.querySelector('em').textContent === 'vurgu');
  x.innerHTML = inline('![a "b" c](x.png)');
  check('alt metindeki tırnak kaçışlı', x.querySelector('img') && x.querySelector('img').alt === 'a "b" c');

  x.innerHTML = inline('Uyarı :W012: ve :M009: ile 12:30: saat');
  const syms = [...x.querySelectorAll('img.iso-sym')];
  check('ISO 7010 kısa kodları işarete dönüşür (12:30: dokunulmaz)', syms.length === 2 && x.textContent.includes('12:30:'), syms.length);
  check('W012 yerleşik, M009 yedek (kod yazılı)', syms[0].dataset.isoKind === 'builtin' && syms[1].dataset.isoKind === 'placeholder');
  check('işaret adı alt metinde', syms[0].alt === 'W012 — Elektrik tehlikesi', syms[0].alt);
  const lone = mdToBlocks(':M002:', 'f.md')[0];
  check('tek başına işaret şekil çerçevesine alınmaz', !lone.classList.contains('md-figure'));

  const comment = mdToBlocks('<!--\nçok\nsatırlı\n-->\n# Başlık', 'f.md');
  check('çok satırlı yorum satır sayısını korur', comment[0] && comment[0].dataset.line === '5', comment[0] && comment[0].dataset.line);
}

function contentPages(container) {
  return [...container.querySelectorAll('.a4-page:not(.cover-page)')];
}

async function testPdf() {
  section('PDF sayfalama ve belge');
  currentLang = 'tr';
  currentFirma = 'DOLFIN';
  currentModel = 'KNV 40';
  currentCoverName = 'KNV 40';
  currentRev = '02';
  currentDate = '2026-10-19';
  currentOutput = { sekil_numara: true, bolum_basligi: true, arka_kapak: true };
  currentRevisions = [{ rev: '00', tarih: '2026-10-01', aciklama: { tr: 'İlk yayın' } }, { rev: '02', tarih: '2026-10-19', aciklama: 'Bölüm 2 güncellendi' }];
  defaultPreparedBy = 'Test Kişi';
  viewMode = 'pdf';
  clearPaginationCache();

  const container = document.getElementById('pagesContainer');
  const t0 = performance.now();
  await renderPdfGuide('KNV 40', TREE, container);
  const t1 = performance.now();
  const pages = contentPages(container);
  window.__a4PageCount = pages.length;
  console.log(`[test]   ilk çizim: ${Math.round(t1 - t0)} ms, ${pages.length} numaralı sayfa`);

  const overflow = pages.filter(p => {
    const pc = p.querySelector('.page-content');
    return pc && pc.scrollHeight > pc.clientHeight + 1;
  }).map(p => p.dataset.pageNumber);
  check('hiçbir sayfada içerik taşmıyor', overflow.length === 0, 'taşan: ' + overflow.join(','));

  const orphan = pages.filter(p => {
    const pc = p.querySelector('.page-content');
    const last = pc && pc.lastElementChild;
    const next = p.nextElementSibling && p.nextElementSibling.querySelector('.page-content');
    return last && isHeadingEl(last) && next && !last.classList.contains('toc-title');
  }).map(p => p.dataset.pageNumber);
  check('sayfa sonunda yalnız kalan başlık yok', orphan.length === 0, orphan.join(','));

  const tables = [...container.querySelectorAll('.page-content table.md-table')];
  check('her tablo parçasında başlık satırı (thead)', tables.every(t => t.tHead && t.tHead.rows.length));
  const conts = container.querySelectorAll('caption.md-tblcaption--cont');
  check('bölünen numaralı tablo "(devam)" başlığı taşır', conts.length >= 1 && /\(devam\)$/.test(conts[0].textContent), conts.length);

  const bigOls = [...container.querySelectorAll('.page-content ol.md-list[data-src="fx/2.1.tr.md"]')];
  let expected = 1;
  let seqOk = bigOls.length > 1;
  for (const ol of bigOls) {
    if ((ol.start || 1) !== expected && !ol.querySelector(':scope > li.li-continued')) { seqOk = false; break; }
    expected = (ol.start || 1) + [...ol.children].filter(li => !li.classList.contains('li-continued')).length;
    if (ol.querySelector(':scope > li.li-continued')) expected = Math.max(expected, (ol.start || expected));
  }
  check('sayfalara bölünen 40 maddelik liste numarası kesintisiz', seqOk && expected >= 41, `parça=${bigOls.length}, son=${expected - 1}`);

  const entry21 = lastRender.entries.find(e => e.number === '2.1');
  const h21 = document.getElementById('toc-anchor-' + entry21.anchorId);
  const page21 = h21.closest('.a4-page').dataset.pageNumber;
  const tocRow = document.getElementById('toc-row-' + entry21.anchorId);
  check('içindekilerde 2.1 sayfa numarası doğru', tocRow.querySelector('.toc-page').textContent === page21,
    `${tocRow.querySelector('.toc-page').textContent} ≠ ${page21}`);
  const xp = container.querySelector(`a.xref[data-entry="${entry21.anchorId}"] .xref-page`);
  check('çapraz referans sayfa numarası doldu', xp && xp.textContent === ` (s. ${page21})`, xp && xp.textContent);
  check('kırık referans (9.9) işaretli', !!container.querySelector('a.xref-broken[data-xref="9.9"]'));
  const xa = container.querySelector(`a.xref[data-entry="${entry21.anchorId}"]`);
  check('PDF bağlantısı hedef sayfaya gider', xa && xa.getAttribute('href') === '#a4-page-' + page21, xa && xa.getAttribute('href'));

  const figcap = container.querySelector('.md-figcaption');
  check('şekil alt yazısı "Şekil 1-1: …"', figcap && figcap.textContent === 'Şekil 1-1: Konveyör genel görünüş', figcap && figcap.textContent);
  check('içindekilerde şekil ve tablo listesi', [...container.querySelectorAll('.toc-title')].map(t => t.textContent).join('|').includes('ŞEKİL LİSTESİ|TABLO LİSTESİ'));
  check('tablo başlığı "Tablo 1-1: Teknik değerler"', [...container.querySelectorAll('caption.md-tblcaption')].some(c => c.textContent === 'Tablo 1-1: Teknik değerler'));

  const first = pages[0];
  check('revizyon geçmişi 1. numaralı sayfada', first.dataset.pageNumber === '1' && first.querySelector('.rev-title'));
  check('kapakta hazırlayan (varsayılan ayar)', container.querySelector('.cover-page').textContent.includes('Hazırlayan : Test Kişi'));
  check('arka kapak son sayfa', container.lastElementChild.classList.contains('back-cover-page'));
  check('antette değişken bölüm başlığı', h21.closest('.a4-page').querySelector('.ph-chapter').textContent === '2. GÜVENLİK',
    h21.closest('.a4-page').querySelector('.ph-chapter') && h21.closest('.a4-page').querySelector('.ph-chapter').textContent);

  const snapshot = pages.map(p => p.querySelector('.page-content').innerHTML);
  const t2 = performance.now();
  await renderPdfGuide('KNV 40', TREE, container);
  const t3 = performance.now();
  const again = contentPages(container).map(p => p.querySelector('.page-content').innerHTML);
  console.log(`[test]   önbellekli çizim: ${Math.round(t3 - t2)} ms`);
  check('önbellekli çizim aynı sayfaları üretir', JSON.stringify(snapshot) === JSON.stringify(again));
  check('önbellekli çizim daha hızlı', t3 - t2 < t1 - t0, `${Math.round(t3 - t2)} / ${Math.round(t1 - t0)} ms`);

  // Büyük tablo performansı (doğrusal yerleştirme)
  clearPaginationCache();
  const big = mdToBlocks(bigTable(600), 'perf.md');
  const t4 = performance.now();
  const bigPages = computePages(prepareFigureBlocks(big));
  const t5 = performance.now();
  console.log(`[test]   600 satırlık tablo: ${Math.round(t5 - t4)} ms, ${bigPages.length} sayfa`);
  check('600 satırlık tablo 3 sn altında sayfalanır', t5 - t4 < 3000);
}

async function testGlossary() {
  section('Terim sözlüğü ve dizin');
  currentGlossary = [
    { tr: 'LOTO', en: 'LOTO', de: 'LOTO', yasak: {}, dizin: true },
    { tr: 'Ana şalter', en: 'Main switch', de: 'Hauptschalter', yasak: { tr: ['şebeke şalteri'] }, dizin: true },
    { tr: 'Enerji kaynakları', en: 'Energy sources', de: 'Energiequellen', yasak: { tr: ['güç kaynakları'] }, dizin: true },
    { tr: 'Hiç geçmeyen terim', en: '', de: '', yasak: {}, dizin: true }
  ];
  check('çekim eki kabul edilir ("ana şalteri")', findTerm('Ana şalteri kapatın.', 'Ana şalter').length === 1);
  check('kelime ortası eşleşmez ("BLOTO")', findTerm('BLOTO', 'LOTO').length === 0);
  check('sayfa aralığı sıkıştırma', compressPages([9, 3, 4, 5, 12, 13]) === '3–5, 9, 12, 13', compressPages([9, 3, 4, 5, 12, 13]));

  viewMode = 'pdf';
  currentOutput = { sekil_numara: true, bolum_basligi: true, arka_kapak: true, dizin: true };
  const container = document.getElementById('pagesContainer');
  await renderPdfGuide('KNV 40', TREE, container);
  const idxTitle = document.getElementById('dx-index');
  check('dizin sayfası basıldı', !!idxTitle);
  const rows = [...container.querySelectorAll('.idx-row')].map(r => r.textContent);
  check('dizinde yalnızca geçen terimler', rows.length === 3 && !rows.some(r => r.includes('Hiç geçmeyen')), rows.join(' | '));
  check('dizin alfabetik (TR)', /^Ana şalter/.test(rows[0]) && /^LOTO/.test(rows[2]), rows.join(' | '));
  const lotoRow = [...container.querySelectorAll('.idx-row')].find(r => r.textContent.startsWith('LOTO'));
  const lotoPages = lotoRow.querySelector('.idx-pages').textContent;
  const realPages = [...container.querySelectorAll('.a4-page')].filter(p => !p.querySelector('#dx-index') &&
    !p.querySelector('.toc-title') && /LOTO/.test(p.querySelector('.page-content')?.textContent || '')).map(p => p.dataset.pageNumber);
  check('dizin sayfa numaraları doğru (LOTO)', compressPages(realPages.map(Number)) === lotoPages, `${lotoPages} ≠ ${realPages}`);
  const tocIdx = [...container.querySelectorAll('.toc-row')].find(r => r.textContent.includes('DİZİN'));
  const idxPage = idxTitle.closest('.a4-page').dataset.pageNumber;
  check('içindekilerde DİZİN satırı doğru sayfa', tocIdx && tocIdx.querySelector('.toc-page').textContent === idxPage,
    tocIdx && tocIdx.querySelector('.toc-page').textContent + ' ≠ ' + idxPage);
  check('arka kapak dizinden sonra', container.lastElementChild.classList.contains('back-cover-page'));

  const root = document.getElementById('scratch');
  root.innerHTML = '<p class="md-p">Şebeke şalterini kapatın ve güç kaynaklarını ayırın.</p>';
  const v = glossaryViolations([root], 'tr').map(x => x.detail);
  check('yasaklı eş anlamlılar bulundu', v.length === 2 && v[0].includes('Ana şalter'), v.join(' | '));
  root.innerHTML = '';

  viewMode = 'html';
  await renderHtmlGuide('KNV 40', TREE, container);
  const hrow = [...container.querySelectorAll('.idx-row')].find(r => r.textContent.startsWith('LOTO'));
  check('HTML dizini bölüm numarasına bağlanır', hrow && hrow.querySelector('a[data-goto^="#toc-anchor-"]'));
  viewMode = 'pdf';
}

async function testQc() {
  section('Kalite kontrol');
  currentGuideId = 'proje:test';
  await runQc();
  const by = (t) => qcIssues.filter(i => i.type === t).length;
  check('[EKSİK] bulundu', by('eksik') === 1, by('eksik'));
  check('yüklenemeyen görsel bulundu', by('img') === 1, by('img'));
  check('kırık çapraz referans bulundu', by('xref') === 1, by('xref'));
  check('### başlık bulundu', by('heading') >= 1, by('heading'));
  check('TR belgede WARNING bulundu', by('signal') === 1, by('signal'));
  check('ölçülemeyen ifade ("uygun") bulundu', by('vague') >= 1, by('vague'));
  const eksik = qcIssues.find(i => i.type === 'eksik');
  check('bulgu kaynak dosya + satır taşır', eksik && eksik.src === 'fx/1.1.tr.md' && eksik.line === '35', eksik && `${eksik.src}:${eksik.line}`);

  const a = mdSignature(SCOPE_MD);
  const b = mdSignature(SCOPE_MD.replace('| Gerilim | 400 V |\n', '').replace('**TEHLİKE', 'TEHLİKE'));
  check('dil eşleşmesi imzası farkı yakalar', a.warning !== b.warning && a.table === b.table, JSON.stringify([a, b]));
}

async function testChanges() {
  section('Değişiklik çubukları');
  viewMode = 'pdf';
  // 1.1: satır 5 (UYARI kutusu), 16 (liste maddesi 2), 28 (tablo satırı "Güç")
  currentChanges = new Map([['fx/1.1.tr.md', new Set([5, 16, 28])]]);
  const container = document.getElementById('pagesContainer');
  await renderPdfGuide('KNV 40', TREE, container);
  const changed = [...container.querySelectorAll('.dx-changed')];
  check('uyarı kutusu işaretli', changed.some(el => el.classList.contains('md-callout') && el.dataset.signal === 'UYARI'));
  check('yalnızca değişen liste maddesi işaretli', changed.some(el => el.tagName === 'LI' && /Kilidi takın/.test(el.textContent)) &&
    !changed.some(el => el.tagName === 'LI' && /Ana şalteri/.test(el.textContent)));
  check('yalnızca değişen tablo satırı işaretli', changed.some(el => el.tagName === 'TR' && /Güç/.test(el.textContent)) &&
    !changed.some(el => el.tagName === 'TR' && /Gerilim/.test(el.textContent)));
  check('değişmeyen paragraf işaretsiz', !changed.some(el => el.tagName === 'P'));
  const bar = changed.find(el => el.classList.contains('md-callout'));
  const page = bar.closest('.page-content');
  check('çubuk görünür (sayfa içeriği kesmiyor)', getComputedStyle(page).overflow === 'visible');
  check('revizyon açıklaması önerisi', suggestRevisionText(currentChanges, 'tr') === 'Bölüm 1.1 güncellendi.',
    suggestRevisionText(currentChanges, 'tr'));
  check('EN öneri', suggestRevisionText(currentChanges, 'en') === 'Section 1.1 updated.');
}

async function testMarks() {
  section('Görsel işaretleri');
  currentMarks = { 'assets/logos/dolfin.png': [{ x: 0.5, y: 0.5, n: '1' }, { x: 0.02, y: 0.5, n: '2' }] };
  const container = document.getElementById('pagesContainer');
  viewMode = 'pdf';
  await renderPdfGuide('KNV 40', TREE, container);
  placeImageMarks(container);
  const marks = [...container.querySelectorAll('.img-mark')];
  const m1 = marks.find(m => m.textContent === '1');
  check('işaret görsel hücresine yerleşti', !!m1 && m1.closest('.md-figure-cell.has-marks'));
  check('merkez işaret hücre ortasında (cover kırpma hesabı)',
    m1 && Math.abs(parseFloat(m1.style.left) - 50) < 1 && Math.abs(parseFloat(m1.style.top) - 50) < 1,
    m1 && `${m1.style.left} ${m1.style.top}`);
  check('kırpılan alandaki işaret gizlenir', !marks.some(m => m.textContent === '2'),
    marks.map(m => m.textContent + '@' + m.style.left).join(' '));
  check('işaret anahtarı ../ öneklerini atar', markKey('../../projects/X/assets/a%20b.png') === 'projects/X/assets/a b.png');
}

async function testPaper() {
  section('Sayfa boyutu');
  const container = document.getElementById('pagesContainer');
  viewMode = 'pdf';
  currentOutput = { ...currentOutput, sayfa: 'A5' };
  applyPaperSize();
  clearPaginationCache();
  await renderPdfGuide('KNV 40', TREE, container);
  const pages = contentPages(container);
  check('A5: sayfa 559×794 px', pages[0].offsetWidth === 559 && pages[0].offsetHeight === 794,
    `${pages[0].offsetWidth}×${pages[0].offsetHeight}`);
  const over = pages.filter(p => { const pc = p.querySelector('.page-content'); return pc.scrollHeight > pc.clientHeight + 1; });
  check('A5: hiçbir sayfada taşma yok', over.length === 0, over.map(p => p.dataset.pageNumber).join(','));
  const cover = container.querySelector('.cover-page');
  check('A5: kapak sayfaya sığar (≤ 559×794)', cover.getBoundingClientRect().width <= 559.5 && cover.getBoundingClientRect().height <= 794,
    `${cover.getBoundingClientRect().width.toFixed(1)}×${cover.getBoundingClientRect().height.toFixed(1)}`);
  check('A5: @page kuralı', document.getElementById('dx-page-size').textContent.includes('size: A5'));
  const a4Count = window.__a4PageCount || 0;
  check('A5 daha çok sayfa üretir', pages.length > a4Count, `${pages.length} / A4 ${a4Count}`);

  currentOutput = { ...currentOutput, sayfa: 'Letter' };
  applyPaperSize();
  await renderPdfGuide('KNV 40', TREE, container);
  const lp = contentPages(container)[0];
  check('Letter: sayfa 816×1056 px', lp.offsetWidth === 816 && lp.offsetHeight === 1056, `${lp.offsetWidth}×${lp.offsetHeight}`);

  currentOutput = { ...currentOutput, sayfa: 'A4' };
  applyPaperSize();
}

async function testHtmlAndDocx() {
  section('HTML görünümü ve Word');
  viewMode = 'html';
  document.body.classList.replace('view-pdf', 'view-html');
  const container = document.getElementById('pagesContainer');
  await renderHtmlGuide('KNV 40', TREE, container);
  check('HTML: içindekiler satırları', container.querySelectorAll('.toc-row.toc-html').length >= 6);
  check('HTML: çapraz referansta sayfa numarası yok', !container.querySelector('.xref-page'));
  check('HTML: revizyon bölümü ve arka kapak', !!container.querySelector('.html-rev-section') && !!container.querySelector('.html-back-section'));
  check('HTML: kapak yüksekliği 1123px (geri yüklenen CSS kuralı)',
    Math.round(container.querySelector('.html-cover-section').getBoundingClientRect().height) === 1123,
    container.querySelector('.html-cover-section').getBoundingClientRect().height);

  const html = buildDocxHtml();
  window.__docxHtml = html;
  check('DOCX: uyarı kutuları tabloya dönüştü', (html.match(/⚠ UYARI/g) || []).length === 1 && html.includes('#C8102E'));
  check('DOCX: sınıf/data öznitelikleri temizlendi', !/\sclass="(?!page-break)/.test(html) && !/data-/.test(html));
  check('DOCX: başlık hiyerarşisi h1/h2', /<h1>1\. GİRİŞ<\/h1>/.test(html) && /<h2>1\.1 Kapsam<\/h2>/.test(html));

  // Son durum: PDF görünümü (shots modunda yazdırılır; ?paper=A5 ile kâğıt seçilebilir)
  viewMode = 'pdf';
  currentOutput = { ...currentOutput, sayfa: new URLSearchParams(location.search).get('paper') || 'A4' };
  applyPaperSize();
  document.body.classList.replace('view-html', 'view-pdf');
  await renderPdfGuide('KNV 40', TREE, container);
}

const FX_DATA = {
  file: 'fx/DEMO DATA',
  order: ['ELEKTRIK', 'MOTOR_SURUCU_LISTESI'],
  blocks: {
    ELEKTRIK: {
      name: 'ELEKTRIK', line: 1, columns: null, entries: [
        { key: 'Besleme gerilimi (V)', value: '400', cells: null, line: 2 },
        { key: 'Besleme frekansı (Hz)', value: '50', cells: null, line: 3 },
        { key: 'Toplam kurulu güç (kW)', value: '30', cells: null, line: 4 },
        { key: 'Toplam kurulu güç — ısıtma dahil (kW)', value: '45', cells: null, line: 5 },
        { key: 'Ana şalter marka', value: '', cells: null, line: 6 }
      ]
    },
    MOTOR_SURUCU_LISTESI: {
      name: 'MOTOR_SURUCU_LISTESI', line: 8, columns: ['Ad', 'Güç (kW)', 'Devir (rpm)', 'Marka', 'Model'], entries: [
        { key: 'Konveyör Redüktörü motoru', value: '0,75 | 1400 | SEW | R37', cells: ['0,75', '1400', 'SEW', 'R37'], line: 10 },
        { key: 'Yıkama Pompası Motoru', value: '', cells: null, line: 11 }
      ]
    }
  }
};

async function testData() {
  section('DATA (SSOT)');
  currentData = FX_DATA;
  currentLang = 'tr';
  const md = [
    '# 3.3 Teknik değerler',
    '',
    'Makine {{ELEKTRIK:besleme  gerilimi (v)}} V ile beslenir; motor gücü {{MOTOR_SURUCU_LISTESI:Konveyör Redüktörü motoru#1}} kW.',
    '',
    'Ana şalter: {{ELEKTRIK:Ana şalter marka}}. Bilinmeyen: {{ELEKTRIK:Yok böyle}}.',
    '',
    '{{TABLO:MOTOR_SURUCU_LISTESI}}',
    '',
    '{{TABLO:ELEKTRIK|Besleme gerilimi (V), Besleme frekansı (Hz)}}',
    '',
    '| Parametre | Değer |',
    '| :--- | :--- |',
    '| Besleme gerilimi | 380 V |',
    '| Toplam kurulu güç — ısıtma dahil | 45 kW |',
    '',
    'Besleme frekansı 60 Hz olmalıdır. Toplam kurulu güç — ısıtma dahil 45 kW.'
  ].join('\n');
  const blocks = mdToBlocks(md, 'fx/3.3.tr.md');
  const p = blocks[1];
  const vals = [...p.querySelectorAll('.data-val')].map(s => s.textContent);
  check('satır içi değer (anahtar büyük/küçük harf + boşluk duyarsız)', vals[0] === '400', vals.join('|'));
  check('#1 sütun seçimi (0,75)', vals[1] === '0,75', vals[1]);
  const p2 = blocks[2];
  check('boş değer → [EKSİK]', p2.querySelector('.data-val').textContent === '[EKSİK]');
  check('bilinmeyen anahtar işaretli', !!p2.querySelector('.data-missing'));
  const t1 = blocks[3];
  check('TABLO: başlıklar "# Her satır" yorumundan', t1.tagName === 'TABLE' && t1.tHead.textContent.includes('Devir (rpm)'));
  check('TABLO: satır = anahtar + sütunlar, boş → [EKSİK]',
    t1.tBodies[0].rows[0].cells.length === 5 && t1.tBodies[0].rows[1].cells[1].textContent === '[EKSİK]');
  check('TABLO: satır DATA satırını taşır (Alt+tık)', t1.tBodies[0].rows[0].dataset.dline === '10');
  const t2 = blocks[4];
  check('TABLO|seçili anahtarlar → 2 satır', t2.tBodies[0].rows.length === 2 && t2.tHead.textContent.includes('Parametre'));

  const root = document.getElementById('scratch');
  root.innerHTML = '';
  root.className = 'page-content';
  blocks.forEach(b => root.appendChild(b));
  const conflicts = dataConflicts([root]).map(c => c.detail);
  check('çelişki: tabloda 380 V ≠ DATA 400', conflicts.some(d => /Besleme gerilimi.*380/.test(d)), conflicts.join(' | '));
  check('çelişki: metinde 60 Hz ≠ DATA 50', conflicts.some(d => /frekans.*60/.test(d)), conflicts.join(' | '));
  check('uzun etiket doğru eşleşir (ısıtma dahil 45 kW çelişki değil)', !conflicts.some(d => /Toplam kurulu güç \(kW\)/.test(d)), conflicts.join(' | '));
  check('DATA\'dan gelen değerler çelişki sayılmaz', conflicts.length === 2, conflicts.length);
  root.innerHTML = '';
  root.className = '';
  currentData = null;
}

(async () => {
  try {
    await testData();
    await testParser();
    await testPdf();
    await testGlossary();
    await testQc();
    await testChanges();
    await testMarks();
    await testPaper();
    await testHtmlAndDocx();
  } catch (e) {
    failed++;
    console.log('[test] ✖ beklenmeyen hata: ' + (e && e.stack || e));
  }
  console.log('[done] ' + JSON.stringify({ passed, failed }));
})();
