/* base.yaml (ortak iskelet) ve örnek project.yaml üretir. */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const yaml = require(path.join(ROOT, 'codes', 'node_modules', 'js-yaml'));

const S = (id, dosya) => ({ id, dosya });

const bolumler = [
  { id: '01-introduction', dosya: 'introduction', alt_bolumler: [
    S('01-intro-handbook', 'intro-handbook'),
    S('02-symbols-conventions', 'symbols-conventions'),
    S('03-support-service', 'support-service'),
  ]},
  { id: '02-safety', dosya: 'safety', alt_bolumler: [
    S('01-safety-intro', 'safety-intro'),
    S('02-safety-info', 'safety-info'),
    S('03-safety-rules', 'safety-rules'),
  ]},
  { id: '03-overview', dosya: 'overview', alt_bolumler: [
    S('01-machine-description', 'machine-description'),
    S('02-intended-use', 'intended-use'),
    S('03-machine-spec', 'machine-spec'),
    S('04-machine-controls', 'machine-controls'),
    S('05-machine-layout', 'machine-layout'),
  ]},
  { id: '04-transport', dosya: 'transport', alt_bolumler: [
    S('01-transport', 'transporting'),
    S('02-handling-storing', 'handling-storing'),
  ]},
  { id: '05-assembly', dosya: 'assembly', alt_bolumler: [
    S('01-machine-assembly', 'machine-assembly'),
    S('02-machine-position', 'machine-position'),
    S('03-machine-install', 'machine-install'),
    S('04-safety-test', 'safety-test'),
    S('05-install-test', 'install-test'),
    S('06-comm', 'comm'),
  ]},
  { id: '06-settings', dosya: 'settings', alt_bolumler: [
    S('01-mechanical-settings', 'mechanical-settings'),
    S('02-safety-settings', 'safety-settings'),
    S('03-electrical-settings', 'electrical-settings'),
    S('04-hydrolic-settings', 'hydrolic-settings'),
    S('05-pnomatic-settings', 'pnomatic-settings'),
    S('06-vacuum-settings', 'vacuum-settings'),
    S('07-other-settings', 'other-settings'),
  ]},
  { id: '07-operation', dosya: 'operation', alt_bolumler: [
    S('01-operating-modes', 'operating-modes'),
    S('02-machine-start', 'machine-start'),
    S('03-shut-down', 'shut-down'),
    S('04-operating-sequence', 'operating-sequence'),
    S('05-operating-chronology', 'operating-chronology'),
    S('06-operation-other', 'operation-other'),
  ]},
  { id: '08-capacity', dosya: 'capacity', alt_bolumler: [
    S('01-product-capacity', 'product-capacity'),
    S('02-specific-setup', 'specific-setup'),
  ]},
  { id: '09-maintenance', dosya: 'maintenance', alt_bolumler: [
    S('01-main-inst', 'main-inst'),
  ]},
  { id: '10-cleaning', dosya: 'cleaning', alt_bolumler: [
    S('01-clean-sanitize', 'clean-sanitize'),
  ]},
  { id: '11-troubleshooting', dosya: 'troubleshooting', alt_bolumler: [
    S('01-fault-finding', 'fault-finding'),
    S('02-trob-general', 'trob-general'),
    S('03-trob-electrical', 'trob-electrical'),
    S('04-trob-hydro', 'trob-hydro'),
    S('05-trob-pnemo', 'trob-pnemo'),
    S('06-trob-vacuum', 'trob-vacuum'),
    S('07-trob-sensors', 'trob-sensors'),
  ]},
  { id: '12-dismantle', dosya: 'dismantle', alt_bolumler: [
    S('01-dismantle', 'dismantle'),
    S('02-disable', 'disable'),
    S('03-scrapping', 'scrapping'),
  ]},
  { id: '13-documents', dosya: 'documents', alt_bolumler: [
    S('01-documents', 'documents'),
    S('02-drawings', 'drawings'),
    S('03-part-list', 'part-list'),
  ]},
  { id: '14-index', dosya: 'index', alt_bolumler: [
    S('01-annexes', 'annexes'),
    S('02-glossary', 'glossary'),
    S('03-indexes', 'indexes'),
  ]},
];

const header =
  '# Ortak kilavuz iskeleti (dil ve modelden bagimsiz).\n' +
  "# 'dosya' = uzantisiz temel ad. Cozumleyici sirayla dener:\n" +
  '#   projects/<proje>/<yol>/<dosya>.<dil>.md\n' +
  '#   content/_models/<model>/<yol>/<dosya>.<dil>.md\n' +
  '#   content/_common/<yol>/<dosya>.<dil>.md\n' +
  '# Dil bulunamazsa varsayilan dile (tr) duser.\n\n';

fs.mkdirSync(path.join(ROOT, 'templates'), { recursive: true });
fs.writeFileSync(
  path.join(ROOT, 'templates', 'base.yaml'),
  header + yaml.dump({ bolumler }, { lineWidth: -1, quotingType: '"', forceQuotes: true }),
  'utf8'
);

const project = {
  proje_adi: '1726050-ALPER-KNV 30',
  model: 'vdl',
  diller: ['tr'],
  varsayilan_dil: 'tr',
  extends: 'templates/base.yaml',
  kapak: { rev: '', tarih: '', firma: 'DOLFIN' },
};
fs.mkdirSync(path.join(ROOT, 'projects', '1726050-ALPER-KNV-30'), { recursive: true });
fs.writeFileSync(
  path.join(ROOT, 'projects', '1726050-ALPER-KNV-30', 'project.yaml'),
  '# Proje receta: yalnizca model + diller + kapak + (varsa) override dosyalari.\n' +
  '# Icerik content/_models/<model> ve content/_common katmanlarindan miras alinir.\n\n' +
  yaml.dump(project, { lineWidth: -1 }),
  'utf8'
);

console.log('base.yaml ve project.yaml yazildi.');
