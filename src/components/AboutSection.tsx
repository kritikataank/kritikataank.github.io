import React from 'react';
import { GraduationCap, Briefcase, Code2, Award, Terminal } from 'lucide-react';
import { PROFILE, TECHNICAL_SKILLS } from '../data/profile';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1E3A8A] dark:text-blue-400 block mb-1">
            01 / Biography & Background
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0F1E36] dark:text-white">
            About Me
          </h2>
        </div>

        {/* Narrative Biography */}
        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
          {PROFILE.fullBio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Academic Foundation & Industry Role Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Education Box */}
          <div className="p-4 sm:p-5 border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 rounded-xs">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#1E3A8A] dark:text-blue-400 mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Education</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
              {PROFILE.education.degree}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium mt-0.5">
              {PROFILE.education.institution}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
              {PROFILE.education.location} · {PROFILE.education.period}
            </p>
            <div className="mt-2.5 inline-block px-2.5 py-0.5 bg-blue-100/70 dark:bg-blue-950/70 text-[#1E3A8A] dark:text-blue-300 font-mono text-xs font-semibold rounded-xs">
              Graduation Grade: {PROFILE.education.cgpa}
            </div>

            <ul className="mt-3.5 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {PROFILE.education.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-[#1E3A8A] dark:text-blue-400 font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Current Role Box */}
          <div className="p-4 sm:p-5 border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 rounded-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#1E3A8A] dark:text-blue-400 mb-2">
                <Briefcase className="w-4 h-4" />
                <span>Current Engineering Position</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                {PROFILE.currently.role}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium mt-0.5">
                {PROFILE.currently.company}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                {PROFILE.currently.division} · {PROFILE.currently.location}
              </p>

              <div className="mt-3 text-xs text-slate-600 dark:text-slate-300 space-y-2">
                <p>
                  <strong>Core Work:</strong> Developing transport-layer protocols for carrier-grade network platforms and implementing an internal fault-resolution AI agent with full telemetry inference serving.
                </p>
                <p>
                  <strong>Research Preparation:</strong> Preparing for graduate studies in machine learning, focusing on trustworthy evaluation, causal representation, and reinforcement learning.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Status: Active in Industry</span>
              <a href="#experience" className="text-[#1E3A8A] dark:text-blue-400 hover:underline">
                View Full Timeline →
              </a>
            </div>
          </div>
        </div>

        {/* Technical Skills Overview */}
        <div className="mt-10">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#1E3A8A] dark:text-blue-400" />
              Verified Technical Competencies (from CV)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {TECHNICAL_SKILLS.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="p-3.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 rounded-xs"
              >
                <h4 className="font-serif text-sm font-bold text-slate-900 dark:text-white mb-2 pb-1.5 border-b border-slate-100 dark:border-slate-800">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-1">
                  {skillGroup.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs text-slate-600 dark:text-slate-300 flex items-baseline gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
