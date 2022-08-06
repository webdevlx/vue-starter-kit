/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': 'Inter, sans-serif'
      },
      colors: {
        'brand': '#42b983'
      }
    },
  },
  plugins: [],
}
