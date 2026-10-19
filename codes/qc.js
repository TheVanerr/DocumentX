/* ── Kalite kontrol paneli (Ctrl+Shift+Q) ──
   CLAUDE.md / ISO 20607 yazım kurallarını açık kılavuzda denetler. Her bulgu
   tıklanınca ilgili yere kaydırır; ↗ kaynak .md dosyasını VS Code'da açar. */

const QC_TYPES = {
  eksik:   { label: '[EKSİK] işaretleri', hard: true },
  img:     { label: 'Yüklenemeyen görseller', hard: true },
  xref:    { label: 'Kırık çapraz referanslar', hard: true },
  data:    { label: 'DATA anahtarı bulunamadı', hard: true },
  conflict:{ label: 'DATA ile çelişen değer', hard: true },
  term:    { label: 'Terim sözlüğüne aykırı ifade', hard: true },
  iso:     { label: 'ISO 20607 — anılmayan konu', hard: false },
  symbol:  { label: 'ISO 7010 — resmi işaret dosyası yok', hard: false },
  heading: { label: 'Başlık kuralı (###, 4. seviye)', hard: true },
  signal:  { label: 'Başka dilde sinyal kelimesi', hard: true },
  parity:  { label: 'Dil eşleşmesi (TR ile 1:1)', hard: true },
  stale:   { label: 'Çevirisi eskimiş (TR sonra değişti)', hard: true },
  vague:   { label: 'Ölçülemeyen ifadeler', hard: false }
};

/* "Uygun / yeterli / gerekli" gibi ifadeler → somut değer verilmeli (CLAUDE.md).
   "uygunluk" (AB Uygunluk Beyanı) bir terimdir, işaretlenmez. */
const QC_VAGUE = {
  tr: /(?<![\p{L}])(uygun(?!luk)\p{L}*|yeterli\p{L}*|gerekli\p{L}*)/giu,
  en: /(?<![\p{L}])(appropriate\p{L}*|suitabl\p{L}*|sufficient\p{L}*|adequate\p{L}*)/giu,
  de: /(?<![\p{L}])(geeignet\p{L}*|ausreichend\p{L}*|angemessen\p{L}*)/giu
};

const QC_MISSING = /\[(?:EKS[İI]K|MISSING|FEHLT)[^\]]*\]/giu;
const QC_LIST_LIMIT = 300;

let qcIssues = [];
let qcParity = [];
let qcParityFor = '';
let qcRunToken = 0;

function initQc() {
  document.body.classList.toggle('qc-open', !!prefGet('qcOpen', false));
  document.addEventListener('guide-rendered', () => setTimeout(runQc, 30));
}

function toggleQcPanel() {
  const open = !document.body.classList.contains('qc-open');
  document.body.classList.toggle('qc-open', open);
  prefSet('qcOpen', open);
  if (open) renderQcPanel();
}

function qcRoots() {
  return [...document.querySelectorAll('#pagesContainer .page-content, #pagesContainer .html-flow-content')];
}

function snippet(text, idx, len) {
  const a = Math.max(0, idx - 30);
  const b = Math.min(text.length, idx + len + 30);
  return (a > 0 ? '…' : '') + text.slice(a, b).replace(/\s+/g, ' ').trim() + (b < text.length ? '…' : '');
}

function qcIssueFor(type, el, detail, extra) {
  const srcEl = el && el.closest ? el.closest('[data-src]') : null;
  const lineEl = el && el.closest ? el.closest('[data-line]') : null;
  return {
    type,
    detail,
    el: srcEl || el || null,
    src: srcEl ? srcEl.dataset.src : '',
    line: lineEl ? lineEl.dataset.line : '',
    ...(extra || {})
  };
}

async function waitImagesSettled(root) {
  const imgs = [...root.querySelectorAll('img.md-img')];
  await Promise.all(imgs.map(img => img.complete ? null : new Promise(r => {
    img.addEventListener('load', r, { once: true });
    img.addEventListener('error', r, { once: true });
    setTimeout(r, 4000);
  })));
  return imgs;
}

