/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff9eb',
          100: '#ffeed0',
          200: '#ffd787',
          300: '#ffbf4a',
          400: '#ffaa1e',
          500: '#ff9500',
          600: '#e67100',
          700: '#cc5500',
          800: '#a34100',
          900: '#7a2e00',
        },
        secondary: {
          50: '#fffaeb',
          100: '#fff0c3',
          200: '#ffe391',
          300: '#ffcf5e',
          400: '#ffc136',
          500: '#ffb01f',
          600: '#e69200',
          700: '#cc7300',
          800: '#a35800',
          900: '#7a4000',
        },
        accent: {
          50: '#f2f8fd',
          100: '#e4eefa',
          200: '#c9ddf5',
          300: '#a2c3ec',
          400: '#76a0df',
          500: '#5683d4',
          600: '#3f66c7',
          700: '#3453b4',
          800: '#2e4592',
          900: '#293d73',
        },
        success: {
          500: '#22c55e',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
        dark: '#121212',
        darkSecondary: '#1e1e1e',
        darkTertiary: '#2a2a2a',
      },
      fontFamily: {
        sans: [
          '"Inter"',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'custom': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 10px 25px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'tech-pattern': "url('/src/assets/tech-pattern.svg')",
        'gradient-tech': 'linear-gradient(to right, #121212, #2a2a2a)',
      },
    },
  },
  plugins: [],
};