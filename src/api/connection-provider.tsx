import React from 'react';
import { SWRConfig } from 'swr';
import { ConnectionContext } from './connection-context';
import type { TConnectionConfig, TOnAfterFetch, TOnBeforeFetch } from './types';

/**
 * ConnectionProvider Component
 *
 * This provider wraps the application with connection-related configurations
 * and integrates with the SWR data-fetching library.
 *
 * @component
 * @param {object} props - The properties for ConnectionProvider.
 * @param {React.ReactNode} props.children - The child components that will be wrapped.
 * @param {string} props.url - The base URL for API requests.
 * @param {TConnectionConfig} [props.config] - Optional connection configurations.
 * @param {HeadersInit} [props.headers] - Optional headers for requests.
 * @param {TOnBeforeFetch} [props.onBefore] - Optional function executed before a request.
 * @param {TOnAfterFetch} [props.onAfter] - Optional function executed after a request.
 *
 * @returns {JSX.Element} A context provider wrapping its children.
 */
const ConnectionProvider: React.FC<{
  children: React.ReactNode;
  url: string;
  config?: TConnectionConfig;
  headers?: HeadersInit;
  onBefore?: TOnBeforeFetch;
  onAfter?: TOnAfterFetch;
}> = ({ children, url, headers, config, onBefore, onAfter }) => {
  return (
    <ConnectionContext.Provider
      value={{
        url,
        headers,
        config,
        onBefore,
        onAfter,
      }}
    >
      {/* SWRConfig ensures efficient data fetching and caching */}
      <SWRConfig>{children}</SWRConfig>
    </ConnectionContext.Provider>
  );
};

export { ConnectionProvider };