async function runQc() {
  const token = ++qcRunToken;
  const container = document.getElementById('pagesContainer');
  if (!container || viewMode === 'compare' || !currentGuideId) {
    qcIssues = [];
    updateQcBadge();
    renderQcPanel();
    return;
  }
  const issues = [];
  const roots = qcRoots();

  // Metin taraması: [EKSİK] ve ölçülemeyen ifadeler
  const vagueRx = QC_VAGUE[currentLang] || null;
  for (const root of roots) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const text = node.nodeValue;
      if (!text || !text.trim()) continue;
      const parent = node.parentElement;
      if (parent && parent.closest('.xref-page, .md-figcaption .cap-num')) continue;
      QC_MISSING.lastIndex = 0;
      let m;
      while ((m = QC_MISSING.exec(text))) {
        issues.push(qcIssueFor('eksik', parent, snippet(text, m.index, m[0].length)));
      }
      if (vagueRx) {
        vagueRx.lastIndex = 0;
        while ((m = vagueRx.exec(text))) {
          issues.push(qcIssueFor('vague', parent, `“${m[0]}” — ${snippet(text, m.index, m[0].length)}`));
        }
      }
    }
  }

  // Kırık çapraz referanslar
  container.querySelectorAll('a.xref-broken').forEach(a => {
    issues.push(qcIssueFor('xref', a, `${a.textContent.trim()} — hedef bölüm yok`));
  });

  // DATA: çözülemeyen yer tutucular ve elle yazılıp DATA ile çelişen sayılar
  container.querySelectorAll('.data-missing').forEach(el => {
    issues.push(qcIssueFor('data', el, `${el.dataset.key} — DATA dosyasında yok`));
  });
  dataConflicts(roots).forEach(c => issues.push(qcIssueFor('conflict', c.el, c.detail)));
  glossaryViolations(roots, currentLang).forEach(c => issues.push(qcIssueFor('term', c.el, c.detail)));
  iso20607Coverage(currentLang).filter(r => !r.found)
    .forEach(r => issues.push({ type: 'iso', detail: `${r.item.label} — kılavuzda geçmiyor`, el: null, src: '', line: '' }));

  // Başlık kuralları: ### ve derinindeki md başlıkları, X.Y.Z.W numaraları
  container.querySelectorAll('[data-md-level]').forEach(h => {
    if (Number(h.dataset.mdLevel) >= 3) {
      issues.push(qcIssueFor('heading', h, `${'#'.repeat(Number(h.dataset.mdLevel))} kullanılmış: ${h.textContent.trim()}`));
    }
  });
  ((lastRender && lastRender.entries) || []).forEach(e => {
    if (e.level >= 4) {
      const el = document.getElementById('toc-anchor-' + e.anchorId);
      if (el && !(Number(el.dataset.mdLevel) >= 3)) {
        issues.push(qcIssueFor('heading', el, `4. seviye numara: ${e.number} ${e.title}`));
      }
    }
  });

  // ISO 7010: resmi dosyası olmayan işaretler (yedek çizim basılır)
  const missingSym = new Map();
  container.querySelectorAll('img.iso-sym[data-iso-kind]:not([data-iso-kind="official"])').forEach(img => {
    if (!missingSym.has(img.dataset.iso)) missingSym.set(img.dataset.iso, img);
  });
  missingSym.forEach((img, code) => issues.push(qcIssueFor('symbol', img,
    `${code} — assets/iso7010/${code}.svg ekleyin (şu an yedek çizim)`)));

  // Dil sızıntısı: TR belgede WARNING, EN belgede UYARI …
  container.querySelectorAll('[data-signal-lang]').forEach(el => {
    if (el.dataset.signalLang !== currentLang) {
      issues.push(qcIssueFor('signal', el, `${el.dataset.signal} (${el.dataset.signalLang.toUpperCase()}) — ${currentLang.toUpperCase()} belgede`));
    }
  });

  // Görseller (yüklenmesi beklenir)
  const imgs = await waitImagesSettled(container);
  if (token !== qcRunToken) return;
  const seen = new Set();
  imgs.forEach(img => {
    const broken = img.complete && img.naturalWidth === 0;
    img.classList.toggle('img-broken', broken);
    if (!broken) return;
    const src = decodeURIComponent(img.getAttribute('src') || '');
    if (seen.has(src)) return;
    seen.add(src);
    issues.push(qcIssueFor('img', img, src.replace(/^(\.\.\/)+/, '')));
  });

  // Çeviri eskime durumu (git / çeviri kaydı) — main'den
  (await fetchTranslationStatus()).forEach(f => {
    if (f.status !== 'eskimis' && f.status !== 'placeholder') return;
    if (currentLang !== 'tr' && f.lang !== currentLang) return;
    const file = currentLang === 'tr' ? f.src : f.target;
    const el = document.querySelector(`#pagesContainer [data-src="${CSS.escape(file)}"]`);
    const entry = ((lastRender && lastRender.entries) || []).find(e => e.file === file);
    const where = entry ? entry.number : file.split('/').pop();
    const L = f.lang.toUpperCase();
    const detail = f.status === 'placeholder'
      ? `${where}: ${L} çeviri bekliyor (yer tutucu)`
      : `${where}: ${L} eskimiş` + (f.tTime ? ` — TR ${fmtStamp(f.trTime)} › ${L} ${fmtStamp(f.tTime)}` : '');
    issues.push({ type: 'stale', detail, el, src: f.target, line: '1' });
  });
  if (token !== qcRunToken) return;

  qcIssues = issues;
  // Eşleşme sonucu yalnızca çalıştırıldığı kılavuz + dil için geçerli; başka
  // bir dile geçildiyse sonuç da "çalıştı" işareti de sıfırlanır.
  if (qcParityFor !== currentGuideId + '|' + currentLang) {
    qcParity = [];
    qcParityFor = '';
  }
  updateQcBadge();
  renderQcPanel();
}

