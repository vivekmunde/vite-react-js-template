import type {
  TGetHeartBeatResponseData,
  TGetHeartBeatResponseErrorCode,
} from '@/api-interfaces/heart-beat/interfaces';
import { useQuery } from '@/api/use-query';
import React, { useEffect, useRef, useState } from 'react';
import { mutate } from 'swr';
import { PageLoading } from './ui/page-loading';

const ServerConnectionGuard: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { loading, status } = useQuery<
    TGetHeartBeatResponseData,
    string,
    TGetHeartBeatResponseErrorCode
  >('/heart-beat', {
    refreshInterval: 1000 * 60,
    refreshWhenHidden: false,
    revalidateOnFocus: true,
    revalidateOnMount: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
  });
  const [polling, setPolling] = useState(false);
  const refTimer = useRef<NodeJS.Timeout | undefined>(undefined);

  const startPolling = () => {
    clearTimeout(refTimer.current);

    setPolling(true);

    refTimer.current = setTimeout(() => {
      mutate('/heart-beat');
    }, 1000);
  };

  const stopPolling = () => {
    setPolling(false);
    clearTimeout(refTimer.current);
  };

  useEffect(() => {
    if (status === 'success') {
      stopPolling();
    } else if (status === 'error') {
      mutate(() => true, undefined, {
        revalidate: false,
      }).then(() => {
        startPolling();
      });
    }
  }, [status]);

  useEffect(() => {
    return () => {
      stopPolling();
    };
  }, []);

  if (loading || polling || status === 'error') {
    return <PageLoading />;
  }

  return children;
};

export { ServerConnectionGuard };
