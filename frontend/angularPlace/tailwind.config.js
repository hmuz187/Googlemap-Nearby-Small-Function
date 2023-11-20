/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
          'infinite-scroll': 'infinite-scroll 10s linear infinite',
      },
      keyframes: {
          'infinite-scroll': {
              from: { transform: 'translateX(0%)' },
              to: { transform: 'translateX(-100%)' },
          }
      }                    
  },
  },
  plugins: [],
}