# 6.3 Elektrik ayarları

Elektrik ayarları iki katmandan oluşur: **operatör erişilebilir panel ayarları** (dört GEMO DTH2 termostat set değeri ve konveyör hız potansiyometresi) ve **üretici korumalı ayarlar** (konveyör inverteri parametreleri, motor yönü, emniyet röle devresi). Operatör yalnızca birinci gruba müdahale eder; ikinci grup yetkisiz değiştirilirse konveyör yönü, hız sınırları ve güvenlik fonksiyonları bozulabilir.

Operatör paneli yapısı **Bölüm 3.4**'te anlatılmıştır; bu bölüm ayar prosedürlerini verir. Tarih/saat/dil ayarı bu makinede **uygulanmaz** (HMI yok).

---

## 6.3.1 Motor yönü / faz kontrolü

| Parametre | Değer / Açıklama |
| :--- | :--- |
| Motor yönü / faz kontrolü | Konveyör yönü inverter parametreleri — **fabrika ayarı**; operatör değiştirmez |
| Pompa / fan / blower yönü | Faz sırasına bağlı — kurulumda MKR-01 ile doğrulanır |

Pompalar, fanlar ve blowerlar doğrudan yol vermeli (kontaktör) motorlardır ve dönüş yönleri besleme faz sırasına bağlıdır; faz yönü kurulumda faz sıra rölesi ile doğrulanır (**Bkz. Bölüm 5.3.6**). Konveyör inverter ile sürülür ve yönü inverter parametresinde sabittir. Operasyon sırasında motor yönü değiştirme ayarı bulunmaz; ters dönüş arıza belirtisidir (**Bkz. Bölüm 11.3.1**).

**DİKKAT — İnverter parametreleri:** Delta VFD004EL21W-1 parametrelerinin (yön, min/maks frekans, rampa) operatör tarafından değiştirilmesi konveyörün ters dönmesine veya 20 Hz altında durmasına yol açabilir. Parametre değişikliği yalnızca üretici yetkili servisi tarafından yapılır.

---

## 6.3.2 Encoder / feedback

| Parametre | Değer / Açıklama |
| :--- | :--- |
| Encoder / feedback ayarı | **Yok** — açık çevrim inverter sürüşü |

Makinede encoder, servo veya pozisyon geri beslemesi bulunmaz; ayar uygulanmaz.

---

## 6.3.3 Termostat set değerleri (GEMO DTH2)

| Parametre | Ayar yeri | Aralık |
| :--- | :--- | :--- |
| TANK 1 (yıkama) sıcaklığı | TANK 1 HEATER termostatı | [EKSİK] — su +70 °C'yi aşmamalı (**Bkz. Bölüm 3.3.5**) |
| TANK 2 (durulama) sıcaklığı | TANK 2 HEATER termostatı | [EKSİK] — su +70 °C'yi aşmamalı |
| Kurutma 1 hava sıcaklığı | DRYING 1 HEATER termostatı | [EKSİK] |
| Kurutma 2 hava sıcaklığı | DRYING 2 HEATER termostatı | [EKSİK] |
| Analog basınç ölçeklendirme | Yok | — |

Termostat, termokupl ile ölçtüğü anlık sıcaklığı ekranda gösterir ve set değere ulaşıldığında ilgili ısıtıcı kontaktörünü keser; sıcaklık düşünce yeniden devreye alır. Set değer proses gereksinimine (kir tipi, parça malzemesi, temizlik kimyasalı) göre kullanıcı firma tarafından belirlenir.

**Termostat set değeri ayar prosedürü**

1. İlgili ısıtıcı anahtarını (ör. TANK 1 HEATER) **OFF** konumuna alın.
2. Termostat ekranındaki anlık sıcaklığı okuyun.
3. Termostatın set tuşuna basın; set değer ekranda yanıp sönerken **yukarı/aşağı ok** tuşları ile hedef sıcaklığı girin.
4. Set tuşu ile onaylayın; ekran anlık sıcaklığa döner.
5. Tankta yeterli su olduğunu (WASHING LEVEL lambası sönük) doğrulayın.
6. Isıtıcı anahtarını **ON** alın; sıcaklığın set değere doğru yükseldiğini ve set değerde ısıtıcı kontaktörünün kesildiğini (sıcaklık artışının durduğunu) izleyin.
7. Set değerleri **Bölüm 6.3.5** kontrol listesine ve bakım formuna kaydedin.

**Beklenen sonuç:** Anlık sıcaklık set değer civarında sabitlenir; ısıtıcı anahtarı ON kalsa da sıcaklık set değeri aşmaz.

**Anormal durum:** Set değer gösterilmesine rağmen su ısınmaya devam ediyorsa termostat çıkışı veya kontaktör yapışmış olabilir (**Bkz. Bölüm 11.1.2 — Arıza 5**). Isıtıcı hiç devreye girmiyorsa seviye interlock'u, sigorta ve kaçak akım rölesini kontrol edin (**Bkz. Bölüm 11.3.3**).

Termostat tuş yerleşimi ve ileri parametreleri için GEMO DTH2 kullanım kılavuzuna bakın (**Bkz. Bölüm 13.1**).

![Operatör paneli — GEMO DTH2 termostatlar](../../assets/3.4/operator-paneli.jpg)

---

## 6.3.4 Konveyör hızı (potansiyometre)

| Parametre | Değer |
| :--- | :--- |
| Ayar elemanı | Operatör paneli potansiyometresi |
| Çıkış | Delta VFD004EL21W-1 inverter frekansı |
| Çalışma aralığı | **20–60 Hz** |

**Hız ayar prosedürü**

1. CONVEYOR anahtarını **ON** alın (RESET lambası yanık, hat boş).
2. Potansiyometreyi saat yönünde çevirerek hızı artırın, tersine çevirerek azaltın.
3. Konveyörü yük altında (parça yüklü) gözleyin; tel bant duraksamadan ilerlemelidir.
4. **20 Hz altına düşürmeyin** — motor torku yük altında yetersiz kalır ve konveyör durabilir.
5. Seçilen hızı proses kaydına yazın (**Bkz. Bölüm 8.2**).

Hız, parçanın hücre içindeki temas süresini belirler: düşük hız daha uzun yıkama/kurutma, yüksek hız daha fazla parça/saat. Konveyör yük altında duruyorsa hızı artırın veya yükü azaltın; inverter alarm veriyorsa **Bölüm 11.3.2**'ye bakın.

---

## 6.3.5 Elektrik ayar kontrol listesi

| # | Kontrol | Değer / Durum |
| :---: | :--- | :--- |
| 1 | Faz yönü kurulumda doğrulandı (Bölüm 5.3.6) | ☐ |
| 2 | TANK 1 HEATER set değeri | ______ °C ☐ |
| 3 | TANK 2 HEATER set değeri | ______ °C ☐ |
| 4 | DRYING 1 HEATER set değeri | ______ °C ☐ |
| 5 | DRYING 2 HEATER set değeri | ______ °C ☐ |
| 6 | Konveyör çalışma frekansı (20–60 Hz) | ______ Hz ☐ |
| 7 | İnverter parametreleri fabrika ayarında — değiştirilmedi | ☐ |

**Tarih:** _______________ **Kontrol eden:** _______________

---

Operatör paneli yapısı için bkz. **Bölüm 3.4**; kapasite yönetimi için bkz. **Bölüm 8.2**.
