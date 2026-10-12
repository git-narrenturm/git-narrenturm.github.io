import { useTranslation } from "react-i18next";

import style from "./style.module.scss";

type TechnicalSkill = {
  category: string;
  technologies: string;
};

const SectionSkills = () => {
  const { t } = useTranslation("skills");
  const skills = t("items", { returnObjects: true }) as TechnicalSkill[];

  return (
    <ul className={style.skills_list}>
      {skills.map(({ category, technologies }) => (
        <li key={category}>
          <strong>{category}:</strong> {technologies}
        </li>
      ))}
    </ul>
  );
};

export default SectionSkills;
