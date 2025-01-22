import ModalContainer from '@components/common/modal/ModalContainer';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/ModalContainer',
  component: ModalContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ModalContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modalTitle: '로그인이 필요한 서비스에요',
    modalBody: '로그인하고 절로가 200% 즐기기',
    isOpen: true,
    handleClose: () => {},
    handleSubmit: () => {},
    leftBtnLabel: '취소',
    rightBtnLabel: '로그인하기',
  },
};
