# 13.1 Teslim edilen doküman listesi

Makine ile birlikte teslim edilen teknik dokümanlar üç grupta toplanır: **ayrı evrak** (PDF dosyaları), **kılavuza gömülü** referanslar ve **üçüncü taraf bileşen kılavuzları**. Dosya adı ve revizyon bilgisi teslim paketindeki kapak sayfası veya dosya etiketinden okunmalıdır; DATA'da bu proje için dosya adı/revizyon kaydı bulunmamaktadır ([EKSİK]).

Sipariş ve servis taleplerinde makine kimlik etiketi bilgileri (**seri no 0726051**, model **KNV-90**) zorunludur — bkz. **Bölüm 1.3.2**.

---

## 13.1.1 Müşteriye teslim çizim paketi (ayrı evrak)

| # | Doküman | Dosya adı / rev | Kullanım alanı |
| :---: | :--- | :--- | :--- |
| 1 | **Elektrik şeması** | [EKSİK] — teslim paketi (PDF) | Pano, motor, ısıtıcı, emniyet devresi, MKŞ/RCCB/kontaktör–yük eşlemesi, BLOWER anahtar grupları — bkz. **3.4**, **5.3**, **11.3** |
| 2 | **Makine layout çizimi** | [EKSİK] — teslim paketi (PDF) | Boyutlar, kurulum alanı, bağlantı noktaları (hava, su, drain, egzoz), kaldırma noktaları — bkz. **3.5**, **13.2** |
| 3 | **P&ID şeması** | [EKSİK] — teslim edilip edilmediği doğrulanacak | Tank, pompa, filtre, nozul ve yağ ayırıcı hatları |

**UYARI — Elektrik:** Elektrik şeması üzerinde çalışmadan önce makine enerjisini kesin ve **LOTO** uygulayın (**Bölüm 2.4**).

Elektrik şemasının tam dosya adı/revizyonu teslim anında paket üzerinde belirtilir; kılavuzda sabit dosya adı tanımlanmamıştır.

---

## 13.1.2 Kılavuza gömülü dokümanlar

Aşağıdaki içerikler ayrı PDF olarak **teslim edilmez**; ilgili kılavuz bölümünde yer alır.

| Doküman | Bölüm | Açıklama |
| :--- | :--- | :--- |
| Yedek parça listesi (BOM) | **13.3.1** | 40 kalem; sipariş kodu, kategori, stok önerisi — ayrıca proje kökü **0726051-YETSAN-KNV 90 PARCA LISTESI** |
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
| Castrol Tribol GR 100-1 PD | Ürün güvenlik bilgi formu (SDS) | Gresleme, KKD (**9.1.4**) |
| VEIDEC temizlik ürünleri | Ürün SDS ve kullanım talimatı | Temizlik (**10.1.7**) |

Bu dokümanlar bileşen üreticilerinden temin edilir; teslim paketinde bulunup bulunmadığı [EKSİK].

---

## 13.1.4 Teslim paketine dahil olmayan dokümanlar

| Doküman | Durum | Not |
| :--- | :--- | :--- |
| Pnömatik şema | [EKSİK] | Tek tüketici (yağ ayırıcı pompası); hat elektrik şeması ve saha tesisatı ile yönetilir |
| Hidrolik şema | **Uygulanmaz** | Hidrolik sistem bulunmamaktadır |
| Parça listesi (BOM) — ayrı PDF | **Uygulanmaz** | Gömülü — **13.3**; kaynak ürün ağacı **KNV 90 7500 ÜRÜN AĞACI.xlsm** |
| I/O listesi | **Uygulanmaz** | PLC yok |
| PLC program yedek dosyası | **Uygulanmaz** | PLC yok |
| HMI proje yedek dosyası | **Uygulanmaz** | HMI yok |
| CE dosyası | [EKSİK] | Güvenlik kategorisi doğrulaması için gerekli — talep halinde imalatçı |
| Kalibrasyon sertifikaları | [EKSİK] | Talep halinde imalatçı |
| Genel montaj çizimi | [EKSİK] | Layout ayrı evrak olarak verilir |
| Kaldırma noktaları çizimi | [EKSİK] | Taşıma için zorunlu — **4.1**; yoksa üretici servisi ile görüşün |
| Zemin ankraj çizimi | [EKSİK] | Ayarlanabilir ayak — **5.2** |

---

## 13.1.5 Doküman kullanım rehberi

| İhtiyaç | Bakılacak doküman / bölüm |
| :--- | :--- |
| Kurulum alanı ve yerleşim | Layout PDF + **3.5** |
| Elektrik bağlantısı | Elektrik şeması + **3.3.3**, **5.3.3** |
| Hangi MKŞ / RCCB hangi yükü besliyor | Elektrik şeması + **11.1.3**, **11.3.3** |
| BLOWER 1/2 anahtar–motor eşlemesi | Elektrik şeması |
| Egzoz fanı çalışma koşulu | Elektrik şeması |
| Arıza teşhisi | **11.1.2** + elektrik şeması |
| İnverter alarm kodu | Delta kılavuzu + **11.3.2** |
| Termostat set değeri | GEMO kılavuzu + **6.3.3** |
| Yedek parça siparişi | **13.3.1** + **1.3.4** |
| Enerji izolasyonu | **2.4** (LOTO — tek kaynak) |
