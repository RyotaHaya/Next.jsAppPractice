import colors from './colors'
import fontSizes from './fontSizes'
import letterSpacings from './letterSpacings'
import lineHeights from './lineHeights'
import space from './space'

export const theme = {
  space,
  fontSizes,
  letterSpacings,
  lineHeights,
  colors,
} as const

export const darkTheme = {
  ...theme,
  colors: {
    background: '#1b1c1d',
    backgroundInverse: '#333333',
    positive: '#9fd986',
    negative: '#df987d',
    primary: '#d43369',
    secondary: '#1b8bd0',
    tertiary: '#DDDDDD',
    text: '#FFFFFF',
  },
}
