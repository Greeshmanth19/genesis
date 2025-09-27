/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'tt-firs': ['TT Firs Neue', 'sans-serif'],
        sans: ['TT Firs Neue', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
