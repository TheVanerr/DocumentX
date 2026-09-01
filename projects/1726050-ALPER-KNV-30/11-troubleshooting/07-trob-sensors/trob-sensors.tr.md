# 11.7 Sensör arızaları

Makinede güvenlik (RFID), proses (seviye, sıcaklık) ve hat entegrasyonu (çıkış ürün algılama, sızıntı tavası) sensörleri bulunur. Sensör arızalarında önce HMI alarm kodunu **Bölüm 11.1.2** tablosundan eşleştirin.

---

## 11.7.1 Alarm tablosundan ilgili sensörler

| Alarm | Sensör / konu | Kontrol |
|-------|---------------|---------|
| Error-422 | Kapak / **RFID** güvenlik sensörü | Kapak tam kapalı mı; RFID etiket hizası; bypass yok |
| Error-200/201 | Yıkama tankı **su seviyesi** | Seviye probu; dolum vanası; sızıntı |
| Error-202/203 | Durulama tankı **su seviyesi** | Seviye probu; dolum vanası; sızıntı |
| Error-452 | **Sızıntı tavası** su algılama | Tava su birikimi; tank/conta kaçağı; drenaj |
| Error-461 | **Çıkış konveyörü** ürün algılama | Sensör hizası; robot parça alma; HMI onay |

### Error-422 — Kapak / RFID

RFID sensör, bakım kapağının güvenli kapalı olduğunu doğrular. Kapak açıkken veya sensör görmüyorken makine start vermez ve çalışırken durur.

1. Bakım kapağının tam kapalı olduğunu doğrulayın.
2. RFID etiket ve sensör hizasını kontrol edin (kir, metal parça engeli).
3. Sensör kablo bağlantısını görsel kontrol edin.
4. **RFID bypass yapmayın** — güvenlik fonksiyonu devre dışı kalır (bkz. **Bölüm 2.4**, **5.4.2**).

### Error-200/201 ve Error-202/203 — Tank seviyesi

1. Tank görsel seviyesini kontrol edin.
2. Otomatik dolum vanası ve su/hava basıncını doğrulayın (**Bölüm 11.5**).
3. Seviye probu bağlantısını kontrol edin.
4. Sürekli düşük seviye varsa sızıntı araştırın (Error-452).

### Error-452 — Sızıntı tavası

1. Sızıntı tavasındaki su birikimini kontrol edin.
2. Tank-conta birleşimlerinde ve boru bağlantılarında kaçak arayın.
3. Tava drenaj hattının tıkalı olmadığını doğrulayın.
4. Sensör false alarm veriyorsa probu temizleyin; arıza devam ederse sensör değişimi.

### Error-461 — Çıkış konveyörü ürün algılama

Makine 7/24 robot hattında çalışır; parça çıkışta algılandığında makine durur.

1. Çıkış konveyöründe kalan parçayı kontrol edin.
2. Robot programının parçayı aldığını doğrulayın.
3. Parça alındıktan sonra HMI **Ürün Alındı Onay** düğmesine basın (**Bölüm 3.4.3**).
4. Sensör sürekli algılıyorsa hizalama ve kir kontrolü yapın.

---

## 11.7.2 Sensör parametreleri

| Parametre | Değer |
|-----------|-------|
| Kritik sensör listesi (tip / konum) | [EKSİK] |
| Sensör LED / durum göstergesi | [EKSİK] |

DATA dosyasında ayrıntılı sensör listesi tanımlanmamıştır. Elektrik şeması ve I/O listesi teslim paketinde referans alınabilir — I/O listesi ayrı evrak olarak **teslim edilmemiştir** (bkz. **Bölüm 13**).

**RFID güvenlik sensörü:** Kapak açıldığında makine durur; periyodik fonksiyon testi **Bölüm 5.4.2** ve **6.2.2**'de tanımlanmıştır.

---

**Bölüm 11.7 sonu.**
