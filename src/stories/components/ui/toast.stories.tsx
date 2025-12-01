import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Flex } from '@/components/ui/flex';
import {
  Toast,
  ToastAction,
  ToastCloseButton,
  ToastDescription,
  Toaster,
  ToastIcon,
  ToastTitle,
} from '@/components/ui/toast';
import { useToast } from '@/components/ui/toast/use-toast';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BellRingIcon } from 'lucide-react';
import React from 'react';

const meta = {
  title: 'Components/UI/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'destructive'],
      defaultValue: 'default',
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    variant: 'default',
  },
  render: props => {
    const { toast } = useToast();

    return (
      <React.Fragment>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              ...props,
              children: (
                <React.Fragment>
                  <ToastTitle>Scheduled: Catch up</ToastTitle>
                  <ToastDescription>
                    Friday, February 10, 2023 at 5:57 PM
                  </ToastDescription>
                </React.Fragment>
              ),
            });
          }}
        >
          Add to calendar
        </Button>
        <Toaster />
      </React.Fragment>
    );
  },
};

export const Icon: Story = {
  args: {},
  render: props => {
    const { toast } = useToast();

    return (
      <React.Fragment>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              ...props,
              children: (
                <React.Fragment>
                  <Flex
                    direction={{ default: 'horizontal' }}
                    alignItems={{ default: 'center' }}
                    gap="sm"
                  >
                    <ToastIcon />
                    <ToastTitle>Scheduled: Catch up</ToastTitle>
                  </Flex>
                  <ToastDescription>
                    Friday, February 10, 2023 at 5:57 PM
                  </ToastDescription>
                </React.Fragment>
              ),
            });
          }}
        >
          Add to calendar
        </Button>
        <Toaster />
      </React.Fragment>
    );
  },
};

export const CustomIcon: Story = {
  args: {},
  render: props => {
    const { toast } = useToast();

    return (
      <React.Fragment>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              ...props,
              children: (
                <React.Fragment>
                  <Flex
                    direction={{ default: 'horizontal' }}
                    alignItems={{ default: 'center' }}
                    gap="sm"
                  >
                    <ToastIcon>
                      <BellRingIcon className="size-5" />
                    </ToastIcon>
                    <ToastTitle className="text-lg font-medium">
                      Scheduled: Catch up
                    </ToastTitle>
                  </Flex>
                  <ToastDescription className="text-base">
                    Friday, February 10, 2023 at 5:57 PM
                  </ToastDescription>
                </React.Fragment>
              ),
            });
          }}
        >
          Add to calendar
        </Button>
        <Toaster />
      </React.Fragment>
    );
  },
};

export const Actions: Story = {
  args: {},
  render: props => {
    const { toast } = useToast();

    return (
      <React.Fragment>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              ...props,
              children: (
                <React.Fragment>
                  <Flex
                    direction={{ default: 'horizontal' }}
                    alignItems={{ default: 'center' }}
                    justifyContent={{ default: 'between' }}
                    gap="sm"
                  >
                    <Flex
                      direction={{ default: 'horizontal' }}
                      alignItems={{ default: 'center' }}
                      gap="sm"
                    >
                      <ToastIcon />
                      <ToastTitle>Scheduled: Catch up</ToastTitle>
                    </Flex>
                    <ButtonGroup>
                      <ToastAction altText="Goto schedule to undo" asChild>
                        <Button size="sm" variant="default">
                          Undo
                        </Button>
                      </ToastAction>
                      <ToastCloseButton variant="default" />
                    </ButtonGroup>
                  </Flex>
                  <ToastDescription>
                    Friday, February 10, 2023 at 5:57 PM
                  </ToastDescription>
                  <ButtonGroup className="mt-2">
                    <ToastAction altText="Open Schedule" asChild>
                      <Button size="sm" variant="default">
                        Open Schedule
                      </Button>
                    </ToastAction>
                    <ToastAction altText="Reschedule" asChild>
                      <Button size="sm" variant="default">
                        Reschedule
                      </Button>
                    </ToastAction>
                  </ButtonGroup>
                </React.Fragment>
              ),
            });
          }}
        >
          Add to calendar
        </Button>
        <Toaster />
      </React.Fragment>
    );
  },
};
