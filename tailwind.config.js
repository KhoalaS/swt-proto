/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./src/App.vue"],
  theme: {
    extend: {},
    colors: {
      blue: "#0069be",
      "dark-blue": "#005498",
      "light-blue": "#b3dbfe75",
      green: "#78be19",
      "dark-green": "#639d15",
      red: colors.red,
      white: colors.white,
      black: colors.black,
      "dm-black": "#181818",
      gray: "#ececec",
      "black-trans": "#000000b0",
    },
    screens: {
      sm: "450px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
