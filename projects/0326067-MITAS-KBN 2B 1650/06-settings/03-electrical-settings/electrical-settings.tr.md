# 6.3 Elektrik ayarları

**TEHLİKE — Elektrik çarpması:** Elektrik panosundaki ayarları yalnızca yetkili elektrikçi, gerilim altındaki parçalara dokunmadan veya LOTO uygulayarak yapar.

## 6.3.1 Motor koruma şalterlerinin ayarı

Motor koruma şalterleri, korudukları motorun etiketindeki nominal akıma ayarlanır. Daha yüksek ayar motoru korumaz; daha düşük ayar gereksiz açmalara yol açar.

Tablo: Motor koruma şalterleri

| Şalter | Koruduğu motor | Ayar aralığı | Ayar değeri |
|---|---|---|---|
| Q1 | Yıkama pompası | 4–6,3 A | Pompa motorunun etiket akımı |
| Q2 | Durulama pompası | 4–6,3 A | Pompa motorunun etiket akımı |
| Q3 | Kurutma fanı | 1–1,6 A | Fan motorunun etiket akımı |
| Q4 | Egzoz fanı | 0,63–1 A | Fan motorunun etiket akımı |
| Q5, Q6 | Yağ sıyırıcı, drenaj pompası | {{PANO_EKIPMANLARI:Q5, Q6#3}} | Motor etiket akımı |

Yatay proses pompasının (Atlantis KAF 300T/304) etiketindeki akım 400 V'ta 5,2 A'dir; bu pompanın bağlı olduğu şalter 5,2 A'e ayarlanır. Sepet tahrik motoru frekans invertörüyle sürülür; motorun aşırı akım koruması sürücü parametreleriyle yapılır.

1. LOTO uygulayın ve pano kapağını açın.
2. Ayarlanacak şalterin koruduğu motorun etiketinde, şebeke gerilimine karşılık gelen nominal akımı okuyun.
3. Şalterin ayar düğmesini, etiket akımına getirin.
4. Ayar değerini bakım kaydına yazın.
5. Pano kapağını kapatın.

## 6.3.2 Sıcaklık ölçümü

Tank ve kurutma sıcaklıkları J tipi termokupllarla ölçülür ve PLC'nin termokupl giriş ünitesine (CP1W-TS003) bağlanır. Ölçümün sahada kalibrasyon ayarı yoktur. Ölçüm doğruluğu, panel değerinin bağımsız bir termometreyle karşılaştırılmasıyla kontrol edilir (**Bkz. Bölüm 9.1.19**). Fark 3 °C'yi aşarsa (tank ısıtıcısının devreye girme farkı) termokupl ve bağlantıları kontrol edilir; gerekirse üretici servisine başvurulur.

## 6.3.3 Sepet motoru sürücüsü

Sepet motoru sürücüsünün ({{KONTROLLER:Sepet motoru sürücüsü}}) parametreleri üretici tarafından ayarlanmıştır. Sürücü parametrelerini değiştirmeyin. Sürücü değiştirildiğinde yeni sürücüye eski sürücünün parametreleri üretici tarafından yüklenir. Sürücünün ekranında hata kodu görünürse kodu not edin (**Bkz. Bölüm 11.3.3**).

## 6.3.4 Saat, tarih ve dil ayarı

**Saat ve tarih**

1. Menüde **Kurulum Sayfası**'na basın.
2. Açılan giriş penceresine yetkili kullanıcı şifresini girin.
3. Sayfanın altındaki **Saat**, **Dk**, **Gün**, **Ay** ve **Yıl** kutularına sırayla dokunun ve doğru değerleri girin (saat 24 saat biçiminde, yıl dört haneli).
4. Sol üstteki tarih ve saat göstergesinin güncellendiğini kontrol edin.

Alarm kayıtlarındaki zamanlar bu saate göre yazılır; saati yaz/kış saati değişikliklerinde ve enerji kesintisinden sonra kontrol edin.

**Dil**

5. Herhangi bir sayfada sol üstteki Dolfin logosuna dokunun.
6. Açılış ekranında İngilizce için İngiliz bayrağına, Türkçe için Türk bayrağına dokunun.
7. Ekranın herhangi bir yerine dokunarak Çalışma Sayfası'na dönün.

## 6.3.5 Lambalar

Kule lambası ve kabin lambası için ayar yoktur. Kabin lambası **LAMBA** butonuyla yakıldıktan {{KONTROL_SABITLERI:Kabin lambası açık kalma süresi#1}} sonra kendiliğinden söner.
