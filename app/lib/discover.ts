import { NovelMeta, LocalRepo, RepoIndex, YamlNovelSearchIndex, SearchResult } from '../types/repo';
import yaml from 'js-yaml';

const MAX_REPOSITORY_INDEX_BYTES = 5 * 1024 * 1024;

function resolveHttpUrl(value: string | undefined, baseUrl: string): string | undefined {
  if (!value) return undefined;

  try {
    const resolved = new URL(value, baseUrl);
    if (!['http:', 'https:'].includes(resolved.protocol)) return undefined;
    return resolved.toString();
  } catch {
    return undefined;
  }
}

function asNonEmptyString(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed || undefined;
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];

  return Array.from(new Set(
    value
      .map(asNonEmptyString)
      .filter((item): item is string => Boolean(item)),
  ));
}

function asNonNegativeNumber(value: unknown): number | undefined {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0
    ? value
    : undefined;
}

function asNonNegativeInteger(value: unknown): number | undefined {
  const number = asNonNegativeNumber(value);
  return number === undefined ? undefined : Math.floor(number);
}

async function readResponseTextWithLimit(response: Response): Promise<string> {
  const contentLength = Number(response.headers.get('content-length'));
  if (Number.isFinite(contentLength) && contentLength > MAX_REPOSITORY_INDEX_BYTES) {
    throw new Error('Repository index is too large');
  }

  if (!response.body) {
    throw new Error('Repository index response has no readable body');
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let totalBytes = 0;
  let yamlText = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (!value) continue;

      totalBytes += value.byteLength;
      if (totalBytes > MAX_REPOSITORY_INDEX_BYTES) {
        await reader.cancel();
        throw new Error('Repository index is too large');
      }
      yamlText += decoder.decode(value, { stream: true });
    }
    yamlText += decoder.decode();
    return yamlText;
  } finally {
    reader.releaseLock();
  }
}

