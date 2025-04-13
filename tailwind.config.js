/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ringWidth: {
        'DEFAULT': '2px',
      },
      ringColor: {
        'DEFAULT': 'rgba(239, 68, 68, 0.5)', // red-500 with opacity
      },
    },
  },
  plugins: [],
}