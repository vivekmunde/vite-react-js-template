import { Chart } from '@/components/ui/chart';
import type { Meta, StoryObj } from '@storybook/react-vite';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/UI/Chart/Bar',
  component: Chart,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const _Story: Story = {
  render: () => {
    return (
      <Chart
        style={{ width: 500, height: 500 }}
        option={{
          xAxis: {
            type: 'category' as const,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value' as const,
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar' as const,
              itemStyle: {
                borderRadius: 4,
              },
            },
          ],
        }}
      />
    );
  },
};
