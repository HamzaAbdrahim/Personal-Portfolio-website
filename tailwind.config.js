/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Gray_600:"#4B5563",
        Gray_900:"#111827",
        Gray_300:"#808080",
        Gray_100:"#F3F4F6",
        Gray_Dark_Default:"#030712",
      },
      fontFamily:{
        Inter: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

