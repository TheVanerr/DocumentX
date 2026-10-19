# 6.3 Elektrik ayarları

Elektrik ayarlarını yalnızca yetkili elektrik personeli, elektrik devre şemasına göre yapar.

---

## 6.3.1 Faz sırası ve motor dönüş yönü

Pompa ve fan motorları yalnızca doğru yönde dönerken nominal basınç ve debiyi sağlar. Ters dönen pompa çok düşük basınç üretir; ters dönen buhar tahliye fanı buharı tahliye etmez, ters dönen kurutma fanı kabine hava basmaz. Faz sırasını ilk devreye almada ve besleme bağlantısı her değiştirildiğinde kontrol edin.

1. **Ana şalteri** "I" konumuna getirin, kapağı kapatın ve kısa süreli bir deneme programı başlatın.
2. Pompa motorunun fan kapağı üzerindeki ok ile motor milinin dönüş yönünü karşılaştırın.
3. Dönüş yönü ok ile aynı değilse makineyi durdurun ve **Bölüm 2.3.3**'e göre kilitleyin.
4. Besleme kablosunda iki fazın (L1 ve L2) yerini makinenin besleme klemensinde değiştirin. Motor bağlantılarında değişiklik yapmayın; böylece tüm motorların dönüş yönü birlikte düzelir.
5. Dönüş yönünü yeniden kontrol edin.

---

## 6.3.2 Motor koruma şalterleri

Motor koruma şalterlerinin ayar değeri, korunan motorun etiketindeki anma akımına eşit olmalıdır. Motor değiştirildiğinde yeni motorun etiketindeki anma akımını kontrol edin ve koruma şalterini bu değere ayarlayın. Koruma şalterini anma akımından yüksek bir değere ayarlamayın; motor aşırı yükte korunmaz ve sargı yanabilir.

---

## 6.3.3 PLC ve HMI parametreleri

PLC programı ve HMI'daki makine parametreleri (sensör ölçeklendirmesi, sıcaklık sınırları, zaman aşımları, alarm ayarları) fabrikada ayarlanmıştır. Operatör yalnızca program parametrelerini değiştirir (**Bkz. Bölüm 6.6**). Makine parametreleri şifreyle korunur ve yalnızca üretici servisi tarafından değiştirilir.

PLC: {{KONTROLLER:PLC marka / model}}. HMI: {{KONTROLLER:HMI marka / model}}.

**NOT:** PLC veya HMI değiştirildiğinde program ve parametreler, üreticiden alınan yedeklerden yüklenir (**Bkz. Bölüm 13.1**).
