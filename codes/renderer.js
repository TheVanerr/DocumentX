/* ── Uygulama akışı ──
   Kılavuz seçimi, dil, görünüm modu, kapak meta (yaml'a kalıcı), zoom,
   oturum hafızası, klavye kısayolları ve belge içi bağlantılar.
   Belge kurulumu: document.js · sayfalama: paginator.js · md: md-parser.js */

let metaAppliedFor = '';   // yaml kapak alanlarının uygulandığı kılavuz
let metaSaveTimer = null;

async function onModelChange(value, opts = {}) {
  const switching = value !== currentGuideId;
  currentGuideId = value;
  const emptyState = document.getElementById('emptyState');
  const pagesContainer = document.getElementById('pagesContainer');
  const contentArea = document.getElementById('contentArea');
  const scrollTop = opts.preserveScroll && contentArea ? contentArea.scrollTop : null;

  if (!value) {
    currentModel = '';
    currentCoverName = '';
    currentCoverSeries = false;
    currentProjectRel = '';
    pagesContainer.innerHTML = '';
    emptyState.style.display = 'flex';
    return;
  }

  emptyState.style.display = 'none';
  prefSet('lastGuide', value);
  if (switching) {
    const savedLang = prefGet('lang.' + value, '');
    if (savedLang) currentLang = savedLang;
  }

  const res = await window.electronAPI.getGuide(value, currentLang);

  if (!res || !res.ok) {
    pagesContainer.innerHTML = infoCard(`<strong>${escapeHtml(value)}</strong> için kılavuz bulunamadı.`);
    return;
  }

  currentModel = res.label || res.model || value;
  currentProjectRel = (res.projectRel || '').replace(/\\/g, '/');
  applyGuideMeta(res);
  syncLangButtons(res.diller || ['tr'], res.lang || currentLang);

  if (!res.tree || !res.tree.length) {
    pagesContainer.innerHTML = infoCard(
      `<strong>${escapeHtml(res.label || res.model)}</strong> için içerik bulunamadı.`
    );
    return;
  }

  await renderGuide(currentModel, res.tree, pagesContainer);

  if (scrollTop != null && contentArea) {
    contentArea.scrollTop = scrollTop;
  }
}

/* project.yaml → kapak (rev, tarih, firma, hazırlayan), revizyonlar, çıktı seçenekleri.
   Kullanıcı arayüzden değiştirdiğinde değerler yaml'a yazılır (scheduleMetaSave);
   kaydı bekleyen bir değişiklik varken yaml'daki eski değer kutuyu ezmez. */
function applyGuideMeta(res) {
  const kapak = res.kapak || {};
  currentCoverName = String(kapak.baslik || '').trim() || currentModel;
  currentCoverSeries = kapak.seri === true;
  currentPreparedBy = String(kapak.hazirlayan || '');
  currentRevisions = Array.isArray(res.revizyonlar) ? res.revizyonlar : [];
  currentOutput = res.cikti && typeof res.cikti === 'object' ? res.cikti : {};
  currentData = res.data || null;
  applyPaperSize();
  currentGlossary = Array.isArray(res.glossary) ? res.glossary : [];
  currentSymbols = res.symbols || {};
  currentMarks = res.marks || {};

  const fresh = metaAppliedFor !== res.id;
  if (!fresh && metaSaveTimer) return;
  metaAppliedFor = res.id;

  currentRev = String(kapak.rev || '');
  currentDate = String(kapak.tarih || '');
  const firma = String(kapak.firma || '').trim().toUpperCase();
  if (firma && BRANDS[firma]) currentFirma = firma;
  else if (fresh) currentFirma = DEFAULT_BRAND;
  syncCoverInputs();
}

function syncCoverInputs() {
  const revInput = document.getElementById('revInput');
  const dateInput = document.getElementById('dateInput');
  const dateLabel = document.getElementById('dateLabel');
  const firmaSelect = document.getElementById('firmaSelect');
  if (revInput && document.activeElement !== revInput) revInput.value = currentRev;
  if (dateInput) dateInput.value = currentDate;
  if (dateLabel) dateLabel.textContent = currentDate ? formatCoverDate(currentDate) : 'Tarih';
  if (firmaSelect) firmaSelect.value = currentFirma;
}

