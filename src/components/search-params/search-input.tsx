import { useSearchParams } from '@/hooks/use-search-params';
import type { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchInput } from '../ui/input/search-input';
import { cn } from '../ui/utils/cn';

const SearchParamsInput: React.FC<
  ComponentProps<typeof SearchInput> & {
    prefix?: string;
  }
> = ({ className, prefix, onChange, ...props }) => {
  const { t: tCommon } = useTranslation('common');
  const [searchParams, setSearchParams] = useSearchParams<{
    page?: string;
    search?: string;
  }>({}, prefix);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({
      ...searchParams,
      page: '1',
      search: e.target.value,
    });
    onChange?.(e);
  };

  return (
    <SearchInput
      className={cn('--search-params-input', className)}
      placeholder={tCommon('search')}
      onChange={e => {
        handleChange(e);
      }}
      {...props}
    />
  );
};

export { SearchParamsInput };
