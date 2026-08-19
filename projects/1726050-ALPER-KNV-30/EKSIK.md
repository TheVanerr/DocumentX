# 1726050-ALPER-KNV-30 — KILAVUZ TAMAMLAMA EKSİK LİSTESİ

> **Amaç:** Kılavuzun tamamlanması için sizden beklenen bilgi, fotoğraf, çizim ve dokümanlar.
> **Kaynak:** DATA dosyası + tüm `.tr.md` dosyaları + `assets/` taraması.
> **Klasör:** Fotoğrafları belirtilen dosya adıyla `projects/1726050-ALPER-KNV-30/assets/` altına koyun.

---

## ÖNCELİK ÖZETİ

| Öncelik | Konu | Neden |
|---------|------|-------|
| P1 | HMI ekran görüntüleri | Bölüm 3.4, 6, 7, 11 tamamlanamaz |
| P1 | Makine / modül fotoğrafları | Bölüm 3.1–3.5, 5 görselleri boş |
| P1 | Kimlik etiketi gerçek fotoğrafı | Bölüm 1.3 placeholder SVG |
| P2 | Bakım periyodu tablosu | Bölüm 9.1.3 DATA'da tamamen boş |
| P2 | Kapasite / ürün limitleri | Bölüm 3.3, 8 tabloları |
| P3 | Harici evraklar (şema, BOM, CE) | Bölüm 13 referansları |

---

## A — DATA DOSYASINDA EKSİK / BELİRSİZ ALANLAR (75 madde)

| Blok | Alan | Mevcut |
|------|------|--------|
| PROJE | Makine ticari adı | (boş) |
| MAKINE_TANIMI | Opsiyon / varyant listesi (bu projeye özel) | (boş) |
| KAPASITE_PROSES | Nominal kapasite (adet/saat veya kg/saat) | (boş) |
| KAPASITE_PROSES | Maksimum kapasite (adet/saat) | Bilinmiyor |
| KAPASITE_PROSES | Ürün formatı / ambalaj tipi | Bilinmiyor |
| KAPASITE_PROSES | Ürün boyutu min (mm) | Bilinmiyor |
| KAPASITE_PROSES | Ürün boyutu max (mm) | Bilinmiyor |
| KAPASITE_PROSES | Ürün ağırlığı min (g) | Bilinmiyor |
| KAPASITE_PROSES | Ürün ağırlığı max (g) | Bilinmiyor |
| SIKIŞTIRILMIŞ_HAVA_SU | Drain / atık su hattı çap (mm) | (boş) |
| KONTROL_FONKSIYONLARI | Ana ekran menü yapısı | (boş) |
| KONTROL_FONKSIYONLARI | Trend / log kayıt süresi | (boş) |
| TASIMA | Taşıma yüksekliği max (m — deniz / kara) | (boş) |
| ILETISIM | Üst sistem (MES / SCADA) bağlantısı | Bilinmiyor |
| URUN_KAPASITE | Nominal kapasite tablosu (ürün × adet/saat) | Kullanıcı firma tarafından ayarlanır. |
| URUN_KAPASITE | Test edilen kapasite (adet/saat) | Kullanıcı firma tarafından ayarlanır. |
| URUN_KAPASITE | Kapasite test koşulları | Kullanıcı firma tarafından ayarlanır. |
| OZEL_KURULUM | Ürün A parametreleri | Kullanıcı firma tarafından ayarlanır. |
| OZEL_KURULUM | Ürün B parametreleri | Kullanıcı firma tarafından ayarlanır. |
| OZEL_KURULUM | Ürün C parametreleri | Kullanıcı firma tarafından ayarlanır. |
| OZEL_KURULUM | Reçete no listesi | Kullanıcı firma tarafından ayarlanır. |
| BAKIM_PERIYOT | Günlük bakım maddeleri | (boş) |
| BAKIM_PERIYOT | Haftalık bakım maddeleri | (boş) |
| BAKIM_PERIYOT | Aylık bakım maddeleri | (boş) |
| BAKIM_PERIYOT | 250 saat bakım maddeleri | (boş) |
| BAKIM_PERIYOT | 500 saat bakım maddeleri | (boş) |
| BAKIM_PERIYOT | 1000 saat bakım maddeleri | (boş) |
| BAKIM_PERIYOT | Yıllık bakım maddeleri | (boş) |
| BAKIM_YAGLAMA | Gres tipi | (boş) |
| BAKIM_YAGLAMA | Redüktör yağ değişim | (boş) |
| BAKIM_YEDEK_PARCA | Kritik yedek parça listesi | (boş) |
| BAKIM_YEDEK_PARCA | Önerilen stok miktarları | (boş) |
| BAKIM_YEDEK_PARCA | Yedek parça sipariş kodu referansı | (boş) |
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
| DOKUMANLAR | Elektrik şeması dosya adı / rev | Ayrı evrak olarak teslim edilir |
| DOKUMANLAR | Pnömatik şema dosya adı / rev | Ayrı evrak olarak teslim edilir |
| DOKUMANLAR | Parça listesi (BOM) dosya adı / rev | Ayrı evrak olarak teslim edilir |
| DOKUMANLAR | PLC program yedek dosya adı | Ayrı evrak olarak teslim edilir |
| DOKUMANLAR | HMI proje yedek dosya adı | Ayrı evrak olarak teslim edilir |
| DOKUMANLAR | CE dosyası referansı | Ayrı evrak olarak teslim edilir |
| DOKUMANLAR | Kalibrasyon sertifikaları | Ayrı evrak olarak teslim edilir (varsa) |
| DOKUMANLAR | P&ID dosya adı / rev | Ayrı evrak olarak teslim edilir |
| CIZIMLER | Genel montaj çizimi | Ayrı evrak olarak teslim edilir |
| CIZIMLER | Kaldırma noktaları çizimi | Ayrı evrak olarak teslim edilir |
| CIZIMLER | Zemin ankraj çizimi | Ayrı evrak olarak teslim edilir (varsa) |
| CIZIMLER | Müşteriye teslim çizim paketi | Ayrı evrak olarak teslim edilir |
| PARCA_LISTESI | Mekanik parça listesi referansı | Ayrı evrak olarak teslim edilir |
| PARCA_LISTESI | Elektrik parça listesi referansı | Ayrı evrak olarak teslim edilir |
| PARCA_LISTESI | Wear part / aşınan parça listesi | Ayrı evrak olarak teslim edilir |
| EKLER | Ek C — Reçete örnekleri | Kullanıcı firma (8.2) |
| EKLER | Ek D — Garanti belgesi | Ayrı evrak (13.1.3) |

