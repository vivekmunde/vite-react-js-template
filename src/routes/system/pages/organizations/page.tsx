import { Translation } from '@/components/translation';
import { DataTestIdRoot } from '@/components/ui/data-test-id';
import {
  Screen,
  ScreenContent,
  ScreenHeader,
  ScreenTitle,
} from '@/components/ui/screen';
import React from 'react';
import { OrganizationsTable } from './components/organizations-table';

const SystemOrganizationsPage: React.FC = () => {
  return (
    <DataTestIdRoot value="organizations">
      <Screen>
        <ScreenHeader>
          <ScreenTitle>
            <Translation value="common/organization" options={{ count: 2 }} />
          </ScreenTitle>
        </ScreenHeader>
        <ScreenContent>
          <OrganizationsTable />
        </ScreenContent>
      </Screen>
    </DataTestIdRoot>
  );
};

export { SystemOrganizationsPage };
