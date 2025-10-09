import React from "react";
import style from "./style.module.scss";
import { useTranslation } from "react-i18next";

interface Language {
  code: string;
  label: string;
}

const languages: Language[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage || "en";

  const changeLanguage = (lang: string) => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <div className={style.section_switcher}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`link link-primary ${lang.code === currentLang ? "link-selected" : ""}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
