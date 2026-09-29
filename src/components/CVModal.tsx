import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, Github, Linkedin, GraduationCap, Globe } from 'lucide-react';
import { PROFILE, TECHNICAL_SKILLS } from '../data/profile';
import { PUBLICATIONS } from '../data/publications';
import { EXPERIENCES } from '../data/experience';
import { PROJECTS } from '../data/projects';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data/achievements';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6">
      <div className="bg-white dark:bg-[#0A101D] text-slate-900 dark:text-slate-100 w-full max-w-4xl max-h-[92vh] flex flex-col rounded-xs border border-slate-300 dark:border-slate-700 shadow-2xl overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-sm sm:text-base">
              Kritika Taank — Curriculum Vitae
            </span>
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-blue-100 dark:bg-blue-950 text-[#1E3A8A] dark:text-blue-300 rounded-xs">
              Official Document
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-slate-300 dark:border-slate-700 rounded-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xs text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document matching uploaded PDF format */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6 text-xs sm:text-sm font-sans bg-white dark:bg-[#0A101D]">
          {/* Header */}
          <div className="border-b-2 border-slate-800 dark:border-slate-200 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1E36] dark:text-white">
                  Kritika Taank
                </h1>
                <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 mt-0.5">
                  AI/ML Engineer · Software Developer · Aspiring ML Researcher
                </p>
              </div>

              <div className="text-xs font-mono space-y-1 text-slate-600 dark:text-slate-400">
                <div>
                  <a href={`mailto:${PROFILE.contact.email}`} className="text-[#1E3A8A] dark:text-blue-400 hover:underline">
                    {PROFILE.contact.email}
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[11px]">
                  <a href={PROFILE.contact.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                    linkedin/kritikataank
                  </a>
                  <span>·</span>
                  <a href={PROFILE.contact.github} target="_blank" rel="noreferrer" className="hover:underline">
                    github/kritikataank
                  </a>
                  <span>·</span>
                  <a href={PROFILE.contact.website} target="_blank" rel="noreferrer" className="hover:underline">
                    kritikataank.io
                  </a>
                  <span>·</span>
                  <a href={PROFILE.contact.scholar} target="_blank" rel="noreferrer" className="hover:underline">
                    scholar.google/kritikataank
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-[#1E3A8A] dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {PROFILE.education.institution}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {PROFILE.education.degree} (CGPA: {PROFILE.education.cgpa})
                </p>
              </div>
              <div className="text-right text-xs font-mono text-slate-500">
                <p>{PROFILE.education.location}</p>
                <p>{PROFILE.education.period}</p>
              </div>
            </div>
          </div>

          {/* Publications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-[#1E3A8A] dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Publications
            </h2>
            <div className="space-y-3">
              {PUBLICATIONS.map((pub) => (
                <div key={pub.id} className="space-y-1">
                  <h3 className="font-bold text-slate-900 dark:text-white leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="italic">{pub.venue}</span>. {pub.citation}
                  </p>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    • <strong>{pub.projectTitle}:</strong> {pub.abstract}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-[#1E3A8A] dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white">
                        {exp.organization}
                      </span>
                      <span className="text-xs text-slate-600 dark:text-slate-400">
                        {' '}– {exp.domain}
                      </span>
                      <div className="text-xs font-semibold text-[#1E3A8A] dark:text-blue-400">
                        {exp.role}
                      </div>
                    </div>
                    <div className="text-right text-xs font-mono text-slate-500">
                      <p>{exp.period}</p>
                      <p>{exp.type}</p>
                    </div>
                  </div>

                  {exp.softwareEngineeringWork && exp.aiMlWork ? (
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 list-disc pl-4">
                      {exp.softwareEngineeringWork.points.map((p, i) => (
                        <li key={`se-${i}`}>{p}</li>
                      ))}
                      {exp.aiMlWork.points.map((p, i) => (
                        <li key={`ai-${i}`}>{p}</li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 list-disc pl-4">
                      {exp.generalPoints?.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-[#1E3A8A] dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Selected Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900 dark:text-white">
                      {proj.title}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {proj.technologies.slice(0, 4).join(', ')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    • {proj.description} {proj.keyResult && <strong>[{proj.keyResult}]</strong>}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-[#1E3A8A] dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {TECHNICAL_SKILLS.map((grp) => (
                <div key={grp.category}>
                  <strong className="text-slate-900 dark:text-slate-200">
                    {grp.category}:
                  </strong>{' '}
                  {grp.skills.join(', ')}
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Leadership */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-[#1E3A8A] dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Achievements & Leadership
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 list-disc pl-4">
              {ACHIEVEMENTS.map((ach) => (
                <li key={ach.id}>
                  <strong>{ach.title}</strong>: {ach.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-[#1E3A8A] dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-slate-700 dark:text-slate-300">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex justify-between pr-4">
                  <span>• {cert.title}</span>
                  <span className="font-mono text-slate-400">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
