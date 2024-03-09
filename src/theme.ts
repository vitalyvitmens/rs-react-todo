import { createTheme } from '@mantine/core'

export const theme = createTheme({
  colors: {
    note: [
      '#FFF8E6',
      '#FFE9B3',
      '#FFD97F',
      '#FFC94C',
      '#FFB900',
      '#CC9500',
      '#996F00',
      '#664A00',
      '#332400',
      '#000000',
    ],
  },
  primaryColor: 'note',
  primaryShade: { light: 0, dark: 9 },
  fontFamily: 'Open Sans, sans-serif',
  radius: {
    sm: '4',
    md: '8',
    lg: '12',
    xl: '16',
  },
  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.1)',
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
    xl: '0 16px 32px rgba(0, 0, 0, 0.1)',
  },
})
