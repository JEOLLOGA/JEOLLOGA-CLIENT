import PageName from '@components/common/pageName/PageName';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/PageName',
  component: PageName,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
    },
  },
  args: {
    title: 'GoToJeol',
  },
} satisfies Meta<typeof PageName>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'GoToJeol',
  },
};

export const NoHeart: Story = {
  args: {
    title: 'Left Only',
  },
};
