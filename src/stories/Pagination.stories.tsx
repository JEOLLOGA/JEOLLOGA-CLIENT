'use client';
import Pagination from '@components/common/pagination/Pagination';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number' },
      description: 'Currently active page',
    },
    totalPages: {
      control: { type: 'number' },
      description: 'Total number of pages',
    },
    onPageChange: { action: 'Page changed' },
    color: {
      control: { type: 'inline-radio', options: ['gray', 'white'] },
      description: 'Background color of the pagination container',
    },
  },
  args: {
    currentPage: 1,
    totalPages: 13,
    color: 'gray',
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const PaginationExample = (props: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  color: 'gray' | 'white';
}) => {
  const { onPageChange } = props;
  const [currentPage, setCurrentPage] = useState(props.currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange?.(page);
  };

  return (
    <Pagination
      {...props}
      currentPage={currentPage}
      onPageChange={handlePageChange}
      color={props.color}
    />
  );
};

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 13,
    color: 'white',
  },
  render: (args) => {
    return <PaginationExample {...args} />;
  },
};

export const TotalOne: Story = {
  args: {
    currentPage: 13,
    totalPages: 20,
    color: 'white',
  },
  render: (args) => {
    return <PaginationExample {...args} />;
  },
};

export const TotalThree: Story = {
  args: {
    currentPage: 1,
    totalPages: 3,
    color: 'white',
  },
  render: (args) => {
    return <PaginationExample {...args} />;
  },
};
