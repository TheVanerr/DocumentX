# 7.1 Çalışma modları

KNV 30 3000 2B **tam otomatik** çalışır; ayrı bir manuel, step veya bakım modu bulunmaz. Operatör, HMI **Çalışma Sayfası** üzerinden proses fonksiyonlarını seçer, hazırlık ve start/stop komutlarını verir. Fonksiyon seçimi toggle (on/off) mantığıyla yapılır; makine start alındığında seçili fonksiyonlar PLC programına göre otomatik koordine edilir.

Bakım müdahaleleri için özel HMI modu yoktur; kapak açma ve mekanik/elektrik işler **LOTO** ile yapılır (bkz. **Bölüm 2.4**). Tek fonksiyon testi için HMI **Manuel Sayfası** yalnızca yetkili bakım personeline açıktır (bkz. **Bölüm 3.4.5**).

---

## 7.1.1 Manuel mod

| Parametre | Değer |
|-----------|-------|
| Manuel mod | **Bulunmamaktadır** |

Sürekli manuel sürüş modu yoktur. HMI Çalışma Sayfasındaki yıkama, durulama, kurutma 1, kurutma 2 ve egzoz seçenekleri proses yapılandırması içindir; makine start alındığında seçili fonksiyonlar otomatik sekans içinde çalışır.

---

## 7.1.2 Otomatik mod

Makine varsayılan olarak otomatik modda çalışır. Operatör akışı:

1. HMI **Çalışma Sayfası**'nda istenen proses fonksiyonlarını **aktif** (yeşil) konuma getirin.
2. **Hazırlık Start** ile tank dolumu ve ısıtmayı tamamlayın (bkz. **Bölüm 7.2**).
3. Tepe lambası **sarı** (kullanıma hazır) iken **Makine Start** verin.
4. Konveyör ve seçili pompalar/fanlar otomatik devreye girer; parçalar hat boyunca proses bölgelerinden geçer.

Robot giriş/çıkış üst hat tarafından senkronize edilir; makine PLC'si parça varlığını sensörlerle izler.

<!-- FOTO: HMI Çalışma Sayfası — proses toggle ve start/stop -->
![HMI proses seçenekleri](../../assets/7.1/1.png)

---

## 7.1.3 Bakım / setup modu

| Parametre | Değer |
|-----------|-------|
| Bakım / setup modu | **Bulunmamaktadır** |

Bakım için makine durdurulmalı, ana şalter kapatılmalı ve **LOTO prosedürü** uygulanmalıdır (bkz. **Bölüm 2.4**). Kapaklar yalnızca enerji izolasyonu sonrası açılmalıdır. Emniyet kapısı bypass edilmemelidir.

---

## 7.1.4 Step / tek adım modu

| Parametre | Değer |
|-----------|-------|
| Step / tek adım modu | **Bulunmamaktadır** |

---

## 7.1.5 Mod geçiş koşulları

| Parametre | Değer |
|-----------|-------|
| Mod geçiş koşulları | **Bulunmamaktadır** |

Tek mod (otomatik) vardır; mod geçiş prosedürü uygulanmaz.

---

## 7.1.6 HMI proses seçenekleri özeti

| Seçenek | İşlev | Operatör notu |
|---------|-------|---------------|
| Yıkama | On / Off | Yıkama banyosu pompası ve ısıtma devresi |
| Durulama | On / Off | Durulama banyosu pompası ve ısıtma devresi |
| Kurutma 1 | On / Off | Kurutma fan grubu 1 |
| Kurutma 2 | On / Off | Kurutma fan grubu 2 |
| Egzoz | On / Off | Kurutma bölgesi nem tahliyesi |

Proses ihtiyacına göre fonksiyonlar bağımsız açılıp kapatılabilir; en az bir proses adımının hat kalitesi için aktif olması kullanıcı proses tasarımına bağlıdır. Sıcaklık set değerleri **Bölüm 6.3.3**'te tanımlı HMI Ayarlar Sayfası'ndan yapılır.

---

Başlatma prosedürü için bkz. **Bölüm 7.2**.
