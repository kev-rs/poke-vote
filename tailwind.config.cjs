/** @type {import('tailwindcss').Config} */

/* eslint-disable */
/** @type {import('tailwindcss/colors')} */
const colors = require('tailwindcss/colors');

const brandColor = colors.blue;

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        brand: brandColor,
      },
      ringColor: {
        DEFAULT: brandColor['500']
      }
    },
  },
  plugins: [],
};
