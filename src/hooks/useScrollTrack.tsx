'use client';
import { useEffect, useRef, useState } from 'react';

const useScrollTracker = (
  sections: string[],
  headerHeight: number = 0,
  scrollContainer?: HTMLElement | null,
) => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const isClicked = useRef(false);

  useEffect(() => {
    const container = scrollContainer ?? window;

    const getScrollTop = () =>
      container instanceof Window ? container.scrollY : container.scrollTop;

    const getElement = (id: string): HTMLElement | null => {
      return container instanceof Window
        ? document.getElementById(id)
        : (container.querySelector(`#${id}`) as HTMLElement | null);
    };

    const handleScroll = () => {
      if (isClicked.current) return;

      const scrollPosition = getScrollTop() + headerHeight;
      let newIndex = -1;

      sections.forEach((sectionId, index) => {
        const element = getElement(sectionId);
        if (!element) return;

        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;

        // 현재 스크롤 위치에 완전히 포함된 섹션을 찾음
        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          newIndex = index;
        }
      });

      const pageBottom =
        container instanceof Window
          ? window.innerHeight + window.scrollY >= document.body.offsetHeight
          : container.scrollTop + container.clientHeight >= container.scrollHeight;

      if (pageBottom) {
        newIndex = sections.length - 1;
      }

      if (newIndex !== -1 && newIndex !== scrollIndex) {
        setScrollIndex(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [sections, scrollContainer, headerHeight, scrollIndex]);

  const handleClick = (index: number) => {
    isClicked.current = true;
    setScrollIndex(index);

    setTimeout(() => {
      isClicked.current = false;
    }, 1000);
  };

  return { scrollIndex, handleClick };
};

export default useScrollTracker;
