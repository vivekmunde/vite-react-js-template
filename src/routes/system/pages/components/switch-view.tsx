import { Button } from '@/components/ui/button';
import { DataTestId } from '@/components/ui/data-test-id';
import { ArrowRightLeftIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const SwitchView: React.FC = () => {
  return (
    <DataTestId value="switch-view">
      <Button variant="ghost" asChild>
        <Link to="/switch-view">
          <ArrowRightLeftIcon />
        </Link>
      </Button>
    </DataTestId>
  );
};

export { SwitchView };
