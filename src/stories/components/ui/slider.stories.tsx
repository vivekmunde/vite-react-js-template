import { Slider } from '@/components/ui/slider';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/UI/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    defaultValue: [20],
  },
  render: props => {
    return <Slider className="w-[200px]" {...props} />;
  },
};
