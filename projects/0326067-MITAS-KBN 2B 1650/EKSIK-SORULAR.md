# 0326067 MİTAŞ — KBN 2B P DS OTO 1500 — Eksik bilgiler ve doğrulanacak konular

Bu dosya kılavuzun parçası değildir. Kaynaklarda (tip plakası, ürün ağacı, referans elektrik şeması, KKOut PLC kullanım bilgileri, fotoğraflar) bulunamayan veya kaynaklar arasında çelişen bilgileri listeler. Yanıtlar `0326067-MITAS-KBN 2B 1650 DATA` dosyasındaki ilgili anahtara girilir; kılavuz yer tutucular üzerinden kendiliğinden güncellenir. Kılavuzda kalan `[EKSİK]` işaretlerinin tamamı bu listedeki sorulardan gelir.

## A. Kimlik ve belgeler

| No | Soru | DATA anahtarı | Not |
|---|---|---|---|
| A1 | Model adı hangisi: tip plakası ve ürün ağacındaki **KBN 2B P DS OTO 1500** mü, klasör adı ve elektrik şemasındaki **KBN 2B 1650** mi? | `[PROJE]` Makine model kodu | Kılavuzda tip plakası (1500) esas alındı. Tip plakası seri no 0326067 ile sipariş no aynı. |
| A2 | Mitaş kurulum adresi ve makineden sorumlu kişi | `[MUSTERI]` | KKOut'ta yalnızca "Mitaş" adı var. |
| A3 | AB uygunluk beyanı ve CE teknik dosya referansı | `[DOKUMANLAR]` | |
| A4 | Üretici e-posta ve faks | `[URETICI]` | Adres ve telefon kumanda paneli etiketinden alındı. |
| A5 | Seri no 0326067'ye özel elektrik şeması | `[DOKUMANLAR]` Elektrik şeması | Verilen şema 0326053 Akdeniz siparişine ait (antette SN 0325508). Mitaş makinesindeki drenaj pompası, yağ sıyırıcı motor koruması, Q5/Q6 ve kabin lambası çıkışı şemada yok (Bölüm 13.2.5). |
| A6 | Pnömatik şema, yerleşim (layout) çizimi, kaldırma noktaları çizimi | `[DOKUMANLAR]`, `[CIZIMLER]`, `[LAYOUT]` | |
| A7 | PLC programı ve operatör paneli projesi yedek dosya adları | `[DOKUMANLAR]` | |

## B. Boyut, ağırlık, proses

| No | Soru | DATA anahtarı | Not |
|---|---|---|---|
| B1 | Dış ölçüler W × L × H (kabin + tank ünitesi, çatı ekipmanı dahil) | `[BOYUT_AGIRLIK]` | |
| B2 | Kabin ünitesi ve tank ünitesinin ayrı taşıma ağırlıkları; dolu çalışma ağırlığı | `[TASIMA]`, `[BOYUT_AGIRLIK]` | Forklift seçimi için gerekli. |
| B3 | Sepet nominal çapı, sepet azami yükü (kg), azami parça yüksekliği (mm) | `[BOYUT_AGIRLIK]` | Ürün ağacında kremayer uzunluğu 4,4 m (yaklaşık Ø1400 mm halka). |
| B4 | Yıkama ve durulama tankı hacimleri (L) | `[TANKLAR]` Tank hacmi | |
| B5 | Tankların ısınma süresi (dk) | `[BASLATMA]` Isıtma ön ısınma süresi | Devreye almada ölçülecek (Bölüm 5.5.6). |
| B6 | Nominal kapasite, kapasite test koşulları | `[URUN_KAPASITE]` | |
| B7 | Gürültü emisyon değeri dB(A) | `[ORTAM_KOSULLARI]` | |
| B8 | Çalışma ve depolama ortam sıcaklığı, bağıl nem aralıkları | `[ORTAM_KOSULLARI]`, `[AMACLANAN_KULLANIM]` | |
| B9 | Makine çevresinde bırakılacak en az boşluklar ve tavan yüksekliği | `[LAYOUT]` | |

## C. Elektrik

