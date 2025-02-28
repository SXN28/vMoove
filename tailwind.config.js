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
        primary: '#333333', // Rouge
        secondary: '#00FF00', // Vert
        accent: '#0000FF', // Bleu
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
