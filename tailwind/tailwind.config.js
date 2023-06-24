/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'max-width1450px': {'max': '1450px'},

      'max-width1300px': {'max': '1300px'},

      'max-width1330px': {'max': '1330px'},

      'max-width1200px': {'max': '1200px'},

      'max-width1250px': {'max': '1250px'},

      'max-width1170px': {'max': '1170px'},

      'max-width900px': {'max': '900px'},
    },
    extend: {},
  },
  plugins: [],
}

