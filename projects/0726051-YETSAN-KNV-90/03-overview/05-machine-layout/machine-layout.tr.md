# 3.5 Makine yerleşim planı

Bu bölüm, makinenin tesis içindeki konumlandırılması, yön tanımları, minimum etraf boşlukları, bakım erişimi ve taşıma kısıtlarını tanımlar. Kurulum (Bölüm 5) ve nakliye (Bölüm 4) bölümleri alan gereksinimlerini buradan referans alır; aynı değerler tekrarlanmaz.

**Referans çizim:** Genel yerleşim planı dosya adı [EKSİK] — teslim paketindeki layout çizimi (**Bkz. Bölüm 13.2**).

![3D üst görünüş — hat yerleşimi: giriş (sol), tanklar, kurutma, pano (sağ)](../../assets/3.5/3d-ust-yerlesim.png)

---

## 3.5.1 Yön tanımları ve operatör tarafı

Makine yönleri, konveyör akış yönü ve operatör erişim tarafı kurulum, operasyon ve bakım planlamasında ortak referans olarak kullanılır. Tüm kılavuz metinlerinde aşağıdaki tanımlar geçerlidir. "Karşıdan bakış", elektrik panosunun bulunduğu uzun kenardan makineye bakıştır.

| Tanım | Yön / Konum |
| :--- | :--- |
| Operatör tarafı | Sağ — elektrik panosu ve operatör paneli |
| Besleme tarafı (giriş) | Sol — parça girişi |
| Boşaltma tarafı (çıkış) | Sağ — parça çıkışı |
| Konveyör akış yönü | Sol → Sağ |
| Yağ ayırıcı ünitesi | Makine yanında ayrı kabin — hortum ve hava hattı ile bağlı |

Parçalar sol taraftan konveyöre elle yerleştirilir, yıkama → durulama → su sıyırma → kurutma bölgelerinden geçer ve sağ taraftan elle alınır. Operatörün yükleme ve boşaltma noktaları arasında güvenli yürüyüş yolu olmalıdır; bu yol tank önündeki bakım alanı ile çakışmamalıdır.

Operatör; operatör paneline, ana şalter koluna ve elektrik panosuna **sağ taraftan** erişir. Makinede tepe lambası yoktur; RESET ve seviye lambaları yalnızca panel önünden görülür. Bu nedenle operatör çalışma pozisyonu panelin görüş alanı içinde planlanmalıdır.

![Operatör tarafı — elektrik panosu ve operatör paneli](../../assets/3.5/operator-tarafi-pano.jpg)

---

## 3.5.2 Minimum etraf boşlukları ve tavan yüksekliği

Kurulum alanı planlamasında aşağıdaki minimum boşluklar sağlanmalıdır. Bu değerler bakım kapaklarının elle kaldırılarak açılması, tank kapaklarının açılması, filtre erişimi, pano kapağının tam açılması ve güvenli personel hareketi için gereklidir.

| Bölge | Minimum boşluk |
| :--- | :--- |
| Ön (operatör / pano tarafı) | [EKSİK] mm |
| Arka | [EKSİK] mm |
| Yan — giriş (sol) | [EKSİK] mm |
| Yan — çıkış (sağ) | [EKSİK] mm |
| Tavan yüksekliği | [EKSİK] mm — egzoz bacası ve baca bağlantısı dikkate alınmalı |

| Ek gereksinim | Değer |
| :--- | :--- |
| Montaj alanı minimum boyutu | [EKSİK] m × m |
| Zemin düzgünlük toleransı | [EKSİK] mm/m |
| Zemin mukavemeti | [EKSİK] — çalışma ağırlığı (tanklar dolu) ve dinamik yükler için |
| Zemin yüzeyi | Sert, düz, suya dayanıklı; tank çevresinde drenaj önerilir |

Zemin mukavemeti, makinenin dolu çalışma ağırlığını (**Bkz. Bölüm 3.3.1**) ve pompa/fan kaynaklı dinamik yükleri taşıyacak düzeyde olmalıdır. Seviye ayarı ayarlanabilir ayaklar ile yapılır (**Bkz. Bölüm 5.2**). Yağ ayırıcı ünitesi için makine yanında ek alan ve hortum/hava hattı güzergâhı planlanmalıdır.

---

## 3.5.3 Bakım erişim bölgeleri