function timestamp(value?: string): number {
  if (!value) return 0;
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function siblingPath(entryPath: string, filename: string): string {
  const slash = entryPath.lastIndexOf('/');
  return slash >= 0 ? `${entryPath.slice(0, slash + 1)}${filename}` : filename;
}

// Repository management functions
export async function fetchRepoIndex(url: string): Promise<RepoIndex> {
  try {
    const suppliedUrl = new URL(url);
    if (!['http:', 'https:'].includes(suppliedUrl.protocol)) {
      throw new Error('Unsupported repository protocol');
    }

    const indexUrl = suppliedUrl.pathname.endsWith('/search_index.yml')
      ? suppliedUrl
      : new URL('search_index.yml', `${suppliedUrl.toString().replace(/\/?$/, '/')}`);

    const response = await fetch(indexUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch index: ${response.statusText}`);
    }

    const yamlText = await readResponseTextWithLimit(response);
    const loaded = yaml.load(yamlText);
    if (!loaded || Array.isArray(loaded) || typeof loaded !== 'object') {
      throw new Error('Repository index must be a YAML mapping');
    }
    const yamlData = loaded as Record<string, YamlNovelSearchIndex>;

    const categorySet = new Set<string>();
    const tagSet = new Set<string>();
    const processedPaths = new Set<string>();
    const novels: NovelMeta[] = [];
    const repositoryBaseUrl = new URL('.', indexUrl).toString();

    for (const [path, data] of Object.entries(yamlData)) {
      if (!data || typeof data !== 'object' || Array.isArray(data)) continue;
      if (processedPaths.has(path)) continue;
      processedPaths.add(path);

      const entry = data as Record<string, unknown>;
      const filename = asNonEmptyString(entry.filename);
      if (filename && !filename.toLowerCase().endsWith('.txt')) continue;

      const categories = asStringArray(entry.categories);
      const tags = asStringArray(entry.tags);
      categories.forEach(category => categorySet.add(category));
      tags.forEach(tag => tagSet.add(tag));

      const title = asNonEmptyString(entry.title)
        || filename?.replace(/\.[^/.]+$/, '')
        || path.split('/').pop()?.replace(/\.[^/.]+$/, '')
        || 'Untitled';

      const fallbackPagePath = path.replace(/\.md$/, '');
      const pageUrl = resolveHttpUrl(asNonEmptyString(entry.page_url), repositoryBaseUrl)
        || resolveHttpUrl(fallbackPagePath, repositoryBaseUrl)
        || repositoryBaseUrl;

      const fallbackDownloadUrl = filename
        ? resolveHttpUrl(siblingPath(path, filename), repositoryBaseUrl)
        : undefined;
      const downloadUrl = resolveHttpUrl(asNonEmptyString(entry.download_url), repositoryBaseUrl)
        || fallbackDownloadUrl;

      novels.push({
        id: path,
        title,
        author: asNonEmptyString(entry.author) || 'Unknown',
        description: asNonEmptyString(entry.description) || '',
        cover: null,
        tags,
        categories,
        chapters: asNonNegativeInteger(entry.chapters) || 0,
        date: asNonEmptyString(entry.date) || '',
        lastUpdated: asNonEmptyString(entry['archived date'])
          || asNonEmptyString(entry.lastUpdated)
          || '',
        size: asNonNegativeNumber(entry.size),
        region: asNonEmptyString(entry.region),
        pageUrl,
        downloadUrl,
      });
    }

    const repoName = indexUrl.hostname.split('.')[0];

    return {
      name: repoName,
      novels,
      updatedNovels: novels.length,
      lastSync: new Date().toISOString(),
      categories: Array.from(categorySet),
      tags: Array.from(tagSet),
    };
  } catch (error) {
    console.error('Error fetching repo index:', error);
    throw new Error('Failed to fetch repository data');
  }
}

export async function syncRepository(repo: LocalRepo): Promise<RepoIndex> {
  return fetchRepoIndex(repo.url);
}

// Search and filter functions
export function searchNovels(repositories: LocalRepo[], query: string, showAll: boolean = false): SearchResult[] {
  const searchTerms = query.toLowerCase().split(/\s+/);
  const results: SearchResult[] = [];
  const seenNovelIds = new Set<string>();

  for (const repo of repositories) {
    if (!repo.index?.novels) continue;

    for (const novel of repo.index.novels) {
      const novelId = `${novel.title}|${novel.author}`;
      if (seenNovelIds.has(novelId)) continue;

      if (showAll || searchTerms.every(term => {
        const title = novel.title.toLowerCase();
        const author = novel.author?.toLowerCase() || '';
        const description = novel.description?.toLowerCase() || '';
        return title.includes(term) || author.includes(term) || description.includes(term);
      })) {
        seenNovelIds.add(novelId);
        results.push({
          ...novel,
          repoUrl: repo.url,
          score: calculateRelevanceScore(novel, query),
        });
      }
    }
  }

  results.sort((a, b) => a.title.localeCompare(b.title));
  return results;
}

function calculateRelevanceScore(novel: NovelMeta, query: string): number {
  if (!query) return 1;

  const searchTerms = query.toLowerCase().split(/\s+/);
  let score = 0;

  searchTerms.forEach(term => {
    if (novel.title.toLowerCase().includes(term)) score += 3;
    if (novel.author?.toLowerCase().includes(term)) score += 2;
    if (novel.description?.toLowerCase().includes(term)) score += 1;
  });

  return score;
}

// Ranking and sorting functions
export function getPopularNovels(repositories: LocalRepo[], limit = 6): NovelMeta[] {
  return repositories
    .flatMap(repo => repo.index?.novels || [])
    .sort((a, b) => {
      const chapterDiff = (b.chapters || 0) - (a.chapters || 0);
      if (chapterDiff !== 0) return chapterDiff;
      const dateDiff = timestamp(b.date) - timestamp(a.date);
      return dateDiff !== 0 ? dateDiff : a.title.localeCompare(b.title);
    })
    .slice(0, limit);
}

export function getLatestNovels(repositories: LocalRepo[], limit = 5): NovelMeta[] {
  return repositories
    .flatMap(repo => repo.index?.novels || [])
    .sort((a, b) => {
      const dateDiff = timestamp(b.lastUpdated) - timestamp(a.lastUpdated);
      return dateDiff !== 0 ? dateDiff : a.title.localeCompare(b.title);
    })
    .slice(0, limit);
}
