/* ── A4 Sayfalama: blokları ölçüp sayfa dizilerine böler ──
   Ayarlar ve satır referansları: layout-rules.md.

   Her ana bölüm (data-page-break-before) yeni sayfada başladığı için
   bölümler birbirinden bağımsız sayfalanır. computePages(blocks, { cache: true })
   bölüm sonuçlarını içerik + ölçü anahtarıyla önbellekte tutar; canlı
   yenilemede yalnızca değişen bölüm yeniden ölçülür. */

function isHeadingEl(el) {
  return el && el.nodeType === 1 && /^H[1-6]$/.test(el.tagName);
}

function getContentMetrics() {
  const probe = document.createElement('div');
  probe.className = 'a4-page';
  probe.style.cssText = 'position:absolute;visibility:hidden;left:-9999px;top:0';
  document.body.appendChild(probe);
  const cs = getComputedStyle(probe);
  const lineH = parseFloat(cs.getPropertyValue('--line-h')) || 22;
  const pageH = parseFloat(cs.height) || parseFloat(cs.minHeight) || 1123;
  const pt = parseFloat(cs.paddingTop);
  const pb = parseFloat(cs.paddingBottom);
  const contentMax = parseFloat(cs.getPropertyValue('--content-max-h'));
  const maxH = Number.isFinite(contentMax) && contentMax > 0 ? contentMax : pageH - pt - pb;
  document.body.removeChild(probe);
  const MAX = maxH > 0 ? maxH : 909;
  const FIT = Math.max(0, MAX - lineH);
  return { MAX, FIT, LINE_H: lineH };
}

const PAGINATION_CACHE = new Map();
const PAGINATION_CACHE_MAX = 80;

function clearPaginationCache() {
  PAGINATION_CACHE.clear();
}

function elementFromHtml(html) {
  const t = document.createElement('template');
  t.innerHTML = html;
  return t.content.firstElementChild;
}

function splitChapters(blocks) {
  const groups = [];
  for (const b of blocks) {
    if (!groups.length || (b.dataset && b.dataset.pageBreakBefore === 'true')) groups.push([]);
    groups[groups.length - 1].push(b);
  }
  return groups;
}

function computePages(blocks, opts = {}) {
  if (!opts.cache) return computePagesRaw(blocks);

  const { MAX } = getContentMetrics();
  const pages = [];
  for (const group of splitChapters(blocks)) {
    const key = MAX + '|' + group.map(b => b.outerHTML).join('\u0001');
    const hit = PAGINATION_CACHE.get(key);
    if (hit) {
      PAGINATION_CACHE.delete(key);
      PAGINATION_CACHE.set(key, hit);
      hit.forEach(p => pages.push(p.map(elementFromHtml)));
      continue;
    }
    const res = computePagesRaw(group);
    PAGINATION_CACHE.set(key, res.map(p => p.map(el => el.outerHTML)));
    if (PAGINATION_CACHE.size > PAGINATION_CACHE_MAX) {
      PAGINATION_CACHE.delete(PAGINATION_CACHE.keys().next().value);
    }
    res.forEach(p => pages.push(p));
  }
  return pages;
}

