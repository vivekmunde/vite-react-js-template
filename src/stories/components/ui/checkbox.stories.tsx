import { Checkbox, CheckboxCase } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { SkeletonProvider } from '@/components/ui/skeleton';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {},
  render: props => {
    return (
      <div style={{ width: '280px' }}>
        <CheckboxCase>
          <Checkbox {...props} id="checkbox" />
          <Label htmlFor="checkbox">Checkbox</Label>
        </CheckboxCase>
      </div>
    );
  },
};

export const Skeleton: Story = {
  args: {},
  render: props => {
    return (
      <div style={{ width: '280px' }}>
        <SkeletonProvider show>
          <CheckboxCase>
            <Checkbox {...props} id="checkbox" />
            <Label htmlFor="checkbox">Checkbox</Label>
          </CheckboxCase>
        </SkeletonProvider>
      </div>
    );
  },
};