function scheduleMetaSave(patch, delay = 600) {
  const guideId = currentGuideId;
  if (!guideId) return;
  clearTimeout(metaSaveTimer);
  metaSaveTimer = setTimeout(async () => {
    metaSaveTimer = null;
    const r = await window.electronAPI.saveGuideMeta(guideId, patch);
    if (!r || !r.ok) showToast('project.yaml kaydedilemedi: ' + ((r && r.error) || ''), 'error');
  }, delay);
}

function kapakPatch() {
  return { kapak: { rev: currentRev, tarih: currentDate, firma: currentFirma } };
}

function contentChangeAffectsGuide(paths) {
  if (!currentGuideId || !currentProjectRel) return false;
  const prefix = currentProjectRel.replace(/\\/g, '/').replace(/\/+$/, '') + '/';
  return paths.some((p) => {
    const rel = String(p).replace(/\\/g, '/');
    if (rel.startsWith(prefix)) return true;
    if (rel.startsWith('assets/')) return true;
    if (rel.startsWith('templates/')) return true;
    return false;
  });
}

let contentReloadBusy = false;
async function reloadGuideFromDisk(opts = {}) {
  if (!currentGuideId || contentReloadBusy) return;
  contentReloadBusy = true;
  try {
    await onModelChange(currentGuideId, { preserveScroll: opts.preserveScroll !== false });
  } finally {
    contentReloadBusy = false;
  }
}

function infoCard(html) {
  return `
    <div class="info-card">
      <p class="info-card-icon">📄</p>
      <p>${html}</p>
    </div>`;
}

/* ── Kılavuzu oluştur ── */
async function renderGuide(modelName, tree, container) {
  lastGuideCache = { modelName, tree };
  if (viewMode !== 'compare') await loadChanges();
  const staging = document.createElement('div');
  // Ölçüm gerçek DOM'da yapılır; staging yalnızca sonuç sayfalarını toplar.
  if (viewMode === 'html') {
    await renderHtmlGuide(modelName, tree, staging);
  } else if (viewMode === 'compare') {
    await renderCompareGuide(modelName, tree, staging);
  } else {
    await renderPdfGuide(modelName, tree, staging);
  }
  container.replaceChildren(...Array.from(staging.childNodes));
  container.className = staging.className;
  // İşaretler gerçek ölçülere göre konumlanır (sayfalar DOM'a girdikten sonra)
  if (typeof placeImageMarks === 'function') placeImageMarks(container);
  document.title = coverDocumentTitle(currentCoverName || currentModel, currentLang, { series: currentCoverSeries });
  document.dispatchEvent(new CustomEvent('guide-rendered'));
}

async function setViewMode(mode) {
  if (!['html', 'pdf', 'compare'].includes(mode)) return;
  if (viewMode === mode) return;

  viewMode = mode;
  prefSet('view', mode);
  document.body.classList.toggle('view-html', mode === 'html');
  document.body.classList.toggle('view-pdf', mode === 'pdf');
  document.body.classList.toggle('view-compare', mode === 'compare');
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === mode);
  });
  syncCompareLangSelect();

  if (lastGuideCache) {
    const container = document.getElementById('pagesContainer');
    await renderGuide(lastGuideCache.modelName, lastGuideCache.tree, container);
    applyZoom();
  }
}

/* ── Kapak meta (Rev / Tarih / Firma) ── */
function onCoverMetaChange() {
  const revInput = document.getElementById('revInput');
  const dateInput = document.getElementById('dateInput');
  const dateLabel = document.getElementById('dateLabel');

  currentRev = revInput.value.trim();
  currentDate = dateInput.value;
  dateLabel.textContent = currentDate ? formatCoverDate(currentDate) : 'Tarih';

  updateCover();
  scheduleMetaSave(kapakPatch());
}

function onFirmaChange(v) {
  currentFirma = v;
  scheduleMetaSave(kapakPatch(), 0);
  if (currentGuideId && lastGuideCache) {
    renderGuide(lastGuideCache.modelName, lastGuideCache.tree, document.getElementById('pagesContainer'));
  }
}

