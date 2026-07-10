/* Antet (letterhead) modülü — numaralı sayfaların üst kenarına yerleşir.
   Combobox'tan seçilen markaya göre değişir. Yeni marka/logo eklemek için
   BRANDS nesnesini genişletmen yeterli. */

const HEADER_BRANDS = {
  'DOLFIN':  { name: 'DOLFIN',  sub: 'Makine Sanayi', color: '#ff0000' },
  'ENVA':    { name: 'ENVA',    sub: 'Group',         color: '#1a5f9e' },
  'VICO':    { name: 'VICO',    sub: 'Group',         color: '#0f8a5f' },
  'KSYSTEM': { name: 'KSYSTEM', sub: 'Group',         color: '#8a3fa0' }
};

function buildHeader(variant, model) {
  const brand = HEADER_BRANDS[variant] || HEADER_BRANDS['DOLFIN'];

  const header = document.createElement('div');
  header.className = 'page-header';
  header.style.setProperty('--brand-color', brand.color);

  const left = document.createElement('div');
  left.className = 'ph-brand';
  const name = document.createElement('span');
  name.className = 'ph-name';
  name.textContent = brand.name;
  const sub = document.createElement('span');
  sub.className = 'ph-sub';
  sub.textContent = brand.sub;
  left.appendChild(name);
  left.appendChild(sub);

  const right = document.createElement('div');
  right.className = 'ph-model';
  right.textContent = (model || '').toUpperCase();

  header.appendChild(left);
  header.appendChild(right);
  return header;
}
