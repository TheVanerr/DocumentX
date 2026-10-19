/* Kapak sayfası — A4 üzerinde cm koordinatlarıyla mutlak konumlu tasarım.
   96 dpi kabulüyle 1cm = 37.7953px (A4 = 21cm×29.7cm = 794px×1123px).
   Firma rengi ve logosu: brands.js. */

const CM_PX = 37.7953;
const cm = (n) => (n * CM_PX).toFixed(2) + 'px';

const COVER_LOGO_BOX = { left: 4.8, top: 14.48, width: 9.04, height: 5.67 };
const COVER_INFO_LINE_CM = 0.74;

/* Belge içinde dile göre değişen sabit metinler. {BY} boşsa o satır kapağa yazılmaz. */
const DOC_I18N = {
  tr: {
    coverTitle: '{MODEL} SERİSİ KULLANIM KILAVUZU',
    coverTitlePlain: '{MODEL} KULLANIM KILAVUZU',
    coverInfo: ['Rev.{REV}', 'Hazırlanma Tarihi : {DATE}', 'Hazırlayan : {BY}'],
    toc: 'İÇİNDEKİLER',
    index: 'DİZİN',
    revHistory: 'REVİZYON GEÇMİŞİ',
    revCols: ['Rev.', 'Tarih', 'Açıklama', 'Hazırlayan'],
    figList: 'ŞEKİL LİSTESİ',
    tblList: 'TABLO LİSTESİ',
    fig: 'Şekil',
    tbl: 'Tablo',
    continued: 'devam',
    pageRef: 's.',
    tableCaption: /^(?:Tablo)\s*:\s*/
  },
  en: {
    coverTitle: '{MODEL} SERIES USER MANUAL',
    coverTitlePlain: '{MODEL} USER MANUAL',
    coverInfo: ['Rev.{REV}', 'Date of Preparation : {DATE}', 'Prepared by : {BY}'],
    toc: 'CONTENTS',
    index: 'INDEX',
    revHistory: 'REVISION HISTORY',
    revCols: ['Rev.', 'Date', 'Description', 'Prepared by'],
    figList: 'LIST OF FIGURES',
    tblList: 'LIST OF TABLES',
    fig: 'Figure',
    tbl: 'Table',
    continued: 'continued',
    pageRef: 'p.',
    tableCaption: /^(?:Table)\s*:\s*/
  },
  de: {
    coverTitle: '{MODEL} SERIE BEDIENUNGSANLEITUNG',
    coverTitlePlain: '{MODEL} BEDIENUNGSANLEITUNG',
    coverInfo: ['Rev.{REV}', 'Erstellungsdatum : {DATE}', 'Erstellt von : {BY}'],
    toc: 'INHALTSVERZEICHNIS',
    index: 'STICHWORTVERZEICHNIS',
    revHistory: 'REVISIONSVERLAUF',
    revCols: ['Rev.', 'Datum', 'Beschreibung', 'Erstellt von'],
    figList: 'ABBILDUNGSVERZEICHNIS',
    tblList: 'TABELLENVERZEICHNIS',
    fig: 'Abbildung',
    tbl: 'Tabelle',
    continued: 'Fortsetzung',
    pageRef: 'S.',
    tableCaption: /^(?:Tabelle)\s*:\s*/
  }
};

function tDoc(lang) {
  return DOC_I18N[String(lang || '').toLowerCase()] || DOC_I18N.tr;
}

function coverDocumentTitle(model, lang, opts) {
  const i18n = tDoc(lang);
  const tpl = (opts && opts.series === false) ? i18n.coverTitlePlain : i18n.coverTitle;
  return tpl.replace('{MODEL}', (model || '').toUpperCase());
}

function formatCoverDate(iso) {
  if (!iso) return 'xx.xx.xxxx';
  const p = String(iso).split('-');
  if (p.length !== 3) return iso;
  return `${p[2]}.${p[1]}.${p[0]}`;
}

function coverInfoLines({ rev, date, by, lang }) {
  const i18n = tDoc(lang);
  const revText = (rev && String(rev).trim()) ? String(rev).trim() : 'xx';
  const author = String(by || '').trim();
  return (Array.isArray(i18n.coverInfo) ? i18n.coverInfo : [i18n.coverInfo])
    .filter(line => author || !line.includes('{BY}'))
    .map(line => line
      .replace('{REV}', revText)
      .replace('{DATE}', formatCoverDate(date))
      .replace('{BY}', author));
}

function buildCoverPage({ model, rev, date, variant, lang, series, by }) {
  const brand = getBrand(variant);
  const coverBrand = brand.cover || {};

  const page = document.createElement('div');
  page.className = 'a4-page cover-page';
  if (variant) page.dataset.variant = variant;
  page.style.setProperty('--cover-accent', brand.color);

  const rect = document.createElement('div');
  rect.className = 'cover-rect';
  rect.style.left = cm(2.1);
  rect.style.top = cm(2.1);
  rect.style.width = cm(1.48);
  rect.style.height = cm(25.5);
  page.appendChild(rect);

  const title = document.createElement('div');
  title.className = 'cover-title';
  title.style.left = cm(4.8);
  title.style.top = cm(9.63);
  title.style.width = cm(11.34);
  title.style.height = cm(0.93);
  title.textContent = coverDocumentTitle(model, lang, { series });
  page.appendChild(title);

  const info = document.createElement('div');
  info.className = 'cover-info';
  info.style.left = cm(4.8);
  info.style.top = cm(12.19);
  info.style.width = cm(14.1);
  const infoLines = coverInfoLines({ rev, date, by, lang });
  infoLines.forEach((text) => {
    const row = document.createElement('div');
    row.className = 'cover-info-line';
    row.textContent = text;
    info.appendChild(row);
  });
  page.appendChild(info);

  const logoBox = { ...(coverBrand.logoBox || COVER_LOGO_BOX) };
  logoBox.top += Math.max(0, infoLines.length - 1) * COVER_INFO_LINE_CM;

  const img = document.createElement('img');
  img.className = 'cover-image';
  img.src = coverBrand.logo ? assetUrl(coverBrand.logo) : '';
  img.alt = variant || DEFAULT_BRAND;
  img.style.left = cm(logoBox.left);
  img.style.top = cm(logoBox.top);
  img.style.width = cm(logoBox.width);
  img.style.height = cm(logoBox.height);
  page.appendChild(img);

  return page;
}

/* Arka kapak — numarasız son sayfa: ortada logo, altta firma adı ve belge kimliği. */
function buildBackCoverPage({ model, rev, date, variant, lang, series }) {
  const brand = getBrand(variant);
  const coverBrand = brand.cover || {};

  const page = document.createElement('div');
  page.className = 'a4-page cover-page back-cover-page';
  page.style.setProperty('--cover-accent', brand.color);

  const img = document.createElement('img');
  img.className = 'back-cover-logo';
  img.src = coverBrand.logo ? assetUrl(coverBrand.logo) : '';
  img.alt = variant || DEFAULT_BRAND;
  page.appendChild(img);

  const docId = document.createElement('div');
  docId.className = 'back-cover-doc';
  docId.textContent = coverDocumentTitle(model, lang, { series });
  page.appendChild(docId);

  const meta = document.createElement('div');
  meta.className = 'back-cover-meta';
  meta.textContent = coverInfoLines({ rev, date, by: '', lang }).join('  ·  ');
  page.appendChild(meta);

  const company = document.createElement('div');
  company.className = 'back-cover-company';
  company.textContent = brand.footer || '';
  page.appendChild(company);

  const band = document.createElement('div');
  band.className = 'back-cover-band';
  page.appendChild(band);

  return page;
}
