/* ── Dışa aktarım: PDF / HTML / Word (DOCX), toplu çıktı ve komut satırı ──
   Varsayılan hedef: exports/<proje>/<proje>_<DİL>_Rev<xx>.<uzantı> (main.js). */

/* Gizli pencerede (CLI) requestAnimationFrame çalışmaz; kısa zamanlayıcıyla bekle. */
function settle(ms = 60) {
  return new Promise(r => setTimeout(r, ms));
}

async function waitForImages(root) {
  const imgs = [...(root || document).querySelectorAll('img')];
  await Promise.all(imgs.map(img => {
    if (img.complete) return img.decode ? img.decode().catch(() => {}) : null;
    return new Promise(r => { img.onload = img.onerror = r; });
  }));
}

function exportOpts(extra) {
  return { guideId: currentGuideId, lang: currentLang, rev: currentRev, ...(extra || {}) };
}

/* PDF meta verisi: başlık, yazar (hazırlayan), konu, anahtar kelimeler, dil. */
function pdfMeta() {
  const title = coverDocumentTitle(currentCoverName || currentModel, currentLang, { series: currentCoverSeries });
  return {
    title,
    author: preparedBy() || getFirmaFooter(currentFirma),
    subject: `${title} — Rev.${currentRev || 'xx'}`,
    keywords: [currentModel, currentFirma, currentLang.toUpperCase(), 'Rev.' + (currentRev || 'xx'), 'EN ISO 20607'],
    lang: { tr: 'tr-TR', en: 'en-US', de: 'de-DE' }[currentLang] || currentLang
  };
}

async function ensureView(mode) {
  if (viewMode !== mode) {
    await setViewMode(mode);
    await settle();
  }
}

/* Görünümü geçici değiştirip işi yapar, sonra eski görünüme döner. */
async function withView(mode, fn) {
  const prev = viewMode;
  if (typeof closeSearch === 'function') closeSearch();
  await ensureView(mode);
  try {
    return await fn();
  } finally {
    if (prev !== mode) await setViewMode(prev);
  }
}

/* success:false + error yok → kullanıcı kayıt diyaloğunu iptal etti; bildirim yok. */
function reportExport(result, label) {
  if (result && result.success && result.warning) {
    showToast(`${label} kaydedildi (${result.warning})`, 'error');
  } else if (result && result.success) {
    showToast(`${label} kaydedildi: ${result.filePath.split(/[\\/]/).pop()}`, 'success');
  } else if (result && result.error) {
    showToast(`${label} kaydedilemedi: ${result.error}`, 'error');
  }
  return result;
}

async function doExportPdf(silent) {
  return withView('pdf', async () => {
    const container = document.getElementById('pagesContainer');
    await waitForImages(container);
    // Büyük görseller geçici olarak küçültülmüş kopyalarla değiştirilir (PDF boyutu)
    const restore = await swapOptimizedImages(container);
    try {
      return await window.electronAPI.printPdf(exportOpts({
        silent,
        pageSize: paperSize(),
        meta: pdfMeta(),
        pdfa: outputOption('pdfa')
      }));
    } finally {
      restore();
    }
  });
}

async function doExportHtml(silent) {
  return withView('html', async () => {
    await waitForImages(document.getElementById('pagesContainer'));
    const doc = document.querySelector('.html-document.html-unified');
    if (!doc) return { success: false, error: 'HTML içeriği bulunamadı' };
    const title = coverDocumentTitle(currentCoverName || currentModel, currentLang, { series: currentCoverSeries });
    return window.electronAPI.exportHtml(exportOpts({ silent, bodyHtml: doc.outerHTML, title, optimize: outputOption('gorsel_optimize') }));
  });
}

async function doExportDocx(silent) {
  return withView('html', async () => {
    await waitForImages(document.getElementById('pagesContainer'));
    const html = buildDocxHtml();
    if (!html) return { success: false, error: 'İçerik bulunamadı' };
    const title = coverDocumentTitle(currentCoverName || currentModel, currentLang, { series: currentCoverSeries });
    return window.electronAPI.exportDocx(exportOpts({
      silent,
      html,
      title,
      optimize: outputOption('gorsel_optimize'),
      author: preparedBy(),
      headerText: `${String(currentModel || '').toUpperCase()} — ${title}`,
      footerText: getFirmaFooter(currentFirma)
    }));
  });
}

