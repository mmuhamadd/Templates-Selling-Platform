/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8BC12F',
        gray: {
          1: '#495058',
          2: '#3E454D',
        },
        orange: '#F18523'
      }
    },
  },
  plugins: [],
}