const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  minimize: () => ipcRenderer.send('minimize-window'),
  maximize: () => ipcRenderer.send('maximize-window'),
  close: () => ipcRenderer.send('close-window'),
  listGuides: () => ipcRenderer.invoke('list-guides'),
  getGuide: (guideId, lang) => ipcRenderer.invoke('get-guide', guideId, lang),
  listModels: () => ipcRenderer.invoke('list-models'),
  createProject: (name, model, langs) => ipcRenderer.invoke('create-project', name, model, langs),
  readAsset: (name) => ipcRenderer.invoke('read-asset', name),
  printPdf: () => ipcRenderer.invoke('print-pdf'),
  exportHtml: (payload) => ipcRenderer.invoke('export-html', payload),
  trKey: () => ipcRenderer.invoke('tr-key'),
  trList: (langs) => ipcRenderer.invoke('tr-list', langs),
  trOne: (srcRel, lang, provider) => ipcRenderer.invoke('tr-one', srcRel, lang, provider)
});
