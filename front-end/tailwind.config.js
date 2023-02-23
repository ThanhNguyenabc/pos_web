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
       
        green: {
          100: "#D1FADF",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        body: ['"Inter"'],
      },
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      marquee2: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
    },
    animation : {
      'spin-slow-30': 'spin 30s linear infinite',
      'spin-slow-25': 'spin 25s linear infinite',
      'spin-slow-10': 'spin 10s linear infinite',
      'marquee-infinite' : 'marquee 30s linear infinite',
    },
  },
  
  plugins: [require("daisyui"), require('@tailwindcss/typography'),],
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
