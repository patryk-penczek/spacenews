/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      theme: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
      },
      colors: {
        primary: {
          100: '#FDFDFD',
          200: '#F8F8F8',
          300: '#949494',
          400: '#6C6C6C',
          500: '#444444',
          600: '#121221',
        },
      },
      maxWidth: {
        default: '1440px',
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
