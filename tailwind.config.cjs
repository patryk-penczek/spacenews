/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      theme: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
      },
      colors: {
        primary: '#1877F2',
        error: {
          100: '#FF84B7',
          200: '#ED2E7E',
          300: '#C30052',
        },
        success: {
          100: '#34EAB9',
          200: '#00BA88',
          300: '#00966D',
        },
        warning: {
          100: '#FFD789',
          200: '#F4B740',
          300: '#946200',
        },
        grayscale: {
          100: '#EEF1F4',
          200: '#A0A3BD',
          300: '#667080',
          400: '#4E4B66',
          500: '#050505',
        },
        darkmode: {
          100: '#E4E6EB',
          200: '#B0B3B8',
          300: '#3A3B3C',
          400: '#1C1E21',
        },
      },
      height: {
        mobile: 'calc(100vh - 144px)',
        large: 'calc(100vh - 72px)',
      },
      minHeight: {
        large: 'calc(100vh - 72px)',
      },
      minWidth: {
        70: '280px',
      },
      maxWidth: {
        default: '1440px',
        article: '720px',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
