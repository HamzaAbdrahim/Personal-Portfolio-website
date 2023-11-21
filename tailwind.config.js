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
        gray_default_50: "#ffffff80",
        gray_dark_100: "#1f2937",
        gray_dark_200: "#374151",
        gray_dark_300: "#4b5563",
        gray_dark_400: "#6b7280",
        gray_dark_50: "#111827",
        gray_dark_500: "#9ca3af",
        gray_dark_600: "#d1d5db",
        gray_dark_700: "#e5e7eb",
        gray_dark_800: "#f3f4f6",
        gray_dark_900: "#f9fafb",
        gray_dark_900_10: "#f9fafb1a",
        gray_dark_950: "#ffffff00",
        gray_dark_default: "#030712",
        gray_dark_default_50: "#03071280",
        neutral_white: "#ffffff",
      },
      fontFamily:{
        Inter: ['Inter', 'sans-serif']
      },
      safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'],
    },
  },
  plugins: [],
  darkMode: 'class',
}



