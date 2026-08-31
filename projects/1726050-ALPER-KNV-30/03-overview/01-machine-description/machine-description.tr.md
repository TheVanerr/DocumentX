# 3.1 Makine tanımı ve sistematik yapı

KNV-30 3000 2B (Seri no: **1726050**, müşteri: **ALPER ÖZLEM IDEA**, üretim yılı: **2026**), girişten yüklemeli konveyörlü, iki banyolu (yıkama + durulama) endüstriyel parça yıkama makinesidir. Parçalar konveyör hattı üzerinde ilerleyerek yıkama, durulama ve kurutma proseslerini ardışık olarak tamamlar; makinenin ana işlevi, parça yüzeyinde endüstriyel işlemlerden kalan **yağ ve kirliliğin giderilmesidir**.

Makine, **konveyör** tipi sürekli besleme prensibiyle tasarlanmıştır. Besleme tarafı **sol**, boşaltma tarafı **sağ**, operatör tarafı **sağ** yöndedir. Proses akışı üç adımdan oluşur: **Yıkama → Durulama → Kurutma**. Nominal döngü süresi **900 saniye** (15 dakika) olarak tanımlanmıştır.

<!-- FOTO: Makine genel görünüm — operatör tarafı (sağ), besleme sol / boşaltma sağ -->
![KNV-30 3000 2B genel görünüm](../../assets/FOTO-3-1-0-genel-gorunum.png)

---

## 3.1.1 Genel tanım ve proses konsepti

KNV 30 3000 2B, endüstriyel üretim hatlarında işlenmiş parçaların yüzey temizliği için kullanılan, konveyör üzerinde ilerleyen parçaların sabit proses bölgelerinden geçirildiği bir yıkama sistemidir. **2B** tanımı, makinenin **iki bağımsız proses banyosuna** — yıkama ve durulama — sahip olduğunu ifade eder; her banyo kendi sirkülasyon devresi ile çalışır ve banyolar arası sıvı karışımı yapısal olarak engellenir.

Parçalar sol taraftan (besleme/giriş) konveyöre yüklenir. Konveyör hattı boyunca sırasıyla yıkama bölgesi, durulama bölgesi ve kurutma bölgesinden geçen parçalar, sağ taraftan (boşaltma/çıkış) temizlenmiş ve kurutulmuş olarak alınır. Bu sürekli akış prensibi, hat entegrasyonuna uygun kesintisiz üretim imkanı sağlar.

Makinenin dış boyutları **3770 × 1730 × 2122 mm** (L × W × H), boş ağırlığı **1300 kg**, çalışma ağırlığı (dolu) **1500 kg**'dır. Makine, **ayarlanabilir ayak** sistemi üzerine monte edilmiştir; ağırlık merkezi konveyör hattının ortasındadır.

| Proses adımı | Sıra | Açıklama |
|--------------|------|----------|
| Yıkama | 1 | Endüstriyel yağ ve kir tabakasının giderilmesi |
| Durulama | 2 | Yıkama kalıntılarının ve kirliliğin uzaklaştırılması |
| Kurutma | 3 | Parça yüzeyindeki nemin alınması |

Nominal döngü süresi: **900 sn**

<!-- FOTO: Proses akışı şeması veya konveyör hattı boyunca bölge görünümü -->
![Proses akışı — yıkama, durulama, kurutma](../../assets/FOTO-3-1-1-proses-akisi.png)

---

## 3.1.2 Konveyör taşıma sistemi

Konveyör, makinenin omurgasını oluşturan taşıma sistemidir. Parçaların proses bölgeleri arasında kontrollü ve sürekli ilerlemesini sağlar. Giriş ve çıkış noktaları operatör erişimine açık konumdadır; besleme **sol**, boşaltma **sağ** yöndedir.

Konveyör tahriki, redüktörlü elektrik motoru ile gerçekleştirilir:

| Parametre | Değer |
|-----------|-------|
| Motor adı | Konveyör Redüktörü motoru |
| Güç | 1,5 kW |
| Devir | 2000 rpm |
| Marka | Siemens |
| Model | SIMOTICS S-1FL6 |

Konveyör hattı, parçaların yıkama nozulları ve durulama nozulları altından geçmesini sağlayacak şekilde proses bölgeleri boyunca konumlandırılmıştır. Referans / home pozisyonu olarak **konveyörün başı** kullanılmalıdır.

