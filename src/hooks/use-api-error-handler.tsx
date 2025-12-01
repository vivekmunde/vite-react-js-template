import type { TStatus } from '@/api/types';
import { Translation } from '@/components/translation';
import { Flex } from '@/components/ui/flex';
import { ToastIcon, ToastTitle } from '@/components/ui/toast';
import { toast } from '@/components/ui/toast/use-toast';
import { useEffect } from 'react';

const useApiErrorHandler = (status?: TStatus) => {
  useEffect(() => {
    if (status === 'error') {
      toast({
        variant: 'destructive',
        children: (
          <Flex
            direction={{ default: 'horizontal' }}
            alignItems={{ default: 'center' }}
            gap="sm"
          >
            <ToastIcon />
            <ToastTitle>
              <Translation value="error/someErrorOccurred" />
            </ToastTitle>
          </Flex>
        ),
      });
    }
  }, [status]);
};

export { useApiErrorHandler };
