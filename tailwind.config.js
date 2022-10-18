/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        'bozzin': '234px',
        'bozzinXl': '468px',
      },
      height: {
        'bozzin': '234px',
        'bozzinXl': '468px',
      },

      colors: {
        'greyed': '#E9E9E9',
        'darkcolor': '#091720',
        'lightcolor': '#e2e8f0',
        'lightcolor2': '#f1f1f1'
        // 'blockAntonText': '#2D4654'
      },
      textColor: {
        'antoncolor': '#2D4654'
      },
      borderRadius: {
        'neat': '10px'
      },

      fontSize: {
        'tiny': '.65rem',
        'title': '.75rem',
      },
    },

    container: {
      center: true,
      padding: '1rem'

    },
  },
  
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/line-clamp'),
     require('flowbite/plugin'),


  ],
}