/* Kapak sayfası — A4 üzerinde cm koordinatlarıyla mutlak konumlu tasarım.
   96 dpi kabulüyle 1cm = 37.7953px (A4 = 21cm×29.7cm = 794px×1123px). */

const CM_PX = 37.7953;
const cm = (n) => (n * CM_PX).toFixed(2) + 'px';

function formatCoverDate(iso) {
  if (!iso) return 'xx.xx.xxxx';
  const p = iso.split('-');
  if (p.length !== 3) return iso;
  return `${p[2]}.${p[1]}.${p[0]}`;
}

function buildCoverPage({ model, rev, date, variant }) {
  const page = document.createElement('div');
  page.className = 'a4-page cover-page';
  if (variant) page.dataset.variant = variant;

  // 0. Katman: en altta, sayfada tam ortalı arka plan görseli
  const bg = document.createElement('img');
  bg.className = 'cover-bg';
  bg.src = '../assets/backgd.png';
  bg.alt = '';
  page.appendChild(bg);

  // 1. Katman: tüm sayfayı kaplayan siyah dikdörtgen (opacity %90)
  const overlay = document.createElement('div');
  overlay.className = 'cover-overlay';
  page.appendChild(overlay);

  // 2. Katman: kırmızı dikey dikdörtgen
  const rect = document.createElement('div');
  rect.className = 'cover-rect';
  rect.style.left = cm(2.1);
  rect.style.top = cm(2.1);
  rect.style.width = cm(1.48);
  rect.style.height = cm(25.5);
  page.appendChild(rect);

  // 2. Katman: başlık
  const title = document.createElement('div');
  title.className = 'cover-title';
  title.style.left = cm(4.8);
  title.style.top = cm(9.63);
  title.style.width = cm(11.34);
  title.style.height = cm(0.93);
  title.textContent = `${(model || '').toUpperCase()} SERİSİ KULLANIM KILAVUZU`;
  page.appendChild(title);

  // 2. Katman: rev / tarih / hazırlayan
  const info = document.createElement('div');
  info.className = 'cover-info';
  info.style.left = cm(4.8);
  info.style.top = cm(12.19);
  const revText = (rev && rev.trim()) ? rev.trim() : 'xx';
  info.textContent = `Rev.${revText} / Hazırlanma Tarihi : ${formatCoverDate(date)} / Hazırlayan : Fatih GÜRAL`;
  page.appendChild(info);

  // 2. Katman: dolfin görseli (arka planı şeffaflaştırılır)
  const img = document.createElement('img');
  img.className = 'cover-image';
  img.src = '../assets/dolfin.png';
  img.alt = '';
  img.style.left = cm(4.8);
  img.style.top = cm(14.48);
  img.style.width = cm(9.04);
  img.style.height = cm(5.67);
  page.appendChild(img);

  return page;
}
