# FinEdu+ Mobile App

Aplikasi edukasi literasi keuangan berbasis mobile, dibangun menggunakan **React + TypeScript + Vite**.

---

## 📱 Fitur Utama

| Halaman | Deskripsi |
|---------|-----------|
| **Splash Screen** | Tampilan awal dengan logo FinEdu+ selama 5 detik |
| **Onboarding** | 3 slide pengenalan aplikasi dengan tombol Skip & Mulai |
| **Login** | Form login (Email + Password) |
| **Signup** | Form registrasi (Nama, Email, Password, Tanggal Lahir, Gender) |
| **Beranda** | Dashboard utama: skor literasi, menu Modul & Simulasi, bottom navigation |
| **History** | Riwayat aktivitas (Recent Activity) dengan kartu modul |
| **Modul** | Daftar 4 modul edukasi keuangan |

---

## 🗂 Struktur Project

```
src/
├── assets/               # Gambar, ikon SVG, dan logo
│   ├── FinEdu.png
│   ├── topi.png
│   ├── buku.svg
│   ├── back.svg
│   ├── home.svg
│   ├── history.svg
│   ├── profile.svg
│   └── ...
├── pages/                # Semua halaman aplikasi
│   ├── App.tsx           # Splash screen
│   ├── App.css
│   ├── onboarding.tsx    # Onboarding slider
│   ├── onboarding.css
│   ├── Login.tsx         # Halaman login
│   ├── Signup.tsx        # Halaman registrasi
│   ├── LoginSignup.css   # Shared CSS untuk Login & Signup
│   ├── Beranda.tsx       # Dashboard utama
│   ├── Beranda.css
│   ├── History.tsx       # Riwayat aktivitas
│   ├── History.css
│   ├── Modul.tsx         # Daftar modul
│   ├── Modul.css
│   ├── StatusBar.tsx     # Komponen iPhone status bar (reusable)
│   └── StatusBar.css
├── main.tsx              # Entry point & routing
└── index.css             # Global styles
```

---

## 🔀 Alur Navigasi

```
Splash Screen (/) → Onboarding → /login
                                    ↕
                                /signup

/login → /beranda (Dashboard)
            ├── Modul → /modul
            ├── History → /history
            └── Profile → /login
```

---

## 🎨 Desain

- **Gradient Header**: Biru gelap ke terang (`#1e3a8a → #3b5fc0 → #60a5fa`)
- **Gelombang SVG**: Transisi organik antara header dan konten putih
- **Status Bar iPhone**: Komponen `StatusBar.tsx` menampilkan jam real-time, sinyal, wifi, dan baterai menggunakan inline SVG
- **Bottom Navigation**: Bar navigasi bawah dengan ikon Home, History, dan Profile
- **Mobile-First**: Layout `393px` dengan responsive breakpoint di `420px` dan `360px`

---

## 🛠 Tech Stack

| Teknologi | Versi |
|-----------|-------|
| React | 18+ |
| TypeScript | 5+ |
| Vite | 6+ |
| React Router DOM | 6+ |

---

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

---

## 📝 Catatan Perubahan Terakhir

### File yang Dibuat Baru
- `src/pages/History.tsx` + `History.css` — Halaman riwayat aktivitas (Frame 22 Figma)
- `src/pages/Modul.tsx` + `Modul.css` — Halaman daftar modul (Frame 12 Figma)
- `src/pages/StatusBar.tsx` + `StatusBar.css` — Komponen status bar iPhone (reusable)
- `src/assets/back.svg` — Ikon panah back putih

### File yang Dipindahkan
Semua komponen halaman dipindahkan dari `src/Components/` ke `src/pages/` untuk konsistensi struktur:
- `Login.tsx`, `Signup.tsx`, `LoginSignup.css`
- `Beranda.tsx`, `Beranda.css`
- `History.tsx`, `History.css`
- `Modul.tsx`, `Modul.css`

### File yang Diubah
- **Beranda.tsx** — Disederhanakan gaya penulisan, status bar diganti komponen `StatusBar`
- **Beranda.css** — Header gradient biru (`#1e3a8a → #3b5fc0`) + wave SVG gradient (`#3b5fc0 → #60a5fa`)
- **History.css** — Padding header disesuaikan untuk StatusBar
- **Modul.css** — Padding header disesuaikan untuk StatusBar
- **main.tsx** — Routing diperbarui, semua import dari `pages/`, route `/` mengarah ke Onboarding

---

## 👥 Tim

Dikembangkan sebagai bagian dari proyek UTS.
