import style from "./style.module.scss";

import { useTranslation } from "react-i18next";

import logo_linkedin from "../../../assets/images/logo_linkedin.svg";
import logo_credly from "../../../assets/images/logo_credly.svg";
import logo_hh from "../../../assets/images/logo_hh.svg";
import logo_github from "../../../assets/images/logo_github.svg";

const SectionSocial = () => {
  const logos = [
    {
      link: "https://www.linkedin.com/in/jelena-rassohina",
      logo: logo_linkedin,
    },
    {
      link: "https://nn.hh.ru/resume/9ffc2a9fff0f81a86c0039ed1f425733346a51",
      logo: logo_hh,
    },
    {
      link: "https://www.credly.com/users/jelena-rassohina/badges#credly",
      logo: logo_credly,
    },
    { link: "https://github.com/git-narrenturm", logo: logo_github },
  ];

  const { t: translate } = useTranslation("social");

  return (
    <div className={`row ${style.social_wrapper}`}>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className={`row ${style.logo_wrapper}`}>
          {logos.map((item) => {
            return (
              <div
                className={`col-lg-3 col-md-6 col-sm-3 col-xs-6 ${style.logo_badge}`}
              >
                <a href={item.link} target="_blank">
                  <img src={item.logo} className={style.logo_image} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="prt_profile_details">
          <p>{translate("description")}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionSocial;
