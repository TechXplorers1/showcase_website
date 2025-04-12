/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'swbs-blue': '#4AA5D4',
        'swbs-light-blue': '#7CC2E4',
        'swbs-orange': '#FF6B35',
        'swbs-black': '#1A1A1A',
      }
    },
  },
  plugins: [],
}