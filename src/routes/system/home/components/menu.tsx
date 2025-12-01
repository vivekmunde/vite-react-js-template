import { DataTestId } from '@/components/ui/data-test-id';
import { Flex } from '@/components/ui/flex';
import React from 'react';
import { AdministrationMenu } from './administration-menu';
import { ErrorsMenu } from './errors-menu';

const Menu: React.FC = () => {
  return (
    <DataTestId value="menu">
      <Flex direction={{ default: 'vertical' }} gap="lg">
        <AdministrationMenu />
        <ErrorsMenu />
      </Flex>
    </DataTestId>
  );
};

export { Menu };
