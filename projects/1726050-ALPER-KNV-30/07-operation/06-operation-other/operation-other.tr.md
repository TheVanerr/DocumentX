# 7.6 Diğer operasyon konuları

Bu bölüm, standart start/stop ve cycle sekansı dışında kalan operasyonel konuları özetler. Makinede **sürekli operatör bulunmaz**; normal çalışmada insan müdahalesi gerekmez.

---

## 7.6.1 Format / ürün değişimi

| Parametre | Değer |
|-----------|-------|
| Format / ürün değişim süresi | **Yoktur** |
| Format değişim prosedürü | **Yoktur** |

Mekanik format değişimi uygulanmaz (bkz. **Bölüm 6.1.5**). Farklı parça tipleri HMI sıcaklık set değerleri ve proses fonksiyon on/off yapılandırması ile yönetilir (bkz. **Bölüm 8.2**).

---

## 7.6.2 Fire / hurda yönetimi

| Parametre | Değer |
|-----------|-------|
| Fire / hurda yönetimi | **Uygulanmaz** — makinede operatör bulunmaz |

Hurda toplama ve fire kaydı müşteri hattı sorumluluğundadır. Makine kapsamında ayrı hurda kutusu veya fire prosedürü tanımlanmamıştır.

---

## 7.6.3 Müdahale noktaları ve sorumluluk

| Personel | Rol |
|----------|-----|
| Operatör (makine başı) | **Bulunmaz** |
| Bakım personeli | Hata/alarm müdahalesi, periyodik bakım, temizlik |
| Üretici servisi | PLC, encoder, majör arıza |

Hata oluştuğunda:

1. Tepe lambası **kırmızı** yanar; HMI Alarm Sayfası aktif alarm gösterir.
2. Üst hat duruş sinyali alabilir (müşteri konfigürasyonu).
3. Müdahale **bakım personeli** tarafından yapılır — **Bölüm 11** teşhis akışını izleyin.
4. Enerji izolasyonu gerektiren onarımda **LOTO** uygulayın (**Bkz. Bölüm 2.4**).

Güvenlik fonksiyonlarını devre dışı bırakacak müdahale yalnızca yetkili servis tarafından yapılmalıdır.

---

**Bölüm 7.6 sonu.** Arıza kodları için bkz. **Bölüm 11.2**; kapasite/reçete için bkz. **Bölüm 8**.
