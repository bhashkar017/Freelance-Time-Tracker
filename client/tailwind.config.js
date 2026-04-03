/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4",       // Electric Cyan
        secondary: "#10b981",     // Tech Emerald
        "dark-bg": "#0B0B14",     // deeper background
        "dark-surface": "#131320", // surface layer
        "dark-border": "#212134",
        "glass-dark": "rgba(19, 19, 32, 0.7)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        'glow': '0 0 20px -5px rgba(79, 70, 229, 0.4)',
        'glow-primary': '0 0 20px 0px rgba(79, 70, 229, 0.6)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-dark': 'radial-gradient(at 40% 20%, hsla(285,100%,74%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(242,100%,70%,0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(242,100%,70%,0.15) 0px, transparent 50%)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
