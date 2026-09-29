import React from 'react';
import { PUBLICATIONS } from '../data/publications';
import { ExternalLink } from 'lucide-react';

export const PublicationsPage: React.FC = () => {
  const isMe = (author: string) => {
    const clean = author.toLowerCase().replace(/[.,]/g, '').trim();
    return clean === 'kritika taank' || clean === 'taank k' || clean === 'taank kritika';
  };

  return (
    <div className="space-y-6 text-[#2e343b]">
      <div>
        <h1 className="academic-heading mt-0">Publications</h1>
        <p className="text-sm text-[#586069] mb-4">
          Peer-reviewed journal publications (* indicates equal contribution or author position).
        </p>
      </div>

      <div className="space-y-6">
        {PUBLICATIONS.map((pub, idx) => (
          <div key={pub.id} className="text-sm pb-5 border-b border-[#e1e4e8] last:border-b-0">
            {/* Paper Title with Direct Link */}
            <h3 className="font-bold text-base text-[#121417] leading-snug">
              {idx + 1}.{' '}
              {pub.paperUrl ? (
                <a
                  href={pub.paperUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#121417] hover:text-black hover:underline inline-flex items-baseline gap-1"
                >
                  <span>{pub.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#586069] inline shrink-0 self-center" />
                </a>
              ) : (
                pub.title
              )}
            </h3>

            {/* All Authors - Highlighted in bold dark charcoal */}
            <p className="text-sm text-[#2e343b] mt-1.5 leading-relaxed">
              {pub.authors.map((author, aIdx) => (
                <span key={author}>
                  {isMe(author) ? (
                    <strong className="text-[#121417] font-bold underline decoration-[#121417]/50 decoration-2">{author}</strong>
                  ) : (
                    <span className="text-[#494e52]">{author}</span>
                  )}
                  {aIdx < pub.authors.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>

            {/* Venue and citation info */}
            <p className="text-xs sm:text-sm text-[#586069] italic mt-1">
              {pub.venue}. {pub.citation}.
            </p>

            {/* Abstract */}
            <p className="text-xs text-[#586069] mt-2 leading-relaxed">
              <strong className="text-[#121417]">Abstract:</strong> {pub.abstract}
            </p>

            {/* Action Buttons: Paper and Code only */}
            <div className="mt-3 flex items-center space-x-2 text-xs font-mono">
              {pub.paperUrl && (
                <a
                  href={pub.paperUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-0.5 border border-[#d1d5db] rounded-xs text-[#121417] hover:bg-[#f6f8fa] hover:text-black transition-colors"
                >
                  [Paper]
                </a>
              )}

              {pub.codeUrl && (
                <a
                  href={pub.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-0.5 border border-[#d1d5db] rounded-xs text-[#121417] hover:bg-[#f6f8fa] hover:text-black transition-colors"
                >
                  [Code]
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
