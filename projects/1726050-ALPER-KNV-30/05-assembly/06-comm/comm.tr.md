# 5.6. İletişim ve Otomasyon Arayüzü

---

## 5.6.1. Fieldbus ve Protokol

| Parametre | Değer |
|-----------|-------|
| Fieldbus / protokol | **Profinet** |

Makine otomasyon altyapısı Profinet protokolü üzerinden haberleşir. PLC ve HMI bu altyapı üzerinden entegre edilmiştir.

| Bileşen | Marka / Model |
|---------|---------------|
| PLC | SIEMENS SIMATIC S7-1200 — CPU 1215C DC/DC/DC (6ES7215-1AG40-0XB0) |
| HMI | SIMATIC HMI KTP700 Basic PN (6AV2123-2GB03-0AX0) |
| I/O özeti | 36 giriş / 24 çıkış |

Encoder / feedback ayarı PLC programı içerisinde gömülüdür; ayar **üretici firma** tarafından yapılmalıdır.

<!-- FOTO: PLC ve HMI — Profinet bağlantı noktaları -->
![Profinet altyapısı — PLC/HMI](../../assets/FOTO-5-6-0-profinet.png)

---

## 5.6.2. Üst Sistem Bağlantısı

| Parametre | Değer |
|-----------|-------|
| Üst sistem (MES / SCADA) bağlantısı | Bilinmiyor |

MES veya SCADA entegrasyonu bu proje kapsamında tanımlanmamıştır. Üst sistem bağlantısı gerekiyorsa kullanıcı firma ile birlikte değerlendirilmelidir.

---

## 5.6.3. Uzaktan Erişim

| Parametre | Değer |
|-----------|-------|
| Uzaktan erişim | Evet |
| Modül | Secomea |

Uzaktan erişim, Secomea modülü üzerinden sağlanır. Modül kurulumu ve yapılandırması montaj sonrası devreye alınmalıdır.

<!-- FOTO: Secomea uzaktan erişim modülü — pano içi -->
![Secomea modülü](../../assets/FOTO-5-6-1-secomea.png)

---

## 5.6.4. I/O Listesi ve Dokümantasyon

| Doküman | Dosya adı |
|---------|-------------|
| I/O listesi | **1726050-ALPER-KNV 30 I/O LISTESI.pdf** |

I/O listesi; giriş/çıkış adresleri, sensör ve aktüatör tanımları için referans dokümandır. Kurulum ve devreye alma sırasında elektrik bağlantıları bu listeye göre doğrulanmalıdır.

<!-- FOTO: I/O listesi örnek sayfa — PDF referans -->
![I/O listesi referansı](../../assets/FOTO-5-6-2-io-listesi.png)

---

## 5.6.5. İletişim Kontrol Listesi

| # | Kontrol | Durum |
|---|---------|-------|
| 1 | Profinet ağı yapılandırıldı | ☐ |
| 2 | PLC — HMI haberleşmesi doğrulandı | ☐ |
| 3 | I/O listesi referans alındı | ☐ |
| 4 | Secomea modülü kuruldu (varsa) | ☐ |
| 5 | Encoder/feedback ayarı üretici tarafından yapıldı | ☐ |

**Tarih:** _______________ **Kontrol eden:** _______________
