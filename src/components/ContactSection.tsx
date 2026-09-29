import React, { useState } from 'react';
import { Mail, Github, Linkedin, GraduationCap, Globe, Copy, Check } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1E3A8A] dark:text-blue-400 block mb-1">
            08 / Correspondence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0F1E36] dark:text-white">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            I am always open to discussing machine learning research directions, graduate opportunities, and technical questions in scalable systems.
          </p>
        </div>

        {/* Contact Container */}
        <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 rounded-xs shadow-2xs space-y-6">
          {/* Email row with quick copy */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-slate-50 dark:bg-slate-950/40 border border-slate-200/80 dark:border-slate-800/80 rounded-xs">
            <div>
              <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 block mb-0.5">
                Direct Electronic Mail
              </span>
              <a
                href={`mailto:${PROFILE.contact.email}`}
                className="text-base sm:text-lg font-serif font-bold text-[#0F1E36] dark:text-white hover:text-[#1E3A8A] dark:hover:text-blue-400 transition-colors"
              >
                {PROFILE.contact.email}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-slate-300 dark:border-slate-700 rounded-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      Copied to Clipboard
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${PROFILE.contact.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-[#0F1E36] dark:bg-blue-600 text-white hover:bg-[#1E3A8A] dark:hover:bg-blue-500 rounded-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Compose Mail</span>
              </a>
            </div>
          </div>

          {/* Academic Profiles & Code Repositories */}
          <div>
            <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 block mb-3">
              Official Profiles & Profiles from CV
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <a
                href={PROFILE.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-200 dark:border-slate-800 rounded-xs hover:border-slate-400 dark:hover:border-slate-600 transition-colors flex items-center gap-2.5"
              >
                <Github className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white block">GitHub</span>
                  <span className="text-[11px] font-mono text-slate-500">github/kritikataank</span>
                </div>
              </a>

              <a
                href={PROFILE.contact.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-200 dark:border-slate-800 rounded-xs hover:border-slate-400 dark:hover:border-slate-600 transition-colors flex items-center gap-2.5"
              >
                <GraduationCap className="w-4 h-4 text-[#1E3A8A] dark:text-blue-400" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white block">Scholar</span>
                  <span className="text-[11px] font-mono text-slate-500">scholar.google/kritikataank</span>
                </div>
              </a>

              <a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-200 dark:border-slate-800 rounded-xs hover:border-slate-400 dark:hover:border-slate-600 transition-colors flex items-center gap-2.5"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white block">LinkedIn</span>
                  <span className="text-[11px] font-mono text-slate-500">linkedin/kritikataank</span>
                </div>
              </a>

              <a
                href={PROFILE.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-200 dark:border-slate-800 rounded-xs hover:border-slate-400 dark:hover:border-slate-600 transition-colors flex items-center gap-2.5"
              >
                <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white block">Personal Site</span>
                  <span className="text-[11px] font-mono text-slate-500">kritikataank.io</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
