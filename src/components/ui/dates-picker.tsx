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
import { Badge } from './badge';
import { ButtonGroup } from './button-group';
import { DataTestId } from './data-test-id';
import { inputVariants } from './input/variants';
import { Skeleton } from './skeleton';
import { useShowSkeleton } from './skeleton/hooks';
import { cn } from './utils/cn';

const DatesPickerOpenContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>({
  open: false,
  setOpen: () => {},
});

const DatesPickerValueContext = React.createContext<{
  value?: Date[];
  setValue?: (date: Date[] | undefined) => void;
}>({
  value: undefined,
  setValue: () => {},
});

const DatesPickerStagedValueContext = React.createContext<{
  value?: Date[];
  setValue?: (date: Date[] | undefined) => void;
}>({
  value: undefined,
  setValue: () => {},
});

const DatesPicker: React.FC<
  React.ComponentProps<typeof Popover> & {
    value?: Date[];
    onChange?: (date: Date[] | undefined) => void;
  }
> = ({
  open: propOpen,
  onOpenChange: propOnOpenChange,
  value: propValue,
  onChange: propOnChange,
  ...props
}) => {
  const [open, setOpen] = React.useState(propOpen ?? false);
  const [value, setValue] = React.useState<Date[] | undefined>(propValue);

  const onChange = (date: Date[] | undefined) => {
    setValue(date);
    propOnChange?.(date);
    setOpen(false);
  };

  return (
    <DataTestId value="dates-picker">
      <DatesPickerOpenContext.Provider value={{ open, setOpen }}>
        <DatesPickerValueContext.Provider
          value={{ value: propValue ?? value, setValue: onChange }}
        >
          <Popover
            {...props}
            open={propOpen ?? open}
            onOpenChange={propOnOpenChange ?? setOpen}
          />
        </DatesPickerValueContext.Provider>
      </DatesPickerOpenContext.Provider>
    </DataTestId>
  );
};

const DatesPickerTrigger: React.FC<
  React.ComponentProps<typeof PopoverTrigger> &
    VariantProps<typeof inputVariants>
> = ({ children, className, size = 'default', style, onClick, ...props }) => {
  const showSkeleton = useShowSkeleton();
  const { setOpen } = React.useContext(DatesPickerOpenContext);

  const _className = cn(
    '--dates-picker-trigger',
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
      <span>
        <CalendarIcon />
      </span>
    </PopoverTrigger>
  );
};

const DatesPickerValue: React.FC<
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
  const { value } = React.useContext(DatesPickerValueContext);

  return (
    <span
      className={cn(
        '--dates-picker-value',
        'lex-1',
        (!value?.length || value?.length === 0) && 'text-muted-foreground',
        className
      )}
      {...props}
    >
      {value?.length ? (
        <div className="flex flex-row flex-wrap gap-1">
          {value.map(date => (
            <Badge
              key={date.toISOString()}
              variant="secondary"
              className="text-base"
            >
              {format(date, displayFormat)}
            </Badge>
          ))}
        </div>
      ) : (
        placeholder
      )}
    </span>
  );
};

const DatesPickerContentInner: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { value: ctxValue } = React.useContext(DatesPickerValueContext);
  const [value, setValue] = React.useState<Date[] | undefined>(ctxValue);

  return (
    <DatesPickerStagedValueContext.Provider value={{ value, setValue }}>
      {children}
    </DatesPickerStagedValueContext.Provider>
  );
};

const DatesPickerContent: React.FC<
  React.ComponentProps<typeof PopoverContent>
> = ({ className, children, ...props }) => {
  return (
    <PopoverContent
      className={cn(
        '--dates-picker-content',
        'p-0 w-auto min-w-fit',
        className
      )}
      {...props}
    >
      <DatesPickerContentInner>{children}</DatesPickerContentInner>
    </PopoverContent>
  );
};

const DatesPickerCalendar: React.FC<
  React.ComponentProps<typeof Calendar> & {
    mode: 'multiple';
    onSelect?: (date: Date[] | undefined) => void;
  }
> = ({ className, mode, onSelect, ...props }) => {
  const { value, setValue } = React.useContext(DatesPickerStagedValueContext);

  return (
    <Calendar
      defaultMonth={value?.[value.length - 1]}
      showOutsideDays={false}
      {...props}
      className={cn('--dates-picker-calendar', className)}
      mode={mode}
      selected={value}
      onSelect={nextValue => {
        setValue?.(nextValue);
        onSelect?.(nextValue);
      }}
    />
  );
};

const DatesPickerSelectButton: React.FC<
  React.ComponentProps<typeof Button>
> = ({ className, variant = 'primary', onClick, ...props }) => {
  const { setValue } = React.useContext(DatesPickerValueContext);
  const { value } = React.useContext(DatesPickerStagedValueContext);

  return (
    <DataTestId value="select">
      <PopoverClose asChild>
        <Button
          className={cn('--dates-picker-select-button', className)}
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

const DatesPickerCancelButton: React.FC<
  React.ComponentProps<typeof Button>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="cancel">
      <PopoverClose asChild>
        <Button
          className={cn('--dates-picker-cancel-button', className)}
          {...props}
        />
      </PopoverClose>
    </DataTestId>
  );
};

const DatesPickerActions: React.FC<
  React.ComponentProps<typeof PopoverContent>
> = ({ className, ...props }) => {
  return (
    <ButtonGroup
      className={cn('--dates-picker-actions', 'p-3 pt-0', className)}
      {...props}
    />
  );
};

export {
  DatesPicker,
  DatesPickerActions,
  DatesPickerCalendar,
  DatesPickerCancelButton,
  DatesPickerContent,
  DatesPickerSelectButton,
  DatesPickerTrigger,
  DatesPickerValue,
};
