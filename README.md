# AcademicPages — Personal Academic Website

[![Deploy to GitHub Pages](https://github.com/kritikataank/kritikataank.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/kritikataank/kritikataank.github.io/actions/workflows/deploy.yml)
[![AcademicPages](https://img.shields.io/badge/AcademicPages-Theme-52adc8.svg)](https://github.com/academicpages/academicpages.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A clean, responsive, and minimalist personal academic website designed for researchers, graduate students, and software engineers. Built with modern web standards (**React**, **Vite**, **TypeScript**, and **Tailwind CSS**) while preserving the timeless two-column academic layout and typography of [academicpages.github.io](https://academicpages.github.io) (as seen on [lijie-hu.github.io](https://lijie-hu.github.io)).

---

## 📑 Table of Contents

- [About Me](#about-me)
- [Live Preview](#live-preview)
- [Features](#features)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
  - [1. Profile & Avatar](#1-profile--avatar)
  - [2. Publications](#2-publications)
  - [3. Experience](#3-experience)
  - [4. Projects](#4-projects)
  - [5. Achievements](#5-achievements)
  - [6. Reading Room](#6-reading-room)
  - [7. Navigation Tabs](#7-navigation-tabs)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Local Development](#local-development)
- [Acknowledgments & Attribution](#acknowledgments--attribution)

---

## 👩‍💻 About Me

**Kritika Taank**  
*Associate Software Engineer, Nokia Solutions and Networks*  
*B.E. Computer Science and Engineering, Sri Venkateshwara College of Engineering (CGPA: 9.27/10)*  

- **Research Focus**: Explainable AI (XAI), Deep Reinforcement Learning (DQN / DDQN), Causal Machine Learning, and Agentic Systems
- **Email**: [taank.kritika@gmail.com](mailto:taank.kritika@gmail.com)
- **GitHub**: [github.com/kritikataank](https://github.com/kritikataank)
- **LinkedIn**: [linkedin.com/in/kritikataank](https://linkedin.com/in/kritikataank)
- **Scholar**: [Google Scholar](https://scholar.google.com)

---

## 🌐 Live Preview

The website is hosted live on GitHub Pages:  
👉 **[https://kritikataank.github.io](https://kritikataank.github.io)**

---

## ✨ Features

- **Classic Academic Theme**: Faithfully reproduces the clean typography, `#52adc8` teal/cyan accent links, dark slate `#24292e` headings, and neutral borders used in [AcademicPages](https://github.com/academicpages/academicpages.github.io) and [lijie-hu.github.io](https://lijie-hu.github.io).
- **Two-Column Responsive Layout**: Fixed researcher sidebar on desktop and compact profile card on mobile/tablet devices.
- **Publications Listing**: Clear chronological order, highlighted author names, venue citations, and clean `[Paper]` and `[Code]` action buttons.
- **Experience Timeline**: Vertical timeline highlighting enterprise telecommunications protocols and production AI/ML systems.
- **Filterable Projects**: Categorized by research prototypes and applied machine learning systems.
- **Achievements & Certifications**: Honors, Smart India Hackathon victory, fellowships, and verified credential links.
- **The Reading Room**: An interactive tactile bookshelf with 3D book spines and community recommendation system.
- **Automated GitHub Actions CI/CD**: Pushing to the `main` branch automatically triggers Vite build and deployment to GitHub Pages.

---

## 📂 Repository Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions automated Pages build & deploy
├── public/
│   └── assets/
│       └── meeee.png           # Profile photo asset
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── meeee.png       # Source profile picture
│   ├── components/
│   │   ├── AcademicNav.tsx     # Top navigation bar
│   │   ├── AcademicSidebar.tsx # Left sidebar (photo, bio, affiliations, social links)
│   │   ├── AcademicFooter.tsx  # Minimal academic footer
│   │   ├── AboutPage.tsx       # Bio, research themes, technical skills
│   │   ├── PublicationsPage.tsx# Papers list with paper/code links
│   │   ├── ExperiencePage.tsx  # Career & research timeline
│   │   ├── ProjectsPage.tsx    # Filterable project portfolio
│   │   ├── AchievementsPage.tsx# Awards, hackathons, and certifications
│   │   └── ReadingRoom.tsx     # Tactile interactive bookshelf
│   ├── data/                   # ALL CONTENT IS CONFIGURED HERE
│   │   ├── profile.ts          # Name, title, avatar, contact links, bio, skills
│   │   ├── publications.ts     # Journal & conference papers
│   │   ├── experience.ts       # Roles, timelines, and technical bullets
│   │   ├── projects.ts         # Project descriptions and GitHub URLs
│   │   ├── achievements.ts     # Honors and certifications
│   │   └── books.ts            # Bookshelf volumes and notes
│   ├── index.css               # AcademicPages color scheme and typography
│   ├── App.tsx                 # Root layout container
│   └── main.tsx                # React entrypoint
├── index.html
├── vite.config.ts              # Vite configuration with base path support
└── package.json
```

---

## 🛠 Getting Started

To run or build this repository locally:

```bash
# 1. Clone the repository
git clone https://github.com/kritikataank/kritikataank.github.io.git
cd kritikataank.github.io

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open in your browser
# http://localhost:3000
```

---

## 📝 Customization Guide

You can customize the entire website without touching layout code by simply editing files in `src/data/`:

### 1. Profile & Avatar
Edit `src/data/profile.ts`:
- **Change Avatar**: Place your image in `src/assets/images/meeee.png` or `public/assets/`.
- **Change Details**: Update `name`, `title`, `role`, `organization`, and `shortBio`.
- **Social & Contact Links**: Update `contact.scholar`, `contact.github`, `contact.linkedin`, and `contact.email`.

### 2. Publications
Edit `src/data/publications.ts`:
```ts
export const PUBLICATIONS: PublicationItem[] = [
  {
    id: 'my-paper-id',
    title: 'Your Paper Title',
    authors: ['Taank, K.', 'Coauthor, A.'],
    venue: 'Journal / Conference Name',
    year: '2024',
    citation: 'Vol. 12, pp. 1-10, 2024',
    abstract: 'Abstract summary of the paper...',
    technologies: ['PyTorch', 'Reinforcement Learning'],
    paperUrl: 'https://...',
    codeUrl: 'https://github.com/...',
  },
];
```

### 3. Experience
Edit `src/data/experience.ts`:
- Add roles with timeline period, domain, summary overview, and technical achievements.

### 4. Projects
Edit `src/data/projects.ts`:
- Add projects categorized as `'ai-ml'` or `'research'`.

### 5. Achievements
Edit `src/data/achievements.ts`:
- Add competitive achievements, hackathons, and certifications with verification links.

### 6. Reading Room
Edit `src/data/books.ts`:
- Add books to your personal shelf, set spine color, page count, and ratings.

### 7. Navigation Tabs
Edit `src/components/AcademicNav.tsx`:
- Add, reorder, or comment out any tab in the `tabs` array.

---

## 🚀 Deploying to GitHub Pages

### Option A: User Page (`<username>.github.io`)
1. Create a public repository named **`<username>.github.io`** (e.g., `kritikataank.github.io`).
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Deploy academic portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```
3. In GitHub, go to **Settings** > **Pages** > **Build and deployment**.
4. Set **Source** to **GitHub Actions**.
5. The included workflow `.github/workflows/deploy.yml` will automatically build and publish your site at `https://<username>.github.io/`.

---

## 💻 Local Development Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local development server on `http://localhost:3000` |
| `npm run build` | Compiles production assets into `dist/` |
| `npm run lint` | Runs TypeScript type checking |
| `npm run preview` | Previews production build locally |

---

## 📜 Acknowledgments & Attribution

- Inspired by [AcademicPages](https://github.com/academicpages/academicpages.github.io) and [Lijie Hu's Academic Homepage (lijie-hu.github.io)](https://github.com/lijie-hu/lijie-hu.github.io).
- Design language based on [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) by Michael Rose.
- Icons by [Lucide Icons](https://lucide.dev/).
- License: [MIT](LICENSE).
