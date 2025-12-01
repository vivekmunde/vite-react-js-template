import { Translation } from '@/components/translation';
import { DataTestIdRoot } from '@/components/ui/data-test-id';
import {
  Screen,
  ScreenContainer,
  ScreenContent,
  ScreenHeader,
  ScreenTitle,
} from '@/components/ui/screen';
import React from 'react';
import { Roles } from './components/roles';

const SystemRolesPage: React.FC = () => {
  return (
    <DataTestIdRoot value="roles">
      <Screen>
        <ScreenHeader>
          <ScreenContainer size="md">
            <ScreenTitle>
              <Translation value="common/role" options={{ count: 2 }} />
            </ScreenTitle>
          </ScreenContainer>
        </ScreenHeader>
        <ScreenContent>
          <ScreenContainer size="md">
            <Roles />
          </ScreenContainer>
        </ScreenContent>
      </Screen>
    </DataTestIdRoot>
  );
};

export { SystemRolesPage };
