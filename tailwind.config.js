const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      padding: {
        0.5: '0.125rem',
        1.5: '0.375rem',
        14: '3.5rem',
        28: '7rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
