/* ── Revizyon farkı: değişiklik çubukları ──
   project.yaml > cikti.degisiklik_cubugu: true iken, taban sürümden
   (cikti.degisiklik_tabani ya da son revizyon kaydının commit'i) bu yana
   değişen paragraf / tablo satırı / madde sol kenarda çizgiyle işaretlenir.
   Değişen satırlar git diff ile bulunur (main.js > changed-lines). */

let currentChanges = null;   // Map(dosya → Set(satır))

function lastRevisionCommit() {
  for (let i = currentRevisions.length - 1; i >= 0; i--) {
    if (currentRevisions[i] && currentRevisions[i].commit) return currentRevisions[i].commit;
  }
  return '';
}

function changeBaseRef() {
  return String((currentOutput && currentOutput.degisiklik_tabani) || lastRevisionCommit() || '');
}

async function fetchChangedLines(ref) {
  if (!ref || !window.electronAPI || !window.electronAPI.changedLines) return null;
  try {
    const r = await window.electronAPI.changedLines(currentGuideId, ref);
    if (!r || !r.ok) return null;
    return new Map(Object.entries(r.files).map(([k, v]) => [k, new Set(v)]));
  } catch (e) {
    return null;
  }
}

async function loadChanges() {
  currentChanges = null;
  if (!outputOption('degisiklik_cubugu') || !currentGuideId) return;
  currentChanges = await fetchChangedLines(changeBaseRef());
}

function lineRangeChanged(set, from, to) {
  for (let l = from; l <= to; l++) if (set.has(l)) return true;
  return false;
}

/* blocks: belge blokları (data-src, data-line, data-line-end taşır). */
function applyChangeBars(blocks, changes) {
  if (!changes || !changes.size) return 0;
  let count = 0;
  blocks.forEach(b => {
    const set = b.dataset && changes.get(b.dataset.src);
    if (!set) return;
    const fine = b.querySelectorAll(':scope > tbody > tr[data-line], :scope > li[data-line]');
    if (fine.length) {
      fine.forEach(el => {
        if (set.has(Number(el.dataset.line))) { el.classList.add('dx-changed'); count++; }
      });
      // Tablo başlığı / liste ilk satırı (data-line) değiştiyse bloğun tamamı
      if (b.tagName === 'TABLE' && set.has(Number(b.dataset.line))) { b.classList.add('dx-changed'); count++; }
      return;
    }
    const from = Number(b.dataset.line) || 0;
    const to = Number(b.dataset.lineEnd) || from;
    if (from && lineRangeChanged(set, from, to)) { b.classList.add('dx-changed'); count++; }
  });
  return count;
}

/* Değişen bölümler → revizyon açıklaması önerisi ("Bölüm 1.1, 2.1 güncellendi."). */
function suggestRevisionText(changes, lang) {
  const entries = (lastRender && lastRender.entries) || [];
  const nums = [];
  entries.forEach(e => {
    if (e.level > 2 || !e.file || !changes.has(e.file)) return;
    if (!nums.includes(e.number)) nums.push(e.number);
  });
  if (!nums.length) return '';
  const list = nums.join(', ');
  if (lang === 'en') return `${nums.length > 1 ? 'Sections' : 'Section'} ${list} updated.`;
  if (lang === 'de') return `${nums.length > 1 ? 'Abschnitte' : 'Abschnitt'} ${list} aktualisiert.`;
  return `Bölüm ${list} güncellendi.`;
}