| No | Soru | DATA anahtarı | Not |
|---|---|---|---|
| C1 | Tank ısıtıcısı gücü: ürün ağacında 4 × 8000 W, referans şemada 4 × 8250 W. Makinedeki hangisi? | `[ISITICILAR]` | |
| C2 | Kurutma ısıtıcısının modeli ve gücü (şemada 6000 W; ürün ağacında yok) | `[ISITICILAR]`, `[PARCA_LISTESI]` [EKSİK]-06 | |
| C3 | Kurutma fanı gücü: ürün ağacında ENA 2 0,37 kW, şemada 0,75 kW | `[MOTOR_SURUCU_LISTESI]` | Q3 GV2ME06 (1–1,6 A) 0,37 kW ile uyumlu görünüyor. |
| C4 | Egzoz fanının modeli ve gücü | `[MOTOR_SURUCU_LISTESI]` | Ürün ağacında yalnız ERF 2 baca parçaları var. |
| C5 | Q5 ve Q6 motor koruma şalterlerinin tipi, ayar aralığı; hangisi yağ sıyırıcı, hangisi drenaj pompası? | `[PANO_EKIPMANLARI]` Q5, Q6 | Pano fotoğrafında Q1–Q6 etiketleri görülüyor. |
| C6 | Yağ sıyırıcı motoru ve drenaj pompası motorunun gücü ve modeli | `[MOTOR_SURUCU_LISTESI]`, `[POMPALAR]` | Drenaj pompası etiketi fotoğrafta okunamadı. |
| C7 | Mitaş PLC programındaki adresler: Sıyırıcı Termik (I0.11?), Drenaj Pompa Termik (I2.1?), drenaj pompası ve kabin lambası çıkışları | `[PLC_GIRISLER]`, `[PLC_CIKISLAR]` | Referans şemada I0.11 etiketsiz, I2.1 ve Q2.2–Q2.3 yedek. |
| C8 | Kaçak akım rölelerinin açma akımı (30 mA / 300 mA) ve F9R41440 / F9R41425 tam ürün kodları | `[PANO_EKIPMANLARI]` | |
| C9 | Ara rölelerin (R1–R20) modeli | `[PANO_EKIPMANLARI]`, `[PARCA_LISTESI]` [EKSİK]-09 | |
| C10 | PLC'nin tam modeli (CP2E-N??) ve ek I/O ünitesinin modeli | `[KONTROLLER]` PLC CPU model | |
| C11 | Besleme kablosu kesiti önerisi, azami akım, kısa devre dayanımı | `[ELEKTRIK]` | Kılavuzda 49 kW / 380 V için ≈ 75 A hesaplandı (Bölüm 3.3.4). |
| C12 | Elektrik panosunun IP sınıfı ve ölçüleri | `[KONTROLLER]` | |
| C13 | Acil durdurmanın durdurma kategorisi (EN 60204-1 kategori 0 / 1) | `[GUVENLIK_CIT]` | |

## D. Pompalar, tanklar, filtreler

| No | Soru | DATA anahtarı | Not |
|---|---|---|---|
| D1 | Hangi pompa hangi tankı besliyor? | `[TANKLAR]` Pompa–tank eşleşmesi | Fotoğraflara göre dikey LEO pompa tank ünitesinin arka ucunda, 1 numaralı tank ve yağ sıyırıcı tarafında; yatay Atlantis pompa kabin altında. Kılavuzda eşleşme yazılmadı. |
| D2 | Tank 1 = yıkama, tank 2 = durulama doğru mu? | `[TANKLAR]` kapak numaraları | Yağ sıyırıcının 1 numaralı tank tarafında olmasına göre böyle kabul edildi. |
| D3 | Dikey proses pompasının (LEO) modeli ve etiket değerleri | `[POMPALAR]` | Etiket fotoğrafta okunamadı. |
| D4 | Torba filtre torbasının ölçüsü ve gözenek (mikron) değeri; kapak contası kodu | `[TANKLAR]`, `[PARCA_LISTESI]` [EKSİK]-04 | |
| D5 | Tank ön yüzündeki paslanmaz yuvarlak ağzın işlevi (gözetleme, dolum?) | — | Kılavuzda adlandırılmadı. |
| D6 | Atlantis KAF 300T/304 mekanik salmastra kodu | `[PARCA_LISTESI]` [EKSİK]-07 | |

## E. Kapı, ışık perdesi, pnömatik