---

## B — MD DOSYALARINDA [EKSİK] İŞARETLİ SATIRLAR (39 satır)

| Bölüm | Dosya | Satır | İçerik |
|-------|-------|-------|--------|
| Bölüm 1 — Giriş | `01-introduction/01-intro-handbook/intro-handbook.tr.md` | 7 | **Kapsam:** KNV 30 3000 2B opsiyon seti ve bu projeye teslim edilen donanım. Makine ticari adı DATA  |
| Bölüm 1 — Giriş | `01-introduction/01-intro-handbook/intro-handbook.tr.md` | 33 | \| **Revizyon** \| [EKSİK] \| |
| Bölüm 1 — Giriş | `01-introduction/01-intro-handbook/intro-handbook.tr.md` | 34 | \| **Son güncelleme** \| [EKSİK] \| |
| Bölüm 1 — Giriş | `01-introduction/01-intro-handbook/intro-handbook.tr.md` | 35 | \| **Hazırlayan** \| [EKSİK] \| |
| Bölüm 1 — Giriş | `01-introduction/01-intro-handbook/intro-handbook.tr.md` | 36 | \| **Onaylayan** \| [EKSİK] \| |
| Bölüm 3 — Genel bakış | `03-overview/03-machine-spec/machine-spec.tr.md` | 32 | \| Nominal kapasite \| [EKSİK] \| |
| Bölüm 3 — Genel bakış | `03-overview/03-machine-spec/machine-spec.tr.md` | 87 | Toplam kurutma fan gücü: **16 kW**. Kurutma fanları marka/model bilgisi DATA dosyasında [EKSİK] olar |
| Bölüm 3 — Genel bakış | `03-overview/03-machine-spec/machine-spec.tr.md` | 102 | \| Drain / atık su hattı çap \| [EKSİK] \| |
| Bölüm 3 — Genel bakış | `03-overview/04-machine-controls/machine-controls.tr.md` | 108 | \| Trend / log kayıt süresi \| [EKSİK] \| |
| Bölüm 4 — Taşıma | `04-transport/01-transport/transporting.tr.md` | 18 | \| Maks. taşıma yüksekliği (deniz/kara) \| [EKSİK] \| |
| Bölüm 9 — Bakım | `09-maintenance/01-main-inst/main-inst.tr.md` | 37 | \| Günlük \| [EKSİK] \| |
| Bölüm 9 — Bakım | `09-maintenance/01-main-inst/main-inst.tr.md` | 38 | \| Haftalık \| [EKSİK] \| |
| Bölüm 9 — Bakım | `09-maintenance/01-main-inst/main-inst.tr.md` | 39 | \| Aylık \| [EKSİK] \| |
| Bölüm 9 — Bakım | `09-maintenance/01-main-inst/main-inst.tr.md` | 40 | \| 250 saat \| [EKSİK] \| |
| Bölüm 9 — Bakım | `09-maintenance/01-main-inst/main-inst.tr.md` | 41 | \| 500 saat \| [EKSİK] \| |
| Bölüm 9 — Bakım | `09-maintenance/01-main-inst/main-inst.tr.md` | 42 | \| 1000 saat \| [EKSİK] \| |
| Bölüm 9 — Bakım | `09-maintenance/01-main-inst/main-inst.tr.md` | 43 | \| Yıllık \| [EKSİK] \| |
| Bölüm 9 — Bakım | `09-maintenance/01-main-inst/main-inst.tr.md` | 63 | \| Gres tipi \| [EKSİK] \| |
| Bölüm 9 — Bakım | `09-maintenance/01-main-inst/main-inst.tr.md` | 64 | \| Redüktör yağ değişimi \| [EKSİK] \| |
| Bölüm 9 — Bakım | `09-maintenance/01-main-inst/main-inst.tr.md` | 65 | \| Periyot \| [EKSİK] \| |
| Bölüm 9 — Bakım | `09-maintenance/01-main-inst/main-inst.tr.md` | 79 | \| Kritik yedek parça listesi \| [EKSİK] \| |
| Bölüm 9 — Bakım | `09-maintenance/01-main-inst/main-inst.tr.md` | 80 | \| Önerilen stok miktarları \| [EKSİK] \| |
| Bölüm 9 — Bakım | `09-maintenance/01-main-inst/main-inst.tr.md` | 81 | \| Yedek parça sipariş kodu referansı \| [EKSİK] \| |
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
| Bölüm 13 — Dokümanlar | `13-documents/03-part-list/part-list.tr.md` | 22 | \| Kritik yedek parça (operasyonel) \| Bölüm **9.1.5** — `[EKSİK]` \| |
| Bölüm 13 — Dokümanlar | `13-documents/03-part-list/part-list.tr.md` | 23 | \| Yedek parça sipariş kodları \| Bölüm **9.1.5** — `[EKSİK]` \| |