/* Tüm diller HTML görünümünde çizilip tek web kılavuzunda birleştirilir. */
async function doExportWeb(silent) {
  const startLang = currentLang;
  const langs = [];
  try {
    await withView('html', async () => {
      for (const lang of currentDiller) {
        if (lang !== currentLang) {
          currentLang = lang;
          await onModelChange(currentGuideId);
          await settle();
        }
        await waitForImages(document.getElementById('pagesContainer'));
        const doc = document.querySelector('.html-document.html-unified');
        if (!doc) continue;
        langs.push({
          lang,
          title: coverDocumentTitle(currentCoverName || currentModel, lang, { series: currentCoverSeries }),
          html: doc.outerHTML
        });
      }
    });
  } finally {
    if (currentLang !== startLang) {
      currentLang = startLang;
      await onModelChange(currentGuideId);
    }
  }
  if (!langs.length) return { success: false, error: 'İçerik bulunamadı' };
  return window.electronAPI.exportWeb({
    guideId: currentGuideId,
    rev: currentRev,
    silent,
    langs,
    defaultLang: startLang,
    brandColor: getBrand(currentFirma).color,
    optimize: outputOption('gorsel_optimize')
  });
}

async function exportWeb() {
  closeExportMenu();
  if (!currentModel) { showToast('Önce bir kılavuz seçin', 'error'); return; }
  showToast('Web kılavuzu oluşturuluyor (tüm diller)…', 'success');
  reportExport(await doExportWeb(false), 'Web kılavuzu');
}

async function exportPDF() {
  closeExportMenu();
  if (!currentModel) { showToast('Önce bir kılavuz seçin', 'error'); return; }
  reportExport(await doExportPdf(false), 'PDF');
}

async function exportHtml() {
  closeExportMenu();
  if (!currentModel) { showToast('Önce bir kılavuz seçin', 'error'); return; }
  showToast('HTML oluşturuluyor…', 'success');
  reportExport(await doExportHtml(false), 'HTML');
}

async function exportDocx() {
  closeExportMenu();
  if (!currentModel) { showToast('Önce bir kılavuz seçin', 'error'); return; }
  showToast('Word belgesi oluşturuluyor…', 'success');
  reportExport(await doExportDocx(false), 'Word');
}

async function openExportsFolder() {
  closeExportMenu();
  if (!currentGuideId) { showToast('Önce bir kılavuz seçin', 'error'); return; }
  const r = await window.electronAPI.openExports(currentGuideId);
  if (!r || !r.ok) showToast('Klasör açılamadı', 'error');
}

/* ── Çıktı menüsü ── */
function toggleExportMenu(evt) {
  if (evt) evt.stopPropagation();
  const menu = document.getElementById('exportMenu');
  menu.classList.toggle('open');
}

function closeExportMenu() {
  const menu = document.getElementById('exportMenu');
  if (menu) menu.classList.remove('open');
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.export-wrap')) closeExportMenu();
});

/* ── Toplu çıktı ── */
function openBatchExport() {
  closeExportMenu();
  if (!currentGuideId) { showToast('Önce bir kılavuz seçin', 'error'); return; }
  const langBox = document.getElementById('beLangs');
  langBox.innerHTML = '';
  currentDiller.forEach(l => {
    const label = document.createElement('label');
    label.className = 'np-lang';
    label.innerHTML = `<input type="checkbox" value="${l}" checked /> ${l.toUpperCase()}`;
    langBox.appendChild(label);
  });
  document.getElementById('beLog').innerHTML = '';
  document.getElementById('beGo').disabled = false;
  document.getElementById('beTarget').textContent = `exports/${currentGuideId.replace(/^proje:/, '')}/`;
  document.getElementById('beOverlay').style.display = 'flex';
}

function closeBatchExport() {
  document.getElementById('beOverlay').style.display = 'none';
}

function batchLog(msg, cls) {
  const box = document.getElementById('beLog');
  if (!box) return;
  const row = document.createElement('div');
  row.className = cls || '';
  row.textContent = msg;
  box.appendChild(row);
  box.scrollTop = box.scrollHeight;
}

