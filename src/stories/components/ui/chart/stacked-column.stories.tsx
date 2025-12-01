import { Chart } from '@/components/ui/chart';
import type { Meta, StoryObj } from '@storybook/react-vite';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/UI/Chart/StackedColumn',
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
        style={{ width: '75vw', height: '400px' }}
        option={{
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          legend: {},
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
          ],
          yAxis: [
            {
              type: 'value',
            },
          ],
          series: [
            {
              name: 'Direct',
              type: 'bar',
              emphasis: {
                focus: 'series',
              },
              data: [320, 332, 301, 334, 390, 330, 320],
              itemStyle: {
                borderRadius: 4,
              },
            },
            {
              name: 'Email',
              type: 'bar',
              stack: 'Ad',
              emphasis: {
                focus: 'series',
              },
              data: [120, 132, 101, 134, 90, 230, 210],
              itemStyle: {
                borderRadius: 4,
              },
            },
            {
              name: 'Union Ads',
              type: 'bar',
              stack: 'Ad',
              emphasis: {
                focus: 'series',
              },
              data: [220, 182, 191, 234, 290, 330, 310],
              itemStyle: {
                borderRadius: 4,
              },
            },
            {
              name: 'Video Ads',
              type: 'bar',
              stack: 'Ad',
              emphasis: {
                focus: 'series',
              },
              data: [150, 232, 201, 154, 190, 330, 410],
              itemStyle: {
                borderRadius: 4,
              },
            },
            {
              name: 'Search Engine',
              type: 'bar',
              data: [862, 1018, 964, 1026, 1679, 1600, 1570],
              emphasis: {
                focus: 'series',
              },
              markLine: {
                lineStyle: {
                  type: 'dashed',
                },
                data: [[{ type: 'min' }, { type: 'max' }]],
              },
              itemStyle: {
                borderRadius: 4,
              },
            },
            {
              name: 'Baidu',
              type: 'bar',
              barWidth: 5,
              stack: 'Search Engine',
              emphasis: {
                focus: 'series',
              },
              data: [620, 732, 701, 734, 1090, 1130, 1120],
              itemStyle: {
                borderRadius: 4,
              },
            },
            {
              name: 'Google',
              type: 'bar',
              stack: 'Search Engine',
              emphasis: {
                focus: 'series',
              },
              data: [120, 132, 101, 134, 290, 230, 220],
              itemStyle: {
                borderRadius: 4,
              },
            },
            {
              name: 'Bing',
              type: 'bar',
              stack: 'Search Engine',
              emphasis: {
                focus: 'series',
              },
              data: [60, 72, 71, 74, 190, 130, 110],
              itemStyle: {
                borderRadius: 4,
              },
            },
            {
              name: 'Others',
              type: 'bar',
              stack: 'Search Engine',
              emphasis: {
                focus: 'series',
              },
              data: [62, 82, 91, 84, 109, 110, 120],
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
