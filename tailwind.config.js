/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      colors: {
        // Ajoutez ou modifiez des couleurs ici
        fond: '#333333', // Rouge
        secondary: '#00FF00', // Vert
        bleu: '#0968E7', // Bleu
      },

      fontFamily: {
        'bridgend': ['bridgend', 'sans-serif'], // Assurez-vous que c'est exactement comme ceci
      },

      
      fontSize: {
        '6xl': '4rem',
        '7xl': '4.5rem',
        '8xl': '5rem',
        '9xl': '6rem',
        '10xl': '7rem',
        '11xl': '8rem',
        '12xl': '9rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


//symfony console tailwind:build --watch
