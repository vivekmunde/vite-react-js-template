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
import { Projects } from './components/projects';

const OrganizationProjectsPage: React.FC = () => {
  return (
    <DataTestIdRoot value="projects">
      <Screen>
        <ScreenHeader>
          <ScreenContainer size="md">
            <ScreenTitle>
              <Translation value="common/project" options={{ count: 2 }} />
            </ScreenTitle>
          </ScreenContainer>
        </ScreenHeader>
        <ScreenContent>
          <ScreenContainer size="md">
            <Projects />
          </ScreenContainer>
        </ScreenContent>
      </Screen>
    </DataTestIdRoot>
  );
};

export { OrganizationProjectsPage };
