import style from "./style.module.scss";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

interface SectionTitleProps {
  subtitle ?: string;
  children: React.ReactNode;
}

interface SectionBodyProps {
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> & {
  Title: React.FC<SectionTitleProps>;
  Body: React.FC<SectionBodyProps>;
} = ({ children }) => {
  return <section className={style.section}>{children}</section>;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, children }) => {
  const text = typeof children === "string" ? children : String(children);

  return (
    <div className={style.section_title}>
  <div className={style.title_inner}>
    <h1>{text}</h1>
    {subtitle && <p className={style.subtitle}>{subtitle}</p>}
  </div>
</div>

  );
};

const SectionBody: React.FC<SectionBodyProps> = ({ children }) => {
  return <div className={style.section_body}>{children}</div>;
};

Section.Title = SectionTitle;
Section.Body = SectionBody;
