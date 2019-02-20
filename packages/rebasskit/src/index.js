import React from 'react'
import hoistStatics from 'hoist-non-react-statics'
import styled from 'styled-components'
import {
  size,
  ratio,
  space,
  color,
  width,
  height,
  display,
  position,
  zIndex,
  right,
  bottom,
  left,
  flex,
  order,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
  opacity,
  variant,
  themeGet
} from 'styled-system'

import {
  Box as BoxBase,
  Flex as FlexBase,
  Text as TextBase,
  Heading as HeadingBase,
  Button as ButtonBase,
  Link as LinkBase,
  Image as ImageBase,
  Card as CardBase
} from 'rebass'


const mapProps = map => Component =>
  hoistStatics(props => <Component {...map(props)} />, Component)

const css = props => props.css
const themed = key => props => props.theme[key]

export const Arrow = ({ direction, ...props }) => {
  const borderRight = direction === 'left'
    ? `${props.size}em solid` : `${props.size*.7140571240}em solid transparent`
  const borderLeft = direction === 'right'
    ? `${props.size}em solid` : `${props.size*.7140571240}em solid transparent`
  const borderTop = direction === 'down'
    ? `${props.size}em solid` : `${props.size*.7140571240}em solid transparent`
  const borderBottom = direction === 'up'
    ? `${props.size}em solid` : `${props.size*.7140571240}em solid transparent`

  return (
    <BoxBase
      {...props}
      {...themed('Arrow')}
      css={{
        display: 'inline-block',
        width: 0,
        height: 0,
        verticalAlign: 'middle',
        borderRight,
        borderLeft,
        borderTop,
        borderBottom
      }}
    />
  )
}

Arrow.defaultProps = {
  as: 'span',
  direction: 'down',
  size: '.4375'
}

Arrow.displayName = 'Arrow'

export const Avatar = props =>
  <ImageBase
    css={{
      display: 'inline-block'
    }}
    {...props}
    {...themed('Avatar')} />

Avatar.defaultProps = {
  as: 'img',
  size: 48,
  borderRadius: 99999
}

Avatar.propTypes = {
  ...borderRadius.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...size.propTypes,
}

Avatar.displayName = 'Avatar'

