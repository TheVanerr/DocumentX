# 13.1 Teslim edilen doküman listesi

Makine ile ilgili teknik dokümanlar üç grupta toplanır: makine ile birlikte verilen **ayrı evrak**, **kılavuza gömülü** referanslar ve talep halinde temin edilen **üçüncü taraf bileşen kılavuzları**. Ayrı evrakın dosya adı ve revizyonu **Bölüm 13.1.1** tablosunda verilmiştir.

Sipariş ve servis taleplerinde makine kimlik etiketi bilgileri (**seri no 0726051**, model **KNV-90**) zorunludur (**Bkz. Bölüm 1.3.2**).

---

## 13.1.1 Ayrı evrak olarak teslim edilen dokümanlar

| # | Doküman | Dosya adı / rev | Kullanım alanı |
| :---: | :--- | :--- | :--- |
| 1 | **AB Uygunluk Beyanı** (2006/42/AT Ek II-A) | — | Makine ile birlikte verilir; makinenin 2006/42/AT Makine Direktifi'ne uygunluk beyanı |
| 2 | **Elektrik şeması** | Ek doküman olarak verilir | Pano, motor, ısıtıcı, emniyet devresi, MKŞ/RCCB/kontaktör–yük eşlemesi, BLOWER anahtar grupları — **Bkz. Bölüm 3.4, 5.3, 11.3** |
| 3 | **Makine layout çizimi** | C057536 — ek doküman (PDF) | Ön, yan ve izometrik görünüş; dış ölçüler, yükleme yüksekliği, hücre giriş açıklığı — **Bkz. Bölüm 3.3.1, 3.5, 13.2** |
| 4 | **Garanti belgesi** | — | Makine ile birlikte verilir; garanti süresi ve koşulları — **Bkz. Bölüm 14.1** |

**NOT:** Elektrik şemasına göre pano içinde yapılacak her çalışmadan önce makine enerjisini kesin ve **LOTO** uygulayın (**Bkz. Bölüm 2.4**).

---

## 13.1.2 Kılavuza gömülü dokümanlar

Aşağıdaki içerikler ayrı PDF olarak **teslim edilmez**; ilgili kılavuz bölümünde yer alır.

| Doküman | Bölüm | Açıklama |
| :--- | :--- | :--- |
| Yedek parça listesi (BOM) | **13.3.1** | 39 kalem; sipariş kodu, kategori, stok önerisi |
| Kritik parça özeti | **9.1.5** | Operasyonel kritik kalemler — tam liste **13.3** |
| Tüketim/önerilen yedek parça | **9.1.6** | Bakım/temizlik tüketim kalemleri |
| Arıza tablosu (belirti–neden–çözüm) | **11.1.2** | 13 arıza senaryosu |
| MKŞ tespit tablosu | **11.1.3** | Q1–Q10 pano etiketleri ve motor eşlemesi |
| Periyodik bakım takvimi | **9.1.3** | Bakım periyotları |
| Teknik özellikler tablosu | **3.3** | Elektrik, motor, ısıtıcı, medya değerleri |
| Operatör paneli yerleşimi | **3.4.2** | Anahtar, termostat ve lamba tanımları |
| Güvenlik fonksiyon test listesi | **5.4.6** | 7 acil stop, 7 kapak switch'i, interlock |

---

## 13.1.3 Üçüncü taraf bileşen kılavuzları

