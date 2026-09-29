# Academic & Research Portfolio Template

A clean, production-ready, minimal academic & machine learning portfolio template inspired by top researcher websites and AcademicPages. Built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Quick Start Guide

### 1. Update Profile & Picture
Open `src/data/profile.ts`:
- Change `name`, `title`, `role`, `organization`, and `shortBio`.
- **Change Photo**: Put your picture (e.g., `my_photo.jpg`) into the `public/assets/` directory. Then update:
  ```ts
  avatarUrl: '/assets/my_photo.jpg',
  ```
- Update your Google Scholar, GitHub, and LinkedIn links in `contact`.

### 2. Add / Edit / Remove Sections & Content
All content is cleanly separated in simple TypeScript files inside `src/data/`:
- **Publications**: `src/data/publications.ts` (Title, authors, venue, citation, paper PDF link, code repository link, BibTeX).
- **Experience**: `src/data/experience.ts` (Timeline roles, domain, summary, and bullet points).
- **Projects**: `src/data/projects.ts` (Category, problem, approach, outcome, technologies, GitHub link).
- **Reading Room (Bookshelf)**: `src/data/books.ts` (Spine color, title, author, notes, ratings).
- **Achievements & Certifications**: `src/data/achievements.ts` (Hackathons, fellowships, leadership, and certificates with credential URLs).
- **Research Interests**: `src/data/researchThemes.ts` (Core research areas and questions).

### 3. Add or Remove Navigation Tabs
In `src/components/AcademicNav.tsx`, the `tabs` array controls which pages appear:
```ts
const tabs = [
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Publications' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'reading', label: 'Reading' },
  { id: 'achievements', label: 'Achievements' },
];
```
Simply remove or comment out any tab you don't need!

---

## 🌐 How to Deploy to GitHub Pages (as `username.github.io/`)

To host this site at `https://<your-username>.github.io/`:

### Step 1: Create a GitHub Repository with your username
1. Go to [github.com/new](https://github.com/new).
2. **Repository name must be EXACTLY**:
   ```
   <your-username>.github.io
   ```
   *(For example: `kritikataank.github.io`)*
3. Set the repository to **Public**.

### Step 2: Push this Code to your Repository
In your local terminal:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Actions Deployment
1. On GitHub, navigate to your repository **Settings** -> **Pages** (under Code and automation in the left sidebar).
2. Under **Build and deployment** > **Source**, change from *Deploy from a branch* to **GitHub Actions**.
3. That's it! The included `.github/workflows/deploy.yml` workflow will automatically build your Vite app and deploy it every time you push changes to `main`.
4. Your portfolio will be live at:
   ```
   https://<your-username>.github.io/
   ```

---

## 🛠 Local Development & Testing

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```
