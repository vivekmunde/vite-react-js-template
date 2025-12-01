import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { type VariantProps } from 'class-variance-authority';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import { DataTestId } from './data-test-id';
import { inputVariants } from './input/variants';
import { Skeleton } from './skeleton';
import { useShowSkeleton } from './skeleton/hooks';
import { cn } from './utils/cn';

const DatePickerOpenContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>({
  open: false,
  setOpen: () => {},
});

const DatePickerValueContext = React.createContext<{
  value?: Date;
  setValue?: (date: Date | undefined) => void;
}>({
  value: undefined,
  setValue: () => {},
});

const DatePicker: React.FC<
  React.ComponentProps<typeof Popover> & {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
  }
> = ({
  open: propOpen,
  onOpenChange: propOnOpenChange,
  value: propValue,
  onChange: propOnChange,
  ...props
}) => {
  const [open, setOpen] = React.useState(propOpen ?? false);
  const [value, setValue] = React.useState<Date | undefined>(propValue);

  const onChange = (date: Date | undefined) => {
    setValue(date);
    propOnChange?.(date);
    setOpen(false);
  };

  return (
    <DataTestId value="date-picker">
      <DatePickerOpenContext.Provider value={{ open, setOpen }}>
        <DatePickerValueContext.Provider
          value={{ value: propValue ?? value, setValue: onChange }}
        >
          <Popover
            {...props}
            open={propOpen ?? open}
            onOpenChange={propOnOpenChange ?? setOpen}
          />
        </DatePickerValueContext.Provider>
      </DatePickerOpenContext.Provider>
    </DataTestId>
  );
};

const DatePickerTrigger: React.FC<
  React.ComponentProps<typeof PopoverTrigger> &
    VariantProps<typeof inputVariants>
> = ({ children, className, size = 'default', style, onClick, ...props }) => {
  const showSkeleton = useShowSkeleton();
  const { setOpen } = React.useContext(DatePickerOpenContext);

  const _className = cn(
    '--date-picker-trigger',
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

const DatePickerValue: React.FC<
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
  const { value } = React.useContext(DatePickerValueContext);

  return (
    <span
      className={cn(
        '--date-picker-value',
        'flex-1',
        !value && 'text-muted-foreground',
        className
      )}
      {...props}
    >
      {value ? format(value, displayFormat) : placeholder}
    </span>
  );
};

const DatePickerContent: React.FC<
  React.ComponentProps<typeof PopoverContent>
> = ({ className, ...props }) => {
  return (
    <PopoverContent
      className={cn('--date-picker-content', 'p-0 w-auto min-w-fit', className)}
      {...props}
    />
  );
};

const DatePickerCalendar: React.FC<
  React.ComponentProps<typeof Calendar> & {
    mode: 'single';
    numberOfMonths?: 1;
    onSelect?: (date: Date | undefined) => void;
  }
> = ({ className, numberOfMonths = 1, mode, onSelect, ...props }) => {
  const { setOpen } = React.useContext(DatePickerOpenContext);
  const { value, setValue } = React.useContext(DatePickerValueContext);

  return (
    <Calendar
      defaultMonth={value}
      showOutsideDays={false}
      {...props}
      className={cn('--date-picker-calendar', className)}
      mode={mode}
      numberOfMonths={numberOfMonths}
      selected={value}
      onSelect={nextValue => {
        setValue?.(nextValue);
        setOpen?.(false);
        onSelect?.(nextValue);
      }}
    />
  );
};

export {
  DatePicker,
  DatePickerCalendar,
  DatePickerContent,
  DatePickerTrigger,
  DatePickerValue,
};
