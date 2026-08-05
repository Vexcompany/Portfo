# Giovanni Adhi Pratama — Portfolio Website

Portfolio website premium untuk Giovanni Adhi Pratama, dibangun dengan React + Vite + TailwindCSS + Framer Motion.

---

## Tech Stack

- **React 19** — UI Framework
- **Vite** — Build tool
- **TailwindCSS v3** — Styling
- **Framer Motion** — Animasi
- **React Router v6** — Routing
- **Lucide React** — Icons

---

## Cara Menjalankan

### Prerequisites
- Node.js v18+
- npm v9+

### 1. Install dependencies

```bash
npm install
```

### 2. Development server

```bash
npm run dev
```

Buka `http://localhost:5173`

### 3. Build production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

---

## Struktur Project

```
src/
├── components/
│   ├── Navbar.jsx          # Navbar transparan → glassmorphism on scroll
│   ├── Hero.jsx            # Landing hero section
│   ├── About.jsx           # About + focus areas
│   ├── Experience.jsx      # Timeline pengalaman organisasi
│   ├── Skills.jsx          # Skills dalam card
│   ├── Portfolio.jsx       # Portfolio gallery
│   ├── Projects.jsx        # Featured project: PAGASKA Ecosystem
│   ├── Contact.jsx         # Contact form + social links
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── PortfolioDetail.jsx
│   └── ProjectDetail.jsx
├── data/index.js            # Semua data konten
├── hooks/useScrolled.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## Halaman

| Route | Deskripsi |
|-------|-----------|
| `/` | Landing page |
| `/portfolio/:id` | Detail karya portfolio |
| `/project/pagaska-ecosystem` | Detail PAGASKA Digital Ecosystem |

---

## Design System

| Token | Value |
|-------|-------|
| Background | `#0A0A0A` |
| Text primary | `#F0F0F0` |
| Accent red | `#CC0000` |
| Accent gold | `#C9A84C` |
| Card bg | `#111111` |
| Border | `#1E1E1E` |

Fonts: **Syne** (display) · **DM Sans** (body) · **JetBrains Mono** (mono)

---

## Deployment ke Vercel

Tambahkan `vercel.json` di root:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

Built with love in Madiun — 2025
