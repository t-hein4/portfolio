/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-quicksand)", ...fontFamily.sans],
        primary: ["var(--font-nunito)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