async function submitBatchExport() {
  const langs = [...document.querySelectorAll('#beLangs input:checked')].map(i => i.value);
  const formats = [...document.querySelectorAll('#beFormats input:checked')].map(i => i.value);
  if (!langs.length || !formats.length) {
    batchLog('En az bir dil ve bir biçim seçin.', 'row-err');
    return;
  }
  document.getElementById('beGo').disabled = true;
  const r = await runBatch(langs, formats, batchLog);
  document.getElementById('beGo').disabled = false;
  batchLog(r.ok ? `Tamamlandı — ${r.files.length} dosya.` : `${r.errors.length} hata ile bitti.`, r.ok ? 'row-ok' : 'row-err');
}

/* Seçili kılavuz için dil × biçim çıktısı (diyalogsuz, exports/ altına). */
async function runBatch(langs, formats, log) {
  formats = formats.slice();
  const files = [];
  const errors = [];
  const startLang = currentLang;
  const startView = viewMode;
  const runners = { pdf: doExportPdf, html: doExportHtml, docx: doExportDocx };

  // Web kılavuzu dil başına değil, kılavuz başına tek dosyadır.
  if (formats.includes('web')) {
    log('… WEB (tüm diller)', 'row-run');
    try {
      const res = await doExportWeb(true);
      if (res && res.success) { files.push(res.filePath); log(`✓ ${res.filePath.split(/[\\/]/).pop()}`, 'row-ok'); }
      else { errors.push('WEB: ' + ((res && res.error) || 'kaydedilemedi')); log('✗ WEB', 'row-err'); }
    } catch (e) {
      errors.push('WEB: ' + e.message);
      log('✗ WEB: ' + e.message, 'row-err');
    }
    formats = formats.filter(f => f !== 'web');
  }

  for (const lang of langs) {
    if (!currentDiller.includes(lang)) {
      errors.push(`${lang.toUpperCase()}: dil dosyası yok`);
      log(`✗ ${lang.toUpperCase()}: dil dosyası yok`, 'row-err');
      continue;
    }
    if (lang !== currentLang) {
      currentLang = lang;
      await onModelChange(currentGuideId);
      await settle();
    }
    for (const fmt of formats) {
      const run = runners[fmt];
      if (!run) { errors.push(`bilinmeyen biçim: ${fmt}`); continue; }
      log(`… ${lang.toUpperCase()} ${fmt.toUpperCase()}`, 'row-run');
      try {
        const res = await run(true);
        if (res && res.success) {
          files.push(res.filePath);
          log(`✓ ${res.filePath.split(/[\\/]/).pop()}`, 'row-ok');
        } else {
          const msg = `${lang.toUpperCase()} ${fmt.toUpperCase()}: ${(res && res.error) || 'kaydedilemedi'}`;
          errors.push(msg);
          log('✗ ' + msg, 'row-err');
        }
      } catch (e) {
        errors.push(`${lang.toUpperCase()} ${fmt.toUpperCase()}: ${e.message}`);
        log(`✗ ${lang.toUpperCase()} ${fmt.toUpperCase()}: ${e.message}`, 'row-err');
      }
    }
  }

  if (currentLang !== startLang && currentDiller.includes(startLang)) {
    currentLang = startLang;
    await onModelChange(currentGuideId);
  }
  if (viewMode !== startView) await setViewMode(startView);
  return { ok: errors.length === 0, files, errors };
}

/* npm run export -- "<proje>" [diller] [biçimler] — gizli pencerede çalışır. */
async function runCliJob(job) {
  const log = (msg) => console.log('[cli] ' + msg);
  try {
    log(`Kılavuz: ${job.guideId.replace(/^proje:/, '')}`);
    await onModelChange(job.guideId);
    if (!currentModel || !lastGuideCache) {
      window.electronAPI.cliDone({ ok: false, errors: ['Kılavuz bulunamadı veya içerik yok: ' + job.guideId] });
      return;
    }
    const langs = job.langs && job.langs.length ? job.langs : currentDiller.slice();
    const r = await runBatch(langs, job.formats, log);
    window.electronAPI.cliDone(r);
  } catch (e) {
    window.electronAPI.cliDone({ ok: false, errors: [e.message] });
  }
}

