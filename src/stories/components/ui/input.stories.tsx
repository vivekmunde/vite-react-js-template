import { Input } from '@/components/ui/input';
import { SkeletonProvider } from '@/components/ui/skeleton';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
    type: {
      control: { type: 'select' },
      options: [
        'text',
        'email',
        'password',
        'number',
        'tel',
        'url',
        'search',
        'date',
        'time',
        'file',
      ],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    placeholder: 'Enter your name',
  },
  render: props => {
    return <Input className="w-[200px]" {...props} />;
  },
};

export const Skeleton: Story = {
  args: {},
  render: props => {
    return (
      <SkeletonProvider show>
        <Input className="w-[200px]" {...props} />
      </SkeletonProvider>
    );
  },
};
