/** @type {import('tailwindcss').Config} */
// import Colors from "./utils/ColorUtil.js";

const Colors = require("./utils/ColorUtils.js");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        ...Colors,
      },
      boxShadow: {
        viewmore:
          "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
        poscard:
          " 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
      },
      boxShadow: {
        viewmore:
          "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
        poscard:
          " 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      dropShadow: {
        custom: "0 3px 3px rgba(0, 0, 0, 0.28)",
      },
    },
  },

  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          ...Colors,
          "::placeholder": {
            color: Colors.neutral_400,
          },
          "::-ms-input-placeholder": {
            color: Colors.neutral_400,
          },
        },
      },
    ],
  },
};
