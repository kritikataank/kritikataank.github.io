import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/profile';

export type NavTab =
  | 'about'
  | 'publications'
  | 'experience'
  | 'projects'
  | 'reading'
  | 'achievements';

interface AcademicNavProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const AcademicNav: React.FC<AcademicNavProps> = ({
  currentTab,
  onSelectTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs: { id: NavTab; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'publications', label: 'Publications' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'reading', label: 'Reading' },
    { id: 'achievements', label: 'Achievements' },
  ];

  return (
    <header className="w-full bg-white border-b border-[#e1e4e8] sticky top-0 z-50">
      <div className="max-w-[1020px] mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* Site Title */}
        <button
          onClick={() => onSelectTab('about')}
          className="text-left font-bold text-lg text-[#121417] hover:text-black transition-colors focus:outline-hidden cursor-pointer"
        >
          {PROFILE.name}
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-1">
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`px-3 py-1.5 text-sm font-medium transition-colors focus:outline-hidden cursor-pointer ${
                  isActive
                    ? 'text-[#121417] font-bold border-b-2 border-[#121417]'
                    : 'text-[#586069] hover:text-[#121417]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Burger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-xs text-[#121417] hover:bg-[#f6f8fa] border border-[#d1d5db] focus:outline-hidden cursor-pointer flex items-center justify-center transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-[#121417]" />
          ) : (
            <Menu className="w-5 h-5 text-[#121417]" />
          )}
        </button>
      </div>

      {/* Mobile Burger Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e1e4e8] bg-white px-4 py-3 space-y-1.5 shadow-md">
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  onSelectTab(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-xs transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#f6f8fa] text-[#121417] font-bold border-l-4 border-[#121417]'
                    : 'text-[#586069] hover:bg-[#f6f8fa] hover:text-[#121417]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
