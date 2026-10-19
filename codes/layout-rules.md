# DocumentX Görsel ve Sayfalama Ayarları

Bu dosya ekran ve PDF yerleşimini elle ayarlamak için referanstır. Satır numaraları kod değiştikçe kayabilir; belirtilen CSS seçicisini veya JavaScript fonksiyonunu arayın.

## Metin ve paragraf

Dosya: `codes/style.css`

- Yaklaşık satır 400, `.page-content`: `font-size: 13px` normal metin boyutudur. `line-height: 1.65` paragraf içindeki satır aralığıdır. Gerçek satır yüksekliği yaklaşık 21.45px'tir.
- Yaklaşık satır 538, `.md-p`: `margin: 0 0 11px` içindeki 11px paragraflar arasındaki alt boşluktur.
- `margin` sırası: üst, sağ, alt, sol.

## Başlık ve metin aralıkları

Dosya: `codes/style.css`, yaklaşık satır 526-536.

- `.sec-h1 { margin: 4px 0 14px; }`
- `.sec-h2 { margin: 20px 0 9px; }`
- `.sec-h3 { margin: 16px 0 7px; }`
- `.sec-h4 { margin: 13px 0 6px; }`
- `.sec-h5, .sec-h6 { margin: 12px 0 5px; }`

İlk değer başlıktan önceki, üçüncü değer başlık ile altındaki paragraf arasındaki boşluktur. Ardışık dikey margin değerleri birleşebilir; paragraf altı 11px ve başlık üstü 20px ise genellikle toplam 31px yerine büyük olan 20px uygulanır.

Ham Markdown başlık stilleri `.md-h1`-`.md-h6`; numaralandırılmış kılavuz başlıkları `.sec-h1`-`.sec-h6` kurallarını kullanır.

## A4 sayfası

Dosya: `codes/style.css`, yaklaşık satır 379, `.a4-page`.

- `width: 794px`: A4 genişliği.
- `min-height: 1123px`: A4 yüksekliği.
- `padding: 82px 70px 55px`: üst, sağ/sol ve alt içerik boşluğu.
- Bu ölçüler değişince `paginator.js > getContentMetrics()` kullanılabilir yüksekliği CSS değişkenlerinden (`--content-max-h`, `--line-h`) yeniden ölçer.

## Sayfalama motoru

Dosya: `codes/paginator.js`, `computePages(blocks, { cache })` → `computePagesRaw(blocks)`.

- Her ana bölüm yeni sayfada başladığı için bölümler bağımsız sayfalanır; `cache: true` ile bölüm sonuçları içerik + ölçü anahtarıyla önbellekte tutulur (canlı yenilemede yalnızca değişen bölüm ölçülür). Görsel dosyası değişince `clearPaginationCache()` çağrılır.

- `LINE_H`: `--line-h` CSS değişkeninden okunur (bir normal metin satırı).
- `BOTTOM_RESERVE = LINE_H * 2`: Her sayfanın altında bırakılan genel iki metin satırı, yani 44px.
- `ORPHAN_MIN = LINE_H * 3`: Başlık altında gereken ek üç metin satırı, yani 66px.
- Genel iki satırla birlikte başlık için toplam fiziksel koruma yaklaşık beş metin satırıdır.
- Başlık kontrolü aynı fonksiyondaki `place(el)` bloğundadır.

## Tablo sayfalama

Dosya: `codes/paginator.js`, `computePagesRaw > placeTable(tableEl)`.

- `TABLE_RESERVE = LINE_H`: Tabloya özel bir metin satırı boşluk.
- `TABLE_MAX = MAX - TABLE_RESERVE`: Tablonun kullanabileceği üst yükseklik sınırı.
- Genel `BOTTOM_RESERVE` iki satır + tabloya özel bir satır = tablodan sonra toplam yaklaşık üç metin satırı fiziksel boşluk.
- Tablo gövde satırlarına göre bölünür; satırlar tek tek eklenip ölçülür (doğrusal maliyet).
- Numaralı tablo başlığı (`<caption>`) devam parçalarında `Tablo 3-1 (devam)` olur.
- Bir tablo satırı iki sayfa arasında parçalanmaz.
- Satır tam sığmıyorsa sonraki sayfaya geçer.
- Her yeni tablo parçasında `thead` tekrar edilir.
- Toplam dört satır boşluk için `TABLE_RESERVE = LINE_H * 2` yapın.
- Tek bir satır boş A4'e bile sığmıyorsa sonsuz döngüyü önlemek için istisna olarak tek parça yerleştirilir.
- Tablolar `place(el)` içindeki `if (el.tagName === 'TABLE')` kontrolüyle özel motora gönderilir.

