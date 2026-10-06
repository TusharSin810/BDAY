/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'romantic-cream': '#fdfbf7',
        'romantic-blush': '#fdf2f2',
        'romantic-charcoal': '#111827',
        'romantic-gold': '#b47b00',
        'romantic-rose': '#be123c',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'handwritten': ['Caveat', 'cursive'],
        'serif': ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
