import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Icon } from '@/components/ui/icon';
import { SkeletonProvider } from '@/components/ui/skeleton';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertCircleIcon } from 'lucide-react';

const meta = {
  title: 'Components/UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'warning'],
    },
  },
  decorators: [
    Story => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  render: props => (
    <Alert {...props}>
      <Icon>
        <AlertCircleIcon />
      </Icon>
      <AlertTitle>Lorem ipsum dolor sit amet!</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </AlertDescription>
    </Alert>
  ),
};

export const Skeleton: Story = {
  render: props => (
    <SkeletonProvider show>
      <Alert {...props}>
        <Icon>
          <AlertCircleIcon />
        </Icon>
        <AlertTitle>Lorem ipsum dolor sit amet!</AlertTitle>
        <AlertDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </AlertDescription>
      </Alert>
    </SkeletonProvider>
  ),
};
