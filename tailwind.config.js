/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BarlowCondensed: ['Barlow Condensed', 'sans-serif'],
        Bellefair: ['Bellefair', 'serif'],
      },
      colors: {
        darkBlue: '#0B0D17',
        lightBlue: '#D0D6F9',
      },
    },
  },
  plugins: [],
}

