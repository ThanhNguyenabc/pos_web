import IcRestaurant from "assets/icons/ic_restaurant.svg";
import IcQuickService from "assets/icons/ic_service1.svg";
import IcBarClub from "assets/icons/ic_barclub.svg";
import IcPizza from "assets/icons/ic_pizza.svg";
import IcSmallBusiness from "assets/icons/ic_small_business.svg";
import IcRetail from "assets/icons/ic_retail.svg";
import { Locale } from "models/app_configs";
import { CategoryType } from "models/category_type";

export class AppRoutes {
  static HomePage = "/";
  static AboutPage = "/about";
  static BlogPage = "/blog";
  static ContactPage = "/contact-us";
  static FreePOSPage = "/free-pos";
  static QuestionnairePage = "/pos-questionnaire";
  static BreadmePage = "/extrabread";
  static BreadmeQuestionPage = "/bread-me-questions";
  static POSDetailPage = "/product";
  static PartnerPage = "/partner";
  static SuggestPOSPage = "/suggest-pos";
  static POSSystemPage = "/pos-systems";
}

const getURLByPOSCategory = (type: string) =>
  `${AppRoutes.POSSystemPage}?type=${type}`;

export const MainMenu = {
  home: {
    link: AppRoutes.HomePage,
    title: {
      [Locale.en]: "Home",
      [Locale.es]: "Home",
    },
  },
  questionnaire: {
    link: "",
    title: {
      [Locale.en]: "POS Questionnaire",
      [Locale.es]: "Cuestionario",
    },
  },
  posreview: {
    link: AppRoutes.POSSystemPage,
    title: {
      [Locale.en]: "POS Systems",
      [Locale.es]: "Reseñas de puntos de venta",
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
      [Locale.en]: "Insights",
      [Locale.es]: "Blog",
    },
  },
  partner: {
    title: {
      [Locale.en]: "Partner",
      [Locale.es]: "Pareja",
    },
    link: AppRoutes.PartnerPage,
  },
  contact: {
    link: AppRoutes.ContactPage,
    title: {
      [Locale.en]: "Contact",
      [Locale.es]: "Contacto",
    },
  },
};

export const NavBarItems = [
  MainMenu["home"],
  MainMenu["questionnaire"],
  MainMenu["posreview"],
  MainMenu["blog"],
  MainMenu["about"],
  MainMenu["contact"],
];

export const ResourceItems = [MainMenu["questionnaire"], MainMenu["partner"]];

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
