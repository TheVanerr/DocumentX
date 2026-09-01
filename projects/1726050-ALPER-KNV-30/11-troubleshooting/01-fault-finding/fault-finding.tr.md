# 11.1 Arıza bulma

Arıza teşhisinde önce HMI'daki **aktif alarm kodu** okunur; ardından bu bölümdeki tabloya göre kontrol ve çözüm adımları uygulanır. Tabloda çözüm bulunmayan veya tekrarlayan arızalarda ilgili alt bölüme (**11.3**–**11.7**) ve **Bölüm 11.2.2** servis kriterlerine bakın.

---

## 11.1.1 Genel teşhis adımları

1. Makine durmuşsa tepe lambası rengini kontrol edin — **kırmızı** alarm, **sarı** hazır, **yeşil** çalışıyor (bkz. **Bölüm 3.4.6**).
2. HMI **Alarm Sayfası**'nı açın; aktif alarm **No.**, **Metin** ve zaman bilgisini okuyun.
3. Aşağıdaki **11.1.2** PLC alarm tablosunda kodu bulun.
4. **Sorun açıklaması** ve **Olası neden** sütunlarını okuyun.
5. **Olası çözüm** adımlarını uygulayın; alarm reset gerekiyorsa HMI ve pano reset prosedürünü uygulayın.
6. **Error-229** (acil stop) aktifse önce **Bölüm 2.5** reset prosedürünü uygulayın; ardından **Bölüm 7.3.2**.
7. Sorun devam ederse makineyi durdurun, **LOTO** uygulayın (**Bölüm 2.4**) ve ilgili alt bölüme geçin.

**Hata davranışı:** Güvenlik ve proses kritik hatalarda makine durur (RFID kapak, acil stop, seviye düşük, motor koruma trip). **Error-235** (hava basıncı düşük) anlık pnömatik tüketim olmayan anlarda makinenin kısa süre devam etmesi mümkündür (bkz. **Bölüm 7.4.4**).

**Beklenen sonuç:** Alarm temizlenir; tepe lambası sarı/yeşile döner; makine güvenli şekilde devreye alınabilir.

---

## 11.1.2 PLC alarm listesi — sorun ve çözüm tablosu

Aşağıdaki tablo, PLC/HMI'da tanımlı **31 alarm** kaydının tam listesidir. Sıra ve alarm metinleri PLC tanımı ile birebir aynıdır. **Sorun açıklaması**, **Olası neden** ve **Olası çözüm** sütunları kılavuz teşhis rehberidir — sahada doğrulama yapın.

