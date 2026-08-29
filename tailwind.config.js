/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#F7F7F5',
          dark: '#0D0D0E',
          DEFAULT: '#F7F7F5',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#171719',
          elevated: '#F0F0EE',
          'elevated-dark': '#222226',
          DEFAULT: '#FFFFFF',
        },
        border: {
          subtle: 'rgba(0, 0, 0, 0.08)',
          'subtle-dark': 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(0, 0, 0, 0.15)',
        },
        uxio: {
          yellow: '#FFCC48',
          orange: '#FF7F07',
          pink: '#FE385B',
          'pink-soft': '#F06C83',
          cyan: '#00F0FF',
        },
        text: {
          primary: '#111111',
          secondary: '#666666',
          muted: '#8E8E93',
        }
      },
      fontFamily: {
        display: ['var(--font-plus-jakarta-sans)', '"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['var(--font-inter)', '"Inter"', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', '"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.02em',
      },
      boxShadow: {
        'soft-sm': '0 2px 8px rgba(0, 0, 0, 0.02)',
        'soft': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 16px 40px rgba(0, 0, 0, 0.06)',
        'accent-glow': '0 0 24px rgba(254, 56, 91, 0.25)',
      },
      transitionTimingFunction: {
        'snappy': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
};
