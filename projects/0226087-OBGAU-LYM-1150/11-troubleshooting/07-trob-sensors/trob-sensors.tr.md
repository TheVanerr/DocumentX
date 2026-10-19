# 11.7 Sensör arızaları

Makinede güvenlik ve proses kontrolü için dört algılama elemanı kullanılır. Sensörlerin kontrolü ve değiştirilmesi yetkili bakım veya elektrik personeli tarafından, LOTO uygulanarak yapılır (**Bkz. Bölüm 2.4**).

| Sensör | Model / kod | Konum ve işlev | Kontrol yöntemi | İlgili arıza |
| :--- | :--- | :--- | :--- | :--- |
| **Kapak kapalı switchi** | EMAS L5K13MUM331 (10 00261) | Yıkama hücresi sağ üst kenarı, elektrik panosunun yanında; kapak kapalı bilgisini emniyet devresine iletir | Multimetre ile direnç modunda, kapak açık ve kapalıyken kontak durumunun ölçülmesi | **Bölüm 11.2**, Arıza 6 |
| **Interlock kilit** | OMRON D4NL4AFAB (10 03336) | Yıkama hücresi sol yan yüzeyi; çevrim sırasında kapağı kilitler | Çevrim çalışırken kapağın açılamadığının kontrolü (**Bkz. Bölüm 5.4.2**, test 4) | **Bölüm 5.4** |
| **Seviye bekçisi** | 10 00296 Paslanmaz seviye bekçisi | Yıkama tankı; düşük su seviyesinde ısıtıcı ve pompayı devre dışı bırakır | Tank su seviyesinin fiziksel kontrolü; tank doluyken lambanın sönmesi | **Bölüm 11.2**, Arıza 3 |
| **Termokupl** | ETB30F06-2Ç (10 01343) | Yıkama tankı; su sıcaklığını termostata iletir | Termostat ekranından PV değerinin okunması; termostat çıkışının ölçü aleti ile kontrolü | **Bölüm 11.2**, Arıza 7 |

Sensörlerde durum gösterge LED'i bulunmaz. Termostat ekranında PV değeri gerçek su sıcaklığıyla açıkça uyuşmuyorsa (örneğin soğuk tankta yüksek değer), termokupl veya bağlantı kablosu arızalı olabilir; termokuplu yetkili elektrik personeline kontrol ettirin.

Sensör değişiminden sonra, değiştirilen sensörün ilgili güvenlik veya proses fonksiyonunu test edin (**Bkz. Bölüm 5.4**).
