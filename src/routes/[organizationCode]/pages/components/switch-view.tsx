import { Button } from '@/components/ui/button';
import { DataTestId } from '@/components/ui/data-test-id';
import { If } from '@/components/ui/if';
import { useLoggedInUser } from '@/hooks/use-logged-in-user';
import { SettingsIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const SystemMenu: React.FC = () => {
  const { data: user } = useLoggedInUser();

  return (
    <If condition={user?.category === 'SYSTEM'}>
      <If.True>
        <DataTestId value="menu">
          <DataTestId value="system">
            <Button variant="ghost" asChild>
              <Link to="/system">
                <SettingsIcon />
              </Link>
            </Button>
          </DataTestId>
        </DataTestId>
      </If.True>
    </If>
  );
};

export { SystemMenu };
