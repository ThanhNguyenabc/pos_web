import { useState, useEffect } from "react";
import { LG_SCREEN } from "utils/constants";

export const useMediaQuery = () => {
  const [screenSize, setScreenSize] = useState<number>(
    (typeof window !== "undefined" && window.innerWidth) || 0
  );

  const onResize = () => setScreenSize(window.innerWidth);

  useEffect(() => {
    if (typeof window !== "undefined")
      window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return { screenSize };
};
