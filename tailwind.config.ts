import type { Config } from "tailwindcss";
import { colors } from './src/theme/colors'
import { typography } from './src/theme/typography'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        neutral: colors.neutral,
        semantic: colors.semantic,
        background: colors.background,
        text: colors.text,
      },
      fontFamily: {
        primary: [typography.fonts.primary, 'sans-serif'],
        secondary: [typography.fonts.secondary, 'sans-serif'],
        gaming: [typography.fonts.gaming, 'cursive'],
      },
      fontSize: typography.sizes,
      lineHeight: typography.lineHeights,
      letterSpacing: typography.letterSpacing,
      borderRadius: {
        none: '0',
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
