# 6.5 Reçete ve proses ayarları

## 6.5.1 Ayar parametreleri

Yıkama, durulama ve kurutma sıcaklıkları ile süreleri reçetelerde saklanır. Reçeteler operatör panelinin hafızasındadır; panelde {{KAPASITE_PROSES:Reçete sayısı}} reçete yeri vardır ve her reçeteye en fazla 20 karakterlik bir ad verilebilir. Egzoz, drenaj ve yağ sıyırıcı ayarları ile geçiş süresi reçeteye bağlı değildir; tüm reçeteler için aynıdır ve girildiği anda geçerli olur.

{{TABLO:RECETE_PARAMETRELERI}}

Reçete değeri değiştirildiğinde reçeteye hemen kaydedilir, ancak makinede geçerli olması için **Reçete Onay**'a basılmalıdır. Çalışma Sayfası'ndaki **Sıcaklık Set Değeri** göstergeleri ve (faz çalışmıyorken) **Kalan Süre** göstergeleri makinede o an geçerli değerleri gösterir; değerler beklenenden farklıysa **Reçete Onay** yapılmamıştır.

## 6.5.2 Reçete seçme ve makineye gönderme

1. Makinenin çevrimde olmadığını kontrol edin (kule lambası sarı).
2. Çalışma Sayfası'nın üstündeki **<** ve **>** oklarıyla istenen reçeteyi seçin; reçetenin adı ortadaki kutuda görünür.
3. **Reçete Onay**'a basın.
4. YIKAMA, DURULAMA ve KURUTMA panellerindeki **Sıcaklık Set Değeri** ve **Kalan Süre** göstergelerinin reçete değerlerini gösterdiğini kontrol edin.

**NOT:** Oklarla reçete değiştirmek tek başına makinedeki değerleri değiştirmez; her reçete değişikliğinden sonra **Reçete Onay**'a basın. **Reçete Onay** çevrim sırasında yapılırsa yeni değerler çalışan çevrime de hemen uygulanır.

## 6.5.3 Reçete düzenleme

1. Makinenin çevrimde olmadığını kontrol edin.
2. Menüden Ayar Sayfası'nı açın.
3. **<** ve **>** oklarıyla düzenlenecek reçeteyi seçin.
4. Reçetenin adını değiştirmek için isim kutusuna dokunun, yeni adı yazın ve onaylayın.
5. Değiştirilecek sıcaklık veya sürenin değerine dokunun.
6. Açılan tuş takımıyla yeni değeri girin ve onaylayın.
7. Diğer değerler için 5. ve 6. adımları tekrarlayın.
8. **Reçete Onay**'a basın.
9. Çalışma Sayfası'nda yeni değerlerin göründüğünü kontrol edin.
10. Yeni değerleri reçete kayıt formuna yazın (**Bkz. Bölüm 14.1**).

## 6.5.4 Reçeteden bağımsız ayarlar

**Egzoz, drenaj süresi ve yağ sıyırıcı**

1. Ayar Sayfası'nı açın.
2. EGZOZ bölümündeki **Çalışma Süresi** ve **Bekleme Süresi** değerlerine dokunarak yeni değerleri girin.
3. DRENAJ bölümündeki **Drenaj Süresi(Sn)** değerine dokunarak yeni değeri girin.
4. YAĞ SIYIRICI bölümündeki **Çalışma Süresi** ve **Bekleme Süresi** değerlerine dokunarak yeni değerleri girin.
5. Yağ sıyırıcıyı çalıştırmak için **YAĞ SIYIRICI** anahtarını Aktif (yeşil), durdurmak için Pasif (gri) yapın.

Bu ayarlar girildiği anda geçerli olur; **Reçete Onay** gerekmez.

**Geçiş süresi**

6. Menüden Kurulum Sayfası'nı açın ve yetkili kullanıcı şifresini girin.
7. **Geçiş Süresi** kutusuna dokunun ve yeni süreyi saniye olarak girin.

Geçiş süresi yıkamadan sonra ve durulamadan sonra parçaların süzülmesi için beklenen süredir; tüm reçeteler için aynıdır.

## 6.5.5 Ayar değerlerinin seçimi

Reçete değerleri, yıkanan parçaya, kirlilik türüne ve kullanılan kimyasala göre deneme çevrimleriyle belirlenir (**Bkz. Bölüm 8.2.1**). Aşağıdaki ilkeleri uygulayın:

- **Yıkama sıcaklığı:** Kimyasal tedarikçisinin önerdiği sıcaklığı, makinenin ayar sınırı ({{RECETE_PARAMETRELERI:P01 Yıkama sıcaklık set değeri#3}} °C) içinde kullanın. Yağlı kirlerde sıcaklık yağın akışkanlığını artırarak temizliği hızlandırır.
- **Yıkama süresi:** Süre yalnızca pompa çalışırken sayılır. Parçalar temiz çıkmıyorsa önce parça yerleşimini (**Bkz. Bölüm 8.2.3**), sonra süreyi değiştirin.
- **Durulama:** Durulama sıcaklığını kurutmayı kolaylaştıracak kadar yüksek, kimyasal kalıntısı bırakmayacak kadar uzun süreli seçin.
- **Kurutma sıcaklığı:** Parça malzemesinin ve üzerindeki plastik, conta veya etiketlerin dayanabileceği sıcaklığın altında kalın; ayar sınırı {{RECETE_PARAMETRELERI:P05 Kurutma sıcaklık set değeri#3}} °C'dir.
- **Kurutma süresi ve egzoz:** Cepli ve kör delikli parçalar daha uzun kurutma ister. Egzoz çalışma ve bekleme süreleri kabindeki nemli havanın dışarı atılmasını belirler; egzoz hiç çalışmazsa nem kabinde kalır.
- **Geçiş süresi:** Parçalar üzerinde sıvı birikiyorsa ve sıvı bir sonraki tanka taşınıyorsa geçiş süresini artırın.
- **Faz seçimi:** Yalnızca durulama veya yalnızca kurutma gereken işlerde diğer fazları Pasif seçin.

Teslimde tanımlı reçete: {{OZEL_KURULUM:Reçete no listesi}}.
