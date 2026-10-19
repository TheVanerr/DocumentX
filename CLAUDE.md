# DocumentX — Claude çalışma notları

Endüstriyel makine **kullanım kılavuzu** (EN ISO 20607 / ISO 12100) üreten repo. Kılavuzlar Markdown (TR/EN/DE); `codes/` altındaki Electron uygulaması bunları A4 / PDF / HTML / DOCX'e çevirir. Çalışma dili Türkçe.

## Okuma kuralı (token tasarrufu — zorunlu)

- **Yalnızca kullanıcının mesajda adını verdiği proje, bölüm veya dosyayı oku.** Projeyi, klasör ağaçlarını veya "bağlam için" başka projeleri tarama.
- Konu belirsizse okumadan önce sor; tahminle geniş arama yapma.
- Dosyanın tamamı gerekmiyorsa `grep -n` ile yeri bul, yalnızca o satır aralığını oku (ör. DATA'da `grep -n '^\[' "<DATA>"` → ilgili `[BLOK]`).
- `projects/` altında başka bir projeyi "örnek" diye açma; kullanıcı açıkça isterse aç.
- Kesin yasak (`.claude/settings.json` engeller): `node_modules/`, `codes/dist/`, `exports/`, `_drive_photos/`, `fotoğraflar/`, `*.xlsm`, `.env`, büyük dışa aktarım HTML'leri.
- İstenmedikçe açma: `EN ISO 20607 2019.pdf` (yalnız norm sorusunda), `CURSOR USER MANUEL TEMPLATE.md`, `.cursor/`, `projects/*/assets/` görselleri, `codes/test/`.

## Klasör haritası

- `projects/<proje>/` — her kılavuz kendi klasöründe tam içerik. Yazım kuralları: **`projects/CLAUDE.md`** (o klasörde çalışınca otomatik yüklenir).
- `codes/` — Electron uygulaması. Geliştirme notları: **`codes/CLAUDE.md`** (otomatik yüklenir).
- `templates/` — boş proje iskeleti; `base.yaml` bölüm sırası, `DATA` veri şablonu, `sozluk.yaml` ortak terim sözlüğü.
- `scripts/` — yardımcı betikler (komutlar `projects/CLAUDE.md`'de).
- `assets/logos/` — firma logoları; `assets/iso7010/` — ISO 7010 işaretleri.

## Git

- Commit mesajı Türkçe, ASCII'ye yakın, kısa: `<MÜŞTERİ veya MODEL> <konu>: <ne değişti>.` (ör. `ALPER KNV-30: bolum 3.4 guncelleme.`).
- `.env` ve `scripts/.translation-state.json` asla commit edilmez.
