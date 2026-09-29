# Academic Personal Website — Kritika Taank

> Clean, minimalist academic portfolio built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. Styled after [AcademicPages](https://github.com/academicpages/academicpages.github.io) and [lijie-hu.github.io](https://lijie-hu.github.io).

[![GitHub Pages Deployment](https://img.shields.io/badge/GitHub%20Pages-Live-24292e?logo=github&style=flat-square)](https://kritikataank.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

---

## 👩‍💻 Profile

| Field | Detail |
| :--- | :--- |
| **Name** | **Kritika Taank** |
| **Role** | Associate Software Engineer @ **Nokia Solutions and Networks** |
| **Education** | B.E. in Computer Science & Engineering (VTU) · **CGPA: 9.27 / 10.0** |
| **Research** | Deep Reinforcement Learning (DQN / DDQN), Explainable AI (XAI), Transport AI/ML |
| **Website** | [kritikataank.github.io](https://kritikataank.github.io) |
| **Profiles** | [GitHub](https://github.com/kritikataank) · [LinkedIn](https://linkedin.com/in/kritikataank) · [Google Scholar](https://scholar.google.com) |

---

## 🚀 Quick Start (Local Setup)

Clone and run locally on your machine in 3 simple steps:

```bash
# 1. Clone the repository
git clone https://github.com/kritikataank/kritikataank.github.io.git
cd kritikataank.github.io

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open `http://localhost:3000` to view the website in your browser.

---

## 🌐 Deploy to GitHub Pages (Step-by-Step)

The repository includes a ready-to-use GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and publishes your website on every commit.

### 1. Create your repository
1. Go to [github.com/new](https://github.com/new).
2. Name the repo: **`kritikataank.github.io`** *(must match `<username>.github.io`)*.
3. Select **Public** and click **Create repository**.

### 2. Push your code
In your project directory terminal, run:
```bash
git init
git add .
git commit -m "Deploy academic portfolio"
git branch -M main
git remote add origin https://github.com/kritikataank/kritikataank.github.io.git
git push -u origin main
```

### 3. Enable GitHub Actions for Pages
1. Go to your repository on GitHub → **Settings** → **Pages** (in the left sidebar).
2. Under **Build and deployment**, set **Source** to **`GitHub Actions`**.
3. Done! GitHub will automatically trigger the build. In 1–2 minutes, your website is live at:  
   👉 **`https://kritikataank.github.io/`**

---

## 📁 Project Structure

All data is separated into clean files in `src/data/` for easy updates without touching React layout code:

```
src/
├── components/          # Layout & page components
│   ├── AcademicNav.tsx      # Top navigation bar
│   ├── AcademicSidebar.tsx  # Left sidebar (photo, affiliations, links)
│   ├── AcademicFooter.tsx   # Minimal academic footer
│   ├── AboutPage.tsx        # Biography and Education timeline
│   ├── PublicationsPage.tsx # Peer-reviewed papers & citations
│   ├── ExperiencePage.tsx   # Professional & research experience
│   ├── ProjectsPage.tsx     # Filterable projects (All vs. Research Projects)
│   ├── AchievementsPage.tsx # Hackathons & technical certifications
│   └── ReadingRoom.tsx      # Interactive tactile virtual bookshelf
│
├── data/                # 📝 EDIT YOUR CONTENT HERE
│   ├── profile.ts           # Name, contacts, avatar, education history
│   ├── publications.ts      # Journal papers, abstracts, links
│   ├── experience.ts        # Roles, companies, technical bullet points
│   ├── projects.ts          # Project prototypes & publications
│   ├── achievements.ts      # Awards, fellowships, certifications
│   └── books.ts             # Reading room volumes & notes
│
├── assets/images/       # Static image assets (meeee.png)
└── index.css            # Academic typography and styling
```

---

## ✏️ How to Update Your Content

- **Avatar / Profile Photo**: Replace `src/assets/images/meeee.png`.
- **Bio & Education**: Edit `src/data/profile.ts`.
- **Publications**: Edit `src/data/publications.ts` to add or modify papers.
- **Projects**: Edit `src/data/projects.ts`.
- **Experience**: Edit `src/data/experience.ts`.
- **Certificates**: Edit `src/data/achievements.ts`.

---

## 🛠 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local dev server (`http://localhost:3000`) |
| `npm run build` | Compiles optimized static bundle for deployment (`dist/`) |
| `npm run lint` | Runs TypeScript type checking |
| `npm run preview` | Locally tests the compiled production build |

---

## 📜 Acknowledgments

- Design inspired by [AcademicPages](https://github.com/academicpages/academicpages.github.io) and [Lijie Hu's Academic Homepage (lijie-hu.github.io)](https://github.com/lijie-hu/lijie-hu.github.io).
- Built with [React](https://react.dev/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), and [Lucide Icons](https://lucide.dev/).
- License: [MIT](LICENSE).
