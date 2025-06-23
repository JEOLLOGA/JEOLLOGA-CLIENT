import CurationCard from '@components/curation/curationCard/CurationCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Curation/CurationCard',
  component: CurationCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    bgImage: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
    subtitle: {
      control: { type: 'text' },
    },
  },
  args: {
    bgImage: 'https://img.danawa.com/images/descFiles/6/110/5109431_agiLaciMHn_1659098198501.jpeg',
    title: '고양이 있는 절 봤어?',
    subtitle: '용문사에 있는 고양이 좀 봐. 귀엽지?',
    link: 'https://www.gototemplestay.com/',
    onClick: () => {},
  },
} satisfies Meta<typeof CurationCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
