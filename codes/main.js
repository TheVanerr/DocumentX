const { app, BrowserWindow, ipcMain, dialog, shell, nativeImage } = require('electron');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');
const yaml = require('js-yaml');
const yamlEdit = require('./yaml-edit');
const dataFile = require('./data-file');
const gitInfo = require('./git-info');
const { buildWebManual } = require('./web-export');
const { postProcessPdf } = require('./pdf-post');

/* ── Çalışma klasörü (DocumentX kökü: projects/, templates/, assets/, scripts/) ──
   Geliştirme: codes/'un üst klasörü. Kurulu sürüm (app.asar): kullanıcının seçtiği
   klasör (ayarlar > workspace); ilk açılışta sorulur. DOCUMENTX_ROOT ortam
   değişkeni her ikisini de geçersiz kılar. */
function readSettingsEarly() {
  try { return JSON.parse(fs.readFileSync(path.join(app.getPath('userData'), 'documentx-settings.json'), 'utf8')); }
  catch (e) { return {}; }
}

function isWorkspace(dir) {
  return !!dir && fs.existsSync(path.join(dir, 'projects'));
}

function resolveWorkspace() {
  if (process.env.DOCUMENTX_ROOT) return path.resolve(process.env.DOCUMENTX_ROOT);
  if (!app.isPackaged) return path.join(__dirname, '..');
  const ws = readSettingsEarly().workspace;
  return isWorkspace(ws) ? ws : '';
}

const WORKSPACE = resolveWorkspace();
const PROJECT_ROOT = WORKSPACE || app.getPath('documents');
/** Uygulama içi otomatik çeviri paneli (dil seçici ayrı dosyalara geçer). */
const TRANSLATION_UI_ENABLED = false;
const translator = TRANSLATION_UI_ENABLED
  ? require(path.join(PROJECT_ROOT, 'scripts', 'translate-core'))
  : null;
/* project-core: kurulu sürümde paketin içindeki kopya, geliştirmede scripts/ */
const projectCore = require(fs.existsSync(path.join(__dirname, 'scripts', 'project-core.js'))
  ? path.join(__dirname, 'scripts', 'project-core')
  : path.join(__dirname, '..', 'scripts', 'project-core'));
/** Test ortamı: DOCUMENTX_PROJECTS başka bir proje klasörü gösterebilir (test/ui). */
const TEST_PROJECTS = process.env.DOCUMENTX_PROJECTS ? path.resolve(process.env.DOCUMENTX_PROJECTS) : '';
const PROJECTS_DIR = TEST_PROJECTS || path.join(PROJECT_ROOT, 'projects');
const TEMPLATES_DIR = path.join(PROJECT_ROOT, 'templates');
/** PDF / HTML / DOCX çıktıları: exports/<proje>/ — codes/ altına yazılmaz (electron-reload'u tetikler). */
const EXPORTS_DIR = path.join(PROJECT_ROOT, 'exports');
const DEFAULT_LANG = 'tr';
const DEFAULT_SETTINGS = { hazirlayan: 'Fatih GÜRAL' };

/* ── Komut satırı toplu çıktı ──
   npm run export -- "<proje klasörü>" [tr,en,de] [pdf,html,docx]  */
const CLI = parseCliArgs(process.argv);

function parseCliArgs(argv) {
  const i = argv.indexOf('--export');
  if (i < 0) return null;
  const [project, langs, formats] = argv.slice(i + 1);
  const list = (s) => String(s || '').split(',').map(x => x.trim().toLowerCase()).filter(Boolean);
  return {
    project: project ? path.basename(String(project).replace(/[\\/]+$/, '')) : '',
    langs: list(langs),
    formats: list(formats).length ? list(formats) : ['pdf']
  };
}

if (!CLI && !TEST_PROJECTS && !app.isPackaged) {
  try {
    const electronPath = process.platform === 'win32'
      ? path.join(__dirname, 'node_modules', '.bin', 'electron.cmd')
      : path.join(__dirname, 'node_modules', '.bin', 'electron');

    // Sadece uygulama kaynağını izle. İçerik (.md) yazımı — özellikle çeviri
    // çıktısı — tüm pencereyi yeniden yüklemesin diye PROJECT_ROOT izlenmez.
    // Dışa aktarılan .pdf/.html/.docx dosyaları da uygulamayı yeniden başlatmasın.
    require('electron-reload')(__dirname, {
      electron: electronPath,
      awaitWriteFinish: true,
      hardResetMethod: 'exit',
      ignored: [
        /node_modules/,
        /\.git/,
        /[\/\\]\./,
        /[\/\\]\.vscode/,
        /[\/\\]\.cursor/,
        /[\/\\]BACKUP[\/\\]/,
        /[\/\\]versions[\/\\]/,
        /[\/\\]codes[\/\\]node_modules/,
        /[\/\\]codes[\/\\]test[\/\\]/,
        /\.md$/,
        /\.(pdf|docx)$/i,
        /[\/\\](?!index\.html$)[^\/\\]*\.html$/i,
        /\.translation-state\.json$/
      ]
    });
  } catch (e) {
    console.warn('electron-reload aktif değil:', e.message);
  }
}

let mainWindow;
let contentWatcher = null;
let contentWatchDebounce = null;
const contentWatchPending = new Set();
/** Uygulamanın kendi yazdığı dosyalar (yaml) — izleyici bunlar için yeniden çizim tetiklemez. */
const selfWrites = new Map();

function markSelfWrite(absPath) {
  const rel = path.relative(PROJECT_ROOT, absPath).split(path.sep).join('/');
  selfWrites.set(rel, Date.now() + 4000);
}