function populateFirmaSelect() {
  const sel = document.getElementById('firmaSelect');
  if (!sel) return;
  sel.innerHTML = '';
  Object.keys(BRANDS).forEach(key => {
    const o = document.createElement('option');
    o.value = key;
    o.textContent = key;
    sel.appendChild(o);
  });
  sel.value = currentFirma;
}

function updateCover() {
  const container = document.getElementById('pagesContainer');
  const existing = container.querySelector('.cover-page:not(.back-cover-page)');
  if (existing && currentModel) {
    const cover = buildCoverPage(coverPageOpts());
    if (viewMode === 'html') cover.classList.add('html-inline-cover');
    existing.replaceWith(cover);
  }
  const back = container.querySelector('.back-cover-page');
  if (back && currentModel) {
    const cover = buildBackCoverPage(coverPageOpts());
    if (viewMode === 'html') cover.classList.add('html-inline-cover');
    back.replaceWith(cover);
  }
}

function openDatePicker() {
  const dateInput = document.getElementById('dateInput');
  if (dateInput.showPicker) {
    try { dateInput.showPicker(); return; } catch (e) {}
  }
  dateInput.focus();
  dateInput.click();
}

/* Hedef elementi görünür alana kaydırır (PDF'te tüm A4 sayfası ortalanır). */
function scrollToPage(el, opts = {}) {
  const area = document.querySelector('.content-area');
  if (!el || !area) return;

  const areaRect = area.getBoundingClientRect();
  const page = viewMode === 'pdf' && !opts.exact ? el.closest('.a4-page') : null;

  let targetScroll;
  if (!page) {
    const elRect = el.getBoundingClientRect();
    targetScroll = elRect.top - areaRect.top + area.scrollTop - (opts.center ? area.clientHeight / 3 : 24);
  } else {
    const pageRect = page.getBoundingClientRect();
    const pageTopInArea = pageRect.top - areaRect.top + area.scrollTop;
    targetScroll = pageRect.height <= area.clientHeight
      ? pageTopInArea - (area.clientHeight - pageRect.height) / 2
      : pageTopInArea;
  }
  area.scrollTo({ top: Math.max(0, targetScroll), behavior: opts.instant ? 'auto' : 'smooth' });
  if (opts.flash) flashElement(el);
}

function flashElement(el) {
  el.classList.remove('dx-flash');
  void el.offsetWidth;
  el.classList.add('dx-flash');
  setTimeout(() => el.classList.remove('dx-flash'), 1600);
}

/* ── Belge içi bağlantılar + Alt+tık ile kaynağa atlama ── */
function onDocumentClick(evt) {
  const container = document.getElementById('pagesContainer');
  if (!container || !container.contains(evt.target)) return;

  if (evt.altKey && evt.shiftKey) {
    // Alt+Shift+tık görselde → işaret düzenleyici; metinde → uygulama içi düzenleyici
    const img = evt.target.closest('.md-figure-cell img.md-img');
    if (img) {
      evt.preventDefault();
      openMarkEditor(img.getAttribute('src'));
      return;
    }
    const srcEl = evt.target.closest('[data-src]');
    if (!srcEl) return;
    evt.preventDefault();
    const lineEl = evt.target.closest('[data-line]') || srcEl;
    openEditor(srcEl.dataset.src, lineEl.dataset.line);
    return;
  }

  if (evt.altKey) {
    // DATA'dan gelen değer / tablo satırı → DATA dosyasında ilgili satır
    const dataEl = evt.target.closest('[data-dline]');
    if (dataEl && currentData && currentData.file) {
      evt.preventDefault();
      openSourceFile(currentData.file, dataEl.dataset.dline);
      return;
    }
    const srcEl = evt.target.closest('[data-src]');
    if (!srcEl) return;
    evt.preventDefault();
    const lineEl = evt.target.closest('[data-line]') || srcEl;
    openSourceFile(srcEl.dataset.src, lineEl.dataset.line);
    return;
  }

  const a = evt.target.closest('a');
  if (!a || !container.contains(a)) return;
  evt.preventDefault();

  if (a.dataset.goto) {
    let target = null;
    try { target = container.querySelector(a.dataset.goto); } catch (e) { target = null; }
    if (target) scrollToPage(target);
    return;
  }
  const href = a.getAttribute('href') || '';
  if (/^(https?:|mailto:)/i.test(href)) window.open(href);
}

