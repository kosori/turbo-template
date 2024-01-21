import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

import colors from './colors';

export default {
  darkMode: ['class'],
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    borderRadius: {
      none: '0px',
      sm: 'calc(var(--radius) - 3px)',
      DEFAULT: 'var(--radius)',
      md: 'var(--radius)',
      lg: 'calc(var(--radius) + 3px)',
      xl: 'calc(var(--radius) + 6px)',
      '2xl': 'calc(var(--radius) + 9px)',
      '3xl': 'calc(var(--radius) + 12px)',
      full: '9999px',
    },
    colors,
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [animate],
} satisfies Config;
