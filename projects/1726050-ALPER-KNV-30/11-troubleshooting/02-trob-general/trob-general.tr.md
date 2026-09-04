# 11.2 Genel arıza giderme

Bu alt bölüm HMI alarm davranışını ve yetkili servis çağrısı kriterlerini tanımlar. Alarm kodları **Bölüm 11.1.2** tablosunda SSOT olarak verilmiştir.

---

## 11.2.1 HMI alarm davranışı

| Parametre | Değer |
|-----------|-------|
| Alarm ekranı | HMI **Alarm Sayfası** — aktif ve geçmiş kayıtlar |
| Tepe lambası | Alarm → **kırmızı**; hazır → **sarı**; çalışıyor → **yeşil** |
| HMI alarm dili | Türkçe, İngilizce, Almanca |

Aktif alarm oluştuğunda HMI Alarm Sayfasında kayıt görünür; eş zamanlı tepe lambası **kırmızı** yanar. Operatör/hat sorumlusu alarm metnini okuyarak müdahale önceliğini belirler.

**Alarm geçmişi:** HMI Alarm Sayfasındaki geçmiş kayıtlar tekrarlayan arızaların analizi için kullanılır (bkz. **Bölüm 3.4.6**).

**Reset:** Alarm giderildikten sonra HMI reset ve gerekirse pano reset uygulanır. Acil stop sonrası **Bölüm 2.5** prosedürü zorunludur.

---

## 11.2.2 Servis çağrısı kriterleri

DATA dosyasında servis kriterleri ayrıntılı tanımlanmamıştır. Aşağıdaki durumlarda **Bölüm 1.3** iletişim kanallarından yetkili servis desteği alınmalıdır:

| # | Durum | Gerekçe |
|---|-------|---------|
| 1 | **Error-460** Servo Motor Hata | Servo sürücü ve mekanik müdahale uzmanlık gerektirir |
| 2 | Isıtıcı kaçak akım (**Error-170/171/172**) tekrarlayan trip | İzolasyon arızası; elektrik güvenlik riski |
| 3 | **Error-410** faz sırası düzeltmesine rağmen tekrarlayan alarm | Besleme hattı veya röle arızası |
| 4 | PLC/HMI donanım arızası şüphesi | Yazılım/donanım müdahalesi üretici yetkisi gerektirir |
| 5 | **11.1.2** tablosundaki adımlara rağmen sorun devam ediyor | Saha teşhisi ve yedek parça değişimi gerekebilir |
| 6 | Mekanik hasar, conta patlaması, ciddi sızıntı | Güvenlik ve proses bütünlüğü riski |
| 7 | Güvenlik fonksiyonu (RFID, acil stop, CAT3) doğrulama başarısız | **Bölüm 5.4** testleri tekrar geçemiyor |

**Servis öncesi hazırlık (Bölüm 1.3.3):**

1. Makine kimlik etiketi bilgilerini (seri no, model) hazırlayın.
2. Aktif HMI alarm kodlarını ve metinlerini kaydedin.
3. Arıza anındaki proses fazını (yıkama/durulama/kurutma) belirtin.
4. Mümkünse HMI alarm ekranı fotoğrafı ekleyin.

**Operatör/hat sorumlusu durmalı:** Elektrik panosu içi müdahale, LOTO dışı enerjili çalışma, RFID bypass veya güvenlik devresi köprüleme **yasaktır** — yetkili personel çağırın.

---

**Bölüm 11.2 sonu.**
