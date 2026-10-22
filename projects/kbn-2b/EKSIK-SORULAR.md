# KBN 2B — Eksik bilgiler ve sorular

**Durum:** 2026-10-22 · Referans makine: KBN 2B P DS OTO 1500, seri no 0326067 (`photos/` klasöründeki fotoğraflar)

**Nasıl cevaplanır:**

- Her sorunun altındaki **Cevap:** satırına yazın.
- Önerilen bir değer veya varsayım verilmişse doğruysa yalnızca "Evet" yazın; yanlışsa doğrusunu yazın.
- Bilmediğiniz soruyu boş bırakın; kılavuzda **[EKSİK]** olarak kalır.
- "Nereye" satırı, cevabın işleneceği bölümü ve DATA anahtarını gösterir.

---

## 1. Makine etiketi ile katalog (DATA) arasındaki çelişkiler

Kılavuzdaki teknik tablolar katalogdan alındı. 1500 makinesinin etiketleri bazı değerlerde katalogla uyuşmuyor.

**Ç1 — Toplam güç.** Tip etiketinde 49 kW yazıyor, DATA'da 1500 için nominal güç 41 kW. Hangisi doğru? Diğer gövde kodlarının (1350, 1650, 1850, 2050, 2350) nominal güçleri doğru mu?
- Nereye: 3.3.2 · `[TEKNIK_OTO_P_DS] Nominal güç (kW)`
- **Cevap:**

**Ç2 — Döndürme motoru.** Sağ yandaki redüktörlü motorun etiketi ELK 0,37 kW; DATA'da 1500 için döndürme motoru 0,18 kW. Bu motor sepet döndürme motoru mu, gücü hangisi?
- Nereye: 3.3.2, 3.3.8 · `[TEKNIK_OTO_P_DS] Döndürme motoru gücü (kW)`, `[MOTOR_LISTESI]`
- **Cevap:**

**Ç3 — Kabin altındaki pompa.** Etiket: Atlantis KAF 300T/304, 3 HP (yaklaşık 2,2 kW), 5,2 A. DATA'da 1500 için yıkama ve durulama pompası 3 kW. Hangisi doğru?
- Nereye: 3.3.2 · `[TEKNIK_OTO_P_DS] Yıkama / Durulama pompası motor gücü (kW)`
- **Cevap:**

**Ç4 — Model kodu sırası.** Tip etiketinde "KBN 2B **P DS OTO** 1500", kılavuzda ve katalogda "KBN 2B **OTO P DS**". Kılavuzda hangi sırayı kullanalım?
- Nereye: 1, 3.1.2, 3.3.2 · `[MODEL_VARYANTLARI]`
- **Cevap:**

---

## 2. Genel

**G1 — Kılavuzun kapsamı.** Kılavuz model şablonu olarak tüm gövde kodlarını (1350 – 2350) kapsıyor. Böyle mi kalsın, yoksa seri no 0326067 için ayrı müşteri projesi mi açalım? Müşteri projesiyse müşteri adı ve sipariş no?
- **Cevap:**

**G2 — Diller.** Şu an yalnızca Türkçe (`kbn-2b.yaml` → `diller: tr`). İngilizce ve/veya Almanca da gerekiyor mu?
- **Cevap:**

**G3 — Kapak bilgileri.** Kapakta revizyon numarası ve tarih boş. Ne yazalım?
- Nereye: `kbn-2b.yaml` → `kapak.rev`, `kapak.tarih`
- **Cevap:**

**G4 — KBN 1B'den aktarım.** KBN 1B için verdiğiniz cevaplardan 2B'ye de uyanlar varsa (pano, kumanda, tesisat vb.) 1B kılavuzuna bakıp aktarayım mı?
- **Cevap:**

---

## 3. Kumanda ve güvenlik

