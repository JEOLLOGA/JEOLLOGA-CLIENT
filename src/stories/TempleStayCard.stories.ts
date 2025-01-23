import TempleStayCard from '@components/card/templeStayCard/TempleStayCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/card/TempleStayCard',
  component: TempleStayCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    templestayId: {
      control: { type: 'number' },
    },
    templeName: {
      control: { type: 'text' },
    },

    templestayName: {
      control: { type: 'text' },
    },
    tag: {
      control: { type: 'text' },
    },
    region: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'text' },
    },
    imgUrl: {
      control: { type: 'text' },
    },
    liked: {
      control: { type: 'boolean' },
    },
    layout: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
    },
    onToggleWishlist: {
      action: 'onToggleWishlist',
    },
  },
  args: {
    templestayId: 1,
    templeName: '봉인사',
    templestayName: '사불산(四佛山)... 옛길을 걷다',
    tag: '연예인이 다녀간',
    region: '서울',
    type: '휴식형',
    imgUrl:
      'https://file.percenty.co.kr/public/65a89c361aa1f25215b17f4a/products/660db89df900ac2f15094bc4/47272ce2-f477-4472-955e-f2e8eddc521e.jpg',
    liked: false,
    layout: 'horizontal',
    onToggleWishlist: (templestayId: number, liked: boolean) =>
      alert(`Wishlist ${templestayId}: ${liked}`),
  },
} satisfies Meta<typeof TempleStayCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const horizontalWishCard: Story = {
  args: {
    layout: 'horizontal',
  },
};

export const verticalWishCard: Story = {
  args: {
    layout: 'vertical',
  },
};
