import React from 'react';
import { EXPERIENCES } from '../data/experience';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="space-y-6 text-[#2e343b]">
      <div>
        <h1 className="academic-heading mt-0">Experience</h1>
        <p className="text-sm text-[#586069] mb-4">
          Professional software engineering in production mobile telecommunications and applied machine learning systems.
        </p>
      </div>

      {/* Vertical Timeline container */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-[#e1e4e8] ml-2 sm:ml-3 space-y-8 my-6">
        {EXPERIENCES.map((exp) => {
          const combinedBullets: string[] = [];
          if (exp.softwareEngineeringWork) {
            combinedBullets.push(...exp.softwareEngineeringWork.points);
          }
          if (exp.aiMlWork) {
            combinedBullets.push(...exp.aiMlWork.points);
          }
          if (exp.generalPoints) {
            combinedBullets.push(...exp.generalPoints);
          }

          return (
            <div key={exp.id} className="relative text-sm">
              {/* Timeline Node Dot in dark charcoal */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 bg-white border-2 border-[#121417] rounded-full ring-4 ring-white" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5">
                <h3 className="font-bold text-base text-[#121417] leading-snug">
                  {exp.role} <span className="font-normal text-[#586069]">@</span> {exp.organization}
                </h3>
                <span className="font-mono text-xs text-[#586069] shrink-0 mt-0.5 sm:mt-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-xs text-[#586069] italic mb-2">
                Domain: {exp.domain} ({exp.type})
              </p>

              <p className="text-[#2e343b] leading-relaxed mb-3">
                {exp.overview}
              </p>

              {/* Academic bullet points */}
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#586069] mb-3">
                {combinedBullets.map((point, pIdx) => (
                  <li key={pIdx} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>

              <div className="text-xs text-[#586069]">
                <span className="font-semibold text-[#121417]">Technologies:</span>{' '}
                {exp.technologies.join(', ')}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
