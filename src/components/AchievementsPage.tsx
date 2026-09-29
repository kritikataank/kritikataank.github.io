import React from 'react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data/achievements';
import { ExternalLink } from 'lucide-react';

export const AchievementsPage: React.FC = () => {
  return (
    <div className="space-y-6 text-[#2e343b]">
      <div>
        <h1 className="academic-heading mt-0">Honors / Achievements</h1>
        <p className="text-sm text-[#4b5563] mb-4">
          Competitive hackathon achievements, fellowship selections, leadership roles, and technical certifications.
        </p>
      </div>

      {/* Bulleted list format matching the screenshot reference in charcoal & black */}
      <ul className="space-y-3 text-sm text-[#374151]">
        {ACHIEVEMENTS.map((item) => (
          <li key={item.id} className="flex items-start gap-2.5">
            <span className="text-[#121417] font-bold text-base leading-tight">•</span>
            <div className="leading-relaxed">
              <strong className="text-[#121417]">{item.title}:</strong>{' '}
              <span>{item.description}</span>
            </div>
          </li>
        ))}
      </ul>

      {/* Technical Certifications with Links */}
      <div className="pt-6">
        <h2 className="academic-heading">Technical Certifications</h2>
        <div className="space-y-2 text-sm">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="flex justify-between items-baseline py-1.5 border-b border-[#f3f4f6] text-xs sm:text-sm"
            >
              <div className="flex items-center gap-1.5 text-[#2e343b]">
                <span className="text-[#121417] font-bold">•</span>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-[#121417] hover:underline inline-flex items-center gap-1"
                  >
                    <span>{cert.title}</span>
                    <ExternalLink className="w-3 h-3 text-[#6b7280]" />
                  </a>
                ) : (
                  <strong className="text-[#121417]">{cert.title}</strong>
                )}
                <span className="text-[#6b7280]"> — {cert.issuer}</span>
              </div>
              <span className="font-mono text-xs text-[#6b7280] shrink-0 ml-3">
                {cert.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
