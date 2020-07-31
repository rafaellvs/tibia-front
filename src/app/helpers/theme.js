const colors = {
  primary: '#0d47a1',
  secondary: '#c2185b',
  background: 'lavender',

  error: '#D41D5F',
  alert: '#F27468',
  success: '#00d756',

  white: '#f8f9ff',
  black: '#262E4D',
}

const variants = {
  default: {
    fontFamily: 'Montserrat',
    color: colors.primary,
  },
}

const breakpoints = {
  xSmall: 480,
  small: 768,
  medium: 1024,
  large: 1280,
  xLarge: 1600,
}

const theme = {
  colors,
  variants,
  breakpoints,
}

export default theme
