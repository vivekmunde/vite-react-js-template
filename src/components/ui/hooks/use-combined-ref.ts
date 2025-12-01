import * as React from 'react';
import { useImperativeHandle, useRef } from 'react';

/**
 * A hook to merge an internal ref with a forwarded ref.
 * Useful for exposing the internal ref to the parent component.
 *
 * @param forwardedRef The ref passed from React.forwardRef
 * @returns The internal ref usable within the component
 */
const useCombinedRef = <T>(forwardedRef: React.Ref<T>) => {
  const internalRef = useRef<T>(null);
  useImperativeHandle(forwardedRef, () => internalRef.current!, []);
  return internalRef;
};

export { useCombinedRef };
