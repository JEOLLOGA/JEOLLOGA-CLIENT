import WishListPage from '@app/(private)/wishList/page';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Page/WishListPage',
  component: WishListPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WishListPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
