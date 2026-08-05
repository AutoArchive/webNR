'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getSystemLanguage } from '../lib/language';
import { translations } from './translations';

export type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

export const SUPPORTED_LANGUAGES = ['en', 'zh'] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

const normalizeLanguage = (language: string): SupportedLanguage => (
  SUPPORTED_LANGUAGES.includes(language as SupportedLanguage)
    ? language as SupportedLanguage
    : 'en'
);

const getStoredLanguage = (): SupportedLanguage | null => {
  if (typeof window === 'undefined') return null;
  const savedLanguage = localStorage.getItem('preferred-language');
  return savedLanguage ? normalizeLanguage(savedLanguage) : null;
};

const storeLanguage = (language: SupportedLanguage): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('preferred-language', language);
};

const createTranslator = (translationTable: Translations, language: SupportedLanguage) => {
  return (key: string): string => translationTable[language]?.[key] || translationTable.en?.[key] || key;
};

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: string;
}) => {
  const [language, setLanguage] = useState<SupportedLanguage>(normalizeLanguage(initialLang));

  useEffect(() => {
    const resolvedLanguage = getStoredLanguage() ?? normalizeLanguage(getSystemLanguage());
    setLanguage(resolvedLanguage);
    document.documentElement.lang = resolvedLanguage === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.dir = 'ltr';
    storeLanguage(resolvedLanguage);
  }, []);

  const handleSetLanguage = (newLanguage: string) => {
    const normalizedLanguage = normalizeLanguage(newLanguage);
    setLanguage(normalizedLanguage);
    document.documentElement.lang = normalizedLanguage === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.dir = 'ltr';
    storeLanguage(normalizedLanguage);
  };

  const t = createTranslator(translations, language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
