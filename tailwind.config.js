/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#ffe9fb',
        'secondary': '#e4fef6'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundSize: {
        '150%': '150%'
      }
    },
  },
  plugins: [],
};
