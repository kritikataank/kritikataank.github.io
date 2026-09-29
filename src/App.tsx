import React, { useState } from 'react';
import { AcademicNav, NavTab } from './components/AcademicNav';
import { AcademicSidebar } from './components/AcademicSidebar';
import { AboutPage } from './components/AboutPage';
import { PublicationsPage } from './components/PublicationsPage';
import { ExperiencePage } from './components/ExperiencePage';
import { ProjectsPage } from './components/ProjectsPage';
import { ReadingRoom } from './components/ReadingRoom';
import { AchievementsPage } from './components/AchievementsPage';
import { AcademicFooter } from './components/AcademicFooter';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('about');

  const handleSelectTab = (tab: NavTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#494e52] font-sans antialiased">
      {/* Top Academic Navigation Bar */}
      <AcademicNav
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
      />

      {/* Main Two-Column Academic Layout */}
      <div className="flex-1 max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
          {/* Left Sidebar: Profile photo, bio, affiliations, verified links */}
          <AcademicSidebar />

          {/* Right Main Content Area */}
          <main className="flex-1 min-w-0 w-full">
            {currentTab === 'about' && (
              <AboutPage onNavigateTab={handleSelectTab} />
            )}
            {currentTab === 'publications' && <PublicationsPage />}
            {currentTab === 'experience' && <ExperiencePage />}
            {currentTab === 'projects' && <ProjectsPage />}
            {currentTab === 'reading' && <ReadingRoom />}
            {currentTab === 'achievements' && <AchievementsPage />}
          </main>
        </div>
      </div>

      {/* Academic Minimal Footer */}
      <AcademicFooter />
    </div>
  );
}
