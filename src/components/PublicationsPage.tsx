import React, { useState } from 'react';
import { PUBLICATIONS } from '../data/publications';
import { ExternalLink } from 'lucide-react';

export const PublicationsPage: React.FC = () => {
  const [activeBibtex, setActiveBibtex] = useState<string | null>(null);

  const isMe = (author: string) => {
    const clean = author.toLowerCase().replace(/[.,]/g, '').trim();
    return clean === 'kritika taank' || clean === 'taank k' || clean === 'taank kritika';
  };

  return (
    <div className="space-y-6 text-[#2e343b]">
      <div>
        <h1 className="academic-heading mt-0">Publications</h1>
        <p className="text-sm text-[#4b5563] mb-4">
          Peer-reviewed journal publications (* indicates equal contribution or author position).
        </p>
      </div>

      <div className="space-y-6">
        {PUBLICATIONS.map((pub, idx) => (
          <div key={pub.id} className="text-sm pb-5 border-b border-[#e5e7eb] last:border-b-0">
            {/* Paper Title with Direct Link */}
            <h3 className="font-bold text-base text-[#121417] leading-snug">
              {idx + 1}.{' '}
              {pub.paperUrl ? (
                <a
                  href={pub.paperUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#121417] hover:underline inline-flex items-baseline gap-1"
                >
                  <span>{pub.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#6b7280] inline shrink-0 self-center" />
                </a>
              ) : (
                pub.title
              )}
            </h3>

            {/* All Authors - Highlighted in bold black, no underline */}
            <p className="text-sm text-[#374151] mt-1.5 leading-relaxed">
              {pub.authors.map((author, aIdx) => (
                <span key={author}>
                  {isMe(author) ? (
                    <strong className="text-[#121417] font-bold">{author}</strong>
                  ) : (
                    <span>{author}</span>
                  )}
                  {aIdx < pub.authors.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>

            {/* Venue and citation info */}
            <p className="text-xs sm:text-sm text-[#6b7280] italic mt-1">
              {pub.venue}. {pub.citation}.
            </p>

            {/* Abstract */}
            <p className="text-xs text-[#4b5563] mt-2 leading-relaxed">
              <strong className="text-[#121417]">Abstract:</strong> {pub.abstract}
            </p>

            {/* Action Buttons: Paper, Code, BibTeX */}
            <div className="mt-3 flex items-center space-x-2 text-xs font-mono">
              {pub.paperUrl && (
                <a
                  href={pub.paperUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-0.5 border border-[#d1d5db] rounded-xs text-[#121417] hover:bg-[#f3f4f6] transition-colors"
                >
                  [Paper]
                </a>
              )}

              {pub.codeUrl && (
                <a
                  href={pub.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-0.5 border border-[#d1d5db] rounded-xs text-[#121417] hover:bg-[#f3f4f6] transition-colors"
                >
                  [Code]
                </a>
              )}

              <button
                onClick={() =>
                  setActiveBibtex(activeBibtex === pub.id ? null : pub.id)
                }
                className="px-2.5 py-0.5 border border-[#d1d5db] rounded-xs text-[#4b5563] hover:bg-[#f3f4f6] hover:text-[#121417] cursor-pointer transition-colors"
              >
                {activeBibtex === pub.id ? '[Hide BibTeX]' : '[BibTeX]'}
              </button>
            </div>

            {/* BibTeX toggleable display */}
            {activeBibtex === pub.id && (
              <pre className="mt-3 p-3 bg-[#f9fafb] border border-[#e5e7eb] rounded-xs text-[11px] font-mono text-[#121417] overflow-x-auto leading-relaxed">
                {pub.bibtex}
              </pre>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
