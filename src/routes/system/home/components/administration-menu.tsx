import { SystemRBAC } from '@/components/rbac/system-rbac';
import { Translation } from '@/components/translation';
import { DataTestId } from '@/components/ui/data-test-id';
import { Flex } from '@/components/ui/flex';
import { Grid } from '@/components/ui/grid';
import { TypographyHeading, TypographySpan } from '@/components/ui/typography';
import { Building2Icon, ShieldIcon, UsersIcon } from 'lucide-react';
import React from 'react';
import { MenuItem } from './menu-item';

const AdministrationMenu: React.FC = () => {
  return (
    <SystemRBAC
      permissions={['READ_ORGANIZATION', 'READ_ROLE', 'READ_USER']}
      operator="OR"
    >
      <DataTestId value="administration">
        <Flex direction={{ default: 'vertical' }} gap="lg">
          <TypographyHeading as="h2">
            <Translation value="common/administration" />
          </TypographyHeading>
          <Grid columns={{ default: 2, md: 3, lg: 4 }} gap="lg">
            <SystemRBAC permissions={['READ_ORGANIZATION']}>
              <DataTestId value="organizations">
                <MenuItem href="/system/organizations">
                  <Building2Icon />
                  <TypographySpan>
                    <Translation
                      value="common/organization"
                      options={{ count: 2 }}
                    />
                  </TypographySpan>
                </MenuItem>
              </DataTestId>
            </SystemRBAC>

            <SystemRBAC permissions={['READ_ROLE']}>
              <DataTestId value="roles">
                <MenuItem href="/system/roles">
                  <ShieldIcon />
                  <TypographySpan>
                    <Translation value="common/role" options={{ count: 2 }} />
                  </TypographySpan>
                </MenuItem>
              </DataTestId>
            </SystemRBAC>

            <SystemRBAC permissions={['READ_USER']}>
              <DataTestId value="users">
                <MenuItem href="/system/users">
                  <UsersIcon />
                  <TypographySpan>
                    <Translation value="common/user" options={{ count: 2 }} />
                  </TypographySpan>
                </MenuItem>
              </DataTestId>
            </SystemRBAC>
          </Grid>
        </Flex>
      </DataTestId>
    </SystemRBAC>
  );
};

export { AdministrationMenu };
