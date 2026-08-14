<!-- ÇEVİRİ GEREKLİ → EN | kaynak: TR | bu satırı çeviri bitince silin. Başlık/görsel/tablo yapısını koruyun, yalnızca metni çevirin. -->

# 7.3 KAPATMA (SHUT DOWN) PROSEDÜRÜ

Bu bölüm, VDL serisi tamburlu endüstriyel yıkama makinesinin operasyon sonlandırılması, güvenli bir şekilde durdurulması, enerji izolasyonu ve uzun ömürlü kullanım için gerekli kapatma adımlarını detaylandırmaktadır. Makinenin kapatma prosedürü; operasyonun bitiminden sonra günlük kapatma, acil durum kapatması ve uzun süreli (depolama) kapatma olarak üç farklı senaryoyu kapsar.

---

## 7.3.1 Standart (Günlük) Kapatma Prosedürü

Operasyon günü sona erdiğinde veya makine bir sonraki vardiyaya kadar kullanılmayacaksa aşağıdaki adımlar sırasıyla uygulanmalıdır:

1. **Program Tamamlama Kontrolü:** Makinenin ana kontrol paneli (HMI/PLC) üzerinden mevcut yıkama programının tamamen tamamlandığından emin olun. Program devam ediyorsa, kesinlikle "Acil Stop" ile durdurulmamalı; programın "Drenaj" ve "Sıkma" aşamalarının bitmesi beklenmelidir.

2. **Tambur ve Kapak Kontrolü:** Yıkama işlemi biten parçaların tamburdan tamamen çıkarıldığından emin olun. Tambur kapağının/tepesinin tamamen kilitlendiğinden emin olduktan sonra kapalı tutun.

3. **Isıtma ve Buhar Sisteminin Kapatılması:**
   - Makinenin ısıtma sistemini (Elektrikli rezistans veya buhar) kontrol panelinden deaktif edin.
   - Eğer makine buharlı ısıtma kullanıyorsa, makineye giden ana buhar giriş vanasını yavaşça kapatın. Buhar hattındaki kalıntı basıncın tahliye vanasından (Kondens tahliyesi) boşaltıldığından emin olun.

4. **Su ve Kimyasal Girişlerinin Kapatılması:**
   - Makinenin ana su giriş vanalarını (temiz su ve sıcak su hatları) tamamen kapatın.
   - Dozajlama pompalarının (kimyasal dozajlama üniteleri) güç şalterlerini kapatın ve kimyasal tanklarının kapaklarını sıkıca kapatın.

5. **Panel ve Elektrik Kapatma:**
   - Kontrol paneli (HMI) ekranında makinenin "Hazırda Bekleme" (Standby) moduna alındığını doğrulayın.
   - Makinenin ana güç şalterini (Ana Otomatik Sigorta / kompakt şalter) "0" (Kapalı) konumuna getirin.

6. **Pnömatik Sistemin Kapatılması** *(Eğer mevcutsa):*
   - Makinenin pnömatik (hava) kontrol birimi varsa, ana hava giriş vanasını kapatın.
   - Sistemdeki basınçlı havayı tahliye ederek hava tankını boşaltın.

7. **Dış Temizlik ve Çevre Düzeni:** Makinenin kapatılmasının ardından dış yüzeylerini yumuşak bir bezle silin. Makine çevresinde su birikintisi veya kimyasal döküntü kalmadığından emin olun. Zeminin kaygan olmaması için gerekli temizliği yapın.

---

## 7.3.2 Acil Durum Kapatması (Emergency Shut Down)

Makinede arıza, sızıntı, yangın riski veya operatöre yönelik bir tehlike oluşması durumunda standart kapatma prosedürü uygulanmaz. Bu durumda:

1. Makinenin her iki yanında ve panel üzerinde bulunan **"ACİL STOP"** butonlarından birine basın. *(Bu, makinenin tüm hareketlerini, tambur dönüşünü, ısıtmayı ve su alımlarını anında keser.)*
2. Makinenin bulunduğu tesise ait ana elektrik panosunu açarak makineyi besleyen ana şalteri kapatın.
3. Tüm su, buhar ve hava giriş vanalarını acilen kapatın.
4. Makinenin servis kapısını açmadan önce tamburun tamamen durduğunu ve basınçlı sistemlerin tahliye edildiğini mutlaka kontrol edin.
5. Yetkili bakım personeline veya **CNK ELEKTRONİK / DOLFIN MAKİNE** teknik servis ekibine durumu bildirin.

---

## 7.3.3 Uzun Süreli Kapatma (Depolama / İşletme Dışı Bırakma)

Makine uzun bir süre (haftalar veya aylar boyunca) kullanılmayacaksa, don, korozyon ve statik elektrik hasarlarına karşı koruma amacıyla aşağıdaki adımlar uygulanmalıdır:

1. **Tam Tahliye:** Tambur, yıkama tankı ve tüm boru hatlarındaki suyu tamamen boşaltın. Sistemde su kalmaması, özellikle kış aylarında donma sebebiyle pompaların ve valflerin çatlamasını engeller.

2. **Kimyasal Sistem:** Dozajlama hortumlarını ve pompalarını temiz su ile durulayarak içindeki kimyasal kalıntıların kristalleşip tıkanıklık yaratmasını önleyin.

3. **Nem Alma ve Korozyon Koruması:** Tambur iç yüzeyini ve kapak contalarını temizleyip iyice kurulayın. Contaların esnekliğini koruması için gıda uygunluğunda bir silikon sprey veya koruyucu ile yağlayın.

4. **Elektriksel İzolasyon:** Makinenin ana elektrik şalterini kapatın ve şalterin üzerine "Bakımda / Kullanım Dışı" yazılı bir uyarı etiketi asın *(LOTO - Lockout/Tagout prosedürü).*

5. **Kapak Pozisyonu:** Tambur kapağını hafif aralık bırakın. Bu, makine içindeki hava sirkülasyonunu sağlayarak nem birikimini ve dolayısıyla küf/risklama oluşumunu engeller.

6. **Çevre Şartları:** Makineyi doğrudan güneş ışığı almayan, nemsiz ve sıcaklığın donma noktasının altına düşmediği bir ortamda muhafaza edin.

---

## 7.3.4 Kapatma Sonrası Güvenlik Kontrolleri

Kapatma prosedürü tamamlandıktan sonra operatör, makineyi terk etmeden önce aşağıdaki kontrol listesini onaylamalıdır:

- [ ] Tambur dönüşü ve motorlar tamamen durmuş mu?
- [ ] Tambur içinde yıkama gereci veya su kalmış mı?
- [ ] Buhar ve su giriş vanaları tamamen kapatılmış mı?
- [ ] HMI ekranı kararmış ve ana şalter "0" (Off) konumunda mı?
- [ ] Makine etrafında sızıntı veya su birikintisi var mı?
- [ ] Acil stop butonu (eğer basıldıysa) rutin kapatma için resetlenmiş mi? *(Not: Acil stop ile kapatılan makine bir sonraki çalıştırmada mutlaka resetlenmelidir.)*

---

> ⚠️ **UYARI:** Makine tamamen durana ve enerji izolasyonu sağlanana kadar hiçbir bakım, temizlik veya müdahale işlemi yapılmamalıdır. Makinenin durdurulma prosedürlerine uymamanız ciddi personel yaralanmalarına ve makine garantisinin geçersiz kılınmasına neden olabilir.