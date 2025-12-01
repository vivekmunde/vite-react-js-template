import { AlertTriangleIcon } from 'lucide-react';
import React from 'react';
import { DataTestId } from './data-test-id';
import { Result, ResultIcon, ResultTitle } from './result';

class ErrorBoundary<TProps> extends React.Component<
  TProps & {
    fallback?: React.ReactNode;
    fallbackSize?: 'default' | 'sm' | 'lg';
    children: React.ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError?: (error: any, info: any) => void;
  },
  { hasError: boolean }
> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentDidCatch(error: any, info: any) {
    console.error(error);
    console.error(info);

    this.props.onError?.(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <DataTestId value="error-boundary">
            <Result variant="destructive">
              <ResultIcon>
                <AlertTriangleIcon />
              </ResultIcon>
              <ResultTitle>Some error occurred!</ResultTitle>
            </Result>
          </DataTestId>
        )
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
