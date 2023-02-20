import React from "react";

interface ProgressProps {
  max: number;
  value: number;
  progressColor?: string;
  backgroundColor?: string;
  className?: string;
  height?: number;
}
const Progress = ({
  max,
  value,
  progressColor = "bg-secondary",
  backgroundColor = "bg-neutral-100",
  className,
  height,
}: ProgressProps) => {
  let valueInPercent = (value / max) * 100;
  const h = height ? `h-[${height}]px` : "h-2";
  return (
    <div className={`w-full ${backgroundColor} ${h} md:h-4 ${className}`}>
      <div
        className={`${progressColor} ${h} md:h-4 ${className}`}
        style={{
          width: `${valueInPercent}%`,
        }}
      ></div>
    </div>
  );
};

export default Progress;
