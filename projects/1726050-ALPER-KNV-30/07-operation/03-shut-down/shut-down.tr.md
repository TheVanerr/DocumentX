# 7.3 Makine durdurma

Makine durdurma komutları HMI **Çalışma Sayfası** üzerinden verilir. **Normal stop** günlük operasyonu sonlandırır; **acil stop** yalnızca acil tehlike anında kullanılır. Uzun süreli duruşlarda tank boşaltma ve temizlik **Bölüm 10**'a göre yapılır.

---

## 7.3.1 Normal stop prosedürü

Normal üretim durdurması için HMI **Makine Stop** düğmesi kullanılır.

1. HMI **Çalışma Sayfası**'na geçin.
2. **Makine Stop** düğmesine basın.
3. Konveyör, pompalar, fanlar ve tüm proses fonksiyonlarının durduğunu doğrulayın.
4. Tepe lambasının durumunu kontrol edin (alarm yoksa sarı — hazır veya stop durumu).

**Beklenen sonuç:** Tüm hareketli fonksiyonlar durmuş; proses sıvısı tanklarda kalabilir (kısa süreli stop).

Kısa mola stop'larında tank boşaltma gerekmez. Hafta sonu veya uzun süreli duruş için bkz. **Bölüm 7.3.4**.

<!-- FOTO: HMI — Makine Stop (Çalışma Sayfası) -->
![HMI stop](../../assets/7.3/1.png)

---

## 7.3.2 Acil stop sonrası yeniden başlatma

Acil stop **Bölüm 2.5**'te SSOT olarak tanımlıdır; bu bölümde yalnızca operasyon akışı özetlenir.

Acil stop'a basıldığında makinedeki **her fonksiyon durur**; tepe lambası **kırmızı** yanar.

Yeniden başlatma:

1. Fiziksel tehdidi giderin.
2. **Bölüm 2.5** reset prosedürünü uygulayın (acil stop kaldır → pano reset → HMI alarm reset).
3. Hazırlık ve start prosedürüne **Bölüm 7.2**'den devam edin.

Periyodik acil stop fonksiyon testi **her ay bir kez** yapılmalıdır (bkz. **Bölüm 6.2.3**, **5.4.1**).

<!-- FOTO: Pano reset butonu (EKLENECEK: FOTO-7-3-0-reset.jpg) -->
![Reset butonu](../../assets/7.3/2.png)

---

## 7.3.3 Güç kapatma sırası

Planlı enerji kesme veya bakım öncesi:

1. HMI **Makine Stop** ile makineyi durdurun.
2. Proses fonksiyonlarının tamamen durduğunu doğrulayın.
3. Ana şalteri **OFF (0)** konumuna alın.
4. Bakım veya müdahale gerekiyorsa **LOTO** uygulayın (bkz. **Bölüm 2.4**).

Ana şalteri çalışan makinede kapatmayın; pompa ve ısıtıcı ani kesinti hasarı riski oluşturabilir.

---

## 7.3.4 Uzun süreli durdurma

Hafta sonu, planlı bakım veya uzun hat duruşlarında:

| Parametre | Gereksinim |
|-----------|------------|
| Uzun süreli durdurma | Tanklar **mutlaka boşaltılıp temizlenmelidir** |

1. **Bölüm 7.3.1** veya **7.3.3** ile makineyi durdurun ve enerjiyi kesin.
2. Tank boşaltma ve temizlik prosedürünü uygulayın (**Bkz. Bölüm 10.4** — adımlar orada SSOT).
3. Gerekirse **Bölüm 4.2** depolama koşullarına göre makineyi koruyun.

Tanklar dolu bırakılırsa koku, mikrobiyel büyüme ve korozyon riski artar; çalışma ağırlığı **1500 kg**'a çıkar (bkz. **Bölüm 3.3.1**).

---

**Bölüm 7.3 sonu.** Temizlik prosedürü için bkz. **Bölüm 10**.
