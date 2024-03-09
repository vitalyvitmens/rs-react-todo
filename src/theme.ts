import { createTheme } from '@mantine/core'

export const theme = createTheme({
  colors: {
    todo: [
      '#FFFF00',
      '#008000',
      '#FFD97F',
      '#FFC94C',
      '#A52A2A',
      '#0000FF',
      '#996F00',
      '#FF0000',
      '#332400',
      '#000000',
    ],
  },
  primaryColor: 'todo',
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
    md: '-3px 3px 2px black',
    lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
    xl: '0 16px 32px rgba(0, 0, 0, 0.1)',
  },
})