async function openSourceFile(rel, line) {
  if (!rel) return;
  const r = await window.electronAPI.openSource(rel, line);
  if (!r || !r.ok) showToast('Kaynak açılamadı: ' + ((r && r.error) || rel), 'error');
}

/* ── Dil ── */
/* Guide'ın mevcut dillerine göre butonları etkinleştirir/pasifleştirir. */
function syncLangButtons(diller, activeLang) {
  currentDiller = Array.isArray(diller) && diller.length ? diller.map(s => s.toLowerCase()) : ['tr'];
  currentLang = (activeLang || currentLang || 'tr').toLowerCase();
  if (!currentDiller.includes(currentLang)) currentLang = currentDiller[0];

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const l = btn.dataset.lang;
    const available = currentDiller.includes(l);
    btn.classList.toggle('active', l === currentLang);
    btn.classList.toggle('lang-disabled', !available);
    btn.disabled = !available;
    btn.title = available ? btn.title.replace(/ \(dil yok\)$/, '') : `${l.toUpperCase()} (dil yok)`;
  });
  syncCompareLangSelect();
}

async function setLanguage(lang) {
  lang = String(lang).toLowerCase();
  if (!currentDiller.includes(lang)) {
    showToast(`${lang.toUpperCase()} dil dosyası bulunmuyor`, 'error');
    return;
  }
  if (lang === currentLang) return;
  currentLang = lang;
  if (currentGuideId) prefSet('lang.' + currentGuideId, lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  if (currentGuideId) await onModelChange(currentGuideId);
}

function showToast(msg, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

/* ── Zoom ── */
const ZOOM_MIN = 50;
const ZOOM_MAX = 200;
const ZOOM_STEP = 10;
let zoomLevel = 100;

function applyZoom() {
  const container = document.getElementById('pagesContainer');
  if (container) container.style.zoom = zoomLevel / 100;
  const label = document.getElementById('zoomLabel');
  if (label) label.textContent = `${zoomLevel}%`;
  document.dispatchEvent(new CustomEvent('zoom-changed'));
}

function setZoom(level) {
  zoomLevel = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, level));
  prefSet('zoom', zoomLevel);
  applyZoom();
}

function zoomIn() {
  setZoom(zoomLevel + ZOOM_STEP);
}

function zoomOut() {
  setZoom(zoomLevel - ZOOM_STEP);
}

function resetZoom() {
  setZoom(100);
}

function handleWheelZoom(e) {
  if (!e.ctrlKey) return;
  const contentArea = document.getElementById('contentArea');
  if (!contentArea) return;

  e.preventDefault();
  e.stopPropagation();

  const scrollTop = contentArea.scrollTop;
  if (e.deltaY < 0) zoomIn();
  else if (e.deltaY > 0) zoomOut();

  requestAnimationFrame(() => {
    contentArea.scrollTop = scrollTop;
  });
}

/* ── Kılavuz listesi ── */
async function populateGuides(guides, opts = {}) {
  const sel = document.getElementById('modelSelect');
  if (!sel || !Array.isArray(guides)) return;

  sel.innerHTML = '<option value="">— Seçiniz —</option>';

  const models = guides.filter(g => g.type === 'model');
  const projects = guides.filter(g => g.type === 'project');

  const addGroup = (label, list) => {
    if (!list.length) return;
    const grp = document.createElement('optgroup');
    grp.label = label;
    for (const g of list) {
      const opt = document.createElement('option');
      opt.value = g.id;
      opt.textContent = g.label;
      grp.appendChild(opt);
    }
    sel.appendChild(grp);
  };
  addGroup('Modeller', models);
  addGroup('Projeler', projects);

  if (opts.select === false) return;
  const remembered = prefGet('lastGuide', '');
  const exists = (id) => guides.some(g => g.id === id);
  const preferred = (remembered && exists(remembered) && remembered) ||
    (projects[0] && projects[0].id) || (models[0] && models[0].id) || '';
  if (preferred) {
    sel.value = preferred;
    await onModelChange(preferred);
  }
}

