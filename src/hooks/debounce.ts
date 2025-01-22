const debounce = <T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number,
): ((...args: Parameters<T>) => void) => {
  let timer: NodeJS.Timeout | null = null;
  const callbackRef = { current: callback }; // 최신 callback을 참조하는 객체

  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callbackRef.current(...args); // 최신 callback 호출
    }, delay);
  };
};

export default debounce;
