# 3.1 Makine tanımı

## 3.1.1 Genel tanım

{{PROJE:Makine model kodu}}, kabin tipi, dönen sepetli, püskürtmeli bir endüstriyel parça yıkama makinesidir. {{GIRIS_GENEL:Makine tipi kısa tanım (1-2 cümle)}}

Makine iki ana birimden oluşur:

- **Kabin ünitesi:** Önde dikey hareketli kabin kapısı, içinde dönen sepet ve püskürtme boruları, altında proses pompası ve pnömatik valf grubu, çatısında kurutma fanı, kurutma ısıtıcısı ve egzoz fanı bulunur. Kapının sağında, ön yüzünde kumanda paneli olan elektrik panosu yer alır.
- **Tank ünitesi:** Kabinin sol yanındadır. Yıkama ve durulama tanklarını, tank ısıtıcılarını, filtreleri, tahliye odasını ve tahliye vanalarını, yağ sıyırıcıyı, drenaj pompasını ve drenaj kolektörünü taşır. Tank ünitesinin iki ucunda torba filtreler, arka ucunda dikey proses pompası bulunur.

Makine, parçaları üç işlem fazında işler: **yıkama**, **durulama** ve **kurutma**. Fazların sırası sabittir; istenmeyen faz operatör panelinden Pasif seçilerek atlanır. Sıcaklıklar ve süreler 7 reçetede saklanır. Çevrim kumanda panelindeki **START** butonuyla başlar ve sepet başlangıç konumunda durduğunda biter. Çevrimin ayrıntılı akışı **Bkz. Bölüm 7.4**.

## 3.1.2 Ana üniteler ve yerleşimleri

![Makinenin önden görünüşü](../../assets/03/on-gorunum.jpg)

Tablo: Önden görünüş — işaretlerin açıklaması

| No | Ünite | Görevi |
|---|---|---|
| 1 | Kabin kapısı | Kabini kapatır; pnömatik silindirlerle dikey hareket eder; yalıtımlıdır |
| 2 | Gözetleme penceresi | Çevrim sırasında kabin içinin izlenmesini sağlar |
| 3 | Kumanda paneli | Operatör paneli, **START**, **STOP**, **RESET**, kapı butonları ve acil durdurma butonu (**Bkz. Bölüm 3.4.1**) |
| 4 | Kule lambası | Makinenin durumunu gösterir (**Bkz. Bölüm 3.4.2**) |
| 5 | Işık perdesi | Kapı açıklığında el ve cisim algılar (el koruma sensörü) |
| 6 | Kapı silindiri | Kabin kapısını kaldırıp indirir (iki yanda birer adet) |
| 7 | Kurutma fanı (çatı) | Kurutma fazında ısıtılmış havayı kabine basar |
| 8 | Torba filtre (ön) | Proses pompasının bastığı sıvıyı süzer |
| 9 | Tank ünitesi | Yıkama ve durulama tankları |
| 10 | Proses pompası (kabin altı) | Tanktaki sıcak sıvıyı püskürtme borularına basar |
| 11 | Pnömatik valf grubu (kabin altı) | Kapı silindirlerinin valfi ve hava bağlantıları |
| 12 | Ayarlanabilir ayak | Makineyi terazide tutar |

![Kabin kapısı açık — önden görünüş](../../assets/03/on-gorunum-kapi-acik.jpg)

Tablo: Kapı açık önden görünüş — işaretlerin açıklaması

| No | Ünite | Görevi |
|---|---|---|
| 1 | Kabin kapısı (açık konumda) | Yükleme ve boşaltma için yukarı kalkar |
| 2 | Gözetleme penceresi | Kapı üzerinde |
| 3 | Kabin (yıkama hücresi) | Yıkama, durulama ve kurutmanın yapıldığı paslanmaz çelik hücre |
| 4 | Dönen sepet | Parçaları taşır ve çevrim boyunca döner |
| 5 | Yataklama tekeri | Sepeti alttan taşır |
| 6 | Işık perdesi | Kapı açıklığının iki yanında |
| 7 | Kapı silindiri | Kapı açıklığının yanında, dikey |
| 8 | Kumanda paneli | Elektrik panosunun ön yüzünde |
| 9 | Kule lambası | Elektrik panosunun üstünde |
| 10 | Elektrik panosu | Kapağı sağ yana açılır; yalnızca yetkili elektrikçi açar |

![Makinenin sol yandan (tank ünitesi tarafı) görünüşü](../../assets/03/sol-yan-gorunum.jpg)

