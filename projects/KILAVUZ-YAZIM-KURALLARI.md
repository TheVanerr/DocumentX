# DocumentX — Kılavuz Yazım Kuralları (Genel)

Bu dosya, `projects/` altındaki **herhangi bir proje** için kullanım kılavuzu içeriği üretilirken
uygulanacak genel kuralları tanımlar. Bir projeye kılavuz yazılması istendiğinde bu dosya ile
projenin DATA dosyası birlikte okunmalıdır.

---

## 1. Kapsam ve dosya sınırları

| Yazılır | Yazılmaz |
|---------|----------|
| `projects/<proje-adi>/` altındaki `.md` dosyaları | `content/_common/` |
| Proje `assets/` klasörüne referanslar | `content/_models/` |
| | `templates/`, `codes/`, `scripts/`, `assets/` (global) |

**Kural:** Yalnızca hedef proje klasörüne dokun. Ortak içerik, şablon ve uygulama koduna müdahale etme.

---

## 2. Tek kaynak: DATA dosyası (SSOT)

Her projenin kökünde `<proje-adi> DATA` adlı makine veri dosyası bulunur.

- Kılavuz metnindeki **tüm teknik bilgi** bu dosyadan gelir.
- DATA'da olmayan değer **uydurulmaz**.
- Boş veya bilinmeyen alanlar metinde `[EKSİK]` olarak işaretlenir veya o paragraf atlanır.
- Başka makine modellerinden (VDL, LYM vb.) veya genel bilgiden bilgi **karıştırılmaz**.

DATA bölüm numaraları ile kılavuz bölümleri eşleşir:

| DATA | Kılavuz klasörü | Dosya |
|------|-----------------|-------|
| 01 — GİRİŞ | `01-introduction/` | `_common` (proje yazmaz) |
| 02 — GÜVENLİK | `02-safety/` | `_common` |
| 03.1 — Makine tanımı | `03-overview/01-machine-description/` | `machine-description.<dil>.md` |
| 03.2 — Amaçlanan kullanım | `03-overview/02-intended-use/` | `intended-use.<dil>.md` |
| 03.3 — Teknik özellikler | `03-overview/03-machine-spec/` | `machine-spec.<dil>.md` |
| 03.4 — Kontroller | `03-overview/04-machine-controls/` | `machine-controls.<dil>.md` |
| 03.5 — Yerleşim | `03-overview/05-machine-layout/` | `machine-layout.<dil>.md` |
| 04 — TAŞIMA | `04-transport/` | `_common` |
| 05 — MONTAJ | `05-assembly/` | proje özel |
| 06 — AYARLAR | `06-settings/` | proje özel |
| 07 — OPERASYON | `07-operation/` | proje özel |
| 08 — KAPASİTE | `08-capacity/` | proje özel |
| 09 — BAKIM | `09-maintenance/` | proje özel |
| 10 — TEMİZLİK | `10-cleaning/` | proje özel |
| 11 — ARIZA GİDERME | `11-troubleshooting/` | proje özel |
| 12 — DEMONTAJ | `12-dismantle/` | proje özel |
| 13 — DÖKÜMANLAR | `13-documents/` | proje özel |
| 14 — EKLER | `14-index/` | proje özel |

---

## 3. Yazım dili ve üslup

- **Dil:** İlk hedef Türkçe → `*.tr.md`. İleride `*.en.md`, `*.de.md` eklenebilir.
- **Ton:** Endüstriyel makine kullanım kılavuzu; resmi, net, operatör/bakım/kurulum personeline yönelik.
- **Uzunluk:** Kısa özet değil; **detaylı teknik açıklama**. Her alt sistem kendi alt başlığında anlatılır.
- **Yapı:**
  - Ana başlık: `# 3.1. ...` (bölüm numarası + başlık)
  - Alt başlıklar: `## 3.1.1. ...`, `## 3.1.2. ...` şeklinde numaralandırılır.
  - Madde listeleri, tablolar ve paragraflar karışık kullanılır; okunabilirlik için uzun bloklardan kaçınılır.
- **Tekrar:** Aynı bilgi farklı bölümlerde tekrarlanmaz; her bölüm kendi kapsamında kalır.
  - Örn. 3.1 makine tanımı → sistem mimarisi ve bileşenler; 3.3 → sayısal teknik tablolar.

---

## 4. Fotoğraf ve görsel yerleştirme

Kullanıcı fotoğrafları sonradan ekler. Metin içinde iki işaretleme kullanılır:

**a) HTML yorum (yer tutucu):**

    <!-- FOTO: Yıkama banyosu — pompa ve tank genel görünüm -->

**b) Markdown görsel satırı (DocumentX render için):**

    ![Yıkama banyosu genel görünüm](../../assets/FOTO-3-1-2-yikama-banyosu.png)

- Görseller proje `assets/` klasöründen referanslanır.
- `03-overview/01-machine-description/` dosyasından yol: `../../assets/<dosya-adı>`
- Dosya adı henüz yoksa `FOTO-<bölüm>-<sıra>-<kısa-açıklama>.png` formatı kullanılır.
- Mevcut asset dosyaları varsa yorum satırında alternatif olarak belirtilebilir.
- Her anlamlı alt sistem bölümünde en az bir fotoğraf yer tutucusu bırakılır.

---

## 5. Tablo ve teknik veri kullanımı

- Motor listesi, bileşen özeti, proses adımları tablo ile sunulabilir.
- Tablodaki her değer DATA'dan gelmelidir; birimler DATA'daki gibi yazılır.
- Marka/model bilgisi DATA'da varsa tabloya dahil edilir; yoksa sütun boş bırakılır veya `[EKSİK]`.

---

## 6. İş akışı (AI / yazar için)

Bir proje için bölüm yazılması istendiğinde:

1. `projects/KILAVUZ-YAZIM-KURALLARI.md` dosyasını oku.
2. `projects/<proje-adi>/` klasörünü ve `<proje-adi> DATA` dosyasını oku.
3. İstenen bölümün DATA karşılığını belirle (yukarıdaki eşleme tablosu).
4. Hedef `.md` dosyasını yalnızca DATA bilgisiyle yaz veya güncelle.
5. DATA'da eksik alan varsa uydurma; `[EKSİK]` bırak veya ilgili alt bölümü atla.
6. Başka klasörlere dokunma.

**Örnek kullanıcı isteği:** "1726050-ALPER-KNV-30 projesinde 03-overview machine-description yaz."

**Yapılacaklar:**
- DATA → `[MAKINE_TANIMI]`, `[GIRIS_GENEL]`, `[PROJE]` ve ilgili motor/bileşen blokları
- Çıktı → `projects/1726050-ALPER-KNV-30/03-overview/01-machine-description/machine-description.tr.md`

---

## 7. Kalite kriterleri

| Kriter | Beklenti |
|--------|----------|
| Doğruluk | %100 DATA uyumu; halüsinasyon yok |
| Detay | Alt sistemler ayrı alt başlıklarda; motor güç/devir/marka dahil |
| Tutarlılık | Bölüm numaralandırması DocumentX şablonu ile uyumlu |
| Görseller | Her ana alt sistemde fotoğraf yer tutucusu |
| Kapsam | Sadece ilgili bölüm; komşu bölüm içeriği taşmaz |

---

## 8. Dosya adlandırma

    projects/
      KILAVUZ-YAZIM-KURALLARI.md
      <proje-adi>/
        <proje-adi> DATA
        project.yaml
        assets/
        03-overview/
          01-machine-description/
            machine-description.tr.md

---

*Son güncelleme: DocumentX proje yapısına göre genel sürüm.*
