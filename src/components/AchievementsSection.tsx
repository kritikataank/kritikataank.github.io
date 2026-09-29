import React from 'react';
import { Award, Trophy, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data/achievements';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1E3A8A] dark:text-blue-400 block mb-1">
            07 / Honors & Recognition
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0F1E36] dark:text-white">
            Achievements & Leadership
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Honors received across nationwide engineering hackathons, competitive machine learning cohorts, and technical community leadership.
          </p>
        </div>

        {/* Major Achievements Grid */}
        <div className="space-y-4 mb-12">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className={`p-4 sm:p-5 border rounded-xs transition-colors ${
                item.highlight
                  ? 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 shadow-xs'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-blue-50 dark:bg-blue-950/60 text-[#1E3A8A] dark:text-blue-300 rounded-xs">
                      {item.category}
                    </span>
                    {item.metric && (
                      <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-medium">
                        ✓ {item.metric}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {item.organization}
                  </p>
                </div>

                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 shrink-0">
                  {item.date}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div>
          <div className="border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1E3A8A] dark:text-blue-400" />
              Verified Technical Certifications (from CV)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 rounded-xs flex items-center justify-between gap-2"
              >
                <div>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 shrink-0">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
