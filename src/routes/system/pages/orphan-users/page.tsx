import { Translation } from '@/components/translation';
import { DataTestIdRoot } from '@/components/ui/data-test-id';
import {
  Screen,
  ScreenContent,
  ScreenHeader,
  ScreenTitle,
} from '@/components/ui/screen';
import React from 'react';
import { UsersTable } from './components/users-table';

const OrphanUsersPage: React.FC = () => {
  return (
    <DataTestIdRoot value="orphan-users">
      <Screen>
        <ScreenHeader>
          <ScreenTitle>
            <Translation value="common/user" options={{ count: 2 }} />
          </ScreenTitle>
        </ScreenHeader>
        <ScreenContent>
          <UsersTable />
        </ScreenContent>
      </Screen>
    </DataTestIdRoot>
  );
};

export { OrphanUsersPage };
