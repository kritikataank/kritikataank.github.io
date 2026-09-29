import React from 'react';
import { PROFILE } from '../data/profile';

interface FooterProps {
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV }) => {
  return (
    <footer className="py-12 bg-white dark:bg-[#0A101D] border-t border-slate-200 dark:border-slate-800 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
        <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
          {PROFILE.name}
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
          {PROFILE.title}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
          <a
            href={PROFILE.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white hover:underline"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href={PROFILE.contact.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white hover:underline"
          >
            Google Scholar
          </a>
          <span>·</span>
          <a
            href={PROFILE.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white hover:underline"
          >
            LinkedIn
          </a>
          <span>·</span>
          <button
            onClick={onOpenCV}
            className="hover:text-slate-900 dark:hover:text-white hover:underline cursor-pointer focus:outline-hidden"
          >
            Curriculum Vitae
          </button>
        </div>

        <p className="pt-4 text-[11px] font-mono text-slate-400 dark:text-slate-500">
          © 2026 Kritika Taank
        </p>
      </div>
    </footer>
  );
};
