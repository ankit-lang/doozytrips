/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#0077b5', // Example color from the site
        'secondary': '#f26522',
        'dark-text': '#333',
        'light-text': '#69727d',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Or any font you prefer
      }
    },
  },
  plugins: [],
};
