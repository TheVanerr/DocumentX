/* Arayüz duman testi — uygulamayı (main.js) test/fixtures/projects ile açar,
   panelleri ve görünümleri sırayla dener, ekran görüntüsü alır, konsol
   hatalarını raporlar. projects/ klasörüne dokunmaz.
   electron test/ui/runner.js [--shots <klasör>] */
const path = require('path');
const fs = require('fs');

process.env.DOCUMENTX_PROJECTS = path.join(__dirname, '..', 'fixtures', 'projects');
const { app } = require('electron');
// Testin oturum hafızası ve ayarları gerçek uygulamanınkinden ayrı tutulur.
app.setPath('userData', path.join(require('os').tmpdir(), 'documentx-ui-test'));

const shotsIdx = process.argv.indexOf('--shots');
const shotsDir = shotsIdx > 0 ? path.resolve(process.argv[shotsIdx + 1] || path.join(__dirname, 'out')) : null;
const wait = (ms) => new Promise(r => setTimeout(r, ms));

let failed = 0;
function check(name, cond, info) {
  if (!cond) failed++;
  console.log((cond ? '✔ ' : '✖ ') + name + (!cond && info !== undefined ? ' — ' + info : ''));
}

app.on('browser-window-created', (_e, win) => {
  const errors = [];
  win.webContents.on('console-message', (ev, ...legacy) => {
    const level = ev && ev.level != null ? ev.level : legacy[0];
    const msg = String((ev && ev.message) || legacy[1] || '');
    if (level === 'error' || level === 3) errors.push(msg);
  });
  win.webContents.on('preload-error', (_ev, p, err) => errors.push('preload: ' + err.message));

  win.webContents.once('did-finish-load', async () => {
    const js = (code) => win.webContents.executeJavaScript(code);
    const shot = async (name) => {
      if (!shotsDir) return;
      fs.mkdirSync(shotsDir, { recursive: true });
      const img = await win.webContents.capturePage();
      fs.writeFileSync(path.join(shotsDir, name), img.toPNG());
    };

    try {
      win.setSize(1600, 1000);
      await wait(2500);
      check('kılavuz seçildi ve çizildi', await js('currentGuideId === "proje:DEMO-KNV-40" && document.querySelectorAll(".a4-page").length > 2'));
      check('yaml kapak değerleri kutularda', await js('document.getElementById("revInput").value === "01" && document.getElementById("firmaSelect").value === "ENVA"'));
      check('firma seçici brands.js\'ten doldu', await js('document.querySelectorAll("#firmaSelect option").length === Object.keys(BRANDS).length'));
      await shot('ui-1-pdf.png');

      await js(`if (!document.body.classList.contains('sidebar-open')) toggleSidebar();
                if (!document.body.classList.contains('qc-open')) toggleQcPanel();`);
      await wait(1200);
      check('kenar çubuğunda bölüm ağacı', await js('document.querySelectorAll("#sidebarBody .sb-row").length >= 4'));
      check('kalite kontrolde [EKSİK] bulgusu', await js('qcIssues.some(i => i.type === "eksik")'));
      await js('runParityCheck()');
      await wait(800);
      check('dil eşleşmesi EN tablo eksiğini buldu', await js('qcParity.some(i => /Tablo TR 1 \\/ EN 0/.test(i.detail))'),
        await js('JSON.stringify(qcParity.map(i => i.detail))'));
      await shot('ui-2-panels.png');

      await js('setSidebarTab("pages")');
      await wait(1200);
      check('sayfa küçük resimleri oluştu', await js('document.querySelectorAll("#sidebarBody .sb-thumb-page").length > 0'));
      await js('openSearch(); document.getElementById("searchInput").value = "şalter"; runSearch();');
      await wait(400);
      check('arama "şalter" eşleşti', await js('searchRanges.length >= 2'), await js('searchRanges.length'));
      await shot('ui-3-search-thumbs.png');
      await js('closeSearch(); setSidebarTab("outline")');

      await js('setViewMode("compare")');
      await wait(1200);
      check('karşılaştırma: TR ↔ EN satırları', await js('document.querySelectorAll(".compare-row").length === 4'));
      check('karşılaştırma: LOTO bölümünde fark işareti', await js('[...document.querySelectorAll(".compare-row.has-diff")].some(r => /2\\.1/.test(r.textContent))'));
      await shot('ui-4-compare.png');

      await js('setViewMode("html")');
      await wait(1200);
      check('HTML görünümü çizildi', await js('!!document.querySelector(".html-document .html-flow-content .md-callout")'));
      await shot('ui-5-html.png');
      await js('setViewMode("pdf")');
      await wait(1000);

      await js('setLanguage("en")');
      await wait(1200);
      check('EN: sinyal kelimesi WARNING', await js('!!document.querySelector(".md-callout[data-signal=\\"WARNING\\"]")'));
      check('EN: çapraz referans "(p. N)"', await js('/\\(p\\. \\d+\\)/.test(document.querySelector("a.xref .xref-page").textContent)'));
      await js('setLanguage("tr")');
      await wait(1000);
      check('dil değişince eski eşleşme sonucu "eşleşiyor" demez',
        await js('qcParityFor === "" && !document.querySelector("#qcBody .qc-item.ok")'));

      win.setSize(1400, 900);
      await wait(600);
      check('1400 px genişlikte navbar taşmıyor',
        await js('(() => { const n = document.querySelector(".navbar"); return n.scrollWidth <= n.clientWidth + 1; })()'),
        await js('document.querySelector(".navbar").scrollWidth + " / " + document.querySelector(".navbar").clientWidth'));
      await shot('ui-0-1400.png');

      await js('openDocSettings()');
      await wait(300);
      await shot('ui-6-settings.png');
      await js('closeDocSettings(); toggleExportMenu()');
      await wait(200);
      await shot('ui-7-export-menu.png');
      await js('closeExportMenu()');

      check('alt+tık kaynak bilgisi blokta', await js('!!document.querySelector("#pagesContainer [data-src][data-line]")'));

      // ── DATA, pano, ISO 20607, görsel raporu, düzenleyici ──
      check('DATA yer tutucusu değere dönüştü (400)', await js('[...document.querySelectorAll(".data-val")].some(e => e.textContent === "400")'));
      await js('setSidebarTab("data")');
      await wait(300);
      check('DATA sekmesi blokları listeler', await js('document.querySelectorAll("#sidebarBody .sb-data-block").length === 2'));
      check('DATA kullanım sayısı rozeti', await js('!!document.querySelector("#sidebarBody .sb-data-used")'));
      await js('setSidebarTab("outline")');

      await js('openDashboard()');
      await wait(1500);
      check('pano DEMO kılavuzunu listeler', await js('[...document.querySelectorAll(".dash-table td")].some(td => /DEMO KNV 40/.test(td.textContent))'));
      await shot('ui-8-dashboard.png');
      await js('closeDashboard()');

      await js('openIsoReport()');
      await wait(300);
      check('ISO 20607 raporu 30 konu', await js('document.querySelectorAll("#isoList .iso-row").length === 30'));
      await js('closeIsoReport()');

      await js('openAssetReport()');
      await wait(1200);
      check('görsel raporu açıldı', await js('document.querySelectorAll("#arBody .qc-group").length === 4'));
      await js('closeAssetReport()');

      const rel = 'codes/test/fixtures/projects/DEMO-KNV-40/02-safety/01-loto/loto.tr.md';
      const original = await js(`window.electronAPI.readFile(${JSON.stringify(rel)}).then(r => r.text)`);
      await js(`openEditor(${JSON.stringify(rel)}, 3)`);
      await wait(600);
      check('düzenleyici açıldı, önizleme dolu', await js('isEditorOpen() && document.querySelectorAll("#edPreview .md-callout").length === 1'));
      await js(`(() => { const t = document.getElementById('edText'); t.value += '\\n\\nDüzenleyiciden eklenen satır.\\n'; t.dispatchEvent(new Event('input')); })()`);
      await wait(600);
      check('canlı önizleme güncellendi', await js('/Düzenleyiciden eklenen/.test(document.getElementById("edPreview").textContent)'));
      await shot('ui-9-editor.png');
      await js('saveEditor()');
      await wait(1500);
      check('kaydedilen değişiklik kılavuzda', await js('/Düzenleyiciden eklenen/.test(document.getElementById("pagesContainer").textContent)'));
      await js('closeEditor(true)');
      await js(`window.electronAPI.writeFile(${JSON.stringify(rel)}, ${JSON.stringify(original)}, 0, true)`);
    } catch (e) {
      check('beklenmeyen hata', false, e.stack || e.message);
    }

    const real = errors.filter(m => !/Electron Security Warning|DevTools/.test(m));
    check('konsolda hata yok', real.length === 0, '\n  ' + real.join('\n  '));
    console.log(`\n${failed ? failed + ' kontrol kaldı' : 'Tüm arayüz kontrolleri geçti'}`);
    app.exit(failed ? 1 : 0);
  });
});

setTimeout(() => { console.error('Zaman aşımı'); app.exit(2); }, 120000).unref();
require('../../main.js');
