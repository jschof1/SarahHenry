/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f2f5f3',
          100: '#e0e8e2',
          200: '#c3d1c7',
          300: '#9eb5a4',
          400: '#80968b',
          500: '#5f7a68',
          600: '#4a6153',
          700: '#3d4f44',
          800: '#334139',
          900: '#2b3630',
          brand: '#80968b',
        },
        lilac: {
          50: '#f5f2f7',
          100: '#ece7f0',
          200: '#d9d0e1',
          300: '#c5b5d1',
          400: '#b09fc4',
          500: '#9a85b1',
          600: '#846d9b',
          700: '#6e5982',
          800: '#5b4a6b',
          900: '#4c3f58',
          brand: '#b09fc4',
        },
        cream: {
          50: '#fefffe',
          100: '#f6f7ec',
          200: '#eef0db',
          300: '#e2e5c4',
          400: '#d4d8a9',
          brand: '#f6f7ec',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
