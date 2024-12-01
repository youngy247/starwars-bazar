'use client';

import {
  Header,
  HeaderContainer,
  HeaderName,
  SkipToContent,
} from '@carbon/react';
import React from 'react';

const AppHeader = () => (
  <HeaderContainer
    render={() => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />

        <HeaderName prefix="Starwars">Bazar</HeaderName>
      </Header>
    )}
  />
);

export default AppHeader;
