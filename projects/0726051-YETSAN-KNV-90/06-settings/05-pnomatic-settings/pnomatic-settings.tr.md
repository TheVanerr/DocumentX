# 6.5 Pnömatik ayarlar

Makinenin basınçlı hava tüketicisi, **yağ ayırıcı ünitesinin diyaframlı pompasıdır**; pompa, panelde etiketsiz olan yağ ayırıcı anahtarı ile kontrol edilen bir solenoid valf üzerinden **6 bar** hava ile çalışır. Hava, makine gövdesindeki **AIR INLET / HAVA GİRİŞİ** etiketli manometreli regülatörden girer. Bağlantı değerleri **Bölüm 3.3.5**'te verilmiştir; bu bölüm regülatör ayar prosedürünü tanımlar.

Hidrolik sistem yoktur. Pnömatik silindir bulunmaz; sensör gecikmesi ayarı yoktur.

---

## 6.5.1 Regülatör basınç ayarı

| Parametre | Değer |
| :--- | :--- |
| Regülatör basınç ayarı | **6 bar** |
| Regülatör konumu | Makine gövdesi — AIR INLET / HAVA GİRİŞİ |
| Bağlantı çapı | [EKSİK] — layout çizimi |

**Regülatör ayar prosedürü**

1. Tesisat ana hava vanasının açık olduğunu doğrulayın.
2. Makine gövdesindeki **AIR INLET** regülatörünü bulun.
3. Regülatör başlığını kilitten kurtarın (yukarı çekin); çevirerek manometrede **6 bar** okunana kadar ayarlayın.
4. Regülatör başlığını bastırarak kilitleyin.
5. Yağ ayırıcı anahtarını ON alın; diyaframlı pompanın düzenli çalıştığını ve hava kaçağı olmadığını kontrol edin.
6. Anahtarı OFF alın.

**Beklenen sonuç:** Manometre 6 bar; yağ ayırıcı pompası çalışıyor; kaçak yok.

**Anormal durum:** Basınç düşükse tesis hattı debisi, hat vanası, tesis filtresi ve kaçakları kontrol edin (**Bkz. Bölüm 11.5**). Diyaframlı pompa düzensiz çalışıyorsa hava kalitesini (su/yağ) ve pompa filtresini kontrol edin.

Kurulum sırasında ilk ayar **Bölüm 5.3.1**'de yapılır; regülatör kayması veya hortum değişiminden sonra bu prosedür tekrarlanmalıdır. Hava hattı ve regülatör kaçak kontrolü **250 saatlik** bakım maddesidir (**Bkz. Bölüm 9.1.3**).

![AIR INLET / HAVA GİRİŞİ regülatörü ve manometre](../../assets/3.3/hava-girisi-regulator.jpg)

---

## 6.5.2 Silindir hız ayarı

| Parametre | Değer / Açıklama |
| :--- | :--- |
| Silindir hız ayarı | **Uygulanmaz** — pnömatik silindir yok |

---

## 6.5.3 Sensör gecikmeleri

| Parametre | Değer / Açıklama |
| :--- | :--- |
| Sensör ON/OFF gecikmeleri (ms) | **Uygulanmaz** — PLC yok; röle mantığında ayarlanabilir gecikme bulunmaz |

---

## 6.5.4 Pnömatik ayar kontrol listesi

| # | Kontrol | Durum |
| :---: | :--- | :---: |
| 1 | Regülatör **6 bar**'a ayarlandı ve kilitlendi | ☐ |
| 2 | Hava hattı ve rakorlarda kaçak yok | ☐ |
| 3 | Yağ ayırıcı diyaframlı pompası çalışıyor | ☐ |

**Tarih:** _______________ **Kontrol eden:** _______________
