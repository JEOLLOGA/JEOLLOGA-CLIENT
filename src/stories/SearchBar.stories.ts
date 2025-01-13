import SearchBar from '@components/common/button/searchBar/SearchBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