**K1 — Alt sıradaki kapak elemanları.** Kumanda panelinin en altında ikinci bir KAPI AÇIK (yeşil) / KAPI KAPALI (kırmızı) çifti var. Arkalarında güvenlik kontrolörüne (Omron G9SP) giden çift kontak görünüyor. Bunlar ne işe yarıyor? Kapağı kapatmak için üstteki ve alttaki KAPI KAPALI butonlarına aynı anda basmak mı gerekiyor (iki el kumandası), yoksa gösterge lambası mı?
- Nereye: 3.4.1, 3.4.4, 7.4 · `[KONTROLLER] KAPI AÇIK (yeşil, alt sıra)`, `KAPI KAPALI (kırmızı, alt sıra)`
- **Cevap:**

**K2 — Program sırasında kapak.** Program çalışırken KAPI AÇIK butonuna basılırsa ne olur? Kapak açılmaz mı, yoksa program durup kapak açılır mı?
- Nereye: 2.2.3, 5.4.2
- **Cevap:**

**K3 — Işık perdesi.** Kapı açıklığının iki yanındaki Omron ışık perdesi kesilince makine ne yapar? (Örnek: kapanan kapak durur / geri açılır; çalışan program durur.) Modeli nedir?
- Nereye: 2.2.3, 3.4.4, 5.4.5 · `[GUVENLIK_DONANIMLARI] Işık perdesi işlevi`, `Işık perdesi marka / model`
- **Cevap:**

**K4 — Kapak emniyet şalteri.** Kapağın kapalı olduğunu algılayan eleman nedir, nerededir? (Kapak silindirinin alt ucunda konum sensörü görünüyor.)
- Nereye: 2.2.3, 6.2, 11.6 · `[GUVENLIK_DONANIMLARI] Kapak emniyet şalteri tipi / konumu`
- **Cevap:**

**K5 — RESET butonu.** RESET butonu ışıklı görünüyor. Acil durdurmadan ve ışık perdesi kesildikten sonra güvenlik devresini sıfırlamak için mi kullanılıyor? Şu anki yazım: "Nedeni giderilen alarmı onaylar (sıfırlar)."
- Nereye: 2.3.2, 3.4.1, 3.4.3 · `[KONTROLLER] RESET butonu (mavi)`
- **Cevap:**

**K6 — Sinyal kulesi.** Kırmızı, turuncu ve yeşil ışıklar neyi gösteriyor? Yanıp sönme durumu var mı?
- Nereye: 3.4.1 · `[KONTROLLER] Sinyal kulesi renklerinin anlamı`
- **Cevap:**

**K7 — Kapağın düşme emniyeti.** Basınçlı hava kesilirse açık kapak kendi ağırlığıyla iner mi? Kapakta mekanik kilit, çek valf veya düşme emniyeti var mı?
- Nereye: 2.2.2, 2.3.1, 2.3.3, 3.4.4
- **Cevap:**

**K8 — Frekans invertörü.** Panodaki Delta VFD-EL-W hangi motoru sürüyor? Sepet dönüş hızı HMI'dan ayarlanabiliyor mu?
- Nereye: 3.4.2, 6.6 · `[KONTROLLER] Frekans invertörünün sürdüğü motor`
- **Cevap:**

**K9 — Seviye şalterleri ve emniyet termostatı.** Tankların uç yüzlerinde fişli sensörler var. Seviye şalterlerinin tipi ve konumu nedir? Emniyet termostatı kaç °C'ye ayarlı?
- Nereye: 2.2.3, 6.2, 9.1.5 · `[GUVENLIK_DONANIMLARI] Tank seviye şalterleri tipi / konumu`, `Emniyet termostatı ayar değeri (°C)`
- **Cevap:**

**K10 — Uyarı etiketleri.** Fotoğraflarda etiket yalnızca tank kapaklarında, pano kapağında, valf kutusunda ve topraklamada var. Kapak kenarında el sıkışma, kapakta veya kurutma ünitesinde sıcak yüzey ve kumanda panelinde "kullanım kılavuzunu okuyun" etiketi var mı, eklenecek mi?
- Nereye: 2.2.4
- **Cevap:**

