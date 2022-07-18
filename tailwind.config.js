const defaultTheme = require("tailwindcss/defaultTheme");
const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", ...defaultTheme.fontFamily.sans],
        spaced: ["Spaced", "sans-serif"],
      },
    },
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      ipad: "830px",
      lg: "1024px",
      minixl: "1200px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
