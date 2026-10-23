# 2.4 Tehlikeli enerji kontrolü — LOTO

## 2.4.1 Kapsam ve enerji kaynakları

LOTO (kilitleme ve etiketleme), makinenin bakım, temizlik, ayar ve arıza giderme sırasında beklenmedik şekilde çalışmasını veya depolanmış enerjinin açığa çıkmasını önleyen prosedürdür. Makinede aşağıdaki enerjiler bulunur; LOTO bunların hepsini kapsar.

Tablo: Enerji kaynakları ve ayırma noktaları

| Enerji | Kaynak | Ayırma / kontrol noktası | Kontrol yöntemi |
|---|---|---|---|
| Elektrik | {{ELEKTRIK:Besleme gerilimi (V)}} V, 3P+N+PE şebeke beslemesi | Elektrik panosu kapağındaki ana şalter | O konumuna alınır, asma kilitle kilitlenir, etiketlenir |
| Elektrik (depolanmış) | Sepet motoru sürücüsünün kondansatörleri | Ana şalter | Ana şalter kapatıldıktan sonra en az 10 dakika beklenir |
| Basınçlı hava | İşletmenin hava hattı | Hat vanası ve makinedeki hava girişi (hızlı bağlantı) | Hat vanası kapatılır, hızlı bağlantı sökülür, manometrede 0 bar görülür |
| Pnömatik (depolanmış) | Kapı silindirleri (pilotlu çek valfler basıncı tutar), tahliye vanası silindirleri | Kapının konumu | Kapı tam kapalı konuma getirilir veya açık kapı mekanik olarak desteklenir |
| Yerçekimi | Açık konumdaki kabin kapısı; açık tank kapakları | Kapı ve kapak | Kapı desteklenir; açık tank kapağının amortisörlerinin tuttuğu kontrol edilir |
| Isıl | Tank sıvısı, ısıtıcılar, kurutma ısıtıcısı, sıcak yüzeyler | **Hazırlık** kapatılır | Sıcaklığın 40 °C'nin altına inmesi beklenir; sıcaklık ölçülür |
| Kimyasal | Tanklardaki yıkama sıvısı | Tank drenaj vanaları | Gerekiyorsa tank boşaltılır; KKD kullanılır |
| Hidrostatik | Tank ve borulardaki sıvı | Tank çıkış vanaları ve drenaj vanaları | Sökülecek hattın vanası kapatılır, hat boşaltılır |

## 2.4.2 LOTO gerektiren işler

Tablo: İşlere göre LOTO gereksinimi

| İş | LOTO | Açıklama |
|---|---|---|
| Parça yükleme ve boşaltma | Gerekmez | Makine çevrimde değil (kule lambası sarı); kapı açık; vücut kabine girmez |
| Ön filtre sepetlerinin günlük temizliği | Gerekmez | Çevrim dışında, **Hazırlık** kapalıyken ve sıvı soğukken; tank kapağı açılır |
| Kabin içine girme veya kabin içine vücudun bir bölümüyle uzanma | Gerekir | Dönen sepet, kapı ve sıcak sıvı tehlikesi |
| Tank içi temizlik, ısıtıcı, seviye sensörü veya termokupl işleri | Gerekir | Sıcak sıvı, elektrik ve kimyasal tehlikesi |
| Torba filtre veya emiş filtresi bakımı | Gerekir | Basınçlı sıcak sıvı tehlikesi; pompa çalışmamalı |
| Sepet, teker, pinyon, redüktör işleri | Gerekir | Sepet tahrik tehlikesi |
| Kapı, kapı silindiri, ışık perdesi işleri | Gerekir | Ezilme ve düşen kapı tehlikesi |
| Pnömatik eleman değişimi | Gerekir | Basınçlı hava |
| Elektrik panosu, motor ve sensör bağlantıları | Gerekir | Elektrik çarpması |
| Çatıdaki fan ve ısıtıcı işleri | Gerekir | Dönen pervane, sıcak yüzey, elektrik |
| Operatör panelinde ayar değiştirme | Gerekmez | Makine çevrimde değil |

## 2.4.3 LOTO uygulama prosedürü

**UYARI — Düşen kapı:** Hava ayrıldıktan sonra açık kapı yalnızca pilotlu çek valflerle tutulur. Kabin içinde çalışılacaksa kapıyı mekanik olarak destekleyin; yalnızca valflere güvenmeyin.

