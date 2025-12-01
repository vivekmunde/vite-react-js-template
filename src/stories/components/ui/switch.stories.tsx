import { Label } from '@/components/ui/label';
import { SkeletonProvider } from '@/components/ui/skeleton';
import { Switch, SwitchCase } from '@/components/ui/switch';
import { SwitchThumb } from '@radix-ui/react-switch';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {},
  render: props => {
    return (
      <SwitchCase>
        <Switch id="airplane-mode" {...props}>
          <SwitchThumb />
        </Switch>
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </SwitchCase>
    );
  },
};

export const Skeleton: Story = {
  args: {},
  render: props => {
    return (
      <SkeletonProvider show>
        <SwitchCase>
          <Switch id="airplane-mode" {...props}>
            <SwitchThumb />
          </Switch>
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </SwitchCase>
      </SkeletonProvider>
    );
  },
};
