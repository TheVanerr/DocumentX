# 1726050-ALPER-KNV-30 — KILAVUZ TAMAMLAMA EKSİK LİSTESİ

> **Son güncelleme:** Bakım periyodu, yedek parça/BOM, Bölüm 13 (dokümanlar/çizimler/parça listesi) tamamlandı.
> **Kaynak:** DATA + `.tr.md` + `assets/` taraması.
> **Yenile:** `python scripts/scan-eksik-alper.py`

---

## TAMAMLANAN (EKSIK listesinden çıkarıldı)

| Konu | Durum | Konum |
|------|--------|-------|
| Yedek parça / BOM (22 kalem) | [x] | DATA `[PARCA_LISTESI]` → **9.1.5**, **13.3** |
| Bakım periyodu (günlük → yıllık) | [x] | DATA `[BAKIM_PERIYOT]` → **9.1.3** |
| Bölüm 13 — Doküman listesi | [x] | **13.1** (P&ID + Elektrik + Layout ayrı evrak) |
| Bölüm 13 — Çizimler / layout | [x] | **13.2** |
| Bölüm 13 — Parça listesi (gömülü) | [x] | **13.3.1** |
| Bölüm 14 — Ekler / sözlük / indeks | [x] | **14** (kılavuz içi referanslar) |
| Kapasite / reçete / ürün parametreleri | KD | **Bölüm 8** — kullanıcı hattı ayarı; kılavuzda doldurulmaz |

---

## ÖNCELİK ÖZETİ (kalan işler)

| Öncelik | Konu | Not |
|---------|------|-----|
| P1 | HMI ekran görüntüleri | Bölüm 3.4, 6, 7, 11 |
| P1 | Makine / modül FOTO-* | Bölüm 3, 5, 7 |
| P1 | Kimlik etiketi fotoğrafı | Bölüm 1.3 |
| P2 | Yedek parça fotoğrafları | `assets/9.1/{sipariş kodu}.png` — 22 adet |
| P2 | Yağlama (gres tipi, redüktör yağı) | Bölüm 9.1.4 |
| P2 | Arıza tablosu + servis kriterleri | Bölüm 11 |
| P3 | Revizyon tablosu (1.1) | Kapak / doküman kontrolü |

---

## A — DATA'DA KALAN BOŞ / BELİRSİZ ALANLAR (34 madde)

| Blok | Alan | Mevcut |
|------|------|--------|
| PROJE | Makine ticari adı | (boş) |
| MAKINE_TANIMI | Opsiyon / varyant listesi (bu projeye özel) | (boş) |
| SIKIŞTIRILMIŞ_HAVA_SU | Drain / atık su hattı çap (mm) | (boş) |
| KONTROL_FONKSIYONLARI | Ana ekran menü yapısı | (boş) |
| KONTROL_FONKSIYONLARI | Trend / log kayıt süresi | (boş) |
| TASIMA | Taşıma yüksekliği max (m — deniz / kara) | (boş) |
| ILETISIM | Üst sistem (MES / SCADA) bağlantısı | Bilinmiyor |
| BAKIM_YAGLAMA | Gres tipi | (boş) |
| BAKIM_YAGLAMA | Redüktör yağ değişim | (boş) |
| TEMIZLIK | Kullanılan temizlik maddeleri (onaylı liste) | (boş) |
| ARIZA_GENEL | Alarm kod listesi dosya referansı | (boş) |
| ARIZA_GENEL | HMI alarm metinleri dili | (boş) |
| ARIZA_GENEL | Servis çağrısı kriterleri | (boş) |
| ARIZA_TABLO | Arıza 1 belirti | (boş) |
| ARIZA_TABLO | Arıza 1 neden | (boş) |
| ARIZA_TABLO | Arıza 1 çözüm | (boş) |
| ARIZA_TABLO | Arıza 2 belirti | (boş) |
| ARIZA_TABLO | Arıza 2 neden | (boş) |
| ARIZA_TABLO | Arıza 2 çözüm | (boş) |
| ARIZA_TABLO | Arıza 3 belirti | (boş) |
| ARIZA_TABLO | Arıza 3 neden | (boş) |
| ARIZA_TABLO | Arıza 3 çözüm | (boş) |
| ELEKTRIK_ARIZA | Faz kaybı davranışı | (boş) |
| ELEKTRIK_ARIZA | Motor koruma trip | (boş) |
| ELEKTRIK_ARIZA | Inverter alarm kodları özeti | (boş) |
| ELEKTRIK_ARIZA | Sensör kablo renk kodu | (boş) |
| HIDROLIK_ARIZA | Basınç düşük alarm | (boş) |
| HIDROLIK_ARIZA | Yağ kaçağı noktaları | (boş) |
| HIDROLIK_ARIZA | Pompa sesi anormal | (boş) |
| PNEOMATIK_ARIZA | Basınç düşük | (boş) |
| PNEOMATIK_ARIZA | Silindir yavaş / takılma | (boş) |
| PNEOMATIK_ARIZA | Valf bobini arıza | (boş) |
| SENSOR_ARIZA | Kritik sensör listesi (tip / konum) | (boş) |
| SENSOR_ARIZA | Sensör LED / durum göstergesi | (boş) |

