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
        'md': '768px',
        'lg': '1024px'
      },
      center: true,
      padding: '32px'
    },
    screens: {
      'md': '768px',
      'lg': '1024px'
    },
  },
  plugins: [],
}