/** projects/, assets/, templates/ — yalnızca açık kılavuzu yeniler (tam uygulama restart değil). */
function startContentWatcher() {
  if (contentWatcher) return;

  let chokidar;
  try {
    chokidar = require('chokidar');
  } catch (e) {
    console.warn('İçerik izleyici başlatılamadı:', e.message);
    return;
  }

  const exists = (p) => {
    try { return fs.existsSync(p); } catch { return false; }
  };

  // Tüm projects/ ağacı yerine dosya türlerine göre izle (Windows EPERM riskini azaltır).
  const watchGlobs = [
    path.join(PROJECT_ROOT, 'projects', '**', '*.md'),
    path.join(PROJECT_ROOT, 'projects', '**', '*.yaml'),
    path.join(PROJECT_ROOT, 'projects', '**', '*.yml'),
    path.join(PROJECT_ROOT, 'projects', '**', '*.svg'),
    path.join(PROJECT_ROOT, 'projects', '**', '*.png'),
    path.join(PROJECT_ROOT, 'projects', '**', '*.jpg'),
    path.join(PROJECT_ROOT, 'projects', '**', '*.jpeg'),
    path.join(PROJECT_ROOT, 'projects', '**', '*.webp'),
    path.join(PROJECT_ROOT, 'projects', '*', '*DATA'),
    path.join(PROJECT_ROOT, 'assets', '**', '*'),
    path.join(PROJECT_ROOT, 'templates', '**', '*.yaml'),
    path.join(PROJECT_ROOT, 'templates', 'sozluk.yaml'),
    path.join(PROJECT_ROOT, 'templates', '**', '*.yml')
  ].filter(p => {
    const root = p.split('*')[0];
    return exists(root);
  });

  if (!watchGlobs.length) return;

  const flushContentWatch = () => {
    contentWatchDebounce = null;
    if (!contentWatchPending.size) return;
    const paths = [...contentWatchPending];
    contentWatchPending.clear();
    if (!mainWindow || mainWindow.isDestroyed()) return;
    mainWindow.webContents.send('content-changed', { paths });
  };

  const queueChange = (absPath) => {
    const rel = path.relative(PROJECT_ROOT, absPath).split(path.sep).join('/');
    if (!rel || rel.startsWith('..')) return;
    const until = selfWrites.get(rel);
    if (until) {
      if (Date.now() < until) return;
      selfWrites.delete(rel);
    }
    contentWatchPending.add(rel);
    clearTimeout(contentWatchDebounce);
    contentWatchDebounce = setTimeout(flushContentWatch, 450);
  };

  contentWatcher = chokidar.watch(watchGlobs, {
    ignored: [
      /(^|[\\/])\../,
      /node_modules/,
      /\.git/,
      /[\\/]BACKUP[\\/]/i,
      /[\\/]versions[\\/]/i,
      /[\\/]\.cursor[\\/]/,
      /[\\/]__TEST-/i,
      /\.translation-state\.json$/
    ],
    ignoreInitial: true,
    ignorePermissionErrors: true,
    awaitWriteFinish: { stabilityThreshold: 280, pollInterval: 100 },
    usePolling: process.platform === 'win32',
    interval: 500,
    binaryInterval: 800
  });

  contentWatcher
    .on('add', queueChange)
    .on('change', queueChange)
    .on('unlink', queueChange)
    .on('error', (err) => {
      if (err && err.code === 'EPERM') return;
      console.warn('İçerik izleyici:', err.message || err);
    });
}

function stopContentWatcher() {
  clearTimeout(contentWatchDebounce);
  contentWatchPending.clear();
  if (contentWatcher) {
    contentWatcher.close().catch(() => {});
    contentWatcher = null;
  }
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
      // Gizli pencerede (CLI) zamanlayıcılar ve çizim kısılmasın.
      backgroundThrottling: !CLI
    },
    frame: false,
    titleBarStyle: 'hidden',
    backgroundColor: '#0f1117',
    show: false
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Kılavuz içindeki bağlantılar uygulama penceresini başka sayfaya götürmesin;
  // web/e-posta bağlantıları varsayılan tarayıcıda açılır.
  const openOutside = (url) => {
    if (/^(https?:|mailto:)/i.test(url)) shell.openExternal(url);
  };
  mainWindow.webContents.on('will-navigate', (event, url) => {
    event.preventDefault();
    openOutside(url);
  });
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    openOutside(url);
    return { action: 'deny' };
  });

  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.control && input.type === 'mouseWheel') {
      event.preventDefault();
    }
  });

  if (CLI) {
    mainWindow.webContents.on('console-message', (e, ...legacy) => {
      const message = String((e && e.message) || legacy[1] || '');
      if (/^\[cli\]/.test(message)) console.log(message.replace(/^\[cli\]\s*/, ''));
    });
    return;
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
}

/* Kurulu sürüm, çalışma klasörü seçilmeden açıldı: klasörü sor, kaydet, yeniden başlat. */
async function askWorkspaceAndRelaunch() {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    title: 'DocumentX çalışma klasörünü seçin (içinde projects/ olan klasör)',
    properties: ['openDirectory']
  });
  if (canceled || !filePaths[0]) { app.exit(0); return; }
  if (!isWorkspace(filePaths[0])) {
    await dialog.showMessageBox({ type: 'error', message: 'Seçilen klasörde projects/ bulunamadı.', detail: filePaths[0] });
    return askWorkspaceAndRelaunch();
  }
  writeSettings({ workspace: filePaths[0] });
  app.relaunch();
  app.exit(0);
}

/* ── Otomatik güncelleme (yalnız kurulu sürüm; package.json > build.publish) ── */
let autoUpdater = null;
function initAutoUpdate() {
  if (!app.isPackaged || CLI) return;
  try {
    ({ autoUpdater } = require('electron-updater'));
  } catch (e) {
    return;
  }
  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = true;
  const send = (state, info) => {
    if (mainWindow && !mainWindow.isDestroyed()) mainWindow.webContents.send('update-status', { state, ...(info || {}) });
  };
  autoUpdater.on('update-available', (i) => send('available', { version: i.version }));
  autoUpdater.on('update-not-available', () => send('none'));
  autoUpdater.on('download-progress', (p) => send('progress', { percent: Math.round(p.percent) }));
  autoUpdater.on('update-downloaded', (i) => send('downloaded', { version: i.version }));
  autoUpdater.on('error', (e) => send('error', { message: e && e.message }));
  setTimeout(() => autoUpdater.checkForUpdates().catch(() => {}), 8000);
}

app.whenReady().then(() => {
  if (app.isPackaged && !WORKSPACE && !CLI) {
    askWorkspaceAndRelaunch();
    return;
  }
  if (CLI && !CLI.project) {
    console.error('Kullanım: npm run export -- "<proje klasörü>" [tr,en,de] [pdf,html,docx]');
    app.exit(2);
    return;
  }
  if (translator) {
    try { translator.loadEnv(PROJECT_ROOT); } catch (e) { /* .env yoksa sorun değil */ }
  }
  registerIpcHandlers();
  createWindow();
  initAutoUpdate();
  if (CLI) {
    setTimeout(() => {
      console.error('Toplu çıktı zaman aşımına uğradı (15 dk).');
      app.exit(1);
    }, 15 * 60 * 1000).unref();
    return;
  }
  if (!TEST_PROJECTS) startContentWatcher();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  stopContentWatcher();
  if (process.platform !== 'darwin') app.quit();
});

app.on('before-quit', () => {
  stopContentWatcher();
});

/* ────────────────────────────────────────────────────────────
   Uygulama ayarları (kullanıcı profili — proje dışı)
   ──────────────────────────────────────────────────────────── */

function settingsPath() {
  return path.join(app.getPath('userData'), 'documentx-settings.json');
}

function readSettings() {
  try {
    return { ...DEFAULT_SETTINGS, ...JSON.parse(fs.readFileSync(settingsPath(), 'utf8')) };
  } catch (e) {
    return { ...DEFAULT_SETTINGS };
  }
}

function writeSettings(patch) {
  const next = { ...readSettings(), ...(patch || {}) };
  fs.mkdirSync(path.dirname(settingsPath()), { recursive: true });
  fs.writeFileSync(settingsPath(), JSON.stringify(next, null, 2), 'utf8');
  return next;
}

/* ────────────────────────────────────────────────────────────
   İçerik çözümleme (yalnızca proje klasörü, dil fallback)
   ──────────────────────────────────────────────────────────── */

function safeReadYaml(p) {
  try { return yaml.load(fs.readFileSync(p, 'utf8')); } catch (e) { return null; }
}

function normLangs(x) {
  return Array.isArray(x) && x.length ? x.map(s => String(s).toLowerCase()) : [DEFAULT_LANG];
}

