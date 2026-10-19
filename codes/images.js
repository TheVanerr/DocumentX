/* ── Görsel yönetimi ──
   1) İşaretler: <görsel>.marks.json → fotoğraf üzerinde numaralı daireler
      ({ "markers": [{ "x": 0.31, "y": 0.42, "n": "1" }] }, x/y görsele göre 0–1).
      Düzenleme: Alt+Shift+tık görsel üzerinde veya Görsel raporu → İşaretle.
   2) Görsel raporu: eksik / kullanılmayan / büyük dosyalar.
   3) Çıktı optimizasyonu: PDF öncesi görseller küçültülmüş kopyalarla değiştirilir. */

/* renderer'daki görsel yolu ('../projects/X/assets/a.png') → işaret anahtarı ('projects/X/assets/a.png') */
function markKey(src) {
  let s = String(src || '');
  if (assetBase !== '../' && s.startsWith(assetBase)) s = s.slice(assetBase.length);
  try { s = decodeURIComponent(s); } catch (e) { /* olduğu gibi */ }
  return s.replace(/^(\.\.\/)+/, '').replace(/\\/g, '/');
}

/* object-fit'e göre görselin kutu içindeki çizim alanı (kutuya göre px). */
function drawnRect(img) {
  const bw = img.offsetWidth;
  const bh = img.offsetHeight;
  const nw = img.naturalWidth || bw;
  const nh = img.naturalHeight || bh;
  const fit = getComputedStyle(img).objectFit;
  if (fit !== 'cover' && fit !== 'contain') return { x: 0, y: 0, w: bw, h: bh };
  const s = fit === 'cover' ? Math.max(bw / nw, bh / nh) : Math.min(bw / nw, bh / nh);
  const w = nw * s;
  const h = nh * s;
  return { x: (bw - w) / 2, y: (bh - h) / 2, w, h };
}

/* Çizimden sonra çağrılır: işaretli görsellerin hücresine işaret katmanı ekler. */
function placeImageMarks(root) {
  if (!root || !currentMarks) return;
  root.querySelectorAll('.md-figure-cell img.md-img').forEach(img => {
    const list = currentMarks[markKey(img.getAttribute('src'))];
    const cell = img.closest('.md-figure-cell');
    cell.querySelectorAll('.img-mark').forEach(m => m.remove());
    if (!list || !list.length) return;
    cell.classList.add('has-marks');
    const r = drawnRect(img);
    const cw = cell.clientWidth || 1;
    const ch = cell.clientHeight || 1;
    const ox = img.offsetLeft;
    const oy = img.offsetTop;
    list.forEach(m => {
      const px = ox + r.x + m.x * r.w;
      const py = oy + r.y + m.y * r.h;
      if (px < 0 || py < 0 || px > cw || py > ch) return; // kırpılmış alanda kalan işaret
      const el = document.createElement('span');
      el.className = 'img-mark';
      el.textContent = m.n;
      el.style.left = (px / cw * 100).toFixed(2) + '%';
      el.style.top = (py / ch * 100).toFixed(2) + '%';
      cell.appendChild(el);
    });
  });
}

/* ── İşaret düzenleyici ── */
let mkState = null;   // { key, markers, drag }

