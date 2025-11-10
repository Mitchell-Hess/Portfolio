import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import all translation files
import en from './locales/en.json';
import zh from './locales/zh.json';
import es from './locales/es.json';
import hi from './locales/hi.json';
import fr from './locales/fr.json';
import ar from './locales/ar.json';
import pt from './locales/pt.json';
import ru from './locales/ru.json';
import ja from './locales/ja.json';
import de from './locales/de.json';

// Browser language detection
const getBrowserLanguage = (): string => {
  const browserLang = navigator.language.split('-')[0];
  const supportedLanguages = ['en', 'zh', 'es', 'hi', 'fr', 'ar', 'pt', 'ru', 'ja', 'de'];
  return supportedLanguages.includes(browserLang) ? browserLang : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
      es: { translation: es },
      hi: { translation: hi },
      fr: { translation: fr },
      ar: { translation: ar },
      pt: { translation: pt },
      ru: { translation: ru },
      ja: { translation: ja },
      de: { translation: de },
    },
    lng: localStorage.getItem('language') || getBrowserLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
