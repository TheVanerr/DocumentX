# 7.2 Makine başlatma

Makine start verilmeden önce **Hazırlık Start** prosedürü tamamlanmalıdır. Hazırlık; tank dolumu, ısıtma ve proses devrelerinin çalışmaya hazır hale gelmesini sağlar. Start komutu HMI **Çalışma Sayfası**'ndaki **Makine Start** düğmesi ile verilir.

**UYARI — Sıkıştırma:** Start öncesi konveyör hattında parça veya cisim kalmadığını doğrulayın; aksi halde ezilme riski oluşur.

---

## 7.2.1 Devreye alma ön koşulları

Hazırlık butonu ile aşağıdaki işlemler otomatik yürütülür:

- Tankta su **yoksa** → üst seviye sensörüne kadar otomatik dolum, ardından reçetede ayarlanan sıcaklığa ısıtma.
- Tankta su **varsa** → doğrudan ısıtma.

Başka hazırlık adımı gerekmez. Ön koşullar:

| # | Koşul |
|---|-------|
| 1 | Ana şalter **ON** — makinede elektrik var |
| 2 | Basınçlı hava **6 bar** bağlı (bkz. **Bölüm 3.3.5**) |
| 3 | Su girişi ve otomatik dolum vanası **açık** |
| 4 | HMI manuel sayfada hava/su bilgisi **yeşil** (bkz. **Bölüm 5.5.3**) |
| 5 | Aktif alarm yok (HMI Alarm Sayfası) |

**Dolum sorunu:** Tankta su yoksa ve hazırlıkta dolum olmuyorsa **otomatik dolum su giriş vanası kapalıdır** — vanayı açın. **6 bar** hava bağlantısını doğrulayın.

---

## 7.2.2 Güç açma ve hazırlık sırası

1. Ana şalterin **ON** konumunda olduğunu doğrulayın.
2. HMI **Çalışma Sayfası**'na geçin.
3. Proses fonksiyonlarını (yıkama, durulama, kurutma 1/2, egzoz) istenen şekilde **aktif** konuma getirin (bkz. **Bölüm 7.1.6**).
4. **Hazırlık Start** düğmesine basın.
5. Tank dolumu ve ısıtmanın tamamlanmasını bekleyin; çalışma sayfasında set/anlık sıcaklık değerlerini izleyin.
6. Tepe lambasının **sarı** (kullanıma hazır) yandığını doğrulayın.

**Isıtma süresi:** Değişkendir — tanktaki mevcut su miktarı ve sıcaklığına bağlıdır; sabit süre verilemez.

![HMI hazırlık butonu](../../assets/7.2/1.png)

---

## 7.2.3 Hava, su ve medya

| Medya | Gereksinim |
|-------|------------|
| Basınçlı hava | **6 bar** — hazırlık/dolum için zorunlu |
| Su | Otomatik dolum vanası ile tanklara dolar |
| Vakum | **Yoktur** |

Vakum bağlantısı veya açma prosedürü uygulanmaz (bkz. **Bölüm 6.6**).

---

## 7.2.4 Start prosedürü

Start öncesi **Bölüm 7.2.5** kontrol listesini tamamlayın.

1. Hazırlığın tamamlandığını ve tepe lambasının **sarı** yandığını doğrulayın.
2. Konveyör hattında sıkıştıracak parça/cisim olmadığını kontrol edin.
3. Pompa önü vanaların **açık** olduğunu doğrulayın; kapalıysa açın.
4. HMI **Makine Start** düğmesine basın.
5. Tepe lambasının **yeşil** yandığını; konveyör ve seçili proses fonksiyonlarının çalıştığını doğrulayın.

**Beklenen sonuç:** Makine otomatik cycle'da; yeşil tepe lambası; HMI'da aktif alarm yok.

**Anormal durum:** Start verilmezse HMI alarm sayfasını kontrol edin (bkz. **Bölüm 11**). RFID kapak, acil stop veya seviye alarmı aktif olabilir.

---

## 7.2.5 Start öncesi kontrol listesi

| # | Kontrol | Durum |
|---|---------|:-----:|
| 1 | Konveyör hattında sıkıştıracak parça/cisim yok | ☐ |
| 2 | Pompa önü vanalar açık | ☐ |
| 3 | Hazırlık tamamlandı (dolum + ısıtma) | ☐ |
| 4 | Hava 6 bar; HMI manuel sayfada hava/su yeşil | ☐ |
| 5 | Acil stop resetli; tepe lambası sarı (hazır) | ☐ |
| 6 | HMI alarm ekranında bloklayıcı alarm yok | ☐ |

**Tarih:** _______________ **Kontrol eden:** _______________

---

## 7.2.6 İlk parça denemesi

| Parametre | Değer |
|-----------|-------|
| Ayrı ilk parça / deneme yıkama prosedürü | **Yoktur** |

Ayrı bir ilk parça atma prosedürü tanımlanmamıştır. Yeni ürün tipi için test yıkaması **Bölüm 8.2.2** reçete adımlarına göredir.

---

Durdurma için bkz. **Bölüm 7.3**; otomatik sekans için bkz. **Bölüm 7.4**.