Konveyör üzerinde toplam **4 adet yağlama noktası** bulunur: giriş tarafında 2 adet, çıkış tarafında 2 adet. Periyodik yağlama, konveyörün uzun ömürlü ve sorunsuz çalışması için gereklidir (bkz. Bölüm 9.1.4 — Aylık bakım maddeleri).

<!-- FOTO: Konveyör giriş ve çıkış — besleme (sol) / boşaltma (sağ) -->
![Konveyör giriş-çıkış görünümü](../../assets/FOTO-3-1-2-konveyor-giris-cikis.png)

<!-- FOTO: Konveyör tahrik ünitesi — redüktör ve motor -->
![Konveyör redüktör motoru](../../assets/FOTO-3-1-3-konveyor-motor.png)

---

## 3.1.3 Yıkama banyosu ve sirkülasyon sistemi

Yıkama banyosu, parça yüzeyindeki endüstriyel yağ ve kir tabakasının giderildiği birinci proses bölgesidir. Tank içerisindeki proses sıvısı, yıkama pompası tarafından emilerek püskürtme sistemine basılır; parçalar konveyör üzerinde ilerlerken nozullardan gelen basınçlı sıvı ile temas eder.

Yıkama sirkülasyon devresi, bağımsız pompa motoru ile tahrik edilir:

| Parametre | Değer |
|-----------|-------|
| Motor adı | Yıkama Pompası Motoru |
| Güç | 3 kW |
| Devir | 2900 rpm |
| Marka | Lowara |
| Model | ESHE 40-160/30 |

Yıkama tankı, proses sıvısının depolandığı ve ısıtıldığı ana haznedir. Tank içerisinde **ön filtreler** bulunur; günlük bakımda sökülüp temizlenmeleri gerekir (bkz. Bölüm 10.1.3). Pompa çıkış hattında **hassas torba filtreler** yer alır; haftalık derin temizlikte sökülüp temizlenmelidir (bkz. Bölüm 10.1.4).

Proses suyu için **şebeke suyu** veya **arıtılmış su** kullanılmalıdır. Su giriş basıncı **1 bar**, su sıcaklığı **+10°C ile +70°C** aralığında olmalıdır (bkz. Bölüm 3.3 — Sıkıştırılmış hava/su).

<!-- FOTO: Yıkama banyosu — tank, pompa ve filtre genel görünüm -->
![Yıkama banyosu genel görünüm](../../assets/FOTO-3-1-4-yikama-banyosu.png)

<!-- FOTO: Yıkama pompası — Lowara ESHE 40-160/30 -->
![Yıkama pompası](../../assets/FOTO-3-1-5-yikama-pompasi.png)

---

## 3.1.4 Durulama banyosu ve sirkülasyon sistemi

Durulama banyosu, yıkama prosesinden geçen parçalar üzerinde kalan deterjan, yağ kalıntısı ve kirliliğin uzaklaştırıldığı ikinci proses bölgesidir. Yıkama banyosundan bağımsız tank ve pompa devresine sahiptir; iki banyo arasında sıvı karışımı yapısal olarak engellenmiştir.

Durulama sirkülasyon devresi:

| Parametre | Değer |
|-----------|-------|
| Motor adı | Durulama Pompası Motoru |
| Güç | 1,85 kW |
| Devir | 2900 rpm |
| Marka | GOULDS |
| Model | GCEA 370/3 |

Durulama tankında da filtreler bulunur; haftalık derin temizlik prosedürü kapsamında tank filtreleri ve pompa çıkışındaki torba filtreler sökülüp temizlenmelidir (bkz. Bölüm 10.1.4). Temizlik maddesi olarak **asit bazlı** veya **paslanmaz çeliğe zarar verecek** maddeler kullanılmamalıdır (bkz. Bölüm 10 — Yasak temizlik maddeleri).

<!-- FOTO: Durulama banyosu — tank ve pompa genel görünüm -->
![Durulama banyosu genel görünüm](../../assets/FOTO-3-1-6-durulama-banyosu.png)

---

## 3.1.5 Yağ sıyırıcı ünitesi

Yıkama tankında biriken yüzen yağ tabakasının sürekli olarak uzaklaştırılması için yağ sıyırıcı ünite entegre edilmiştir. Endüstriyel parça yıkamada yağ birikimi, proses sıvısının etkinliğini düşürür ve bakım ihtiyacını artırır; yağ sıyırıcı bu birikimi önleyerek tank içi proses kalitesini korur.