---

## 4. Tank ünitesi, pompalar ve sıvı akışı

**T1 — Pompaların görevi.** Kabin altındaki yatay pompa (Atlantis) ve sol arka köşedeki dikey çok kademeli pompa (LEO LVS 20): hangisi yıkama (1. tank), hangisi durulama (2. tank) pompası?
- Nereye: 3.1.3, 3.3.8, 9.1.5 · `[MOTOR_LISTESI]`
- **Cevap:**

**T2 — LEO pompa etiketi.** LEO LVS 20 pompasının motor gücü, akımı, devri, debisi ve basma yüksekliği fotoğrafta okunmuyor. Değerleri nedir?
- Nereye: 3.3.8 · `[MOTOR_LISTESI] Dikey çok kademeli pompa`
- **Cevap:**

**T3 — Mavi pompa.** Tank ünitesinin önündeki mavi pompa, DRENAJ vanalarının bağlı olduğu tahliye borusundan emip tank ünitesinin ucundaki paslanmaz kutuya basıyor. İşlevi nedir? Marka, model ve gücü?
- Nereye: 3.1.3 (no. 12), 3.3.8 · `[TANK_UNITESI] Tank ünitesi altındaki pompanın işlevi`, `[MOTOR_LISTESI] Tank ünitesi pompası (mavi)`
- **Cevap:**

**T4 — Yağ sıyırıcı.** Kılavuzda (şablondan) tank ünitesinin ucunda yağ sıyırıcı ve yağın aktığı toplama kapları anlatılıyor (3.1.3 no. 11, 7.1, 7.6.2, 10.1.2). Mavi pompanın bastığı kutu yağ sıyırıcı/ayırıcı mı? Nasıl çalışıyor, ayrılan yağ nereye toplanıyor? Makinede yağ sıyırıcı yoksa bu kısımları çıkarayım.
- **Cevap:**

**T5 — Tank üstündeki pnömatik silindirler.** Tank kapaklarının arkasındaki kutunun üzerinde, her biri iki konum sensörlü iki dikey silindir var. Ne yapıyorlar? (Örnek: kabinden dönen sıvıyı 1. veya 2. tanka yönlendiren klapeler.)
- Nereye: 3.1.3, 3.1.4 · `[TANK_UNITESI] Tank ünitesi üstündeki pnömatik silindirlerin işlevi`
- **Cevap:**

**T6 — Kabin altındaki kutu.** Kabinin altındaki bölmede, içinde ince bir prob bulunan paslanmaz bir kutu var; kabin altındaki pompa buradan küresel vana üzerinden emiyor (`photos/WhatsApp Image 2026-10-21 at 15.15.51 (53).jpeg`). Bu kutu nedir (toplama haznesi, tankın bir parçası…)?
- Nereye: 3.1.3, 3.1.4
- **Cevap:**

**T7 — Saplı tel süzgeç.** Karanlık bir bölmede saplı, çıkarılabilir bir tel süzgeç fotoğrafı var (`photos/WhatsApp Image 2026-10-21 at 15.17.59 (23).jpeg`). Bu süzgeç nerede (kabin tabanı?), ne sıklıkla temizlenmeli?
- Nereye: 9.1.2, 10.1.3
- **Cevap:**

**T8 — Nozullar.** Kılavuzda yıkama ve durulama sıvılarının "aynı nozullardan" püskürtüldüğü yazıyor. İki filtre gövdesi kabine ayrı ayrı giriyor. Yıkama ve durulama ayrı boru hatlarından mı yapılıyor?
- Nereye: 3.1.1, 3.1.4, 7.4.4, 9.1.3
- **Cevap:**