/* ── Word (DOCX) için sade HTML ──
   html-to-docx mutlak konumlu kapak, CSS ızgara veya sınıf stillerini tanımaz;
   HTML görünümündeki canlı DOM'dan satır içi stilli, sade bir belge üretilir. */
const DOCX_SIGNAL_STYLE = {
  danger: { bg: '#C8102E', fg: '#FFFFFF' },
  warning: { bg: '#FF7900', fg: '#000000' },
  caution: { bg: '#FFD100', fg: '#000000' },
  notice: { bg: '#0067A5', fg: '#FFFFFF' },
  note: { bg: '#E8EEF8', fg: '#1A2540' }
};

/* Canlı elemanın iç HTML'i, Word'e uygun hale getirilmiş olarak.
   imgMax verilirse satır içi görseller (tablo sembolleri) o boyutta korunur;
   boyut, yüklenmiş canlı görselden okunur (klonda doğal boyut yoktur). */
function docxCleanInline(el, imgMax) {
  const liveImgs = [...el.querySelectorAll('img')];
  const c = el.cloneNode(true);
  [...c.querySelectorAll('img')].forEach((img, i) => {
    if (!imgMax || !liveImgs[i]) { img.remove(); return; }
    const t = document.createElement('template');
    t.innerHTML = docxImage(liveImgs[i], imgMax, imgMax);
    img.replaceWith(t.content.firstElementChild);
  });
  c.querySelectorAll('.xref-page').forEach(x => x.remove());
  c.querySelectorAll('a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (/^(https?:|mailto:)/i.test(href)) return;
    a.replaceWith(...a.childNodes);
  });
  c.querySelectorAll('.sig-pill').forEach(p => {
    const lvl = ([...p.classList].find(x => x.startsWith('sig-') && x !== 'sig-pill') || 'sig-warning').slice(4);
    const s = DOCX_SIGNAL_STYLE[lvl] || DOCX_SIGNAL_STYLE.warning;
    const strong = document.createElement('strong');
    strong.style.color = s.bg === '#FFD100' ? '#8a6d00' : s.bg;
    strong.textContent = p.textContent;
    p.replaceWith(strong);
  });
  c.querySelectorAll('*').forEach(x => {
    if (x.tagName === 'IMG') return;
    x.removeAttribute('class');
    Object.keys(x.dataset || {}).forEach(k => delete x.dataset[k]);
    x.removeAttribute('id');
  });
  return c.innerHTML;
}

function docxImage(img, maxW = 420, maxH = 380) {
  const w0 = img.naturalWidth || 400;
  const h0 = img.naturalHeight || 300;
  const k = Math.min(1, maxW / w0, maxH / h0);
  const w = Math.round(w0 * k);
  const h = Math.round(h0 * k);
  return `<img src="${img.getAttribute('src')}" width="${w}" height="${h}" style="width:${w}px;height:${h}px" />`;
}

function docxTable(table) {
  const capEl = table.querySelector(':scope > caption');
  const caption = capEl ? capEl.textContent.trim() : '';
  const rows = [...table.rows].map(tr => '<tr>' + [...tr.cells].map(cell => {
    const tag = cell.tagName.toLowerCase();
    const align = cell.classList.contains('al-right') ? 'right'
      : (cell.classList.contains('al-left') ? 'left' : 'center');
    const bg = tag === 'th' ? 'background-color:#EEF2FB;font-weight:bold;' : '';
    const html = docxCleanInline(cell, 48) || '&nbsp;';
    return `<${tag} style="${bg}border:1px solid #9aa5b8;padding:4px;text-align:${align};vertical-align:middle">${html}</${tag}>`;
  }).join('') + '</tr>').join('');
  return (caption ? `<p style="font-weight:bold">${escapeHtml(caption)}</p>` : '') +
    `<table border="1" style="width:100%;border-collapse:collapse;border:1px solid #9aa5b8">${rows}</table><p></p>`;
}

