/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#080A1A",
        subMain: "#F20000",
        dry: "#0B0F29",
        star: "#FFB000",
        text: "",
      },
    },
  },
  plugins: [require("daisyui")],
};
