import { useContext } from 'react';
import { ConnectionContext } from './connection-context';
import type {
  TFetchConfig,
  TFetchResponse,
  TOnAfterFetchArgs,
  TOnBeforeFetchArgs,
  TResponseBody,
} from './types';

/**
 * A hook that provides the core fetch functionality with cancellation support.
 * It can be used directly or within another hook to create specific HTTP methods (GET, POST, etc.).
 * @returns {Function} fetcher - A function to perform fetch requests.
 */
const useFetcher = () => {
  const connContext = useContext(ConnectionContext);

  /**
   * Core fetch function handling request execution, cancellation, and response processing.
   * Builds the fetch request, handles optional hooks, and processes the response.
   * @template TResponseData - The expected response data type.
   * @param {string | URL} url - The endpoint to send the request to.
   * @param {RequestInit} [options] - Fetch options such as method, headers, and body.
   * @param {TFetchConfig} [config] - Configurations for timeout and queuing.
   * @returns {Promise<TFetchResponse<TResponseData | undefined>>} The fetch response object.
   */
  const fetcher = async <
    TResponseData,
    TValidationErrorField extends string = string,
    TErrorCode extends string = string,
  >(
    url: string | URL,
    options?: RequestInit,
    config?: TFetchConfig
  ): Promise<
    TFetchResponse<TResponseData | undefined, TValidationErrorField, TErrorCode>
  > => {
    const fetchUrl = /^http/i.test(url.toString())
      ? url
      : [connContext.url, url.toString().replace(/^\//i, '')].join('/');

    const combinedOptions = {
      ...options,
      credentials: 'include' as RequestCredentials,
      headers: {
        ...(options?.method?.toUpperCase() !== 'GET'
          ? { 'Content-Type': 'application/json' }
          : {}),
        ...connContext.headers,
        ...(options?.headers ?? {}),
      },
    };

    const onBeforeArgs: TOnBeforeFetchArgs = {
      url: fetchUrl,
      options: combinedOptions,
      config,
    };

    if (connContext.onBefore) {
      connContext.onBefore(onBeforeArgs);
    }

    const controller = new AbortController();

    const timeoutId = setTimeout(
      () => controller.abort(),
      config?.timeout ?? connContext.config?.timeout ?? 10000 // Default timeout is 10 seconds
    );

    // Execute fetch request with the controller signal for cancellation
    const response = await fetch(encodeURI(fetchUrl.toString()), {
      ...combinedOptions,
      signal: controller.signal,
    }).catch(() => new Response(JSON.stringify({}), { status: 500 }));

    clearTimeout(timeoutId); // Clear timeout once fetch completes

    const data = (await response.json()) as
      | TResponseBody<
          TResponseData | undefined,
          TValidationErrorField,
          TErrorCode
        >
      | undefined;

    const fetchResponse: TFetchResponse<
      TResponseData | undefined,
      TValidationErrorField,
      TErrorCode
    > = {
      data,
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
    };

    const onAfterArgs: TOnAfterFetchArgs = {
      url: response.url,
      response: fetchResponse,
      headers: response.headers,
    };

    if (connContext.onAfter) {
      connContext.onAfter(onAfterArgs);
    }

    return fetchResponse;
  };

  return fetcher;
};

export { useFetcher };
