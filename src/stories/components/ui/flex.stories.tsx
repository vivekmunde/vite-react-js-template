import { Flex } from '@/components/ui/flex';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/UI/Flex',
  component: Flex,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
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
      description:
        'Justify content with responsive variants (normal, start, end, center, between, evenly, around, stretch)',
    },
    justifyItems: {
      control: { type: 'object' },
      description:
        'Justify items with responsive variants (start, end, center, stretch)',
    },
    alignContent: {
      control: { type: 'object' },
      description:
        'Align content with responsive variants (normal, center, start, end, between, around, evenly, baseline, stretch)',
    },
    alignItems: {
      control: { type: 'object' },
      description:
        'Align items with responsive variants (start, end, center, baseline, stretch)',
    },
    placeContent: {
      control: { type: 'object' },
      description:
        'Place content with responsive variants (center, start, end, between, around, evenly, baseline, stretch)',
    },
    placeItems: {
      control: { type: 'object' },
      description:
        'Place items with responsive variants (start, end, center, baseline, stretch)',
    },
    gap: {
      control: { type: 'select' },
      options: ['none', 'normal', 'sm', 'lg'],
      description: 'Gap between items',
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    direction: {
      default: 'horizontal',
    },
    wrap: {
      default: 'nowrap',
    },
    justifyContent: {
      default: 'start',
    },
    justifyItems: {
      default: 'stretch',
    },
    alignContent: {
      default: 'normal',
    },
    alignItems: {
      default: 'center',
    },
    placeContent: {
      default: 'start',
    },
    placeItems: {
      default: 'start',
    },
    gap: 'normal',
  },
  render: props => {
    return (
      <Flex {...props}>
        <div
          style={{ backgroundColor: 'red', width: '100px', height: '100px' }}
        />
        <div
          style={{ backgroundColor: 'blue', width: '100px', height: '100px' }}
        />
        <div
          style={{ backgroundColor: 'green', width: '100px', height: '100px' }}
        />
        <div
          style={{ backgroundColor: 'yellow', width: '100px', height: '100px' }}
        />
        <div
          style={{ backgroundColor: 'purple', width: '100px', height: '100px' }}
        />
      </Flex>
    );
  },
};
