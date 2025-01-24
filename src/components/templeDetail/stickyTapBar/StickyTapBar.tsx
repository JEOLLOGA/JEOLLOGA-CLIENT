import { useEffect, useRef, useState, ReactNode } from 'react';

import stickyTapBar from './stickyTapBar.css';

interface StickyTapBarProps {
  children: ReactNode;
}

const StickyTapBar = ({ children }: StickyTapBarProps) => {
  const tapBarRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [initialOffsetTop, setInitialOffsetTop] = useState<number | null>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (tapBarRef.current) {
        setInitialOffsetTop(tapBarRef.current.getBoundingClientRect().top);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (initialOffsetTop === null) return;

      const scrollTop = window.scrollY;
      setIsSticky(scrollTop >= initialOffsetTop - 62);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialOffsetTop]);

  return (
    <div ref={tapBarRef} className={`${isSticky ? stickyTapBar : ''}`}>
      {children}
    </div>
  );
};

export default StickyTapBar;
