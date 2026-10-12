# 0726051-YETSAN KNV 90 7500 2B — Eksik veri soruları

Kılavuzdaki 128 `[EKSİK]` işareti aşağıdaki 21 konuya iner. Her sorunun altındaki **Cevap:** satırını doldur; ben DATA dosyasını ve TR/DE bölümlerini buna göre güncellerim.

Doldurma kuralları:
- Değeri biliyorsan birimiyle yaz (ör. `7 500 mm`, `IP54`, `55 °C`).
- O madde bu makinede yoksa `YOK` yaz (kılavuzda "bulunmaz" olarak yazılır).
- Hâlâ bilinmiyorsa `BİLİNMİYOR` yaz ya da boş bırak (`[EKSİK]` kalır).
- Çizim/PDF'ten gelecekse dosya adını yazman yeterli; değeri çizimden okurum.

Sağdaki köşeli parantezler DATA anahtarını ve kılavuz bölümünü gösterir.

---

## 1. Kimlik ve etiket

**S1.** Makinenin imalat / sevk tarihi nedir? `[PROJE] İmalat / sevk tarihi` — Bölüm 1.1, 1.3
Cevap:

**S2.** Tip (CE) etiketi makinenin tam olarak neresinde? (ör. "pano kapağı sağ üst", "konveyör giriş tarafı gövde") — Bölüm 1.3
Cevap:

---

## 2. Güvenlik sınıflandırması

**S3.** Emniyet fonksiyonlarının EN ISO 13849-1 kategorisi ve PL değeri nedir? (ör. `Cat. 3 / PL d`) `[GUVENLIK_CIT] Makine stop kategorisi` — Bölüm 2.1, 5.4
Cevap:

**S4.** Acil stop durdurma kategorisi (EN 60204-1) nedir? (`Stop Cat. 0` veya `Cat. 1`) — Bölüm 2.5
Cevap:

**S5.** Acil stop zinciri ile kapak switch zinciri aynı G9SB rölesine mi bağlı, yoksa iki ayrı röle mi var? `[GUVENLIK_CIT] Emniyet rölesi (acil stop zinciri)` — Bölüm 2.5, 5.4
Cevap:

---

## 3. LOTO — enerji izolasyon noktaları

**S6.** Basınçlı hava için kilitlenebilir kesme vanası nerede? (makine üzerinde AIR INLET regülatörünün yanında mı, tesisat hattında mı?) `[LOTO_ENERJI_KONTROLU] İzolasyon noktası — basınçlı hava` — Bölüm 2.4
Cevap:

**S7.** Makine üzerinde ayrı bir su kesme vanası var mı? Varsa nerede? `[LOTO_ENERJI_KONTROLU] Su / hidrolik izolasyon` — Bölüm 2.4
Cevap:

---

## 4. Egzoz fanı

**S8.** Egzoz fanının panelde anahtarı yok; hangi fonksiyonla birlikte devreye giriyor? (ör. "TANK 1 PUMP açılınca", "ana şalter ON olunca sürekli", "DRYING ile") — Bölüm 3.1, 3.4, 7.2
Cevap:

---

## 5. İşlenebilir parça limitleri

**S9.** Konveyöre konabilecek parçanın maksimum boyutu (L × W × H, mm) ve maksimum ağırlığı (kg) nedir? Ayrıca tel bant metre başına taşıma kapasitesi varsa yaz. `[AMACLANAN_KULLANIM] İşlenebilir ürün tipleri`, `[KAPASITE_PROSES] Ürün boyutu/ağırlığı max` — Bölüm 3.2, 8.1
Cevap:

**S10.** Kurutma hücresi geçiş açıklığı (W × H, mm) nedir? (parça yükseklik sınırı için) — Bölüm 3.2
Cevap:

---

## 6. Boyut ve ağırlık

