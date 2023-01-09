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
  Station3Img,
} from "assets/AssetUtil";

export const BreakPoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const YesNoQuestion = ["Yes", "No"];
export const CreditCardVolumeData = ["$10K - $50k", "$50K - $150k", "$150+"];

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
    icon: Station3Img,
    content: "4+ stations",
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
