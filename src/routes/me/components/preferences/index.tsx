import { Translation } from '@/components/translation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTestId } from '@/components/ui/data-test-id';
import type React from 'react';
import { LanguagePreference } from './language';
import { ThemeModePreference } from './theme-mode';

const Preferences: React.FC = () => {
  return (
    <DataTestId value="preferences">
      <Card>
        <CardHeader className="border-b border-dashed">
          <CardTitle>
            <Translation value="common/preference" options={{ count: 2 }} />
          </CardTitle>
        </CardHeader>
        <CardContent className="border-b border-dashed">
          <LanguagePreference />
        </CardContent>
        <CardContent>
          <ThemeModePreference />
        </CardContent>
      </Card>
    </DataTestId>
  );
};

export { Preferences };
