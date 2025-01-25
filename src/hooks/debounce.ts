const debounce = <T extends (...args: Parameters<T>) => void>(
  callback: T,
  delay: number,
): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer); // 기존 타이머 제거
    timer = setTimeout(() => {
      callback(...args); // 최신 callback 호출
    }, delay);
  };
};

export default debounce;
