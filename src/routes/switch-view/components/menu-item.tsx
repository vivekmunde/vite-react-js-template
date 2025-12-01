import { Button } from '@/components/ui/button';
import { DataTestId } from '@/components/ui/data-test-id';
import { cn } from '@/components/ui/utils/cn';
import { ChevronRightIcon } from 'lucide-react';
import React, { type ComponentProps } from 'react';
import { Link } from 'react-router';

const MenuItem: React.FC<ComponentProps<typeof Button> & { href: string }> = ({
  children,
  href,
  className,
  ...props
}) => {
  return (
    <DataTestId value="item">
      <Button
        size="lg"
        asChild
        className={cn('w-full justify-between py-3 text-xl', className)}
        {...props}
      >
        <Link to={href}>
          {children}
          <ChevronRightIcon className="size-6" />
        </Link>
      </Button>
    </DataTestId>
  );
};

export { MenuItem };
