'use client';

import React, { useEffect, useState } from 'react';
import { NovelStorage } from '../../lib/storage';
import { Novel } from '../../types';
import { LibraryControls } from './LibraryControls';
import { NovelListItem } from './NovelListItem';
import { useTranslation } from '../../contexts/LanguageContext';

interface LibraryViewProps {
    onNovelSelect: (novel: Novel) => void;
    onAddNovel: () => void;
}

export const LibraryView: React.FC<LibraryViewProps> = ({ onNovelSelect, onAddNovel }) => {
    const { t } = useTranslation();
    const [novels, setNovels] = useState<Novel[]>([]);
    const [sortBy, setSortBy] = useState<'title' | 'lastRead'>('lastRead');
    const [filterQuery, setFilterQuery] = useState('');
    const [selectedNovels, setSelectedNovels] = useState<Set<string>>(new Set());
    const [isSelectionMode, setIsSelectionMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [operationError, setOperationError] = useState<string | null>(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    useEffect(() => {
        const loadNovels = async () => {
            setIsLoading(true);
            setOperationError(null);
            try {
                const loadedNovels = await NovelStorage.getAllNovels();
                setNovels(loadedNovels);
            } catch (error) {
                console.error('Failed to load novels:', error);
                setOperationError('The local library could not be loaded. Reload the app and try again.');
            } finally {
                setIsLoading(false);
            }
        };
        void loadNovels();
    }, []);

    const sortedNovels = novels
        .filter(novel =>
            novel.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
            novel.author?.toLowerCase().includes(filterQuery.toLowerCase())
        )
        .sort((a, b) => {
            switch (sortBy) {
                case 'title':
                    return a.title.localeCompare(b.title);
                case 'lastRead':
                    return b.lastRead - a.lastRead;
                default:
                    return 0;
            }
        });

    const toggleNovelSelection = (novelId: string) => {
        setSelectedNovels(currentSelection => {
            const newSelection = new Set(currentSelection);
            if (newSelection.has(novelId)) {
                newSelection.delete(novelId);
            } else {
                newSelection.add(novelId);
            }
            return newSelection;
        });
    };

    const handleNovelClick = (novel: Novel) => {
        if (isSelectionMode) {
            toggleNovelSelection(novel.id);
        } else {
            onNovelSelect(novel);
        }
    };

    const confirmDeleteSelected = async () => {
        setOperationError(null);
        try {
            for (const novelId of selectedNovels) {
                await NovelStorage.deleteNovel(novelId);
            }
            setNovels(currentNovels => currentNovels.filter(novel => !selectedNovels.has(novel.id)));
            setSelectedNovels(new Set());
            setIsSelectionMode(false);
            setShowDeleteConfirmation(false);
        } catch (error) {
            console.error('Failed to delete novels:', error);
            setOperationError('The selected books could not be deleted. Please try again.');
        }
    };

    const handleExportSelected = async () => {
        setOperationError(null);
        try {
            for (const novelId of selectedNovels) {
                await NovelStorage.exportNovelAsTxt(novelId);
            }
            setSelectedNovels(new Set());
            setIsSelectionMode(false);
        } catch (error) {
            console.error('Failed to export novels:', error);
            setOperationError('The selected books could not be exported. Please try again.');
        }
    };

    const handleSelectionModeToggle = () => {
        setIsSelectionMode(previousValue => !previousValue);
        setSelectedNovels(new Set());
    };

    return (
        <div className="p-4 h-full overflow-auto">
            {operationError && (
                <div role="alert" className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200">
                    {operationError}
                </div>
            )}

            {novels.length > 0 ? (
                <>
                    <LibraryControls
                        filterQuery={filterQuery}
                        onFilterChange={setFilterQuery}
                        sortBy={sortBy}
                        onSortChange={setSortBy}
                        isSelectionMode={isSelectionMode}
                        selectedCount={selectedNovels.size}
                        onSelectionModeToggle={handleSelectionModeToggle}
                        onDeleteSelected={() => setShowDeleteConfirmation(true)}
                        onExportSelected={handleExportSelected}
                    />

                    <div className="space-y-2">
                        {sortedNovels.map(novel => (
                            <NovelListItem
                                key={novel.id}
                                novel={novel}
                                isSelectionMode={isSelectionMode}
                                isSelected={selectedNovels.has(novel.id)}
                                onSelect={toggleNovelSelection}
                                onClick={handleNovelClick}
                            />
                        ))}
                    </div>

                    {sortedNovels.length === 0 && (
                        <p className="py-12 text-center text-gray-500 dark:text-gray-400">
                            {t('discover.noResults')}
                        </p>
                    )}
                </>
            ) : (
                <section className="mx-auto flex min-h-full max-w-2xl items-center justify-center py-8" aria-labelledby="empty-library-title">
                    <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-10">
                        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300" aria-hidden="true">
                            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h1 id="empty-library-title" className="text-2xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-3xl">
                            {t('library.title')}
                        </h1>
                        <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
                            {t('settings.appDescription')}
                        </p>

                        <ul className="mt-6 grid gap-3 text-sm text-gray-700 dark:text-gray-200 sm:grid-cols-3">
                            <li className="rounded-lg bg-gray-50 p-3 dark:bg-gray-900/50">
                                <strong className="block text-gray-950 dark:text-white">TXT / EPUB</strong>
                                {t('discover.localImport')}
                            </li>
                            <li className="rounded-lg bg-gray-50 p-3 dark:bg-gray-900/50">
                                <strong className="block text-gray-950 dark:text-white">URL</strong>
                                {t('add.urlTitle')}
                            </li>
                            <li className="rounded-lg bg-gray-50 p-3 dark:bg-gray-900/50">
                                <strong className="block text-gray-950 dark:text-white">Privacy first</strong>
                                {t('settings.privacyDescription')}
                            </li>
                        </ul>

                        <button
                            type="button"
                            onClick={onAddNovel}
                            className="mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 sm:w-auto"
                        >
                            {t('library.import')}
                        </button>

                        {isLoading && (
                            <p role="status" className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                {t('dialog.loading')}
                            </p>
                        )}
                    </div>
                </section>
            )}

            {showDeleteConfirmation && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="presentation">
                    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-gray-800" role="alertdialog" aria-modal="true" aria-labelledby="delete-dialog-title">
                        <h2 id="delete-dialog-title" className="text-lg font-semibold text-gray-950 dark:text-white">
                            {t('library.delete')}
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                            Delete {selectedNovels.size} selected book{selectedNovels.size === 1 ? '' : 's'} from this browser? This cannot be undone.
                        </p>
                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setShowDeleteConfirmation(false)}
                                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-200 dark:hover:bg-gray-700"
                            >
                                {t('library.cancel')}
                            </button>
                            <button
                                type="button"
                                onClick={() => { void confirmDeleteSelected(); }}
                                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                {t('library.delete')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
