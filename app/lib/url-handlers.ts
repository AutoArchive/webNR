import { Novel } from '../types';
import { LocalRepo } from '../types/repo';
import { NovelStorage } from './storage';
import { fetchRepoIndex, syncRepository } from './discover';

type TranslationParams = Record<string, string | number>;
type FeedbackType = 'success' | 'error';
type FeedbackHandler = (message: string, type: FeedbackType) => void;

export async function handleUrlImport(
  url: string,
  options: {
    onLoading: (isLoading: boolean) => void;
    onLoadingMessage: (message: string) => void;
    onNovelSelect: (novel: Novel) => void;
    onFeedback?: FeedbackHandler;
    t: (key: string, params?: TranslationParams) => string;
  },
): Promise<void> {
  const { onLoading, onLoadingMessage, onNovelSelect, onFeedback, t } = options;

  try {
    const parsedUrl = new URL(url);
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      throw new Error('Unsupported URL protocol');
    }

    const existingNovel = await NovelStorage.findNovelByUrl(parsedUrl.toString());
    if (existingNovel) {
      onNovelSelect(existingNovel);
      return;
    }

    onLoading(true);
    onLoadingMessage(t('add.loadingUrl'));

    const novel = await NovelStorage.importFromUrl(parsedUrl.toString());
    onNovelSelect(novel);
  } catch (error) {
    console.error('Failed to import novel from URL:', error);
    onFeedback?.(t('add.error.url'), 'error');
  } finally {
    onLoading(false);
    onLoadingMessage('');
  }
}

export async function handleRepoImport(
  repoUrls: string[],
  options: {
    repositories: LocalRepo[];
    onLoading: (isLoading: boolean) => void;
    onLoadingMessage: (message: string) => void;
    onRepositoriesChange: (repos: LocalRepo[]) => void;
    onViewChange: (view: 'discover') => void;
    onFeedback?: FeedbackHandler;
    t: (key: string, params?: TranslationParams) => string;
  },
): Promise<void> {
  const {
    repositories,
    onLoading,
    onLoadingMessage,
    onRepositoriesChange,
    onViewChange,
    onFeedback,
    t,
  } = options;

  onLoading(true);
  onLoadingMessage(t('discover.addRepoButton'));

  let updatedRepositories = [...repositories];
  let hasChanges = false;
  let failureCount = 0;

  try {
    for (const rawUrl of repoUrls) {
      try {
        const parsedUrl = new URL(rawUrl.trim());
        if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
          throw new Error('Unsupported repository protocol');
        }
        const url = parsedUrl.toString();
        const existingRepo = updatedRepositories.find(repository => repository.url === url);

        if (existingRepo) {
          const index = await syncRepository(existingRepo);
          const refreshedRepo: LocalRepo = {
            ...existingRepo,
            index,
            lastSync: new Date().toISOString(),
          };
          await NovelStorage.saveRepository(refreshedRepo);
          updatedRepositories = updatedRepositories.map(repository =>
            repository.url === url ? refreshedRepo : repository,
          );
        } else {
          const repoData = await fetchRepoIndex(url);
          const newRepo: LocalRepo = {
            url,
            meta: {
              name: repoData.name,
              description: '',
              url,
              lastUpdated: repoData.lastSync,
              novels: repoData.novels.length,
              updatedNovels: repoData.updatedNovels,
            },
            lastSync: new Date().toISOString(),
            index: repoData,
          };

          await NovelStorage.saveRepository(newRepo);
          updatedRepositories = [...updatedRepositories, newRepo];
        }
        hasChanges = true;
      } catch (error) {
        failureCount += 1;
        console.error(`Failed to import repository ${rawUrl}:`, error);
      }
    }

    if (hasChanges) {
      onRepositoriesChange(updatedRepositories);
      onFeedback?.(t('add.repoImported'), 'success');
      onViewChange('discover');
    }
    if (failureCount > 0) {
      onFeedback?.(t('discover.error.invalidRepo'), 'error');
    }
  } catch (error) {
    console.error('Failed to handle repositories:', error);
    onFeedback?.(t('discover.error.invalidRepo'), 'error');
  } finally {
    onLoading(false);
    onLoadingMessage('');
  }
}
