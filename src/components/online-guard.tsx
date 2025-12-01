import { useIsOnline } from '@/hooks/use-is-online';
import { WifiOffIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useSWRConfig } from 'swr';
import { LogoSvg } from './logo-svg';
import { Translation } from './translation';
import { DataTestIdRoot } from './ui/data-test-id';
import { Result, ResultIcon, ResultMessage, ResultTitle } from './ui/result';

type TOnlineGuardProps = {
  children: React.ReactNode;
};

const OnlineGuard = ({ children }: TOnlineGuardProps) => {
  const isOnline = useIsOnline();
  const { mutate } = useSWRConfig();

  useEffect(() => {
    if (!isOnline) {
      mutate(() => true, undefined, {
        revalidate: false,
      });
    }
  }, [isOnline]);

  if (!isOnline) {
    return (
      <DataTestIdRoot value="offline">
        <div className="fixed inset-0 flex items-center justify-center">
          <Result variant="warning" size="lg">
            <LogoSvg className="size-[60px] mb-8" />
            <ResultIcon>
              <WifiOffIcon />
            </ResultIcon>
            <ResultTitle>
              <Translation value="error/network.offline.title" />
            </ResultTitle>
            <ResultMessage>
              <Translation value="error/network.offline.message" />
            </ResultMessage>
          </Result>
        </div>
      </DataTestIdRoot>
    );
  }

  return children;
};

export { OnlineGuard };
