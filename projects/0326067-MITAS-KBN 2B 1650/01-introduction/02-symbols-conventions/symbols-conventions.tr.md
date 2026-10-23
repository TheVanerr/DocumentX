# 1.2 Semboller ve gösterim kuralları

## 1.2.1 Uyarı seviyeleri

Kılavuzdaki uyarılar ISO 3864-2 yapısındadır: sinyal kelimesi tehlikenin ciddiyetini, ardından gelen tehlike türü tehlikenin kaynağını, metin ise olası sonucu ve kaçınma yolunu bildirir. Uyarılar yalnızca tehlikenin ortaya çıktığı adımın önünde verilir.

Tablo: Sinyal kelimeleri

| Sinyal kelimesi | Anlamı |
|---|---|
| TEHLİKE | Önlenmezse kesin olarak ölüm veya ağır yaralanmayla sonuçlanacak tehlikeli durum |
| UYARI | Önlenmezse ölüm veya ağır yaralanmayla sonuçlanabilecek tehlikeli durum |
| DİKKAT | Önlenmezse hafif veya orta derecede yaralanmayla sonuçlanabilecek tehlikeli durum |
| ÖNEMLİ | Yaralanma tehlikesi olmayan, makinede veya parçalarda maddi hasara yol açabilecek durum |
| NOT | Kullanımı kolaylaştıran veya bir davranışı açıklayan bilgi |

Uyarıların kılavuzdaki görünümü aşağıdaki gibidir:

**TEHLİKE — Elektrik çarpması:** Elektrik panosunda gerilim altındaki parçalara dokunmak ölüme yol açar. Panoda çalışmadan önce ana şalteri kapatıp kilitleyin ve gerilim yokluğunu ölçün.

**UYARI — Ezilme:** Kapanan kabin kapısı eli veya kolu ezebilir. Kapı hareket ederken kapı açıklığına uzanmayın.

**DİKKAT — Sıcak yüzey:** Çevrim sonunda parçalar ve sepet sıcaktır; çıplak elle tutmak yanığa yol açar. Isıya dayanıklı eldiven kullanın.

**ÖNEMLİ:** Tank sıvısı pompa seviyesinin altındayken drenaj pompasını uzun süre çalıştırmak pompaya zarar verir.

**NOT:** Acil durdurmadan sonra Hazırlık, faz seçimleri ve Yağ Sıyırıcı başlangıç durumuna döner.

## 1.2.2 Güvenlik işaretleri

Kılavuzda ve makine üzerinde ISO 7010 güvenlik işaretleri kullanılır.

Tablo: Kullanılan ISO 7010 işaretleri

| İşaret | Kod | Anlamı | Kullanıldığı yer |
|---|---|---|---|
| :W001: | W001 | Genel uyarı | Genel tehlikeler |
| :W012: | W012 | Elektrik tehlikesi | Elektrik panosu, ısıtıcı bağlantıları |
| :W017: | W017 | Sıcak yüzey | Tank kapakları, kabin, ısıtıcı kutusu, pompalar |
| :W024: | W024 | El sıkışma tehlikesi | Tank kapakları, kabin kapısı |
| :W019: | W019 | Ezilme tehlikesi | Kabin kapısı açıklığı |
| :W011: | W011 | Kaygan zemin | Makine çevresi, drenaj ve temizlik işleri |
| :W023: | W023 | Aşındırıcı madde | Yıkama kimyasalı |
| :W014: | W014 | Forklift trafiği | Taşıma |
| :M002: | M002 | Kullanım kılavuzunu okuyun | Makine |
| :M004: | M004 | Göz koruyucu kullanın | Kimyasal işler, drenaj, temizlik |
| :M008: | M008 | İş ayakkabısı giyin | Tüm işler |
| :M009: | M009 | Koruyucu eldiven giyin | Yükleme, boşaltma, kimyasal ve bakım işleri |
| :M014: | M014 | Baret takın | Çatı üstü işler, taşıma |
| :M021: | M021 | Bakımdan önce enerjiyi ayırın | Bakım, temizlik ve arıza giderme |
| :P001: | P001 | Genel yasak | Solvent ve yanıcı sıvı kullanımı |
| :E003: | E003 | İlk yardım | Acil durumlar |
| :E011: | E011 | Göz yıkama | Kimyasal temas |
| :F001: | F001 | Yangın söndürücü | Yangın |

Makine üzerindeki etiketler ve konumları **Bkz. Bölüm 2.2.5**.

## 1.2.3 Metin gösterim kuralları

Tablo: Metin içindeki gösterimler

| Gösterim | Anlamı | Örnek |
|---|---|---|
| **KALIN BÜYÜK HARF** | Kumanda paneli üzerindeki fiziksel buton | **START**, **STOP**, **RESET**, **KAPI KAPALI** |
| **Kalın** | Operatör panelindeki buton, anahtar veya alan; ekranda yazdığı gibi | **Hazırlık**, **Reçete Onay**, **Sepet Test** |
| Sayfa adı | Operatör panelindeki ekran | Çalışma Sayfası, Ayar Sayfası |
| Error-xxx | Operatör panelindeki alarm kodu | Error-229 Acil Stop Devrede |
| I1.9, Q2.0 | PLC giriş ve çıkış adresi (elektrik şemasındaki adlandırma) | I1.9 — kapak kapandı sviçi |
| K1, Q1, F2 | Elektrik panosundaki ekipmanın şema etiketi | K5 — yıkama ısıtıcısı kontaktörü |
| **Bkz. Bölüm X.Y** | Konunun ayrıntılı anlatıldığı bölüm | **Bkz. Bölüm 2.4** |

Prosedürler numaralı adımlardan oluşur; her adımda tek bir işlem vardır. Alt adımlar harfle (a, b, c) gösterilir. Kalın satırlar prosedürü gruplara ayırır; adım numaraları gruplar boyunca kesintisiz devam eder.

Ondalık ayırıcı virgüldür (ör. 0,37 kW). Birimler SI sistemindedir; operatör panelinde süre birimi dakika için "Dk", saniye için "Sn" olarak görünür.

## 1.2.4 Yön tanımları

Kılavuzda yönler, makineye kabin kapısının önünden bakan kişiye göre tanımlanır:

- **Ön:** Kabin kapısı, kumanda paneli ve yükleme tarafı.
- **Sağ:** Elektrik panosunun bulunduğu taraf.
- **Sol:** Tank ünitesinin bulunduğu taraf.
- **Arka:** Kabin kapısının karşısındaki taraf.
- **Çatı:** Kabinin üst yüzeyi; kurutma fanı, ısıtıcı kutusu ve egzoz fanı buradadır.

Tank ünitesindeki tanklar kapakları üzerindeki numaralarla ayrılır: yıkama tankı {{TANKLAR:Yıkama tankı kapak numarası}}, durulama tankı {{TANKLAR:Durulama tankı kapak numarası}} numaralıdır.