**T9 — Pompa emiş vanaları.** Her iki pompanın emiş hattında kapatma vanası var mı? Filtre gövdesi bakımında (9.1.4) önce emiş vanasını kapattırıyorum; vana yoksa prosedürü değiştireceğim.
- Nereye: 9.1.4
- **Cevap:**

**T10 — Tankların doldurulması.** Tanklar nasıl doldurulur: su dolum bağlantısı (konum, ölçü) var mı, yoksa kapaktan hortumla mı? Operatör doğru seviyeyi nasıl anlar (tank içi işaret, HMI seviye göstergesi)?
- Nereye: 5.3.2, 7.2.2 · `[TESISAT] Su dolum bağlantısı`
- **Cevap:**

**T11 — Taşma hattı.** "TAŞMA HATTI" çıkışları nereye bağlanmalı (atık su hattı, toplama kabı)? Bağlantı ölçüsü nedir? Çıkışlardaki siyah kapaklar kurulumda sökülüyor mu?
- Nereye: 5.3.2 · `[TESISAT] Taşma hattı bağlantı şekli`
- **Cevap:**

**T12 — Tahliye.** Ortak tahliye borusunun ucunda hortumlu bir küresel vana var. Tanklar bu vanadan yerçekimiyle mi boşaltılıyor, yoksa mavi pompayla mı? Bağlantı ölçüsü?
- Nereye: 5.3.2, 10.1.4 · `[TESISAT] Tank tahliye bağlantıları`
- **Cevap:**

**T13 — Filtre elemanı.** Filtre gövdelerindeki eleman torba filtre mi? Kaç mikron? Değişim periyodu?
- Nereye: 9.1.2, 9.1.4, 13.3 · `[BAKIM] Filtre elemanı tipi`, `Filtre elemanı değişim periyodu`
- **Cevap:**

---

## 5. Pnömatik

**P1 — Hava basıncı ve bağlantı.** Çalışma basıncı kaç bar? Tesis hattında en az kaç bar olmalı? Hava girişindeki hızlı bağlantı rakorunun tipi/ölçüsü nedir?
- Nereye: 5.3.3, 6.5.1 · `[TESISAT] Basınçlı hava basıncı (bar)`, `Basınçlı hava bağlantı tipi`
- **Cevap:**

**P2 — Hava girişindeki elektrikli eleman.** Hızlı bağlantı rakoru ile şartlandırıcı arasında "PNOMEK" etiketli, fişli bir eleman var. Giriş valfi mi, basınç şalteri mi? Hava basıncı düşünce HMI'da alarm çıkıyor mu?
- Nereye: 5.3.3, 6.5, 11.5
- **Cevap:**

**P3 — Kapak silindirleri.** Kapakta iki pnömatik silindir (kapı açıklığının iki yanında) ve silindir çıkışlarında hız ayar (kısma) valfleri var mı? Şu anki yazım böyle.
- Nereye: 3.1.3 (no. 2), 6.5.2
- **Cevap:**

---

## 6. Elektrik ve tesisat

**E1 — Besleme bağlantı şekli.** Panoda 4 kutuplu kaçak akım röleleri, 230 V kontaktör bobinleri ve faz koruma rölesinde N klemensi var. Önerim: **3P+N+PE**. Doğru mu?
- Nereye: 3.3.5, 5.3.1 · `[ELEKTRIK] Besleme bağlantı şekli (3P+PE / 3P+N+PE)`
- **Cevap:**

**E2 — Sigorta ve kablo.** Tesis tarafında önerilen besleme sigortası ve besleme kablosu kesiti nedir? (Gövde koduna göre değişiyorsa her biri için.)
- Nereye: 5.3.1 · `[ELEKTRIK] Önerilen besleme sigortası / devre kesici`, `Besleme kablosu kesiti`
- **Cevap:**

**E3 — Pano koruma sınıfı.** Elektrik panosunun IP sınıfı?
- Nereye: 3.3.5 · `[ELEKTRIK] Elektrik panosu koruma sınıfı (IP)`
- **Cevap:**

