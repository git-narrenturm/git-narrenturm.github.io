import { useTranslation } from "react-i18next";

import style from "./style.module.scss";

type ExpertiseItem = {
  title: string;
  description: string;
};

const SectionAbout = () => {
  const { t } = useTranslation("about");
  const expertise = t("expertise", { returnObjects: true }) as ExpertiseItem[];

  return (
    <div className="row">
      <div className="col-12">
        <div className={style.section}>
          <p className={style.intro}>{t("intro")}</p>
          <ul className={style.section_list}>
            {expertise.map(({ title, description }) => (
              <li key={title}>
                <strong>{title}:</strong> {description}
              </li>
            ))}
          </ul>
          <p className={style.languages}>
            <strong>{t("languagesLabel")}:</strong> {t("languages")}
          </p>
          <a href={t("buttons.download.link")} download={t("buttons.download.filename")} className="btn-primary">
            {t("buttons.download.title")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
