const { contextBridge, ipcRenderer } = require('electron');

const TRANSLATION_UI_ENABLED = false;

const api = {
  minimize: () => ipcRenderer.send('minimize-window'),
  maximize: () => ipcRenderer.send('maximize-window'),
  close: () => ipcRenderer.send('close-window'),
  listGuides: () => ipcRenderer.invoke('list-guides'),
  getGuide: (guideId, lang) => ipcRenderer.invoke('get-guide', guideId, lang),
  listModels: () => ipcRenderer.invoke('list-models'),
  createProject: (name, model, langs) => ipcRenderer.invoke('create-project', name, model, langs),
  saveGuideMeta: (guideId, patch) => ipcRenderer.invoke('save-guide-meta', guideId, patch),
  getSettings: () => ipcRenderer.invoke('get-settings'),
  appInfo: () => ipcRenderer.invoke('app-info'),
  chooseWorkspace: () => ipcRenderer.invoke('choose-workspace'),
  checkUpdates: () => ipcRenderer.invoke('check-updates'),
  installUpdate: () => ipcRenderer.send('install-update'),
  onUpdateStatus: (callback) => {
    const handler = (_event, payload) => callback(payload || {});
    ipcRenderer.on('update-status', handler);
    return () => ipcRenderer.removeListener('update-status', handler);
  },
  setSettings: (patch) => ipcRenderer.invoke('set-settings', patch),
  openSource: (rel, line) => ipcRenderer.invoke('open-source', rel, line),
  openExports: (guideId) => ipcRenderer.invoke('open-exports', guideId),
  translationStatus: (guideId) => ipcRenderer.invoke('translation-status', guideId),
  translateFile: (srcRel, lang) => ipcRenderer.invoke('translate-file', srcRel, lang),
  gitLog: (guideId) => ipcRenderer.invoke('git-log', guideId),
  dashboard: () => ipcRenderer.invoke('dashboard'),
  readFile: (rel) => ipcRenderer.invoke('read-file', rel),
  assetReport: (guideId) => ipcRenderer.invoke('asset-report', guideId),
  optimizeImages: (srcs) => ipcRenderer.invoke('optimize-images', srcs),
  writeFile: (rel, text, baseMtime, force) => ipcRenderer.invoke('write-file', rel, text, baseMtime, force),
  changedLines: (guideId, ref) => ipcRenderer.invoke('changed-lines', guideId, ref),
  readAsset: (name) => ipcRenderer.invoke('read-asset', name),
  printPdf: (opts) => ipcRenderer.invoke('print-pdf', opts),
  exportHtml: (payload) => ipcRenderer.invoke('export-html', payload),
  exportDocx: (payload) => ipcRenderer.invoke('export-docx', payload),
  exportWeb: (payload) => ipcRenderer.invoke('export-web', payload),
  getCliJob: () => ipcRenderer.invoke('get-cli-job'),
  cliDone: (result) => ipcRenderer.send('cli-done', result),
  onContentChanged: (callback) => {
    if (typeof callback !== 'function') return () => {};
    const handler = (_event, payload) => callback(payload || {});
    ipcRenderer.on('content-changed', handler);
    return () => ipcRenderer.removeListener('content-changed', handler);
  }
};

if (TRANSLATION_UI_ENABLED) {
  api.trKey = () => ipcRenderer.invoke('tr-key');
  api.trList = (langs) => ipcRenderer.invoke('tr-list', langs);
  api.trOne = (srcRel, lang, provider) => ipcRenderer.invoke('tr-one', srcRel, lang, provider);
}

contextBridge.exposeInMainWorld('electronAPI', api);
