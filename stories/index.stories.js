import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {
  withKnobs,
  text,
  boolean,
  color,
  object,
  array,
  select,
  radios,
  files,
  date,
  button,
  number } from '@storybook/addon-knobs';

import { Welcome } from '@storybook/react/demo';

import {
  Flex,
  Box,
  Image,
  Link,
  Button,
  Card,
  Heading,
  Text,
  Absolute,
  Relative,
  Fixed,
  Sticky,
  Arrow,
  Avatar,
  BackgroundImage,
  Badge,
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
  Dot,
  Drawer,
  Label,
  Row
} from '../packages/rebasskit'

const stories = storiesOf('components', module)
stories.addDecorator(withKnobs);

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// stories.add('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//       {#<{(| <Pre>Hi</Pre> |)}>#}
//     </Button>
//   ));

stories.add('Absolute', () =>
    <Relative p={100}>
      <Absolute bottom={0} left={0}>Absolute</Absolute>
    </Relative>
  )

stories.add('Arrow', () =>
  <Arrow
    size={number('size', 0.4375)}
    direction={text('direction','up')}/>
)

stories.add('Avatar', () => <Avatar size={32} src='https://picsum.photos/200' />)

stories.add('BackgroundImage', () =>
    <BackgroundImage
      ratio={1/2}
      backgroundImage='url(https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20)'
      >
      </BackgroundImage>
      )

stories.add('Badge', () =>
  <Heading>
    Hello<Badge>Beep</Badge>
  </Heading>
  )

stories.add('Banner', () =>
    <Banner
      color='white'
      bg='darken'
      backgroundImage='url(https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20)'>
      <Heading
        fontSize={[ 4, 5, 6, 7 ]}>
        Hello
      </Heading>
    </Banner>
  )

stories.add('BlockLink', () =>
    <BlockLink
      href='#!'
      children='Hello'
    />)

stories.add('Blockquote', () =>
    <Blockquote>
  “The simplest scale is a single note, and sticking with a single note draws more attention to other parameters, such as rhythm and inflection.”
</Blockquote>
  )

stories.add('Border', () =>
  <Border
  py={2}
  top
  bottom>
    Hello
  </Border>
  )

stories.add('Box', () =>
  <Box
    px={3}
    py={4}
    color='white'
    bg='blue'>
    Hello
  </Box>
  )

stories.add('Button', () =>
    <Button
      children='Hello'
    />
  )


stories.add('ButtonCircle', () =>
    <ButtonCircle
      children='Hello'
    />
  )

stories.add('ButtonOutline', () =>
    <ButtonOutline
      children='Hello'
    />
  )

stories.add('ButtonTransparent', () =>
    <ButtonTransparent>
      Hello
    </ButtonTransparent>
  )

stories.add('Caps', () =>
    <Caps>Hello</Caps>
  )

stories.add('Cards', () =>
    <Card width={256}
      borderRadius={[2]}
      boxShadow={[2]}
    >
      <BackgroundImage
        ratio={1}
        backgroundImage='url(https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20)'
      />
    <Heading p={2}>
      Hello
    </Heading>
  </Card>
  )

stories.add('Carousel', () =>
    <Carousel
  index={false ? 1 : 0}>
    <Box bg='blue'>
      <Flex
        p={6}
        justify='center'
        align='center'>
        <Heading>Hello</Heading>
      </Flex>
    </Box>
    <Box bg='gray'>
      <Flex
        p={6}
        justify='center'
        align='center'>
        <Heading>Rebass</Heading>
      </Flex>
    </Box>
  </Carousel>
  )

stories.add('Checkbox', () =>
    <Label>
      <Checkbox defaultChecked />
      Hello
    </Label>
  )

stories.add('Circle', () =>
    <Circle>
      A
    </Circle>
  )

stories.add('Close', () =>
    <Close />
  )

stories.add('Code', () =>
    <Code children='<Hello />' />
  )

stories.add('Column', () =>
    <Row>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
    </Row>
  )

stories.add('Container', () =>
    <Container>
    Hello
  </Container>
  )

stories.add('Divider', () =>
    <Divider
      w={1}
      borderColor='blue'
    />
  )

stories.add('Donut', () =>
    <Donut
      value={2/3}
      strokeWidth={3}
      size={256}
      color='blue'
    />
  )

stories.add('Dot', () =>
    <Flex>
      <Dot bg='black' />
      <Dot />
      <Dot />
    </Flex>
  )


class DrawerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props.initialState
    }
  }
  handleClick() {
    this.setState({ open: !this.state.open })
  }
  render() {
    const { open } = this.state
    return (
      <>
      <Button onClick={() => this.handleClick() }>
        {open? "Close" : "Open"}
      </Button>
      <Drawer
        size={256}
        position="bottom"
        open>
        <Heading>Hello</Heading>
      </Drawer>
      </>
    )
  }
}

stories.add('Drawer', () =>
  <DrawerComponent initialState={{ open: false }} />)

