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
} from "assets/AssetUtil";
import AppRoutes from "./routes";

export const CategoryTabs = [
  {
    title: "All",
    link: AppRoutes.Categories,
  },
  {
    title: "Pizzeria",
    link: AppRoutes.PizzeriaPOS,
  },
  {
    title: "Quick Service Restaurants",
    link: AppRoutes.QuickServicePOS,
  },
  {
    title: "Retail Stores",
    link: AppRoutes.RetailPOS,
  },
  {
    title: "Full Service Restaurants",
    link: AppRoutes.FullServicePOS,
  },
  {
    title: "Bar & Night Clubs",
    link: AppRoutes.ClubPOS,
  },
  {
    title: "Small Businesses",
    link: AppRoutes.SmallBusinessPOS,
  },
];

export const BreakPoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

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
    content: "1 handhelds",
  },
  {
    icon: HandHeld2Img,
    content: "2-3 handhelds",
  },
  {
    icon: HandHeld3Img,
    content: "4+ handhelds",
  },
];

export const StationData = [
  {
    icon: Station1Img,
    content: "1 station",
  },
  {
    icon: Station2Img,
    content: "2-3 stations",
  },
  {
    icon: Station4Img,
    content: "4+ stations",
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
