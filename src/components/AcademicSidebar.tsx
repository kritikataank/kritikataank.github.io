import React from 'react';
import { Github, Linkedin, GraduationCap, Mail } from 'lucide-react';
import { PROFILE } from '../data/profile';
import profilePhoto from '../assets/images/meeee.png';

export const AcademicSidebar: React.FC = () => {
  return (
    <>
      {/* 1. COMPACT PROFILE FOR MOBILE / TABLET (Hidden on desktop lg+) */}
      <div className="lg:hidden w-full mb-6 pb-4 border-b border-[#e1e4e8]">
        <div className="flex items-start gap-3.5">
          {/* Avatar Thumbnail */}
          <div className="w-14 h-14 rounded-full overflow-hidden border border-[#d1d5db] shrink-0 bg-slate-100 shadow-2xs">
            <img
              src={profilePhoto || PROFILE.avatarUrl}
              alt={PROFILE.name}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/assets/meeee.png';
              }}
            />
          </div>

          {/* Name & Subtitle Header */}
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-bold text-[#121417] leading-tight">
              {PROFILE.name}
            </h2>
            <p className="text-xs text-[#586069] mt-0.5 leading-snug">
              {PROFILE.role}, {PROFILE.organization.split(' ')[0]}
            </p>
            <p className="text-xs text-[#586069] mt-0.5">
              {PROFILE.researchFocusTagline}
            </p>

            {/* Quick Profile Links */}
            <div className="flex flex-wrap items-center gap-3.5 mt-2 text-xs text-[#121417]">
              {PROFILE.contact.scholar && (
                <a
                  href={PROFILE.contact.scholar}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#121417] hover:text-black hover:underline flex items-center gap-1 font-medium"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-[#586069]" />
                  <span>Scholar</span>
                </a>
              )}
              {PROFILE.contact.github && (
                <a
                  href={PROFILE.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#121417] hover:text-black hover:underline flex items-center gap-1 font-medium"
                >
                  <Github className="w-3.5 h-3.5 text-[#586069]" />
                  <span>GitHub</span>
                </a>
              )}
              {PROFILE.contact.linkedin && (
                <a
                  href={PROFILE.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#121417] hover:text-black hover:underline flex items-center gap-1 font-medium"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#586069]" />
                  <span>LinkedIn</span>
                </a>
              )}
              {PROFILE.contact.email && (
                <a
                  href={`mailto:${PROFILE.contact.email}`}
                  className="text-[#121417] hover:text-black hover:underline flex items-center gap-1 font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-[#586069]" />
                  <span>Email</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. FULL ACADEMIC SIDEBAR FOR DESKTOP (Visible only on lg+) */}
      <aside className="hidden lg:block w-[240px] shrink-0 text-sm">
        <div className="flex flex-col items-start text-left">
          {/* Profile Avatar / Photo using src/assets/images/meeee.png */}
          <div className="w-[190px] h-[190px] rounded-full overflow-hidden border border-[#d1d5db] shadow-2xs mb-4 bg-slate-100 flex items-center justify-center">
            <img
              src={profilePhoto || PROFILE.avatarUrl}
              alt={PROFILE.name}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/assets/meeee.png';
              }}
            />
          </div>

          {/* Name and Subtitle */}
          <h2 className="text-2xl font-bold text-[#121417] leading-snug">
            {PROFILE.name}
          </h2>
          <p className="text-sm text-[#494e52] mt-1 leading-normal font-normal">
            {PROFILE.title}
          </p>
          <p className="text-xs text-[#586069] mt-0.5 pb-3 border-b border-[#e1e4e8] w-full">
            {PROFILE.role}, {PROFILE.organization}
          </p>

          {/* Bio text snippet if present */}
          {PROFILE.shortBio && (
            <div className="text-xs text-[#586069] mt-3 pb-3 border-b border-[#e1e4e8] w-full text-left leading-relaxed">
              {PROFILE.shortBio}
            </div>
          )}

          {/* Metadata Links List - Clean slate & charcoal styling */}
          <ul className="w-full mt-3 space-y-2 text-xs text-[#586069]">
            {PROFILE.contact.scholar && (
              <li className="flex items-center justify-start gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-[#586069] shrink-0" />
                <a href={PROFILE.contact.scholar} target="_blank" rel="noreferrer" className="text-[#121417] hover:text-black hover:underline font-medium">
                  Google Scholar
                </a>
              </li>
            )}

            {PROFILE.contact.github && (
              <li className="flex items-center justify-start gap-2">
                <Github className="w-3.5 h-3.5 text-[#586069] shrink-0" />
                <a href={PROFILE.contact.github} target="_blank" rel="noreferrer" className="text-[#121417] hover:text-black hover:underline font-medium">
                  GitHub
                </a>
              </li>
            )}

            {PROFILE.contact.linkedin && (
              <li className="flex items-center justify-start gap-2">
                <Linkedin className="w-3.5 h-3.5 text-[#586069] shrink-0" />
                <a href={PROFILE.contact.linkedin} target="_blank" rel="noreferrer" className="text-[#121417] hover:text-black hover:underline font-medium">
                  LinkedIn
                </a>
              </li>
            )}

            {/* Email link: display "Email" label with mailto:taank.kritika@gmail.com */}
            {PROFILE.contact.email && (
              <li className="flex items-center justify-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#586069] shrink-0" />
                <a
                  href={`mailto:${PROFILE.contact.email}`}
                  className="text-[#121417] hover:text-black hover:underline font-medium"
                >
                  Email
                </a>
              </li>
            )}
          </ul>
        </div>
      </aside>
    </>
  );
};
