import DetailTitle from '@components/detailTitle/DetailTitle';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/DetailTitle',
  component: DetailTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Title text displayed in the component',
    },
    isTotal: {
      control: { type: 'boolean' },
      description: 'Determines if the "전체보기" button is shown',
    },
  },
  args: {
    title: 'Default Title',
    isTotal: false,
  },
} satisfies Meta<typeof DetailTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ReviewButton: Story = {
  args: {
    title: '리뷰',
    isTotal: true,
  },
};

export const WithoutButton: Story = {
  args: {
    title: '템플스테이 정보',
  },
};
