'use client';

import { Button } from '@carbon/react';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  // Function to log the error to an external service such as Sentry
  const logErrorToService = (error) => {
    console.error('Logged error:', error); // Placeholder for error logging service
  };

  const handleRetry = () => {
    logErrorToService(error);
    // Call resetErrorBoundary() to reset the error boundary and retry the render.
    resetErrorBoundary();
  };

  return (
    <div role="alert">
      <h2>Oops, something went wrong.</h2>
      <p>{error.message || 'An unexpected error occurred.'}</p>
      <Button onClick={handleRetry} kind="primary">
        Retry
      </Button>
      <p>If the issue persists, please contact support.</p>
    </div>
  );
}

export default function ErrorBoundaryWrapper({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
}