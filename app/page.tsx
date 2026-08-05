'use client';

import { useCallback, useEffect, useState } from 'react';
import { Header } from './components/Header';
import type { HeaderButton } from './components/Header';
import { AddView } from './components/AddView';
import { LibraryView } from './components/library/LibraryView';
import { Reader } from './components/Reader';
import { SettingsView } from './components/SettingsView';
import { NovelStorage } from './lib/storage';
import { Novel } from './types';
import { useTranslation } from './contexts/LanguageContext';
import { LoadingDialog } from './components/LoadingDialog';
import { Footer } from './components/Footer';
import { DiscoverView } from './components/discover';
import { SearchView } from './components/search';
import { LocalRepo } from './types/repo';
import { handleUrlImport, handleRepoImport } from './lib/url-handlers';
import { SoundIcon } from './components/icons';
import { CONFIG } from '../config/constants';

type View = 'library' | 'reader' | 'settings' | 'discover' | 'search' | 'add';

const NAVIGABLE_VIEWS: View[] = ['library', 'settings', 'discover', 'search', 'add'];

export default function Home() {
  const { t } = useTranslation();
  const [currentView, setCurrentView] = useState<View>('library');
  const [currentNovel, setCurrentNovel] = useState<Novel | null>(null);
  const [content, setContent] = useState<string>('');
  const [currentOffset, setCurrentOffset] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [repositories, setRepositories] = useState<LocalRepo[]>([]);
  const [showReaderMenu, setShowReaderMenu] = useState(false);
  const [isTTSMode, setIsTTSMode] = useState(false);

  const handleNovelSelect = useCallback(async (novel: Novel) => {
    const novelContent = await NovelStorage.getNovelContent(novel.id);
    setCurrentNovel(novel);
    setContent(novelContent);
    setCurrentOffset(novel.lastPosition);
    setCurrentView('reader');
  }, []);

  useEffect(() => {
    const handleParams = () => {
      const params = new URLSearchParams(window.location.search);
      const addUrl = params.get('add');
      const addRepos = params.get('repos');
      const searchRepo = params.get('search');
      const requestedView = params.get('view') as View | null;

      if (requestedView && NAVIGABLE_VIEWS.includes(requestedView)) {
        setCurrentView(requestedView);
      }

      if (searchRepo) {
        setCurrentView('search');
      }

      if (addRepos) {
        const repoUrls = addRepos.split(',').filter(url => url.trim());
        if (repoUrls.length > 0) {
          handleRepoImport(repoUrls, {
            repositories,
            onLoading: setIsLoading,
            onLoadingMessage: setLoadingMessage,
            onRepositoriesChange: setRepositories,
            onViewChange: setCurrentView,
            t,
          });
          window.history.replaceState({}, '', window.location.pathname);
        }
      } else if (addUrl) {
        handleUrlImport(addUrl, {
          onLoading: setIsLoading,
          onLoadingMessage: setLoadingMessage,
          onNovelSelect: handleNovelSelect,
          t,
        });
        window.history.replaceState({}, '', window.location.pathname);
      }
    };

    window.addEventListener('popstate', handleParams);
    handleParams();

    return () => {
      window.removeEventListener('popstate', handleParams);
    };
  }, [handleNovelSelect, repositories, t]);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedDarkMode ? savedDarkMode === 'true' : systemPrefersDark;
    setIsDarkMode(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const handleDarkModeToggle = useCallback(() => {
    setIsDarkMode(previousValue => {
      const newValue = !previousValue;
      document.documentElement.classList.toggle('dark', newValue);
      localStorage.setItem('darkMode', newValue.toString());
      return newValue;
    });
  }, []);

  const handlePositionChange = useCallback((offset: number) => {
    setCurrentOffset(offset);
    if (currentNovel) {
      void NovelStorage.updateNovelProgress(currentNovel.id, offset);
    }
  }, [currentNovel]);

  const handleBackToLibrary = useCallback(() => {
    setCurrentNovel(null);
    setContent('');
    setCurrentOffset(0);
    setCurrentView('library');
  }, []);

  const getViewTitle = () => {
    switch (currentView) {
      case 'reader':
        return currentNovel?.title || t('reader.title');
      case 'settings':
        return t('common.settings');
      case 'discover':
        return t('common.discover');
      case 'search':
        return t('common.search');
      case 'add':
        return t('navigation.add');
      default:
        return t('library.title');
    }
  };

  const getBackAction = () => {
    if (currentView === 'library') return undefined;
    return handleBackToLibrary;
  };

  const handleNavigate = useCallback((view: View) => {
    if (currentView === 'reader' && view !== 'reader') {
      setCurrentNovel(null);
      setContent('');
      setCurrentOffset(0);
    }
    setCurrentView(view);
  }, [currentView]);

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        const repos = await NovelStorage.getAllRepositories();
        setRepositories(repos);
      } catch (error) {
        console.error('Failed to load repositories:', error);
      }
    };
    void loadRepositories();
  }, []);

  const getHeaderButtons = (): HeaderButton[] => {
    if (currentView === 'reader') {
      return [
        {
          icon: <SoundIcon />,
          onClick: () => setIsTTSMode(previousValue => !previousValue),
          ariaLabel: isTTSMode ? 'Disable text-to-speech' : 'Enable text-to-speech',
        },
        {
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ),
          onClick: () => setShowReaderMenu(true),
          ariaLabel: 'Open reader menu',
        },
      ];
    }

    if (currentView === 'library') {
      return [{
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        ),
        onClick: () => { window.location.href = CONFIG.HOME_PAGE; },
        ariaLabel: t('common.home'),
      }];
    }

    return [];
  };

  return (
    <div className="h-[100dvh] w-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="h-full flex flex-col">
        <Header
          title={getViewTitle()}
          buttons={getHeaderButtons()}
          onBackClick={getBackAction()}
        />

        <main className="flex-1 min-h-0" id="main-content">
          {currentView === 'library' && (
            <LibraryView
              onNovelSelect={handleNovelSelect}
              onAddNovel={() => setCurrentView('add')}
            />
          )}

          {currentView === 'add' && (
            <AddView onImportComplete={handleNovelSelect} />
          )}

          {currentView === 'reader' && currentNovel && (
            <div className="h-full flex relative">
              <div className="flex-1 min-w-0 h-full">
                <Reader
                  content={content}
                  currentOffset={currentOffset}
                  onPositionChange={handlePositionChange}
                  defaultConfig={{
                    fontSize: 20,
                    isPaged: false,
                  }}
                  showMenu={showReaderMenu}
                  onMenuClose={() => setShowReaderMenu(false)}
                  isTTSMode={isTTSMode}
                />
              </div>
            </div>
          )}

          {currentView === 'settings' && (
            <SettingsView
              isDarkMode={isDarkMode}
              onDarkModeToggle={handleDarkModeToggle}
            />
          )}

          {currentView === 'discover' && (
            <DiscoverView onViewChange={setCurrentView} />
          )}

          {currentView === 'search' && (
            <div className="h-full">
              <SearchView
                repositories={repositories}
                onSearching={() => {}}
                className="h-full"
              />
            </div>
          )}

          {isLoading && (
            <LoadingDialog
              message={loadingMessage}
              onCancel={() => setIsLoading(false)}
            />
          )}
        </main>

        {currentView !== 'reader' && (
          <Footer
            currentView={currentView}
            onNavigate={handleNavigate}
          />
        )}
      </div>
    </div>
  );
}
