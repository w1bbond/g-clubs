const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans SC", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        coffee: "#96795D",
      },
      zIndex: {
        negative: "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
