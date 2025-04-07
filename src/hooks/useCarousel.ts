'use client';
import { useState, useRef } from 'react';

interface UseCarouselProps {
  itemCount: number; // 캐러셀 항목 개수
  moveDistance: number; // 이동 거리
}

const useCarousel = ({ itemCount, moveDistance }: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transX, setTransX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleDragChange = (deltaX: number) => {
    setTransX(deltaX);
  };

  const handleDragEnd = (deltaX: number) => {
    const maxIndex = itemCount - 1;

    if (deltaX < -85) {
      // 왼쪽으로 드래그
      setCurrentIndex(currentIndex + 1 > maxIndex ? maxIndex : currentIndex + 1);
    } else if (deltaX > 85) {
      // 오른쪽으로 드래그
      setCurrentIndex(currentIndex - 1 < 0 ? 0 : currentIndex - 1);
    }
    setTransX(0);
  };

  const transformStyle = {
    transform: `translateX(${-currentIndex * moveDistance + transX}px)`,
    transition: 'transform 200ms ease-in-out 0s',
  };

  return {
    currentIndex,
    carouselRef,
    transformStyle,
    handleDragChange,
    handleDragEnd,
  };
};

export default useCarousel;
