/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      colors: {
        // Vos couleurs personnalisées
        fond: '#333333', 
        secondary: '#00FF00', 
        bleu: '#0968E7', 
      },
      backgroundColor: {
        // Étendez explicitement les couleurs pour le background
        'fond': '#333333',
        'secondary': '#00FF00',
        'bleu': '#0968E7',
      },

      fontFamily: {
        'bridgend': ['bridgend', 'sans-serif'],
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