function openMarkEditor(srcOrKey) {
  const key = markKey(srcOrKey);
  if (!/^projects\//.test(key)) { showToast('Yalnızca proje görselleri işaretlenebilir', 'error'); return; }
  mkState = { key, markers: (currentMarks[key] || []).map(m => ({ ...m })), drag: null };
  const img = document.getElementById('mkImg');
  img.src = assetUrl(key);
  document.getElementById('mkTitle').textContent = key.replace(/^projects\//, '');
  document.getElementById('mkOverlay').style.display = 'flex';
  img.onload = renderMarkEditor;
  if (img.complete) renderMarkEditor();
}

function closeMarkEditor() {
  document.getElementById('mkOverlay').style.display = 'none';
  mkState = null;
}

function renderMarkEditor() {
  if (!mkState) return;
  const layer = document.getElementById('mkLayer');
  layer.innerHTML = '';
  mkState.markers.forEach((m, i) => {
    const el = document.createElement('span');
    el.className = 'img-mark mk-edit';
    el.textContent = m.n;
    el.style.left = (m.x * 100) + '%';
    el.style.top = (m.y * 100) + '%';
    el.title = 'Sürükle: taşı · Çift tık: etiketi değiştir · Sağ tık: sil';
    el.onmousedown = (ev) => { ev.preventDefault(); ev.stopPropagation(); mkState.drag = i; };
    el.ondblclick = (ev) => {
      ev.stopPropagation();
      const v = window.prompt('İşaret etiketi', m.n);
      if (v != null && v.trim()) { m.n = v.trim().slice(0, 4); renderMarkEditor(); }
    };
    el.oncontextmenu = (ev) => { ev.preventDefault(); mkState.markers.splice(i, 1); renderMarkEditor(); };
    layer.appendChild(el);
  });
  document.getElementById('mkCount').textContent = `${mkState.markers.length} işaret`;
}

function mkPoint(ev) {
  const r = document.getElementById('mkImg').getBoundingClientRect();
  return {
    x: Math.min(1, Math.max(0, (ev.clientX - r.left) / r.width)),
    y: Math.min(1, Math.max(0, (ev.clientY - r.top) / r.height))
  };
}

function initMarkEditor() {
  const stage = document.getElementById('mkStage');
  if (!stage) return;
  stage.addEventListener('click', (ev) => {
    if (!mkState || ev.target.classList.contains('mk-edit')) return;
    const p = mkPoint(ev);
    const nums = mkState.markers.map(m => parseInt(m.n, 10)).filter(Number.isFinite);
    mkState.markers.push({ ...p, n: String(nums.length ? Math.max(...nums) + 1 : 1) });
    renderMarkEditor();
  });
  window.addEventListener('mousemove', (ev) => {
    if (!mkState || mkState.drag == null) return;
    Object.assign(mkState.markers[mkState.drag], mkPoint(ev));
    renderMarkEditor();
  });
  window.addEventListener('mouseup', () => { if (mkState) mkState.drag = null; });
}

async function saveMarkEditor() {
  if (!mkState) return;
  const rel = mkState.key + '.marks.json';
  const markers = mkState.markers.map(m => ({ x: +m.x.toFixed(4), y: +m.y.toFixed(4), n: m.n }));
  const r = await window.electronAPI.writeFile(rel, JSON.stringify({ markers }, null, 2) + '\n', 0, true);
  if (!r || !r.ok) { showToast('İşaretler kaydedilemedi: ' + ((r && r.error) || ''), 'error'); return; }
  currentMarks[mkState.key] = markers;
  closeMarkEditor();
  showToast('İşaretler kaydedildi', 'success');
  if (lastGuideCache) {
    clearPaginationCache();
    await renderGuide(lastGuideCache.modelName, lastGuideCache.tree, document.getElementById('pagesContainer'));
  }
}

/* ── Görsel raporu ── */
function fmtBytes(n) {
  return n > 1024 * 1024 ? (n / 1024 / 1024).toFixed(1) + ' MB' : Math.round(n / 1024) + ' KB';
}

async function openAssetReport() {
  if (typeof closeToolsMenu === 'function') closeToolsMenu();
  if (!currentGuideId) { showToast('Önce bir kılavuz seçin', 'error'); return; }
  const body = document.getElementById('arBody');
  body.innerHTML = '<div class="sb-empty">Görseller taranıyor…</div>';
  document.getElementById('arOverlay').style.display = 'flex';
  const r = await window.electronAPI.assetReport(currentGuideId);
  if (!r || !r.ok) { body.innerHTML = `<div class="sb-empty">Rapor alınamadı: ${escapeHtml((r && r.error) || '')}</div>`; return; }

  const section = (title, items, render, emptyText) => {
    const box = document.createElement('details');
    box.className = 'qc-group';
    box.open = items.length > 0 && items.length <= 60;
    box.innerHTML = `<summary><span>${escapeHtml(title)}</span><span class="qc-count">${items.length}</span></summary>`;
    if (!items.length) {
      const ok = document.createElement('div');
      ok.className = 'qc-item ok';
      ok.textContent = emptyText;
      box.appendChild(ok);
    }
    items.forEach(it => box.appendChild(render(it)));
    body.appendChild(box);
  };
  const row = (text, actions) => {
    const d = document.createElement('div');
    d.className = 'qc-item';
    const t = document.createElement('span');
    t.className = 'qc-text';
    t.textContent = text;
    d.appendChild(t);
    actions.forEach(([label, fn, title]) => {
      const b = document.createElement('button');
      b.className = 'qc-open-src';
      b.textContent = label;
      b.title = title || '';
      b.onclick = fn;
      d.appendChild(b);
    });
    return d;
  };

  body.innerHTML = `<div class="qc-summary">${r.fileCount} dosya · ${r.refCount} farklı görsel kullanılıyor · büyük görseller çıktıda otomatik küçültülür (Belge ayarları)</div>`;
  section('Eksik (md\'de var, dosya yok)', r.missing,
    it => row(`${it.rel.replace(/^projects\/[^/]+\//, '')} — ${it.refs.length} yerde`, [
      ['↗', () => openSourceFile(it.refs[0].file, it.refs[0].line), 'İlk kullanıldığı md satırını aç']
    ]), 'Eksik görsel yok.');
  section('Kullanılmayan (dosya var, md\'de yok)', r.unused,
    it => row(`${it.rel.replace(/^projects\/[^/]+\//, '')} · ${fmtBytes(it.size)}`, []), 'Kullanılmayan dosya yok.');
  section('Büyük (>1,5 MB veya >2500 px)', r.large,
    it => row(`${it.rel.replace(/^projects\/[^/]+\//, '')} · ${fmtBytes(it.size)} · ${it.w}×${it.h}`, []), 'Büyük dosya yok.');
  section('İşaretlenebilir görseller', r.used,
    it => row(`${it.rel.replace(/^projects\/[^/]+\//, '')}${it.marks ? ' · işaretli' : ''}`, [
      ['✎', () => { closeAssetReport(); openMarkEditor(it.rel); }, 'Numaralı işaret ekle / düzenle']
    ]), 'Görsel yok.');
}

function closeAssetReport() {
  document.getElementById('arOverlay').style.display = 'none';
}

/* ── PDF öncesi görsel optimizasyonu ── */
async function swapOptimizedImages(root) {
  if (!outputOption('gorsel_optimize') || !window.electronAPI || !window.electronAPI.optimizeImages) return () => {};
  const imgs = [...root.querySelectorAll('img.md-img')].filter(i => !/^data:/i.test(i.getAttribute('src') || ''));
  const srcs = [...new Set(imgs.map(i => i.getAttribute('src')))];
  if (!srcs.length) return () => {};
  const map = await window.electronAPI.optimizeImages(srcs);
  const swapped = [];
  imgs.forEach(img => {
    const orig = img.getAttribute('src');
    if (!map[orig]) return;
    swapped.push([img, orig]);
    img.setAttribute('src', map[orig]);
  });
  await waitForImages(root);
  return () => swapped.forEach(([img, orig]) => img.setAttribute('src', orig));
}
