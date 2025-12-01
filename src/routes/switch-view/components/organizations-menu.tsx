import { Translation } from '@/components/translation';
import { DataTestId } from '@/components/ui/data-test-id';
import { Flex } from '@/components/ui/flex';
import { If } from '@/components/ui/if';
import { TypographyHeading, TypographySpan } from '@/components/ui/typography';
import { useLoggedInUser } from '@/hooks/use-logged-in-user';
import { useMyOrganizations } from '@/hooks/use-my-organizations';
import React from 'react';
import { Navigate } from 'react-router';
import { MenuItem } from './menu-item';

const OrganizationsMenu: React.FC = () => {
  const { data: user } = useLoggedInUser();
  const { data: organizations } = useMyOrganizations();

  return (
    <If
      condition={
        user?.category === 'ORGANIZATION' && organizations?.items?.length === 1
      }
    >
      <If.True>
        <Navigate to={`/${organizations?.items?.[0]?.code}/home`} />
      </If.True>
      <If.False>
        <If
          condition={
            user?.category === 'SYSTEM' || (organizations?.total ?? 0) > 0
          }
        >
          <If.True>
            <DataTestId value="organizations">
              <DataTestId value="menu">
                <Flex direction={{ default: 'vertical' }} gap="lg">
                  <TypographyHeading as="h2">
                    <Translation
                      value="common/organization"
                      options={{ count: organizations?.items?.length }}
                    />
                  </TypographyHeading>
                  <Flex
                    direction={{ default: 'vertical' }}
                    className="rounded-lg border shadow-sm"
                  >
                    {organizations?.items?.map(organization => (
                      <DataTestId
                        key={organization.id}
                        value={organization.code}
                      >
                        <MenuItem
                          variant="ghost"
                          className="border-b last:border-b-0 rounded-none first:rounded-t-lg last:rounded-b-lg"
                          href={`/${organization.code}/home`}
                        >
                          <TypographySpan>{organization.name}</TypographySpan>
                        </MenuItem>
                      </DataTestId>
                    ))}
                  </Flex>
                </Flex>
              </DataTestId>
            </DataTestId>
          </If.True>
        </If>
      </If.False>
    </If>
  );
};

export { OrganizationsMenu };
