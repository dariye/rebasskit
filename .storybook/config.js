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
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import centered from '@storybook/addon-centered';

const themes = [{ name: 'light' }, { name: 'dark' }]

const testResults = {}

addDecorator(withInfo);
addDecorator(withOptions({
 name: 'RebassKit'
}))
// addDecorators(withKnobs);
addDecorator(withThemesProvider(themes));
addDecorator(centered);
addDecorator(withViewport('desktop'))
addDecorator(checkA11y);
addDecorator(withBackgrounds([
 { name: 'primary', value: '#white', default: true },
]));
// addDecorator(withActions);
// addDecorator(withTests({results}));

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
