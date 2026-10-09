# 12.1 Güvenli demontaj prosedürü

Makinenin tesisattan sökülmesi, parçalara ayrılması veya nakliyesi öncesinde enerji izolasyonu ve sıvı tahliyesi zorunludur. Demontaj sırasında makine **elektriği kesilmelidir**; tanklardaki **su boşaltılmalıdır**. DATA'da proje için demontaj ön koşulu ve sırası ayrıca tanımlanmamıştır; aşağıdaki prosedür makine tipinin standart demontaj akışıdır.

Bu makinede hidrolik devre yoktur; pnömatik (**6 bar** hava — yağ ayırıcı) ve elektrik (**380 V / 110 kW**) izolasyonu yeterlidir. Akü bulunmamaktadır. Proses tanklarında yağlı su, yağ ayırıcı ünitesinde toplanmış yağ, konveyörde gres, redüktörlerde yağ ve temizlik deterjanı kalıntısı olabilir; atık bertarafı **Bölüm 10.1.8**'e tabidir.

---

## 12.1.1 Demontaj ön koşulları

Demontaja başlamadan önce aşağıdaki koşullar sağlanmalıdır:

| # | Koşul |
| :---: | :--- |
| 1 | Makine **Bölüm 7.3.1** sırasına göre durdurulmuş; tüm anahtarlar OFF |
| 2 | Tank suyu ve rezistanslar soğumuş |
| 3 | Yıkama ve durulama tankları **boşaltılmış ve temizlenmiş** (**Bölüm 10.1.5**) |
| 4 | Yağ ayırıcı ünitesi boşaltılmış; toplanan yağ bertaraf edilmiş |
| 5 | **LOTO** uygulanmış (**Bölüm 2.4**) — ana şalter kilitli, hava vanası kapalı |
| 6 | Taşıma ekipmanı (forklift, SWL ≥ taşıma ağırlığı [EKSİK]) ve kaldırma çizimi hazır |
| 7 | Elektrik şeması ve layout çizimi elde (**Bölüm 13.1, 13.2**) |

Dolu tank ile demontaj/taşıma ağırlık merkezini değiştirir; çalışma ağırlığı belirgin şekilde artar (**Bkz. Bölüm 3.3.1**).

**UYARI — Ezilme:** Demontaj sırasında konveyör hattında parça veya cisim kalmadığını doğrulayın; tel bant ve zincir sökümünde gerilim altındaki elemanlara dikkat edin.

---

## 12.1.2 Enerji izolasyonu (LOTO)

| Parametre | Gereksinim |
| :--- | :--- |
| Enerji izolasyon prosedürü | **LOTO prosedürü** uygulanmalıdır (**Bkz. Bölüm 2.4**) |

Enerji kaynakları:

| Enerji | İzolasyon noktası | Not |
| :--- | :--- | :--- |
| Elektrik | Ana şalter (TMŞ CVS250F) — pano kapağı kolu + tesis besleme şalteri | **380 V / 50 Hz / 3 faz / 110 kW** — bkz. **3.3.3** |
| Basınçlı hava | Tesis hava vanası | **6 bar** — bkz. **3.3.5** |
| Su | Tesis su vanası; tank TAHLİYE vanaları | Tanklar boşaltılır — **10.1.5** |
| Termal | Rezistanslar, kurutma hücresi | Soğuma süresi |
| Elektriksel depolanmış | İnverter DC barası | Ana şalter OFF sonrası ≥ 5 dk |

**LOTO uygulama özeti**

1. Makineyi durdurun; tüm anahtarlar OFF.
2. Ana şalteri **OFF (O)** konumuna alın ve kilitleyin; tesis besleme şalterini de kapatıp kilitleyin.
3. Tesis **hava** ve **su** vanalarını kapatın; hava hattı basıncını regülatörden tahliye edin.
4. **Bölüm 2.4** LOTO prosedürünü tam uygulayın (kilit, etiket, doğrulama).
5. Tankları boşaltın (**Bölüm 10.1.5**).
6. Pano giriş terminallerinde gerilim olmadığını yetkili elektrikçi ölçerek doğrulamalıdır.

