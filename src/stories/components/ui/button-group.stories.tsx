import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EditIcon, SendIcon, TrashIcon } from 'lucide-react';

const meta = {
  title: 'Components/UI/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: { type: 'select' },
      options: ['none', 'normal', 'sm', 'lg'],
      description: 'Gap between buttons',
    },
    direction: {
      control: { type: 'object' },
      description:
        'Flex direction with responsive variants (horizontal, vertical)',
    },
    wrap: {
      control: { type: 'object' },
      description: 'Flex wrap with responsive variants (wrap, nowrap, reverse)',
    },
    justifyContent: {
      control: { type: 'object' },
      description: 'Justify content with responsive variants',
    },
    alignItems: {
      control: { type: 'object' },
      description: 'Align items with responsive variants',
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    gap: 'normal',
    direction: {
      default: 'horizontal',
    },
    wrap: {
      default: 'nowrap',
    },
    justifyContent: {
      default: 'start',
    },
    alignItems: {
      default: 'center',
    },
  },
  render: props => {
    return (
      <ButtonGroup {...props}>
        <Button variant="primary">
          <SendIcon />
          Send
        </Button>
        <Button variant="default">
          <EditIcon />
          Edit
        </Button>
        <Button variant="destructive">
          <TrashIcon />
          Delete
        </Button>
      </ButtonGroup>
    );
  },
};
