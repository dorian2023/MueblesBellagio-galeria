/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#FFD700', // dorado brillante  
          light: '#FFEB8A', // dorado más claro para hover  
        },
      },
    },
  },
  plugins: [],
}