---

## B — MD'DE [EKSİK] İŞARETLİ SATIRLAR (26 satır)

_Bölüm 8 (kapasite), 13, 14 hariç._

| Bölüm | Dosya | Satır | İçerik |
|-------|-------|-------|--------|
| Bölüm 1 — Giriş | `01-introduction/01-intro-handbook/intro-handbook.tr.md` | 7 | **Kapsam:** KNV 30 3000 2B opsiyon seti ve bu projeye teslim edilen donanım. Makine ticari adı DATA  |
| Bölüm 1 — Giriş | `01-introduction/01-intro-handbook/intro-handbook.tr.md` | 33 | \| **Revizyon** \| [EKSİK] \| |
| Bölüm 1 — Giriş | `01-introduction/01-intro-handbook/intro-handbook.tr.md` | 34 | \| **Son güncelleme** \| [EKSİK] \| |
| Bölüm 1 — Giriş | `01-introduction/01-intro-handbook/intro-handbook.tr.md` | 35 | \| **Hazırlayan** \| [EKSİK] \| |
| Bölüm 1 — Giriş | `01-introduction/01-intro-handbook/intro-handbook.tr.md` | 36 | \| **Onaylayan** \| [EKSİK] \| |
| Bölüm 3 — Genel bakış | `03-overview/03-machine-spec/machine-spec.tr.md` | 87 | Toplam kurutma fan gücü: **16 kW**. Kurutma fanları marka/model bilgisi DATA dosyasında [EKSİK] olar |
| Bölüm 3 — Genel bakış | `03-overview/03-machine-spec/machine-spec.tr.md` | 102 | \| Drain / atık su hattı çap \| [EKSİK] \| |
| Bölüm 3 — Genel bakış | `03-overview/04-machine-controls/machine-controls.tr.md` | 108 | \| Trend / log kayıt süresi \| [EKSİK] \| |
| Bölüm 4 — Taşıma | `04-transport/01-transport/transporting.tr.md` | 18 | \| Maks. taşıma yüksekliği (deniz/kara) \| [EKSİK] \| |
| Bölüm 9 — Bakım | `09-maintenance/01-main-inst/main-inst.tr.md` | 112 | \| Gres tipi \| [EKSİK] \| |
| Bölüm 9 — Bakım | `09-maintenance/01-main-inst/main-inst.tr.md` | 113 | \| Redüktör yağ değişimi \| [EKSİK] \| |
| Bölüm 9 — Bakım | `09-maintenance/01-main-inst/main-inst.tr.md` | 114 | \| Periyot \| [EKSİK] \| |
| Bölüm 10 — Temizlik | `10-cleaning/01-clean-sanitize/clean-sanitize.tr.md` | 109 | \| Kullanılan temizlik maddeleri (onaylı liste) \| [EKSİK] \| |
| Bölüm 10 — Temizlik | `10-cleaning/cleaning.tr.md` | 10 | \| Onaylı temizlik maddeleri \| [EKSİK] \| |
| Bölüm 11 — Arıza giderme | `11-troubleshooting/01-fault-finding/fault-finding.tr.md` | 62 | \| Arıza 1 \| [EKSİK] \| [EKSİK] \| [EKSİK] \| |
| Bölüm 11 — Arıza giderme | `11-troubleshooting/01-fault-finding/fault-finding.tr.md` | 63 | \| Arıza 2 \| [EKSİK] \| [EKSİK] \| [EKSİK] \| |
| Bölüm 11 — Arıza giderme | `11-troubleshooting/01-fault-finding/fault-finding.tr.md` | 64 | \| Arıza 3 \| [EKSİK] \| [EKSİK] \| [EKSİK] \| |
| Bölüm 11 — Arıza giderme | `11-troubleshooting/02-trob-general/trob-general.tr.md` | 21 | \| Servis çağrısı kriterleri \| [EKSİK] \| |
| Bölüm 11 — Arıza giderme | `11-troubleshooting/03-trob-electrical/trob-electrical.tr.md` | 14 | \| Faz kaybı davranışı \| [EKSİK] \| |
| Bölüm 11 — Arıza giderme | `11-troubleshooting/03-trob-electrical/trob-electrical.tr.md` | 31 | \| Motor koruma trip \| [EKSİK] \| |
| Bölüm 11 — Arıza giderme | `11-troubleshooting/03-trob-electrical/trob-electrical.tr.md` | 32 | \| Inverter alarm kodları özeti \| [EKSİK] \| |
| Bölüm 11 — Arıza giderme | `11-troubleshooting/03-trob-electrical/trob-electrical.tr.md` | 52 | \| Sensör kablo renk kodu \| [EKSİK] \| |
| Bölüm 11 — Arıza giderme | `11-troubleshooting/05-trob-pnemo/trob-pnemo.tr.md` | 37 | \| Silindir yavaş / takılma \| [EKSİK] \| |
| Bölüm 11 — Arıza giderme | `11-troubleshooting/05-trob-pnemo/trob-pnemo.tr.md` | 38 | \| Valf bobini arıza \| [EKSİK] \| |
| Bölüm 11 — Arıza giderme | `11-troubleshooting/07-trob-sensors/trob-sensors.tr.md` | 21 | \| Kritik sensör listesi (tip / konum) \| [EKSİK] \| |
| Bölüm 11 — Arıza giderme | `11-troubleshooting/07-trob-sensors/trob-sensors.tr.md` | 22 | \| Sensör LED / durum göstergesi \| [EKSİK] \| |

