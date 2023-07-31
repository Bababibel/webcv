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
        primary: '#445490',
        secondary: '#767171',
        tertiary: '#3B3838',
        background: 'white'
      },
      'dark': { 
        base: '#94a3b8',
        primary: 'rgb(56 189 248)',
        secondary: '#e2e8f0',
        tertiary: '#e2e8f0',
        background: 'rgb(15 23 42)'
      },
    })
  ],
}

