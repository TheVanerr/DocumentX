# 7.2. Makine Başlatma

Makinede HMI ekranında **1 adet hazırlık butonu** bulunur. Start verilmeden önce hazırlık tamamlanmalıdır.

---

## 7.2.1. Devreye Alma Ön Koşulları

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Devreye alma ön koşulları (checklist) | HMI **hazırlık** butonu ile tank dolumu ve ısıtma yapılır. Tankta su yoksa üst seviyeye kadar dolar, ardından reçetede ayarlanan sıcaklığa ısınır. Tankta su varsa doğrudan ısınır. Başka hazırlık gerekmez |

**Dolum sorunu:** Tankta su yoksa ve hazırlığa basıldığında dolum olmuyorsa, **otomatik dolum su giriş vanası kapalıdır** — vanayı açın. Makineye **6 bar** basınçlı hava bağlı olmalıdır.

<!-- FOTO: HMI hazırlık butonu -->
![HMI hazırlık butonu](../../assets/FOTO-7-2-1-hazirlik.png)

---

## 7.2.2. Güç Açma Sırası

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Güç açma sırası | **1.** Ana şalter açık → **2.** HMI hazırlık butonuna bas → **3.** Hazırlık tamamlandıktan sonra start ver |

---

## 7.2.3. Hava / Su / Vakum Açma

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Hava / su / vakum açma | **6 bar** basınçlı hava bağlantısı hazırlık/dolum için gereklidir. Su, otomatik dolum vanası üzerinden tanklara dolar. **Vakum yoktur** |

---

## 7.2.4. Isıtma Ön Isınma

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Isıtma ön ısınma süresi (dk) | **Değişken** — tanktaki mevcut su miktarı ve sıcaklığına bağlıdır (ör. önceki vardiyadan kalan su). Reçetede ayarlanan sıcaklığa ulaşılana kadar ısınır; sabit süre verilemez |

---

## 7.2.5. Start Öncesi Kontrol Listesi

| # | Kontrol | Durum |
|---|---------|-------|
| 1 | Konveyör hattında sıkıştıracak parça/cisim yok | ☐ OK / ☐ NOK |
| 2 | Pompa önündeki vanalar açık (kapalıysa mutlaka aç) | ☐ OK / ☐ NOK |
| 3 | Hazırlık tamamlandı (tank dolumu + ısıtma) | ☐ OK / ☐ NOK |
| 4 | Acil stop resetli, makine kullanıma hazır (sarı lamba) | ☐ OK / ☐ NOK |

**Tarih:** _______________ **Kontrol eden:** _______________

<!-- FOTO: HMI start butonu -->
![HMI start butonu](../../assets/FOTO-7-2-0-start.png)

---

## 7.2.6. İlk Ürün / Kurşun Atma

| Parametre | Değer / Açıklama |
|-----------|------------------|
| İlk ürün / kurşun atma prosedürü | **Yoktur** |
