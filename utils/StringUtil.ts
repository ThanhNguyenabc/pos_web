import IcApple from "assets/icons/ic_apple.svg";
import IcWindow from "assets/icons/ic_window.svg";
import IcAndroid from "assets/icons/ic_android.svg";
import IcAmericanFlag from "assets/icons/ic_american_flag.svg";
import IcSpanishFlag from "assets/icons/ic_spanish_flag.svg";
import IcRestaurant from "assets/icons/ic_restaurant.svg";
import IcQuickService from "assets/icons/ic_service1.svg";
import IcBarClub from "assets/icons/ic_barclub.svg";
import IcPizza from "assets/icons/ic_pizza.svg";
import IcSmallBusiness from "assets/icons/ic_small_business.svg";
import IcRetail from "assets/icons/ic_retail.svg";

import { Locale } from "models/app_configs";
import { CategoryType } from "models/category_type";
import { SystemOs } from "models/product.model";
import AppRoutes from "./routes";

export const SuccessMessage = "Thank you for filling out the form";

export const getURLByPOSCategory = (type: string) =>
  `${AppRoutes.POSSystemPage}?type=${type}`;

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

export const MainMenu = {
  home: {
    link: AppRoutes.HomePage,
    title: {
      [Locale.en]: "Home",
      [Locale.es]: "Home",
    },
  },
  freepos: {
    link: AppRoutes.FreePOSPage,
    title: {
      [Locale.en]: "Free POS",
      [Locale.es]: "Punto de venta gratuito",
    },
  },
  posreview: {
    link: AppRoutes.POSSystemPage,
    title: {
      [Locale.en]: "POS Reviews",
      [Locale.es]: "Reseñas de puntos de venta",
    },
  },
  contact: {
    link: AppRoutes.ContactPage,
    title: {
      [Locale.en]: "Contact",
      [Locale.es]: "Contacto",
    },
  },
  about: {
    link: AppRoutes.AboutPage,
    title: {
      [Locale.en]: "About Us",
      [Locale.es]: "Sobre Nosotros",
    },
  },
  blog: {
    link: AppRoutes.BlogPage,
    title: {
      [Locale.en]: "Blog",
      [Locale.es]: "Blog",
    },
  },
  breadme: {
    link: AppRoutes.BreadmePage,
    title: {
      [Locale.en]: "0% Processing Fee",
      [Locale.es]: "0% de tarifa de procesamiento",
    },
  },
};

export const ResourceItems = [
  MainMenu["freepos"],
  MainMenu["breadme"],
  {
    title: {
      [Locale.en]: "Questionnaire",
      [Locale.es]: "Cuestionario",
    },
    link: AppRoutes.QuestionnairePage,
  },
  {
    title: {
      [Locale.en]: "Partner",
      [Locale.es]: "Pareja",
    },
    link: AppRoutes.PartnerPage,
  },
];

export const OtherItems = [
  MainMenu["about"],
  MainMenu["contact"],
  MainMenu["blog"],
  {
    isOpenTab: true,
    link: "https://blog.bestpos.com/terms-and-conditions/",
    title: {
      [Locale.en]: "Terms and Conditions",
      [Locale.es]: "Terms and Conditions",
    },
  },
  {
    isOpenTab: true,
    link: "https://blog.bestpos.com/privacy-policy/",
    title: {
      [Locale.en]: "Privacy and Policy",
      [Locale.es]: "Privacy and Policy",
    },
  },
  {
    isOpenTab: true,
    link: "https://blog.bestpos.com/how-we-rate/",
    title: {
      [Locale.en]: "How We Rate",
      [Locale.es]: "How We Rate",
    },
  },
  {
    isOpenTab: true,
    link: "https://blog.bestpos.com/advertiser-disclosure/",
    title: {
      [Locale.en]: "Advertiser Disclosure",
      [Locale.es]: "Advertiser Disclosure",
    },
  },
];

export const CategoryList = [
  {
    title: {
      [Locale.en]: "Full Service",
      [Locale.es]: "Restaurantes de servicio completo",
    },
    type: CategoryType.full_service,
    icon: IcRestaurant,
    link: getURLByPOSCategory(CategoryType.full_service),
  },

  {
    title: {
      [Locale.en]: "Quick Service",
      [Locale.es]: "Restaurantes de servicio rápido",
    },
    type: CategoryType.quick_service,
    icon: IcQuickService,
    link: getURLByPOSCategory(CategoryType.quick_service),
  },
  {
    title: {
      [Locale.en]: "Pizza",
      [Locale.es]: "Pizzería",
    },
    type: CategoryType.pizza,
    icon: IcPizza,
    link: getURLByPOSCategory(CategoryType.pizza),
  },

  {
    title: {
      [Locale.en]: "Bar & Night Clubs",
      [Locale.es]: "Bar",
    },
    type: CategoryType.club,
    icon: IcBarClub,
    link: getURLByPOSCategory(CategoryType.club),
  },
  {
    title: {
      [Locale.en]: "Retail Stores",
      [Locale.es]: "Tiendas minoristas",
    },
    type: CategoryType.retail,
    icon: IcRetail,
    link: getURLByPOSCategory(CategoryType.retail),
  },

  {
    title: {
      [Locale.en]: "Small Business",
      [Locale.es]: "Pequeños emprendimientos",
    },
    type: CategoryType.small_business,
    icon: IcSmallBusiness,
    link: getURLByPOSCategory(CategoryType.small_business),
  },
];

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