**S11.** Makine dış ölçüleri: uzunluk L / genişlik W / yükseklik H (baca hariç ve baca dahil), mm. `[BOYUT_AGIRLIK]` — Bölüm 3.3.1
Cevap:

**S12.** Boş (kuru) ağırlık, kg. `[BOYUT_AGIRLIK] Boş ağırlık — kuru` — Bölüm 3.3.1
Cevap:

**S13.** Çalışma (tanklar dolu) ağırlığı, kg. Tank hacimleri biliniyorsa (TANK 1 / TANK 2 litre) onu da yaz. `[BOYUT_AGIRLIK] Çalışma ağırlığı — dolu` — Bölüm 3.3.1
Cevap:

**S14.** Yağ ayırıcı ünitesinin ölçüleri ve ağırlığı? — Bölüm 3.3.1, 4.1
Cevap:

---

## 7. Döngü süresi

**S15.** Konveyör nominal hızda (ör. 50 Hz) bir parça girişten çıkışa kaç saniyede/dakikada geçer? Veya konveyör hızı m/dk olarak nedir? (hat uzunluğu ile süreyi ben hesaplarım) `[KAPASITE_PROSES] Döngü süresi nominal` — Bölüm 3.3.2, 7.4, 8.1
Cevap:

---

## 8. Elektrik

**S16.** Güç faktörü (cos φ)? `[ELEKTRIK] Güç faktörü` — Bölüm 3.3.3
Cevap:

**S17.** Kısa devre akımı / ICC gereksinimi (kA)? (TMŞ CVS250F kesme kapasitesi 36 kA ise bunu doğrula) `[ELEKTRIK] Kısa devre akımı` — Bölüm 3.3.3
Cevap:

**S18.** Elektrik panosunun koruma sınıfı (IP)? `[KONTROLLER] Pano koruma sınıfı` — Bölüm 3.3.6, 3.4
Cevap:

**S19.** Motorların devir (rpm) ve marka/model bilgisi: konveyör redüktör motoru, yıkama pompası, durulama pompası, sıyırıcı, egzoz fanı, kurutma fanı 1–2, blower 1–4. `[MOTOR_SURUCU_LISTESI]` — Bölüm 3.3.4
Cevap:

---

## 9. Medya bağlantıları

**S20.** Basınçlı hava girişi bağlantı çapı ve konumu? (ör. `G 1/2", makine sağ yan, pano altı`) `[SIKIŞTIRILMIŞ_HAVA_SU] Basınçlı hava ve su bağlantı verileri` — Bölüm 3.3.5, 5.3, 6.5
Cevap:

**S21.** Su girişi bağlantı çapı ve konumu? — Bölüm 3.3.5, 5.3
Cevap:

**S22.** Tank tahliye (TAHLİYE) vanası çapı ve drain / atık su hattı çapı? `[SIKIŞTIRILMIŞ_HAVA_SU] Drain / atık su hattı çap` — Bölüm 3.3.5, 5.3, 10.1
Cevap:

**S23.** Egzoz bacası çıkış çapı (mm) ve önerilen kanal malzemesi? — Bölüm 3.3.5, 5.3
Cevap:

---

## 10. Termostat set değerleri

**S24.** Fabrika/önerilen sıcaklık set değerleri (°C): TANK 1 HEATER / TANK 2 HEATER / DRYING 1 HEATER / DRYING 2 HEATER. Ayrıca termostatın ayarlanabilir aralığı (ör. `0–99 °C`). `[KONTROL_FONKSIYONLARI] Reçete / program kayıt sayısı` — Bölüm 3.4, 6.3
Cevap:

**S25.** Kurutma hücresi hava sıcaklığı için üst sınır var mı? (su için +70 °C sınırı tanımlı) — Bölüm 6.3
Cevap:

---

## 11. Layout ve kurulum alanı

**S26.** Genel yerleşim (layout) çiziminin dosya adı ve revizyonu? `[LAYOUT] Genel yerleşim planı dosya adı`, `[DOKUMANLAR] Layout çizimi` — Bölüm 3.5, 13.1, 13.2
Cevap:

**S27.** Minimum etraf boşlukları (mm): ön (pano/operatör tarafı) / arka / giriş yanı / çıkış yanı. `[LAYOUT] Minimum etraf boşluğu` — Bölüm 3.5.2, 5.2
Cevap:

**S28.** Minimum tavan yüksekliği (baca bağlantısı dahil), mm. `[LAYOUT] Minimum tavan yüksekliği` — Bölüm 3.5.2
Cevap:

**S29.** Montaj alanı minimum boyutu (m × m)? `[MONTAJ_GENEL] Montaj alanı min boyut` — Bölüm 3.5.2, 5.1
Cevap:

**S30.** Zemin düzgünlük toleransı (mm/m) ve zemin taşıma kapasitesi gereksinimi (kg/m² veya "dolu ağırlık × 1,5")? `[MONTAJ_GENEL] Zemin düzgünlük toleransı / Zemin mukavemet` — Bölüm 3.5.2, 5.2
Cevap:

---

## 12. Kaldırma ve sevkiyat

**S31.** Montajlı taşıma ağırlığı (kg) ve demonte edilen en ağır parça (hangi parça, kg)? `[TASIMA]` — Bölüm 3.5.4, 4.1, 12.1
Cevap:

**S32.** Forklift çatal girişi var mı? Varsa nerede, çatal aralığı kaç mm? `[TASIMA] Forklift çatal girişi` — Bölüm 3.5.4, 4.1
Cevap:

**S33.** Kaldırma noktaları / travers çizimi var mı? Dosya adı? `[TASIMA] Kaldırma aparatı`, `[CIZIMLER] Kaldırma noktaları çizimi` — Bölüm 4.1, 13.2
Cevap:

**S34.** Vinç ile kaldırma öngörülüyor mu? Kaldırma mapaları var mı? `[LAYOUT] Vinç / forklift erişim noktaları` — Bölüm 3.5.4
Cevap:

**S35.** Ambalaj tipi (streç + branda / ahşap kasa / konteyner)? Taşıma sırasında sabitleme yöntemi (kayış, takoz)? `[TASIMA] Ambalaj tipi / Sabitleme` — Bölüm 4.1
Cevap:

**S36.** Nem/korozyon koruması (VCI, silikajel, yok)? Maksimum taşıma yüksekliği (kara/deniz, m)? `[TASIMA] Nem koruma / Taşıma yüksekliği` — Bölüm 4.1
Cevap:

---

## 13. Depolama

**S37.** Depolama pozisyonu (yatay, ayaklar üzerinde?), maksimum depolama süresi (ay) ve ortam şartları (nem, kapalı alan)? `[DEPOLAMA]` — Bölüm 4.2
Cevap:

---

## 14. Montaj ve devreye alma

**S38.** Tahmini montaj süresi (saat/gün) ve ekip sayısı? `[MONTAJ_GENEL]` — Bölüm 5.1
Cevap:

**S39.** Montaj adımlarında tork veya tolerans değeri var mı? (ör. ayak kontra somunu torku, baca flanş cıvataları) `[MONTAJ_ADIMLARI]` — Bölüm 5.1
Cevap:

**S40.** Teraziye alma / hizalama toleransı (mm/m)? `[KONUMLANDIRMA] Hizalama toleransı` — Bölüm 5.2.3
Cevap:

**S41.** Boş koşu (parçasız) test süresi (dk)? `[KURULUM_TEST] Boş koşu test süresi` — Bölüm 5.5
Cevap:

**S42.** Mekanik kurulum ve pnömatik dolum için standart checklist var mı? (varsa dosya adı; yoksa `YOK` — mevcut genel liste kalır) `[KURULUM_TEST]` — Bölüm 5.5
Cevap:

---

## 15. Mekanik ayar