Tablo: Sol yan görünüş — işaretlerin açıklaması

| No | Ünite | Görevi |
|---|---|---|
| 1 | Kurutma fanı ve ısıtıcı kutusu (çatı) | Kurutma havasını ısıtıp kabine basar |
| 2 | Egzoz fanı ve bacası (çatı) | Kurutma sırasında kabindeki nemli havayı dışarı atar |
| 3 | Pnömatik valf kutusu | Tahliye vanalarının valfleri; kilitli tutulur |
| 4 | Tahliye odası | Kabinden dönen sıvıyı tahliye vanalarıyla ilgili tanka yönlendirir |
| 5 | Tank ünitesi | Yıkama ve durulama tankları |
| 6 | Dikey proses pompası | Tank ünitesinin arka ucunda; sıvıyı torba filtre üzerinden kabine basar |
| 7 | Torba filtreler | Proses pompalarının basma hatlarında |
| 8 | Yağ sıyırıcı | Tank sıvısının yüzeyindeki yağı alır |
| 9 | Drenaj pompası | Tankları drenaj kolektörü üzerinden boşaltır |
| 10 | Drenaj kolektörü ve vanaları | Tankların altındaki drenaj hattı |

![Tank ünitesi](../../assets/03/tank-unitesi.jpg)

Tablo: Tank ünitesi — işaretlerin açıklaması

| No | Ünite | Görevi |
|---|---|---|
| 1 | Yıkama tankı kapağı (no. {{TANKLAR:Yıkama tankı kapak numarası}}) | Tanka ve ön filtre sepetlerine erişim |
| 2 | Durulama tankı kapağı (no. {{TANKLAR:Durulama tankı kapak numarası}}) | Tanka ve ön filtre sepetlerine erişim |
| 3 | Kapak amortisörü | Açık kapağı tutar |
| 4 | Tahliye odası | Cıvatalı kapaklı paslanmaz çelik oda |
| 5 | Tahliye vanası silindirleri | Tahliye vanalarını açıp kapatan pnömatik silindirler |
| 6 | Taşma hattı çıkışı | "TAŞMA HATTI" etiketli; her tankta bir adet |
| 7 | Tank drenaj vanaları | "DRENAJ" etiketli; her tankın altında bir adet |
| 8 | Drenaj kolektörü | İki tankın drenaj vanalarını birleştirir |
| 9 | Drenaj pompası | Kolektördeki sıvıyı basar |
| 10 | Kolektör boşaltma vanası | Kolektörün ucundaki elle kumandalı vana |
| 11 | Torba filtreler | Tank ünitesinin iki ucunda |
| 12 | Dikey proses pompası | Tank ünitesinin arka ucunda |

![Tank kapakları açık](../../assets/03/tanklar-acik.jpg)

Tablo: Tank kapakları açık — işaretlerin açıklaması

| No | Ünite | Görevi |
|---|---|---|
| 1 | Yıkama tankı | Yıkama sıvısı |
| 2 | Durulama tankı | Durulama sıvısı |
| 3 | Ön filtre sepeti yuvaları | Kabinden dönen sıvıdaki talaşı tutar |
| 4 | Tank kapağı (açık) | Amortisörle açık tutulur |
| 5 | Yağ sıyırıcı | Disk tipi yağ sıyırıcı ve tahrik motoru (kapalı muhafaza içinde) |
| 6 | Drenaj pompası | Kolektörden emer |
| 7 | Drenaj pompası basma borusu | Atık sıvının atık hattına basıldığı boru |
| 8 | Tank drenaj vanaları | Her tankın altında |
| 9 | Drenaj kolektörü | Ortak drenaj borusu |
| 10 | Kolektör boşaltma vanası | Kolektörün ucunda |
| 11 | Taşma hattı çıkışı | Tankın ön yüzünde |
| 12 | Torba filtre | Tank ünitesinin ucunda |

![Çatıdaki kurutma ve egzoz grubu](../../assets/03/cati.jpg)

Tablo: Çatı — işaretlerin açıklaması

| No | Ünite | Görevi |
|---|---|---|
| 1 | Kurutma fanı | Salyangozlu fan; havayı ısıtıcı kutusuna basar |
| 2 | Kurutma ısıtıcısı kutusu | Kurutma ısıtıcısını içerir |
| 3 | Sıcak hava kanalı | Isıtılmış havayı kabine indirir |
| 4 | Egzoz fanı | Kabindeki nemli havayı emer |
| 5 | Egzoz bacası | Egzoz havasının çıkışı; işletmenin dış ortam kanalına bağlanır |
| 6 | Pnömatik valf kutusu | Tahliye vanası valfleri |

