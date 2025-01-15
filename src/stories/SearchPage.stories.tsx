import SearchPage from '@pages/SearchPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Page/SearchPage',
  component: SearchPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
