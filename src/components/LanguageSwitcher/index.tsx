import style from "./style.module.scss";

import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage || "en";

  return (
    <div className={style.section_switcher}>
      {languages.map((lang) => (
        <a
          key={lang.code}
          href={`/${lang.code}/`}
          className={`link-primary ${
            lang.code === currentLang ? `link-selected` : ``
          }`}
        >
          {lang.label}
        </a>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