---

## C — YEDEK PARÇA FOTOĞRAFLARI — `assets/9.1/` (22 eksik)

Tablo hazır; fotoğrafları **sipariş kodu.png** adıyla yükleyin (ör. `10 06675.png`).

| Sipariş kodu | Dosya | Bölüm |
|--------------|-------|-------|
| `07 00670` | `assets/9.1/07 00670.png` | Bölüm 13 |
| `07 03497` | `assets/9.1/07 03497.png` | Bölüm 13 |
| `07 10214` | `assets/9.1/07 10214.png` | Bölüm 13 |
| `07 15142` | `assets/9.1/07 15142.png` | Bölüm 13 |
| `07 16791` | `assets/9.1/07 16791.png` | Bölüm 13 |
| `07 17295` | `assets/9.1/07 17295.png` | Bölüm 13 |
| `07 17478` | `assets/9.1/07 17478.png` | Bölüm 13 |
| `10 00296` | `assets/9.1/10 00296.png` | Bölüm 13 |
| `10 00586` | `assets/9.1/10 00586.png` | Bölüm 13 |
| `10 01002` | `assets/9.1/10 01002.png` | Bölüm 13 |
| `10 01017` | `assets/9.1/10 01017.png` | Bölüm 13 |
| `10 02526` | `assets/9.1/10 02526.png` | Bölüm 13 |
| `10 02976` | `assets/9.1/10 02976.png` | Bölüm 13 |
| `10 03088` | `assets/9.1/10 03088.png` | Bölüm 13 |
| `10 05378` | `assets/9.1/10 05378.png` | Bölüm 13 |
| `10 06675` | `assets/9.1/10 06675.png` | Bölüm 13 |
| `10 07147` | `assets/9.1/10 07147.png` | Bölüm 13 |
| `10 17815` | `assets/9.1/10 17815.png` | Bölüm 13 |
| `10 19317` | `assets/9.1/10 19317.png` | Bölüm 13 |
| `10 19318` | `assets/9.1/10 19318.png` | Bölüm 13 |
| `10 19321` | `assets/9.1/10 19321.png` | Bölüm 13 |
| `10 19471` | `assets/9.1/10 19471.png` | Bölüm 13 |

---

## D — HMI EKRAN GÖRÜNTÜLERİ (P1)

