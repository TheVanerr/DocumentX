# 6.3 Elektrik ayarları

---

## 6.3.1 Motor yönü / faz kontrolü

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Motor yönü / faz kontrolü | Motor tek bir yönde çalıştırılmalıdır. Bunun için bir ayar yapmaya gerek yoktur |

Faz yönü ve sırası, kurulum sırasında faz sıra rölesi ile doğrulanmıştır (bkz. Bölüm **5.3**).

---

## 6.3.2 Encoder / feedback

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Encoder / feedback ayarı | PLC programı içerisinde gömülüdür. Ayar firmamız tarafından yapılmalıdır |

Encoder ayarı operatör tarafından yapılmamalıdır.

<!-- FOTO: PLC panosu — encoder ayarı üretici -->
![Encoder ayarı — PLC](../../assets/FOTO-6-3-0-encoder.png)

---

## 6.3.3 Analog ölçeklendirme

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Analog ölçeklendirme (basınç / sıcaklık) | Basınç ayarı yoktur. Sıcaklık ayarı için HMI arayüzündeki ayar sayfası kullanılmalıdır |

<!-- FOTO: HMI ayar sayfası — sıcaklık -->
![HMI sıcaklık ayarı](../../assets/FOTO-6-3-1-sicaklik-ayar.png)

---

## 6.3.4 Tarih / saat / dil

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Tarih / saat / dil ayarı | HMI arayüzündeki ayar sayfasından yapılmalıdır |

<!-- FOTO: HMI ayar sayfası — tarih saat dil -->
![HMI tarih saat dil ayarı](../../assets/FOTO-6-3-2-hmi-tarih-dil.png)

---

## 6.3.5 Elektrik ayar kontrol listesi

| # | Kontrol | Durum |
|---|---------|-------|
| 1 | Motor yönü doğrulandı | ☐ OK / ☐ NOK |
| 2 | Encoder ayarı üretici tarafından yapıldı | ☐ OK / ☐ NOK |
| 3 | HMI sıcaklık ayarı yapıldı (gerekiyorsa) | ☐ OK / ☐ NOK |
| 4 | HMI tarih / saat / dil ayarlandı | ☐ OK / ☐ NOK |

**Tarih:** _______________ **Kontrol eden:** _______________