| # | Kod | PLC alarm metni | Sorun açıklaması | Olası neden | Olası çözüm | Yetkinlik |
|:-:|-----|-----------------|------------------|-------------|-------------|:---------:|
| 1 | Error-410 | Faz Sırası Hatalı | Trifaze besleme faz sırası yanlış; faz sıra rölesi trip verdi. Motor yönü hatalı olabilir. | Ters faz bağlantısı; faz kayması; röle arızası | Faz sıra rölesini kontrol edin; gerekirse **iki faz değiştirin** — bkz. **5.3.4**, **6.3** | Elektrik |
| 2 | Error-422 | Kapak Kapalı Değil | Bakım/güvenlik kapağı kapalı algılanmıyor; RFID sensör devreyi onaylamıyor. Makine start vermez veya durur. | Kapak açık; RFID etiket hizası bozuk; sensör/kablo arızası | Kapağı tam kapatın; RFID hizasını kontrol edin; bypass **yapmayın** — bkz. **2.4**, **11.7** | Bakım |
| 3 | Error-229 | Acil Stop Devrede | Acil stop emniyet devresi aktif; makine güvenlik nedeniyle kilitli. | Acil stop butonu basılı; emniyet rölesi açık | Tehlikeyi giderin; tüm acil stopları serbest bırakın; **2.5** reset → **7.3.2** | Bakım |
| 4 | Error-100 | Yıkama Pompası Motoru Hata | Yıkama pompası motor koruma devresi trip veya sürücü hata verdi. Yıkama adımı çalışmaz. | Pompa önü vana kapalı; motor aşırı yük; sıkışma; termik trip | Pompa önü vanayı açın (**7.2.5**); LOTO ile motor/koruma kontrolü — bkz. **11.3.2** | Bakım / Elektrik |
| 5 | Error-101 | Durulama Pompası Motoru Hata | Durulama pompası motor koruma trip. Durulama adımı çalışmaz. | Pompa önü vana kapalı; motor aşırı yük; sıkışma; termik trip | Pompa önü vanayı açın; LOTO ile motor/koruma kontrolü — bkz. **11.3.2** | Bakım / Elektrik |
| 6 | Error-111 | Kurutma Fan Motoru Hata | 1. kurutma fanı motor koruma trip. Kurutma performansı düşer. | Fan sıkışması; motor koruma trip; elektrik arızası | LOTO; fan serbestliği ve koruma devresi — bkz. **11.3.2** | Bakım / Elektrik |
| 7 | Error-112 | Kurutma Fan Motoru 2 Hata | 2. kurutma fanı motor koruma trip. | Fan sıkışması; motor koruma trip | LOTO; fan ve koruma devresi — bkz. **11.3.2** | Bakım / Elektrik |
| 8 | Error-113 | Kurutma Fan Motoru 3 Hata | 3. kurutma fanı motor koruma trip. | Fan sıkışması; motor koruma trip | LOTO; fan ve koruma devresi — bkz. **11.3.2** | Bakım / Elektrik |
| 9 | Error-114 | Kurutma Fan Motoru 4 Hata | 4. kurutma fanı motor koruma trip. | Fan sıkışması; motor koruma trip | LOTO; fan ve koruma devresi — bkz. **11.3.2** | Bakım / Elektrik |
| 10 | Error-110 | Egzoz Fan Motoru Hata | Egzoz fanı motor koruma trip. Buhar/nem tahliyesi yetersiz kalabilir. | Fan sıkışması; motor koruma trip | LOTO; egzoz fanı kontrolü — bkz. **11.3.2** | Bakım / Elektrik |
| 11 | Error-130 | Yağ Sıyırıcı Motor Hata | Yağ sıyırıcı motor koruma trip. Tank yüzeyinde yağ birikimi artabilir. | Motor sıkışması; aşırı yağ yükü; koruma trip | LOTO; motor/redüktör kontrolü; yağ tabakası temizliği — bkz. **10.1.4**, **11.3.2** | Bakım / Elektrik |
| 12 | Error-170 | Isıtıcı Kaçak Akım F2 | Yıkama tankı ısıtıcı devresinde kaçak akım koruma F2 trip. Isıtma durur. | Isıtıcı izolasyon arızası; nem; ısıtıcı hasarı | LOTO; F2 rölesi ve ısıtıcı izolasyonu — bkz. **11.3.3**; tekrarlayan trip → servis | Elektrik |
| 13 | Error-171 | Isıtıcı Kaçak Akım F3 | Isıtıcı kaçak akım koruma F3 trip. | Isıtıcı izolasyon arızası; nem | LOTO; F3 koruma devresi — bkz. **11.3.3** | Elektrik |
| 14 | Error-172 | Isıtıcı Kaçak Akım F4 | Isıtıcı kaçak akım koruma F4 trip. | Isıtıcı izolasyon arızası; nem | LOTO; F4 koruma devresi — bkz. **11.3.3** | Elektrik |
| 15 | Error-200 | Yıkama Tankı Su Seviyesi Pompa Seviyesinin Altında | Yıkama tankı su seviyesi pompa emiş seviyesinin altına indi; kuru çalışma riski. | Sızıntı; dolum yetersiz; seviye sensörü hatası | Su/hava basıncı; dolum vanası; seviye sensörü — bkz. **11.5**, **11.7** | Bakım |
| 16 | Error-201 | Yıkama Tankı Su Seviyesi Yetersiz | Yıkama tankı minimum seviyenin altında; proses devam edemez. | Dolum vanası kapalı; hava/su basıncı düşük; vana arızası | Otomatik dolum su vanasını açın; **6 bar** hava + **1 bar** su doğrulayın; Error-300/301 — **11.5.2** | Bakım |
| 17 | Error-150 | Yıkama Tank Sıcaklığı Düşük | Yıkama tankı set sıcaklığa ulaşmadı; hazırlık tamamlanmamış olabilir. | Hazırlık devam ediyor; ısıtıcı trip; reçete sıcaklığı çok yüksek | **Hazırlık Start** bekleyin (**7.2.2**); Error-170 trip varsa giderin; reçete kontrolü (**6.3**) | Bakım |
| 18 | Error-202 | Durulama Tankı Su Seviyesi Pompa Seviyesinin Altında | Durulama tankı su seviyesi pompa emiş seviyesinin altında. | Sızıntı; dolum yetersiz; seviye sensörü hatası | Su/hava basıncı; dolum vanası; seviye sensörü — bkz. **11.7** | Bakım |
| 19 | Error-203 | Durulama Tankı Su Seviyesi Yetersiz | Durulama tankı minimum seviyenin altında. | Dolum vanası kapalı; basınç düşük; vana arızası | Otomatik dolum vanasını açın; basınç kontrolü; Error-302/303 — **11.5.2** | Bakım |
| 20 | Error-151 | Durulama Tank Sıcaklığı Düşük | Durulama tankı set sıcaklığa ulaşmadı. | Hazırlık devam ediyor; ısıtıcı trip; reçete ayarı | **Hazırlık Start** bekleyin; Error-171/172 trip varsa giderin; reçete kontrolü | Bakım |
| 21 | Error-452 | Sızıntı Tavasında Su Tesbit Edildi | Sızıntı tavası sensörü su algıladı; tank/conta kaçağı veya drenaj sorunu olabilir. | Tank/conta kaçağı; boru bağlantı sızıntısı; tava drenajı tıkalı | Kaçak kaynağını bulun; conta kontrolü; tava drenajını temizleyin — bkz. **11.7** | Bakım |
| 22 | Error-300 | Yıkama Otomatik Dolum Vanası Açılamadı | Yıkama tankı otomatik dolum vanası açılmadı; tank dolmaz. | Hava basıncı yok (**6 bar**); bobin arızası; mekanik sıkışma | Hava basıncını doğrulayın; vana bobini/hattı — bkz. **11.5.2** | Bakım |
| 23 | Error-301 | Yıkama Otomatik Dolum Vanası Kapanamadı | Yıkama dolum vanası kapanmadı; sürekli dolum veya seviye kontrolü bozulabilir. | Bobin arızası; mekanik sıkışma; kir/conta | LOTO; vana temizlik veya değişim — bkz. **11.5.2** | Bakım |
| 24 | Error-302 | Durulama Otomatik Dolum Vanası Açılamadı | Durulama tankı otomatik dolum vanası açılmadı. | Hava basıncı yok; bobin/mekanik arıza | **6 bar** hava; vana kontrolü — bkz. **11.5.2** | Bakım |
| 25 | Error-303 | Durulama Otomatik Dolum Vanası Kapanamadı | Durulama dolum vanası kapanmadı. | Bobin arızası; mekanik sıkışma | LOTO; vana kontrolü — bkz. **11.5.2** | Bakım |
| 26 | Error-461 | Çıkış Konveyöründe Ürün Algılandı. Çalışmaya Devam Etmek İçin Ürünün Alındığını Onaylayınız! | Çıkış konveyöründe parça algılandı; robot almadan makine devam etmez. | Robot parçayı almadı; sensör algılama; parça konveyörde kaldı | Robot çıkış prosedürünü kontrol edin; parçayı aldırın; HMI **Ürün Alındı Onay** (**3.4.3**) | Hat operatörü / Bakım |
| 27 | Error-305 | Aktarma Vanası Kapanamadı | Tanklar arası aktarma vanası kapanmadı. | Bobin arızası; mekanik sıkışma | LOTO; aktarma vanası kontrolü — bkz. **11.5.2** | Bakım |
| 28 | Error-236 | Giriş Su Basıncı Düşük | Tesis su giriş basıncı minimum altında (**1 bar**). Dolum ve proses etkilenir. | Su vanası kapalı; tesis basıncı düşük | Su vanasını açın; **1 bar** üzeri basınç sağlayın; HMI manuel sayfa (**3.4.5**) | Bakım |
| 29 | Error-235 | Giriş Hava Basıncı Düşük | Tesis hava basıncı minimum altında (**6 bar**). Pnömatik vanalar çalışmaz. | Hava hattı kapalı; regülatör düşük; kompresör yetersiz | **6 bar** hava bağlantısı; regülatör; HMI manuel sayfa (**6.5**) | Bakım |
| 30 | Error-460 | Servo Motor Hata | Konveyör servo motor/sürücü hata verdi; hat durur. | Sürücü alarmı; mekanik sıkışma; encoder/kablo arızası | LOTO; sürücü alarm kodunu okuyun; mekanik serbestlik — **servis** (**11.2.2**) | Elektrik / Servis |
| 31 | Error-304 | Aktarma Vanası Açılamadı | Tanklar arası aktarma vanası açılmadı. | Hava basıncı düşük; bobin/mekanik arıza | **6 bar** hava; aktarma vanası — bkz. **11.5.2** | Bakım |

