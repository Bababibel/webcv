/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'avenir': ['Avenir Next LT pro', 'Times New Roman']
    },
    extend: {
      aspectRatio: {
        'A4': '21 / 29.7'
      }
    },
  },
  plugins: [],
}

