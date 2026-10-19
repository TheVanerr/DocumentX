/* ── ISO 20607 / ISO 12100 6.4.5 kapsam kontrolü ──
   Kullanım kılavuzunda bulunması beklenen konuların anahtar kelime taraması.
   Bir konunun kelimesi hiç geçmiyorsa "eksik" sayılır. Bu bir ön kontroldür:
   normun yerine geçmez, içeriğin yeterliliğini değerlendirmez. */

const ISO20607_ITEMS = [
  { id: 'manufacturer', label: 'Üretici adı ve adresi', tr: 'üretici|imalatçı', en: 'manufacturer', de: 'hersteller' },
  { id: 'designation', label: 'Makine tanımı ve model', tr: 'makine tanımı|model', en: 'machine description|designation|model', de: 'maschinenbeschreibung|modell|typ' },
  { id: 'doc', label: 'AB uygunluk beyanı', tr: 'uygunluk beyan', en: 'declaration of conformity', de: 'konformitätserklärung' },
  { id: 'intended', label: 'Amaçlanan kullanım', tr: 'amaçlanan kullanım|kullanım amacı', en: 'intended use', de: 'bestimmungsgemäße verwendung|bestimmungsgemäßer gebrauch' },
  { id: 'misuse', label: 'Öngörülebilir hatalı kullanım', tr: 'hatalı kullanım|yanlış kullanım', en: 'misuse', de: 'fehlanwendung|fehlgebrauch' },
  { id: 'residual', label: 'Artık riskler', tr: 'artık risk|kalan risk', en: 'residual risk', de: 'restrisik' },
  { id: 'guards', label: 'Koruyucular ve güvenlik tertibatları', tr: 'koruyucu|emniyet tertibat|güvenlik tertibat|emniyet kapı', en: 'guard|protective device|safety device', de: 'schutzeinrichtung|schutzvorrichtung|schutztür' },
  { id: 'estop', label: 'Acil durdurma', tr: 'acil durdurma|acil stop', en: 'emergency stop', de: 'not-halt|not-aus' },
  { id: 'ppe', label: 'Kişisel koruyucu donanım', tr: 'kişisel koruyucu|kkd', en: 'personal protective|ppe', de: 'schutzausrüstung|psa' },
  { id: 'personnel', label: 'Personel nitelikleri ve eğitim', tr: 'eğitim|yetkili personel|nitelikli', en: 'qualified|trained|training', de: 'qualifiziert|unterwiesen|schulung' },
  { id: 'warnings', label: 'Uyarı işaretleri ve etiketler', tr: 'uyarı etiket|işaret|piktogram|sembol', en: 'warning sign|label|pictogram|symbol', de: 'warnschild|warnhinweis|piktogramm|symbol' },
  { id: 'transport', label: 'Taşıma ve kaldırma', tr: 'taşıma|kaldırma|nakliye', en: 'transport|lifting', de: 'transport|anheben' },
  { id: 'storage', label: 'Depolama', tr: 'depolama', en: 'storage', de: 'lagerung' },
  { id: 'install', label: 'Montaj ve kurulum', tr: 'montaj|kurulum', en: 'installation|assembly', de: 'montage|aufstellung|installation' },
  { id: 'supply', label: 'Enerji bağlantıları', tr: 'elektrik bağlantı|besleme|basınçlı hava', en: 'power supply|electrical connection|compressed air', de: 'anschluss|stromversorgung|druckluft' },
  { id: 'commission', label: 'Devreye alma', tr: 'devreye alma|ilk çalıştırma', en: 'commissioning|start-up|initial start', de: 'inbetriebnahme' },
  { id: 'controls', label: 'Kumanda elemanları', tr: 'kumanda|kontrol paneli', en: 'control panel|operating element|controls', de: 'bedienelement|bedienfeld|steuerung' },
  { id: 'operation', label: 'İşletim ve çalışma modları', tr: 'çalışma mod|işletim|çalıştırma', en: 'operating mode|operation', de: 'betriebsart|betrieb' },
  { id: 'settings', label: 'Ayarlar', tr: 'ayar', en: 'setting|adjustment', de: 'einstellung' },
  { id: 'energy', label: 'Tehlikeli enerji kontrolü (LOTO)', tr: 'loto|kilitleme|enerji kontrol|enerjisiz', en: 'lockout|isolation|hazardous energy', de: 'energietrennung|lockout|freischalten' },
  { id: 'maintenance', label: 'Bakım', tr: 'bakım', en: 'maintenance', de: 'wartung|instandhaltung' },
  { id: 'intervals', label: 'Bakım periyotları', tr: 'periyot|günlük|haftalık|aylık', en: 'interval|daily|weekly|monthly', de: 'intervall|täglich|wöchentlich|monatlich' },
  { id: 'cleaning', label: 'Temizlik', tr: 'temizlik', en: 'cleaning', de: 'reinigung' },
  { id: 'faults', label: 'Arıza giderme', tr: 'arıza', en: 'troubleshooting|fault', de: 'störung|fehlerbehebung' },
  { id: 'spares', label: 'Yedek parçalar', tr: 'yedek parça', en: 'spare part', de: 'ersatzteil' },
  { id: 'noise', label: 'Gürültü emisyonu', tr: 'gürültü|ses basınç|db\\(a\\)', en: 'noise|sound pressure|db\\(a\\)', de: 'lärm|schalldruck|geräusch' },
  { id: 'techdata', label: 'Teknik veriler (boyut, ağırlık)', tr: 'ağırlık|boyut', en: 'weight|dimension', de: 'gewicht|abmessung' },
  { id: 'environment', label: 'Ortam koşulları', tr: 'ortam sıcaklı|ortam koşul|nem', en: 'ambient|environmental condition|humidity', de: 'umgebung|luftfeuchtigkeit' },
  { id: 'emergency', label: 'Yangın ve acil durumlar', tr: 'yangın|acil durum', en: 'fire|emergency', de: 'brand|notfall' },
  { id: 'disposal', label: 'Sökme ve bertaraf', tr: 'bertaraf|sökme|hurda', en: 'disposal|dismantling|decommissioning', de: 'entsorgung|demontage|außerbetriebnahme' }
];