## Tablo görünümü

Dosya: `codes/style.css`, yaklaşık satır 582-601.

- `.md-table` içindeki `margin: 0 0 14px`: tablonun altındaki görsel boşluk.
- `.md-table` içindeki `font-size: 12px`: tablo metni boyutu.
- `.md-table th, .md-table td` içindeki `padding: 7px 10px`: hücre üst/alt ve sağ/sol iç boşluğu. İlk değeri küçültmek tablo satırlarını alçaltır.
- `.md-table th > text-align: center`: başlık hücrelerini yatay ortalar.
- `.md-table th > vertical-align: middle`: başlık hücrelerini dikey ortalar.

## Diğer içerik boşlukları

Dosya: `codes/style.css`.

- Liste alt boşluğu: `.md-list`.
- Liste maddeleri arası: `.md-list li`.
- Alıntı boşluğu: `.md-quote`.
- Kod bloğu boşluğu: `.md-code`.
- Yatay çizgi boşluğu: `.md-hr`.
- İçerik fotoğrafları (yalnızca \![...](...)\ satırı): \.md-p.md-figure\ — yatayda ortalı; enderer.js\ bu paragraflara \md-figure\ sınıfını ekler.
- Görsel boşluğu / genişlik: \.md-img\ (\margin: 8px auto\, \max-width: 100%\).
- Tablo sembol/ikonları (ayrı kural): \.md-table .md-img\ — küçük, hücre içi; ortalanmaz.

## Antet, alt bilgi ve numara

Dosya: `codes/style.css`.

- Yaklaşık satır 408, `.page-number`: sayfa numarası.
- Yaklaşık satır 418, `.ph-footer-line`: alt çizgi.
- Yaklaşık satır 428, `.ph-footer`: CNK yazısı.
- Yaklaşık satır 442, `.page-header`: üst antet.
- Konumlar `top`, `bottom`, `left`, `right` ile değiştirilir.
- Yaklaşık dönüşüm: 1cm = 37.8px, 2.1cm = 79px.

## İçindekiler bağlantıları

Dosya: `codes/document.js`.

- İçindekiler satırları (+ şekil/tablo listesi): `buildTocBlocks(entries, figures, tables, withPage)`.
- Belge içi bağlantılar `data-goto` (CSS seçici) taşır; tıklama `renderer.js > onDocumentClick` ile çözülür.
- Başlıktan içindekilere dönüş: `wrapHeadingBackLinks(container)`.
- PDF'te bağlantıların A4 sayfa başına yönlenmesi: `retargetLinksToPages(container)`.
- Tam A4 sayfasına kaydırma: `renderer.js > scrollToPage(el)`.

Dosya: `codes/style.css`.

- İçindekiler görünümü: `.toc-title`, `.toc-row`, `.toc-num`, `.toc-page`.
- Bağlantıların normal renkte kalması: `.toc-row` ve `.toc-row *`.

## Değişiklik sırası

1. Önce `style.css` içindeki görsel ölçüyü değiştirin.
2. Normal metin satır yüksekliği değiştiyse `style.css > .a4-page > --line-h` değerini güncelleyin.
3. Modeli yeniden render edin veya uygulamayı yenileyin.
4. Ekranı kontrol edin.
5. PDF çıktısını ayrıca kontrol edin.

## Kod haritası (codes/)

