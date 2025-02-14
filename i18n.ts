import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import ptBr from './locales/pt-br.json';

const options = {
  order: [
    'querystring',
    'cookie',
    'localStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  caches: ['localStorage', 'cookie'],
};

const importAll = async () => {
  const modules = import.meta.glob('./locales/*.json');
  const resources: { [key: string]: { translation: Record<string, string> } } =
    {};

  for (const path in modules) {
    const module = await modules[path]();
    const lang = (module as { language: string }).language;
    resources[lang] = {
      translation: (module as { default: Record<string, string> }).default,
    };
  }

  return resources;
};

const initializeI18n = async () => {
  const resources = await importAll();

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      detection: options,
      resources: {
        ...resources,
        pt: {
          translation: ptBr,
        },
      },
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });

  i18n.changeLanguage('en');
};

initializeI18n();

export default i18n;
