import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F4F7F5',
          100: '#E4ECE7',
          200: '#C5D7CD',
          300: '#A0BCB0',
          400: '#7B9F90',
          500: '#5C8373',
          600: '#47685A',
          700: '#2C4A3E', // Primary Eucalyptus Sage
          800: '#1F362D', // Primary Hover
          900: '#14251F',
        },
        terracotta: {
          50: '#FDF7F4',
          100: '#FAF0E9',
          200: '#F4DCCE',
          300: '#E8C0AB',
          400: '#D79D80',
          500: '#C47A5A', // Warm Coastal Terracotta
          600: '#A85E3E',
          700: '#8A472C',
          800: '#6D341E',
          900: '#522514',
        },
        linen: {
          50: '#FAF8F5',  // Warm Linen Cream Page Background
          100: '#F2ECE1', // Soft Oatmeal Card Base
          200: '#E5DFD5', // Border Sand
          300: '#D6CDC0',
          400: '#B8AAA0',
        },
        slate: {
          800: '#2B3531',
          900: '#1A2421', // Deep Forest Charcoal Text
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0px 4px 20px -2px rgba(44, 74, 62, 0.04), 0px 2px 6px -1px rgba(44, 74, 62, 0.02)',
        'floating': '0px 12px 32px -4px rgba(44, 74, 62, 0.08), 0px 4px 12px -2px rgba(44, 74, 62, 0.04)',
        'modal': '0px 24px 48px -12px rgba(26, 36, 33, 0.18)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
};
export default config;