---

## B.1 — KRİTİK: HMI EKRAN GÖRÜNTÜLERİ (P1)

Kontrol panosu ve operasyon bölümleri bu fotoğraflar olmadan tamamlanamaz. Hepsini `assets/` köküne aşağıdaki **dosya adlarıyla** kaydedin.

| Dosya adı | Ne çekilecek | Bölüm |
|-----------|--------------|-------|
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

**Ek DATA bilgisi (HMI ile birlikte verin):**
- Ana ekran menü yapısı (ekran görüntüsü veya madde listesi)
- Trend / log kayıt süresi
- Şifre seviyeleri (operatör / bakım / admin) ayrımı varsa

**Kurutma fan motorları:** DATA'da 4 kurutma fanı için marka/model boş — motor etiketi fotoğrafı veya teknik bilgi gerekli (Bölüm 3.3.4).

---

## C — EKSİK FOTOĞRAF / GÖRSEL DOSYALARI (110 referans)

Her satırda: hedef dosya yolu, açıklama (varsa alt metin), kullanıldığı bölüm.

| # | Hedef dosya / yol | Açıklama (çekilecek fotoğraf) | Kullanıldığı bölüm |
|---|-------------------|-------------------------------|-------------------|
| C1 | `assets/FOTO-10-1-3-on-filtre.png` | Yıkama tankı ön filtreleri | Bölüm 10 — Temizlik — `10-cleaning/01-clean-sanitize/clean-sanitize.tr.md` |
| C2 | `assets/FOTO-10-1-4-tank-filtre.png` | Tank filtreleri | Bölüm 10 — Temizlik — `10-cleaning/01-clean-sanitize/clean-sanitize.tr.md` |
| C3 | `assets/FOTO-10-1-4-torba-filtre.png` | Pompa çıkışı torba filtre | Bölüm 10 — Temizlik — `10-cleaning/01-clean-sanitize/clean-sanitize.tr.md` |
| C4 | `assets/FOTO-3-1-0-genel-gorunum.png` | KNV-30 3000 2B genel görünüm | Bölüm 3 — Genel bakış — `03-overview/01-machine-description/machine-description.tr.md` |
| C5 | `assets/FOTO-3-1-1-proses-akisi.png` | Proses akışı — yıkama, durulama, kurutma | Bölüm 3 — Genel bakış — `03-overview/01-machine-description/machine-description.tr.md` |
| C6 | `assets/FOTO-3-1-10-elektrik-panosu.png` | Elektrik panosu | Bölüm 3 — Genel bakış — `03-overview/01-machine-description/machine-description.tr.md` |
| C7 | `assets/FOTO-3-1-11-hmi-ekran.png` | HMI arayüzü | Bölüm 3 — Genel bakış — `03-overview/01-machine-description/machine-description.tr.md` |
| C8 | `assets/FOTO-3-1-12-medya-baglantilari.png` | Medya bağlantı noktaları | Bölüm 3 — Genel bakış — `03-overview/01-machine-description/machine-description.tr.md` |
| C9 | `assets/FOTO-3-1-13-bakim-kapaklari.png` | Bakım erişim kapakları — makine arkası | Bölüm 3 — Genel bakış — `03-overview/01-machine-description/machine-description.tr.md` |
| C10 | `assets/FOTO-3-1-2-konveyor-giris-cikis.png` | Konveyör giriş-çıkış görünümü | Bölüm 3 — Genel bakış — `03-overview/01-machine-description/machine-description.tr.md` |
| C11 | `assets/FOTO-3-1-3-konveyor-motor.png` | Konveyör redüktör motoru | Bölüm 3 — Genel bakış — `03-overview/01-machine-description/machine-description.tr.md` |
| C12 | `assets/FOTO-3-1-4-yikama-banyosu.png` | Yıkama banyosu genel görünüm | Bölüm 3 — Genel bakış — `03-overview/01-machine-description/machine-description.tr.md` |
| C13 | `assets/FOTO-3-1-5-yikama-pompasi.png` | Yıkama pompası | Bölüm 3 — Genel bakış — `03-overview/01-machine-description/machine-description.tr.md` |
| C14 | `assets/FOTO-3-1-6-durulama-banyosu.png` | Durulama banyosu genel görünüm | Bölüm 3 — Genel bakış — `03-overview/01-machine-description/machine-description.tr.md` |
| C15 | `assets/FOTO-3-1-7-yag-siyirici.png` | Yağ sıyırıcı ünite | Bölüm 3 — Genel bakış — `03-overview/01-machine-description/machine-description.tr.md` |
| C16 | `assets/FOTO-3-1-8-kurutma-fanlari.png` | Kurutma fanları | Bölüm 3 — Genel bakış — `03-overview/01-machine-description/machine-description.tr.md` |
| C17 | `assets/FOTO-3-1-9-egzost-fani.png` | Egzost fanı | Bölüm 3 — Genel bakış — `03-overview/01-machine-description/machine-description.tr.md` |
| C18 | `assets/FOTO-3-2-0-parca-yukleme.png` | Tipik kullanım — parça yükleme | Bölüm 3 — Genel bakış — `03-overview/02-intended-use/intended-use.tr.md` |
| C19 | `assets/FOTO-3-2-1-islenebilir-parcalar.png` | İşlenebilir parça örnekleri | Bölüm 3 — Genel bakış — `03-overview/02-intended-use/intended-use.tr.md` |
| C20 | `assets/FOTO-3-2-2-yasak-kullanim-uyari.png` | Proses bölgesi — endüstriyel parça kullanımı | Bölüm 3 — Genel bakış — `03-overview/02-intended-use/intended-use.tr.md` |
| C21 | `assets/FOTO-3-2-3-su-baglantisi.png` | Proses suyu bağlantısı | Bölüm 3 — Genel bakış — `03-overview/02-intended-use/intended-use.tr.md` |
| C22 | `assets/FOTO-3-2-4-kurulum-alani.png` | Kurulum alanı — iç mekan | Bölüm 3 — Genel bakış — `03-overview/02-intended-use/intended-use.tr.md` |
| C23 | `assets/FOTO-3-2-5-operator-hmi.png` | Operatör — HMI paneli | Bölüm 3 — Genel bakış — `03-overview/02-intended-use/intended-use.tr.md` |
| C24 | `assets/FOTO-3-3-0-dis-boyutlar.png` | Dış boyutlar | Bölüm 3 — Genel bakış — `03-overview/03-machine-spec/machine-spec.tr.md` |
| C25 | `assets/FOTO-3-3-1-proses-bolgeleri.png` | Proses bölgeleri | Bölüm 3 — Genel bakış — `03-overview/03-machine-spec/machine-spec.tr.md` |
| C26 | `assets/FOTO-3-3-2-elektrik-besleme.png` | Elektrik beslemesi | Bölüm 3 — Genel bakış — `03-overview/03-machine-spec/machine-spec.tr.md` |
| C27 | `assets/FOTO-3-3-3-motor-gruplari.png` | Motor listesi — tahrik üniteleri | Bölüm 3 — Genel bakış — `03-overview/03-machine-spec/machine-spec.tr.md` |
| C28 | `assets/FOTO-3-3-4-medya-baglantilari.png` | Medya bağlantıları | Bölüm 3 — Genel bakış — `03-overview/03-machine-spec/machine-spec.tr.md` |
| C29 | `assets/FOTO-3-4-0-kontrol-panosu.png` | Kontrol panosu genel görünüm | Bölüm 3 — Genel bakış — `03-overview/04-machine-controls/machine-controls.tr.md` |
| C30 | `assets/FOTO-3-4-1-hmi-calisma.png` | HMI çalışma sayfası | Bölüm 3 — Genel bakış — `03-overview/04-machine-controls/machine-controls.tr.md` |
| C31 | `assets/FOTO-3-4-2-hmi-manuel.png` | HMI manuel sayfa | Bölüm 3 — Genel bakış — `03-overview/04-machine-controls/machine-controls.tr.md` |
| C32 | `assets/FOTO-3-4-3-plc-modul.png` | PLC modülleri | Bölüm 3 — Genel bakış — `03-overview/04-machine-controls/machine-controls.tr.md` |
| C33 | `assets/FOTO-3-4-4-acil-stop.png` | Acil stop konumları | Bölüm 3 — Genel bakış — `03-overview/04-machine-controls/machine-controls.tr.md` |
| C34 | `assets/FOTO-3-4-5-tepe-lambasi.png` | Tepe lambası | Bölüm 3 — Genel bakış — `03-overview/04-machine-controls/machine-controls.tr.md` |
| C35 | `assets/FOTO-3-4-6-hmi-alarm.png` | HMI alarm ekranı | Bölüm 3 — Genel bakış — `03-overview/04-machine-controls/machine-controls.tr.md` |
| C36 | `assets/FOTO-3-5-0-layout-genel.png` | Genel yerleşim planı | Bölüm 3 — Genel bakış — `03-overview/05-machine-layout/machine-layout.tr.md` |
| C37 | `assets/FOTO-3-5-1-yon-tanimlari.png` | Yön tanımları | Bölüm 3 — Genel bakış — `03-overview/05-machine-layout/machine-layout.tr.md` |
| C38 | `assets/FOTO-3-5-2-etraf-bosluklari.png` | Etraf boşlukları | Bölüm 3 — Genel bakış — `03-overview/05-machine-layout/machine-layout.tr.md` |
| C39 | `assets/FOTO-3-5-3-bakim-kapaklari.png` | Bakım erişim kapakları | Bölüm 3 — Genel bakış — `03-overview/05-machine-layout/machine-layout.tr.md` |
| C40 | `assets/FOTO-3-5-4-forklift-noktalari.png` | Forklift taşıma noktaları | Bölüm 3 — Genel bakış — `03-overview/05-machine-layout/machine-layout.tr.md` |
| C41 | `assets/FOTO-5-1-0-forklift-tasima.png` | Forklift taşıma | Bölüm 5 — Kurulum — `05-assembly/01-machine-assembly/machine-assembly.tr.md` |
| C42 | `assets/FOTO-5-1-1-ayarlanabilir-ayak.png` | Ayarlanabilir ayaklar — terazi | Bölüm 5 — Kurulum — `05-assembly/01-machine-assembly/machine-assembly.tr.md` |
| C43 | `assets/FOTO-5-1-2-hava-baglantisi.png` | Basınçlı hava bağlantısı | Bölüm 5 — Kurulum — `05-assembly/01-machine-assembly/machine-assembly.tr.md` |
| C44 | `assets/FOTO-5-1-3-su-baglantisi.png` | Su bağlantısı | Bölüm 5 — Kurulum — `05-assembly/01-machine-assembly/machine-assembly.tr.md` |
| C45 | `assets/FOTO-5-1-4-elektrik-baglantisi.png` | Elektrik besleme bağlantısı | Bölüm 5 — Kurulum — `05-assembly/01-machine-assembly/machine-assembly.tr.md` |
| C46 | `assets/FOTO-5-1-5-faz-sira-role.png` | Faz sıra rölesi | Bölüm 5 — Kurulum — `05-assembly/01-machine-assembly/machine-assembly.tr.md` |
| C47 | `assets/FOTO-5-1-6-montaj-tamamlandi.png` | Montaj tamamlandı | Bölüm 5 — Kurulum — `05-assembly/01-machine-assembly/machine-assembly.tr.md` |
| C48 | `assets/FOTO-5-2-0-kurulum-alani.png` | Kurulum alanı — boşluk planı | Bölüm 5 — Kurulum — `05-assembly/02-machine-position/machine-position.tr.md` |
| C49 | `assets/FOTO-5-2-1-yon-tanimlari.png` | Yön tanımları | Bölüm 5 — Kurulum — `05-assembly/02-machine-position/machine-position.tr.md` |
| C50 | `assets/FOTO-5-2-2-seviye-ayari.png` | Ayarlanabilir ayak — seviye | Bölüm 5 — Kurulum — `05-assembly/02-machine-position/machine-position.tr.md` |
| C51 | `assets/FOTO-5-2-3-bakim-erisim.png` | Bakım erişim alanı — arka | Bölüm 5 — Kurulum — `05-assembly/02-machine-position/machine-position.tr.md` |
| C52 | `assets/FOTO-5-3-0-hava-baglantisi.png` | Basınçlı hava bağlantısı | Bölüm 5 — Kurulum — `05-assembly/03-machine-install/machine-install.tr.md` |
| C53 | `assets/FOTO-5-3-1-su-baglantisi.png` | Su bağlantısı | Bölüm 5 — Kurulum — `05-assembly/03-machine-install/machine-install.tr.md` |
| C54 | `assets/FOTO-5-3-2-elektrik-baglantisi.png` | Elektrik bağlantısı | Bölüm 5 — Kurulum — `05-assembly/03-machine-install/machine-install.tr.md` |
| C55 | `assets/FOTO-5-3-3-faz-kontrol.png` | Faz kontrolü — pano içi | Bölüm 5 — Kurulum — `05-assembly/03-machine-install/machine-install.tr.md` |
| C56 | `assets/FOTO-5-3-4-hmi-manuel-durum.png` | HMI manuel sayfa — bağlantı durumu | Bölüm 5 — Kurulum — `05-assembly/03-machine-install/machine-install.tr.md` |
| C57 | `assets/FOTO-5-4-0-acil-stop.png` | Acil stop konumları | Bölüm 5 — Kurulum — `05-assembly/04-safety-test/safety-test.tr.md` |
| C58 | `assets/FOTO-5-4-1-reset-butonu.png` | Reset butonu — pano etiketi | Bölüm 5 — Kurulum — `05-assembly/04-safety-test/safety-test.tr.md` |
| C59 | `assets/FOTO-5-4-2-rfid-sensor.png` | RFID güvenlik sensörü | Bölüm 5 — Kurulum — `05-assembly/04-safety-test/safety-test.tr.md` |
| C60 | `assets/FOTO-5-4-3-faz-koruma.png` | Faz koruma rölesi | Bölüm 5 — Kurulum — `05-assembly/04-safety-test/safety-test.tr.md` |
| C61 | `assets/FOTO-5-4-4-tepe-lambasi-sari.png` | Tepe lambası — kullanıma hazır | Bölüm 5 — Kurulum — `05-assembly/04-safety-test/safety-test.tr.md` |
| C62 | `assets/FOTO-5-5-0-terazi-test.png` | Mekanik test — terazi kontrolü | Bölüm 5 — Kurulum — `05-assembly/05-install-test/install-test.tr.md` |
| C63 | `assets/FOTO-5-5-1-elektrik-test.png` | Elektrik devreye alma testi | Bölüm 5 — Kurulum — `05-assembly/05-install-test/install-test.tr.md` |
| C64 | `assets/FOTO-5-5-2-medya-test.png` | Pnömatik/medya test — HMI manuel | Bölüm 5 — Kurulum — `05-assembly/05-install-test/install-test.tr.md` |
| C65 | `assets/FOTO-5-5-3-guvenlik-test.png` | Güvenlik fonksiyon testi | Bölüm 5 — Kurulum — `05-assembly/05-install-test/install-test.tr.md` |
| C66 | `assets/FOTO-5-5-4-bos-kosu.png` | Boş koşu testi — 15 dk | Bölüm 5 — Kurulum — `05-assembly/05-install-test/install-test.tr.md` |
| C67 | `assets/FOTO-5-6-0-profinet.png` | Profinet altyapısı — PLC/HMI | Bölüm 5 — Kurulum — `05-assembly/06-comm/comm.tr.md` |
| C68 | `assets/FOTO-5-6-1-secomea.png` | Secomea modülü | Bölüm 5 — Kurulum — `05-assembly/06-comm/comm.tr.md` |
| C69 | `assets/FOTO-5-6-2-io-listesi.png` | I/O listesi referansı | Bölüm 5 — Kurulum — `05-assembly/06-comm/comm.tr.md` |
| C70 | `assets/FOTO-6-1-0-referans-home.png` | Referans pozisyon — konveyör başı | Bölüm 6 — Ayarlar — `06-settings/01-mechanical-settings/mechanical-settings.tr.md` |
| C71 | `assets/FOTO-6-2-0-acil-stop-periyot.png` | Acil stop periyodik test | Bölüm 2 — Güvenlik — `06-settings/02-safety-settings/safety-settings.tr.md` |
| C72 | `assets/FOTO-6-3-0-encoder.png` | Encoder ayarı — PLC | Bölüm 6 — Ayarlar — `06-settings/03-electrical-settings/electrical-settings.tr.md` |
| C73 | `assets/FOTO-6-3-1-sicaklik-ayar.png` | HMI sıcaklık ayarı | Bölüm 6 — Ayarlar — `06-settings/03-electrical-settings/electrical-settings.tr.md` |
| C74 | `assets/FOTO-6-3-2-hmi-tarih-dil.png` | HMI tarih saat dil ayarı | Bölüm 6 — Ayarlar — `06-settings/03-electrical-settings/electrical-settings.tr.md` |
| C75 | `assets/FOTO-6-5-0-regulator.png` | Pnömatik regülatör 6 bar | Bölüm 6 — Ayarlar — `06-settings/05-pnomatic-settings/pnomatic-settings.tr.md` |
| C76 | `assets/FOTO-7-1-0-calisma-sayfasi.png` | HMI proses seçenekleri | Bölüm 7 — Operasyon — `07-operation/01-operating-modes/operating-modes.tr.md` |
| C77 | `assets/FOTO-7-2-0-start.png` | HMI start butonu | Bölüm 7 — Operasyon — `07-operation/02-machine-start/machine-start.tr.md` |
| C78 | `assets/FOTO-7-2-1-hazirlik.png` | HMI hazırlık butonu | Bölüm 7 — Operasyon — `07-operation/02-machine-start/machine-start.tr.md` |
| C79 | `assets/FOTO-7-3-0-reset.png` | Reset butonu — acil stop sonrası | Bölüm 7 — Operasyon — `07-operation/03-shut-down/shut-down.tr.md` |
| C80 | `assets/FOTO-7-4-0-konveyor.png` | Konveyör parça akışı | Bölüm 7 — Operasyon — `07-operation/04-operating-sequence/operating-sequence.tr.md` |
| C81 | `assets/FOTO-8-2-0-recete.png` | HMI reçete ayar sayfası | Bölüm 8 — Kapasite — `08-capacity/02-specific-setup/specific-setup.tr.md` |
| C82 | `assets/FOTO-9-1-4-yaglama-cikis.png` | Konveyör çıkış yağlama noktaları | Bölüm 9 — Bakım — `09-maintenance/01-main-inst/main-inst.tr.md` |
| C83 | `assets/FOTO-9-1-4-yaglama-giris.png` | Konveyör giriş yağlama noktaları | Bölüm 9 — Bakım — `09-maintenance/01-main-inst/main-inst.tr.md` |
| C84 | `assets/labels/info/bilgi1.svg` | Koruyucu topraklama | Bölüm 1 — Giriş — `01-introduction/02-symbols-conventions/symbols-conventions.tr.md` |
| C85 | `assets/labels/info/bilgi2.svg` | Kilitleme zorunlu | Bölüm 1 — Giriş — `01-introduction/02-symbols-conventions/symbols-conventions.tr.md` |
| C86 | `assets/labels/info/bilgi3.svg` | Su tahliyesi | Bölüm 1 — Giriş — `01-introduction/02-symbols-conventions/symbols-conventions.tr.md` |
| C87 | `assets/labels/info/bilgi4.svg` | Basınçlı hava girişi | Bölüm 1 — Giriş — `01-introduction/02-symbols-conventions/symbols-conventions.tr.md` |
| C88 | `assets/labels/info/bilgi5.svg` | Su girişi | Bölüm 1 — Giriş — `01-introduction/02-symbols-conventions/symbols-conventions.tr.md` |
| C89 | `assets/labels/info/bilgi6.svg` | Tank dolumu | Bölüm 1 — Giriş — `01-introduction/02-symbols-conventions/symbols-conventions.tr.md` |
| C90 | `assets/labels/info/bilgi7.svg` | Emniyet kilidi | Bölüm 1 — Giriş — `01-introduction/02-symbols-conventions/symbols-conventions.tr.md` |
| C91 | `assets/labels/kkd/kkd2.svg` | Koruyucu giysi | Bölüm 1 — Giriş — `01-introduction/02-symbols-conventions/symbols-conventions.tr.md` |
| C92 | `assets/labels/kkd/kkd3.svg` | Emniyet ayakkabısı | Bölüm 1 — Giriş — `01-introduction/02-symbols-conventions/symbols-conventions.tr.md` |
| C93 | `assets/labels/kkd/kkd4.svg` | Koruyucu eldiven | Bölüm 1 — Giriş — `01-introduction/02-symbols-conventions/symbols-conventions.tr.md` |
| C94 | `assets/labels/kkd/kkd5.svg` | Koruyucu gözlük | Bölüm 1 — Giriş — `01-introduction/02-symbols-conventions/symbols-conventions.tr.md` |
| C95 | `assets/labels/kkd/kkd6.svg` | Solunum maskesi | Bölüm 1 — Giriş — `01-introduction/02-symbols-conventions/symbols-conventions.tr.md` |
| C96 | `assets/labels/warning/warning1.svg` | Genel tehlike | Bölüm 1 — Giriş — `01-introduction/02-symbols-conventions/symbols-conventions.tr.md` |
| C97 | `assets/labels/warning/warning2.svg` | Sıcak yüzey | Bölüm 1 — Giriş — `01-introduction/02-symbols-conventions/symbols-conventions.tr.md` |
| C98 | `assets/labels/warning/warning3.svg` | Aşındırıcı madde | Bölüm 1 — Giriş — `01-introduction/02-symbols-conventions/symbols-conventions.tr.md` |
| C99 | `assets/labels/warning/warning4.svg` | Ezilme tehlikesi | Bölüm 1 — Giriş — `01-introduction/02-symbols-conventions/symbols-conventions.tr.md` |
| C100 | `assets/labels/warning/warning5.svg` | Kaygan zemin | Bölüm 1 — Giriş — `01-introduction/02-symbols-conventions/symbols-conventions.tr.md` |
| C101 | `assets/labels/warning/warning7.svg` | Elektrik tehlikesi | Bölüm 1 — Giriş — `01-introduction/02-symbols-conventions/symbols-conventions.tr.md` |
| C102 | `assets/FOTO-10-0-cleaning-genel.png` | Tank ve filtre temizlik genel görünüm | Bölüm 10 — Temizlik — `10-cleaning/cleaning.tr.md` |
| C103 | `assets/FOTO-11-0-alarm-genel.png` | HMI alarm ekranı | Bölüm 11 — Arıza giderme — `11-troubleshooting/troubleshooting.tr.md` |
| C104 | `assets/FOTO-12-0-dismantle-genel.png` | Demontaj genel görünüm | Bölüm 12 — Demontaj — `12-dismantle/dismantle.tr.md` |
| C105 | `assets/FOTO-3-0-overview-genel.png` | KNV 30 3000 2B genel görünüm | Bölüm 3 — Genel bakış — `03-overview/overview.tr.md` |
| C106 | `assets/FOTO-5-0-assembly-genel.png` | Kurulum alanı — makine yerleştirme | Bölüm 5 — Kurulum — `05-assembly/assembly.tr.md` |
| C107 | `assets/FOTO-6-0-settings-genel.png` | HMI ayar sayfası | Bölüm 6 — Ayarlar — `06-settings/settings.tr.md` |
| C108 | `assets/FOTO-7-0-operation-genel.png` | HMI çalışma sayfası | Bölüm 7 — Operasyon — `07-operation/operation.tr.md` |
| C109 | `assets/FOTO-8-0-capacity-genel.png` | Konveyör kapasite genel görünüm | Bölüm 8 — Kapasite — `08-capacity/capacity.tr.md` |
| C110 | `assets/FOTO-9-0-maintenance-genel.png` | Bakım erişim bölgeleri | Bölüm 9 — Bakım — `09-maintenance/maintenance.tr.md` |

---

## D — MEVCUT ASSETS KLASÖRÜ

Şu an projede yüklü dosyalar:

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

**Not:** Kök dizinde adlandırılmamış genel makine PNG/PDF dosyaları varsa bunları yukarıdaki FOTO-* isimlerine eşleştirin.

---

## E — SAHA ZİYARETİ HIZLI FOTOĞRAF LİSTESİ

Tek seferde çekilebilecek minimum set:

1. Makine genel — 4 açı (ön, arka, sol, sağ)
2. Elektrik panosu — kapak kapalı + açık (PLC, şalter, reset, faz rölesi)
3. **HMI ekran serisi** — çalışma, manuel, alarm, ayar, hazırlık, start, reçete, sıcaklık
4. Acil stop — 4 konum
5. Medya bağlantıları — hava regülatör 6 bar, su 1 bar, elektrik 380V
6. Tank bölgeleri — yıkama, durulama, yağ sıyırıcı, kurutma fanları
7. Filtreler — ön filtre, tank filtresi, torba filtre
8. Yağlama noktaları — konveyör giriş/çıkış (4 nokta işaretli)
9. Kimlik etiketi — okunaklı close-up
10. Tepe lambası — sarı (hazır) ve kırmızı (alarm)
11. RFID sensör + bakım kapakları
12. Forklift noktaları — makine alt profil

