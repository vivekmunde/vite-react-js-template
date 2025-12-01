import { SystemRBAC } from '@/components/rbac/system-rbac';
import { Translation } from '@/components/translation';
import { DataTestId } from '@/components/ui/data-test-id';
import { Flex } from '@/components/ui/flex';
import { Grid } from '@/components/ui/grid';
import { TypographyHeading, TypographySpan } from '@/components/ui/typography';
import { MonitorXIcon, ServerCrashIcon } from 'lucide-react';
import React from 'react';
import { MenuItem } from './menu-item';

const ErrorsMenu: React.FC = () => {
  return (
    <SystemRBAC permissions={['READ_ERROR']}>
      <DataTestId value="errors">
        <Flex direction={{ default: 'vertical' }} gap="lg">
          <TypographyHeading as="h2">
            <Translation value="common/error" options={{ count: 2 }} />
          </TypographyHeading>
          <Grid columns={{ default: 2, md: 3, lg: 4 }} gap="lg">
            <DataTestId value="api">
              <MenuItem href="/system/errors/api">
                <ServerCrashIcon />
                <TypographySpan>
                  <Translation value="common/api" />
                </TypographySpan>
              </MenuItem>
            </DataTestId>

            <DataTestId value="ui">
              <MenuItem href="/system/errors/ui">
                <MonitorXIcon />
                <TypographySpan>
                  <Translation value="common/ui" />
                </TypographySpan>
              </MenuItem>
            </DataTestId>
          </Grid>
        </Flex>
      </DataTestId>
    </SystemRBAC>
  );
};

export { ErrorsMenu };
