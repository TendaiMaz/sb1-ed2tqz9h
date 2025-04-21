/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f5f4',
          100: '#ccebe9',
          200: '#99d7d3',
          300: '#66c3bd',
          400: '#33afa7',
          500: '#00746b',
          600: '#006961',
          700: '#004f48',
          800: '#003430',
          900: '#001a18',
        },
        secondary: {
          50: '#f5fae8',
          100: '#ebf5d1',
          200: '#d7eba3',
          300: '#c3e175',
          400: '#8dc645',
          500: '#7fb23e',
          600: '#719f37',
          700: '#638c30',
          800: '#557929',
          900: '#476622',
        },
        accent: {
          50: '#e6e6e6',
          100: '#cccccc',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          500: '#020100',
          600: '#020100',
          700: '#010100',
          800: '#010100',
          900: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};