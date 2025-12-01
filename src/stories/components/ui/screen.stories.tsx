import {
  Screen,
  ScreenContent,
  ScreenFooter,
  ScreenHeader,
  ScreenTitle,
} from '@/components/ui/screen';
import type { Meta, StoryObj } from '@storybook/react-vite';

const C: React.FC<{
  stickyHeader?: boolean;
  stickyFooter?: boolean;
}> = () => null;

const meta = {
  title: 'Components/UI/Screen',
  component: C,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {
    stickyHeader: {
      control: { type: 'boolean' },
    },
    stickyFooter: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof C>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const _Story: Story = {
  args: {
    stickyHeader: false,
    stickyFooter: false,
  },
  render: props => {
    return (
      <Screen>
        <ScreenHeader sticky={props.stickyHeader}>
          <div className="flex flex-row justify-between items-center gap-3">
            <ScreenTitle>Home</ScreenTitle>
            <div className="flex flex-row justify-between items-center gap-2">
              <div className="bg-accent rounded h-10 w-48" />
              <div className="bg-accent rounded size-10" />
            </div>
          </div>
        </ScreenHeader>
        <ScreenContent>
          <div className="flex flex-col gap-3">
            <div className="bg-accent rounded h-80" />
            <div className="flex flex-row gap-3">
              <div className="bg-accent rounded h-80 flex-1" />
              <div className="bg-accent rounded h-80 flex-1" />
            </div>
            <div className="flex flex-row gap-3">
              <div className="bg-accent rounded h-80 flex-1" />
              <div className="bg-accent rounded h-80 flex-1" />
              <div className="bg-accent rounded h-80 flex-1" />
            </div>
          </div>
        </ScreenContent>
        <ScreenFooter sticky={props.stickyFooter}>
          <div className="flex flex-row justify-between items-center gap-3">
            <div className="bg-accent rounded h-4 w-40" />
            <div className="bg-accent rounded h-4 w-20" />
            <div className="flex flex-row gap-3">
              <div className="bg-accent rounded h-4 w-20" />
            </div>
          </div>
        </ScreenFooter>
      </Screen>
    );
  },
};
