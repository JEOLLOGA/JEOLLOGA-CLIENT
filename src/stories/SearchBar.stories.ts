import SearchBar from '@components/search/searchBar/SearchBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onSearch: (text: string) => alert(`Search: ${text}`),
  },
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
