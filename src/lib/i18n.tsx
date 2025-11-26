'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import ru from '@/locales/ru.json';
import en from '@/locales/en.json';
import ka from '@/locales/ka.json';

export type Locale = 'ru' | 'en' | 'ka';

type TranslationsType = typeof ru;

const translations: Record<Locale, TranslationsType> = {
  ru,
  en,
  ka,
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationsType;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ru');

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    if (savedLocale && translations[savedLocale]) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const value: I18nContextType = {
    locale,
    setLocale,
    t: translations[locale],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

export const localeNames: Record<Locale, string> = {
  ru: 'RU',
  en: 'EN',
  ka: 'KA',
};
