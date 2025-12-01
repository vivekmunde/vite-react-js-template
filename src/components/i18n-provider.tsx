import { isDevelopment } from '@/env';
import { useLanguage } from '@/hooks/use-language';
import { useLoggedInUser } from '@/hooks/use-logged-in-user';
import type { TLanguage } from '@/types/language';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import React, { useEffect, type PropsWithChildren } from 'react';
import { initReactI18next } from 'react-i18next';
import { PageLoading } from './ui/page-loading';

const supportedLanguages: TLanguage[] = ['en', 'nl'];
const defaultLanguage: TLanguage = 'en';

i18n
  // Use HTTP backend for loading translations
  .use(HttpBackend)
  // Use browser language detection
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    fallbackLng: defaultLanguage,
    defaultNS: 'error',
    ns: [],
    debug: isDevelopment,

    // Backend options for loading translations
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      requestOptions: {
        cache: 'default',
      },
    },

    interpolation: {
      escapeValue: false, // React already escapes by default
    },

    // Language detection options
    detection: {
      order: ['localStorage', 'path', 'htmlTag', 'navigator'],
    },

    // React options
    react: {
      useSuspense: true,
    },

    // Available languages
    supportedLngs: supportedLanguages,
    load: 'languageOnly',
  });

const namespaces = [
  'auth',
  'common',
  'delete',
  'error',
  'no-result',
  'organizations',
  'permission',
  'revoke',
  'validation',
];

const I18nProvider: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    i18n.loadNamespaces(namespaces);
  }, []);

  if (!i18n.isInitialized) {
    return <PageLoading />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

const UserLanguageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [, setLanguage] = useLanguage();
  const { data: user } = useLoggedInUser();
  const preferences = user?.preferences;

  useEffect(() => {
    if (preferences?.language) {
      setLanguage(preferences.language);
    }

    i18n.loadNamespaces(namespaces);
  }, [preferences?.language]);

  return <React.Fragment>{children}</React.Fragment>;
};

export { I18nProvider, UserLanguageProvider };
