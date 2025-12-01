import { Calendar } from '@/components/ui/calendar';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/UI/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['single', 'multiple', 'range'],
    },
    captionLayout: {
      control: { type: 'select' },
      options: ['dropdown', 'buttons'],
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    mode: 'single',
    captionLayout: 'dropdown',
  },
  render: props => {
    return <Calendar {...props} />;
  },
};
