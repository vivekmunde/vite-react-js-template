/***************************************************************************/
'use client';
/***************************************************************************/

import React from 'react';
import { DataTestId } from './data-test-id';
import { LoadingIcon } from './loading-icon';

const PageLoading: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-dvh absolute top-0 bottom-0 left-0 right-0 bg-background">
      <DataTestId value="page">
        <LoadingIcon />
      </DataTestId>
    </div>
  );
};

export { PageLoading };
