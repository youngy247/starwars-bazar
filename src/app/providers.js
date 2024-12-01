'use client';

import { Content, Theme } from '@carbon/react';
import React from 'react';

import AppHeader from '@/components/AppHeader/AppHeader';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g100">
        <AppHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
