import React from 'react'
import hoistStatics from 'hoist-non-react-statics'
import styled from 'styled-components'
import {
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
  opacity,
  variant,
} from 'styled-system'

import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Link,
  Image,
  Card
} from 'rebass'

const mapProps = map => Component =>
  hoistStatics(props => <Component {...map(props)} />, Component)

const css = props => props.css
const themed = key => props => props.theme[key]

export const Arrow = styled(Box)`
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  border-right: .3125em solid transparent;
  border-left: .3125em solid transparent;
  border-top: ${props => props.direction === 'down' ? '.4375em solid' : ''};
  border-bottom: ${props => props.direction === 'up' ? '.4375em solid' : ''};
  ${space}
  ${color}
  ${themed('Arrow')}
`

Arrow.defaultProps = {
  as: 'span',
  direction: 'down'
}

Arrow.displayName = 'Arrow'

export const Base = styled(Box)(display)

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

export const Position = styled(Box)(
  position,
  zIndex,
  top,
  right,
  bottom,
  left
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

export const Container = props =>
  <Box
    mx='auto'
    css={{
      maxWidth: '1024px'
    }}
  />

Container.displayName = 'Container'

export const Pre = props =>
  <Text
    {...props}
    as='pre'
    fontFamily='Menlo, monospace'
    p={2}
    bg='lightgray'
  />


export default {
  Arrow,
  Base,
  Hide,
  Position,
  Relative,
  Absolute,
  Fixed,
  Sticky,
  Container,
  Pre
}