async function loadModelSelect() {
  try {
    if (window.electronAPI?.listGuides) {
      const guides = await window.electronAPI.listGuides();
      await populateGuides(guides);
    }
  } catch (e) {
    console.error('Kılavuz listesi yüklenemedi:', e);
  }
}

/* ── Başlatma ── */
async function initApp() {
  populateFirmaSelect();

  zoomLevel = Number(prefGet('zoom', 100)) || 100;
  applyZoom();
  const savedView = prefGet('view', 'pdf');
  if (savedView !== 'pdf') {
    viewMode = savedView === 'html' ? 'html' : 'pdf';
    document.body.classList.toggle('view-html', viewMode === 'html');
    document.body.classList.toggle('view-pdf', viewMode === 'pdf');
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.view === viewMode));
  }

  document.addEventListener('wheel', handleWheelZoom, { capture: true, passive: false });
  document.addEventListener('click', onDocumentClick);
  window.addEventListener('keydown', (e) => document.body.classList.toggle('alt-down', e.altKey));
  window.addEventListener('keyup', (e) => document.body.classList.toggle('alt-down', e.altKey));
  window.addEventListener('blur', () => document.body.classList.remove('alt-down'));

  try {
    const info = await window.electronAPI.appInfo();
    if (info && info.assetBase) assetBase = info.assetBase;
    if (info) {
      document.querySelector('.app-title').textContent = `DocumentX ${info.version}`;
      document.body.classList.toggle('app-packaged', !!info.packaged);
    }
  } catch (e) { /* geliştirme varsayılanı */ }
  if (window.electronAPI.onUpdateStatus) window.electronAPI.onUpdateStatus(onUpdateStatus);

  try {
    const settings = await window.electronAPI.getSettings();
    defaultPreparedBy = (settings && settings.hazirlayan) || '';
  } catch (e) { /* varsayılan boş */ }

  if (typeof initSidebar === 'function') initSidebar();
  if (typeof initSearch === 'function') initSearch();
  if (typeof initQc === 'function') initQc();
  if (typeof initEditor === 'function') initEditor();
  if (typeof initMarkEditor === 'function') initMarkEditor();

  const cliJob = window.electronAPI?.getCliJob ? await window.electronAPI.getCliJob() : null;
  if (cliJob) {
    await runCliJob(cliJob);
    return;
  }

  await loadModelSelect();

  if (window.electronAPI?.onContentChanged) {
    window.electronAPI.onContentChanged(({ paths }) => {
      if (!Array.isArray(paths) || !paths.length) return;
      // Görsel değiştiyse önbellekteki sayfa ölçüleri geçersizdir.
      if (paths.some(p => !/\.(md|ya?ml)$/i.test(p))) clearPaginationCache();
      if (contentChangeAffectsGuide(paths)) {
        reloadGuideFromDisk({ preserveScroll: true });
      }
    });
  } else {
    console.warn('Canlı içerik yenileme kullanılamıyor — uygulamayı yeniden başlatın.');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/* ── Klavye kısayolları ── */
function anyModalOpen() {
  return [...document.querySelectorAll('.np-overlay')].some(o => o.style.display === 'flex');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const open = [...document.querySelectorAll('.np-overlay')].find(o => o.style.display === 'flex');
    if (open) { open.style.display = 'none'; return; }
    if (typeof isEditorOpen === 'function' && isEditorOpen()) { closeEditor(); return; }
    if (typeof closeSearch === 'function' && isSearchOpen()) { closeSearch(); return; }
    closeExportMenu();
    return;
  }
  if (e.key === 'F3') {
    e.preventDefault();
    if (typeof searchStep === 'function') searchStep(e.shiftKey ? -1 : 1);
    return;
  }
  if (!e.ctrlKey || anyModalOpen()) return;
  const k = e.key.toLowerCase();
  if (e.key === '=' || e.key === '+') {
    e.preventDefault();
    zoomIn();
  } else if (e.key === '-') {
    e.preventDefault();
    zoomOut();
  } else if (e.key === '0') {
    e.preventDefault();
    resetZoom();
  } else if (k === 'f') {
    e.preventDefault();
    openSearch();
  } else if (k === 'b') {
    e.preventDefault();
    toggleSidebar();
  } else if (k === 'q' && e.shiftKey) {
    e.preventDefault();
    toggleQcPanel();
  } else if (k === 'p') {
    e.preventDefault();
    exportPDF();
  } else if (k === 'e') {
    e.preventDefault();
    openEditorForView();
  }
});

