import { ClickEvent } from '../types';

const useEventLogger = (screen: string) => {
  const logClickEvent = (
    event: ClickEvent['event'],
    additionalFields?: Omit<ClickEvent, 'event' | 'screen'>,
  ) => {
    if (!window.dataLayer) return;

    const eventObj: ClickEvent = {
      event,
      screen,
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
