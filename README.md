<div align="center">

<!-- <img src="https://github.com/user-attachments/assets/bc3a5221-41a0-42ff-ae55-a8e7fe90dcec" alt="Komal 2.0 Banner" width="100%"/> -->

#  Komal 2.0 - Gamified Developer Portfolio

### *Not just a portfolio. An experience.*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-portfolio2--0--woad--theta.vercel.app-E5B8FF?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio2-0-woad-theta.vercel.app/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)

<img src="https://github.com/user-attachments/assets/bc3a5221-41a0-42ff-ae55-a8e7fe90dcec" alt="Komal 2.0 Banner" width="100%"/>
</div>

---

## 🕹️ About

Komal 2.0 is a game-themed, pixel-styled developer portfolio built to be *felt*, not just scrolled through. Every section has personality — from the animated loader and RPG-style trait bars, to a clickable cat that roasts your code, to a full easter egg mode hidden behind a classic cheat code.

It was designed from scratch with a focus on aesthetic consistency, smooth motion, and the kind of delightful details that make someone stop and smile.

> Built with React + TypeScript + Framer Motion + Tailwind CSS, deployed on Vercel.

---

## ✨ Features

### 🎨 Design & UX
- **Game-inspired UI** — pixel-style visuals, grid backgrounds, RPG color palettes
- **Light / Dark mode** — fully themed across every section, toggled with a custom hook
- **Animated Loader** — custom intro sequence before the portfolio reveals itself
- **Smooth scroll animations** — every section entrance powered by Framer Motion
- **Fully responsive** — mobile, tablet, and desktop

### 🧩 Interactive Sections
- **Hero** — animated character design with motion effects
- **About** — RPG-style trait progress bars (Creativity, Debug Patience, etc.) + equipment card + a clickable cat that speaks in random roast messages
- **Badges** — achievements and certifications display
- **Skills** — tech stack showcase
- **Projects** — filterable project cards with modal detail view and video support
- **Contact** — form powered by Supabase

### 🥚 Easter Egg
Type the **Konami Code** anywhere on the page:

```
↑ ↑ ↓ ↓ ← → ← → B A
```

And you'll get Rick Roll'd. Complete with party mode UI, floating icons, volume control, and a 10-second chaos timer. You've been warned.

### 🎃 Seasonal Themes (Built In)
The codebase includes ready-to-toggle seasonal components — Halloween (floating pumpkins, spooky bg), Diwali (floating diyas), and Christmas (floating Santa). They're currently commented out but can be switched on for the occasion.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Backend (Contact) | Supabase |
| Build Tool | Vite |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx            # Landing section with character animation
│   ├── About.tsx           # RPG traits, equipment, clickable cat
│   ├── Badges.tsx          # Certifications & achievements
│   ├── Skills.tsx          # Tech stack display
│   ├── Projects.tsx        # Project cards with modal + video
│   ├── Contact.tsx         # Contact form (Supabase)
│   ├── KonamiMode.tsx      # 🥚 Easter egg — Rick Roll party mode
│   ├── Header.tsx          # Nav + theme toggle
│   ├── Footer.tsx
│   ├── loader.tsx          # Animated intro loader
│   ├── Halloween.tsx       # 🎃 Seasonal (toggle on/off)
│   ├── Diwali.tsx          # 🪔 Seasonal
│   ├── Christmas.tsx       # 🎄 Seasonal
│   └── Floating*.tsx       # Floating seasonal decorations
├── hooks/
│   ├── useKonamiCode.tsx   # Konami code detector
│   └── useTheme.tsx        # Light/dark theme context
├── assets/                 # Images, audio, video, icons
├── App.tsx
└── main.tsx
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Komal290106/Portfolio2.0.git
cd Portfolio2.0/project

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Environment Variables

Create a `.env` file in the `project/` root for the contact form:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> The rest of the portfolio works fine without these — only the Contact form needs Supabase.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | TypeScript type check |

---

<div align="center">

*Built with 💜 by [Komal Kaur Dhillon](https://github.com/Komal290106)*

</div>
