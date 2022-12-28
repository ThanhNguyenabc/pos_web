import React from "react";
import { BreakPoints } from "utils/StringUtil";
const useViewport = () => {
  const [size, setSize] = React.useState<{ width: number; height: number }>({
    width: BreakPoints.sm,
    height: BreakPoints.sm,
  });
  React.useEffect(() => {
    const handleWindowResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return size;
};
export default useViewport;
