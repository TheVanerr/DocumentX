# 13.2 Çizimler

Bu alt bölüm makine layout çiziminin teslim şeklini ve kılavuza gömülü görsel referansları tanımlar. Ayrı montaj, ankraj veya kaldırma noktası çizimleri **teslim edilmemektedir** (DATA).

---

## 13.2.1 Ayrı evrak — makine layout

| Parametre | Değer |
|-----------|-------|
| Doküman | Makine layout çizimi |
| Dosya adı | `1726050-ALPER-KNV 30 LAYOUT.pdf` |
| Teslim | Ayrı evrak (PDF) — teslim paketi |
| Kılavuz referansı | **Bölüm 3.5** — Makine yerleşimi |

Layout çiziminde aşağıdaki bilgiler yer alır:

- Makine dış boyutları ve minimum kurulum alanı
- Besleme yönü (**sol**), boşaltma yönü (**sağ**), operatör tarafı (**sağ**)
- Elektrik, hava ve su bağlantı noktalarına yaklaşım yönleri
- Forklift alt profil konumu (taşıma — bkz. **4.1**)

Layout, kurulum (**5**), taşıma (**4**) ve tesis planlaması (**3.5**) için birincil referans çizimidir.

---

## 13.2.2 Teslim edilmeyen çizimler

| Çizim | Durum | Alternatif referans |
|-------|-------|---------------------|
| Genel montaj çizimi | Teslim edilmez | Layout PDF + kılavuz **3.1** |
| Kaldırma noktaları | Layout içinde; ayrı evrak yok | Forklift alt profilleri — **4.1** (vinç yasak) |
| Zemin ankraj | Teslim edilmez | Kurulum **5.2** — ayarlanabilir ayak |
| Pnömatik şema | Teslim edilmez | Elektrik şeması + **6.5** |
| Hidrolik şema | Uygulanmaz | — |

---

## 13.2.3 Kılavuza gömülü görseller

Makine fotoğrafları ve HMI ekran görüntüleri proje `assets/` klasöründedir. Kılavuz metinlerinde referans verilen görseller ilgili bölümlerde yer alır; ayrı çizim paketi **oluşturulmaz**.

| Görsel tipi | Konum | Kullanıldığı bölümler |
|-------------|-------|----------------------|
| Makine / modül fotoğrafları | `assets/{bölüm}.{alt}/N.png` | **3**–**8** ilgili alt bölümler |
| HMI ekran görüntüleri | `assets/3.4/N.png` (SSOT **3.4**); çapraz referanslarda ilgili bölüm klasörü | **3.4**, **5**–**8** |
| Sembol / uyarı ikonları | `assets/1.2.2/*.png` | **1.2**, **2** |

Her alt bölüm kendi `assets/X.Y/` klasöründe sıralı numaralandırılmış görselleri kullanır; aynı fotoğraf birden fazla bölümde geçse bile her bölüm kendi numaralı dosyasına referans verir.

---

