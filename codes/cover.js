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

function formatCoverDate(iso) {
  if (!iso) return 'xx.xx.xxxx';
  const p = iso.split('-');
  if (p.length !== 3) return iso;
  return `${p[2]}.${p[1]}.${p[0]}`;
}

function buildCoverPage({ model, rev, date, variant }) {
  const brand = COVER_BRANDS[variant] || COVER_BRANDS.DOLFIN;

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
  title.textContent = `${(model || '').toUpperCase()} SERİSİ KULLANIM KILAVUZU`;
  page.appendChild(title);

  const info = document.createElement('div');
  info.className = 'cover-info';
  info.style.left = cm(4.8);
  info.style.top = cm(12.19);
  const revText = (rev && rev.trim()) ? rev.trim() : 'xx';
  info.textContent = `Rev.${revText} / Hazırlanma Tarihi : ${formatCoverDate(date)} / Hazırlayan : Fatih GÜRAL`;
  page.appendChild(info);

  const logoBox = brand.logoBox || COVER_LOGO_BOX;

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
