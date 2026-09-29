import React from 'react';
import { PROFILE } from '../data/profile';

export const AcademicFooter: React.FC = () => {
  return (
    <footer className="w-full border-t border-[#e1e4e8] bg-[#fafbfc] text-[#586069] text-xs py-8 mt-12">
      <div className="max-w-[1020px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          <p>© 2026 {PROFILE.name}. Academic portfolio built with React & inspired by AcademicPages.</p>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <a href={PROFILE.contact.scholar} target="_blank" rel="noreferrer" className="text-[#002B49] hover:underline">
            Google Scholar
          </a>
          <span>·</span>
          <a href={PROFILE.contact.github} target="_blank" rel="noreferrer" className="text-[#002B49] hover:underline">
            GitHub
          </a>
          <span>·</span>
          <a href={PROFILE.contact.linkedin} target="_blank" rel="noreferrer" className="text-[#002B49] hover:underline">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
