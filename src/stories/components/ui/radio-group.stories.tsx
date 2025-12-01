import { Label } from '@/components/ui/label';
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemCase,
} from '@/components/ui/radio-group';
import { SkeletonProvider } from '@/components/ui/skeleton';
import { RadioGroupIndicator } from '@radix-ui/react-radio-group';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: props => {
    return (
      <RadioGroup defaultValue="comfortable" {...props}>
        <RadioGroupItemCase>
          <RadioGroupItem value="default" id="r1">
            <RadioGroupIndicator />
          </RadioGroupItem>
          <Label htmlFor="r1">Default</Label>
        </RadioGroupItemCase>
        <RadioGroupItemCase>
          <RadioGroupItem value="comfortable" id="r2">
            <RadioGroupIndicator />
          </RadioGroupItem>
          <Label htmlFor="r2">Comfortable</Label>
        </RadioGroupItemCase>
        <RadioGroupItemCase>
          <RadioGroupItem value="compact" id="r3">
            <RadioGroupIndicator />
          </RadioGroupItem>
          <Label htmlFor="r3">Compact</Label>
        </RadioGroupItemCase>
      </RadioGroup>
    );
  },
};

export const Skeleton: Story = {
  args: {},
  render: props => {
    return (
      <SkeletonProvider show>
        <RadioGroup defaultValue="comfortable" {...props}>
          <RadioGroupItemCase>
            <RadioGroupItem value="default" id="r1">
              <RadioGroupIndicator />
            </RadioGroupItem>
            <Label htmlFor="r1">Default</Label>
          </RadioGroupItemCase>
          <RadioGroupItemCase>
            <RadioGroupItem value="comfortable" id="r2">
              <RadioGroupIndicator />
            </RadioGroupItem>
            <Label htmlFor="r2">Comfortable</Label>
          </RadioGroupItemCase>
          <RadioGroupItemCase>
            <RadioGroupItem value="compact" id="r3">
              <RadioGroupIndicator />
            </RadioGroupItem>
            <Label htmlFor="r3">Compact</Label>
          </RadioGroupItemCase>
        </RadioGroup>
      </SkeletonProvider>
    );
  },
};
