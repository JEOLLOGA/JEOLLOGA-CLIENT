import PopularCard from '@components/card/popularCard/PopularCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Card/PopularCard',
  component: PopularCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ranking: {
      control: { type: 'number' },
    },
    templeName: {
      control: { type: 'text' },
    },
    templeLoc: {
      control: { type: 'text' },
    },
    templeImg: {
      control: { type: 'text' },
    },
    tag: {
      control: { type: 'text' },
    },
    onClick: {
      action: 'clicked',
    },
    isLiked: {
      control: { type: 'boolean' },
    },
    onLikeToggle: {
      action: 'onLikeToggle',
    },
  },
  args: {
    ranking: 1,
    templeName: '봉은사',
    templeLoc: '서울',
    templeImg:
      'https://img.danawa.com/images/descFiles/6/110/5109431_agiLaciMHn_1659098198501.jpeg',
    tag: '방긋방긋',
    onClick: () => alert('click !'),
    isLiked: false,
    onLikeToggle: () => alert('Liked'),
  },
} satisfies Meta<typeof PopularCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