**Hazırlık**

1. İşi ve süresini makinenin operatörüne ve etkilenecek kişilere bildirin.
2. Makine çevrimdeyse **STOP**'a basın ve kule lambasının sarıya dönmesini bekleyin (**Bkz. Bölüm 7.3.2**).
3. Operatör panelinde **Hazırlık** butonunu kapatın.
4. Operatör panelinin Ayar Sayfası'nda **YAĞ SIYIRICI** anahtarını Pasif yapın.
5. Yapılacak işe göre kabin kapısının konumunu belirleyin:
   1. Kabin içinde çalışılacaksa kapıyı tam açın.
   2. Kabin içinde çalışılmayacaksa kapıyı tam kapatın.
6. Kapı açık bırakılacaksa kapıyı açık konumda kapı açıklığının iki yanına yerleştirilen sağlam dikmelerle mekanik olarak destekleyin.

**Enerjinin ayrılması ve kilitlenmesi**

7. Elektrik panosu kapağındaki ana şalteri O (kapalı) konumuna çevirin.
8. Ana şalteri kişisel asma kilidinizle O konumunda kilitleyin.
9. Ana şaltere adınızı, tarihi ve yapılan işi yazdığınız LOTO etiketini asın.
10. İşletmenin hava hattındaki makine besleme vanasını kapatın ve vanayı kilitleyin veya etiketleyin.
11. Makinenin hava girişindeki hızlı bağlantıyı sökün.
12. Tank veya hat işi yapılacaksa ilgili tank çıkış vanasını kapatın; gerekirse tankı boşaltın (**Bkz. Bölüm 7.6.3**).

**Enerjisizliğin doğrulanması**

13. Kumanda panelindeki **START** butonuna basın; makinenin hiçbir tepki vermediğini ve operatör panelinin kapalı olduğunu kontrol edin.
14. Filtre regülatörün manometresinde 0 bar okunduğunu kontrol edin.
15. Elektrik panosunda çalışılacaksa yetkili elektrikçi ana şalter çıkış klemenslerinde ve çalışılacak devrede gerilim yokluğunu iki kutuplu gerilim test cihazıyla ölçer.
16. Sepet motoru sürücüsünde çalışılacaksa ana şalter kapatıldıktan sonra en az 10 dakika bekleyin.
17. Tank sıvısının ve dokunulacak yüzeylerin 40 °C'nin altında olduğunu ölçün.
18. Pnömatik eleman sökülecekse elemana ait silindirin hareketsiz ve basınçsız olduğunu kontrol edin.

**İş bitiminde enerjinin geri verilmesi**

19. Takımları, sökülen parçaları ve bezleri kabinden, tanklardan ve çatıdan alın.
20. Sökülen koruyucuları, kapakları ve pano kapağını yerine takın.
21. Kapıyı destekleyen dikmeleri kaldırın.
22. Makinenin çevresinde ve kabin içinde kimse kalmadığını kontrol edin.
23. Kilidinizi ve etiketinizi kendiniz sökün; başkasının kilidini sökmeyin.
24. Hava girişindeki hızlı bağlantıyı takın ve hat vanasını açın.
25. Manometrede çalışma basıncını kontrol edin.
26. Ana şalteri I (açık) konumuna çevirin.
27. Kumanda panelindeki **RESET** butonuna basın.
28. Operatör panelinde alarm olmadığını kontrol edin; güvenlik donanımına müdahale edildiyse ilgili güvenlik testini yapın (**Bkz. Bölüm 5.4**).

## 2.4.4 Grup kilitlemesi

Aynı işte birden fazla kişi çalışıyorsa her kişi kendi asma kilidini ana şaltere ve hava vanasına takar; bunun için çoklu kilitleme aparatı (kilitleme makası) kullanılır. Ana şalter ancak son kişi de kilidini söktükten sonra açılabilir. Vardiya değişiminde işi devralan kişi önce kendi kilidini takar, ardından devreden kişi kilidini söker.

## 2.4.5 Kilidi sahibi dışında sökme

Kilit sahibine ulaşılamıyorsa kilit yalnızca işletmenin yazılı prosedürüne göre, amirin onayıyla ve makinenin çevresinde kimse olmadığı doğrulandıktan sonra sökülür. Kilit sahibi işe döndüğünde durumdan haberdar edilir.