| Parametre | Değer |
|-----------|-------|
| Motor adı | Yağ Sıyırıcı Redüktörü Motoru |
| Güç | 0,04 kW |
| Marka | FINEX |
| Model | E1610-40-150-17B-C |

Yağ sıyırıcı redüktör yağ keçesi / teflon kontrol ve gerekirse değişim, 500 saat bakım kapsamındadır (bkz. Bölüm 9 — 500 saat bakım maddeleri). Yağ sıyırıcı teflon parçası tüketim kategorisinde yedek parça olarak bulundurulmalıdır (bkz. Bölüm 13.3 — Sipariş kodu X:07 03497).

<!-- FOTO: Yağ sıyırıcı ünite — yıkama tankı üzerinde konum -->
![Yağ sıyırıcı ünite](../../assets/FOTO-3-1-7-yag-siyirici.png)

---

## 3.1.6 Kurutma ve egzost sistemi

Kurutma bölgesi, durulama prosesinden çıkan parçalar üzerindeki yüzey neminin güçlü ve yönlendirilmiş hava akışı ile uzaklaştırıldığı üçüncü ve son proses adımıdır. Kurutma, boyama, kaplama ve montaj gibi yüzey kalitesinin kritik olduğu sonraki proses adımları için parçaların nemden arındırılmış olarak hattan çıkmasını sağlar.

Makinede **4 adet kurutma fanı** bulunur:

| Fan | Güç | Devir |
|-----|-----|-------|
| 1. Kurutma Fanı Motoru | 4 kW | 2900 rpm |
| 2. Kurutma Fanı Motoru | 4 kW | 2900 rpm |
| 3. Kurutma Fanı Motoru | 4 kW | 2900 rpm |
| 4. Kurutma Fanı Motoru | 4 kW | 2900 rpm |

Toplam kurutma fan gücü **16 kW**'dır. Kurutma bölgesinde biriken nemli havanın makine dışına tahliyesi için **egzost fanı** kullanılır:

| Parametre | Değer |
|-----------|-------|
| Motor adı | Egzost Fanı Motoru |
| Güç | 0,37 kW |
| Devir | 2800 rpm |
| Marka | ENA |
| Model | ENA 2 |

HMI arayüzündeki çalışma sayfasında yıkama, durulama, **kurutma 1**, **kurutma 2** ve **egzoz** seçenekleri bağımsız olarak açılıp kapatılabilir; operatör proses ihtiyacına göre bu fonksiyonları yapılandırabilir (bkz. Bölüm 7.1 — Çalışma modları).

<!-- FOTO: Kurutma bölgesi — fan üniteleri genel görünüm -->
![Kurutma fanları](../../assets/FOTO-3-1-8-kurutma-fanlari.png)

<!-- FOTO: Egzost fanı -->
![Egzost fanı](../../assets/FOTO-3-1-9-egzost-fani.png)

---

## 3.1.7 Elektrik, kontrol ve otomasyon altyapısı

Makinenin elektrik ve otomasyon altyapısı, merkezi **elektrik panosu** üzerinde toplanmıştır. Pano koruma sınıfı **IP55**, boyutları **800 × 1200 × 300 mm** (W × H × D)'dir.

### Güç beslemesi

Detaylı elektrik özellikleri **Bölüm 3.3** — Teknik özellikler / Elektrik alt bölümünde SSOT (tek kaynak) olarak verilmiştir. Özet:

| Parametre | Değer |
|-----------|-------|
| Besleme gerilimi | 380 V |
| Frekans | 50 Hz |
| Faz | 3 |
| Toplam kurulu güç | 50 kW |
| Maksimum akım çekişi | 100 A |
| Besleme konfigürasyonu | 3P+N+PE |
| Ana şalter | 100 A, Schneider |

### Otomasyon bileşenleri

| Bileşen | Marka / Model | Özellik |
|---------|---------------|---------|
| HMI | SIMATIC HMI KTP700 Basic PN (6AV2123-2GB03-0AX0) | 7" ekran |
| PLC | SIEMENS SIMATIC S7-1200 | CPU 1215C DC/DC/DC (6ES7215-1AG40-0XB0) |
| I/O | — | 36 giriş / 24 çıkış |
| Ana şalter konumu | Elektrik panosu üzerinde | — |
| Start / Stop | HMI arayüzü — dijital buton | — |

Kontrol fonksiyonları ve ekran menü yapısı **Bölüm 3.4** — Makine kontrolleri alt bölümünde detaylı olarak açıklanmıştır.