## 3.1.3 Kabin, kapı ve dönen sepet

Kabin, AISI 316L paslanmaz çelikten yapılmış, yalıtımlı bir yıkama hücresidir. Kabinin tavanında ve sepetin altında, üzerinde püskürtme memeleri bulunan paslanmaz çelik püskürtme boruları vardır; pompa, tanktaki sıcak sıvıyı bu borular üzerinden dönen sepetteki parçalara basar. Kabin tavanında, sıcak hava kanalının ağzı ve kabin lambası bulunur. Kabin tabanından toplanan sıvı tahliye odasına akar.

![Kabin tavanındaki püskürtme boruları ve sıcak hava kanalı](../../assets/03/puskurtme-borulari.jpg)

![Kabin lambası](../../assets/03/kabin-lambasi.jpg)

**Kabin kapısı** pnömatik silindirlerle dikey hareket eder; kapı açıldığında yukarı kalkar. Kapıda bir gözetleme penceresi bulunur. Kapı, kumanda panelindeki **KAPI AÇIK** ve **KAPI KAPALI** butonlarıyla kumanda edilir. Kapının tam kapandığını kapı kapalı sviçi algılar; kapı kapalı değilse çevrim başlamaz. Kapı açıklığının iki yanındaki ışık perdesi, kapı kapanırken açıklıktaki eli veya cismi algılar. Kapı silindirlerinin hava hatlarındaki pilotlu çek valfler, hava kesildiğinde kapıyı bulunduğu konumda tutar. Kapı, UHMW polietilen kızaklar üzerinde kayar; kapı kenarında sızdırmazlık fitili vardır.

**Dönen sepet** iki parçadan oluşur:

- **Alt sepet:** Kabin içinde kalan, dişli halkalı (kremayer) dönen paslanmaz çelik çerçevedir. Kabin tabanındaki POM (delrin) yataklama tekerleri üzerinde döner ve merkezdeki sepet göbeği etrafında merkezlenir.
- **Üst sepet (parça ızgarası):** Parçaların yerleştirildiği yuvarlak ızgaradır. Yükleme arabası ile kabine alınır ve alt sepetin üzerine oturtulur (**Bkz. Bölüm 7.6.10**).

![Dönen sepet — kabin içi](../../assets/03/sepet-kabin-ici.jpg)

![Alt sepet, kremayer ve yataklama tekerleri](../../assets/03/sepet-halkasi.jpg)

Sepet, kabin dışındaki redüktörlü motorla döndürülür: motor ve sonsuz vida redüktör kabin duvarının dışındadır; redüktör çıkış mili kabin içindeki tahrik pinyonunu döndürür, pinyon alt sepetin kremayerini kavrar. Motorun hızı elektrik panosundaki frekans invertörüyle ayarlanır: çevrimde normal hız, sepet konumlamada ve **Sepet Test**'te yavaş hız kullanılır.

![Sepet tahrik motoru ve redüktör (kabin dışı)](../../assets/03/sepet-reduktoru.jpg)

![Tahrik pinyonu ve kremayer](../../assets/03/pinyon-kremayer.jpg)

Sepetin başlangıç konumunu kabin içindeki sepet konum sensörü algılar (operatör panelinde **Redüktör Pozisyon Sw**). Çevrim sonunda ve **Sepet Test** sırasında sepet bu konumda durur.

![Sepet konum sensörü düzeneği ve pinyon mili destek yatağı](../../assets/03/sepet-konum-sensoru.jpg)

![Yataklama tekeri (POM)](../../assets/03/delrin-teker.jpg)

![Sepet göbeği](../../assets/03/sepet-gobegi.jpg)

**Yükleme arabası**, üst sepetin (parça ızgarasının) kabine taşınması ve kabinden alınması için kullanılan tekerlekli arabadır. Araba, üzerindeki kollu kilitle makine gövdesine kilitlenir; sepet aktarımı yalnızca araba kilitliyken yapılır.

![Yükleme arabası ve üst sepet](../../assets/03/yukleme-arabasi.jpg)

![Yükleme arabasının kilit kolu](../../assets/03/araba-kilidi.jpg)

## 3.1.4 Tank ünitesi

