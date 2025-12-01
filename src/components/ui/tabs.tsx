import { cn } from '@/components/ui/utils/cn';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as React from 'react';
import { DataTestId } from './data-test-id';
import { focusVariants } from './variants';

const TabsContext = React.createContext<{
  variant?: 'box' | 'underline';
}>({});

const Tabs: React.FC<
  React.ComponentProps<typeof TabsPrimitive.Root> & {
    variant?: 'box' | 'underline';
  }
> = ({ className, variant = 'box', ...props }) => {
  return (
    <TabsContext.Provider value={{ variant }}>
      <DataTestId value="tabs">
        <TabsPrimitive.Root
          data-slot="tabs"
          className={cn('--tabs', 'flex flex-col gap-3', className)}
          {...props}
        />
      </DataTestId>
    </TabsContext.Provider>
  );
};

const TabsList: React.FC<React.ComponentProps<typeof TabsPrimitive.List>> = ({
  className,
  ...props
}) => {
  const { variant } = React.useContext(TabsContext);

  return (
    <DataTestId value="list">
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(
          '--tabs-list',
          'items-center justify-start',
          variant === 'box' &&
            'inline-flex w-fit border border-border/30 bg-muted text-muted-foreground p-0.5 rounded-lg',
          variant === 'underline' && 'flex p-0 border-b',
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const TabsTrigger: React.FC<
  React.ComponentProps<typeof TabsPrimitive.Trigger>
> = ({ className, ...props }) => {
  const { variant } = React.useContext(TabsContext);

  return (
    <DataTestId value="trigger">
      <TabsPrimitive.Trigger
        data-slot="tabs-trigger"
        className={cn(
          '--tabs-trigger',
          focusVariants(),
          'text-foreground inline-flex h-[calc(100%-1px)]',
          'transition-[color,box-shadow] cursor-pointer',
          'items-center justify-center gap-1.5 rounded-md border border-transparent px-3 py-1',
          'data-[state=active]:font-medium whitespace-nowrap',
          variant === 'box' &&
            'flex-1 data-[state=active]:bg-background data-[state=active]:border-input data-[state=active]:shadow-sm',
          variant === 'underline' &&
            'py-1.5 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:rounded-none',
          'disabled:pointer-events-none disabled:opacity-50',
          "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className
        )}
        {...props}
      />
    </DataTestId>
  );
};

const TabsContent: React.FC<
  React.ComponentProps<typeof TabsPrimitive.Content>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="content">
      <TabsPrimitive.Content
        data-slot="tabs-content"
        className={cn('--tabs-content', 'flex-1 outline-none', className)}
        {...props}
      />
    </DataTestId>
  );
};

export { Tabs, TabsContent, TabsList, TabsTrigger };
