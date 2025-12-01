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

const SystemUiErrorsPage: React.FC = () => {
  return (
    <DataTestIdRoot value="errors">
      <DataTestId value="ui">
        <Screen>
          <ScreenHeader>
            <ScreenTitle>
              <Translation value="common/ui" />
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

export { SystemUiErrorsPage };
