import style from "./style.module.scss";

import { useTranslation } from "react-i18next";

type SupportedLang = "en" | "ru";

type WorkingExperienceList = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  city: string;
  description: string;
  technologies: string[];
};

const SectionWorkingExperience = () => {
  const { t: translate, i18n } = useTranslation("workingExperience");
  const workingExperience = translate("workingExperience", {
    returnObjects: true,
  }) as Array<WorkingExperienceList>;

  const locale: Record<SupportedLang, string> = {
    en: "en-US",
    ru: "ru-RU",
  };

  const localeConfig: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };

  const currentLang = (i18n.resolvedLanguage as SupportedLang) || "en";
  const selectedLocale = locale[currentLang] || locale.en;

  return (
    <div className="row">
      <div className="col-12">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className={style.section}>
            <div className="row">
              {workingExperience.map((item, index) => {
                const startDate = new Date(item.startDate);
                const endDate = new Date(item.endDate);
                const year = startDate.getFullYear();

                const period = `${startDate.toLocaleDateString(
                  selectedLocale,
                  localeConfig
                )} - ${endDate.toLocaleDateString(
                  selectedLocale,
                  localeConfig
                )}`;

                return (
                  <div
                    className={`col-lg-6 col-md-12 col-sm-12 col-xs-12 ${
                      index % 2 === 0
                        ? ``
                        : `offset-lg-6 offset-md-6 offset-sm-0 offset-xs-0`
                    }`}
                  >
                    <div
                      className={
                        index % 2 === 0
                          ? style.section_box_left
                          : style.section_box_right
                      }
                    >
                      <div className={style.section_box_year}>
                        <h1>{year}</h1>
                        <p>{period}</p>
                      </div>
                      <div className={style.section_box_info}>
                        <h2>{item.title}</h2>
                        <span>
                          {item.company}, {item.city}
                        </span>
                        <p>{item.description}</p>
                        <div className={style.section_box_badge_list}>
                          {item.technologies.map((tech, index) => (
                            <span
                              className={style.section_box_badge}
                              key={index}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWorkingExperience;
