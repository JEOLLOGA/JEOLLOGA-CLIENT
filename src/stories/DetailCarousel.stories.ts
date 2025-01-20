import DetailCarousel from '@components/carousel/detailCarousel/DetailCarousel';
import type { Meta, StoryObj } from '@storybook/react';
const meta = {
  title: 'Carousel/DetailCarousel',
  component: DetailCarousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DetailCarousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
