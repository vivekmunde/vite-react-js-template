import { Badge } from '@/components/ui/badge';
import { SkeletonProvider } from '@/components/ui/skeleton';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BadgeCheckIcon } from 'lucide-react';

const meta = {
  title: 'Components/UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    className: '',
    variant: 'default',
  },
  render: props => {
    return (
      <div className="flex flex-row items-center gap-2">
        <Badge {...props}>
          <span>Badge</span>
        </Badge>
        <Badge {...props}>
          <BadgeCheckIcon />
          <span>Badge</span>
        </Badge>
      </div>
    );
  },
};

export const Skeleton: Story = {
  args: {
    className: '',
    variant: 'default',
  },
  render: props => {
    return (
      <SkeletonProvider show>
        <div className="flex flex-row items-center gap-2">
          <Badge {...props}>
            <span>Badge</span>
          </Badge>
          <Badge {...props}>
            <BadgeCheckIcon />
            <span>Badge</span>
          </Badge>
        </div>
      </SkeletonProvider>
    );
  },
};
