import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    ns: ["app", "about", "workingExperience", "languages", "skills", "social"],
    defaultNS: "app",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["path"],
      lookupFromPathIndex: 1,
      caches: [],
    },
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });

export default i18n;
