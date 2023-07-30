/** @type {import('tailwindcss').Config} */

const { createThemes } = require('tw-colors')

export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      
    },
    fontFamily: {
      'avenir': ['Avenir Next LT pro', 'Times New Roman']
    },
    fontSize: {
      xsm: '0.5rem', // 8px
      sm: '0.625rem', // 9px
      base: '0.625rem', // 10px
      lg: '0.6875rem', // 11px
      xl: '0.75rem', // 12px
      '2xl': '1rem', // 16px
      '3xl': '2rem', // 32px
    },
    extend: {
      aspectRatio: {
        'A4': '21 / 29.7'
      }
    },
  },
  plugins: [
    createThemes({
      'light': { 
        base: 'black',
        primary: '#44546A',
        secondary: '#767171',
        background: 'white'
      },
      'dark': { 
        base: '#e2e8f0',
        primary: 'rgb(56 189 248)',
        secondary: '#94a3b8',
        background: 'rgb(15 23 42)'
      },
    })
  ],
}