/* ══════════════ GÜNCELLEME / ÇALIŞMA KLASÖRÜ ══════════════ */
function onUpdateStatus(s) {
  const bar = document.getElementById('updateBar');
  if (s.state === 'downloaded') {
    bar.innerHTML = `DocumentX ${escapeHtml(s.version || '')} indirildi. <button onclick="window.electronAPI.installUpdate()">Yeniden başlat ve kur</button>`;
    bar.classList.add('open');
  } else if (s.state === 'progress') {
    bar.textContent = `Güncelleme indiriliyor… %${s.percent}`;
    bar.classList.add('open');
  } else if (s.state === 'none' && checkingUpdates) {
    showToast('DocumentX güncel', 'success');
  } else if (s.state === 'error' && checkingUpdates) {
    showToast('Güncelleme denetlenemedi: ' + (s.message || ''), 'error');
  }
  if (s.state !== 'available' && s.state !== 'progress') checkingUpdates = false;
}

let checkingUpdates = false;
async function checkForUpdates() {
  closeToolsMenu();
  checkingUpdates = true;
  const r = await window.electronAPI.checkUpdates();
  if (!r || !r.ok) {
    checkingUpdates = false;
    showToast((r && r.error) || 'Güncelleme denetlenemedi', 'error');
  }
}

async function chooseWorkspace() {
  closeToolsMenu();
  const r = await window.electronAPI.chooseWorkspace();
  if (r && r.error) showToast(r.error, 'error');
}

/* ══════════════ YENİ PROJE ══════════════ */
async function openNewProject() {
  const overlay = document.getElementById('npOverlay');
  const sel = document.getElementById('npModel');
  const status = document.getElementById('npStatus');
  status.textContent = '';
  status.className = 'np-status';
  document.getElementById('npName').value = '';
  document.getElementById('npGo').disabled = false;

  try {
    const models = await window.electronAPI.listModels();
    sel.innerHTML = '';
    (models || []).forEach(m => {
      const o = document.createElement('option');
      o.value = m; o.textContent = m.toUpperCase();
      sel.appendChild(o);
    });
  } catch (e) {
    sel.innerHTML = '<option value="">model yok</option>';
  }

  overlay.style.display = 'flex';
  setTimeout(() => document.getElementById('npName').focus(), 50);
}

function closeNewProject() {
  document.getElementById('npOverlay').style.display = 'none';
}

async function submitNewProject() {
  const name = document.getElementById('npName').value.trim();
  const model = document.getElementById('npModel').value;
  const status = document.getElementById('npStatus');
  const go = document.getElementById('npGo');

  if (!name) {
    status.textContent = 'Proje adı gerekli';
    status.className = 'np-status err';
    return;
  }
  const langs = [...document.querySelectorAll('.np-lang input:checked')].map(i => i.value);

  go.disabled = true;
  status.textContent = 'Oluşturuluyor…';
  status.className = 'np-status';

  try {
    const r = await window.electronAPI.createProject(name, model, langs);
    if (!r || !r.ok) {
      status.textContent = (r && r.error) || 'Oluşturulamadı';
      status.className = 'np-status err';
      go.disabled = false;
      return;
    }
    const guides = await window.electronAPI.listGuides();
    await populateGuides(guides, { select: false });
    const sel = document.getElementById('modelSelect');
    sel.value = r.id;
    await onModelChange(r.id);
    closeNewProject();
    showToast(`Proje oluşturuldu: ${r.label} (${r.files.length} bölüm kopyalandı)`, 'success');
  } catch (e) {
    status.textContent = e.message;
    status.className = 'np-status err';
    go.disabled = false;
  }
}

