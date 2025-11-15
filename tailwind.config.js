/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bottle Green - Primary backgrounds
        navy: {
          50: '#e6f7f3',
          100: '#ccefe7',
          200: '#99dfcf',
          300: '#66cfb7',
          400: '#33bf9f',
          500: '#00af87',
          600: '#008f6f',
          700: '#006f57',
          800: '#004f3f',
          900: '#003D2E', // Primary bottle green (darker)
          950: '#002D22', // Even darker bottle green
          DEFAULT: '#006A4E', // Use bottle green as default
          dark: '#004D38',
          light: '#008060',
          darker: '#003D2E',
        },
        // Light Orange - Primary buttons/CTAs
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c', // Primary orange
          500: '#f97316', // Hover orange
          600: '#ea580c', // Active orange
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          DEFAULT: '#fb923c',
          hover: '#f97316',
          active: '#ea580c',
        },
        // Heritage Gold - Accents
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E5C158',
          dark: '#B8941F',
        },
        // Success Green
        success: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
        // Cream - Soft backgrounds
        cream: {
          50: '#fefce8',
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#f8f9fa', // Primary cream (neutral gray-white)
          DEFAULT: '#f8f9fa',
        },
        // Additional brand colors
        'heritage-gold': '#D4AF37',
        'dhaka-green': '#10b981',
        'warm-burgundy': '#dc2626',
        'elegant-cream': '#f8f9fa',
        'soft-white': '#FAFAFA',
        'light-gray': '#f1f5f9',
        'deep-charcoal': '#1f2937',
      },
      fontFamily: {
        sans: ['ObjectSans', 'sans-serif'], // Default sans font
        playfair: ['Playfair Display', 'serif'],
        body: ['ObjectSans', 'sans-serif'],
        tomorrow: ['Tomorrow', 'sans-serif'],
        objectsans: ['ObjectSans', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [],
}