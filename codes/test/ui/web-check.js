/* Web kılavuzu (export-web çıktısı) davranış kontrolü.
   electron test/ui/web-check.js <dosya.html> */
const { app, BrowserWindow } = require('electron');
const path = require('path');

const file = path.resolve(process.argv.find(a => /\.html$/i.test(a)));
const wait = (ms) => new Promise(r => setTimeout(r, ms));
let failed = 0;
const check = (name, ok, info) => {
  if (!ok) failed++;
  console.log((ok ? '✔ ' : '✖ ') + name + (!ok && info !== undefined ? ' — ' + info : ''));
};

app.whenReady().then(async () => {
  const w = new BrowserWindow({ show: false, width: 1280, height: 900, webPreferences: { backgroundThrottling: false } });
  const errors = [];
  w.webContents.on('console-message', (e, ...l) => {
    const level = e && e.level != null ? e.level : l[0];
    if (level === 'error' || level === 3) errors.push(String((e && e.message) || l[1]));
  });
  await w.loadFile(file);
  await wait(800);
  const js = (c) => w.webContents.executeJavaScript(c);

  check('her dil ayrı bölüm', await js('document.querySelectorAll(".dxw-doc").length') === 2);
  check('varsayılan dil TR görünür', await js('!document.querySelector(\'.dxw-doc[data-lang="tr"]\').hidden'));
  check('bölüm menüsü dolu', await js('document.querySelectorAll("#dxwNav a").length') >= 4);
  check('etkin dilin görselleri yüklendi', await js(`(() => {
    const d = document.querySelector('.dxw-doc:not([hidden])');
    const imgs = [...d.querySelectorAll('img')];
    return imgs.length > 0 && !d.querySelector('[data-dx-img]') && imgs.every(i => i.complete && i.naturalWidth > 0);
  })()`));
  await js(`(() => { const s = document.getElementById('dxwSearch'); s.value = 'loto'; s.dispatchEvent(new Event('input')); })()`);
  await wait(400);
  check('arama sonuç sayısı', /\d+/.test(await js('document.getElementById("dxwCount").textContent')),
    await js('document.getElementById("dxwCount").textContent'));
  await js(`(() => { const s = document.getElementById('dxwLang'); s.value = 'en'; s.dispatchEvent(new Event('change')); })()`);
  await wait(300);
  check('dil değişimi EN', await js('!document.querySelector(\'.dxw-doc[data-lang="en"]\').hidden && document.documentElement.lang === "en"'));
  check('EN başlığı', /USER MANUAL/.test(await js('document.getElementById("dxwTitle").textContent')));
  check('görseller dillere bir kez gömülü', await js('Object.keys(window.DX_IMG).length') <= 4,
    await js('Object.keys(window.DX_IMG).length'));
  const shotIdx = process.argv.indexOf('--shot');
  if (shotIdx > 0) {
    await js(`(() => { const s = document.getElementById('dxwLang'); s.value = 'tr'; s.dispatchEvent(new Event('change')); window.scrollTo(0, 1500); })()`);
    await wait(500);
    require('fs').writeFileSync(process.argv[shotIdx + 1], (await w.webContents.capturePage()).toPNG());
  }
  check('konsolda hata yok', errors.length === 0, errors.join(' | '));
  app.exit(failed ? 1 : 0);
});
