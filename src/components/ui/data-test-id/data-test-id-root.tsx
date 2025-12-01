import React, { type ReactElement } from 'react';
import { DataTestIdContext } from './data-test-id-context';

const DataTestIdRoot: React.FC<{
  children: React.ReactNode;
  value?: string;
}> = ({ children, value, ...props }) => {
  if (!React.isValidElement(children)) {
    console.error('DataTestId expects a valid React element as its child.');
    return null;
  }

  const childWithDataTestId = React.cloneElement(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children as ReactElement<any>,
    {
      ...props,
      'data-testid': value,
    }
  );

  return (
    <DataTestIdContext.Provider value={value}>
      {childWithDataTestId}
    </DataTestIdContext.Provider>
  );
};

export { DataTestIdRoot };
