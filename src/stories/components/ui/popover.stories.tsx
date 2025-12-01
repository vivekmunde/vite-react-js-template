import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/UI/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {},
  render: () => {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open</Button>
        </PopoverTrigger>
        <PopoverContent className="max-w-sm flex flex-col gap-3">
          <Label>Name</Label>
          <Input placeholder="Name" />
          <Label>Email</Label>
          <Input placeholder="Email" />
          <Button variant="primary" className="mt-3">
            Submit
          </Button>
        </PopoverContent>
      </Popover>
    );
  },
};
