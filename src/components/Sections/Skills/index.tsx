import style from "./style.module.scss";

import { useTranslation } from "react-i18next";

import ProgressCircle from "./ProgressCircle";

const SectionSkills = () => {
const { t: translate  } = useTranslation("skills");

  const skillProgress = [
    {
      title: translate("sections.backend"),
      value: 85,
      technologies: [
        "Node.js", "Express.js", "TypeORM",
        "Python", "FastApi", "SQLAlchemy", "Alembic",
        "SAP CAP for Node.js",
      ],
    },
    {
      title: translate("sections.frontend"),
      value: 80,
      technologies: ["React", "Vite", "Redux", "TypeScript", "ECMA6", "Javascript", "SAP UI5", "jQuery"],
    },
    {
      title: translate("sections.databases"),
      value: 85,
      technologies: [
        "PostgreSQL",
        "MSSQL (T-SQL)",
        "MongoDB",
        "MySQL",
        "SAP HANA",
        "Redis",
        "InfluxDB",
      ],
    },
    {
      title: translate("sections.testing"),
      value: 75,
      technologies: [
        "Unit", "Integration", "E2E", "Coverage", "TDD",
        "Jest",
        "Mocha",
        "Chai",
        "Pytest",
        "Postman",
        "Apache Jmeter",
        "SonarQube"
      ],
    },
    {
      title: translate("sections.integrations"),
      value: 65,
      technologies: [
        "RTLS",
        "SCADA",
        "OPC-servers",
        "Azure",
        "MS Entra B2B",
        "MS Graph API",
        "AWS S3Bucket",
      ],
    },
    {
      title: translate("sections.other"),
      value: 50,
      technologies: [
        "Git",
        "Bash",
        "Docker",
        "Kafka",
        "ElasticSearch",
        "Grafana", "Kibana",
        "Swagger/OpenAPI",
        "Jira",
        "Confluence",
      ],
    },
  ];

  return (
    <div>
    <div className="row">
      {/* <div>Hover card to see more</div> */}
    </div>
    <div className="row">
      {skillProgress.map((item) => (
        <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
          <div className={style.flip_card_wrapper}>
            <div className={style.flip_card}>
              <h2>{item.title}</h2>
              <div className={style.flip_card_inner}>
                <div className={style.flip_card_front}>
                  <ProgressCircle title={""} value={item.value} />
                </div>
                <div className={style.flip_card_back}>
                  <div className={style.flip_card_badge_wrapper}>
                    {item.technologies.map((tech, index) => (
                      <span className={style.filp_card_badge} key={index}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
    </div>

    </div>
  );
};

export default SectionSkills;
