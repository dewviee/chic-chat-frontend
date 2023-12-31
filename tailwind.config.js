/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#FF3778',
        'orange': '#FF5A37',
        'greylight': '#D9D9D921',
        'green': '#177537',
        'blue': '#2734AD',
      },
      screens: {
        'sm': '576px',
        'md': '960px',
        'lg': '1440px',
      },
    },
  },
  plugins: [],
  extend: {
    fontFamily: {
      'inter': ['Inter', 'sans'],
    },
  },
}



