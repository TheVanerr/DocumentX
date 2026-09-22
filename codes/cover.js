/* Kapak sayfası — A4 üzerinde cm koordinatlarıyla mutlak konumlu tasarım.
   96 dpi kabulüyle 1cm = 37.7953px (A4 = 21cm×29.7cm = 794px×1123px). */

const CM_PX = 37.7953;
const cm = (n) => (n * CM_PX).toFixed(2) + 'px';

const COVER_BRANDS = {
  DOLFIN:  { logo: '../assets/logos/dolfin.png',   accent: '#ff0000' },
  ENVA:    { logo: '../assets/logos/enva.svg',     accent: '#007938' },
  VICO:    { logo: '../assets/logos/vico.png',     accent: '#C41E3A' },
  KSYSTEM: {
    logo: '../assets/logos/ksystem.png',
    accent: '#1B04AE',
    logoBox: { left: 4.8, top: 14.2, width: 11.2, height: 6.5 }
  },
};

const COVER_LOGO_BOX = { left: 4.8, top: 14.48, width: 9.04, height: 5.67 };
const COVER_INFO_LINE_CM = 0.74;

const DOC_I18N = {
  tr: {
    coverTitle: '{MODEL} SERİSİ KULLANIM KILAVUZU',
    coverTitlePlain: '{MODEL} KULLANIM KILAVUZU',
    coverInfo: ['Rev.{REV}', 'Hazırlanma Tarihi : {DATE}', 'Hazırlayan : Fatih GÜRAL'],
    toc: 'İÇİNDEKİLER'
  },
  en: {
    coverTitle: '{MODEL} SERIES USER MANUAL',
    coverTitlePlain: '{MODEL} USER MANUAL',
    coverInfo: ['Rev.{REV}', 'Date of Preparation : {DATE}', 'Prepared by : Fatih GÜRAL'],
    toc: 'CONTENTS'
  },
  de: {
    coverTitle: '{MODEL} SERIE BEDIENUNGSANLEITUNG',
    coverTitlePlain: '{MODEL} BEDIENUNGSANLEITUNG',
    coverInfo: ['Rev.{REV}', 'Erstellungsdatum : {DATE}', 'Erstellt von : Fatih GÜRAL'],
    toc: 'INHALTSVERZEICHNIS'
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
  const p = iso.split('-');
  if (p.length !== 3) return iso;
  return `${p[2]}.${p[1]}.${p[0]}`;
}

function buildCoverPage({ model, rev, date, variant, lang, series }) {
  const brand = COVER_BRANDS[variant] || COVER_BRANDS.DOLFIN;
  const i18n = tDoc(lang);

  const page = document.createElement('div');
  page.className = 'a4-page cover-page';
  if (variant) page.dataset.variant = variant;
  page.style.setProperty('--cover-accent', brand.accent);

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
  const revText = (rev && rev.trim()) ? rev.trim() : 'xx';
  const infoLines = (Array.isArray(i18n.coverInfo) ? i18n.coverInfo : [i18n.coverInfo]).map((line) =>
    line.replace('{REV}', revText).replace('{DATE}', formatCoverDate(date))
  );
  infoLines.forEach((text) => {
    const row = document.createElement('div');
    row.className = 'cover-info-line';
    row.textContent = text;
    info.appendChild(row);
  });
  page.appendChild(info);

  const logoBox = { ...(brand.logoBox || COVER_LOGO_BOX) };
  logoBox.top += Math.max(0, infoLines.length - 1) * COVER_INFO_LINE_CM;

  const img = document.createElement('img');
  img.className = 'cover-image';
  img.src = brand.logo;
  img.alt = variant || 'DOLFIN';
  img.style.left = cm(logoBox.left);
  img.style.top = cm(logoBox.top);
  img.style.width = cm(logoBox.width);
  img.style.height = cm(logoBox.height);
  page.appendChild(img);

  return page;
}