/* ══════════════ BELGE AYARLARI ══════════════
   Bu kılavuz: hazırlayan, çıktı seçenekleri, revizyon geçmişi → project.yaml
   Tüm kılavuzlar: varsayılan hazırlayan → uygulama ayarları */
let dsRevisions = [];
let dsGitHead = '';

async function fillChangeBaseSelect() {
  const sel = document.getElementById('dsChangeBase');
  const note = document.getElementById('dsChangeNote');
  sel.innerHTML = '';
  dsGitHead = '';
  const r = window.electronAPI.gitLog ? await window.electronAPI.gitLog(currentGuideId) : null;
  if (!r || !r.ok) {
    sel.disabled = true;
    document.getElementById('dsChanges').disabled = true;
    note.textContent = 'git bulunamadı — değişiklik çubukları kullanılamaz.';
    return;
  }
  dsGitHead = r.head || '';
  sel.disabled = false;
  document.getElementById('dsChanges').disabled = false;
  const last = lastRevisionCommit();
  const auto = document.createElement('option');
  auto.value = '';
  auto.textContent = last ? `Son revizyon kaydı (${last.slice(0, 7)})` : 'Taban seçilmedi';
  sel.appendChild(auto);
  r.commits.forEach(c => {
    const o = document.createElement('option');
    o.value = c.hash;
    o.textContent = `${c.short} · ${fmtStamp(c.ts).slice(0, 10)} · ${c.subject}`.slice(0, 90);
    sel.appendChild(o);
  });
  const chosen = currentOutput && currentOutput.degisiklik_tabani;
  sel.value = chosen && r.commits.some(c => c.hash === chosen) ? chosen : '';
  note.textContent = r.commits.length ? `${r.commits.length} commit bu projeye dokunuyor.` : 'Bu projede commit yok — yalnızca çalışma ağacı.';
}

async function suggestDsRevision() {
  const ref = document.getElementById('dsChangeBase').value || lastRevisionCommit();
  if (!ref) { document.getElementById('dsStatus').textContent = 'Önce bir taban sürüm seçin'; return; }
  const changes = await fetchChangedLines(ref);
  const text = changes ? suggestRevisionText(changes, currentLang) : '';
  document.getElementById('dsStatus').textContent = text ? '' : 'Tabandan bu yana değişen bölüm yok';
  if (text) document.getElementById('dsRevDesc').value = text;
}

function openDocSettings() {
  if (!currentGuideId) { showToast('Önce bir kılavuz seçin', 'error'); return; }
  document.getElementById('dsPreparedBy').value = currentPreparedBy;
  document.getElementById('dsPreparedBy').placeholder = defaultPreparedBy || 'boş — kapakta satır gösterilmez';
  document.getElementById('dsDefaultBy').value = defaultPreparedBy;
  document.getElementById('dsFigNum').checked = outputOption('sekil_numara');
  document.getElementById('dsRunning').checked = outputOption('bolum_basligi');
  document.getElementById('dsBackCover').checked = outputOption('arka_kapak');
  document.getElementById('dsIndex').checked = outputOption('dizin');
  document.getElementById('dsChanges').checked = outputOption('degisiklik_cubugu');
  document.getElementById('dsOptimize').checked = outputOption('gorsel_optimize');
  document.getElementById('dsPdfa').checked = outputOption('pdfa');
  document.getElementById('dsPaper').value = paperSize();
  fillChangeBaseSelect();
  document.getElementById('dsRevRev').value = currentRev;
  document.getElementById('dsRevDate').value = currentDate || new Date().toISOString().slice(0, 10);
  document.getElementById('dsRevDesc').value = '';
  document.getElementById('dsStatus').textContent = '';
  dsRevisions = currentRevisions.map(r => ({ ...r }));
  renderDsRevisions();
  document.getElementById('dsOverlay').style.display = 'flex';
}

