import "./App.css";
import "./styles/main.scss";

import { useEffect } from "react";

import { useTranslation } from "react-i18next";

import { Section } from "./components/Section";

import SectionAbout from "./components/Sections/About";
import SectionLanguages from "./components/Sections/Languages";
import SectionWorkingExperience from "./components/Sections/WorkingExperience";
import SectionSkills from "./components/Sections/Skills";
import SectionSocial from "./components/Sections/Social";

import LanguageSwitcher from "./components/LanguageSwitcher";

const App = () => {
  const { t: translate } = useTranslation(["app"]);

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <LanguageSwitcher />
          </div>
        </div>
        <div className="row">
          <Section>
            <Section.Title subtitle={translate("section.0.subtitle")}>
              {translate("section.0.title")}
            </Section.Title>
            <Section.Body>
              <SectionAbout />
            </Section.Body>
          </Section>
          <Section>
            <Section.Title subtitle={translate("section.1.subtitle")}>
              {translate("section.1.title")}
            </Section.Title>
            <Section.Body>
              <SectionWorkingExperience />
            </Section.Body>
          </Section>
          <Section>
            <Section.Title subtitle={translate("section.2.subtitle")}>
              {translate("section.2.title")}
            </Section.Title>
            <Section.Body>
              <SectionSkills />
            </Section.Body>
          </Section>
          <Section>
            <Section.Title subtitle={translate("section.3.subtitle")}>
              {translate("section.3.title")}
            </Section.Title>
            <Section.Body>
              <SectionLanguages />
            </Section.Body>
          </Section>
          <Section>
            <Section.Title subtitle={translate("section.4.subtitle")}>
              {translate("section.4.title")}
            </Section.Title>
            <Section.Body>
              <SectionSocial />
            </Section.Body>
          </Section>
        </div>
      </div>
    </main>
  );
};

export default App;