**S43.** Konveyör zinciri / tel bant gerginlik değeri veya sarkma ölçüsü (mm)? Gerginlik ayarı nereden yapılır? `[MEKANIK_AYARLAR] Zincir / kayış gerginlik değeri` — Bölüm 6.1
Cevap:

**S44.** Operatörün yapabileceği başka mekanik ayar noktası var mı (nozul açısı, perde, kapak hizası)? `[MEKANIK_AYARLAR] Mekanik ayar noktaları listesi` — Bölüm 6.1
Cevap:

---

## 16. Operasyon

**S45.** Vardiya devir teslim listesi müşteri prosedürü mü, yoksa standart bir liste yazalım mı? Eklenecek madde varsa yaz. `[KRONOLOJI] Vardiya devir teslim maddeleri` — Bölüm 7.5
Cevap:

---

## 17. Bakım

**S46.** Konveyör redüktörü (XXC40/75) yağ tipi, dolum miktarı (L) ve değişim periyodu (saat/yıl)? `[BAKIM_YAGLAMA] Redüktör yağ değişim` — Bölüm 9.1.4
Cevap:

**S47.** Paslanmaz seviye bekçisi (10 00296) için önerilen stok adedi ve makinedeki adedi? `[PARCA_LISTESI]` — Bölüm 9.1.5, 13.3
Cevap:

**S48.** Tel bant 850 mm (10 17538) için önerilen stok (metre veya adet)? `[PARCA_LISTESI]` — Bölüm 9.1.5, 13.3
Cevap:

---

## 18. Sensörler

**S49.** Sızıntı tavasında (07 17687 montaj komplesi) sensör var mı? Varsa tipi/markası? `[SENSOR_ARIZA] Sızıntı tavası` — Bölüm 11.7
Cevap:

---

## 19. Teslim dokümanları

**S50.** Elektrik şeması dosya adı ve revizyonu? `[DOKUMANLAR] Elektrik şeması` — Bölüm 13.1, 14.1
Cevap:

**S51.** P&ID şeması teslim ediliyor mu? Dosya adı? `[DOKUMANLAR] P&ID` — Bölüm 13.1, 13.2
Cevap:

**S52.** Pnömatik şema var mı? (tek tüketici: yağ ayırıcı diyafram pompası) `[DOKUMANLAR] Pnömatik şema` — Bölüm 13.1, 13.2
Cevap:

**S53.** CE uygunluk beyanı / teknik dosya referansı? `[DOKUMANLAR] CE dosyası referansı` — Bölüm 13.1
Cevap:

**S54.** Kalibrasyon sertifikası (termostat, termokupl, manometre) teslim ediliyor mu? `[DOKUMANLAR] Kalibrasyon sertifikaları` — Bölüm 13.1
Cevap:

**S55.** Genel montaj çizimi ve zemin ankraj çizimi var mı? (ayarlanabilir ayak, ankraj öngörülmüyorsa `YOK`) `[CIZIMLER]` — Bölüm 13.1, 13.2
Cevap:

**S56.** Üçüncü taraf bileşen kılavuzları (Delta VFD, GEMO DTH2, Omron G9SB, VEGASWING 51, redüktör) teslim paketine ekleniyor mu? — Bölüm 13.1
Cevap:

**S57.** Garanti belgesi teslim paketinde mi; garanti süresi ve koşulları? — Bölüm 14.1 (Ek D), 1.3
Cevap:

---

## 20. Kılavuz kapsamı

**S58.** Bu makinede proje dışı opsiyon (ek modül, otomatik dolum, ışık perdesi vb.) var mı? `[GIRIS_GENEL] Kılavuz kapsamı` — Bölüm 1.1
Cevap:

---

## 21. Kapak bilgileri

**S59.** Kapakta revizyon numarası ve tarih ne olacak? `project.yaml → kapak.rev / kapak.tarih`
Cevap:
