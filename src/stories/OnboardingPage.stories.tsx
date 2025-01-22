import OnboardingPage from '@pages/onboardingPage/OnboardingPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Page/OnboardingPage',
  component: OnboardingPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OnboardingPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
