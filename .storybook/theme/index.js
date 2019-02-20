import { parseToHsl, hsl, getLuminance } from 'polished'

//
// const addAliases = (arr, aliases) =>
//   aliases.forEach((key, i) =>
//     Object.defineProperty(arr, key, {
//       enumerable: false,
//       get() {
//         return this[i]
//       }
//     })
//   )
//
// export const breakpoints = [32, 40, 48, 64]
//
// export const mediaQueries = breakpoints.map(createMediaQuery)
//
// const aliases = ['sm', 'md', 'lg', 'xl']
//
// addAliases(breakpoints, aliases)
// addAliases(mediaQueries, aliases)
//
// export const space = [0, 4, 8, 16, 32, 64, 128]
//
// export const fonts = {
//   sans: `'Helvetica Neue', Helvetica, Arial, sans-serif`,
//   mono: `Menlo, monospace`
// }
//
// export const fontSizes = [12, 14, 16, 20, 24, 32, 48]
// export const light = 200
// export const regular = 400
// export const bold = 600
//
// export const fontWeights = {
//   light,
//   regular,
//   bold
// }
//
// export const letterSpacings = {
//   normal: 'normal',
//   caps: '0.025em'
// }
//
// export const radii = [0, 2, 6]
// export const radius = '2px'
// export const maxWidth = '1200px'
//
// export const boxShadows = [
//   `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
//   `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
//   `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
//   `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`
// ]
//
// export const duration = {
//   fast: `150ms`,
//   normal: `300ms`,
//   slow: `450ms`,
//   slowest: `600ms`
// }
//
// const easeInOut = 'cubic-beizer(.5,0,0,.25,1)'
// const easeOut = 'cubic-beizer(0,0,.25,1)'
// const easeIn = 'cubic-bezier(.5,0,1,1)'
//
// const timingFunctions = {
//   easeInOut,
//   eastOut,
//   easeIn
// }
//
//
// const transitionDelays = {
//   small: `60ms`,
//   medium: `160ms`,
//   large: `260ms`,
//   xLarge: `360ms`
// }
//
// const names = [
//   'red',
//   'orange',
//   'yellow',
//   'lime',
//   'green',
//   'teal',
//   'cyan',
//   'blue',
//   'indigo',
//   'violet',
//   'fuchsia',
//   'pink',
//   'red'
// ]
//
// const hueName = h => {
//   const i = Math.round((h - 2) / 30)
//   const name = names[i]
//   return name
// }
//
// const createHues = h =>
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
//   .map(n => Math.floor((h + (n * 360 / 12)) % 360))
//
// export const createColors = base => {
//   const colors = {
//     black: '#000',
//     white: '#fff',
//     darken: 'rgba(0,0,0,.25)',
//     gray: '#eee'
//   }
//
//   const { hue, saturation, lightness } = parseToHsl(base)
//   const hues = createHues(hue)
//   hues.forEach(h => {
//     const name = hueName(h)
//     colors[name] = hsl(h, saturation, lightness)
//   })
//
//   return colors
// }
//
// export const invertLuminance = base => {
//   const luminance = getLuminance(base)
//   const { hue, saturation } = parseToHsl(base)
//   return hsl(hue, saturation, 1 - luminance)
// }
//
// export const colors = createColors('#06e')
//
// const theme = {
//   breakpoints,
//   mediaQueries,
//   space,
//   fonts,
//   fontSizes,
//   fontWeights,
//   letterSpacings,
//   radii,
//   radius,
//   maxWidth,
//   duration,
//   timingFunctions,
//   transitionDelays,
//   colors,
// }
//
// export default theme

const createMediaQuery = n => `@media screen and (min-width:${n}em)`

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i]
      }
    })
  )

export const breakpoints = [32, 40, 48, 64]

export const mediaQueries = breakpoints.map(createMediaQuery)

const aliases = ['sm', 'md', 'lg', 'xl']

addAliases(breakpoints, aliases)
addAliases(mediaQueries, aliases)

export const space = [0, 4, 8, 16, 32, 64, 128]

export const font = `'Montserrat','Helvetica Neue',Helvetica,Arial,sans-serif`

export const fontSizes = [12, 14, 16, 20, 24, 32, 48]

export const regular = 400
export const bold = 600

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = {
  regular,
  bold
}

const letterSpacings = {
  normal: 'normal',
  caps: '0.025em'
}

const names = [
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'teal',
  'cyan',
  'blue',
  'indigo',
  'violet',
  'fuchsia',
  'pink',
  'red'
]

const hueName = h => {
  const i = Math.round((h - 2) / 30)
  const name = names[i]
  return name
}

const createHues = h =>
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  .map(n => Math.floor((h + (n * 360 / 12)) % 360))

export const createColors = base => {
  const colors = {
    black: '#000',
    white: '#fff',
    darken: 'rgba(0,0,0,.25)',
    gray: '#eee'
  }

  const { hue, saturation, lightness } = parseToHsl(base)
  const hues = createHues(hue)
  hues.forEach(h => {
    const name = hueName(h)
    colors[name] = hsl(h, saturation, lightness)
  })

  return colors
}

export const invertLuminance = base => {
  const luminance = getLuminance(base)
  const { hue, saturation } = parseToHsl(base)
  return hsl(hue, saturation, 1 - luminance)
}

export const colors = createColors('#06e')


export const radii = [0, 2, 6]
export const radius = '2px'

export const maxContainerWidth = '1280px'

// boxShadows
export const boxShadows = [
  `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`
]

// animation duration
export const duration = {
  fast: `150ms`,
  normal: `300ms`,
  slow: `450ms`,
  slowest: `600ms`
}

// animation easing curves
const easeInOut = 'cubic-bezier(0.5, 0, 0.25, 1)'
const easeOut = 'cubic-bezier(0, 0, 0.25, 1)'
const easeIn = 'cubic-bezier(0.5, 0, 1, 1)'

const timingFunctions = {
  easeInOut,
  easeOut,
  easeIn
}

// animation delay
const transitionDelays = {
  small: `60ms`,
  medium: `160ms`,
  large: `260ms`,
  xLarge: `360ms`
}

export default {
  breakpoints,
  mediaQueries,
  space,
  font,
  fontSizes,
  fontWeights,
  letterSpacings,
  regular,
  bold,
  colors,
  radii,
  radius,
  boxShadows,
  maxContainerWidth,
  duration,
  timingFunctions,
  transitionDelays
}
