# 6.3 Elektrik ve HMI ayarları

Elektrik ayarları iki katmandan oluşur: **operatör erişilebilir HMI parametreleri** (sıcaklık, yağ sıyırıcı zamanları, tarih/saat/dil) ve **üretici korumalı gömülü ayarlar** (encoder/feedback, PLC programı). Operatör yalnızca birinci gruba müdahale eder; ikinci grup yetkisiz değiştirilirse güvenlik interlock'ları ve motor kontrolü bozulabilir.

HMI ekran yapısı **Bölüm 3.4.4**'te anlatılmıştır; bu bölüm ayar prosedürlerini verir.

---

## 6.3.1 Motor yönü / faz kontrolü

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Motor yönü / faz kontrolü | Motor tek yönde çalıştırılmalıdır; operatör ayarı **gerekmez** |

Pompalar ve fanlar tek yönlü tahrik için tasarlanmıştır. Faz yönü kurulumda faz sıra rölesi ile doğrulanır (bkz. **Bölüm 5.3.4**). Operasyon sırasında motor yönü değiştirme ayarı bulunmaz; ters dönüş arıza belirtisidir (**Bkz. Bölüm 11**).

---

## 6.3.2 Encoder / feedback

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Encoder / feedback ayarı | PLC programı içerisinde gömülüdür; ayar **üretici firma** tarafından yapılmalıdır |

Encoder ve feedback parametreleri HMI üzerinden operatöre açılmaz. Kalibrasyon veya değişiklik yalnızca üretici yetkili servisi tarafından yapılır.

**DİKKAT — Yetkisiz müdahale:** PLC programı ve gömülü encoder ayarlarının operatör tarafından değiştirilmesi konveyör senkronizasyonunu ve güvenlik fonksiyonlarını bozabilir.

---

## 6.3.3 Proses sıcaklığı ve yağ sıyırıcı ayarları (HMI)

| Parametre | Ayar yeri |
|-----------|-----------|
| Sıcaklık set değerleri | HMI **Ayarlar Sayfası** |
| Yağ sıyırıcı çalışma / bekleme süreleri | HMI **Ayarlar Sayfası** |
| Basınç ayarı | Yoktur |

Analog basınç ölçeklendirmesi operatör tarafından yapılmaz. Sıcaklık ayarları HMI üzerinden yapılır.

### HMI sıcaklık ve yağ sıyırıcı ayar prosedürü

1. Makineyi **stop** durumuna getirin veya hazırlık aşamasında olun.
2. HMI **Ayarlar Sayfası**'nı açın.
3. Aşağıdaki set değerlerini proses ihtiyacına göre girin:

| Parametre bloğu | Ayarlanan değer |
|-----------------|-----------------|
| Yıkama sıcaklık | Set değeri (°C) |
| Durulama sıcaklık | Set değeri (°C) |
| Kurutma | Set değeri 1 (°C) |
| Yağ sıyırıcı | Çalışma süresi (dk) ve bekleme süresi (dk) |

4. Değerleri onaylayın; PLC'ye aktarıldığını doğrulamak için **Çalışma Sayfası**'nda set/anlık sıcaklık göstergelerini kontrol edin.
5. Sıcaklık limitlerini parça malzemesi ve proses güvenliği açısından makine tasarım sınırları içinde tutun.

**Beklenen sonuç:** Çalışma sayfasında set ve anlık sıcaklık değerleri tutarlı; yağ sıyırıcı periyodik çalışır.

**Anormal durum:** Isıtıcı devreye girmiyorsa seviye sensörü, termik ve kaçak akım koruma durumunu HMI Manuel Sayfası'ndan kontrol edin (bkz. **Bölüm 3.4.5**, **Bölüm 11**).

<!-- FOTO: HMI Ayarlar Sayfası — sıcaklık ve yağ sıyırıcı -->
![HMI sıcaklık ayarı](../../assets/6.3/1.png)

---

## 6.3.4 Tarih, saat ve dil ayarı (HMI)

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Tarih / saat / dil ayarı | HMI arayüzünden yapılmalıdır |

### Dil seçimi

HMI açılış ekranında sağ üst köşedeki bayrak simgeleri ile dil seçilir: **Türkçe**, **İngilizce**, **Almanca** (bkz. **Bölüm 3.4.2**).

### Tarih / saat

1. HMI **Ayarlar Sayfası** veya sistem parametre menüsünü açın.
2. Tarih ve saati tesis standardına göre güncelleyin.
3. Alarm kayıtları ve trend zaman damgalarının doğru olduğunu doğrulayın.

Doğru tarih/saat, alarm geçmişi ve bakım kayıtlarının izlenebilirliği için gereklidir.

<!-- FOTO: HMI açılış — dil seçimi -->
![HMI dil ayarı](../../assets/6.3/2.png)

---

## 6.3.5 Elektrik ayar kontrol listesi

| # | Kontrol | Durum |
|---|---------|:-----:|
| 1 | Faz yönü kurulumda doğrulandı (Bölüm 5.3.4) | ☐ |
| 2 | Encoder/feedback ayarı üretici tarafından yapıldı / doğrulandı | ☐ |
| 3 | HMI sıcaklık set değerleri tanımlandı | ☐ |
| 4 | Yağ sıyırıcı çalışma/bekleme süreleri tanımlandı | ☐ |
| 5 | HMI tarih / saat / dil ayarlandı | ☐ |

**Tarih:** _______________ **Kontrol eden:** _______________

---

**Bölüm 6.3 sonu.** HMI menü yapısı için bkz. **Bölüm 3.4**; reçete yönetimi için bkz. **Bölüm 8.2**.
