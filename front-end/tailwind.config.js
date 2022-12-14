/** @type {import('tailwindcss').Config} */
// import Colors from "./utils/ColorUtil.js";
// const defaultTheme = require("tailwindcss/defaultTheme");

const Colors = require("./utils/ColorUtil.js");
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
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
  theme: {
    extend: {
      colors: {
        current: Colors.warning,
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
};
