import { Button } from '@/components/ui/button';
import {
  Result,
  ResultFooter,
  ResultIcon,
  ResultMessage,
  ResultTitle,
} from '@/components/ui/result';
import { SkeletonProvider } from '@/components/ui/skeleton';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckCircleIcon } from 'lucide-react';

const meta = {
  title: 'Components/UI/Result',
  component: Result,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'destructive'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
  },
} satisfies Meta<typeof Result>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
  render: props => {
    return (
      <Result {...props}>
        <ResultIcon>
          <CheckCircleIcon />
        </ResultIcon>
        <ResultTitle>The project has been created!</ResultTitle>
        <ResultMessage>
          You can start the workflow by adding documents to the poroject.
        </ResultMessage>
        <ResultFooter>
          <Button size={props.size}>Home</Button>
        </ResultFooter>
      </Result>
    );
  },
};

export const Skeleton: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
  render: props => {
    return (
      <SkeletonProvider show>
        <Result {...props}>
          <ResultIcon>
            <CheckCircleIcon />
          </ResultIcon>
          <ResultTitle>The project has been created!</ResultTitle>
          <ResultMessage>
            You can start the workflow by adding documents to the poroject.
          </ResultMessage>
          <ResultFooter>
            <Button size={props.size}>Home</Button>
          </ResultFooter>
        </Result>
      </SkeletonProvider>
    );
  },
};
