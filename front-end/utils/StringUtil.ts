import {
  RevelImg,
  IcApple,
  CloverImg,
  IcWindow,
  OvviImg,
  LightSpeedImg,
  ToastImg,
  HandHeld1Img,
  HandHeld2Img,
  HandHeld3Img,
  Station1Img,
  Station2Img,
  Station4Img,
  Station5Img,
  ExtouchImg,
  SimphonyImg,
  BrinkImg,
  AldeloImg,
  AlohaImg,
  UpserveImg,
  IcAndroid,
  BusinessCategory,
  BarCategory,
  RestaurantCategory,
  RetailCategory,
  QuickServiceCategory,
  PizzeriaCategory,
} from "assets/AssetUtil";
import { CategoryType } from "models/category_type";
import { SystemOs } from "models/product.model";
import { StaticImageData } from "next/image";
import { ReactComponentElement, ReactElement } from "react";
import AppRoutes from "./routes";

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

export const ProductIcons: { [key: string]: StaticImageData } = {
  Revel: RevelImg,
  "Clover Flex": CloverImg,
  "Clover Duo": CloverImg,
  Exatouch: ExtouchImg,
  "Simphony (Oracle Micros)": SimphonyImg,
  "Brink (Par)": BrinkImg,
  Ovvi: OvviImg,
  "Aldelo (Professional or Express)": AldeloImg,
  Lightspeed: LightSpeedImg,
  Aloha: AlohaImg,
  Upserve: UpserveImg,
  Toast: ToastImg,
};

export const ExpertReviewTitle: { [key: string]: string } = {
  value: "Value",
  feedback: "Feedback",
  functionality: "Functionality",
  support: "Support",
  easy: "Easy to use",
};

export const isValidPhoneNumber = (str: string) => str.length >= 10;

export const isValidEmail = (str: string) => {
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return expression.test(str);
};

export const MetrictData = {
  heading: "What sets us apart from other companies?",
  sections: [
    { title: "30+", content: "Over 30 years experience" },
    { title: "50", content: "Available in all 50 states" },
    { title: "1000+", content: "Over 1000 Clients" },
  ],
};
export const CategoryList = [
  {
    title: "Pizza",
    type: CategoryType.pizza,
    link: AppRoutes.PizzeriaPOS,
    img: PizzeriaCategory,
  },

  {
    title: "Quick Service Restaurants",
    type: CategoryType.quick_service,
    link: AppRoutes.QuickServicePOS,
    img: QuickServiceCategory,
  },
  {
    title: "Retail Stores",
    type: CategoryType.retail,
    link: AppRoutes.RetailPOS,
    img: RetailCategory,
  },
  {
    title: "Full Service Restaurants",
    type: CategoryType.full_service,
    link: AppRoutes.FullServicePOS,
    img: RestaurantCategory,
  },
  {
    title: "Bar & Night Clubs",
    type: CategoryType.club,
    link: AppRoutes.ClubPOS,
    img: BarCategory,
  },
  {
    title: "Small Business",
    type: CategoryType.small_business,
    link: AppRoutes.SmallBusinessPOS,
    img: BusinessCategory,
  },
];

export const BusinessTypes = [
  { ...CategoryList[3], title: "Restaurant" },
  CategoryList[2],
  { ...CategoryList[1], title: "Quick Service" },
  CategoryList[5],
];

export const YesNoQuestion = ["Yes", "No"];
export const CreditCardVolumeData = ["$10K - $50k", "$50K - $150k", "$150+"];

export const BreadmeCreditCardVolumeData = [
  "$25K - $50K",
  "$50K - $100K",
  "$100K - $150K",
  "$150K+",
];

export const SaleSystem = [
  "Revel System",
  "Clover",
  "Exatouch",
  "Lightspeed",
  "Aldelo Express",
  "Other",
];

export const HandHeldData = [
  {
    icon: HandHeld1Img,
    content: "1",
  },
  {
    icon: HandHeld2Img,
    content: "2-3",
  },
  {
    icon: HandHeld3Img,
    content: "4+",
  },
];

export const StationData = [
  {
    icon: Station1Img,
    content: "1",
  },
  {
    icon: Station2Img,
    content: "2-3",
  },
  {
    icon: Station4Img,
    content: "4+",
  },
];

export const BreadmeStationData = [
  {
    icon: Station2Img,
    content: "0-3 stations",
  },
  {
    icon: Station4Img,
    content: "3-5 stations",
  },
  {
    icon: Station5Img,
    content: "5+ stations",
  },
];
export const MockupData = [
  {
    logo: RevelImg,
    systemos: [IcApple, IcWindow],
    rating: 6,
    desc: "Toast is a easy-to-use software with a sleek station & handheld hardware",
    pros: [
      "Customizable clouded system",
      "Amazing local on-site support",
      "Great back office management",
    ],
    cons: [
      "Doesn't work with Android",
      "Potential glitches with weak internet",
      "No modifiers to modifiers feature",
    ],
  },
  {
    logo: ToastImg,
    systemos: [IcApple],
    rating: 9,
    desc: "Toast is a easy-to-use software with a sleek station & handheld hardware",
    pros: [
      "Customizable clouded system",
      "Amazing local on-site support",
      "Great back office management",
    ],
    cons: [
      "Doesn't work with Android",
      "Potential glitches with weak internet",
      "No modifiers to modifiers feature",
    ],
  },
  {
    logo: CloverImg,
    systemos: [IcWindow],
    rating: 10,
    desc: "Toast is a easy-to-use software with a sleek station & handheld hardware",
    pros: [
      "Customizable clouded system",
      "Amazing local on-site support",
      "Great back office management",
    ],
    cons: [
      "Doesn't work with Android",
      "Potential glitches with weak internet",
      "No modifiers to modifiers feature",
    ],
  },
  {
    logo: OvviImg,
    systemos: [IcWindow],
    rating: 5,
    desc: "Toast is a easy-to-use software with a sleek station & handheld hardware",
    pros: [
      "Customizable clouded system",
      "Amazing local on-site support",
      "Great back office management",
    ],
    cons: [
      "Doesn't work with Android",
      "Potential glitches with weak internet",
      "No modifiers to modifiers feature",
    ],
  },
  {
    logo: LightSpeedImg,
    systemos: [IcApple],
    rating: 8,
    desc: "Toast is a easy-to-use software with a sleek station & handheld hardware",
    pros: [
      "Customizable clouded system",
      "Amazing local on-site support",
      "Great back office management",
    ],
    cons: [
      "Doesn't work with Android",
      "Potential glitches with weak internet",
      "No modifiers to modifiers feature",
    ],
  },
];
