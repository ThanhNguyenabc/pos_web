import React from "react";
import { twMerge } from "tailwind-merge";

interface ProgressProps {
  max: number;
  value: number;
  progressColor?: string;
  backgroundColor?: string;
  className?: string;
}
const Progress = ({
  max,
  value,
  progressColor = "bg-primary",
  backgroundColor = "bg-neutral-100",
  className = "",
}: ProgressProps) => {
  let valueInPercent = (value / max) * 100;
  return (
    <div className={twMerge(`w-full h-2 ${backgroundColor} md:h-4`, className)}>
      <div
        className={twMerge(`h-2 ${progressColor} md:h-4`, className)}
        style={{
          width: `${valueInPercent}%`,
        }}
      ></div>
    </div>
  );
};

export default Progress;
