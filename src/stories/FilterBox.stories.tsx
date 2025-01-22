import FilterBox from '@components/filter/filterBox/FilterBox';
import FILTERS from '@constants/filters';
import type { Meta, StoryObj } from '@storybook/react';
import titleMap from 'src/type/titleMap';

const mockFiltersState = Object.fromEntries(FILTERS.region.map((item) => [item, 0]));

const mockOnToggleFilter = (filterName: string) => {
  console.log(`Toggled filter: ${filterName}`);
};

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

export const Region: Story = {
  args: {
    title: titleMap.region,
    items: FILTERS.region,
    id: 'region',
    filtersState: mockFiltersState,
    onToggleFilter: mockOnToggleFilter,
  },
};

export const Purpose: Story = {
  args: {
    title: titleMap.purpose,
    items: FILTERS.purpose,
    id: 'purpose',
    filtersState: mockFiltersState,
    onToggleFilter: mockOnToggleFilter,
  },
};

export const Activity: Story = {
  args: {
    title: titleMap.activity,
    items: FILTERS.activity,
    id: 'activity',
    filtersState: mockFiltersState,
    onToggleFilter: mockOnToggleFilter,
  },
};

export const Price: Story = {
  args: {
    title: '가격',
    items: [],
    id: 'price',
    filtersState: {},
    onToggleFilter: mockOnToggleFilter,
  },
};
