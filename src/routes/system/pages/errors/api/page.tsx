import { Translation } from '@/components/translation';
import { DataTestId, DataTestIdRoot } from '@/components/ui/data-test-id';
import {
  Screen,
  ScreenContent,
  ScreenHeader,
  ScreenTitle,
} from '@/components/ui/screen';
import React from 'react';
import { Errors } from './components/errors';

const SystemApiErrorsPage: React.FC = () => {
  return (
    <DataTestIdRoot value="errors">
      <DataTestId value="api">
        <Screen>
          <ScreenHeader>
            <ScreenTitle>
              <Translation value="common/api" />
            </ScreenTitle>
          </ScreenHeader>
          <ScreenContent>
            <Errors />
          </ScreenContent>
        </Screen>
      </DataTestId>
    </DataTestIdRoot>
  );
};

export { SystemApiErrorsPage };
