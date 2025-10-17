/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#ff00ff',
        'neon-orange': '#ff6600',
        'neon-purple': '#9d00ff',
        'neon-green': '#39ff14',
        'cyber-black': '#0a0a0a',
      },
      fontFamily: {
        'display': ['Impact', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glitch': 'glitch 1s linear infinite',
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 8px currentColor)' },
          '50%': { opacity: '.8', filter: 'drop-shadow(0 0 20px currentColor)' },
        },
      },
    },
  },
  plugins: [],
}
