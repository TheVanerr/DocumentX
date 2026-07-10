const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  minimize: () => ipcRenderer.send('minimize-window'),
  maximize: () => ipcRenderer.send('maximize-window'),
  close: () => ipcRenderer.send('close-window'),
  readYaml: (modelName) => ipcRenderer.invoke('read-yaml', modelName),
  getGuide: (modelName) => ipcRenderer.invoke('get-guide', modelName),
  readAsset: (name) => ipcRenderer.invoke('read-asset', name),
  printPdf: () => ipcRenderer.invoke('print-pdf'),
  exportWord: (payload) => ipcRenderer.invoke('export-word', payload)
});
