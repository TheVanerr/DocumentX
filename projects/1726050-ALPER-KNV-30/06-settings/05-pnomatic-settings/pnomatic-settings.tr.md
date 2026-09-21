# 6.5 Pnömatik ayarlar

Makine pnömatik tüketimi esas olarak dolum vanaları ve proses kontrolü için **6 bar** basınçlı hava ile beslenir. Bağlantı değerleri **Bölüm 3.3.5**'te verilmiştir; bu bölüm regülatör ayar prosedürünü tanımlar.

Hidrolik sistem yoktur. Silindir hız ve sensör gecikmesi ayarı operatöre açık değildir.

---

## 6.5.1 Regülatör basınç ayarı

| Parametre | Değer (Bölüm 3.3.5) |
|-----------|----------------------------|
| Regülatör basınç ayarı | **6 bar** |
| Bağlantı | 3/4" |

### Regülatör ayar prosedürü

1. Tesisat ana hava vanasının açık olduğunu doğrulayın.
2. Makine girişindeki pnömatik regülatörü bulun.
3. Regülatörü **6 bar** olacak şekilde ayarlayın; manometre veya regülatör skalasını referans alın.
4. HMI **Manuel Sayfası**'nı açın; **hava bilgisi** göstergesinin **yeşil** yandığını doğrulayın.
5. Ayar sonrası dolum vanalarının ve pnömatik fonksiyonların normal çalıştığını kısa test ile kontrol edin.

**Beklenen sonuç:** Regülatör 6 bar; HMI manuel sayfasında hava bilgisi yeşil.

**Anormal durum:** Basınç düşükse tesis hattı debisi, filtre tıkanıklığı ve kaçakları kontrol edin (bkz. **Bölüm 11**).

Kurulum sırasında ilk ayar **Bölüm 5.3.1**'de yapılır; regülatör kayması veya hortum değişiminden sonra bu prosedür tekrarlanmalıdır.

![Pnömatik regülatör 6 bar](../../assets/6.5/1.png)

---

## 6.5.2 Silindir hız ayarı

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Silindir hız ayarı | Silindir hızı ayarı **yoktur** |

---

## 6.5.3 Sensör gecikmeleri

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Sensör ON/OFF gecikmeleri (ms) | Sensör ON/OFF gecikmeleri **yoktur** |

Sensör gecikmeleri PLC programında sabittir; operatör ayarı bulunmaz.

---

## 6.5.4 Pnömatik ayar kontrol listesi

| # | Kontrol | Durum |
|---|---------|:-----:|
| 1 | Regülatör **6 bar**'a ayarlandı | ☐ |
| 2 | HMI manuel sayfada hava bilgisi yeşil | ☐ |

**Tarih:** _______________ **Kontrol eden:** _______________
