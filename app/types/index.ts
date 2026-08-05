/**
 * Type definitions for the Novel Reader application
 */

/**
 * Bookmark definition
 */
export interface Bookmark {
  offset: number;
  timestamp: number;
  note?: string;
}

export interface Novel {
  id: string;
  title: string;
  author?: string;
  source: 'local' | 'url';
  filepath?: string;
  url?: string;
  coverUrl?: string;
  lastRead: number;
  lastPosition: number;
  totalChapters?: number;
  description?: string;
  tags?: string[];
}

export type View = 'library' | 'discover' | 'reader' | 'settings' | 'search' | 'add';
