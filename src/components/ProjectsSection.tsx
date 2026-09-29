import React, { useState } from 'react';
import { Github, ExternalLink, Award, Sparkles, Filter, Code } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { ProjectCategory } from '../types/portfolio';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-ml' | 'research' | 'featured'>('all');

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'featured') return project.featured;
    if (activeFilter === 'ai-ml') return project.category === 'ai-ml';
    if (activeFilter === 'research') return project.category === 'research';
    return true; // 'all'
  });

  return (
    <section id="projects" className="py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1E3A8A] dark:text-blue-400 block mb-1">
            03 / Selected Works
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0F1E36] dark:text-white">
            Projects & Implementations
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            A portfolio of machine learning systems, research prototypes, and applied algorithms built throughout undergraduate studies, national hackathons, and independent research.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
          <div className="flex items-center gap-1 sm:gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'featured', label: 'Featured' },
              { id: 'research', label: 'Research Projects' },
              { id: 'ai-ml', label: 'AI / ML Projects' },
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors focus:outline-hidden ${
                    isActive
                      ? 'bg-[#0F1E36] dark:bg-blue-600 text-white font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Showing {filteredProjects.length} of {PROJECTS.length}
          </span>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;
            return (
              <div
                key={project.id}
                className={`p-5 sm:p-6 border rounded-xs transition-all ${
                  isFeatured
                    ? 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 shadow-xs'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30'
                }`}
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-blue-50 dark:bg-blue-950/60 text-[#1E3A8A] dark:text-blue-300 border border-blue-100 dark:border-blue-900 rounded-xs">
                        {project.categoryLabel}
                      </span>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-600 dark:text-amber-400">
                          <Sparkles className="w-3 h-3" /> Featured
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Actions / Links */}
                  <div className="flex items-center gap-2 pt-1 sm:pt-0 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono border border-slate-300 dark:border-slate-700 rounded-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Structured Overview: Problem & Approach */}
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <p className="leading-relaxed">
                    <strong className="text-slate-900 dark:text-slate-100">Overview:</strong>{' '}
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-3 bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800 rounded-xs">
                      <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-1">
                        Problem Addressed:
                      </span>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-3 bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800 rounded-xs">
                      <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-1">
                        Technical Approach:
                      </span>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.approach}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Result Banner */}
                {project.keyResult && (
                  <div className="mt-3.5 px-3 py-2 bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60 rounded-xs flex items-center gap-2 text-xs text-emerald-900 dark:text-emerald-200">
                    <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>
                      <strong>Result / Outcome:</strong> {project.keyResult}
                    </span>
                  </div>
                )}

                {/* Technology Badges */}
                <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 mr-1">
                    Stack:
                  </span>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
