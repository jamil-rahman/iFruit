/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        transparent: 'transparent',
        columbia: '#C5D5EA',
        rich_black: '#151E28',
        gunmetal: '#1c2c36',
      },
    },
  },
  plugins: [],
}