function pickLang(reqLang, diller) {
  const req = String(reqLang || '').toLowerCase();
  if (diller.includes(req)) return req;
  if (diller.includes(DEFAULT_LANG)) return DEFAULT_LANG;
  return diller[0] || DEFAULT_LANG;
}

/* Bir kök altındaki tüm .<dil>.md son eklerini toplar. */
function detectLangs(roots) {
  const set = new Set();
  const rx = /\.([a-z]{2})\.md$/i;
  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, e.name);
      if (e.isDirectory()) walk(abs);
      else { const m = e.name.match(rx); if (m) set.add(m[1].toLowerCase()); }
    }
  };
  roots.forEach(walk);
  if (!set.size) set.add(DEFAULT_LANG);
  return [...set].sort();
}

function listModelIds() {
  return projectCore.listModels(PROJECT_ROOT);
}

const PROJECT_DIR_SKIP = new Set(['backup']);

function listProjectDirs() {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs.readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter(d => {
      if (!d.isDirectory() || PROJECT_DIR_SKIP.has(d.name.toLowerCase())) return false;
      const dir = path.join(PROJECTS_DIR, d.name);
      if (!projectCore.findProjectYaml(dir)) return false;
      if (projectCore.isModelTemplate(dir)) return false;
      return true;
    })
    .map(d => d.name)
    .sort();
}

function listTemplateDirs() {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs.readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter(d => {
      if (!d.isDirectory() || PROJECT_DIR_SKIP.has(d.name.toLowerCase())) return false;
      return projectCore.isModelTemplate(path.join(PROJECTS_DIR, d.name));
    })
    .map(d => d.name)
    .sort();
}

function guideRoots(guide) {
  return guide.projectDir ? [guide.projectDir] : [];
}

function listGuides() {
  const templates = listTemplateDirs().map(dir => {
    const projectDir = path.join(PROJECTS_DIR, dir);
    const doc = safeReadYaml(projectCore.findProjectYaml(projectDir)) || {};
    const model = String(doc.model || dir).toLowerCase();
    const guide = { id: 'proje:' + dir, projectDir, model };
    return {
      id: guide.id,
      label: (doc.kapak && doc.kapak.baslik) || doc.proje_adi || dir.toUpperCase(),
      type: 'model',
      model: model.toUpperCase(),
      diller: detectLangs(guideRoots(guide))
    };
  });

  const projects = listProjectDirs().map(dir => {
    const projectDir = path.join(PROJECTS_DIR, dir);
    const doc = safeReadYaml(projectCore.findProjectYaml(projectDir)) || {};
    const model = String(doc.model || '').toLowerCase();
    const guide = { id: 'proje:' + dir, projectDir, model };
    return {
      id: guide.id,
      label: (doc.kapak && doc.kapak.baslik) || doc.proje_adi || dir,
      type: 'project',
      model: model.toUpperCase(),
      diller: detectLangs(guideRoots(guide))
    };
  });

  return [...templates, ...projects];
}

function guideDirName(guideId) {
  const id = String(guideId || '');
  if (!id.startsWith('proje:')) return '';
  return path.basename(id.slice('proje:'.length));
}

function guideYamlPath(guideId) {
  const dir = guideDirName(guideId);
  return dir ? projectCore.findProjectYaml(path.join(PROJECTS_DIR, dir)) : null;
}

function str(v) {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return v == null ? '' : String(v);
}

/* yaml kapak bloğu → renderer'ın beklediği düz metin alanlar. */
function normalizeKapak(k) {
  const kapak = k && typeof k === 'object' ? k : {};
  return {
    ...kapak,
    baslik: str(kapak.baslik),
    rev: str(kapak.rev),
    tarih: str(kapak.tarih),
    firma: str(kapak.firma),
    hazirlayan: str(kapak.hazirlayan),
    seri: kapak.seri === true
  };
}

function normalizeRevisions(list) {
  if (!Array.isArray(list)) return [];
  return list
    .filter(r => r && typeof r === 'object')
    .map(r => ({
      rev: str(r.rev),
      tarih: str(r.tarih),
      aciklama: r.aciklama && typeof r.aciklama === 'object' ? r.aciklama : str(r.aciklama),
      hazirlayan: str(r.hazirlayan),
      commit: str(r.commit)
    }));
}

/* Terim sözlüğü: templates/sozluk.yaml (ortak) + projects/<proje>/sozluk.yaml (projeye özel).
   Aynı TR terimi projede tekrar tanımlanırsa proje kaydı geçerlidir. */
function readGlossary(projectDir) {
  const list = (p) => {
    const doc = safeReadYaml(p);
    return doc && Array.isArray(doc.terimler) ? doc.terimler.filter(t => t && t.tr) : [];
  };
  const merged = new Map();
  [path.join(TEMPLATES_DIR, 'sozluk.yaml'), projectDir && path.join(projectDir, 'sozluk.yaml')]
    .filter(p => p && fs.existsSync(p))
    .forEach(p => list(p).forEach(t => merged.set(String(t.tr).toLocaleLowerCase('tr-TR'), t)));
  return [...merged.values()].map(t => ({
    tr: str(t.tr), en: str(t.en), de: str(t.de),
    yasak: t.yasak && typeof t.yasak === 'object' ? t.yasak : {},
    dizin: t.dizin !== false
  }));
}

/* ── Çeviri durumu (TR kaynak → diğer diller) ──
   scripts/.translation-state.json kaydı varsa içerik özeti (hash) esas alınır;
   yoksa son değişiklik zamanı: commit edilmemiş dosyada disk zamanı, değilse son commit. */
let translateCoreMod;
function translateCore() {
  if (translateCoreMod !== undefined) return translateCoreMod;
  try {
    translateCoreMod = require(path.join(PROJECT_ROOT, 'scripts', 'translate-core'));
    translateCoreMod.loadEnv(PROJECT_ROOT);
  } catch (e) {
    translateCoreMod = null;
  }
  return translateCoreMod;
}

function relRoot(abs) {
  return path.relative(PROJECT_ROOT, abs).split(path.sep).join('/');
}

function listTrSources(dir) {
  const out = [];
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const abs = path.join(d, e.name);
      if (e.isDirectory()) { if (!/^(assets|backup)$/i.test(e.name)) walk(abs); }
      else if (/\.tr\.md$/i.test(e.name)) out.push(abs);
    }
  };
  if (fs.existsSync(dir)) walk(dir);
  return out.sort();
}

