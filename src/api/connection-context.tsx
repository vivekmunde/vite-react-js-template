import React from 'react';
import type { TConnectionContext } from './types';

/**
 * ConnectionContext provides a React Context for managing connection-related configurations.
 *
 * @type {TConnectionContext} - The type definition for the context, ensuring proper typings.
 *
 * Default values:
 * - `url`: An empty string (to be set dynamically).
 * - `headers`: `undefined` (can be overridden for custom headers).
 * - `config.timeout`: 10000ms (default timeout for requests).
 * - `onBefore`: A no-op function (executed before a request).
 * - `onAfter`: A no-op function (executed after a request).
 */
const ConnectionContext = React.createContext<TConnectionContext>({
  url: '',
  headers: undefined,
  config: { timeout: 10000 },
  onBefore: () => undefined,
  onAfter: () => undefined,
});

export { ConnectionContext };
