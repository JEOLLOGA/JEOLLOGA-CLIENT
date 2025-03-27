import { useState, useEffect, RefObject } from 'react';
import useEventLogger from 'src/gtm/hooks/useEventLogger';

const useExpandHook = (contentRef: RefObject<HTMLElement>) => {
  const [isAppeared, setIsAppeared] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { logClickEvent } = useEventLogger('info');

  useEffect(() => {
    const contentElement = contentRef.current;
    if (contentElement) {
      setIsAppeared(contentElement.scrollHeight > contentElement.clientHeight);
    }
  }, [contentRef]);

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
    logClickEvent(`click_${isExpanded ? 'fold' : 'more'}`);
  };

  return {
    isAppeared,
    isExpanded,
    handleToggleExpand,
  };
};

export default useExpandHook;
