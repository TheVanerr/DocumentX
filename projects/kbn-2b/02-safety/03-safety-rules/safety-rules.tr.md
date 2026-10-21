# 2.3 Güvenlik kuralları

Bu alt bölüm, makinenin kullanımı, temizliği ve bakımı sırasında uygulanması zorunlu kuralları ve prosedürleri tanımlar. Bir kuralın uygulanamadığı durumda makineyi durdurun ve güvenli koşullar sağlanana kadar çalıştırmayın.

---

## 2.3.1 Genel çalışma kuralları

- Makineyi yalnızca tüm koruyucu paneller takılı, kapak emniyet şalteri, ışık perdesi ve acil durdurma butonu çalışır durumdayken kullanın.
- Her vardiya başında acil durdurma butonunu, kapak emniyet şalterini ve ışık perdesini test edin (**Bkz. Bölüm 7.2**).
- Kapağı yalnızca program tamamlanıp pompalar, döndürme ve kurutma tamamen durduktan sonra açın.
- Kapağı açarken yüzünüzü ve gövdenizi kapak hizasından uzak tutun; kabinden çıkan buharın dağılmasını bekleyin.
- Kapağı kapatmadan önce kabinde ve kapak hareket alanında kimsenin elinin veya yabancı bir cismin bulunmadığını kontrol edin.
- Açık kapağın altına girmeyin. Basınçlı hava kesildiğinde açık kapak kendi ağırlığıyla inebilir.
- Sepete, **Bölüm 3.3**'teki maksimum yükleme ağırlığından ve parça yüksekliğinden fazla yük koymayın.
- Sıcak parçaları ısıya dayanıklı eldivenle tutun; ağır parçaları kaldırma ekipmanıyla taşıyın.
- Makinenin, kapağın ve taşıma arabasının üzerine çıkmayın.
- Makine çevresindeki zemini kuru ve temiz tutun; sızıntıları hemen bildirin.
- Arıza fark ettiğinizde makineyi durdurun, arızayı amirinize bildirin ve **Bölüm 11**'e göre işlem yapın.
- Makineyi çalışırken gözetimsiz bırakmayın.
- Tank kapaklarını yalnızca kapakları açık tutan gazlı amortisörlerin çalıştığını kontrol ettikten sonra açık bırakın.

---

## 2.3.2 Acil durdurma ve yeniden başlatma

Acil durdurma butonu, sarı zemin üzerinde kırmızı mantar başlı butondur. Makinede {{KONTROLLER:Acil durdurma butonu sayısı}} adet acil durdurma butonu bulunur; konumu: {{KONTROLLER:Acil durdurma butonu konumu}} (**Bkz. Bölüm 3.4**).

**Acil durdurma butonunu aşağıdaki durumlarda kullanın:**

- Bir kişinin sıkışma, yanma veya elektrik çarpması tehlikesi altında olması.
- Makineden olağandışı çarpma, sürtünme veya kırılma sesi gelmesi.
- Borularda, pompada veya kapakta ani ve büyük bir sıvı sızıntısı olması.
- Elektrik panosundan veya motorlardan duman ya da yanık kokusu gelmesi.

Acil durdurma butonuna basıldığında pompaların, döndürme motorunun, fanların ve ısıtıcı devrelerinin enerjisi kesilir; HMI ekranında acil durdurma alarmı görüntülenir. Acil durdurma butonu, bakım ve onarım için enerji kesme aracı değildir; bakımda **Bölüm 2.3.3**'teki LOTO prosedürünü uygulayın.

**Acil durdurmadan sonra yeniden başlatma**

1. Acil durdurmaya neden olan tehlikenin tamamen ortadan kalktığını kontrol edin.
2. Tehlikenin nedeni bir arızaysa arızayı **Bölüm 11**'e göre giderin veya giderilmesini sağlayın.
3. Acil durdurma butonunu üzerindeki ok yönünde çevirerek serbest bırakın.
4. Kabinde, kapak hareket alanında ve taşıma arabası çevresinde kimsenin bulunmadığını kontrol edin.
5. Acil durdurma alarmını onaylayın: {{KONTROLLER:Alarm onaylama (reset) kumandası}} (**Bkz. Bölüm 3.4.3**).
6. Programı **Bölüm 7.4**'teki adımlarla yeniden başlatın.

**NOT:** Acil durdurma butonu serbest bırakıldığında makine kendiliğinden çalışmaya başlamaz; alarm onaylanıp program yeniden başlatılmadıkça hiçbir hareket olmaz.

---