| No | Soru | DATA anahtarı | Not |
|---|---|---|---|
| E1 | Kumanda panelinde iki çift **KAPI AÇIK / KAPI KAPALI** butonu var. İki el kumandası mı (ikisine birlikte basmak gerekir mi)? Buton bırakılınca kapı durur mu, yoksa tek basışta son konuma mı gider? | — | Şemada tek "Kapak aç" (I0.4) ve tek "Kapak kapat" (I0.5) girişi var. Kılavuzda "iki butona birlikte basın ve basılı tutun" yazıldı; bu talimat her durumda güvenli. |
| E2 | Işık perdesinin modeli, çözünürlüğü; kapanırken kesilirse kapı durur mu, geri açılır mı? | `[SENSORLER]` S09, `[PARCA_LISTESI]` [EKSİK]-02 | Kılavuzda "kapı kapanmaya devam etmez" yazıldı. |
| E3 | Çevrim sırasında **KAPI AÇIK** butonları PLC tarafından kilitleniyor mu? | — | KKOut kapının yalnız START anında kontrol edildiğini belirtiyor. |
| E4 | Kapı valfinin (4V230E-08) hangi manuel kumanda düğmesi kapıyı kaldırır? | — | Bölüm 2.5.3'te devreye almada işaretlenmesi istendi. |
| E5 | Çalışma basıncı (regülatör ayarı) ve hava basınç şalterinin ayar değeri | `[SIKIŞTIRILMIŞ_HAVA_SU]` | Valf etiketi: 1,5–8 bar. |
| E6 | Hava tüketimi | `[SIKIŞTIRILMIŞ_HAVA_SU]` | |

## F. Mekanik

| No | Soru | DATA anahtarı | Not |
|---|---|---|---|
| F1 | Sepet redüktörünün markası, modeli, çevrim oranı; yağ tipi ve değişim periyodu | `[BAKIM_YAGLAMA]`, `[PARCA_LISTESI]` [EKSİK]-01 | Motor etiketi: ELK ZEL071MAC-PC-A0-000. |
| F2 | Üst sepetin yükleme arabasından kabine aktarım şekli ve araba kilidinin kullanımı kılavuzdaki tarife uygun mu? | — | Bölüm 7.2.5 ve 7.6.10. |
| F3 | Yataklama tekerleri için aşınma sınırı (değişim çapı) | — | Kılavuzda görsel kriter verildi. |
| F4 | Kabin lambası ve kule lambası modelleri; buton tipleri | `[PARCA_LISTESI]` [EKSİK]-10, -11, -12 | |
| F5 | Yağ sıyırıcı tahrik motoru modeli; sıyırıcı elemanların yedek kodu | `[PARCA_LISTESI]` [EKSİK]-08 | |

## G. Operatör paneli

| No | Soru | DATA anahtarı | Not |
|---|---|---|---|
| G1 | Error-325 ekranda "Durulama Tahliye Vanası Kapanamadı", Error-326 "Hücre Tahliye Vanası Açılamadı" yazıyor; KKOut'a göre gerçek anlamları tersi (325 açılamadı, 326 kapanamadı). Panel metinleri düzeltilecek mi? | `[ALARM_LISTESI]` | Kılavuzda ekran metni korunup gerçek durum ayrıca yazıldı (Bölüm 11.4.2). |
| G2 | Kurulum Sayfası'ndaki "Toplam Çalışma Zamanı" göstergesinin birimi (saat / dakika) | `[KONTROL_FONKSIYONLARI]` | |
| G3 | Alarm geçmişinin kayıt kapasitesi | `[KONTROL_FONKSIYONLARI]` | |
| G4 | Teslimdeki reçeteler: ekran görüntülerinde yalnızca "STANDART" görülüyor; diğer 6 reçete tanımlı mı? | `[OZEL_KURULUM]` | |

## H. Yedek parça

| No | Soru | Not |
|---|---|---|
| H1 | `[PARCA_LISTESI]`'ndeki önerilen stok miktarları üretici önerisi olarak onaylanıyor mu? | Kategoriler ve miktarlar ön değerdir. |
| H2 | `[EKSİK]-01` … `[EKSİK]-12` satırlarının sipariş kodları | Ürün ağacında bulunmayan satın alınmış parçalar. |
