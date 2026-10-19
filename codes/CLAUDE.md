# Uygulama geliştirme notları (codes/)

> Bu dosya yalnızca `codes/` altında çalışırken yüklenir. Yalnızca istenen özelliğin modülünü aç; tüm dosyaları okuma. Kod haritası ve yerleşim ayarları: `layout-rules.md` (gerektiğinde ilgili bölümünü oku).

## Modüller (hangisini açacağını buradan seç)

- **main süreç:** `main.js` (IPC, çözümleme, dışa aktarım), `yaml-edit.js`, `data-file.js`, `git-info.js`, `pdf-post.js`, `web-export.js`, `preload.js`.
- **belge motoru:** `md-parser.js` (md→blok), `data-resolve.js` (DATA yer tutucuları), `iso7010.js`, `figures.js`, `paginator.js` (A4 sayfalama), `document.js` (içindekiler, belge kurulumu), `glossary.js` (sözlük/dizin), `changes.js` (değişiklik çubukları), `cover.js`, `header.js`, `brands.js` (firma tanımları).
- **arayüz:** `renderer.js` (akış, kısayollar, ayarlar), `sidebar.js`, `search.js`, `qc.js` (+ `iso20607.js`), `compare.js`, `export.js`, `editor.js`, `dashboard.js`, `images.js`, `state.js` (paylaşılan durum).
- **stiller:** `style.css` (A4 sayfa), `doc-content.css` (belge bileşenleri, HTML çıktısında da), `html-export.css`, `ui.css` (arayüz).

## Komutlar

- Çalıştır: `npm start` (canlı yenileme açık).
- Test: `npm test` (birim + render), `npm run test:ui` (arayüz). Testler `test/fixtures/projects` kullanır; **projects/ okunmaz**.
- Bu oturum kabuğunda `ELECTRON_RUN_AS_NODE=1` olabilir → `env -u ELECTRON_RUN_AS_NODE ./node_modules/.bin/electron …`.
- Toplu çıktı: `npm run export -- "<proje>" tr,en pdf,html,docx,web`.
- Kurulum: `npm run dist` (OneDrive kilitlerse `-c.directories.output=<OneDrive dışı klasör>`); yayın: `GH_TOKEN=… npm run release`.
