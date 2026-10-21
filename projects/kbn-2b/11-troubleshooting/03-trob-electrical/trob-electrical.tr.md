# 11.3 Elektrik arızaları

**UYARI — Elektrik çarpması:** Elektrik panosu içinde 380 V gerilim bulunur. Bu tablodaki işleri yalnızca yetkili elektrik personeli, LOTO uygulandıktan sonra yapar; gerilim altında ölçüm yapılacaksa EN 50110-1'e göre güvenli çalışma yöntemlerini uygular.

Tablo: Elektrik arızaları

| Belirti | Olası neden | Giderme yöntemi |
|---|---|---|
| Pompa motoru alarmı, yıkama veya durulama pompası duruyor | Pompa motorunun koruma şalteri atmış | Atma nedenini (pompa sıkışması, kuru çalışma, faz kaybı, aşırı akım) bulun ve giderin; koruma şalterini kurun ve alarmı onaylayın. |
| | Motor sargısı veya bağlantısı arızalı | Motor sargı direncini ve yalıtımını ölçün; bağlantı klemenslerini kontrol edin. |
| Döndürme motoru alarmı, sepet duruyor | Döndürme motorunun koruma şalteri atmış | Mekanik sıkışma olup olmadığını kontrol edin (**Bkz. Bölüm 11.4**); nedeni giderdikten sonra şalteri kurun ve alarmı onaylayın. |
| | Döndürme motoru veya redüktör arızalı | Motoru ve redüktörü kontrol edin; arızalıysa değiştirin. |
| Pompa çalışıyor ama püskürtme basıncı çok düşük | Besleme faz sırası yanlış, pompa ters dönüyor | Besleme kablosunda iki fazın yerini değiştirin (**Bkz. Bölüm 6.3.1**). |
| Tanklardan biri ısınmıyor | Sıvı seviyesi düşük, seviye şalteri ısıtıcıyı kesiyor (seviye alarmı) | Tankı doldurun (**Bkz. Bölüm 7.2.2**). |
| | Emniyet termostatı açmış | Aşırı ısınmanın nedenini (sıcaklık sensörü, PLC çıkışı, kontaktör) bulun ve giderin; ardından termostatı kurun. |
| | Isıtıcı kontaktörü veya sigortası arızalı | Kontaktörü ve sigortaları kontrol edin. |
| | Isıtıcı elemanı yanmış | Her ısıtıcı elemanının direncini ölçün; kopuk elemanı değiştirin. |
| Sıvı ayar sıcaklığını aşıyor | Sıcaklık sensörü arızalı veya yerinden çıkmış | Sensörü ve bağlantısını kontrol edin (**Bkz. Bölüm 11.6**). |
| | Isıtıcı kontaktörü kontakları yapışmış | Kontaktörü değiştirin. |
| Kurutma yapılmıyor, kabine sıcak hava gelmiyor | Kurutma fanı motorunun koruma şalteri atmış | Fanın serbest döndüğünü ve hava girişinin açık olduğunu kontrol edin; şalteri kurun. |
| | Hava ısıtıcısının sigortası veya kontaktörü arızalı ya da ısıtıcı elemanı yanmış | Sigortayı, kontaktörü ve ısıtıcı elemanının direncini kontrol edin. |
| Buhar tahliye fanı çalışmıyor | Fan motorunun koruma şalteri atmış | Fan çarkının serbest döndüğünü kontrol edin; şalteri kurun. |
| | Fan motoru arızalı | Motoru kontrol edin; arızalıysa değiştirin. |
| HMI ekranı donuyor veya açılmıyor | HMI beslemesi veya PLC ile iletişim arızalı | Besleme gerilimini ve iletişim kablosunu kontrol edin; sorun sürerse üretici servisine başvurun. |
| Kaçak akım rölesi (tesis tarafı veya panodaki F1 – F4) atıyor | Isıtıcı elemanında yalıtım hatası | Isıtıcıların yalıtım direncini ölçün; hatalı elemanı değiştirin. |
| | Motor veya bağlantı kutusuna su girmiş | Bağlantı kutusunu açın, kurutun, conta ve rakorları kontrol edin. |
| Makine çalışırken kendiliğinden duruyor | Faz kaybı veya gerilim düşümü | Besleme gerilimini her fazda ölçün; besleme bağlantılarını ve faz koruma rölesinin durumunu kontrol edin. |
| Makine enerjilenmiyor, ana şalterin kolu "Trip" konumunda | Ana şalter aşırı akım veya kısa devre nedeniyle atmış | Atma nedenini bulun ve giderin; ardından kolu "Reset" yönüne çevirerek şalteri kurun ve "I" konumuna getirin. |
| Yeni bağlantıdan sonra makine çalışmıyor | Faz sırası yanlış veya bir faz yok; faz koruma rölesi arıza algılamış | Besleme fazlarını kontrol edin; faz sırası yanlışsa **Bölüm 6.3.1**'e göre iki fazın yerini değiştirin. |
