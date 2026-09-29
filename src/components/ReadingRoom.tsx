import React, { useState, useMemo, useEffect } from 'react';
import { READING_ROOM_BOOKS, INITIAL_RECOMMENDED_SHELF } from '../data/books';
import { BookItem, BookRecommendation, MuseumRoomId } from '../types/museum';
import { RecommendBookModal } from './RecommendBookModal';
import { Plus, X } from 'lucide-react';

interface ReadingRoomProps {
  onNavigateToExhibit?: (roomId: MuseumRoomId, exhibitId: string) => void;
  selectedBookId?: string | null;
}

export const ReadingRoom: React.FC<ReadingRoomProps> = ({
  onNavigateToExhibit,
  selectedBookId,
}) => {
  const [shelfMode, setShelfMode] = useState<'library' | 'recommended'>('library');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRecommendModalOpen, setIsRecommendModalOpen] = useState(false);

  // Recommendations backed by localStorage
  const [recommendations, setRecommendations] = useState<BookRecommendation[]>(() => {
    try {
      const saved = localStorage.getItem('museum_reading_room_recommendations');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_RECOMMENDED_SHELF;
  });

  useEffect(() => {
    try {
      localStorage.setItem('museum_reading_room_recommendations', JSON.stringify(recommendations));
    } catch (e) {
      console.error(e);
    }
  }, [recommendations]);

  const [activeBook, setActiveBook] = useState<BookItem | null>(() => {
    if (selectedBookId) {
      return READING_ROOM_BOOKS.find((b) => b.id === selectedBookId) || null;
    }
    return null;
  });

  const [hoveredBookId, setHoveredBookId] = useState<string | null>(null);

  // Filtering books by search query
  const filteredBooks = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return READING_ROOM_BOOKS;

    return READING_ROOM_BOOKS.filter((book) => {
      const searchableString = `${book.title} ${book.author} ${book.genres.join(' ')} ${book.myNote} ${book.whyIReadIt}`.toLowerCase();
      return searchableString.includes(q);
    });
  }, [searchQuery]);

  const filteredRecommendations = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return recommendations;
    return recommendations.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.author.toLowerCase().includes(q) ||
        r.recommenderName.toLowerCase().includes(q) ||
        r.note.toLowerCase().includes(q)
    );
  }, [recommendations, searchQuery]);

  const handleAddRecommendation = (rec: BookRecommendation) => {
    setRecommendations((prev) => [rec, ...prev]);
    setShelfMode('recommended');
  };

  return (
    <div className="space-y-4 text-[#2e343b]">
      {/* Standard Academic Header */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
          <div>
            <h1 className="academic-heading mt-0">The Reading Room</h1>
            <p className="text-sm text-[#586069] mt-0.5">
              A tactile personal library of physical book spines, curated readings, and community recommendations.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsRecommendModalOpen(true)}
            className="self-start sm:self-auto px-3 py-1.5 bg-[#121417] hover:bg-black text-white text-xs uppercase tracking-wider rounded-xs transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap font-medium"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Recommend a Book</span>
          </button>
        </div>
      </div>

      {/* Controls Bar: Sub-Tabs & Filter Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
        <div className="inline-flex border border-[#d1d5db] bg-[#f6f8fa] p-1 rounded-xs text-xs">
          <button
            type="button"
            onClick={() => setShelfMode('library')}
            className={`px-3 py-1 rounded-xs transition-colors cursor-pointer ${
              shelfMode === 'library'
                ? 'bg-white text-[#121417] font-bold border border-[#d1d5db] shadow-2xs'
                : 'text-[#586069] hover:text-[#121417]'
            }`}
          >
            My Library ({READING_ROOM_BOOKS.length})
          </button>
          <button
            type="button"
            onClick={() => setShelfMode('recommended')}
            className={`px-3 py-1 rounded-xs transition-colors cursor-pointer ml-1 ${
              shelfMode === 'recommended'
                ? 'bg-white text-[#121417] font-bold border border-[#d1d5db] shadow-2xs'
                : 'text-[#586069] hover:text-[#121417]'
            }`}
          >
            To-Read Shelf ({recommendations.length})
          </button>
        </div>

        <div className="relative w-full sm:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search title, author..."
            className="w-full text-xs text-[#121417] placeholder-[#9ca3af] bg-white border border-[#d1d5db] rounded-xs px-3 py-1.5 focus:outline-hidden focus:border-[#121417]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1.5 text-[#9ca3af] hover:text-[#121417] cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* THE PHYSICAL WOODEN BOOKSHELF */}
      <div className="space-y-1.5 pt-2">
        <div className="relative bg-[#faf7f2] border border-[#e1e4e8] rounded-xs p-4 sm:p-6 pt-8 shadow-2xs overflow-x-auto min-h-[380px]">
          <div className="inline-flex flex-col min-w-full justify-end">
            <div className="flex items-end space-x-1.5 sm:space-x-2.5 min-w-max mx-auto sm:mx-0 px-2">
              {shelfMode === 'library' ? (
                filteredBooks.length === 0 ? (
                  <div className="py-20 text-center w-full text-sm italic text-[#586069]">
                    No volumes on the shelf match "{searchQuery}".
                  </div>
                ) : (
                  filteredBooks.map((book) => {
                    const isHovered = hoveredBookId === book.id;
                    const heightPx = Math.min(340, Math.max(260, 240 + Math.round(book.pages * 0.12)));

                    return (
                      <div
                        key={book.id}
                        id={book.id}
                        onMouseEnter={() => setHoveredBookId(book.id)}
                        onMouseLeave={() => setHoveredBookId(null)}
                        onClick={() => setActiveBook(book)}
                        style={{
                          width: `${book.widthMm * 1.6}px`,
                          height: `${heightPx}px`,
                          backgroundColor: book.spineColor,
                          color: book.textColor,
                          transform: isHovered
                            ? `translateY(-24px) scale(1.02)`
                            : `rotate(${book.leanAngle}deg)`,
                          transition: 'transform 240ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 240ms',
                        }}
                        className="relative cursor-pointer select-none rounded-t-xs p-2 flex flex-col justify-between shadow-xs hover:shadow-xl hover:z-30 border-r border-black/25"
                        title={`${book.title} by ${book.author}`}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') setActiveBook(book);
                        }}
                      >
                        <div className="flex flex-col items-center">
                          <div
                            className="w-full h-1.5 rounded-full mb-1 opacity-80"
                            style={{ backgroundColor: book.coverAccent }}
                          />
                          {book.status === 'reading' && (
                            <div className="text-[8px] font-mono tracking-tighter uppercase px-1 py-0.5 bg-black/40 rounded-xs text-amber-300 font-semibold">
                              READING
                            </div>
                          )}
                        </div>

                        {/* Vertical Spine Title */}
                        <div
                          className="my-auto text-center font-serif tracking-wide text-xs sm:text-sm font-medium leading-tight overflow-hidden"
                          style={{
                            writingMode: 'vertical-rl',
                            transform: 'rotate(180deg)',
                            maxHeight: `${heightPx - 80}px`,
                          }}
                        >
                          <span className="truncate block opacity-95">{book.title}</span>
                        </div>

                        {/* Author & Year */}
                        <div className="text-center font-mono text-[9px] opacity-80 border-t border-white/20 pt-1">
                          <span className="block truncate">{book.author.split(' ')[0]}</span>
                          <span>{book.year}</span>
                        </div>

                        {/* Hover Tooltip */}
                        {isHovered && (
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#121417] text-white text-[10px] font-mono py-1 px-2.5 rounded-xs shadow-md whitespace-nowrap pointer-events-none z-40 flex items-center gap-1.5 border border-white/30">
                            <span>★ {book.rating}/5</span>
                            <span>·</span>
                            <span>{book.pages}p</span>
                          </div>
                        )}
                      </div>
                    );
                  })
                )
              ) : (
                /* Recommended Shelf */
                filteredRecommendations.length === 0 ? (
                  <div className="py-20 text-center w-full text-sm italic text-[#586069]">
                    No recommended volumes found. Click "RECOMMEND A BOOK" to add one!
                  </div>
                ) : (
                  filteredRecommendations.map((rec) => {
                    const isHovered = hoveredBookId === rec.id;
                    const heightPx = Math.min(340, Math.max(260, 240 + Math.round(rec.pages * 0.12)));

                    return (
                      <div
                        key={rec.id}
                        onMouseEnter={() => setHoveredBookId(rec.id)}
                        onMouseLeave={() => setHoveredBookId(null)}
                        onClick={() =>
                          setActiveBook({
                            id: rec.id,
                            title: rec.title,
                            author: rec.author,
                            year: Number(rec.year) || 2024,
                            coverUrl: rec.coverUrl,
                            spineColor: rec.spineColor,
                            textColor: rec.textColor,
                            coverAccent: '#D9735D',
                            widthMm: rec.widthMm,
                            leanAngle: 0,
                            status: 'want-to-read',
                            rating: 5,
                            pages: rec.pages,
                            genres: rec.genres,
                            whyIReadIt: `Recommended by ${rec.recommenderName}`,
                            myNote: rec.note,
                            recommenderName: rec.recommenderName,
                            relatedExhibits: [],
                          })
                        }
                        style={{
                          width: `${rec.widthMm * 1.6}px`,
                          height: `${heightPx}px`,
                          backgroundColor: rec.spineColor,
                          color: rec.textColor,
                          transform: isHovered ? `translateY(-24px) scale(1.02)` : 'none',
                          transition: 'transform 240ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 240ms',
                        }}
                        className="relative cursor-pointer select-none rounded-t-xs p-2 flex flex-col justify-between shadow-xs hover:shadow-xl hover:z-30 border-r border-black/25"
                        title={`${rec.title} - Recommended by ${rec.recommenderName}`}
                        role="button"
                        tabIndex={0}
                      >
                        <div className="flex flex-col items-center">
                          <div className="text-[7px] font-mono tracking-tighter uppercase px-1 py-0.5 bg-black/40 rounded-xs text-[#E07A5F]">
                            REC
                          </div>
                        </div>

                        <div
                          className="my-auto text-center font-serif tracking-wide text-xs sm:text-sm font-medium leading-tight overflow-hidden"
                          style={{
                            writingMode: 'vertical-rl',
                            transform: 'rotate(180deg)',
                            maxHeight: `${heightPx - 80}px`,
                          }}
                        >
                          <span className="truncate block opacity-95">{rec.title}</span>
                        </div>

                        <div className="text-center font-mono text-[9px] opacity-80 border-t border-white/20 pt-1">
                          <span className="block truncate">{rec.recommenderName.split(' ')[0]}</span>
                          <span>{rec.year}</span>
                        </div>
                      </div>
                    );
                  })
                )
              )}
            </div>

            {/* Wooden Base Plank */}
            <div className="h-6 w-full min-w-full bg-[#7a4928] border-t-2 border-[#5c3216] shadow-2xs rounded-b-xs relative">
              <div className="h-0.5 w-full bg-[#965c35]/40" />
            </div>
          </div>
        </div>
      </div>

      {/* BOOK DETAIL MODAL */}
      {activeBook && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-2xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-white border border-[#d1d5db] shadow-xl rounded-xs p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
            <div className="flex justify-between items-start border-b border-[#e1e4e8] pb-4 mb-5">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#121417] block font-bold">
                  LIBRARY VOLUME DOSSIER · READING ROOM
                </span>
                <h2 className="text-2xl font-bold text-[#121417] leading-snug mt-1">
                  {activeBook.title}
                </h2>
                <div className="text-xs text-[#586069] mt-0.5">
                  Author: <strong className="text-[#121417]">{activeBook.author}</strong> ({activeBook.year})
                </div>
              </div>
              <button
                onClick={() => setActiveBook(null)}
                className="p-1 text-[#586069] hover:text-[#121417] rounded transition-colors cursor-pointer"
                aria-label="Close Book View"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Book Cover + Quick Metadata Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
              <div
                className="h-56 rounded-xs p-4 flex flex-col justify-between shadow-xs border-r-2 border-black/20 overflow-hidden relative"
                style={{
                  backgroundColor: activeBook.spineColor,
                  color: activeBook.textColor,
                }}
              >
                {activeBook.coverUrl && (
                  <img
                    src={activeBook.coverUrl}
                    alt={activeBook.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
                  />
                )}
                <div className="text-[10px] tracking-wider uppercase opacity-80 relative z-10 font-medium">
                  {activeBook.genres[0]}
                </div>
                <div className="relative z-10">
                  <div className="font-serif text-base font-bold leading-tight">
                    {activeBook.title}
                  </div>
                  <div className="text-xs font-sans mt-1 opacity-90">{activeBook.author}</div>
                </div>
                <div className="text-[9px] font-mono opacity-80 border-t border-white/20 pt-1 flex justify-between relative z-10">
                  <span>{activeBook.pages} PAGES</span>
                  <span>★ {activeBook.rating}/5</span>
                </div>
              </div>

              <div className="sm:col-span-2 space-y-2.5 text-xs">
                <div className="p-2.5 bg-[#f6f8fa] border border-[#e1e4e8] rounded-xs">
                  <span className="text-[10px] uppercase text-[#586069] block mb-0.5 font-semibold">STATUS</span>
                  <span className="font-semibold text-[#121417] uppercase">
                    {activeBook.status === 'reading'
                      ? 'Currently Reading'
                      : activeBook.status === 'want-to-read'
                      ? 'On To-Read Shelf'
                      : 'Read & Cataloged'}
                    {activeBook.dateRead && ` (${activeBook.dateRead})`}
                  </span>
                </div>

                {activeBook.recommenderName && (
                  <div className="p-2.5 bg-[#f1f5f9] border border-[#e1e4e8] rounded-xs">
                    <span className="text-[10px] uppercase text-[#121417] block mb-0.5 font-bold">
                      RECOMMENDED BY
                    </span>
                    <span className="font-semibold text-[#121417]">
                      {activeBook.recommenderName}
                    </span>
                  </div>
                )}

                <div className="p-2.5 bg-[#f6f8fa] border border-[#e1e4e8] rounded-xs">
                  <span className="text-[10px] uppercase text-[#586069] block mb-0.5 font-semibold">GENRES</span>
                  <div className="flex flex-wrap gap-1 text-xs text-[#121417]">
                    {activeBook.genres.map((g) => (
                      <span key={g} className="px-1.5 py-0.5 bg-white border border-[#e1e4e8] rounded-xs">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Curatorial Notes & Marginalia */}
            <div className="space-y-3.5 text-xs text-[#2e343b]">
              <div>
                <h3 className="text-xs uppercase tracking-wider text-[#121417] font-bold mb-1">
                  WHY I READ THIS VOLUME
                </h3>
                <p className="leading-relaxed bg-[#f6f8fa] p-3 border-l-2 border-[#121417] rounded-r-xs">
                  {activeBook.whyIReadIt}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-wider text-[#121417] font-bold mb-1">
                  CURATORIAL NOTE & IMPRESSION
                </h3>
                <p className="leading-relaxed">{activeBook.myNote}</p>
              </div>

              {activeBook.favoriteQuote && (
                <div className="p-3 bg-[#f6f8fa] border border-[#e1e4e8] rounded-xs">
                  <span className="text-[10px] uppercase text-[#586069] block mb-1 font-semibold">
                    FAVORITE PASSAGE / MARGINALIA
                  </span>
                  <p className="font-serif italic text-sm text-[#121417] leading-snug">
                    "{activeBook.favoriteQuote}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Recommend a Book Modal */}
      <RecommendBookModal
        isOpen={isRecommendModalOpen}
        onClose={() => setIsRecommendModalOpen(false)}
        onAddRecommendation={handleAddRecommendation}
      />
    </div>
  );
};
