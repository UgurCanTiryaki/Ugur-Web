const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'josefin-slab': ['Josefin Slab', 'serif'],
      },
      colors: {
        lime: colors.lime,
        cyan: colors.cyan,
        rose: colors.rose,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
