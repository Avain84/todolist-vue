/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        'main-yellow': '#FFD370',
        'main-black': '#333333',
        'main-alert': '#D87355',
      }
    },
    container:{
      screens: {
        'md': '520px',
        'lg': '992px'
      },
      center: true,
      padding: '32px'
    },
    screens: {
      'md': '520px',
      'lg': '992px'
    },
  },
  plugins: [],
}