### Sinyal lambaları (tepe lambası)

| Renk | Anlam |
|------|-------|
| Kırmızı | Alarm |
| Sarı | Makine kullanıma hazır |
| Yeşil | Makine çalışıyor |

Alarm durumunda HMI alarm ekranı devreye girer; eş zamanlı olarak tepe lambası **kırmızı** yanar. Reçete / program kaydında herhangi bir sınır bulunmamaktadır.

<!-- FOTO: Elektrik panosu — HMI, ana şalter, acil stop -->
![Elektrik panosu genel görünüm](../../assets/FOTO-3-1-10-elektrik-panosu.png)

<!-- FOTO: HMI ekran — KTP700 -->
![HMI ekran](../../assets/FOTO-3-1-11-hmi-ekran.png)

---

## 3.1.8 Acil durdurma ve güvenlik donanımı

Makinede **4 adet acil stop butonu** bulunur:

1. Elektrik panosu üzerinde
2. Makine girişinde konveyörün sağında
3. Makine girişinde konveyörün solunda
4. Makine çıkışında konveyörün solunda

Acil stop'a basıldığında makinedeki **her fonksiyon durur**. Reset prosedürü: acil stop butonu kaldırılıp fiziksel tehditin giderildiği kesinleştirildikten sonra pano etiketi üzerindeki reset butonuna operatör tarafından lambası yanana kadar basılmalıdır (bkz. Bölüm 2.5 — Acil durdurma sistemi).

Emniyet kapısı / bariyer sayısı sıfırdır; ancak **RFID Güvenlik Sensörü** vardır. Kapak açıldığında RFID switch makineyi durdurur. Makinenin güvenlik kategorisi **CAT3**'tür (bkz. Bölüm 2.3 — Koruyucular ve emniyet kapıları).

Işık perdesi bulunmamaktadır.

<!-- FOTO: Acil stop butonu — elektrik panosu -->
![Acil stop butonu](../../assets/FOTO-3-1-12-acil-stop.png)

---

## 3.1.9 Motor ve tahrik grubu listesi

Makinede kullanılan tüm motorlar ve tahrik grupları aşağıdaki tabloda özetlenmiştir. Detaylı elektrik özellikleri ve motor koruma ayarları için bkz. **Bölüm 3.3** — Teknik özellikler / Motor sürücü listesi (SSOT).

| Motor adı | Güç (kW) | Devir (rpm) | Marka | Model |
|-----------|----------|-------------|-------|-------|
| Konveyör Redüktörü motoru | 1,5 | 2000 | Siemens | SIMOTICS S-1FL6 |
| Yıkama Pompası Motoru | 3 | 2900 | Lowara | ESHE 40-160/30 |
| Durulama Pompası Motoru | 1,85 | 2900 | GOULDS | GCEA 370/3 |
| Yağ Sıyırıcı Redüktörü Motoru | 0,04 | — | FINEX | E1610-40-150-17B-C |
| Egzost Fanı Motoru | 0,37 | 2800 | ENA | ENA 2 |
| 1. Kurutma Fanı Motoru | 4 | 2900 | — | — |
| 2. Kurutma Fanı Motoru | 4 | 2900 | — | — |
| 3. Kurutma Fanı Motoru | 4 | 2900 | — | — |
| 4. Kurutma Fanı Motoru | 4 | 2900 | — | — |

**Toplam kurulu güç**: 50 kW (ısıtma dahil)

<!-- FOTO: Motor plakası örneği -->
![Motor plakası örneği](../../assets/FOTO-3-1-13-motor-plaka.png)

---

## 3.1.10 Sistem entegrasyonu ve iletişim

Makine, **Profinet** protokolü ile üst sistem entegrasyonuna hazırdır. Üst sistem (MES / SCADA) bağlantısı bilinmemektedir; müşteri konfigürasyonuna bağlıdır.

I/O listesi dosya referansı: **1726050-ALPER-KNV 30 I/O LİSTESİ.pdf** — ayrı evrak teslim edilmemiştir (KD).

Uzaktan erişim **Evet** — modül (Secomea) ile sağlanır. HMI arayüzü **Türkçe, İngilizce, Almanca** dil desteğine sahiptir.

---

**Bölüm 3.1 sonu**. Sonraki alt bölümler (3.2, 3.3, 3.4, 3.5) için ilgili klasörlere bakınız.