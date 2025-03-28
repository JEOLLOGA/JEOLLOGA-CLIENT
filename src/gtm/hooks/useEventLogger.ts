import { ClickEvent } from '../types';

const useEventLogger = (screen: string) => {
  const defaultUrl = typeof window !== 'undefined' ? window.location.pathname : '';

  const logClickEvent = (
    event: ClickEvent['event'],
    additionalFields?: Omit<ClickEvent, 'event' | 'screen_name'>,
  ) => {
    if (!window.dataLayer) return;

    const eventObj: ClickEvent = {
      event,
      screen,
      url: defaultUrl,
      ...additionalFields,
    };

    if (process.env.NODE_ENV === 'development') {
      console.log('[GTM] logClickEvent:', eventObj);
    }

    window.dataLayer.push(eventObj);
  };

  return { logClickEvent };
};

export default useEventLogger;
