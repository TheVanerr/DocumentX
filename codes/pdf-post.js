/* PDF son işleme (pdf-lib): meta veri ve deneysel PDF/A-2b hazırlığı.
   Chromium'un ürettiği yer imleri (/Outlines) ve etiket ağacı (/StructTreeRoot) korunur.

   PDF/A-2b için eklenenler: XMP meta verisi (pdfaid), sRGB çıktı amacı (OutputIntent),
   bağlantı notlarında yazdırma bayrağı, belge kimliği (/ID). Çıktı bir doğrulayıcıyla
   (ör. veraPDF) denetlenmeden PDF/A uyumlu sayılmamalıdır. */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { PDFDocument, PDFName, PDFHexString, PDFNumber, PDFDict, PDFArray } = require('pdf-lib');

const SRGB_CANDIDATES = [
  path.join(process.env.SystemRoot || 'C:\\Windows', 'System32', 'spool', 'drivers', 'color', 'sRGB Color Space Profile.icm'),
  '/System/Library/ColorSync/Profiles/sRGB Profile.icc',
  '/usr/share/color/icc/colord/sRGB.icc'
];

function findSrgbProfile() {
  return SRGB_CANDIDATES.find(p => { try { return fs.existsSync(p); } catch (e) { return false; } }) || null;
}

function xmlEscape(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function xmpDate(d) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${p(d.getUTCMonth() + 1)}-${p(d.getUTCDate())}T${p(d.getUTCHours())}:${p(d.getUTCMinutes())}:${p(d.getUTCSeconds())}Z`;
}

function buildXmp(meta, now) {
  const lang = meta.lang || 'x-default';
  return `<?xpacket begin="\uFEFF" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/">
 <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
  <rdf:Description rdf:about=""
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:xmp="http://ns.adobe.com/xap/1.0/"
    xmlns:pdf="http://ns.adobe.com/pdf/1.3/"
    xmlns:pdfaid="http://www.aiim.org/pdfa/ns/id/">
   <dc:format>application/pdf</dc:format>
   <dc:title><rdf:Alt><rdf:li xml:lang="x-default">${xmlEscape(meta.title)}</rdf:li></rdf:Alt></dc:title>
   <dc:creator><rdf:Seq><rdf:li>${xmlEscape(meta.author || 'DocumentX')}</rdf:li></rdf:Seq></dc:creator>
   <dc:description><rdf:Alt><rdf:li xml:lang="x-default">${xmlEscape(meta.subject)}</rdf:li></rdf:Alt></dc:description>
   <dc:language><rdf:Bag><rdf:li>${xmlEscape(lang)}</rdf:li></rdf:Bag></dc:language>
   <xmp:CreatorTool>DocumentX</xmp:CreatorTool>
   <xmp:CreateDate>${xmpDate(now)}</xmp:CreateDate>
   <xmp:ModifyDate>${xmpDate(now)}</xmp:ModifyDate>
   <xmp:MetadataDate>${xmpDate(now)}</xmp:MetadataDate>
   <pdf:Producer>DocumentX</pdf:Producer>
   <pdf:Keywords>${xmlEscape((meta.keywords || []).join(', '))}</pdf:Keywords>
   <pdfaid:part>2</pdfaid:part>
   <pdfaid:conformance>B</pdfaid:conformance>
  </rdf:Description>
 </rdf:RDF>
</x:xmpmeta>
<?xpacket end="w"?>`;
}

/* meta: { title, author, subject, keywords: [], lang }  opts: { pdfa } → { buffer, pdfa: bool, warning } */
async function postProcessPdf(input, meta = {}, opts = {}) {
  const pdf = await PDFDocument.load(input, { updateMetadata: false });
  const now = new Date();
  pdf.setTitle(meta.title || '', { showInWindowTitleBar: true });
  if (meta.author) pdf.setAuthor(meta.author);
  if (meta.subject) pdf.setSubject(meta.subject);
  if (meta.keywords && meta.keywords.length) pdf.setKeywords(meta.keywords.filter(Boolean));
  pdf.setCreator('DocumentX');
  pdf.setProducer('DocumentX');
  pdf.setCreationDate(now);
  pdf.setModificationDate(now);
  if (meta.lang) pdf.setLanguage(meta.lang);

  let warning = '';
  let pdfa = false;
  if (opts.pdfa) {
    const icc = findSrgbProfile();
    if (!icc) {
      warning = 'sRGB renk profili bulunamadı; PDF/A eklentileri atlandı';
    } else {
      const ctx = pdf.context;
      const catalog = pdf.catalog;

      const xmp = ctx.stream(buildXmp(meta, now), { Type: 'Metadata', Subtype: 'XML' });
      catalog.set(PDFName.of('Metadata'), ctx.register(xmp));

      const iccStream = ctx.flateStream(fs.readFileSync(icc), { N: 3 });
      const intent = ctx.obj({
        Type: 'OutputIntent',
        S: 'GTS_PDFA1',
        OutputConditionIdentifier: PDFHexString.fromText('sRGB IEC61966-2.1'),
        Info: PDFHexString.fromText('sRGB IEC61966-2.1'),
        DestOutputProfile: ctx.register(iccStream)
      });
      catalog.set(PDFName.of('OutputIntents'), ctx.obj([ctx.register(intent)]));

      // Bağlantı notları yazdırılabilir olmalı (/F 4)
      pdf.getPages().forEach(page => {
        const annots = page.node.lookup(PDFName.of('Annots'));
        if (!(annots instanceof PDFArray)) return;
        for (let i = 0; i < annots.size(); i++) {
          const a = annots.lookup(i);
          if (a instanceof PDFDict) a.set(PDFName.of('F'), PDFNumber.of(4));
        }
      });

      const id = crypto.createHash('md5').update(String(meta.title) + now.toISOString()).digest('hex');
      ctx.trailerInfo.ID = ctx.obj([PDFHexString.of(id), PDFHexString.of(id)]);
      pdfa = true;
    }
  }

  const buffer = Buffer.from(await pdf.save({ useObjectStreams: !pdfa }));
  return { buffer, pdfa, warning };
}

module.exports = { postProcessPdf, findSrgbProfile };