> **Not:** Bu tablo PLC tanımına dayanır. Çözüm adımları genel teşhis rehberidir; elektrik panosu müdahalesi öncesi **LOTO** (**2.4**) zorunludur.

---

## 11.1.3 Genel arıza tablosu

DATA dosyasında ayrıntılı genel arıza kaydı tanımlanmamıştır. Aşağıdaki tablo, alarm kodu olmayan veya belirsiz belirtiler için ilk teşhis rehberidir.

| Belirti | Olası neden | Kontrol | Çözüm |
|---------|-------------|---------|-------|
| Makine start vermiyor | Aktif alarm; hazırlık tamamlanmadı; RFID kapak; acil stop | HMI Alarm Sayfası; tepe lambası; **7.2.5** kontrol listesi | Aktif alarmı giderin; hazırlığı tamamlayın; reset prosedürü (**2.5**, **7.3.2**) |
| Hazırlık tamamlanmıyor / su dolmuyor | Otomatik dolum vanası kapalı; hava/su basıncı düşük; vana arızası | Su vanası; **6 bar** hava; HMI manuel sayfa | Vanayı açın; basıncı düzeltin; Error-300/302 — bkz. **11.5.2** |
| Sıcaklık yükselmiyor | Isıtıcı trip; reçete sıcaklığı; faz hatası | Error-150/151/170–172; hazırlık durumu | Kaçak akım trip giderin; reçete kontrolü (**6.3**, **8**); faz kontrolü (**5.3.4**) |
| Pompa çalışmıyor, alarm yok | Pompa önü vana kapalı; faz yönü ters | Vana konumu; pompa yönü | Vanayı açın; faz sırası — **5.3.4** |
| Tekrarlayan filtre tıkanması | Yağ/kirlilik yüksek; filtre periyodu aşıldı | Filtre durumu; proses suyu | **10.1.3**, **10.1.4** temizlik; yağ sıyırıcı kontrolü |
| Robot hattı duruyor, makine yeşil | Error-461; robot arayüzü | Çıkış konveyörü sensörü; robot programı | Parçayı aldırın; HMI onay — **3.4.3** |

---

**Bölüm 11.1 sonu.** Elektrik ayrıntıları **11.3**; pnömatik **11.5**; sensör **11.7**.
