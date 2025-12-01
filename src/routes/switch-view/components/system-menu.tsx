import { Translation } from '@/components/translation';
import { DataTestId } from '@/components/ui/data-test-id';
import React from 'react';
import { MenuItem } from './menu-item';

const SystemMenu: React.FC = () => {
  return (
    <DataTestId value="system">
      <DataTestId value="menu">
        <MenuItem className="text-2xl" href="/system/home">
          <Translation value="common/system" />
        </MenuItem>
      </DataTestId>
    </DataTestId>
  );
};

export { SystemMenu };
