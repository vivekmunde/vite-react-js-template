import { Progress } from '@/components/ui/progress';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    value: 50,
  },
  render: props => {
    return <Progress className="w-[200px]" {...props} />;
  },
};