function translationStatus(guide) {
  const projectRel = relRoot(guide.projectDir);
  const commits = gitInfo.lastCommitTimes(PROJECT_ROOT, projectRel);
  const dirty = gitInfo.dirtyFiles(PROJECT_ROOT, projectRel);
  const tc = translateCore();
  const state = tc ? tc.loadState() : {};
  const BANNER = /^<!--[^>]*ÇEVİRİ GEREKLİ/m;
  const files = [];
  for (const srcAbs of listTrSources(guide.projectDir)) {
    const src = relRoot(srcAbs);
    const srcText = fs.readFileSync(srcAbs, 'utf8');
    if (!srcText.trim()) continue;
    const trTime = gitInfo.changeTime(PROJECT_ROOT, src, commits, dirty);
    for (const lang of guide.diller.filter(l => l !== 'tr')) {
      const destAbs = srcAbs.replace(/\.tr\.md$/i, `.${lang}.md`);
      const target = relRoot(destAbs);
      let status;
      let tTime = 0;
      const text = fs.existsSync(destAbs) ? fs.readFileSync(destAbs, 'utf8') : '';
      if (!text.trim()) status = 'yok';
      else if (BANNER.test(text)) status = 'placeholder';
      else if (tc && state[target]) status = state[target] === tc.hash(tc.readSourceClean(srcAbs)) ? 'guncel' : 'eskimis';
      else {
        tTime = gitInfo.changeTime(PROJECT_ROOT, target, commits, dirty);
        status = trTime > tTime + 60 ? 'eskimis' : 'guncel';
      }
      files.push({ src, target, lang, status, trTime, tTime });
    }
  }
  return files;
}

/* ── Görseller: rapor, çıktı optimizasyonu, işaretler (.marks.json) ── */
const IMG_RX = /!\[[^\]]*\]\(([^)\s]+)/g;
const IMG_EXT = /\.(png|jpe?g|webp|gif|svg)$/i;
const OPT_MAX_SIDE = 2000;
const OPT_MIN_BYTES = 600 * 1024;

/* md içindeki görsel yolu → diskteki dosya (renderer'daki resolveImageSrc ile aynı kural) */
function diskImagePath(src, projectDir) {
  let s = String(src || '').replace(/\\/g, '/');
  try { s = decodeURIComponent(s); } catch (e) { /* olduğu gibi */ }
  const m = s.match(/(?:^|\/)assets\/(.+)$/);
  if (!m) return path.resolve(projectDir, s);
  return /^(labels|logos|iso7010)\//i.test(m[1])
    ? path.join(PROJECT_ROOT, 'assets', m[1])
    : path.join(projectDir, 'assets', m[1]);
}

function walkFiles(dir, filter, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) walkFiles(abs, filter, out);
    else if (filter(e.name)) out.push(abs);
  }
  return out;
}

function assetReport(projectDir) {
  const refs = new Map();      // abs → [{ file, line }]
  for (const md of walkMd(projectDir)) {
    fs.readFileSync(md, 'utf8').split(/\r?\n/).forEach((line, i) => {
      IMG_RX.lastIndex = 0;
      let m;
      while ((m = IMG_RX.exec(line))) {
        if (/^(https?:|data:)/i.test(m[1])) continue;
        const abs = diskImagePath(m[1], projectDir);
        if (!refs.has(abs)) refs.set(abs, []);
        refs.get(abs).push({ file: relRoot(md), line: i + 1, src: m[1] });
      }
    });
  }
  const files = walkFiles(path.join(projectDir, 'assets'), n => IMG_EXT.test(n));
  const missing = [];
  refs.forEach((list, abs) => { if (!fs.existsSync(abs)) missing.push({ rel: relRoot(abs), refs: list }); });
  const unused = [];
  const large = [];
  files.forEach(abs => {
    const st = fs.statSync(abs);
    const rel = relRoot(abs);
    if (!refs.has(abs)) unused.push({ rel, size: st.size });
    if (/\.svg$/i.test(abs)) return;
    const size = nativeImage.createFromPath(abs).getSize();
    if (st.size > 1.5 * 1024 * 1024 || Math.max(size.width, size.height) > 2500) {
      large.push({ rel, size: st.size, w: size.width, h: size.height, marks: fs.existsSync(abs + '.marks.json') });
    }
  });
  const used = [...refs.keys()].filter(abs => fs.existsSync(abs) && !/\.svg$/i.test(abs)).map(abs => ({
    rel: relRoot(abs), refs: refs.get(abs).length, marks: fs.existsSync(abs + '.marks.json')
  }));
  return { missing, unused, large, used, refCount: refs.size, fileCount: files.length };
}

/* Çıktı için küçültülmüş kopya (önbellek: userData/imgcache). Küçülmüyorsa null. */
function optimizedImage(abs) {
  try {
    if (!fs.existsSync(abs) || /\.(svg|gif)$/i.test(abs)) return null;
    const st = fs.statSync(abs);
    const png = /\.png$/i.test(abs);
    const key = crypto.createHash('sha1').update(`${abs}|${st.mtimeMs}|${st.size}|${OPT_MAX_SIDE}`).digest('hex').slice(0, 20);
    const dir = path.join(app.getPath('userData'), 'imgcache');
    const out = path.join(dir, key + (png ? '.png' : '.jpg'));
    if (fs.existsSync(out)) return { path: out, mime: png ? 'png' : 'jpeg' };
    if (fs.existsSync(out + '.skip')) return null;
    const img = nativeImage.createFromPath(abs);
    if (img.isEmpty()) return null;
    const { width, height } = img.getSize();
    const big = Math.max(width, height) > OPT_MAX_SIDE;
    if (!big && st.size <= OPT_MIN_BYTES) return null;
    const resized = big
      ? img.resize(width >= height ? { width: OPT_MAX_SIDE, quality: 'good' } : { height: OPT_MAX_SIDE, quality: 'good' })
      : img;
    const buf = png ? resized.toPNG() : resized.toJPEG(85);
    fs.mkdirSync(dir, { recursive: true });
    if (buf.length >= st.size * 0.9) {
      fs.writeFileSync(out + '.skip', '');
      return null;
    }
    fs.writeFileSync(out, buf);
    return { path: out, mime: png ? 'png' : 'jpeg' };
  } catch (e) {
    return null;
  }
}

/* Proje görsellerinin işaretleri: { 'projects/X/assets/a.png': [{ x, y, n }] } */
function readMarks(projectDir) {
  const out = {};
  walkFiles(path.join(projectDir, 'assets'), n => /\.marks\.json$/i.test(n)).forEach(abs => {
    try {
      const doc = JSON.parse(fs.readFileSync(abs, 'utf8'));
      const list = Array.isArray(doc) ? doc : (doc && Array.isArray(doc.markers) ? doc.markers : []);
      out[relRoot(abs.replace(/\.marks\.json$/i, ''))] = list
        .filter(m => m && Number.isFinite(+m.x) && Number.isFinite(+m.y))
        .map(m => ({ x: +m.x, y: +m.y, n: String(m.n == null ? '' : m.n) }));
    } catch (e) { /* bozuk işaret dosyası yok sayılır */ }
  });
  return out;
}

/* ── Proje panosu: tüm kılavuzların durum özeti ── */
const MISSING_RX = /\[(?:EKS[İI]K|MISSING|FEHLT)[^\]]*\]/giu;

function walkMd(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) { if (!/^(assets|backup)$/i.test(e.name)) walkMd(abs, out); }
    else if (/\.[a-z]{2}\.md$/i.test(e.name)) out.push(abs);
  }
  return out;
}

