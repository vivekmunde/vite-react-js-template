import { Label } from '@/components/ui/label';
import { SkeletonProvider } from '@/components/ui/skeleton';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {},
  render: props => {
    return <Label {...props}>What's your name?</Label>;
  },
};

export const Skeleton: Story = {
  args: {},
  render: props => {
    return (
      <SkeletonProvider show>
        <Label {...props}>What's your name?</Label>
      </SkeletonProvider>
    );
  },
};
