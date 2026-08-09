'use client';

import { useTranslation } from '../../contexts/LanguageContext';
import { useEffect, useState } from 'react';
import { LocalRepo } from '../../types/repo';
import { NovelCard } from './NovelCard';
import { ImportSection } from './ImportSection';
import { RepositorySection } from './RepositorySection';
import {
  fetchRepoIndex,
  syncRepository,
  getLatestNovels,
} from '../../lib/discover';
import { AddRepositoryDialog } from './AddRepositoryDialog';
import { NovelStorage } from '../../lib/storage';
import type { Novel, View } from '../../types';

interface DiscoverViewProps {
  onViewChange: (view: View) => void;
}

type Feedback = {
  type: 'success' | 'error';
  message: string;
};

export function DiscoverView({ onViewChange }: DiscoverViewProps) {
  const { t } = useTranslation();
  const [repositories, setRepositories] = useState<LocalRepo[]>([]);
  const [showAddRepo, setShowAddRepo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        const repos = await NovelStorage.getAllRepositories();
        setRepositories(repos);
      } catch (error) {
        console.error('Failed to load repositories:', error);
        setFeedback({ type: 'error', message: t('discover.error.fetchFailed') });
      }
    };
    void loadRepositories();
  }, [t]);

  const handleAddRepository = async (url: string) => {
    if (!url) return;
    setFeedback(null);

    const existingRepo = repositories.find(repo => repo.url === url);
    if (existingRepo) {
      setFeedback({ type: 'error', message: t('discover.error.repoExists') });
      return;
    }

    setIsLoading(true);
    try {
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
      setRepositories(previousRepositories => [...previousRepositories, newRepo]);
      setShowAddRepo(false);
      setFeedback({ type: 'success', message: t('add.repoImported') });
    } catch (error) {
      console.error('Failed to add repository:', error);
      setFeedback({ type: 'error', message: t('discover.error.invalidRepo') });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveRepo = async (url: string) => {
    setFeedback(null);
    try {
      await NovelStorage.deleteRepository(url);
      setRepositories(previousRepositories => previousRepositories.filter(repo => repo.url !== url));
    } catch (error) {
      console.error('Failed to remove repository:', error);
      setFeedback({ type: 'error', message: t('discover.error.fetchFailed') });
    }
  };

  const handleSync = async (repoUrl: string) => {
    setIsLoading(true);
    setFeedback(null);
    try {
      const repo = repositories.find(repository => repository.url === repoUrl);
      if (!repo) return;

      const index = await syncRepository(repo);
      const updatedRepo: LocalRepo = {
        ...repo,
        meta: {
          ...repo.meta,
          name: index.name,
          lastUpdated: index.lastSync,
          novels: index.novels.length,
          updatedNovels: index.updatedNovels,
        },
        index,
        lastSync: new Date().toISOString(),
      };

      await NovelStorage.saveRepository(updatedRepo);
      setRepositories(previousRepositories =>
        previousRepositories.map(repository => repository.url === repoUrl ? updatedRepo : repository),
      );
    } catch (error) {
      console.error('Failed to sync repository:', error);
      setFeedback({ type: 'error', message: t('discover.error.fetchFailed') });
    } finally {
      setIsLoading(false);
    }
  };

  const handleImportComplete = (novel: Novel) => {
    setFeedback({
      type: 'success',
      message: t('discover.importComplete').replace('{title}', novel.title),
    });
  };

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-4xl space-y-8 px-4 py-6">
          {feedback && (
            <div
              role={feedback.type === 'error' ? 'alert' : 'status'}
              aria-live="polite"
              className={`rounded-lg border px-4 py-3 text-sm ${
                feedback.type === 'error'
                  ? 'border-red-200 bg-red-50 text-red-800 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200'
                  : 'border-green-200 bg-green-50 text-green-800 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-200'
              }`}
            >
              {feedback.message}
              {feedback.type === 'success' && (
                <button
                  type="button"
                  onClick={() => onViewChange('library')}
                  className="ml-3 font-semibold underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {t('common.library')}
                </button>
              )}
            </div>
          )}

          <ImportSection onImportComplete={handleImportComplete} />

          {repositories.length > 0 && (
            <section>
              <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-gray-100">
                {t('discover.latest')}
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {getLatestNovels(repositories).map(novel => (
                  <NovelCard key={novel.id} novel={novel} />
                ))}
              </div>
            </section>
          )}

          <RepositorySection
            repositories={repositories}
            onAddClick={() => setShowAddRepo(true)}
            onSync={handleSync}
            onRemove={handleRemoveRepo}
            onViewChange={onViewChange}
          />
        </div>
      </div>

      <AddRepositoryDialog
        isOpen={showAddRepo}
        isLoading={isLoading}
        onClose={() => setShowAddRepo(false)}
        onAdd={handleAddRepository}
      />
    </div>
  );
}
