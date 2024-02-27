import type { Meta, StoryObj } from '@storybook/react';

import StyledButton from './Button.tsx'; 

const meta: Meta = {
  title: 'Example/Button',
  component: StyledButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'radio'},
    options: ['small', 'medium', 'large'] } 
  },
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Submit',
    backgroundColor : '#3a4556', 
    size: 'medium',
    disabled: false 
  },
};
export const Secondary: Story = {
  args: {
    label: 'Submit',
    backgroundColor : '#cccccc', 
    size: 'medium',
    disabled: false 

  },
};

export const Small: Story = { 
  args: {
    label: 'Small', 
    backgroundColor : '#3a4556', 
    size: 'small',
    disabled: false 
  },
};
export const Medium: Story = { 
  args: {
    label: 'Medium', 
    backgroundColor : '#3a4556', 
    size: 'medium',
    disabled: false 
  },
};

export const Large: Story = { 
  args: {
    label: 'Large', 
    backgroundColor : '#3a4556', 
    size: 'large',
    disabled: false 

  },
};

export const Disabled: Story = { 
  args: {
    label: 'Disabled', 
    backgroundColor : '#3a4556', 
    size: 'medium',
    disabled: true 
  },
};