/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'blue':'#283371',
        'yellow':'#E3AD26',
        'white':'#F1F1F1',
        'orange':'#fa8714',
      },
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

