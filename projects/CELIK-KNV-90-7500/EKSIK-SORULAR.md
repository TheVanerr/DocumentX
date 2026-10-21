# CELIK KNV 90 7500 2B — Açık sorular (21.10.2026)

Bu kılavuz **0726051-YETSAN KNV 90 12000 2B** kılavuzundan türetildi. Kullanıcı bildirimi: *"Fark kontrol PLC ile olacak, onun dışında aynı."* Tüm uyarılar, prosedürler ve teknik veriler YETSAN'dan alındı; kumanda ile ilgili bölümler PLC'ye göre yeniden yazıldı. Ürün ağacı **KNV 90 7500 ÜRÜN AĞACI.xlsm** bu klasöre kopyalandı (7500 ürün ağacı bu makineye aittir).

Kılavuzda **38** `[EKSİK]` var (TR 38 + DE 38). Aşağıdaki S1–S3 cevapları gelince çoğu tek seferde kapanır.

---

## Eksik bilgiler

**S1.** Sipariş no ve seri no? — Kılavuzda 20 yerde seri no `[EKSİK]` (1.1, 1.3, 3.3, 9.1, 12, 13 …). Cevap gelince klasör de `<siparişno>-CELIK-KNV-90` olarak yeniden adlandırılabilir.
Cevap:

**S2.** PLC: marka / model, CPU modeli, giriş/çıkış modülleri, yedek parça sipariş kodu? PLC başka bir cihazla haberleşiyor mu (ör. inverter ile Modbus / Profinet), yoksa yalnız giriş/çıkış ile mi çalışıyor? — 3.4.1, 3.4.8, 5.6.1, 9.1.5, 13.3
Cevap:

**S3.** I/O listesi ve PLC program yedeği müşteriye teslim edilecek mi? Teslim edilecekse dosya adı / rev? — 5.6.3, 13.1
Cevap:

**S4.** Dış ölçüler L / W / H (mm; baca dahil en yüksek nokta), boş ağırlık ve dolu (çalışma) ağırlık (kg)? — 3.3.1
Cevap:

---

## Teyit edilecek kabuller

**T1. PLC mimarisi.** Şöyle yazıldı — farklıysa düzeltin:
- Operatör paneli YETSAN ile aynı: aç/kapa anahtarları + run lambaları, 4× GEMO DTH2 termostat, konveyör hız potansiyometresi, TANK 1/2 WASHING LEVEL lambaları, RESET. **HMI (ekran) yok.**
- Anahtarlar PLC'ye komut verir; PLC kontaktörleri ve konveyör inverterini kumanda eder.
- Tank seviye kilitlemesi ve egzoz fanının CONVEYOR ile birlikte çalışması **PLC programında**.
- Acil stop ve kapak zincirleri **PLC'den bağımsız** 2× Omron G9SB-2002-A ile; Kategori 3 / PL c değişmedi.
- Reçete / şifre seviyesi / uzaktan erişim / MES bağlantısı yok.

HMI (dokunmatik ekran) varsa Bölüm 3.4, 6.3, 7, 8.2 ve 11 yeniden yazılmalı — ekran görüntüleri ve alarm listesi gerekir.
Cevap:

**T2. 7500 ile 12000 farkı.** YETSAN (12000) değerleri aynen alındı. 7500'de farklı olabilecekler: bakım kapağı / manyetik switch **7**, acil stop **7** (1 panel + 6 saha), nozul **160**, tank ısıtıcısı **7** (R01–R07, 8 kW), blower **4**, kurutma fanı **2**, ana gövde **3000 kg**, toplam güç **110 kW / 220 A**, ana şalter **250 A**, tel bant **850 mm**. Farklı olan varsa doğru değeri yazın.
Cevap:

**T3.** Üretim / sevk yılı **2026** — 1.1.2, 1.3.2
Cevap:
