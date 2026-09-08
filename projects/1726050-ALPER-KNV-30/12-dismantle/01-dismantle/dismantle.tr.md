# 12.1 Güvenli demontaj prosedürü

Makinenin tesisattan sökülmesi, parçalara ayrılması veya nakliyesi öncesinde enerji izolasyonu ve sıvı tahliyesi zorunludur. Demontaj sırasında makine **elektriği kesilmelidir**; tanklardaki **su boşaltılmalıdır** (DATA).

Bu makinede hidrolik devre yoktur; pnömatik (**6 bar** hava) ve elektrik (**380 V**) izolasyonu yeterlidir. Tehlikeli madde (yağ, akü, proses kimyasalı) **bulunmamaktadır**; atık su bertarafı **Bölüm 10.1.8**'e tabidir.

---

## 12.1.1 Demontaj ön koşulları

Demontaja başlamadan önce aşağıdaki koşullar sağlanmalıdır:

| # | Koşul |
|---|-------|
| 1 | Makine **HMI stop** ile durdurulmuş olmalıdır |
| 2 | Robot hattı veya upstream/downstream ekipman ile koordinasyon sağlanmış olmalıdır |
| 3 | Aktif HMI alarmı olmamalıdır (varsa giderin — bkz. **Bölüm 11**) |
| 4 | Yıkama ve durulama tankları **boşaltılmış** olmalıdır |
| 5 | **LOTO** uygulanmış olmalıdır (**Bölüm 2.4**) |
| 6 | Taşıma ekipmanı (forklift, SWL ≥ **1300 kg**) hazır olmalıdır |

Uzun süreli duruş veya depolama öncesi tank boşaltma/temizlik **Bölüm 7.3.4** ve **10.1.5** prosedürlerine göre yapılmalıdır. Dolu tank ile demontaj/taşıma ağırlık merkezini değiştirir; çalışma ağırlığı **1500 kg**'a çıkabilir (bkz. **Bölüm 3.3.1**).

**UYARI — Ezilme:** Demontaj sırasında konveyör hattında parça veya cisim kalmadığını doğrulayın.

---

## 12.1.2 Enerji izolasyonu (LOTO)

| Parametre | Gereksinim |
|-----------|------------|
| Enerji izolasyon prosedürü | **LOTO prosedürü** uygulanmalıdır |

Enerji kaynakları:

| Enerji | İzolasyon noktası | Not |
|--------|-------------------|-----|
| Elektrik | Ana şalter (pano) | **380 V / 50 Hz / 3 faz** — bkz. **3.3.3** |
| Basınçlı hava | Tesis hava vanası | **6 bar** — bkz. **3.3.5** |
| Su | Tesis su giriş vanası | Otomatik dolum vanası kapatılır |
| Pnömatik birikmiş enerji | Hat basıncı tahliyesi | Regülatör/valf boşaltma |

### LOTO uygulama özeti

1. HMI **Makine Stop** ile makineyi durdurun.
2. Ana şalteri **OFF (0)** konumuna alın.
3. Tesis **hava** ve **su** vanalarını kapatın.
4. **Bölüm 2.4** LOTO prosedürünü tam uygulayın (kilit, etiket, doğrulama).
5. Tankları boşaltın (**Bölüm 10.1.5**).
6. Pano girişinde gerilim olmadığını yetkili personel doğrulamalıdır.

**TEHLİKE — Elektrik:** 380 V trifaze besleme. Pano içi müdahale yalnızca yetkili elektrik personeli tarafından, LOTO sonrası yapılır.

---

## 12.1.3 Demontaj sırası

| Parametre | Sıra |
|-----------|------|
| Demontaj sırası | Elektrik kes → tank boşalt → tesisat sök → mekanik parça çıkar |

### Demontaj prosedürü

1. **Operasyonu durdurun** — robot hattı koordinasyonu; HMI stop.
2. **LOTO uygulayın** — bkz. **12.1.2**, **2.4**.
3. **Tankları boşaltın ve temizleyin** — bkz. **10.1.5**; atık su **10.1.8**'e uygun bertaraf.
4. **Tesisat bağlantılarını sökün:**
   - Trifaze elektrik (**380 V, 3P+N+PE**)
   - Basınçlı hava (**6 bar**, 3/4")
   - Su girişi (**1 bar**, 1/2") ve drenaj hattı
5. **Mekanik demontaj** — modüller ve bağlantı elemanları; parça listesi **Bölüm 13.3.1**.
6. **Elektrik panosu ve kablo demontajı** — LOTO altında; PLC/HMI WEEE sınıfına ayırın.
7. **Taşıma** — forklift alt profilleri ile; **vinç kullanmayın** (bkz. **4.1**).
8. **Parçaları malzeme grubuna göre ayırın** — bkz. **12.3**.

**Not:** Bu proje kapsamında sevkiyat **1300 kg** montajlı makine olarak planlanmıştır; rutin taşımada modül sökümü gerekmez. Tam demontaj yalnızca hurda veya tesis değişikliğinde uygulanır.

**Beklenen sonuç:** Makine enerjiden izole; tanklar boş; tesisat sökülmüş; parçalar taşınmaya veya bertarafa hazır.

---

## 12.1.4 Geri dönüşüm ve bertaraf

| Parametre | Gereksinim |
|-----------|------------|
| Geri dönüşüm / bertaraf | Kullanıldığı ülkenin mevcut çevresel bertaraf gereksinimleri |
| Tehlikeli madde | **Yok** |
| Atık su / temizlik | **Bölüm 10.1.8** |

Demontaj atıkları yerel mevzuata uygun ayrıştırılmalı ve lisanslı tesislere gönderilmelidir. Paslanmaz çelik gövde, plastik contalar, elektrik/elektronik (PLC, HMI, kablo) ve ambalaj malzemeleri ayrı toplanır — ayrıntı **Bölüm 12.3**.

Basınçlı hava, su ve drain bağlantı verileri layout çiziminde verilmiştir (bkz. **Bölüm 3.3.5**, **1726050-ALPER-KNV 30 LAYOUT.pdf**).

---

Geçici/kalıcı devre dışı bırakma **12.2**; hurda **12.3**.
