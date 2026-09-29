import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'research'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === 'research';
  });

  const researchProjectsCount = PROJECTS.filter((p) => p.category === 'research').length;

  return (
    <div className="space-y-6 text-[#2e343b]">
      <div>
        <h1 className="academic-heading mt-0">Projects</h1>
        <p className="text-sm text-[#586069] mb-4">
          Academic research prototypes, machine learning systems, and software engineering implementations.
        </p>

        {/* Filter buttons: Only All and Research Projects */}
        <div className="flex items-center space-x-2 text-xs mb-4">
          <span className="text-[#586069] font-medium">Filter:</span>
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-2.5 py-0.5 border rounded-xs cursor-pointer transition-colors ${
              filter === 'all'
                ? 'border-[#121417] bg-[#121417] text-white font-bold'
                : 'border-[#d1d5db] text-[#586069] hover:bg-[#f6f8fa] hover:text-[#121417]'
            }`}
          >
            All ({PROJECTS.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('research')}
            className={`px-2.5 py-0.5 border rounded-xs cursor-pointer transition-colors ${
              filter === 'research'
                ? 'border-[#121417] bg-[#121417] text-white font-bold'
                : 'border-[#d1d5db] text-[#586069] hover:bg-[#f6f8fa] hover:text-[#121417]'
            }`}
          >
            Research Projects ({researchProjectsCount})
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="pb-5 border-b border-[#e1e4e8] last:border-b-0 text-sm">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
              <h3 className="font-bold text-base text-[#121417]">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 mt-1 sm:mt-0">
                {project.category === 'research' && (
                  <span className="text-xs px-2 py-0.5 bg-[#f6f8fa] text-[#121417] font-medium rounded-xs border border-[#e1e4e8]">
                    Research Project
                  </span>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#121417] hover:text-black hover:underline font-medium"
                  >
                    [Source Code]
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs text-[#586069] mb-2 font-mono">
              {project.subtitle}
            </p>

            <p className="text-[#2e343b] leading-relaxed mb-2.5">
              {project.description}
            </p>

            {/* Consolidated Details Box: Problem, Approach, Outcome */}
            <div className="bg-[#f6f8fa] p-3 rounded-xs border border-[#e1e4e8] text-xs space-y-2 mb-2.5">
              <div>
                <strong className="text-[#121417]">Problem:</strong>{' '}
                <span className="text-[#2e343b]">{project.problem}</span>
              </div>
              <div>
                <strong className="text-[#121417]">Approach:</strong>{' '}
                <span className="text-[#2e343b]">{project.approach}</span>
              </div>
              {project.keyResult && (
                <div>
                  <strong className="text-[#121417]">Outcome:</strong>{' '}
                  <span className="text-[#2e343b]">{project.keyResult}</span>
                </div>
              )}
            </div>

            <div className="text-xs text-[#586069]">
              <span className="font-semibold text-[#121417]">Technologies:</span>{' '}
              {project.technologies.join(', ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
