import { SkeletonProvider } from '@/components/ui/skeleton';
import { Textarea } from '@/components/ui/textarea';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    placeholder: 'Enter your address',
  },
  render: props => {
    return (
      <div style={{ width: '400px' }}>
        <Textarea {...props} />
      </div>
    );
  },
};

export const Skeleton: Story = {
  args: {},
  render: props => {
    return (
      <div style={{ width: '400px' }}>
        <SkeletonProvider show>
          <Textarea {...props} />
        </SkeletonProvider>
      </div>
    );
  },
};