function dashboardRow(dir, type) {
  const projectDir = path.join(PROJECTS_DIR, dir);
  const guide = resolveGuide('proje:' + dir);
  if (!guide) return null;
  const langs = {};
  let lastEdit = 0;
  for (const abs of walkMd(projectDir)) {
    const lang = abs.match(/\.([a-z]{2})\.md$/i)[1].toLowerCase();
    const text = fs.readFileSync(abs, 'utf8');
    const L = langs[lang] || (langs[lang] = { files: 0, filled: 0, missing: 0 });
    L.files++;
    if (text.trim() && !/ÇEVİRİ GEREKLİ/.test(text)) L.filled++;
    L.missing += (text.match(MISSING_RX) || []).length;
    try { lastEdit = Math.max(lastEdit, fs.statSync(abs).mtimeMs); } catch (e) { /* yok say */ }
  }
  const trFilled = (langs.tr && langs.tr.filled) || 0;
  Object.values(langs).forEach(L => { L.complete = trFilled ? Math.min(100, Math.round(L.filled / trFilled * 100)) : 0; });

  const data = dataFile.readData(projectDir, PROJECT_ROOT);
  let dataStat = null;
  if (data) {
    const all = Object.values(data.blocks).flatMap(b => b.entries);
    const filled = all.filter(e => e.value.trim() && !/EKS[İI]K/i.test(e.value)).length;
    dataStat = { total: all.length, filled };
  }

  let stale = 0;
  try { stale = translationStatus(guide).filter(f => f.status === 'eskimis' || f.status === 'placeholder').length; } catch (e) { /* git yok */ }

  const expDir = path.join(EXPORTS_DIR, dir);
  let lastExport = 0;
  let exportCount = 0;
  if (fs.existsSync(expDir)) {
    fs.readdirSync(expDir).forEach(f => {
      try {
        const st = fs.statSync(path.join(expDir, f));
        if (st.isFile()) { exportCount++; lastExport = Math.max(lastExport, st.mtimeMs); }
      } catch (e) { /* yok say */ }
    });
  }

  return {
    id: 'proje:' + dir,
    dir,
    type,
    label: guide.label,
    model: guide.model.toUpperCase(),
    firma: guide.kapak.firma || '',
    rev: guide.kapak.rev || '',
    tarih: guide.kapak.tarih || '',
    diller: guide.diller,
    langs,
    data: dataStat,
    stale,
    revisions: guide.revizyonlar.length,
    lastEdit: Math.round(lastEdit / 1000),
    lastExport: Math.round(lastExport / 1000),
    exportCount
  };
}

/* assets/iso7010/<KOD>.svg|png → { KOD: 'assets/iso7010/KOD.svg' } (svg öncelikli). */
function listIsoSymbols() {
  const dir = path.join(PROJECT_ROOT, 'assets', 'iso7010');
  const out = {};
  if (!fs.existsSync(dir)) return out;
  fs.readdirSync(dir).sort((a, b) => (/\.svg$/i.test(a) ? 1 : 0) - (/\.svg$/i.test(b) ? 1 : 0)).forEach(name => {
    const m = name.match(/^([WPMEF]\d{3})\.(svg|png|jpe?g)$/i);
    if (m) out[m[1].toUpperCase()] = 'assets/iso7010/' + name;
  });
  return out;
}

/* guideId → { type, label, model, projectDir, bolumler, diller } */
function resolveGuide(guideId) {
  const dir = guideDirName(guideId);
  if (!dir) return null;
  const projectDir = path.join(PROJECTS_DIR, dir);
  const yp = projectCore.findProjectYaml(projectDir);
  if (!yp) return null;

  const doc = safeReadYaml(yp) || {};
  const extendsRel = doc.extends || 'templates/base.yaml';
  const base = safeReadYaml(path.join(PROJECT_ROOT, extendsRel)) || {};
  const isTemplate = projectCore.isModelTemplate(projectDir);
  const guide = {
    type: isTemplate ? 'model' : 'project',
    label: (doc.kapak && doc.kapak.baslik) || doc.proje_adi || dir,
    model: String(doc.model || dir).toLowerCase(),
    kapak: normalizeKapak(doc.kapak),
    revizyonlar: normalizeRevisions(doc.revizyonlar),
    cikti: doc.cikti && typeof doc.cikti === 'object' ? doc.cikti : {},
    projectDir,
    bolumler: Array.isArray(doc.bolumler) ? doc.bolumler : (Array.isArray(base.bolumler) ? base.bolumler : []),
    diller: normLangs(doc.diller)
  };
  guide.diller = [...new Set(guide.diller.concat(detectLangs(guideRoots(guide))))];
  return guide;
}

/* Kılavuz, seçili dilin (sağ üst dil butonu) dosyalarından derlenir.
   tr → <base>.tr.md, en → <base>.en.md, de → <base>.de.md.
   Diller ASLA karışmaz: seçili dilin dosyası yoksa/boşsa o bölüm boş kalır,
   başka dile veya eski (dilsiz) .md dosyasına düşülmez.
   → { content, file } (file: PROJECT_ROOT'a göre göreli yol, kaynağa atlama için) */
function resolveContent(roots, folderParts, base, lang) {
  if (!base) return { content: '', file: '' };
  const L = String(lang || DEFAULT_LANG).toLowerCase();
  for (const root of roots) {
    const p = path.join(root, ...folderParts, `${base}.${L}.md`);
    if (fs.existsSync(p)) {
      const c = fs.readFileSync(p, 'utf8');
      if (c.trim()) {
        return { content: c, file: path.relative(PROJECT_ROOT, p).split(path.sep).join('/') };
      }
    }
  }
  return { content: '', file: '' };
}

function buildTree(items, dirParts, roots, lang) {
  const nodes = [];
  if (!Array.isArray(items)) return nodes;

  for (const it of items) {
    if (!it || it.aktif === false) continue;

    const folder = dirParts.concat(String(it.id));
    const { content, file } = resolveContent(roots, folder, it.dosya ? String(it.dosya) : '', lang);
    const children = buildTree(it.alt_bolumler, folder, roots, lang);

    if ((content && content.trim()) || children.length) {
      nodes.push({
        id: String(it.id),
        dosya: it.dosya ? String(it.dosya) : '',
        content: content || '',
        file,
        children
      });
    }
  }
  return nodes;
}

/* ────────────────────────────────────────────────────────────
   Dışa aktarım hedefleri: exports/<proje>/<proje>_<DİL>_Rev<xx>.<uzantı>
   ──────────────────────────────────────────────────────────── */

