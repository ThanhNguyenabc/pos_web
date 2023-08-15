import IcApple from "assets/icons/ic_apple.svg";
import IcWindow from "assets/icons/ic_window.svg";
import IcAndroid from "assets/icons/ic_android.svg";
import IcAmericanFlag from "assets/icons/ic_american_flag.svg";
import IcSpanishFlag from "assets/icons/ic_spanish_flag.svg";

import { Locale } from "models/app_configs";
import { SystemOs } from "models/product.model";
import { AppRoutes } from "./routes";

export const SuccessMessage = "Thank you for filling out the form";


export const getSystemIcon = (os: SystemOs): React.ElementType => {
  switch (os) {
    case SystemOs.iOS:
      return IcApple;
    case SystemOs.Android:
      return IcAndroid;
    case SystemOs.Window:
      return IcWindow;
  }
};

export const isValidEmail = (str: string) => {
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return expression.test(str);
};

export const YesNoQuestion = ["yes", "no"];

export const Languages = {
  [Locale.en]: {
    icon: IcAmericanFlag,
    title: "English",
  },
  [Locale.es]: {
    icon: IcSpanishFlag,
    title: "Español",
  },
};