function allQcIssues() {
  return qcIssues.concat(qcParity);
}

function updateQcBadge() {
  const badge = document.getElementById('qcBadge');
  if (!badge) return;
  const hard = allQcIssues().filter(i => QC_TYPES[i.type] && QC_TYPES[i.type].hard).length;
  badge.textContent = hard > 99 ? '99+' : String(hard);
  badge.classList.toggle('zero', hard === 0);
}

function renderQcPanel() {
  if (!document.body.classList.contains('qc-open')) return;
  const body = document.getElementById('qcBody');
  if (!body) return;
  body.innerHTML = '';

  if (viewMode === 'compare') {
    body.innerHTML = '<div class="sb-empty">Karşılaştırma görünümünde kalite kontrol çalışmaz.</div>';
    return;
  }
  if (!currentGuideId) {
    body.innerHTML = '<div class="sb-empty">Kılavuz seçilmedi.</div>';
    return;
  }

  const all = allQcIssues();
  const summary = document.createElement('div');
  summary.className = 'qc-summary';
  const hard = all.filter(i => QC_TYPES[i.type].hard).length;
  summary.textContent = hard
    ? `${hard} bulgu · ${all.length - hard} ifade uyarısı`
    : (all.length ? `Kural ihlali yok · ${all.length} ifade uyarısı` : 'Bulgu yok');
  body.appendChild(summary);

  for (const [type, meta] of Object.entries(QC_TYPES)) {
    const list = all.filter(i => i.type === type);
    const parityRan = type === 'parity' && qcParityFor === currentGuideId + '|' + currentLang;
    if (!list.length && !parityRan) continue;
    const group = document.createElement('details');
    group.className = 'qc-group' + (meta.hard ? '' : ' soft');
    group.open = meta.hard && list.length <= 40;
    const sum = document.createElement('summary');
    sum.innerHTML = `<span>${escapeHtml(meta.label)}</span><span class="qc-count">${list.length}</span>`;
    group.appendChild(sum);
    if (!list.length) {
      const ok = document.createElement('div');
      ok.className = 'qc-item ok';
      ok.textContent = 'Tüm dillerde yapı eşleşiyor.';
      group.appendChild(ok);
    }
    list.slice(0, QC_LIST_LIMIT).forEach(issue => group.appendChild(qcItem(issue)));
    if (list.length > QC_LIST_LIMIT) {
      const more = document.createElement('div');
      more.className = 'qc-item more';
      more.textContent = `… ${list.length - QC_LIST_LIMIT} kayıt daha`;
      group.appendChild(more);
    }
    body.appendChild(group);
  }
}

