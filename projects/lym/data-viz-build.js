'use strict';

const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const DATA_FILE = path.join(DIR, 'LYM DATA');
const HTML_FILE = path.join(DIR, 'data-viz.html');

function parseNumber(raw) {
  if (raw == null) return null;
  const s = String(raw).trim();
  if (!s || /\[EKSİK\]/i.test(s) || /^(yok|n\/a|uygulanmaz)$/i.test(s)) return null;
  const m = s.replace(/\s/g, '').replace(',', '.').match(/-?\d+(?:\.\d+)?/);
  return m ? Number(m[0]) : null;
}

function fieldStatus(value) {
  const s = value == null ? '' : String(value).trim();
  if (!s) return 'empty';
  if (/\[EKSİK\]/i.test(s)) return 'eksik';
  return 'filled';
}

function parseData(text) {
  const lines = text.split(/\r?\n/);
  const blocks = {};
  let current = null;
  let sub = null;
  let variants = [];
  const families = {};

  const ensure = (name) => {
    if (!blocks[name]) {
      blocks[name] = {
        kv: [],
        table: { cols: [], rows: [] },
        motors: {},
        bom: {},
        notes: [],
      };
    }
    return blocks[name];
  };

  for (const raw of lines) {
    const t = raw.replace(/\t/g, ' ').trimEnd().trim();
    if (!t) continue;

    const bm = t.match(/^\[([^\]]+)\]$/);
    if (bm) {
      current = bm[1];
      sub = null;
      ensure(current);
      continue;
    }
    if (!current) continue;
    const b = ensure(current);

    if (t.startsWith('## ')) {
      sub = t.slice(3).trim();
      if (sub && !b.motors[sub]) b.motors[sub] = [];
      if (sub && !b.bom[sub]) b.bom[sub] = [];
      continue;
    }

    if (t.startsWith('#')) {
      const body = t.replace(/^#+\s?/, '').trim();
      if (/^Ozellik\s*\|/i.test(body) || /^Özellik\s*\|/i.test(body) || /\| LYM /i.test(body)) {
        const cols = body.split('|').slice(1).map((c) => c.trim()).filter(Boolean);
        if (cols.length >= 2) {
          b.table.cols = cols;
          if (!variants.length) variants = cols.slice();
        }
      }
      if (body) b.notes.push(body);
      continue;
    }

    if (/^X:/.test(t) && t.includes('|')) {
      const parts = t.split('|').map((p) => p.trim());
      const key = sub || 'GENEL';
      if (!b.bom[key]) b.bom[key] = [];
      b.bom[key].push({
        code: (parts[0] || '').replace(/^X:/, '').trim(),
        name: parts[1] || '',
        qty: parts[2] || '',
        qtyNum: parseNumber(parts[2]),
        note: parts[3] || '',
      });
      continue;
    }

    if (/^Motor\s+\d+:/i.test(t)) {
      const rest = t.replace(/^Motor\s+\d+:\s*/i, '').trim();
      if (!rest) continue;
      const parts = t.split('|').map((p) => p.trim());
      const key = sub || 'GENEL';
      if (!b.motors[key]) b.motors[key] = [];
      b.motors[key].push({
        name: (parts[0] || '').replace(/^Motor\s+\d+:\s*/i, '').trim(),
        power: parts[1] || '',
        rpm: parts[2] || '',
        brand: parts[3] || '',
        model: parts[4] || '',
      });
      continue;
    }

    if (t.includes('|') && !/^Arıza\s+\d+/i.test(t)) {
      const parts = t.split('|').map((p) => p.trim());
      while (parts.length && parts[parts.length - 1] === '') parts.pop();
      if (parts.length >= 2) {
        const cells = parts.slice(1);
        b.table.rows.push({ feature: parts[0], cells });
        if (!b.table.cols.length && cells.length >= 2) {
          b.table.cols = cells.map((_, i) => `V${i + 1}`);
        }
        continue;
      }
    }

    const ci = t.indexOf(':');
    if (ci > 0) {
      const k = t.slice(0, ci).trim();
      const v = t.slice(ci + 1).trim();
      b.kv.push({ k, v });
      const vm = k.match(/^Varyant\s+\d+\s*\(([^)]+)\)/i);
      if (vm) {
        const name = vm[1].trim();
        if (!variants.includes(name)) variants.push(name);
        const fam = (v.match(/—\s*(LYM\s*\d+)/i) || [])[1];
        if (fam) families[name] = fam.replace(/\s+/g, ' ');
      }
    }
  }

  if (!variants.length) variants = ['LYM 950', 'LYM 1150', 'LYM 1350', 'LYM 1500'];

  const completeness = { total: 0, filled: 0, empty: 0, eksik: 0, byBlock: {} };
  for (const [name, b] of Object.entries(blocks)) {
    const st = { filled: 0, empty: 0, eksik: 0, total: 0 };
    const bump = (val) => {
      const s = fieldStatus(val);
      st.total += 1;
      st[s] += 1;
      completeness.total += 1;
      completeness[s] += 1;
    };
    for (const { v } of b.kv) bump(v);
    for (const row of b.table.rows) {
      if (!row.cells.length) bump('');
      else row.cells.forEach(bump);
    }
    completeness.byBlock[name] = st;
  }

  return { generatedAt: new Date().toISOString(), source: 'LYM DATA', variants, families, blocks, completeness };
}

const parsed = parseData(fs.readFileSync(DATA_FILE, 'utf8'));
const html = fs.readFileSync(HTML_FILE, 'utf8').replace(
  /<script id="lym-data" type="application\/json">[\s\S]*?<\/script>/,
  `<script id="lym-data" type="application/json">${JSON.stringify(parsed)}</script>`
);
fs.writeFileSync(HTML_FILE, html, 'utf8');
process.stdout.write(`data-viz.html güncellendi (${parsed.variants.join(', ')})\n`);
