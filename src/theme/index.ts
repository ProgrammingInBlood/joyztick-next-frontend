import { colors } from './colors';
import { typography } from './typography';

export const theme = {
  colors,
  typography,
  
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
  
  transitions: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
  },
} as const;

export type Theme = typeof theme;
export type ThemeKeys = keyof Theme;

export * from './colors';
export * from './typography'; 