/* → [{ item, found: bool, el, section }] — belge sırasıyla ilk eşleşme. */
function iso20607Coverage(lang) {
  const container = document.getElementById('pagesContainer');
  const nodes = container
    ? [...container.querySelectorAll('.page-content > *, .html-flow-content > *')]
    : [];
  const rxs = ISO20607_ITEMS.map(it => new RegExp(`(?<![\\p{L}])(?:${it[lang] || it.tr})`, 'u'));
  const result = ISO20607_ITEMS.map(item => ({ item, found: false, el: null, section: '' }));
  let section = '';
  for (const el of nodes) {
    if (el.classList.contains('sec-h')) section = el.textContent.trim();
    const text = foldTr(el.textContent);
    if (!text.trim()) continue;
    rxs.forEach((rx, i) => {
      if (result[i].found || !rx.test(text)) return;
      result[i].found = true;
      result[i].el = el;
      result[i].section = section;
    });
  }
  return result;
}

function openIsoReport() {
  if (!currentGuideId || viewMode === 'compare') {
    showToast('Kapsam raporu PDF veya HTML görünümünde çalışır', 'error');
    return;
  }
  const res = iso20607Coverage(currentLang);
  const ok = res.filter(r => r.found).length;
  document.getElementById('isoSummary').textContent =
    `${ok}/${res.length} konu bulundu · ${currentLang.toUpperCase()} · anahtar kelime taraması (normun yerine geçmez)`;
  const list = document.getElementById('isoList');
  list.innerHTML = '';
  res.forEach(r => {
    const row = document.createElement('button');
    row.className = 'iso-row ' + (r.found ? 'ok' : 'miss');
    row.innerHTML = `<span class="iso-mark">${r.found ? '✓' : '✗'}</span>` +
      `<span class="iso-label">${escapeHtml(r.item.label)}</span>` +
      `<span class="iso-where">${r.found ? escapeHtml(r.section || '—') : 'bulunamadı'}</span>`;
    if (r.found) {
      row.onclick = () => {
        closeIsoReport();
        scrollToPage(r.el, { exact: true, center: true, flash: true });
      };
    }
    list.appendChild(row);
  });
  document.getElementById('isoOverlay').style.display = 'flex';
}

function closeIsoReport() {
  document.getElementById('isoOverlay').style.display = 'none';
}