function qcItem(issue) {
  const row = document.createElement('div');
  row.className = 'qc-item';
  const text = document.createElement('button');
  text.className = 'qc-text';
  text.textContent = issue.detail;
  text.title = issue.src ? `${issue.src}${issue.line ? ':' + issue.line : ''}` : '';
  text.onclick = () => {
    let el = issue.el && issue.el.isConnected ? issue.el : null;
    if (!el && issue.nodePath) el = document.querySelector(`[data-node-path="${CSS.escape(issue.nodePath)}"]`);
    if (el) scrollToPage(el, { exact: true, center: true, flash: true });
    else if (issue.type === 'iso') openIsoReport();
    else showToast('Bu bulgu güncel görünümde bulunamadı', 'error');
  };
  row.appendChild(text);
  if (issue.src) {
    const open = document.createElement('button');
    open.className = 'qc-open-src';
    open.title = 'Kaynağı aç (VS Code)';
    open.textContent = '↗';
    open.onclick = () => openSourceFile(issue.src, issue.line);
    row.appendChild(open);
  }
  return row;
}

/* ── Dil eşleşmesi: her bölüm dosyasının yapısı diğer dillerle karşılaştırılır ── */
function mdSignature(md) {
  const lines = String(md || '').replace(/<!--[\s\S]*?-->/g, '').split(/\r?\n/);
  const sig = { heading: 0, table: 0, image: 0, item: 0, warning: 0 };
  lines.forEach(l => {
    if (/^#{1,6}\s/.test(l)) sig.heading++;
    if (l.includes('|') && l.includes('-') && /^\s*\|?[\s:|-]+\|?\s*$/.test(l)) sig.table++;
    sig.image += (l.match(/!\[/g) || []).length;
    if (/^\s*([-*+]|\d+[.)])\s+/.test(l)) sig.item++;
    if (parseSignalText(l.replace(/^\s*(>\s*|[-*+]\s+|\d+[.)]\s+)/, ''))) sig.warning++;
  });
  return sig;
}

const SIG_LABELS = { heading: 'Başlık', table: 'Tablo', image: 'Görsel', item: 'Liste maddesi', warning: 'Uyarı' };

function flattenTree(tree, prefix, out, pathIds) {
  (tree || []).forEach((n, i) => {
    const N = prefix ? `${prefix}.${i + 1}` : `${i + 1}`;
    const path = (pathIds || []).concat(n.id);
    out.set(path.join('/'), { number: N, file: n.file, content: n.content });
    flattenTree(n.children, N, out, path);
  });
  return out;
}

