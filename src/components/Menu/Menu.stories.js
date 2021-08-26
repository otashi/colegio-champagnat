import React from 'react';
import { Blanket } from '../Blanket';
import { Menu } from '.';

export default {
  title: 'Components/Menu',
  component: Menu,
  decorators: [
    (Story) => (
      <Blanket>
        <Story />
      </Blanket>
    ),
  ],
};

export const Primary = () => <Menu />;
