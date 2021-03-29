import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Switch from '../src/components/Switch/Switch';

export default {
  title: 'Switch',
  decorators: [
    withKnobs,
    (storyFn: () => React.ReactNode): React.ReactNode => storyFn(),
  ],
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const SwitchStory = () => {
  return <Switch />;
};

export const SwitchStoryChecked = () => {
  return <Switch checked="true" />;
};

SwitchStory.story = {
  name: 'Switch',
};
