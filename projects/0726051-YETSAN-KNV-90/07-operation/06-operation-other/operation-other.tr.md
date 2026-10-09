# 7.6 Diğer operasyon konuları

Bu bölüm, standart başlatma/durdurma ve parça akışı dışında kalan operasyonel konuları özetler: format değişimi, fire yönetimi ve operatör müdahale noktaları.

---

## 7.6.1 Format / ürün değişimi

| Parametre | Değer |
| :--- | :--- |
| Format / ürün değişim süresi | **Yok** — format değişim prosedürü yok |
| Format değişim prosedürü | **Yok** |

Mekanik format değişimi uygulanmaz (**Bkz. Bölüm 6.1.5**). Farklı parça tipleri konveyör hızı (potansiyometre) ve termostat set değerleri ile yönetilir; ürün bazlı değerler kullanıcı firma tarafından kaydedilir (**Bkz. Bölüm 8.2**). Parça değişiminde yalnızca hat boşaltılır, gerekirse hız ve sıcaklık değiştirilir.

---

## 7.6.2 Fire / hurda yönetimi

| Parametre | Değer |
| :--- | :--- |
| Fire / hurda yönetimi | **Müşteri hattına ait** — makinede hurda kutusu yok |

Yıkama sonucu yetersiz bulunan parçaların tekrar yıkanması veya ayrılması müşteri proses kontrolüne aittir. Ön filtre sepetlerinde biriken talaş ve kir, filtre temizliğinde atık olarak alınır (**Bkz. Bölüm 10.1.3, 10.1.8**).

---

## 7.6.3 Operatör müdahale noktaları ve sorumluluk

| Müdahale noktası | Eylem | Bölüm |
| :--- | :--- | :--- |
| Operatör paneli anahtarları | Fonksiyon aç/kapa, RESET | 3.4, 7.2 |
| Konveyör hız potansiyometresi | 20–60 Hz hız ayarı | 6.3.4 |
| Termostatlar | Set değer | 6.3.3 |
| Tank dolumu | Elle su doldurma | 7.2.1 |
| Parça yükleme / boşaltma | Sol giriş / sağ çıkış — elle | 7.4 |
| Yağ ayırıcı anahtarı | Yağlı su aktarımı | 3.1.5 |
| Ön filtre temizliği | Günlük — LOTO ile | 10.1.3 |

| Personel | Rol |
| :--- | :--- |
| Operatör | Yukarıdaki müdahale noktaları; sorun gözlemi ve bildirimi |
| Bakım personeli | Arıza müdahalesi, periyodik bakım, filtre/tank temizliği, LOTO |
| Yetkili elektrikçi | Pano içi (MKŞ, kaçak akım, kontaktör, rezistans) — LOTO altında |
| Üretici servisi | İnverter parametreleri, emniyet röle devresi, majör mekanik arıza |

Hata oluştuğunda:

1. Fonksiyon run lambası söner veya RESET lambası söner; operatör ilgili anahtarı OFF alır.
2. Operatör belirtiyi **Bölüm 11.1** teşhis akışına göre değerlendirir (lamba durumu, seviye, kapak, acil stop).
3. Pano içi müdahale gerekiyorsa **bakım personeli / yetkili elektrikçi** çağrılır; **LOTO** uygulanır (**Bkz. Bölüm 2.4**).
4. Güvenlik fonksiyonlarını etkileyen arızalarda (reset alınamıyor, kapak switch'i) üretici servisi bilgilendirilir (**Bkz. Bölüm 11.2.2**).

---

Arıza teşhisi için bkz. **Bölüm 11**; kapasite için bkz. **Bölüm 8**.
