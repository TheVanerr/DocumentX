/* ── Terim sözlüğü ve dizin ──
   templates/sozluk.yaml + projects/<proje>/sozluk.yaml:
     terimler:
       - tr: Ana şalter
         en: Main switch
         de: Hauptschalter
         yasak: { tr: [ana anahtar], en: [mains switch] }   # tercih edilmeyen eş anlamlılar
         dizin: true                                         # dizine al (varsayılan)
   Eşleşme büyük/küçük harf duyarsızdır ve Türkçe ekleri kabul eder
   ("ana şalterin" → "Ana şalter"). */

function foldTr(s) {
  return String(s || '').toLocaleLowerCase('tr-TR');
}

function escapeRx(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* Katlanmış (küçük harf) metinde terim + olası ek. */
function termRx(term) {
  const body = foldTr(term).trim().split(/\s+/).map(escapeRx).join('\\s+');
  return new RegExp(`(?<![\\p{L}\\p{N}])${body}[\\p{L}]*`, 'gu');
}

function termText(t, lang) {
  return String((t && t[lang]) || '').trim();
}

/* Metindeki eşleşmelerin [başlangıç, bitiş] konumları (katlama uzunluğu korursa). */
function findTerm(text, term) {
  const folded = foldTr(text);
  if (folded.length !== text.length) return [];
  const rx = termRx(term);
  const out = [];
  let m;
  while ((m = rx.exec(folded))) out.push({ index: m.index, length: m[0].length, match: text.substr(m.index, m[0].length) });
  return out;
}

/* Kalite kontrol: seçili dilde yasaklı eş anlamlılar. roots: içerik kökleri. */
function glossaryViolations(roots, lang) {
  const rules = [];
  currentGlossary.forEach(t => {
    const preferred = termText(t, lang);
    const banned = (t.yasak && t.yasak[lang]) || [];
    if (!preferred || !Array.isArray(banned)) return;
    banned.filter(Boolean).forEach(b => rules.push({ banned: String(b), preferred }));
  });
  if (!rules.length) return [];

  const found = [];
  roots.forEach(root => {
    root.querySelectorAll('p.md-p, li, td, th, .callout-body, .md-quote, .md-figcaption').forEach(el => {
      if (el.querySelector('p.md-p, li, td')) return; // en içteki blok yeterli
      const text = el.textContent;
      rules.forEach(r => {
        findTerm(text, r.banned).forEach(hit => {
          found.push({ el, detail: `“${hit.match}” yerine “${r.preferred}”` });
        });
      });
    });
  });
  return found;
}

/* ── Dizin ── */
function indexTerms(lang) {
  return currentGlossary
    .filter(t => t.dizin !== false && termText(t, lang))
    .map(t => termText(t, lang));
}

/* texts: [{ key, text }] → Map(terim → Set(key)) — key: sayfa indeksi veya bölüm numarası */
function indexOccurrences(terms, texts) {
  const occ = new Map();
  terms.forEach(term => {
    const rx = termRx(term);
    texts.forEach(({ key, text }) => {
      rx.lastIndex = 0;
      if (rx.test(foldTr(text))) {
        if (!occ.has(term)) occ.set(term, new Set());
        occ.get(term).add(key);
      }
    });
  });
  return occ;
}

/* [3,4,5,9] → "3–5, 9" */
function compressPages(nums) {
  const s = [...new Set(nums)].sort((a, b) => a - b);
  const out = [];
  for (let i = 0; i < s.length; i++) {
    let j = i;
    while (j + 1 < s.length && s[j + 1] === s[j] + 1) j++;
    out.push(j > i + 1 ? `${s[i]}–${s[j]}` : (j === i + 1 ? `${s[i]}, ${s[j]}` : String(s[i])));
    i = j;
  }
  return out.join(', ');
}

/* PDF: rows = [{ term, pages: [..] }]; HTML: rows = [{ term, refs: [{ number, anchorId }] }] */
function buildIndexBlocks(rows, lang) {
  const blocks = [];
  const title = tocTitle(tDoc(lang).index, 'idx-title');
  title.id = 'dx-index';
  blocks.push(title);
  let letter = '';
  rows.sort((a, b) => a.term.localeCompare(b.term, lang)).forEach(r => {
    const first = r.term.charAt(0).toLocaleUpperCase(lang === 'tr' ? 'tr-TR' : undefined);
    if (first !== letter) {
      letter = first;
      const l = document.createElement('div');
      l.className = 'idx-letter';
      l.textContent = letter;
      blocks.push(l);
    }
    const row = document.createElement('div');
    row.className = 'idx-row';
    const term = document.createElement('span');
    term.className = 'idx-term';
    term.textContent = r.term;
    row.appendChild(term);
    const leader = document.createElement('span');
    leader.className = 'toc-leader';
    row.appendChild(leader);
    const where = document.createElement('span');
    where.className = 'idx-pages';
    if (r.pages) {
      where.textContent = compressPages(r.pages);
    } else {
      r.refs.forEach((ref, i) => {
        if (i) where.appendChild(document.createTextNode(', '));
        const a = document.createElement('a');
        a.href = '#toc-anchor-' + ref.anchorId;
        a.dataset.goto = '#toc-anchor-' + ref.anchorId;
        a.textContent = ref.number;
        where.appendChild(a);
      });
    }
    row.appendChild(where);
    blocks.push(row);
  });
  return blocks;
}
