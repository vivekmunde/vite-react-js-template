import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerCloseButton,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Flex } from '@/components/ui/flex';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SkeletonProvider } from '@/components/ui/skeleton';
import { Textarea } from '@/components/ui/textarea';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/UI/Drawer',
  component: DrawerContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    height: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'full'],
    },
    width: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'full'],
    },
    position: {
      control: {
        type: 'select',
      },
      options: ['left', 'right', 'bottom', 'top'],
    },
  },
} satisfies Meta<typeof DrawerContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    height: 'full',
    width: 'sm',
    position: 'right',
  },
  render: ({ height, width, position }) => {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open</Button>
        </DrawerTrigger>
        <DrawerContent height={height} width={width} position={position}>
          <DrawerHeader className="border-b">
            <Flex
              direction={{ default: 'horizontal' }}
              justifyContent={{ default: 'between' }}
              alignItems={{ default: 'center' }}
              gap="normal"
            >
              <Flex direction={{ default: 'vertical' }}>
                <DrawerTitle>Drawer title</DrawerTitle>
                <DrawerDescription>Drawer subtitle</DrawerDescription>
              </Flex>
              <DrawerCloseButton />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex direction={{ default: 'vertical' }} gap="normal">
              <DrawerDescription>
                Please enter your details below.
              </DrawerDescription>
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
          </DrawerBody>
          <DrawerFooter className="border-t">
            <ButtonGroup>
              <DrawerClose asChild>
                <Button variant="primary">Save</Button>
              </DrawerClose>
              <DrawerClose asChild>
                <Button>Cancel</Button>
              </DrawerClose>
            </ButtonGroup>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  },
};

export const _Skeleton: Story = {
  args: {
    height: 'full',
    width: 'sm',
    position: 'right',
  },
  render: ({ height, width, position }) => {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open</Button>
        </DrawerTrigger>
        <DrawerContent height={height} width={width} position={position}>
          <SkeletonProvider show>
            <DrawerHeader className="border-b">
              <Flex
                direction={{ default: 'horizontal' }}
                justifyContent={{ default: 'between' }}
                alignItems={{ default: 'center' }}
                gap="normal"
              >
                <Flex direction={{ default: 'vertical' }} className="flex-1">
                  <DrawerTitle>Drawer title</DrawerTitle>
                  <DrawerDescription>Drawer subtitle</DrawerDescription>
                </Flex>
                <DrawerCloseButton />
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <Flex direction={{ default: 'vertical' }} gap="normal">
                <div>
                  <DrawerDescription>
                    Please enter your details below.
                  </DrawerDescription>
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
            </DrawerBody>
            <DrawerFooter className="border-t">
              <ButtonGroup>
                <DrawerClose asChild>
                  <Button variant="primary">Save</Button>
                </DrawerClose>
                <DrawerClose asChild>
                  <Button>Cancel</Button>
                </DrawerClose>
              </ButtonGroup>
            </DrawerFooter>
          </SkeletonProvider>
        </DrawerContent>
      </Drawer>
    );
  },
};
