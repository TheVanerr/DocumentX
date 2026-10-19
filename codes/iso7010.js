/* ── ISO 7010 güvenlik işaretleri: :W012: kısa kodları ──
   Öncelik: assets/iso7010/<KOD>.svg|png (resmi dosya). Yoksa yerleşik yedek çizim:
   doğru biçim ve renk (W üçgen sarı, M mavi daire, P kırmızı halka, E yeşil, F kırmızı kare);
   piktogram yalnızca birkaç temel işarette var, diğerlerinde kod yazılır —
   baskı öncesi resmi dosyaları assets/iso7010/ altına koyun (kalite kontrol uyarır). */

const ISO7010_RX = /:([WPMEF]\d{3}):/g;

/* Ad: alt metin ve dizin için (yalnızca emin olunan yaygın kodlar). */
const ISO7010_NAMES = {
  W001: { tr: 'Genel uyarı işareti', en: 'General warning sign', de: 'Allgemeines Warnzeichen' },
  W012: { tr: 'Elektrik tehlikesi', en: 'Electricity', de: 'Warnung vor elektrischer Spannung' },
  W017: { tr: 'Sıcak yüzey', en: 'Hot surface', de: 'Warnung vor heißer Oberfläche' },
  M001: { tr: 'Genel zorunluluk işareti', en: 'General mandatory action sign', de: 'Allgemeines Gebotszeichen' },
  M002: { tr: 'Kullanım kılavuzunu okuyun', en: 'Refer to instruction manual', de: 'Anleitung beachten' },
  M003: { tr: 'Kulak koruyucu kullanın', en: 'Wear ear protection', de: 'Gehörschutz benutzen' },
  M004: { tr: 'Göz koruyucu kullanın', en: 'Wear eye protection', de: 'Augenschutz benutzen' },
  M008: { tr: 'İş ayakkabısı giyin', en: 'Wear safety footwear', de: 'Fußschutz benutzen' },
  M009: { tr: 'Koruyucu eldiven giyin', en: 'Wear protective gloves', de: 'Handschutz benutzen' },
  M014: { tr: 'Baret takın', en: 'Wear head protection', de: 'Kopfschutz benutzen' },
  P001: { tr: 'Genel yasak işareti', en: 'General prohibition sign', de: 'Allgemeines Verbotszeichen' },
  E003: { tr: 'İlk yardım', en: 'First aid', de: 'Erste Hilfe' },
  F001: { tr: 'Yangın söndürücü', en: 'Fire extinguisher', de: 'Feuerlöscher' }
};

/* Yerleşik piktogramı olan kodlar (diğerlerinde kod metni çizilir). */
const ISO7010_BUILTIN = new Set(['W001', 'W012', 'M001', 'P001', 'E003']);

function iso7010Name(code, lang) {
  const n = ISO7010_NAMES[code];
  return n ? (n[lang] || n.tr) : code;
}

function iso7010FallbackSvg(code) {
  const k = code.charAt(0);
  const label = `<text x="50" y="${k === 'W' ? 74 : 58}" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="${k === 'W' ? 17 : 20}" fill="${k === 'W' || k === 'P' ? '#000' : '#fff'}">${code}</text>`;
  const bang = (fill, y) => `<rect x="45" y="${y}" width="10" height="${k === 'W' ? 26 : 34}" rx="3" fill="${fill}"/><circle cx="50" cy="${y + (k === 'W' ? 36 : 46)}" r="6" fill="${fill}"/>`;
  let body;
  if (k === 'W') {
    const pict = code === 'W001' ? bang('#000', 40)
      : code === 'W012' ? '<path d="M56 34 40 64h11l-6 22 18-32H52l8-20z" fill="#000"/>'
      : label;
    body = '<path d="M50 4 97 92H3z" fill="#000" stroke="#000" stroke-width="4" stroke-linejoin="round"/>' +
      '<path d="M50 16 88 86H12z" fill="#F9A800"/>' + pict;
  } else if (k === 'M') {
    body = '<circle cx="50" cy="50" r="47" fill="#24578E"/>' + (code === 'M001' ? bang('#fff', 22) : label);
  } else if (k === 'P') {
    body = '<circle cx="50" cy="50" r="42" fill="#fff" stroke="#B71F2E" stroke-width="10"/>' +
      (code === 'P001' ? '' : label) + '<path d="M20 20 80 80" stroke="#B71F2E" stroke-width="10"/>';
  } else {
    const bg = k === 'E' ? '#237F52' : '#9B2423';
    body = `<rect x="3" y="3" width="94" height="94" rx="6" fill="${bg}"/>` +
      (code === 'E003' ? '<path d="M40 22h20v18h18v20H60v18H40V60H22V40h18z" fill="#fff"/>' : label);
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${body}</svg>`;
  return 'data:image/svg+xml;base64,' + btoa(svg);
}

/* inline() içinden çağrılır. Resmi dosyalar currentSymbols'tan (main.js tarar). */
function replaceIsoSymbols(s, keep) {
  return s.replace(ISO7010_RX, (whole, code) => {
    const file = currentSymbols && currentSymbols[code];
    const src = file ? resolveImageSrc(file) : iso7010FallbackSvg(code);
    const kind = file ? 'official' : (ISO7010_BUILTIN.has(code) ? 'builtin' : 'placeholder');
    const name = iso7010Name(code, currentLang);
    return keep(`<img class="iso-sym" src="${src}" alt="${escapeHtml(code + ' — ' + name)}" title="${escapeHtml(code + ' — ' + name)}" data-iso="${code}" data-iso-kind="${kind}" />`);
  });
}
