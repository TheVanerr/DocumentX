# 6. AYARLAR

Bu bölüm, **KNV 90 7500 2B** makinesinin devreye alma sonrası (**Bkz. Bölüm 5**) operatör ve bakım personelinin yapabileceği **ayar parametrelerini** tanımlar. Makinede PLC/HMI bulunmadığından ayar noktaları sınırlıdır ve tamamı fizikseldir: dört **GEMO DTH2 termostat** set değeri, **konveyör hız potansiyometresi** ve **basınçlı hava regülatörü**. Bu üç ayar; proses sıcaklığını, parçanın hücre içindeki temas süresini ve yağ ayırıcı pompasının çalışmasını belirler.

**Hedef kitle:** Operatör (termostat set değerleri, konveyör hızı), bakım personeli (regülatör, periyodik güvenlik testi), üretici servisi (inverter parametreleri, emniyet röle devresi). Konveyör inverteri parametreleri ve emniyet röle devresi yalnızca **üretici yetkili servisi** tarafından değiştirilmelidir.

| Alt bölüm | Konu |
| :--- | :--- |
| **6.1** | Mekanik ayarlar — operatör ayar noktası yok; zincir gerginliği gözlem |
| **6.2** | Güvenlik ayarları — bypass yasağı, acil stop test periyodu |
| **6.3** | Elektrik ayarları — motor yönü, termostat set değerleri, konveyör hızı |
| **6.4** | Hidrolik ayarlar — sistem yok |
| **6.5** | Pnömatik ayarlar — regülatör 6 bar |
| **6.6** | Vakum ayarları — sistem yok |
| **6.7** | Diğer ayarlar — ek nokta yok |

## Genel kurallar

| Konu | Kural | Referans |
| :--- | :--- | :--- |
| Termostat set değerleri | GEMO DTH2 — operatör paneli; su sıcaklığı +70 °C'yi aşmamalı | Bölüm 6.3.3, 3.4.4 |
| Konveyör hızı | Potansiyometre — yalnızca **20–60 Hz** aralığında | Bölüm 6.3.4, 3.4.7 |
| Basınçlı hava | Regülatör **6 bar** | Bölüm 6.5, 3.3.5 |
| İnverter parametreleri | Fabrika ayarı — operatör değiştirmez | Bölüm 6.3.1 |
| Acil stop testi | **Her ay bir kez** | Bölüm 6.2.3 → 5.4.1 |
| Bakım kapakları | Bypass yasak; LOTO zorunlu | Bölüm 2.4 |

Ayar değişikliği öncesi ilgili fonksiyonu durdurun. Fabrika çıkış değerlerini kayıt altına alın; sorun durumunda başlangıç konfigürasyonuna dönülebilmesi için set değerlerini bakım formuna yazın. Günlük start/stop ve fonksiyon seçimi **Bölüm 7**'de anlatılır; bu bölüm kalıcı/kurulum ayarlarına odaklanır.

**UYARI — Parametre dışı çalışma:** Tanımlı aralıkların dışına çıkılması (konveyör 20 Hz altı, su sıcaklığı +70 °C üstü, hava 6 bar dışı) yetersiz temizlik, konveyörün yük altında durması, rezistans ve conta hasarı ile sonuçlanır; bu hasarlar garanti kapsamı dışındadır.

---

Operasyon prosedürleri için bkz. **Bölüm 7**; periyodik bakım için bkz. **Bölüm 9**.
