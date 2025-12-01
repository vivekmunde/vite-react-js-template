import { Button } from '@/components/ui/button';
import { SkeletonProvider } from '@/components/ui/skeleton';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SendHorizontalIcon } from 'lucide-react';

const meta = {
  title: 'Components/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
    asChild: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {},
  render: props => {
    return (
      <div className="flex flex-row gap-2 items-center">
        <Button {...props}>
          <span>Send </span>
        </Button>
        <Button {...props}>
          <SendHorizontalIcon />
          <span> Send </span>
        </Button>
        <Button {...props}>
          <SendHorizontalIcon />
        </Button>
      </div>
    );
  },
};

export const Skeleton: Story = {
  args: {},
  render: props => {
    return (
      <SkeletonProvider show>
        <div className="flex flex-row gap-2 items-center">
          <Button {...props}>
            <span>Send</span>
          </Button>
          <Button {...props}>
            <SendHorizontalIcon />
            <span>Send</span>
          </Button>
          <Button {...props}>
            <SendHorizontalIcon />
          </Button>
        </div>
      </SkeletonProvider>
    );
  },
};
