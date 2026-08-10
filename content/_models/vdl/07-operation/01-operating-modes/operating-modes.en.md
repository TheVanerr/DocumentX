<!-- ÇEVİRİ GEREKLİ → EN | kaynak: TR | bu satırı çeviri bitince silin. Başlık/görsel/tablo yapısını koruyun, yalnızca metni çevirin. -->

# 7.1 Çalışma Modları

VDL serisi endüstriyel yıkama makineleri, farklı üretim tesislerinin dinamiklerine ve operatör alışkanlıklarına uyum sağlayabilmek adına, karmaşadan uzak ve doğrudan kontrol prensibine (manuel döngü) dayalı bir altyapı ile tasarlanmıştır. Donanım konfigürasyonuna bağlı olarak operatör arayüzü görsel farklılıklar gösterse de, makinenin kalbinde yatan "anlık aç/kapa" işletim mantığı her iki versiyonda da ortaktır.

## 7.1.1 Standart Elektromekanik Kontrol Paneli
Makinenin standart versiyonunda, tüm operasyonel komutlar doğrudan kontrol panosu üzerinde yer alan fiziksel butonlar, pako şalterler ve sinyal lambaları üzerinden yürütülür. Makinenin sahip olduğu tank sayısına (1 banyolu veya 2 banyolu modeller) bağlı olarak pano üzerindeki buton sayısı ve etiketlendirmeler değişiklik gösterir.

* **Doğrudan Müdahale:** Isıtma sisteminin devreye alınması, yıkama pompalarının çalıştırılması veya durdurulması gibi temel işlemler ilgili fiziksel butona (Start / Stop) basılarak anında gerçekleştirilir.
* **Görsel Bildirim:** Her fonksiyon, aktif olduğunda panel üzerindeki ilgili sinyal lambası (genellikle yeşil) ile operatöre donanımın çalıştığını bildirir.
* **Bağımsız Çalışma:** Fonksiyonlar birbirinden bağımsız olarak manuel yönetilir. Önceden tanımlanmış bir zamanlayıcıya veya ardışık döngüye bağlı kalmaksızın, operatör süreci yüklenen parçanın kirlilik durumuna göre kendi inisiyatifiyle başlatır ve sonlandırır.
* **Model Bazlı Etiketlendirme:** 1 banyolu modellerde tek bir sisteme ait kontroller yer alırken, 2 banyolu modellerde her bir tankın (Örn: Tank 1, Tank 2) ısıtıcı ve pompa butonları panele ayrı ayrı konumlandırılmış ve etiketlenmiştir.

![VDL 1B Pano Operasyonu](../assets/vdl/7/7-1-1-1-pano.png)

## 7.1.2 Opsiyonel PLC / HMI Dokunmatik Ekran Kontrolü
Müşteri talebine istinaden makinenin PLC (Programlanabilir Lojik Kontrolör) altyapısı ile donatıldığı durumlarda, geleneksel elektromekanik butonların yerini yüksek çözünürlüklü dokunmatik HMI (İnsan-Makine Arayüzü) ekranı alır. Ancak bu teknolojik yükseltme, makinenin temel çalışma felsefesini değiştirmez.

* **Sanal Buton Mantığı:** Ekran arayüzü, karmaşık menüler arasında kaybolmayı önleyecek şekilde tasarlanmıştır. Fiziksel kontrol panelindeki butonların birebir karşılığı olan sanal butonlar HMI ana ekranında yer alır.
* **Anlık Geri Bildirim:** Operatör ekrandaki ilgili fonksiyona dokunduğunda işlem aktifleşir ve sanal butonun rengi değişerek (örneğin griden yeşile dönerek) veya yanıp sönerek komutun alındığını teyit eder. Tekrar basıldığında ise fonksiyon devre dışı kalır.
* **Kolay İzlenebilirlik:** Manuel kontrol esnekliğinin yanı sıra; yıkama tankı sıcaklık değerleri (Set ve Gerçekleşen), motor termik arızaları, kapı kilit durumları veya Acil Stop alarmları aynı ekran üzerinden sayısal ve metin bazlı olarak anlık olarak takip edilebilir.

> **📸 Görsel Önerisi:** *PLC/HMI ekranının "Ana Çalışma Sayfasının" (Main Screen) doğrudan sistemden alınmış temiz bir ekran görüntüsünü (screenshot) veya parlamasız bir fotoğrafını ekleyin. Ekranda bir butonun aktif (yeşil), diğerinin pasif (gri) olduğu bir anı gösterirseniz operatör, sistemin nasıl tepki verdiğini daha rahat anlar.*

**Özetle:** 
Her iki kontrol arayüzünde de VDL serisi, operatöre tam bağımsızlık sunan manuel döngü prensibiyle çalışır. Karmaşık kapalı çevrim senaryoları veya zorunlu zamanlanmış otomatik programlar yerine; güvenlik şartları (kapalı kapılar, aktif donanımsal reset) sağlandığı sürece hangi sistemin ne zaman ve ne kadar süreyle çalışacağına tamamen operatör karar verir.