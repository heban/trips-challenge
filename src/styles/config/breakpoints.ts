const bps = [480, 768, 992, 1280, 1470, 1600, 1920]

const breakpoints = {
  sm: `${bps[0]}px`,
  md: `${bps[1]}px`,
  lg: `${bps[2]}px`,
  xl: `${bps[3]}px`,
  '2xl': `${bps[4]}px`,
  '3xl': `${bps[5]}px`,
  fullHD: `${bps[6]}px`,
}

const mq = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  mdMax: `@media (max-width: ${parseInt(breakpoints.md) - 1}px)`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  lgMax: `@media (max-width: ${parseInt(breakpoints.lg) - 1}px)`,
  lgMinMax: `@media (min-width: ${breakpoints.lg}) and (max-width: ${parseInt(breakpoints.xl) - 1}px)`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  xlMinMax: `@media (min-width: ${breakpoints.xl}) and (max-width: ${parseInt(breakpoints['2xl']) - 1}px)`,
  xxl: `@media (min-width: ${breakpoints['2xl']})`,
  xxxl: `@media (min-width: ${breakpoints['3xl']})`,
  fullHD: `@media (min-width: ${breakpoints.fullHD})`,
}

const appMaxWidth = '1280px'
const appDesktopPadding = '0px 30px'
const appMobilePadding = '0px 15px'

export { mq, appMaxWidth, appDesktopPadding, appMobilePadding, breakpoints }

export default breakpoints
