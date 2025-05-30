import * as React from 'react';
import {
  ErrorBoundary as ReactErrorBoundary,
  type FallbackProps,
} from 'react-error-boundary';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <Alert variant="destructive">
      <AlertTitle>Error occurred, please try again.</AlertTitle>
      <AlertDescription>{error.message}</AlertDescription>
      <AlertDescription>Forwarding the error the the analytics service right now...</AlertDescription>
      <AlertDescription><a href="mailto:google@google.com">Contaxt us</a></AlertDescription>
    </Alert>
  );
};

export function ErrorBoundary({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
}
