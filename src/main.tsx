import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'jotai';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from 'src/router/Router.tsx';

import '@styles/reset.css.ts';
import '@styles/global.css.ts';
import '@styles/fonts.css.ts';
import '@dotlottie/player-component';

import queryClient from './queryClient.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider>
        <Router />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
);
