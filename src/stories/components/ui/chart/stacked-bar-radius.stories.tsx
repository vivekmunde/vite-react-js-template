import { Chart } from '@/components/ui/chart';
import type { Meta, StoryObj } from '@storybook/react-vite';
const series = [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar' as const,
    stack: 'a',
    name: 'a',
  },
  {
    data: [10, 46, 64, '-', 0, '-', 0],
    type: 'bar' as const,
    stack: 'a',
    name: 'b',
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar' as const,
    stack: 'a',
    name: 'c',
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar' as const,
    stack: 'b',
    name: 'd',
  },
  {
    data: [10, 20, 150, 0, '-', 50, 10],
    type: 'bar' as const,
    stack: 'b',
    name: 'e',
  },
];
//  eslint-disable-next-line @typescript-eslint/no-explicit-any
const stackInfo: any = {};
for (let i = 0; i < series[0].data.length; ++i) {
  for (let j = 0; j < series.length; ++j) {
    const stackName = series[j].stack;
    if (!stackName) {
      continue;
    }
    if (!stackInfo[stackName]) {
      stackInfo[stackName] = {
        stackStart: [],
        stackEnd: [],
      };
    }
    const info = stackInfo[stackName];
    const data = series[j].data[i];
    if (data && data !== '-') {
      if (info.stackStart[i] == null) {
        info.stackStart[i] = j;
      }
      info.stackEnd[i] = j;
    }
  }
}
for (let i = 0; i < series.length; ++i) {
  //  eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = series[i].data;
  const info = stackInfo[series[i].stack];
  for (let j = 0; j < series[i].data.length; ++j) {
    // const isStart = info.stackStart[j] === i;
    const isEnd = info.stackEnd[j] === i;
    const topBorder = isEnd ? 20 : 0;
    const bottomBorder = 0;
    data[j] = {
      value: data[j],
      itemStyle: {
        borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder],
      },
    };
  }
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/UI/Chart/StackedBarRadius',
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
        style={{ width: '500px', height: '500px' }}
        option={{
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: series,
        }}
      />
    );
  },
};
