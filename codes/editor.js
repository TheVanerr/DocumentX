/* ── Uygulama içi düzenleyici ──
   Solda Markdown (satır numaralı), sağda canlı önizleme; kaydırma ve imleç
   satırı önizlemeyle eşlenir. Açma: Ctrl+E (görünen bölüm), Alt+Shift+tık
   (tıklanan satır), kenar çubuğunda ✎. Ctrl+S kaydet, Esc kapat. */

const ED_LINE_H = 20;            // textarea satır yüksekliği (ui.css ile aynı)
let edState = null;              // { rel, mtime, original, lang, isMd }
let edPreviewTimer = null;

function edEls() {
  return {
    overlay: document.getElementById('editorOverlay'),
    text: document.getElementById('edText'),
    gutter: document.getElementById('edGutter'),
    preview: document.getElementById('edPreview'),
    title: document.getElementById('edTitle'),
    status: document.getElementById('edStatus')
  };
}

function edDirty() {
  return !!edState && edEls().text.value !== edState.original;
}

async function openEditor(rel, line) {
  if (!rel) { showToast('Düzenlenecek dosya bulunamadı', 'error'); return; }
  if (edState && edDirty() && !window.confirm('Kaydedilmemiş değişiklikler var. Yine de başka dosya açılsın mı?')) return;
  const r = await window.electronAPI.readFile(rel);
  if (!r || !r.ok) { showToast('Dosya açılamadı: ' + ((r && r.error) || rel), 'error'); return; }
  const lang = (rel.match(/\.([a-z]{2})\.md$/i) || [])[1] || currentLang;
  edState = { rel, mtime: r.mtime, original: r.text, lang: lang.toLowerCase(), isMd: /\.md$/i.test(rel) };
  const e = edEls();
  e.text.value = r.text;
  e.title.textContent = rel.replace(/^projects\//, '');
  e.title.title = rel;
  e.overlay.classList.add('open');
  e.overlay.classList.toggle('no-preview', !edState.isMd);
  edRenderGutter();
  edRenderPreview();
  edUpdateStatus();
  e.text.focus();
  if (line) edGotoLine(Number(line));
}

function closeEditor(force) {
  if (!edState) return;
  if (!force && edDirty() && !window.confirm('Kaydedilmemiş değişiklikler kaybolacak. Kapatılsın mı?')) return;
  edEls().overlay.classList.remove('open');
  edState = null;
}

function isEditorOpen() {
  return !!edState;
}

async function saveEditor() {
  if (!edState) return;
  const e = edEls();
  const text = e.text.value;
  let r = await window.electronAPI.writeFile(edState.rel, text, edState.mtime, false);
  if (r && r.conflict) {
    if (!window.confirm('Dosya siz düzenlerken diskte değişti (VS Code veya başka bir araç).\n\nDiskteki sürümün üzerine yazılsın mı?')) return;
    r = await window.electronAPI.writeFile(edState.rel, text, 0, true);
  }
  if (!r || !r.ok) { showToast('Kaydedilemedi: ' + ((r && r.error) || ''), 'error'); return; }
  edState.mtime = r.mtime;
  edState.original = text;
  edUpdateStatus();
  showToast('Kaydedildi', 'success');
  // İzleyici de yeniler; test/izleyicisiz ortamda doğrudan yenile.
  if (currentGuideId) reloadGuideFromDisk({ preserveScroll: true });
}

function openEditorForView() {
  closeToolsMenu();
  const area = document.getElementById('contentArea');
  const top = area.getBoundingClientRect().top + 60;
  const candidates = [...document.querySelectorAll('#pagesContainer [data-src][data-line]')];
  const el = candidates.find(c => c.getBoundingClientRect().bottom > top) || candidates[0];
  if (!el) { showToast('Önce bir kılavuz açın', 'error'); return; }
  openEditor(el.dataset.src, el.dataset.line);
}

/* ── Satır numaraları, durum, satıra git ── */
function edRenderGutter() {
  const e = edEls();
  const n = e.text.value.split('\n').length;
  let html = '';
  for (let i = 1; i <= n; i++) html += i + '\n';
  e.gutter.textContent = html;
  e.gutter.scrollTop = e.text.scrollTop;
}

function edCaretLine() {
  const t = edEls().text;
  return t.value.slice(0, t.selectionStart).split('\n').length;
}

function edUpdateStatus() {
  const e = edEls();
  if (!edState) return;
  e.status.textContent = `${edDirty() ? '● değiştirildi · ' : ''}satır ${edCaretLine()} · ${edState.lang.toUpperCase()}`;
  e.overlay.classList.toggle('dirty', edDirty());
}

function edGotoLine(line) {
  const t = edEls().text;
  const lines = t.value.split('\n');
  const idx = lines.slice(0, Math.max(0, line - 1)).reduce((s, l) => s + l.length + 1, 0);
  t.setSelectionRange(idx, idx + (lines[line - 1] || '').length);
  t.scrollTop = Math.max(0, (line - 4) * ED_LINE_H);
  edSyncPreview(line);
  edUpdateStatus();
}

/* ── Canlı önizleme ── */
function edRenderPreview() {
  if (!edState || !edState.isMd) return;
  const e = edEls();
  const prevLang = currentLang;
  currentLang = edState.lang;   // sinyal kelimesi / tablo başlığı kuralları dosyanın dili
  try {
    const blocks = applyHtmlFigureLayout(mdToBlocks(e.text.value, edState.rel));
    e.preview.replaceChildren(...blocks);
    applyHtmlFigureSmartFit(e.preview);
  } finally {
    currentLang = prevLang;
  }
  edSyncPreview(edCaretLine(), true);
}

function edSyncPreview(line, quiet) {
  const p = edEls().preview;
  const items = [...p.querySelectorAll('[data-line]')];
  let best = null;
  for (const el of items) {
    if (Number(el.dataset.line) <= line) best = el; else break;
  }
  p.querySelectorAll('.ed-current').forEach(x => x.classList.remove('ed-current'));
  if (!best) return;
  best.classList.add('ed-current');
  if (quiet) return;
  const pr = p.getBoundingClientRect();
  const br = best.getBoundingClientRect();
  if (br.top < pr.top + 20 || br.bottom > pr.bottom - 20) {
    p.scrollTop += br.top - pr.top - p.clientHeight / 4;
  }
}

/* ── Ekleme kalıpları ── */
const ED_SIGNALS = {
  tr: { danger: 'TEHLİKE', warning: 'UYARI', caution: 'DİKKAT', note: 'NOT', see: 'Bkz. Bölüm' },
  en: { danger: 'DANGER', warning: 'WARNING', caution: 'CAUTION', note: 'NOTE', see: 'See Chapter' },
  de: { danger: 'GEFAHR', warning: 'WARNUNG', caution: 'VORSICHT', note: 'HINWEIS', see: 'Siehe Kapitel' }
};

function edInsert(before, after = '', placeholder = '') {
  const t = edEls().text;
  const s = t.selectionStart;
  const eIdx = t.selectionEnd;
  const sel = t.value.slice(s, eIdx) || placeholder;
  t.setRangeText(before + sel + after, s, eIdx, 'end');
  if (!t.value.slice(s, eIdx) && placeholder) {
    t.setSelectionRange(s + before.length, s + before.length + placeholder.length);
  }
  t.focus();
  edOnInput();
}

function edInsertBlock(text) {
  const t = edEls().text;
  const s = t.selectionStart;
  const lineStart = t.value.lastIndexOf('\n', s - 1) + 1;
  const prefix = s > lineStart ? '\n\n' : (lineStart > 1 && t.value[lineStart - 2] !== '\n' ? '\n' : '');
  t.setRangeText(prefix + text + '\n', s, t.selectionEnd, 'end');
  t.focus();
  edOnInput();
}

function edInsertSignal(level) {
  const w = (ED_SIGNALS[edState.lang] || ED_SIGNALS.tr)[level];
  if (level === 'note') edInsertBlock(`**${w}:** `);
  else edInsertBlock(`**${w} — <tehlike türü>:** <olası yaralanma>. <önleme>.`);
}

function edInsertXref() {
  edInsert(`**${(ED_SIGNALS[edState.lang] || ED_SIGNALS.tr).see} `, '**', '2.4');
}

function edInsertTable() {
  edInsertBlock('| Başlık 1 | Başlık 2 |\n| :--- | :--- |\n| | |');
}

/* ── Olaylar ── */
function edOnInput() {
  edRenderGutter();
  edUpdateStatus();
  clearTimeout(edPreviewTimer);
  edPreviewTimer = setTimeout(edRenderPreview, 220);
}

function initEditor() {
  const e = edEls();
  if (!e.text) return;
  e.text.addEventListener('input', edOnInput);
  e.text.addEventListener('scroll', () => {
    e.gutter.scrollTop = e.text.scrollTop;
    edSyncPreview(Math.floor(e.text.scrollTop / ED_LINE_H) + 1);
  });
  ['click', 'keyup'].forEach(ev => e.text.addEventListener(ev, () => {
    edUpdateStatus();
    edSyncPreview(edCaretLine());
  }));
  e.text.addEventListener('keydown', (ev) => {
    ev.stopPropagation();   // uygulama kısayolları (Ctrl+B, Ctrl+F …) düzenleyicide çalışmasın
    if (ev.key === 'Tab') {
      ev.preventDefault();
      edInsert('   ');      // 3 boşluk = alt madde girintisi
    } else if (ev.ctrlKey && ev.key.toLowerCase() === 's') {
      ev.preventDefault();
      saveEditor();
    } else if (ev.ctrlKey && ev.key.toLowerCase() === 'b') {
      ev.preventDefault();
      edInsert('**', '**', 'kalın');
    } else if (ev.ctrlKey && ev.key.toLowerCase() === 'i') {
      ev.preventDefault();
      edInsert('*', '*', 'italik');
    } else if (ev.key === 'Escape') {
      ev.preventDefault();
      closeEditor();
    }
  });
}

/* Pencere kapatma: düzenleyicide kaydedilmemiş değişiklik varsa sor. */
function requestCloseWindow() {
  if (edDirty() && !window.confirm('Düzenleyicide kaydedilmemiş değişiklikler var. Uygulama kapatılsın mı?')) return;
  window.electronAPI.close();
}
