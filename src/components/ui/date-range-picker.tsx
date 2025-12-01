import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { type VariantProps } from 'class-variance-authority';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import type { DateRange } from 'react-day-picker';
import { ButtonGroup } from './button-group';
import { DataTestId } from './data-test-id';
import { inputVariants } from './input/variants';
import { Skeleton } from './skeleton';
import { useShowSkeleton } from './skeleton/hooks';
import { cn } from './utils/cn';

const DateRangePickerOpenContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>({
  open: false,
  setOpen: () => {},
});

const DateRangePickerValueContext = React.createContext<{
  value?: DateRange;
  setValue?: (date: DateRange | undefined) => void;
}>({
  value: undefined,
  setValue: () => {},
});

const DateRangePickerStagedValueContext = React.createContext<{
  value?: DateRange;
  setValue?: (date: DateRange | undefined) => void;
}>({
  value: undefined,
  setValue: () => {},
});

const DateRangePicker: React.FC<
  React.ComponentProps<typeof Popover> & {
    value?: DateRange;
    onChange?: (date: DateRange | undefined) => void;
  }
> = ({
  open: propOpen,
  onOpenChange: propOnOpenChange,
  value: propValue,
  onChange: propOnChange,
  ...props
}) => {
  const [open, setOpen] = React.useState(propOpen ?? false);
  const [value, setValue] = React.useState<DateRange | undefined>(propValue);

  const onChange = (date: DateRange | undefined) => {
    setValue(date);
    propOnChange?.(date);
    setOpen(false);
  };

  return (
    <DataTestId value="date-range-picker">
      <DateRangePickerOpenContext.Provider value={{ open, setOpen }}>
        <DateRangePickerValueContext.Provider
          value={{ value: propValue ?? value, setValue: onChange }}
        >
          <Popover
            {...props}
            open={propOpen ?? open}
            onOpenChange={propOnOpenChange ?? setOpen}
          />
        </DateRangePickerValueContext.Provider>
      </DateRangePickerOpenContext.Provider>
    </DataTestId>
  );
};

const DateRangePickerTrigger: React.FC<
  React.ComponentProps<typeof PopoverTrigger> &
    VariantProps<typeof inputVariants>
> = ({ children, className, size = 'default', style, onClick, ...props }) => {
  const showSkeleton = useShowSkeleton();
  const { setOpen } = React.useContext(DateRangePickerOpenContext);

  const _className = cn(
    '--date-range-picker-trigger',
    inputVariants({ size }),
    'cursor-pointer',
    className
  );

  return showSkeleton ? (
    <DataTestId value="trigger">
      <Skeleton className={_className} style={style}>
        {children}
        <CalendarIcon />
      </Skeleton>
    </DataTestId>
  ) : (
    <PopoverTrigger
      className={_className}
      style={style}
      onClick={e => {
        setOpen(true);
        onClick?.(e);
      }}
      {...props}
    >
      {children}
      <CalendarIcon />
    </PopoverTrigger>
  );
};

const DateRangePickerValue: React.FC<
  React.ComponentProps<'span'> & {
    placeholder?: string;
    format?: string;
  }
> = ({
  className,
  placeholder,
  format: displayFormat = 'dd/MM/yyyy',
  ...props
}) => {
  const { value } = React.useContext(DateRangePickerValueContext);

  return (
    <span
      className={cn(
        '--date-range-picker-value',
        'lex-1',
        (!value?.from || !value?.to) && 'text-muted-foreground',
        className
      )}
      {...props}
    >
      {value?.from && value?.to
        ? `${format(value.from, displayFormat)} - ${format(value.to, displayFormat)}`
        : placeholder}
    </span>
  );
};

const DateRangePickerContentInner: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { value: ctxValue } = React.useContext(DateRangePickerValueContext);
  const [value, setValue] = React.useState<DateRange | undefined>(ctxValue);

  return (
    <DateRangePickerStagedValueContext.Provider value={{ value, setValue }}>
      {children}
    </DateRangePickerStagedValueContext.Provider>
  );
};

const DateRangePickerContent: React.FC<
  React.ComponentProps<typeof PopoverContent>
> = ({ className, children, ...props }) => {
  return (
    <PopoverContent
      className={cn(
        '--date-range-picker-content',
        'p-0 w-auto min-w-fit',
        className
      )}
      {...props}
    >
      <DateRangePickerContentInner>{children}</DateRangePickerContentInner>
    </PopoverContent>
  );
};

const DateRangePickerCalendar: React.FC<
  React.ComponentProps<typeof Calendar> & {
    mode: 'range';
    onSelect?: (date: DateRange | undefined) => void;
  }
> = ({ className, mode, onSelect, ...props }) => {
  const { value, setValue } = React.useContext(
    DateRangePickerStagedValueContext
  );

  return (
    <Calendar
      defaultMonth={value?.to}
      showOutsideDays={false}
      {...props}
      className={cn('--date-range-picker-calendar', className)}
      mode={mode}
      selected={value}
      onSelect={nextValue => {
        setValue?.(nextValue);
        onSelect?.(nextValue);
      }}
    />
  );
};

const DateRangePickerSelectButton: React.FC<
  React.ComponentProps<typeof Button>
> = ({ className, variant = 'primary', onClick, ...props }) => {
  const { setValue } = React.useContext(DateRangePickerValueContext);
  const { value } = React.useContext(DateRangePickerStagedValueContext);

  return (
    <DataTestId value="select">
      <PopoverClose asChild>
        <Button
          className={cn('--date-range-picker-select-button', className)}
          {...props}
          variant={variant}
          onClick={e => {
            setValue?.(value);
            onClick?.(e);
          }}
        />
      </PopoverClose>
    </DataTestId>
  );
};

const DateRangePickerCancelButton: React.FC<
  React.ComponentProps<typeof Button>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="cancel">
      <PopoverClose asChild>
        <Button
          className={cn('--date-range-picker-cancel-button', className)}
          {...props}
        />
      </PopoverClose>
    </DataTestId>
  );
};

const DateRangePickerActions: React.FC<
  React.ComponentProps<typeof PopoverContent>
> = ({ className, ...props }) => {
  return (
    <ButtonGroup
      className={cn('--date-range-picker-actions', 'p-3 pt-0', className)}
      {...props}
    />
  );
};

export {
  DateRangePicker,
  DateRangePickerActions,
  DateRangePickerCalendar,
  DateRangePickerCancelButton,
  DateRangePickerContent,
  DateRangePickerSelectButton,
  DateRangePickerTrigger,
  DateRangePickerValue,
};
