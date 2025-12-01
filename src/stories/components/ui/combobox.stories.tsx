import {
  Combobox,
  ComboboxCommand,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from '@/components/ui/combobox';
import { SkeletonProvider } from '@/components/ui/skeleton';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta = {
  title: 'Components/UI/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

export const _Story: Story = {
  args: {},
  render: () => {
    const [value, setValue] = React.useState<string | undefined>(undefined);

    return (
      <Combobox value={value} onChange={setValue}>
        <ComboboxTrigger style={{ width: '200px' }}>
          <ComboboxValue placeholder="Select a framework">
            {frameworks.find(framework => framework.value === value)?.label}
          </ComboboxValue>
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxCommand>
            <ComboboxInput placeholder="Search..." />
            <ComboboxList>
              <ComboboxEmpty>No results found.</ComboboxEmpty>
              {frameworks.map(framework => (
                <ComboboxItem key={framework.value} value={framework.value}>
                  {framework.label}
                </ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxCommand>
        </ComboboxContent>
      </Combobox>
    );
  },
};

export const _Skeleton: Story = {
  args: {},
  render: () => {
    const [value, setValue] = React.useState<string | undefined>(undefined);

    return (
      <SkeletonProvider show>
        <Combobox value={value} onChange={setValue}>
          <ComboboxTrigger style={{ width: '200px' }}>
            <ComboboxValue placeholder="Select a framework">
              {frameworks.find(framework => framework.value === value)?.label}
            </ComboboxValue>
          </ComboboxTrigger>
          <ComboboxContent>
            <ComboboxCommand>
              <ComboboxInput placeholder="Type a command or search..." />
              <ComboboxList>
                <ComboboxEmpty>No results found.</ComboboxEmpty>
                {frameworks.map(framework => (
                  <ComboboxItem key={framework.value} value={framework.value}>
                    {framework.label}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxCommand>
          </ComboboxContent>
        </Combobox>
      </SkeletonProvider>
    );
  },
};
