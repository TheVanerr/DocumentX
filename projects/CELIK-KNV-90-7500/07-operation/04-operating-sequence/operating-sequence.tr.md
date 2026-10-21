# 7.4 Operasyon sekansı

Makinede sabit bir otomatik çevrim **yoktur**. Operasyon sekansı; operatörün açtığı fonksiyonların konveyör ile eşzamanlı çalışması ve parçanın hat boyunca ilerleyerek açık olan proses bölgelerinden geçmesidir. Besleme **sol**, boşaltma **sağ** yöndedir; yükleme ve boşaltma **elle** yapılır.

---

## 7.4.1 Parça akışı — genel sekans

| Adım | Açıklama |
| :---: | :--- |
| 1 | Operatör, ihtiyaç duyulan fonksiyonları açılış sırasına göre açar (**Bkz. Bölüm 7.2.2**); konveyör çalışır |
| 2 | Operatör parçayı **sol girişten** tel bant üzerine yerleştirir |
| 3 | Parça PVC perdeyi geçerek **yıkama hücresine** girer; TANK 1 PUMP açıksa nozullar ısıtılmış yıkama suyunu püskürtür |
| 4 | Parça **durulama hücresine** geçer; TANK 2 PUMP açıksa durulama suyu püskürtülür |
| 5 | Parça **su sıyırma** bölgesine geçer; BLOWER 1/2 açıksa hava bıçakları yüzey suyunu sıyırır |
| 6 | Parça **kurutma hücresine** geçer; DRYING 1/2 FAN ve HEATER açıksa sıcak hava ile kurur |
| 7 | Parça **sağ çıkışa** ulaşır; operatör parçayı ısıya dayanıklı eldivenle alır |

Açık olmayan fonksiyonun bölgesinden parça işlem görmeden geçer. Sürekli akışta operatör, parçalar tel bant üzerinde birbirine temas etmeyecek aralıkla yüklemeye devam eder.

![Konveyör girişi — parça yükleme bölgesi ve PVC perde](../../assets/7.4/konveyor-parca-giris.jpg)

![Konveyör çıkışı — parça alma bölgesi](../../assets/7.4/konveyor-cikis.jpg)

---

## 7.4.2 Döngü süresi ve kapasite

| Parametre | Değer | Anlam |
| :--- | :--- | :--- |
| Döngü süresi | Sabit değer yok — işletmede ölçülür (**Bkz. Bölüm 3.3.2**) | Bir parçanın girişten çıkışa hat boyunca geçiş süresi; konveyör frekansına (20–60 Hz) ve hat uzunluğuna bağlı |
| Nominal kapasite | Müşteri firma belirler | Parça boyutu, tel bant doluluğu ve hıza bağlı |

Konveyör hızı düşürüldükçe parçanın hücrelerdeki temas süresi uzar; temizlik ve kuruluk artar, saatlik adet düşer. Döngü süresinin ölçüm yöntemi için **Bkz. Bölüm 8.1.1**; hız ve sıcaklık kombinasyonunun ürün bazlı kaydı için **Bkz. Bölüm 8.2**.

---

## 7.4.3 Ürün giriş ve çıkış — elle yükleme/boşaltma

| Parametre | Değer |
| :--- | :--- |
| Giriş | Operatör parçayı **sol girişten** konveyöre yerleştirir |
| Çıkış | Operatör parçayı **sağ çıkıştan** alır |
| Robot / otomatik besleme | Yok |

Yükleme ve boşaltma sırasında koruma kafesi içine girilmez; eller tel bant ile sabit yapı arasına sokulmaz. Çıkan parça kurutma hücresinden sıcak çıkar; ısıya dayanıklı eldiven zorunludur (**Bkz. Bölüm 2.6**). Çıkışta biriken parçalar tel bant sonunda yığılmamalıdır; birikme konveyörü zorlar ve tork sınırlayıcıyı kaydırır.

---

## 7.4.4 Proses fonksiyonları — sekans içi davranış

| Fonksiyon | Sekans rolü |
| :--- | :--- |
| TANK 1 HEATER / TANK 2 HEATER | Termostat set değerinde su sıcaklığını korur; anahtar ON kalır |
| TANK 1 PUMP / TANK 2 PUMP | Hücrelere sürekli püskürtme; parça yokken de çalışır |
| TANK 1 OIL SKIMMER | Yıkama tankı yüzey yağını toplar — sürekli veya periyodik çalıştırılabilir |
| Yağ ayırıcı (etiketsiz anahtar) | Yağlı suyu ayırıcı üniteye aktarır — 6 bar hava gerektirir |
| BLOWER 1 / BLOWER 2 | Su sıyırma — sürekli |
| DRYING 1/2 FAN + HEATER | Sıcak hava kurutma — ısıtıcı termostat kontrollü |
| CONVEYOR | Parça taşıma — potansiyometre hızında sürekli |

Fonksiyon OFF konumdayken ilgili proses adımı atlanır; hat tasarımına uygun kombinasyon operatör tarafından belirlenir.

---

## 7.4.5 Hata durumunda makine davranışı

| Durum | Makine davranışı | Operatör eylemi |
| :--- | :--- | :--- |
| Bakım kapağı açıldı (manyetik switch) | Tüm hareket ve proses çıkışları durur; RESET lambası söner | Kapağı hizalı kapatın; RESET'e basın (**Bkz. Bölüm 2.5**) |
| Acil stop basıldı | Tüm çıkışlar durur; RESET lambası söner | Tehlikeyi giderin (**Bkz. Bölüm 7.3.2**) |
| Tankta su yok / seviye düşük | İlgili tank ısıtıcısı ve pompası durur; kırmızı WASHING LEVEL yanar | Tankı elle doldurun (**Bkz. Bölüm 7.2.1**) |
| Motor koruma (MKŞ) trip | İlgili motor durur; run lambası söner; diğer fonksiyonlar çalışmaya devam eder | Fonksiyonu OFF konumuna alın; yetkili elektrikçiye bildirin (**Bkz. Bölüm 11.1.3**) |
| Isıtıcı kaçak akım trip | İlgili ısıtıcı grubu durur | Isıtıcıyı OFF konumuna alın; yetkili elektrikçiye bildirin (**Bkz. Bölüm 11.3.3**) |
| Faz hatası (MKR-01) | Pano çıkış vermez; hiçbir fonksiyon çalışmaz | Yetkili elektrikçiye bildirin (**Bkz. Bölüm 11.3.1**) |
| Konveyör inverter alarmı | Konveyör durur; inverter ekranında kod | CONVEYOR anahtarını OFF konumuna alın (**Bkz. Bölüm 11.3.2**) |

Makinede HMI alarm listesi yoktur; hata, lamba durumu ve pano içi koruma elemanı konumundan teşhis edilir (**Bkz. Bölüm 11.1**). Hat durduğunda hücre içinde kalan parçalar ve hücre yüzeyleri sıcak ve ıslaktır; hücreden parça almak için kapak açmadan önce LOTO uygulayın (**Bkz. Bölüm 2.4**).

**UYARI — Beklenmedik çalışma:** Fonksiyon anahtarları ON konumundayken RESET'e basılırsa ilgili pompa, fan ve konveyör hemen çalışır; kapak yakınındaki kişi sıcak su püskürmesine ve ezilmeye maruz kalabilir. RESET'e basmadan önce kapağı kapatın ve tüm fonksiyon anahtarlarını OFF konumuna alın.

---

Başlatma için **Bkz. Bölüm 7.2**; arıza tablosu için **Bkz. Bölüm 11.1.2**.