| Bileşen | Doküman | Kullanım |
| :--- | :--- | :--- |
| Delta VFD004EL21W-1 inverter | Delta VFD-EL serisi kullanım kılavuzu | Alarm kodları (**11.3.2**); parametreler yalnızca üretici servisi |
| GEMO DTH2 termostat | GEMO DTH2 kullanım kılavuzu | Set değeri girme, tuş yerleşimi (**6.3.3**) |
| Omron G9SB2002AACDC241 emniyet rölesi | Omron G9SB datasheet | LED durumları, reset mantığı (**11.7.1**) |
| Omron F3STGRNLPU21M1J8 kapak switch'i | Omron datasheet | Montaj mesafesi, hizalama (**11.7.1**) |
| VEGASWING 51 seviye sensörü | VEGA kullanım kılavuzu | Temizlik, montaj (**11.7.2**) |
| Konveyör redüktörü XXC40/75 | Redüktör üreticisinin kullanım ve bakım dokümanı | Yağ tipi, miktarı, yağ kontrolü (**9.1.4**) |
| Castrol Tribol GR 100-1 PD | Ürün güvenlik bilgi formu (SDS) | Gresleme, KKD (**9.1.4**) |
| VEIDEC temizlik ürünleri | Ürün SDS ve kullanım talimatı | Temizlik (**10.1.7**) |

Bileşen kılavuzları (Delta VFD, GEMO DTH2, Omron G9SB ve F3S, VEGASWING 51, redüktör) talep halinde imalatçıdan temin edilir. Gres ve temizlik ürünlerinin güvenlik bilgi formları (SDS) ürün tedarikçisinden temin edilir.

---

## 13.1.4 Teslim paketine dahil olmayan dokümanlar

| Doküman | Durum | Not |
| :--- | :--- | :--- |
| Teknik dosya (2006/42/AT Ek VII) | **Teslim edilmez** | İmalatçıda saklanır; yalnız yetkili makamın gerekçeli talebinde sunulur. Güvenlik kategorisi / PL — **Bkz. Bölüm 2.1.3** |
| Pnömatik şema | **Uygulanmaz** | Tek pnömatik tüketici (yağ ayırıcı diyafram pompası); hat **Bölüm 6.5**'te tarif edilmiştir |
| Hidrolik şema | **Uygulanmaz** | Hidrolik sistem bulunmamaktadır |
| P&ID | **Teslim edilmez** | Ayrı P&ID verilmez; proses akışı **Bölüm 3.1**'de |
| Parça listesi (BOM) — ayrı evrak | **Uygulanmaz** | Kılavuza gömülü — **Bölüm 13.3** |
| I/O listesi | **Uygulanmaz** | PLC yok |
| PLC program yedek dosyası | **Uygulanmaz** | PLC yok |
| HMI proje yedek dosyası | **Uygulanmaz** | HMI yok |
| Kalibrasyon sertifikaları | **Teslim edilmez** | Teslim kapsamında değildir; talep halinde imalatçıdan |
| Genel montaj çizimi | **Teslim edilmez** | Ayrı evrak olarak verilmez; 3D görünüşler **Bölüm 3.1**'de |
| Kaldırma noktaları çizimi | **Teslim edilmez** | Kaldırma yöntemi ve forklift çatal konumu — **Bkz. Bölüm 3.5.4** |
| Zemin ankraj çizimi | **Uygulanmaz** | Makine ayarlanabilir ayaklar üzerinde, ankrajsız kurulur |

---

## 13.1.5 Doküman kullanım rehberi

| İhtiyaç | Bakılacak doküman / bölüm |
| :--- | :--- |
| Kurulum alanı ve yerleşim | Layout çizimi + **3.5** |
| Elektrik bağlantısı | Elektrik şeması + **3.3.3**, **5.3.3** |
| Hangi MKŞ / RCCB hangi yükü besliyor | Elektrik şeması + **11.1.3**, **11.3.3** |
| BLOWER 1/2 anahtar–motor eşlemesi | Elektrik şeması |
| Egzoz fanı çalışma koşulu | **3.4.3** + elektrik şeması |
| Arıza teşhisi | **11.1.2** + elektrik şeması |
| İnverter alarm kodu | Delta kılavuzu + **11.3.2** |
| Termostat set değeri | GEMO kılavuzu + **6.3.3** |
| Yedek parça siparişi | **13.3.1** + **1.3.4** |
| Enerji izolasyonu | **2.4** (LOTO prosedürü) |