function safeFileName(s) {
  return String(s || '').replace(/[<>:"/\\|?*\x00-\x1f]/g, '').trim();
}

function exportTarget(opts, ext) {
  const dir = safeFileName(guideDirName(opts && opts.guideId)) || 'klavuz';
  const lang = String((opts && opts.lang) || DEFAULT_LANG).toUpperCase();
  const rev = safeFileName(opts && opts.rev) || 'xx';
  return path.join(EXPORTS_DIR, dir, `${dir}_${lang}_Rev${rev}.${ext}`);
}

async function pickTarget(opts, ext, filters) {
  const def = exportTarget(opts, ext);
  fs.mkdirSync(path.dirname(def), { recursive: true });
  if (opts && opts.silent) return def;
  const { canceled, filePath } = await dialog.showSaveDialog(mainWindow, { defaultPath: def, filters });
  return canceled || !filePath ? null : filePath;
}

function escapeHtmlText(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function registerIpcHandlers() {
  [
    'list-guides', 'get-guide', 'read-asset', 'print-pdf', 'export-html', 'export-docx',
    'tr-key', 'tr-list', 'tr-one', 'list-models', 'create-project', 'save-guide-meta',
    'get-settings', 'set-settings', 'open-source', 'open-exports', 'get-cli-job',
    'translation-status', 'translate-file', 'git-log', 'changed-lines', 'dashboard',
    'read-file', 'write-file', 'asset-report', 'optimize-images', 'export-web',
    'app-info', 'choose-workspace', 'check-updates'
  ].forEach(ch => ipcMain.removeHandler(ch));
  ['minimize-window', 'maximize-window', 'close-window', 'cli-done', 'install-update']
    .forEach(ch => ipcMain.removeAllListeners(ch));

  ipcMain.on('minimize-window', () => mainWindow && mainWindow.minimize());
  ipcMain.on('maximize-window', () => {
    if (!mainWindow) return;
    if (mainWindow.isMaximized()) mainWindow.unmaximize();
    else mainWindow.maximize();
  });
  ipcMain.on('close-window', () => mainWindow && mainWindow.close());

  ipcMain.handle('list-guides', async () => listGuides());

  ipcMain.handle('list-models', async () => listModelIds());

  ipcMain.handle('create-project', async (event, name, model, langs) => {
    try {
      const r = projectCore.createProject(PROJECT_ROOT, name, model, langs);
      return r;
    } catch (e) {
      return { ok: false, error: e.message };
    }
  });

  ipcMain.handle('get-guide', async (event, guideId, reqLang) => {
    const guide = resolveGuide(guideId);
    if (!guide) return { ok: false, error: 'no-guide', id: guideId };

    const lang = pickLang(reqLang, guide.diller);
    const roots = guideRoots(guide);
    const tree = buildTree(guide.bolumler, [], roots, lang);

    const projectRel = guide.projectDir
      ? path.relative(PROJECT_ROOT, guide.projectDir).split(path.sep).join('/')
      : '';

    return {
      ok: true,
      id: guideId,
      label: guide.label,
      model: (guide.model || '').toUpperCase(),
      kapak: guide.kapak || {},
      revizyonlar: guide.revizyonlar,
      cikti: guide.cikti,
      data: dataFile.readData(guide.projectDir, PROJECT_ROOT),
      glossary: readGlossary(guide.projectDir),
      symbols: listIsoSymbols(),
      marks: readMarks(guide.projectDir),
      type: guide.type,
      projectRel,
      diller: guide.diller,
      lang,
      tree
    };
  });

  /* Kapak meta (rev, tarih, firma, hazırlayan), çıktı seçenekleri ve revizyon
     geçmişi project.yaml'a yazılır; yalnızca ilgili üst düzey blok değişir. */
  ipcMain.handle('save-guide-meta', async (event, guideId, patch) => {
    try {
      const yp = guideYamlPath(guideId);
      if (!yp) return { ok: false, error: 'Proje yaml dosyası bulunamadı' };
      const allowed = {};
      for (const key of ['kapak', 'cikti', 'revizyonlar']) {
        if (patch && Object.prototype.hasOwnProperty.call(patch, key)) allowed[key] = patch[key];
      }
      markSelfWrite(yp);
      const changed = yamlEdit.updateYamlFile(yp, allowed);
      return { ok: true, changed };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  });

  ipcMain.handle('translation-status', async (event, guideId) => {
    try {
      const guide = resolveGuide(guideId);
      if (!guide) return { ok: false, error: 'no-guide' };
      const tc = translateCore();
      return { ok: true, translator: !!(tc && tc.keyStatus().ready), files: translationStatus(guide) };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  });

  /* TR kaynağını makine çevirisiyle yeniden çevirir (hedef dosyanın üzerine yazar). */
  ipcMain.handle('translate-file', async (event, srcRel, lang) => {
    const tc = translateCore();
    if (!tc || !tc.keyStatus().ready) return { ok: false, error: 'Çeviri anahtarı yok (.env: GEMINI_API_KEY veya DEEPL_API_KEY)' };
    const abs = path.resolve(PROJECT_ROOT, String(srcRel || ''));
    if (!abs.startsWith(PROJECTS_DIR + path.sep) || !/\.tr\.md$/i.test(abs)) return { ok: false, error: 'Geçersiz kaynak' };
    try {
      return await tc.translateOne(PROJECT_ROOT, relRoot(abs), String(lang).toLowerCase(), tc.defaultProvider());
    } catch (e) {
      return { ok: false, error: e.message };
    }
  });

  /* Revizyon farkı: projeye dokunan commit'ler ve ref'e göre değişen satırlar. */
  ipcMain.handle('git-log', async (event, guideId) => {
    const dir = guideDirName(guideId);
    if (!dir) return { ok: false };
    const rel = relRoot(path.join(PROJECTS_DIR, dir));
    if (!gitInfo.available(PROJECT_ROOT)) return { ok: false, error: 'git bulunamadı' };
    return { ok: true, head: gitInfo.headCommit(PROJECT_ROOT), commits: gitInfo.logForPath(PROJECT_ROOT, rel) };
  });

  ipcMain.handle('changed-lines', async (event, guideId, ref) => {
    const dir = guideDirName(guideId);
    if (!dir || !ref || !/^[0-9a-f]{4,40}$|^HEAD(~\d+)?$/i.test(String(ref))) return { ok: false, error: 'geçersiz ref' };
    const map = gitInfo.changedLines(PROJECT_ROOT, String(ref), relRoot(path.join(PROJECTS_DIR, dir)));
    if (!map) return { ok: false, error: 'git diff başarısız' };
    const files = {};
    map.forEach((set, rel) => { files[rel] = [...set]; });
    return { ok: true, files };
  });

  /* Uygulama içi düzenleyici: yalnızca proje klasöründeki metin dosyaları. */
  const editablePath = (rel) => {
    const abs = path.resolve(PROJECT_ROOT, String(rel || ''));
    const inProjects = abs.startsWith(PROJECTS_DIR + path.sep);
    const okType = /\.md$/i.test(abs) || /(^|\s)DATA$/.test(path.basename(abs)) ||
      /sozluk\.ya?ml$/i.test(abs) || /\.marks\.json$/i.test(abs);
    return inProjects && okType ? abs : null;
  };

  ipcMain.handle('read-file', async (event, rel) => {
    const abs = editablePath(rel);
    if (!abs) return { ok: false, error: 'Bu dosya düzenlenemez' };
    if (!fs.existsSync(abs)) return { ok: true, text: '', mtime: 0, exists: false };
    return { ok: true, text: fs.readFileSync(abs, 'utf8'), mtime: fs.statSync(abs).mtimeMs, exists: true };
  });

  ipcMain.handle('write-file', async (event, rel, text, baseMtime, force) => {
    const abs = editablePath(rel);
    if (!abs) return { ok: false, error: 'Bu dosya düzenlenemez' };
    try {
      if (!force && baseMtime && fs.existsSync(abs) && Math.abs(fs.statSync(abs).mtimeMs - baseMtime) > 1) {
        return { ok: false, conflict: true, error: 'Dosya siz düzenlerken diskte değişti' };
      }
      fs.mkdirSync(path.dirname(abs), { recursive: true });
      fs.writeFileSync(abs, String(text), 'utf8');
      return { ok: true, mtime: fs.statSync(abs).mtimeMs };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  });

  ipcMain.handle('asset-report', async (event, guideId) => {
    const dir = guideDirName(guideId);
    if (!dir) return { ok: false, error: 'no-guide' };
    try { return { ok: true, ...assetReport(path.join(PROJECTS_DIR, dir)) }; }
    catch (e) { return { ok: false, error: e.message }; }
  });

  /* PDF öncesi: renderer'daki görsel yolları → küçültülmüş kopyanın file:// adresi */
  ipcMain.handle('optimize-images', async (event, srcs) => {
    const map = {};
    (Array.isArray(srcs) ? srcs : []).forEach(src => {
      const abs = normalizeImagePathForDisk(src);
      const opt = abs && optimizedImage(abs);
      if (opt) map[src] = pathToFileURL(opt.path).href;
    });
    return map;
  });

  ipcMain.handle('dashboard', async () => {
    try {
      const rows = [
        ...listProjectDirs().map(d => dashboardRow(d, 'project')),
        ...listTemplateDirs().map(d => dashboardRow(d, 'model'))
      ].filter(Boolean);
      return { ok: true, rows };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  });

  ipcMain.handle('get-settings', async () => readSettings());

  /* Görsellerin taban adresi: geliştirmede codes/'a göre göreli ('../'),
     kurulu sürümde çalışma klasörünün file:// adresi. */
  ipcMain.handle('app-info', async () => ({
    version: app.getVersion(),
    packaged: app.isPackaged,
    workspace: PROJECT_ROOT,
    assetBase: app.isPackaged || process.env.DOCUMENTX_ROOT ? pathToFileURL(PROJECT_ROOT).href.replace(/\/?$/, '/') : '../'
  }));

  ipcMain.handle('choose-workspace', async () => {
    const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
      title: 'DocumentX çalışma klasörü (içinde projects/ olan klasör)',
      defaultPath: PROJECT_ROOT,
      properties: ['openDirectory']
    });
    if (canceled || !filePaths[0]) return { ok: false };
    if (!isWorkspace(filePaths[0])) return { ok: false, error: 'Seçilen klasörde projects/ yok' };
    writeSettings({ workspace: filePaths[0] });
    app.relaunch();
    app.exit(0);
    return { ok: true };
  });

  ipcMain.handle('check-updates', async () => {
    if (!autoUpdater) return { ok: false, error: app.isPackaged ? 'Güncelleme servisi yok' : 'Geliştirme sürümünde güncelleme denetlenmez' };
    try { await autoUpdater.checkForUpdates(); return { ok: true }; }
    catch (e) { return { ok: false, error: e.message }; }
  });
  ipcMain.on('install-update', () => { if (autoUpdater) autoUpdater.quitAndInstall(); });
  ipcMain.handle('set-settings', async (event, patch) => {
    try { return { ok: true, settings: writeSettings(patch) }; }
    catch (e) { return { ok: false, error: e.message }; }
  });

  /* Kaynağa atlama: .md dosyasını VS Code'da ilgili satırda açar; `code` yoksa varsayılan düzenleyici. */
  ipcMain.handle('open-source', async (event, rel, line) => {
    const abs = path.resolve(PROJECT_ROOT, String(rel || ''));
    if (!abs.startsWith(PROJECT_ROOT + path.sep) || !fs.existsSync(abs)) {
      return { ok: false, error: 'Kaynak dosya bulunamadı' };
    }
    const ln = Math.max(1, parseInt(line, 10) || 1);
    return new Promise((resolve) => {
      let settled = false;
      const fallback = async () => {
        if (settled) return;
        settled = true;
        const err = await shell.openPath(abs);
        resolve(err ? { ok: false, error: err } : { ok: true, fallback: true });
      };
      try {
        const child = spawn(`code -g "${abs}:${ln}"`, { shell: true, windowsHide: true });
        child.on('error', fallback);
        child.on('exit', (code) => {
          if (code !== 0) { fallback(); return; }
          if (!settled) { settled = true; resolve({ ok: true }); }
        });
      } catch (e) {
        fallback();
      }
    });
  });

  ipcMain.handle('open-exports', async (event, guideId) => {
    const dir = path.dirname(exportTarget({ guideId }, 'pdf'));
    fs.mkdirSync(dir, { recursive: true });
    const err = await shell.openPath(dir);
    return err ? { ok: false, error: err } : { ok: true, dir };
  });

  if (TRANSLATION_UI_ENABLED) {
    ipcMain.handle('tr-key', async () => {
      try { return translator.keyStatus(); }
      catch (e) { return { ready: false, error: e.message }; }
    });

    ipcMain.handle('tr-list', async (event, langs) => {
      try {
        const list = Array.isArray(langs) ? langs : [langs || 'en'];
        return { ok: true, tree: translator.buildFileTree(PROJECT_ROOT, list) };
      } catch (e) { return { ok: false, error: e.message }; }
    });

    ipcMain.handle('tr-one', async (event, srcRel, lang, provider) => {
      try {
        const r = await translator.translateOne(
          PROJECT_ROOT, String(srcRel), String(lang).toLowerCase(),
          provider || translator.defaultProvider()
        );
        return r;
      } catch (e) {
        return { ok: false, rel: srcRel, error: e.message };
      }
    });
  }

  ipcMain.handle('read-asset', async (event, name) => {
    try {
      const safe = path.basename(String(name));
      const assetPath = path.join(PROJECT_ROOT, 'assets', safe);
      if (!fs.existsSync(assetPath)) return null;
      const ext = path.extname(safe).slice(1).toLowerCase();
      const mime = ext === 'jpg' ? 'jpeg' : ext;
      const b64 = fs.readFileSync(assetPath).toString('base64');
      return `data:image/${mime};base64,${b64}`;
    } catch (e) {
      return null;
    }
  });

  /* opts: { guideId, lang, rev, silent, pageSize, meta, pdfa }
     silent: diyalog yok, exports/ altına yaz (toplu çıktı). */
  ipcMain.handle('print-pdf', async (event, opts = {}) => {
    const filePath = await pickTarget(opts, 'pdf', [{ name: 'PDF', extensions: ['pdf'] }]);
    if (!filePath) return { success: false };

    try {
      const raw = await mainWindow.webContents.printToPDF({
        printBackground: true,
        pageSize: ['A4', 'A5', 'Letter'].includes(opts.pageSize) ? opts.pageSize : 'A4',
        margins: { top: 0, bottom: 0, left: 0, right: 0 },
        preferCSSPageSize: true,
        // Başlıklardan PDF yer imleri (sol panel bölüm ağacı) + erişilebilir etiketli PDF
        generateDocumentOutline: true,
        generateTaggedPDF: true
      });
      // Meta veri (başlık, yazar, konu, anahtar kelimeler, dil) + isteğe bağlı PDF/A-2b hazırlığı
      let data = raw;
      let warning = '';
      try {
        const post = await postProcessPdf(raw, opts.meta || {}, { pdfa: !!opts.pdfa });
        data = post.buffer;
        warning = post.warning;
      } catch (e) {
        warning = 'Meta veri eklenemedi: ' + e.message;
      }
      fs.writeFileSync(filePath, data);
      return { success: true, filePath, warning };
    } catch (e) {
      return { success: false, error: e.message };
    }
  });

  ipcMain.handle('export-html', async (event, payload = {}) => {
    const bodyHtml = payload.bodyHtml || '';
    const title = payload.title || 'Kullanım Kılavuzu';

    const filePath = await pickTarget(payload, 'html', [{ name: 'HTML', extensions: ['html'] }]);
    if (!filePath) return { success: false };

    try {
      const css = ['html-export.css', 'doc-content.css']
        .map(f => path.join(__dirname, f))
        .filter(p => fs.existsSync(p))
        .map(p => fs.readFileSync(p, 'utf8'))
        .join('\n');
      const inlined = inlineImagesToBase64(bodyHtml, { optimize: payload.optimize !== false });
      const lang = safeFileName(payload.lang || DEFAULT_LANG).toLowerCase();

      const fullHtml = `<!DOCTYPE html>
<html lang="${lang}" class="html-export">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtmlText(title)}</title>
  <style>${css}</style>
</head>
<body class="html-export">
${inlined}
<script>
document.addEventListener('click', function(evt) {
  var link = evt.target.closest('a[data-goto]');
  if (!link) return;
  var target = null;
  try { target = document.querySelector(link.getAttribute('data-goto')); } catch (e) { target = null; }
  if (!target) return;
  evt.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
</script>
</body>
</html>`;

      fs.writeFileSync(filePath, fullHtml, 'utf8');
      return { success: true, filePath };
    } catch (e) {
      return { success: false, error: e.message };
    }
  });

  /* Etkileşimli web kılavuzu: payload { guideId, rev, silent, langs: [{ lang, title, html }], defaultLang, brandColor, optimize } */
  ipcMain.handle('export-web', async (event, payload = {}) => {
    const filePath = await pickTarget({ ...payload, lang: 'WEB' }, 'html', [{ name: 'HTML', extensions: ['html'] }]);
    if (!filePath) return { success: false };
    try {
      const css = ['html-export.css', 'doc-content.css']
        .map(f => path.join(__dirname, f))
        .filter(p => fs.existsSync(p))
        .map(p => fs.readFileSync(p, 'utf8'))
        .join('\n');
      const html = buildWebManual({
        langs: payload.langs || [],
        defaultLang: payload.defaultLang || DEFAULT_LANG,
        brandColor: payload.brandColor,
        css,
        toDataUri: (src) => imageDataUri(src, { optimize: payload.optimize !== false })
      });
      fs.writeFileSync(filePath, html, 'utf8');
      return { success: true, filePath };
    } catch (e) {
      return { success: false, error: e.message };
    }
  });

  /* payload: { guideId, lang, rev, silent, title, html, headerText, footerText } */
  ipcMain.handle('export-docx', async (event, payload = {}) => {
    const filePath = await pickTarget(payload, 'docx', [{ name: 'Word', extensions: ['docx'] }]);
    if (!filePath) return { success: false };
    try {
      const HTMLtoDOCX = require('html-to-docx');
      // html-to-docx yalnızca data URI görselleri işler; diskte bulunamayan görsel atlanır.
      const html = inlineImagesToBase64(payload.html || '', { optimize: payload.optimize !== false })
        .replace(/<img\b(?![^>]*\bsrc="data:)[^>]*>/gi, '');
      const header = `<p style="font-size:9pt;color:#555555">${escapeHtmlText(payload.headerText)}</p>`;
      const footer = `<p style="font-size:9pt;color:#555555">${escapeHtmlText(payload.footerText)}</p>`;
      const buf = await HTMLtoDOCX(`<!DOCTYPE html><html><body>${html}</body></html>`, header, {
        title: payload.title || '',
        creator: payload.author || '',
        orientation: 'portrait',
        pageSize: { width: 11906, height: 16838 },          // A4 (twip)
        margins: { top: 1418, right: 1134, bottom: 1418, left: 1134, header: 567, footer: 567, gutter: 0 },
        font: 'Calibri',
        fontSize: 20,                                         // 10 pt (yarım punto)
        header: true,
        footer: true,
        pageNumber: true,
        skipFirstHeaderFooter: true,
        table: { row: { cantSplit: true } },
        lang: { tr: 'tr-TR', en: 'en-US', de: 'de-DE' }[String(payload.lang || '').toLowerCase()] || 'tr-TR'
      }, footer);
      fs.writeFileSync(filePath, buf);
      return { success: true, filePath };
    } catch (e) {
      return { success: false, error: e.message };
    }
  });

  /* Komut satırı modu: renderer işi buradan alır, bitince cli-done gönderir. */
  ipcMain.handle('get-cli-job', async () => {
    if (!CLI) return null;
    return { guideId: 'proje:' + CLI.project, langs: CLI.langs, formats: CLI.formats };
  });

  ipcMain.on('cli-done', (event, result) => {
    if (!CLI) return;
    const r = result || {};
    (r.files || []).forEach(f => console.log('  ✓ ' + f));
    (r.errors || []).forEach(e => console.error('  ✗ ' + e));
    app.exit(r.ok ? 0 : 1);
  });
}

function normalizeImagePathForDisk(src) {
  if (/^data:/i.test(src)) return null;
  if (/^file:/i.test(src)) {
    try { return require('url').fileURLToPath(src); } catch (e) { return null; }
  }
  let s = decodeURIComponent(String(src)).replace(/\\/g, '/');
  if (s.startsWith('../../assets/')) {
    s = '../assets/' + s.slice('../../assets/'.length);
  } else if (!s.startsWith('../') && s.startsWith('assets/')) {
    s = '../' + s;
  }
  // '../x' = çalışma klasörü/x (codes/ geliştirmede kökün bir altıdır)
  if (s.startsWith('../')) return path.resolve(PROJECT_ROOT, s.slice(3));
  return path.resolve(__dirname, s);
}

/* Renderer'daki görsel yolu → data URI (opts.optimize: küçültülmüş kopya). Bulunamazsa null. */
function imageDataUri(src, opts = {}) {
  try {
    let abs = normalizeImagePathForDisk(String(src).replace(/&amp;/g, '&'));
    if (!abs || !fs.existsSync(abs)) return null;
    const opt = opts.optimize ? optimizedImage(abs) : null;
    if (opt) abs = opt.path;
    const ext = path.extname(abs).slice(1).toLowerCase();
    const mime = ext === 'svg' ? 'svg+xml' : (ext === 'jpg' ? 'jpeg' : ext);
    return `data:image/${mime};base64,${fs.readFileSync(abs).toString('base64')}`;
  } catch (e) {
    return null;
  }
}

function inlineImagesToBase64(html, opts = {}) {
  return html.replace(/<img\b[^>]*\bsrc="([^"]+)"[^>]*>/gi, (tag, src) => {
    if (/^data:/i.test(src)) return tag;
    const uri = imageDataUri(src, opts);
    return uri ? tag.replace(src, uri) : tag;
  });
}
