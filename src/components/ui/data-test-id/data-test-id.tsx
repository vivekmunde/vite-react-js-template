import React, { type ReactElement, useContext, useMemo } from 'react';
import { replaceSpace } from '../utils/regex';
import { DataTestIdContext } from './data-test-id-context';

const joinDataTestIds = (values: (string | null | undefined)[]): string => {
  return values.filter(Boolean).join('.');
};

const DataTestId: React.FC<{
  children: React.ReactNode;
  value: string;
}> = ({ children, value, ...props }) => {
  const parentValue = useContext(DataTestIdContext);

  const contextValue = useMemo(
    () =>
      joinDataTestIds([
        parentValue,
        replaceSpace(value, '-')
          .replace(/[^a-z0-9-]/gi, '')
          .toLowerCase(),
      ]),
    [parentValue, value]
  );

  if (!React.isValidElement(children)) {
    console.error('DataTestId expects a valid React element as its child.');
    return null;
  }

  const childWithDataTestId = React.cloneElement(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children as ReactElement<any>,
    {
      ...props,
      'data-testid': contextValue,
    }
  );

  return (
    <DataTestIdContext.Provider value={contextValue}>
      {childWithDataTestId}
    </DataTestIdContext.Provider>
  );
};

export { DataTestId };
