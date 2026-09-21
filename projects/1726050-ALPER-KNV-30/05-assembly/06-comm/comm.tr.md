# 5.6 İletişim ve otomasyon arayüzü

Makine otomasyon altyapısı kurulum sonrası doğrulanmalıdır. PLC, HMI ve Profinet özellikleri **Bölüm 3.4.7**'de özetlenmiştir; bu bölüm kurulum ve devreye alma kontrol listesini verir.

---

## 5.6.1 Fieldbus ve protokol

| Parametre | Değer |
|-----------|-------|
| Fieldbus / protokol | **Profinet** |

| Bileşen | Marka / Model |
|---------|---------------|
| PLC | SIEMENS SIMATIC S7-1200 — CPU 1215C DC/DC/DC (6ES7215-1AG40-0XB0) |
| HMI | SIMATIC HMI KTP700 Basic PN (6AV2123-2GB03-0AX0) |
| I/O özeti | 36 giriş / 24 çıkış |

Profinet ağı üzerinden PLC–HMI haberleşmesi kurulmalıdır. Encoder / feedback ayarları PLC programına gömülüdür; değişiklik yalnızca **üretici yetkili servisi** tarafından yapılmalıdır (bkz. **Bölüm 6.3**).

**DİKKAT — Yetkisiz müdahale:** PLC programı ve gömülü parametrelerin yetkisiz değiştirilmesi güvenlik fonksiyonlarını devre dışı bırakabilir.

![Profinet altyapısı](../../assets/5.6/1.png)

---

## 5.6.2 Üst sistem bağlantısı

| Parametre | Değer |
|-----------|-------|
| Üst sistem (MES / SCADA) bağlantısı | Müşteri tarafından yapılır |

MES veya SCADA entegrasyonu **müşteri** sorumluluğundadır. Makine **Profinet** altyapısı ile üst sisteme bağlanmaya hazırdır; protokol, adresleme ve sinyal eşlemesi müşteri otomasyon projesine göre yapılandırılır.

---

## 5.6.3 I/O listesi ve dokümantasyon

| Doküman | Dosya adı | Durum |
|---------|-----------|-------|
| I/O listesi | Ayrı evrak teslim edilmez | Talep halinde imalatçı (bkz. **13.1.3**) |

I/O listesi; giriş/çıkış adresleri, sensör ve aktüatör tanımları için referans dokümandır. Ayrı evrak olarak teslim edilmez; kurulum elektrik bağlantıları elektrik şeması (**Bölüm 13.1.1**) ve saha tesisatı ile doğrulanır. Liste talep halinde imalatçıdan istenir.

---

## 5.6.4 İletişim kontrol listesi

| # | Kontrol | Durum |
|---|---------|:-----:|
| 1 | Profinet ağı yapılandırıldı | ☐ |
| 2 | PLC — HMI haberleşmesi doğrulandı | ☐ |
| 3 | HMI açılış ekranı ve dil seçimi test edildi | ☐ |
| 4 | Elektrik şeması referans alındı | ☐ |
| 5 | Encoder/feedback ayarı üretici tarafından doğrulandı | ☐ |

**Tarih:** _______________ **Kontrol eden:** _______________

---

HMI ekran yapısı için bkz. **Bölüm 3.4**; parametre ayarları için bkz. **Bölüm 6**.
