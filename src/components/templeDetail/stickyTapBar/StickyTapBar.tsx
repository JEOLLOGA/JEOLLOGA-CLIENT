import { useEffect, useRef, useState, ReactNode } from 'react';

import stickyTapBar from './stickyTapBar.css';

interface StickyTapBarProps {
  children: ReactNode;
}

const StickyTapBar = ({ children }: StickyTapBarProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const [initialOffsetTop, setInitialOffsetTop] = useState(462);
  const tapBarRef = useRef<HTMLDivElement>(null);

  console.log(initialOffsetTop);
  useEffect(() => {
    if (tapBarRef.current) {
      setInitialOffsetTop(tapBarRef.current.getBoundingClientRect().top);
    }
  }, []);
  console.log(initialOffsetTop);

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
