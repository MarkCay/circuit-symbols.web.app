/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#44BF8B',
        'primary-accent': '#00506B',
        secondary: '#F05625',
        light: '#E3E3E3',
        dim: '#050505',
      },
    },
  },
  plugins: [],
}
