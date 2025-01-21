import { useEffect, useRef, useState } from 'react';

const useScrollTracker = (sections: string[], headerHeight: number = 0) => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const isClicked = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClicked.current) return;

      const scrollPosition = window.scrollY + headerHeight;
      let newIndex = -1;

      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;

        // 현재 스크롤 위치에 완전히 포함된 섹션을 찾음
        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          newIndex = index;
        }
      });

      const pageBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (pageBottom) {
        newIndex = sections.length - 1;
      }

      if (newIndex !== -1 && newIndex !== scrollIndex) {
        setScrollIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections, headerHeight, scrollIndex]);

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
