/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'fruit': {
          'peach': '#FFE5CC',
          'mint': '#E8F5E8',
          'lavender': '#F0E6FF',
          'coral': '#FFD4CC',
          'berry': '#E8D5FF',
          'citrus': '#FFF2CC',
          'rose': '#FFE6F0',
          'sage': '#E6F3E6',
        },
        'lotus': {
          'pink': '#F8BBD9',
          'purple': '#E4C1F9',
          'blue': '#A8DADC',
          'green': '#C1E1C1',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
};