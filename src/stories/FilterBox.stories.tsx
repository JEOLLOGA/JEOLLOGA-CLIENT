import FilterBox from '@components/filter/filterBox/FilterBox';
import FILTERS from '@constants/filters';
import type { Meta, StoryObj } from '@storybook/react';
import titleMap from 'src/type/titleMap';

const meta = {
  title: 'Filter/FilterBox',
  component: FilterBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: titleMap.region,
    items: FILTERS.region,
    id: '1',
  },
};

export const Purpose: Story = {
  args: {
    title: titleMap.purpose,
    items: FILTERS.purpose,
    id: '1',
  },
};

export const Activity: Story = {
  args: {
    title: titleMap.activity,
    items: FILTERS.activity,
    id: '1',
  },
};
