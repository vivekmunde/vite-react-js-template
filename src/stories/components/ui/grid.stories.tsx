import { Grid } from '@/components/ui/grid';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/UI/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'object' },
      description: 'Number of grid columns with responsive variants (1-12)',
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
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    columns: {
      default: 3,
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
      <Grid {...props}>
        <div
          style={{ backgroundColor: 'red', width: '100%', height: '100px' }}
        />
        <div
          style={{ backgroundColor: 'blue', width: '100%', height: '100px' }}
        />
        <div
          style={{ backgroundColor: 'green', width: '100%', height: '100px' }}
        />
        <div
          style={{ backgroundColor: 'yellow', width: '100%', height: '100px' }}
        />
        <div
          style={{ backgroundColor: 'purple', width: '100%', height: '100px' }}
        />
        <div
          style={{ backgroundColor: 'orange', width: '100%', height: '100px' }}
        />
        <div
          style={{ backgroundColor: 'pink', width: '100%', height: '100px' }}
        />
        <div
          style={{ backgroundColor: 'cyan', width: '100%', height: '100px' }}
        />
        <div
          style={{ backgroundColor: 'brown', width: '100%', height: '100px' }}
        />
      </Grid>
    );
  },
};
