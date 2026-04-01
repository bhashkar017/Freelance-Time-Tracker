/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#d946ef",
        dark: "#0f172a",
        card: "rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 20px 40px -5px rgba(15, 23, 42, 0.08)',
        'glow': '0 10px 25px -5px rgba(79, 70, 229, 0.4)',
      }
    },
  },
  plugins: [],
}
