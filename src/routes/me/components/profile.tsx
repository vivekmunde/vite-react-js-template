import { Translation } from '@/components/translation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTestId } from '@/components/ui/data-test-id';
import {
  Details,
  DetailsItem,
  DetailsItemLabel,
  DetailsItemValue,
} from '@/components/ui/details';
import { Flex } from '@/components/ui/flex';
import { useLoggedInUser } from '@/hooks/use-logged-in-user';
import React from 'react';
import { UpdateProfile } from './update-profile';

const MyProfile: React.FC = () => {
  const { data: user } = useLoggedInUser();

  return (
    <DataTestId value="profile">
      <Card>
        <CardHeader>
          <Flex
            direction={{ default: 'horizontal' }}
            justifyContent={{ default: 'between' }}
            alignItems={{ default: 'center' }}
            gap="normal"
          >
            <CardTitle>
              <Translation value="common/profile" />
            </CardTitle>
            <UpdateProfile />
          </Flex>
        </CardHeader>
        <CardContent>
          <Details columns={{ default: 2 }}>
            <DataTestId value="name">
              <DetailsItem>
                <DetailsItemLabel>
                  <Translation value="common/name" />
                </DetailsItemLabel>
                <DetailsItemValue>{user?.name}</DetailsItemValue>
              </DetailsItem>
            </DataTestId>
            <DataTestId value="email">
              <DetailsItem>
                <DetailsItemLabel>
                  <Translation value="common/email" />
                </DetailsItemLabel>
                <DetailsItemValue>{user?.email}</DetailsItemValue>
              </DetailsItem>
            </DataTestId>
          </Details>
        </CardContent>
      </Card>
    </DataTestId>
  );
};

export { MyProfile };
