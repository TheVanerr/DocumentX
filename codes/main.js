const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

const PROJECT_ROOT = path.join(__dirname, '..');
/** Uygulama içi otomatik çeviri paneli (dil seçici ayrı dosyalara geçer). */
const TRANSLATION_UI_ENABLED = false;
const translator = TRANSLATION_UI_ENABLED
  ? require(path.join(PROJECT_ROOT, 'scripts', 'translate-core'))
  : null;
const projectCore = require(path.join(PROJECT_ROOT, 'scripts', 'project-core'));
const PROJECTS_DIR = path.join(PROJECT_ROOT, 'projects');
const TEMPLATES_DIR = path.join(PROJECT_ROOT, 'templates');
const DEFAULT_LANG = 'tr';

try {
  const electronPath = process.platform === 'win32'
    ? path.join(__dirname, 'node_modules', '.bin', 'electron.cmd')
    : path.join(__dirname, 'node_modules', '.bin', 'electron');

  // Sadece uygulama kaynağını izle. İçerik (.md) yazımı — özellikle çeviri
  // çıktısı — tüm pencereyi yeniden yüklemesin diye PROJECT_ROOT izlenmez.
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
      /\.md$/,
      /\.translation-state\.json$/
    ]
  });
} catch (e) {
  console.warn('electron-reload aktif değil:', e.message);
}

let mainWindow;
let contentWatcher = null;
let contentWatchDebounce = null;
const contentWatchPending = new Set();

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
    path.join(PROJECT_ROOT, 'assets', '**', '*'),
    path.join(PROJECT_ROOT, 'templates', '**', '*.yaml'),
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
      sandbox: false
    },
    frame: false,
    titleBarStyle: 'hidden',
    backgroundColor: '#0f1117',
    show: false
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.webContents.on('did-finish-load', () => {
    const guides = listGuides();
    mainWindow.webContents.executeJavaScript(
      `window.__populateGuides && window.__populateGuides(${JSON.stringify(guides)})`
    ).catch(() => {});
  });

  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.control && input.type === 'mouseWheel') {
      event.preventDefault();
    }
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
}

