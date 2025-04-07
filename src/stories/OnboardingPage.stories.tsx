import type { Meta, StoryObj } from '@storybook/react';
import OnboardingPage from 'src/app/onboarding/page';

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
