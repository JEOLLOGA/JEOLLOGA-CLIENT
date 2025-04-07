'use client';

import useScrollToTop from '@hooks/useScrollToTop';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider as JotaiProvider } from 'jotai';
import { ReactNode } from 'react';
import GTMProvider from 'src/gtm/GTMProvider';
import queryClient from 'src/queryClient';

export default function ClientProviders({ children }: { children: ReactNode }) {
  useScrollToTop();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GTMProvider>
        <JotaiProvider>
          <main style={{ margin: '0 auto', width: '37.5rem', minHeight: '100vh' }}>{children}</main>
        </JotaiProvider>
      </GTMProvider>
    </QueryClientProvider>
  );
}