**E4 — Buhar tahliye bağlantısı.** Buhar tahliye fanının çıkışında şapkalı bir boru var. Müşteri buraya kanal bağlıyor mu? Bağlantı çapı kaç mm?
- Nereye: 5.3.4 · `[TESISAT] Buhar tahliye (egzoz) bağlantı çapı (mm)`
- **Cevap:**

**E5 — Faz koruma rölesi.** MKS-03 faz kaybı veya yanlış faz sırası algılayınca makine ne yapar? HMI'da alarm verir mi?
- Nereye: 6.3.1, 11.3
- **Cevap:**

---

## 7. Taşıma, kurulum ve ağırlık

**N1 — Ağırlık.** Her gövde kodunun yaklaşık boş ağırlığı (en azından 1500)? Ağırlık merkezi belirgin şekilde kaçık mı?
- Nereye: 3.3.3, 4 · `[AGIRLIK] Boş ağırlık — yaklaşık (kg)`, `Ağırlık merkezi konumu`
- **Cevap:**

**N2 — Forklift.** Forklift çatalları hangi taraftan girer? Makine palet üzerinde mi sevk ediliyor?
- Nereye: 4.1.1, 4.1.3 · `[TASIMA] Forklift çatal giriş yönü`
- **Cevap:**

**N3 — Sevkiyat parçaları.** Tank ünitesi kabine bağlı tek parça olarak mı sevk ediliyor, yoksa ayrı mı? Sahada boru, kablo veya hava bağlantısı yapmak gerekiyor mu? Taşıma arabası, filtre elemanları vb. ayrı ambalajda mı geliyor?
- Nereye: 4.1.2, 5.1.1, 5.1.3
- **Cevap:**

**N4 — Kurulum yeri.** Zemin taşıma kapasitesi (kg/m²) ve minimum tavan yüksekliği (mm)? Kapak açıkken toplam yükseklik yalnızca 1650 için var (3180 mm); diğer gövde kodları için?
- Nereye: 3.3.3, 3.5.2, 5.2.1 · `[KURULUM]`, `[AGIRLIK] Kapak açıkken toplam yükseklik (mm)`
- **Cevap:**

**N5 — Tip etiketinin yeri.** Tip etiketi makinenin hangi yüzünde, yerden yaklaşık kaç cm yükseklikte?
- Nereye: 3.1.5 · `[PROJE] Tip etiketi konumu`
- **Cevap:**

**N6 — Taşıma arabası.** Sepet arabadan kabine nasıl aktarılıyor (makaralı ray, kızak…)? Arabadaki kollu mekanizma ne işe yarıyor; arabayı makineye kilitliyor mu (`photos/WhatsApp Image 2026-10-21 at 15.15.48 (7).jpeg`, `photos/WhatsApp Image 2026-10-21 at 15.15.52 (7).jpeg`)?
- Nereye: 7.4.2, 6.1.1, 9.1.10
- **Cevap:**

---

## 8. HMI ve program

**H1 — HMI ekranları.** HMI ekran görüntülerini (ana ekran, program seçimi, parametre ayarı, alarm ekranı) fotoğraflayıp `photos/` klasörüne ekleyebilir misiniz? 3.4.2 ve 6.6'yı ekranlara göre yazacağım.
- **Cevap:**

**H2 — Program ve erişim.** Kaç program kaydedilebiliyor? HMI dil seçenekleri neler? Kaç şifre seviyesi var, hangi seviye neyi değiştirebiliyor?
- Nereye: 3.4.2 · `[KONTROLLER] Kayıtlı program (reçete) sayısı`, `HMI dil seçenekleri`, `Şifre seviyeleri`
- **Cevap:**

