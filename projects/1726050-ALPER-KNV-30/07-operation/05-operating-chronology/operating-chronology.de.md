<!-- ÇEVİRİ GEREKLİ → DE | kaynak: TR | bu satırı çeviri bitince silin. Başlık/görsel/tablo yapısını koruyun, yalnızca metni çevirin. -->

# 7.5 İŞLETİM KRONOLOJİSİ (OPERATING CHRONOLOGY)

Bu bölüm, VDL serisi tamburlu endüstriyel yıkama makinesinin "START (BAŞLAT)" komutu verildiği andan itibaren, programın sonuna kadar izlediği otomatik zaman çizelgesini ve olayların kronolojik akışını detaylandırmaktadır. Makinenin PLC/HMI kontrol sistemi, bu kronolojiyi sensör verilerine ve tanımlanan reçetelere göre kesintisiz olarak yönetir.

---

## 7.5.1 Başlangıç ve Güvenlik Doğrulaması (T0)

Operatör programı seçip "START" butonuna bastığında sistem ilk olarak güvenlik protokollerini doğrular.

**Kronolojik Sıra:**

1. HMI üzerinden seçilen reçete verileri PLC'ye yüklenir.
2. Tambur kapağı kilit sensöründen (Limit Switch) "Kapalı ve Kilitli" sinyali beklenir.
3. Sistemde aktif arıza veya alarm olup olmadığı kontrol edilir.
4. Tüm koşullar sağlandığında program T1 aşamasına (Su Alma) geçer.

---

## 7.5.2 Su Alma Aşaması (T1)

Makine, yıkama işlemi için gereken suyu tambur içine alır.

**Kronolojik Sıra:**

1. Tambur tahliye vanası kapalı konuma alınır.
2. Giriş suyu valfi (veya pnömatik pompası) açılır.
3. Su seviyesi sensörü (elektrot veya şamandıra) tarafından belirlenen alt ve üst seviyeler takip edilir.
4. Tambur, su alımı süresince düşük devirde (karıştırma modunda) dönebilir.
5. Su seviyesi hedeflenen değere ulaştığında giriş valfi kapanır ve sistem T2 aşamasına (Isıtma) geçer.

---

## 7.5.3 Isıtma ve Kimyasal Dozajlama (T2)

Su alımı tamamlandıktan sonra suyun yıkama için yeterli sıcaklığa getirilmesi ve kimyasalların eklenmesi sağlanır.

**Kronolojik Sıra:**

1. Isıtma sistemi (elektrikli rezistans grupları veya buhar valfi) devreye girer.
2. Tambur dönüşü, programlanmış devir sayısında *(örn: 12 rpm)* ve periyodik olarak sağa-sola *(örn: 30 sn sağ / 30 sn sol)* dönmeye başlar.
3. Sıcaklık sensörü (PT100) hedef sıcaklığa ulaşılıp ulaşılmadığını sürekli kontrol eder.
4. Hedef sıcaklığa ulaşılınca veya su alımıyla eş zamanlı olarak kimyasal dozajlama pompaları devreye girer ve belirlenen süre/miktarda deterjan/solvent enjekte eder.
5. Isıtma, sıcaklık sabitlensin diye düşük güçte veya aralıklı (On/Off) çalışmaya devam eder.

---

## 7.5.4 Ana Yıkama / Çalkalama Aşaması (T3)

Kimyasal ve sıcaklığın etkisiyle parçaların kirinden arındırılması sağlanır.

**Kronolojik Sıra:**

1. Tambur, reçetedeki yıkama süresi *(örn: 20 dakika)* boyunca programlanmış hız ve sağa-sola döngüsüne göre kesintisiz döner.
2. Bu aşamada sıcaklık sabit tutulur.
3. Süre dolunca tambur dönüşü yavaşlatılır veya durdurulur ve sistem T4 aşamasına (Tahliye) geçer.

---

## 7.5.5 Kirli Su Tahliyesi (T4)

Yıkama işlemi biten kirli suyun sistemden atılması sağlanır.

**Kronolojik Sıra:**