## 2.3.3 Tehlikeli enerji kontrolü — LOTO

Bakım, onarım, arıza giderme, nozul ve filtre temizliği gibi kabin içine, tahrik bölgesine veya elektrik panosuna erişim gerektiren tüm işlerden önce bu prosedürü uygulayın. Prosedürün amacı, çalışma sırasında makinenin başka biri tarafından çalıştırılmasını ve depolanmış enerjinin aniden boşalmasını önlemektir.

Makinedeki tehlikeli enerji kaynakları şunlardır:

- **Elektrik enerjisi:** 380 V besleme, motorlar, ısıtıcılar, kumanda devresi.
- **Isıl enerji:** 85 °C'ye kadar sıcak yıkama ve durulama sıvıları, tank ısıtıcıları, kurutma ısıtıcısı ve hava borusu, kabin ve tank yüzeyleri.
- **Pnömatik enerji:** Basınçlı hava hattı, kapak silindirleri, tank ünitesinin üstündeki pnömatik silindirler ve valfler.
- **Hidrolik enerji:** Pompa çıkış hatlarında ve filtre gövdelerinde kalan basınç.
- **Yerçekimi:** Açık konumdaki kapak, açık tank kapakları, kaldırılmış parçalar.
- **Kimyasal enerji:** Tanklardaki yıkama ve durulama sıvıları ve kimyasal kalıntıları.

**UYARI — Elektrik çarpması:** Ana şalter kapalıyken de ana şalterin giriş klemensleri gerilim altındadır. Ana şalterin besleme tarafında yapılacak işler için tesis tarafındaki besleme sigortasını kapatın ve kilitleyin.

**Enerjiyi kesme ve kilitleme**

1. Çalışılacak işi ve etkilenecek personeli belirleyin; makine operatörünü bilgilendirin.
2. Çalışan programı durdurun ve döndürme hareketinin ve fanların tamamen durmasını bekleyin.
3. Kapağı tam açık veya tam kapalı konuma getirin. Kapak açık kalacaksa düşmeye karşı mekanik olarak destekleyin.
4. **Ana şalterin** döner kolunu "0" konumuna çevirin.
5. Ana şalterin koluna kişisel asma kilidinizi takın ve üzerine adınızın ve "BAKIM VAR — ÇALIŞTIRMAYIN" ifadesinin yazılı olduğu etiketi asın. Birden fazla kişi çalışıyorsa her kişi kendi kilidini takar.
6. Tesis hava hortumunu makinenin hava girişindeki hızlı bağlantı rakorundan ayırın ve hortumun ucuna "BAKIM VAR — BAĞLAMAYIN" etiketi asın. Pnömatik devrede çalışılacaksa silindirlerde ve hortumlarda kalan basıncın boşaldığını kontrol edin.
7. Filtre gövdeleri üzerinde çalışılacaksa gövdedeki basıncı **Bölüm 9.1.4**'e göre boşaltın.
8. Tank ünitesinde, ısıtıcıların veya kurutma ünitesinin bulunduğu bölgede çalışılacaksa sıvıların ve ısıtıcıların 40 °C'nin altına soğumasını bekleyin.

**Enerjisizliğin doğrulanması**

9. HMI'dan programı başlatmayı deneyin; makinenin hiçbir tepki vermediğini doğrulayın.
10. Elektrik panosunda çalışılacaksa yetkili elektrik personeli, gerilim test cihazıyla tüm fazlarda gerilim olmadığını ölçerek doğrulasın.

**Makineyi yeniden enerjilendirme**

11. İş tamamlandığında tüm aletleri ve malzemeleri makineden ve kabinden alın.
12. Sökülen tüm koruyucu panelleri ve kapakları yerine takın.
13. Çalışma alanındaki tüm personeli bilgilendirin ve makineden uzaklaştırın.
14. Kilitleri, kilidi takan kişiler kendi kilitlerini çıkaracak şekilde sökün; etiketleri kaldırın.
15. Tesis hava hortumunu makinenin hava girişine yeniden takın.
16. **Ana şalterin** kolunu "I" konumuna çevirin ve güvenlik donanımlarını **Bölüm 5.4**'e göre test edin.

---

## 2.3.4 Elektrik güvenliği