| Dosya adı | Açıklama | Bölüm |
|-----------|----------|-------|
| `FOTO-3-1-11-hmi-ekran.png` | HMI arayüzü | Bölüm 3 |
| `FOTO-3-2-5-operator-hmi.png` | Operatör — HMI paneli | Bölüm 3 |
| `FOTO-3-4-1-hmi-calisma.png` | HMI çalışma sayfası | Bölüm 3 |
| `FOTO-3-4-2-hmi-manuel.png` | HMI manuel sayfa | Bölüm 3 |
| `FOTO-3-4-6-hmi-alarm.png` | HMI alarm ekranı | Bölüm 3 |
| `FOTO-5-3-4-hmi-manuel-durum.png` | HMI manuel sayfa — bağlantı durumu | Bölüm 5 |
| `FOTO-6-3-1-sicaklik-ayar.png` | HMI sıcaklık ayarı | Bölüm 6 |
| `FOTO-6-3-2-hmi-tarih-dil.png` | HMI tarih saat dil ayarı | Bölüm 6 |
| `FOTO-7-1-0-calisma-sayfasi.png` | HMI proses seçenekleri | Bölüm 7 |
| `FOTO-7-2-0-start.png` | HMI start butonu | Bölüm 7 |
| `FOTO-7-2-1-hazirlik.png` | HMI hazırlık butonu | Bölüm 7 |
| `FOTO-8-2-0-recete.png` | HMI reçete ayar sayfası | Bölüm 8 |
| `FOTO-11-0-alarm-genel.png` | HMI alarm ekranı | Bölüm 11 |
| `FOTO-6-0-settings-genel.png` | HMI ayar sayfası | Bölüm 6 |
| `FOTO-7-0-operation-genel.png` | HMI çalışma sayfası | Bölüm 7 |

---

## E — DİĞER EKSİK GÖRSELLER (FOTO-* vb.) (95 referans)

