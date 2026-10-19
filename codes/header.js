/* Antet (letterhead) modülü — numaralı sayfaların üst kenarına yerleşir.
   Firma combobox seçimine göre logo veya metin gösterir (tanımlar: brands.js).
   Sağ tarafta model adı ve — değişken başlık açıksa — sayfanın ana bölüm adı. */

function getFirmaFooter(variant) {
  return getBrand(variant).footer || BRANDS[DEFAULT_BRAND].footer;
}

function buildHeader(variant, model, chapter) {
  const brand = getBrand(variant);
  const h = brand.header || {};

  const header = document.createElement('div');
  header.className = 'page-header';
  header.style.setProperty('--brand-color', brand.color);

  const left = document.createElement('div');
  left.className = 'ph-brand';

  if (h.type === 'logo') {
    left.classList.add('ph-brand-logo');
    const img = document.createElement('img');
    img.className = 'ph-logo';
    img.src = assetUrl(h.logo);
    img.alt = variant;
    if (h.logoHeight) img.style.height = h.logoHeight + 'px';
    if (h.logoMaxWidth) img.style.maxWidth = h.logoMaxWidth + 'px';
    left.appendChild(img);
    if (h.sub) {
      const sub = document.createElement('span');
      sub.className = 'ph-sub';
      sub.textContent = h.sub;
      left.appendChild(sub);
    }
  } else {
    const name = document.createElement('span');
    name.className = 'ph-name';
    name.textContent = h.name || variant;
    const sub = document.createElement('span');
    sub.className = 'ph-sub';
    sub.textContent = h.sub || '';
    left.appendChild(name);
    left.appendChild(sub);
  }

  const right = document.createElement('div');
  right.className = 'ph-right';

  const modelEl = document.createElement('div');
  modelEl.className = 'ph-model';
  modelEl.textContent = (model || '').toUpperCase();
  right.appendChild(modelEl);

  if (chapter) {
    const chapterEl = document.createElement('div');
    chapterEl.className = 'ph-chapter';
    chapterEl.textContent = chapter;
    right.appendChild(chapterEl);
  }

  header.appendChild(left);
  header.appendChild(right);
  return header;
}
