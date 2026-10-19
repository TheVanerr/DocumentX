/* ── Dil karşılaştırma görünümü ──
   Seçili dil (sol) ile ikinci dil (sağ) bölüm bölüm yan yana. Yapısı
   (başlık/tablo/görsel/liste/uyarı sayısı) farklı olan bölümler işaretlenir;
   TR ↔ EN/DE 1:1 kuralını gözle doğrulamak içindir. */

let compareLang = prefGet('compareLang', '');
let compareOnlyDiffs = false;

function syncCompareLangSelect() {
  const sel = document.getElementById('compareLang');
  if (!sel) return;
  const others = currentDiller.filter(l => l !== currentLang);
  sel.innerHTML = others.length
    ? others.map(l => `<option value="${l}">${l.toUpperCase()}</option>`).join('')
    : '<option value="">—</option>';
  if (!others.includes(compareLang)) compareLang = others[0] || '';
  sel.value = compareLang;
  const wrap = document.getElementById('compareLangWrap');
  if (wrap) wrap.style.display = viewMode === 'compare' ? 'flex' : 'none';
}

async function onCompareLangChange(v) {
  compareLang = v;
  prefSet('compareLang', v);
  if (viewMode === 'compare' && lastGuideCache) {
    await renderGuide(lastGuideCache.modelName, lastGuideCache.tree, document.getElementById('pagesContainer'));
  }
}

function toggleCompareOnlyDiffs(on) {
  compareOnlyDiffs = !!on;
  document.querySelectorAll('.compare-row').forEach(r => {
    r.style.display = compareOnlyDiffs && !r.classList.contains('has-diff') && !r.classList.contains('has-stale') ? 'none' : '';
  });
}

function compareRowTitle(node, id) {
  const m = String((node && node.content) || '').match(/^#{1,6}\s+(.+)$/m);
  return m ? stripNum(m[1].replace(/[*_`]/g, '').trim()) : sectionFallbackTitle(id, currentLang);
}

function compareCell(node, lang) {
  const cell = document.createElement('div');
  cell.className = 'compare-cell html-flow-content';
  cell.lang = lang;
  if (!node || !node.content.trim()) {
    cell.classList.add('compare-missing');
    cell.textContent = `${lang.toUpperCase()} dosyası yok veya boş`;
    return cell;
  }
  applyHtmlFigureLayout(mdToBlocks(node.content, node.file)).forEach(b => cell.appendChild(b));
  return cell;
}

async function renderCompareGuide(modelName, tree, container) {
  container.innerHTML = '';
  container.className = 'pages-container compare-container';
  lastRender = { entries: [], figures: [], tables: [], xrefs: [], tree };

  if (!compareLang) {
    container.innerHTML = infoCard('Karşılaştırma için kılavuzun en az iki dili olmalı.');
    return;
  }

  const res = await window.electronAPI.getGuide(currentGuideId, compareLang);
  const left = flattenTree(tree, '', new Map());
  const right = res && res.ok && res.lang === compareLang ? flattenTree(res.tree, '', new Map()) : new Map();

  // Sıra: sol dilin bölümleri; yalnızca sağda olanlar, sağdaki öncülünden hemen sonra.
  const keys = [...left.keys()];
  let prev = null;
  for (const k of right.keys()) {
    if (!left.has(k)) {
      const at = prev ? keys.indexOf(prev) + 1 : keys.length;
      keys.splice(at, 0, k);
    }
    prev = k;
  }

  const L = currentLang.toUpperCase();
  const R = compareLang.toUpperCase();
  const doc = document.createElement('div');
  doc.className = 'compare-doc';

  let diffCount = 0;
  const rows = keys.map(path => {
    const a = left.get(path);
    const b = right.get(path);
    const id = path.split('/').pop();
    const number = (a || b).number;

    const row = document.createElement('section');
    row.className = 'compare-row';

    const diffs = [];
    if (!a || !a.content.trim()) diffs.push(`${L} yok`);
    if (!b || !b.content.trim()) diffs.push(`${R} yok`);
    if (!diffs.length) {
      const sa = mdSignature(a.content);
      const sb = mdSignature(b.content);
      Object.keys(sa).forEach(k => {
        if (sa[k] !== sb[k]) diffs.push(`${SIG_LABELS[k]} ${sa[k]}/${sb[k]}`);
      });
    }
    const bothEmpty = (!a || !a.content.trim()) && (!b || !b.content.trim());
    if (diffs.length && !bothEmpty) {
      row.classList.add('has-diff');
      diffCount++;
    }

    const head = document.createElement('div');
    head.className = 'compare-row-head';
    head.innerHTML = `<span class="compare-num">${escapeHtml(fmtNum(number))}</span>` +
      `<span class="compare-title">${escapeHtml(compareRowTitle(a || b, id))}</span>` +
      (row.classList.contains('has-diff') ? `<span class="compare-diff">${escapeHtml(diffs.join(' · '))}</span>` : '');
    row.appendChild(head);

    if (bothEmpty) return row;
    const cols = document.createElement('div');
    cols.className = 'compare-cols';
    cols.appendChild(compareCell(a, currentLang));
    cols.appendChild(compareCell(b, compareLang));
    row.appendChild(cols);
    return row;
  });

  // Çeviri eskime rozetleri (TR ↔ X karşılaştırmasında)
  const pairLang = currentLang === 'tr' ? compareLang : (compareLang === 'tr' ? currentLang : '');
  if (pairLang) {
    const status = await fetchTranslationStatus();
    keys.forEach((path, i) => {
      const trNode = (currentLang === 'tr' ? left : right).get(path);
      if (!trNode || !trNode.file) return;
      const st = status.find(f => f.src === trNode.file && f.lang === pairLang);
      if (!st || st.status === 'guncel' || st.status === 'yok') return;
      const L = pairLang.toUpperCase();
      const head = rows[i].querySelector('.compare-row-head');
      const badge = document.createElement('span');
      badge.className = 'compare-stale';
      badge.textContent = st.status === 'placeholder' ? `${L} çeviri bekliyor` : `${L} eskimiş`;
      badge.title = st.tTime ? `TR ${fmtStamp(st.trTime)} · ${L} ${fmtStamp(st.tTime)}` : 'TR kaynak, son çeviriden sonra değişti';
      head.appendChild(badge);
      rows[i].classList.add('has-stale');
      if (translatorReady) {
        const btn = document.createElement('button');
        btn.className = 'compare-retranslate';
        btn.textContent = 'Yeniden çevir';
        btn.onclick = () => retranslate(st.src, pairLang);
        head.appendChild(btn);
      }
    });
  }

  const bar = document.createElement('div');
  bar.className = 'compare-bar';
  bar.innerHTML = `<span class="compare-langs"><b>${L}</b> ↔ <b>${R}</b></span>` +
    `<span class="compare-stat">${keys.length} bölüm · ${diffCount} bölümde yapı farkı</span>` +
    `<label class="compare-filter"><input type="checkbox" ${compareOnlyDiffs ? 'checked' : ''} onchange="toggleCompareOnlyDiffs(this.checked)" /> Yalnızca farklı bölümler</label>`;
  doc.appendChild(bar);
  rows.forEach(r => doc.appendChild(r));
  container.appendChild(doc);
  applyHtmlFigureSmartFit(doc);
  toggleCompareOnlyDiffs(compareOnlyDiffs);
}