function docxList(list) {
  const tag = list.tagName.toLowerCase();
  const depth = Number((list.className.match(/md-depth-(\d)/) || [])[1] || 0);
  const style = tag === 'ol' && depth ? ` style="list-style-type:${depth === 1 ? 'lower-alpha' : 'lower-roman'}"` : '';
  const start = tag === 'ol' && list.start > 1 ? ` start="${list.start}"` : '';
  const items = [...list.children].filter(li => li.tagName === 'LI' && !li.classList.contains('li-figure'))
    .map(li => `<li>${docxCleanInline(li)}</li>`).join('');
  const figs = [...list.querySelectorAll(':scope > li.li-figure img')]
    .map(img => `<p style="text-align:center">${docxImage(img)}</p>`).join('');
  return (items ? `<${tag}${start}${style}>${items}</${tag}>` : '') + figs;
}

function docxCallout(box) {
  const level = ([...box.classList].find(c => c.startsWith('callout-')) || 'callout-warning').slice(8);
  const s = DOCX_SIGNAL_STYLE[level] || DOCX_SIGNAL_STYLE.warning;
  const body = box.querySelector('.callout-body');
  const word = box.dataset.signal || '';
  const head = level === 'note' ? '' :
    `<tr><td style="background-color:${s.bg};color:${s.fg};font-weight:bold;padding:4px">${level === 'notice' ? '' : '⚠ '}${escapeHtml(word)}</td></tr>`;
  return `<table border="1" style="width:100%;border-collapse:collapse;border:1px solid ${s.bg}">${head}` +
    `<tr><td style="padding:6px">${body ? docxCleanInline(body) : ''}</td></tr></table><p></p>`;
}

function buildDocxHtml() {
  const flow = document.querySelector('.html-document .html-flow-content');
  if (!flow) return '';
  const i18n = tDoc(currentLang);
  const out = [];

  // Kapak (sade): başlık + kimlik satırları
  const title = coverDocumentTitle(currentCoverName || currentModel, currentLang, { series: currentCoverSeries });
  out.push(`<p style="font-size:24pt;font-weight:bold;color:${getBrand(currentFirma).color}">${escapeHtml(title)}</p>`);
  coverInfoLines({ rev: currentRev, date: currentDate, by: preparedBy(), lang: currentLang })
    .forEach(l => out.push(`<p style="font-size:13pt;font-weight:bold">${escapeHtml(l)}</p>`));
  out.push('<div class="page-break" style="page-break-after: always;"></div>');

  if (currentRevisions.length) {
    const rev = buildRevisionBlocks(currentRevisions, currentLang);
    out.push(`<h1>${escapeHtml(i18n.revHistory)}</h1>`);
    out.push(docxTable(rev[1]));
    out.push('<div class="page-break" style="page-break-after: always;"></div>');
  }

  for (const b of flow.children) {
    if (b.classList.contains('sec-h') || /^H[1-6]$/.test(b.tagName)) {
      const lvl = Number((b.className.match(/sec-h(\d)/) || [])[1] || b.tagName.slice(1)) || 2;
      if (lvl === 1 && out.length > 3) out.push('<div class="page-break" style="page-break-after: always;"></div>');
      out.push(`<h${Math.min(lvl, 6)}>${escapeHtml(b.textContent.trim())}</h${Math.min(lvl, 6)}>`);
    } else if (b.classList.contains('md-callout')) {
      out.push(docxCallout(b));
    } else if (b.classList.contains('md-figure-frame') || b.classList.contains('md-figure-group')) {
      b.querySelectorAll('img.md-img').forEach(img => out.push(`<p style="text-align:center">${docxImage(img)}</p>`));
      const cap = b.querySelector('.md-figcaption');
      if (cap) out.push(`<p style="text-align:center;font-style:italic">${escapeHtml(cap.textContent)}</p>`);
    } else if (b.tagName === 'TABLE') {
      out.push(docxTable(b));
    } else if (b.tagName === 'UL' || b.tagName === 'OL') {
      out.push(docxList(b));
    } else if (b.classList.contains('md-quote')) {
      out.push(`<p style="font-style:italic;margin-left:24px">${docxCleanInline(b)}</p>`);
    } else if (b.classList.contains('md-code')) {
      out.push(`<p style="font-family:Consolas">${escapeHtml(b.textContent).replace(/\n/g, '<br/>')}</p>`);
    } else if (b.classList.contains('md-hr')) {
      continue;
    } else if (b.tagName === 'P') {
      const text = docxCleanInline(b, 40);
      if (text.trim()) out.push(`<p style="text-align:justify">${text}</p>`);
    }
  }
  return out.join('\n');
}
