<!-- ÇEVİRİ GEREKLİ → DE | kaynak: TR | bu satırı çeviri bitince silin. Başlık/görsel/tablo yapısını koruyun, yalnızca metni çevirin. -->

# 8.2 SPESİFİK KURULUM (SPECIFIC SETUP)

Bu bölüm, makinenin farklı malzeme türleri, özel kirlilik dereceleri veya hassas parçalar için optimize edilmiş şekilde çalıştırılabilmesi amacıyla yapılan reçete bazlı, mekanik ve kimyasal spesifik kurulumları tanımlar. Standart yıkama programlarının yetersiz kaldığı durumlarda veya yeni bir ürün grubuna geçiş yapılacağı zaman bu spesifik kurulum adımlarının uygulanması gerekir.

---

## 8.2.1 Reçete (Program) Parametrelerinin Ayarlanması (Recipe Parameter Tuning)

Yıkanacak parçanın özelliğine göre HMI (Dokunmatik Panel) üzerinden PLC reçetelerinin güncellenmesi işlemidir.

- **Sıcaklık Ayarı:** Parçanın malzeme yapısına *(örn: alüminyum, plastik)* göre ısıtma hedef sıcaklığı düşürülmeli veya ağır yağ/coolant kalıntıları için maksimum sıcaklığa *(genellikle 80-90°C)* çıkarılmalıdır.

- **Tambur Devir Hızı (RPM):** Hassas veya çizilmeye müsait parçalar için tambur dönüş hızı düşürülmeli *(örn: 5-8 RPM)*, kalın çelik/talaşlı parçalar için yüksek devir *(örn: 12-15 RPM)* seçilmelidir.

- **Dönüş Aralıkları:** Sağ/sol dönüş süreleri *(örn: 30 sn sağ / 30 sn sol)* parçaların birbirine dolanmasını önlemek için kısaltılabilir veya uzatılabilir.

- **Sıkma (Spin) Süresi ve Hızı:** Parçaların suyu alınırken deformasyon (şekil bozukluğu) yaşamaması için sıkma devri sınırlandırılmalı veya kademeli (step) hızlanma programlanmalıdır.

---

## 8.2.2 Tambur İçi Mekanik Düzenlemeler (Mechanical Drum Setup)

Bazı özel parçalar, standart tambur deliklerinden geçebilir, birbirine çarparken ezilebilir veya tambur duvarına yapışabilir. Bu durumlar için fiziksel kurulum yapılmalıdır.

- **Bölme (Sepet) Kullanımı:** Küçük ve hassas parçalar tambur içinde serbestçe dökülmemesi için tambur içine özel bölmeli sepetler (dividers) yerleştirilir.

- **İç Astar (Lining) Kaplanması:** Parçaların çizilmesini engellemek veya gürültüyü azaltmak için tambur iç yüzeyine poliüretan veya lastik bazlı koruyucu astarlar monte edilir.

- **Tambur Delik Boyutları:** Yıkanacak talaş veya küçük parçaların tahliye hatına kaçıp pompayı tıkaması riskine karşı, tambur delik boyutundan daha küçük gözenekli özel filtreleme ağları tambur içine eklenebilir.

---

## 8.2.3 Kimyasal ve Dozajlama Sistemi Kurulumu (Chemical & Dosage Setup)

Kirlilik tipine (yağ, çink, polimer, talaş vb.) göre doğru kimyasalın ve dozaj miktarının sisteme tanımlanması işlemidir.

- **Dozaj Oranı (%) Ayarı:** HMI üzerinden yıkama suyundaki kimyasal konsantrasyonu *(örn: %2 veya %5)* ayarlanır. Suyun litre cinsinden hacmine göre dozaj pompasının strok süresi/sayısı sisteme girilir.

- **Enjeksiyon Zamanlaması:** Kimyasalın su alımı sırasında mı, yoksa su alımı bittikten ve belirli bir sıcaklığa ulaşıldıktan sonra mı enjekte edileceği reçeteden seçilir. *(Bazı kimyasallar yüksek sıcaklıkta bozulabilir, bu yüzden gecikmeli dozaj yapılmalıdır.)*

- **Çoklu Kimyasal Kullanımı:** Hem alkali (yağ giderici) hem asidik (pas/kireç giderici) kimyasalların kullanılacağı reçetelerde, nötralizasyon (nötrleştirme) durulama adımları sisteme spesifik olarak eklenmelidir.

---

## 8.2.4 Su Seviyesi ve Akış Optimizasyonu (Water Level & Flow Optimization)

Makinenin su alım seviyesi, yükleme kapasitesine ve parça geometrisine göre optimize edilmelidir.

- **Düşük Seviye (Hafif Yükler):** Tambur hacminin 1/3'ünü aşmayan az miktardaki yükleme için su seviyesi düşük tutularak kimyasal konsantrasyonu artırılır ve su tasarrufu sağlanır.

- **Yüksek Seviye (Hacimli Yükler):** Hacimli hafif parçaların tamamen suya gömülerek yıkanması için yüksek su seviyesi seçilir.

- **Overflow (Taşma) Durulama:** Parçalar üzerindeki köpük veya hafif yüzen partiküllerin *(örn: talaş)* temiz su girişi ile tambur üst sınırından dışarı atılması için "Overflow Durulama" adımı reçeteye spesifik olarak eklenir.

---

## 8.2.5 Kurutma ve Üfleme Sistemi Kurulumu (Drying & Blowing Setup)

Yıkama sonrası parçaların korozyona uğramaması (özellikle ferrous metaller) veya bir sonraki prosese kuru olarak aktarılması için kurutma parametreleri ayarlanır.

- **Isıtıcı Modül:** Sıcak hava üfleme sistemi (fırın/rezistans) aktive edilir. Hassas plastik parçalar için sıcaklık düşük *(örn: 50°C)*, metal parçalar için yüksek *(örn: 90-110°C)* ayarlanır.

- **Üfleme Süresi:** Tamburun düşük devirde döndüğü esnada yapılan sıcak hava üfleme süresi parçanın kütlesine göre uzatılır veya kısaltılır.

- **Soğutma Adımı** *(Opsiyonel):* Sıcak metal parçaların işçiye veya sonraki istasyona güvenle dokunulabilir olması için, kurutma sonrası kısa süreli soğuk hava üfleme (cooling down) adımı reçeteye eklenir.

---

> ⚠️ **UYARI:** Spesifik kurulum süreçlerinde (özellikle kimyasal ve sıcaklık değişimlerinde) ilk test yıkaması mutlaka örnek bir parça grubu ile (test partisi) yapılmalıdır. Parça üzerinde deformasyon, renk bozukluğu veya yıkanamama durumu gözlemlenirse reçete parametreleri yeniden düzenlenmelidir. Yetkisiz kişilerin HMI üzerinden reçete parametrelerini değiştirmesi (spesifik kurulum yapması) makine ve ürün güvenliği açısından sakıncalıdır.