Tank ünitesinde iki tank vardır: yıkama tankı (kapak no. {{TANKLAR:Yıkama tankı kapak numarası}}) ve durulama tankı (kapak no. {{TANKLAR:Durulama tankı kapak numarası}}). Tank malzemesi: {{TANKLAR:Tank malzemesi}}; yalıtım: {{TANKLAR:Tank yalıtımı}}. Tanklar makine tarafından otomatik doldurulmaz; sıvı tank kapaklarından elle doldurulur ve tamamlanır.

Her tankta şu elemanlar bulunur:

- **Isıtıcılar:** Tank sıvısını reçetedeki sıcaklık set değerine ısıtır (**Bkz. Bölüm 3.3.6**).
- **Ön filtre sepetleri:** Kabinden dönen sıvıdaki talaşı ve kiri tanka girmeden tutan 16 mesh paslanmaz elekli sepetler; tank kapağı açılarak çıkarılır.
- **Ayırıcılar (separatör):** Tank içinde sıvı akışını yönlendiren ve çökeltinin pompa emişine ulaşmasını azaltan saclar.
- **Emiş filtresi:** Pompa emiş ağzındaki delikli paslanmaz filtre.
- **Seviye sensörü:** Sıvının pompa emiş seviyesinin üzerinde olup olmadığını algılar; seviye düşükse o tankın pompası ve ısıtıcısı çalışmaz.
- **Termokupl:** Tank sıvısının sıcaklığını ölçer; değer operatör panelinde **Anlık Sıcaklık** olarak görünür.
- **Tank çıkış vanası:** Tankla pompa emiş hattı arasındaki 2" küresel vana.
- **Taşma hattı:** Tankın aşırı dolmasında fazla sıvıyı tahliye eder.
- **Drenaj vanası:** Tankın altında, drenaj kolektörüne açılan küresel vana.

![Tank içi — ısıtıcılar](../../assets/03/tank-ici-isiticilar.jpg)

![Ön filtre sepetleri](../../assets/03/on-filtre-sepetleri.jpg)

![Ön filtre sepeti yerinde](../../assets/03/on-filtre-yerinde.jpg)

![Tank çıkış vanası ve seviye sensörü](../../assets/03/emis-vanasi-seviye-sensoru.jpg)

## 3.1.5 Proses pompaları ve torba filtreler

Yıkama ve durulama fazlarında sıvıyı püskürtme borularına basan iki proses pompası vardır: kabin altındaki yatay santrifüj pompa ve tank ünitesinin arka ucundaki dikey çok kademeli pompa. Her pompa yalnızca kendi fazında, tahliye vanaları doğru konumdayken ve tankında sıvı pompa seviyesinin üzerindeyken çalışır. Pompaların basma hatlarında, sıvıdaki ince parçacıkları tutan torba filtreler bulunur. Torba filtre gövdelerinin altında boşaltma vanası, üstünde mapalı kapak vardır. Pompaların etiket değerleri **Bkz. Bölüm 3.3.5**.

![Kabin altındaki yatay proses pompası](../../assets/03/yatay-pompa.jpg)

![Yatay proses pompasının etiketi](../../assets/03/yatay-pompa-etiketi.jpg)

![Dikey proses pompası](../../assets/03/dikey-pompa.jpg)

![Torba filtre](../../assets/03/torba-filtre.jpg)

![Torba filtre kapağı](../../assets/03/torba-filtre-kapagi.jpg)

## 3.1.6 Tahliye odası ve tahliye vanaları

Kabinden dönen sıvı, tank ünitesinin üzerindeki tahliye odasına akar. Tahliye odasında iki pnömatik tahliye vanası vardır: **yıkama tahliye vanası** ve **durulama tahliye vanası**. Yıkama fazında yıkama tahliye vanası açılır, durulama tahliye vanası kapanır; dönen sıvı yıkama tankına gider. Durulama fazında tersi olur. Böylece iki tankın sıvıları birbirine karışmaz.

Her vana, cıvatalı kapağın üzerindeki bir pnömatik silindirle açılıp kapanır; sızdırmazlığı piston lastiği sağlar. Her silindirde açık ve kapalı konumu algılayan iki manyetik sensör vardır. Vana 10 saniye içinde istenen konuma gelmezse operatör panelinde vana alarmı çıkar (**Bkz. Bölüm 11.4.2**). Pompa, iki vana da doğru konumdayken çalışır.

![Tahliye odası ve tahliye vanası silindirleri](../../assets/03/tahliye-odasi.jpg)

Tahliye vanalarının valfleri, kabinin sol duvarındaki kilitli pnömatik valf kutusundadır.

![Pnömatik valf kutusu](../../assets/03/valf-kutusu.jpg)

