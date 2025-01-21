import HomePage from '@pages/homePage/HomePage';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Page/HomePage',
  component: HomePage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
