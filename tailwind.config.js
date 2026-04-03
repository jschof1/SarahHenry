/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lilac: {
          50: '#faf8fb',
          100: '#f3eff6',
          200: '#e6ddf0',
          300: '#d4c5e5',
          400: '#bea8d6',
          500: '#a88ec5',
          600: '#9175b0',
          700: '#7a5f99',
          800: '#5e4777',
          900: '#3e2f50',
          brand: '#a88ec5',
        },
        brand: {
          dark: '#1a1a1a',
          light: '#faf8fb',
        },
        cream: {
          50: '#fefffe',
          100: '#faf8fb',
          200: '#f3eff6',
          300: '#e6ddf0',
          400: '#d4c5e5',
          brand: '#faf8fb',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        brand: '12px',
        'brand-lg': '20px',
        'brand-pill': '9999px',
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