**TEHLİKE — Elektrik:** 380 V trifaze besleme; tesis şalteri kapatılmadan TMŞ giriş terminalleri enerjilidir. Pano içi söküm yalnızca yetkili elektrik personeli tarafından, tesis beslemesi kesilip ölçülerek doğrulandıktan sonra yapılır.

---

## 12.1.3 Demontaj sırası

| Parametre | Sıra |
| :--- | :--- |
| Demontaj sırası | Elektrik kes → tank boşalt → tesisat sök → yağ ayırıcı ünitesini ayır → mekanik parça çıkar |

**Demontaj prosedürü**

1. **Operasyonu durdurun** — **Bölüm 7.3.1**; son parçaları hattan alın.
2. **LOTO uygulayın** — bkz. **12.1.2**, **2.4**.
3. **Tankları boşaltın ve temizleyin** — bkz. **10.1.5**; atık su **10.1.8**'e uygun bertaraf. Yağ ayırıcı ünitesindeki yağı ayrı toplayın.
4. **Tesisat bağlantılarını sökün:**
   - Trifaze elektrik (**380 V, 3P+N+PE**) — tesis beslemesi kesilmiş ve ölçülerek doğrulanmış
   - Basınçlı hava (**6 bar**) — regülatör girişi
   - Su dolum hattı ve tank TAHLİYE / atık su bağlantıları
   - Egzoz bacası kanalı
5. **Yağ ayırıcı ünitesini ayırın** — hortumlar, hava hattı ve solenoid valf kablosu; üniteyi ayrı taşıyın.
6. **Mekanik demontaj** — koruma kafesleri, PVC perdeler, hücre kapakları, egzoz fanı ve baca, tank kapakları; gerekiyorsa pompalar, blower/fan motorları ve konveyör redüktörü; parça listesi **Bölüm 13.3.1**. Redüktör ve pompa sökümünde yağ/su damlamasına karşı tava kullanın.
7. **Elektrik panosu ve kablo demontajı** — LOTO altında; inverter, emniyet röleleri, kontaktörler ve kabloları elektrik/elektronik atık (WEEE) sınıfına ayırın.
8. **Taşıma** — forklift ile, kaldırma çizimine göre (**Bkz. Bölüm 4.1**).
9. **Parçaları malzeme grubuna göre ayırın** — bkz. **12.3**.

**Not:** Rutin taşıma veya tesis içi yer değişikliğinde yalnızca adım 1–5 ve 8 uygulanır; makine ana gövdesi bütün hâlde taşınır. Tam demontaj yalnızca hurda veya büyük tesis değişikliğinde uygulanır.

**Beklenen sonuç:** Makine enerjiden izole; tanklar boş; tesisat sökülmüş; yağ ayırıcı ünitesi ayrı; parçalar taşınmaya veya bertarafa hazır.

---

## 12.1.4 Geri dönüşüm ve bertaraf

| Parametre | Gereksinim |
| :--- | :--- |
| Geri dönüşüm / bertaraf | Kullanıldığı ülkenin mevcut çevresel bertaraf gereksinimleri |
| Tehlikeli madde | Akü yok; yağlı proses suyu, toplanan yağ, gres, redüktör yağı, deterjan — **10.1.8**, **12.3** |
| Atık su / temizlik | **Bölüm 10.1.8** |

Demontaj atıkları yerel mevzuata uygun ayrıştırılmalı ve lisanslı tesislere gönderilmelidir. Paslanmaz çelik gövde ve tanklar, bakır kablo ve rezistans bağlantıları, plastik contalar ve PVC perdeler, elektrik/elektronik (inverter, röleler, kontaktörler, termostatlar) ve ambalaj malzemeleri ayrı toplanır — ayrıntı **Bölüm 12.3**.

---

Geçici/kalıcı devre dışı bırakma **12.2**; hurda **12.3**.
