# 11.1. Arıza Bulma

---

## 11.1.1. Genel Teşhis Adımları

| # | Adım |
|---|------|
| 1 | HMI **alarm ekranını** aç — aktif alarm kodunu ve metnini oku |
| 2 | Tepe lambası **kırmızı** mı kontrol et |
| 3 | Aşağıdaki alarm tablosunda kodu bul |
| 4 | Önerilen kontrol/çözüm adımlarını uygula |
| 5 | Acil stop aktifse önce reset prosedürünü uygula (bkz. **7.3.2**) |
| 6 | Sorun devam ederse LOTO uygulayıp ilgili alt bölüme bak (11.3–11.7) |

**Hata davranışı:** Çalışmayı etkileyen hatalarda makine durur (ör. bakım kapağı açık, RFID görmedi). Anlık hava ihtiyacı olmayan durumlarda (ör. çalışırken hava sökülmesi) makine devam edebilir (bkz. **7.4.4**).

---

## 11.1.2. Alarm Kod Listesi

| Kod | Alarm metni | Kontrol / çözüm |
|-----|-------------|-----------------|
| Error-229 | Acil Stop Devrede | Acil stop butonunu kaldır, tehdidi gider, pano reset butonuna bas (bkz. 7.3.2) |
| Error-410 | Faz Sırası Hatalı | Faz sıra rölesi kontrolü; gerekirse iki faz değiştir (bkz. 5.1 Adım 7) |
| Error-422 | Kapak Kapalı Değil | Bakım kapağının kapalı ve RFID sensörün gördüğünü kontrol et |
| Error-100 | Yıkama Pompası Motoru Hata | Motor koruma, pompa önü vana, elektrik bağlantısı kontrol et |
| Error-101 | Durulama Pompası Motoru Hata | Motor koruma, pompa önü vana, elektrik bağlantısı kontrol et |
| Error-110 | Egzoz Fan Motoru Hata | Egzoz fan motoru ve koruma devresi kontrol et |
| Error-111 | Kurutma Fan Motoru Hata | 1. kurutma fan motoru ve koruma devresi kontrol et |
| Error-112 | Kurutma Fan Motoru 2 Hata | 2. kurutma fan motoru ve koruma devresi kontrol et |
| Error-113 | Kurutma Fan Motoru 3 Hata | 3. kurutma fan motoru ve koruma devresi kontrol et |
| Error-114 | Kurutma Fan Motoru 4 Hata | 4. kurutma fan motoru ve koruma devresi kontrol et |
| Error-130 | Yağ Sıyırıcı Motor Hata | Yağ sıyırıcı motor ve koruma devresi kontrol et |
| Error-150 | Yıkama Tank Sıcaklığı Düşük | Isıtıcı, reçete sıcaklığı, hazırlık tamamlandı mı kontrol et |
| Error-151 | Durulama Tank Sıcaklığı Düşük | Isıtıcı, reçete sıcaklığı, hazırlık tamamlandı mı kontrol et |
| Error-170 | Isıtıcı Kaçak Akım F2 | Yıkama tankı ısıtıcı kaçak akım koruma F2 kontrol et |
| Error-171 | Isıtıcı Kaçak Akım F3 | Isıtıcı kaçak akım koruma F3 kontrol et |
| Error-172 | Isıtıcı Kaçak Akım F4 | Isıtıcı kaçak akım koruma F4 kontrol et |
| Error-200 | Yıkama Tankı Su Seviyesi Pompa Seviyesinin Altında | Yıkama tankı su seviyesi, dolum vanası kontrol et |
| Error-201 | Yıkama Tankı Su Seviyesi Yetersiz | Yıkama tankı dolumu, otomatik dolum su vanası açık mı kontrol et |
| Error-202 | Durulama Tankı Su Seviyesi Pompa Seviyesinin Altında | Durulama tankı su seviyesi, dolum vanası kontrol et |
| Error-203 | Durulama Tankı Su Seviyesi Yetersiz | Durulama tankı dolumu, otomatik dolum su vanası kontrol et |
| Error-235 | Giriş Hava Basıncı Düşük | **6 bar** hava bağlantısı ve regülatör kontrol et (HMI manuel sayfa) |
| Error-236 | Giriş Su Basıncı Düşük | **1 bar** su bağlantısı kontrol et (HMI manuel sayfa) |
| Error-300 | Yıkama Otomatik Dolum Vanası Açılamadı | 6 bar hava, vana mekanik/elektrik kontrolü |
| Error-301 | Yıkama Otomatik Dolum Vanası Kapanamadı | Yıkama dolum vanası mekanik/elektrik kontrolü |
| Error-302 | Durulama Otomatik Dolum Vanası Açılamadı | 6 bar hava, vana mekanik/elektrik kontrolü |
| Error-303 | Durulama Otomatik Dolum Vanası Kapanamadı | Durulama dolum vanası mekanik/elektrik kontrolü |
| Error-304 | Aktarma Vanası Açılamadı | Aktarma vanası mekanik/elektrik, 6 bar hava kontrol et |
| Error-305 | Aktarma Vanası Kapanamadı | Aktarma vanası mekanik/elektrik kontrol et |
| Error-452 | Sızıntı Tavasında Su Tesbit Edildi | Sızıntı tavası, tank/conta kaçağı kontrol et |
| Error-460 | Servo Motor Hata | Servo motor ve sürücü kontrol et — servis gerekebilir |
| Error-461 | Çıkış Konveyöründe Ürün Algılandı | HMI'da ürünün alındığını onayla; robot çıkış prosedürünü kontrol et |

---

## 11.1.3. Genel Arıza Tablosu

| Belirti | Olası neden | Kontrol | Çözüm |
|---------|-------------|---------|-------|
| Arıza 1 | [EKSİK] | [EKSİK] | [EKSİK] |
| Arıza 2 | [EKSİK] | [EKSİK] | [EKSİK] |
| Arıza 3 | [EKSİK] | [EKSİK] | [EKSİK] |

> **Not:** Genel arıza tablosu DATA dosyasında henüz tanımlanmamıştır.
