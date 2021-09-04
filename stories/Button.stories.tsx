import React from 'react';

import { Meta, Story } from '@storybook/react';

import Button from '../src/Button';

export default {
  title: 'Button',
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const BasicButton: Story = () => {
  return <Button>Type something</Button>;
};
