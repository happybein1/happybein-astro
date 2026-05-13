/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal:     { DEFAULT: '#2ABFBF', dark: '#1A9A9A', light: '#4DD0D0' },
        green:    { DEFAULT: '#4CAF50', dark: '#388E3C' },
        blue:     { DEFAULT: '#29ABE2' },
        ink:      '#1A3333',
        body:     '#2C4A4A',
        muted:    '#5A7A7A',
        offwhite: '#F4FAFA',
        lightbg:  '#E8F7F7',
        border:   'rgba(42,191,191,0.18)',
      },
      fontFamily: {
        display: ['Nunito', 'sans-serif'],
        body:    ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.68rem',
        'xs':  '0.75rem',
      },
      boxShadow: {
        card: '0 2px 14px rgba(26,153,154,0.12)',
        nav:  '0 8px 28px rgba(26,153,154,0.12)',
      },
    },
  },
  plugins: [],
};
