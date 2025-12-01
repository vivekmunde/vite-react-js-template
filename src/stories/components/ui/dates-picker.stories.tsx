import {
  DatesPicker,
  DatesPickerActions,
  DatesPickerCalendar,
  DatesPickerCancelButton,
  DatesPickerContent,
  DatesPickerSelectButton,
  DatesPickerTrigger,
  DatesPickerValue,
} from '@/components/ui/dates-picker';
import { SkeletonProvider } from '@/components/ui/skeleton';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta = {
  title: 'Components/UI/DatesPicker',
  component: DatesPickerCalendar,
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
} satisfies Meta<typeof DatesPickerCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {
    mode: 'multiple',
    captionLayout: 'label',
  },
  render: props => {
    const [value, setValue] = useState<Date[] | undefined>(undefined);

    return (
      <DatesPicker value={value} onChange={setValue}>
        <DatesPickerTrigger style={{ width: '600px' }}>
          <DatesPickerValue format="dd MMM `yy" placeholder="Pick dates" />
        </DatesPickerTrigger>
        <DatesPickerContent>
          <DatesPickerCalendar numberOfMonths={2} {...props} />
          <DatesPickerActions>
            <DatesPickerSelectButton>Select</DatesPickerSelectButton>
            <DatesPickerCancelButton>Cancel</DatesPickerCancelButton>
          </DatesPickerActions>
        </DatesPickerContent>
      </DatesPicker>
    );
  },
};

export const _Skeleton: Story = {
  args: {
    mode: 'multiple',
    captionLayout: 'label',
  },
  render: props => {
    const [value, setValue] = useState<Date[] | undefined>(undefined);

    return (
      <SkeletonProvider show>
        <DatesPicker value={value} onChange={setValue}>
          <DatesPickerTrigger style={{ width: '600px' }}>
            <DatesPickerValue format="dd MMM `yy" placeholder="Pick dates" />
          </DatesPickerTrigger>
          <DatesPickerContent>
            <DatesPickerCalendar {...props} />
            <DatesPickerActions>
              <DatesPickerSelectButton>Select</DatesPickerSelectButton>
              <DatesPickerCancelButton>Cancel</DatesPickerCancelButton>
            </DatesPickerActions>
          </DatesPickerContent>
        </DatesPicker>
      </SkeletonProvider>
    );
  },
};
