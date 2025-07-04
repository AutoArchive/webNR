import * as jschardet from 'jschardet';
import { TextDecoder } from 'text-encoding';
import { Novel } from '../types';
import { LocalRepo } from '../types/repo';

function generateUUID(): string {
    // Fallback UUID generator
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export class NovelStorage {
    private static readonly DB_NAME = 'NovelDB';
    private static readonly DB_VERSION = 1;
    private static readonly REPOS_STORE = 'repositories';
    private static readonly NOVELS_STORE = 'novels';
    private static readonly CONTENT_STORE = 'content';

    private static async getDB(): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);

            request.onupgradeneeded = (event) => {
                const db = (event.target as IDBOpenDBRequest).result;

                // Create novels store for metadata
                if (!db.objectStoreNames.contains(this.NOVELS_STORE)) {
                    db.createObjectStore(this.NOVELS_STORE, { keyPath: 'id' });
                }

                // Create content store for novel content
                if (!db.objectStoreNames.contains(this.CONTENT_STORE)) {
                    db.createObjectStore(this.CONTENT_STORE, { keyPath: 'id' });
                }

                // Create repositories store
                if (!db.objectStoreNames.contains(this.REPOS_STORE)) {
                    db.createObjectStore(this.REPOS_STORE, { keyPath: 'url' });
                }
            };
        });
    }

    static async saveNovel(novel: Novel, content: string) {
        const db = await this.getDB();
        return new Promise<void>((resolve, reject) => {
            const transaction = db.transaction([this.NOVELS_STORE, this.CONTENT_STORE], 'readwrite');

            // Save novel metadata
            const novelsStore = transaction.objectStore(this.NOVELS_STORE);
            novelsStore.put(novel);

            // Save content
            const contentStore = transaction.objectStore(this.CONTENT_STORE);
            contentStore.put({
                id: novel.id,
                content: content
            });

            transaction.oncomplete = () => resolve();
            transaction.onerror = () => reject(transaction.error);
        });
    }

    static async getAllNovels(): Promise<Novel[]> {
        const db = await this.getDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.NOVELS_STORE, 'readonly');
            const store = transaction.objectStore(this.NOVELS_STORE);
            const request = store.getAll();

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    static async getNovelContent(novelId: string): Promise<string> {
        const db = await this.getDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.CONTENT_STORE, 'readonly');
            const store = transaction.objectStore(this.CONTENT_STORE);
            const request = store.get(novelId);

            request.onsuccess = () => resolve(request.result?.content || '');
            request.onerror = () => reject(request.error);
        });
    }

    static async updateNovelProgress(novelId: string, position: number) {
        const db = await this.getDB();
        return new Promise<void>((resolve, reject) => {
            const transaction = db.transaction(this.NOVELS_STORE, 'readwrite');
            const store = transaction.objectStore(this.NOVELS_STORE);

            const getRequest = store.get(novelId);
            getRequest.onsuccess = () => {
                const novel = getRequest.result;
                if (novel) {
                    novel.lastPosition = position;
                    novel.lastRead = Date.now();
                    store.put(novel);
                }
            };

            transaction.oncomplete = () => resolve();
            transaction.onerror = () => reject(transaction.error);
        });
    }

    static async deleteNovel(novelId: string) {
        const db = await this.getDB();
        return new Promise<void>((resolve, reject) => {
            const transaction = db.transaction([this.NOVELS_STORE, this.CONTENT_STORE], 'readwrite');

            // Delete novel metadata
            transaction.objectStore(this.NOVELS_STORE).delete(novelId);
            // Delete content
            transaction.objectStore(this.CONTENT_STORE).delete(novelId);

            transaction.oncomplete = () => resolve();
            transaction.onerror = () => reject(transaction.error);
        });
    }

    private static async detectAndDecodeText(buffer: ArrayBuffer): Promise<string> {
        // First try UTF-8
        try {
            const utf8Text = new TextDecoder('utf-8', { fatal: true }).decode(buffer);
            return utf8Text;
        } catch {
            // If UTF-8 fails, detect encoding
            const uint8Array = new Uint8Array(buffer);
            const result = jschardet.detect(Buffer.from(uint8Array));

            if (!result.encoding) {
                throw new Error('Could not detect file encoding');
            }

            // Common encoding aliases
            const encodingMap: { [key: string]: string } = {
                'ascii': 'windows-1252',
                'iso-8859-1': 'windows-1252',
                'windows-1252': 'windows-1252',
                'gb2312': 'gb18030',
                'gbk': 'gb18030',
                'big5': 'big5',
                'euc-jp': 'euc-jp',
                'shift-jis': 'shift-jis',
                'euc-kr': 'euc-kr',
            };

            const encoding = encodingMap[result.encoding.toLowerCase()] || result.encoding;

            try {
                return new TextDecoder(encoding).decode(buffer);
            } catch (decodeError) {
                console.error('Failed to decode with detected encoding:', encoding, decodeError);
                // Fallback to UTF-8 without fatal flag as last resort
                return new TextDecoder('utf-8').decode(buffer);
            }
        }
    }

    static async importFromFile(file: File): Promise<Novel> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = async (event) => {
                try {
                    const buffer = event.target?.result as ArrayBuffer;
                    if (!buffer) {
                        throw new Error('Failed to read file content');
                    }

                    const content = await this.detectAndDecodeText(buffer);

                    const novel: Novel = {
                        id: generateUUID(),
                        title: file.name.replace(/\.[^/.]+$/, ''), // Remove file extension
                        source: 'local',
                        filepath: file.name,
                        lastRead: Date.now(),
                        lastPosition: 0,
                        bookmarks: [],
                        chapters: [],
                    };

                    await this.saveNovel(novel, content);
                    resolve(novel);
                } catch (error) {
                    reject(error);
                }
            };

            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsArrayBuffer(file); // Read as ArrayBuffer instead of text
        });
    }

    static async importFromUrl(url: string, signal?: AbortSignal): Promise<Novel> {
        const response = await fetch(url, { signal });
        if (!response.ok) {
            throw new Error('Failed to fetch novel content');
        }

        const content = await response.text();
        const encodedFilename = url.split('/').pop() || 'Unknown';
        const decodedFilename = decodeURIComponent(encodedFilename);
        const novel: Novel = {
            id: generateUUID(),
            title: decodedFilename.replace(/\.[^/.]+$/, ''),
            source: 'url',
            url,
            lastRead: Date.now(),
            lastPosition: 0,
            bookmarks: [],
            chapters: [],
        };

        await this.saveNovel(novel, content);
        return novel;
    }

    static async findNovelByUrl(url: string): Promise<Novel | undefined> {
        const novels = await this.getAllNovels();
        return novels.find(novel => novel.url === url);
    }

    static async saveRepository(repo: LocalRepo): Promise<void> {
        const db = await this.getDB();
        return new Promise<void>((resolve, reject) => {
            const transaction = db.transaction(this.REPOS_STORE, 'readwrite');
            const store = transaction.objectStore(this.REPOS_STORE);
            store.put(repo);

            transaction.oncomplete = () => resolve();
            transaction.onerror = () => reject(transaction.error);
        });
    }

    static async getAllRepositories(): Promise<LocalRepo[]> {
        const db = await this.getDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.REPOS_STORE, 'readonly');
            const store = transaction.objectStore(this.REPOS_STORE);
            const request = store.getAll();

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    static async deleteRepository(url: string): Promise<void> {
        const db = await this.getDB();
        return new Promise<void>((resolve, reject) => {
            const transaction = db.transaction(this.REPOS_STORE, 'readwrite');
            const store = transaction.objectStore(this.REPOS_STORE);
            store.delete(url);

            transaction.oncomplete = () => resolve();
            transaction.onerror = () => reject(transaction.error);
        });
    }

    static async exportNovelAsTxt(novelId: string): Promise<void> {
        const db = await this.getDB();
        
        // Get novel metadata
        const novel = await new Promise<Novel>((resolve, reject) => {
            const transaction = db.transaction(this.NOVELS_STORE, 'readonly');
            const store = transaction.objectStore(this.NOVELS_STORE);
            const request = store.get(novelId);
            
            request.onsuccess = () => {
                if (request.result) {
                    resolve(request.result);
                } else {
                    reject(new Error('Novel not found'));
                }
            };
            request.onerror = () => reject(request.error);
        });

        // Get novel content
        const content = await this.getNovelContent(novelId);
        
        // Create and download the file
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `${novel.title}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}
