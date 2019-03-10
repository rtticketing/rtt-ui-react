import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import { Theme } from '../src/components/Theme';
import themes from '../src/themes/default.module.css';
import '../src/index.css';

const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => {
  return <Theme vars={themes}>{() => story()}</Theme>;
});

configure(loadStories, module);
