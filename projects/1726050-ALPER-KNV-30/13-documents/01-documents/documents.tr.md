# 13.1 Teslim edilen doküman listesi

Makine ile birlikte teslim edilen teknik dokümanlar iki grupta toplanır: **ayrı evrak** (PDF dosyaları) ve **kılavuza gömülü** referanslar. Dosya adı ve revizyon bilgisi teslim paketindeki kapak sayfası veya dosya etiketinden okunmalıdır.

Sipariş ve servis taleplerinde makine kimlik etiketi bilgileri (**seri no 1726050**, model **KNV-30**) zorunludur — bkz. **Bölüm 1.3.2**.

---

## 13.1.1 Müşteriye teslim çizim paketi (ayrı evrak)

Müşteriye teslim çizim paketi **üç PDF**'ten oluşur:

| # | Doküman | Dosya adı / rev | Kullanım alanı |
|---|---------|-----------------|----------------|
| 1 | **P&ID şeması** | Ayrı evrak — teslim paketi (PDF) | Proses ve medya hatları; tank, pompa, vana bağlantıları |
| 2 | **Elektrik şeması** | Ayrı evrak — teslim paketi (PDF) | Pano, motor, sensör, emniyet devresi — bkz. **3.4**, **5.3**, **11.3** |
| 3 | **Makine layout çizimi** | `1726050-ALPER-KNV 30 LAYOUT.pdf` | Yerleşim, besleme/boşaltma yönü — bkz. **3.5**, **13.2** |

**UYARI — Elektrik:** Elektrik şeması üzerinde çalışmadan önce makine enerjisini kesin ve **LOTO** uygulayın (**Bölüm 2.4**).

P&ID ve elektrik şemasının tam dosya adı/revizyonu teslim anında paket üzerinde belirtilir; kılavuzda sabit dosya adı tanımlanmamıştır.

---

## 13.1.2 Kılavuza gömülü dokümanlar

Aşağıdaki içerikler ayrı PDF olarak **teslim edilmez**; ilgili kılavuz bölümünde yer alır.

| Doküman | Bölüm | Açıklama |
|---------|------------|----------|
| Yedek parça listesi (BOM) | **13.3.1** | 22 kalem; sipariş kodu, kategori, stok önerisi |
| Kritik parça özeti | **9.1.5** | Operasyonel kritik kalemler — tam liste **13.3** |
| Tüketim/önerilen yedek parça | **9.1.6** | Bakım/temizlik tüketim kalemleri |
| PLC alarm listesi | **11.1.2** | 31 alarm kodu; sorun ve çözüm tablosu |
| Periyodik bakım takvimi | **9.1.3** | Bakım periyotları |
| Teknik özellikler tablosu | **3.3** | Boyut, elektrik, medya değerleri |

---

## 13.1.3 Teslim paketine dahil olmayan dokümanlar

Aşağıdaki dokümanlar **ayrı evrak olarak teslim edilmez** veya **uygulanmaz**:

| Doküman | Durum | Not |
|---------|-------|-----|
| Pnömatik şema | Teslim edilmez | Pnömatik hat elektrik şeması / saha tesisatı ile yönetilir |
| Hidrolik şema | **Uygulanmaz** | Hidrolik sistem bulunmamaktadır |
| Parça listesi (BOM) — ayrı PDF | **Uygulanmaz** | Gömülü — **13.3** |
| I/O listesi | Teslim edilmez | Talep halinde imalatçı |
| PLC program yedek dosyası | Teslim edilmez | Talep halinde imalatçı |
| HMI proje yedek dosyası | Teslim edilmez | Talep halinde imalatçı |
| CE dosyası | Teslim edilmez | Talep halinde imalatçı |
| Kalibrasyon sertifikaları | Teslim edilmez | Talep halinde imalatçı |
| Genel montaj çizimi | Teslim edilmez | Layout ayrı evrak olarak verilir |
| Kaldırma noktaları çizimi | Teslim edilmez | Layout içinde; vinç kullanılmaz (**4.1**) |
| Zemin ankraj çizimi | Teslim edilmez | Kurulum **5.2** prosedürüne göre |

---

## 13.1.4 Doküman kullanım rehberi

| İhtiyaç | Bakılacak doküman / bölüm |
|---------|---------------------------|
| Kurulum alanı ve yerleşim | Layout PDF + **3.5** |
| Elektrik bağlantısı | Elektrik şeması + **3.3.3**, **5.3** |
| Proses hatları | P&ID + **3.1**, **7** |
| Arıza teşhisi | **11.1.2** + elektrik şeması |
| Yedek parça siparişi | **13.3.1** + **1.3.4** |
| Enerji izolasyonu | **2.4** (LOTO — şema tekrarı yok) |

---

