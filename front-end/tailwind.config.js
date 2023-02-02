/** @type {import('tailwindcss').Config} */
// import Colors from "./utils/ColorUtil.js";
// const defaultTheme = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

const Colors = require("./utils/ColorUtils.js");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        neutral: {
          100: "#F2F4F7",
          300: "#D0D5DD",
          400: "#98A2B3",
          600: "#475467",
          700: "#344054",
          900: "#101828",
          dark: "#020202",
        },
        green: {
          100: "#D1FADF",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        body: ['"Inter"'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],

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
