import React from "react";
import style from "./style.module.scss";
import { useTranslation } from "react-i18next";

const clamp = (num: number, min: number, max: number): number =>
  Math.min(Math.max(num, min), max);

interface ProgressCircleProps {
  title: string;
  value?: number;
  size?: number;
  thickness?: number;
  color?: string;
  trackColor?: string;
  bgColor?: string;
  duration?: number;
  showPercentage?: boolean;
}


const ProgressCircle: React.FC<ProgressCircleProps> = ({
  title,
  value = 0,
  size = 150,
  thickness = 12,
  color = "var(--bg-highlight)",
  trackColor = "var(--bg-muted)",
  bgColor = "var(--bg-white)",
  duration = 800,
  showPercentage = true,
}) => {

const { t: translate  } = useTranslation("skills");

const getExpertiseLevel = (value: number): string => {
  if (value <= 20) return translate("level.novice");
  if (value <= 40) return translate("level.begginer");
  if (value <= 60) return translate("level.competent");
  if (value <= 80) return translate("level.proficient");
  return translate("level.expert");
};

  const pct = clamp(value, 0, 100);
  const level = getExpertiseLevel(pct);

  return (
    <div className={style.progress_circle_wrapper}>
      <div
        className={style.progress_circle}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        style={
          {
            "--pct": pct,
            "--size": `${size}px`,
            "--thickness": `${thickness}px`,
            "--color": color,
            "--track": trackColor,
            "--bg": bgColor,
            "--transition": `${duration}ms`,
          } as React.CSSProperties
        }
      >
        {showPercentage && (
          <div className={style.progress_circle_value}>
            <span>{level}</span>
          </div>
        )}
      </div>
      <span className={style.progress_circle_title}>{title}</span>
    </div>
  );
};

export default ProgressCircle;
