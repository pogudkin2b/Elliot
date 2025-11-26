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
        cream: '#FDF8F3',
        sand: '#F5E6D3',
        terracotta: {
          DEFAULT: '#C67B5C',
          dark: '#A65D42',
          light: '#D99B7F',
        },
        sage: {
          DEFAULT: '#8B9A7D',
          dark: '#6B7A5D',
          light: '#B8C4AC',
          lighter: '#D4DCC9',
        },
        peach: '#EACEBE',
        clay: '#D4A574',
        charcoal: '#2D2A26',
        'warm-gray': '#6B6560',
        'light-gray': '#E8E4DF',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(45, 42, 38, 0.05), 0 10px 20px -2px rgba(45, 42, 38, 0.08), 0 20px 40px -4px rgba(45, 42, 38, 0.06)',
        'soft-lg': '0 10px 15px -3px rgba(45, 42, 38, 0.08), 0 20px 40px -4px rgba(45, 42, 38, 0.1), 0 40px 60px -8px rgba(45, 42, 38, 0.08)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(45, 42, 38, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob-morph 8s ease-in-out infinite',
        'gentle-bounce': 'gentle-bounce 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'blob-morph': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 70% 70% 30% / 30% 70% 70% 30%' },
          '50%': { borderRadius: '50% 50% 30% 70% / 50% 50% 70% 30%' },
          '75%': { borderRadius: '70% 30% 50% 50% / 30% 70% 30% 70%' },
        },
        'gentle-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
