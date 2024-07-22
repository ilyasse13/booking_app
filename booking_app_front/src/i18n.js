import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import LanguageDetector from 'i18next-browser_languagedetector';
import fr from './locales/fr';
import en from './locales/en';
import es from './locales/es';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources : {
  en: {
    translation: en
  },
  fr: {
    translation: fr
  },
  es: {
    translation: es
  }
},
fallbackLng: 'en', // fallback language if the current language does not have the translation
debug:true,
interpolation: {
  escapeValue: false // react already safes from xss
}

  })
 



export default i18n;
