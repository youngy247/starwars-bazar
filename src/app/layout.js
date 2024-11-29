import React from 'react';
import './globals.scss';

import { Providers } from './providers';

export const metadata = {
  title: 'Starwars Bazaar - Buy Starships and More!',
  description:
    'Explore and buy starships, vehicles, and other iconic items from the Star Wars universe at Starwars Bazaar.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