async function runParityCheck() {
  if (!currentGuideId || !lastRender || !lastRender.tree) return;
  const btn = document.getElementById('qcParityBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Karşılaştırılıyor…'; }
  try {
    const others = currentDiller.filter(l => l !== currentLang);
    const base = flattenTree(lastRender.tree, '', new Map());
    const issues = [];
    for (const lang of others) {
      const res = await window.electronAPI.getGuide(currentGuideId, lang);
      if (!res || !res.ok || res.lang !== lang) continue;
      const other = flattenTree(res.tree, '', new Map());
      const L = lang.toUpperCase();
      const C = currentLang.toUpperCase();

      for (const [path, node] of base) {
        const o = other.get(path);
        if (!o) {
          if (node.content.trim()) {
            issues.push({ type: 'parity', detail: `${node.number}: ${L} dosyası yok veya boş`, nodePath: path, src: node.file, line: '1' });
          }
          continue;
        }
        if (!node.content.trim() || !o.content.trim()) continue;
        const a = mdSignature(node.content);
        const b = mdSignature(o.content);
        const diffs = Object.keys(a).filter(k => a[k] !== b[k]).map(k => `${SIG_LABELS[k]} ${C} ${a[k]} / ${L} ${b[k]}`);
        if (diffs.length) {
          issues.push({ type: 'parity', detail: `${node.number}: ${diffs.join(' · ')}`, nodePath: path, src: o.file, line: '1' });
        }
      }
      for (const [path, o] of other) {
        if (!base.has(path) && o.content.trim()) {
          issues.push({ type: 'parity', detail: `${o.number}: yalnızca ${L} dosyası var (${C} yok)`, nodePath: path, src: o.file, line: '1' });
        }
      }
    }
    qcParity = issues;
    qcParityFor = currentGuideId + '|' + currentLang;
    updateQcBadge();
    renderQcPanel();
    if (!others.length) showToast('Bu kılavuzun tek dili var', 'success');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Dil eşleşmesi'; }
  }
}

/* ── DATA çelişki taraması (TR) ──
   DATA'daki sayısal bir değerin etiketi (ör. "Besleme gerilimi") metinde veya
   tablo satırının ilk hücresinde geçiyor, yanındaki sayı DATA'dakinden farklıysa
   bulgu üretir. {{…}} ile DATA'dan gelen değerler (.data-val) taranmaz. */
const QC_NUM_RX = /(\d{1,3}(?:\.\d{3})+|\d+)(?:,(\d+))?\s*(kW|kVA|kA|W|V|A|Hz|bar|mm|cm|m³\/h|m|kg|g|°C|rpm|d\/dk|dB\(A\)|dB|l\/dk|L\/min|sn|s|dk|min|%)?(?![\p{L}\d])/gu;

function parseQcNumbers(text) {
  const out = [];
  QC_NUM_RX.lastIndex = 0;
  let m;
  while ((m = QC_NUM_RX.exec(text))) {
    const intPart = m[1].replace(/\./g, '');
    const num = Number(intPart + (m[2] ? '.' + m[2] : ''));
    if (Number.isFinite(num)) out.push({ num, unit: m[3] || '', index: m.index });
  }
  return out;
}

function dataFacts() {
  if (!currentData || !currentData.blocks) return [];
  const facts = [];
  Object.values(currentData.blocks).forEach(b => b.entries.forEach(e => {
    if (!e.value.trim() || /EKS[İI]K/i.test(e.value)) return;
    const nums = parseQcNumbers(e.value);
    if (!nums.length) return;
    const label = e.key.replace(/\([^)]*\)/g, ' ').replace(/[—–-]\s*$/, '').replace(/\s+/g, ' ').trim();
    if (label.length < 6) return;
    const keyUnit = (e.key.match(/\(([^)]+)\)\s*$/) || [])[1] || '';
    facts.push({ block: b.name, key: e.key, label: label.toLocaleLowerCase('tr-TR'), nums, unit: keyUnit || nums[0].unit });
  }));
  return facts;
}

function textWithoutData(el) {
  const c = el.cloneNode(true);
  c.querySelectorAll('.data-val, .data-missing, .xref-page').forEach(x => x.remove());
  return c.textContent.replace(/\s+/g, ' ');
}

