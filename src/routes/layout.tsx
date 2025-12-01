import { ConnectionProvider } from '@/api/connection-provider';
import { ErrorBoundary } from '@/components/error-boundary';
import { UserLanguageProvider } from '@/components/i18n-provider';
import { OnlineGuard } from '@/components/online-guard';
import { ServerConnectionGuard } from '@/components/server-connection-guard';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toast';
import { apiUrl } from '@/env';
import { useLanguage } from '@/hooks/use-language';
import React from 'react';
import { Outlet } from 'react-router';
import { Authentication } from './authentication';

const RootLayout: React.FC = () => {
  const [language] = useLanguage();

  return (
    <ConnectionProvider
      url={[apiUrl, language].join('/')}
      onBefore={args => {
        console.log('onBefore', args);
      }}
      onAfter={args => {
        console.log('onAfter', args);
      }}
    >
      <ErrorBoundary>
        <OnlineGuard>
          <ServerConnectionGuard>
            <Authentication>
              <UserLanguageProvider>
                <ThemeProvider>
                  <Outlet />
                </ThemeProvider>
              </UserLanguageProvider>
            </Authentication>
          </ServerConnectionGuard>
        </OnlineGuard>
        <Toaster />
      </ErrorBoundary>
    </ConnectionProvider>
  );
};

export { RootLayout };
