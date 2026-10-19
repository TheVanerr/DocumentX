/* ── Proje panosu: tüm kılavuzların teslime hazırlık durumu ──
   Dil doluluğu, [EKSİK] sayısı, DATA doluluğu, eskimiş çeviri, revizyon, son çıktı. */

let dashRows = [];
let dashSort = { key: 'label', dir: 1 };

/* ── Araçlar menüsü ── */
function toggleToolsMenu(evt) {
  if (evt) evt.stopPropagation();
  document.getElementById('toolsMenu').classList.toggle('open');
}

function closeToolsMenu() {
  const m = document.getElementById('toolsMenu');
  if (m) m.classList.remove('open');
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.tools-wrap')) closeToolsMenu();
});

async function openDashboard() {
  closeToolsMenu();
  document.getElementById('dashOverlay').style.display = 'flex';
  const body = document.getElementById('dashBody');
  body.innerHTML = '<div class="sb-empty">Projeler taranıyor…</div>';
  const r = await window.electronAPI.dashboard();
  if (!r || !r.ok) {
    body.innerHTML = `<div class="sb-empty">Pano yüklenemedi: ${escapeHtml((r && r.error) || '')}</div>`;
    return;
  }
  dashRows = r.rows;
  renderDashboard();
}

function closeDashboard() {
  document.getElementById('dashOverlay').style.display = 'none';
}

function dashDate(ts) {
  return ts ? fmtStamp(ts).slice(0, 10) : '—';
}

const DASH_COLS = [
  { key: 'label', title: 'Kılavuz', val: r => r.label },
  { key: 'model', title: 'Model', val: r => r.model },
  { key: 'firma', title: 'Firma', val: r => r.firma },
  { key: 'rev', title: 'Rev', val: r => r.rev },
  { key: 'langs', title: 'Diller (doluluk · [EKSİK])', val: r => Math.min(...r.diller.map(l => (r.langs[l] || {}).complete || 0)) },
  { key: 'data', title: 'DATA', val: r => (r.data ? r.data.filled / Math.max(1, r.data.total) : -1) },
  { key: 'stale', title: 'Eskimiş çeviri', val: r => r.stale },
  { key: 'lastEdit', title: 'Son düzenleme', val: r => r.lastEdit },
  { key: 'lastExport', title: 'Son çıktı', val: r => r.lastExport }
];

function sortDashboard(key) {
  dashSort = { key, dir: dashSort.key === key ? -dashSort.dir : 1 };
  renderDashboard();
}

function renderDashboard() {
  const body = document.getElementById('dashBody');
  const q = foldTr(document.getElementById('dashFilter').value.trim());
  const showModels = document.getElementById('dashModels').checked;
  const col = DASH_COLS.find(c => c.key === dashSort.key) || DASH_COLS[0];
  const rows = dashRows
    .filter(r => showModels || r.type === 'project')
    .filter(r => !q || foldTr(`${r.label} ${r.dir} ${r.model} ${r.firma}`).includes(q))
    .sort((a, b) => {
      const x = col.val(a);
      const y = col.val(b);
      return (typeof x === 'number' ? x - y : String(x).localeCompare(String(y), 'tr')) * dashSort.dir;
    });

  const table = document.createElement('table');
  table.className = 'dash-table';
  const head = document.createElement('tr');
  DASH_COLS.forEach(c => {
    const th = document.createElement('th');
    th.textContent = c.title + (dashSort.key === c.key ? (dashSort.dir > 0 ? ' ▴' : ' ▾') : '');
    th.onclick = () => sortDashboard(c.key);
    head.appendChild(th);
  });
  table.appendChild(head);

  rows.forEach(r => {
    const tr = document.createElement('tr');
    if (r.id === currentGuideId) tr.classList.add('current');
    const langs = r.diller.map(l => {
      const L = r.langs[l] || { complete: 0, missing: 0 };
      const cls = L.complete >= 100 ? 'ok' : (L.complete >= 50 ? 'mid' : 'low');
      return `<span class="dash-lang ${cls}" title="${l.toUpperCase()}: ${L.filled || 0}/${(r.langs.tr || {}).filled || 0} dosya dolu, ${L.missing} [EKSİK]">` +
        `${l.toUpperCase()} ${L.complete}%${L.missing ? ` · <b>${L.missing}</b>` : ''}</span>`;
    }).join('');
    const data = r.data
      ? `<span class="dash-bar"><i style="width:${Math.round(r.data.filled / Math.max(1, r.data.total) * 100)}%"></i></span> ${r.data.filled}/${r.data.total}`
      : '<span class="dash-muted">yok</span>';
    tr.innerHTML =
      `<td><div class="dash-label">${escapeHtml(r.label)}</div><div class="dash-dir">${escapeHtml(r.dir)}${r.type === 'model' ? ' · şablon' : ''}</div></td>` +
      `<td>${escapeHtml(r.model)}</td>` +
      `<td>${escapeHtml(r.firma || '—')}</td>` +
      `<td>${escapeHtml(r.rev || 'xx')}<div class="dash-dir">${escapeHtml(r.tarih ? formatCoverDate(r.tarih) : '')}${r.revisions ? ` · ${r.revisions} kayıt` : ''}</div></td>` +
      `<td>${langs}</td>` +
      `<td>${data}</td>` +
      `<td>${r.stale ? `<span class="dash-warn">${r.stale}</span>` : '<span class="dash-okc">0</span>'}</td>` +
      `<td>${dashDate(r.lastEdit)}</td>` +
      `<td>${r.lastExport ? `${dashDate(r.lastExport)}<div class="dash-dir">${r.exportCount} dosya</div>` : '<span class="dash-muted">—</span>'}</td>`;
    tr.onclick = async () => {
      closeDashboard();
      const sel = document.getElementById('modelSelect');
      sel.value = r.id;
      await onModelChange(r.id);
    };
    table.appendChild(tr);
  });

  body.innerHTML = '';
  body.appendChild(table);
  document.getElementById('dashCount').textContent = `${rows.length} kılavuz`;
}
