/* Render testleri — gizli Electron penceresinde harness.html'i çalıştırır.
   electron test/render/runner.js [--shots <klasör>]
   --shots: örnek kılavuzun PDF ve DOCX çıktısını klasöre yazar (görsel kontrol). */
const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

const shotsIdx = process.argv.indexOf('--shots');
const shotsDir = shotsIdx > 0
  ? path.resolve(process.argv[shotsIdx + 1] || path.join(__dirname, 'out'))
  : null;

/* main.js'teki gibi: göreli görselleri (codes/ tabanlı) data URI yap, bulunamayanı at. */
function inlineImages(html) {
  const codesDir = path.join(__dirname, '..', '..');
  return html.replace(/<img\b[^>]*\bsrc="([^"]+)"[^>]*>/gi, (tag, src) => {
    if (/^data:/i.test(src)) return tag;
    const abs = path.resolve(codesDir, decodeURIComponent(src));
    if (!fs.existsSync(abs)) return '';
    const ext = path.extname(abs).slice(1).toLowerCase();
    const mime = ext === 'svg' ? 'svg+xml' : (ext === 'jpg' ? 'jpeg' : ext);
    return tag.replace(src, `data:image/${mime};base64,${fs.readFileSync(abs).toString('base64')}`);
  });
}

app.whenReady().then(async () => {
  const win = new BrowserWindow({
    show: false,
    width: 1300,
    height: 1200,
    enableLargerThanScreen: true,
    paintWhenInitiallyHidden: true,
    webPreferences: { backgroundThrottling: false, contextIsolation: true, nodeIntegration: false }
  });

  const timer = setTimeout(() => {
    console.error('Zaman aşımı (180 sn)');
    app.exit(2);
  }, 180000);

  win.webContents.on('console-message', async (e, ...legacy) => {
    const msg = String((e && e.message) || legacy[1] || '');
    const level = e && e.level != null ? e.level : legacy[0];
    if (msg.startsWith('[test] ')) {
      console.log(msg.slice(7));
      return;
    }
    if ((level === 'error' || level === 3) && !msg.startsWith('[done]')) {
      console.log('  [konsol hatası] ' + msg);
    }
    if (!msg.startsWith('[done] ')) return;

    const result = JSON.parse(msg.slice(7));

    // PDF son işleme: Chromium çıktısı → meta veri + PDF/A eklentileri; yer imi ve etiket ağacı korunmalı
    try {
      const { postProcessPdf } = require('../../pdf-post');
      const raw = await win.webContents.printToPDF({
        printBackground: true, pageSize: 'A4', margins: { top: 0, bottom: 0, left: 0, right: 0 },
        preferCSSPageSize: true, generateDocumentOutline: true, generateTaggedPDF: true
      });
      const post = await postProcessPdf(raw, {
        title: 'KNV 40 KULLANIM KILAVUZU', author: 'Test Kişi', subject: 'Rev.02', keywords: ['KNV 40', 'TR'], lang: 'tr-TR'
      }, { pdfa: true });
      const { PDFDocument } = require('pdf-lib');
      const doc = await PDFDocument.load(post.buffer, { updateMetadata: false });
      const txt = post.buffer.toString('latin1');
      const pdfCheck = (name, ok, info) => {
        console.log((ok ? '✔ ' : '✖ ') + name + (!ok && info ? ' — ' + info : ''));
        if (ok) result.passed++; else result.failed++;
      };
      console.log('\n── PDF son işleme');
      pdfCheck('başlık / yazar meta verisi', doc.getTitle() === 'KNV 40 KULLANIM KILAVUZU' && doc.getAuthor() === 'Test Kişi',
        `${doc.getTitle()} / ${doc.getAuthor()}`);
      pdfCheck('yer imleri (/Outlines) korundu', /\/Outlines/.test(txt));
      pdfCheck('etiket ağacı (/StructTreeRoot) korundu', /\/StructTreeRoot/.test(txt));
      pdfCheck('PDF/A: XMP pdfaid + OutputIntent + /ID', post.pdfa && /pdfaid:part>2/.test(txt) && /\/OutputIntents/.test(txt) && /\/ID\s*\[/.test(txt),
        post.warning || 'eksik');
      pdfCheck('sayfa sayısı değişmedi', doc.getPageCount() === (await PDFDocument.load(raw)).getPageCount());
      if (shotsDir) {
        fs.mkdirSync(shotsDir, { recursive: true });
        fs.writeFileSync(path.join(shotsDir, 'fixture-pdfa.pdf'), post.buffer);
      }
    } catch (err) {
      console.log('✖ PDF son işleme: ' + err.message);
      result.failed++;
    }

    if (shotsDir) {
      fs.mkdirSync(shotsDir, { recursive: true });
      const pdf = await win.webContents.printToPDF({
        printBackground: true,
        pageSize: 'A4',
        margins: { top: 0, bottom: 0, left: 0, right: 0 },
        preferCSSPageSize: true,
        generateDocumentOutline: true
      });
      fs.writeFileSync(path.join(shotsDir, 'fixture.pdf'), pdf);

      // Her A4 sayfasının PNG görüntüsü (sayfa tek başına sol üste alınır).
      const count = await win.webContents.executeJavaScript(
        'document.querySelectorAll("#pagesContainer > .a4-page").length');
      await new Promise(r => setTimeout(r, 600));   // yazdırma sonrası yeniden çizimi bekle
      for (let i = 0; i < count; i++) {
        await win.webContents.executeJavaScript(`(() => {
          const pages = [...document.querySelectorAll('#pagesContainer > .a4-page')];
          pages.forEach((p, j) => {
            p.style.cssText = j === ${i}
              ? 'position:fixed;left:0;top:0;z-index:9999;margin:0;box-shadow:none;border-radius:0'
              : 'display:none';
          });
          return new Promise(r => setTimeout(r, 120));
        })()`);
        const size = await win.webContents.executeJavaScript(`(() => { const p = document.querySelectorAll('#pagesContainer > .a4-page')[${i}].getBoundingClientRect(); return [Math.ceil(p.width), Math.ceil(p.height)]; })()`);
        const img = await win.webContents.capturePage({ x: 0, y: 0, width: size[0], height: size[1] });
        fs.writeFileSync(path.join(shotsDir, `page-${String(i + 1).padStart(2, '0')}.png`), img.toPNG());
      }
      const docxHtml = await win.webContents.executeJavaScript('window.__docxHtml || ""');
      if (docxHtml) {
        try {
          const HTMLtoDOCX = require('html-to-docx');
          const buf = await HTMLtoDOCX(`<!DOCTYPE html><html><body>${inlineImages(docxHtml)}</body></html>`, null, {
            pageSize: { width: 11906, height: 16838 }, font: 'Calibri', fontSize: 20, footer: true, pageNumber: true
          });
          fs.writeFileSync(path.join(shotsDir, 'fixture.docx'), buf);
        } catch (err) {
          console.log('✖ DOCX dönüşümü: ' + err.message);
          result.failed++;
        }
      }
      console.log(`Çıktılar: ${shotsDir}`);
    }
    clearTimeout(timer);
    console.log(`\n${result.passed} geçti, ${result.failed} kaldı`);
    app.exit(result.failed ? 1 : 0);
  });

  const paperIdx = process.argv.indexOf('--paper');
  const query = paperIdx > 0 ? { paper: process.argv[paperIdx + 1] } : {};
  await win.loadFile(path.join(__dirname, 'harness.html'), { query });
});
