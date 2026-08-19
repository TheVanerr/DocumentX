/*
 * Paylaşılan çeviri çekirdeği. Hem CLI (translate-lang.js) hem de
 * Electron uygulaması (codes/main.js) bunu kullanır.
 * Bağımlılıksız (yalnız node stdlib): fs, path, crypto, https.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const https = require('https');

const SOURCE_LANG = 'tr';
const BANNER_RX = /^<!--[^>]*ÇEVİRİ GEREKLİ[\s\S]*?-->\s*/m;
const LANG_NAME = {
  en: 'English', de: 'German', fr: 'French', es: 'Spanish', it: 'Italian',
  ru: 'Russian', nl: 'Dutch', pl: 'Polish', ar: 'Arabic', pt: 'Portuguese'
};
const STATE_FILE = path.join(__dirname, '.translation-state.json');
const SRC_RX = new RegExp(`\\.${SOURCE_LANG}\\.md$`, 'i');

/* ── .env ── */
function loadEnv(root) {
  const p = path.join(root, '.env');
  if (!fs.existsSync(p)) return;
  for (const line of fs.readFileSync(p, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    const v = m[2].replace(/^["']|["']$/g, '');
    if (!process.env[m[1]]) process.env[m[1]] = v;
  }
}

/* ── durum ── */
const hash = (s) => crypto.createHash('sha1').update(s, 'utf8').digest('hex').slice(0, 16);
function loadState() { try { return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')); } catch { return {}; } }
function saveState(st) { fs.writeFileSync(STATE_FILE, JSON.stringify(st, null, 2), 'utf8'); }

function scanDirs(root) {
  return [path.join(root, 'projects')];
}

function findSources(root) {
  const out = [];
  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, e.name);
      if (e.isDirectory()) walk(abs);
      else if (SRC_RX.test(e.name)) out.push(abs);
    }
  };
  scanDirs(root).forEach(walk);
  return out.sort();
}

function readSourceClean(srcAbs) {
  return fs.readFileSync(srcAbs, 'utf8').replace(BANNER_RX, '');
}

function destFor(srcAbs, lang) {
  return srcAbs.replace(SRC_RX, `.${lang}.md`);
}

/* 'yok' | 'placeholder' | 'eskimis' | 'guncel' */
function statusOf(root, srcAbs, lang, state) {
  const dest = destFor(srcAbs, lang);
  if (!fs.existsSync(dest)) return 'yok';
  const c = fs.readFileSync(dest, 'utf8');
  if (BANNER_RX.test(c) || !c.trim()) return 'placeholder';
  const rel = path.relative(root, dest).replace(/\\/g, '/');
  const srcHash = hash(readSourceClean(srcAbs));
  return state[rel] === srcHash ? 'guncel' : 'eskimis';
}

/* ── HTTP (fetch yoksa https ile) ── */
function httpsPost(urlStr, headers, body) {
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const req = https.request({
      hostname: u.hostname,
      path: u.pathname + u.search,
      method: 'POST',
      headers: { ...headers, 'Content-Length': Buffer.byteLength(body) }
    }, (res) => {
      let data = '';
      res.on('data', (d) => (data += d));
      res.on('end', () => resolve({ status: res.statusCode, text: data }));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

/* ── sağlayıcılar ── */
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function callGemini(text, lang) {
  const key = process.env.GEMINI_API_KEY;
  if (!key || key.includes('BURAYA')) throw new Error('GEMINI_API_KEY .env icinde ayarli degil.');
  // Eski 2.x modelleri yeni kullanicilara kapali. 'latest' alias'i her zaman
  // erisilebilir guncel modele isaret eder. flash (lite degil) talimatlara daha sadik.
  const model = process.env.GEMINI_MODEL || 'gemini-flash-latest';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
  const prompt =
    `You are a professional technical translator for industrial machine manuals.\n` +
    `Translate the following Markdown from Turkish to ${LANG_NAME[lang] || lang}.\n` +
    `STRICT RULES:\n` +
    `- Output ONLY the translated Markdown. No explanations, no surrounding code fences.\n` +
    `- Preserve ALL Markdown structure exactly: headings (#), lists, tables (| pipes), blockquotes, rules.\n` +
    `- Do NOT translate or alter: image syntax ![alt](path), link targets, file paths, code in \`backticks\` or fenced blocks, numbers, units, and leading section numbers like "2.3".\n` +
    `- Keep line breaks and blank lines as in the source.\n\n` +
    `--- SOURCE (Turkish) ---\n${text}`;
  const body = JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { temperature: 0.2 } });

  const waits = [4000, 12000, 25000]; // 429 icin backoff
  for (let attempt = 0; attempt <= waits.length; attempt++) {
    const res = await httpsPost(url, { 'Content-Type': 'application/json' }, body);

    if (res.status >= 200 && res.status < 300) {
      const data = JSON.parse(res.text);
      const out = data?.candidates?.[0]?.content?.parts?.map(p => p.text).join('') || '';
      if (!out.trim()) throw new Error('Gemini bos yanit.');
      return out.replace(/^```[a-z]*\n?|```$/g, '').trim() + '\n';
    }

    if (res.status === 429) {
      // "limit: 0" → kota gercekten 0 (kapali model veya faturalandirma yok): beklemek fayda etmez.
      if (/"limit":\s*0|limit:\s*0/.test(res.text)) {
        throw new Error(
          `Kota 0 (model "${model}"). Muhtemel sebep: model kotasi kapali. ` +
          `.env icine GEMINI_MODEL=gemini-2.5-flash-lite yazip deneyin ya da AI Studio'da modeli etkinlestirin.`
        );
      }
      if (attempt < waits.length) { await sleep(waits[attempt]); continue; } // RPM asimi → bekle, tekrar dene
      throw new Error(`Gemini 429: dakikalik kota asildi, biraz sonra tekrar deneyin.`);
    }

    if (res.status === 503 && attempt < waits.length) { await sleep(waits[attempt]); continue; }
    throw new Error(`Gemini HTTP ${res.status}: ${res.text.slice(0, 200)}`);
  }
  throw new Error('Gemini: tekrar denemeler tukendi.');
}

async function callDeepL(text, lang) {
  const key = process.env.DEEPL_API_KEY;
  if (!key) throw new Error('DEEPL_API_KEY .env icinde ayarli degil.');
  const host = key.endsWith(':fx') ? 'https://api-free.deepl.com' : 'https://api.deepl.com';
  const params = new URLSearchParams();
  params.append('text', text);
  params.append('source_lang', 'TR');
  params.append('target_lang', lang.toUpperCase());
  params.append('tag_handling', 'xml');
  const res = await httpsPost(`${host}/v2/translate`,
    { 'Authorization': `DeepL-Auth-Key ${key}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    params.toString());
  if (res.status < 200 || res.status >= 300) throw new Error(`DeepL HTTP ${res.status}: ${res.text.slice(0, 200)}`);
  const data = JSON.parse(res.text);
  const out = data?.translations?.[0]?.text || '';
  if (!out.trim()) throw new Error('DeepL bos yanit.');
  return out.trim() + '\n';
}

const providers = { gemini: callGemini, deepl: callDeepL };

function defaultProvider() {
  return (process.env.DEEPL_API_KEY && !process.env.GEMINI_API_KEY) ? 'deepl' : 'gemini';
}

function keyStatus() {
  const gem = !!(process.env.GEMINI_API_KEY && !process.env.GEMINI_API_KEY.includes('BURAYA'));
  const deepl = !!process.env.DEEPL_API_KEY;
  return { gemini: gem, deepl, ready: gem || deepl, provider: defaultProvider() };
}

/* Tek bir kaynağı çevirir, hedefi yazar, state'i günceller. */
async function translateOne(root, srcRel, lang, provider) {
  const srcAbs = path.join(root, srcRel);
  if (!fs.existsSync(srcAbs)) return { ok: false, rel: srcRel, error: 'kaynak yok' };
  const fn = providers[provider] || providers[defaultProvider()];
  const raw = readSourceClean(srcAbs);
  const translated = await fn(raw, lang);
  const dest = destFor(srcAbs, lang);
  fs.writeFileSync(dest, translated, 'utf8');
  const st = loadState();
  const destRel = path.relative(root, dest).replace(/\\/g, '/');
  st[destRel] = hash(raw);
  saveState(st);
  return { ok: true, rel: destRel };
}

/* UI için: kaynakları durumlarıyla iç içe klasör ağacına çevirir.
   langs: tek dil (string) veya birden çok dil (dizi). Her dosya için
   'statuses' = { <dil>: durum } döner. */
function buildFileTree(root, langs) {
  const langList = (Array.isArray(langs) ? langs : [langs]).map(l => String(l).toLowerCase());
  const state = loadState();
  const rootNode = { name: '', dirs: {}, files: [] };

  for (const srcAbs of findSources(root)) {
    const rel = path.relative(root, srcAbs).replace(/\\/g, '/');
    const parts = rel.split('/');
    const fileName = parts.pop();
    let node = rootNode;
    for (const part of parts) {
      node.dirs[part] = node.dirs[part] || { name: part, dirs: {}, files: [] };
      node = node.dirs[part];
    }
    const statuses = {};
    for (const l of langList) statuses[l] = statusOf(root, srcAbs, l, state);
    node.files.push({ name: fileName, srcRel: rel, statuses });
  }

  const toArray = (node) => ({
    name: node.name,
    dirs: Object.keys(node.dirs).sort().map(k => toArray(node.dirs[k])),
    files: node.files.sort((a, b) => a.name.localeCompare(b.name))
  });
  return toArray(rootNode);
}

module.exports = {
  SOURCE_LANG, LANG_NAME,
  loadEnv, keyStatus, defaultProvider,
  findSources, statusOf, buildFileTree, translateOne,
  loadState, saveState, hash, readSourceClean, destFor, SRC_RX, BANNER_RX
};
