import React, { useState, useMemo, useEffect } from 'react';
import { CURATED_SEARCH_CATALOG } from '../data/books';
import { BookRecommendation } from '../types/museum';
import { searchOpenLibraryBooks, OpenLibraryBookResult } from '../services/openLibrary';
import { BookOpen, X, Check, Loader2, Globe } from 'lucide-react';

interface RecommendBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddRecommendation: (rec: BookRecommendation) => void;
}

interface SelectedBookDraft {
  title: string;
  author: string;
  year: number | string;
  coverUrl?: string;
  genres: string[];
  pages?: number;
}

export const RecommendBookModal: React.FC<RecommendBookModalProps> = ({
  isOpen,
  onClose,
  onAddRecommendation,
}) => {
  const [step, setStep] = useState<'search' | 'form' | 'success'>('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState<SelectedBookDraft | null>(null);
  const [recommenderName, setRecommenderName] = useState('');
  const [note, setNote] = useState('');

  const [apiResults, setApiResults] = useState<OpenLibraryBookResult[]>([]);
  const [isLoadingApi, setIsLoadingApi] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep('search');
      setSearchQuery('');
      setSelectedBook(null);
      setRecommenderName('');
      setNote('');
      setApiResults([]);
      setIsLoadingApi(false);
    }
  }, [isOpen]);

  // Debounced API Search
  useEffect(() => {
    const q = searchQuery.trim();
    if (!q || q.length < 2) {
      setApiResults([]);
      setIsLoadingApi(false);
      return;
    }

    setIsLoadingApi(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(async () => {
      try {
        const results = await searchOpenLibraryBooks(q, controller.signal);
        setApiResults(results);
      } catch {
        // Fallback handled gracefully
      } finally {
        setIsLoadingApi(false);
      }
    }, 350);

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [searchQuery]);

  // Local Catalog Filter
  const localCuratedResults = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return [];
    return CURATED_SEARCH_CATALOG.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.genres.some((g) => g.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const combinedResults = useMemo(() => {
    if (apiResults.length > 0) return apiResults;
    return localCuratedResults.map((b) => ({
      id: b.id,
      title: b.title,
      author: b.author,
      year: b.year,
      coverUrl: b.coverUrl,
      genres: b.genres,
      pages: 320,
    }));
  }, [apiResults, localCuratedResults]);

  const handlePickBook = (book: {
    title: string;
    author: string;
    year: number | string;
    coverUrl?: string;
    genres?: string[];
    pages?: number;
  }) => {
    setSelectedBook({
      title: book.title,
      author: book.author,
      year: book.year,
      coverUrl: book.coverUrl,
      genres: book.genres || ['Recommended'],
      pages: book.pages || 320,
    });
    setStep('form');
  };

  const handlePickCustom = () => {
    if (!searchQuery.trim()) return;
    setSelectedBook({
      title: searchQuery.trim(),
      author: 'Unknown / Various',
      year: new Date().getFullYear(),
      genres: ['Recommended'],
      pages: 300,
    });
    setStep('form');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBook) return;

    const pageCount = selectedBook.pages || 320;
    const computedWidthMm = Math.max(24, Math.min(52, Math.round(pageCount * 0.085)));

    const newRecommendation: BookRecommendation = {
      id: `rec-${Date.now()}`,
      title: selectedBook.title,
      author: selectedBook.author,
      year: selectedBook.year,
      coverUrl: selectedBook.coverUrl,
      recommenderName: recommenderName.trim() || 'A Curious Visitor',
      note: note.trim() || 'A book worth reading.',
      timestamp: 'Just now',
      genres: selectedBook.genres,
      spineColor: '#8C3829',
      textColor: '#FAF7F2',
      widthMm: computedWidthMm,
      pages: pageCount,
    };

    onAddRecommendation(newRecommendation);
    setStep('success');

    setTimeout(() => {
      onClose();
    }, 1400);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#161514]/70 backdrop-blur-2xs"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl bg-[#EBE7DF] text-[#222120] border border-[#DDD6C8] shadow-2xl rounded-xs overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#706A5F] hover:text-[#1E1D1B] rounded transition-colors z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: Search */}
        {step === 'search' && (
          <div className="p-6 sm:p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-[#7A7366] mb-2">
              RECOMMEND A BOOK
            </div>
            <div className="border-b border-[#D5CEC0] pb-2 mb-2 flex items-center justify-between gap-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search real books, authors, or subjects..."
                autoFocus
                className="w-full bg-transparent font-serif italic text-2xl sm:text-3xl text-[#1E1D1B] placeholder-[#9E978A] focus:outline-hidden"
              />
              {isLoadingApi && (
                <div className="flex items-center gap-1.5 text-[#8C3829] shrink-0">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span className="font-mono text-[10px] uppercase tracking-wider hidden sm:inline">Searching...</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#787165] mb-3 px-0.5">
              <span className="flex items-center gap-1">
                <Globe className="w-3 h-3 text-[#8C3829]" />
                <span>Connected to Open Library (Internet Archive)</span>
              </span>
              {apiResults.length > 0 && (
                <span className="text-[#8C3829] font-semibold">
                  {apiResults.length} live matches
                </span>
              )}
            </div>

            <div className="max-h-72 overflow-y-auto space-y-1.5 pr-2 divide-y divide-[#E2DBD0]">
              {searchQuery.trim() === '' ? (
                <div className="py-12 px-4 text-center">
                  <BookOpen className="w-8 h-8 text-[#8C8477] mx-auto mb-3 opacity-60" />
                  <p className="font-serif italic text-base sm:text-lg text-[#111110]">
                    What book would you like to recommend?
                  </p>
                  <p className="font-mono text-[11px] text-[#6E675C] mt-1.5 uppercase tracking-wider">
                    Search millions of books across history & science
                  </p>
                </div>
              ) : (
                <>
                  {combinedResults.map((book) => (
                    <div
                      key={book.id}
                      className="pt-2.5 pb-2.5 flex items-center justify-between hover:bg-[#E3DDD1] px-2 rounded-xs transition-colors group"
                    >
                      <div className="flex items-center gap-3 min-w-0 pr-2">
                        <div className="w-10 h-14 bg-[#DDD5C7] rounded-xs overflow-hidden shrink-0 border border-[#CBC3B4] flex items-center justify-center shadow-2xs">
                          {book.coverUrl ? (
                            <img
                              src={book.coverUrl}
                              alt={book.title}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                (e.currentTarget as HTMLElement).style.display = 'none';
                              }}
                            />
                          ) : (
                            <BookOpen className="w-4 h-4 text-[#8C8477]" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-serif text-base sm:text-lg text-[#111110] leading-snug truncate">
                            {book.title}
                          </h4>
                          <div className="font-mono text-[10px] tracking-wider uppercase text-[#787165] mt-0.5 truncate">
                            {book.author} · {book.year}
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handlePickBook(book)}
                        className="font-mono text-xs uppercase tracking-widest text-[#8C3829] hover:text-[#5F241A] px-3 py-1 font-semibold cursor-pointer shrink-0"
                      >
                        PICK
                      </button>
                    </div>
                  ))}

                  <div className="pt-3 pb-2 flex items-center justify-between px-3 bg-[#F3EFE7] rounded-xs mt-2 border border-[#DDD5C7]">
                    <div className="min-w-0 pr-2">
                      <span className="font-serif italic text-sm text-[#111110] block truncate">
                        "{searchQuery.trim()}"
                      </span>
                      <span className="block font-mono text-[10px] text-[#8C8477] uppercase">
                        Add as custom title
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handlePickCustom}
                      className="font-mono text-xs uppercase tracking-widest text-[#8C3829] font-semibold hover:underline cursor-pointer shrink-0"
                    >
                      PICK THIS →
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* STEP 2: Submission Form */}
        {step === 'form' && selectedBook && (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-[#7A7366] mb-2">
              RECOMMEND A BOOK
            </div>
            <h3 className="font-serif italic text-xl sm:text-2xl text-[#1E1D1B] leading-snug mb-3 line-clamp-2">
              {selectedBook.title}
            </h3>
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-[#D5CEC0]">
              <div className="w-10 h-14 bg-[#DDD5C7] rounded-xs overflow-hidden shrink-0 border border-[#CBC3B4] flex items-center justify-center shadow-2xs">
                {selectedBook.coverUrl ? (
                  <img src={selectedBook.coverUrl} alt={selectedBook.title} className="w-full h-full object-cover" />
                ) : (
                  <BookOpen className="w-4 h-4 text-[#8C8477]" />
                )}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#787165]">
                {selectedBook.author} · {selectedBook.year}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="rec-name" className="block font-mono text-[10px] tracking-widest uppercase text-[#706A5F] mb-1 font-bold">
                YOUR NAME
              </label>
              <input
                id="rec-name"
                type="text"
                value={recommenderName}
                onChange={(e) => setRecommenderName(e.target.value)}
                placeholder="Who's recommending this?"
                className="w-full bg-transparent border-b border-[#C8C0B2] pb-1.5 text-sm sm:text-base font-sans text-[#222120] placeholder-[#9E978A] focus:outline-hidden focus:border-[#8C3829]"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="rec-note" className="block font-mono text-[10px] tracking-widest uppercase text-[#706A5F] mb-1 font-bold">
                WHY SHOULD I READ IT?
              </label>
              <textarea
                id="rec-note"
                rows={2}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Optional — a line or two"
                className="w-full bg-transparent border-b border-[#C8C0B2] pb-1.5 text-sm sm:text-base font-sans text-[#222120] placeholder-[#9E978A] focus:outline-hidden focus:border-[#8C3829] resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep('search')}
                className="font-mono text-xs uppercase tracking-wider text-[#706A5F] hover:text-[#1E1D1B] flex items-center gap-1.5 cursor-pointer"
              >
                <span>← Another book</span>
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-full border border-[#8C3829] hover:bg-[#8C3829] hover:text-[#FBF9F5] text-[#8C3829] font-mono text-xs uppercase tracking-widest transition-all shadow-2xs cursor-pointer"
              >
                Send it
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Success Screen */}
        {step === 'success' && (
          <div className="p-10 text-center">
            <div className="w-12 h-12 rounded-full bg-[#8C3829] text-[#FAF7F2] mx-auto flex items-center justify-center mb-3">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif italic text-2xl text-[#1E1D1B]">
              Added to the to-read shelf
            </h3>
            <p className="font-mono text-xs text-[#706A5F] mt-1">
              Thank you for recommending "{selectedBook?.title}".
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
