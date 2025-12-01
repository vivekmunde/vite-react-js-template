import type { LucideProps } from 'lucide-react';
import { LoaderIcon } from 'lucide-react';
import * as React from 'react';
import { DataTestId } from './data-test-id';
import { cn } from './utils/cn';

const LoadingIcon: React.FC<LucideProps> = ({ className, ...props }) => {
  return (
    <DataTestId value="loading-icon">
      <LoaderIcon
        className={cn('--loading-icon animate-spin', className)}
        {...props}
      />
    </DataTestId>
  );
};

export { LoadingIcon };
