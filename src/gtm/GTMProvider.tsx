import { useEffect, ReactNode } from 'react';

import { DataLayerEvent } from './types';

const GTM_ID = 'GTM-PW9GZMJG';

interface GTMProviderProps {
  children: ReactNode;
}

const GTMProvider = ({ children }: GTMProviderProps) => {
  useEffect(() => {
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    window.dataLayer.push({
      event: 'gtm.js',
      'gtm.start': new Date().getTime(),
    } as DataLayerEvent);

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(script);
  }, []);

  return <>{children}</>;
};

export default GTMProvider;
