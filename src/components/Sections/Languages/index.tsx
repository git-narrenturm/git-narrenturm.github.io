import style from "./style.module.scss";

import { useTranslation } from "react-i18next";

type Languages = {
  title: string;
  level: string;
  dataLabel: string;
};

const SectionLanguages = () => {
  const { t: translate } = useTranslation("languages");
  const list = translate("languages", {
    returnObjects: true,
  }) as Array<Languages>;

  return (
    <div className="row">
      {list.map((item) => (
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div className={style.section_box} data-label={item.dataLabel}>
            <div className={style.section_box_details}>
              <h2>{item.title}</h2>
              <h4>{item.level}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionLanguages;
