import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f5f7f5',
          100: '#e8ede8',
          200: '#d1dbd1',
          300: '#a8bca7',
          400: '#8FA68E',
          500: '#7A9A7E',
          600: '#5e7a61',
          700: '#4a5f4c',
          800: '#3c4d3e',
          900: '#2f3b30',
        },
        lavender: {
          50: '#f7f7fe',
          100: '#eef0fe',
          200: '#D8DCFE',
          300: '#b9c0fc',
          400: '#9ba5f9',
          500: '#7d8af6',
          600: '#6471e3',
          700: '#5159c8',
          800: '#434aa3',
          900: '#3a3f84',
        },
        cream: {
          50: '#FDFDFC',
          100: '#FAF8F5',
          200: '#f7f3ed',
          300: '#f0e8dc',
          400: '#e6d7c3',
          500: '#d8c4a8',
          600: '#c5a67e',
          700: '#a68659',
          800: '#86684a',
          900: '#6f573f',
        },
        warmgray: {
          50: '#f8f8f7',
          100: '#efefed',
          200: '#dcdcd8',
          300: '#b8b7b0',
          400: '#8e8c83',
          500: '#6B7264',
          600: '#5a5950',
          700: '#4a4942',
          800: '#3e3d38',
          900: '#343330',
        },
        purple: {
          50: '#f3f1f8',
          100: '#e9e5f3',
          200: '#d6cfe9',
          300: '#b9aed8',
          400: '#9786c3',
          500: '#7e69ad',
          600: '#6b5494',
          700: '#5a467a',
          800: '#4c3c66',
          900: '#190d39',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};

export default config;