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
        background: 'white',
        'background-secondary': '#F0F0F0'
      },
      'dark': { 
        base: '#94A3B8',
        primary: '#38BAF8',
        secondary: '#E2E8F0',
        tertiary: '#E2E8F0',
        background: '#0F172A',
        'background-secondary': '#0A1227'
      },
    })
  ],
}

