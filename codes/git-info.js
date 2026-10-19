/* Git yardımcıları — çeviri eskime takibi ve revizyon farkı (değişiklik çubukları).
   Git yoksa veya klasör depoda değilse fonksiyonlar boş sonuç döner (özellik sessizce kapanır).
   Yollar: root'a (DocumentX kökü) göre "/" ayraçlı göreli yol. */
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function git(root, args) {
  try {
    const r = spawnSync('git', ['-c', 'core.quotepath=false', ...args], {
      cwd: root, encoding: 'utf8', windowsHide: true, maxBuffer: 64 * 1024 * 1024
    });
    if (r.error || r.status !== 0) return null;
    return r.stdout;
  } catch (e) {
    return null;
  }
}

function toplevel(root) {
  const out = git(root, ['rev-parse', '--show-toplevel']);
  return out ? path.resolve(out.trim()) : null;
}

/* git çıktısındaki yol (depo köküne göre) → root'a göre yol */
function makeRel(root) {
  const top = toplevel(root);
  return (p) => {
    const abs = top ? path.join(top, p) : path.join(root, p);
    return path.relative(root, abs).split(path.sep).join('/');
  };
}

function available(root) {
  return !!toplevel(root);
}

/* dirRel altındaki her dosyanın son commit zamanı (sn) — Map(rel → ts) */
function lastCommitTimes(root, dirRel) {
  const out = git(root, ['log', '--format=@@%ct', '--name-only', '--', dirRel]);
  const map = new Map();
  if (!out) return map;
  const rel = makeRel(root);
  let ts = 0;
  out.split(/\r?\n/).forEach(line => {
    if (line.startsWith('@@')) { ts = Number(line.slice(2)) || 0; return; }
    if (!line.trim()) return;
    const r = rel(line.trim());
    if (!map.has(r)) map.set(r, ts);
  });
  return map;
}

/* Değişmiş (commit edilmemiş) veya izlenmeyen dosyalar — Set(rel) */
function dirtyFiles(root, dirRel) {
  const out = git(root, ['status', '--porcelain', '--untracked-files=all', '--', dirRel]);
  const set = new Set();
  if (!out) return set;
  const rel = makeRel(root);
  out.split(/\r?\n/).forEach(line => {
    if (line.length < 4) return;
    let p = line.slice(3);
    if (p.includes(' -> ')) p = p.split(' -> ').pop();
    set.add(rel(p.replace(/^"|"$/g, '')));
  });
  return set;
}

/* Bir dosyanın "son değişiklik" zamanı: değişmişse diskteki zaman, değilse son commit. */
function changeTime(root, rel, commits, dirty) {
  if (dirty.has(rel) || !commits.has(rel)) {
    try { return Math.floor(fs.statSync(path.join(root, rel)).mtimeMs / 1000); } catch (e) { return 0; }
  }
  return commits.get(rel);
}

/* dirRel'e dokunan son n commit — [{ hash, short, ts, subject }] */
function logForPath(root, dirRel, n = 40) {
  const out = git(root, ['log', `-${n}`, '--format=%H%x09%h%x09%ct%x09%s', '--', dirRel]);
  if (!out) return [];
  return out.split(/\r?\n/).filter(Boolean).map(l => {
    const [hash, short, ts, ...subject] = l.split('\t');
    return { hash, short, ts: Number(ts), subject: subject.join('\t') };
  });
}

function headCommit(root) {
  const out = git(root, ['rev-parse', 'HEAD']);
  return out ? out.trim() : '';
}

/* ref ile çalışma ağacı arasındaki değişen satırlar — Map(rel → Set(satır no, 1 tabanlı)).
   Ref'ten sonra eklenen (izlenmeyen dahil) dosyalarda tüm satırlar değişmiş sayılır. */
function changedLines(root, ref, dirRel) {
  const map = new Map();
  if (!ref) return map;
  const out = git(root, ['diff', '-U0', '--no-color', '--no-ext-diff', ref, '--', dirRel]);
  if (out == null) return null;
  const rel = makeRel(root);
  let cur = null;
  out.split(/\r?\n/).forEach(line => {
    if (line.startsWith('+++ ')) {
      const p = line.slice(4).trim();
      cur = p === '/dev/null' ? null : rel(p.replace(/^b\//, ''));
      if (cur && !map.has(cur)) map.set(cur, new Set());
      return;
    }
    const h = line.match(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@/);
    if (!h || !cur) return;
    const start = Number(h[1]);
    const count = h[2] == null ? 1 : Number(h[2]);
    const set = map.get(cur);
    if (count === 0) set.add(Math.max(1, start)); // yalnız silme: silinen yerin hemen üstü
    for (let i = 0; i < count; i++) set.add(start + i);
  });
  const untracked = git(root, ['ls-files', '--others', '--exclude-standard', '--', dirRel]);
  (untracked || '').split(/\r?\n/).filter(Boolean).forEach(p => {
    const r = rel(p.trim());
    try {
      const n = fs.readFileSync(path.join(root, r), 'utf8').split(/\r?\n/).length;
      map.set(r, new Set(Array.from({ length: n }, (_, i) => i + 1)));
    } catch (e) { /* okunamadı */ }
  });
  return map;
}

module.exports = { available, lastCommitTimes, dirtyFiles, changeTime, logForPath, headCommit, changedLines };