| # | Hedef yol | Açıklama | Bölüm |
|---|-----------|----------|-------|
| E1 | `assets/FOTO-10-1-3-on-filtre.png` | Yıkama tankı ön filtreleri | Bölüm 10 |
| E2 | `assets/FOTO-10-1-4-tank-filtre.png` | Tank filtreleri | Bölüm 10 |
| E3 | `assets/FOTO-10-1-4-torba-filtre.png` | Pompa çıkışı torba filtre | Bölüm 10 |
| E4 | `assets/FOTO-3-1-0-genel-gorunum.png` | KNV-30 3000 2B genel görünüm | Bölüm 3 |
| E5 | `assets/FOTO-3-1-1-proses-akisi.png` | Proses akışı — yıkama, durulama, kurutma | Bölüm 3 |
| E6 | `assets/FOTO-3-1-10-elektrik-panosu.png` | Elektrik panosu | Bölüm 3 |
| E7 | `assets/FOTO-3-1-12-medya-baglantilari.png` | Medya bağlantı noktaları | Bölüm 3 |
| E8 | `assets/FOTO-3-1-13-bakim-kapaklari.png` | Bakım erişim kapakları — makine arkası | Bölüm 3 |
| E9 | `assets/FOTO-3-1-2-konveyor-giris-cikis.png` | Konveyör giriş-çıkış görünümü | Bölüm 3 |
| E10 | `assets/FOTO-3-1-3-konveyor-motor.png` | Konveyör redüktör motoru | Bölüm 3 |
| E11 | `assets/FOTO-3-1-4-yikama-banyosu.png` | Yıkama banyosu genel görünüm | Bölüm 3 |
| E12 | `assets/FOTO-3-1-5-yikama-pompasi.png` | Yıkama pompası | Bölüm 3 |
| E13 | `assets/FOTO-3-1-6-durulama-banyosu.png` | Durulama banyosu genel görünüm | Bölüm 3 |
| E14 | `assets/FOTO-3-1-7-yag-siyirici.png` | Yağ sıyırıcı ünite | Bölüm 3 |
| E15 | `assets/FOTO-3-1-8-kurutma-fanlari.png` | Kurutma fanları | Bölüm 3 |
| E16 | `assets/FOTO-3-1-9-egzost-fani.png` | Egzost fanı | Bölüm 3 |
| E17 | `assets/FOTO-3-2-0-parca-yukleme.png` | Tipik kullanım — parça yükleme | Bölüm 3 |
| E18 | `assets/FOTO-3-2-1-islenebilir-parcalar.png` | İşlenebilir parça örnekleri | Bölüm 3 |
| E19 | `assets/FOTO-3-2-2-yasak-kullanim-uyari.png` | Proses bölgesi — endüstriyel parça kullanımı | Bölüm 3 |
| E20 | `assets/FOTO-3-2-3-su-baglantisi.png` | Proses suyu bağlantısı | Bölüm 3 |
| E21 | `assets/FOTO-3-2-4-kurulum-alani.png` | Kurulum alanı — iç mekan | Bölüm 3 |
| E22 | `assets/FOTO-3-3-0-dis-boyutlar.png` | Dış boyutlar | Bölüm 3 |
| E23 | `assets/FOTO-3-3-1-proses-bolgeleri.png` | Proses bölgeleri | Bölüm 3 |
| E24 | `assets/FOTO-3-3-2-elektrik-besleme.png` | Elektrik beslemesi | Bölüm 3 |
| E25 | `assets/FOTO-3-3-3-motor-gruplari.png` | Motor listesi — tahrik üniteleri | Bölüm 3 |
| E26 | `assets/FOTO-3-3-4-medya-baglantilari.png` | Medya bağlantıları | Bölüm 3 |
| E27 | `assets/FOTO-3-4-0-kontrol-panosu.png` | Kontrol panosu genel görünüm | Bölüm 3 |
| E28 | `assets/FOTO-3-4-3-plc-modul.png` | PLC modülleri | Bölüm 3 |
| E29 | `assets/FOTO-3-4-4-acil-stop.png` | Acil stop konumları | Bölüm 3 |
| E30 | `assets/FOTO-3-4-5-tepe-lambasi.png` | Tepe lambası | Bölüm 3 |
| E31 | `assets/FOTO-3-5-0-layout-genel.png` | Genel yerleşim planı | Bölüm 3 |
| E32 | `assets/FOTO-3-5-1-yon-tanimlari.png` | Yön tanımları | Bölüm 3 |
| E33 | `assets/FOTO-3-5-2-etraf-bosluklari.png` | Etraf boşlukları | Bölüm 3 |
| E34 | `assets/FOTO-3-5-3-bakim-kapaklari.png` | Bakım erişim kapakları | Bölüm 3 |
| E35 | `assets/FOTO-3-5-4-forklift-noktalari.png` | Forklift taşıma noktaları | Bölüm 3 |
| E36 | `assets/FOTO-5-1-0-forklift-tasima.png` | Forklift taşıma | Bölüm 5 |
| E37 | `assets/FOTO-5-1-1-ayarlanabilir-ayak.png` | Ayarlanabilir ayaklar — terazi | Bölüm 5 |
| E38 | `assets/FOTO-5-1-2-hava-baglantisi.png` | Basınçlı hava bağlantısı | Bölüm 5 |
| E39 | `assets/FOTO-5-1-3-su-baglantisi.png` | Su bağlantısı | Bölüm 5 |
| E40 | `assets/FOTO-5-1-4-elektrik-baglantisi.png` | Elektrik besleme bağlantısı | Bölüm 5 |
| E41 | `assets/FOTO-5-1-5-faz-sira-role.png` | Faz sıra rölesi | Bölüm 5 |
| E42 | `assets/FOTO-5-1-6-montaj-tamamlandi.png` | Montaj tamamlandı | Bölüm 5 |
| E43 | `assets/FOTO-5-2-0-kurulum-alani.png` | Kurulum alanı — boşluk planı | Bölüm 5 |
| E44 | `assets/FOTO-5-2-1-yon-tanimlari.png` | Yön tanımları | Bölüm 5 |
| E45 | `assets/FOTO-5-2-2-seviye-ayari.png` | Ayarlanabilir ayak — seviye | Bölüm 5 |
| E46 | `assets/FOTO-5-2-3-bakim-erisim.png` | Bakım erişim alanı — arka | Bölüm 5 |
| E47 | `assets/FOTO-5-3-0-hava-baglantisi.png` | Basınçlı hava bağlantısı | Bölüm 5 |
| E48 | `assets/FOTO-5-3-1-su-baglantisi.png` | Su bağlantısı | Bölüm 5 |
| E49 | `assets/FOTO-5-3-2-elektrik-baglantisi.png` | Elektrik bağlantısı | Bölüm 5 |
| E50 | `assets/FOTO-5-3-3-faz-kontrol.png` | Faz kontrolü — pano içi | Bölüm 5 |
| E51 | `assets/FOTO-5-4-0-acil-stop.png` | Acil stop konumları | Bölüm 5 |
| E52 | `assets/FOTO-5-4-1-reset-butonu.png` | Reset butonu — pano etiketi | Bölüm 5 |
| E53 | `assets/FOTO-5-4-2-rfid-sensor.png` | RFID güvenlik sensörü | Bölüm 5 |
| E54 | `assets/FOTO-5-4-3-faz-koruma.png` | Faz koruma rölesi | Bölüm 5 |
| E55 | `assets/FOTO-5-4-4-tepe-lambasi-sari.png` | Tepe lambası — kullanıma hazır | Bölüm 5 |
| E56 | `assets/FOTO-5-5-0-terazi-test.png` | Mekanik test — terazi kontrolü | Bölüm 5 |
| E57 | `assets/FOTO-5-5-1-elektrik-test.png` | Elektrik devreye alma testi | Bölüm 5 |
| E58 | `assets/FOTO-5-5-2-medya-test.png` | Pnömatik/medya test — HMI manuel | Bölüm 5 |
| E59 | `assets/FOTO-5-5-3-guvenlik-test.png` | Güvenlik fonksiyon testi | Bölüm 5 |
| E60 | `assets/FOTO-5-5-4-bos-kosu.png` | Boş koşu testi — 15 dk | Bölüm 5 |
| E61 | `assets/FOTO-5-6-0-profinet.png` | Profinet altyapısı — PLC/HMI | Bölüm 5 |
| E62 | `assets/FOTO-5-6-1-secomea.png` | Secomea modülü | Bölüm 5 |
| E63 | `assets/FOTO-5-6-2-io-listesi.png` | I/O listesi referansı | Bölüm 5 |
| E64 | `assets/FOTO-6-1-0-referans-home.png` | Referans pozisyon — konveyör başı | Bölüm 6 |
| E65 | `assets/FOTO-6-2-0-acil-stop-periyot.png` | Acil stop periyodik test | Bölüm 2 |
| E66 | `assets/FOTO-6-3-0-encoder.png` | Encoder ayarı — PLC | Bölüm 6 |
| E67 | `assets/FOTO-6-5-0-regulator.png` | Pnömatik regülatör 6 bar | Bölüm 6 |
| E68 | `assets/FOTO-7-3-0-reset.png` | Reset butonu — acil stop sonrası | Bölüm 7 |
| E69 | `assets/FOTO-7-4-0-konveyor.png` | Konveyör parça akışı | Bölüm 7 |
| E70 | `assets/FOTO-9-1-4-yaglama-cikis.png` | Konveyör çıkış yağlama noktaları | Bölüm 9 |
| E71 | `assets/FOTO-9-1-4-yaglama-giris.png` | Konveyör giriş yağlama noktaları | Bölüm 9 |
| E72 | `assets/labels/info/bilgi1.svg` | Koruyucu topraklama | Bölüm 1 |
| E73 | `assets/labels/info/bilgi2.svg` | Kilitleme zorunlu | Bölüm 1 |
| E74 | `assets/labels/info/bilgi3.svg` | Su tahliyesi | Bölüm 1 |
| E75 | `assets/labels/info/bilgi4.svg` | Basınçlı hava girişi | Bölüm 1 |
| E76 | `assets/labels/info/bilgi5.svg` | Su girişi | Bölüm 1 |
| E77 | `assets/labels/info/bilgi6.svg` | Tank dolumu | Bölüm 1 |
| E78 | `assets/labels/info/bilgi7.svg` | Emniyet kilidi | Bölüm 1 |
| E79 | `assets/labels/kkd/kkd2.svg` | Koruyucu giysi | Bölüm 1 |
| E80 | `assets/labels/kkd/kkd3.svg` | Emniyet ayakkabısı | Bölüm 1 |
| E81 | `assets/labels/kkd/kkd4.svg` | Koruyucu eldiven | Bölüm 1 |
| E82 | `assets/labels/kkd/kkd5.svg` | Koruyucu gözlük | Bölüm 1 |
| E83 | `assets/labels/kkd/kkd6.svg` | Solunum maskesi | Bölüm 1 |
| E84 | `assets/labels/warning/warning1.svg` | Genel tehlike | Bölüm 1 |
| E85 | `assets/labels/warning/warning2.svg` | Sıcak yüzey | Bölüm 1 |
| E86 | `assets/labels/warning/warning3.svg` | Aşındırıcı madde | Bölüm 1 |
| E87 | `assets/labels/warning/warning4.svg` | Ezilme tehlikesi | Bölüm 1 |
| E88 | `assets/labels/warning/warning5.svg` | Kaygan zemin | Bölüm 1 |
| E89 | `assets/labels/warning/warning7.svg` | Elektrik tehlikesi | Bölüm 1 |
| E90 | `assets/FOTO-10-0-cleaning-genel.png` | Tank ve filtre temizlik genel görünüm | Bölüm 10 |
| E91 | `assets/FOTO-12-0-dismantle-genel.png` | Demontaj genel görünüm | Bölüm 12 |
| E92 | `assets/FOTO-3-0-overview-genel.png` | KNV 30 3000 2B genel görünüm | Bölüm 3 |
| E93 | `assets/FOTO-5-0-assembly-genel.png` | Kurulum alanı — makine yerleştirme | Bölüm 5 |
| E94 | `assets/FOTO-8-0-capacity-genel.png` | Konveyör kapasite genel görünüm | Bölüm 8 |
| E95 | `assets/FOTO-9-0-maintenance-genel.png` | Bakım erişim bölgeleri | Bölüm 9 |

