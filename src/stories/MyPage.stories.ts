import MyPage from '@app/(private)/myPage/page';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Page/Mypage',
  component: MyPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MyPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
