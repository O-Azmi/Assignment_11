import type { Meta, StoryObj } from '@storybook/react';

import StyledLabel from './Label.tsx'; 

const meta: Meta = {
  title: 'Example/Label',
  component: StyledLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    font: { control: { type: 'radio'},
    options: ['default', 'bold', 'italic'] } 
  },
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Label',
    font: 'default',
  },
};

export const Invalid: Story = {
    args: {
      label: 'Label',
      font: 'default',
      isValid: true
    },
  };
export const Disabled: Story = {
    args: {
      label: 'Label',
      font: 'default',
      disabled: true
    },
  };