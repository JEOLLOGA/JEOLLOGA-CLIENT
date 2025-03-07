import { useCallback } from 'react';

const useMoveScroll = (type: string, headerHeight: number = 0) => {
  const scrollToElement = useCallback(
    async (sectionIds: string[], activeIndex: number): Promise<void> => {
      const targetElement = document.getElementById(sectionIds[activeIndex]);

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          type === 'detail' && elementPosition < 0
            ? window.scrollY + elementPosition - headerHeight + 50
            : window.scrollY + elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        await new Promise<void>((resolve) => {
          setTimeout(resolve, 500);
        });
      }
    },
    [type, headerHeight],
  );

  return scrollToElement;
};

export default useMoveScroll;
