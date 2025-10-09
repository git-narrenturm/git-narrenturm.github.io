import style from "./style.module.scss";

import { useTranslation } from "react-i18next";

const SectionAbout = () => {
  const { t: translate } = useTranslation("about");
  const aboutList = translate("bio", {returnObjects: true}) as string[];

  return (
    <div className="row">
      <div className="col-12">
        <div className={style.section}>
          <p>
            <ul className={style.section_list}>
              {aboutList.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </p>
          {/* <a href={translate("buttons.download.link")} className="btn-primary">
            {translate("buttons.download.title")}
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
