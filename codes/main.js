const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

const PROJECT_ROOT = path.join(__dirname, '..');

try {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  });
} catch (e) {}

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

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('minimize-window', () => mainWindow.minimize());
ipcMain.on('maximize-window', () => {
  if (mainWindow.isMaximized()) mainWindow.unmaximize();
  else mainWindow.maximize();
});
ipcMain.on('close-window', () => mainWindow.close());

ipcMain.handle('read-yaml', async (event, modelName) => {
  const folder = `${modelName.toLowerCase()}-yaml`;
  const yamlPath = path.join(PROJECT_ROOT, 'yaml-files', folder, `${modelName.toLowerCase()}.yaml`);
  try {
    if (fs.existsSync(yamlPath)) {
      return fs.readFileSync(yamlPath, 'utf8');
    }
    return null;
  } catch (e) {
    return null;
  }
});

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

function buildNodes(items, dirParts) {
  const nodes = [];
  if (!Array.isArray(items)) return nodes;

  for (const it of items) {
    if (!it || it.aktif === false) continue;

    const folder = dirParts.concat(String(it.id));
    let content = '';
    if (it.dosya) {
      const mdPath = path.join(PROJECT_ROOT, ...folder, String(it.dosya));
      try {
        if (fs.existsSync(mdPath)) content = fs.readFileSync(mdPath, 'utf8');
      } catch (e) {
        content = '';
      }
    }

    const children = buildNodes(it.alt_bolumler, folder);
    const hasOwn = content && content.trim();

    if (hasOwn || children.length) {
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

ipcMain.handle('get-guide', async (event, modelName) => {
  const low = modelName.toLowerCase();
  const yamlPath = path.join(PROJECT_ROOT, 'yaml-files', `${low}-yaml`, `${low}.yaml`);

  if (!fs.existsSync(yamlPath)) {
    return { ok: false, error: 'no-yaml', model: modelName };
  }

  let doc;
  try {
    doc = yaml.load(fs.readFileSync(yamlPath, 'utf8'));
  } catch (e) {
    return { ok: false, error: 'yaml-parse', message: e.message, model: modelName };
  }

  const modelAdi = (doc && doc.model_adi) || modelName;
  const bolumler = (doc && Array.isArray(doc.bolumler)) ? doc.bolumler : [];
  const tree = buildNodes(bolumler, []);

  return { ok: true, model: modelAdi, tree };
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
    marginsType: 0
  });

  fs.writeFileSync(filePath, data);
  return { success: true, filePath };
});