export const BackgroundImage = styled(CardBase)({
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  width,
  ratio,
  space,
  color,
  backgroundImage,
  backgroundSize,
  themed('BackgroundImage'),
)

BackgroundImage.propTypes = {
  ...width.propTypes,
  ...ratio.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...backgroundSize.propTypes,
  ...backgroundImage.propTypes
}

BackgroundImage.defaultProps = {
  p: 4,
  py: 6,
  width: 1,
  ratio: 3/4
}

BackgroundImage.displayName = 'BackgroundImage'

export const Badge = styled(TextBase)({
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  fontSize,
  fontWeight,
  borderRadius,
  color,
  space,
  themed('Badge')
)

Badge.defaultProps = {
  fontSize: 0,
  px: 2,
  py: 1,
  mx: 1,
  color: 'white',
  bg: 'blue',
  fontWeight: 'bold',
  borderRadius: 2
}

Badge.propTypes = {
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...borderRadius.propTypes,
  ...color.propTypes,
  ...space.propTypes,
}

Badge.displayName = 'Badge'

export const Banner = styled(FlexBase)(
  {
    p: [3, 4],
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    bg: 'black'
  },
  minHeight,
  backgroundSize,
  backgroundPosition,
  backgroundImage,
  themed('Banner')
)

Banner.defaultProps = {
  minHeight: '80vh',
  backgroundSize: 'cover',
  backgroundPosition: 'cover'
}

Banner.displayName = 'Banner'


export const BlockLink = styled(LinkBase)({
    display: 'block',
    textDecoration: 'none'
  },
  space,
  color,
  width,
  themed('BlockLink')
)

BlockLink.defaultProps = {
  as: 'a',
  color: 'inherit'
}

BlockLink.displayName = 'BlockLink'

export const Blockquote = styled(TextBase)({
},
  themed('Blockquote')
)

Blockquote.defaultProps = {
  as: 'blockquote',
  fontSize: 3,
  m: 0
}

Blockquote.displayName = 'Blockquote'

export const Border = styled(BoxBase)({
  border: 1,
  borderColor: 'gray'
},
  space,
  width,
  borders,
  borderColor,
  themed('Border')
)

Border.defaultProps = {
  border: 1,
  borderColor: 'gray'
}

Border.displayName = 'Border'

export const ButtonCircle = props =>
  <ButtonBase
    {...props}
    {...themed('ButtonCircle')} />

ButtonCircle.defaultProps = {
  as: 'button',
  px: 3,
  borderRadius: 99999
}

ButtonCircle.displayName = 'ButtonCircle'

export const ButtonOutline = props => 
  <ButtonBase
    boxShadow={`inset 0 0 0 2px ${props => themeGet('colors.' + props.color, props.color)(props)}`}
    {...props}
    {...themed('ButtonOutline')}/>

ButtonOutline.defaultProps = {
  color: 'blue',
  bg: 'transparent',
  border: 1
}

ButtonOutline.displayName = 'ButtonOutline'

export const ButtonTransparent = props =>
  <ButtonBase
    {...props}
    {...themed('ButtonTransparent')}/>

ButtonTransparent.defaultProps = {
  bg: 'transparent',
  color: 'inherit'
}

ButtonTransparent.displayName = 'ButtonTransparent'

export const Caps = props =>
  <TextBase
    {...props}
    {...themed('Caps')}
    css={{
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    }}/>

Caps.defaultProps = {
  fontSize: 0
}

Caps.displayName = 'Caps'

export const Carousel = props =>
  <FlexBase
    css={{
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      '& > div': {
        flex: 'none',
        width: '100%',
      },
      '& > div:first-child': {
        marginLeft: `${props.index * -100}%`,
        transitionProperty: 'margin',
        transitionDuration: '.2s',
        transitionTimingFunction: 'ease-out'
      }
    }}
    {...props}
    {...themed('Carousel')}/>

Carousel.defaultProps = {
  width: 1
}

Carousel.displayName = 'Carousel'

export const Checkbox = props =>
  <TextBase
    {...props}
    {...themed('Checkbox')}
    as='input'
    type='checkbox' />

Checkbox.defaultProps = {
  m: 0,
  mr: 2
}

Checkbox.displayName = 'Checkbox'


export const Label = props =>
  <TextBase
    {...props}
    {...themed('Label')}
    as='label'
    css={{
      display: 'flex',
      alignItems: 'center'
    }} />

Label.defaultProps = {
  fontSize: 1,
  mb: 1,
}

Label.displayName = 'Label'

export const Circle = props =>
  <Badge
    {...props}
    {...themed('Circle')}
    css={{
      align: 'center',
      borderRadius: '99999px'
    }}
  />

Circle.defaultProps = {
  size: 24,
  align: 'center',
  borderRadius: 999999
}

Circle.displayName = 'Circle'

export const Close = props =>
  <ButtonTransparent
    {...props}
    {...themed('Close')}
    size={props.size || 24} />

Close.defaultProps = {
  lineheight: 1,
  children: 'x',
  fontSize: 3,
  p: 0
}

Close.displayName = 'Close'

export const Code = props =>
  <TextBase
    as='code'
    fontSize={1}
    css={{
      fontFamily: 'mono'
    }}
    {...props}
    {...themed('Code')} />

Code.displayName = 'Code'

export const Column = props =>
  <BoxBase
    flex='1 1 auto'
    px={3}
    mb={4}
    {...props}
    {...themed('Column')}
  />

Column.displayName = 'Column'

export const Container = props =>
  <BoxBase
    mx='auto'
    maxWidth={props.maxWidth || 1024}
    {...props}
    {...themed('Container')}
  />

Container.displayName = 'Container'

export const Divider = props =>
  <BoxBase
    as='hr'
    mx={0}
    my={3}
    border={0}
    borderColor='gray'
    {...props}
    {...themed('Divider')} />

Divider.displayName = 'Divider'

export const Donut = props => {
  const R = 16 - props.strokeWidth
  const C = 2 * Math.PI * R
  return (
    <svg
      {...props}
      viewBox='0 0 32 32'
      width={props.size}
      height={props.size}>
      <circle
        cx={16}
        cy={16}
        r={R}
        fill='none'
        stroke='currentColor'
        strokeWidth={props.strokeWidth}
        opacity='.125'/>
      <circle
        cx={16}
        cy={16}
        r={R}
        fill='none'
        stroke='currentcolor'
        strokeWidth={props.strokeWidth}
        strokeDasharray={C}
        strokeDashoffset={C - props.value * C}
        transform='rotate(-90 16 16)' />
    </svg>
  )
}

Donut.defaultProps = {
  color: 'blue',
  strokeWidth: 2,
  size: 128,
  value: 1
}

Donut.displayName = 'Donut'

export const Row = props =>
  <FlexBase
    {...props}
    {...themed('Row')}
    mx={-3}
  />

Row.displayName = 'Row'

export const Dot = props =>
  <ButtonBase
    {...props}
    {...themed('Dot')}
    m={0}
    p={0}
    css={{
      appearance: 'none',
      backgroundClip: 'padding-box',
      paddingRight: 0,
    }}
  />

Dot.defaultProps = {
  size: 16,
  borderRadius: 99999,
  borderColor: 'transparent',
  bg: 'darken',
  border: 4,
}

Dot.displayName = 'Dot'


const transforms = {
  left: 'translateX(-100%)',
  right: 'translateX(100%)',
  top: 'translateT(-100%)',
  bottom: 'translateY(1000%)'
}

const side = ({ side }) => {
  if (!transforms[side]) return {
    top: 0,
    left: 0,
    bottom: 0
  }

  const h = /^(left|right)$/.test(side) ? 1 : 0
  const top = /^(top|left|right)$/.test(side) ? 0 : null
  const bottom = /^(bottom|left|right)$/.test(side) ? 0 : null
  const left = /^(left|top|bottom)$/.test(side) ? 0 : null
  const right = /^(right|top|bottom)$/.test(side) ? 0 : null

  return { top, bottom, left, right }
}

const transform = ({ open, side }) => ({
  transform: open ? null : transforms[side] || transform.left
})

export const Drawer = props =>
  <BoxBase
    position='fixed'
    color='white'
    bg='black'
    width={320}
    {...props}
    {...themed('Drawer')}
    side
    transform
    overflowX='hidden'
    overflowY='auto'
    transitionProperty='transform'
    transitionDuration='.2s'
    transitionTimingFunction='ease-out'
  />

Drawer.defaultProps = {
  open: false,
  side: 'bottom'
}


export const Base = styled(BoxBase)(display)

export const Hide = mapProps(({
  xsmall,
  small,
  medium,
  large,
  xlarge,
  display,
  ...props,
}) => ({
  display: display || [
    xsmall,
    small,
    medium,
    large,
    xlarge,
  ].map(n => n ? 'none' : 'block'),
  ...props,
}))(Base)

Hide.displayName = 'Hide'

export const Position = styled(BoxBase)(
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  themed('Position')
)

Position.displayName = 'Position'

export const Relative = styled(Position)([])

Relative.defaultProps = {
  position: 'relative'
}

Relative.displayName = 'Relative'

export const Absolute = styled(Position)([])

Absolute.defaultProps = {
  position: 'absolute'
}

Absolute.displayName = 'Absolute'

export const Fixed = styled(Position)([])

Fixed.defaultProps = {
  position: 'fixed'
}

Fixed.displayName = 'Fixed'

export const Sticky = styled(Position)([])

Sticky.defaultProps = {
  position: 'sticky'
}

Sticky.displayName = 'Sticky'


export const Pre = props =>
  <TextBase
    {...props}
    as='pre'
    fontFamily='Menlo, monospace'
    p={2}
    bg='lightgray'
  />


export {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Link,
  Image,
  Card
} from 'rebass'

export default {
  Arrow,
  Avatar,
  BackgroundImage,
  Banner,
  BlockLink,
  Blockquote,
  Border,
  ButtonCircle,
  ButtonOutline,
  ButtonTransparent,
  Caps,
  Carousel,
  Checkbox,
  Circle,
  Close,
  Code,
  Column,
  Container,
  Divider,
  Donut,
  Label,
  Row,
  Base,
  Hide,
  Position,
  Relative,
  Absolute,
  Fixed,
  Sticky,
  Pre
}
