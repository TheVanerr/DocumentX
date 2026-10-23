# 3.2 Amaçlanan kullanım

## 3.2.1 Amaçlanan kullanım

{{AMACLANAN_KULLANIM:Amaçlanan kullanım alanı}}.

Makinede işlenebilecek parçalar: {{AMACLANAN_KULLANIM:İşlenebilir ürün tipleri}}.

Yıkama sıvısı: {{AMACLANAN_KULLANIM:Kullanılabilir yıkama sıvısı}}.

Amaçlanan kullanım, bu kılavuzdaki tüm talimatlara uyulmasını, Bölüm 9'daki bakımların yapılmasını ve makinenin yalnızca Bölüm 1.1.2'de tanımlanan personel tarafından kullanılmasını kapsar.

## 3.2.2 Kullanım sınırları

Tablo: Kullanım sınırları

| Sınır | Değer |
|---|---|
| Tank sıvısı sıcaklığı (ayar aralığı) | {{RECETE_PARAMETRELERI:P01 Yıkama sıcaklık set değeri#3}} °C |
| Kurutma havası sıcaklığı (ayar aralığı) | {{RECETE_PARAMETRELERI:P05 Kurutma sıcaklık set değeri#3}} °C |
| Azami çalışma sıcaklığı (tip plakası) | {{KAPASITE_PROSES:Azami çalışma sıcaklığı (°C)}} °C |
| Faz süreleri (yıkama, durulama, kurutma) | {{RECETE_PARAMETRELERI:P02 Yıkama süresi#3}} Dk |
| Sepet azami yükü | {{BOYUT_AGIRLIK:Sepet azami yükü (kg)}} kg |
| Sepet nominal çapı | {{BOYUT_AGIRLIK:Sepet nominal çapı (mm)}} mm |
| Elektrik beslemesi | {{ELEKTRIK:Besleme gerilimi (V)}} V, {{ELEKTRIK:Besleme frekansı (Hz)}} Hz, {{ELEKTRIK:Besleme konfigürasyonu (3P+N+PE / vb.)}} |
| Basınçlı hava | {{SIKIŞTIRILMIŞ_HAVA_SU:Basınçlı hava girişi (bar)}} bar; valf çalışma aralığı {{SIKIŞTIRILMIŞ_HAVA_SU:Valf çalışma basıncı aralığı (bar)}} bar |
| Ortam | {{AMACLANAN_KULLANIM:Ortam koşulları (iç mekan / dış mekan)}} |
| Ortam sıcaklığı | {{AMACLANAN_KULLANIM:Ortam sıcaklığı min / max (°C)}} °C |
| Personel | {{AMACLANAN_KULLANIM:Operatör sayısı (min / max)}} |

## 3.2.3 Yıkama sıvısı ve kimyasal seçimi

Makine su bazlı yıkama sıvılarıyla çalışmak üzere tasarlanmıştır. Kimyasal seçiminde şunlara dikkat edin:

- Kimyasalı, tedarikçisinin püskürtmeli parça yıkama makineleri için önerdiği ürünlerden ve düşük köpüklü olarak seçin. Köpük, seviye ölçümünü yanıltır ve pompaların hava emmesine yol açar.
- Kimyasal, makinenin malzemeleriyle uyumlu olmalıdır: {{AMACLANAN_KULLANIM:Malzeme uyumu}}.
- Yıkama sıcaklığını kimyasal tedarikçisinin önerisine göre, makinenin ayar sınırı ({{RECETE_PARAMETRELERI:P01 Yıkama sıcaklık set değeri#3}} °C) içinde seçin.
- Durulama tankında genellikle su veya düşük derişimli koruyucu (pas önleyici) çözelti kullanılır; seçimi kimyasal tedarikçisiyle birlikte yapın.
- {{AMACLANAN_KULLANIM:Yasak sıvılar}}.

## 3.2.4 Öngörülebilir yanlış kullanım

Aşağıdaki kullanımlar yasaktır. Bunlar makinenin amaçlanan kullanımı dışındadır ve yaralanmaya veya hasara yol açabilir.

Tablo: Öngörülebilir yanlış kullanım ve sonuçları

| Yanlış kullanım | Olası sonuç |
|---|---|
| Tanklarda solvent, benzin, tiner veya yanıcı sıvı kullanmak | Yangın, patlama, conta ve plastik parça hasarı |
| Yanıcı sıvıyla ıslanmış parçaları yıkamak | Kurutma sırasında yangın |
| Kapı kapalı sviçini veya ışık perdesini köprülemek | Ezilme, sıcak sıvı ve sıcak hava ile temas |
| Çevrim sırasında kapıyı açmaya çalışmak | Sıcak sıvı ve buhar yanığı, dönen sepete temas |
| Kabine girmek veya sepet dönerken kabine uzanmak | Sıkışma, yanık |
| Sepeti azami yükün üzerinde yüklemek veya yükü dengesiz yerleştirmek | Teker, göbek, pinyon ve redüktör hasarı; sepetin sıkışması |
| Sepetin dışına taşan parçalarla çevrim başlatmak | Parçaların kabin duvarına ve püskürtme borularına çarpması |
| Küçük parçaları sepete gevşek koymak | Parçaların tanklara, filtrelere ve pompaya kaçması |
| Isıya veya suya dayanıksız parçaları yıkamak ya da kurutmak | Parça hasarı |
| Tank sıvısı olmadan pompaları veya ısıtıcıları çalıştırmaya zorlamak | Pompa ve ısıtıcı hasarı, yangın |
| Gıda, ilaç veya tıbbi cihaz parçalarını hijyenik temizlik amacıyla yıkamak | Makine bu amaç için tasarlanmamıştır |
| Makineyi dış ortamda veya donma tehlikesi olan yerde çalıştırmak | Pompa, boru ve tank hasarı; elektrik tehlikesi |
| Makinenin çatısına çıkmak, tank kapaklarına basmak | Düşme, kapak ve sac hasarı |
| Eğitimsiz kişilerin makineyi kullanması | Tüm tehlikeler |

## 3.2.5 Personel ve kurulum yeri gereksinimleri

- Makineyle çalışacak personelin nitelikleri **Bkz. Bölüm 1.1.2**.
- Kurulum yeri: {{AMACLANAN_KULLANIM:Ortam koşulları (iç mekan / dış mekan)}}; zemin ve tesisat gereksinimleri **Bkz. Bölüm 5.1.2**.
- Makinenin çevresinde, kapı önünde yükleme arabasının manevrası ve bakım erişimi için boş alan bırakılır (**Bkz. Bölüm 3.5**).
