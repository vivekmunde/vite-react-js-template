import { Link } from '@/components/ui/link';
import { SkeletonProvider } from '@/components/ui/skeleton';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/UI/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    href: 'https://www.google.com',
  },
  render: props => {
    return (
      <Link target="_blank" {...props}>
        Click me to navigate!
      </Link>
    );
  },
};

export const Skeleton: Story = {
  args: {},
  render: props => {
    return (
      <SkeletonProvider show>
        <Link target="_blank" {...props}>
          Click me to navigate!
        </Link>
      </SkeletonProvider>
    );
  },
};
