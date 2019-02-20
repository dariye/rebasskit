import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { configure, addDecorator } from '@storybook/react';
import { withActions } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { checkA11y } from '@storybook/addon-a11y';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withInfo } from '@storybook/addon-info';
import { withTests } from '@storybook/addon-jest';
import { withKnobs } from '@storybook/addon-knobs';
import { withOptions } from '@storybook/addon-options';
import { withViewport } from '@storybook/addon-viewport';
import { withThemes } from 'storybook-styled-components'
import defaultTheme from './theme'

const themes = {
  defaultTheme
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`

addDecorator(withInfo);
addDecorator(withOptions({
  name: 'rebasskit',
  url: 'https://github.com/pauldariye/rebasskit',
  sortStoriesByKind: true,
}))
addDecorator(story => (
  <div>
    <GlobalStyle />
    {story()}
  </div>
))
addDecorator(withThemes(themes));
addDecorator(withViewport('desktop'))
addDecorator(checkA11y);
addDecorator(withBackgrounds([
 { name: 'primary', value: '#white', default: true },
]));

// addDecorator(withActions);
// addDecorator(withTests({results}));

function loadStories() {
  const req = require.context('../stories', true, /.stories.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
