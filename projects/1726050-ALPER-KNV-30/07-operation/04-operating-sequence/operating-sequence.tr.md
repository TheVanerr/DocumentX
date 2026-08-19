# 7.4 Operasyon sekansı

Makine **tam otomatik** çalışır. HMI çalışma sayfasında yıkama, durulama, kurutma 1, kurutma 2 ve egzos için **açma/kapama (on/off) butonları** bulunur.

Proses akışı özeti: **Yıkama → Durulama → Kurutma**

| Proses | Ad |
|--------|-----|
| 1 | Yıkama |
| 2 | Durulama |
| 3 | Kurutma |

---

## 7.4.1 Otomatik Cycle adımları

| Adım | Açıklama |
|------|----------|
| 1 | HMI çalışma sayfasında yıkama, durulama, kurutma 1, kurutma 2 seçenekleri istenen şekilde **on/off** ayarlanır |
| 2 | Hazırlık tamamlandıktan sonra **start** verilir; konveyör ve seçili proses fonksiyonları otomatik çalışır |
| 3 | Parça konveyör üzerinde **yıkama** banyosundan geçer (yıkama aktifse) |
| 4 | Parça **durulama** banyosundan geçer (durulama aktifse) |
| 5 | Parça **kurutma** bölgesinden geçer (kurutma 1/2 aktifse); çıkışa ulaşır |

---

## 7.4.2 Cycle süresi

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Cycle süresi nominal (sn) | **900** |

---

## 7.4.3 Ürün giriş / çıkış

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Ürün giriş senaryosu | Girişte **operatör çalışmaz**; parça **robot** tarafından konveyöre yerleştirilir. Giriş prosedürü **müşteriye aittir** |
| Ürün çıkış senaryosu | Çıkışta **operatör çalışmaz**; parça **robot** tarafından alınır. Çıkış prosedürü **müşteriye aittir** |

Parçalar konveyör üzerinde ilerleyerek prosesleri tamamlar (girişten yüklemeli).

<!-- FOTO: Konveyör — parça giriş/çıkış -->
![Konveyör parça akışı](../../assets/FOTO-7-4-0-konveyor.png)

---

## 7.4.4 Hata durumunda makine davranışı

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Hata durumunda makine davranışı | **Çalışmayı etkileyen** hatalarda makine durur (ör. bakım kapağı açıldı, RFID switch görmedi). **Anlık hava ihtiyacı olmayan** durumlarda (ör. çalışırken hava sökülmesi) makine çalışmaya devam edebilir |

Alarm durumunda HMI arayüzünde alarm ekranı görüntülenir; tepe lambası **kırmızı** yanar.