## 3.1.7 Yağ sıyırıcı ve drenaj sistemi

**Yağ sıyırıcı**, tank sıvısının yüzeyinde toplanan yağı alan disk tipi bir düzenektir. Redüktörlü motorla dönen disk sıvı yüzeyinden geçerken yağı tutar; sıyırıcı saclar yağı diskten ayırır ve yağ toplama oluğundan yağ çıkışına aktarır. Yağ sıyırıcı, tank ünitesinin arka ucundaki paslanmaz muhafazanın içindedir. Operatör panelinden açıldığında çevrimden bağımsız olarak, ayarlanan çalışma ve bekleme süreleriyle aralıklı çalışır (**Bkz. Bölüm 7.6.5**).

![Yağ sıyırıcı ve drenaj pompası](../../assets/03/yag-siyirici.jpg)

**Drenaj sistemi** her tankın altındaki drenaj vanasından, iki tankı birleştiren drenaj kolektöründen, kolektör boşaltma vanasından ve drenaj pompasından oluşur. Drenaj pompası operatör panelindeki **Yıkama Drenaj** ve **Durulama Drenaj** butonlarıyla çalıştırılır ve seçilen tankın sıvısı alt seviye sensörünün altına inince **Drenaj Süresi** kadar daha çalışıp durur (**Bkz. Bölüm 7.6.3**).

![Drenaj pompası](../../assets/03/drenaj-pompasi.jpg)

![Tank drenaj vanaları ve kolektör](../../assets/03/drenaj-kolektoru.jpg)

## 3.1.8 Kurutma ve egzoz sistemi

Kurutma fazında çatıdaki **kurutma fanı** havayı **kurutma ısıtıcısı kutusuna** basar; ısıtılan hava sıcak hava kanalıyla kabine iner. Kurutma ısıtıcısı yalnızca fan çalışırken ve hava sıcaklığı **Kurutma Sıcaklık Set Değeri**'nin altındayken çalışır. Kurutma süresi dolunca ısıtıcı kapanır ve fan ısıtıcıyı soğutmak için 60 saniye daha çalışır.

**Egzoz fanı** kabindeki nemli havayı egzoz bacasından dışarı atar; yalnızca kurutma fazında, Ayar Sayfası'ndaki **Çalışma Süresi** ve **Bekleme Süresi** ile aralıklı çalışır.

![Kurutma fanı ve ısıtıcı kutusu](../../assets/03/kurutma-fani-isitici.jpg)

![Kurutma fanı](../../assets/03/kurutma-fani.jpg)

![Egzoz fanı ve bacası](../../assets/03/egzoz-fani.jpg)

## 3.1.9 Pnömatik sistem

Basınçlı hava, makinenin "HAVA GİRİŞİ" etiketli hızlı bağlantısından girer ve filtre regülatörde süzülüp basıncı ayarlanır. Giriş basıncını hava basınç şalteri izler. Hava iki gruba dağıtılır:

- **Kapı grubu:** Kabin altındaki valf grubunda bulunan 5/3 çift bobinli kapı valfi, hız ayarlı dirsekler ve pilotlu çek valfler üzerinden iki kapı silindirini (Ø50 × 1200 mm) besler. Valf orta konumdayken silindir hatları kapanır ve kapı bulunduğu konumda kalır.
- **Tahliye grubu:** Kilitli pnömatik valf kutusundaki iki adet 5/2 çift bobinli valf, tahliye odasındaki iki tahliye vanası silindirini (Ø80 × 100 mm) besler. Çift bobinli valfler son konumlarını korur.

![Filtre regülatör ve hava girişi](../../assets/03/hava-sartlandirici.jpg)

![Kabin altındaki kapı valfi ve hava bağlantıları](../../assets/03/kapi-valfi.jpg)

## 3.1.10 Elektrik ve kumanda sistemi

Makine bir OMRON CP2E PLC ile kumanda edilir. Operatör, kumanda panelindeki 7 inç dokunmatik operatör panelinden reçeteleri seçer, sıcaklıkları ve süreleri izler; çevrimi **START** butonuyla başlatır. Tank ve kurutma sıcaklıkları J tipi termokupllarla ölçülür. Motorlar ve ısıtıcılar kontaktörlerle, sepet motoru frekans invertörüyle sürülür. Acil durdurma devresi bir güvenlik rölesiyle izlenir. Elektrik panosu ve kumanda elemanları **Bkz. Bölüm 3.4**.

![Kabin altı — pompa, valf grubu ve kablo kanalları](../../assets/03/kabin-alti.jpg)
