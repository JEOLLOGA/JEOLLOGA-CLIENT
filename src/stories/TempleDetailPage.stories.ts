import type { Meta, StoryObj } from '@storybook/react';
import TempleDetailPage from 'src/app/detail/[templestayId]/page';

const meta = {
  title: 'Page/TempleDetailPage',
  component: TempleDetailPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TempleDetailPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
