# 11.3 Elektrik arızaları

Elektrik arızalarında pano içi müdahale öncesi **LOTO** uygulayın (**Bölüm 2.4**). Besleme değerleri **Bölüm 3.3.3** tablosunda verilmiştir.

---

## 11.3.1 Faz ve acil stop

| Alarm | Konu | Referans |
|-------|------|----------|
| Error-410 | Faz sırası hatalı | **Bölüm 5.3.4**, **6.3** |
| Error-229 | Acil stop devrede | **Bölüm 2.5**, **7.3.2** |

### Error-410 — Faz sırası hatalı

Ters faz bağlantısı pompa ve fanların ters dönmesine, proses arızasına ve motor koruma trip'ine yol açabilir.

1. Makineyi durdurun; ana şalteri **OFF** konumuna alın.
2. Faz sıra rölesi durumunu kontrol edin.
3. Faz yönü ters ise ana şalteri **OFF** alın; besleme hattında **iki fazı** değiştirin (**Bölüm 5.3.4**). Enerji açıkken faz değiştirmeyin.
4. Faz koruma rölesi çıkış verdiğini doğrulayın (**Bölüm 5.4.3**).
5. Ana şalteri açın; Error-410 temizlendiğini HMI'dan doğrulayın.

| Parametre | Değer |
|-----------|-------|
| Faz kaybı davranışı | Faz sıra/koruma rölesi **trip**; makine durur veya devreye alınamaz. HMI Manuel Sayfa'da faz sıra rölesi **kırmızı**; **Error-410** (faz sırası hatalı) |

Faz kaybı veya ters faz bağlantısında faz koruma devresi çıkış vermez; pompa/fan beslemesi kesilir. Teşhis: **Bölüm 5.3.4**, **5.4.3**.

### Error-229 — Acil stop

1. Tehlike kaynağını giderin.
2. Tüm acil stop butonlarını serbest bırakın (makinede **4 adet** — bkz. **Bölüm 2.5**).
3. **Bölüm 2.5** reset prosedürünü uygulayın.
4. HMI alarm reset; makineyi **Bölüm 7.3.2**'ye göre yeniden devreye alın.

---

## 11.3.2 Motor arızaları

| Alarm | Motor | Güç |
|-------|-------|:------------:|
| Error-100 | Yıkama pompası | 3 kW |
| Error-101 | Durulama pompası | 1,85 kW |
| Error-110 | Egzoz fanı | 0,37 kW |
| Error-111–114 | Kurutma fanları 1–4 | 4 kW (her biri) |
| Error-130 | Yağ sıyırıcı | 0,04 kW |
| Error-460 | Servo (konveyör) | 1,5 kW redüktör |

Motor listesi **Bölüm 3.3.4** tablosunda verilmiştir.

### Motor arıza teşhis prosedürü

1. HMI alarm kodunu doğrulayın.
2. Pompa motorları için **pompa önü vanaların açık** olduğunu kontrol edin (**Bölüm 7.2.5**).
3. Ana şalteri kapatın; **LOTO** uygulayın.
4. Motor koruma rölesi/termik şalter durumunu kontrol edin; trip varsa nedenini giderdikten sonra resetleyin.
5. Motor ve kablo bağlantılarını görsel kontrol edin.
6. Mekanik sıkışma şüphesi varsa mil/kaplin serbestliğini kontrol edin.
7. LOTO kaldırın; kısa test çalıştırması yapın.

| Parametre | Değer |
|-----------|-------|
| Motor koruma trip | **Termik aşırı yük** koruma (pompa, fan, yağ sıyırıcı). Trip durumu HMI **Manuel Sayfa** input gözlemde izlenir (**Bölüm 3.4.5**) |
| Inverter alarm kodları | **Pompa / fan / yağ sıyırıcı:** DOL tahrik — inverter yok, **uygulanmaz**. **Konveyör servo:** Siemens **6SL3210-5FE11-5UF0** — sürücü ekranındaki kod → **Siemens servo sürücü kılavuzu** (**Bölüm 3.3.4**, **13.3**) |

Trip sonrası: arıza nedenini giderin (sıkışma, kapalı vana, aşırı yük); termik şalteri **reset**leyin; HMI alarmını temizleyin.

**Error-460 Servo Motor Hata:** Servo sürücü (**Siemens 6SL3210-5FE11-5UF0**) üzerindeki alarm kodunu okuyun; anlamı için **Siemens servo sürücü kılavuzuna** bakın. Mekanik sıkışma, encoder veya kablo arızası olabilir. **Yetkili servis** önerilir (bkz. **Bölüm 11.2.2**).

**Beklenen sonuç:** Motor koruma normal; motor çalışıyor; HMI alarmı yok.

---

## 11.3.3 Isıtıcı arızaları

| Alarm | Konu |
|-------|------|
| Error-170 | Yıkama tankı ısıtıcı kaçak akım F2 |
| Error-171 | Isıtıcı kaçak akım F3 |
| Error-172 | Isıtıcı kaçak akım F4 |
| Error-150 | Yıkama tank sıcaklığı düşük |
| Error-151 | Durulama tank sıcaklığı düşük |

Sıcaklık set değerleri HMI reçete/ayar sayfasından yapılır (**Bölüm 6.3**, **8**). Hazırlık tamamlanmadan start verilmemelidir (**Bölüm 7.2.2**).

### Sıcaklık düşük (Error-150/151)

1. **Hazırlık Start** prosedürünün tamamlandığını doğrulayın.
2. HMI'da set/anlık sıcaklık değerlerini karşılaştırın.
3. Isıtıcı kaçak akım alarmı (Error-170–172) aktif mi kontrol edin.
4. Tank seviyesi yeterli mi — Error-200/201 veya Error-202/203 kontrol edin.

### Kaçak akım trip (Error-170/171/172)

1. Makineyi durdurun; **LOTO** uygulayın.
2. İlgili kaçak akım koruma rölesini (F2/F3/F4) kontrol edin.
3. Isıtıcı elemanı ve tank içi bağlantı izolasyonunu kontrol edin.
4. Islak/ıslak ortam kaynaklı geçici trip ise kurutma sonrası bir kez reset deneyin.
5. Trip tekrarlıyorsa ısıtıcı eleman değişimi için **servis çağırın** (**Bölüm 1.3**).

Termokupl ve sensör kablo bağlantı renk kodları **elektrik şemasında** verilmiştir (teslim paketi — bkz. **Bölüm 13.1.1**).

**UYARI — Elektrik:** Isıtıcı ve kaçak akım koruma devresi müdahalesi yalnızca yetkili elektrik personeli tarafından yapılmalıdır.

---

