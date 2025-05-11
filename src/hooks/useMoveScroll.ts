import { useCallback } from 'react';

const useMoveScroll = (headerHeight: number = 0) => {
  const scrollToElement = useCallback(
    async (
      sectionIds: string[],
      activeIndex: number,
      scrollContainer?: HTMLElement | null,
    ): Promise<void> => {
      const container = scrollContainer ?? window;

      const targetElement =
        container instanceof Window
          ? document.getElementById(sectionIds[activeIndex])
          : (container.querySelector(`#${sectionIds[activeIndex]}`) as HTMLElement);

      if (!targetElement) return;

      const offsetTop =
        container instanceof Window
          ? targetElement.getBoundingClientRect().top + window.scrollY
          : targetElement.offsetTop;

      const scrollTop = offsetTop - headerHeight;

      if (container instanceof Window) {
        window.scrollTo({ top: scrollTop, behavior: 'smooth' });
      } else {
        container.scrollTo({ top: scrollTop, behavior: 'smooth' });
      }

      await new Promise<void>((resolve) => {
        setTimeout(resolve, 1000);
      });
    },
    [headerHeight],
  );

  return scrollToElement;
};

export default useMoveScroll;