function dataConflicts(roots) {
  if (currentLang !== 'tr') return [];
  const facts = dataFacts();
  if (!facts.length) return [];
  const found = [];
  const same = (a, b) => Math.abs(a - b) < 1e-9;
  const report = (el, fact, seen) => found.push({
    el,
    detail: `${fact.key}: metinde ${seen}, DATA'da ${fact.nums.map(n => n.num + (n.unit ? ' ' + n.unit : '')).join(' / ')}`
  });

  for (const root of roots) {
    // Tablo satırları: ilk hücre etiket, diğer hücrelerde sayı
    root.querySelectorAll('table.md-table:not(.data-table) tbody tr').forEach(tr => {
      const cells = [...tr.cells];
      if (cells.length < 2) return;
      const head = textWithoutData(cells[0]).toLocaleLowerCase('tr-TR');
      // En uzun etiket kazanır ("Toplam kurulu güç — ısıtma dahil" > "Toplam kurulu güç")
      const fact = facts.filter(f => head.includes(f.label)).sort((a, b) => b.label.length - a.label.length)[0];
      if (!fact) return;
      const nums = cells.slice(1).flatMap(c => parseQcNumbers(textWithoutData(c)));
      if (!nums.length) return;
      if (!nums.some(n => fact.nums.some(d => same(n.num, d.num)))) {
        report(tr, fact, nums.map(n => n.num + (n.unit ? ' ' + n.unit : '')).join(', '));
      }
    });
    // Paragraf / madde: etiketten sonraki 80 karakterdeki ilk (birimi uyan) sayı
    root.querySelectorAll('p.md-p, li, .callout-body').forEach(el => {
      if (el.closest('table')) return;
      const text = textWithoutData(el);
      const low = text.toLocaleLowerCase('tr-TR');
      const hits = facts.map(f => ({ fact: f, at: low.indexOf(f.label) })).filter(h => h.at >= 0);
      hits.forEach(({ fact, at }) => {
        if (hits.some(h => h.fact !== fact && h.fact.label.length > fact.label.length &&
          h.at <= at && h.at + h.fact.label.length >= at + fact.label.length)) return;
        const tail = text.slice(at + fact.label.length, at + fact.label.length + 80);
        const nums = parseQcNumbers(tail).filter(n => !fact.unit || n.unit === fact.unit);
        if (!nums.length) return;
        if (!fact.nums.some(d => same(nums[0].num, d.num))) {
          report(el, fact, nums[0].num + (nums[0].unit ? ' ' + nums[0].unit : ''));
        }
      });
    });
  }
  return found;
}

/* ── Çeviri eskime durumu ── */
let translatorReady = false;

async function fetchTranslationStatus() {
  if (!window.electronAPI || !window.electronAPI.translationStatus || !currentGuideId) return [];
  try {
    const r = await window.electronAPI.translationStatus(currentGuideId);
    if (!r || !r.ok) return [];
    translatorReady = !!r.translator;
    return r.files || [];
  } catch (e) {
    return [];
  }
}

function fmtStamp(ts) {
  if (!ts) return '—';
  const d = new Date(ts * 1000);
  const p = (n) => String(n).padStart(2, '0');
  return `${p(d.getDate())}.${p(d.getMonth() + 1)}.${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}`;
}

async function retranslate(srcRel, lang) {
  const L = lang.toUpperCase();
  if (!window.confirm(`${srcRel.split('/').pop()} → ${L}\n\n${L} dosyası TR kaynaktan makine çevirisiyle yeniden yazılacak. ` +
    'Bu dosyada elle yapılmış düzeltmeler kaybolur. Devam edilsin mi?')) return;
  showToast(`${L} çevriliyor…`, 'success');
  const r = await window.electronAPI.translateFile(srcRel, lang);
  if (r && r.ok) showToast(`${L} çevrildi: ${r.rel.split('/').pop()}`, 'success');
  else showToast('Çeviri başarısız: ' + ((r && r.error) || ''), 'error');
}
