export const colors = {
  // Primary colors
  primary: {
    main: '#9147FF',
    light: '#772CE8',
    dark: '#6633CC',
    contrast: '#FFFFFF',
  },
  
  // Secondary colors
  secondary: {
    main: '#1A1A1A',
    light: '#2D2D2D',
    dark: '#0D0D0D',
    contrast: '#FFFFFF',
  },
  
  // Neutral colors
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray100: '#0D0D0D',
    gray200: '#1A1A1A',
    gray300: '#2D2D2D',
    gray400: '#404040',
    gray500: '#666666',
    gray600: '#808080',
    gray700: '#A6A6A6',
    gray800: '#CCCCCC',
    gray900: '#E6E6E6',
  },
  
  // Semantic colors
  semantic: {
    success: '#00FF95',
    warning: '#FFA500',
    error: '#FF4444',
    info: '#9147FF',
  },
  
  // Background colors
  background: {
    primary: '#000000',
    secondary: '#0D0D0D',
    tertiary: '#1A1A1A',
  },
  
  // Text colors
  text: {
    primary: '#FFFFFF',
    secondary: '#666666',
    disabled: '#404040',
    inverse: '#000000',
  },

  // Gradients
  gradients: {
    primary: ['#9147FF', '#772CE8'],
    gaming: ['#000000', '#0D0D0D', '#000000'],
    accent: ['#9147FF', '#772CE8'],
    neon: ['#9147FF', '#772CE8'],
  },
} as const;

export type Colors = typeof colors;
export type ColorKeys = keyof typeof colors; 