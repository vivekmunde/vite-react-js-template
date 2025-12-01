import { OrganizationRBAC } from '@/components/rbac/organization-rbac';
import { Translation } from '@/components/translation';
import { DataTestId } from '@/components/ui/data-test-id';
import { Flex } from '@/components/ui/flex';
import { Grid } from '@/components/ui/grid';
import { TypographyHeading, TypographySpan } from '@/components/ui/typography';
import { BoltIcon, ShieldIcon, UsersIcon } from 'lucide-react';
import React from 'react';
import { useParams } from 'react-router';
import { MenuItem } from './menu-item';

const AdministrationMenu: React.FC = () => {
  const { organizationCode } = useParams();

  return (
    <OrganizationRBAC permissions={['READ_ROLE', 'READ_USER']} operator="OR">
      <DataTestId value="administration">
        <Flex direction={{ default: 'vertical' }} gap="lg">
          <TypographyHeading as="h2">
            <Translation value="common/administration" />
          </TypographyHeading>
          <Grid columns={{ default: 2, md: 3, lg: 4 }} gap="lg">
            <OrganizationRBAC permissions={['READ_ROLE']}>
              <DataTestId value="roles">
                <MenuItem href={`/${organizationCode}/roles`}>
                  <ShieldIcon />
                  <TypographySpan>
                    <Translation value="common/role" options={{ count: 2 }} />
                  </TypographySpan>
                </MenuItem>
              </DataTestId>
            </OrganizationRBAC>

            <OrganizationRBAC permissions={['READ_USER']}>
              <DataTestId value="users">
                <MenuItem href={`/${organizationCode}/users`}>
                  <UsersIcon />
                  <TypographySpan>
                    <Translation value="common/user" options={{ count: 2 }} />
                  </TypographySpan>
                </MenuItem>
              </DataTestId>
            </OrganizationRBAC>

            <OrganizationRBAC permissions={['READ_PROJECT']}>
              <DataTestId value="projects">
                <MenuItem href={`/${organizationCode}/projects`}>
                  <BoltIcon />
                  <TypographySpan>
                    <Translation
                      value="common/project"
                      options={{ count: 2 }}
                    />
                  </TypographySpan>
                </MenuItem>
              </DataTestId>
            </OrganizationRBAC>
          </Grid>
        </Flex>
      </DataTestId>
    </OrganizationRBAC>
  );
};

export { AdministrationMenu };
