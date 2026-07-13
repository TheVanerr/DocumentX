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
- Bu ölçüler değişince `renderer.js > usableHeight()` kullanılabilir yüksekliği yeniden ölçer.

## Sayfalama motoru

Dosya: `codes/renderer.js`, yaklaşık satır 301, `computePages(blocks)`.

- `LINE_H = 22`: Bir normal metin satırının yaklaşık yüksekliği. Metin boyutu veya line-height değişirse bunu da güncelleyin.
- `BOTTOM_RESERVE = LINE_H * 2`: Her sayfanın altında bırakılan genel iki metin satırı, yani 44px.
- `ORPHAN_MIN = LINE_H * 3`: Başlık altında gereken ek üç metin satırı, yani 66px.
- Genel iki satırla birlikte başlık için toplam fiziksel koruma yaklaşık beş metin satırıdır.
- Başlık kontrolü aynı fonksiyondaki `place(el)` bloğundadır.

## Tablo sayfalama

Dosya: `codes/renderer.js`, yaklaşık satır 371, `computePages > placeTable(tableEl)`.

- `TABLE_RESERVE = LINE_H`: Tabloya özel bir metin satırı boşluk.
- `TABLE_MAX = MAX - TABLE_RESERVE`: Tablonun kullanabileceği üst yükseklik sınırı.
- Genel `BOTTOM_RESERVE` iki satır + tabloya özel bir satır = tablodan sonra toplam yaklaşık üç metin satırı fiziksel boşluk.
- Tablo gövde satırlarına göre bölünür.
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
- Görsel boşluğu: `.md-img`.
- Tablo içi görsel boyutu: `.md-table .md-img`.

## Antet, alt bilgi ve numara

Dosya: `codes/style.css`.

- Yaklaşık satır 408, `.page-number`: sayfa numarası.
- Yaklaşık satır 418, `.ph-footer-line`: alt çizgi.
- Yaklaşık satır 428, `.ph-footer`: CNK yazısı.
- Yaklaşık satır 442, `.page-header`: üst antet.
- Konumlar `top`, `bottom`, `left`, `right` ile değiştirilir.
- Yaklaşık dönüşüm: 1cm = 37.8px, 2.1cm = 79px.

## İçindekiler bağlantıları

Dosya: `codes/renderer.js`.

- İçindekiler satırları: `buildTocBlocks(entries)`.
- Bölüm bağlantıları: `renderGuide(...)` fonksiyonunun son kısmı.
- Tam A4 sayfasına kaydırma: `scrollToPage(el)`.
- PDF sayfa hedefleri: `renderPages(...)`.

Dosya: `codes/style.css`.

- İçindekiler görünümü: `.toc-title`, `.toc-row`, `.toc-num`, `.toc-page`.
- Bağlantıların normal renkte kalması: `.toc-row` ve `.toc-row *`.

## Değişiklik sırası

1. Önce `style.css` içindeki görsel ölçüyü değiştirin.
2. Normal metin satır yüksekliği değiştiyse `renderer.js > computePages > LINE_H` değerini güncelleyin.
3. Modeli yeniden render edin veya uygulamayı yenileyin.
4. Ekranı kontrol edin.
5. PDF çıktısını ayrıca kontrol edin.