import React from "react";
import ColorUtils from "utils/ColorUtils";

const GradientSVG = ({ id }: { id: string }) => {
  const gradientTransform = `rotate(90)`;
  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={id} gradientTransform={gradientTransform}>
          <stop offset="10%" stopColor={ColorUtils.primary} />
          <stop offset="100%" stopColor={"#FFA722"} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientSVG;
