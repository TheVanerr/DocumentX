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
const CONTENT_COMMON = path.join(PROJECT_ROOT, 'content', '_common');
const CONTENT_MODELS = path.join(PROJECT_ROOT, 'content', '_models');
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

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

/* ────────────────────────────────────────────────────────────
   İçerik çözümleme (katmanlı: proje → model → ortak, dil fallback)
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
  if (!fs.existsSync(CONTENT_MODELS)) return [];
  return fs.readdirSync(CONTENT_MODELS, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort();
}

function listProjectDirs() {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs.readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory() && projectCore.findProjectYaml(path.join(PROJECTS_DIR, d.name)))
    .map(d => d.name)
    .sort();
}

function guideRoots(guide) {
  const roots = [];
  if (guide.projectDir) roots.push(guide.projectDir);
  if (guide.model) roots.push(path.join(CONTENT_MODELS, guide.model));
  roots.push(CONTENT_COMMON);
  return roots;
}

function listGuides() {
  const projects = listProjectDirs().map(dir => {
    const projectDir = path.join(PROJECTS_DIR, dir);
    const doc = safeReadYaml(projectCore.findProjectYaml(projectDir)) || {};
    const model = String(doc.model || '').toLowerCase();
    const guide = { id: 'proje:' + dir, projectDir, model };
    return {
      id: guide.id,
      label: doc.proje_adi || dir,
      type: 'project',
      model: model.toUpperCase(),
      diller: detectLangs(guideRoots(guide))
    };
  });

  const models = listModelIds().map(m => ({
    id: 'model:' + m,
    label: m.toUpperCase(),
    type: 'model',
    model: m.toUpperCase(),
    diller: detectLangs([path.join(CONTENT_MODELS, m), CONTENT_COMMON])
  }));

  return [...models, ...projects];
}

/* guideId → { type, label, model, projectDir, bolumler, diller } */
function resolveGuide(guideId) {
  const id = String(guideId || '');

  if (id.startsWith('proje:')) {
    const dir = id.slice('proje:'.length);
    const projectDir = path.join(PROJECTS_DIR, dir);
    const yp = projectCore.findProjectYaml(projectDir);
    if (!yp) return null;
    const doc = safeReadYaml(yp) || {};
    const extendsRel = doc.extends || 'templates/base.yaml';
    const base = safeReadYaml(path.join(PROJECT_ROOT, extendsRel)) || {};
    const guide = {
      type: 'project',
      label: doc.proje_adi || dir,
      model: String(doc.model || '').toLowerCase(),
      projectDir,
      bolumler: Array.isArray(base.bolumler) ? base.bolumler : [],
      diller: normLangs(doc.diller)
    };
    // Fiziksel olarak var olan dilleri de kat (fallback için)
    guide.diller = [...new Set(guide.diller.concat(detectLangs(guideRoots(guide))))];
    return guide;
  }

  const model = id.startsWith('model:') ? id.slice('model:'.length) : id.toLowerCase();
  const modelDir = path.join(CONTENT_MODELS, model);
  if (!fs.existsSync(modelDir)) return null;
  const base = safeReadYaml(path.join(TEMPLATES_DIR, 'base.yaml')) || {};
  const guide = {
    type: 'model',
    label: model.toUpperCase(),
    model,
    projectDir: null,
    bolumler: Array.isArray(base.bolumler) ? base.bolumler : []
  };
  guide.diller = detectLangs([modelDir, CONTENT_COMMON]);
  return guide;
}

function resolveContent(roots, folderParts, base, lang) {
  if (!base) return '';
  const langs = lang === DEFAULT_LANG ? [lang] : [lang, DEFAULT_LANG];
  for (const L of langs) {
    for (const root of roots) {
      const p = path.join(root, ...folderParts, `${base}.${L}.md`);
      if (fs.existsSync(p)) {
        const c = fs.readFileSync(p, 'utf8');
        if (c.trim()) return c;
      }
    }
    if (L !== DEFAULT_LANG) continue;
    for (const root of roots) {
      const legacy = path.join(root, ...folderParts, `${base}.md`);
      if (fs.existsSync(legacy)) {
        const c = fs.readFileSync(legacy, 'utf8');
        if (c.trim()) return c;
      }
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

    return {
      ok: true,
      id: guideId,
      label: guide.label,
      model: (guide.model || '').toUpperCase(),
      type: guide.type,
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

function inlineImagesToBase64(html) {
  return html.replace(/<img\b[^>]*\bsrc="([^"]+)"[^>]*>/gi, (tag, src) => {
    if (/^data:/i.test(src)) return tag;
    try {
      const rel = decodeURIComponent(src);
      const abs = path.resolve(__dirname, rel);
      if (!fs.existsSync(abs)) return tag;
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
