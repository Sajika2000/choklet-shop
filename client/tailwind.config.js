/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors :{
        brightColor: " #3D1C02",
        backgroundColor: " #6E4033",
      }
    },
  },
  plugins: [],
}

