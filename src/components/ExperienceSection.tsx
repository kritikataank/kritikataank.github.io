import React from 'react';
import { Briefcase, Calendar, MapPin, Code, Cpu, CheckCircle } from 'lucide-react';
import { EXPERIENCES } from '../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1E3A8A] dark:text-blue-400 block mb-1">
            04 / Industry Trajectory
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0F1E36] dark:text-white">
            Professional Experience
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Engineering large-scale telecommunications systems and applied machine learning tooling in production industrial settings.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-8 sm:pl-10">
              {/* Dot */}
              <div className="absolute left-1.5 sm:left-2.5 top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-[#0A101D] bg-[#1E3A8A] dark:bg-blue-500 ring-2 ring-blue-100 dark:ring-blue-900" />

              <div className="p-5 sm:p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 rounded-xs shadow-2xs">
                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-[#1E3A8A] dark:text-blue-400">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                  Scope: {exp.domain} ({exp.type})
                </div>

                {/* Overview */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {exp.overview}
                </p>

                {/* For Nokia Associate Engineer: Distinct Software Engineering vs AI/ML Sections */}
                {exp.softwareEngineeringWork && exp.aiMlWork ? (
                  <div className="space-y-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                    {/* Software Engineering Sub-Block */}
                    <div className="p-3.5 bg-slate-50 dark:bg-slate-950/40 border border-slate-200/70 dark:border-slate-800/70 rounded-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <Code className="w-4 h-4 text-[#1E3A8A] dark:text-blue-400" />
                        <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 dark:text-white">
                          Software Engineering Work
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 italic">
                        {exp.softwareEngineeringWork.summary}
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                        {exp.softwareEngineeringWork.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#1E3A8A] dark:text-blue-400 font-bold mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* AI/ML Sub-Block */}
                    <div className="p-3.5 bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 rounded-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <Cpu className="w-4 h-4 text-[#1E3A8A] dark:text-blue-400" />
                        <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 dark:text-white">
                          AI/ML Systems & Internal Agentic Frameworks
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 italic">
                        {exp.aiMlWork.summary}
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                        {exp.aiMlWork.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#1E3A8A] dark:text-blue-400 font-bold mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  /* Standard points for internship or prior roles */
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {exp.generalPoints?.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 mt-1 shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech pills */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 mr-1 self-center">
                    Technologies:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