1. Tahliye vanası/pompası otomatik olarak açılır/devreye girer.
2. Tambur, su boşalırken hafif çevrilerek (sıkma devrine yakın bir hızda) parçaların suyunu bırakması sağlanır.
3. Su seviye sensörü tankın tamamen boşaldığını tespit edene kadar tahliye valfi açık kalır.
4. Tank boşaldıktan sonra tahliye valfi kapatılır. Sistem bir sonraki aşamaya (Durulama) geçer.

---

## 7.5.6 Durulama Döngüleri (T5)

Parçalar üzerindeki kalıntı kimyasalları ve kirleri tamamen temizlemek için temiz su ile tekrarlanan yıkama aşamasıdır.

**Kronolojik Sıra:**

1. *(Eğer reçetede tanımlıysa)* Sistem T1'i tekrarlar ve temiz su alır.
2. Isıtma devre dışı kalır veya durulama için düşük bir sıcaklığa *(örn: 40°C)* ayarlanır.
3. Tambur kısa süreli *(örn: 5 dk)* düşük devirde döner.
4. Süre bitiminde T4'te (Tahliye) olduğu gibi kirli su tahliye edilir.
5. Bu döngü (T1 → T4 sırası), reçetede belirtilen durulama adedi (1, 2 veya 3 kez) kadar tekrarlanır.

---

## 7.5.7 Sıkma ve Kurutma Aşaması (T6)

Parçaların mekanik ve termal olarak kurutulması sağlanır.

**Kronolojik Sıra:**

1. Son durulama tahliyesi bittikten sonra tambur devir sayısı kademeli olarak yükselir ve "Sıkma Devri"ne *(örn: 600-800 rpm)* ulaşır.
2. Santrifüj etkisiyle parçalardaki fiziksel su tambur deliklerinden dışarı atılır.
3. *(Opsiyonel)* Isıtmalı hava üfleme (Fırın/Kurutma) sistemi devreye girer ve tambur içine sıcak hava basılır.
4. Tambur sıcak hava ile düşük devirde dönerek parçaların kuruması sağlanır.
5. Reçete süresi dolunca tambur yavaşlamaya başlar ve sistem T7 aşamasına (Durdurma) geçer.

---

## 7.5.8 Tambur Durdurma ve Döngü Sonu (T7)

Programın güvenli bir şekilde bitirilmesi ve tahliyeye hazır hale getirilmesi aşamasıdır.

**Kronolojik Sıra:**

1. Tambur frekans inverter (invertör) kontrolü ile "Brake (Fren)" moduna geçer ve tamamen durur.
2. HMI ekranında **"DÖNGÜ TAMAMLANDI"** uyarısı belirir ve sesli/ışıklı uyarı (Buzzer) çalar.
3. Sistemin pnömatik kapak kilidi serbest bırakılır (kapak artık açılabilir konuma gelir).
4. Makine "Hazırda Bekleme" (Standby) moduna döner ve bir sonraki operatör komutunu bekler.

---

## 7.5.9 Kronoloji Akış Şeması (Özet Zaman Çizelgesi)

```
[T0 Başlangıç]
      |
      v
[T1 Su Alma]
      |
      v
[T2 Isıtma & Kimyasal]
      |
      v
[T3 Yıkama]
      |
      v
[T4 Tahliye]
      |
      v
[T5 Durulama] <----[TEKRAR DÖNGÜSÜ]----+
      |                                 |
      v                                 |
[T6 Sıkma & Kurutma]                   |
      |                                 |
      +----> (Durulama adedi dolmadıysa tekrar T1'e dön)
      |
      v
[T7 Tambur Durdurma & Kilit Açma]
      |
      v
  [İŞLEM SONU]
```

---

> ⚠️ **DİKKAT:** Yukarıda belirtilen süreler (dakika cinsinden) ve devir sayıları (rpm cinsinden) örnek teşkil etmektedir. Gerçek işletim kronolojisi, makinenin HMI ekranından seçilen reçeteye (program) ve yıkanacak malzemenin özelliklerine göre farklılık gösterecektir. Sensör arızası (su alamama, ısıtmama vb.) durumunda PLC kronolojiyi durduracak ve operatörü alarm ekranı üzerinden bilgilendirecektir.