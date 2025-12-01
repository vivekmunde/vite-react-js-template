import { Button } from '@/components/ui/button';
import { DataTestId } from '@/components/ui/data-test-id';
import { useMyOrganizations } from '@/hooks/use-my-organizations';
import { ArrowRightLeftIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const SwitchOrganization: React.FC = () => {
  const { data: organizations } = useMyOrganizations();

  return (organizations?.total ?? 0) > 1 ? (
    <DataTestId value="menu">
      <DataTestId value="switch-organization">
        <Button variant="ghost" asChild>
          <Link to="/switch-view">
            <ArrowRightLeftIcon />
          </Link>
        </Button>
      </DataTestId>
    </DataTestId>
  ) : null;
};

export { SwitchOrganization };
