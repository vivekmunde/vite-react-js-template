import debounce from 'lodash.debounce';
import * as React from 'react';
import { DataTestId } from '../data-test-id';
import { cn } from '../utils/cn';
import type { TInputProps } from './input';
import { Input } from './input';

const SearchInput = React.forwardRef<
  HTMLInputElement,
  TInputProps & { debounceWait?: number }
>(({ className, value, debounceWait = 500, onChange, ...props }, ref) => {
  const [inputValue, setInputValue] = React.useState(value);

  const onDebouncedChange = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
    },
    debounceWait
  );

  const onInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onDebouncedChange(e);
  };

  React.useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <DataTestId value="search">
      <Input
        ref={ref}
        {...props}
        className={cn('--search-input', className)}
        value={inputValue ?? ''}
        onChange={onInputValueChange}
      />
    </DataTestId>
  );
});
SearchInput.displayName = 'SearchInput';

export { SearchInput };
