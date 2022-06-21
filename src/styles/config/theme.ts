import { theme as defaultTheme, extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import bp from './breakpoints'
import colors from './colors'

const theme = extendTheme({
  ...defaultTheme,
  breakpoints: createBreakpoints({ sm: bp.sm, md: bp.md, lg: bp.lg, xl: bp.xl, '2xl': bp['2xl'], '3xl': bp['3xl'], fullHD: bp.fullHD }),
  colors: {
    ...defaultTheme.colors,
    ...colors,
  },
})

export default theme
export { theme }