app.whenReady().then(() => {
  if (translator) {
    try { translator.loadEnv(PROJECT_ROOT); } catch (e) { /* .env yoksa sorun değil */ }
  }
  registerIpcHandlers();
  createWindow();
  startContentWatcher();

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

/* guideId → { type, label, model, projectDir, bolumler, diller } */
function resolveGuide(guideId) {
  const id = String(guideId || '');
  if (!id.startsWith('proje:')) return null;

  const dir = id.slice('proje:'.length);
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
    kapak: doc.kapak && typeof doc.kapak === 'object' ? doc.kapak : {},
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
   başka dile veya eski (dilsiz) .md dosyasına düşülmez. */
function resolveContent(roots, folderParts, base, lang) {
  if (!base) return '';
  const L = String(lang || DEFAULT_LANG).toLowerCase();
  for (const root of roots) {
    const p = path.join(root, ...folderParts, `${base}.${L}.md`);
    if (fs.existsSync(p)) {
      const c = fs.readFileSync(p, 'utf8');
      if (c.trim()) return c;
    }
  }
  return '';
}

function buildTree(items, dirParts, roots, lang) {
  const nodes = [];
  if (!Array.isArray(items)) return nodes;

  for (const it of items) {
    if (!it || it.aktif === false) continue;

    const folder = dirParts.concat(String(it.id));
    const content = resolveContent(roots, folder, it.dosya ? String(it.dosya) : '', lang);
    const children = buildTree(it.alt_bolumler, folder, roots, lang);

    if ((content && content.trim()) || children.length) {
      nodes.push({
        id: String(it.id),
        dosya: it.dosya ? String(it.dosya) : '',
        content: content || '',
        children
      });
    }
  }
  return nodes;
}

function registerIpcHandlers() {
  ipcMain.removeHandler('list-guides');
  ipcMain.removeHandler('get-guide');
  ipcMain.removeHandler('read-asset');
  ipcMain.removeHandler('print-pdf');
  ipcMain.removeHandler('export-html');
  ipcMain.removeHandler('tr-key');
  ipcMain.removeHandler('tr-list');
  ipcMain.removeHandler('tr-one');
  ipcMain.removeHandler('list-models');
  ipcMain.removeHandler('create-project');
  ipcMain.removeAllListeners('minimize-window');
  ipcMain.removeAllListeners('maximize-window');
  ipcMain.removeAllListeners('close-window');

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
      type: guide.type,
      projectRel,
      diller: guide.diller,
      lang,
      tree
    };
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

  ipcMain.handle('print-pdf', async () => {
    const { canceled, filePath } = await dialog.showSaveDialog(mainWindow, {
      defaultPath: 'klavuz.pdf',
      filters: [{ name: 'PDF', extensions: ['pdf'] }]
    });
    if (canceled || !filePath) return { success: false };

    const data = await mainWindow.webContents.printToPDF({
      printBackground: true,
      pageSize: 'A4',
      margins: { top: 0, bottom: 0, left: 0, right: 0 },
      preferCSSPageSize: true
    });

    fs.writeFileSync(filePath, data);
    return { success: true, filePath };
  });

  ipcMain.handle('export-html', async (event, payload) => {
    const model = (payload && payload.model) || 'klavuz';
    const bodyHtml = (payload && payload.bodyHtml) || '';
    const title = (payload && payload.title) || `${model} Kullanım Kılavuzu`;

    const { canceled, filePath } = await dialog.showSaveDialog(mainWindow, {
      defaultPath: `${model}-klavuz.html`,
      filters: [{ name: 'HTML', extensions: ['html'] }]
    });
    if (canceled || !filePath) return { success: false };

    try {
      const cssPath = path.join(__dirname, 'html-export.css');
      const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf8') : '';
      const inlined = inlineImagesToBase64(bodyHtml);
      const safeTitle = String(title)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      const fullHtml = `<!DOCTYPE html>
<html lang="tr" class="html-export">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${safeTitle}</title>
  <style>${css}</style>
</head>
<body class="html-export">
${inlined}
<script>
document.querySelectorAll('a.toc-html').forEach(function(row) {
  row.addEventListener('click', function(evt) {
    evt.preventDefault();
    var id = row.getAttribute('href');
    if (!id || id.charAt(0) !== '#') return;
    var target = document.getElementById(id.slice(1));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
document.querySelectorAll('[data-toc-anchor]').forEach(function(el) {
  var anchorId = el.dataset.tocAnchor;
  if (!anchorId) return;
  var a = document.createElement('a');
  a.href = '#toc-row-' + anchorId;
  a.style.cssText = 'color:inherit;text-decoration:none;display:block;';
  a.addEventListener('click', function(evt) {
    evt.preventDefault();
    var target = document.getElementById('toc-row-' + anchorId);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  while (el.firstChild) a.appendChild(el.firstChild);
  el.appendChild(a);
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
}

function normalizeImagePathForDisk(src) {
  if (/^data:/i.test(src)) return null;
  let s = decodeURIComponent(String(src)).replace(/\\/g, '/');
  if (s.startsWith('../../assets/')) {
    s = '../assets/' + s.slice('../../assets/'.length);
  } else if (!s.startsWith('../') && s.startsWith('assets/')) {
    s = '../' + s;
  }
  return path.resolve(__dirname, s);
}

function inlineImagesToBase64(html) {
  return html.replace(/<img\b[^>]*\bsrc="([^"]+)"[^>]*>/gi, (tag, src) => {
    if (/^data:/i.test(src)) return tag;
    try {
      const abs = normalizeImagePathForDisk(src);
      if (!abs || !fs.existsSync(abs)) return tag;
      const ext = path.extname(abs).slice(1).toLowerCase();
      const mime = ext === 'svg' ? 'svg+xml' : (ext === 'jpg' ? 'jpeg' : ext);
      const b64 = fs.readFileSync(abs).toString('base64');
      const dataUri = `data:image/${mime};base64,${b64}`;
      return tag.replace(src, dataUri);
    } catch (e) {
      return tag;
    }
  });
}
