# Mannn Labs — Website
Bahasa: HTML, CSS, dan JavaScript — dipisah per file.

Salinan website Mannn Labs (PT Mannn Labs Teknologi) — HTML, CSS, dan JavaScript dipisah per file.

## Struktur

| Folder | Dipakai di | Isi |
| --- | --- | --- |
| `mannnlabs-com/` | `mannnlabs.com` — halaman profil/portofolio | `index.html` + `styles.css` + `script.js` |
| `ai-mannnlabs-com/` | `ai.mannnlabs.com` — halaman penjualan API key | `index.html` + `styles.css` + `script.js` |

- `index.html` — struktur halaman (termasuk gambar paus DeepSeek yang inline base64)
- `styles.css` — semua tampilan (warna, layout, responsif)
- `script.js` — semua interaktivitas (toggle bahasa ID/EN, FAQ, Playground, animasi ketik)

## Deploy

Upload **isi folder** ke hosting (bukan foldernya):

- Isi `mannnlabs-com/` → folder domain `mannnlabs.com`
- Isi `ai-mannnlabs-com/` → folder subdomain `ai.mannnlabs.com`

## Live

- https://mannnlabs.com
- https://ai.mannnlabs.com

## Catatan

- Link antar-halaman sudah memakai domain asli (`mannnlabs.com` ↔ `ai.mannnlabs.com`).
- Harga, model (DeepSeek + Claude), dan isi halaman mengikuti versi live 14 Nov 2026.
- Versi 1 file (HTML mandiri) sebelumnya sudah diganti struktur pisah ini pada 16 Nov 2026.