| Dosya | Görev |
|---|---|
| `state.js` | Paylaşılan durum (`currentLang`, `currentFirma` …), oturum hafızası (`prefGet/prefSet`), çıktı seçenekleri |
| `brands.js` | Firma tanımları — renk, antet, alt bilgi, kapak logosu (tek kaynak) |
| `md-parser.js` | Markdown → blok; uyarı kutuları, iç içe liste, tablo hizası, çapraz referans, `data-src/data-line` |
| `figures.js` | Şekil çerçeve/ızgara yerleşimi, şekil–tablo numaralandırma |
| `paginator.js` | A4 sayfalama + bölüm önbelleği |
| `document.js` | Numaralı bloklar, içindekiler, revizyon sayfası, antet, PDF/HTML belge kurulumu |
| `cover.js`, `header.js` | Kapak / arka kapak, antet |
| `renderer.js` | Uygulama akışı, yaml'a kalıcı kapak meta, kısayollar, belge ayarları |
| `sidebar.js`, `search.js`, `qc.js`, `compare.js`, `export.js` | Kenar çubuğu (bölümler / sayfalar / DATA), arama, kalite kontrol, dil karşılaştırma, PDF/HTML/DOCX/web + toplu çıktı |
| `data-resolve.js` (+ main: `data-file.js`) | DATA yer tutucuları `{{BLOK:Anahtar}}`, `{{TABLO:BLOK}}` |
| `glossary.js` | Terim sözlüğü (yasaklı eş anlamlılar) ve dizin |
| `iso20607.js`, `iso7010.js` | ISO 20607 kapsam taraması, ISO 7010 işaretleri (`:W012:`) |
| `changes.js` (+ main: `git-info.js`) | Revizyon farkı / değişiklik çubukları, çeviri eskime zamanları |
| `images.js` | Görsel işaretleri (`.marks.json`), görsel raporu, çıktı optimizasyonu |
| `editor.js`, `dashboard.js` | Uygulama içi düzenleyici, proje panosu |
| main: `pdf-post.js`, `web-export.js` | PDF meta verisi / PDF/A hazırlığı, etkileşimli web kılavuzu |
| `doc-content.css` | Yeni belge bileşenleri (PDF, HTML görünümü ve HTML çıktısı ortak) |
| `ui.css` | Uygulama arayüzü (paneller, menüler, modallar) |
| `yaml-edit.js` | project.yaml'da tek üst düzey bloğu yorumları koruyarak yeniden yazar |

## Uyarı kutuları

Dosya: `codes/doc-content.css`, `.md-callout`.

- Paragraf veya alıntı `**UYARI — <tehlike>:** …` ile başlarsa kutuya dönüşür. Seviye renkleri ANSI Z535 / ISO 3864: TEHLİKE `#C8102E`, UYARI `#FF7900`, DİKKAT `#FFD100`, ÖNEMLİ/NOTICE `#0067A5`; NOT/BİLGİ bantsız not kutusu.
- Liste maddesi uyarıyla başlarsa kutu yerine renkli etiket (`.sig-pill`) kullanılır.
- Kutu sayfa arasında bölünmez (`break-inside: avoid`); başlık + kutu sığmazsa başlık da sonraki sayfaya geçer.

## Şekil / tablo numaraları ve antet bölüm adı

- `project.yaml > cikti.sekil_numara: true` → `Şekil <bölüm>-<n>: <alt metin>` alt yazısı; tablodan hemen önce `Tablo: <başlık>` satırı varsa `Tablo <bölüm>-<n>: <başlık>`. İçindekilere şekil/tablo listesi eklenir. Alt yazı stili: `.md-figcaption`, `.md-tblcaption`.
- `cikti.bolum_basligi` (varsayılan açık) → antette model adının altında sayfanın ana bölümü (`.ph-chapter`).
- `cikti.arka_kapak: true` → numarasız arka kapak (`.back-cover-*`).
- `revizyonlar:` listesi doluysa kapaktan sonra revizyon geçmişi sayfası basılır.
- `cikti.degisiklik_cubugu: true` → taban sürümden (`cikti.degisiklik_tabani` veya son revizyon kaydının `commit`'i) bu yana değişen blok/satır/madde sol kenarda kırmızı çizgi (`.dx-changed`). Çizgi içerik kutusunun 22 px solunda durur.
- `cikti.sayfa: A4 | A5 | Letter` → `body.paper-a5 / paper-letter`; sayfa ölçüleri `.a4-page` üzerindeki `--page-w`, `--a4-height`, `--pad-x`, `--edge-x`, `--footer-rule-inset`, `--num-bottom` değişkenleriyle değişir (doc-content.css sonu). A5 kapak A4 tasarımından `zoom: 0.704` ile ölçeklenir.

## Görsel işaretleri

Dosya: `codes/doc-content.css`, `.img-mark`. Konum `images.js > placeImageMarks` ile görselin `object-fit` (contain / cover) çizim alanına göre hesaplanır; kırpılan alana düşen işaret basılmaz.

