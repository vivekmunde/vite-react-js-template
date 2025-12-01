import type { TLanguage } from '@/types/language';
import { createPublication, publish, subscribe } from 'pusu';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languagePublication = createPublication<TLanguage>({ name: 'language' });

const useLanguage = (): [TLanguage, (language: TLanguage) => void] => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: TLanguage) => {
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
  };

  useEffect(() => {
    const unsubscribe = subscribe(languagePublication, language => {
      changeLanguage(language);
    });

    return () => unsubscribe();
  }, []);

  return [
    i18n.language as TLanguage,
    (language: TLanguage) => {
      publish(languagePublication, language);
    },
  ];
};

export { useLanguage };
