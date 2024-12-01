import ErrorBoundaryWrapper from '@/components/ErrorBoundaryWrapper/ErrorBoundaryWrapper';
import React from 'react';
import BazarPage from './home/page';

export default function Page() {
  return (
    <ErrorBoundaryWrapper>
      <BazarPage />
    </ErrorBoundaryWrapper>
  );
}
