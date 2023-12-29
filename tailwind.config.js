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
        columbia: '#F2F5F8',
        rich_black: '#151E28',
        gunmetal: '#1c2c36',
      },
      flexGrow:{
        2: '2',
        3: '3',
        4: '4'
      },
      keyframes: {
        bounceUpDown: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(20px)',
          },
        },
      },
      animation: {
        bounceUpDown: 'bounceUpDown 3s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}