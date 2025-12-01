import {
  Command,
  CommandDialog,
  CommandDialogBody,
  CommandDialogCloseButton,
  CommandDialogContent,
  CommandDialogOpen,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandItemGroup,
  CommandItemIcon,
  CommandItemSeparator,
  CommandItemShortcut,
  CommandItemText,
  CommandList,
} from '@/components/ui/command';
import { SkeletonProvider } from '@/components/ui/skeleton';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  Settings,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from 'lucide-react';
import React from 'react';

const meta = {
  title: 'Components/UI/Command',
  component: Command,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {},
  render: () => {
    return (
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandItemGroup heading="Suggestions">
            <CommandItem>
              <CommandItemIcon>
                <CalendarIcon />
              </CommandItemIcon>
              <CommandItemText>Calendar</CommandItemText>
            </CommandItem>
            <CommandItem>
              <CommandItemIcon>
                <SmileIcon />
              </CommandItemIcon>
              <CommandItemText>Search Emoji</CommandItemText>
            </CommandItem>
            <CommandItem disabled>
              <CommandItemIcon>
                <CalculatorIcon />
              </CommandItemIcon>
              <CommandItemText>Calculator</CommandItemText>
            </CommandItem>
          </CommandItemGroup>
          <CommandItemSeparator />
          <CommandItemGroup heading="Settings">
            <CommandItem>
              <CommandItemIcon>
                <UserIcon />
              </CommandItemIcon>
              <CommandItemText>Profile</CommandItemText>
              <CommandItemShortcut>⌘P</CommandItemShortcut>
            </CommandItem>
            <CommandItem>
              <CommandItemIcon>
                <CreditCardIcon />
              </CommandItemIcon>
              <CommandItemText>Billing</CommandItemText>
              <CommandItemShortcut>⌘B</CommandItemShortcut>
            </CommandItem>
            <CommandItem>
              <CommandItemIcon>
                <SettingsIcon />
              </CommandItemIcon>
              <CommandItemText>Settings</CommandItemText>
              <CommandItemShortcut>⌘S</CommandItemShortcut>
            </CommandItem>
          </CommandItemGroup>
        </CommandList>
      </Command>
    );
  },
};

export const Skeleton: Story = {
  args: {},
  render: () => {
    return (
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <SkeletonProvider show>
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandItemGroup heading="Suggestions">
              <CommandItem>
                <CommandItemIcon>
                  <CalendarIcon />
                </CommandItemIcon>
                <CommandItemText>Calendar</CommandItemText>
              </CommandItem>
              <CommandItem>
                <CommandItemIcon>
                  <SmileIcon />
                </CommandItemIcon>
                <CommandItemText>Search Emoji</CommandItemText>
              </CommandItem>
              <CommandItem disabled>
                <CommandItemIcon>
                  <CalculatorIcon />
                </CommandItemIcon>
                <CommandItemText>Calculator</CommandItemText>
              </CommandItem>
            </CommandItemGroup>
            <CommandItemSeparator />
            <CommandItemGroup heading="Settings">
              <CommandItem>
                <CommandItemIcon>
                  <UserIcon />
                </CommandItemIcon>
                <CommandItemText>Profile</CommandItemText>
                <CommandItemShortcut>⌘P</CommandItemShortcut>
              </CommandItem>
              <CommandItem>
                <CommandItemIcon>
                  <CreditCardIcon />
                </CommandItemIcon>
                <CommandItemText>Billing</CommandItemText>
                <CommandItemShortcut>⌘B</CommandItemShortcut>
              </CommandItem>
              <CommandItem>
                <CommandItemIcon>
                  <Settings />
                </CommandItemIcon>
                <CommandItemText>Settings</CommandItemText>
                <CommandItemShortcut>⌘S</CommandItemShortcut>
              </CommandItem>
            </CommandItemGroup>
          </CommandList>
        </SkeletonProvider>
      </Command>
    );
  },
};

export const _CommandDialog: Story = {
  args: {},
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandDialogOpen shortcutKey="J" onOpen={() => setOpen(true)}>
            Press <kbd>⌘J</kbd>
          </CommandDialogOpen>
          <CommandDialogContent>
            <CommandDialogBody>
              <CommandDialogCloseButton />
              <Command>
                <CommandInput
                  autoFocus
                  placeholder="Type a command or search..."
                />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandItemGroup heading="Suggestions">
                    <CommandItem>
                      <CommandItemIcon>
                        <CalendarIcon />
                      </CommandItemIcon>
                      <CommandItemText>Calendar</CommandItemText>
                    </CommandItem>
                    <CommandItem>
                      <CommandItemIcon>
                        <SmileIcon />
                      </CommandItemIcon>
                      <CommandItemText>Search Emoji</CommandItemText>
                    </CommandItem>
                    <CommandItem disabled>
                      <CommandItemIcon>
                        <CalculatorIcon />
                      </CommandItemIcon>
                      <CommandItemText>Calculator</CommandItemText>
                    </CommandItem>
                  </CommandItemGroup>
                  <CommandItemSeparator />
                  <CommandItemGroup heading="Settings">
                    <CommandItem>
                      <CommandItemIcon>
                        <UserIcon />
                      </CommandItemIcon>
                      <CommandItemText>Profile</CommandItemText>
                      <CommandItemShortcut>⌘P</CommandItemShortcut>
                    </CommandItem>
                    <CommandItem>
                      <CommandItemIcon>
                        <CreditCardIcon />
                      </CommandItemIcon>
                      <CommandItemText>Billing</CommandItemText>
                      <CommandItemShortcut>⌘B</CommandItemShortcut>
                    </CommandItem>
                    <CommandItem>
                      <CommandItemIcon>
                        <SettingsIcon />
                      </CommandItemIcon>
                      <CommandItemText>Settings</CommandItemText>
                      <CommandItemShortcut>⌘S</CommandItemShortcut>
                    </CommandItem>
                  </CommandItemGroup>
                </CommandList>
              </Command>
            </CommandDialogBody>
          </CommandDialogContent>
        </CommandDialog>
      </React.Fragment>
    );
  },
};
