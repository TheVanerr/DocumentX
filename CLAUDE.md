# DocumentX — Claude çalışma notları

Endüstriyel makine **kullanım kılavuzu** (EN ISO 20607 / ISO 12100) üreten repo. Kılavuzlar Markdown olarak yazılır; `codes/` altındaki Electron uygulaması bunları A4 sayfalı görünüme, PDF ve HTML/DOCX çıktısına çevirir. Çalışma dili Türkçe; kılavuzlar TR/EN/DE.

> Bu dosya her oturumda yüklenir. Projeyi baştan okuma — yalnızca işin gerektirdiği DATA bloğunu ve bölüm dosyasını aç.

## Klasör yapısı

- `projects/<proje>/` — her kılavuz kendi klasöründe **tam içerik** taşır (yedek/ortak katman yok).
  - Model şablonları: `knv, vdl, kbn, lym, mst, pyt, rts, ult` (yaml'da `sablon: true`).
  - Müşteri projeleri: `<siparişno>-<MÜŞTERİ>-<MODEL>-<no>` (ör. `1726050-ALPER-KNV-30`, `0726051-YETSAN-KNV-90`).
  - İçerik: `01-introduction` … `14-index` / `<NN-alt-bolum>/<dosya>.<dil>.md`; bölüm girişi `<bölüm>/<dosya>.<dil>.md`.
  - `* DATA` (uzantısız) — makinenin **tek veri kaynağı (SSOT)**, `[BLOK]` etiketli `Anahtar: değer` satırları.
  - `<proje>.yaml` / `project.yaml` — `proje_adi`, `model`, `diller`, `kapak` (başlık, rev, firma).
  - `assets/<bölüm-no>/` — görseller bölüm numarasıyla klasörlenir (ör. `assets/1.2.2/warning1.png`).
- `templates/` — boş proje iskeleti; `templates/base.yaml` bölüm/alt bölüm sırasını ve dosya adlarını tanımlar (**numaralandırmanın kaynağı**).
- `codes/` — Electron görüntüleyici (`main.js` çözümleme/IPC, `renderer.js` md→HTML + sayfalama, `cover.js`, `header.js`, `style.css`). Yerleşim/sayfalama ayarları: `codes/layout-rules.md`.
- `scripts/` — yardımcılar (aşağıda). Proje adına özel `*-alper*.py` betikleri tek seferliktir; yeni proje için örnek alınabilir.
- `assets/logos/` — firma logoları (ortak). `CURSOR USER MANUEL TEMPLATE.md` — ayrıntılı yazım şablonu (Bölüm A kurallar, B bölüm içerikleri, D kalite kontrol). `.cursor/rules/*.mdc` — Cursor için aynı kuralların özeti.
- **Okuma:** `_drive_photos/`, `fotoğraflar/`, `*.xlsm`, `*.PDF`, `codes/node_modules/`, `EN ISO 20607 2019.pdf` (yalnızca norm sorusunda bak).

## İş akışı (kılavuz yazımı)

1. Projenin `* DATA` dosyasında ilgili `[BLOK]`u oku (`grep -n '^\[' "<DATA>"` ile blok satırlarını bul, sadece o aralığı oku).
2. Hedef `.tr.md` dosyasını oku. **TR ana dildir**; EN/DE, TR ile **1:1** (aynı başlık, tablo, liste, görsel yapısı) tutulur.
3. Yaz → aynı değişikliği projenin `diller` listesindeki diğer dillere uygula.
4. Bölüm numaraları için şablon numarasına değil, projedeki mevcut başlıklara bak (ör. ALPER'de 3.3 teknik değerler, 3.4 kontroller).

## Veri kuralları

- Değerler DATA'dan gelir; **uydurma yok**. Bilinmeyen → `[EKSİK]`.
- Sayısal/teknik değerleri bölümler arasında tekrarlama; SSOT bölümüne çapraz referans ver.
- SSOT noktaları: LOTO, acil stop/reset, KKD → **Bölüm 2**; tanım, alan, teknik/tesisat tabloları, motor listesi, kontroller → **Bölüm 3**; periyodik bakım/yağlama → **Bölüm 9**; yedek parça BOM → **13.3** (9.1.5'te özet).
- DATA ile `.md` çelişirse DATA'yı esas al ve kullanıcıya bildir.

## Yazım stili (ISO 20607)

- **Prosedür:** emir kipi, aktif ses, numaralı adım, adım başına tek işlem ("Düğmeye basın"). Alt gruplar `**Kalın satır**` ile, numara kesintisiz devam eder.
- **Açıklayıcı metin:** tam paragraf — ne / neden / ne zaman / yapılmazsa ne olur. Tek cümleyle geçiştirme.
- "Uygun / yeterli / gerekli" gibi ölçülemeyen ifade yok → somut değer. SI birim. Aynı parça için tek terim.
- Temel mühendislik eğitimi verme; kılavuz kapsamında kal.

## Başlıklar (zorunlu)

| Seviye | Markdown | Yazım | Örnek |
|---|---|---|---|
| Ana bölüm `X.` | `#` (bölüm giriş dosyası) | TAMAMI BÜYÜK | `# 2. GÜVENLİK` |
| Alt bölüm `X.Y` | `#` (alt bölüm dosyasının ilk başlığı) | Cümle başı | `# 2.4 Tehlikeli enerji kontrolü — LOTO` |
| `X.Y.Z` | `##` | Cümle başı | `## 2.4.1 Kapsam ve enerji kaynakları` |

- 4. seviye (`X.Y.Z.W`), `###`, `####` **yasak** → kalın satır veya numaralı liste.
- `scripts/fix-headings.py` başlıkları otomatik düzeltir (dosyaları değiştirir; şu an `ROOT` ALPER'e sabit — başka proje için `ROOT`u değiştir).

## Biçim kalıpları

- Uyarı: `**UYARI — <tehlike türü>:** <olası yaralanma>. <önleme>.` — sinyal kelimeleri TR `TEHLİKE/UYARI/DİKKAT`, EN `DANGER/WARNING/CAUTION`, DE `GEFAHR/WARNUNG/VORSICHT`. Yalnızca o adıma özgü tehlikede ekle; uyarı kopyalama.
- Çapraz referans: TR `**Bkz. Bölüm 2.4**`, EN `**See Chapter 2.4**`, DE `**Siehe Kapitel 2.4**`.
- Görsel: `![Açıklama](../../assets/<bölüm-no>/<dosya>.png)` — yolu dosyanın derinliğine göre göreli ver.
- Tablolar standart Markdown (`| :--- |`); hücreler renderer'da ortalanır. Bölüm/alt bölüm geçişlerinde `---`.

## Komutlar

- Uygulama: `cd codes && npm start` (veya kökteki `DocumentX.vbs`). Canlı yenileme açık.
- Yeni proje: `node scripts/new-project.js "1730000-XYZ-KNV 40" knv tr,en,de` (model şablonunu kopyalar).
- Eksik dil iskeleti: `node scripts/scaffold-lang.js en de` (mevcutları korur; `--force` ile yeniden yazar).
- Otomatik çeviri (Gemini/DeepL, anahtarlar `.env`'de): `node scripts/translate-lang.js en --only 02-safety [--dry|--status]`.
- Mimari doğrulama: `node scripts/verify.js`.

## Git

- Commit mesajı Türkçe, ASCII'ye yakın, kısa: `<MÜŞTERİ veya MODEL> <konu>: <ne değişti>.` (ör. `ALPER KNV-30: bolum 3.4 guncelleme.`).
- `.env` ve `scripts/.translation-state.json` asla commit edilmez.
