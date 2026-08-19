# 3.4 Makine kontrolleri

---

## 3.4.1 Kontrol panosu — genel yapı

| Parametre | Değer |
|-----------|-------|
| Ana kontrol panosu konumu | Elektrik panosu üzerinde |
| Pano koruma sınıfı (IP) | IP55 |
| Pano boyutları (W × H × D) | 800 × 1200 × 300 mm |
| Ana şalter konumu | Elektrik panosu üzerinde |
| Ana şalter | 100 A, Schneider |

Elektrik panosu; güç dağıtımı, motor koruma, otomasyon bileşenleri (PLC, HMI) ve sinyal lambalarını barındırır.

<!-- FOTO: Elektrik panosu — genel görünüm, kapak açık -->
![Kontrol panosu genel görünüm](../../assets/FOTO-3-4-0-kontrol-panosu.png)

---

## 3.4.2 HMI operatör arayüzü

| Parametre | Değer |
|-----------|-------|
| HMI ekran boyutu | 7" |
| HMI marka / model | SIMATIC HMI KTP700 Basic PN (6AV2123-2GB03-0AX0) |
| Start / Stop konumu | HMI arayüzünde dijital buton |
| Operatör paneli dilleri | Türkçe, İngilizce, Almanca |
| Şifre koruması | HMI arayüzünde bir şifre bulunmaktadır |

HMI **çalışma sayfasında** yıkama, durulama, kurutma 1, kurutma 2 ve egzoz seçenekleri bulunur; operatör bu fonksiyonları ihtiyaca göre açıp kapatarak makineyi çalıştırabilir. **Manuel mod** bulunmamaktadır.

HMI **manuel sayfasında** hava ve su bağlantı durumu izlenir; bağlantı yapıldıktan sonra ilgili bilgi **yeşil** yanar.

HMI **ayar sayfasından** sıcaklık, tarih/saat ve dil ayarları yapılabilir.

<!-- FOTO: HMI ekran — çalışma sayfası -->
![HMI çalışma sayfası](../../assets/FOTO-3-4-1-hmi-calisma.png)

<!-- FOTO: HMI ekran — manuel sayfa (hava/su durumu) -->
![HMI manuel sayfa](../../assets/FOTO-3-4-2-hmi-manuel.png)

---

## 3.4.3 PLC ve G/Ç altyapısı

| Parametre | Değer |
|-----------|-------|
| PLC marka / model | SIEMENS SIMATIC S7-1200 |
| PLC CPU model | S7-1200 CPU 1215C DC/DC/DC (6ES7215-1AG40-0XB0) |
| I/O modül özeti | 36 giriş / 24 çıkış |
| Fieldbus / protokol | Profinet |

Encoder / feedback ayarı PLC programı içerisinde gömülüdür; ayar üretici firma tarafından yapılmalıdır.

<!-- FOTO: PLC modülleri — pano içi montaj -->
![PLC modülleri](../../assets/FOTO-3-4-3-plc-modul.png)

---

## 3.4.4 Çalışma modları, Start/Stop ve acil Stop

| Parametre | Değer |
|-----------|-------|
| Mod seçici | Otomatik / Bakım |
| Manuel mod | Bulunmamaktadır |
| Step / tek adım modu | Bulunmamaktadır |
| Mod geçiş koşulları | Bulunmamaktadır |
| Jog / inching düğmeleri | Bulunmamaktadır |

**Bakım modu:** Bakım için özel bir mod yoktur. Bakım için makine elektriği kesildikten sonra kapaklar açılmalıdır; elektrik kesildiğinde **LOTO prosedürü** uygulanmalıdır.

**Acil stop konumları (4 adet):**
1. Elektrik panosu üzerinde
2. Makine girişinde konveyörün sağında
3. Makine girişinde konveyörün solunda
4. Makine çıkışında konveyörün solunda

Acil stop'a basıldığında makinedeki **her fonksiyon durur**. Reset: Acil stop butonu kaldırılıp fiziksel tehdit giderildikten sonra pano etiketi üzerindeki reset butonuna lambası yanana kadar basılmalıdır.

<!-- FOTO: Acil stop butonları — giriş ve çıkış konumları -->
![Acil stop konumları](../../assets/FOTO-3-4-4-acil-stop.png)

---

## 3.4.5 Sinyal lambaları (tepe lambası)

| Renk | Anlam |
|------|-------|
| Kırmızı | Alarm |
| Sarı | Makine kullanıma hazır |
| Yeşil | Makine çalışıyor |

Tepe lambası makinenin anlık durumunu operatöre görsel olarak iletir. Alarm durumunda kırmızı lamba yanar.

<!-- FOTO: Tepe lambası — makine üstü -->
![Tepe lambası](../../assets/FOTO-3-4-5-tepe-lambasi.png)

---

## 3.4.6 Alarm, reçete ve uzaktan erişim

| Fonksiyon | Davranış |
|-----------|----------|
| Alarm ekranı | HMI arayüzünde alarm ekranı bulunmaktadır; alarm durumunda tepe lambası kırmızı yanar |
| Reçete / program kaydı | Herhangi bir reçete sınırı bulunmamaktadır |
| Trend / log kayıt süresi | [EKSİK] |
| Uzaktan erişim | Evet — Secomea modülü |

<!-- FOTO: HMI alarm ekranı -->
![HMI alarm ekranı](../../assets/FOTO-3-4-6-hmi-alarm.png)
