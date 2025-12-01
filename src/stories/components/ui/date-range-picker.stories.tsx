import {
  DateRangePicker,
  DateRangePickerActions,
  DateRangePickerCalendar,
  DateRangePickerCancelButton,
  DateRangePickerContent,
  DateRangePickerSelectButton,
  DateRangePickerTrigger,
  DateRangePickerValue,
} from '@/components/ui/date-range-picker';
import { SkeletonProvider } from '@/components/ui/skeleton';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { type DateRange } from 'react-day-picker';

const meta = {
  title: 'Components/UI/DateRangePicker',
  component: DateRangePickerCalendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    captionLayout: {
      control: { type: 'select' },
      options: ['label', 'dropdown'],
    },
  },
} satisfies Meta<typeof DateRangePickerCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    mode: 'range',
    captionLayout: 'label',
  },
  render: props => {
    const [value, setValue] = useState<DateRange | undefined>(undefined);

    return (
      <DateRangePicker value={value} onChange={setValue}>
        <DateRangePickerTrigger style={{ width: '300px' }}>
          <DateRangePickerValue
            format="dd MMM `yy"
            placeholder="Pick a date range"
          />
        </DateRangePickerTrigger>
        <DateRangePickerContent>
          <DateRangePickerCalendar numberOfMonths={2} {...props} />
          <DateRangePickerActions>
            <DateRangePickerSelectButton>Select</DateRangePickerSelectButton>
            <DateRangePickerCancelButton>Cancel</DateRangePickerCancelButton>
          </DateRangePickerActions>
        </DateRangePickerContent>
      </DateRangePicker>
    );
  },
};

export const _Skeleton: Story = {
  args: {
    mode: 'range',
    captionLayout: 'label',
  },
  render: props => {
    const [value, setValue] = useState<DateRange | undefined>(undefined);

    return (
      <SkeletonProvider show>
        <DateRangePicker value={value} onChange={setValue}>
          <DateRangePickerTrigger style={{ width: '300px' }}>
            <DateRangePickerValue
              format="dd MMM `yy"
              placeholder="Pick a date range"
            />
          </DateRangePickerTrigger>
          <DateRangePickerContent>
            <DateRangePickerCalendar {...props} />
            <DateRangePickerActions>
              <DateRangePickerSelectButton>Select</DateRangePickerSelectButton>
              <DateRangePickerCancelButton>Cancel</DateRangePickerCancelButton>
            </DateRangePickerActions>
          </DateRangePickerContent>
        </DateRangePicker>
      </SkeletonProvider>
    );
  },
};
