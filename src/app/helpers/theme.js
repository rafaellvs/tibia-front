const colors = {
  background: 'rgba(255, 255, 255, .9)',
  hover: '#9c9c9c',
  hoverDark: '#686868',
  white: 'white',
  black: 'black',
}

const variants = {
  default: {
    fontFamily: 'Montserrat',
    color: colors.black,
  },
  hideOverflow: {
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  oneLine: {
    whiteSpace: 'nowrap',
  },
}

const breakpoints = {
  xSmall: 480,
  small: 768,
  medium: 1024,
  large: 1280,
  xLarge: 1600,
}

const boxShadow = {
  default: '10px 30px 20px 10px rgba(0,0,0,0.75);',
  noBreadcrumbs: '10px 10px 20px 10px rgba(0,0,0,0.75);',
}

const navbarHeight = '55px'

const theme = {
  colors,
  variants,
  breakpoints,
  boxShadow,
  navbarHeight,
}

export default theme
