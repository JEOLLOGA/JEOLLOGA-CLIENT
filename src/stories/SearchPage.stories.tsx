import SearchPage from '@pages/searchPage/SearchPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Page/SearchPage',
  component: SearchPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onSearch: (text: string) => alert(`Search: ${text}`),
  },
} satisfies Meta<typeof SearchPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
