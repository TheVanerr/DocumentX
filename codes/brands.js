/* Firma tanımları — tek kaynak. Firma seçici, kapak (cover.js), antet ve
   alt bilgi (header.js) buradan beslenir. Yeni firma = buraya bir kayıt +
   assets/logos/ altına logo.

   color   : kapak şeridi, antet çizgisi, sayfa numarası, alt bilgi rengi
   footer  : numaralı sayfaların sol alt köşesindeki firma adı
   header  : { type: 'text', name, sub } veya { type: 'logo', logo, logoHeight?, logoMaxWidth?, sub? }
   cover   : { logo, logoBox? } — logoBox cm cinsinden (left, top, width, height)
   Logo yolları çalışma klasörüne göredir (assetUrl ile çözülür). */
const BRANDS = {
  DOLFIN: {
    color: '#ff0000',
    footer: 'CNK ELEKTRONİK MAKİNE SAN A.Ş.',
    header: { type: 'text', name: 'DOLFIN', sub: 'Makine Sanayi' },
    cover: { logo: 'assets/logos/dolfin.png' }
  },
  ENVA: {
    color: '#007938',
    footer: 'Enva Specialist Waste Ltd',
    header: { type: 'logo', logo: 'assets/logos/enva.svg' },
    cover: { logo: 'assets/logos/enva.svg' }
  },
  VICO: {
    color: '#C41E3A',
    footer: 'vico AB',
    header: { type: 'logo', logo: 'assets/logos/vico.png' },
    cover: { logo: 'assets/logos/vico.png' }
  },
  KSYSTEM: {
    color: '#1B04AE',
    footer: 'K.SYSTEM GMBH',
    header: { type: 'logo', logo: 'assets/logos/ksystem.png', logoHeight: 22, logoMaxWidth: 148 },
    cover: { logo: 'assets/logos/ksystem.png', logoBox: { left: 4.8, top: 14.2, width: 11.2, height: 6.5 } }
  },
  OBG: {
    color: '#1a1a1a',
    footer: 'OBG AUTOMOTIVE LTD',
    header: { type: 'logo', logo: 'assets/logos/obg.png', logoHeight: 28, logoMaxWidth: 120 },
    cover: { logo: 'assets/logos/obg.png', logoBox: { left: 4.8, top: 14.48, width: 9.0, height: 3.65 } }
  }
};

const DEFAULT_BRAND = 'DOLFIN';

function getBrand(variant) {
  return BRANDS[String(variant || '').toUpperCase()] || BRANDS[DEFAULT_BRAND];
}