function closeDocSettings() {
  document.getElementById('dsOverlay').style.display = 'none';
}

function renderDsRevisions() {
  const list = document.getElementById('dsRevList');
  list.innerHTML = '';
  if (!dsRevisions.length) {
    list.innerHTML = '<div class="ds-empty">Revizyon kaydı yok — revizyon geçmişi sayfası basılmaz.</div>';
    return;
  }
  dsRevisions.forEach((r, i) => {
    const row = document.createElement('div');
    row.className = 'ds-rev-row';
    row.innerHTML = `<span class="ds-rev-no">Rev.${escapeHtml(r.rev || '—')}</span>` +
      `<span class="ds-rev-date">${escapeHtml(formatCoverDate(r.tarih))}</span>` +
      `<span class="ds-rev-desc">${escapeHtml(revisionText(r.aciklama, currentLang))}</span>`;
    const del = document.createElement('button');
    del.className = 'ds-rev-del';
    del.title = 'Kaydı sil';
    del.textContent = '✕';
    del.onclick = () => { dsRevisions.splice(i, 1); renderDsRevisions(); };
    row.appendChild(del);
    list.appendChild(row);
  });
}

function addDsRevision() {
  const rev = document.getElementById('dsRevRev').value.trim();
  const tarih = document.getElementById('dsRevDate').value;
  const desc = document.getElementById('dsRevDesc').value.trim();
  if (!rev || !desc) {
    document.getElementById('dsStatus').textContent = 'Rev. ve açıklama gerekli';
    return;
  }
  // O anki commit kaydedilir: sonraki revizyonda değişiklik çubuklarının tabanı olur.
  dsRevisions.push({ rev, tarih, aciklama: { [currentLang]: desc }, ...(dsGitHead ? { commit: dsGitHead } : {}) });
  document.getElementById('dsRevDesc').value = '';
  document.getElementById('dsStatus').textContent = '';
  renderDsRevisions();
}

async function saveDocSettings() {
  const by = document.getElementById('dsPreparedBy').value.trim();
  const defBy = document.getElementById('dsDefaultBy').value.trim();
  const cikti = {
    sekil_numara: document.getElementById('dsFigNum').checked,
    bolum_basligi: document.getElementById('dsRunning').checked,
    arka_kapak: document.getElementById('dsBackCover').checked,
    dizin: document.getElementById('dsIndex').checked,
    degisiklik_cubugu: document.getElementById('dsChanges').checked,
    gorsel_optimize: document.getElementById('dsOptimize').checked,
    pdfa: document.getElementById('dsPdfa').checked,
    sayfa: document.getElementById('dsPaper').value,
    degisiklik_tabani: document.getElementById('dsChangeBase').value || null
  };
  const revizyonlar = dsRevisions.map(r => {
    const o = { rev: r.rev, tarih: r.tarih, aciklama: r.aciklama };
    if (r.hazirlayan) o.hazirlayan = r.hazirlayan;
    if (r.commit) o.commit = r.commit;
    return o;
  });

  const status = document.getElementById('dsStatus');
  status.textContent = 'Kaydediliyor…';

  if (defBy !== defaultPreparedBy) {
    const s = await window.electronAPI.setSettings({ hazirlayan: defBy });
    if (s && s.ok) defaultPreparedBy = defBy;
  }
  const r = await window.electronAPI.saveGuideMeta(currentGuideId, {
    kapak: { hazirlayan: by || null },
    cikti,
    revizyonlar: revizyonlar.length ? revizyonlar : null
  });
  if (!r || !r.ok) {
    status.textContent = 'Kaydedilemedi: ' + ((r && r.error) || '');
    return;
  }
  currentPreparedBy = by;
  currentOutput = cikti;
  applyPaperSize();
  currentRevisions = revizyonlar;
  closeDocSettings();
  if (lastGuideCache) {
    await renderGuide(lastGuideCache.modelName, lastGuideCache.tree, document.getElementById('pagesContainer'));
  }
  showToast('Belge ayarları kaydedildi', 'success');
}
