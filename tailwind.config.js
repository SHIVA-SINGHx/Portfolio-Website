/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['Calistoga', 'serif'],
      },
      colors: {
        background: '#09090b',
        zinc: {
          850: '#1c1c20',
        }
      }
    },
  },
  plugins: [],
}

