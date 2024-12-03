/** @type {import('tailwindcss').Config} */
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        elBrasesRed: '#99172F',
      }
    },
  },
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
}
