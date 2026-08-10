/*
 * Aşamalı + akıllı çeviri CLI (çekirdek: translate-core.js).
 * Uygulama içindeki Çeviri paneli ile AYNI mantığı ve state'i paylaşır.
 *
 * Kullanım (PowerShell):
 *   node scripts/translate-lang.js en --limit 5
 *   node scripts/translate-lang.js en de --limit 3
 *   node scripts/translate-lang.js en --status
 *   node scripts/translate-lang.js en --dry
 *   node scripts/translate-lang.js en --only 02-safety
 *   node scripts/translate-lang.js en --only safety-rules --force
 */
const path = require('path');
const core = require('./translate-core');
const ROOT = path.resolve(__dirname, '..');
core.loadEnv(ROOT);

const argv = process.argv.slice(2);
const flags = { only: [] };
const langs = [];
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--limit') flags.limit = parseInt(argv[++i], 10);
  else if (a === '--provider') flags.provider = String(argv[++i]).toLowerCase();
  else if (a === '--only') flags.only.push(String(argv[++i]).toLowerCase());
  else if (a === '--dry') flags.dry = true;
  else if (a === '--status') flags.status = true;
  else if (a === '--force') flags.force = true;
  else if (!a.startsWith('--')) langs.push(a.toLowerCase());
}
if (!langs.length) {
  console.error('Kullanım: node scripts/translate-lang.js <dil...> [--limit N] [--only <yol>] [--status] [--dry] [--force] [--provider gemini|deepl]');
  process.exit(1);
}
const LIMIT = Number.isFinite(flags.limit) ? flags.limit : 5;
const PROVIDER = flags.provider || core.defaultProvider();

function matchesOnly(rel) {
  if (!flags.only.length) return true;
  const p = rel.toLowerCase();
  return flags.only.some(f => p.includes(f));
}

function buildJobs() {
  const jobs = [];
  const state = core.loadState();
  for (const srcAbs of core.findSources(ROOT)) {
    const rel = path.relative(ROOT, srcAbs).replace(/\\/g, '/');
    if (!matchesOnly(rel)) continue;
    for (const lang of langs) {
      if (lang === core.SOURCE_LANG) continue;
      jobs.push({ srcRel: rel, lang, status: core.statusOf(ROOT, srcAbs, lang, state) });
    }
  }
  return jobs;
}

const needs = (s) => flags.force || s === 'yok' || s === 'placeholder' || s === 'eskimis';
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

(async () => {
  const jobs = buildJobs();

  if (flags.status) {
    const icon = { guncel: '✓ güncel     ', eskimis: '~ eskimiş    ', placeholder: '· placeholder', yok: '× yok        ' };
    const counts = { guncel: 0, eskimis: 0, placeholder: 0, yok: 0 };
    for (const j of jobs) { counts[j.status]++; console.log(`  ${icon[j.status]}  ${j.srcRel} → ${j.lang}`); }
    console.log(`\nÖzet → güncel:${counts.guncel}  eskimiş:${counts.eskimis}  placeholder:${counts.placeholder}  yok:${counts.yok}`);
    console.log('Çevrilecek:', counts.eskimis + counts.placeholder + counts.yok);
    return;
  }

  const pending = jobs.filter(j => needs(j.status));
  console.log(`Sağlayıcı: ${PROVIDER} | Diller: ${langs.join(', ')} | Limit: ${LIMIT} | Sırada: ${pending.length}${flags.dry ? ' | DRY' : ''}\n`);

  if (flags.dry) {
    pending.slice(0, LIMIT).forEach(j => console.log(`· ${j.status.padEnd(11)} ${j.srcRel} → ${j.lang}`));
    if (pending.length > LIMIT) console.log(`… ve ${pending.length - LIMIT} dosya daha.`);
    return;
  }

  let done = 0;
  for (const j of pending) {
    if (done >= LIMIT) break;
    try {
      process.stdout.write(`→ [${j.status}] ${j.srcRel} → ${j.lang} ... `);
      await core.translateOne(ROOT, j.srcRel, j.lang, PROVIDER);
      console.log('OK');
      done++;
      await sleep(1200);
    } catch (e) {
      console.log('HATA:', e.message);
      if (/API|HTTP 4|ayarli degil/i.test(e.message)) break;
      done++;
    }
  }
  const kalan = pending.length - done;
  console.log(`\nBitti. ${done} dosya çevrildi.` + (kalan > 0 ? ` Kalan ${kalan} sonra.` : ' Hepsi güncel.'));
})();
