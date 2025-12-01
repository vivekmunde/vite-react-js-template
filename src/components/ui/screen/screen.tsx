import React, { useEffect } from 'react';
import { DataTestId } from '../data-test-id';
import { useSetLayoutHasScreen } from '../layout/use-context';
import { cn } from '../utils/cn';
import { ScreenContextProvider } from './screen-context';

const Screen: React.FC<React.ComponentProps<'div'>> = ({
  className,
  children,
  ...props
}) => {
  const setHasScreen = useSetLayoutHasScreen();

  useEffect(() => {
    setHasScreen(true);

    return () => {
      setHasScreen(false);
    };
  }, [setHasScreen]);

  return (
    <ScreenContextProvider>
      <DataTestId value="screen">
        <div
          {...props}
          className={cn('--screen', 'flex-1 flex flex-col relative', className)}
        >
          {children}
        </div>
      </DataTestId>
    </ScreenContextProvider>
  );
};

export { Screen };
