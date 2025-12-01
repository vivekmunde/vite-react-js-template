import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogCloseButton,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Flex } from '@/components/ui/flex';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SkeletonProvider } from '@/components/ui/skeleton';
import { Textarea } from '@/components/ui/textarea';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/UI/Dialog',
  component: DialogContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    height: {
      control: {
        type: 'select',
      },
      options: ['auto', 'sm', 'md', 'lg', 'full'],
    },
    width: {
      control: {
        type: 'select',
      },
      options: ['auto', 'sm', 'md', 'lg', 'full'],
    },
    position: {
      control: {
        type: 'select',
      },
      options: [
        'center',
        'left',
        'right',
        'bottom',
        'top',
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight',
      ],
    },
  },
} satisfies Meta<typeof DialogContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    height: 'sm',
    width: 'md',
    position: 'center',
  },
  render: ({ height, width, position }) => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open</Button>
        </DialogTrigger>
        <DialogContent height={height} width={width} position={position}>
          <DialogHeader className="border-b">
            <Flex
              direction={{ default: 'horizontal' }}
              justifyContent={{ default: 'between' }}
              alignItems={{ default: 'center' }}
              gap="normal"
            >
              <Flex direction={{ default: 'vertical' }}>
                <DialogTitle>Dialog title</DialogTitle>
                <DialogDescription>Dialog subtitle</DialogDescription>
              </Flex>
              <DialogCloseButton />
            </Flex>
          </DialogHeader>
          <DialogBody>
            <Flex direction={{ default: 'vertical' }} gap="normal">
              <DialogDescription>
                Please enter your details below.
              </DialogDescription>
              <Label>Name</Label>
              <Input />
              <Label>Email</Label>
              <Input />
              <Label>Address</Label>
              <Input />
              <Label>City</Label>
              <Input />
              <Label>State</Label>
              <Input />
              <Label>Zip</Label>
              <Input />
              <Label>Country</Label>
              <Input />
              <Label>Phone</Label>
              <Input />
              <Label>Website</Label>
              <Input />
              <Label>Notes</Label>
              <Textarea rows={4} />
            </Flex>
          </DialogBody>
          <DialogFooter className="border-t">
            <ButtonGroup>
              <DialogClose asChild>
                <Button variant="primary">Save</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button>Cancel</Button>
              </DialogClose>
            </ButtonGroup>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const _Skeleton: Story = {
  args: {
    height: 'sm',
    width: 'md',
    position: 'center',
  },
  render: ({ height, width, position }) => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open</Button>
        </DialogTrigger>
        <DialogContent height={height} width={width} position={position}>
          <SkeletonProvider show>
            <DialogHeader className="border-b">
              <Flex
                direction={{ default: 'horizontal' }}
                justifyContent={{ default: 'between' }}
                alignItems={{ default: 'center' }}
                gap="normal"
              >
                <Flex direction={{ default: 'vertical' }} className="flex-1">
                  <DialogTitle>Dialog title</DialogTitle>
                  <DialogDescription>Dialog subtitle</DialogDescription>
                </Flex>
                <DialogCloseButton />
              </Flex>
            </DialogHeader>
            <DialogBody>
              <Flex direction={{ default: 'vertical' }} gap="normal">
                <div>
                  <DialogDescription>
                    Please enter your details below.
                  </DialogDescription>
                </div>
                <Label>Name</Label>
                <Input />
                <Label>Email</Label>
                <Input />
                <Label>Address</Label>
                <Input />
                <Label>City</Label>
                <Input />
                <Label>State</Label>
                <Input />
                <Label>Zip</Label>
                <Input />
                <Label>Country</Label>
                <Input />
                <Label>Phone</Label>
                <Input />
                <Label>Website</Label>
                <Input />
                <Label>Notes</Label>
                <Textarea rows={4} />
              </Flex>
            </DialogBody>
            <DialogFooter className="border-t">
              <ButtonGroup>
                <DialogClose asChild>
                  <Button variant="primary">Save</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button>Cancel</Button>
                </DialogClose>
              </ButtonGroup>
            </DialogFooter>
          </SkeletonProvider>
        </DialogContent>
      </Dialog>
    );
  },
};
