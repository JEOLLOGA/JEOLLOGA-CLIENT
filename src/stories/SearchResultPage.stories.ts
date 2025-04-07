import type { Meta, StoryObj } from '@storybook/react';
import SearchResultPage from 'src/app/searchResult/page';

const meta = {
  title: 'Page/SearchResultPage',
  component: SearchResultPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchResultPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
