/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        'black-card': '#111111',
        'black-border': '#1E1E1E',
        white: '#F0F0F0',
        'white-muted': '#888888',
        red: {
          DEFAULT: '#CC0000',
          hover: '#E50000',
          muted: '#3D0000',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E2C06B',
          muted: '#6B5A2A',
        },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'blink': 'blink 1.2s step-end infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
