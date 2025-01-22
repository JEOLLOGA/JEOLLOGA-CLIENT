import PopupBtn from '@components/common/button/popupBtn/PopupBtn';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Button/PopupBtn',
  component: PopupBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PopupBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'green',
    label: '로그인하기',
    onClick: () => {},
  },
};

export const NoHeart: Story = {
  args: {
    color: 'gray',
    label: '취소',
    onClick: () => {},
  },
};
