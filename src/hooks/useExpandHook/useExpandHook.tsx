import { useState, useEffect, RefObject } from 'react';

const useExpandHook = (contentRef: RefObject<HTMLElement>) => {
  const [isAppeared, setIsAppeared] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const contentElement = contentRef.current;
    if (contentElement) {
      setIsAppeared(contentElement.scrollHeight > contentElement.clientHeight);
    }
  }, [contentRef]);

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return {
    isAppeared,
    isExpanded,
    handleToggleExpand,
  };
};

export default useExpandHook;
