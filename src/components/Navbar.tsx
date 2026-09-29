import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, ExternalLink } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface NavbarProps {
  activeSection: string;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  theme,
  onToggleTheme,
  onOpenCV,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Research', href: '#research' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Publications', href: '#publications' },
    { label: 'Reading Room', href: '#reading-room' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#0A101D]/95 backdrop-blur-md shadow-xs border-b border-slate-200 dark:border-slate-800'
          : 'bg-white dark:bg-[#0A101D] border-b border-slate-100 dark:border-slate-800/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          className="group flex items-baseline gap-2.5 text-left focus:outline-hidden"
        >
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#0F1E36] dark:text-white group-hover:text-[#1E3A8A] dark:group-hover:text-blue-400 transition-colors">
            {PROFILE.name}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 border-l border-slate-300 dark:border-slate-700 pl-2.5">
            AI/ML & Systems
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 sm:space-x-1.5 text-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-1.5 rounded-sm transition-colors text-xs uppercase tracking-wider font-medium ${
                  isActive
                    ? 'text-[#0F1E36] dark:text-white bg-slate-100 dark:bg-slate-800/80 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#0F1E36] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-2">
          {/* CV Button */}
          <button
            onClick={onOpenCV}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium tracking-wide border border-slate-300 dark:border-slate-700 rounded-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-colors focus:outline-hidden"
            title="View Academic Curriculum Vitae"
          >
            <FileText className="w-3.5 h-3.5 text-[#1E3A8A] dark:text-blue-400" />
            <span>CV</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="p-1.5 rounded-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-hidden"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-1.5 rounded-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-hidden"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0A101D] border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-sm"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCV();
              }}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1E3A8A] dark:text-blue-400 py-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Open Curriculum Vitae (CV)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
