/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: '#e93d82',
        'accent-dark': '#cb1d63',
        'text-dark': '#2036A1',
        'text-muted': '#646fbc'
      },
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        grotesk: ["Space Grotesk Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addBase, theme }) {
      addBase({
        'html': {color: theme('colors.text-dark'), background: "#fffbff"},
        'h1, h2, h3, h4': { fontFamily: theme('fontFamily.grotesk')},
      });
    },
  ],
}