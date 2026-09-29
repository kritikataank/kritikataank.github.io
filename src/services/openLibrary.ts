export interface OpenLibraryBookResult {
  id: string;
  title: string;
  author: string;
  year: number | string;
  coverUrl?: string;
  genres: string[];
  pages?: number;
  isbn?: string;
  key?: string;
}

export async function searchOpenLibraryBooks(
  query: string,
  signal?: AbortSignal
): Promise<OpenLibraryBookResult[]> {
  const trimmed = query.trim();
  if (!trimmed || trimmed.length < 2) return [];

  const encodedQuery = encodeURIComponent(trimmed);
  const url = `https://openlibrary.org/search.json?q=${encodedQuery}&limit=8&fields=key,title,author_name,first_publish_year,cover_i,number_of_pages_median,subject,isbn`;

  try {
    const response = await fetch(url, { signal });
    if (!response.ok) {
      throw new Error(`Open Library API responded with status ${response.status}`);
    }

    const data = await response.json();
    if (!data || !Array.isArray(data.docs)) return [];

    return data.docs.map((doc: any) => {
      const author = doc.author_name?.length > 0
        ? doc.author_name.slice(0, 2).join(' & ')
        : 'Unknown Author';

      const year = doc.first_publish_year || new Date().getFullYear();
      const coverUrl = doc.cover_i
        ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
        : undefined;

      const genres = doc.subject?.length > 0
        ? doc.subject.slice(0, 3)
        : ['Literature'];

      return {
        id: doc.key || `ol-${Math.random().toString(36).substring(2, 9)}`,
        title: doc.title,
        author,
        year,
        coverUrl,
        genres,
        pages: doc.number_of_pages_median || 300,
        isbn: doc.isbn?.[0],
        key: doc.key,
      };
    });
  } catch (err: unknown) {
    if (err instanceof Error && err.name === 'AbortError') return [];
    console.warn('Open Library search failed, falling back gracefully:', err);
    throw err;
  }
}
