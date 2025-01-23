import PopularCarousel from '@components/carousel/popularCarousel/PopularCarousel';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Carousel/PopularCarousel/PopularCarousel',
  component: PopularCarousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PopularCarousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onRequireLogin: () => alert('로그인이 필요합니다.'),
  },
};
