import { Button } from '@/components/ui/button';
import { DataTestId } from '@/components/ui/data-test-id';
import { cn } from '@/components/ui/utils/cn';
import React, { type ComponentProps } from 'react';
import { Link } from 'react-router';

const MenuItem: React.FC<
  ComponentProps<typeof Button> & {
    href: string;
  }
> = ({ className, children, href, ...props }) => {
  return (
    <DataTestId value="item">
      <Button
        asChild
        size="lg"
        className={cn(
          `py-6 px-4 flex flex-col gap-4 text-xl [&_svg]:stroke-1 [&_svg:not([class*='size-'])]:size-16`,
          className
        )}
        {...props}
      >
        <Link to={href}>{children}</Link>
      </Button>
    </DataTestId>
  );
};

export { MenuItem };
