/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel:   ['"Cinzel Decorative"', 'cursive'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        nunito:   ['Nunito', 'sans-serif'],
      },
      colors: {
        'neon-purple': '#b04aff',
        'neon-blue':   '#00d4ff',
        'neon-pink':   '#ff4af0',
        'neon-gold':   '#ffd700',
        'bg-deep':     '#060612',
        'bg-card':     '#0d0d1f',
        'bg-surface':  '#111128',
      },
    },
  },
  plugins: [],
}