function computePagesRaw(blocks) {
  const { FIT, LINE_H } = getContentMetrics();
  const ORPHAN_MIN = LINE_H * 3;

  const pages = [[]];
  let cur = pages[0];

  const measure = document.createElement('div');
  measure.className = 'a4-page measure';
  const mContent = document.createElement('div');
  mContent.className = 'page-content';
  measure.appendChild(mContent);
  document.body.appendChild(measure);

  const h = () => mContent.scrollHeight;

  function newPage() {
    pages.push([]);
    cur = pages[pages.length - 1];
    mContent.innerHTML = '';
  }

  function splitAndPush(el) {
    const source = el.cloneNode(true);
    const kids = Array.from(source.childNodes);
    let part = el.cloneNode(false);
    mContent.innerHTML = '';
    mContent.appendChild(part);

    const commit = () => {
      cur.push(part);
      newPage();
      part = el.cloneNode(false);
      mContent.appendChild(part);
    };

    for (const kid of kids) {
      part.appendChild(kid);
      if (h() <= FIT) continue;

      if (kid.nodeType === Node.TEXT_NODE) {
        part.removeChild(kid);
        const words = kid.textContent.split(/(\s+)/);
        let tn = document.createTextNode('');
        part.appendChild(tn);
        for (const w of words) {
          const prev = tn.textContent;
          tn.textContent = prev + w;
          if (h() > FIT && prev.trim()) {
            tn.textContent = prev;
            commit();
            tn = document.createTextNode(w.replace(/^\s+/, ''));
            part.appendChild(tn);
          }
        }
      } else {
        part.removeChild(kid);
        if (part.childNodes.length === 0) {
          part.appendChild(kid);
        } else {
          commit();
          part.appendChild(kid);
        }
      }
    }
    cur.push(part);
  }

  function placeTable(tableEl) {
    const thead = tableEl.querySelector(':scope > thead');
    const tbody = tableEl.querySelector(':scope > tbody');
    const caption = tableEl.querySelector(':scope > caption');
    const TABLE_MAX = FIT;

    if (!thead || !tbody || tbody.rows.length === 0) {
      mContent.appendChild(tableEl);
      if (h() <= TABLE_MAX) { cur.push(tableEl); return; }
      if (cur.length === 0) {
        cur.push(tableEl);
        return;
      }
      mContent.removeChild(tableEl);
      startNewPageWithOrphanFix();
      placeTable(tableEl);
      return;
    }

    const bodyRows = Array.from(tbody.rows);

    // Her parça başlık satırını (thead) tekrarlar; numaralı tablo başlığı
    // devam parçalarında "Tablo 3-1 (devam)" olur.
    const makeSubTable = (isContinuation) => {
      const t = tableEl.cloneNode(false);
      if (caption) {
        const cap = caption.cloneNode(!isContinuation);
        if (isContinuation) {
          cap.textContent = `${caption.dataset.label || ''} (${tDoc(currentLang).continued})`;
          cap.classList.add('md-tblcaption--cont');
        }
        t.appendChild(cap);
      }
      t.appendChild(thead.cloneNode(true));
      t.appendChild(document.createElement('tbody'));
      return t;
    };

    let start = 0;

    while (start < bodyRows.length) {
      const sub = makeSubTable(start > 0);
      const tb = sub.tBodies[0];
      mContent.appendChild(sub);

      let end = start;
      while (end < bodyRows.length) {
        tb.appendChild(bodyRows[end].cloneNode(true));
        if (h() <= TABLE_MAX) { end++; continue; }
        tb.removeChild(tb.lastChild);
        break;
      }

      // Mevcut sayfaya başlık + tek satır bile sığmıyorsa tabloyu sonraki sayfadan devam ettir.
      if (end === start && cur.length > 0) {
        mContent.removeChild(sub);
        startNewPageWithOrphanFix();
        continue;
      }

      // Tek bir tablo satırı boş A4 sayfaya dahi sığmıyorsa satırı bölmeden
      // yerleştir; aksi halde sonsuz sayfalama döngüsü oluşur.
      if (end === start) {
        tb.appendChild(bodyRows[start].cloneNode(true));
        end++;
      }

      cur.push(sub);
      start = end;
      if (start < bodyRows.length) newPage();
    }
  }

  function splitListItemAcrossPages(listEl, li, olStart) {
    const tag = listEl.tagName;
    let continuation = false;

    function startPart() {
      const list = document.createElement(tag.toLowerCase());
      list.className = listEl.className;
      copyBlockData(listEl, list);
      if (tag === 'OL' && olStart > 1 && !continuation) list.start = olStart;
      const newLi = document.createElement('li');
      if (continuation) newLi.classList.add('li-continued');
      list.appendChild(newLi);
      mContent.appendChild(list);
      return { list, newLi };
    }

    function appendWords(target, text) {
      const words = text.split(/(\s+)/);
      let tn = document.createTextNode('');
      target.appendChild(tn);
      for (const w of words) {
        const prev = tn.textContent;
        tn.textContent = prev + w;
        if (h() <= FIT) continue;

        if (!prev.trim()) {
          commitPart();
          tn = document.createTextNode(w.replace(/^\s+/, ''));
          partLi.appendChild(tn);
          continue;
        }

        tn.textContent = prev;
        if (partList.offsetHeight < ORPHAN_MIN) {
          mContent.removeChild(partList);
          newPage();
          continuation = true;
          ({ list: partList, newLi: partLi } = startPart());
          tn = document.createTextNode('');
          partLi.appendChild(tn);
          tn.textContent = prev + w;
          if (h() <= FIT) continue;
        }

        commitPart();
        tn = document.createTextNode(w.replace(/^\s+/, ''));
        partLi.appendChild(tn);
      }
    }

    function splitElementWords(el) {
      const shell = el.cloneNode(false);
      partLi.appendChild(shell);
      if (el.childNodes.length === 1 && el.firstChild.nodeType === Node.TEXT_NODE) {
        const words = el.firstChild.textContent.split(/(\s+)/);
        let tn = document.createTextNode('');
        shell.appendChild(tn);
        for (const w of words) {
          const prev = tn.textContent;
          tn.textContent = prev + w;
          if (h() <= FIT) continue;

          if (!prev.trim()) {
            commitPart();
            const nextShell = el.cloneNode(false);
            partLi.appendChild(nextShell);
            tn = document.createTextNode(w.replace(/^\s+/, ''));
            nextShell.appendChild(tn);
            continue;
          }

          tn.textContent = prev;
          if (partList.offsetHeight < ORPHAN_MIN) {
            mContent.removeChild(partList);
            newPage();
            continuation = true;
            ({ list: partList, newLi: partLi } = startPart());
            const nextShell = el.cloneNode(false);
            partLi.appendChild(nextShell);
            tn = document.createTextNode('');
            nextShell.appendChild(tn);
            tn.textContent = prev + w;
            if (h() <= FIT) continue;
          }

          commitPart();
          const nextShell = el.cloneNode(false);
          partLi.appendChild(nextShell);
          tn = document.createTextNode(w.replace(/^\s+/, ''));
          nextShell.appendChild(tn);
        }
        return;
      }
      shell.appendChild(el.cloneNode(true));
    }

    let partList;
    let partLi;

    function commitPart() {
      cur.push(partList);
      newPage();
      continuation = true;
      ({ list: partList, newLi: partLi } = startPart());
    }

    ({ list: partList, newLi: partLi } = startPart());
    const kids = Array.from(li.cloneNode(true).childNodes);

    for (const kid of kids) {
      partLi.appendChild(kid.cloneNode(true));
      if (h() <= FIT) continue;

      partLi.removeChild(partLi.lastChild);

      if (kid.nodeType === Node.TEXT_NODE) {
        appendWords(partLi, kid.textContent);
      } else if (partLi.childNodes.length === 0) {
        splitElementWords(kid);
        if (h() > FIT) {
          partLi.lastChild.remove();
          commitPart();
          partLi.appendChild(kid.cloneNode(true));
        }
      } else {
        commitPart();
        partLi.appendChild(kid.cloneNode(true));
        if (h() > FIT) {
          partLi.removeChild(partLi.lastChild);
          splitElementWords(kid);
        }
      }
    }

    cur.push(partList);
  }

  function copyBlockData(from, to) {
    for (const k of Object.keys(from.dataset || {})) to.dataset[k] = from.dataset[k];
  }

  function placeList(listEl) {
    const tag = listEl.tagName;
    const items = Array.from(listEl.children).filter(c => c.tagName === 'LI');
    if (!items.length) return;
    // Numaralı liste bir alt listeden sonra devam ediyorsa (start > 1) numara korunur.
    const base = tag === 'OL' ? (listEl.start || 1) : 1;

    const makeSubList = (olStart) => {
      const list = document.createElement(tag.toLowerCase());
      list.className = listEl.className;
      copyBlockData(listEl, list);
      if (tag === 'OL' && olStart > 1) list.start = olStart;
      return list;
    };

    let start = 0;

    while (start < items.length) {
      const sub = makeSubList(base + start);
      mContent.appendChild(sub);

      let end = start;
      while (end < items.length) {
        sub.appendChild(items[end].cloneNode(true));
        if (h() <= FIT) { end++; continue; }
        sub.removeChild(sub.lastChild);
        break;
      }

      if (end === start) {
        mContent.removeChild(sub);
        const olStart = base + start;
        if (cur.length > 0) {
          newPage();
          const single = makeSubList(olStart);
          single.appendChild(items[start].cloneNode(true));
          mContent.appendChild(single);
          if (h() <= FIT) {
            cur.push(single);
            start++;
            while (start < items.length) {
              single.appendChild(items[start].cloneNode(true));
              if (h() <= FIT) {
                start++;
              } else {
                single.removeChild(single.lastChild);
                break;
              }
            }
            if (start < items.length) newPage();
            continue;
          }
          mContent.removeChild(single);
        }
        splitListItemAcrossPages(listEl, items[start], olStart);
        start++;
        continue;
      }

      cur.push(sub);
      start = end;
      if (start < items.length) newPage();
    }
  }

  function isFigureBlock(el) {
    if (!el || el.nodeType !== 1) return false;
    if (el.classList.contains('md-figure-frame') || el.classList.contains('md-figure-group')) return true;
    if (el.tagName === 'P' && el.classList.contains('md-figure')) return true;
    if (el.tagName === 'UL' || el.tagName === 'OL') {
      const items = el.querySelectorAll(':scope > li');
      return items.length === 1 && items[0].classList.contains('li-figure');
    }
    return false;
  }

  function isLargeBlock(el) {
    return isFigureBlock(el) || (el && (el.tagName === 'TABLE' || el.classList.contains('md-callout')));
  }

  function wouldFitIfAppended(...elements) {
    const clones = elements.map(el => el.cloneNode(true));
    clones.forEach(c => mContent.appendChild(c));
    const fits = h() <= FIT;
    clones.forEach(c => mContent.removeChild(c));
    return fits;
  }

  function startNewPageWithOrphanFix() {
    if (cur.length > 1 && isHeadingEl(cur[cur.length - 1])) {
      const orphanHeading = cur.pop();
      delete orphanHeading.dataset.pageBreakBefore;
      orphanHeading.dataset.orphanMoved = 'true';
      if (mContent.contains(orphanHeading)) mContent.removeChild(orphanHeading);
      newPage();
      cur.push(orphanHeading);
      mContent.appendChild(orphanHeading);
      return;
    }
    newPage();
  }

  function placeFigureIfNeeded(el) {
    if (!isFigureBlock(el)) return false;
    mContent.appendChild(el);
    const fits = h() <= FIT;
    mContent.removeChild(el);
    return !fits;
  }

  function place(el, nextEl, depth = 0) {
    if (depth > blocks.length + 200) {
      console.error('computePages: yerleştirme sınırı aşıldı', el);
      cur.push(el);
      return;
    }
    if (el.tagName === 'TABLE') { placeTable(el); return; }
    if (el.tagName === 'UL' || el.tagName === 'OL') { placeList(el); return; }
    if (el.dataset && el.dataset.pageBreakBefore === 'true' && cur.length > 0) {
      newPage();
    }

    // Başlık + sonraki blok birlikte sığmıyorsa ikisini sonraki sayfada tut
    if (isHeadingEl(el) && nextEl && cur.length > 0 && !wouldFitIfAppended(el, nextEl)) {
      newPage();
    }

    if (placeFigureIfNeeded(el) && cur.length > 0) {
      startNewPageWithOrphanFix();
    }

    mContent.appendChild(el);
    if (h() <= FIT) {
      if (isHeadingEl(el) && cur.length > 0) {
        const remaining = FIT - h();
        if (nextEl && isLargeBlock(nextEl) && !wouldFitIfAppended(nextEl)) {
          mContent.removeChild(el);
          newPage();
          place(el, nextEl, depth + 1);
          return;
        }
        if (remaining < ORPHAN_MIN) {
          mContent.removeChild(el);
          newPage();
          place(el, nextEl, depth + 1);
          return;
        }
      }
      cur.push(el);
      return;
    }
    if (cur.length === 0) {
      mContent.removeChild(el);
      mContent.innerHTML = '';
      splitAndPush(el);
      return;
    }
    mContent.removeChild(el);
    newPage();
    place(el, nextEl, depth + 1);
  }

  for (let i = 0; i < blocks.length; i++) {
    place(blocks[i], blocks[i + 1]);
  }

  document.body.removeChild(measure);

  return normalizePageStarts(fixOrphanHeadingPages(pages.filter(p => p.length)));
}

function fixOrphanHeadingPages(pages) {
  for (let i = 0; i < pages.length - 1; i++) {
    const page = pages[i];
    while (page.length > 0 && isHeadingEl(page[page.length - 1])) {
      const heading = page.pop();
      delete heading.dataset.pageBreakBefore;
      heading.dataset.orphanMoved = 'true';
      pages[i + 1].unshift(heading);
    }
  }
  return pages.filter(p => p.length);
}

function normalizePageStarts(pages) {
  for (const page of pages) {
    while (page.length && page[0].classList && page[0].classList.contains('md-hr')) {
      page.shift();
    }
    if (page.length && page[0].dataset) {
      delete page[0].dataset.pageBreakBefore;
    }
  }
  return pages;
}
