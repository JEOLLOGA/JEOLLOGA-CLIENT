import { DETAIL_TAPBAR_HEIGHT } from '@constants/constants';
import { useEffect, useRef, useState, ReactNode } from 'react';

import stickyTapBar from './stickyTapBar.css';

interface StickyTapBarProps {
  children: ReactNode;
}

const StickyTapBar = ({ children }: StickyTapBarProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const tapBarRef = useRef<HTMLDivElement>(null);
  const initialOffsetTop = DETAIL_TAPBAR_HEIGHT;

  useEffect(() => {
    const handleScroll = () => {
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
