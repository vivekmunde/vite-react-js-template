import { Translation } from '@/components/translation';
import { Button } from '@/components/ui/button';
import { DataTestId } from '@/components/ui/data-test-id';
import React from 'react';
import { Link } from 'react-router';

const Logout: React.FC = () => {
  return (
    <DataTestId value="logout">
      <Button variant="destructive" className="max-w-fit" asChild>
        <Link to="/logout">
          <Translation value="common/logout" />
        </Link>
      </Button>
    </DataTestId>
  );
};

export { Logout };
