import { AlertCircleIcon } from 'lucide-react';
import * as React from 'react';
import { Alert, AlertTitle } from '../alert';
import { DataTestId } from '../data-test-id';
import { Icon } from '../icon';
import { If } from '../if';
import { cn } from '../utils/cn';
import { useFormError } from './use-form-context';

const FormError: React.FC<React.ComponentProps<typeof Alert>> = ({
  className,
  ...props
}) => {
  const error = useFormError();

  return (
    <If condition={!!error}>
      <If.True>
        <DataTestId value="errors">
          <Alert
            variant="destructive"
            className={cn('--form-errors-alert', className)}
            {...props}
          >
            <Icon>
              <AlertCircleIcon />
            </Icon>
            <AlertTitle className="--form-errors-alert-title">
              {error}
            </AlertTitle>
          </Alert>
        </DataTestId>
      </If.True>
    </If>
  );
};

export { FormError };
