import FilterPage from '@app/filter/page';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'page/FilterPage',
  component: FilterPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