---

## F — AYRI EVRAK TESLİMİ (kılavuz metni tamam)

Aşağıdaki **3 PDF** müşteriye fiziksel/dijital paket olarak verilir; kılavuz Bölüm **13.1.1** referansları güncel.

| # | Doküman | Dosya / not |
|---|---------|-------------|
| 1 | P&ID şeması | Teslim paketi PDF |
| 2 | Elektrik şeması | Teslim paketi PDF |
| 3 | Makine layout | `1726050-ALPER-KNV 30 LAYOUT.pdf` |

**Not:** BOM kılavuza gömülü (**13.3**); ayrı PDF **yok**.

---

## G — MEVCUT ASSETS

- `assets/1.2.2/bilgi1.svg`
- `assets/1.2.2/bilgi2.svg`
- `assets/1.2.2/bilgi3.svg`
- `assets/1.2.2/bilgi4.svg`
- `assets/1.2.2/bilgi5.svg`
- `assets/1.2.2/bilgi6.svg`
- `assets/1.2.2/bilgi7.svg`
- `assets/1.2.2/kkd1.webp`
- `assets/1.2.2/kkd2.svg`
- `assets/1.2.2/kkd3.svg`
- `assets/1.2.2/kkd4.svg`
- `assets/1.2.2/kkd5.svg`
- `assets/1.2.2/kkd6.svg`
- `assets/1.2.2/warning1.svg`
- `assets/1.2.2/warning2.svg`
- `assets/1.2.2/warning3.svg`
- `assets/1.2.2/warning4.svg`
- `assets/1.2.2/warning5.svg`
- `assets/1.2.2/warning6.jpg`
- `assets/1.2.2/warning7.svg`
- `assets/1.3/kimlik-etiketi-ornek-placeholder.svg`
- `assets/1726050-ALPER-KNV 30 3000 (1).png`
- `assets/1726050-ALPER-KNV 30 3000 2B PRO IDE LAYOUT.PDF`
- `assets/1726050-ALPER-KNV 30 3000(2).png`
- `assets/1726050-ALPER-KNV 30 3000(3).png`
- `assets/1726050-ALPER-KNV 30 3000(4).png`
- `assets/1726050-ALPER-KNV 30 3000(5).png`
- `assets/1726050-ALPER-KNV 30 3000(6).png`
- `assets/1726050-ALPER-KNV 30 3000.png`
- `assets/3.4/1.jpg`
- `assets/3.4/2.jpg`
- `assets/3.4/3.jpg`
- `assets/3.4/4.jpg`
- `assets/3.4/5.jpg`
- `assets/3.4/6.jpg`
- `assets/yedekparça.txt`

---

## TOPLAM

| Kategori | Adet |
|----------|------|
| DATA kalan boş alan | 34 |
| MD [EKSİK] (8/13/14 hariç) | 26 |
| Eksik yedek parça fotoğrafı (9.1) | 22 |
| Eksik HMI / FOTO görsel | 110 |
| Mevcut asset dosyası | 36 |