---

## F — HARİCİ DOKÜMANLAR (ayrı teslim)

| Doküman | DATA durumu | Bölüm |
|---------|-------------|-------|
| Elektrik şeması | Ayrı evrak | 13.1 |
| Pnömatik şema | Ayrı evrak | 13.1 |
| Layout PDF | `1726050-ALPER-KNV 30 LAYOUT.pdf` | 3.5, 13.1 |
| I/O listesi PDF | `1726050-ALPER-KNV 30 I/O LISTESI.pdf` | 5.6, 13.1 |
| BOM / parça listesi | Ayrı evrak | 13.3 |
| PLC program yedek | Ayrı evrak | 13.1 |
| HMI proje yedek (.fw7) | Ayrı evrak | 13.1 |
| CE dosyası | Ayrı evrak | 13.1, Ek D |
| Kalibrasyon sertifikaları | Varsa | 13.1 |
| P&ID | Ayrı evrak | 13.1 |
| Montaj / kaldırma / ankraj çizimleri | Ayrı evrak | 13.2 |
| Garanti belgesi | Ayrı evrak | Ek D |

---

## TOPLAM

| Kategori | Adet |
|----------|------|
| DATA boş / belirsiz alan | 75 |
| MD [EKSİK] satırı | 39 |
| Eksik görsel referansı | 110 |
| Mevcut asset dosyası | 29 |

*Tamamlanan maddeleri işaretleyin; liste güncellendiğinde script yeniden çalıştırılabilir: `python scripts/scan-eksik-alper.py`*
