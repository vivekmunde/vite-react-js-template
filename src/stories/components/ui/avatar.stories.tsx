import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SkeletonProvider } from '@/components/ui/skeleton';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes for styling',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    className: '',
  },
  render: props => {
    return (
      <Avatar {...props}>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    );
  },
};

export const Skeleton: Story = {
  args: {
    className: '',
  },
  render: props => {
    return (
      <SkeletonProvider show>
        <Avatar {...props}>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </SkeletonProvider>
    );
  },
};
