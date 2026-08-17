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
  readAsset: (name) => ipcRenderer.invoke('read-asset', name),
  printPdf: () => ipcRenderer.invoke('print-pdf'),
  exportHtml: (payload) => ipcRenderer.invoke('export-html', payload)
};

if (TRANSLATION_UI_ENABLED) {
  api.trKey = () => ipcRenderer.invoke('tr-key');
  api.trList = (langs) => ipcRenderer.invoke('tr-list', langs);
  api.trOne = (srcRel, lang, provider) => ipcRenderer.invoke('tr-one', srcRel, lang, provider);
}

contextBridge.exposeInMainWorld('electronAPI', api);
