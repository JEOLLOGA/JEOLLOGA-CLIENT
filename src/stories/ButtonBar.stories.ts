import ButtonBar from '@components/common/button/buttonBar/ButtonBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Button/ButtonBar',
  component: ButtonBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['reset', 'wish'],
    },
  },
  args: {
    type: 'wish',
    label: '예약하기',
  },
} satisfies Meta<typeof ButtonBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'reset',
    label: '템플스테이 보기',
    handleSearch: () => {},
    handleResetFilter: () => {},
  },
};
