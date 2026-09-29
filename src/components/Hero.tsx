import React from 'react';
import {
  Github,
  Linkedin,
  GraduationCap,
  Mail,
  FileText,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Award,
  Cpu,
} from 'lucide-react';
import { PROFILE } from '../data/profile';
import { PUBLICATIONS } from '../data/publications';
import { PROJECTS } from '../data/projects';
import { ACHIEVEMENTS } from '../data/achievements';
import { RESEARCH_THEMES } from '../data/researchThemes';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const featuredPublications = PUBLICATIONS.slice(0, 2);
  const topAchievements = ACHIEVEMENTS.filter((a) => a.highlight).slice(0, 3);

  return (
    <section id="home" className="pt-8 pb-12 sm:pt-14 sm:pb-16 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Main Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-mono uppercase tracking-wider text-[#1E3A8A] dark:text-blue-300 bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-900/60 rounded-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            Bengaluru, India · Associate Software Engineer at Nokia
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F1E36] dark:text-white leading-[1.1]">
            {PROFILE.name}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium">
            AI/ML Engineer <span className="text-slate-400 dark:text-slate-600 mx-1.5">·</span> Software Developer <span className="text-slate-400 dark:text-slate-600 mx-1.5">·</span> Aspiring ML Researcher
          </p>

          {/* 2-3 sentence introduction strictly grounded in CV */}
          <div className="pt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            <p>
              I hold a Bachelor of Engineering in Computer Science & Engineering from Sri Venkateshwara College of Engineering (CGPA 9.27/10) and currently work as an Associate Software Engineer at Nokia Solutions and Networks. My industrial engineering spans telecommunication transport protocols and agentic ML frameworks, while my research interests focus on explainable AI, deep reinforcement learning, and causal machine learning.
            </p>
          </div>

          {/* Action Links / Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-2 sm:gap-2.5">
            <a
              href={PROFILE.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-slate-300 dark:border-slate-700 rounded-xs text-slate-700 dark:text-slate-200 hover:border-slate-500 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={PROFILE.contact.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-slate-300 dark:border-slate-700 rounded-xs text-slate-700 dark:text-slate-200 hover:border-slate-500 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#1E3A8A] dark:text-blue-400" />
              <span>Google Scholar</span>
            </a>

            <a
              href={PROFILE.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-slate-300 dark:border-slate-700 rounded-xs text-slate-700 dark:text-slate-200 hover:border-slate-500 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${PROFILE.contact.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-slate-300 dark:border-slate-700 rounded-xs text-slate-700 dark:text-slate-200 hover:border-slate-500 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span>Email</span>
            </a>

            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium bg-[#0F1E36] dark:bg-blue-600 text-white hover:bg-[#1E3A8A] dark:hover:bg-blue-500 rounded-xs transition-colors shadow-2xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </button>
          </div>
        </div>

        {/* "Currently" Section */}
        <div className="mt-10 p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xs">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Currently · 2025–2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100 block mb-0.5">
                Industry Engineering:
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Associate Software Engineer at{' '}
                <strong className="text-slate-800 dark:text-slate-200">Nokia Solutions and Networks</strong> (Mobile Networks & Telecommunications). Developing transport protocols and an internal fault-resolution AI agent with an inference pipeline framework.
              </p>
            </div>

            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100 block mb-0.5">
                Research Inquiry:
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Preparing for graduate research in machine learning. Investigating Explainable AI (LIME/Attribution fidelity), Deep Reinforcement Learning (DQN/Double DQN), and Causal Machine Learning.
              </p>
            </div>
          </div>
        </div>

        {/* Compact Quick Overview on Home */}
        <div className="mt-12 space-y-10">
          {/* Research Themes Snapshot */}
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#1E3A8A] dark:text-blue-400" />
                Research Interests
              </h2>
              <a
                href="#research"
                className="text-xs font-medium text-[#1E3A8A] dark:text-blue-400 hover:underline flex items-center gap-0.5"
              >
                Full Research Wing <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {RESEARCH_THEMES.slice(0, 3).map((theme) => (
                <div
                  key={theme.id}
                  className="p-3.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 rounded-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <h3 className="font-serif text-sm font-semibold text-slate-900 dark:text-white mb-1">
                    {theme.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {theme.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects Compact */}
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#1E3A8A] dark:text-blue-400" />
                Featured Projects
              </h2>
              <a
                href="#projects"
                className="text-xs font-medium text-[#1E3A8A] dark:text-blue-400 hover:underline flex items-center gap-0.5"
              >
                All Projects ({PROJECTS.length}) <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 rounded-xs flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-700 transition-colors"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#1E3A8A] dark:text-blue-400 block mb-1">
                      {project.categoryLabel}
                    </span>
                    <h3 className="font-serif text-base font-semibold text-slate-900 dark:text-white mb-1.5 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 mb-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  {project.keyResult && (
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      ✓ {project.keyResult}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Compact Publications */}
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#1E3A8A] dark:text-blue-400" />
                Peer-Reviewed Publications
              </h2>
              <a
                href="#publications"
                className="text-xs font-medium text-[#1E3A8A] dark:text-blue-400 hover:underline flex items-center gap-0.5"
              >
                View Details & BibTeX <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-2.5">
              {featuredPublications.map((pub) => (
                <div
                  key={pub.id}
                  className="p-3.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 rounded-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <h3 className="font-serif text-sm font-semibold text-slate-900 dark:text-white mb-1">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <strong className="text-slate-900 dark:text-slate-200">Kritika Taank</strong> · {pub.venue} · {pub.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Compact Recent Achievements */}
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#1E3A8A] dark:text-blue-400" />
                Recent Achievements
              </h2>
              <a
                href="#achievements"
                className="text-xs font-medium text-[#1E3A8A] dark:text-blue-400 hover:underline flex items-center gap-0.5"
              >
                All Honors & Certifications <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {topAchievements.map((item) => (
                <div
                  key={item.id}
                  className="p-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 rounded-xs"
                >
                  <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 block mb-0.5">
                    {item.date}
                  </span>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    {item.organization}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
