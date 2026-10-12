import { useTranslation } from "react-i18next";

import style from "./style.module.scss";

type WorkingExperienceItem = {
  title: string;
  company: string;
  city: string;
  startDate: string;
  endDate: string | null;
  technologies: string[];
  responsibilities?: string[];
  roleDescription?: string;
  achievements: string[];
};

const formatMonth = (date: string, locale: string) => {
  const [year, month] = date.split("-").map(Number);
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(new Date(year, month - 1, 1));
};

const SectionWorkingExperience = () => {
  const { t, i18n } = useTranslation("workingExperience");
  const experience = t("workingExperience", {
    returnObjects: true,
  }) as WorkingExperienceItem[];
  const locale = i18n.resolvedLanguage?.startsWith("ru") ? "ru-RU" : "en-US";

  return (
    <div className={style.experience_list}>
      {experience.map((item) => (
        <article className={style.experience_item} key={`${item.company}-${item.startDate}`}>
          <p className={style.period}>
            {formatMonth(item.startDate, locale)} — {item.endDate
              ? formatMonth(item.endDate, locale)
              : t("labels.present")}
          </p>
          <header className={style.experience_header}>
            <h2>{item.title}</h2>
            <p className={style.company}>
              {item.company}, {item.city}
            </p>
          </header>

          <div className={style.experience_content}>
            {item.responsibilities && (
              <>
                <h3>{t("labels.responsibilities")}</h3>
                <ul>
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </>
            )}

            {item.roleDescription && (
              <>
                <h3>{t("labels.roleDescription")}</h3>
                <p>{item.roleDescription}</p>
              </>
            )}

            <h3>{t("labels.achievements")}</h3>
            <ul>
              {item.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>

          <div className={style.technology_section}>
            <h3>{t("labels.technologies")}</h3>
            <div className={style.technology_list}>
              {item.technologies.map((technology) => (
                <span className={style.technology_badge} key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default SectionWorkingExperience;
