import React, { useState } from 'react';
import { BookOpen, ExternalLink, Github, Copy, Check, FileCode2 } from 'lucide-react';
import { PUBLICATIONS } from '../data/publications';

export const PublicationsSection: React.FC = () => {
  const [copiedBibId, setCopiedBibId] = useState<string | null>(null);
  const [expandedBibId, setExpandedBibId] = useState<string | null>(null);

  const handleCopyBibtex = (id: string, bibtex: string) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedBibId(id);
    setTimeout(() => setCopiedBibId(null), 2000);
  };

  return (
    <section id="publications" className="py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1E3A8A] dark:text-blue-400 block mb-1">
            05 / Peer-Reviewed Literature
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0F1E36] dark:text-white">
            Publications
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Peer-reviewed journal papers published during undergraduate studies in deep reinforcement learning for robotics and lightweight cryptographic frameworks for mobile cloud systems.
          </p>
        </div>

        {/* Academic Publication List (Lijie Hu / Scholar style) */}
        <div className="space-y-6">
          {PUBLICATIONS.map((pub, idx) => (
            <div
              key={pub.id}
              className="p-5 sm:p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 rounded-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs text-slate-400 dark:text-slate-500 font-bold pt-0.5">
                  [{idx + 1}]
                </span>

                <div className="flex-1 space-y-2">
                  {/* Title */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {pub.title}
                  </h3>

                  {/* Authors (Kritika Taank highlighted) */}
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {pub.authors.map((author, aIdx) => (
                      <span key={author}>
                        {author === 'Kritika Taank' ? (
                          <strong className="text-slate-950 dark:text-white underline decoration-slate-300 dark:decoration-slate-600 underline-offset-2">
                            {author}
                          </strong>
                        ) : (
                          author
                        )}
                        {aIdx < pub.authors.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </p>

                  {/* Venue & Citation */}
                  <p className="text-xs font-mono text-[#1E3A8A] dark:text-blue-400">
                    <span className="italic">{pub.venue}</span> · {pub.citation}
                  </p>

                  {/* Abstract */}
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                    {pub.abstract}
                  </p>

                  {/* Action Links */}
                  <div className="pt-3 flex flex-wrap items-center gap-2 text-xs">
                    {pub.paperUrl && (
                      <a
                        href={pub.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 border border-slate-300 dark:border-slate-700 rounded-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-mono text-[11px]"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Journal Link</span>
                      </a>
                    )}

                    {pub.codeUrl && (
                      <a
                        href={pub.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 border border-slate-300 dark:border-slate-700 rounded-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-mono text-[11px]"
                      >
                        <Github className="w-3 h-3" />
                        <span>Source Code</span>
                      </a>
                    )}

                    <button
                      onClick={() =>
                        setExpandedBibId(expandedBibId === pub.id ? null : pub.id)
                      }
                      className="inline-flex items-center gap-1 px-2.5 py-1 border border-slate-300 dark:border-slate-700 rounded-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-mono text-[11px]"
                    >
                      <FileCode2 className="w-3 h-3" />
                      <span>{expandedBibId === pub.id ? 'Hide BibTeX' : 'BibTeX'}</span>
                    </button>

                    <button
                      onClick={() => handleCopyBibtex(pub.id, pub.bibtex)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 border border-slate-300 dark:border-slate-700 rounded-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-mono text-[11px]"
                    >
                      {copiedBibId === pub.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Citation</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Expandable BibTeX viewer */}
                  {expandedBibId === pub.id && (
                    <div className="mt-3 p-3 bg-slate-900 text-slate-200 rounded-xs font-mono text-[11px] overflow-x-auto relative">
                      <button
                        onClick={() => handleCopyBibtex(pub.id, pub.bibtex)}
                        className="absolute top-2 right-2 px-2 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded text-[10px] flex items-center gap-1"
                      >
                        {copiedBibId === pub.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedBibId === pub.id ? 'Copied' : 'Copy'}</span>
                      </button>
                      <pre className="whitespace-pre">{pub.bibtex}</pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