**H3 — Ayar aralıkları.** Durulama süresi (dk), kurutma süresi (dk) ve kurutma sıcaklığı (°C) hangi aralıkta ayarlanıyor? Tank sıcaklıkları en az kaç °C'ye ayarlanabiliyor?
- Nereye: 3.3.4, 6.6.1 · `[PROGRAM]`
- **Cevap:**

**H4 — Program akışı.** Şu anki yazım: ısıtma → yıkama → durulama → kurutma → bitiş. Adımlar arasında damlatma/bekleme var mı? Buhar tahliye fanı ne zaman çalışıyor? Program sonunda kapak açılmadan önce otomatik bekleme var mı?
- Nereye: 3.1.4, 7.4.4, 7.4.5
- **Cevap:**

**H5 — Alarm listesi.** HMI alarm numaraları ve metinleri listesini verebilir misiniz? Bölüm 11'e alarm tablosu olarak ekleyeceğim.
- Nereye: 3.4.3, 11
- **Cevap:**

---

## 9. Bakım ve yedek parça

**B1 — Redüktör yağı.** Döndürme redüktörünün yağ tipi, miktarı ve değişim periyodu nedir? Ömür boyu yağlı ise öyle yazacağım.
- Nereye: 9.1.2, 9.1.6 · `[BAKIM] Redüktör yağı tipi ve miktarı`, `Redüktör yağ değişim periyodu`
- **Cevap:**

**B2 — Bakım planı.** 9.1.2'deki bakım periyotları şablondan geldi (günlük, haftalık, aylık, 6 aylık, yıllık). Uygun mu, değiştirmek istediğiniz var mı?
- **Cevap:**

**B3 — Yedek parça kodları.** 13.3'teki tablo için parça kodları ve önerilen stok adetleri: püskürtme nozulu, süzgeç sepeti, filtre elemanı, filtre gövdesi kapak contası, pompa mekanik salmastrası, tank ısıtıcısı, kurutma hava ısıtıcısı, seviye şalteri, emniyet termostatı, sıcaklık sensörü, kapak emniyet şalteri, döndürme redüktörlü motoru, pinyon, sepet makarası, pnömatik silindir conta takımı, şartlandırıcı filtre elemanı, tank kapağı gazlı amortisörü. Eklenmesi gereken başka parça (ışık perdesi, kabin LED lambası…) var mı?
- Nereye: 13.3
- **Cevap:**

**B4 — Fan ve diğer motor etiketleri.** Kurutma fanı ve buhar tahliye fanı motorlarının güç, akım ve devir değerleri (fotoğrafta okunmuyor)?
- Nereye: 3.3.8 · `[MOTOR_LISTESI]`
- **Cevap:**

---

## 10. Dokümanlar

**D1 — Teslim edilen dokümanlar.** Aşağıdakilerin numarası, tarihi veya dosya adı nedir; hangileri makineyle teslim ediliyor? AB Uygunluk Beyanı, elektrik devre şeması, pnömatik şema, PLC programı yedeği, HMI proje yedeği, yerleşim (layout) resmi, yedek parça listesi, bileşen kılavuzları (pompa, motor, PLC, HMI).
- Nereye: 13.1 · `[DOKUMANLAR]`
- **Cevap:**

**D2 — Teknik resimler.** 13.2'deki ön, yan ve üst görünüşler 1650 STEP modelinden. 1500 veya diğer gövde kodları için teknik resim ya da layout PDF'i var mı? Varsa proje klasörüne ekleyebilirsiniz.
- Nereye: 13.2
- **Cevap:**

---

## Gönderirseniz işe yarayacak fotoğraflar

- HMI ekranları (H1)
- LEO pompa, mavi pompa, kurutma fanı ve buhar tahliye fanı motor etiketleri, net ve yakından (T2, T3, B4)
- Işık perdesinin model etiketi (K3)
- Tip etiketinin makinedeki yerini gösteren geniş açı (N5)
- Kapak kenarı, kurutma ünitesi ve kumanda panelindeki etiketler, varsa (K10)