| Bölge | Erişim |
| :--- | :--- |
| Tank 1 ve Tank 2 üst kapakları | Gaz amortisörlü kapaklar — ön filtre, iç filtre, rezistans ve seviye sensörü erişimi |
| Hücre bakım kapakları (7 adet) | Elle kaldırılarak açılır; manyetik emniyet switch'li — nozul, blower borusu ve tel bant erişimi |
| Pompa ve hassas filtre bölgesi | Tank yanı — torba filtre gövdesi ve pompa |
| Elektrik panosu | Sağ taraf — kapak tam açılma alanı |
| Konveyör redüktörü ve gres nipelleri | Konveyör giriş ve çıkış uçları — koruma kafesi içi |
| Egzoz fanı ve baca | Makine üstü — tavan yüksekliği ve erişim platformu/merdiven gereksinimi |
| Yağ ayırıcı ünitesi | Ayrı kabin — diyaframlı pompa ve filtre alt kısımda |

Bakım kapakları **manyetik emniyet switch'leri** ile izlenir; kapak açıldığında makine durur. Bakım öncesi makine durdurulmalı, ana şalter kapatılmalı ve **LOTO prosedürü** uygulanmalıdır (**Bkz. Bölüm 2.4**). Switch'ler baypas edilmemelidir.

Günlük ön filtre temizliği tank üst kapaklarından, haftalık torba filtre temizliği pompa çıkışındaki filtre gövdesinden yapılır (**Bkz. Bölüm 10**). Konveyör gresleme noktaları koruma kafesi içindedir; kafes içine yalnızca LOTO sonrası girilir (**Bkz. Bölüm 9.1.4**).

---

## 3.5.4 Taşıma, forklift ve ağırlık merkezi

| Parametre | Değer / Not |
| :--- | :--- |
| Taşıma ağırlığı — montajlı | [EKSİK] kg |
| Taşıma ağırlığı — demonte max parça | [EKSİK] kg |
| Kaldırma aparatı / travers referans çizimi | [EKSİK] |
| Forklift çatal girişi | [EKSİK] |
| Vinç / forklift erişim noktaları | [EKSİK] |
| Ağırlık merkezi notu | [EKSİK] — tanklar ve pano hat üzerinde asimetrik yerleşimlidir; tanklar boş iken taşıyın |

Taşıma yöntemi, çatal konumu ve ağırlık merkezi bilgisi teslim paketindeki layout/kaldırma çiziminden alınmalıdır. Çizim yoksa taşıma öncesi üretici servisi ile görüşün (**Bkz. Bölüm 1.3**). Tanklar dolu iken makine taşınmaz; sıvı çalkalanması ağırlık merkezini kaydırır ve devrilme riski oluşturur. Taşıma prosedürü **Bölüm 4.1**'de verilmiştir.

![Ayarlanabilir ayaklar — makine şasesi](../../assets/3.5/ayarlanabilir-ayak.jpg)

---

## 3.5.5 Güvenlik elemanlarının yerleşimi

Acil stop butonları ve emniyet switch'li bakım kapakları makine boyunca dağıtılmıştır; operatörün her çalışma pozisyonundan en az bir acil stopa erişimi vardır.

| No. | Acil stop konumu |
| :---: | :--- |
| 1 | Operatör paneli (EMERGENCY STOP) |
| 2 | Konveyör girişi — sağ |
| 3 | Konveyör girişi — sol |
| 4 | Konveyör çıkışı — sağ |
| 5 | Konveyör çıkışı — sol |
| 6 | Makine uzun ekseni orta bölge — sağ |
| 7 | Makine uzun ekseni orta bölge — sol |

Acil stop'a basıldığında tüm fonksiyonlar durur. Reset prosedürü ve yeniden devreye alma koşulları **Bölüm 2.5**'te verilmiştir; bu bölümde adımlar tekrarlanmaz.

Bakım kapağı sayısı **7**'dir; her kapakta Omron F3STGRNLPU21M1J8 manyetik switch bulunur. Işık perdesi bulunmamaktadır; konveyör giriş ve çıkışı tel koruma kafesi ile çevrilidir (**Bkz. Bölüm 2.1.3**).

---

Teknik boyut ve ağırlık değerleri için bkz. **Bölüm 3.3**; nakliye prosedürleri için bkz. **Bölüm 4**.
