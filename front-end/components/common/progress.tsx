import React from "react";

interface ProgressProps {
  max: number;
  value: number;
  progressColor?: string;
  className?: string;
}
const Progress = ({
  max,
  value,
  progressColor = "bg-secondary",
  className,
}: ProgressProps) => {
  let valueInPercent = (value / max) * 100;
  return (
    <div className={`w-full bg-neutral-100 h-2 md:h-4 ${className}`}>
      <div
        className={`${progressColor} h-2 md:h-4`}
        style={{
          width: `${valueInPercent}%`,
        }}
      ></div>
    </div>
  );
};

export default Progress;
