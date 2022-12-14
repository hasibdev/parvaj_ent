const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./resources/js/**/*.vue', './resources/assets/ts/**/*.ts'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      teal: colors.teal,
      darkblue: colors.slate,
    },
  },
}
