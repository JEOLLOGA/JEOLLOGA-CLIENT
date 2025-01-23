const debounce = <T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number,
): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout> | null = null; // 명확한 타입 지정
  const callbackRef = callback; // 최신 콜백을 참조하는 변수

  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callbackRef(...args); // 최신 callback 호출
    }, delay);
  };
};

export default debounce;
