# 11.2 Genel arıza giderme

Bu alt bölüm, lamba davranışını ve yetkili servis çağrısı kriterlerini tanımlar. Arıza senaryoları: **Bkz. Bölüm 11.1.2**.

---

## 11.2.1 Lamba ve gösterge davranışı

| Parametre | Değer |
| :--- | :--- |
| Alarm ekranı | HMI yok — uygulanmaz |
| Hazır göstergesi | Mavi **RESET** lambası — yanık: emniyet zinciri kapalı; sönük: acil stop / kapak / reset bekleniyor |
| Seviye uyarısı | Kırmızı **TANK 1 / TANK 2 WASHING LEVEL** — tank su seviyesi düşük; ilgili ısıtıcı ve pompa kilitli |
| Fonksiyon durumu | Beyaz **run lambası** — çıkış devrede; anahtar ON iken sönükse interlock veya koruma trip |
| Konveyör | Delta inverter ekranı — alarm kodu |
| Pano içi | MKŞ kol konumu, RCCB kol konumu, sigorta konumu, MKR-01 göstergesi — yalnızca yetkili elektrikçi, LOTO altında |
| Alarm metni dili | Uygulanmaz |
| Alarm geçmişi / log | Yok — arızalar bakım kayıt formuna elle işlenir (**Bkz. Bölüm 9.1.7**) |

Emniyet zinciri açıldığında (RESET sönük) fonksiyon anahtarları ON konumunda olsa bile hiçbir çıkış çalışmaz; reset sonrası fonksiyonların kontrolsüz başlamaması için anahtarlar reset öncesi OFF alınmalıdır (**Bkz. Bölüm 7.3.2**).

**Reset:** Emniyet zinciri için RESET butonu (**Bkz. Bölüm 2.5**); MKŞ ve RCCB için pano içi kol reset (LOTO altında — **Bkz. Bölüm 11.1.3**); inverter için CONVEYOR anahtarı OFF/ON veya inverter reset tuşu.

---

## 11.2.2 Servis çağrısı kriterleri

Aşağıdaki durumlarda yetkili servisi çağırın (iletişim kanalları: **Bkz. Bölüm 1.3.1**):

| # | Durum | Gerekçe |
| :---: | :--- | :--- |
| 1 | **Tekrarlayan kaçak akım trip** (RCCB) — rezistans değişimine rağmen | İzolasyon arızası; elektrik güvenlik riski |
| 2 | **Tekrarlayan faz sırası hatası** (MKR-01) — faz düzeltmesine rağmen | Besleme hattı veya röle arızası |
| 3 | **Emniyet fonksiyon testi başarısız** — acil stop veya kapak switch'i makineyi durdurmuyor, RESET alınamıyor | Emniyet rölesi / switch zinciri arızası; **Bölüm 5.4** testleri geçmiyor |
| 4 | **MKŞ/kontaktör değişimine rağmen tekrarlayan motor arızası** | Motor sargı, rulman veya mekanik arıza |
| 5 | **Konveyör inverter alarmı** tekrarlıyor veya inverter parametre gerektiriyor | İnverter parametreleri yalnızca üretici servisi |
| 6 | **Ciddi mekanik hasar / sızıntı** — tank çatlağı, zincir kopması, tork sınırlayıcı hasarı | Güvenlik ve proses bütünlüğü riski |
| 7 | **Yetkili personelin çözemediği elektrik arızası** | Saha teşhisi ve şema üzerinde çalışma gerekir |
| 8 | **Bölüm 11.1.2** adımlarına rağmen sorun devam ediyor | Yedek parça değişimi veya saha teşhisi |

**Servis öncesi hazırlık** (**Bkz. Bölüm 1.3.5**)

1. Makine kimlik etiketi bilgilerini (seri no 0726051, model KNV-90) hazırlayın.
2. Lamba durumlarını (hangi run lambaları yanıyor, WASHING LEVEL, RESET) ve trip olan pano elemanının etiketini (ör. Q1, K.AKIM F2) kaydedin.
3. İnverter ekranındaki alarm kodunu kaydedin.
4. Arıza anındaki proses durumunu (açık fonksiyonlar, sıcaklıklar, hız) belirtin.
5. Mümkünse pano içi ve arıza bölgesi fotoğrafı ekleyin.

**UYARI — Elektrik çarpması ve devre dışı güvenlik fonksiyonu:** Operatörün pano içine müdahalesi, kapak switch'lerinin bypass edilmesi veya emniyet devresinin köprülenmesi ölümcül elektrik çarpmasına ve kontrolsüz makine hareketine yol açabilir. Operatör pano içine müdahale etmez, kapak switch'lerini bypass etmez ve emniyet devresini köprülemez; bu durumlarda yetkili personeli çağırın.
