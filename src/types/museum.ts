export type MuseumRoomId =
  | 'grand-hall'
  | 'exhibition'
  | 'research'
  | 'workshop'
  | 'reading-room'
  | 'archive';

export interface RelatedExhibitRef {
  id: string;
  title: string;
  roomId: MuseumRoomId;
  type: string;
}

export interface BookItem {
  id: string;
  title: string;
  author: string;
  year: number;
  coverUrl?: string;
  spineColor: string;       // e.g. '#8C3829', '#2B3A42'
  textColor: string;        // e.g. '#FDF9F3'
  coverAccent: string;      // Top ribbon accent line color
  widthMm: number;          // Physical spine thickness in mm (used to calculate width in px)
  leanAngle: number;        // Physical tilt (-2 to 2 degrees)
  status: 'read' | 'reading' | 'want-to-read';
  rating: number;           // 1 to 5
  dateRead?: string;
  pages: number;            // Used to compute height and spine thickness
  genres: string[];
  whyIReadIt: string;
  myNote: string;
  favoriteQuote?: string;
  recommenderName?: string;
  relatedExhibits?: RelatedExhibitRef[];
}

export interface BookRecommendation {
  id: string;
  title: string;
  author: string;
  year: number | string;
  coverUrl?: string;
  recommenderName: string;
  note: string;
  timestamp: string;
  genres: string[];
  spineColor: string;
  textColor: string;
  widthMm: number;
  pages: number;
}
