declare module "assets/icons/*.svg" {
  import React from "react";
  const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default Component;
}

export {};

declare global {
  interface Window {
    dataLayer?: any;
  }
}