- Elektrik panosu, motor ve ısıtıcı bağlantı kutularının kapaklarını makine çalışırken kapalı tutun.
- Elektrik panosunda yalnızca yetkili elektrik personeli, LOTO uygulandıktan sonra çalışabilir.
- Elektrik panosuna, kumanda paneline (HMI), kablo girişlerine, motorlara ve valf bobinlerine su veya yıkama sıvısı püskürtmeyin. Makinenin dış yüzeyini basınçlı su ile yıkamayın.
- Hasarlı kablo, fiş veya bağlantı fark ettiğinizde makineyi çalıştırmayın ve elektrik personeline bildirin.
- Topraklama hattının sürekliliğini ve yalıtım direncini yılda en az bir kez ölçtürün ve kayıt altına alın (**Bkz. Bölüm 9**). Topraklaması hasarlı makineyi çalıştırmayın.
- Sigortaları ve motor koruma şalterlerini daha yüksek değerdekilerle değiştirmeyin.

---

## 2.3.5 Kimyasal güvenlik

- Yalnızca **Bölüm 3.2.3**'teki koşulları sağlayan yıkama kimyasallarını kullanın.
- Kimyasalı kullanmadan önce güvenlik bilgi formunu (GBF) okuyun; GBF'deki KKD ve ilk yardım talimatlarına uyun.
- Kimyasalı tanka eklerken **Bölüm 2.2.6**'daki KKD'yi kullanın; kimyasalı yavaşça ve sıçratmadan ekleyin.
- Yıkama kimyasalını yalnızca yıkama tankına (1. tank) ekleyin. Durulama tankına (2. tank) yalnızca kimyasal tedarikçisinin durulama için önerdiği katkı maddesini ekleyin.
- Farklı kimyasalları birbirine veya tanka birlikte karıştırmayın. Kimyasal değiştirilecekse tankı önce boşaltın ve temizleyin (**Bkz. Bölüm 10.1**).
- Kimyasalları orijinal, etiketli kaplarında ve makineden uzakta saklayın.
- Kimyasal göze kaçarsa gözü en az 15 dakika bol suyla yıkayın ve hemen tıbbi yardım alın. Cilde temas ederse bölgeyi bol suyla yıkayın.
- Kimyasal sızıntısını GBF'deki talimata göre emici malzemeyle toplayın; kanalizasyona akıtmayın.

---

## 2.3.6 Kurutma ünitesi güvenliği

Kurutma ünitesi, makinenin tavanındaki kurutma fanı ile hava ısıtıcısından ve havayı kabine ileten borudan oluşur. Kurutma sırasında fan, ısıtılmış havayı kabine basar; hava borusu ve ısıtıcı yüzeyleri çok ısınır.

**UYARI — Sıcak yüzey:** Kurutma hava borusu ve hava ısıtıcısı çalışma sırasında ve kurutma bittikten sonra bir süre yanığa yol açacak sıcaklıktadır. Kurutma ünitesine makine soğumadan dokunmayın.

- Kurutma fanının hava girişini ve hava borusunu kapatmayın, üzerine malzeme koymayın. Hava akışı engellenirse ısıtıcı aşırı ısınır.
- Kurutma ünitesinin koruyucu kapaklarını ve fan muhafazasını çalışma sırasında sökmeyin.
- Kurutma ünitesinde bakım yapmadan önce **Bölüm 2.3.3**'teki LOTO prosedürünü uygulayın ve ünitenin soğumasını bekleyin.
- Kurutulan parçalar programın sonunda sıcaktır; parçaları ısıya dayanıklı eldivenle tutun.

---

## 2.3.7 Güvenlik donanımlarını devre dışı bırakma yasağı

Makinedeki güvenlik donanımları (**Bkz. Bölüm 2.2.3**) birlikte çalışan bir koruma sistemi oluşturur. Bu donanımların:

- sökülmesi,
- köprülenmesi veya bantla, mıknatısla, ek parçayla sürekli "kapalı" konumda tutulması,
- elektrik panosu içinde kısa devre edilmesi veya PLC programında devre dışı bırakılması,
- ayar değerlerinin üreticinin onayı olmadan değiştirilmesi

kesinlikle yasaktır. Bir güvenlik donanımı arızalıysa makineyi çalıştırmayın; arızayı yetkili bakım personeline veya üretici servisine giderttirin.

**TEHLİKE — Devre dışı bırakılmış güvenlik donanımı:** Kapak emniyet şalteri, ışık perdesi, seviye şalterleri veya emniyet termostatları devre dışı bırakılırsa kapağın altında sıkışma, sıcak sıvı püskürmesi, dönen parçalara kapılma, aşırı ısınma ve yangın sonucunda ölüm veya ağır yaralanma meydana gelebilir. Güvenlik donanımlarını hiçbir koşulda devre dışı bırakmayın.
