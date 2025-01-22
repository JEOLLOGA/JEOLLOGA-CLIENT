import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Except',
  component: ExceptLayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['networkError', 'loading'],
    },
  },
  args: {
    type: 'networkError',
  },
} satisfies Meta<typeof ExceptLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
