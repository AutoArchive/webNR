'use client';

import React, { useRef, useState } from 'react';
import { NovelStorage } from '../lib/storage';
import { Novel } from '../types';
import { LoadingDialog } from './LoadingDialog';
import { LegadoCompatibilityInspector } from './LegadoCompatibilityInspector';
import { useTranslation } from '../contexts/LanguageContext';

interface AddViewProps {
    onImportComplete: (novel: Novel) => void;
}

export const AddView: React.FC<AddViewProps> = ({ onImportComplete }) => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [urlValue, setUrlValue] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (!file.name.toLowerCase().endsWith('.txt')) {
            setError('WebNR currently supports local TXT files. EPUB support is not available yet.');
            event.target.value = '';
            return;
        }

        setIsLoading(true);
        setLoadingMessage(t('add.loading').replace('{filename}', file.name));
        setError(null);

        try {
            const novel = await NovelStorage.importFromFile(file);
            onImportComplete(novel);
        } catch (importError) {
            setError(t('add.error.import'));
            console.error('Import error:', importError);
        } finally {
            setIsLoading(false);
            setLoadingMessage('');
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    const handleUrlImport = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);

        try {
            const url = new URL(urlValue.trim());
            if (!['http:', 'https:'].includes(url.protocol)) {
                throw new Error('Unsupported protocol');
            }
            window.location.assign(`/?add=${encodeURIComponent(url.toString())}`);
        } catch {
            setError(t('discover.error.invalidRepo'));
        }
    };

    return (
        <div className="h-full overflow-auto p-4">
            <div className="mx-auto max-w-xl space-y-6 py-4">
                <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800" aria-labelledby="local-file-heading">
                    <h2 id="local-file-heading" className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {t('add.uploadTitle')}
                    </h2>
                    <p id="file-help" className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        TXT files are decoded, processed, and stored in this browser. EPUB support is planned but is not available yet.
                    </p>
                    <label className="mt-4 block text-sm font-medium text-gray-800 dark:text-gray-200" htmlFor="novel-file">
                        {t('discover.localImport')}
                    </label>
                    <input
                        id="novel-file"
                        ref={fileInputRef}
                        type="file"
                        accept=".txt,text/plain"
                        aria-describedby="file-help"
                        onChange={event => { void handleFileUpload(event); }}
                        className="mt-2 block w-full rounded-lg text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:file:bg-blue-900/20 dark:file:text-blue-300 dark:hover:file:bg-blue-900/30"
                    />
                </section>

                <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800" aria-labelledby="url-import-heading">
                    <h2 id="url-import-heading" className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {t('add.urlTitle')}
                    </h2>
                    <form className="mt-4 space-y-4" onSubmit={handleUrlImport}>
                        <label className="block text-sm font-medium text-gray-800 dark:text-gray-200" htmlFor="novel-url">
                            {t('add.urlTitle')}
                        </label>
                        <input
                            id="novel-url"
                            type="url"
                            inputMode="url"
                            autoComplete="url"
                            required
                            value={urlValue}
                            onChange={event => setUrlValue(event.target.value)}
                            placeholder={t('add.urlPlaceholder')}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-400"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !urlValue.trim()}
                            className="min-h-11 w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 dark:focus:ring-offset-gray-800 dark:disabled:bg-gray-700 dark:disabled:text-gray-400"
                        >
                            {t('add.import')}
                        </button>
                    </form>
                </section>

                <LegadoCompatibilityInspector />

                {error && (
                    <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200">
                        {error}
                    </div>
                )}

                {isLoading && (
                    <LoadingDialog
                        message={loadingMessage}
                        onCancel={() => setIsLoading(false)}
                    />
                )}
            </div>
        </div>
    );
};
