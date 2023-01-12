/** @type {import('tailwindcss').Config} */
const { faRightToBracket } = require("@fortawesome/free-solid-svg-icons");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./src/App.vue"],
  theme: {
    extend: {},
    colors: {
      blue: "#0069be",
      "dark-blue": "#005498",
      green: "#78be19",
      "dark-green": "#639d15",
      red: colors.red,
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      "black-trans": "#000000b0",
    },
  },
  plugins: [],
};
