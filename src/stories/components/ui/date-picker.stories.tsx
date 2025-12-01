import {
  DatePicker,
  DatePickerCalendar,
  DatePickerContent,
  DatePickerTrigger,
  DatePickerValue,
} from '@/components/ui/date-picker';
import { SkeletonProvider } from '@/components/ui/skeleton';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta = {
  title: 'Components/UI/DatePicker',
  component: DatePickerCalendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    captionLayout: {
      control: { type: 'select' },
      options: ['dropdown', 'label'],
    },
  },
} satisfies Meta<typeof DatePickerCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    mode: 'single',
    captionLayout: 'label',
    numberOfMonths: 1,
  },
  render: props => {
    const [value, setValue] = useState<Date | undefined>(undefined);

    return (
      <DatePicker value={value} onChange={setValue}>
        <DatePickerTrigger style={{ width: '200px' }}>
          <DatePickerValue format="PPP" placeholder="Pick a date" />
        </DatePickerTrigger>
        <DatePickerContent>
          <DatePickerCalendar {...props} />
        </DatePickerContent>
      </DatePicker>
    );
  },
};

export const _Skeleton: Story = {
  args: {
    mode: 'single',
    captionLayout: 'label',
    numberOfMonths: 1,
  },
  render: props => {
    const [value, setValue] = useState<Date | undefined>(undefined);

    return (
      <SkeletonProvider show>
        <DatePicker value={value} onChange={setValue}>
          <DatePickerTrigger style={{ width: '200px' }}>
            <DatePickerValue format="PPP" placeholder="Pick a date" />
          </DatePickerTrigger>
          <DatePickerContent>
            <DatePickerCalendar {...props} />
          </DatePickerContent>
        </DatePicker>
      </SkeletonProvider>
    );
  },
};
